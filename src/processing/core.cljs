(ns processing.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true])
  (:require-macros [processing.core :as canvas]))

(def processing-state (atom {:active nil}))

(defprotocol ICanvas
  (setup [canvas])
  (draw [canvas state mouse keyboard]))

(defprotocol IKeyPressed
  (key-pressed [canvas keyboard]))

(defprotocol IKeyReleased
  (key-released [canvas keyboard]))

(defprotocol IKeyTyped
  (key-typed [canvas keyboard]))

(defprotocol IMouseOut
  (mouse-out [canvas mouse]))

(defprotocol IMouseOver
  (mouse-over [canvas mouse]))

(defprotocol IMouseDragged
  (mouse-dragged [canvas mouse]))

(defprotocol IMousePressed
  (mouse-pressed [canvas mouse]))

(defprotocol IMouseReleased
  (mouse-released [canvas mouse]))

(defprotocol IMouseClicked
  (mouse-clicked [canvas mouse]))

(defprotocol IMouseScrolled
  (mouse-scrolled [canvas mouse]))

(defprotocol IMouseMoved
  (mouse-moved [canvas mouse]))

(defprotocol ITouchStart
  (touch-start [canvas]))

(defprotocol ITouchEnd
  (touch-end [canvas]))

(defprotocol ITouchMove
  (touch-move [canvas]))

(defprotocol ITouchCancel
  (touch-cancel [canvas]))

(extend-protocol IMouseMoved
  default
  (mouse-moved [_ _] nil))

(extend-protocol IMouseClicked
  default
  (mouse-clicked [_ _] nil))

(extend-protocol IMousePressed
  default
  (mouse-pressed [_ _] nil))

(extend-protocol IMouseReleased
  default
  (mouse-released [_ _] nil))

(extend-protocol IMouseDragged
  default
  (mouse-dragged [_ _] nil))

(extend-protocol IMouseOut
  default
  (mouse-out [_ _] nil))

(extend-protocol IMouseOver
  default
  (mouse-over [_ _] nil))

(extend-protocol IKeyPressed
  default
  (key-pressed [_ _] nil))

(extend-protocol IKeyReleased
  default
  (key-released [_ _] nil))

(extend-protocol IKeyTyped
  default
  (key-typed [_ _] nil))

(defn mouse
  [processing]
  {:x (.-mouseX processing)
   :y (.-mouseY processing)
   :pX (.-pmouseX processing)
   :pY (.-pmouseY processing)
   :button (.-mouseButton processing)})

(defn keyboard
  [processing]
  {:key (str (.-key processing))
   :key-code (.-keyCode processing)})

(def raf nil)

(defn render []
  (canvas/draw)
  (set! raf (js/requestAnimationFrame render)))

(defn start-animation []
  (when-not raf
    (render)))

(defn stop-animation []
  (when raf
    (js/cancelAnimationFrame raf)
    (set! raf nil)))

(defn setup-and-draw
  [data owner node]
  (let [{:keys [title f animate]} (:active data)
        state (atom {})
        processing (js/Processing. node)
        canvas (f processing state)]

    (assert (satisfies? ICanvas canvas)
            "Reified canvas must implement ICanvas")
    
    (reset! processing-state
            {:active (clojure.string/replace title #" " "-")})
    
    (set! (.-name processing) (clojure.string/replace title #" " "-"))
    (set! (.-draw processing)
          (fn []
            (draw canvas
                  (merge (om/get-state owner)
                         @state
                         {:width (.-width processing)
                          :height (.-height processing)
                          :focused (.-focused processing)
                          :online (.-online processing)
                          :screen (.-screen processing)
                          :frame-count
                          (set! (.-frameCount processing)
                                (inc (.-frameCount processing)))})
                  (mouse processing)
                  (keyboard processing))))
    (set! (.-setup processing) (fn [] (setup canvas)))
    (set! (.-keyTyped processing)
          (fn [] (key-typed canvas (keyboard processing))))
    (set! (.-keyReleased processing)
          (fn [] (key-released canvas (keyboard processing))))
    (set! (.-keyPressed processing)
          (fn [] (key-pressed canvas (keyboard processing))))
    (set! (.-mouseReleased processing)
          (fn [] (mouse-released canvas (mouse processing))))
    (set! (.-mousePressed processing)
          (fn [] (mouse-pressed canvas (mouse processing))))
    (set! (.-mouseOut processing)
          (fn [] (mouse-out canvas (mouse processing))))
    (set! (.-mouseOver processing)
          (fn [] (mouse-over canvas (mouse processing))))
    (set! (.-mouseClicked processing)
          (fn [] (mouse-clicked canvas (mouse processing))))
    (set! (.-mouseDragged processing)
          (fn [] (mouse-dragged canvas (mouse processing))))
    (set! (.-mouseScrolled processing)
          (fn [] (mouse-scrolled canvas (mouse processing))))
    (set! (.-mouseMoved processing)
          (fn [] (mouse-moved canvas (mouse processing))))
    (set! (.-touchStart processing) (fn [] (touch-start canvas)))
    (set! (.-touchEnd processing) (fn [] (touch-end canvas)))
    (set! (.-touchMove processing) (fn [] (touch-move canvas)))
    (set! (.-touchCancel processing) (fn [] (touch-cancel canvas)))
    
    (reset! state (setup canvas))

    (if (false? animate)
      (canvas/draw)
      (if (exists? js/requestAnimationFrame)
        (start-animation)
        ((fn render []
           (canvas/draw)
           (js/setTimeout 16 render)))))))

(defn canvas
  [data owner]
  (let [{:keys [title f animate]} (:active data)]
    (reify
      om/IDidMount
      (did-mount [_ node]
        (setup-and-draw data owner node))
      om/IDidUpdate
      (did-update [_ _ _ _]
        (when-let [node (om/get-node owner "canvas")]
          (stop-animation)
          (setup-and-draw data owner node)))
      om/IRenderState
      (render-state [_ state]
        (html [:canvas {:id (clojure.string/replace title #" " "-")
                        :ref "canvas"}])))))
