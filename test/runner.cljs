(ns runner
  (:require
   [clojure.browser.repl]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer [html] :include-macros true]
   [processing.core :as canvas :include-macros true]
   [cljs.core.match]
   [cljs.core.async :as a :refer [<! >! chan put! take!]]
   [dommy.core :as dom])
  (:require-macros
   [dommy.macros :refer [node sel1]]
   [runner :as runner]
   [cljs.core.async.macros :refer [go go-loop]]
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

(defn three-dee-primitives
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360 (canvas/P3D))
      (canvas/background 0)
      (canvas/lights)
      ;;
      (canvas/no-stroke)
      (canvas/push-matrix)
      (canvas/translate 130 (/ 360 2) 0)
      (canvas/rotate-y 1.25)
      (canvas/rotate-x -0.4)
      (canvas/box 100)
      (canvas/pop-matrix)
      ;;
      (canvas/no-fill)
      (canvas/stroke 255)
      (canvas/push-matrix)
      (canvas/translate 500 (* 360 0.35) -200)
      (canvas/sphere 280)
      (canvas/pop-matrix))
    (draw [_ _ _ _])))

(defn load-and-display-images
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      {:img
       (canvas/load-image "http://processing.org/examples/moonwalk.jpg")})
    (draw [_ {:keys [img height]} _ _]
      (canvas/image img 0 0)
      (canvas/image 0 (/ height 2) (/ (.-width img) 2) (/ (.-height img) 2))))
  )

(defn initialize-cells
  []
  (let [arr (make-array 128)]
    (loop [i 0]
      (when (< i 128)
        (aset arr i (make-array 72))
        (recur (inc i))))
    (loop [x 0 arr arr]
      (when (< x 128)
        (loop [y 0]
          (when (< y 72)
            (aset arr x y (if (> (rand 100) 15) 0 1))
            (recur (inc y))))
        (recur (inc x) arr)))
    arr))

(defn draw-grid
  [{:keys [width height cell-size cells alive dead]}]
  (loop [x 0]
    (when (< x (/ width cell-size))
      (loop [y 0]
        (when (< y (/ height cell-size))
          (if (== (aget cells x y) 1)
            (canvas/fill alive)
            (canvas/fill dead))
          (canvas/rect (* x cell-size) (* y cell-size) cell-size cell-size)
          (recur (inc y))))
      (recur (inc x)))))

(defn iteration
  [state]
  (let [{:keys [cells width height cell-size]} @state
        cells-buffer (aclone cells)]
    (loop [x 0]
      (when (< x (/ width cell-size))
        (let [neighbors
              (loop [y 0 neighbors 0]
                (if (< y (/ height cell-size))
                  (->> (loop [xx (dec x) neighbors neighbors]
                         (if (< xx (inc x))
                           (->> (loop [yy (dec y) neighbors neighbors]
                                  (if (< yy (inc y))
                                    (if (and (>= xx 0)
                                             (< xx (/ width cell-size))
                                             (>= yy 0)
                                             (< yy (/ height cell-size))
                                             (not (and (== xx x) (== yy y)))
                                             (== (aget cells-buffer xx yy) 1))
                                      (recur (inc yy) (inc neighbors))
                                      (recur (inc yy) neighbors))
                                    neighbors))
                                (recur (inc xx)))
                           neighbors))
                       (recur (inc y)))
                  neighbors))]
          (recur (inc x)))))))

(defn conways-game-of-life
  [processing state]
  (reify canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/stroke 48)
      (canvas/no-smooth)
      (canvas/background 0)
      {:cell-size 5
       :prob-alive 15
       :interval 100
       :last-time 0
       :alive (canvas/color 0 200 0)
       :dead (canvas/color 0)
       :cells (initialize-cells)
       :cells-buffer (initialize-cells)
       :paused false})
    (draw [_ {:keys [paused last-time interval] :as local-state} _ _]
      (draw-grid local-state)
      (when-not paused
        (when (> (- (canvas/millis) last-time) interval)
          (iteration state)
          (swap! state update-in [:last-time] (canvas/millis)))))))

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
                          :f polygon}
                         {:title "load and display images"
                          :f load-and-display-images
                          :animate false}
                         {:title "conway's game of life"
                          :f conways-game-of-life
                          :animate false}]
              :active nil}
      (fn [data owner]
        (let [code (html (into [:pre {:style {:width 640
                                              :border-radius "0px"
                                              :border "none"}}]
                               (:code (:active data))))]
          (reify
            om/IRenderState
            (render-state [_ _]
              (html [:div.row
                     [:header.col-sm-12
                      [:h1 "processing.cljs"]
                      [:p "thin ClojureScript veneer over "
                       [:a {:href "http://www.processingjs.org"}
                        "processing.js"]]
                      [:ul
                       [:li [:a {:href "https://github.com/aamedina/processing.cljs/zipball/master"} "Download " [:strong "ZIP File"]]]
                       [:li [:a {:href "https://github.com/aamedina/processing.cljs/tarball/master"} "Download " [:strong "TAR Ball"]]]
                       [:li [:a {:href "https://github.com/aamedina/processing.cljs"} "View on " [:strong "GitHub"]]]]]
                     [:div#content.col-sm-12
                      [:h3 "usage "
                       [:small "examples based on: "
                        [:a {:href "http://processing.org/examples"}
                         "http://processing.org/examples"]]]
                      
                      [:div.col-sm-12
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
                             (runner/htmlize "draw-polygon" "polygon")
                             ["3d primitives"]
                             (runner/htmlize "three-dee-primitives")
                             ["load and display images"]
                             (runner/htmlize "load-and-display-images")
                             ["conway's game of life"]
                             (runner/htmlize "conways-game-of-life"))
                           (concat
                            ["(" [:span.keyword "ns"] " my.namespace\n  "
                             [:span.constant "(:require"]
                             " [processing.core " [:span.constant ":as"]
                             " canvas " [:span.constant ":include-macros"]
                             " true]))\n\n"])
                           (into [:pre {:style {:width 640
                                                :border-radius "0px"
                                                :border "none"}}]))
                          (into [:pre {:style {:width 640
                                               :border-radius "0px"
                                               :border "none"}}]
                                ["(" [:span.keyword "ns"] " my.namespace\n  "
                                 [:span.constant "(:require"]
                                 " [processing.core " [:span.constant ":as"]
                                 " canvas " [:span.constant ":include-macros"]
                                 " true]))"]))]]]])))))
      container)))
