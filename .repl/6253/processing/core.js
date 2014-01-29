// Compiled by ClojureScript 0.0-2138
goog.provide('processing.core');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async.impl.channels');
goog.require('sablono.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
processing.core.processing_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null));
processing.core.ICanvas = (function (){var obj65229 = {};return obj65229;
})();
processing.core.setup = (function setup(canvas){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$ICanvas$setup$arity$1;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$ICanvas$setup$arity$1(canvas);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.setup[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.setup["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvas.setup",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.draw = (function draw(canvas,state,mouse,keyboard){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$ICanvas$draw$arity$4;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$ICanvas$draw$arity$4(canvas,state,mouse,keyboard);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.draw[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.draw["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvas.draw",canvas);
}
}
})().call(null,canvas,state,mouse,keyboard);
}
});
processing.core.IMouseClicked = (function (){var obj65231 = {};return obj65231;
})();
processing.core.mouse_clicked = (function mouse_clicked(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseClicked$mouse_clicked$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseClicked$mouse_clicked$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_clicked[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_clicked["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseClicked.mouse-clicked",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseDragged = (function (){var obj65233 = {};return obj65233;
})();
processing.core.mouse_dragged = (function mouse_dragged(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseDragged$mouse_dragged$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseDragged$mouse_dragged$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_dragged[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_dragged["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseDragged.mouse-dragged",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseMoved = (function (){var obj65235 = {};return obj65235;
})();
processing.core.mouse_moved = (function mouse_moved(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseMoved$mouse_moved$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseMoved$mouse_moved$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_moved[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_moved["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseMoved.mouse-moved",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMousePressed = (function (){var obj65237 = {};return obj65237;
})();
processing.core.mouse_pressed = (function mouse_pressed(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMousePressed$mouse_pressed$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMousePressed$mouse_pressed$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_pressed[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_pressed["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMousePressed.mouse-pressed",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseReleased = (function (){var obj65239 = {};return obj65239;
})();
processing.core.mouse_released = (function mouse_released(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseReleased$mouse_released$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseReleased$mouse_released$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_released[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_released["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseReleased.mouse-released",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseScrolled = (function (){var obj65241 = {};return obj65241;
})();
processing.core.mouse_scrolled = (function mouse_scrolled(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseScrolled$mouse_scrolled$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseScrolled$mouse_scrolled$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_scrolled[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_scrolled["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseScrolled.mouse-scrolled",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseOver = (function (){var obj65243 = {};return obj65243;
})();
processing.core.mouse_over = (function mouse_over(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseOver$mouse_over$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseOver$mouse_over$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_over[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_over["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseOver.mouse-over",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseOut = (function (){var obj65245 = {};return obj65245;
})();
processing.core.mouse_out = (function mouse_out(canvas,mouse){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IMouseOut$mouse_out$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IMouseOut$mouse_out$arity$2(canvas,mouse);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.mouse_out[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.mouse_out["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseOut.mouse-out",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.ITouchStart = (function (){var obj65247 = {};return obj65247;
})();
processing.core.touch_start = (function touch_start(canvas){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$ITouchStart$touch_start$arity$1;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$ITouchStart$touch_start$arity$1(canvas);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.touch_start[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.touch_start["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchStart.touch-start",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchEnd = (function (){var obj65249 = {};return obj65249;
})();
processing.core.touch_end = (function touch_end(canvas){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$ITouchEnd$touch_end$arity$1;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$ITouchEnd$touch_end$arity$1(canvas);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.touch_end[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.touch_end["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchEnd.touch-end",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchMove = (function (){var obj65251 = {};return obj65251;
})();
processing.core.touch_move = (function touch_move(canvas){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$ITouchMove$touch_move$arity$1;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$ITouchMove$touch_move$arity$1(canvas);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.touch_move[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.touch_move["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchMove.touch-move",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchCancel = (function (){var obj65253 = {};return obj65253;
})();
processing.core.touch_cancel = (function touch_cancel(canvas){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$ITouchCancel$touch_cancel$arity$1;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$ITouchCancel$touch_cancel$arity$1(canvas);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.touch_cancel[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.touch_cancel["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchCancel.touch-cancel",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.IKeyPressed = (function (){var obj65255 = {};return obj65255;
})();
processing.core.key_pressed = (function key_pressed(canvas,keyboard){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IKeyPressed$key_pressed$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IKeyPressed$key_pressed$arity$2(canvas,keyboard);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.key_pressed[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.key_pressed["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyPressed.key-pressed",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IKeyTyped = (function (){var obj65257 = {};return obj65257;
})();
processing.core.key_typed = (function key_typed(canvas,keyboard){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IKeyTyped$key_typed$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IKeyTyped$key_typed$arity$2(canvas,keyboard);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.key_typed[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.key_typed["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTyped.key-typed",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IKeyReleased = (function (){var obj65259 = {};return obj65259;
})();
processing.core.key_released = (function key_released(canvas,keyboard){if((function (){var and__7850__auto__ = canvas;if(and__7850__auto__)
{return canvas.processing$core$IKeyReleased$key_released$arity$2;
} else
{return and__7850__auto__;
}
})())
{return canvas.processing$core$IKeyReleased$key_released$arity$2(canvas,keyboard);
} else
{var x__8483__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7862__auto__ = (processing.core.key_released[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (processing.core.key_released["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyReleased.key-released",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
(processing.core.IMouseMoved["_"] = true);
(processing.core.mouse_moved["_"] = (function (_,___$1){return null;
}));
(processing.core.IMouseClicked["_"] = true);
(processing.core.mouse_clicked["_"] = (function (_,___$1){return null;
}));
(processing.core.IMousePressed["_"] = true);
(processing.core.mouse_pressed["_"] = (function (_,___$1){return null;
}));
(processing.core.IMouseReleased["_"] = true);
(processing.core.mouse_released["_"] = (function (_,___$1){return null;
}));
(processing.core.IMouseDragged["_"] = true);
(processing.core.mouse_dragged["_"] = (function (_,___$1){return null;
}));
(processing.core.IMouseOut["_"] = true);
(processing.core.mouse_out["_"] = (function (_,___$1){return null;
}));
(processing.core.IMouseOver["_"] = true);
(processing.core.mouse_over["_"] = (function (_,___$1){return null;
}));
(processing.core.IKeyPressed["_"] = true);
(processing.core.key_pressed["_"] = (function (_,___$1){return null;
}));
(processing.core.IKeyReleased["_"] = true);
(processing.core.key_released["_"] = (function (_,___$1){return null;
}));
(processing.core.IKeyTyped["_"] = true);
(processing.core.key_typed["_"] = (function (_,___$1){return null;
}));
processing.core.mouse = (function mouse(canvas){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",1013904362),canvas.mouseX,new cljs.core.Keyword(null,"y","y",1013904363),canvas.mouseY,new cljs.core.Keyword(null,"pX","pX",1013907802),canvas.pmouseX,new cljs.core.Keyword(null,"pY","pY",1013907803),canvas.pmouseY,new cljs.core.Keyword(null,"button","button",3931183780),canvas.mouseButton], null);
});
processing.core.keyboard = (function keyboard(canvas){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(canvas.key)].join(''),new cljs.core.Keyword(null,"key-code","key-code",1468352525),canvas.keyCode], null);
});
processing.core.raf = null;
processing.core.render = (function render(canvas){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,((Processing.instances[0])["draw"])))
{((Processing.instances[0])["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((Processing.instances[0])["draw"]);
} else
{}
}
}
canvas.frameCount = (canvas.frameCount + 1);
return processing.core.raf = requestAnimationFrame((function (){return render.call(null,canvas);
}));
});
processing.core.start_animation = (function start_animation(canvas){if((processing.core.raf == null))
{return processing.core.render.call(null,canvas);
} else
{return null;
}
});
processing.core.stop_animation = (function stop_animation(){if((processing.core.raf == null))
{return null;
} else
{cancelAnimationFrame(processing.core.raf);
processing.core.raf = null;
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["exit"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,((Processing.instances[0])["exit"])))
{return ((Processing.instances[0])["exit"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ((Processing.instances[0])["exit"]);
} else
{return null;
}
}
}
}
});
processing.core.preload = (function preload(href){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_65289){var state_val_65290 = (state_65289[1]);if((state_val_65290 === 2))
{var inst_65282 = (state_65289[7]);var inst_65287 = (state_65289[2]);var state_65289__$1 = (function (){var statearr_65291 = state_65289;(statearr_65291[8] = inst_65287);
return statearr_65291;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65289__$1,inst_65282);
} else
{if((state_val_65290 === 1))
{var inst_65282 = (state_65289[7]);var inst_65281 = cljs.core.async.chan.call(null,1);var inst_65282__$1 = (new Image());var inst_65283 = (function (){var img = inst_65282__$1;var ret = inst_65281;return ((function (img,ret,inst_65282,inst_65281,inst_65282__$1,state_val_65290){
return (function (){return cljs.core.async.close_BANG_.call(null,ret);
});
;})(img,ret,inst_65282,inst_65281,inst_65282__$1,state_val_65290))
})();var inst_65284 = inst_65282__$1.onload = inst_65283;var inst_65285 = inst_65282__$1.src = href;var state_65289__$1 = (function (){var statearr_65292 = state_65289;(statearr_65292[9] = inst_65284);
(statearr_65292[10] = inst_65285);
(statearr_65292[7] = inst_65282__$1);
return statearr_65292;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65289__$1,2,inst_65281);
} else
{return null;
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_65296 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_65296[0] = state_machine__13648__auto__);
(statearr_65296[1] = 1);
return statearr_65296;
});
var state_machine__13648__auto____1 = (function (state_65289){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_65289);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e65297){if((e65297 instanceof Object))
{var ex__13651__auto__ = e65297;var statearr_65298_65300 = state_65289;(statearr_65298_65300[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65289);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e65297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__65301 = state_65289;
state_65289 = G__65301;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_65289){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_65289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_65299 = f__13746__auto__.call(null);(statearr_65299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_65299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return c__13745__auto__;
});
processing.core.setup_and_draw = (function setup_and_draw(data,owner,node,opts){var map__65423 = opts;var map__65423__$1 = ((cljs.core.seq_QMARK_.call(null,map__65423))?cljs.core.apply.call(null,cljs.core.hash_map,map__65423):map__65423);var animate = cljs.core.get.call(null,map__65423__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__65423__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__65423__$1,new cljs.core.Keyword(null,"title","title",1124275658));var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var processing__$1 = (new Processing(node));var canvas = f.call(null,processing__$1,state);if((function (){var G__65424 = canvas;if(G__65424)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__65424.processing$core$ICanvas$;
}
})()))
{return true;
} else
{if((!G__65424.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__65424);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__65424);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reified canvas must implement ICanvas"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"ICanvas","ICanvas",733855930,null),new cljs.core.Symbol(null,"canvas","canvas",1286729489,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,processing.core.processing_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),clojure.string.replace.call(null,title,/ /,"-")], null));
processing__$1.name = clojure.string.replace.call(null,title,/ /,"-");
processing__$1.draw = (function (){return processing.core.draw.call(null,canvas,cljs.core.merge.call(null,om.core.get_state.call(null,owner),cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",1127031096),processing__$1.width,new cljs.core.Keyword(null,"height","height",4087841945),processing__$1.height,new cljs.core.Keyword(null,"focused","focused",4617830121),processing__$1.focused,new cljs.core.Keyword(null,"online","online",4296649157),processing__$1.online,new cljs.core.Keyword(null,"screen","screen",4401181662),processing__$1.screen,new cljs.core.Keyword(null,"frame-count","frame-count",4065819681),processing__$1.frameCount], null)),processing.core.mouse.call(null,processing__$1),processing.core.keyboard.call(null,processing__$1));
});
processing__$1.setup = (function (){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_65446){var state_val_65447 = (state_65446[1]);if((state_val_65447 === 1))
{var inst_65425 = (state_65446[7]);var inst_65425__$1 = processing.core.setup.call(null,canvas);var inst_65426 = (inst_65425__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);var state_65446__$1 = (function (){var statearr_65448 = state_65446;(statearr_65448[7] = inst_65425__$1);
return statearr_65448;
})();if(cljs.core.truth_(inst_65426))
{var statearr_65449_65544 = state_65446__$1;(statearr_65449_65544[1] = 2);
} else
{var statearr_65450_65545 = state_65446__$1;(statearr_65450_65545[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 2))
{var inst_65425 = (state_65446[7]);var state_65446__$1 = state_65446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65446__$1,5,inst_65425);
} else
{if((state_val_65447 === 3))
{var inst_65425 = (state_65446[7]);var state_65446__$1 = state_65446;if(cljs.core.truth_(inst_65425))
{var statearr_65451_65546 = state_65446__$1;(statearr_65451_65546[1] = 9);
} else
{var statearr_65452_65547 = state_65446__$1;(statearr_65452_65547[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 4))
{var inst_65442 = (state_65446[2]);var inst_65443 = processing__$1.resetMatrix;var inst_65444 = inst_65443.call(null);var state_65446__$1 = (function (){var statearr_65453 = state_65446;(statearr_65453[8] = inst_65442);
return statearr_65453;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65446__$1,inst_65444);
} else
{if((state_val_65447 === 5))
{var inst_65429 = (state_65446[9]);var inst_65429__$1 = (state_65446[2]);var state_65446__$1 = (function (){var statearr_65454 = state_65446;(statearr_65454[9] = inst_65429__$1);
return statearr_65454;
})();if(cljs.core.truth_(inst_65429__$1))
{var statearr_65455_65548 = state_65446__$1;(statearr_65455_65548[1] = 6);
} else
{var statearr_65456_65549 = state_65446__$1;(statearr_65456_65549[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 6))
{var inst_65429 = (state_65446[9]);var state_65446__$1 = state_65446;var statearr_65457_65550 = state_65446__$1;(statearr_65457_65550[2] = inst_65429);
(statearr_65457_65550[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 7))
{var state_65446__$1 = state_65446;var statearr_65458_65551 = state_65446__$1;(statearr_65458_65551[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_65458_65551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 8))
{var inst_65433 = (state_65446[2]);var inst_65434 = cljs.core.reset_BANG_.call(null,state,inst_65433);var state_65446__$1 = state_65446;var statearr_65459_65552 = state_65446__$1;(statearr_65459_65552[2] = inst_65434);
(statearr_65459_65552[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 9))
{var inst_65425 = (state_65446[7]);var state_65446__$1 = state_65446;var statearr_65460_65553 = state_65446__$1;(statearr_65460_65553[2] = inst_65425);
(statearr_65460_65553[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 10))
{var state_65446__$1 = state_65446;var statearr_65461_65554 = state_65446__$1;(statearr_65461_65554[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_65461_65554[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65447 === 11))
{var inst_65439 = (state_65446[2]);var inst_65440 = cljs.core.reset_BANG_.call(null,state,inst_65439);var state_65446__$1 = state_65446;var statearr_65462_65555 = state_65446__$1;(statearr_65462_65555[2] = inst_65440);
(statearr_65462_65555[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_65466 = [null,null,null,null,null,null,null,null,null,null];(statearr_65466[0] = state_machine__13648__auto__);
(statearr_65466[1] = 1);
return statearr_65466;
});
var state_machine__13648__auto____1 = (function (state_65446){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_65446);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e65467){if((e65467 instanceof Object))
{var ex__13651__auto__ = e65467;var statearr_65468_65556 = state_65446;(statearr_65468_65556[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e65467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__65557 = state_65446;
state_65446 = G__65557;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_65446){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_65446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_65469 = f__13746__auto__.call(null);(statearr_65469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_65469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return c__13745__auto__;
});
processing__$1.keyTyped = (function (){return processing.core.key_typed.call(null,canvas,processing.core.keyboard.call(null,processing__$1));
});
processing__$1.keyReleased = (function (){return processing.core.key_released.call(null,canvas,processing.core.keyboard.call(null,processing__$1));
});
processing__$1.keyPressed = (function (){return processing.core.key_pressed.call(null,canvas,processing.core.keyboard.call(null,processing__$1));
});
processing__$1.mouseReleased = (function (){return processing.core.mouse_released.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mousePressed = (function (){return processing.core.mouse_pressed.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mouseOut = (function (){return processing.core.mouse_out.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mouseOver = (function (){return processing.core.mouse_over.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mouseClicked = (function (){return processing.core.mouse_clicked.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mouseDragged = (function (){return processing.core.mouse_dragged.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mouseScrolled = (function (){return processing.core.mouse_scrolled.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.mouseMoved = (function (){return processing.core.mouse_moved.call(null,canvas,processing.core.mouse.call(null,processing__$1));
});
processing__$1.touchStart = (function (){return processing.core.touch_start.call(null,canvas);
});
processing__$1.touchEnd = (function (){return processing.core.touch_end.call(null,canvas);
});
processing__$1.touchMove = (function (){return processing.core.touch_move.call(null,canvas);
});
processing__$1.touchCancel = (function (){return processing.core.touch_cancel.call(null,canvas);
});
var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_65514){var state_val_65515 = (state_65514[1]);if((state_val_65515 === 1))
{var inst_65470 = processing__$1.setup;var inst_65471 = inst_65470.call(null);var state_65514__$1 = state_65514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65514__$1,2,inst_65471);
} else
{if((state_val_65515 === 2))
{var inst_65473 = (state_65514[2]);var inst_65474 = animate === false;var state_65514__$1 = (function (){var statearr_65516 = state_65514;(statearr_65516[7] = inst_65473);
return statearr_65516;
})();if(cljs.core.truth_(inst_65474))
{var statearr_65517_65558 = state_65514__$1;(statearr_65517_65558[1] = 3);
} else
{var statearr_65518_65559 = state_65514__$1;(statearr_65518_65559[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 3))
{var inst_65476 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_65477 = (inst_65476 instanceof Processing);var inst_65478 = (inst_65477) && (true);var state_65514__$1 = state_65514;if(cljs.core.truth_(inst_65478))
{var statearr_65519_65560 = state_65514__$1;(statearr_65519_65560[1] = 6);
} else
{var statearr_65520_65561 = state_65514__$1;(statearr_65520_65561[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 4))
{var inst_65503 = typeof requestAnimationFrame !== 'undefined';var state_65514__$1 = state_65514;if(cljs.core.truth_(inst_65503))
{var statearr_65521_65562 = state_65514__$1;(statearr_65521_65562[1] = 15);
} else
{var statearr_65522_65563 = state_65514__$1;(statearr_65522_65563[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 5))
{var inst_65512 = (state_65514[2]);var state_65514__$1 = state_65514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65514__$1,inst_65512);
} else
{if((state_val_65515 === 6))
{var inst_65480 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_65481 = (inst_65480["draw"]);var inst_65482 = inst_65481.call(null);var state_65514__$1 = state_65514;var statearr_65523_65564 = state_65514__$1;(statearr_65523_65564[2] = inst_65482);
(statearr_65523_65564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 7))
{var inst_65484 = (Processing.instances[0]);var inst_65485 = (inst_65484["draw"]);var inst_65486 = cljs.core.fn_QMARK_.call(null,inst_65485);var state_65514__$1 = state_65514;if(inst_65486)
{var statearr_65524_65565 = state_65514__$1;(statearr_65524_65565[1] = 9);
} else
{var statearr_65525_65566 = state_65514__$1;(statearr_65525_65566[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 8))
{var inst_65501 = (state_65514[2]);var state_65514__$1 = state_65514;var statearr_65526_65567 = state_65514__$1;(statearr_65526_65567[2] = inst_65501);
(statearr_65526_65567[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 9))
{var inst_65488 = (Processing.instances[0]);var inst_65489 = (inst_65488["draw"]);var inst_65490 = inst_65489.call(null);var state_65514__$1 = state_65514;var statearr_65527_65568 = state_65514__$1;(statearr_65527_65568[2] = inst_65490);
(statearr_65527_65568[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 10))
{var state_65514__$1 = state_65514;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_65528_65569 = state_65514__$1;(statearr_65528_65569[1] = 12);
} else
{var statearr_65529_65570 = state_65514__$1;(statearr_65529_65570[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 11))
{var inst_65499 = (state_65514[2]);var state_65514__$1 = state_65514;var statearr_65530_65571 = state_65514__$1;(statearr_65530_65571[2] = inst_65499);
(statearr_65530_65571[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 12))
{var inst_65493 = (Processing.instances[0]);var inst_65494 = (inst_65493["draw"]);var state_65514__$1 = state_65514;var statearr_65531_65572 = state_65514__$1;(statearr_65531_65572[2] = inst_65494);
(statearr_65531_65572[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 13))
{var state_65514__$1 = state_65514;var statearr_65532_65573 = state_65514__$1;(statearr_65532_65573[2] = null);
(statearr_65532_65573[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 14))
{var inst_65497 = (state_65514[2]);var state_65514__$1 = state_65514;var statearr_65533_65574 = state_65514__$1;(statearr_65533_65574[2] = inst_65497);
(statearr_65533_65574[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 15))
{var inst_65505 = processing.core.start_animation.call(null,processing__$1);var state_65514__$1 = state_65514;var statearr_65534_65575 = state_65514__$1;(statearr_65534_65575[2] = inst_65505);
(statearr_65534_65575[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 16))
{var inst_65507 = (function (){return ((function (state_val_65515){
return (function render(){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,((Processing.instances[0])["draw"])))
{((Processing.instances[0])["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((Processing.instances[0])["draw"]);
} else
{}
}
}
return setTimeout(16,render);
});
;})(state_val_65515))
})();var inst_65508 = inst_65507.call(null);var state_65514__$1 = state_65514;var statearr_65535_65576 = state_65514__$1;(statearr_65535_65576[2] = inst_65508);
(statearr_65535_65576[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65515 === 17))
{var inst_65510 = (state_65514[2]);var state_65514__$1 = state_65514;var statearr_65536_65577 = state_65514__$1;(statearr_65536_65577[2] = inst_65510);
(statearr_65536_65577[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_65540 = [null,null,null,null,null,null,null,null];(statearr_65540[0] = state_machine__13648__auto__);
(statearr_65540[1] = 1);
return statearr_65540;
});
var state_machine__13648__auto____1 = (function (state_65514){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_65514);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e65541){if((e65541 instanceof Object))
{var ex__13651__auto__ = e65541;var statearr_65542_65578 = state_65514;(statearr_65542_65578[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e65541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__65579 = state_65514;
state_65514 = G__65579;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_65514){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_65514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_65543 = f__13746__auto__.call(null);(statearr_65543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_65543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return c__13745__auto__;
});
/**
* @param {...*} var_args
*/
processing.core.canvas = (function() { 
var canvas__delegate = function (p__65580){var map__65585 = p__65580;var map__65585__$1 = ((cljs.core.seq_QMARK_.call(null,map__65585))?cljs.core.apply.call(null,cljs.core.hash_map,map__65585):map__65585);var opts = map__65585__$1;var animate_QMARK_ = cljs.core.get.call(null,map__65585__$1,new cljs.core.Keyword(null,"animate?","animate?",4513668336));var f = cljs.core.get.call(null,map__65585__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__65585__$1,new cljs.core.Keyword(null,"title","title",1124275658));return (function (data,owner){if(typeof processing.core.t65586 !== 'undefined')
{} else
{
/**
* @constructor
*/
processing.core.t65586 = (function (owner,data,title,f,animate_QMARK_,opts,map__65585,p__65580,canvas,meta65587){
this.owner = owner;
this.data = data;
this.title = title;
this.f = f;
this.animate_QMARK_ = animate_QMARK_;
this.opts = opts;
this.map__65585 = map__65585;
this.p__65580 = p__65580;
this.canvas = canvas;
this.meta65587 = meta65587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
processing.core.t65586.cljs$lang$type = true;
processing.core.t65586.cljs$lang$ctorStr = "processing.core/t65586";
processing.core.t65586.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"processing.core/t65586");
});
processing.core.t65586.prototype.om$core$IRenderState$ = true;
processing.core.t65586.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.canvas({"id": clojure.string.replace.call(null,self__.title,/ /,"-"), "ref": "canvas"});
});
processing.core.t65586.prototype.om$core$IDidUpdate$ = true;
processing.core.t65586.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (_,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;var temp__4092__auto__ = om.core.get_node.call(null,self__.owner,"canvas");if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;processing.core.stop_animation.call(null);
return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
} else
{return null;
}
});
processing.core.t65586.prototype.om$core$IDidMount$ = true;
processing.core.t65586.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
});
processing.core.t65586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65588){var self__ = this;
var _65588__$1 = this;return self__.meta65587;
});
processing.core.t65586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65588,meta65587__$1){var self__ = this;
var _65588__$1 = this;return (new processing.core.t65586(self__.owner,self__.data,self__.title,self__.f,self__.animate_QMARK_,self__.opts,self__.map__65585,self__.p__65580,self__.canvas,meta65587__$1));
});
processing.core.__GT_t65586 = (function __GT_t65586(owner__$1,data__$1,title__$1,f__$1,animate_QMARK___$1,opts__$1,map__65585__$2,p__65580__$1,canvas__$1,meta65587){return (new processing.core.t65586(owner__$1,data__$1,title__$1,f__$1,animate_QMARK___$1,opts__$1,map__65585__$2,p__65580__$1,canvas__$1,meta65587));
});
}
return (new processing.core.t65586(owner,data,title,f,animate_QMARK_,opts,map__65585__$1,p__65580,canvas,null));
});
};
var canvas = function (var_args){
var p__65580 = null;if (arguments.length > 0) {
  p__65580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,p__65580);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__65589){
var p__65580 = cljs.core.seq(arglist__65589);
return canvas__delegate(p__65580);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
