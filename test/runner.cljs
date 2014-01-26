(ns runner
  (:require
   [clojure.browser.repl]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer [html] :include-macros true]
   [processing.core :as canvas :include-macros true]
   [cljs.core.match]
   [dommy.core :as dom])
  (:require-macros
   [dommy.macros :refer [node sel1]]
   [cljs.core.match.macros :refer [match]]))

(defn reset []
  (js/location.reload true))

(defn bezier
  []
  (canvas/canvas {}
    (fn [processing state]
      (reify
        canvas/ICanvas
        (setup [_]
          (canvas/size 640 360)
          (canvas/stroke 255)
          (canvas/no-fill))
        (draw [_ _ {:keys [x] :as mouse} {:keys [key key-code] :as kb}]
          (canvas/background 0)
          (loop [i 0]
            (when (< i 200)
              (canvas/bezier (- x (/ i 2.0)) (+ 40 i) 410 20 440 300
                             (- 240 (/ i 16.0)) (+ 300 (/ i 8.0)))
              (recur (+ i 20)))))))
    (sel1 :#content)))

(defn draw-pie-chart
  [diameter {:keys [angles width height] :as state}]
  (loop [i 0 last-angle 0]
    (when (< i (alength angles))
      (canvas/fill (canvas/map i 0 (alength angles) 0 255))
      (canvas/arc (/ width 2) (/ height 2) diameter diameter last-angle
                  (+ last-angle (canvas/radians (aget angles i))))
      (recur (inc i) (+ last-angle (canvas/radians (aget angles i)))))))

(defn pie-chart
  []
  (canvas/canvas {:angles #js [30 10 45 35 60 38 75 67]}
    (fn [processing state]
      (reify
        canvas/ICanvas
        (setup [_]
          (canvas/size 640 360)
          (canvas/no-stroke)
          (canvas/no-loop))
        (draw [_ state _ _]
          (canvas/background 100)
          (draw-pie-chart 300 state))))
    (sel1 :#content)
    :animate false))

(defn ^:export -main []
  (let [container (node [:div.container])]
    (dom/append! js/document.body container)

    (om/root {:examples [{:title "pie chart"
                          :f pie-chart}
                         {:title "bezier"
                          :f bezier}
                         {:title "bezier"
                          :f bezier}
                         {:title "bezier"
                          :f bezier}]}
      (fn [data owner]
        (om/component
          (html [:div.container
                 [:h1 "processing.cljs"]
                 [:ul.list-unstyled.pull-left
                  (for [{:keys [title f]} (:examples data)]
                    [:li
                     [:a {:href (->> (clojure.string/replace title #"\s" "_")
                                     (str "#" ))
                          :on-click (fn [e]
                                      (f))}
                      [:h3 title]]])]
                 [:div#content.pull-right]])))
      container)))
