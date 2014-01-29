(ns runner
  (:require [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.analyzer.utils :as util]
            [cljs.env :as env]
            [cljs.core :as core]
            [hiccup.util :refer [escape-html]]
            [hickory.zip :as hzip]
            [hickory.core :as hickory]
            [clojure.java.io :as io]
            [clojure.zip :as zip])
  (:import [clojure.lang LineNumberingPushbackReader]))

(defn read-file
  [filename]
  (let [eof (Object.)]
    (with-open [reader (LineNumberingPushbackReader. (io/reader filename))]
      (doall (->> (repeatedly #(read reader false eof))
                  (take-while #(not= % eof)))))))

(defn forms-map
  [filename]
  (binding [ana/*cljs-ns* 'cljs.user
            ana/*cljs-file* filename
            ana/*passes* (or ana/*passes*
                             [util/elide-children
                              util/simplify-env
                              ana/infer-type])]
    (->> (map #(ana/analyze (ana/empty-env) %) (read-file filename))
         (map #(assoc %
                 :name (clojure.string/replace (str (:name %)) "/" "")))
         (map #(select-keys % [:name :form]))
         (group-by :name)
         (reduce-kv (fn [m k v] (assoc m k (:form (first v)))) {}))))

(def forms (forms-map "test/runner.cljs"))

(defn unescape-hiccup
  "Change special characters into HTML character entities."
  [root]
  (loop [loc (hickory.zip/hiccup-zip root)]
    (if (zip/end? loc)
      (zip/root loc)
      (if (string? (zip/node loc))
        (recur (->> (-> (zip/node loc)
                        (clojure.string/replace #"&amp;" "&")
                        (clojure.string/replace #"&lt;" "<")
                        (clojure.string/replace #"&gt;" ">")
                        (clojure.string/replace #"&quot;" "\""))
                    (zip/replace loc)))
        (recur (zip/next loc))))))

(def htmlized
  (->> (slurp "test/runner.cljs.html")
       (re-seq #"(?s)\(<span class=\"keyword\">defn</span> <span class=\"function-name\">[\w-]+</span>.+\)\n\n")
       (first)
       (#(clojure.string/split % #"\n\n"))
       (map
        (fn [text]
          (let [re (re-find
                    #"<span class=\"function-name\">([\w-]+)</span>" text)
                fn-name (second re)]
            [fn-name (->> (hickory/parse-fragment text)
                          (map hickory/as-hiccup)
                          (map #(if (vector? %)
                                  (unescape-hiccup %)
                                  %)))])))
       (reduce (fn [m [fn-name text]] (assoc m fn-name text)) {})))

(defmacro htmlize
  [& fns]
  (reduce into [] (interpose "\n\n" (map #(get htmlized %) fns))))
