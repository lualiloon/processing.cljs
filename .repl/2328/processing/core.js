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
processing.core.ICanvas = (function (){var obj30311 = {};return obj30311;
})();
processing.core.setup = (function setup(canvas){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$ICanvas$setup$arity$1;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$ICanvas$setup$arity$1(canvas);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.setup[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.setup["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvas.setup",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.draw = (function draw(canvas,state,mouse,keyboard){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$ICanvas$draw$arity$4;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$ICanvas$draw$arity$4(canvas,state,mouse,keyboard);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.draw[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.draw["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvas.draw",canvas);
}
}
})().call(null,canvas,state,mouse,keyboard);
}
});
processing.core.IMouseClicked = (function (){var obj30313 = {};return obj30313;
})();
processing.core.mouse_clicked = (function mouse_clicked(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseClicked$mouse_clicked$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseClicked$mouse_clicked$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_clicked[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_clicked["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseClicked.mouse-clicked",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseDragged = (function (){var obj30315 = {};return obj30315;
})();
processing.core.mouse_dragged = (function mouse_dragged(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseDragged$mouse_dragged$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseDragged$mouse_dragged$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_dragged[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_dragged["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseDragged.mouse-dragged",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseMoved = (function (){var obj30317 = {};return obj30317;
})();
processing.core.mouse_moved = (function mouse_moved(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseMoved$mouse_moved$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseMoved$mouse_moved$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_moved[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_moved["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseMoved.mouse-moved",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMousePressed = (function (){var obj30319 = {};return obj30319;
})();
processing.core.mouse_pressed = (function mouse_pressed(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMousePressed$mouse_pressed$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMousePressed$mouse_pressed$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_pressed[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_pressed["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMousePressed.mouse-pressed",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseReleased = (function (){var obj30321 = {};return obj30321;
})();
processing.core.mouse_released = (function mouse_released(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseReleased$mouse_released$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseReleased$mouse_released$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_released[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_released["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseReleased.mouse-released",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseScrolled = (function (){var obj30323 = {};return obj30323;
})();
processing.core.mouse_scrolled = (function mouse_scrolled(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseScrolled$mouse_scrolled$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseScrolled$mouse_scrolled$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_scrolled[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_scrolled["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseScrolled.mouse-scrolled",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseOver = (function (){var obj30325 = {};return obj30325;
})();
processing.core.mouse_over = (function mouse_over(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseOver$mouse_over$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseOver$mouse_over$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_over[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_over["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseOver.mouse-over",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseOut = (function (){var obj30327 = {};return obj30327;
})();
processing.core.mouse_out = (function mouse_out(canvas,mouse){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IMouseOut$mouse_out$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IMouseOut$mouse_out$arity$2(canvas,mouse);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.mouse_out[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.mouse_out["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseOut.mouse-out",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.ITouchStart = (function (){var obj30329 = {};return obj30329;
})();
processing.core.touch_start = (function touch_start(canvas){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$ITouchStart$touch_start$arity$1;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$ITouchStart$touch_start$arity$1(canvas);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.touch_start[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.touch_start["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchStart.touch-start",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchEnd = (function (){var obj30331 = {};return obj30331;
})();
processing.core.touch_end = (function touch_end(canvas){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$ITouchEnd$touch_end$arity$1;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$ITouchEnd$touch_end$arity$1(canvas);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.touch_end[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.touch_end["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchEnd.touch-end",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchMove = (function (){var obj30333 = {};return obj30333;
})();
processing.core.touch_move = (function touch_move(canvas){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$ITouchMove$touch_move$arity$1;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$ITouchMove$touch_move$arity$1(canvas);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.touch_move[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.touch_move["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchMove.touch-move",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchCancel = (function (){var obj30335 = {};return obj30335;
})();
processing.core.touch_cancel = (function touch_cancel(canvas){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$ITouchCancel$touch_cancel$arity$1;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$ITouchCancel$touch_cancel$arity$1(canvas);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.touch_cancel[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.touch_cancel["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchCancel.touch-cancel",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.IKeyPressed = (function (){var obj30337 = {};return obj30337;
})();
processing.core.key_pressed = (function key_pressed(canvas,keyboard){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IKeyPressed$key_pressed$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IKeyPressed$key_pressed$arity$2(canvas,keyboard);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.key_pressed[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.key_pressed["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyPressed.key-pressed",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IKeyTyped = (function (){var obj30339 = {};return obj30339;
})();
processing.core.key_typed = (function key_typed(canvas,keyboard){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IKeyTyped$key_typed$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IKeyTyped$key_typed$arity$2(canvas,keyboard);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.key_typed[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.key_typed["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTyped.key-typed",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IKeyReleased = (function (){var obj30341 = {};return obj30341;
})();
processing.core.key_released = (function key_released(canvas,keyboard){if((function (){var and__7838__auto__ = canvas;if(and__7838__auto__)
{return canvas.processing$core$IKeyReleased$key_released$arity$2;
} else
{return and__7838__auto__;
}
})())
{return canvas.processing$core$IKeyReleased$key_released$arity$2(canvas,keyboard);
} else
{var x__8471__auto__ = (((canvas == null))?null:canvas);return (function (){var or__7850__auto__ = (processing.core.key_released[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (processing.core.key_released["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
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
{if(cljs.core.fn_QMARK_.call(null,(function (){var or__7850__auto__ = (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"]);if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()))
{((function (){var or__7850__auto__ = Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)));if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((function (){var or__7850__auto__ = Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)));if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()["draw"]);
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
{if(cljs.core.fn_QMARK_.call(null,(function (){var or__7850__auto__ = (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["exit"]);if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()))
{return ((function (){var or__7850__auto__ = Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)));if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()["exit"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ((function (){var or__7850__auto__ = Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)));if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()["exit"]);
} else
{return null;
}
}
}
}
});
processing.core.preload = (function preload(href){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_30369){var state_val_30370 = (state_30369[1]);if((state_val_30370 === 2))
{var inst_30362 = (state_30369[7]);var inst_30367 = (state_30369[2]);var state_30369__$1 = (function (){var statearr_30371 = state_30369;(statearr_30371[8] = inst_30367);
return statearr_30371;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30369__$1,inst_30362);
} else
{if((state_val_30370 === 1))
{var inst_30362 = (state_30369[7]);var inst_30361 = cljs.core.async.chan.call(null,1);var inst_30362__$1 = (new Image());var inst_30363 = (function (){var img = inst_30362__$1;var ret = inst_30361;return ((function (img,ret,inst_30362,inst_30361,inst_30362__$1,state_val_30370){
return (function (){return cljs.core.async.close_BANG_.call(null,ret);
});
;})(img,ret,inst_30362,inst_30361,inst_30362__$1,state_val_30370))
})();var inst_30364 = inst_30362__$1.onload = inst_30363;var inst_30365 = inst_30362__$1.src = href;var state_30369__$1 = (function (){var statearr_30372 = state_30369;(statearr_30372[9] = inst_30365);
(statearr_30372[10] = inst_30364);
(statearr_30372[7] = inst_30362__$1);
return statearr_30372;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30369__$1,2,inst_30361);
} else
{return null;
}
}
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_30376 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30376[0] = state_machine__12424__auto__);
(statearr_30376[1] = 1);
return statearr_30376;
});
var state_machine__12424__auto____1 = (function (state_30369){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_30369);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e30377){if((e30377 instanceof Object))
{var ex__12427__auto__ = e30377;var statearr_30378_30380 = state_30369;(statearr_30378_30380[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30369);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30381 = state_30369;
state_30369 = G__30381;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_30369){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_30369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_30379 = f__12523__auto__.call(null);(statearr_30379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_30379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
});
processing.core.setup_and_draw = (function setup_and_draw(data,owner,node,opts){var map__30539 = opts;var map__30539__$1 = ((cljs.core.seq_QMARK_.call(null,map__30539))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);var animate = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"title","title",1124275658));var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var processing__$1 = (new Processing(node));var canvas = f.call(null,processing__$1,state);if((function (){var G__30540 = canvas;if(G__30540)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__30540.processing$core$ICanvas$;
}
})()))
{return true;
} else
{if((!G__30540.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__30540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__30540);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reified canvas must implement ICanvas"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"ICanvas","ICanvas",733855930,null),new cljs.core.Symbol(null,"canvas","canvas",1286729489,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,processing.core.processing_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),clojure.string.replace.call(null,title,/ /,"-")], null));
processing__$1.name = clojure.string.replace.call(null,title,/ /,"-");
processing__$1.draw = (function (){return processing.core.draw.call(null,canvas,cljs.core.merge.call(null,om.core.get_state.call(null,owner),cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",1127031096),processing__$1.width,new cljs.core.Keyword(null,"height","height",4087841945),processing__$1.height,new cljs.core.Keyword(null,"focused","focused",4617830121),processing__$1.focused,new cljs.core.Keyword(null,"online","online",4296649157),processing__$1.online,new cljs.core.Keyword(null,"screen","screen",4401181662),processing__$1.screen,new cljs.core.Keyword(null,"frame-count","frame-count",4065819681),processing__$1.frameCount], null)),processing.core.mouse.call(null,processing__$1),processing.core.keyboard.call(null,processing__$1));
});
processing__$1.setup = (function (){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_30562){var state_val_30563 = (state_30562[1]);if((state_val_30563 === 1))
{var inst_30541 = (state_30562[7]);var inst_30541__$1 = processing.core.setup.call(null,canvas);var inst_30542 = (inst_30541__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);var state_30562__$1 = (function (){var statearr_30564 = state_30562;(statearr_30564[7] = inst_30541__$1);
return statearr_30564;
})();if(cljs.core.truth_(inst_30542))
{var statearr_30565_30696 = state_30562__$1;(statearr_30565_30696[1] = 2);
} else
{var statearr_30566_30697 = state_30562__$1;(statearr_30566_30697[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 2))
{var inst_30541 = (state_30562[7]);var state_30562__$1 = state_30562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,5,inst_30541);
} else
{if((state_val_30563 === 3))
{var inst_30541 = (state_30562[7]);var state_30562__$1 = state_30562;if(cljs.core.truth_(inst_30541))
{var statearr_30567_30698 = state_30562__$1;(statearr_30567_30698[1] = 9);
} else
{var statearr_30568_30699 = state_30562__$1;(statearr_30568_30699[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 4))
{var inst_30558 = (state_30562[2]);var inst_30559 = processing__$1.resetMatrix;var inst_30560 = inst_30559.call(null);var state_30562__$1 = (function (){var statearr_30569 = state_30562;(statearr_30569[8] = inst_30558);
return statearr_30569;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30562__$1,inst_30560);
} else
{if((state_val_30563 === 5))
{var inst_30545 = (state_30562[9]);var inst_30545__$1 = (state_30562[2]);var state_30562__$1 = (function (){var statearr_30570 = state_30562;(statearr_30570[9] = inst_30545__$1);
return statearr_30570;
})();if(cljs.core.truth_(inst_30545__$1))
{var statearr_30571_30700 = state_30562__$1;(statearr_30571_30700[1] = 6);
} else
{var statearr_30572_30701 = state_30562__$1;(statearr_30572_30701[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 6))
{var inst_30545 = (state_30562[9]);var state_30562__$1 = state_30562;var statearr_30573_30702 = state_30562__$1;(statearr_30573_30702[2] = inst_30545);
(statearr_30573_30702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 7))
{var state_30562__$1 = state_30562;var statearr_30574_30703 = state_30562__$1;(statearr_30574_30703[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_30574_30703[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 8))
{var inst_30549 = (state_30562[2]);var inst_30550 = cljs.core.reset_BANG_.call(null,state,inst_30549);var state_30562__$1 = state_30562;var statearr_30575_30704 = state_30562__$1;(statearr_30575_30704[2] = inst_30550);
(statearr_30575_30704[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 9))
{var inst_30541 = (state_30562[7]);var state_30562__$1 = state_30562;var statearr_30576_30705 = state_30562__$1;(statearr_30576_30705[2] = inst_30541);
(statearr_30576_30705[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 10))
{var state_30562__$1 = state_30562;var statearr_30577_30706 = state_30562__$1;(statearr_30577_30706[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_30577_30706[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30563 === 11))
{var inst_30555 = (state_30562[2]);var inst_30556 = cljs.core.reset_BANG_.call(null,state,inst_30555);var state_30562__$1 = state_30562;var statearr_30578_30707 = state_30562__$1;(statearr_30578_30707[2] = inst_30556);
(statearr_30578_30707[1] = 4);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_30582 = [null,null,null,null,null,null,null,null,null,null];(statearr_30582[0] = state_machine__12424__auto__);
(statearr_30582[1] = 1);
return statearr_30582;
});
var state_machine__12424__auto____1 = (function (state_30562){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_30562);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e30583){if((e30583 instanceof Object))
{var ex__12427__auto__ = e30583;var statearr_30584_30708 = state_30562;(statearr_30584_30708[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30709 = state_30562;
state_30562 = G__30709;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_30585 = f__12523__auto__.call(null);(statearr_30585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_30585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
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
var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_30651){var state_val_30652 = (state_30651[1]);if((state_val_30652 === 1))
{var inst_30586 = processing__$1.setup;var inst_30587 = inst_30586.call(null);var state_30651__$1 = state_30651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30651__$1,2,inst_30587);
} else
{if((state_val_30652 === 2))
{var inst_30589 = (state_30651[2]);var inst_30590 = animate === false;var state_30651__$1 = (function (){var statearr_30653 = state_30651;(statearr_30653[7] = inst_30589);
return statearr_30653;
})();if(cljs.core.truth_(inst_30590))
{var statearr_30654_30710 = state_30651__$1;(statearr_30654_30710[1] = 3);
} else
{var statearr_30655_30711 = state_30651__$1;(statearr_30655_30711[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 3))
{var inst_30592 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_30593 = (inst_30592 instanceof Processing);var inst_30594 = (inst_30593) && (true);var state_30651__$1 = state_30651;if(cljs.core.truth_(inst_30594))
{var statearr_30656_30712 = state_30651__$1;(statearr_30656_30712[1] = 6);
} else
{var statearr_30657_30713 = state_30651__$1;(statearr_30657_30713[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 4))
{var inst_30640 = typeof requestAnimationFrame !== 'undefined';var state_30651__$1 = state_30651;if(cljs.core.truth_(inst_30640))
{var statearr_30658_30714 = state_30651__$1;(statearr_30658_30714[1] = 24);
} else
{var statearr_30659_30715 = state_30651__$1;(statearr_30659_30715[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 5))
{var inst_30649 = (state_30651[2]);var state_30651__$1 = state_30651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30651__$1,inst_30649);
} else
{if((state_val_30652 === 6))
{var inst_30596 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_30597 = (inst_30596["draw"]);var inst_30598 = inst_30597.call(null);var state_30651__$1 = state_30651;var statearr_30660_30716 = state_30651__$1;(statearr_30660_30716[2] = inst_30598);
(statearr_30660_30716[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 7))
{var inst_30603 = (state_30651[8]);var inst_30600 = cljs.core.deref.call(null,processing.core.processing_state);var inst_30601 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_30600);var inst_30602 = Processing.getInstanceById(inst_30601);var inst_30603__$1 = (inst_30602["draw"]);var state_30651__$1 = (function (){var statearr_30661 = state_30651;(statearr_30661[8] = inst_30603__$1);
return statearr_30661;
})();if(cljs.core.truth_(inst_30603__$1))
{var statearr_30662_30717 = state_30651__$1;(statearr_30662_30717[1] = 9);
} else
{var statearr_30663_30718 = state_30651__$1;(statearr_30663_30718[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 8))
{var inst_30638 = (state_30651[2]);var state_30651__$1 = state_30651;var statearr_30664_30719 = state_30651__$1;(statearr_30664_30719[2] = inst_30638);
(statearr_30664_30719[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 9))
{var inst_30603 = (state_30651[8]);var state_30651__$1 = state_30651;var statearr_30665_30720 = state_30651__$1;(statearr_30665_30720[2] = inst_30603);
(statearr_30665_30720[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 10))
{var inst_30606 = (Processing.instances[0]);var state_30651__$1 = state_30651;var statearr_30666_30721 = state_30651__$1;(statearr_30666_30721[2] = inst_30606);
(statearr_30666_30721[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 11))
{var inst_30608 = (state_30651[2]);var inst_30609 = cljs.core.fn_QMARK_.call(null,inst_30608);var state_30651__$1 = state_30651;if(inst_30609)
{var statearr_30667_30722 = state_30651__$1;(statearr_30667_30722[1] = 12);
} else
{var statearr_30668_30723 = state_30651__$1;(statearr_30668_30723[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 12))
{var inst_30613 = (state_30651[9]);var inst_30611 = cljs.core.deref.call(null,processing.core.processing_state);var inst_30612 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_30611);var inst_30613__$1 = Processing.getInstanceById(inst_30612);var state_30651__$1 = (function (){var statearr_30669 = state_30651;(statearr_30669[9] = inst_30613__$1);
return statearr_30669;
})();if(cljs.core.truth_(inst_30613__$1))
{var statearr_30670_30724 = state_30651__$1;(statearr_30670_30724[1] = 15);
} else
{var statearr_30671_30725 = state_30651__$1;(statearr_30671_30725[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 13))
{var state_30651__$1 = state_30651;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_30672_30726 = state_30651__$1;(statearr_30672_30726[1] = 18);
} else
{var statearr_30673_30727 = state_30651__$1;(statearr_30673_30727[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 14))
{var inst_30636 = (state_30651[2]);var state_30651__$1 = state_30651;var statearr_30674_30728 = state_30651__$1;(statearr_30674_30728[2] = inst_30636);
(statearr_30674_30728[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 15))
{var inst_30613 = (state_30651[9]);var state_30651__$1 = state_30651;var statearr_30675_30729 = state_30651__$1;(statearr_30675_30729[2] = inst_30613);
(statearr_30675_30729[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 16))
{var inst_30616 = (Processing.instances[0]);var state_30651__$1 = state_30651;var statearr_30676_30730 = state_30651__$1;(statearr_30676_30730[2] = inst_30616);
(statearr_30676_30730[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 17))
{var inst_30618 = (state_30651[2]);var inst_30619 = (inst_30618["draw"]);var inst_30620 = inst_30619.call(null);var state_30651__$1 = state_30651;var statearr_30677_30731 = state_30651__$1;(statearr_30677_30731[2] = inst_30620);
(statearr_30677_30731[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 18))
{var inst_30625 = (state_30651[10]);var inst_30623 = cljs.core.deref.call(null,processing.core.processing_state);var inst_30624 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_30623);var inst_30625__$1 = Processing.getInstanceById(inst_30624);var state_30651__$1 = (function (){var statearr_30678 = state_30651;(statearr_30678[10] = inst_30625__$1);
return statearr_30678;
})();if(cljs.core.truth_(inst_30625__$1))
{var statearr_30679_30732 = state_30651__$1;(statearr_30679_30732[1] = 21);
} else
{var statearr_30680_30733 = state_30651__$1;(statearr_30680_30733[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 19))
{var state_30651__$1 = state_30651;var statearr_30681_30734 = state_30651__$1;(statearr_30681_30734[2] = null);
(statearr_30681_30734[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 20))
{var inst_30634 = (state_30651[2]);var state_30651__$1 = state_30651;var statearr_30682_30735 = state_30651__$1;(statearr_30682_30735[2] = inst_30634);
(statearr_30682_30735[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 21))
{var inst_30625 = (state_30651[10]);var state_30651__$1 = state_30651;var statearr_30683_30736 = state_30651__$1;(statearr_30683_30736[2] = inst_30625);
(statearr_30683_30736[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 22))
{var inst_30628 = (Processing.instances[0]);var state_30651__$1 = state_30651;var statearr_30684_30737 = state_30651__$1;(statearr_30684_30737[2] = inst_30628);
(statearr_30684_30737[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 23))
{var inst_30630 = (state_30651[2]);var inst_30631 = (inst_30630["draw"]);var state_30651__$1 = state_30651;var statearr_30685_30738 = state_30651__$1;(statearr_30685_30738[2] = inst_30631);
(statearr_30685_30738[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 24))
{var inst_30642 = processing.core.start_animation.call(null,processing__$1);var state_30651__$1 = state_30651;var statearr_30686_30739 = state_30651__$1;(statearr_30686_30739[2] = inst_30642);
(statearr_30686_30739[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 25))
{var inst_30644 = (function (){return ((function (state_val_30652){
return (function render(){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(function (){var or__7850__auto__ = (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"]);if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()))
{((function (){var or__7850__auto__ = Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)));if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((function (){var or__7850__auto__ = Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)));if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return (Processing.instances[0]);
}
})()["draw"]);
} else
{}
}
}
return setTimeout(16,render);
});
;})(state_val_30652))
})();var inst_30645 = inst_30644.call(null);var state_30651__$1 = state_30651;var statearr_30687_30740 = state_30651__$1;(statearr_30687_30740[2] = inst_30645);
(statearr_30687_30740[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30652 === 26))
{var inst_30647 = (state_30651[2]);var state_30651__$1 = state_30651;var statearr_30688_30741 = state_30651__$1;(statearr_30688_30741[2] = inst_30647);
(statearr_30688_30741[1] = 5);
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
}
}
}
}
}
}
}
}
}
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_30692 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30692[0] = state_machine__12424__auto__);
(statearr_30692[1] = 1);
return statearr_30692;
});
var state_machine__12424__auto____1 = (function (state_30651){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_30651);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object))
{var ex__12427__auto__ = e30693;var statearr_30694_30742 = state_30651;(statearr_30694_30742[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30743 = state_30651;
state_30651 = G__30743;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_30651){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_30651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_30695 = f__12523__auto__.call(null);(statearr_30695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_30695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
});
/**
* @param {...*} var_args
*/
processing.core.canvas = (function() { 
var canvas__delegate = function (p__30744){var map__30749 = p__30744;var map__30749__$1 = ((cljs.core.seq_QMARK_.call(null,map__30749))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);var opts = map__30749__$1;var animate_QMARK_ = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"animate?","animate?",4513668336));var f = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"title","title",1124275658));return (function (data,owner){if(typeof processing.core.t30750 !== 'undefined')
{} else
{
/**
* @constructor
*/
processing.core.t30750 = (function (owner,data,title,f,animate_QMARK_,opts,map__30749,p__30744,canvas,meta30751){
this.owner = owner;
this.data = data;
this.title = title;
this.f = f;
this.animate_QMARK_ = animate_QMARK_;
this.opts = opts;
this.map__30749 = map__30749;
this.p__30744 = p__30744;
this.canvas = canvas;
this.meta30751 = meta30751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
processing.core.t30750.cljs$lang$type = true;
processing.core.t30750.cljs$lang$ctorStr = "processing.core/t30750";
processing.core.t30750.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"processing.core/t30750");
});
processing.core.t30750.prototype.om$core$IRenderState$ = true;
processing.core.t30750.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.canvas({"id": clojure.string.replace.call(null,self__.title,/ /,"-"), "ref": "canvas"});
});
processing.core.t30750.prototype.om$core$IDidUpdate$ = true;
processing.core.t30750.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (_,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;var temp__4092__auto__ = om.core.get_node.call(null,self__.owner,"canvas");if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;processing.core.stop_animation.call(null);
return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
} else
{return null;
}
});
processing.core.t30750.prototype.om$core$IDidMount$ = true;
processing.core.t30750.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
});
processing.core.t30750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30752){var self__ = this;
var _30752__$1 = this;return self__.meta30751;
});
processing.core.t30750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30752,meta30751__$1){var self__ = this;
var _30752__$1 = this;return (new processing.core.t30750(self__.owner,self__.data,self__.title,self__.f,self__.animate_QMARK_,self__.opts,self__.map__30749,self__.p__30744,self__.canvas,meta30751__$1));
});
processing.core.__GT_t30750 = (function __GT_t30750(owner__$1,data__$1,title__$1,f__$1,animate_QMARK___$1,opts__$1,map__30749__$2,p__30744__$1,canvas__$1,meta30751){return (new processing.core.t30750(owner__$1,data__$1,title__$1,f__$1,animate_QMARK___$1,opts__$1,map__30749__$2,p__30744__$1,canvas__$1,meta30751));
});
}
return (new processing.core.t30750(owner,data,title,f,animate_QMARK_,opts,map__30749__$1,p__30744,canvas,null));
});
};
var canvas = function (var_args){
var p__30744 = null;if (arguments.length > 0) {
  p__30744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,p__30744);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__30753){
var p__30744 = cljs.core.seq(arglist__30753);
return canvas__delegate(p__30744);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
