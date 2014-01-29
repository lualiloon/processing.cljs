// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__7850__auto__ = elem.textContent;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__51256 = dommy.template.__GT_node_like.call(null,parent);G__51256.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__51256;
});
var append_BANG___3 = (function() { 
var G__51261__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__51257_51262 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__51258_51263 = null;var count__51259_51264 = 0;var i__51260_51265 = 0;while(true){
if((i__51260_51265 < count__51259_51264))
{var c_51266 = cljs.core._nth.call(null,chunk__51258_51263,i__51260_51265);append_BANG_.call(null,parent__$1,c_51266);
{
var G__51267 = seq__51257_51262;
var G__51268 = chunk__51258_51263;
var G__51269 = count__51259_51264;
var G__51270 = (i__51260_51265 + 1);
seq__51257_51262 = G__51267;
chunk__51258_51263 = G__51268;
count__51259_51264 = G__51269;
i__51260_51265 = G__51270;
continue;
}
} else
{var temp__4092__auto___51271 = cljs.core.seq.call(null,seq__51257_51262);if(temp__4092__auto___51271)
{var seq__51257_51272__$1 = temp__4092__auto___51271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51257_51272__$1))
{var c__8592__auto___51273 = cljs.core.chunk_first.call(null,seq__51257_51272__$1);{
var G__51274 = cljs.core.chunk_rest.call(null,seq__51257_51272__$1);
var G__51275 = c__8592__auto___51273;
var G__51276 = cljs.core.count.call(null,c__8592__auto___51273);
var G__51277 = 0;
seq__51257_51262 = G__51274;
chunk__51258_51263 = G__51275;
count__51259_51264 = G__51276;
i__51260_51265 = G__51277;
continue;
}
} else
{var c_51278 = cljs.core.first.call(null,seq__51257_51272__$1);append_BANG_.call(null,parent__$1,c_51278);
{
var G__51279 = cljs.core.next.call(null,seq__51257_51272__$1);
var G__51280 = null;
var G__51281 = 0;
var G__51282 = 0;
seq__51257_51262 = G__51279;
chunk__51258_51263 = G__51280;
count__51259_51264 = G__51281;
i__51260_51265 = G__51282;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__51261 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51261__delegate.call(this,parent,child,more_children);};
G__51261.cljs$lang$maxFixedArity = 2;
G__51261.cljs$lang$applyTo = (function (arglist__51283){
var parent = cljs.core.first(arglist__51283);
arglist__51283 = cljs.core.next(arglist__51283);
var child = cljs.core.first(arglist__51283);
var more_children = cljs.core.rest(arglist__51283);
return G__51261__delegate(parent,child,more_children);
});
G__51261.cljs$core$IFn$_invoke$arity$variadic = G__51261__delegate;
return G__51261;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__51292__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__51288_51293 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__51289_51294 = null;var count__51290_51295 = 0;var i__51291_51296 = 0;while(true){
if((i__51291_51296 < count__51290_51295))
{var c_51297 = cljs.core._nth.call(null,chunk__51289_51294,i__51291_51296);prepend_BANG_.call(null,parent__$1,c_51297);
{
var G__51298 = seq__51288_51293;
var G__51299 = chunk__51289_51294;
var G__51300 = count__51290_51295;
var G__51301 = (i__51291_51296 + 1);
seq__51288_51293 = G__51298;
chunk__51289_51294 = G__51299;
count__51290_51295 = G__51300;
i__51291_51296 = G__51301;
continue;
}
} else
{var temp__4092__auto___51302 = cljs.core.seq.call(null,seq__51288_51293);if(temp__4092__auto___51302)
{var seq__51288_51303__$1 = temp__4092__auto___51302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51288_51303__$1))
{var c__8592__auto___51304 = cljs.core.chunk_first.call(null,seq__51288_51303__$1);{
var G__51305 = cljs.core.chunk_rest.call(null,seq__51288_51303__$1);
var G__51306 = c__8592__auto___51304;
var G__51307 = cljs.core.count.call(null,c__8592__auto___51304);
var G__51308 = 0;
seq__51288_51293 = G__51305;
chunk__51289_51294 = G__51306;
count__51290_51295 = G__51307;
i__51291_51296 = G__51308;
continue;
}
} else
{var c_51309 = cljs.core.first.call(null,seq__51288_51303__$1);prepend_BANG_.call(null,parent__$1,c_51309);
{
var G__51310 = cljs.core.next.call(null,seq__51288_51303__$1);
var G__51311 = null;
var G__51312 = 0;
var G__51313 = 0;
seq__51288_51293 = G__51310;
chunk__51289_51294 = G__51311;
count__51290_51295 = G__51312;
i__51291_51296 = G__51313;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__51292 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51292__delegate.call(this,parent,child,more_children);};
G__51292.cljs$lang$maxFixedArity = 2;
G__51292.cljs$lang$applyTo = (function (arglist__51314){
var parent = cljs.core.first(arglist__51314);
arglist__51314 = cljs.core.next(arglist__51314);
var child = cljs.core.first(arglist__51314);
var more_children = cljs.core.rest(arglist__51314);
return G__51292__delegate(parent,child,more_children);
});
G__51292.cljs$core$IFn$_invoke$arity$variadic = G__51292__delegate;
return G__51292;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___51315 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___51315))
{var next_51316 = temp__4090__auto___51315;parent.insertBefore(actual_node,next_51316);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__51318 = dommy.template.__GT_node_like.call(null,parent);G__51318.innerHTML = "";
dommy.core.append_BANG_.call(null,G__51318,node_like);
return G__51318;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__51320 = elem__$1.parentNode;G__51320.removeChild(elem__$1);
return G__51320;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51326){var vec__51327 = p__51326;var k = cljs.core.nth.call(null,vec__51327,0,null);var v = cljs.core.nth.call(null,vec__51327,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t51328 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t51328 = (function (v,k,vec__51327,p__51326,container,key_selectors_map,template,selector_map,meta51329){
this.v = v;
this.k = k;
this.vec__51327 = vec__51327;
this.p__51326 = p__51326;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta51329 = meta51329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t51328.cljs$lang$type = true;
dommy.core.t51328.cljs$lang$ctorStr = "dommy.core/t51328";
dommy.core.t51328.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"dommy.core/t51328");
});
dommy.core.t51328.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t51328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51330){var self__ = this;
var _51330__$1 = this;return self__.meta51329;
});
dommy.core.t51328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51330,meta51329__$1){var self__ = this;
var _51330__$1 = this;return (new dommy.core.t51328(self__.v,self__.k,self__.vec__51327,self__.p__51326,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta51329__$1));
});
dommy.core.__GT_t51328 = (function __GT_t51328(v__$1,k__$1,vec__51327__$1,p__51326__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta51329){return (new dommy.core.t51328(v__$1,k__$1,vec__51327__$1,p__51326__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta51329));
});
}
return (new dommy.core.t51328(v,k,vec__51327,p__51326,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__51331_SHARP_){return p1__51331_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__51332_SHARP_){return !((p1__51332_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51333){var vec__51334 = p__51333;var special_mouse_event = cljs.core.nth.call(null,vec__51334,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__51334,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7850__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7838__auto__ = related_target;if(cljs.core.truth_(and__7838__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7838__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7838__auto__ = selected_target;if(cljs.core.truth_(and__7838__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__7838__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__7850__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__51335){
var elem = cljs.core.first(arglist__51335);
arglist__51335 = cljs.core.next(arglist__51335);
var f = cljs.core.first(arglist__51335);
var args = cljs.core.rest(arglist__51335);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__51336_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__51336_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__51360_51383 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_51384 = cljs.core.nth.call(null,vec__51360_51383,0,null);var selector_51385 = cljs.core.nth.call(null,vec__51360_51383,1,null);var seq__51361_51386 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__51368_51387 = null;var count__51369_51388 = 0;var i__51370_51389 = 0;while(true){
if((i__51370_51389 < count__51369_51388))
{var vec__51377_51390 = cljs.core._nth.call(null,chunk__51368_51387,i__51370_51389);var orig_type_51391 = cljs.core.nth.call(null,vec__51377_51390,0,null);var f_51392 = cljs.core.nth.call(null,vec__51377_51390,1,null);var seq__51371_51393 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_51391,new cljs.core.PersistentArrayMap.fromArray([orig_type_51391,cljs.core.identity], true, false)));var chunk__51373_51394 = null;var count__51374_51395 = 0;var i__51375_51396 = 0;while(true){
if((i__51375_51396 < count__51374_51395))
{var vec__51378_51397 = cljs.core._nth.call(null,chunk__51373_51394,i__51375_51396);var actual_type_51398 = cljs.core.nth.call(null,vec__51378_51397,0,null);var factory_51399 = cljs.core.nth.call(null,vec__51378_51397,1,null);var canonical_f_51400 = (cljs.core.truth_(selector_51385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51384,selector_51385):cljs.core.identity).call(null,factory_51399.call(null,f_51392));dommy.core.update_event_listeners_BANG_.call(null,elem_51384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51385,actual_type_51398,f_51392], null),canonical_f_51400);
if(cljs.core.truth_(elem_51384.addEventListener))
{elem_51384.addEventListener(cljs.core.name.call(null,actual_type_51398),canonical_f_51400);
} else
{elem_51384.attachEvent(cljs.core.name.call(null,actual_type_51398),canonical_f_51400);
}
{
var G__51401 = seq__51371_51393;
var G__51402 = chunk__51373_51394;
var G__51403 = count__51374_51395;
var G__51404 = (i__51375_51396 + 1);
seq__51371_51393 = G__51401;
chunk__51373_51394 = G__51402;
count__51374_51395 = G__51403;
i__51375_51396 = G__51404;
continue;
}
} else
{var temp__4092__auto___51405 = cljs.core.seq.call(null,seq__51371_51393);if(temp__4092__auto___51405)
{var seq__51371_51406__$1 = temp__4092__auto___51405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51371_51406__$1))
{var c__8592__auto___51407 = cljs.core.chunk_first.call(null,seq__51371_51406__$1);{
var G__51408 = cljs.core.chunk_rest.call(null,seq__51371_51406__$1);
var G__51409 = c__8592__auto___51407;
var G__51410 = cljs.core.count.call(null,c__8592__auto___51407);
var G__51411 = 0;
seq__51371_51393 = G__51408;
chunk__51373_51394 = G__51409;
count__51374_51395 = G__51410;
i__51375_51396 = G__51411;
continue;
}
} else
{var vec__51379_51412 = cljs.core.first.call(null,seq__51371_51406__$1);var actual_type_51413 = cljs.core.nth.call(null,vec__51379_51412,0,null);var factory_51414 = cljs.core.nth.call(null,vec__51379_51412,1,null);var canonical_f_51415 = (cljs.core.truth_(selector_51385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51384,selector_51385):cljs.core.identity).call(null,factory_51414.call(null,f_51392));dommy.core.update_event_listeners_BANG_.call(null,elem_51384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51385,actual_type_51413,f_51392], null),canonical_f_51415);
if(cljs.core.truth_(elem_51384.addEventListener))
{elem_51384.addEventListener(cljs.core.name.call(null,actual_type_51413),canonical_f_51415);
} else
{elem_51384.attachEvent(cljs.core.name.call(null,actual_type_51413),canonical_f_51415);
}
{
var G__51416 = cljs.core.next.call(null,seq__51371_51406__$1);
var G__51417 = null;
var G__51418 = 0;
var G__51419 = 0;
seq__51371_51393 = G__51416;
chunk__51373_51394 = G__51417;
count__51374_51395 = G__51418;
i__51375_51396 = G__51419;
continue;
}
}
} else
{}
}
break;
}
{
var G__51420 = seq__51361_51386;
var G__51421 = chunk__51368_51387;
var G__51422 = count__51369_51388;
var G__51423 = (i__51370_51389 + 1);
seq__51361_51386 = G__51420;
chunk__51368_51387 = G__51421;
count__51369_51388 = G__51422;
i__51370_51389 = G__51423;
continue;
}
} else
{var temp__4092__auto___51424 = cljs.core.seq.call(null,seq__51361_51386);if(temp__4092__auto___51424)
{var seq__51361_51425__$1 = temp__4092__auto___51424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51361_51425__$1))
{var c__8592__auto___51426 = cljs.core.chunk_first.call(null,seq__51361_51425__$1);{
var G__51427 = cljs.core.chunk_rest.call(null,seq__51361_51425__$1);
var G__51428 = c__8592__auto___51426;
var G__51429 = cljs.core.count.call(null,c__8592__auto___51426);
var G__51430 = 0;
seq__51361_51386 = G__51427;
chunk__51368_51387 = G__51428;
count__51369_51388 = G__51429;
i__51370_51389 = G__51430;
continue;
}
} else
{var vec__51380_51431 = cljs.core.first.call(null,seq__51361_51425__$1);var orig_type_51432 = cljs.core.nth.call(null,vec__51380_51431,0,null);var f_51433 = cljs.core.nth.call(null,vec__51380_51431,1,null);var seq__51362_51434 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_51432,new cljs.core.PersistentArrayMap.fromArray([orig_type_51432,cljs.core.identity], true, false)));var chunk__51364_51435 = null;var count__51365_51436 = 0;var i__51366_51437 = 0;while(true){
if((i__51366_51437 < count__51365_51436))
{var vec__51381_51438 = cljs.core._nth.call(null,chunk__51364_51435,i__51366_51437);var actual_type_51439 = cljs.core.nth.call(null,vec__51381_51438,0,null);var factory_51440 = cljs.core.nth.call(null,vec__51381_51438,1,null);var canonical_f_51441 = (cljs.core.truth_(selector_51385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51384,selector_51385):cljs.core.identity).call(null,factory_51440.call(null,f_51433));dommy.core.update_event_listeners_BANG_.call(null,elem_51384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51385,actual_type_51439,f_51433], null),canonical_f_51441);
if(cljs.core.truth_(elem_51384.addEventListener))
{elem_51384.addEventListener(cljs.core.name.call(null,actual_type_51439),canonical_f_51441);
} else
{elem_51384.attachEvent(cljs.core.name.call(null,actual_type_51439),canonical_f_51441);
}
{
var G__51442 = seq__51362_51434;
var G__51443 = chunk__51364_51435;
var G__51444 = count__51365_51436;
var G__51445 = (i__51366_51437 + 1);
seq__51362_51434 = G__51442;
chunk__51364_51435 = G__51443;
count__51365_51436 = G__51444;
i__51366_51437 = G__51445;
continue;
}
} else
{var temp__4092__auto___51446__$1 = cljs.core.seq.call(null,seq__51362_51434);if(temp__4092__auto___51446__$1)
{var seq__51362_51447__$1 = temp__4092__auto___51446__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51362_51447__$1))
{var c__8592__auto___51448 = cljs.core.chunk_first.call(null,seq__51362_51447__$1);{
var G__51449 = cljs.core.chunk_rest.call(null,seq__51362_51447__$1);
var G__51450 = c__8592__auto___51448;
var G__51451 = cljs.core.count.call(null,c__8592__auto___51448);
var G__51452 = 0;
seq__51362_51434 = G__51449;
chunk__51364_51435 = G__51450;
count__51365_51436 = G__51451;
i__51366_51437 = G__51452;
continue;
}
} else
{var vec__51382_51453 = cljs.core.first.call(null,seq__51362_51447__$1);var actual_type_51454 = cljs.core.nth.call(null,vec__51382_51453,0,null);var factory_51455 = cljs.core.nth.call(null,vec__51382_51453,1,null);var canonical_f_51456 = (cljs.core.truth_(selector_51385)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51384,selector_51385):cljs.core.identity).call(null,factory_51455.call(null,f_51433));dommy.core.update_event_listeners_BANG_.call(null,elem_51384,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51385,actual_type_51454,f_51433], null),canonical_f_51456);
if(cljs.core.truth_(elem_51384.addEventListener))
{elem_51384.addEventListener(cljs.core.name.call(null,actual_type_51454),canonical_f_51456);
} else
{elem_51384.attachEvent(cljs.core.name.call(null,actual_type_51454),canonical_f_51456);
}
{
var G__51457 = cljs.core.next.call(null,seq__51362_51447__$1);
var G__51458 = null;
var G__51459 = 0;
var G__51460 = 0;
seq__51362_51434 = G__51457;
chunk__51364_51435 = G__51458;
count__51365_51436 = G__51459;
i__51366_51437 = G__51460;
continue;
}
}
} else
{}
}
break;
}
{
var G__51461 = cljs.core.next.call(null,seq__51361_51425__$1);
var G__51462 = null;
var G__51463 = 0;
var G__51464 = 0;
seq__51361_51386 = G__51461;
chunk__51368_51387 = G__51462;
count__51369_51388 = G__51463;
i__51370_51389 = G__51464;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__51465){
var elem_sel = cljs.core.first(arglist__51465);
var type_fs = cljs.core.rest(arglist__51465);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__51489_51512 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_51513 = cljs.core.nth.call(null,vec__51489_51512,0,null);var selector_51514 = cljs.core.nth.call(null,vec__51489_51512,1,null);var seq__51490_51515 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__51497_51516 = null;var count__51498_51517 = 0;var i__51499_51518 = 0;while(true){
if((i__51499_51518 < count__51498_51517))
{var vec__51506_51519 = cljs.core._nth.call(null,chunk__51497_51516,i__51499_51518);var orig_type_51520 = cljs.core.nth.call(null,vec__51506_51519,0,null);var f_51521 = cljs.core.nth.call(null,vec__51506_51519,1,null);var seq__51500_51522 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_51520,new cljs.core.PersistentArrayMap.fromArray([orig_type_51520,cljs.core.identity], true, false)));var chunk__51502_51523 = null;var count__51503_51524 = 0;var i__51504_51525 = 0;while(true){
if((i__51504_51525 < count__51503_51524))
{var vec__51507_51526 = cljs.core._nth.call(null,chunk__51502_51523,i__51504_51525);var actual_type_51527 = cljs.core.nth.call(null,vec__51507_51526,0,null);var __51528 = cljs.core.nth.call(null,vec__51507_51526,1,null);var keys_51529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51514,actual_type_51527,f_51521], null);var canonical_f_51530 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_51513),keys_51529);dommy.core.update_event_listeners_BANG_.call(null,elem_51513,dommy.utils.dissoc_in,keys_51529);
if(cljs.core.truth_(elem_51513.removeEventListener))
{elem_51513.removeEventListener(cljs.core.name.call(null,actual_type_51527),canonical_f_51530);
} else
{elem_51513.detachEvent(cljs.core.name.call(null,actual_type_51527),canonical_f_51530);
}
{
var G__51531 = seq__51500_51522;
var G__51532 = chunk__51502_51523;
var G__51533 = count__51503_51524;
var G__51534 = (i__51504_51525 + 1);
seq__51500_51522 = G__51531;
chunk__51502_51523 = G__51532;
count__51503_51524 = G__51533;
i__51504_51525 = G__51534;
continue;
}
} else
{var temp__4092__auto___51535 = cljs.core.seq.call(null,seq__51500_51522);if(temp__4092__auto___51535)
{var seq__51500_51536__$1 = temp__4092__auto___51535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51500_51536__$1))
{var c__8592__auto___51537 = cljs.core.chunk_first.call(null,seq__51500_51536__$1);{
var G__51538 = cljs.core.chunk_rest.call(null,seq__51500_51536__$1);
var G__51539 = c__8592__auto___51537;
var G__51540 = cljs.core.count.call(null,c__8592__auto___51537);
var G__51541 = 0;
seq__51500_51522 = G__51538;
chunk__51502_51523 = G__51539;
count__51503_51524 = G__51540;
i__51504_51525 = G__51541;
continue;
}
} else
{var vec__51508_51542 = cljs.core.first.call(null,seq__51500_51536__$1);var actual_type_51543 = cljs.core.nth.call(null,vec__51508_51542,0,null);var __51544 = cljs.core.nth.call(null,vec__51508_51542,1,null);var keys_51545 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51514,actual_type_51543,f_51521], null);var canonical_f_51546 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_51513),keys_51545);dommy.core.update_event_listeners_BANG_.call(null,elem_51513,dommy.utils.dissoc_in,keys_51545);
if(cljs.core.truth_(elem_51513.removeEventListener))
{elem_51513.removeEventListener(cljs.core.name.call(null,actual_type_51543),canonical_f_51546);
} else
{elem_51513.detachEvent(cljs.core.name.call(null,actual_type_51543),canonical_f_51546);
}
{
var G__51547 = cljs.core.next.call(null,seq__51500_51536__$1);
var G__51548 = null;
var G__51549 = 0;
var G__51550 = 0;
seq__51500_51522 = G__51547;
chunk__51502_51523 = G__51548;
count__51503_51524 = G__51549;
i__51504_51525 = G__51550;
continue;
}
}
} else
{}
}
break;
}
{
var G__51551 = seq__51490_51515;
var G__51552 = chunk__51497_51516;
var G__51553 = count__51498_51517;
var G__51554 = (i__51499_51518 + 1);
seq__51490_51515 = G__51551;
chunk__51497_51516 = G__51552;
count__51498_51517 = G__51553;
i__51499_51518 = G__51554;
continue;
}
} else
{var temp__4092__auto___51555 = cljs.core.seq.call(null,seq__51490_51515);if(temp__4092__auto___51555)
{var seq__51490_51556__$1 = temp__4092__auto___51555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51490_51556__$1))
{var c__8592__auto___51557 = cljs.core.chunk_first.call(null,seq__51490_51556__$1);{
var G__51558 = cljs.core.chunk_rest.call(null,seq__51490_51556__$1);
var G__51559 = c__8592__auto___51557;
var G__51560 = cljs.core.count.call(null,c__8592__auto___51557);
var G__51561 = 0;
seq__51490_51515 = G__51558;
chunk__51497_51516 = G__51559;
count__51498_51517 = G__51560;
i__51499_51518 = G__51561;
continue;
}
} else
{var vec__51509_51562 = cljs.core.first.call(null,seq__51490_51556__$1);var orig_type_51563 = cljs.core.nth.call(null,vec__51509_51562,0,null);var f_51564 = cljs.core.nth.call(null,vec__51509_51562,1,null);var seq__51491_51565 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_51563,new cljs.core.PersistentArrayMap.fromArray([orig_type_51563,cljs.core.identity], true, false)));var chunk__51493_51566 = null;var count__51494_51567 = 0;var i__51495_51568 = 0;while(true){
if((i__51495_51568 < count__51494_51567))
{var vec__51510_51569 = cljs.core._nth.call(null,chunk__51493_51566,i__51495_51568);var actual_type_51570 = cljs.core.nth.call(null,vec__51510_51569,0,null);var __51571 = cljs.core.nth.call(null,vec__51510_51569,1,null);var keys_51572 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51514,actual_type_51570,f_51564], null);var canonical_f_51573 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_51513),keys_51572);dommy.core.update_event_listeners_BANG_.call(null,elem_51513,dommy.utils.dissoc_in,keys_51572);
if(cljs.core.truth_(elem_51513.removeEventListener))
{elem_51513.removeEventListener(cljs.core.name.call(null,actual_type_51570),canonical_f_51573);
} else
{elem_51513.detachEvent(cljs.core.name.call(null,actual_type_51570),canonical_f_51573);
}
{
var G__51574 = seq__51491_51565;
var G__51575 = chunk__51493_51566;
var G__51576 = count__51494_51567;
var G__51577 = (i__51495_51568 + 1);
seq__51491_51565 = G__51574;
chunk__51493_51566 = G__51575;
count__51494_51567 = G__51576;
i__51495_51568 = G__51577;
continue;
}
} else
{var temp__4092__auto___51578__$1 = cljs.core.seq.call(null,seq__51491_51565);if(temp__4092__auto___51578__$1)
{var seq__51491_51579__$1 = temp__4092__auto___51578__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51491_51579__$1))
{var c__8592__auto___51580 = cljs.core.chunk_first.call(null,seq__51491_51579__$1);{
var G__51581 = cljs.core.chunk_rest.call(null,seq__51491_51579__$1);
var G__51582 = c__8592__auto___51580;
var G__51583 = cljs.core.count.call(null,c__8592__auto___51580);
var G__51584 = 0;
seq__51491_51565 = G__51581;
chunk__51493_51566 = G__51582;
count__51494_51567 = G__51583;
i__51495_51568 = G__51584;
continue;
}
} else
{var vec__51511_51585 = cljs.core.first.call(null,seq__51491_51579__$1);var actual_type_51586 = cljs.core.nth.call(null,vec__51511_51585,0,null);var __51587 = cljs.core.nth.call(null,vec__51511_51585,1,null);var keys_51588 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51514,actual_type_51586,f_51564], null);var canonical_f_51589 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_51513),keys_51588);dommy.core.update_event_listeners_BANG_.call(null,elem_51513,dommy.utils.dissoc_in,keys_51588);
if(cljs.core.truth_(elem_51513.removeEventListener))
{elem_51513.removeEventListener(cljs.core.name.call(null,actual_type_51586),canonical_f_51589);
} else
{elem_51513.detachEvent(cljs.core.name.call(null,actual_type_51586),canonical_f_51589);
}
{
var G__51590 = cljs.core.next.call(null,seq__51491_51579__$1);
var G__51591 = null;
var G__51592 = 0;
var G__51593 = 0;
seq__51491_51565 = G__51590;
chunk__51493_51566 = G__51591;
count__51494_51567 = G__51592;
i__51495_51568 = G__51593;
continue;
}
}
} else
{}
}
break;
}
{
var G__51594 = cljs.core.next.call(null,seq__51490_51556__$1);
var G__51595 = null;
var G__51596 = 0;
var G__51597 = 0;
seq__51490_51515 = G__51594;
chunk__51497_51516 = G__51595;
count__51498_51517 = G__51596;
i__51499_51518 = G__51597;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__51598){
var elem_sel = cljs.core.first(arglist__51598);
var type_fs = cljs.core.rest(arglist__51598);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__51606_51613 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_51614 = cljs.core.nth.call(null,vec__51606_51613,0,null);var selector_51615 = cljs.core.nth.call(null,vec__51606_51613,1,null);var seq__51607_51616 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__51608_51617 = null;var count__51609_51618 = 0;var i__51610_51619 = 0;while(true){
if((i__51610_51619 < count__51609_51618))
{var vec__51611_51620 = cljs.core._nth.call(null,chunk__51608_51617,i__51610_51619);var type_51621 = cljs.core.nth.call(null,vec__51611_51620,0,null);var f_51622 = cljs.core.nth.call(null,vec__51611_51620,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_51621,((function (seq__51607_51616,chunk__51608_51617,count__51609_51618,i__51610_51619,vec__51611_51620,type_51621,f_51622){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_51621,this_fn);
return f_51622.call(null,e);
});})(seq__51607_51616,chunk__51608_51617,count__51609_51618,i__51610_51619,vec__51611_51620,type_51621,f_51622))
);
{
var G__51623 = seq__51607_51616;
var G__51624 = chunk__51608_51617;
var G__51625 = count__51609_51618;
var G__51626 = (i__51610_51619 + 1);
seq__51607_51616 = G__51623;
chunk__51608_51617 = G__51624;
count__51609_51618 = G__51625;
i__51610_51619 = G__51626;
continue;
}
} else
{var temp__4092__auto___51627 = cljs.core.seq.call(null,seq__51607_51616);if(temp__4092__auto___51627)
{var seq__51607_51628__$1 = temp__4092__auto___51627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51607_51628__$1))
{var c__8592__auto___51629 = cljs.core.chunk_first.call(null,seq__51607_51628__$1);{
var G__51630 = cljs.core.chunk_rest.call(null,seq__51607_51628__$1);
var G__51631 = c__8592__auto___51629;
var G__51632 = cljs.core.count.call(null,c__8592__auto___51629);
var G__51633 = 0;
seq__51607_51616 = G__51630;
chunk__51608_51617 = G__51631;
count__51609_51618 = G__51632;
i__51610_51619 = G__51633;
continue;
}
} else
{var vec__51612_51634 = cljs.core.first.call(null,seq__51607_51628__$1);var type_51635 = cljs.core.nth.call(null,vec__51612_51634,0,null);var f_51636 = cljs.core.nth.call(null,vec__51612_51634,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_51635,((function (seq__51607_51616,chunk__51608_51617,count__51609_51618,i__51610_51619,vec__51612_51634,type_51635,f_51636,seq__51607_51628__$1,temp__4092__auto___51627){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_51635,this_fn);
return f_51636.call(null,e);
});})(seq__51607_51616,chunk__51608_51617,count__51609_51618,i__51610_51619,vec__51612_51634,type_51635,f_51636,seq__51607_51628__$1,temp__4092__auto___51627))
);
{
var G__51637 = cljs.core.next.call(null,seq__51607_51628__$1);
var G__51638 = null;
var G__51639 = 0;
var G__51640 = 0;
seq__51607_51616 = G__51637;
chunk__51608_51617 = G__51638;
count__51609_51618 = G__51639;
i__51610_51619 = G__51640;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__51641){
var elem_sel = cljs.core.first(arglist__51641);
var type_fs = cljs.core.rest(arglist__51641);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__51642){var vec__51644 = p__51642;var update_event_BANG_ = cljs.core.nth.call(null,vec__51644,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__7850__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__51642 = null;if (arguments.length > 2) {
  p__51642 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__51642);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__51645){
var node = cljs.core.first(arglist__51645);
arglist__51645 = cljs.core.next(arglist__51645);
var event_type = cljs.core.first(arglist__51645);
var p__51642 = cljs.core.rest(arglist__51645);
return fire_BANG___delegate(node,event_type,p__51642);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
