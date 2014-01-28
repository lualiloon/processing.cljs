(ns processing.examples
  (:require [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [dommy.core :as dom]
            [processing.core :as canvas :include-macros true])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel sel1 node deftemplate]]))

(enable-console-print!)

(defn bezier
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/background 0))
    (draw [_ _ _ _])))

(defn create-graphics
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/background 50))
    (draw [_ _ _ _])))

(defn ^:export -main []
  (om/root {:examples [{:title "bezier" :f bezier}
                       {:title "create graphics" :f create-graphics}]}
    (fn [data owner]
      (om/component
        (html [:div.container
               [:h1 "processing.cljs"]
               [:div.row
                [:div.col-sm-2
                 [:ul
                  (for [example (:examples data)]
                    [:li {:on-click
                          #(om/transact! data :active (constantly example))}
                     (:title example)])]]
                [:div.col-sm-10
                 (when-let [active (:active data)]
                   (om/build (canvas/canvas
                               :title (:title active)
                               :f (:f active)) data))]]])))
    (sel1 :#content)))
