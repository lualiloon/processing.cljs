(ns runner
  (:require [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.analyzer.utils :as util]
            [cljs.env :as env]
            [cljs.core :as core]
            [hiccup.util :refer [escape-html]]
            [clojure.java.io :as io])
  (:import [clojure.lang LineNumberingPushbackReader]))

(defn read-file
  [filename]
  (let [eof (Object.)]
    (with-open [reader (LineNumberingPushbackReader. (io/reader filename))]
      (doall (->> (repeatedly #(read reader false eof))
                  (take-while #(not= % eof)))))))

(defmacro escape-code
  [& fns]
  )
