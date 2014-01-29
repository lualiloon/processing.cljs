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

(defn transparency
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (go (<! (canvas/preload "/img/moonwalk.jpg"))
          (canvas/size 640 360)
          (canvas/no-fill)
          (canvas/stroke 255)
          {:img (canvas/load-image "/img/moonwalk.jpg")
           :offset 0
           :easing 0.5}))
    (draw [_ {:keys [img offset easing] :as state} {:keys [x]} _]
      (canvas/image img 0 0)
      (let [dx (- (- x (/ (.-width img) 2)) offset)
            offset (+ offset (* dx easing))]
        (canvas/tint 255 127)
        (canvas/image img offset 0)
        {:offset offset}))))

(defn draw-word
  [word size]
  )

(defn word-cloud
  []
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/color-mode (canvas/HSB) (canvas/TWO_PI) 1 1 1)
      (canvas/rect-mode (canvas/CORNER))
      (canvas/background (canvas/color 0 0 1))
      (canvas/smooth)
      {:words ["hello" "there" "my" "love"]
       :min-size 48
       :max-size 192
       :least nil
       :most nil})
    (draw [_ {:keys [words min-size max-size least most]} _ _]
      (go-loop [n 0]
        (when (< n (count words))
          (let [relsize
                (canvas/map (count (nth words n)) last most min-size max-size)]
            (draw-word (nth words n) relsize))
          (recur (inc n)))))))

(defn ^:export -main []
  (om/root {:examples [{:title "bezier" :f bezier}
                       {:title "create graphics" :f create-graphics}
                       {:title "transparency" :f transparency}
                       {:title "word cloud" :f word-cloud :animate false}]}
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
