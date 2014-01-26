(ns runner
  (:require
   [clojure.browser.repl]
   [processing.core :as canvas :refer [canvas] :include-macros true]
   [dommy.core :as dom])
  (:require-macros
   [dommy.macros :refer [node sel1]]))

(enable-console-print!)

(defn reset []
  (js/location.reload true))

(defn ^:export -main []
  (canvas {}
    (fn [processing]
      (reify
        canvas/ICanvas
        (setup [_]
          (canvas/size 200 200))
        (draw [_])))
    (let [content (node [:div#content.container])]
      (dom/append! js/document.body content))))
