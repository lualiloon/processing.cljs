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
dommy.core.text = (function text(elem){var or__10858__auto__ = elem.textContent;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
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
var append_BANG___2 = (function (parent,child){var G__186339 = dommy.template.__GT_node_like.call(null,parent);G__186339.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__186339;
});
var append_BANG___3 = (function() { 
var G__186344__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__186340_186345 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__186341_186346 = null;var count__186342_186347 = 0;var i__186343_186348 = 0;while(true){
if((i__186343_186348 < count__186342_186347))
{var c_186349 = cljs.core._nth.call(null,chunk__186341_186346,i__186343_186348);append_BANG_.call(null,parent__$1,c_186349);
{
var G__186350 = seq__186340_186345;
var G__186351 = chunk__186341_186346;
var G__186352 = count__186342_186347;
var G__186353 = (i__186343_186348 + 1);
seq__186340_186345 = G__186350;
chunk__186341_186346 = G__186351;
count__186342_186347 = G__186352;
i__186343_186348 = G__186353;
continue;
}
} else
{var temp__4092__auto___186354 = cljs.core.seq.call(null,seq__186340_186345);if(temp__4092__auto___186354)
{var seq__186340_186355__$1 = temp__4092__auto___186354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186340_186355__$1))
{var c__11600__auto___186356 = cljs.core.chunk_first.call(null,seq__186340_186355__$1);{
var G__186357 = cljs.core.chunk_rest.call(null,seq__186340_186355__$1);
var G__186358 = c__11600__auto___186356;
var G__186359 = cljs.core.count.call(null,c__11600__auto___186356);
var G__186360 = 0;
seq__186340_186345 = G__186357;
chunk__186341_186346 = G__186358;
count__186342_186347 = G__186359;
i__186343_186348 = G__186360;
continue;
}
} else
{var c_186361 = cljs.core.first.call(null,seq__186340_186355__$1);append_BANG_.call(null,parent__$1,c_186361);
{
var G__186362 = cljs.core.next.call(null,seq__186340_186355__$1);
var G__186363 = null;
var G__186364 = 0;
var G__186365 = 0;
seq__186340_186345 = G__186362;
chunk__186341_186346 = G__186363;
count__186342_186347 = G__186364;
i__186343_186348 = G__186365;
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
var G__186344 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__186344__delegate.call(this,parent,child,more_children);};
G__186344.cljs$lang$maxFixedArity = 2;
G__186344.cljs$lang$applyTo = (function (arglist__186366){
var parent = cljs.core.first(arglist__186366);
arglist__186366 = cljs.core.next(arglist__186366);
var child = cljs.core.first(arglist__186366);
var more_children = cljs.core.rest(arglist__186366);
return G__186344__delegate(parent,child,more_children);
});
G__186344.cljs$core$IFn$_invoke$arity$variadic = G__186344__delegate;
return G__186344;
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
var G__186375__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__186371_186376 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__186372_186377 = null;var count__186373_186378 = 0;var i__186374_186379 = 0;while(true){
if((i__186374_186379 < count__186373_186378))
{var c_186380 = cljs.core._nth.call(null,chunk__186372_186377,i__186374_186379);prepend_BANG_.call(null,parent__$1,c_186380);
{
var G__186381 = seq__186371_186376;
var G__186382 = chunk__186372_186377;
var G__186383 = count__186373_186378;
var G__186384 = (i__186374_186379 + 1);
seq__186371_186376 = G__186381;
chunk__186372_186377 = G__186382;
count__186373_186378 = G__186383;
i__186374_186379 = G__186384;
continue;
}
} else
{var temp__4092__auto___186385 = cljs.core.seq.call(null,seq__186371_186376);if(temp__4092__auto___186385)
{var seq__186371_186386__$1 = temp__4092__auto___186385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186371_186386__$1))
{var c__11600__auto___186387 = cljs.core.chunk_first.call(null,seq__186371_186386__$1);{
var G__186388 = cljs.core.chunk_rest.call(null,seq__186371_186386__$1);
var G__186389 = c__11600__auto___186387;
var G__186390 = cljs.core.count.call(null,c__11600__auto___186387);
var G__186391 = 0;
seq__186371_186376 = G__186388;
chunk__186372_186377 = G__186389;
count__186373_186378 = G__186390;
i__186374_186379 = G__186391;
continue;
}
} else
{var c_186392 = cljs.core.first.call(null,seq__186371_186386__$1);prepend_BANG_.call(null,parent__$1,c_186392);
{
var G__186393 = cljs.core.next.call(null,seq__186371_186386__$1);
var G__186394 = null;
var G__186395 = 0;
var G__186396 = 0;
seq__186371_186376 = G__186393;
chunk__186372_186377 = G__186394;
count__186373_186378 = G__186395;
i__186374_186379 = G__186396;
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
var G__186375 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__186375__delegate.call(this,parent,child,more_children);};
G__186375.cljs$lang$maxFixedArity = 2;
G__186375.cljs$lang$applyTo = (function (arglist__186397){
var parent = cljs.core.first(arglist__186397);
arglist__186397 = cljs.core.next(arglist__186397);
var child = cljs.core.first(arglist__186397);
var more_children = cljs.core.rest(arglist__186397);
return G__186375__delegate(parent,child,more_children);
});
G__186375.cljs$core$IFn$_invoke$arity$variadic = G__186375__delegate;
return G__186375;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___186398 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___186398))
{var next_186399 = temp__4090__auto___186398;parent.insertBefore(actual_node,next_186399);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__186401 = dommy.template.__GT_node_like.call(null,parent);G__186401.innerHTML = "";
dommy.core.append_BANG_.call(null,G__186401,node_like);
return G__186401;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__186403 = elem__$1.parentNode;G__186403.removeChild(elem__$1);
return G__186403;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__186409){var vec__186410 = p__186409;var k = cljs.core.nth.call(null,vec__186410,0,null);var v = cljs.core.nth.call(null,vec__186410,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t186411 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t186411 = (function (v,k,vec__186410,p__186409,container,key_selectors_map,template,selector_map,meta186412){
this.v = v;
this.k = k;
this.vec__186410 = vec__186410;
this.p__186409 = p__186409;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta186412 = meta186412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t186411.cljs$lang$type = true;
dommy.core.t186411.cljs$lang$ctorStr = "dommy.core/t186411";
dommy.core.t186411.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"dommy.core/t186411");
});
dommy.core.t186411.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t186411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_186413){var self__ = this;
var _186413__$1 = this;return self__.meta186412;
});
dommy.core.t186411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_186413,meta186412__$1){var self__ = this;
var _186413__$1 = this;return (new dommy.core.t186411(self__.v,self__.k,self__.vec__186410,self__.p__186409,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta186412__$1));
});
dommy.core.__GT_t186411 = (function __GT_t186411(v__$1,k__$1,vec__186410__$1,p__186409__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta186412){return (new dommy.core.t186411(v__$1,k__$1,vec__186410__$1,p__186409__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta186412));
});
}
return (new dommy.core.t186411(v,k,vec__186410,p__186409,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__186414_SHARP_){return p1__186414_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__186415_SHARP_){return !((p1__186415_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__186416){var vec__186417 = p__186416;var special_mouse_event = cljs.core.nth.call(null,vec__186417,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__186417,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__10858__auto__ = event.selectedTarget;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__10846__auto__ = related_target;if(cljs.core.truth_(and__10846__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__10846__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__10846__auto__ = selected_target;if(cljs.core.truth_(and__10846__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__10846__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__10858__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__186418){
var elem = cljs.core.first(arglist__186418);
arglist__186418 = cljs.core.next(arglist__186418);
var f = cljs.core.first(arglist__186418);
var args = cljs.core.rest(arglist__186418);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__186419_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__186419_SHARP_));
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
var vec__186443_186466 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_186467 = cljs.core.nth.call(null,vec__186443_186466,0,null);var selector_186468 = cljs.core.nth.call(null,vec__186443_186466,1,null);var seq__186444_186469 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__186451_186470 = null;var count__186452_186471 = 0;var i__186453_186472 = 0;while(true){
if((i__186453_186472 < count__186452_186471))
{var vec__186460_186473 = cljs.core._nth.call(null,chunk__186451_186470,i__186453_186472);var orig_type_186474 = cljs.core.nth.call(null,vec__186460_186473,0,null);var f_186475 = cljs.core.nth.call(null,vec__186460_186473,1,null);var seq__186454_186476 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_186474,new cljs.core.PersistentArrayMap.fromArray([orig_type_186474,cljs.core.identity], true, false)));var chunk__186456_186477 = null;var count__186457_186478 = 0;var i__186458_186479 = 0;while(true){
if((i__186458_186479 < count__186457_186478))
{var vec__186461_186480 = cljs.core._nth.call(null,chunk__186456_186477,i__186458_186479);var actual_type_186481 = cljs.core.nth.call(null,vec__186461_186480,0,null);var factory_186482 = cljs.core.nth.call(null,vec__186461_186480,1,null);var canonical_f_186483 = (cljs.core.truth_(selector_186468)?cljs.core.partial.call(null,dommy.core.live_listener,elem_186467,selector_186468):cljs.core.identity).call(null,factory_186482.call(null,f_186475));dommy.core.update_event_listeners_BANG_.call(null,elem_186467,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186468,actual_type_186481,f_186475], null),canonical_f_186483);
if(cljs.core.truth_(elem_186467.addEventListener))
{elem_186467.addEventListener(cljs.core.name.call(null,actual_type_186481),canonical_f_186483);
} else
{elem_186467.attachEvent(cljs.core.name.call(null,actual_type_186481),canonical_f_186483);
}
{
var G__186484 = seq__186454_186476;
var G__186485 = chunk__186456_186477;
var G__186486 = count__186457_186478;
var G__186487 = (i__186458_186479 + 1);
seq__186454_186476 = G__186484;
chunk__186456_186477 = G__186485;
count__186457_186478 = G__186486;
i__186458_186479 = G__186487;
continue;
}
} else
{var temp__4092__auto___186488 = cljs.core.seq.call(null,seq__186454_186476);if(temp__4092__auto___186488)
{var seq__186454_186489__$1 = temp__4092__auto___186488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186454_186489__$1))
{var c__11600__auto___186490 = cljs.core.chunk_first.call(null,seq__186454_186489__$1);{
var G__186491 = cljs.core.chunk_rest.call(null,seq__186454_186489__$1);
var G__186492 = c__11600__auto___186490;
var G__186493 = cljs.core.count.call(null,c__11600__auto___186490);
var G__186494 = 0;
seq__186454_186476 = G__186491;
chunk__186456_186477 = G__186492;
count__186457_186478 = G__186493;
i__186458_186479 = G__186494;
continue;
}
} else
{var vec__186462_186495 = cljs.core.first.call(null,seq__186454_186489__$1);var actual_type_186496 = cljs.core.nth.call(null,vec__186462_186495,0,null);var factory_186497 = cljs.core.nth.call(null,vec__186462_186495,1,null);var canonical_f_186498 = (cljs.core.truth_(selector_186468)?cljs.core.partial.call(null,dommy.core.live_listener,elem_186467,selector_186468):cljs.core.identity).call(null,factory_186497.call(null,f_186475));dommy.core.update_event_listeners_BANG_.call(null,elem_186467,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186468,actual_type_186496,f_186475], null),canonical_f_186498);
if(cljs.core.truth_(elem_186467.addEventListener))
{elem_186467.addEventListener(cljs.core.name.call(null,actual_type_186496),canonical_f_186498);
} else
{elem_186467.attachEvent(cljs.core.name.call(null,actual_type_186496),canonical_f_186498);
}
{
var G__186499 = cljs.core.next.call(null,seq__186454_186489__$1);
var G__186500 = null;
var G__186501 = 0;
var G__186502 = 0;
seq__186454_186476 = G__186499;
chunk__186456_186477 = G__186500;
count__186457_186478 = G__186501;
i__186458_186479 = G__186502;
continue;
}
}
} else
{}
}
break;
}
{
var G__186503 = seq__186444_186469;
var G__186504 = chunk__186451_186470;
var G__186505 = count__186452_186471;
var G__186506 = (i__186453_186472 + 1);
seq__186444_186469 = G__186503;
chunk__186451_186470 = G__186504;
count__186452_186471 = G__186505;
i__186453_186472 = G__186506;
continue;
}
} else
{var temp__4092__auto___186507 = cljs.core.seq.call(null,seq__186444_186469);if(temp__4092__auto___186507)
{var seq__186444_186508__$1 = temp__4092__auto___186507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186444_186508__$1))
{var c__11600__auto___186509 = cljs.core.chunk_first.call(null,seq__186444_186508__$1);{
var G__186510 = cljs.core.chunk_rest.call(null,seq__186444_186508__$1);
var G__186511 = c__11600__auto___186509;
var G__186512 = cljs.core.count.call(null,c__11600__auto___186509);
var G__186513 = 0;
seq__186444_186469 = G__186510;
chunk__186451_186470 = G__186511;
count__186452_186471 = G__186512;
i__186453_186472 = G__186513;
continue;
}
} else
{var vec__186463_186514 = cljs.core.first.call(null,seq__186444_186508__$1);var orig_type_186515 = cljs.core.nth.call(null,vec__186463_186514,0,null);var f_186516 = cljs.core.nth.call(null,vec__186463_186514,1,null);var seq__186445_186517 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_186515,new cljs.core.PersistentArrayMap.fromArray([orig_type_186515,cljs.core.identity], true, false)));var chunk__186447_186518 = null;var count__186448_186519 = 0;var i__186449_186520 = 0;while(true){
if((i__186449_186520 < count__186448_186519))
{var vec__186464_186521 = cljs.core._nth.call(null,chunk__186447_186518,i__186449_186520);var actual_type_186522 = cljs.core.nth.call(null,vec__186464_186521,0,null);var factory_186523 = cljs.core.nth.call(null,vec__186464_186521,1,null);var canonical_f_186524 = (cljs.core.truth_(selector_186468)?cljs.core.partial.call(null,dommy.core.live_listener,elem_186467,selector_186468):cljs.core.identity).call(null,factory_186523.call(null,f_186516));dommy.core.update_event_listeners_BANG_.call(null,elem_186467,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186468,actual_type_186522,f_186516], null),canonical_f_186524);
if(cljs.core.truth_(elem_186467.addEventListener))
{elem_186467.addEventListener(cljs.core.name.call(null,actual_type_186522),canonical_f_186524);
} else
{elem_186467.attachEvent(cljs.core.name.call(null,actual_type_186522),canonical_f_186524);
}
{
var G__186525 = seq__186445_186517;
var G__186526 = chunk__186447_186518;
var G__186527 = count__186448_186519;
var G__186528 = (i__186449_186520 + 1);
seq__186445_186517 = G__186525;
chunk__186447_186518 = G__186526;
count__186448_186519 = G__186527;
i__186449_186520 = G__186528;
continue;
}
} else
{var temp__4092__auto___186529__$1 = cljs.core.seq.call(null,seq__186445_186517);if(temp__4092__auto___186529__$1)
{var seq__186445_186530__$1 = temp__4092__auto___186529__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186445_186530__$1))
{var c__11600__auto___186531 = cljs.core.chunk_first.call(null,seq__186445_186530__$1);{
var G__186532 = cljs.core.chunk_rest.call(null,seq__186445_186530__$1);
var G__186533 = c__11600__auto___186531;
var G__186534 = cljs.core.count.call(null,c__11600__auto___186531);
var G__186535 = 0;
seq__186445_186517 = G__186532;
chunk__186447_186518 = G__186533;
count__186448_186519 = G__186534;
i__186449_186520 = G__186535;
continue;
}
} else
{var vec__186465_186536 = cljs.core.first.call(null,seq__186445_186530__$1);var actual_type_186537 = cljs.core.nth.call(null,vec__186465_186536,0,null);var factory_186538 = cljs.core.nth.call(null,vec__186465_186536,1,null);var canonical_f_186539 = (cljs.core.truth_(selector_186468)?cljs.core.partial.call(null,dommy.core.live_listener,elem_186467,selector_186468):cljs.core.identity).call(null,factory_186538.call(null,f_186516));dommy.core.update_event_listeners_BANG_.call(null,elem_186467,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186468,actual_type_186537,f_186516], null),canonical_f_186539);
if(cljs.core.truth_(elem_186467.addEventListener))
{elem_186467.addEventListener(cljs.core.name.call(null,actual_type_186537),canonical_f_186539);
} else
{elem_186467.attachEvent(cljs.core.name.call(null,actual_type_186537),canonical_f_186539);
}
{
var G__186540 = cljs.core.next.call(null,seq__186445_186530__$1);
var G__186541 = null;
var G__186542 = 0;
var G__186543 = 0;
seq__186445_186517 = G__186540;
chunk__186447_186518 = G__186541;
count__186448_186519 = G__186542;
i__186449_186520 = G__186543;
continue;
}
}
} else
{}
}
break;
}
{
var G__186544 = cljs.core.next.call(null,seq__186444_186508__$1);
var G__186545 = null;
var G__186546 = 0;
var G__186547 = 0;
seq__186444_186469 = G__186544;
chunk__186451_186470 = G__186545;
count__186452_186471 = G__186546;
i__186453_186472 = G__186547;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__186548){
var elem_sel = cljs.core.first(arglist__186548);
var type_fs = cljs.core.rest(arglist__186548);
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
var vec__186572_186595 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_186596 = cljs.core.nth.call(null,vec__186572_186595,0,null);var selector_186597 = cljs.core.nth.call(null,vec__186572_186595,1,null);var seq__186573_186598 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__186580_186599 = null;var count__186581_186600 = 0;var i__186582_186601 = 0;while(true){
if((i__186582_186601 < count__186581_186600))
{var vec__186589_186602 = cljs.core._nth.call(null,chunk__186580_186599,i__186582_186601);var orig_type_186603 = cljs.core.nth.call(null,vec__186589_186602,0,null);var f_186604 = cljs.core.nth.call(null,vec__186589_186602,1,null);var seq__186583_186605 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_186603,new cljs.core.PersistentArrayMap.fromArray([orig_type_186603,cljs.core.identity], true, false)));var chunk__186585_186606 = null;var count__186586_186607 = 0;var i__186587_186608 = 0;while(true){
if((i__186587_186608 < count__186586_186607))
{var vec__186590_186609 = cljs.core._nth.call(null,chunk__186585_186606,i__186587_186608);var actual_type_186610 = cljs.core.nth.call(null,vec__186590_186609,0,null);var __186611 = cljs.core.nth.call(null,vec__186590_186609,1,null);var keys_186612 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186597,actual_type_186610,f_186604], null);var canonical_f_186613 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_186596),keys_186612);dommy.core.update_event_listeners_BANG_.call(null,elem_186596,dommy.utils.dissoc_in,keys_186612);
if(cljs.core.truth_(elem_186596.removeEventListener))
{elem_186596.removeEventListener(cljs.core.name.call(null,actual_type_186610),canonical_f_186613);
} else
{elem_186596.detachEvent(cljs.core.name.call(null,actual_type_186610),canonical_f_186613);
}
{
var G__186614 = seq__186583_186605;
var G__186615 = chunk__186585_186606;
var G__186616 = count__186586_186607;
var G__186617 = (i__186587_186608 + 1);
seq__186583_186605 = G__186614;
chunk__186585_186606 = G__186615;
count__186586_186607 = G__186616;
i__186587_186608 = G__186617;
continue;
}
} else
{var temp__4092__auto___186618 = cljs.core.seq.call(null,seq__186583_186605);if(temp__4092__auto___186618)
{var seq__186583_186619__$1 = temp__4092__auto___186618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186583_186619__$1))
{var c__11600__auto___186620 = cljs.core.chunk_first.call(null,seq__186583_186619__$1);{
var G__186621 = cljs.core.chunk_rest.call(null,seq__186583_186619__$1);
var G__186622 = c__11600__auto___186620;
var G__186623 = cljs.core.count.call(null,c__11600__auto___186620);
var G__186624 = 0;
seq__186583_186605 = G__186621;
chunk__186585_186606 = G__186622;
count__186586_186607 = G__186623;
i__186587_186608 = G__186624;
continue;
}
} else
{var vec__186591_186625 = cljs.core.first.call(null,seq__186583_186619__$1);var actual_type_186626 = cljs.core.nth.call(null,vec__186591_186625,0,null);var __186627 = cljs.core.nth.call(null,vec__186591_186625,1,null);var keys_186628 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186597,actual_type_186626,f_186604], null);var canonical_f_186629 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_186596),keys_186628);dommy.core.update_event_listeners_BANG_.call(null,elem_186596,dommy.utils.dissoc_in,keys_186628);
if(cljs.core.truth_(elem_186596.removeEventListener))
{elem_186596.removeEventListener(cljs.core.name.call(null,actual_type_186626),canonical_f_186629);
} else
{elem_186596.detachEvent(cljs.core.name.call(null,actual_type_186626),canonical_f_186629);
}
{
var G__186630 = cljs.core.next.call(null,seq__186583_186619__$1);
var G__186631 = null;
var G__186632 = 0;
var G__186633 = 0;
seq__186583_186605 = G__186630;
chunk__186585_186606 = G__186631;
count__186586_186607 = G__186632;
i__186587_186608 = G__186633;
continue;
}
}
} else
{}
}
break;
}
{
var G__186634 = seq__186573_186598;
var G__186635 = chunk__186580_186599;
var G__186636 = count__186581_186600;
var G__186637 = (i__186582_186601 + 1);
seq__186573_186598 = G__186634;
chunk__186580_186599 = G__186635;
count__186581_186600 = G__186636;
i__186582_186601 = G__186637;
continue;
}
} else
{var temp__4092__auto___186638 = cljs.core.seq.call(null,seq__186573_186598);if(temp__4092__auto___186638)
{var seq__186573_186639__$1 = temp__4092__auto___186638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186573_186639__$1))
{var c__11600__auto___186640 = cljs.core.chunk_first.call(null,seq__186573_186639__$1);{
var G__186641 = cljs.core.chunk_rest.call(null,seq__186573_186639__$1);
var G__186642 = c__11600__auto___186640;
var G__186643 = cljs.core.count.call(null,c__11600__auto___186640);
var G__186644 = 0;
seq__186573_186598 = G__186641;
chunk__186580_186599 = G__186642;
count__186581_186600 = G__186643;
i__186582_186601 = G__186644;
continue;
}
} else
{var vec__186592_186645 = cljs.core.first.call(null,seq__186573_186639__$1);var orig_type_186646 = cljs.core.nth.call(null,vec__186592_186645,0,null);var f_186647 = cljs.core.nth.call(null,vec__186592_186645,1,null);var seq__186574_186648 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_186646,new cljs.core.PersistentArrayMap.fromArray([orig_type_186646,cljs.core.identity], true, false)));var chunk__186576_186649 = null;var count__186577_186650 = 0;var i__186578_186651 = 0;while(true){
if((i__186578_186651 < count__186577_186650))
{var vec__186593_186652 = cljs.core._nth.call(null,chunk__186576_186649,i__186578_186651);var actual_type_186653 = cljs.core.nth.call(null,vec__186593_186652,0,null);var __186654 = cljs.core.nth.call(null,vec__186593_186652,1,null);var keys_186655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186597,actual_type_186653,f_186647], null);var canonical_f_186656 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_186596),keys_186655);dommy.core.update_event_listeners_BANG_.call(null,elem_186596,dommy.utils.dissoc_in,keys_186655);
if(cljs.core.truth_(elem_186596.removeEventListener))
{elem_186596.removeEventListener(cljs.core.name.call(null,actual_type_186653),canonical_f_186656);
} else
{elem_186596.detachEvent(cljs.core.name.call(null,actual_type_186653),canonical_f_186656);
}
{
var G__186657 = seq__186574_186648;
var G__186658 = chunk__186576_186649;
var G__186659 = count__186577_186650;
var G__186660 = (i__186578_186651 + 1);
seq__186574_186648 = G__186657;
chunk__186576_186649 = G__186658;
count__186577_186650 = G__186659;
i__186578_186651 = G__186660;
continue;
}
} else
{var temp__4092__auto___186661__$1 = cljs.core.seq.call(null,seq__186574_186648);if(temp__4092__auto___186661__$1)
{var seq__186574_186662__$1 = temp__4092__auto___186661__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186574_186662__$1))
{var c__11600__auto___186663 = cljs.core.chunk_first.call(null,seq__186574_186662__$1);{
var G__186664 = cljs.core.chunk_rest.call(null,seq__186574_186662__$1);
var G__186665 = c__11600__auto___186663;
var G__186666 = cljs.core.count.call(null,c__11600__auto___186663);
var G__186667 = 0;
seq__186574_186648 = G__186664;
chunk__186576_186649 = G__186665;
count__186577_186650 = G__186666;
i__186578_186651 = G__186667;
continue;
}
} else
{var vec__186594_186668 = cljs.core.first.call(null,seq__186574_186662__$1);var actual_type_186669 = cljs.core.nth.call(null,vec__186594_186668,0,null);var __186670 = cljs.core.nth.call(null,vec__186594_186668,1,null);var keys_186671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_186597,actual_type_186669,f_186647], null);var canonical_f_186672 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_186596),keys_186671);dommy.core.update_event_listeners_BANG_.call(null,elem_186596,dommy.utils.dissoc_in,keys_186671);
if(cljs.core.truth_(elem_186596.removeEventListener))
{elem_186596.removeEventListener(cljs.core.name.call(null,actual_type_186669),canonical_f_186672);
} else
{elem_186596.detachEvent(cljs.core.name.call(null,actual_type_186669),canonical_f_186672);
}
{
var G__186673 = cljs.core.next.call(null,seq__186574_186662__$1);
var G__186674 = null;
var G__186675 = 0;
var G__186676 = 0;
seq__186574_186648 = G__186673;
chunk__186576_186649 = G__186674;
count__186577_186650 = G__186675;
i__186578_186651 = G__186676;
continue;
}
}
} else
{}
}
break;
}
{
var G__186677 = cljs.core.next.call(null,seq__186573_186639__$1);
var G__186678 = null;
var G__186679 = 0;
var G__186680 = 0;
seq__186573_186598 = G__186677;
chunk__186580_186599 = G__186678;
count__186581_186600 = G__186679;
i__186582_186601 = G__186680;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__186681){
var elem_sel = cljs.core.first(arglist__186681);
var type_fs = cljs.core.rest(arglist__186681);
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
var vec__186689_186696 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_186697 = cljs.core.nth.call(null,vec__186689_186696,0,null);var selector_186698 = cljs.core.nth.call(null,vec__186689_186696,1,null);var seq__186690_186699 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__186691_186700 = null;var count__186692_186701 = 0;var i__186693_186702 = 0;while(true){
if((i__186693_186702 < count__186692_186701))
{var vec__186694_186703 = cljs.core._nth.call(null,chunk__186691_186700,i__186693_186702);var type_186704 = cljs.core.nth.call(null,vec__186694_186703,0,null);var f_186705 = cljs.core.nth.call(null,vec__186694_186703,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_186704,((function (seq__186690_186699,chunk__186691_186700,count__186692_186701,i__186693_186702,vec__186694_186703,type_186704,f_186705){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_186704,this_fn);
return f_186705.call(null,e);
});})(seq__186690_186699,chunk__186691_186700,count__186692_186701,i__186693_186702,vec__186694_186703,type_186704,f_186705))
);
{
var G__186706 = seq__186690_186699;
var G__186707 = chunk__186691_186700;
var G__186708 = count__186692_186701;
var G__186709 = (i__186693_186702 + 1);
seq__186690_186699 = G__186706;
chunk__186691_186700 = G__186707;
count__186692_186701 = G__186708;
i__186693_186702 = G__186709;
continue;
}
} else
{var temp__4092__auto___186710 = cljs.core.seq.call(null,seq__186690_186699);if(temp__4092__auto___186710)
{var seq__186690_186711__$1 = temp__4092__auto___186710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186690_186711__$1))
{var c__11600__auto___186712 = cljs.core.chunk_first.call(null,seq__186690_186711__$1);{
var G__186713 = cljs.core.chunk_rest.call(null,seq__186690_186711__$1);
var G__186714 = c__11600__auto___186712;
var G__186715 = cljs.core.count.call(null,c__11600__auto___186712);
var G__186716 = 0;
seq__186690_186699 = G__186713;
chunk__186691_186700 = G__186714;
count__186692_186701 = G__186715;
i__186693_186702 = G__186716;
continue;
}
} else
{var vec__186695_186717 = cljs.core.first.call(null,seq__186690_186711__$1);var type_186718 = cljs.core.nth.call(null,vec__186695_186717,0,null);var f_186719 = cljs.core.nth.call(null,vec__186695_186717,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_186718,((function (seq__186690_186699,chunk__186691_186700,count__186692_186701,i__186693_186702,vec__186695_186717,type_186718,f_186719,seq__186690_186711__$1,temp__4092__auto___186710){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_186718,this_fn);
return f_186719.call(null,e);
});})(seq__186690_186699,chunk__186691_186700,count__186692_186701,i__186693_186702,vec__186695_186717,type_186718,f_186719,seq__186690_186711__$1,temp__4092__auto___186710))
);
{
var G__186720 = cljs.core.next.call(null,seq__186690_186711__$1);
var G__186721 = null;
var G__186722 = 0;
var G__186723 = 0;
seq__186690_186699 = G__186720;
chunk__186691_186700 = G__186721;
count__186692_186701 = G__186722;
i__186693_186702 = G__186723;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__186724){
var elem_sel = cljs.core.first(arglist__186724);
var type_fs = cljs.core.rest(arglist__186724);
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
var fire_BANG___delegate = function (node,event_type,p__186725){var vec__186727 = p__186725;var update_event_BANG_ = cljs.core.nth.call(null,vec__186727,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__10858__auto__ = update_event_BANG_;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
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
var p__186725 = null;if (arguments.length > 2) {
  p__186725 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__186725);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__186728){
var node = cljs.core.first(arglist__186728);
arglist__186728 = cljs.core.next(arglist__186728);
var event_type = cljs.core.first(arglist__186728);
var p__186725 = cljs.core.rest(arglist__186728);
return fire_BANG___delegate(node,event_type,p__186725);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map