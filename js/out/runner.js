// Compiled by ClojureScript 0.0-2138
goog.provide('runner');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('processing.core');
goog.require('sablono.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('processing.core');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
goog.require('dommy.core');
runner.reset = (function reset(){return location.reload(true);
});
runner.bezier = (function bezier(processing__$1,state){if(typeof runner.t214702 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214702 = (function (state,processing,bezier,meta214703){
this.state = state;
this.processing = processing;
this.bezier = bezier;
this.meta214703 = meta214703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214702.cljs$lang$type = true;
runner.t214702.cljs$lang$ctorStr = "runner/t214702";
runner.t214702.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214702");
});
runner.t214702.prototype.processing$core$ICanvas$ = true;
runner.t214702.prototype.processing$core$ICanvas$setup$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null))["size"]).call(null,360);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]).call(null,640,360);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [255], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [255], null))["stroke"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"]).call(null,255);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["noFill"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"]);
} else
{return null;
}
}
}
});
runner.t214702.prototype.processing$core$ICanvas$draw$arity$4 = (function (_,___$1,p__214705,___$2){var self__ = this;
var map__214706 = p__214705;var map__214706__$1 = ((cljs.core.seq_QMARK_.call(null,map__214706))?cljs.core.apply.call(null,cljs.core.hash_map,map__214706):map__214706);var mouse = map__214706__$1;var x = cljs.core.get.call(null,map__214706__$1,new cljs.core.Keyword(null,"x","x",1013904362));var ___$3 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null))["background"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]).call(null,0);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]);
} else
{}
}
}
var i = 0;while(true){
if((i < 200))
{if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (i / 2.0)),(40 + i),410,20,440,300,(240 - (i / 16.0)),(300 + (i / 8.0))], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (i / 2.0)),(40 + i),410,20,440,300,(240 - (i / 16.0)),(300 + (i / 8.0))], null))["bezier"]).call(null,(40 + i),410,20,440,300,(240 - (i / 16.0)),(300 + (i / 8.0)));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["bezier"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["bezier"]).call(null,(x - (i / 2.0)),(40 + i),410,20,440,300,(240 - (i / 16.0)),(300 + (i / 8.0)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["bezier"]);
} else
{}
}
}
{
var G__214707 = (i + 20);
i = G__214707;
continue;
}
} else
{return null;
}
break;
}
});
runner.t214702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214704){var self__ = this;
var _214704__$1 = this;return self__.meta214703;
});
runner.t214702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214704,meta214703__$1){var self__ = this;
var _214704__$1 = this;return (new runner.t214702(self__.state,self__.processing,self__.bezier,meta214703__$1));
});
runner.__GT_t214702 = (function __GT_t214702(state__$1,processing__$2,bezier__$1,meta214703){return (new runner.t214702(state__$1,processing__$2,bezier__$1,meta214703));
});
}
return (new runner.t214702(state,processing__$1,bezier,null));
});
runner.draw_pie_chart = (function draw_pie_chart(diameter,p__214708){var map__214710 = p__214708;var map__214710__$1 = ((cljs.core.seq_QMARK_.call(null,map__214710))?cljs.core.apply.call(null,cljs.core.hash_map,map__214710):map__214710);var state = map__214710__$1;var height = cljs.core.get.call(null,map__214710__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__214710__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angles = cljs.core.get.call(null,map__214710__$1,new cljs.core.Keyword(null,"angles","angles",3895694706));var i = 0;var last_angle = 0;while(true){
if((i < cljs.core.count.call(null,angles)))
{if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,0,cljs.core.count.call(null,angles),0,255], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,0,cljs.core.count.call(null,angles),0,255], null))["map"]).call(null,0,cljs.core.count.call(null,angles),0,255):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"]).call(null,i,0,cljs.core.count.call(null,angles),0,255):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"]):null)))], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,0,cljs.core.count.call(null,angles),0,255], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,0,cljs.core.count.call(null,angles),0,255], null))["map"]).call(null,0,cljs.core.count.call(null,angles),0,255):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"]).call(null,i,0,cljs.core.count.call(null,angles),0,255):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"]):null)))], null))["fill"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"]).call(null,((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,0,cljs.core.count.call(null,angles),0,255], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,0,cljs.core.count.call(null,angles),0,255], null))["map"]).call(null,0,cljs.core.count.call(null,angles),0,255):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"]).call(null,i,0,cljs.core.count.call(null,angles),0,255):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["map"]):null))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / 2),(height / 2),diameter,diameter,last_angle,(last_angle + ((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null))["radians"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]).call(null,cljs.core.nth.call(null,angles,i)):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]):null))))], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / 2),(height / 2),diameter,diameter,last_angle,(last_angle + ((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null))["radians"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]).call(null,cljs.core.nth.call(null,angles,i)):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]):null))))], null))["arc"]).call(null,(height / 2),diameter,diameter,last_angle,(last_angle + ((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null))["radians"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]).call(null,cljs.core.nth.call(null,angles,i)):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]):null)))));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["arc"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["arc"]).call(null,(width / 2),(height / 2),diameter,diameter,last_angle,(last_angle + ((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null))["radians"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]).call(null,cljs.core.nth.call(null,angles,i)):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]):null)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["arc"]);
} else
{}
}
}
{
var G__214711 = (i + 1);
var G__214712 = (last_angle + ((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,angles,i)], null))["radians"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]).call(null,cljs.core.nth.call(null,angles,i)):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["radians"]):null))));
i = G__214711;
last_angle = G__214712;
continue;
}
} else
{return null;
}
break;
}
});
runner.pie_chart = (function pie_chart(processing__$1,state){if(typeof runner.t214716 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214716 = (function (state,processing,pie_chart,meta214717){
this.state = state;
this.processing = processing;
this.pie_chart = pie_chart;
this.meta214717 = meta214717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214716.cljs$lang$type = true;
runner.t214716.cljs$lang$ctorStr = "runner/t214716";
runner.t214716.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214716");
});
runner.t214716.prototype.processing$core$ICanvas$ = true;
runner.t214716.prototype.processing$core$ICanvas$setup$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null))["size"]).call(null,360);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]).call(null,640,360);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["noStroke"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"]);
} else
{}
}
}
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angles","angles",3895694706),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [30,10,45,35,60,38,75,67], null)], null);
});
runner.t214716.prototype.processing$core$ICanvas$draw$arity$4 = (function (_,state__$2,___$1,___$2){var self__ = this;
var ___$3 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [100], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [100], null))["background"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]).call(null,100);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]);
} else
{}
}
}
return runner.draw_pie_chart.call(null,300,state__$2);
});
runner.t214716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214718){var self__ = this;
var _214718__$1 = this;return self__.meta214717;
});
runner.t214716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214718,meta214717__$1){var self__ = this;
var _214718__$1 = this;return (new runner.t214716(self__.state,self__.processing,self__.pie_chart,meta214717__$1));
});
runner.__GT_t214716 = (function __GT_t214716(state__$1,processing__$2,pie_chart__$1,meta214717){return (new runner.t214716(state__$1,processing__$2,pie_chart__$1,meta214717));
});
}
return (new runner.t214716(state,processing__$1,pie_chart,null));
});
runner.create_graphics = (function create_graphics(processing__$1,state){if(typeof runner.t214726 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214726 = (function (state,processing,create_graphics,meta214727){
this.state = state;
this.processing = processing;
this.create_graphics = create_graphics;
this.meta214727 = meta214727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214726.cljs$lang$type = true;
runner.t214726.cljs$lang$ctorStr = "runner/t214726";
runner.t214726.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214726");
});
runner.t214726.prototype.processing$core$ICanvas$ = true;
runner.t214726.prototype.processing$core$ICanvas$setup$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null))["size"]).call(null,360);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]).call(null,640,360);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]);
} else
{}
}
}
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pg","pg",1013907817),((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,200], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,200], null))["createGraphics"]).call(null,200):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["createGraphics"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["createGraphics"]).call(null,400,200):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["createGraphics"]):null)))], null);
});
runner.t214726.prototype.processing$core$ICanvas$draw$arity$4 = (function (_,p__214729,p__214730,___$1){var self__ = this;
var map__214731 = p__214729;var map__214731__$1 = ((cljs.core.seq_QMARK_.call(null,map__214731))?cljs.core.apply.call(null,cljs.core.hash_map,map__214731):map__214731);var height = cljs.core.get.call(null,map__214731__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__214731__$1,new cljs.core.Keyword(null,"width","width",1127031096));var pg = cljs.core.get.call(null,map__214731__$1,new cljs.core.Keyword(null,"pg","pg",1013907817));var map__214732 = p__214730;var map__214732__$1 = ((cljs.core.seq_QMARK_.call(null,map__214732))?cljs.core.apply.call(null,cljs.core.hash_map,map__214732):map__214732);var y = cljs.core.get.call(null,map__214732__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__214732__$1,new cljs.core.Keyword(null,"x","x",1013904362));var ___$2 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,12], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,12], null))["fill"]).call(null,12);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"]).call(null,0,12);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,width,height], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,width,height], null))["rect"]).call(null,0,width,height);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rect"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rect"]).call(null,0,0,width,height);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rect"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [255], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [255], null))["fill"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"]).call(null,255);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["fill"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["noStroke"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,60,60], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,60,60], null))["ellipse"]).call(null,y,60,60);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["ellipse"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["ellipse"]).call(null,x,y,60,60);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["ellipse"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg], null))["beginDraw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["beginDraw"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["beginDraw"]).call(null,pg);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["beginDraw"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,51], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,51], null))["background"]).call(null,51);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]).call(null,pg,51);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg], null))["noFill"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"]).call(null,pg);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,255], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,255], null))["stroke"]).call(null,255);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"]).call(null,pg,255);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,(x - 120),(y - 60),60,60], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,(x - 120),(y - 60),60,60], null))["ellipse"]).call(null,(x - 120),(y - 60),60,60);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["ellipse"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["ellipse"]).call(null,pg,(x - 120),(y - 60),60,60);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["ellipse"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg], null))["endDraw"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["endDraw"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["endDraw"]).call(null,pg);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["endDraw"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,120,60], null)) instanceof Processing)) && (false))
{return (cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pg,120,60], null))["image"]).call(null,120,60);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"]).call(null,pg,120,60);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"]);
} else
{return null;
}
}
}
});
runner.t214726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214728){var self__ = this;
var _214728__$1 = this;return self__.meta214727;
});
runner.t214726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214728,meta214727__$1){var self__ = this;
var _214728__$1 = this;return (new runner.t214726(self__.state,self__.processing,self__.create_graphics,meta214727__$1));
});
runner.__GT_t214726 = (function __GT_t214726(state__$1,processing__$2,create_graphics__$1,meta214727){return (new runner.t214726(state__$1,processing__$2,create_graphics__$1,meta214727));
});
}
return (new runner.t214726(state,processing__$1,create_graphics,null));
});
runner.draw_polygon = (function draw_polygon(x,y,radius,npoints){var TWO_PI = ((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["TWO_PI"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["TWO_PI"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["TWO_PI"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["TWO_PI"]):null)));var angle = (TWO_PI / npoints);if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["beginShape"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["beginShape"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["beginShape"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["beginShape"]);
} else
{}
}
}
var a_214733 = 0;while(true){
if((a_214733 < TWO_PI))
{var sx_214734 = (x + (Math.cos.call(null,a_214733) * radius));var sy_214735 = (y + (Math.sin.call(null,a_214733) * radius));if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx_214734,sy_214735], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx_214734,sy_214735], null))["vertex"]).call(null,sy_214735);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["vertex"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["vertex"]).call(null,sx_214734,sy_214735);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["vertex"]);
} else
{}
}
}
{
var G__214736 = (a_214733 + angle);
a_214733 = G__214736;
continue;
}
} else
{}
break;
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["CLOSE"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"]):null)))], null)) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["CLOSE"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"]):null)))], null))["endShape"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["endShape"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["endShape"]).call(null,((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["CLOSE"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["CLOSE"]):null))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["endShape"]);
} else
{return null;
}
}
}
});
runner.polygon = (function polygon(processing__$1,state){if(typeof runner.t214742 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214742 = (function (state,processing,polygon,meta214743){
this.state = state;
this.processing = processing;
this.polygon = polygon;
this.meta214743 = meta214743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214742.cljs$lang$type = true;
runner.t214742.cljs$lang$ctorStr = "runner/t214742";
runner.t214742.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214742");
});
runner.t214742.prototype.processing$core$ICanvas$ = true;
runner.t214742.prototype.processing$core$ICanvas$setup$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null)) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null))["size"]).call(null,360);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]).call(null,640,360);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]);
} else
{return null;
}
}
}
});
runner.t214742.prototype.processing$core$ICanvas$draw$arity$4 = (function (_,p__214745,___$1,___$2){var self__ = this;
var map__214746 = p__214745;var map__214746__$1 = ((cljs.core.seq_QMARK_.call(null,map__214746))?cljs.core.apply.call(null,cljs.core.hash_map,map__214746):map__214746);var height = cljs.core.get.call(null,map__214746__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__214746__$1,new cljs.core.Keyword(null,"width","width",1127031096));var frame_count = cljs.core.get.call(null,map__214746__$1,new cljs.core.Keyword(null,"frame-count","frame-count",4065819681));var ___$3 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [102], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [102], null))["background"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]).call(null,102);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["pushMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.2 * width),(0.5 * height)], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.2 * width),(0.5 * height)], null))["translate"]).call(null,(0.5 * height));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]).call(null,(0.2 * width),(0.5 * height));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frame_count / 200.0)], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frame_count / 200.0)], null))["rotate"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"]).call(null,(frame_count / 200.0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"]);
} else
{}
}
}
runner.draw_polygon.call(null,0,0,82,3);
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["popMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["pushMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * width),(0.5 * height)], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * width),(0.5 * height)], null))["translate"]).call(null,(0.5 * height));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]).call(null,(0.5 * width),(0.5 * height));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frame_count / 50.0)], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frame_count / 50.0)], null))["rotate"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"]).call(null,(frame_count / 50.0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"]);
} else
{}
}
}
runner.draw_polygon.call(null,0,0,80,20);
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["popMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["pushMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.8 * width),(0.5 * height)], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.8 * width),(0.5 * height)], null))["translate"]).call(null,(0.5 * height));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]).call(null,(0.8 * width),(0.5 * height));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frame_count / -100.0)], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frame_count / -100.0)], null))["rotate"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"]).call(null,(frame_count / -100.0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotate"]);
} else
{}
}
}
runner.draw_polygon.call(null,0,0,70,7);
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["popMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]);
} else
{return null;
}
}
}
});
runner.t214742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214744){var self__ = this;
var _214744__$1 = this;return self__.meta214743;
});
runner.t214742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214744,meta214743__$1){var self__ = this;
var _214744__$1 = this;return (new runner.t214742(self__.state,self__.processing,self__.polygon,meta214743__$1));
});
runner.__GT_t214742 = (function __GT_t214742(state__$1,processing__$2,polygon__$1,meta214743){return (new runner.t214742(state__$1,processing__$2,polygon__$1,meta214743));
});
}
return (new runner.t214742(state,processing__$1,polygon,null));
});
runner.three_dee_primitives = (function three_dee_primitives(processing__$1,state){if(typeof runner.t214750 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214750 = (function (state,processing,three_dee_primitives,meta214751){
this.state = state;
this.processing = processing;
this.three_dee_primitives = three_dee_primitives;
this.meta214751 = meta214751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214750.cljs$lang$type = true;
runner.t214750.cljs$lang$ctorStr = "runner/t214750";
runner.t214750.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214750");
});
runner.t214750.prototype.processing$core$ICanvas$ = true;
runner.t214750.prototype.processing$core$ICanvas$setup$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360,((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["P3D"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]):null)))], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360,((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["P3D"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]):null)))], null))["size"]).call(null,360,((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["P3D"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]):null))));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]).call(null,640,360,((((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))?(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["P3D"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]).call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["P3D"]):null))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null))["background"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]).call(null,0);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["background"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["lights"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["lights"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["lights"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["lights"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["noStroke"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noStroke"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["pushMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [130,(360 / 2),0], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [130,(360 / 2),0], null))["translate"]).call(null,(360 / 2),0);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]).call(null,130,(360 / 2),0);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.25], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.25], null))["rotateY"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotateY"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotateY"]).call(null,1.25);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotateY"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.4], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.4], null))["rotateX"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotateX"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotateX"]).call(null,-0.4);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["rotateX"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [100], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [100], null))["box"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["box"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["box"]).call(null,100);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["box"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["popMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["noFill"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["noFill"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [255], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [255], null))["stroke"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"]).call(null,255);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["stroke"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{(cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["pushMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["pushMatrix"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [500,(360 * 0.35),-200], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [500,(360 * 0.35),-200], null))["translate"]).call(null,(360 * 0.35),-200);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]).call(null,500,(360 * 0.35),-200);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["translate"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [280], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [280], null))["sphere"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["sphere"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["sphere"]).call(null,280);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["sphere"]);
} else
{}
}
}
if(((cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,cljs.core.PersistentVector.EMPTY)["popMatrix"]).call(null);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["popMatrix"]);
} else
{return null;
}
}
}
});
runner.t214750.prototype.processing$core$ICanvas$draw$arity$4 = (function (_,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;return null;
});
runner.t214750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214752){var self__ = this;
var _214752__$1 = this;return self__.meta214751;
});
runner.t214750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214752,meta214751__$1){var self__ = this;
var _214752__$1 = this;return (new runner.t214750(self__.state,self__.processing,self__.three_dee_primitives,meta214751__$1));
});
runner.__GT_t214750 = (function __GT_t214750(state__$1,processing__$2,three_dee_primitives__$1,meta214751){return (new runner.t214750(state__$1,processing__$2,three_dee_primitives__$1,meta214751));
});
}
return (new runner.t214750(state,processing__$1,three_dee_primitives,null));
});
runner.load_and_display_images = (function load_and_display_images(processing__$1,state){if(typeof runner.t214758 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214758 = (function (state,processing,load_and_display_images,meta214759){
this.state = state;
this.processing = processing;
this.load_and_display_images = load_and_display_images;
this.meta214759 = meta214759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214758.cljs$lang$type = true;
runner.t214758.cljs$lang$ctorStr = "runner/t214758";
runner.t214758.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214758");
});
runner.t214758.prototype.processing$core$ICanvas$ = true;
runner.t214758.prototype.processing$core$ICanvas$setup$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [640,360], null))["size"]).call(null,360);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]).call(null,640,360);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["size"]);
} else
{}
}
}
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img","img",1014008629),((((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://processing.org/examples/moonwalk.jpg"], null)) instanceof Processing)) && (true))?(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://processing.org/examples/moonwalk.jpg"], null))["loadImage"]).call(null):((cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["loadImage"])))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["loadImage"]).call(null,"http://processing.org/examples/moonwalk.jpg"):((new cljs.core.Keyword(null,"else","else",1017020587))?(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["loadImage"]):null)))], null);
});
runner.t214758.prototype.processing$core$ICanvas$draw$arity$4 = (function (_,p__214761,___$1,___$2){var self__ = this;
var map__214762 = p__214761;var map__214762__$1 = ((cljs.core.seq_QMARK_.call(null,map__214762))?cljs.core.apply.call(null,cljs.core.hash_map,map__214762):map__214762);var height = cljs.core.get.call(null,map__214762__$1,new cljs.core.Keyword(null,"height","height",4087841945));var img = cljs.core.get.call(null,map__214762__$1,new cljs.core.Keyword(null,"img","img",1014008629));var ___$3 = this;if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [img,0,0], null)) instanceof Processing)) && (true))
{(cljs.core.first.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [img,0,0], null))["image"]).call(null,0,0);
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"])))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"]).call(null,img,0,0);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"]);
} else
{}
}
}
if(((cljs.core.first.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(height / 2),(img.width / 2),(img.height / 2)], null)) instanceof Processing)) && (true))
{return (cljs.core.first.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(height / 2),(img.width / 2),(img.height / 2)], null))["image"]).call(null,(height / 2),(img.width / 2),(img.height / 2));
} else
{if(cljs.core.fn_QMARK_.call(null,(Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"])))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"]).call(null,0,(height / 2),(img.width / 2),(img.height / 2));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (Processing.getInstanceById(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,processing.core.processing_state)))["image"]);
} else
{return null;
}
}
}
});
runner.t214758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214760){var self__ = this;
var _214760__$1 = this;return self__.meta214759;
});
runner.t214758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214760,meta214759__$1){var self__ = this;
var _214760__$1 = this;return (new runner.t214758(self__.state,self__.processing,self__.load_and_display_images,meta214759__$1));
});
runner.__GT_t214758 = (function __GT_t214758(state__$1,processing__$2,load_and_display_images__$1,meta214759){return (new runner.t214758(state__$1,processing__$2,load_and_display_images__$1,meta214759));
});
}
return (new runner.t214758(state,processing__$1,load_and_display_images,null));
});
runner._main = (function _main(){var container = (function (){var dom214785 = document.createElement("div");dom214785.className = "container";
return dom214785;
})();dommy.core.append_BANG_.call(null,document.body,container);
return om.core.root.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"examples","examples",2951483323),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"pie chart",new cljs.core.Keyword(null,"f","f",1013904344),runner.pie_chart,new cljs.core.Keyword(null,"animate","animate",4451935827),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"bezier",new cljs.core.Keyword(null,"f","f",1013904344),runner.bezier], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"create graphics",new cljs.core.Keyword(null,"f","f",1013904344),runner.create_graphics], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"polygon",new cljs.core.Keyword(null,"f","f",1013904344),runner.polygon], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"load and display images",new cljs.core.Keyword(null,"f","f",1013904344),runner.load_and_display_images,new cljs.core.Keyword(null,"animate","animate",4451935827),false], null)], null),new cljs.core.Keyword(null,"active","active",3885920888),null], null),(function (data,owner){var code = sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),640,new cljs.core.Keyword(null,"border-radius","border-radius",1894943941),"0px",new cljs.core.Keyword(null,"border","border",3925567390),"none"], null)], null)], null),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(data))));if(typeof runner.t214786 !== 'undefined')
{} else
{
/**
* @constructor
*/
runner.t214786 = (function (code,owner,data,container,_main,meta214787){
this.code = code;
this.owner = owner;
this.data = data;
this.container = container;
this._main = _main;
this.meta214787 = meta214787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
runner.t214786.cljs$lang$type = true;
runner.t214786.cljs$lang$ctorStr = "runner/t214786";
runner.t214786.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"runner/t214786");
});
runner.t214786.prototype.om$core$IRenderState$ = true;
runner.t214786.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.header(null,React.DOM.h1(null,"processing.cljs"),React.DOM.p(null,"thin ClojureScript veneer over ",React.DOM.a({"href": "http://www.processingjs.org"},"processing.js")),React.DOM.ul(null,React.DOM.li(null,React.DOM.a({"href": "https://github.com/aamedina/processing.cljs/zipball/master"},"Download ",React.DOM.strong(null,"ZIP File"))),React.DOM.li(null,React.DOM.a({"href": "https://github.com/aamedina/processing.cljs/tarball/master"},"Download ",React.DOM.strong(null,"TAR Ball"))),React.DOM.li(null,React.DOM.a({"href": "https://github.com/aamedina/processing.cljs"},"View on ",React.DOM.strong(null,"GitHub"))))),React.DOM.div({"id": "content"},React.DOM.h3(null,"usage ",React.DOM.small(null,"examples based on: ",React.DOM.a({"href": "http://processing.org/examples"},"http://processing.org/examples"))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-sm-2"},React.DOM.ul({"className": "list-unstyled"},cljs.core.into_array.call(null,(function (){var iter__11569__auto__ = (function iter__214795(s__214796){return (new cljs.core.LazySeq(null,(function (){var s__214796__$1 = s__214796;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__214796__$1);if(temp__4092__auto__)
{var s__214796__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__214796__$2))
{var c__11567__auto__ = cljs.core.chunk_first.call(null,s__214796__$2);var size__11568__auto__ = cljs.core.count.call(null,c__11567__auto__);var b__214798 = cljs.core.chunk_buffer.call(null,size__11568__auto__);if((function (){var i__214797 = 0;while(true){
if((i__214797 < size__11568__auto__))
{var map__214801 = cljs.core._nth.call(null,c__11567__auto__,i__214797);var map__214801__$1 = ((cljs.core.seq_QMARK_.call(null,map__214801))?cljs.core.apply.call(null,cljs.core.hash_map,map__214801):map__214801);var example = map__214801__$1;var code__$2 = cljs.core.get.call(null,map__214801__$1,new cljs.core.Keyword(null,"code","code",1016963423));var f = cljs.core.get.call(null,map__214801__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__214801__$1,new cljs.core.Keyword(null,"title","title",1124275658));cljs.core.chunk_append.call(null,b__214798,React.DOM.li(null,React.DOM.a({"style": {"cursor": "pointer"}, "onClick": ((function (i__214797,map__214801,map__214801__$1,example,code__$2,f,title,c__11567__auto__,size__11568__auto__,b__214798,s__214796__$2,temp__4092__auto__){
return (function (e){return om.core.update_BANG_.call(null,self__.data,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",3885920888),example);
});})(i__214797,map__214801,map__214801__$1,example,code__$2,f,title,c__11567__auto__,size__11568__auto__,b__214798,s__214796__$2,temp__4092__auto__))
},(function (){var attrs214793 = title;if(cljs.core.map_QMARK_.call(null,attrs214793))
{return React.DOM.h5(sablono.interpreter.attributes.call(null,attrs214793),null);
} else
{return React.DOM.h5(null,sablono.interpreter.interpret.call(null,attrs214793));
}
})())));
{
var G__214807 = (i__214797 + 1);
i__214797 = G__214807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__214798),iter__214795.call(null,cljs.core.chunk_rest.call(null,s__214796__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__214798),null);
}
} else
{var map__214802 = cljs.core.first.call(null,s__214796__$2);var map__214802__$1 = ((cljs.core.seq_QMARK_.call(null,map__214802))?cljs.core.apply.call(null,cljs.core.hash_map,map__214802):map__214802);var example = map__214802__$1;var code__$2 = cljs.core.get.call(null,map__214802__$1,new cljs.core.Keyword(null,"code","code",1016963423));var f = cljs.core.get.call(null,map__214802__$1,new cljs.core.Keyword(null,"f","f",1013904344));var title = cljs.core.get.call(null,map__214802__$1,new cljs.core.Keyword(null,"title","title",1124275658));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.a({"style": {"cursor": "pointer"}, "onClick": ((function (map__214802,map__214802__$1,example,code__$2,f,title,s__214796__$2,temp__4092__auto__){
return (function (e){return om.core.update_BANG_.call(null,self__.data,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",3885920888),example);
});})(map__214802,map__214802__$1,example,code__$2,f,title,s__214796__$2,temp__4092__auto__))
},(function (){var attrs214793 = title;if(cljs.core.map_QMARK_.call(null,attrs214793))
{return React.DOM.h5(sablono.interpreter.attributes.call(null,attrs214793),null);
} else
{return React.DOM.h5(null,sablono.interpreter.interpret.call(null,attrs214793));
}
})())),iter__214795.call(null,cljs.core.rest.call(null,s__214796__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11569__auto__.call(null,new cljs.core.Keyword(null,"examples","examples",2951483323).cljs$core$IFn$_invoke$arity$1(self__.data));
})()))),(function (){var attrs214794 = (cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,processing.core.canvas,self__.data):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",1127031096),640,new cljs.core.Keyword(null,"height","height",4087841945),360,new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ddd",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",3099939484),"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote.text-center","blockquote.text-center",4562914056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",3806786827),"1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Click an example on the left to see it \n\n                                 in action."], null)], null)], null));if(cljs.core.map_QMARK_.call(null,attrs214794))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs214794)),sablono.interpreter.interpret.call(null,(function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(self__.data));if(cljs.core.truth_(temp__4090__auto__))
{var title = temp__4090__auto__;return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),640,new cljs.core.Keyword(null,"border-radius","border-radius",1894943941),"0px",new cljs.core.Keyword(null,"border","border",3925567390),"none"], null)], null)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyword","span.keyword",2490445495),"ns"], null)," my.namespace\n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),"(:require"], null)," [processing.core ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":as"], null)," canvas ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":include-macros"], null)," true]))\n\n"], null),(function (){try{if((title === "pie chart"))
{return cljs.core.PersistentVector.fromArray(["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"draw-pie-chart"], null),"\n  [diameter {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [angles width height] ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":as"], null)," state}]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"loop"], null)," [i 0 last-angle 0]\n    (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"when"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"&lt;"], null)," i (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"count"], null)," angles))\n      (canvas/fill (canvas/map i 0 (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"count"], null)," angles) 0 255))\n      (canvas/arc (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," width 2) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," height 2) diameter diameter last-angle\n                  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," last-angle (canvas/radians (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"nth"], null)," angles i))))\n      (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"recur"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"inc"], null)," i) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," last-angle (canvas/radians (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"nth"], null)," angles i)))))))","\n","\n","(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"pie-chart"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null),"\n    canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360)\n      (canvas/no-stroke)\n      {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":angles"], null)," [30 10 45 35 60 38 75 67]})\n    (draw [_ state _ _]\n      (canvas/background 100)\n      (draw-pie-chart 300 state))))"], true);
} else
{if((title === "bezier"))
{return cljs.core.PersistentVector.fromArray(["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"bezier"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null),"\n    canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360)\n      (canvas/stroke 255)\n      (canvas/no-fill))\n    (draw [_ _ {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [x] ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":as"], null)," mouse} _]\n      (canvas/background 0)\n      (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"loop"], null)," [i 0]\n        (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"when"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"&lt;"], null)," i 200)\n          (canvas/bezier (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," x (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," i 2.0)) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," 40 i) 410 20 440 300\n                         (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," 240 (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," i 16.0)) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," 300 (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," i 8.0)))\n          (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"recur"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," i 20)))))))"], true);
} else
{if((title === "create graphics"))
{return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"create-graphics"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null)," canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360)\n      {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":pg"], null)," (canvas/create-graphics 400 200)})\n    (draw [_ {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [pg width height]} {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [x y]} _]\n      (canvas/fill 0 12)\n      (canvas/rect 0 0 width height)\n      (canvas/fill 255)\n      (canvas/no-stroke)\n      (canvas/ellipse x y 60 60)\n      (canvas/begin-draw pg)\n      (canvas/background pg 51)\n      (canvas/no-fill pg)\n      (canvas/stroke pg 255)\n      (canvas/ellipse pg (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," x 120) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," y 60) 60 60)\n      (canvas/end-draw pg)\n      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";; "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"^:arg metadata is added to disambiguate the first argument and ensure\n"], null),"      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";; "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"it is recognized as argument instead of the object upon which the\n"], null),"      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";; "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"function is being called\n"], null),"      (canvas/image ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),"^:arg"], null)," pg 120 60))))"], null);
} else
{if((title === "polygon"))
{return cljs.core.PersistentVector.fromArray(["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"draw-polygon"], null),"\n  [x y radius npoints]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"let"], null)," [",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"TWO_PI"], null)," (canvas/TWO_PI)\n        angle (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"TWO_PI"], null)," npoints)]\n    (canvas/begin-shape)\n    (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"loop"], null)," [a 0]\n      (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"when"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"&lt;"], null)," a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"TWO_PI"], null),")\n        (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"let"], null)," [sx (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," x (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"Math/cos"], null)," a) radius))\n              sy (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," y (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"Math/sin"], null)," a) radius))]\n          (canvas/vertex sx sy)\n          (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"recur"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," a angle)))))\n    (canvas/end-shape (canvas/CLOSE))))","\n","\n","(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"polygon"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null)," canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360))\n    (draw [_ {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [frame-count width height]} _ _]\n      (canvas/background 102)\n      (canvas/push-matrix)\n      (canvas/translate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.2 width) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 height))\n      (canvas/rotate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," frame-count 200.0))\n      (draw-polygon 0 0 82 3)\n      (canvas/pop-matrix)\n      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"\n"], null),"      (canvas/push-matrix)\n      (canvas/translate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 width) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 height))\n      (canvas/rotate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," frame-count 50.0))\n      (draw-polygon 0 0 80 20)\n      (canvas/pop-matrix)\n      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"\n"], null),"      (canvas/push-matrix)\n      (canvas/translate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.8 width) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 height))\n      (canvas/rotate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," frame-count -100.0))\n      (draw-polygon 0 0 70 7)\n      (canvas/pop-matrix))))"], true);
} else
{if((title === "3d primitives"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((title === "load and display images"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}
}catch (e214804){if((e214804 instanceof Error))
{var e__14194__auto__ = e214804;if((e__14194__auto__ === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(title)].join('')));
} else
{throw e__14194__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e214804;
} else
{return null;
}
}
}})()));
} else
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),640,new cljs.core.Keyword(null,"border-radius","border-radius",1894943941),"0px",new cljs.core.Keyword(null,"border","border",3925567390),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyword","span.keyword",2490445495),"ns"], null)," my.namespace\n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),"(:require"], null)," [processing.core ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":as"], null)," canvas ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":include-macros"], null)," true]))"], null));
}
})()));
} else
{return React.DOM.div({"className": "col-sm-10"},sablono.interpreter.interpret.call(null,attrs214794),sablono.interpreter.interpret.call(null,(function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(self__.data));if(cljs.core.truth_(temp__4090__auto__))
{var title = temp__4090__auto__;return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),640,new cljs.core.Keyword(null,"border-radius","border-radius",1894943941),"0px",new cljs.core.Keyword(null,"border","border",3925567390),"none"], null)], null)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyword","span.keyword",2490445495),"ns"], null)," my.namespace\n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),"(:require"], null)," [processing.core ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":as"], null)," canvas ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":include-macros"], null)," true]))\n\n"], null),(function (){try{if((title === "pie chart"))
{return cljs.core.PersistentVector.fromArray(["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"draw-pie-chart"], null),"\n  [diameter {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [angles width height] ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":as"], null)," state}]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"loop"], null)," [i 0 last-angle 0]\n    (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"when"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"&lt;"], null)," i (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"count"], null)," angles))\n      (canvas/fill (canvas/map i 0 (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"count"], null)," angles) 0 255))\n      (canvas/arc (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," width 2) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," height 2) diameter diameter last-angle\n                  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," last-angle (canvas/radians (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"nth"], null)," angles i))))\n      (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"recur"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"inc"], null)," i) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," last-angle (canvas/radians (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"nth"], null)," angles i)))))))","\n","\n","(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"pie-chart"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null),"\n    canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360)\n      (canvas/no-stroke)\n      {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":angles"], null)," [30 10 45 35 60 38 75 67]})\n    (draw [_ state _ _]\n      (canvas/background 100)\n      (draw-pie-chart 300 state))))"], true);
} else
{if((title === "bezier"))
{return cljs.core.PersistentVector.fromArray(["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"bezier"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null),"\n    canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360)\n      (canvas/stroke 255)\n      (canvas/no-fill))\n    (draw [_ _ {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [x] ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":as"], null)," mouse} _]\n      (canvas/background 0)\n      (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"loop"], null)," [i 0]\n        (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"when"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"&lt;"], null)," i 200)\n          (canvas/bezier (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," x (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," i 2.0)) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," 40 i) 410 20 440 300\n                         (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," 240 (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," i 16.0)) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," 300 (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," i 8.0)))\n          (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"recur"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," i 20)))))))"], true);
} else
{if((title === "create graphics"))
{return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"create-graphics"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null)," canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360)\n      {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":pg"], null)," (canvas/create-graphics 400 200)})\n    (draw [_ {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [pg width height]} {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [x y]} _]\n      (canvas/fill 0 12)\n      (canvas/rect 0 0 width height)\n      (canvas/fill 255)\n      (canvas/no-stroke)\n      (canvas/ellipse x y 60 60)\n      (canvas/begin-draw pg)\n      (canvas/background pg 51)\n      (canvas/no-fill pg)\n      (canvas/stroke pg 255)\n      (canvas/ellipse pg (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," x 120) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"-"], null)," y 60) 60 60)\n      (canvas/end-draw pg)\n      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";; "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"^:arg metadata is added to disambiguate the first argument and ensure\n"], null),"      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";; "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"it is recognized as argument instead of the object upon which the\n"], null),"      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";; "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"function is being called\n"], null),"      (canvas/image ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),"^:arg"], null)," pg 120 60))))"], null);
} else
{if((title === "polygon"))
{return cljs.core.PersistentVector.fromArray(["(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"draw-polygon"], null),"\n  [x y radius npoints]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"let"], null)," [",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"TWO_PI"], null)," (canvas/TWO_PI)\n        angle (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"TWO_PI"], null)," npoints)]\n    (canvas/begin-shape)\n    (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"loop"], null)," [a 0]\n      (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"when"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"&lt;"], null)," a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"TWO_PI"], null),")\n        (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"let"], null)," [sx (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," x (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"Math/cos"], null)," a) radius))\n              sy (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," y (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"Math/sin"], null)," a) radius))]\n          (canvas/vertex sx sy)\n          (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"recur"], null)," (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"+"], null)," a angle)))))\n    (canvas/end-shape (canvas/CLOSE))))","\n","\n","(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"keyword"], null),"defn"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"function-name"], null),"polygon"], null),"\n  [processing state]\n  (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"reify"], null)," canvas/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"preprocessor"], null),"ICanvas"], null),"\n    (setup [_]\n      (canvas/size 640 360))\n    (draw [_ {",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"constant"], null),":keys"], null)," [frame-count width height]} _ _]\n      (canvas/background 102)\n      (canvas/push-matrix)\n      (canvas/translate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.2 width) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 height))\n      (canvas/rotate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," frame-count 200.0))\n      (draw-polygon 0 0 82 3)\n      (canvas/pop-matrix)\n      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"\n"], null),"      (canvas/push-matrix)\n      (canvas/translate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 width) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 height))\n      (canvas/rotate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," frame-count 50.0))\n      (draw-polygon 0 0 80 20)\n      (canvas/pop-matrix)\n      ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment-delimiter"], null),";;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"comment"], null),"\n"], null),"      (canvas/push-matrix)\n      (canvas/translate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.8 width) (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"*"], null)," 0.5 height))\n      (canvas/rotate (",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"builtin"], null),"/"], null)," frame-count -100.0))\n      (draw-polygon 0 0 70 7)\n      (canvas/pop-matrix))))"], true);
} else
{if((title === "3d primitives"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((title === "load and display images"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}
}catch (e214806){if((e214806 instanceof Error))
{var e__14194__auto__ = e214806;if((e__14194__auto__ === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(title)].join('')));
} else
{throw e__14194__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e214806;
} else
{return null;
}
}
}})()));
} else
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),640,new cljs.core.Keyword(null,"border-radius","border-radius",1894943941),"0px",new cljs.core.Keyword(null,"border","border",3925567390),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyword","span.keyword",2490445495),"ns"], null)," my.namespace\n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),"(:require"], null)," [processing.core ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":as"], null)," canvas ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.constant","span.constant",2746049850),":include-macros"], null)," true]))"], null));
}
})()));
}
})())));
});
runner.t214786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_214788){var self__ = this;
var _214788__$1 = this;return self__.meta214787;
});
runner.t214786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_214788,meta214787__$1){var self__ = this;
var _214788__$1 = this;return (new runner.t214786(self__.code,self__.owner,self__.data,self__.container,self__._main,meta214787__$1));
});
runner.__GT_t214786 = (function __GT_t214786(code__$1,owner__$1,data__$1,container__$1,_main__$1,meta214787){return (new runner.t214786(code__$1,owner__$1,data__$1,container__$1,_main__$1,meta214787));
});
}
return (new runner.t214786(code,owner,data,container,_main,null));
}),container);
});
goog.exportSymbol('runner._main', runner._main);

//# sourceMappingURL=runner.js.map