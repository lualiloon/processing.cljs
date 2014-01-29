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
processing.core.processing_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"processing","processing",1436099205),null,new cljs.core.Keyword(null,"sketch","sketch",4408196894),null,new cljs.core.Keyword(null,"title","title",1124275658),null], null)], null));
processing.core.ICanvas = (function (){var obj23174 = {};return obj23174;
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
processing.core.IMouseClicked = (function (){var obj23176 = {};return obj23176;
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
processing.core.IMouseDragged = (function (){var obj23178 = {};return obj23178;
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
processing.core.IMouseMoved = (function (){var obj23180 = {};return obj23180;
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
processing.core.IMousePressed = (function (){var obj23182 = {};return obj23182;
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
processing.core.IMouseReleased = (function (){var obj23184 = {};return obj23184;
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
processing.core.IMouseScrolled = (function (){var obj23186 = {};return obj23186;
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
processing.core.IMouseOver = (function (){var obj23188 = {};return obj23188;
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
processing.core.IMouseOut = (function (){var obj23190 = {};return obj23190;
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
processing.core.ITouchStart = (function (){var obj23192 = {};return obj23192;
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
processing.core.ITouchEnd = (function (){var obj23194 = {};return obj23194;
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
processing.core.ITouchMove = (function (){var obj23196 = {};return obj23196;
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
processing.core.ITouchCancel = (function (){var obj23198 = {};return obj23198;
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
processing.core.IKeyPressed = (function (){var obj23200 = {};return obj23200;
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
processing.core.IKeyTyped = (function (){var obj23202 = {};return obj23202;
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
processing.core.IKeyReleased = (function (){var obj23204 = {};return obj23204;
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
{if(cljs.core.fn_QMARK_.call(null,((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["draw"])))
{((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["draw"]);
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
{if(cljs.core.fn_QMARK_.call(null,((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["exit"])))
{return ((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["exit"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["exit"]);
} else
{return null;
}
}
}
}
});
processing.core.preload = (function preload(href){var c__12511__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_23244){var state_val_23245 = (state_23244[1]);if((state_val_23245 === 2))
{var inst_23231 = (state_23244[7]);var inst_23242 = (state_23244[2]);var state_23244__$1 = (function (){var statearr_23246 = state_23244;(statearr_23246[8] = inst_23242);
return statearr_23246;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23244__$1,inst_23231);
} else
{if((state_val_23245 === 1))
{var inst_23231 = (state_23244[7]);var inst_23230 = cljs.core.async.chan.call(null,1);var inst_23231__$1 = (new Image());var inst_23232 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23233 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"sketch","sketch",4408196894)];var inst_23234 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23233,null));var inst_23235 = cljs.core.get_in.call(null,inst_23232,inst_23234);var inst_23236 = (function (){var sketch = inst_23235;var img = inst_23231__$1;var ret = inst_23230;return ((function (sketch,img,ret,inst_23231,inst_23230,inst_23231__$1,inst_23232,inst_23233,inst_23234,inst_23235,state_val_23245){
return (function (){return cljs.core.async.close_BANG_.call(null,ret);
});
;})(sketch,img,ret,inst_23231,inst_23230,inst_23231__$1,inst_23232,inst_23233,inst_23234,inst_23235,state_val_23245))
})();var inst_23237 = inst_23231__$1.onload = inst_23236;var inst_23238 = inst_23231__$1.src = href;var inst_23239 = inst_23235.imageCache;var inst_23240 = inst_23239.add(href,inst_23231__$1);var state_23244__$1 = (function (){var statearr_23247 = state_23244;(statearr_23247[7] = inst_23231__$1);
(statearr_23247[9] = inst_23237);
(statearr_23247[10] = inst_23238);
(statearr_23247[11] = inst_23240);
return statearr_23247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,2,inst_23230);
} else
{return null;
}
}
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_23251 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23251[0] = state_machine__12410__auto__);
(statearr_23251[1] = 1);
return statearr_23251;
});
var state_machine__12410__auto____1 = (function (state_23244){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_23244);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e23252){if((e23252 instanceof Object))
{var ex__12413__auto__ = e23252;var statearr_23253_23255 = state_23244;(statearr_23253_23255[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23256 = state_23244;
state_23244 = G__23256;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_23244){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_23244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_23254 = f__12512__auto__.call(null);(statearr_23254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto__);
return statearr_23254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
}));
return c__12511__auto__;
});
processing.core.setup_and_draw = (function setup_and_draw(data,owner,node,opts){var map__23432 = opts;var map__23432__$1 = ((cljs.core.seq_QMARK_.call(null,map__23432))?cljs.core.apply.call(null,cljs.core.hash_map,map__23432):map__23432);var animate = cljs.core.get.call(null,map__23432__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__23432__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__23432__$1,new cljs.core.Keyword(null,"title","title",1124275658));var title__$1 = ((cljs.core.seq.call(null,title))?clojure.string.replace.call(null,title,/ /,"-"):"canvas");var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var processing__$1 = (new Processing(node));var sketch = processing__$1.externals.sketch;var canvas = f.call(null,processing__$1,state);if((function (){var G__23433 = canvas;if(G__23433)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__23433.processing$core$ICanvas$;
}
})()))
{return true;
} else
{if((!G__23433.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__23433);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,processing.core.ICanvas,G__23433);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reified canvas must implement ICanvas"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null),new cljs.core.Symbol(null,"ICanvas","ICanvas",733855930,null),new cljs.core.Symbol(null,"canvas","canvas",1286729489,null))))].join('')));
}
cljs.core.swap_BANG_.call(null,processing.core.processing_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null),title__$1);
cljs.core.swap_BANG_.call(null,processing.core.processing_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"processing","processing",1436099205)], null),processing__$1);
cljs.core.swap_BANG_.call(null,processing.core.processing_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"sketch","sketch",4408196894)], null),sketch);
processing__$1.name = title__$1;
processing__$1.draw = (function (){var new_state = processing.core.draw.call(null,canvas,cljs.core.merge.call(null,om.core.get_state.call(null,owner),cljs.core.deref.call(null,data),cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",1127031096),processing__$1.width,new cljs.core.Keyword(null,"height","height",4087841945),processing__$1.height,new cljs.core.Keyword(null,"focused","focused",4617830121),processing__$1.focused,new cljs.core.Keyword(null,"online","online",4296649157),processing__$1.online,new cljs.core.Keyword(null,"screen","screen",4401181662),processing__$1.screen,new cljs.core.Keyword(null,"frame-count","frame-count",4065819681),processing__$1.frameCount], null)),processing.core.mouse.call(null,processing__$1),processing.core.keyboard.call(null,processing__$1));return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,((cljs.core.map_QMARK_.call(null,new_state))?new_state:cljs.core.PersistentArrayMap.EMPTY));
});
processing__$1.setup = (function (){var c__12511__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_23455){var state_val_23456 = (state_23455[1]);if((state_val_23456 === 1))
{var inst_23434 = (state_23455[7]);var inst_23434__$1 = processing.core.setup.call(null,canvas);var inst_23435 = (inst_23434__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);var state_23455__$1 = (function (){var statearr_23457 = state_23455;(statearr_23457[7] = inst_23434__$1);
return statearr_23457;
})();if(cljs.core.truth_(inst_23435))
{var statearr_23458_23607 = state_23455__$1;(statearr_23458_23607[1] = 2);
} else
{var statearr_23459_23608 = state_23455__$1;(statearr_23459_23608[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 2))
{var inst_23434 = (state_23455[7]);var state_23455__$1 = state_23455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23455__$1,5,inst_23434);
} else
{if((state_val_23456 === 3))
{var inst_23434 = (state_23455[7]);var state_23455__$1 = state_23455;if(cljs.core.truth_(inst_23434))
{var statearr_23460_23609 = state_23455__$1;(statearr_23460_23609[1] = 9);
} else
{var statearr_23461_23610 = state_23455__$1;(statearr_23461_23610[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 4))
{var inst_23451 = (state_23455[2]);var inst_23452 = processing__$1.resetMatrix;var inst_23453 = inst_23452.call(null);var state_23455__$1 = (function (){var statearr_23462 = state_23455;(statearr_23462[8] = inst_23451);
return statearr_23462;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23455__$1,inst_23453);
} else
{if((state_val_23456 === 5))
{var inst_23438 = (state_23455[9]);var inst_23438__$1 = (state_23455[2]);var state_23455__$1 = (function (){var statearr_23463 = state_23455;(statearr_23463[9] = inst_23438__$1);
return statearr_23463;
})();if(cljs.core.truth_(inst_23438__$1))
{var statearr_23464_23611 = state_23455__$1;(statearr_23464_23611[1] = 6);
} else
{var statearr_23465_23612 = state_23455__$1;(statearr_23465_23612[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 6))
{var inst_23438 = (state_23455[9]);var state_23455__$1 = state_23455;var statearr_23466_23613 = state_23455__$1;(statearr_23466_23613[2] = inst_23438);
(statearr_23466_23613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 7))
{var state_23455__$1 = state_23455;var statearr_23467_23614 = state_23455__$1;(statearr_23467_23614[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_23467_23614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 8))
{var inst_23442 = (state_23455[2]);var inst_23443 = cljs.core.reset_BANG_.call(null,state,inst_23442);var state_23455__$1 = state_23455;var statearr_23468_23615 = state_23455__$1;(statearr_23468_23615[2] = inst_23443);
(statearr_23468_23615[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 9))
{var inst_23434 = (state_23455[7]);var state_23455__$1 = state_23455;var statearr_23469_23616 = state_23455__$1;(statearr_23469_23616[2] = inst_23434);
(statearr_23469_23616[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 10))
{var state_23455__$1 = state_23455;var statearr_23470_23617 = state_23455__$1;(statearr_23470_23617[2] = cljs.core.PersistentHashMap.EMPTY);
(statearr_23470_23617[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23456 === 11))
{var inst_23448 = (state_23455[2]);var inst_23449 = cljs.core.reset_BANG_.call(null,state,inst_23448);var state_23455__$1 = state_23455;var statearr_23471_23618 = state_23455__$1;(statearr_23471_23618[2] = inst_23449);
(statearr_23471_23618[1] = 4);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_23475 = [null,null,null,null,null,null,null,null,null,null];(statearr_23475[0] = state_machine__12410__auto__);
(statearr_23475[1] = 1);
return statearr_23475;
});
var state_machine__12410__auto____1 = (function (state_23455){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_23455);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e23476){if((e23476 instanceof Object))
{var ex__12413__auto__ = e23476;var statearr_23477_23619 = state_23455;(statearr_23477_23619[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23620 = state_23455;
state_23455 = G__23620;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_23455){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_23455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_23478 = f__12512__auto__.call(null);(statearr_23478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto__);
return statearr_23478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
}));
return c__12511__auto__;
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
var c__12511__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_23565){var state_val_23566 = (state_23565[1]);if((state_val_23566 === 1))
{var inst_23479 = processing__$1.setup;var inst_23480 = inst_23479.call(null);var state_23565__$1 = state_23565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23565__$1,2,inst_23480);
} else
{if((state_val_23566 === 2))
{var inst_23482 = (state_23565[2]);var inst_23483 = animate === false;var state_23565__$1 = (function (){var statearr_23567 = state_23565;(statearr_23567[7] = inst_23482);
return statearr_23567;
})();if(cljs.core.truth_(inst_23483))
{var statearr_23568_23621 = state_23565__$1;(statearr_23568_23621[1] = 3);
} else
{var statearr_23569_23622 = state_23565__$1;(statearr_23569_23622[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 3))
{var inst_23485 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_23486 = (inst_23485 instanceof Processing);var inst_23487 = (inst_23486) && (true);var state_23565__$1 = state_23565;if(cljs.core.truth_(inst_23487))
{var statearr_23570_23623 = state_23565__$1;(statearr_23570_23623[1] = 6);
} else
{var statearr_23571_23624 = state_23565__$1;(statearr_23571_23624[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 4))
{var inst_23554 = typeof requestAnimationFrame !== 'undefined';var state_23565__$1 = state_23565;if(cljs.core.truth_(inst_23554))
{var statearr_23572_23625 = state_23565__$1;(statearr_23572_23625[1] = 24);
} else
{var statearr_23573_23626 = state_23565__$1;(statearr_23573_23626[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 5))
{var inst_23563 = (state_23565[2]);var state_23565__$1 = state_23565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23565__$1,inst_23563);
} else
{if((state_val_23566 === 6))
{var inst_23489 = cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY);var inst_23490 = (inst_23489["draw"]);var inst_23491 = inst_23490.call(null);var state_23565__$1 = state_23565;var statearr_23574_23627 = state_23565__$1;(statearr_23574_23627[2] = inst_23491);
(statearr_23574_23627[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 7))
{var inst_23493 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23494 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)];var inst_23495 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23494,null));var inst_23496 = cljs.core.get_in.call(null,inst_23493,inst_23495);var inst_23497 = Processing.getInstanceById(inst_23496);var state_23565__$1 = state_23565;if(cljs.core.truth_(inst_23497))
{var statearr_23575_23628 = state_23565__$1;(statearr_23575_23628[1] = 9);
} else
{var statearr_23576_23629 = state_23565__$1;(statearr_23576_23629[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 8))
{var inst_23552 = (state_23565[2]);var state_23565__$1 = state_23565;var statearr_23577_23630 = state_23565__$1;(statearr_23577_23630[2] = inst_23552);
(statearr_23577_23630[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 9))
{var inst_23499 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23500 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)];var inst_23501 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23500,null));var inst_23502 = cljs.core.get_in.call(null,inst_23499,inst_23501);var inst_23503 = Processing.getInstanceById(inst_23502);var state_23565__$1 = state_23565;var statearr_23578_23631 = state_23565__$1;(statearr_23578_23631[2] = inst_23503);
(statearr_23578_23631[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 10))
{var inst_23505 = (Processing.instances[0]);var state_23565__$1 = state_23565;var statearr_23579_23632 = state_23565__$1;(statearr_23579_23632[2] = inst_23505);
(statearr_23579_23632[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 11))
{var inst_23507 = (state_23565[2]);var inst_23508 = (inst_23507["draw"]);var inst_23509 = cljs.core.fn_QMARK_.call(null,inst_23508);var state_23565__$1 = state_23565;if(inst_23509)
{var statearr_23580_23633 = state_23565__$1;(statearr_23580_23633[1] = 12);
} else
{var statearr_23581_23634 = state_23565__$1;(statearr_23581_23634[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 12))
{var inst_23511 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23512 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)];var inst_23513 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23512,null));var inst_23514 = cljs.core.get_in.call(null,inst_23511,inst_23513);var inst_23515 = Processing.getInstanceById(inst_23514);var state_23565__$1 = state_23565;if(cljs.core.truth_(inst_23515))
{var statearr_23582_23635 = state_23565__$1;(statearr_23582_23635[1] = 15);
} else
{var statearr_23583_23636 = state_23565__$1;(statearr_23583_23636[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 13))
{var state_23565__$1 = state_23565;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_23584_23637 = state_23565__$1;(statearr_23584_23637[1] = 18);
} else
{var statearr_23585_23638 = state_23565__$1;(statearr_23585_23638[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 14))
{var inst_23550 = (state_23565[2]);var state_23565__$1 = state_23565;var statearr_23586_23639 = state_23565__$1;(statearr_23586_23639[2] = inst_23550);
(statearr_23586_23639[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 15))
{var inst_23517 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23518 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)];var inst_23519 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23518,null));var inst_23520 = cljs.core.get_in.call(null,inst_23517,inst_23519);var inst_23521 = Processing.getInstanceById(inst_23520);var state_23565__$1 = state_23565;var statearr_23587_23640 = state_23565__$1;(statearr_23587_23640[2] = inst_23521);
(statearr_23587_23640[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 16))
{var inst_23523 = (Processing.instances[0]);var state_23565__$1 = state_23565;var statearr_23588_23641 = state_23565__$1;(statearr_23588_23641[2] = inst_23523);
(statearr_23588_23641[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 17))
{var inst_23525 = (state_23565[2]);var inst_23526 = (inst_23525["draw"]);var inst_23527 = inst_23526.call(null);var state_23565__$1 = state_23565;var statearr_23589_23642 = state_23565__$1;(statearr_23589_23642[2] = inst_23527);
(statearr_23589_23642[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 18))
{var inst_23530 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23531 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)];var inst_23532 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23531,null));var inst_23533 = cljs.core.get_in.call(null,inst_23530,inst_23532);var inst_23534 = Processing.getInstanceById(inst_23533);var state_23565__$1 = state_23565;if(cljs.core.truth_(inst_23534))
{var statearr_23590_23643 = state_23565__$1;(statearr_23590_23643[1] = 21);
} else
{var statearr_23591_23644 = state_23565__$1;(statearr_23591_23644[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 19))
{var state_23565__$1 = state_23565;var statearr_23592_23645 = state_23565__$1;(statearr_23592_23645[2] = null);
(statearr_23592_23645[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 20))
{var inst_23548 = (state_23565[2]);var state_23565__$1 = state_23565;var statearr_23593_23646 = state_23565__$1;(statearr_23593_23646[2] = inst_23548);
(statearr_23593_23646[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 21))
{var inst_23536 = cljs.core.deref.call(null,processing.core.processing_state);var inst_23537 = [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)];var inst_23538 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23537,null));var inst_23539 = cljs.core.get_in.call(null,inst_23536,inst_23538);var inst_23540 = Processing.getInstanceById(inst_23539);var state_23565__$1 = state_23565;var statearr_23594_23647 = state_23565__$1;(statearr_23594_23647[2] = inst_23540);
(statearr_23594_23647[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 22))
{var inst_23542 = (Processing.instances[0]);var state_23565__$1 = state_23565;var statearr_23595_23648 = state_23565__$1;(statearr_23595_23648[2] = inst_23542);
(statearr_23595_23648[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 23))
{var inst_23544 = (state_23565[2]);var inst_23545 = (inst_23544["draw"]);var state_23565__$1 = state_23565;var statearr_23596_23649 = state_23565__$1;(statearr_23596_23649[2] = inst_23545);
(statearr_23596_23649[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 24))
{var inst_23556 = processing.core.start_animation.call(null,processing__$1);var state_23565__$1 = state_23565;var statearr_23597_23650 = state_23565__$1;(statearr_23597_23650[2] = inst_23556);
(statearr_23597_23650[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 25))
{var inst_23558 = (function (){return ((function (state_val_23566){
return (function render(){if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["draw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["draw"])))
{((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["draw"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{((cljs.core.truth_(Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))))?Processing.getInstanceById(cljs.core.get_in.call(null,cljs.core.deref.call(null,processing.core.processing_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"title","title",1124275658)], null))):(Processing.instances[0]))["draw"]);
} else
{}
}
}
return setTimeout(16,render);
});
;})(state_val_23566))
})();var inst_23559 = inst_23558.call(null);var state_23565__$1 = state_23565;var statearr_23598_23651 = state_23565__$1;(statearr_23598_23651[2] = inst_23559);
(statearr_23598_23651[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23566 === 26))
{var inst_23561 = (state_23565[2]);var state_23565__$1 = state_23565;var statearr_23599_23652 = state_23565__$1;(statearr_23599_23652[2] = inst_23561);
(statearr_23599_23652[1] = 5);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_23603 = [null,null,null,null,null,null,null,null];(statearr_23603[0] = state_machine__12410__auto__);
(statearr_23603[1] = 1);
return statearr_23603;
});
var state_machine__12410__auto____1 = (function (state_23565){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_23565);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e23604){if((e23604 instanceof Object))
{var ex__12413__auto__ = e23604;var statearr_23605_23653 = state_23565;(statearr_23605_23653[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23654 = state_23565;
state_23565 = G__23654;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_23565){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_23565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_23606 = f__12512__auto__.call(null);(statearr_23606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto__);
return statearr_23606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
}));
return c__12511__auto__;
});
/**
* @param {...*} var_args
*/
processing.core.canvas = (function() { 
var canvas__delegate = function (p__23655){var map__23660 = p__23655;var map__23660__$1 = ((cljs.core.seq_QMARK_.call(null,map__23660))?cljs.core.apply.call(null,cljs.core.hash_map,map__23660):map__23660);var opts = map__23660__$1;var animate = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"animate","animate",4451935827));var f = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"title","title",1124275658));return (function (data,owner){if(typeof processing.core.t23661 !== 'undefined')
{} else
{
/**
* @constructor
*/
processing.core.t23661 = (function (owner,data,title,f,animate,opts,map__23660,p__23655,canvas,meta23662){
this.owner = owner;
this.data = data;
this.title = title;
this.f = f;
this.animate = animate;
this.opts = opts;
this.map__23660 = map__23660;
this.p__23655 = p__23655;
this.canvas = canvas;
this.meta23662 = meta23662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
processing.core.t23661.cljs$lang$type = true;
processing.core.t23661.cljs$lang$ctorStr = "processing.core/t23661";
processing.core.t23661.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"processing.core/t23661");
});
processing.core.t23661.prototype.om$core$IRenderState$ = true;
processing.core.t23661.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.canvas({"id": ((cljs.core.seq.call(null,self__.title))?clojure.string.replace.call(null,self__.title,/ /,"-"):"canvas"), "ref": "canvas"});
});
processing.core.t23661.prototype.om$core$IDidUpdate$ = true;
processing.core.t23661.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (_,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;var temp__4092__auto__ = om.core.get_node.call(null,self__.owner,"canvas");if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;processing.core.stop_animation.call(null);
return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
} else
{return null;
}
});
processing.core.t23661.prototype.om$core$IDidMount$ = true;
processing.core.t23661.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,node){var self__ = this;
var ___$1 = this;return processing.core.setup_and_draw.call(null,self__.data,self__.owner,node,self__.opts);
});
processing.core.t23661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23663){var self__ = this;
var _23663__$1 = this;return self__.meta23662;
});
processing.core.t23661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23663,meta23662__$1){var self__ = this;
var _23663__$1 = this;return (new processing.core.t23661(self__.owner,self__.data,self__.title,self__.f,self__.animate,self__.opts,self__.map__23660,self__.p__23655,self__.canvas,meta23662__$1));
});
processing.core.__GT_t23661 = (function __GT_t23661(owner__$1,data__$1,title__$1,f__$1,animate__$1,opts__$1,map__23660__$2,p__23655__$1,canvas__$1,meta23662){return (new processing.core.t23661(owner__$1,data__$1,title__$1,f__$1,animate__$1,opts__$1,map__23660__$2,p__23655__$1,canvas__$1,meta23662));
});
}
return (new processing.core.t23661(owner,data,title,f,animate,opts,map__23660__$1,p__23655,canvas,null));
});
};
var canvas = function (var_args){
var p__23655 = null;if (arguments.length > 0) {
  p__23655 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,p__23655);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__23664){
var p__23655 = cljs.core.seq(arglist__23664);
return canvas__delegate(p__23655);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
