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
var append_BANG___2 = (function (parent,child){var G__37498 = dommy.template.__GT_node_like.call(null,parent);G__37498.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__37498;
});
var append_BANG___3 = (function() { 
var G__37503__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__37499_37504 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__37500_37505 = null;var count__37501_37506 = 0;var i__37502_37507 = 0;while(true){
if((i__37502_37507 < count__37501_37506))
{var c_37508 = cljs.core._nth.call(null,chunk__37500_37505,i__37502_37507);append_BANG_.call(null,parent__$1,c_37508);
{
var G__37509 = seq__37499_37504;
var G__37510 = chunk__37500_37505;
var G__37511 = count__37501_37506;
var G__37512 = (i__37502_37507 + 1);
seq__37499_37504 = G__37509;
chunk__37500_37505 = G__37510;
count__37501_37506 = G__37511;
i__37502_37507 = G__37512;
continue;
}
} else
{var temp__4092__auto___37513 = cljs.core.seq.call(null,seq__37499_37504);if(temp__4092__auto___37513)
{var seq__37499_37514__$1 = temp__4092__auto___37513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37499_37514__$1))
{var c__8604__auto___37515 = cljs.core.chunk_first.call(null,seq__37499_37514__$1);{
var G__37516 = cljs.core.chunk_rest.call(null,seq__37499_37514__$1);
var G__37517 = c__8604__auto___37515;
var G__37518 = cljs.core.count.call(null,c__8604__auto___37515);
var G__37519 = 0;
seq__37499_37504 = G__37516;
chunk__37500_37505 = G__37517;
count__37501_37506 = G__37518;
i__37502_37507 = G__37519;
continue;
}
} else
{var c_37520 = cljs.core.first.call(null,seq__37499_37514__$1);append_BANG_.call(null,parent__$1,c_37520);
{
var G__37521 = cljs.core.next.call(null,seq__37499_37514__$1);
var G__37522 = null;
var G__37523 = 0;
var G__37524 = 0;
seq__37499_37504 = G__37521;
chunk__37500_37505 = G__37522;
count__37501_37506 = G__37523;
i__37502_37507 = G__37524;
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
var G__37503 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37503__delegate.call(this,parent,child,more_children);};
G__37503.cljs$lang$maxFixedArity = 2;
G__37503.cljs$lang$applyTo = (function (arglist__37525){
var parent = cljs.core.first(arglist__37525);
arglist__37525 = cljs.core.next(arglist__37525);
var child = cljs.core.first(arglist__37525);
var more_children = cljs.core.rest(arglist__37525);
return G__37503__delegate(parent,child,more_children);
});
G__37503.cljs$core$IFn$_invoke$arity$variadic = G__37503__delegate;
return G__37503;
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
var G__37534__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__37530_37535 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__37531_37536 = null;var count__37532_37537 = 0;var i__37533_37538 = 0;while(true){
if((i__37533_37538 < count__37532_37537))
{var c_37539 = cljs.core._nth.call(null,chunk__37531_37536,i__37533_37538);prepend_BANG_.call(null,parent__$1,c_37539);
{
var G__37540 = seq__37530_37535;
var G__37541 = chunk__37531_37536;
var G__37542 = count__37532_37537;
var G__37543 = (i__37533_37538 + 1);
seq__37530_37535 = G__37540;
chunk__37531_37536 = G__37541;
count__37532_37537 = G__37542;
i__37533_37538 = G__37543;
continue;
}
} else
{var temp__4092__auto___37544 = cljs.core.seq.call(null,seq__37530_37535);if(temp__4092__auto___37544)
{var seq__37530_37545__$1 = temp__4092__auto___37544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37530_37545__$1))
{var c__8604__auto___37546 = cljs.core.chunk_first.call(null,seq__37530_37545__$1);{
var G__37547 = cljs.core.chunk_rest.call(null,seq__37530_37545__$1);
var G__37548 = c__8604__auto___37546;
var G__37549 = cljs.core.count.call(null,c__8604__auto___37546);
var G__37550 = 0;
seq__37530_37535 = G__37547;
chunk__37531_37536 = G__37548;
count__37532_37537 = G__37549;
i__37533_37538 = G__37550;
continue;
}
} else
{var c_37551 = cljs.core.first.call(null,seq__37530_37545__$1);prepend_BANG_.call(null,parent__$1,c_37551);
{
var G__37552 = cljs.core.next.call(null,seq__37530_37545__$1);
var G__37553 = null;
var G__37554 = 0;
var G__37555 = 0;
seq__37530_37535 = G__37552;
chunk__37531_37536 = G__37553;
count__37532_37537 = G__37554;
i__37533_37538 = G__37555;
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
var G__37534 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37534__delegate.call(this,parent,child,more_children);};
G__37534.cljs$lang$maxFixedArity = 2;
G__37534.cljs$lang$applyTo = (function (arglist__37556){
var parent = cljs.core.first(arglist__37556);
arglist__37556 = cljs.core.next(arglist__37556);
var child = cljs.core.first(arglist__37556);
var more_children = cljs.core.rest(arglist__37556);
return G__37534__delegate(parent,child,more_children);
});
G__37534.cljs$core$IFn$_invoke$arity$variadic = G__37534__delegate;
return G__37534;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___37557 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___37557))
{var next_37558 = temp__4090__auto___37557;parent.insertBefore(actual_node,next_37558);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__37560 = dommy.template.__GT_node_like.call(null,parent);G__37560.innerHTML = "";
dommy.core.append_BANG_.call(null,G__37560,node_like);
return G__37560;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__37562 = elem__$1.parentNode;G__37562.removeChild(elem__$1);
return G__37562;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37568){var vec__37569 = p__37568;var k = cljs.core.nth.call(null,vec__37569,0,null);var v = cljs.core.nth.call(null,vec__37569,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t37570 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t37570 = (function (v,k,vec__37569,p__37568,container,key_selectors_map,template,selector_map,meta37571){
this.v = v;
this.k = k;
this.vec__37569 = vec__37569;
this.p__37568 = p__37568;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta37571 = meta37571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t37570.cljs$lang$type = true;
dommy.core.t37570.cljs$lang$ctorStr = "dommy.core/t37570";
dommy.core.t37570.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"dommy.core/t37570");
});
dommy.core.t37570.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t37570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37572){var self__ = this;
var _37572__$1 = this;return self__.meta37571;
});
dommy.core.t37570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37572,meta37571__$1){var self__ = this;
var _37572__$1 = this;return (new dommy.core.t37570(self__.v,self__.k,self__.vec__37569,self__.p__37568,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta37571__$1));
});
dommy.core.__GT_t37570 = (function __GT_t37570(v__$1,k__$1,vec__37569__$1,p__37568__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta37571){return (new dommy.core.t37570(v__$1,k__$1,vec__37569__$1,p__37568__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta37571));
});
}
return (new dommy.core.t37570(v,k,vec__37569,p__37568,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__37573_SHARP_){return p1__37573_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__37574_SHARP_){return !((p1__37574_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37575){var vec__37576 = p__37575;var special_mouse_event = cljs.core.nth.call(null,vec__37576,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__37576,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7862__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7862__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__37577){
var elem = cljs.core.first(arglist__37577);
arglist__37577 = cljs.core.next(arglist__37577);
var f = cljs.core.first(arglist__37577);
var args = cljs.core.rest(arglist__37577);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__37578_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__37578_SHARP_));
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
var vec__37602_37625 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_37626 = cljs.core.nth.call(null,vec__37602_37625,0,null);var selector_37627 = cljs.core.nth.call(null,vec__37602_37625,1,null);var seq__37603_37628 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__37610_37629 = null;var count__37611_37630 = 0;var i__37612_37631 = 0;while(true){
if((i__37612_37631 < count__37611_37630))
{var vec__37619_37632 = cljs.core._nth.call(null,chunk__37610_37629,i__37612_37631);var orig_type_37633 = cljs.core.nth.call(null,vec__37619_37632,0,null);var f_37634 = cljs.core.nth.call(null,vec__37619_37632,1,null);var seq__37613_37635 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37633,new cljs.core.PersistentArrayMap.fromArray([orig_type_37633,cljs.core.identity], true, false)));var chunk__37615_37636 = null;var count__37616_37637 = 0;var i__37617_37638 = 0;while(true){
if((i__37617_37638 < count__37616_37637))
{var vec__37620_37639 = cljs.core._nth.call(null,chunk__37615_37636,i__37617_37638);var actual_type_37640 = cljs.core.nth.call(null,vec__37620_37639,0,null);var factory_37641 = cljs.core.nth.call(null,vec__37620_37639,1,null);var canonical_f_37642 = (cljs.core.truth_(selector_37627)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37626,selector_37627):cljs.core.identity).call(null,factory_37641.call(null,f_37634));dommy.core.update_event_listeners_BANG_.call(null,elem_37626,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37627,actual_type_37640,f_37634], null),canonical_f_37642);
if(cljs.core.truth_(elem_37626.addEventListener))
{elem_37626.addEventListener(cljs.core.name.call(null,actual_type_37640),canonical_f_37642);
} else
{elem_37626.attachEvent(cljs.core.name.call(null,actual_type_37640),canonical_f_37642);
}
{
var G__37643 = seq__37613_37635;
var G__37644 = chunk__37615_37636;
var G__37645 = count__37616_37637;
var G__37646 = (i__37617_37638 + 1);
seq__37613_37635 = G__37643;
chunk__37615_37636 = G__37644;
count__37616_37637 = G__37645;
i__37617_37638 = G__37646;
continue;
}
} else
{var temp__4092__auto___37647 = cljs.core.seq.call(null,seq__37613_37635);if(temp__4092__auto___37647)
{var seq__37613_37648__$1 = temp__4092__auto___37647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37613_37648__$1))
{var c__8604__auto___37649 = cljs.core.chunk_first.call(null,seq__37613_37648__$1);{
var G__37650 = cljs.core.chunk_rest.call(null,seq__37613_37648__$1);
var G__37651 = c__8604__auto___37649;
var G__37652 = cljs.core.count.call(null,c__8604__auto___37649);
var G__37653 = 0;
seq__37613_37635 = G__37650;
chunk__37615_37636 = G__37651;
count__37616_37637 = G__37652;
i__37617_37638 = G__37653;
continue;
}
} else
{var vec__37621_37654 = cljs.core.first.call(null,seq__37613_37648__$1);var actual_type_37655 = cljs.core.nth.call(null,vec__37621_37654,0,null);var factory_37656 = cljs.core.nth.call(null,vec__37621_37654,1,null);var canonical_f_37657 = (cljs.core.truth_(selector_37627)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37626,selector_37627):cljs.core.identity).call(null,factory_37656.call(null,f_37634));dommy.core.update_event_listeners_BANG_.call(null,elem_37626,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37627,actual_type_37655,f_37634], null),canonical_f_37657);
if(cljs.core.truth_(elem_37626.addEventListener))
{elem_37626.addEventListener(cljs.core.name.call(null,actual_type_37655),canonical_f_37657);
} else
{elem_37626.attachEvent(cljs.core.name.call(null,actual_type_37655),canonical_f_37657);
}
{
var G__37658 = cljs.core.next.call(null,seq__37613_37648__$1);
var G__37659 = null;
var G__37660 = 0;
var G__37661 = 0;
seq__37613_37635 = G__37658;
chunk__37615_37636 = G__37659;
count__37616_37637 = G__37660;
i__37617_37638 = G__37661;
continue;
}
}
} else
{}
}
break;
}
{
var G__37662 = seq__37603_37628;
var G__37663 = chunk__37610_37629;
var G__37664 = count__37611_37630;
var G__37665 = (i__37612_37631 + 1);
seq__37603_37628 = G__37662;
chunk__37610_37629 = G__37663;
count__37611_37630 = G__37664;
i__37612_37631 = G__37665;
continue;
}
} else
{var temp__4092__auto___37666 = cljs.core.seq.call(null,seq__37603_37628);if(temp__4092__auto___37666)
{var seq__37603_37667__$1 = temp__4092__auto___37666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37603_37667__$1))
{var c__8604__auto___37668 = cljs.core.chunk_first.call(null,seq__37603_37667__$1);{
var G__37669 = cljs.core.chunk_rest.call(null,seq__37603_37667__$1);
var G__37670 = c__8604__auto___37668;
var G__37671 = cljs.core.count.call(null,c__8604__auto___37668);
var G__37672 = 0;
seq__37603_37628 = G__37669;
chunk__37610_37629 = G__37670;
count__37611_37630 = G__37671;
i__37612_37631 = G__37672;
continue;
}
} else
{var vec__37622_37673 = cljs.core.first.call(null,seq__37603_37667__$1);var orig_type_37674 = cljs.core.nth.call(null,vec__37622_37673,0,null);var f_37675 = cljs.core.nth.call(null,vec__37622_37673,1,null);var seq__37604_37676 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37674,new cljs.core.PersistentArrayMap.fromArray([orig_type_37674,cljs.core.identity], true, false)));var chunk__37606_37677 = null;var count__37607_37678 = 0;var i__37608_37679 = 0;while(true){
if((i__37608_37679 < count__37607_37678))
{var vec__37623_37680 = cljs.core._nth.call(null,chunk__37606_37677,i__37608_37679);var actual_type_37681 = cljs.core.nth.call(null,vec__37623_37680,0,null);var factory_37682 = cljs.core.nth.call(null,vec__37623_37680,1,null);var canonical_f_37683 = (cljs.core.truth_(selector_37627)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37626,selector_37627):cljs.core.identity).call(null,factory_37682.call(null,f_37675));dommy.core.update_event_listeners_BANG_.call(null,elem_37626,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37627,actual_type_37681,f_37675], null),canonical_f_37683);
if(cljs.core.truth_(elem_37626.addEventListener))
{elem_37626.addEventListener(cljs.core.name.call(null,actual_type_37681),canonical_f_37683);
} else
{elem_37626.attachEvent(cljs.core.name.call(null,actual_type_37681),canonical_f_37683);
}
{
var G__37684 = seq__37604_37676;
var G__37685 = chunk__37606_37677;
var G__37686 = count__37607_37678;
var G__37687 = (i__37608_37679 + 1);
seq__37604_37676 = G__37684;
chunk__37606_37677 = G__37685;
count__37607_37678 = G__37686;
i__37608_37679 = G__37687;
continue;
}
} else
{var temp__4092__auto___37688__$1 = cljs.core.seq.call(null,seq__37604_37676);if(temp__4092__auto___37688__$1)
{var seq__37604_37689__$1 = temp__4092__auto___37688__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37604_37689__$1))
{var c__8604__auto___37690 = cljs.core.chunk_first.call(null,seq__37604_37689__$1);{
var G__37691 = cljs.core.chunk_rest.call(null,seq__37604_37689__$1);
var G__37692 = c__8604__auto___37690;
var G__37693 = cljs.core.count.call(null,c__8604__auto___37690);
var G__37694 = 0;
seq__37604_37676 = G__37691;
chunk__37606_37677 = G__37692;
count__37607_37678 = G__37693;
i__37608_37679 = G__37694;
continue;
}
} else
{var vec__37624_37695 = cljs.core.first.call(null,seq__37604_37689__$1);var actual_type_37696 = cljs.core.nth.call(null,vec__37624_37695,0,null);var factory_37697 = cljs.core.nth.call(null,vec__37624_37695,1,null);var canonical_f_37698 = (cljs.core.truth_(selector_37627)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37626,selector_37627):cljs.core.identity).call(null,factory_37697.call(null,f_37675));dommy.core.update_event_listeners_BANG_.call(null,elem_37626,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37627,actual_type_37696,f_37675], null),canonical_f_37698);
if(cljs.core.truth_(elem_37626.addEventListener))
{elem_37626.addEventListener(cljs.core.name.call(null,actual_type_37696),canonical_f_37698);
} else
{elem_37626.attachEvent(cljs.core.name.call(null,actual_type_37696),canonical_f_37698);
}
{
var G__37699 = cljs.core.next.call(null,seq__37604_37689__$1);
var G__37700 = null;
var G__37701 = 0;
var G__37702 = 0;
seq__37604_37676 = G__37699;
chunk__37606_37677 = G__37700;
count__37607_37678 = G__37701;
i__37608_37679 = G__37702;
continue;
}
}
} else
{}
}
break;
}
{
var G__37703 = cljs.core.next.call(null,seq__37603_37667__$1);
var G__37704 = null;
var G__37705 = 0;
var G__37706 = 0;
seq__37603_37628 = G__37703;
chunk__37610_37629 = G__37704;
count__37611_37630 = G__37705;
i__37612_37631 = G__37706;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__37707){
var elem_sel = cljs.core.first(arglist__37707);
var type_fs = cljs.core.rest(arglist__37707);
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
var vec__37731_37754 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_37755 = cljs.core.nth.call(null,vec__37731_37754,0,null);var selector_37756 = cljs.core.nth.call(null,vec__37731_37754,1,null);var seq__37732_37757 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__37739_37758 = null;var count__37740_37759 = 0;var i__37741_37760 = 0;while(true){
if((i__37741_37760 < count__37740_37759))
{var vec__37748_37761 = cljs.core._nth.call(null,chunk__37739_37758,i__37741_37760);var orig_type_37762 = cljs.core.nth.call(null,vec__37748_37761,0,null);var f_37763 = cljs.core.nth.call(null,vec__37748_37761,1,null);var seq__37742_37764 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37762,new cljs.core.PersistentArrayMap.fromArray([orig_type_37762,cljs.core.identity], true, false)));var chunk__37744_37765 = null;var count__37745_37766 = 0;var i__37746_37767 = 0;while(true){
if((i__37746_37767 < count__37745_37766))
{var vec__37749_37768 = cljs.core._nth.call(null,chunk__37744_37765,i__37746_37767);var actual_type_37769 = cljs.core.nth.call(null,vec__37749_37768,0,null);var __37770 = cljs.core.nth.call(null,vec__37749_37768,1,null);var keys_37771 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37756,actual_type_37769,f_37763], null);var canonical_f_37772 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37755),keys_37771);dommy.core.update_event_listeners_BANG_.call(null,elem_37755,dommy.utils.dissoc_in,keys_37771);
if(cljs.core.truth_(elem_37755.removeEventListener))
{elem_37755.removeEventListener(cljs.core.name.call(null,actual_type_37769),canonical_f_37772);
} else
{elem_37755.detachEvent(cljs.core.name.call(null,actual_type_37769),canonical_f_37772);
}
{
var G__37773 = seq__37742_37764;
var G__37774 = chunk__37744_37765;
var G__37775 = count__37745_37766;
var G__37776 = (i__37746_37767 + 1);
seq__37742_37764 = G__37773;
chunk__37744_37765 = G__37774;
count__37745_37766 = G__37775;
i__37746_37767 = G__37776;
continue;
}
} else
{var temp__4092__auto___37777 = cljs.core.seq.call(null,seq__37742_37764);if(temp__4092__auto___37777)
{var seq__37742_37778__$1 = temp__4092__auto___37777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37742_37778__$1))
{var c__8604__auto___37779 = cljs.core.chunk_first.call(null,seq__37742_37778__$1);{
var G__37780 = cljs.core.chunk_rest.call(null,seq__37742_37778__$1);
var G__37781 = c__8604__auto___37779;
var G__37782 = cljs.core.count.call(null,c__8604__auto___37779);
var G__37783 = 0;
seq__37742_37764 = G__37780;
chunk__37744_37765 = G__37781;
count__37745_37766 = G__37782;
i__37746_37767 = G__37783;
continue;
}
} else
{var vec__37750_37784 = cljs.core.first.call(null,seq__37742_37778__$1);var actual_type_37785 = cljs.core.nth.call(null,vec__37750_37784,0,null);var __37786 = cljs.core.nth.call(null,vec__37750_37784,1,null);var keys_37787 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37756,actual_type_37785,f_37763], null);var canonical_f_37788 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37755),keys_37787);dommy.core.update_event_listeners_BANG_.call(null,elem_37755,dommy.utils.dissoc_in,keys_37787);
if(cljs.core.truth_(elem_37755.removeEventListener))
{elem_37755.removeEventListener(cljs.core.name.call(null,actual_type_37785),canonical_f_37788);
} else
{elem_37755.detachEvent(cljs.core.name.call(null,actual_type_37785),canonical_f_37788);
}
{
var G__37789 = cljs.core.next.call(null,seq__37742_37778__$1);
var G__37790 = null;
var G__37791 = 0;
var G__37792 = 0;
seq__37742_37764 = G__37789;
chunk__37744_37765 = G__37790;
count__37745_37766 = G__37791;
i__37746_37767 = G__37792;
continue;
}
}
} else
{}
}
break;
}
{
var G__37793 = seq__37732_37757;
var G__37794 = chunk__37739_37758;
var G__37795 = count__37740_37759;
var G__37796 = (i__37741_37760 + 1);
seq__37732_37757 = G__37793;
chunk__37739_37758 = G__37794;
count__37740_37759 = G__37795;
i__37741_37760 = G__37796;
continue;
}
} else
{var temp__4092__auto___37797 = cljs.core.seq.call(null,seq__37732_37757);if(temp__4092__auto___37797)
{var seq__37732_37798__$1 = temp__4092__auto___37797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37732_37798__$1))
{var c__8604__auto___37799 = cljs.core.chunk_first.call(null,seq__37732_37798__$1);{
var G__37800 = cljs.core.chunk_rest.call(null,seq__37732_37798__$1);
var G__37801 = c__8604__auto___37799;
var G__37802 = cljs.core.count.call(null,c__8604__auto___37799);
var G__37803 = 0;
seq__37732_37757 = G__37800;
chunk__37739_37758 = G__37801;
count__37740_37759 = G__37802;
i__37741_37760 = G__37803;
continue;
}
} else
{var vec__37751_37804 = cljs.core.first.call(null,seq__37732_37798__$1);var orig_type_37805 = cljs.core.nth.call(null,vec__37751_37804,0,null);var f_37806 = cljs.core.nth.call(null,vec__37751_37804,1,null);var seq__37733_37807 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37805,new cljs.core.PersistentArrayMap.fromArray([orig_type_37805,cljs.core.identity], true, false)));var chunk__37735_37808 = null;var count__37736_37809 = 0;var i__37737_37810 = 0;while(true){
if((i__37737_37810 < count__37736_37809))
{var vec__37752_37811 = cljs.core._nth.call(null,chunk__37735_37808,i__37737_37810);var actual_type_37812 = cljs.core.nth.call(null,vec__37752_37811,0,null);var __37813 = cljs.core.nth.call(null,vec__37752_37811,1,null);var keys_37814 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37756,actual_type_37812,f_37806], null);var canonical_f_37815 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37755),keys_37814);dommy.core.update_event_listeners_BANG_.call(null,elem_37755,dommy.utils.dissoc_in,keys_37814);
if(cljs.core.truth_(elem_37755.removeEventListener))
{elem_37755.removeEventListener(cljs.core.name.call(null,actual_type_37812),canonical_f_37815);
} else
{elem_37755.detachEvent(cljs.core.name.call(null,actual_type_37812),canonical_f_37815);
}
{
var G__37816 = seq__37733_37807;
var G__37817 = chunk__37735_37808;
var G__37818 = count__37736_37809;
var G__37819 = (i__37737_37810 + 1);
seq__37733_37807 = G__37816;
chunk__37735_37808 = G__37817;
count__37736_37809 = G__37818;
i__37737_37810 = G__37819;
continue;
}
} else
{var temp__4092__auto___37820__$1 = cljs.core.seq.call(null,seq__37733_37807);if(temp__4092__auto___37820__$1)
{var seq__37733_37821__$1 = temp__4092__auto___37820__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37733_37821__$1))
{var c__8604__auto___37822 = cljs.core.chunk_first.call(null,seq__37733_37821__$1);{
var G__37823 = cljs.core.chunk_rest.call(null,seq__37733_37821__$1);
var G__37824 = c__8604__auto___37822;
var G__37825 = cljs.core.count.call(null,c__8604__auto___37822);
var G__37826 = 0;
seq__37733_37807 = G__37823;
chunk__37735_37808 = G__37824;
count__37736_37809 = G__37825;
i__37737_37810 = G__37826;
continue;
}
} else
{var vec__37753_37827 = cljs.core.first.call(null,seq__37733_37821__$1);var actual_type_37828 = cljs.core.nth.call(null,vec__37753_37827,0,null);var __37829 = cljs.core.nth.call(null,vec__37753_37827,1,null);var keys_37830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37756,actual_type_37828,f_37806], null);var canonical_f_37831 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37755),keys_37830);dommy.core.update_event_listeners_BANG_.call(null,elem_37755,dommy.utils.dissoc_in,keys_37830);
if(cljs.core.truth_(elem_37755.removeEventListener))
{elem_37755.removeEventListener(cljs.core.name.call(null,actual_type_37828),canonical_f_37831);
} else
{elem_37755.detachEvent(cljs.core.name.call(null,actual_type_37828),canonical_f_37831);
}
{
var G__37832 = cljs.core.next.call(null,seq__37733_37821__$1);
var G__37833 = null;
var G__37834 = 0;
var G__37835 = 0;
seq__37733_37807 = G__37832;
chunk__37735_37808 = G__37833;
count__37736_37809 = G__37834;
i__37737_37810 = G__37835;
continue;
}
}
} else
{}
}
break;
}
{
var G__37836 = cljs.core.next.call(null,seq__37732_37798__$1);
var G__37837 = null;
var G__37838 = 0;
var G__37839 = 0;
seq__37732_37757 = G__37836;
chunk__37739_37758 = G__37837;
count__37740_37759 = G__37838;
i__37741_37760 = G__37839;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__37840){
var elem_sel = cljs.core.first(arglist__37840);
var type_fs = cljs.core.rest(arglist__37840);
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
var vec__37848_37855 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_37856 = cljs.core.nth.call(null,vec__37848_37855,0,null);var selector_37857 = cljs.core.nth.call(null,vec__37848_37855,1,null);var seq__37849_37858 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__37850_37859 = null;var count__37851_37860 = 0;var i__37852_37861 = 0;while(true){
if((i__37852_37861 < count__37851_37860))
{var vec__37853_37862 = cljs.core._nth.call(null,chunk__37850_37859,i__37852_37861);var type_37863 = cljs.core.nth.call(null,vec__37853_37862,0,null);var f_37864 = cljs.core.nth.call(null,vec__37853_37862,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_37863,((function (seq__37849_37858,chunk__37850_37859,count__37851_37860,i__37852_37861,vec__37853_37862,type_37863,f_37864){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_37863,this_fn);
return f_37864.call(null,e);
});})(seq__37849_37858,chunk__37850_37859,count__37851_37860,i__37852_37861,vec__37853_37862,type_37863,f_37864))
);
{
var G__37865 = seq__37849_37858;
var G__37866 = chunk__37850_37859;
var G__37867 = count__37851_37860;
var G__37868 = (i__37852_37861 + 1);
seq__37849_37858 = G__37865;
chunk__37850_37859 = G__37866;
count__37851_37860 = G__37867;
i__37852_37861 = G__37868;
continue;
}
} else
{var temp__4092__auto___37869 = cljs.core.seq.call(null,seq__37849_37858);if(temp__4092__auto___37869)
{var seq__37849_37870__$1 = temp__4092__auto___37869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37849_37870__$1))
{var c__8604__auto___37871 = cljs.core.chunk_first.call(null,seq__37849_37870__$1);{
var G__37872 = cljs.core.chunk_rest.call(null,seq__37849_37870__$1);
var G__37873 = c__8604__auto___37871;
var G__37874 = cljs.core.count.call(null,c__8604__auto___37871);
var G__37875 = 0;
seq__37849_37858 = G__37872;
chunk__37850_37859 = G__37873;
count__37851_37860 = G__37874;
i__37852_37861 = G__37875;
continue;
}
} else
{var vec__37854_37876 = cljs.core.first.call(null,seq__37849_37870__$1);var type_37877 = cljs.core.nth.call(null,vec__37854_37876,0,null);var f_37878 = cljs.core.nth.call(null,vec__37854_37876,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_37877,((function (seq__37849_37858,chunk__37850_37859,count__37851_37860,i__37852_37861,vec__37854_37876,type_37877,f_37878,seq__37849_37870__$1,temp__4092__auto___37869){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_37877,this_fn);
return f_37878.call(null,e);
});})(seq__37849_37858,chunk__37850_37859,count__37851_37860,i__37852_37861,vec__37854_37876,type_37877,f_37878,seq__37849_37870__$1,temp__4092__auto___37869))
);
{
var G__37879 = cljs.core.next.call(null,seq__37849_37870__$1);
var G__37880 = null;
var G__37881 = 0;
var G__37882 = 0;
seq__37849_37858 = G__37879;
chunk__37850_37859 = G__37880;
count__37851_37860 = G__37881;
i__37852_37861 = G__37882;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__37883){
var elem_sel = cljs.core.first(arglist__37883);
var type_fs = cljs.core.rest(arglist__37883);
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
var fire_BANG___delegate = function (node,event_type,p__37884){var vec__37886 = p__37884;var update_event_BANG_ = cljs.core.nth.call(null,vec__37886,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__37884 = null;if (arguments.length > 2) {
  p__37884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__37884);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__37887){
var node = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var event_type = cljs.core.first(arglist__37887);
var p__37884 = cljs.core.rest(arglist__37887);
return fire_BANG___delegate(node,event_type,p__37884);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
