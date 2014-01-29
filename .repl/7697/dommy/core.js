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
var append_BANG___2 = (function (parent,child){var G__23670 = dommy.template.__GT_node_like.call(null,parent);G__23670.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__23670;
});
var append_BANG___3 = (function() { 
var G__23675__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__23671_23676 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__23672_23677 = null;var count__23673_23678 = 0;var i__23674_23679 = 0;while(true){
if((i__23674_23679 < count__23673_23678))
{var c_23680 = cljs.core._nth.call(null,chunk__23672_23677,i__23674_23679);append_BANG_.call(null,parent__$1,c_23680);
{
var G__23681 = seq__23671_23676;
var G__23682 = chunk__23672_23677;
var G__23683 = count__23673_23678;
var G__23684 = (i__23674_23679 + 1);
seq__23671_23676 = G__23681;
chunk__23672_23677 = G__23682;
count__23673_23678 = G__23683;
i__23674_23679 = G__23684;
continue;
}
} else
{var temp__4092__auto___23685 = cljs.core.seq.call(null,seq__23671_23676);if(temp__4092__auto___23685)
{var seq__23671_23686__$1 = temp__4092__auto___23685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23671_23686__$1))
{var c__8592__auto___23687 = cljs.core.chunk_first.call(null,seq__23671_23686__$1);{
var G__23688 = cljs.core.chunk_rest.call(null,seq__23671_23686__$1);
var G__23689 = c__8592__auto___23687;
var G__23690 = cljs.core.count.call(null,c__8592__auto___23687);
var G__23691 = 0;
seq__23671_23676 = G__23688;
chunk__23672_23677 = G__23689;
count__23673_23678 = G__23690;
i__23674_23679 = G__23691;
continue;
}
} else
{var c_23692 = cljs.core.first.call(null,seq__23671_23686__$1);append_BANG_.call(null,parent__$1,c_23692);
{
var G__23693 = cljs.core.next.call(null,seq__23671_23686__$1);
var G__23694 = null;
var G__23695 = 0;
var G__23696 = 0;
seq__23671_23676 = G__23693;
chunk__23672_23677 = G__23694;
count__23673_23678 = G__23695;
i__23674_23679 = G__23696;
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
var G__23675 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23675__delegate.call(this,parent,child,more_children);};
G__23675.cljs$lang$maxFixedArity = 2;
G__23675.cljs$lang$applyTo = (function (arglist__23697){
var parent = cljs.core.first(arglist__23697);
arglist__23697 = cljs.core.next(arglist__23697);
var child = cljs.core.first(arglist__23697);
var more_children = cljs.core.rest(arglist__23697);
return G__23675__delegate(parent,child,more_children);
});
G__23675.cljs$core$IFn$_invoke$arity$variadic = G__23675__delegate;
return G__23675;
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
var G__23706__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__23702_23707 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__23703_23708 = null;var count__23704_23709 = 0;var i__23705_23710 = 0;while(true){
if((i__23705_23710 < count__23704_23709))
{var c_23711 = cljs.core._nth.call(null,chunk__23703_23708,i__23705_23710);prepend_BANG_.call(null,parent__$1,c_23711);
{
var G__23712 = seq__23702_23707;
var G__23713 = chunk__23703_23708;
var G__23714 = count__23704_23709;
var G__23715 = (i__23705_23710 + 1);
seq__23702_23707 = G__23712;
chunk__23703_23708 = G__23713;
count__23704_23709 = G__23714;
i__23705_23710 = G__23715;
continue;
}
} else
{var temp__4092__auto___23716 = cljs.core.seq.call(null,seq__23702_23707);if(temp__4092__auto___23716)
{var seq__23702_23717__$1 = temp__4092__auto___23716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23702_23717__$1))
{var c__8592__auto___23718 = cljs.core.chunk_first.call(null,seq__23702_23717__$1);{
var G__23719 = cljs.core.chunk_rest.call(null,seq__23702_23717__$1);
var G__23720 = c__8592__auto___23718;
var G__23721 = cljs.core.count.call(null,c__8592__auto___23718);
var G__23722 = 0;
seq__23702_23707 = G__23719;
chunk__23703_23708 = G__23720;
count__23704_23709 = G__23721;
i__23705_23710 = G__23722;
continue;
}
} else
{var c_23723 = cljs.core.first.call(null,seq__23702_23717__$1);prepend_BANG_.call(null,parent__$1,c_23723);
{
var G__23724 = cljs.core.next.call(null,seq__23702_23717__$1);
var G__23725 = null;
var G__23726 = 0;
var G__23727 = 0;
seq__23702_23707 = G__23724;
chunk__23703_23708 = G__23725;
count__23704_23709 = G__23726;
i__23705_23710 = G__23727;
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
var G__23706 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23706__delegate.call(this,parent,child,more_children);};
G__23706.cljs$lang$maxFixedArity = 2;
G__23706.cljs$lang$applyTo = (function (arglist__23728){
var parent = cljs.core.first(arglist__23728);
arglist__23728 = cljs.core.next(arglist__23728);
var child = cljs.core.first(arglist__23728);
var more_children = cljs.core.rest(arglist__23728);
return G__23706__delegate(parent,child,more_children);
});
G__23706.cljs$core$IFn$_invoke$arity$variadic = G__23706__delegate;
return G__23706;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___23729 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___23729))
{var next_23730 = temp__4090__auto___23729;parent.insertBefore(actual_node,next_23730);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__23732 = dommy.template.__GT_node_like.call(null,parent);G__23732.innerHTML = "";
dommy.core.append_BANG_.call(null,G__23732,node_like);
return G__23732;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__23734 = elem__$1.parentNode;G__23734.removeChild(elem__$1);
return G__23734;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23740){var vec__23741 = p__23740;var k = cljs.core.nth.call(null,vec__23741,0,null);var v = cljs.core.nth.call(null,vec__23741,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t23742 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t23742 = (function (v,k,vec__23741,p__23740,container,key_selectors_map,template,selector_map,meta23743){
this.v = v;
this.k = k;
this.vec__23741 = vec__23741;
this.p__23740 = p__23740;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta23743 = meta23743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t23742.cljs$lang$type = true;
dommy.core.t23742.cljs$lang$ctorStr = "dommy.core/t23742";
dommy.core.t23742.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"dommy.core/t23742");
});
dommy.core.t23742.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t23742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23744){var self__ = this;
var _23744__$1 = this;return self__.meta23743;
});
dommy.core.t23742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23744,meta23743__$1){var self__ = this;
var _23744__$1 = this;return (new dommy.core.t23742(self__.v,self__.k,self__.vec__23741,self__.p__23740,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta23743__$1));
});
dommy.core.__GT_t23742 = (function __GT_t23742(v__$1,k__$1,vec__23741__$1,p__23740__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta23743){return (new dommy.core.t23742(v__$1,k__$1,vec__23741__$1,p__23740__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta23743));
});
}
return (new dommy.core.t23742(v,k,vec__23741,p__23740,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__23745_SHARP_){return p1__23745_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__23746_SHARP_){return !((p1__23746_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23747){var vec__23748 = p__23747;var special_mouse_event = cljs.core.nth.call(null,vec__23748,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__23748,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7850__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7850__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__23749){
var elem = cljs.core.first(arglist__23749);
arglist__23749 = cljs.core.next(arglist__23749);
var f = cljs.core.first(arglist__23749);
var args = cljs.core.rest(arglist__23749);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__23750_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__23750_SHARP_));
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
var vec__23774_23797 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_23798 = cljs.core.nth.call(null,vec__23774_23797,0,null);var selector_23799 = cljs.core.nth.call(null,vec__23774_23797,1,null);var seq__23775_23800 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__23782_23801 = null;var count__23783_23802 = 0;var i__23784_23803 = 0;while(true){
if((i__23784_23803 < count__23783_23802))
{var vec__23791_23804 = cljs.core._nth.call(null,chunk__23782_23801,i__23784_23803);var orig_type_23805 = cljs.core.nth.call(null,vec__23791_23804,0,null);var f_23806 = cljs.core.nth.call(null,vec__23791_23804,1,null);var seq__23785_23807 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23805,new cljs.core.PersistentArrayMap.fromArray([orig_type_23805,cljs.core.identity], true, false)));var chunk__23787_23808 = null;var count__23788_23809 = 0;var i__23789_23810 = 0;while(true){
if((i__23789_23810 < count__23788_23809))
{var vec__23792_23811 = cljs.core._nth.call(null,chunk__23787_23808,i__23789_23810);var actual_type_23812 = cljs.core.nth.call(null,vec__23792_23811,0,null);var factory_23813 = cljs.core.nth.call(null,vec__23792_23811,1,null);var canonical_f_23814 = (cljs.core.truth_(selector_23799)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23798,selector_23799):cljs.core.identity).call(null,factory_23813.call(null,f_23806));dommy.core.update_event_listeners_BANG_.call(null,elem_23798,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23799,actual_type_23812,f_23806], null),canonical_f_23814);
if(cljs.core.truth_(elem_23798.addEventListener))
{elem_23798.addEventListener(cljs.core.name.call(null,actual_type_23812),canonical_f_23814);
} else
{elem_23798.attachEvent(cljs.core.name.call(null,actual_type_23812),canonical_f_23814);
}
{
var G__23815 = seq__23785_23807;
var G__23816 = chunk__23787_23808;
var G__23817 = count__23788_23809;
var G__23818 = (i__23789_23810 + 1);
seq__23785_23807 = G__23815;
chunk__23787_23808 = G__23816;
count__23788_23809 = G__23817;
i__23789_23810 = G__23818;
continue;
}
} else
{var temp__4092__auto___23819 = cljs.core.seq.call(null,seq__23785_23807);if(temp__4092__auto___23819)
{var seq__23785_23820__$1 = temp__4092__auto___23819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23785_23820__$1))
{var c__8592__auto___23821 = cljs.core.chunk_first.call(null,seq__23785_23820__$1);{
var G__23822 = cljs.core.chunk_rest.call(null,seq__23785_23820__$1);
var G__23823 = c__8592__auto___23821;
var G__23824 = cljs.core.count.call(null,c__8592__auto___23821);
var G__23825 = 0;
seq__23785_23807 = G__23822;
chunk__23787_23808 = G__23823;
count__23788_23809 = G__23824;
i__23789_23810 = G__23825;
continue;
}
} else
{var vec__23793_23826 = cljs.core.first.call(null,seq__23785_23820__$1);var actual_type_23827 = cljs.core.nth.call(null,vec__23793_23826,0,null);var factory_23828 = cljs.core.nth.call(null,vec__23793_23826,1,null);var canonical_f_23829 = (cljs.core.truth_(selector_23799)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23798,selector_23799):cljs.core.identity).call(null,factory_23828.call(null,f_23806));dommy.core.update_event_listeners_BANG_.call(null,elem_23798,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23799,actual_type_23827,f_23806], null),canonical_f_23829);
if(cljs.core.truth_(elem_23798.addEventListener))
{elem_23798.addEventListener(cljs.core.name.call(null,actual_type_23827),canonical_f_23829);
} else
{elem_23798.attachEvent(cljs.core.name.call(null,actual_type_23827),canonical_f_23829);
}
{
var G__23830 = cljs.core.next.call(null,seq__23785_23820__$1);
var G__23831 = null;
var G__23832 = 0;
var G__23833 = 0;
seq__23785_23807 = G__23830;
chunk__23787_23808 = G__23831;
count__23788_23809 = G__23832;
i__23789_23810 = G__23833;
continue;
}
}
} else
{}
}
break;
}
{
var G__23834 = seq__23775_23800;
var G__23835 = chunk__23782_23801;
var G__23836 = count__23783_23802;
var G__23837 = (i__23784_23803 + 1);
seq__23775_23800 = G__23834;
chunk__23782_23801 = G__23835;
count__23783_23802 = G__23836;
i__23784_23803 = G__23837;
continue;
}
} else
{var temp__4092__auto___23838 = cljs.core.seq.call(null,seq__23775_23800);if(temp__4092__auto___23838)
{var seq__23775_23839__$1 = temp__4092__auto___23838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23775_23839__$1))
{var c__8592__auto___23840 = cljs.core.chunk_first.call(null,seq__23775_23839__$1);{
var G__23841 = cljs.core.chunk_rest.call(null,seq__23775_23839__$1);
var G__23842 = c__8592__auto___23840;
var G__23843 = cljs.core.count.call(null,c__8592__auto___23840);
var G__23844 = 0;
seq__23775_23800 = G__23841;
chunk__23782_23801 = G__23842;
count__23783_23802 = G__23843;
i__23784_23803 = G__23844;
continue;
}
} else
{var vec__23794_23845 = cljs.core.first.call(null,seq__23775_23839__$1);var orig_type_23846 = cljs.core.nth.call(null,vec__23794_23845,0,null);var f_23847 = cljs.core.nth.call(null,vec__23794_23845,1,null);var seq__23776_23848 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23846,new cljs.core.PersistentArrayMap.fromArray([orig_type_23846,cljs.core.identity], true, false)));var chunk__23778_23849 = null;var count__23779_23850 = 0;var i__23780_23851 = 0;while(true){
if((i__23780_23851 < count__23779_23850))
{var vec__23795_23852 = cljs.core._nth.call(null,chunk__23778_23849,i__23780_23851);var actual_type_23853 = cljs.core.nth.call(null,vec__23795_23852,0,null);var factory_23854 = cljs.core.nth.call(null,vec__23795_23852,1,null);var canonical_f_23855 = (cljs.core.truth_(selector_23799)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23798,selector_23799):cljs.core.identity).call(null,factory_23854.call(null,f_23847));dommy.core.update_event_listeners_BANG_.call(null,elem_23798,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23799,actual_type_23853,f_23847], null),canonical_f_23855);
if(cljs.core.truth_(elem_23798.addEventListener))
{elem_23798.addEventListener(cljs.core.name.call(null,actual_type_23853),canonical_f_23855);
} else
{elem_23798.attachEvent(cljs.core.name.call(null,actual_type_23853),canonical_f_23855);
}
{
var G__23856 = seq__23776_23848;
var G__23857 = chunk__23778_23849;
var G__23858 = count__23779_23850;
var G__23859 = (i__23780_23851 + 1);
seq__23776_23848 = G__23856;
chunk__23778_23849 = G__23857;
count__23779_23850 = G__23858;
i__23780_23851 = G__23859;
continue;
}
} else
{var temp__4092__auto___23860__$1 = cljs.core.seq.call(null,seq__23776_23848);if(temp__4092__auto___23860__$1)
{var seq__23776_23861__$1 = temp__4092__auto___23860__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23776_23861__$1))
{var c__8592__auto___23862 = cljs.core.chunk_first.call(null,seq__23776_23861__$1);{
var G__23863 = cljs.core.chunk_rest.call(null,seq__23776_23861__$1);
var G__23864 = c__8592__auto___23862;
var G__23865 = cljs.core.count.call(null,c__8592__auto___23862);
var G__23866 = 0;
seq__23776_23848 = G__23863;
chunk__23778_23849 = G__23864;
count__23779_23850 = G__23865;
i__23780_23851 = G__23866;
continue;
}
} else
{var vec__23796_23867 = cljs.core.first.call(null,seq__23776_23861__$1);var actual_type_23868 = cljs.core.nth.call(null,vec__23796_23867,0,null);var factory_23869 = cljs.core.nth.call(null,vec__23796_23867,1,null);var canonical_f_23870 = (cljs.core.truth_(selector_23799)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23798,selector_23799):cljs.core.identity).call(null,factory_23869.call(null,f_23847));dommy.core.update_event_listeners_BANG_.call(null,elem_23798,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23799,actual_type_23868,f_23847], null),canonical_f_23870);
if(cljs.core.truth_(elem_23798.addEventListener))
{elem_23798.addEventListener(cljs.core.name.call(null,actual_type_23868),canonical_f_23870);
} else
{elem_23798.attachEvent(cljs.core.name.call(null,actual_type_23868),canonical_f_23870);
}
{
var G__23871 = cljs.core.next.call(null,seq__23776_23861__$1);
var G__23872 = null;
var G__23873 = 0;
var G__23874 = 0;
seq__23776_23848 = G__23871;
chunk__23778_23849 = G__23872;
count__23779_23850 = G__23873;
i__23780_23851 = G__23874;
continue;
}
}
} else
{}
}
break;
}
{
var G__23875 = cljs.core.next.call(null,seq__23775_23839__$1);
var G__23876 = null;
var G__23877 = 0;
var G__23878 = 0;
seq__23775_23800 = G__23875;
chunk__23782_23801 = G__23876;
count__23783_23802 = G__23877;
i__23784_23803 = G__23878;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__23879){
var elem_sel = cljs.core.first(arglist__23879);
var type_fs = cljs.core.rest(arglist__23879);
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
var vec__23903_23926 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_23927 = cljs.core.nth.call(null,vec__23903_23926,0,null);var selector_23928 = cljs.core.nth.call(null,vec__23903_23926,1,null);var seq__23904_23929 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__23911_23930 = null;var count__23912_23931 = 0;var i__23913_23932 = 0;while(true){
if((i__23913_23932 < count__23912_23931))
{var vec__23920_23933 = cljs.core._nth.call(null,chunk__23911_23930,i__23913_23932);var orig_type_23934 = cljs.core.nth.call(null,vec__23920_23933,0,null);var f_23935 = cljs.core.nth.call(null,vec__23920_23933,1,null);var seq__23914_23936 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23934,new cljs.core.PersistentArrayMap.fromArray([orig_type_23934,cljs.core.identity], true, false)));var chunk__23916_23937 = null;var count__23917_23938 = 0;var i__23918_23939 = 0;while(true){
if((i__23918_23939 < count__23917_23938))
{var vec__23921_23940 = cljs.core._nth.call(null,chunk__23916_23937,i__23918_23939);var actual_type_23941 = cljs.core.nth.call(null,vec__23921_23940,0,null);var __23942 = cljs.core.nth.call(null,vec__23921_23940,1,null);var keys_23943 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23928,actual_type_23941,f_23935], null);var canonical_f_23944 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23927),keys_23943);dommy.core.update_event_listeners_BANG_.call(null,elem_23927,dommy.utils.dissoc_in,keys_23943);
if(cljs.core.truth_(elem_23927.removeEventListener))
{elem_23927.removeEventListener(cljs.core.name.call(null,actual_type_23941),canonical_f_23944);
} else
{elem_23927.detachEvent(cljs.core.name.call(null,actual_type_23941),canonical_f_23944);
}
{
var G__23945 = seq__23914_23936;
var G__23946 = chunk__23916_23937;
var G__23947 = count__23917_23938;
var G__23948 = (i__23918_23939 + 1);
seq__23914_23936 = G__23945;
chunk__23916_23937 = G__23946;
count__23917_23938 = G__23947;
i__23918_23939 = G__23948;
continue;
}
} else
{var temp__4092__auto___23949 = cljs.core.seq.call(null,seq__23914_23936);if(temp__4092__auto___23949)
{var seq__23914_23950__$1 = temp__4092__auto___23949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23914_23950__$1))
{var c__8592__auto___23951 = cljs.core.chunk_first.call(null,seq__23914_23950__$1);{
var G__23952 = cljs.core.chunk_rest.call(null,seq__23914_23950__$1);
var G__23953 = c__8592__auto___23951;
var G__23954 = cljs.core.count.call(null,c__8592__auto___23951);
var G__23955 = 0;
seq__23914_23936 = G__23952;
chunk__23916_23937 = G__23953;
count__23917_23938 = G__23954;
i__23918_23939 = G__23955;
continue;
}
} else
{var vec__23922_23956 = cljs.core.first.call(null,seq__23914_23950__$1);var actual_type_23957 = cljs.core.nth.call(null,vec__23922_23956,0,null);var __23958 = cljs.core.nth.call(null,vec__23922_23956,1,null);var keys_23959 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23928,actual_type_23957,f_23935], null);var canonical_f_23960 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23927),keys_23959);dommy.core.update_event_listeners_BANG_.call(null,elem_23927,dommy.utils.dissoc_in,keys_23959);
if(cljs.core.truth_(elem_23927.removeEventListener))
{elem_23927.removeEventListener(cljs.core.name.call(null,actual_type_23957),canonical_f_23960);
} else
{elem_23927.detachEvent(cljs.core.name.call(null,actual_type_23957),canonical_f_23960);
}
{
var G__23961 = cljs.core.next.call(null,seq__23914_23950__$1);
var G__23962 = null;
var G__23963 = 0;
var G__23964 = 0;
seq__23914_23936 = G__23961;
chunk__23916_23937 = G__23962;
count__23917_23938 = G__23963;
i__23918_23939 = G__23964;
continue;
}
}
} else
{}
}
break;
}
{
var G__23965 = seq__23904_23929;
var G__23966 = chunk__23911_23930;
var G__23967 = count__23912_23931;
var G__23968 = (i__23913_23932 + 1);
seq__23904_23929 = G__23965;
chunk__23911_23930 = G__23966;
count__23912_23931 = G__23967;
i__23913_23932 = G__23968;
continue;
}
} else
{var temp__4092__auto___23969 = cljs.core.seq.call(null,seq__23904_23929);if(temp__4092__auto___23969)
{var seq__23904_23970__$1 = temp__4092__auto___23969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23904_23970__$1))
{var c__8592__auto___23971 = cljs.core.chunk_first.call(null,seq__23904_23970__$1);{
var G__23972 = cljs.core.chunk_rest.call(null,seq__23904_23970__$1);
var G__23973 = c__8592__auto___23971;
var G__23974 = cljs.core.count.call(null,c__8592__auto___23971);
var G__23975 = 0;
seq__23904_23929 = G__23972;
chunk__23911_23930 = G__23973;
count__23912_23931 = G__23974;
i__23913_23932 = G__23975;
continue;
}
} else
{var vec__23923_23976 = cljs.core.first.call(null,seq__23904_23970__$1);var orig_type_23977 = cljs.core.nth.call(null,vec__23923_23976,0,null);var f_23978 = cljs.core.nth.call(null,vec__23923_23976,1,null);var seq__23905_23979 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23977,new cljs.core.PersistentArrayMap.fromArray([orig_type_23977,cljs.core.identity], true, false)));var chunk__23907_23980 = null;var count__23908_23981 = 0;var i__23909_23982 = 0;while(true){
if((i__23909_23982 < count__23908_23981))
{var vec__23924_23983 = cljs.core._nth.call(null,chunk__23907_23980,i__23909_23982);var actual_type_23984 = cljs.core.nth.call(null,vec__23924_23983,0,null);var __23985 = cljs.core.nth.call(null,vec__23924_23983,1,null);var keys_23986 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23928,actual_type_23984,f_23978], null);var canonical_f_23987 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23927),keys_23986);dommy.core.update_event_listeners_BANG_.call(null,elem_23927,dommy.utils.dissoc_in,keys_23986);
if(cljs.core.truth_(elem_23927.removeEventListener))
{elem_23927.removeEventListener(cljs.core.name.call(null,actual_type_23984),canonical_f_23987);
} else
{elem_23927.detachEvent(cljs.core.name.call(null,actual_type_23984),canonical_f_23987);
}
{
var G__23988 = seq__23905_23979;
var G__23989 = chunk__23907_23980;
var G__23990 = count__23908_23981;
var G__23991 = (i__23909_23982 + 1);
seq__23905_23979 = G__23988;
chunk__23907_23980 = G__23989;
count__23908_23981 = G__23990;
i__23909_23982 = G__23991;
continue;
}
} else
{var temp__4092__auto___23992__$1 = cljs.core.seq.call(null,seq__23905_23979);if(temp__4092__auto___23992__$1)
{var seq__23905_23993__$1 = temp__4092__auto___23992__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23905_23993__$1))
{var c__8592__auto___23994 = cljs.core.chunk_first.call(null,seq__23905_23993__$1);{
var G__23995 = cljs.core.chunk_rest.call(null,seq__23905_23993__$1);
var G__23996 = c__8592__auto___23994;
var G__23997 = cljs.core.count.call(null,c__8592__auto___23994);
var G__23998 = 0;
seq__23905_23979 = G__23995;
chunk__23907_23980 = G__23996;
count__23908_23981 = G__23997;
i__23909_23982 = G__23998;
continue;
}
} else
{var vec__23925_23999 = cljs.core.first.call(null,seq__23905_23993__$1);var actual_type_24000 = cljs.core.nth.call(null,vec__23925_23999,0,null);var __24001 = cljs.core.nth.call(null,vec__23925_23999,1,null);var keys_24002 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23928,actual_type_24000,f_23978], null);var canonical_f_24003 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23927),keys_24002);dommy.core.update_event_listeners_BANG_.call(null,elem_23927,dommy.utils.dissoc_in,keys_24002);
if(cljs.core.truth_(elem_23927.removeEventListener))
{elem_23927.removeEventListener(cljs.core.name.call(null,actual_type_24000),canonical_f_24003);
} else
{elem_23927.detachEvent(cljs.core.name.call(null,actual_type_24000),canonical_f_24003);
}
{
var G__24004 = cljs.core.next.call(null,seq__23905_23993__$1);
var G__24005 = null;
var G__24006 = 0;
var G__24007 = 0;
seq__23905_23979 = G__24004;
chunk__23907_23980 = G__24005;
count__23908_23981 = G__24006;
i__23909_23982 = G__24007;
continue;
}
}
} else
{}
}
break;
}
{
var G__24008 = cljs.core.next.call(null,seq__23904_23970__$1);
var G__24009 = null;
var G__24010 = 0;
var G__24011 = 0;
seq__23904_23929 = G__24008;
chunk__23911_23930 = G__24009;
count__23912_23931 = G__24010;
i__23913_23932 = G__24011;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__24012){
var elem_sel = cljs.core.first(arglist__24012);
var type_fs = cljs.core.rest(arglist__24012);
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
var vec__24020_24027 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24028 = cljs.core.nth.call(null,vec__24020_24027,0,null);var selector_24029 = cljs.core.nth.call(null,vec__24020_24027,1,null);var seq__24021_24030 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24022_24031 = null;var count__24023_24032 = 0;var i__24024_24033 = 0;while(true){
if((i__24024_24033 < count__24023_24032))
{var vec__24025_24034 = cljs.core._nth.call(null,chunk__24022_24031,i__24024_24033);var type_24035 = cljs.core.nth.call(null,vec__24025_24034,0,null);var f_24036 = cljs.core.nth.call(null,vec__24025_24034,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24035,((function (seq__24021_24030,chunk__24022_24031,count__24023_24032,i__24024_24033,vec__24025_24034,type_24035,f_24036){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24035,this_fn);
return f_24036.call(null,e);
});})(seq__24021_24030,chunk__24022_24031,count__24023_24032,i__24024_24033,vec__24025_24034,type_24035,f_24036))
);
{
var G__24037 = seq__24021_24030;
var G__24038 = chunk__24022_24031;
var G__24039 = count__24023_24032;
var G__24040 = (i__24024_24033 + 1);
seq__24021_24030 = G__24037;
chunk__24022_24031 = G__24038;
count__24023_24032 = G__24039;
i__24024_24033 = G__24040;
continue;
}
} else
{var temp__4092__auto___24041 = cljs.core.seq.call(null,seq__24021_24030);if(temp__4092__auto___24041)
{var seq__24021_24042__$1 = temp__4092__auto___24041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24021_24042__$1))
{var c__8592__auto___24043 = cljs.core.chunk_first.call(null,seq__24021_24042__$1);{
var G__24044 = cljs.core.chunk_rest.call(null,seq__24021_24042__$1);
var G__24045 = c__8592__auto___24043;
var G__24046 = cljs.core.count.call(null,c__8592__auto___24043);
var G__24047 = 0;
seq__24021_24030 = G__24044;
chunk__24022_24031 = G__24045;
count__24023_24032 = G__24046;
i__24024_24033 = G__24047;
continue;
}
} else
{var vec__24026_24048 = cljs.core.first.call(null,seq__24021_24042__$1);var type_24049 = cljs.core.nth.call(null,vec__24026_24048,0,null);var f_24050 = cljs.core.nth.call(null,vec__24026_24048,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24049,((function (seq__24021_24030,chunk__24022_24031,count__24023_24032,i__24024_24033,vec__24026_24048,type_24049,f_24050,seq__24021_24042__$1,temp__4092__auto___24041){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24049,this_fn);
return f_24050.call(null,e);
});})(seq__24021_24030,chunk__24022_24031,count__24023_24032,i__24024_24033,vec__24026_24048,type_24049,f_24050,seq__24021_24042__$1,temp__4092__auto___24041))
);
{
var G__24051 = cljs.core.next.call(null,seq__24021_24042__$1);
var G__24052 = null;
var G__24053 = 0;
var G__24054 = 0;
seq__24021_24030 = G__24051;
chunk__24022_24031 = G__24052;
count__24023_24032 = G__24053;
i__24024_24033 = G__24054;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__24055){
var elem_sel = cljs.core.first(arglist__24055);
var type_fs = cljs.core.rest(arglist__24055);
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
var fire_BANG___delegate = function (node,event_type,p__24056){var vec__24058 = p__24056;var update_event_BANG_ = cljs.core.nth.call(null,vec__24058,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__24056 = null;if (arguments.length > 2) {
  p__24056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__24056);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__24059){
var node = cljs.core.first(arglist__24059);
arglist__24059 = cljs.core.next(arglist__24059);
var event_type = cljs.core.first(arglist__24059);
var p__24056 = cljs.core.rest(arglist__24059);
return fire_BANG___delegate(node,event_type,p__24056);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
