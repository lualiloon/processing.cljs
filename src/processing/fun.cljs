(ns processing.fun
  (:require [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [dommy.core :as dom]
            [processing.core :as canvas :include-macros true]
            )
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel sel1 node deftemplate]]))


(defn i-canvas
  [setup-fns draw-fns]
  (reify
    canvas/ICanvas
    (setup [this]
      (doseq [f setup-fns]
        (f)))
    (draw [this
           {:keys [height width]}
           {:keys [x y] :as mouse}
           keyboard]
      (doseq [f draw-fns]
        (f)))))

;;------------------------------------------------------------
;; the following are translations of the examples at
;; http://www.processing.org/examples/
;;// all comments formatted like this, with a preceding double backslash (//),
;;// are copied word-for-word from the above source

(defn coordinates
  [processing state]
  (reify
    canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/background 0)
      (canvas/no-fill))
    (draw [_ {:keys [height width]} _ _]
      (canvas/stroke 255)
      (canvas/point (* width 0.5) (* height 0.5))
      (canvas/point (* width 0.5) (* height 0.25))
      
      (canvas/stroke 0 153 255)
      (canvas/line 0 (* height 0.33) width (* height 0.33))

      (canvas/stroke 255 153 0)
      (canvas/rect (* width 0.25) (* height 0.1)
                   (* width 0.5) (* height 0.8)))))

(defn width-and-height
  [processing state]
  (reify
    canvas/ICanvas
    (setup [_]
      (canvas/size 640 360)
      (canvas/background 127)
      (canvas/no-stroke))
    (draw [_ {:keys [height width]} _  _]
      (loop [i 0]
        (when (< i height)
          (canvas/fill 129 206 15)
          (canvas/rect 0 i width 10)
          (canvas/fill 255)
          (canvas/rect i 0 10 height)
          (recur (+ i 20)))))))

(defn setup-and-draw
  [processing state]
  (reify
    canvas/ICanvas
    (setup [this]
      (canvas/size 640 360)
      (canvas/stroke 255)
      (canvas/frame-rate 30)
      (canvas/no-loop)
      {:y 100})
    (draw [this {:keys [width height y]} _ _]
      (canvas/background 0)
      (canvas/line 0 y width y)
      (let [y (if (neg? y)
                height
                (dec y))]
        
        {:y y}))))


(defn ^:export -main
  []
  (om/root {}
    (fn [data owner]
      (reify om/IRender
        (render [_]
          (html [:div
                 (om/build (canvas/canvas
                             :title "Fun With Processing"
                             :f width-and-height
                             :animate false
                             )
                           data)]))))
    (sel1 :div#content)))
