(ns processing.core
  (:require [clojure.browser.repl]
            [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [cljs.core.async.impl.protocols :refer [ReadPort]]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [dommy.core :as dom]
            [clojure.string :as str])
  (:require-macros [processing.core :as canvas]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel sel1 node deftemplate]]))

(enable-console-print!)

(def processing-state (atom {:active {:processing nil
                                      :sketch nil
                                      :title nil}}))

(defprotocol ICanvas
  (setup [canvas])
  (draw [canvas state mouse keyboard]))

(defprotocol IMouseClicked
  (mouse-clicked [canvas mouse]))

(defprotocol IMouseDragged
  (mouse-dragged [canvas mouse]))

(defprotocol IMouseMoved
  (mouse-moved [canvas mouse]))

(defprotocol IMousePressed
  (mouse-pressed [canvas mouse]))

(defprotocol IMouseReleased
  (mouse-released [canvas mouse]))

(defprotocol IMouseScrolled
  (mouse-scrolled [canvas mouse]))

(defprotocol IMouseOver
  (mouse-over [canvas mouse]))

(defprotocol IMouseOut
  (mouse-out [canvas mouse]))

(defprotocol ITouchStart
  (touch-start [canvas]))

(defprotocol ITouchEnd
  (touch-end [canvas]))

(defprotocol ITouchMove
  (touch-move [canvas]))

(defprotocol ITouchCancel
  (touch-cancel [canvas]))

(defprotocol IKeyPressed
  (key-pressed [canvas keyboard]))

(defprotocol IKeyTyped
  (key-typed [canvas keyboard]))

(defprotocol IKeyReleased
  (key-released [canvas keyboard]))

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
  [canvas]
  {:x (.-mouseX canvas)
   :y (.-mouseY canvas)
   :pX (.-pmouseX canvas)
   :pY (.-pmouseY canvas)
   :button (.-mouseButton canvas)})

(defn keyboard
  [canvas]
  {:key (str (.-key canvas))
   :key-code (.-keyCode canvas)})

(def raf nil)

(defn render [canvas]
  (canvas/draw)
  (set! (.-frameCount canvas) (inc (.-frameCount canvas)))
  (set! raf (js/requestAnimationFrame (fn [] (render canvas)))))

(defn start-animation
  [canvas]
  (when (nil? raf)
    (render canvas)))

(defn stop-animation []
  (when-not (nil? raf)
    (js/cancelAnimationFrame raf)
    (set! raf nil)
    (canvas/exit)))

(defn preload
  ([href]
     (go (let [ret (chan 1)
               img (js/Image.)
               sketch (get-in @processing-state [:active :sketch])]
           (set! (.-onload img) #(a/close! ret))
           (set! (.-src img) href)
           (aset (.. sketch -imageCache -images) href img)
           (<! ret)
           img))))

(defn setup-and-draw
  [data owner node opts]
  (let [{:keys [title f animate]} opts
        title (if (seq title) (str/replace title #" " "-") "canvas")
        state (atom {})
        processing (js/Processing. node)
        sketch (.. processing -externals -sketch)
        canvas (f processing state)]

    (assert (satisfies? ICanvas canvas)
            "Reified canvas must implement ICanvas")

    (swap! processing-state assoc-in [:active :title] title)
    (swap! processing-state assoc-in [:active :processing] processing)
    (swap! processing-state assoc-in [:active :sketch] sketch)

    (set! (.-name processing) title)
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
                          :frame-count (.-frameCount processing)})
                  (mouse processing)
                  (keyboard processing))))
    (set! (.-setup processing)
          (fn []
            (go (let [ret (setup canvas)]
                  (if (instance? ManyToManyChannel ret)
                    (reset! state (or (<! ret) {}))
                    (reset! state (or ret {})))
                  ((.-resetMatrix processing))))))
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

    (go (<! ((.-setup processing)))
        (if (false? animate)
          (canvas/draw)
          (if (exists? js/requestAnimationFrame)
            (start-animation processing)
            ((fn render []
               (canvas/draw)
               (js/setTimeout 16 render))))))))

(defn canvas
  [& {:keys [title f animate] :as opts}]
  (fn [data owner]
    (reify
      om/IDidMount
      (did-mount [_ node]
        (setup-and-draw data owner node opts))
      om/IDidUpdate
      (did-update [_ _ _ _]
        (when-let [node (om/get-node owner "canvas")]
          (stop-animation)
          (setup-and-draw data owner node opts)))
      om/IRenderState
      (render-state [_ _]
        (html [:canvas {:id (if (seq title)
                              (str/replace title #" " "-")
                              "canvas")
                        :ref "canvas"}])))))
