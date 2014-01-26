(ns runner
  (:require
   [clojure.browser.repl]
   [processing.core :as canvas :include-macros true]
   [dommy.core :as dom])
  (:require-macros
   [dommy.macros :refer [node sel1]]))

(defn reset []
  (js/location.reload true))

(defn bezier
  [processing]
  (reify
    canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/stroke 255)
      (canvas/no-fill))
    (draw [_ {:keys [x] :as mouse} _]
      (canvas/background 0)
      (loop [i 0]
        (when (< i 200)
          (canvas/bezier (- x (/ i 2.0)) (+ 40 i) 410 20 440 300
                         (- 240 (/ i 16.0)) (+ 300 (/ i 8.0)))
          (recur (+ i 20)))))))

(defn ^:export -main []
  (canvas/canvas {}
    bezier
    (let [content (node [:div#content.container])]
      (dom/append! js/document.body content))))
