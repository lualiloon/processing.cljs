// Compiled by ClojureScript 0.0-2138
goog.provide('processing.core');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.net.ImageLoader');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
processing.core.processing_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null));
processing.core.ICanvas = (function (){var obj217517 = {};return obj217517;
})();
processing.core.setup = (function setup(canvas){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$ICanvas$setup$arity$1;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$ICanvas$setup$arity$1(canvas);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.setup[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.setup["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvas.setup",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.draw = (function draw(canvas,state,mouse,keyboard){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$ICanvas$draw$arity$4;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$ICanvas$draw$arity$4(canvas,state,mouse,keyboard);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.draw[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.draw["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvas.draw",canvas);
}
}
})().call(null,canvas,state,mouse,keyboard);
}
});
processing.core.IKeyPressed = (function (){var obj217519 = {};return obj217519;
})();
processing.core.key_pressed = (function key_pressed(canvas,keyboard){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IKeyPressed$key_pressed$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IKeyPressed$key_pressed$arity$2(canvas,keyboard);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.key_pressed[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.key_pressed["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyPressed.key-pressed",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IKeyReleased = (function (){var obj217521 = {};return obj217521;
})();
processing.core.key_released = (function key_released(canvas,keyboard){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IKeyReleased$key_released$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IKeyReleased$key_released$arity$2(canvas,keyboard);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.key_released[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.key_released["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyReleased.key-released",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IKeyTyped = (function (){var obj217523 = {};return obj217523;
})();
processing.core.key_typed = (function key_typed(canvas,keyboard){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IKeyTyped$key_typed$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IKeyTyped$key_typed$arity$2(canvas,keyboard);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.key_typed[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.key_typed["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTyped.key-typed",canvas);
}
}
})().call(null,canvas,keyboard);
}
});
processing.core.IMouseOut = (function (){var obj217525 = {};return obj217525;
})();
processing.core.mouse_out = (function mouse_out(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseOut$mouse_out$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseOut$mouse_out$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_out[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_out["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseOut.mouse-out",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseOver = (function (){var obj217527 = {};return obj217527;
})();
processing.core.mouse_over = (function mouse_over(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseOver$mouse_over$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseOver$mouse_over$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_over[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_over["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseOver.mouse-over",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseDragged = (function (){var obj217529 = {};return obj217529;
})();
processing.core.mouse_dragged = (function mouse_dragged(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseDragged$mouse_dragged$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseDragged$mouse_dragged$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_dragged[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_dragged["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseDragged.mouse-dragged",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMousePressed = (function (){var obj217531 = {};return obj217531;
})();
processing.core.mouse_pressed = (function mouse_pressed(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMousePressed$mouse_pressed$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMousePressed$mouse_pressed$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_pressed[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_pressed["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMousePressed.mouse-pressed",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseReleased = (function (){var obj217533 = {};return obj217533;
})();
processing.core.mouse_released = (function mouse_released(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseReleased$mouse_released$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseReleased$mouse_released$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_released[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_released["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseReleased.mouse-released",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseClicked = (function (){var obj217535 = {};return obj217535;
})();
processing.core.mouse_clicked = (function mouse_clicked(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseClicked$mouse_clicked$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseClicked$mouse_clicked$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_clicked[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_clicked["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseClicked.mouse-clicked",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseScrolled = (function (){var obj217537 = {};return obj217537;
})();
processing.core.mouse_scrolled = (function mouse_scrolled(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseScrolled$mouse_scrolled$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseScrolled$mouse_scrolled$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_scrolled[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_scrolled["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseScrolled.mouse-scrolled",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.IMouseMoved = (function (){var obj217539 = {};return obj217539;
})();
processing.core.mouse_moved = (function mouse_moved(canvas,mouse){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$IMouseMoved$mouse_moved$arity$2;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$IMouseMoved$mouse_moved$arity$2(canvas,mouse);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.mouse_moved[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.mouse_moved["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseMoved.mouse-moved",canvas);
}
}
})().call(null,canvas,mouse);
}
});
processing.core.ITouchStart = (function (){var obj217541 = {};return obj217541;
})();
processing.core.touch_start = (function touch_start(canvas){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$ITouchStart$touch_start$arity$1;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$ITouchStart$touch_start$arity$1(canvas);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.touch_start[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.touch_start["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchStart.touch-start",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchEnd = (function (){var obj217543 = {};return obj217543;
})();
processing.core.touch_end = (function touch_end(canvas){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$ITouchEnd$touch_end$arity$1;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$ITouchEnd$touch_end$arity$1(canvas);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.touch_end[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.touch_end["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchEnd.touch-end",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchMove = (function (){var obj217545 = {};return obj217545;
})();
processing.core.touch_move = (function touch_move(canvas){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$ITouchMove$touch_move$arity$1;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$ITouchMove$touch_move$arity$1(canvas);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.touch_move[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.touch_move["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchMove.touch-move",canvas);
}
}
})().call(null,canvas);
}
});
processing.core.ITouchCancel = (function (){var obj217547 = {};return obj217547;
})();
processing.core.touch_cancel = (function touch_cancel(canvas){if((function (){var and__10846__auto__ = canvas;if(and__10846__auto__)
{return canvas.processing$core$ITouchCancel$touch_cancel$arity$1;
} else
{return and__10846__auto__;
}
})())
{return canvas.processing$core$ITouchCancel$touch_cancel$arity$1(canvas);
} else
{var x__11479__auto__ = (((canvas == null))?null:canvas);return (function (){var or__10858__auto__ = (processing.core.touch_cancel[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (processing.core.touch_cancel["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITouchCancel.touch-cancel",canvas);
}
}
})().call(null,canvas);
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
processing.core.mouse = (function mouse(processing__$1){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",1013904362),processing__$1.mouseX,new cljs.core.Keyword(null,"y","y",1013904363),processing__$1.mouseY,new cljs.core.Keyword(null,"pX","pX",1013907802),processing__$1.pmouseX,new cljs.core.Keyword(null,"pY","pY",1013907803),processing__$1.pmouseY,new cljs.core.Keyword(null,"button","button",3931183780),processing__$1.mouseButton], null);
});
processing.core.keyboard = (function keyboard(processing__$1){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(processing__$1.key)].join(''),new cljs.core.Keyword(null,"key-code","key-code",1468352525),processing__$1.keyCode], null);
});
processing.core.raf = null;
processing.core.render = (function render(processing__$1){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"]);
} else
{}
}
}
processing__$1.frameCount = (processing__$1.frameCount + 1);
return processing.core.raf = requestAnimationFrame((function (){return render.call(null,processing__$1);
}));
});
processing.core.start_animation = (function start_animation(processing__$1){if(cljs.core.truth_(processing.core.raf))
{return null;
} else
{return processing.core.render.call(null,processing__$1);
}
});
processing.core.stop_animation = (function stop_animation(){if(cljs.core.truth_(processing.core.raf))
{cancelAnimationFrame(processing.core.raf);
processing.core.raf = null;
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["exit"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["exit"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["exit"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["exit"]);
} else
{return null;
}
}
}
} else
{return null;
}
});
processing.core.preload = (function preload(href){var c__189212__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_217575){var state_val_217576 = (state_217575[1]);if((state_val_217576 === 2))
{var inst_217568 = (state_217575[7]);var inst_217573 = (state_217575[2]);var state_217575__$1 = (function (){var statearr_217577 = state_217575;(statearr_217577[8] = inst_217573);
return statearr_217577;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_217575__$1,inst_217568);
} else
{if((state_val_217576 === 1))
{var inst_217568 = (state_217575[7]);var inst_217567 = cljs.core.async.chan.call(null,1);var inst_217568__$1 = (new Image());var inst_217569 = (function (){var img = inst_217568__$1;var ret = inst_217567;return ((function (img,ret,inst_217568,inst_217567,inst_217568__$1,state_val_217576){
return (function (){return cljs.core.async.close_BANG_.call(null,ret);
});
;})(img,ret,inst_217568,inst_217567,inst_217568__$1,state_val_217576))
})();var inst_217570 = inst_217568__$1.onload = inst_217569;var inst_217571 = inst_217568__$1.src = href;var state_217575__$1 = (function (){var statearr_217578 = state_217575;(statearr_217578[9] = inst_217571);
(statearr_217578[7] = inst_217568__$1);
(statearr_217578[10] = inst_217570);
return statearr_217578;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_217575__$1,2,inst_217567);
} else
{return null;
}
}
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_217582 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_217582[0] = state_machine__189143__auto__);
(statearr_217582[1] = 1);
return statearr_217582;
});
var state_machine__189143__auto____1 = (function (state_217575){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_217575);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e217583){if((e217583 instanceof Object))
{var ex__189146__auto__ = e217583;var statearr_217584_217586 = state_217575;(statearr_217584_217586[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_217575);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e217583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__217587 = state_217575;
state_217575 = G__217587;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_217575){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_217575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_217585 = f__189213__auto__.call(null);(statearr_217585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto__);
return statearr_217585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
}));
return c__189212__auto__;
});
processing.core.setup_and_draw = (function setup_and_draw(data,owner,node){var map__217777 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(data);var map__217777__$1 = ((cljs.core.seq_QMARK_.call(null,map__217777))?cljs.core.apply.call(null,cljs.core.hash_map,map__217777):map__217777);var animate = cljs.core.get.call(null,map__217777__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__217777__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__217777__$1,new cljs.core.Keyword(null,"title","title",1124275658));var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var processing__$1 = (new Processing(node));var canvas = f.call(null,processing__$1,state);if((function (){var G__217778 = canvas;if(G__217778)
{var bit__11502__auto__ = null;if(cljs.core.truth_((function (){var or__10858__auto__ = bit__11502__auto__;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return G__217778.processing$core$ICanvas$;
}
})()))
{return true;
} else
{if((!G__217778.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__217778);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__217778);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reified canvas must implement ICanvas"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"ICanvas","ICanvas",733855930,null),new cljs.core.Symbol(null,"canvas","canvas",1286729489,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,processing.core.processing_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),clojure.string.replace.call(null,title,/ /,"-")], null));
processing__$1.name = clojure.string.replace.call(null,title,/ /,"-");
processing__$1.draw = (function (){return processing.core.draw.call(null,canvas,cljs.core.merge.call(null,om.core.get_state.call(null,owner),cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",1127031096),processing__$1.width,new cljs.core.Keyword(null,"height","height",4087841945),processing__$1.height,new cljs.core.Keyword(null,"focused","focused",4617830121),processing__$1.focused,new cljs.core.Keyword(null,"online","online",4296649157),processing__$1.online,new cljs.core.Keyword(null,"screen","screen",4401181662),processing__$1.screen,new cljs.core.Keyword(null,"frame-count","frame-count",4065819681),processing__$1.frameCount], null)),processing.core.mouse.call(null,processing__$1),processing.core.keyboard.call(null,processing__$1));
});
processing__$1.setup = (function (){var c__189212__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_217813){var state_val_217814 = (state_217813[1]);if((state_val_217814 === 1))
{var inst_217779 = (state_217813[7]);var inst_217779__$1 = processing.core.setup.call(null,canvas);var state_217813__$1 = (function (){var statearr_217815 = state_217813;(statearr_217815[7] = inst_217779__$1);
return statearr_217815;
})();if(cljs.core.truth_(inst_217779__$1))
{var statearr_217816_217966 = state_217813__$1;(statearr_217816_217966[1] = 2);
} else
{var statearr_217817_217967 = state_217813__$1;(statearr_217817_217967[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 2))
{var state_217813__$1 = state_217813;if(null)
{var statearr_217818_217968 = state_217813__$1;(statearr_217818_217968[1] = 5);
} else
{var statearr_217819_217969 = state_217813__$1;(statearr_217819_217969[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 3))
{var inst_217779 = (state_217813[7]);var inst_217799 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_217779);var state_217813__$1 = state_217813;var statearr_217820_217970 = state_217813__$1;(statearr_217820_217970[2] = inst_217799);
(statearr_217820_217970[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 4))
{var inst_217801 = (state_217813[2]);var state_217813__$1 = state_217813;if(cljs.core.truth_(inst_217801))
{var statearr_217821_217971 = state_217813__$1;(statearr_217821_217971[1] = 14);
} else
{var statearr_217822_217972 = state_217813__$1;(statearr_217822_217972[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 5))
{var state_217813__$1 = state_217813;var statearr_217823_217973 = state_217813__$1;(statearr_217823_217973[2] = null);
(statearr_217823_217973[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 6))
{var inst_217779 = (state_217813[7]);var inst_217784 = inst_217779.cljs$core$async$impl$protocols$ReadPort$;var state_217813__$1 = state_217813;var statearr_217824_217974 = state_217813__$1;(statearr_217824_217974[2] = inst_217784);
(statearr_217824_217974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 7))
{var inst_217786 = (state_217813[2]);var state_217813__$1 = state_217813;if(cljs.core.truth_(inst_217786))
{var statearr_217825_217975 = state_217813__$1;(statearr_217825_217975[1] = 8);
} else
{var statearr_217826_217976 = state_217813__$1;(statearr_217826_217976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 8))
{var state_217813__$1 = state_217813;var statearr_217827_217977 = state_217813__$1;(statearr_217827_217977[2] = true);
(statearr_217827_217977[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 9))
{var inst_217779 = (state_217813[7]);var inst_217789 = inst_217779.cljs$lang$protocol_mask$partition$;var inst_217790 = (!inst_217789);var state_217813__$1 = state_217813;if(cljs.core.truth_(inst_217790))
{var statearr_217828_217978 = state_217813__$1;(statearr_217828_217978[1] = 11);
} else
{var statearr_217829_217979 = state_217813__$1;(statearr_217829_217979[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 10))
{var inst_217797 = (state_217813[2]);var state_217813__$1 = state_217813;var statearr_217830_217980 = state_217813__$1;(statearr_217830_217980[2] = inst_217797);
(statearr_217830_217980[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 11))
{var inst_217779 = (state_217813[7]);var inst_217792 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_217779);var state_217813__$1 = state_217813;var statearr_217831_217981 = state_217813__$1;(statearr_217831_217981[2] = inst_217792);
(statearr_217831_217981[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 12))
{var state_217813__$1 = state_217813;var statearr_217832_217982 = state_217813__$1;(statearr_217832_217982[2] = false);
(statearr_217832_217982[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 13))
{var inst_217795 = (state_217813[2]);var state_217813__$1 = state_217813;var statearr_217833_217983 = state_217813__$1;(statearr_217833_217983[2] = inst_217795);
(statearr_217833_217983[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 14))
{var inst_217779 = (state_217813[7]);var state_217813__$1 = state_217813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_217813__$1,17,inst_217779);
} else
{if((state_val_217814 === 15))
{var inst_217779 = (state_217813[7]);var inst_217807 = cljs.core.reset_BANG_.call(null,state,inst_217779);var state_217813__$1 = state_217813;var statearr_217834_217984 = state_217813__$1;(statearr_217834_217984[2] = inst_217807);
(statearr_217834_217984[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217814 === 16))
{var inst_217809 = (state_217813[2]);var inst_217810 = processing__$1.resetMatrix;var inst_217811 = inst_217810.call(null);var state_217813__$1 = (function (){var statearr_217835 = state_217813;(statearr_217835[8] = inst_217809);
return statearr_217835;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_217813__$1,inst_217811);
} else
{if((state_val_217814 === 17))
{var inst_217804 = (state_217813[2]);var inst_217805 = cljs.core.reset_BANG_.call(null,state,inst_217804);var state_217813__$1 = state_217813;var statearr_217836_217985 = state_217813__$1;(statearr_217836_217985[2] = inst_217805);
(statearr_217836_217985[1] = 16);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_217840 = [null,null,null,null,null,null,null,null,null];(statearr_217840[0] = state_machine__189143__auto__);
(statearr_217840[1] = 1);
return statearr_217840;
});
var state_machine__189143__auto____1 = (function (state_217813){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_217813);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e217841){if((e217841 instanceof Object))
{var ex__189146__auto__ = e217841;var statearr_217842_217986 = state_217813;(statearr_217842_217986[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_217813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e217841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__217987 = state_217813;
state_217813 = G__217987;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_217813){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_217813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_217843 = f__189213__auto__.call(null);(statearr_217843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto__);
return statearr_217843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
}));
return c__189212__auto__;
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
var c__189212__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_217924){var state_val_217925 = (state_217924[1]);if((state_val_217925 === 1))
{var inst_217844 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_217845 = (inst_217844 instanceof Processing);var inst_217846 = (inst_217845) && (true);var state_217924__$1 = state_217924;if(cljs.core.truth_(inst_217846))
{var statearr_217926_217988 = state_217924__$1;(statearr_217926_217988[1] = 3);
} else
{var statearr_217927_217989 = state_217924__$1;(statearr_217927_217989[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 2))
{var inst_217877 = (state_217924[2]);var inst_217878 = animate === false;var state_217924__$1 = (function (){var statearr_217928 = state_217924;(statearr_217928[7] = inst_217877);
return statearr_217928;
})();if(cljs.core.truth_(inst_217878))
{var statearr_217929_217990 = state_217924__$1;(statearr_217929_217990[1] = 12);
} else
{var statearr_217930_217991 = state_217924__$1;(statearr_217930_217991[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 3))
{var inst_217848 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_217849 = (inst_217848["setup"]);var inst_217850 = inst_217849.call(null);var state_217924__$1 = state_217924;var statearr_217931_217992 = state_217924__$1;(statearr_217931_217992[2] = inst_217850);
(statearr_217931_217992[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 4))
{var inst_217852 = cljs.core.deref.call(null,processing.core.processing_state);var inst_217853 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_217852);var inst_217854 = Processing.getInstanceById(inst_217853);var inst_217855 = (inst_217854["setup"]);var inst_217856 = cljs.core.fn_QMARK_.call(null,inst_217855);var state_217924__$1 = state_217924;if(inst_217856)
{var statearr_217932_217993 = state_217924__$1;(statearr_217932_217993[1] = 6);
} else
{var statearr_217933_217994 = state_217924__$1;(statearr_217933_217994[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 5))
{var inst_217875 = (state_217924[2]);var state_217924__$1 = state_217924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_217924__$1,2,inst_217875);
} else
{if((state_val_217925 === 6))
{var inst_217858 = cljs.core.deref.call(null,processing.core.processing_state);var inst_217859 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_217858);var inst_217860 = Processing.getInstanceById(inst_217859);var inst_217861 = (inst_217860["setup"]);var inst_217862 = inst_217861.call(null);var state_217924__$1 = state_217924;var statearr_217934_217995 = state_217924__$1;(statearr_217934_217995[2] = inst_217862);
(statearr_217934_217995[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 7))
{var state_217924__$1 = state_217924;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_217935_217996 = state_217924__$1;(statearr_217935_217996[1] = 9);
} else
{var statearr_217936_217997 = state_217924__$1;(statearr_217936_217997[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 8))
{var inst_217873 = (state_217924[2]);var state_217924__$1 = state_217924;var statearr_217937_217998 = state_217924__$1;(statearr_217937_217998[2] = inst_217873);
(statearr_217937_217998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 9))
{var inst_217865 = cljs.core.deref.call(null,processing.core.processing_state);var inst_217866 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_217865);var inst_217867 = Processing.getInstanceById(inst_217866);var inst_217868 = (inst_217867["setup"]);var state_217924__$1 = state_217924;var statearr_217938_217999 = state_217924__$1;(statearr_217938_217999[2] = inst_217868);
(statearr_217938_217999[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 10))
{var state_217924__$1 = state_217924;var statearr_217939_218000 = state_217924__$1;(statearr_217939_218000[2] = null);
(statearr_217939_218000[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 11))
{var inst_217871 = (state_217924[2]);var state_217924__$1 = state_217924;var statearr_217940_218001 = state_217924__$1;(statearr_217940_218001[2] = inst_217871);
(statearr_217940_218001[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 12))
{var inst_217880 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_217881 = (inst_217880 instanceof Processing);var inst_217882 = (inst_217881) && (true);var state_217924__$1 = state_217924;if(cljs.core.truth_(inst_217882))
{var statearr_217941_218002 = state_217924__$1;(statearr_217941_218002[1] = 15);
} else
{var statearr_217942_218003 = state_217924__$1;(statearr_217942_218003[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 13))
{var inst_217913 = typeof requestAnimationFrame !== 'undefined';var state_217924__$1 = state_217924;if(cljs.core.truth_(inst_217913))
{var statearr_217943_218004 = state_217924__$1;(statearr_217943_218004[1] = 24);
} else
{var statearr_217944_218005 = state_217924__$1;(statearr_217944_218005[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 14))
{var inst_217922 = (state_217924[2]);var state_217924__$1 = state_217924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_217924__$1,inst_217922);
} else
{if((state_val_217925 === 15))
{var inst_217884 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_217885 = (inst_217884["draw"]);var inst_217886 = inst_217885.call(null);var state_217924__$1 = state_217924;var statearr_217945_218006 = state_217924__$1;(statearr_217945_218006[2] = inst_217886);
(statearr_217945_218006[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 16))
{var inst_217888 = cljs.core.deref.call(null,processing.core.processing_state);var inst_217889 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_217888);var inst_217890 = Processing.getInstanceById(inst_217889);var inst_217891 = (inst_217890["draw"]);var inst_217892 = cljs.core.fn_QMARK_.call(null,inst_217891);var state_217924__$1 = state_217924;if(inst_217892)
{var statearr_217946_218007 = state_217924__$1;(statearr_217946_218007[1] = 18);
} else
{var statearr_217947_218008 = state_217924__$1;(statearr_217947_218008[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 17))
{var inst_217911 = (state_217924[2]);var state_217924__$1 = state_217924;var statearr_217948_218009 = state_217924__$1;(statearr_217948_218009[2] = inst_217911);
(statearr_217948_218009[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 18))
{var inst_217894 = cljs.core.deref.call(null,processing.core.processing_state);var inst_217895 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_217894);var inst_217896 = Processing.getInstanceById(inst_217895);var inst_217897 = (inst_217896["draw"]);var inst_217898 = inst_217897.call(null);var state_217924__$1 = state_217924;var statearr_217949_218010 = state_217924__$1;(statearr_217949_218010[2] = inst_217898);
(statearr_217949_218010[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 19))
{var state_217924__$1 = state_217924;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_217950_218011 = state_217924__$1;(statearr_217950_218011[1] = 21);
} else
{var statearr_217951_218012 = state_217924__$1;(statearr_217951_218012[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 20))
{var inst_217909 = (state_217924[2]);var state_217924__$1 = state_217924;var statearr_217952_218013 = state_217924__$1;(statearr_217952_218013[2] = inst_217909);
(statearr_217952_218013[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 21))
{var inst_217901 = cljs.core.deref.call(null,processing.core.processing_state);var inst_217902 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_217901);var inst_217903 = Processing.getInstanceById(inst_217902);var inst_217904 = (inst_217903["draw"]);var state_217924__$1 = state_217924;var statearr_217953_218014 = state_217924__$1;(statearr_217953_218014[2] = inst_217904);
(statearr_217953_218014[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 22))
{var state_217924__$1 = state_217924;var statearr_217954_218015 = state_217924__$1;(statearr_217954_218015[2] = null);
(statearr_217954_218015[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 23))
{var inst_217907 = (state_217924[2]);var state_217924__$1 = state_217924;var statearr_217955_218016 = state_217924__$1;(statearr_217955_218016[2] = inst_217907);
(statearr_217955_218016[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 24))
{var inst_217915 = processing.core.start_animation.call(null,processing__$1);var state_217924__$1 = state_217924;var statearr_217956_218017 = state_217924__$1;(statearr_217956_218017[2] = inst_217915);
(statearr_217956_218017[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 25))
{var inst_217917 = (function (){return ((function (state_val_217925){
return (function render(){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["draw"]);
} else
{}
}
}
return setTimeout(16,render);
});
;})(state_val_217925))
})();var inst_217918 = inst_217917.call(null);var state_217924__$1 = state_217924;var statearr_217957_218018 = state_217924__$1;(statearr_217957_218018[2] = inst_217918);
(statearr_217957_218018[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_217925 === 26))
{var inst_217920 = (state_217924[2]);var state_217924__$1 = state_217924;var statearr_217958_218019 = state_217924__$1;(statearr_217958_218019[2] = inst_217920);
(statearr_217958_218019[1] = 14);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_217962 = [null,null,null,null,null,null,null,null];(statearr_217962[0] = state_machine__189143__auto__);
(statearr_217962[1] = 1);
return statearr_217962;
});
var state_machine__189143__auto____1 = (function (state_217924){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_217924);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e217963){if((e217963 instanceof Object))
{var ex__189146__auto__ = e217963;var statearr_217964_218020 = state_217924;(statearr_217964_218020[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_217924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e217963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__218021 = state_217924;
state_217924 = G__218021;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_217924){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_217924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_217965 = f__189213__auto__.call(null);(statearr_217965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto__);
return statearr_217965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
}));
return c__189212__auto__;
});
processing.core.canvas = (function canvas(data,owner){var map__218026 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(data);var map__218026__$1 = ((cljs.core.seq_QMARK_.call(null,map__218026))?cljs.core.apply.call(null,cljs.core.hash_map,map__218026):map__218026);var animate = cljs.core.get.call(null,map__218026__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__218026__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__218026__$1,new cljs.core.Keyword(null,"title","title",1124275658));if(typeof processing.core.t218027 !== 'undefined')
{} else
{
/**
* @constructor
*/
processing.core.t218027 = (function (title,f,animate,map__218026,owner,data,canvas,meta218028){
this.title = title;
this.f = f;
this.animate = animate;
this.map__218026 = map__218026;
this.owner = owner;
this.data = data;
this.canvas = canvas;
this.meta218028 = meta218028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
processing.core.t218027.cljs$lang$type = true;
processing.core.t218027.cljs$lang$ctorStr = "processing.core/t218027";
processing.core.t218027.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"processing.core/t218027");
});
processing.core.t218027.prototype.om$core$IRenderState$ = true;
processing.core.t218027.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.canvas({"id": clojure.string.replace.call(null,self__.title,/ /,"-"), "ref": "canvas"});
});
processing.core.t218027.prototype.om$core$IDidUpdate$ = true;
processing.core.t218027.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (_,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;var temp__4092__auto__ = om.core.get_node.call(null,self__.owner,"canvas");if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;processing.core.stop_animation.call(null);
return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node);
} else
{return null;
}
});
processing.core.t218027.prototype.om$core$IDidMount$ = true;
processing.core.t218027.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node);
});
processing.core.t218027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_218029){var self__ = this;
var _218029__$1 = this;return self__.meta218028;
});
processing.core.t218027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_218029,meta218028__$1){var self__ = this;
var _218029__$1 = this;return (new processing.core.t218027(self__.title,self__.f,self__.animate,self__.map__218026,self__.owner,self__.data,self__.canvas,meta218028__$1));
});
processing.core.__GT_t218027 = (function __GT_t218027(title__$1,f__$1,animate__$1,map__218026__$2,owner__$1,data__$1,canvas__$1,meta218028){return (new processing.core.t218027(title__$1,f__$1,animate__$1,map__218026__$2,owner__$1,data__$1,canvas__$1,meta218028));
});
}
return (new processing.core.t218027(title,f,animate,map__218026__$1,owner,data,canvas,null));
});

//# sourceMappingURL=core.js.map