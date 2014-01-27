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
    (draw [_ _ {:keys [x] :as mouse} _]
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

(defn create-graphics
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      {:pg (canvas/create-graphics 400 200)})
    (draw [_ {:keys [pg width height]} {:keys [x y]} _]
      (canvas/fill 0 12)
      (canvas/rect 0 0 width height)
      (canvas/fill 255)
      (canvas/no-stroke)
      (canvas/ellipse x y 60 60)
      (canvas/begin-draw pg)
      (canvas/background pg 51)
      (canvas/no-fill pg)
      (canvas/stroke pg 255)
      (canvas/ellipse pg (- x 120) (- y 60) 60 60)
      (canvas/end-draw pg)
      ;; ^:arg metadata is added to disambiguate the first argument and ensure
      ;; it is recognized as argument instead of the object upon which the
      ;; function is being called
      (canvas/image ^:arg pg 120 60))))

(defn draw-polygon
  [x y radius npoints]
  (let [TWO_PI (canvas/TWO_PI)
        angle (/ TWO_PI npoints)]
    (canvas/begin-shape)
    (loop [a 0]
      (when (< a TWO_PI)
        (let [sx (+ x (* (Math/cos a) radius))
              sy (+ y (* (Math/sin a) radius))]
          (canvas/vertex sx sy)
          (recur (+ a angle)))))
    (canvas/end-shape (canvas/CLOSE))))

(defn polygon
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360))
    (draw [_ {:keys [frame-count width height]} _ _]
      (canvas/background 102)
      (canvas/push-matrix)
      (canvas/translate (* 0.2 width) (* 0.5 height))
      (canvas/rotate (/ frame-count 200.0))
      (draw-polygon 0 0 82 3)
      (canvas/pop-matrix)
      ;;
      (canvas/push-matrix)
      (canvas/translate (* 0.5 width) (* 0.5 height))
      (canvas/rotate (/ frame-count 50.0))
      (draw-polygon 0 0 80 20)
      (canvas/pop-matrix)
      ;;
      (canvas/push-matrix)
      (canvas/translate (* 0.8 width) (* 0.5 height))
      (canvas/rotate (/ frame-count -100.0))
      (draw-polygon 0 0 70 7)
      (canvas/pop-matrix))))

(defn ^:export -main []
  (let [container (node [:div.container])]
    (dom/append! js/document.body container)
    (om/root {:examples [{:title "pie chart"
                          :f pie-chart
                          :animate false}
                         {:title "bezier"
                          :f bezier}
                         {:title "create graphics"
                          :f create-graphics}
                         {:title "polygon"
                          :f polygon}]
              :active nil}
      (fn [data owner]
        (let [code (html (into [:pre {:style {:width 640
                                              :border-radius "0px"
                                              :border "none"}}]
                               (:code (:active data))))]
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
                         (for [{:keys [title f code] :as example}
                               (:examples data)]
                           [:li
                            [:a {:style {:cursor "pointer"}
                                 :on-click
                                 (fn [e]
                                   (om/update! data assoc :active example))}
                             [:h5 title]]])]]
                       [:div.col-sm-10
                        (if (:active data)
                          (om/build canvas/canvas data)
                          [:div {:style {:width 640
                                         :height 360
                                         :background-color "#ddd"
                                         :margin-bottom "5px"}}
                           [:blockquote.text-center
                            {:style {:padding-top "1em"}}
                            [:p "Click an example on the left to see it \n
                                 in action."]]])
                        (if-let [title (:title (:active data))]
                          (->>
                           (match [title]
                             ["pie chart"]
                             (runner/htmlize "draw-pie-chart" "pie-chart")
                             ["bezier"]
                             (runner/htmlize "bezier")
                             ["create graphics"]
                             (runner/htmlize "create-graphics")
                             ["polygon"]
                             (runner/htmlize "draw-polygon" "polygon"))
                           (concat
                            ["(" [:span.keyword "ns"] " my.namespace\n  "
                             [:span.constant "(:require"]
                             " [processing.core " [:span.constant ":as"]
                             " canvas " [:span.constant ":include-macros"]
                             " true]))\n\n"])
                           (into [:pre {:style {:width 640
                                                :border-radius "0px"
                                                :border "none"}}]
                                 ))
                          (into [:pre {:style {:width 640
                                         :border-radius "0px"
                                         :border "none"}}]
                                ["(" [:span.keyword "ns"] " my.namespace\n  "
                                 [:span.constant "(:require"]
                                 " [processing.core " [:span.constant ":as"]
                                 " canvas " [:span.constant ":include-macros"]
                                 " true]))"]))]]]])))))
      container)))
