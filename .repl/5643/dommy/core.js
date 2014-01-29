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
dommy.core.text = (function text(elem){var or__7862__auto__ = elem.textContent;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
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
var append_BANG___2 = (function (parent,child){var G__24526 = dommy.template.__GT_node_like.call(null,parent);G__24526.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__24526;
});
var append_BANG___3 = (function() { 
var G__24531__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24527_24532 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24528_24533 = null;var count__24529_24534 = 0;var i__24530_24535 = 0;while(true){
if((i__24530_24535 < count__24529_24534))
{var c_24536 = cljs.core._nth.call(null,chunk__24528_24533,i__24530_24535);append_BANG_.call(null,parent__$1,c_24536);
{
var G__24537 = seq__24527_24532;
var G__24538 = chunk__24528_24533;
var G__24539 = count__24529_24534;
var G__24540 = (i__24530_24535 + 1);
seq__24527_24532 = G__24537;
chunk__24528_24533 = G__24538;
count__24529_24534 = G__24539;
i__24530_24535 = G__24540;
continue;
}
} else
{var temp__4092__auto___24541 = cljs.core.seq.call(null,seq__24527_24532);if(temp__4092__auto___24541)
{var seq__24527_24542__$1 = temp__4092__auto___24541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24527_24542__$1))
{var c__8604__auto___24543 = cljs.core.chunk_first.call(null,seq__24527_24542__$1);{
var G__24544 = cljs.core.chunk_rest.call(null,seq__24527_24542__$1);
var G__24545 = c__8604__auto___24543;
var G__24546 = cljs.core.count.call(null,c__8604__auto___24543);
var G__24547 = 0;
seq__24527_24532 = G__24544;
chunk__24528_24533 = G__24545;
count__24529_24534 = G__24546;
i__24530_24535 = G__24547;
continue;
}
} else
{var c_24548 = cljs.core.first.call(null,seq__24527_24542__$1);append_BANG_.call(null,parent__$1,c_24548);
{
var G__24549 = cljs.core.next.call(null,seq__24527_24542__$1);
var G__24550 = null;
var G__24551 = 0;
var G__24552 = 0;
seq__24527_24532 = G__24549;
chunk__24528_24533 = G__24550;
count__24529_24534 = G__24551;
i__24530_24535 = G__24552;
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
var G__24531 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24531__delegate.call(this,parent,child,more_children);};
G__24531.cljs$lang$maxFixedArity = 2;
G__24531.cljs$lang$applyTo = (function (arglist__24553){
var parent = cljs.core.first(arglist__24553);
arglist__24553 = cljs.core.next(arglist__24553);
var child = cljs.core.first(arglist__24553);
var more_children = cljs.core.rest(arglist__24553);
return G__24531__delegate(parent,child,more_children);
});
G__24531.cljs$core$IFn$_invoke$arity$variadic = G__24531__delegate;
return G__24531;
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
var G__24562__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24558_24563 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24559_24564 = null;var count__24560_24565 = 0;var i__24561_24566 = 0;while(true){
if((i__24561_24566 < count__24560_24565))
{var c_24567 = cljs.core._nth.call(null,chunk__24559_24564,i__24561_24566);prepend_BANG_.call(null,parent__$1,c_24567);
{
var G__24568 = seq__24558_24563;
var G__24569 = chunk__24559_24564;
var G__24570 = count__24560_24565;
var G__24571 = (i__24561_24566 + 1);
seq__24558_24563 = G__24568;
chunk__24559_24564 = G__24569;
count__24560_24565 = G__24570;
i__24561_24566 = G__24571;
continue;
}
} else
{var temp__4092__auto___24572 = cljs.core.seq.call(null,seq__24558_24563);if(temp__4092__auto___24572)
{var seq__24558_24573__$1 = temp__4092__auto___24572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24558_24573__$1))
{var c__8604__auto___24574 = cljs.core.chunk_first.call(null,seq__24558_24573__$1);{
var G__24575 = cljs.core.chunk_rest.call(null,seq__24558_24573__$1);
var G__24576 = c__8604__auto___24574;
var G__24577 = cljs.core.count.call(null,c__8604__auto___24574);
var G__24578 = 0;
seq__24558_24563 = G__24575;
chunk__24559_24564 = G__24576;
count__24560_24565 = G__24577;
i__24561_24566 = G__24578;
continue;
}
} else
{var c_24579 = cljs.core.first.call(null,seq__24558_24573__$1);prepend_BANG_.call(null,parent__$1,c_24579);
{
var G__24580 = cljs.core.next.call(null,seq__24558_24573__$1);
var G__24581 = null;
var G__24582 = 0;
var G__24583 = 0;
seq__24558_24563 = G__24580;
chunk__24559_24564 = G__24581;
count__24560_24565 = G__24582;
i__24561_24566 = G__24583;
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
var G__24562 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24562__delegate.call(this,parent,child,more_children);};
G__24562.cljs$lang$maxFixedArity = 2;
G__24562.cljs$lang$applyTo = (function (arglist__24584){
var parent = cljs.core.first(arglist__24584);
arglist__24584 = cljs.core.next(arglist__24584);
var child = cljs.core.first(arglist__24584);
var more_children = cljs.core.rest(arglist__24584);
return G__24562__delegate(parent,child,more_children);
});
G__24562.cljs$core$IFn$_invoke$arity$variadic = G__24562__delegate;
return G__24562;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___24585 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___24585))
{var next_24586 = temp__4090__auto___24585;parent.insertBefore(actual_node,next_24586);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__24588 = dommy.template.__GT_node_like.call(null,parent);G__24588.innerHTML = "";
dommy.core.append_BANG_.call(null,G__24588,node_like);
return G__24588;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__24590 = elem__$1.parentNode;G__24590.removeChild(elem__$1);
return G__24590;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24596){var vec__24597 = p__24596;var k = cljs.core.nth.call(null,vec__24597,0,null);var v = cljs.core.nth.call(null,vec__24597,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t24598 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t24598 = (function (v,k,vec__24597,p__24596,container,key_selectors_map,template,selector_map,meta24599){
this.v = v;
this.k = k;
this.vec__24597 = vec__24597;
this.p__24596 = p__24596;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta24599 = meta24599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t24598.cljs$lang$type = true;
dommy.core.t24598.cljs$lang$ctorStr = "dommy.core/t24598";
dommy.core.t24598.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"dommy.core/t24598");
});
dommy.core.t24598.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t24598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24600){var self__ = this;
var _24600__$1 = this;return self__.meta24599;
});
dommy.core.t24598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24600,meta24599__$1){var self__ = this;
var _24600__$1 = this;return (new dommy.core.t24598(self__.v,self__.k,self__.vec__24597,self__.p__24596,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta24599__$1));
});
dommy.core.__GT_t24598 = (function __GT_t24598(v__$1,k__$1,vec__24597__$1,p__24596__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24599){return (new dommy.core.t24598(v__$1,k__$1,vec__24597__$1,p__24596__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24599));
});
}
return (new dommy.core.t24598(v,k,vec__24597,p__24596,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__24601_SHARP_){return p1__24601_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__24602_SHARP_){return !((p1__24602_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24603){var vec__24604 = p__24603;var special_mouse_event = cljs.core.nth.call(null,vec__24604,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__24604,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7862__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7850__auto__ = related_target;if(cljs.core.truth_(and__7850__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7850__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7850__auto__ = selected_target;if(cljs.core.truth_(and__7850__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__7850__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__7862__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__24605){
var elem = cljs.core.first(arglist__24605);
arglist__24605 = cljs.core.next(arglist__24605);
var f = cljs.core.first(arglist__24605);
var args = cljs.core.rest(arglist__24605);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__24606_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__24606_SHARP_));
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
var vec__24630_24653 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24654 = cljs.core.nth.call(null,vec__24630_24653,0,null);var selector_24655 = cljs.core.nth.call(null,vec__24630_24653,1,null);var seq__24631_24656 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24638_24657 = null;var count__24639_24658 = 0;var i__24640_24659 = 0;while(true){
if((i__24640_24659 < count__24639_24658))
{var vec__24647_24660 = cljs.core._nth.call(null,chunk__24638_24657,i__24640_24659);var orig_type_24661 = cljs.core.nth.call(null,vec__24647_24660,0,null);var f_24662 = cljs.core.nth.call(null,vec__24647_24660,1,null);var seq__24641_24663 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24661,new cljs.core.PersistentArrayMap.fromArray([orig_type_24661,cljs.core.identity], true, false)));var chunk__24643_24664 = null;var count__24644_24665 = 0;var i__24645_24666 = 0;while(true){
if((i__24645_24666 < count__24644_24665))
{var vec__24648_24667 = cljs.core._nth.call(null,chunk__24643_24664,i__24645_24666);var actual_type_24668 = cljs.core.nth.call(null,vec__24648_24667,0,null);var factory_24669 = cljs.core.nth.call(null,vec__24648_24667,1,null);var canonical_f_24670 = (cljs.core.truth_(selector_24655)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24654,selector_24655):cljs.core.identity).call(null,factory_24669.call(null,f_24662));dommy.core.update_event_listeners_BANG_.call(null,elem_24654,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24655,actual_type_24668,f_24662], null),canonical_f_24670);
if(cljs.core.truth_(elem_24654.addEventListener))
{elem_24654.addEventListener(cljs.core.name.call(null,actual_type_24668),canonical_f_24670);
} else
{elem_24654.attachEvent(cljs.core.name.call(null,actual_type_24668),canonical_f_24670);
}
{
var G__24671 = seq__24641_24663;
var G__24672 = chunk__24643_24664;
var G__24673 = count__24644_24665;
var G__24674 = (i__24645_24666 + 1);
seq__24641_24663 = G__24671;
chunk__24643_24664 = G__24672;
count__24644_24665 = G__24673;
i__24645_24666 = G__24674;
continue;
}
} else
{var temp__4092__auto___24675 = cljs.core.seq.call(null,seq__24641_24663);if(temp__4092__auto___24675)
{var seq__24641_24676__$1 = temp__4092__auto___24675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24641_24676__$1))
{var c__8604__auto___24677 = cljs.core.chunk_first.call(null,seq__24641_24676__$1);{
var G__24678 = cljs.core.chunk_rest.call(null,seq__24641_24676__$1);
var G__24679 = c__8604__auto___24677;
var G__24680 = cljs.core.count.call(null,c__8604__auto___24677);
var G__24681 = 0;
seq__24641_24663 = G__24678;
chunk__24643_24664 = G__24679;
count__24644_24665 = G__24680;
i__24645_24666 = G__24681;
continue;
}
} else
{var vec__24649_24682 = cljs.core.first.call(null,seq__24641_24676__$1);var actual_type_24683 = cljs.core.nth.call(null,vec__24649_24682,0,null);var factory_24684 = cljs.core.nth.call(null,vec__24649_24682,1,null);var canonical_f_24685 = (cljs.core.truth_(selector_24655)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24654,selector_24655):cljs.core.identity).call(null,factory_24684.call(null,f_24662));dommy.core.update_event_listeners_BANG_.call(null,elem_24654,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24655,actual_type_24683,f_24662], null),canonical_f_24685);
if(cljs.core.truth_(elem_24654.addEventListener))
{elem_24654.addEventListener(cljs.core.name.call(null,actual_type_24683),canonical_f_24685);
} else
{elem_24654.attachEvent(cljs.core.name.call(null,actual_type_24683),canonical_f_24685);
}
{
var G__24686 = cljs.core.next.call(null,seq__24641_24676__$1);
var G__24687 = null;
var G__24688 = 0;
var G__24689 = 0;
seq__24641_24663 = G__24686;
chunk__24643_24664 = G__24687;
count__24644_24665 = G__24688;
i__24645_24666 = G__24689;
continue;
}
}
} else
{}
}
break;
}
{
var G__24690 = seq__24631_24656;
var G__24691 = chunk__24638_24657;
var G__24692 = count__24639_24658;
var G__24693 = (i__24640_24659 + 1);
seq__24631_24656 = G__24690;
chunk__24638_24657 = G__24691;
count__24639_24658 = G__24692;
i__24640_24659 = G__24693;
continue;
}
} else
{var temp__4092__auto___24694 = cljs.core.seq.call(null,seq__24631_24656);if(temp__4092__auto___24694)
{var seq__24631_24695__$1 = temp__4092__auto___24694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24631_24695__$1))
{var c__8604__auto___24696 = cljs.core.chunk_first.call(null,seq__24631_24695__$1);{
var G__24697 = cljs.core.chunk_rest.call(null,seq__24631_24695__$1);
var G__24698 = c__8604__auto___24696;
var G__24699 = cljs.core.count.call(null,c__8604__auto___24696);
var G__24700 = 0;
seq__24631_24656 = G__24697;
chunk__24638_24657 = G__24698;
count__24639_24658 = G__24699;
i__24640_24659 = G__24700;
continue;
}
} else
{var vec__24650_24701 = cljs.core.first.call(null,seq__24631_24695__$1);var orig_type_24702 = cljs.core.nth.call(null,vec__24650_24701,0,null);var f_24703 = cljs.core.nth.call(null,vec__24650_24701,1,null);var seq__24632_24704 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24702,new cljs.core.PersistentArrayMap.fromArray([orig_type_24702,cljs.core.identity], true, false)));var chunk__24634_24705 = null;var count__24635_24706 = 0;var i__24636_24707 = 0;while(true){
if((i__24636_24707 < count__24635_24706))
{var vec__24651_24708 = cljs.core._nth.call(null,chunk__24634_24705,i__24636_24707);var actual_type_24709 = cljs.core.nth.call(null,vec__24651_24708,0,null);var factory_24710 = cljs.core.nth.call(null,vec__24651_24708,1,null);var canonical_f_24711 = (cljs.core.truth_(selector_24655)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24654,selector_24655):cljs.core.identity).call(null,factory_24710.call(null,f_24703));dommy.core.update_event_listeners_BANG_.call(null,elem_24654,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24655,actual_type_24709,f_24703], null),canonical_f_24711);
if(cljs.core.truth_(elem_24654.addEventListener))
{elem_24654.addEventListener(cljs.core.name.call(null,actual_type_24709),canonical_f_24711);
} else
{elem_24654.attachEvent(cljs.core.name.call(null,actual_type_24709),canonical_f_24711);
}
{
var G__24712 = seq__24632_24704;
var G__24713 = chunk__24634_24705;
var G__24714 = count__24635_24706;
var G__24715 = (i__24636_24707 + 1);
seq__24632_24704 = G__24712;
chunk__24634_24705 = G__24713;
count__24635_24706 = G__24714;
i__24636_24707 = G__24715;
continue;
}
} else
{var temp__4092__auto___24716__$1 = cljs.core.seq.call(null,seq__24632_24704);if(temp__4092__auto___24716__$1)
{var seq__24632_24717__$1 = temp__4092__auto___24716__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24632_24717__$1))
{var c__8604__auto___24718 = cljs.core.chunk_first.call(null,seq__24632_24717__$1);{
var G__24719 = cljs.core.chunk_rest.call(null,seq__24632_24717__$1);
var G__24720 = c__8604__auto___24718;
var G__24721 = cljs.core.count.call(null,c__8604__auto___24718);
var G__24722 = 0;
seq__24632_24704 = G__24719;
chunk__24634_24705 = G__24720;
count__24635_24706 = G__24721;
i__24636_24707 = G__24722;
continue;
}
} else
{var vec__24652_24723 = cljs.core.first.call(null,seq__24632_24717__$1);var actual_type_24724 = cljs.core.nth.call(null,vec__24652_24723,0,null);var factory_24725 = cljs.core.nth.call(null,vec__24652_24723,1,null);var canonical_f_24726 = (cljs.core.truth_(selector_24655)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24654,selector_24655):cljs.core.identity).call(null,factory_24725.call(null,f_24703));dommy.core.update_event_listeners_BANG_.call(null,elem_24654,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24655,actual_type_24724,f_24703], null),canonical_f_24726);
if(cljs.core.truth_(elem_24654.addEventListener))
{elem_24654.addEventListener(cljs.core.name.call(null,actual_type_24724),canonical_f_24726);
} else
{elem_24654.attachEvent(cljs.core.name.call(null,actual_type_24724),canonical_f_24726);
}
{
var G__24727 = cljs.core.next.call(null,seq__24632_24717__$1);
var G__24728 = null;
var G__24729 = 0;
var G__24730 = 0;
seq__24632_24704 = G__24727;
chunk__24634_24705 = G__24728;
count__24635_24706 = G__24729;
i__24636_24707 = G__24730;
continue;
}
}
} else
{}
}
break;
}
{
var G__24731 = cljs.core.next.call(null,seq__24631_24695__$1);
var G__24732 = null;
var G__24733 = 0;
var G__24734 = 0;
seq__24631_24656 = G__24731;
chunk__24638_24657 = G__24732;
count__24639_24658 = G__24733;
i__24640_24659 = G__24734;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__24735){
var elem_sel = cljs.core.first(arglist__24735);
var type_fs = cljs.core.rest(arglist__24735);
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
var vec__24759_24782 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24783 = cljs.core.nth.call(null,vec__24759_24782,0,null);var selector_24784 = cljs.core.nth.call(null,vec__24759_24782,1,null);var seq__24760_24785 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24767_24786 = null;var count__24768_24787 = 0;var i__24769_24788 = 0;while(true){
if((i__24769_24788 < count__24768_24787))
{var vec__24776_24789 = cljs.core._nth.call(null,chunk__24767_24786,i__24769_24788);var orig_type_24790 = cljs.core.nth.call(null,vec__24776_24789,0,null);var f_24791 = cljs.core.nth.call(null,vec__24776_24789,1,null);var seq__24770_24792 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24790,new cljs.core.PersistentArrayMap.fromArray([orig_type_24790,cljs.core.identity], true, false)));var chunk__24772_24793 = null;var count__24773_24794 = 0;var i__24774_24795 = 0;while(true){
if((i__24774_24795 < count__24773_24794))
{var vec__24777_24796 = cljs.core._nth.call(null,chunk__24772_24793,i__24774_24795);var actual_type_24797 = cljs.core.nth.call(null,vec__24777_24796,0,null);var __24798 = cljs.core.nth.call(null,vec__24777_24796,1,null);var keys_24799 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24784,actual_type_24797,f_24791], null);var canonical_f_24800 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24783),keys_24799);dommy.core.update_event_listeners_BANG_.call(null,elem_24783,dommy.utils.dissoc_in,keys_24799);
if(cljs.core.truth_(elem_24783.removeEventListener))
{elem_24783.removeEventListener(cljs.core.name.call(null,actual_type_24797),canonical_f_24800);
} else
{elem_24783.detachEvent(cljs.core.name.call(null,actual_type_24797),canonical_f_24800);
}
{
var G__24801 = seq__24770_24792;
var G__24802 = chunk__24772_24793;
var G__24803 = count__24773_24794;
var G__24804 = (i__24774_24795 + 1);
seq__24770_24792 = G__24801;
chunk__24772_24793 = G__24802;
count__24773_24794 = G__24803;
i__24774_24795 = G__24804;
continue;
}
} else
{var temp__4092__auto___24805 = cljs.core.seq.call(null,seq__24770_24792);if(temp__4092__auto___24805)
{var seq__24770_24806__$1 = temp__4092__auto___24805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24770_24806__$1))
{var c__8604__auto___24807 = cljs.core.chunk_first.call(null,seq__24770_24806__$1);{
var G__24808 = cljs.core.chunk_rest.call(null,seq__24770_24806__$1);
var G__24809 = c__8604__auto___24807;
var G__24810 = cljs.core.count.call(null,c__8604__auto___24807);
var G__24811 = 0;
seq__24770_24792 = G__24808;
chunk__24772_24793 = G__24809;
count__24773_24794 = G__24810;
i__24774_24795 = G__24811;
continue;
}
} else
{var vec__24778_24812 = cljs.core.first.call(null,seq__24770_24806__$1);var actual_type_24813 = cljs.core.nth.call(null,vec__24778_24812,0,null);var __24814 = cljs.core.nth.call(null,vec__24778_24812,1,null);var keys_24815 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24784,actual_type_24813,f_24791], null);var canonical_f_24816 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24783),keys_24815);dommy.core.update_event_listeners_BANG_.call(null,elem_24783,dommy.utils.dissoc_in,keys_24815);
if(cljs.core.truth_(elem_24783.removeEventListener))
{elem_24783.removeEventListener(cljs.core.name.call(null,actual_type_24813),canonical_f_24816);
} else
{elem_24783.detachEvent(cljs.core.name.call(null,actual_type_24813),canonical_f_24816);
}
{
var G__24817 = cljs.core.next.call(null,seq__24770_24806__$1);
var G__24818 = null;
var G__24819 = 0;
var G__24820 = 0;
seq__24770_24792 = G__24817;
chunk__24772_24793 = G__24818;
count__24773_24794 = G__24819;
i__24774_24795 = G__24820;
continue;
}
}
} else
{}
}
break;
}
{
var G__24821 = seq__24760_24785;
var G__24822 = chunk__24767_24786;
var G__24823 = count__24768_24787;
var G__24824 = (i__24769_24788 + 1);
seq__24760_24785 = G__24821;
chunk__24767_24786 = G__24822;
count__24768_24787 = G__24823;
i__24769_24788 = G__24824;
continue;
}
} else
{var temp__4092__auto___24825 = cljs.core.seq.call(null,seq__24760_24785);if(temp__4092__auto___24825)
{var seq__24760_24826__$1 = temp__4092__auto___24825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24760_24826__$1))
{var c__8604__auto___24827 = cljs.core.chunk_first.call(null,seq__24760_24826__$1);{
var G__24828 = cljs.core.chunk_rest.call(null,seq__24760_24826__$1);
var G__24829 = c__8604__auto___24827;
var G__24830 = cljs.core.count.call(null,c__8604__auto___24827);
var G__24831 = 0;
seq__24760_24785 = G__24828;
chunk__24767_24786 = G__24829;
count__24768_24787 = G__24830;
i__24769_24788 = G__24831;
continue;
}
} else
{var vec__24779_24832 = cljs.core.first.call(null,seq__24760_24826__$1);var orig_type_24833 = cljs.core.nth.call(null,vec__24779_24832,0,null);var f_24834 = cljs.core.nth.call(null,vec__24779_24832,1,null);var seq__24761_24835 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24833,new cljs.core.PersistentArrayMap.fromArray([orig_type_24833,cljs.core.identity], true, false)));var chunk__24763_24836 = null;var count__24764_24837 = 0;var i__24765_24838 = 0;while(true){
if((i__24765_24838 < count__24764_24837))
{var vec__24780_24839 = cljs.core._nth.call(null,chunk__24763_24836,i__24765_24838);var actual_type_24840 = cljs.core.nth.call(null,vec__24780_24839,0,null);var __24841 = cljs.core.nth.call(null,vec__24780_24839,1,null);var keys_24842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24784,actual_type_24840,f_24834], null);var canonical_f_24843 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24783),keys_24842);dommy.core.update_event_listeners_BANG_.call(null,elem_24783,dommy.utils.dissoc_in,keys_24842);
if(cljs.core.truth_(elem_24783.removeEventListener))
{elem_24783.removeEventListener(cljs.core.name.call(null,actual_type_24840),canonical_f_24843);
} else
{elem_24783.detachEvent(cljs.core.name.call(null,actual_type_24840),canonical_f_24843);
}
{
var G__24844 = seq__24761_24835;
var G__24845 = chunk__24763_24836;
var G__24846 = count__24764_24837;
var G__24847 = (i__24765_24838 + 1);
seq__24761_24835 = G__24844;
chunk__24763_24836 = G__24845;
count__24764_24837 = G__24846;
i__24765_24838 = G__24847;
continue;
}
} else
{var temp__4092__auto___24848__$1 = cljs.core.seq.call(null,seq__24761_24835);if(temp__4092__auto___24848__$1)
{var seq__24761_24849__$1 = temp__4092__auto___24848__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24761_24849__$1))
{var c__8604__auto___24850 = cljs.core.chunk_first.call(null,seq__24761_24849__$1);{
var G__24851 = cljs.core.chunk_rest.call(null,seq__24761_24849__$1);
var G__24852 = c__8604__auto___24850;
var G__24853 = cljs.core.count.call(null,c__8604__auto___24850);
var G__24854 = 0;
seq__24761_24835 = G__24851;
chunk__24763_24836 = G__24852;
count__24764_24837 = G__24853;
i__24765_24838 = G__24854;
continue;
}
} else
{var vec__24781_24855 = cljs.core.first.call(null,seq__24761_24849__$1);var actual_type_24856 = cljs.core.nth.call(null,vec__24781_24855,0,null);var __24857 = cljs.core.nth.call(null,vec__24781_24855,1,null);var keys_24858 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24784,actual_type_24856,f_24834], null);var canonical_f_24859 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24783),keys_24858);dommy.core.update_event_listeners_BANG_.call(null,elem_24783,dommy.utils.dissoc_in,keys_24858);
if(cljs.core.truth_(elem_24783.removeEventListener))
{elem_24783.removeEventListener(cljs.core.name.call(null,actual_type_24856),canonical_f_24859);
} else
{elem_24783.detachEvent(cljs.core.name.call(null,actual_type_24856),canonical_f_24859);
}
{
var G__24860 = cljs.core.next.call(null,seq__24761_24849__$1);
var G__24861 = null;
var G__24862 = 0;
var G__24863 = 0;
seq__24761_24835 = G__24860;
chunk__24763_24836 = G__24861;
count__24764_24837 = G__24862;
i__24765_24838 = G__24863;
continue;
}
}
} else
{}
}
break;
}
{
var G__24864 = cljs.core.next.call(null,seq__24760_24826__$1);
var G__24865 = null;
var G__24866 = 0;
var G__24867 = 0;
seq__24760_24785 = G__24864;
chunk__24767_24786 = G__24865;
count__24768_24787 = G__24866;
i__24769_24788 = G__24867;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__24868){
var elem_sel = cljs.core.first(arglist__24868);
var type_fs = cljs.core.rest(arglist__24868);
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
var vec__24876_24883 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24884 = cljs.core.nth.call(null,vec__24876_24883,0,null);var selector_24885 = cljs.core.nth.call(null,vec__24876_24883,1,null);var seq__24877_24886 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24878_24887 = null;var count__24879_24888 = 0;var i__24880_24889 = 0;while(true){
if((i__24880_24889 < count__24879_24888))
{var vec__24881_24890 = cljs.core._nth.call(null,chunk__24878_24887,i__24880_24889);var type_24891 = cljs.core.nth.call(null,vec__24881_24890,0,null);var f_24892 = cljs.core.nth.call(null,vec__24881_24890,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24891,((function (seq__24877_24886,chunk__24878_24887,count__24879_24888,i__24880_24889,vec__24881_24890,type_24891,f_24892){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24891,this_fn);
return f_24892.call(null,e);
});})(seq__24877_24886,chunk__24878_24887,count__24879_24888,i__24880_24889,vec__24881_24890,type_24891,f_24892))
);
{
var G__24893 = seq__24877_24886;
var G__24894 = chunk__24878_24887;
var G__24895 = count__24879_24888;
var G__24896 = (i__24880_24889 + 1);
seq__24877_24886 = G__24893;
chunk__24878_24887 = G__24894;
count__24879_24888 = G__24895;
i__24880_24889 = G__24896;
continue;
}
} else
{var temp__4092__auto___24897 = cljs.core.seq.call(null,seq__24877_24886);if(temp__4092__auto___24897)
{var seq__24877_24898__$1 = temp__4092__auto___24897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24877_24898__$1))
{var c__8604__auto___24899 = cljs.core.chunk_first.call(null,seq__24877_24898__$1);{
var G__24900 = cljs.core.chunk_rest.call(null,seq__24877_24898__$1);
var G__24901 = c__8604__auto___24899;
var G__24902 = cljs.core.count.call(null,c__8604__auto___24899);
var G__24903 = 0;
seq__24877_24886 = G__24900;
chunk__24878_24887 = G__24901;
count__24879_24888 = G__24902;
i__24880_24889 = G__24903;
continue;
}
} else
{var vec__24882_24904 = cljs.core.first.call(null,seq__24877_24898__$1);var type_24905 = cljs.core.nth.call(null,vec__24882_24904,0,null);var f_24906 = cljs.core.nth.call(null,vec__24882_24904,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24905,((function (seq__24877_24886,chunk__24878_24887,count__24879_24888,i__24880_24889,vec__24882_24904,type_24905,f_24906,seq__24877_24898__$1,temp__4092__auto___24897){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24905,this_fn);
return f_24906.call(null,e);
});})(seq__24877_24886,chunk__24878_24887,count__24879_24888,i__24880_24889,vec__24882_24904,type_24905,f_24906,seq__24877_24898__$1,temp__4092__auto___24897))
);
{
var G__24907 = cljs.core.next.call(null,seq__24877_24898__$1);
var G__24908 = null;
var G__24909 = 0;
var G__24910 = 0;
seq__24877_24886 = G__24907;
chunk__24878_24887 = G__24908;
count__24879_24888 = G__24909;
i__24880_24889 = G__24910;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__24911){
var elem_sel = cljs.core.first(arglist__24911);
var type_fs = cljs.core.rest(arglist__24911);
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
var fire_BANG___delegate = function (node,event_type,p__24912){var vec__24914 = p__24912;var update_event_BANG_ = cljs.core.nth.call(null,vec__24914,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__7862__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
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
var p__24912 = null;if (arguments.length > 2) {
  p__24912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__24912);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__24915){
var node = cljs.core.first(arglist__24915);
arglist__24915 = cljs.core.next(arglist__24915);
var event_type = cljs.core.first(arglist__24915);
var p__24912 = cljs.core.rest(arglist__24915);
return fire_BANG___delegate(node,event_type,p__24912);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
