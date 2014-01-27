(ns processing.core
  (:refer-clojure :exclude [loop delay int print println map])
  (:require [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.core :as core]))

(def externs
  (->> '[externals use3DContext focused breakShape glyphTable pmouseX
         pmouseY mouseX mouseY mouseButton mouseScroll mouseClicked
         mouseDragged mouseMoved mousePressed mouseReleased mouseScrolled
         mouseOver mouseOut touchStart touchEnd touchMove touchCancel
         keyCode keyPressed keyReleased keyTyped draw setup __mousePressed
         __keyPressed __frameRate frameCount width height Character PShape
         PShapeSVG shape shapeMode loadShape XMLElement XML loadXML PMatrix2D
         PMatrix3D PMatrixStack split splitTokens append splice
         subset join shorten expand mix peg modes color int print println
         brightness saturation hue red green blue alpha lerpColor colorMode
         blendColor printMatrix rotateX rotateY pushStyle popStyle year month
         day hour minute millis noLoop loop frameRate exit cursor
         noCursor link beginDraw endDraw status binary unbinary nf nfs nfp nfc
         hex unhex loadStrings saveStrings loadBytes matchAll __contains
         __replaceAll __replaceFirst __replace __equals __equalsIgnoreCase
         __toCharArray __split __codePointAt match __matches __startsWith
         __endsWith __hashCode __printStackTrace trim map
         parseBoolean parseByte parseChar parseFloat parseInt __int_cast
         __instanceof abs ceil constrain dist exp floor lerp log mag
         norm pow round sq sqrt acos asin atan atan2 cos degrees radians
         sin tan random randomSeed Random noise noiseDetail noiseSeed lights
         camera perspective ortho printProjection printCamera sphereDetail
         modelX modelY modelZ screenX screenY screenZ noFill noStroke
         strokeCap strokeJoin beginShape texture textureMode curveTightness
         curveDetail rectMode imageMode ellipseMode arc bezierDetail
         bezierPoint bezierTangent curvePoint curveTangent triangle quad
         normal save saveFrame PImage createImage loadImage requestImage
         createGraphics imageData pixels loadPixels updatePixels hint tint
         noTint copy blend shared intersect blit_resize loadFont
         createFont textFont textSize textAscent textDescent textLeading
         textAlign glyphLook text textMode loadGlyphs param disableContextMenu
         enableContextMenu constructor translate transform scale pushMatrix
         popMatrix resetMatrix applyMatrix rotate rotateZ shearX shearY
         redraw toImageData ambientLight directionalLight lightFalloff
         lightSpecular pointLight noLights spotLight beginCamera endCamera
         frustum box sphere ambient emissive shininess specular fill stroke
         strokeWeight smooth noSmooth point vertex endShape bezierVertex
         curveVertex curve line bezier rect ellipse background image textWidth
         size ArrayList HashMap PVector ObjectIterator PConstants
         defineProperty extendClassChain extendStaticMembers shape
         extendInterfaceMembers addMethod createJavaArray delay PrintWriter
         endRaw beginRaw createReader saveBytes selectInput endRecord
         saveStream beginRecord selectOutput createWriter dataPath
         selectFolder BufferedReader createInput createOutput open PFont X Y Z
         R G B A U V NX NY NZ EDGE SR SG SB SA SW TX TY TZ VX VY VZ VW AR AG
         AB DR DG DB DA SPR SPG SPB SHINE ER EG EB BEEN_LIT VERTEX_FIELD_COUNT
         P2D JAVA2D WEBGL P3D OPENGL PDF DXF OTHER WINDOWS MAXOSX LINUX
         EPSILON MAX_FLOAT MIN_FLOAT MAX_INT MIN_INT PI TWO_PI HALF_PI
         THIRD_PI QUARTER_PI DEG_TO_RAD RAD_TO_DEG WHITESPACE RGB ARGB HSB
         ALPHA CMYK TIFF TARGA JPEG GIF BLUR GRAY INVERT OPAQUE POSTERIZE
         THRESHOLD ERODE DILATE REPLACE BLEND ADD SUBTRACT LIGHTEST DARKEST
         DIFFERENCE EXCLUSION MULTIPLY SCREEN OVERLAY HARD_LIGHT SOFT_LIGHT
         DODGE BURN ALPHA_MASK RED_MASK GREEN_MASK BLUE_MASK CUSTOM
         ORTHOGRAPHIC PERSPECTIVE POINT POINTS LINE LINES TRIANGLE TRIANGLES
         TRIANGLE_STRIP TRIANGLE_FAN QUAD QUADS QUAD_STRIP POLYGON PATH RECT
         ELLIPSE ARC SPHERE BOX GROUP PRIMITIVE GEOMETRY VERTEX BEZIER_VERTEX
         CURVE_VERTEX BREAK CLOSESHAPE OPEN CLOSE CORNER CORNERS RADIUS
         CENTER_RADIUS CENTER DIAMETER CENTER_DIAMETER BASELINE TOP BOTTOM
         NORMAL NORMALIZED IMAGE MODEL SHAPE SQUARE ROUND PROJECT MITER BEVEL
         AMBIENT DIRECTIONAL SPOT BACKSPACE TAB ENTER RETURN ESC DELETE CODED
         SHIFT CONTROL ALT CAPSLK PGUP PGDN END HOME LEFT UP RIGHT DOWN F1 F2
         F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 NUMLK META INSERT ARROW CROSS HAND
         MOVE TEXT WAIT NOCURSOR DISABLE_OPENGL_2X_SMOOTH
         ENABLE_OPENGL_2X_SMOOTH ENABLE_OPENGL_4X_SMOOTH ENABLE_NATIVE_FONTS
         DISABLE_DEPTH_TEST ENABLE_DEPTH_TEST ENABLE_DEPTH_SORT
         DISABLE_DEPTH_SORT DISABLE_OPENGL_ERROR_REPORT
         ENABLE_OPENGL_ERROR_REPORT ENABLE_ACCURATE_TEXTURES
         DISABLE_ACCURATE_TEXTURES HINT_COUNT SINCOS_LENGTH PRECISIONB
         PRECISIONF PREC_MAXVAL PREC_ALPHA_SHIFT PREC_RED_SHIFT
         NORMAL_MODE_AUTO NORMAL_MODE_SHAPE NORMAL_MODE_VERTEX MAX_LIGHTS]
       (clojure.core/map str)
       (repeat 2)
       (apply clojure.core/map vector)
       (clojure.core/map
        (fn [[p1 p2]]
          [(if (and (re-matches #"[A-Za-z]+" p1)
                    (not (every? (fn [char-code]
                                   (and (>= char-code 65)
                                        (<= char-code 92)))
                                 (clojure.core/map clojure.core/int p1))))
             (-> (clojure.string/replace p1 #"([A-Z])" "-$1")
                 (clojure.string/lower-case))
             p1) p2]))))

(defn gen-processing-inline-accessor
  [[prop orig]]
  `(defmacro ~(symbol prop) [& args#]
     (let [orig# ~orig]
       `(cond
          (and (instance? js/Processing (first [~@args#]))
               ~(not (:arg (meta (first args#)))))
          ((aget (first [~@args#]) ~orig#) ~@(rest args#))
          (fn? (aget (js/Processing.getInstanceById
                      (:active (deref processing-state))) ~orig#))
          ((aget (js/Processing.getInstanceById
                  (:active (deref processing-state))) ~orig#) ~@args#)
          :else
          (aget (js/Processing.getInstanceById
                 (:active (deref processing-state))) ~orig#)))))

(defmacro gen-processing-inline-accessors []
  `(do ~@(clojure.core/map gen-processing-inline-accessor externs)))

(gen-processing-inline-accessors)



