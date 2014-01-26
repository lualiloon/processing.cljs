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
   [runner :as runner]
   [cljs.core.match.macros :refer [match]]))

(defn reset []
  (js/location.reload true))

(defn bezier
  [processing state]
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

(defn draw-pie-chart
  [diameter {:keys [angles width height] :as state}]
  (loop [i 0 last-angle 0]
    (when (< i (count angles))
      (canvas/fill (canvas/map i 0 (count angles) 0 255))
      (canvas/arc (/ width 2) (/ height 2) diameter diameter last-angle
                  (+ last-angle (canvas/radians (nth angles i))))
      (recur (inc i) (+ last-angle (canvas/radians (nth angles i)))))))

(defn pie-chart
  [processing state]
  (reify
    canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/no-stroke)
      {:angles [30 10 45 35 60 38 75 67]})
    (draw [_ state _ _]
      (canvas/background 100)
      (draw-pie-chart 300 state))))

(defn ^:export -main []
  (let [container (node [:div.container])]
    (dom/append! js/document.body container)
    (om/root {:examples [{:title "pie chart"
                          :f pie-chart
                          :animate false
                          :code (runner/htmlize draw-pie-chart pie-chart)}
                         {:title "bezier"
                          :f bezier
                          :code (runner/htmlize bezier)}]
              :active nil}
      (fn [data owner]
        (reify
          om/IRenderState
          (render-state [_ _]
            (html [:div
                   [:h1 "processing.cljs"]
                   [:p "thin ClojureScript veneer over "
                    [:a {:href "http://www.processingjs.org"}
                     "processing.js"]]
                   [:div#content
                    [:h3 "usage "
                     [:small "examples based on: "
                      [:a {:href "http://processing.org/examples"}
                       "http://processing.org/examples"]]]
                    
                    [:div.row
                     [:div.col-sm-2
                      [:ul.list-unstyled
                       (for [{:keys [title f] :as example} (:examples data)]
                         [:li
                          [:a {:style {:cursor "pointer"}
                               :on-click
                               (fn [e]
                                 (om/update! data assoc :active example))}
                           [:h5 title]]])]]
                     [:div.col-sm-10
                      (if (:active data)
                        (om/build canvas/canvas data)
                        [:canvas {:style {:width 640
                                          :height 360
                                          :background-color "#000"}}])
                      [:pre {:style {:width 640
                                     :border-radius "0px"
                                     :border "none"}}]]]]]))))
      container)))
