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
processing.core.ICanvas = (function (){var obj50798 = {};return obj50798;
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
processing.core.IMouseClicked = (function (){var obj50800 = {};return obj50800;
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
processing.core.IMouseDragged = (function (){var obj50802 = {};return obj50802;
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
processing.core.IMouseMoved = (function (){var obj50804 = {};return obj50804;
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
processing.core.IMousePressed = (function (){var obj50806 = {};return obj50806;
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
processing.core.IMouseReleased = (function (){var obj50808 = {};return obj50808;
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
processing.core.IMouseScrolled = (function (){var obj50810 = {};return obj50810;
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
processing.core.IMouseOver = (function (){var obj50812 = {};return obj50812;
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
processing.core.IMouseOut = (function (){var obj50814 = {};return obj50814;
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
processing.core.ITouchStart = (function (){var obj50816 = {};return obj50816;
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
processing.core.ITouchEnd = (function (){var obj50818 = {};return obj50818;
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
processing.core.ITouchMove = (function (){var obj50820 = {};return obj50820;
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
processing.core.ITouchCancel = (function (){var obj50822 = {};return obj50822;
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
processing.core.IKeyPressed = (function (){var obj50824 = {};return obj50824;
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
processing.core.IKeyTyped = (function (){var obj50826 = {};return obj50826;
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
processing.core.IKeyReleased = (function (){var obj50828 = {};return obj50828;
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
{if(cljs.core.fn_QMARK_.call(null,(cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))))
{((cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))["draw"]);
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
{if(cljs.core.fn_QMARK_.call(null,(cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))))
{return ((cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))["exit"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ((cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))["exit"]);
} else
{return null;
}
}
}
}
});
processing.core.preload = (function preload(href){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50856){var state_val_50857 = (state_50856[1]);if((state_val_50857 === 2))
{var inst_50849 = (state_50856[7]);var inst_50854 = (state_50856[2]);var state_50856__$1 = (function (){var statearr_50858 = state_50856;(statearr_50858[8] = inst_50854);
return statearr_50858;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50856__$1,inst_50849);
} else
{if((state_val_50857 === 1))
{var inst_50849 = (state_50856[7]);var inst_50848 = cljs.core.async.chan.call(null,1);var inst_50849__$1 = (new Image());var inst_50850 = (function (){var img = inst_50849__$1;var ret = inst_50848;return ((function (img,ret,inst_50849,inst_50848,inst_50849__$1,state_val_50857){
return (function (){return cljs.core.async.close_BANG_.call(null,ret);
});
;})(img,ret,inst_50849,inst_50848,inst_50849__$1,state_val_50857))
})();var inst_50851 = inst_50849__$1.onload = inst_50850;var inst_50852 = inst_50849__$1.src = href;var state_50856__$1 = (function (){var statearr_50859 = state_50856;(statearr_50859[9] = inst_50852);
(statearr_50859[10] = inst_50851);
(statearr_50859[7] = inst_50849__$1);
return statearr_50859;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50856__$1,2,inst_50848);
} else
{return null;
}
}
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_50863 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50863[0] = state_machine__12424__auto__);
(statearr_50863[1] = 1);
return statearr_50863;
});
var state_machine__12424__auto____1 = (function (state_50856){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50856);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50864){if((e50864 instanceof Object))
{var ex__12427__auto__ = e50864;var statearr_50865_50867 = state_50856;(statearr_50865_50867[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50868 = state_50856;
state_50856 = G__50868;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50856){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50866 = f__12523__auto__.call(null);(statearr_50866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_50866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
});
processing.core.setup_and_draw = (function setup_and_draw(data,owner,node,opts){var map__51031 = opts;var map__51031__$1 = ((cljs.core.seq_QMARK_.call(null,map__51031))?cljs.core.apply.call(null,cljs.core.hash_map,map__51031):map__51031);var animate = cljs.core.get.call(null,map__51031__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__51031__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__51031__$1,new cljs.core.Keyword(null,"title","title",1124275658));var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var processing__$1 = (new Processing(node));var canvas = f.call(null,processing__$1,state);if((function (){var G__51032 = canvas;if(G__51032)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__51032.processing$core$ICanvas$;
}
})()))
{return true;
} else
{if((!G__51032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__51032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__51032);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reified canvas must implement ICanvas"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"ICanvas","ICanvas",733855930,null),new cljs.core.Symbol(null,"canvas","canvas",1286729489,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,processing.core.processing_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),clojure.string.replace.call(null,title,/ /,"-")], null));
processing__$1.name = clojure.string.replace.call(null,title,/ /,"-");
processing__$1.draw = (function (){return processing.core.draw.call(null,canvas,cljs.core.merge.call(null,om.core.get_state.call(null,owner),cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",1127031096),processing__$1.width,new cljs.core.Keyword(null,"height","height",4087841945),processing__$1.height,new cljs.core.Keyword(null,"focused","focused",4617830121),processing__$1.focused,new cljs.core.Keyword(null,"online","online",4296649157),processing__$1.online,new cljs.core.Keyword(null,"screen","screen",4401181662),processing__$1.screen,new cljs.core.Keyword(null,"frame-count","frame-count",4065819681),processing__$1.frameCount], null)),processing.core.mouse.call(null,processing__$1),processing.core.keyboard.call(null,processing__$1));
});
processing__$1.setup = (function (){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_51054){var state_val_51055 = (state_51054[1]);if((state_val_51055 === 1))
{var inst_51033 = (state_51054[7]);var inst_51033__$1 = processing.core.setup.call(null,canvas);var inst_51034 = (inst_51033__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);var state_51054__$1 = (function (){var statearr_51056 = state_51054;(statearr_51056[7] = inst_51033__$1);
return statearr_51056;
})();if(cljs.core.truth_(inst_51034))
{var statearr_51057_51193 = state_51054__$1;(statearr_51057_51193[1] = 2);
} else
{var statearr_51058_51194 = state_51054__$1;(statearr_51058_51194[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 2))
{var inst_51033 = (state_51054[7]);var state_51054__$1 = state_51054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51054__$1,5,inst_51033);
} else
{if((state_val_51055 === 3))
{var inst_51033 = (state_51054[7]);var state_51054__$1 = state_51054;if(cljs.core.truth_(inst_51033))
{var statearr_51059_51195 = state_51054__$1;(statearr_51059_51195[1] = 9);
} else
{var statearr_51060_51196 = state_51054__$1;(statearr_51060_51196[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 4))
{var inst_51050 = (state_51054[2]);var inst_51051 = processing__$1.resetMatrix;var inst_51052 = inst_51051.call(null);var state_51054__$1 = (function (){var statearr_51061 = state_51054;(statearr_51061[8] = inst_51050);
return statearr_51061;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51054__$1,inst_51052);
} else
{if((state_val_51055 === 5))
{var inst_51037 = (state_51054[9]);var inst_51037__$1 = (state_51054[2]);var state_51054__$1 = (function (){var statearr_51062 = state_51054;(statearr_51062[9] = inst_51037__$1);
return statearr_51062;
})();if(cljs.core.truth_(inst_51037__$1))
{var statearr_51063_51197 = state_51054__$1;(statearr_51063_51197[1] = 6);
} else
{var statearr_51064_51198 = state_51054__$1;(statearr_51064_51198[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 6))
{var inst_51037 = (state_51054[9]);var state_51054__$1 = state_51054;var statearr_51065_51199 = state_51054__$1;(statearr_51065_51199[2] = inst_51037);
(statearr_51065_51199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 7))
{var state_51054__$1 = state_51054;var statearr_51066_51200 = state_51054__$1;(statearr_51066_51200[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_51066_51200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 8))
{var inst_51041 = (state_51054[2]);var inst_51042 = cljs.core.reset_BANG_.call(null,state,inst_51041);var state_51054__$1 = state_51054;var statearr_51067_51201 = state_51054__$1;(statearr_51067_51201[2] = inst_51042);
(statearr_51067_51201[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 9))
{var inst_51033 = (state_51054[7]);var state_51054__$1 = state_51054;var statearr_51068_51202 = state_51054__$1;(statearr_51068_51202[2] = inst_51033);
(statearr_51068_51202[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 10))
{var state_51054__$1 = state_51054;var statearr_51069_51203 = state_51054__$1;(statearr_51069_51203[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_51069_51203[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51055 === 11))
{var inst_51047 = (state_51054[2]);var inst_51048 = cljs.core.reset_BANG_.call(null,state,inst_51047);var state_51054__$1 = state_51054;var statearr_51070_51204 = state_51054__$1;(statearr_51070_51204[2] = inst_51048);
(statearr_51070_51204[1] = 4);
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
var state_machine__12424__auto____0 = (function (){var statearr_51074 = [null,null,null,null,null,null,null,null,null,null];(statearr_51074[0] = state_machine__12424__auto__);
(statearr_51074[1] = 1);
return statearr_51074;
});
var state_machine__12424__auto____1 = (function (state_51054){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_51054);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e51075){if((e51075 instanceof Object))
{var ex__12427__auto__ = e51075;var statearr_51076_51205 = state_51054;(statearr_51076_51205[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51206 = state_51054;
state_51054 = G__51206;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_51054){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_51054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_51077 = f__12523__auto__.call(null);(statearr_51077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_51077;
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
var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_51151){var state_val_51152 = (state_51151[1]);if((state_val_51152 === 1))
{var inst_51078 = processing__$1.setup;var inst_51079 = inst_51078.call(null);var state_51151__$1 = state_51151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51151__$1,2,inst_51079);
} else
{if((state_val_51152 === 2))
{var inst_51081 = (state_51151[2]);var inst_51082 = animate === false;var state_51151__$1 = (function (){var statearr_51153 = state_51151;(statearr_51153[7] = inst_51081);
return statearr_51153;
})();if(cljs.core.truth_(inst_51082))
{var statearr_51154_51207 = state_51151__$1;(statearr_51154_51207[1] = 3);
} else
{var statearr_51155_51208 = state_51151__$1;(statearr_51155_51208[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 3))
{var inst_51084 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_51085 = (inst_51084 instanceof Processing);var inst_51086 = (inst_51085) && (true);var state_51151__$1 = state_51151;if(cljs.core.truth_(inst_51086))
{var statearr_51156_51209 = state_51151__$1;(statearr_51156_51209[1] = 6);
} else
{var statearr_51157_51210 = state_51151__$1;(statearr_51157_51210[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 4))
{var inst_51140 = typeof requestAnimationFrame !== 'undefined';var state_51151__$1 = state_51151;if(cljs.core.truth_(inst_51140))
{var statearr_51158_51211 = state_51151__$1;(statearr_51158_51211[1] = 24);
} else
{var statearr_51159_51212 = state_51151__$1;(statearr_51159_51212[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 5))
{var inst_51149 = (state_51151[2]);var state_51151__$1 = state_51151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51151__$1,inst_51149);
} else
{if((state_val_51152 === 6))
{var inst_51088 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_51089 = (inst_51088["draw"]);var inst_51090 = inst_51089.call(null);var state_51151__$1 = state_51151;var statearr_51160_51213 = state_51151__$1;(statearr_51160_51213[2] = inst_51090);
(statearr_51160_51213[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 7))
{var inst_51092 = cljs.core.deref.call(null,processing.core.processing_state);var inst_51093 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_51092);var inst_51094 = Processing.getInstanceById(inst_51093);var state_51151__$1 = state_51151;if(cljs.core.truth_(inst_51094))
{var statearr_51161_51214 = state_51151__$1;(statearr_51161_51214[1] = 9);
} else
{var statearr_51162_51215 = state_51151__$1;(statearr_51162_51215[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 8))
{var inst_51138 = (state_51151[2]);var state_51151__$1 = state_51151;var statearr_51163_51216 = state_51151__$1;(statearr_51163_51216[2] = inst_51138);
(statearr_51163_51216[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 9))
{var inst_51096 = cljs.core.deref.call(null,processing.core.processing_state);var inst_51097 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_51096);var inst_51098 = Processing.getInstanceById(inst_51097);var state_51151__$1 = state_51151;var statearr_51164_51217 = state_51151__$1;(statearr_51164_51217[2] = inst_51098);
(statearr_51164_51217[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 10))
{var inst_51100 = (Processing.instances[0]);var state_51151__$1 = state_51151;var statearr_51165_51218 = state_51151__$1;(statearr_51165_51218[2] = inst_51100);
(statearr_51165_51218[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 11))
{var inst_51102 = (state_51151[2]);var inst_51103 = cljs.core.fn_QMARK_.call(null,inst_51102);var state_51151__$1 = state_51151;if(inst_51103)
{var statearr_51166_51219 = state_51151__$1;(statearr_51166_51219[1] = 12);
} else
{var statearr_51167_51220 = state_51151__$1;(statearr_51167_51220[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 12))
{var inst_51105 = cljs.core.deref.call(null,processing.core.processing_state);var inst_51106 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_51105);var inst_51107 = Processing.getInstanceById(inst_51106);var state_51151__$1 = state_51151;if(cljs.core.truth_(inst_51107))
{var statearr_51168_51221 = state_51151__$1;(statearr_51168_51221[1] = 15);
} else
{var statearr_51169_51222 = state_51151__$1;(statearr_51169_51222[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 13))
{var state_51151__$1 = state_51151;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_51170_51223 = state_51151__$1;(statearr_51170_51223[1] = 18);
} else
{var statearr_51171_51224 = state_51151__$1;(statearr_51171_51224[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 14))
{var inst_51136 = (state_51151[2]);var state_51151__$1 = state_51151;var statearr_51172_51225 = state_51151__$1;(statearr_51172_51225[2] = inst_51136);
(statearr_51172_51225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 15))
{var inst_51109 = cljs.core.deref.call(null,processing.core.processing_state);var inst_51110 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_51109);var inst_51111 = Processing.getInstanceById(inst_51110);var state_51151__$1 = state_51151;var statearr_51173_51226 = state_51151__$1;(statearr_51173_51226[2] = inst_51111);
(statearr_51173_51226[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 16))
{var inst_51113 = (Processing.instances[0]);var state_51151__$1 = state_51151;var statearr_51174_51227 = state_51151__$1;(statearr_51174_51227[2] = inst_51113);
(statearr_51174_51227[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 17))
{var inst_51115 = (state_51151[2]);var inst_51116 = (inst_51115["draw"]);var inst_51117 = inst_51116.call(null);var state_51151__$1 = state_51151;var statearr_51175_51228 = state_51151__$1;(statearr_51175_51228[2] = inst_51117);
(statearr_51175_51228[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 18))
{var inst_51120 = cljs.core.deref.call(null,processing.core.processing_state);var inst_51121 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_51120);var inst_51122 = Processing.getInstanceById(inst_51121);var state_51151__$1 = state_51151;if(cljs.core.truth_(inst_51122))
{var statearr_51176_51229 = state_51151__$1;(statearr_51176_51229[1] = 21);
} else
{var statearr_51177_51230 = state_51151__$1;(statearr_51177_51230[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 19))
{var state_51151__$1 = state_51151;var statearr_51178_51231 = state_51151__$1;(statearr_51178_51231[2] = null);
(statearr_51178_51231[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 20))
{var inst_51134 = (state_51151[2]);var state_51151__$1 = state_51151;var statearr_51179_51232 = state_51151__$1;(statearr_51179_51232[2] = inst_51134);
(statearr_51179_51232[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 21))
{var inst_51124 = cljs.core.deref.call(null,processing.core.processing_state);var inst_51125 = new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(inst_51124);var inst_51126 = Processing.getInstanceById(inst_51125);var state_51151__$1 = state_51151;var statearr_51180_51233 = state_51151__$1;(statearr_51180_51233[2] = inst_51126);
(statearr_51180_51233[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 22))
{var inst_51128 = (Processing.instances[0]);var state_51151__$1 = state_51151;var statearr_51181_51234 = state_51151__$1;(statearr_51181_51234[2] = inst_51128);
(statearr_51181_51234[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 23))
{var inst_51130 = (state_51151[2]);var inst_51131 = (inst_51130["draw"]);var state_51151__$1 = state_51151;var statearr_51182_51235 = state_51151__$1;(statearr_51182_51235[2] = inst_51131);
(statearr_51182_51235[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 24))
{var inst_51142 = processing.core.start_animation.call(null,processing__$1);var state_51151__$1 = state_51151;var statearr_51183_51236 = state_51151__$1;(statearr_51183_51236[2] = inst_51142);
(statearr_51183_51236[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 25))
{var inst_51144 = (function (){return ((function (state_val_51152){
return (function render(){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))))
{((cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((cljs.core.truth_(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))))?Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state))):(Processing.instances[0]))["draw"]);
} else
{}
}
}
return setTimeout(16,render);
});
;})(state_val_51152))
})();var inst_51145 = inst_51144.call(null);var state_51151__$1 = state_51151;var statearr_51184_51237 = state_51151__$1;(statearr_51184_51237[2] = inst_51145);
(statearr_51184_51237[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51152 === 26))
{var inst_51147 = (state_51151[2]);var state_51151__$1 = state_51151;var statearr_51185_51238 = state_51151__$1;(statearr_51185_51238[2] = inst_51147);
(statearr_51185_51238[1] = 5);
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
var state_machine__12424__auto____0 = (function (){var statearr_51189 = [null,null,null,null,null,null,null,null];(statearr_51189[0] = state_machine__12424__auto__);
(statearr_51189[1] = 1);
return statearr_51189;
});
var state_machine__12424__auto____1 = (function (state_51151){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_51151);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e51190){if((e51190 instanceof Object))
{var ex__12427__auto__ = e51190;var statearr_51191_51239 = state_51151;(statearr_51191_51239[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51240 = state_51151;
state_51151 = G__51240;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_51151){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_51151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_51192 = f__12523__auto__.call(null);(statearr_51192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_51192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
});
/**
* @param {...*} var_args
*/
processing.core.canvas = (function() { 
var canvas__delegate = function (p__51241){var map__51246 = p__51241;var map__51246__$1 = ((cljs.core.seq_QMARK_.call(null,map__51246))?cljs.core.apply.call(null,cljs.core.hash_map,map__51246):map__51246);var opts = map__51246__$1;var animate_QMARK_ = cljs.core.get.call(null,map__51246__$1,new cljs.core.Keyword(null,"animate?","animate?",4513668336));var f = cljs.core.get.call(null,map__51246__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__51246__$1,new cljs.core.Keyword(null,"title","title",1124275658));return (function (data,owner){if(typeof processing.core.t51247 !== 'undefined')
{} else
{
/**
* @constructor
*/
processing.core.t51247 = (function (owner,data,title,f,animate_QMARK_,opts,map__51246,p__51241,canvas,meta51248){
this.owner = owner;
this.data = data;
this.title = title;
this.f = f;
this.animate_QMARK_ = animate_QMARK_;
this.opts = opts;
this.map__51246 = map__51246;
this.p__51241 = p__51241;
this.canvas = canvas;
this.meta51248 = meta51248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
processing.core.t51247.cljs$lang$type = true;
processing.core.t51247.cljs$lang$ctorStr = "processing.core/t51247";
processing.core.t51247.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"processing.core/t51247");
});
processing.core.t51247.prototype.om$core$IRenderState$ = true;
processing.core.t51247.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.canvas({"id": clojure.string.replace.call(null,self__.title,/ /,"-"), "ref": "canvas"});
});
processing.core.t51247.prototype.om$core$IDidUpdate$ = true;
processing.core.t51247.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (_,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;var temp__4092__auto__ = om.core.get_node.call(null,self__.owner,"canvas");if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;processing.core.stop_animation.call(null);
return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
} else
{return null;
}
});
processing.core.t51247.prototype.om$core$IDidMount$ = true;
processing.core.t51247.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
});
processing.core.t51247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51249){var self__ = this;
var _51249__$1 = this;return self__.meta51248;
});
processing.core.t51247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51249,meta51248__$1){var self__ = this;
var _51249__$1 = this;return (new processing.core.t51247(self__.owner,self__.data,self__.title,self__.f,self__.animate_QMARK_,self__.opts,self__.map__51246,self__.p__51241,self__.canvas,meta51248__$1));
});
processing.core.__GT_t51247 = (function __GT_t51247(owner__$1,data__$1,title__$1,f__$1,animate_QMARK___$1,opts__$1,map__51246__$2,p__51241__$1,canvas__$1,meta51248){return (new processing.core.t51247(owner__$1,data__$1,title__$1,f__$1,animate_QMARK___$1,opts__$1,map__51246__$2,p__51241__$1,canvas__$1,meta51248));
});
}
return (new processing.core.t51247(owner,data,title,f,animate_QMARK_,opts,map__51246__$1,p__51241,canvas,null));
});
};
var canvas = function (var_args){
var p__51241 = null;if (arguments.length > 0) {
  p__51241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,p__51241);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__51250){
var p__51241 = cljs.core.seq(arglist__51250);
return canvas__delegate(p__51241);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
