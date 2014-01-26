(ns runner
  (:require
   [clojure.browser.repl]
   [processing.core :as canvas :include-macros true]
   [dommy.core :as dom])
  (:require-macros
   [dommy.macros :refer [node sel1]]))

(enable-console-print!)

(defn reset []
  (js/location.reload true))

(defn ^:export -main []
  (canvas/canvas {}
    (fn [processing]
      (reify
        canvas/ICanvas
        (setup [_]
          (canvas/size 200 200))
        (draw [_])
        canvas/IMouseOut
        (mouse-out [_ mouse]
          (canvas/background 140 50 80))
        canvas/IMouseOver
        (mouse-over [_ mouse]
          (canvas/background 50 80 140))))
    (let [content (node [:div#content.container])]
      (dom/append! js/document.body content))))
