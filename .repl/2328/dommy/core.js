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
var append_BANG___2 = (function (parent,child){var G__30759 = dommy.template.__GT_node_like.call(null,parent);G__30759.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__30759;
});
var append_BANG___3 = (function() { 
var G__30764__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__30760_30765 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__30761_30766 = null;var count__30762_30767 = 0;var i__30763_30768 = 0;while(true){
if((i__30763_30768 < count__30762_30767))
{var c_30769 = cljs.core._nth.call(null,chunk__30761_30766,i__30763_30768);append_BANG_.call(null,parent__$1,c_30769);
{
var G__30770 = seq__30760_30765;
var G__30771 = chunk__30761_30766;
var G__30772 = count__30762_30767;
var G__30773 = (i__30763_30768 + 1);
seq__30760_30765 = G__30770;
chunk__30761_30766 = G__30771;
count__30762_30767 = G__30772;
i__30763_30768 = G__30773;
continue;
}
} else
{var temp__4092__auto___30774 = cljs.core.seq.call(null,seq__30760_30765);if(temp__4092__auto___30774)
{var seq__30760_30775__$1 = temp__4092__auto___30774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30760_30775__$1))
{var c__8592__auto___30776 = cljs.core.chunk_first.call(null,seq__30760_30775__$1);{
var G__30777 = cljs.core.chunk_rest.call(null,seq__30760_30775__$1);
var G__30778 = c__8592__auto___30776;
var G__30779 = cljs.core.count.call(null,c__8592__auto___30776);
var G__30780 = 0;
seq__30760_30765 = G__30777;
chunk__30761_30766 = G__30778;
count__30762_30767 = G__30779;
i__30763_30768 = G__30780;
continue;
}
} else
{var c_30781 = cljs.core.first.call(null,seq__30760_30775__$1);append_BANG_.call(null,parent__$1,c_30781);
{
var G__30782 = cljs.core.next.call(null,seq__30760_30775__$1);
var G__30783 = null;
var G__30784 = 0;
var G__30785 = 0;
seq__30760_30765 = G__30782;
chunk__30761_30766 = G__30783;
count__30762_30767 = G__30784;
i__30763_30768 = G__30785;
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
var G__30764 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__30764__delegate.call(this,parent,child,more_children);};
G__30764.cljs$lang$maxFixedArity = 2;
G__30764.cljs$lang$applyTo = (function (arglist__30786){
var parent = cljs.core.first(arglist__30786);
arglist__30786 = cljs.core.next(arglist__30786);
var child = cljs.core.first(arglist__30786);
var more_children = cljs.core.rest(arglist__30786);
return G__30764__delegate(parent,child,more_children);
});
G__30764.cljs$core$IFn$_invoke$arity$variadic = G__30764__delegate;
return G__30764;
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
var G__30795__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__30791_30796 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__30792_30797 = null;var count__30793_30798 = 0;var i__30794_30799 = 0;while(true){
if((i__30794_30799 < count__30793_30798))
{var c_30800 = cljs.core._nth.call(null,chunk__30792_30797,i__30794_30799);prepend_BANG_.call(null,parent__$1,c_30800);
{
var G__30801 = seq__30791_30796;
var G__30802 = chunk__30792_30797;
var G__30803 = count__30793_30798;
var G__30804 = (i__30794_30799 + 1);
seq__30791_30796 = G__30801;
chunk__30792_30797 = G__30802;
count__30793_30798 = G__30803;
i__30794_30799 = G__30804;
continue;
}
} else
{var temp__4092__auto___30805 = cljs.core.seq.call(null,seq__30791_30796);if(temp__4092__auto___30805)
{var seq__30791_30806__$1 = temp__4092__auto___30805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30791_30806__$1))
{var c__8592__auto___30807 = cljs.core.chunk_first.call(null,seq__30791_30806__$1);{
var G__30808 = cljs.core.chunk_rest.call(null,seq__30791_30806__$1);
var G__30809 = c__8592__auto___30807;
var G__30810 = cljs.core.count.call(null,c__8592__auto___30807);
var G__30811 = 0;
seq__30791_30796 = G__30808;
chunk__30792_30797 = G__30809;
count__30793_30798 = G__30810;
i__30794_30799 = G__30811;
continue;
}
} else
{var c_30812 = cljs.core.first.call(null,seq__30791_30806__$1);prepend_BANG_.call(null,parent__$1,c_30812);
{
var G__30813 = cljs.core.next.call(null,seq__30791_30806__$1);
var G__30814 = null;
var G__30815 = 0;
var G__30816 = 0;
seq__30791_30796 = G__30813;
chunk__30792_30797 = G__30814;
count__30793_30798 = G__30815;
i__30794_30799 = G__30816;
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
var G__30795 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__30795__delegate.call(this,parent,child,more_children);};
G__30795.cljs$lang$maxFixedArity = 2;
G__30795.cljs$lang$applyTo = (function (arglist__30817){
var parent = cljs.core.first(arglist__30817);
arglist__30817 = cljs.core.next(arglist__30817);
var child = cljs.core.first(arglist__30817);
var more_children = cljs.core.rest(arglist__30817);
return G__30795__delegate(parent,child,more_children);
});
G__30795.cljs$core$IFn$_invoke$arity$variadic = G__30795__delegate;
return G__30795;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___30818 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___30818))
{var next_30819 = temp__4090__auto___30818;parent.insertBefore(actual_node,next_30819);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__30821 = dommy.template.__GT_node_like.call(null,parent);G__30821.innerHTML = "";
dommy.core.append_BANG_.call(null,G__30821,node_like);
return G__30821;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__30823 = elem__$1.parentNode;G__30823.removeChild(elem__$1);
return G__30823;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30829){var vec__30830 = p__30829;var k = cljs.core.nth.call(null,vec__30830,0,null);var v = cljs.core.nth.call(null,vec__30830,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t30831 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t30831 = (function (v,k,vec__30830,p__30829,container,key_selectors_map,template,selector_map,meta30832){
this.v = v;
this.k = k;
this.vec__30830 = vec__30830;
this.p__30829 = p__30829;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta30832 = meta30832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t30831.cljs$lang$type = true;
dommy.core.t30831.cljs$lang$ctorStr = "dommy.core/t30831";
dommy.core.t30831.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"dommy.core/t30831");
});
dommy.core.t30831.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t30831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30833){var self__ = this;
var _30833__$1 = this;return self__.meta30832;
});
dommy.core.t30831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30833,meta30832__$1){var self__ = this;
var _30833__$1 = this;return (new dommy.core.t30831(self__.v,self__.k,self__.vec__30830,self__.p__30829,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta30832__$1));
});
dommy.core.__GT_t30831 = (function __GT_t30831(v__$1,k__$1,vec__30830__$1,p__30829__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta30832){return (new dommy.core.t30831(v__$1,k__$1,vec__30830__$1,p__30829__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta30832));
});
}
return (new dommy.core.t30831(v,k,vec__30830,p__30829,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__30834_SHARP_){return p1__30834_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__30835_SHARP_){return !((p1__30835_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30836){var vec__30837 = p__30836;var special_mouse_event = cljs.core.nth.call(null,vec__30837,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__30837,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7850__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7850__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__30838){
var elem = cljs.core.first(arglist__30838);
arglist__30838 = cljs.core.next(arglist__30838);
var f = cljs.core.first(arglist__30838);
var args = cljs.core.rest(arglist__30838);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__30839_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__30839_SHARP_));
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
var vec__30863_30886 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_30887 = cljs.core.nth.call(null,vec__30863_30886,0,null);var selector_30888 = cljs.core.nth.call(null,vec__30863_30886,1,null);var seq__30864_30889 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__30871_30890 = null;var count__30872_30891 = 0;var i__30873_30892 = 0;while(true){
if((i__30873_30892 < count__30872_30891))
{var vec__30880_30893 = cljs.core._nth.call(null,chunk__30871_30890,i__30873_30892);var orig_type_30894 = cljs.core.nth.call(null,vec__30880_30893,0,null);var f_30895 = cljs.core.nth.call(null,vec__30880_30893,1,null);var seq__30874_30896 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30894,new cljs.core.PersistentArrayMap.fromArray([orig_type_30894,cljs.core.identity], true, false)));var chunk__30876_30897 = null;var count__30877_30898 = 0;var i__30878_30899 = 0;while(true){
if((i__30878_30899 < count__30877_30898))
{var vec__30881_30900 = cljs.core._nth.call(null,chunk__30876_30897,i__30878_30899);var actual_type_30901 = cljs.core.nth.call(null,vec__30881_30900,0,null);var factory_30902 = cljs.core.nth.call(null,vec__30881_30900,1,null);var canonical_f_30903 = (cljs.core.truth_(selector_30888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30887,selector_30888):cljs.core.identity).call(null,factory_30902.call(null,f_30895));dommy.core.update_event_listeners_BANG_.call(null,elem_30887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30888,actual_type_30901,f_30895], null),canonical_f_30903);
if(cljs.core.truth_(elem_30887.addEventListener))
{elem_30887.addEventListener(cljs.core.name.call(null,actual_type_30901),canonical_f_30903);
} else
{elem_30887.attachEvent(cljs.core.name.call(null,actual_type_30901),canonical_f_30903);
}
{
var G__30904 = seq__30874_30896;
var G__30905 = chunk__30876_30897;
var G__30906 = count__30877_30898;
var G__30907 = (i__30878_30899 + 1);
seq__30874_30896 = G__30904;
chunk__30876_30897 = G__30905;
count__30877_30898 = G__30906;
i__30878_30899 = G__30907;
continue;
}
} else
{var temp__4092__auto___30908 = cljs.core.seq.call(null,seq__30874_30896);if(temp__4092__auto___30908)
{var seq__30874_30909__$1 = temp__4092__auto___30908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30874_30909__$1))
{var c__8592__auto___30910 = cljs.core.chunk_first.call(null,seq__30874_30909__$1);{
var G__30911 = cljs.core.chunk_rest.call(null,seq__30874_30909__$1);
var G__30912 = c__8592__auto___30910;
var G__30913 = cljs.core.count.call(null,c__8592__auto___30910);
var G__30914 = 0;
seq__30874_30896 = G__30911;
chunk__30876_30897 = G__30912;
count__30877_30898 = G__30913;
i__30878_30899 = G__30914;
continue;
}
} else
{var vec__30882_30915 = cljs.core.first.call(null,seq__30874_30909__$1);var actual_type_30916 = cljs.core.nth.call(null,vec__30882_30915,0,null);var factory_30917 = cljs.core.nth.call(null,vec__30882_30915,1,null);var canonical_f_30918 = (cljs.core.truth_(selector_30888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30887,selector_30888):cljs.core.identity).call(null,factory_30917.call(null,f_30895));dommy.core.update_event_listeners_BANG_.call(null,elem_30887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30888,actual_type_30916,f_30895], null),canonical_f_30918);
if(cljs.core.truth_(elem_30887.addEventListener))
{elem_30887.addEventListener(cljs.core.name.call(null,actual_type_30916),canonical_f_30918);
} else
{elem_30887.attachEvent(cljs.core.name.call(null,actual_type_30916),canonical_f_30918);
}
{
var G__30919 = cljs.core.next.call(null,seq__30874_30909__$1);
var G__30920 = null;
var G__30921 = 0;
var G__30922 = 0;
seq__30874_30896 = G__30919;
chunk__30876_30897 = G__30920;
count__30877_30898 = G__30921;
i__30878_30899 = G__30922;
continue;
}
}
} else
{}
}
break;
}
{
var G__30923 = seq__30864_30889;
var G__30924 = chunk__30871_30890;
var G__30925 = count__30872_30891;
var G__30926 = (i__30873_30892 + 1);
seq__30864_30889 = G__30923;
chunk__30871_30890 = G__30924;
count__30872_30891 = G__30925;
i__30873_30892 = G__30926;
continue;
}
} else
{var temp__4092__auto___30927 = cljs.core.seq.call(null,seq__30864_30889);if(temp__4092__auto___30927)
{var seq__30864_30928__$1 = temp__4092__auto___30927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30864_30928__$1))
{var c__8592__auto___30929 = cljs.core.chunk_first.call(null,seq__30864_30928__$1);{
var G__30930 = cljs.core.chunk_rest.call(null,seq__30864_30928__$1);
var G__30931 = c__8592__auto___30929;
var G__30932 = cljs.core.count.call(null,c__8592__auto___30929);
var G__30933 = 0;
seq__30864_30889 = G__30930;
chunk__30871_30890 = G__30931;
count__30872_30891 = G__30932;
i__30873_30892 = G__30933;
continue;
}
} else
{var vec__30883_30934 = cljs.core.first.call(null,seq__30864_30928__$1);var orig_type_30935 = cljs.core.nth.call(null,vec__30883_30934,0,null);var f_30936 = cljs.core.nth.call(null,vec__30883_30934,1,null);var seq__30865_30937 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30935,new cljs.core.PersistentArrayMap.fromArray([orig_type_30935,cljs.core.identity], true, false)));var chunk__30867_30938 = null;var count__30868_30939 = 0;var i__30869_30940 = 0;while(true){
if((i__30869_30940 < count__30868_30939))
{var vec__30884_30941 = cljs.core._nth.call(null,chunk__30867_30938,i__30869_30940);var actual_type_30942 = cljs.core.nth.call(null,vec__30884_30941,0,null);var factory_30943 = cljs.core.nth.call(null,vec__30884_30941,1,null);var canonical_f_30944 = (cljs.core.truth_(selector_30888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30887,selector_30888):cljs.core.identity).call(null,factory_30943.call(null,f_30936));dommy.core.update_event_listeners_BANG_.call(null,elem_30887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30888,actual_type_30942,f_30936], null),canonical_f_30944);
if(cljs.core.truth_(elem_30887.addEventListener))
{elem_30887.addEventListener(cljs.core.name.call(null,actual_type_30942),canonical_f_30944);
} else
{elem_30887.attachEvent(cljs.core.name.call(null,actual_type_30942),canonical_f_30944);
}
{
var G__30945 = seq__30865_30937;
var G__30946 = chunk__30867_30938;
var G__30947 = count__30868_30939;
var G__30948 = (i__30869_30940 + 1);
seq__30865_30937 = G__30945;
chunk__30867_30938 = G__30946;
count__30868_30939 = G__30947;
i__30869_30940 = G__30948;
continue;
}
} else
{var temp__4092__auto___30949__$1 = cljs.core.seq.call(null,seq__30865_30937);if(temp__4092__auto___30949__$1)
{var seq__30865_30950__$1 = temp__4092__auto___30949__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30865_30950__$1))
{var c__8592__auto___30951 = cljs.core.chunk_first.call(null,seq__30865_30950__$1);{
var G__30952 = cljs.core.chunk_rest.call(null,seq__30865_30950__$1);
var G__30953 = c__8592__auto___30951;
var G__30954 = cljs.core.count.call(null,c__8592__auto___30951);
var G__30955 = 0;
seq__30865_30937 = G__30952;
chunk__30867_30938 = G__30953;
count__30868_30939 = G__30954;
i__30869_30940 = G__30955;
continue;
}
} else
{var vec__30885_30956 = cljs.core.first.call(null,seq__30865_30950__$1);var actual_type_30957 = cljs.core.nth.call(null,vec__30885_30956,0,null);var factory_30958 = cljs.core.nth.call(null,vec__30885_30956,1,null);var canonical_f_30959 = (cljs.core.truth_(selector_30888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30887,selector_30888):cljs.core.identity).call(null,factory_30958.call(null,f_30936));dommy.core.update_event_listeners_BANG_.call(null,elem_30887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30888,actual_type_30957,f_30936], null),canonical_f_30959);
if(cljs.core.truth_(elem_30887.addEventListener))
{elem_30887.addEventListener(cljs.core.name.call(null,actual_type_30957),canonical_f_30959);
} else
{elem_30887.attachEvent(cljs.core.name.call(null,actual_type_30957),canonical_f_30959);
}
{
var G__30960 = cljs.core.next.call(null,seq__30865_30950__$1);
var G__30961 = null;
var G__30962 = 0;
var G__30963 = 0;
seq__30865_30937 = G__30960;
chunk__30867_30938 = G__30961;
count__30868_30939 = G__30962;
i__30869_30940 = G__30963;
continue;
}
}
} else
{}
}
break;
}
{
var G__30964 = cljs.core.next.call(null,seq__30864_30928__$1);
var G__30965 = null;
var G__30966 = 0;
var G__30967 = 0;
seq__30864_30889 = G__30964;
chunk__30871_30890 = G__30965;
count__30872_30891 = G__30966;
i__30873_30892 = G__30967;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__30968){
var elem_sel = cljs.core.first(arglist__30968);
var type_fs = cljs.core.rest(arglist__30968);
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
var vec__30992_31015 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_31016 = cljs.core.nth.call(null,vec__30992_31015,0,null);var selector_31017 = cljs.core.nth.call(null,vec__30992_31015,1,null);var seq__30993_31018 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__31000_31019 = null;var count__31001_31020 = 0;var i__31002_31021 = 0;while(true){
if((i__31002_31021 < count__31001_31020))
{var vec__31009_31022 = cljs.core._nth.call(null,chunk__31000_31019,i__31002_31021);var orig_type_31023 = cljs.core.nth.call(null,vec__31009_31022,0,null);var f_31024 = cljs.core.nth.call(null,vec__31009_31022,1,null);var seq__31003_31025 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31023,new cljs.core.PersistentArrayMap.fromArray([orig_type_31023,cljs.core.identity], true, false)));var chunk__31005_31026 = null;var count__31006_31027 = 0;var i__31007_31028 = 0;while(true){
if((i__31007_31028 < count__31006_31027))
{var vec__31010_31029 = cljs.core._nth.call(null,chunk__31005_31026,i__31007_31028);var actual_type_31030 = cljs.core.nth.call(null,vec__31010_31029,0,null);var __31031 = cljs.core.nth.call(null,vec__31010_31029,1,null);var keys_31032 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31017,actual_type_31030,f_31024], null);var canonical_f_31033 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31016),keys_31032);dommy.core.update_event_listeners_BANG_.call(null,elem_31016,dommy.utils.dissoc_in,keys_31032);
if(cljs.core.truth_(elem_31016.removeEventListener))
{elem_31016.removeEventListener(cljs.core.name.call(null,actual_type_31030),canonical_f_31033);
} else
{elem_31016.detachEvent(cljs.core.name.call(null,actual_type_31030),canonical_f_31033);
}
{
var G__31034 = seq__31003_31025;
var G__31035 = chunk__31005_31026;
var G__31036 = count__31006_31027;
var G__31037 = (i__31007_31028 + 1);
seq__31003_31025 = G__31034;
chunk__31005_31026 = G__31035;
count__31006_31027 = G__31036;
i__31007_31028 = G__31037;
continue;
}
} else
{var temp__4092__auto___31038 = cljs.core.seq.call(null,seq__31003_31025);if(temp__4092__auto___31038)
{var seq__31003_31039__$1 = temp__4092__auto___31038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31003_31039__$1))
{var c__8592__auto___31040 = cljs.core.chunk_first.call(null,seq__31003_31039__$1);{
var G__31041 = cljs.core.chunk_rest.call(null,seq__31003_31039__$1);
var G__31042 = c__8592__auto___31040;
var G__31043 = cljs.core.count.call(null,c__8592__auto___31040);
var G__31044 = 0;
seq__31003_31025 = G__31041;
chunk__31005_31026 = G__31042;
count__31006_31027 = G__31043;
i__31007_31028 = G__31044;
continue;
}
} else
{var vec__31011_31045 = cljs.core.first.call(null,seq__31003_31039__$1);var actual_type_31046 = cljs.core.nth.call(null,vec__31011_31045,0,null);var __31047 = cljs.core.nth.call(null,vec__31011_31045,1,null);var keys_31048 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31017,actual_type_31046,f_31024], null);var canonical_f_31049 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31016),keys_31048);dommy.core.update_event_listeners_BANG_.call(null,elem_31016,dommy.utils.dissoc_in,keys_31048);
if(cljs.core.truth_(elem_31016.removeEventListener))
{elem_31016.removeEventListener(cljs.core.name.call(null,actual_type_31046),canonical_f_31049);
} else
{elem_31016.detachEvent(cljs.core.name.call(null,actual_type_31046),canonical_f_31049);
}
{
var G__31050 = cljs.core.next.call(null,seq__31003_31039__$1);
var G__31051 = null;
var G__31052 = 0;
var G__31053 = 0;
seq__31003_31025 = G__31050;
chunk__31005_31026 = G__31051;
count__31006_31027 = G__31052;
i__31007_31028 = G__31053;
continue;
}
}
} else
{}
}
break;
}
{
var G__31054 = seq__30993_31018;
var G__31055 = chunk__31000_31019;
var G__31056 = count__31001_31020;
var G__31057 = (i__31002_31021 + 1);
seq__30993_31018 = G__31054;
chunk__31000_31019 = G__31055;
count__31001_31020 = G__31056;
i__31002_31021 = G__31057;
continue;
}
} else
{var temp__4092__auto___31058 = cljs.core.seq.call(null,seq__30993_31018);if(temp__4092__auto___31058)
{var seq__30993_31059__$1 = temp__4092__auto___31058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30993_31059__$1))
{var c__8592__auto___31060 = cljs.core.chunk_first.call(null,seq__30993_31059__$1);{
var G__31061 = cljs.core.chunk_rest.call(null,seq__30993_31059__$1);
var G__31062 = c__8592__auto___31060;
var G__31063 = cljs.core.count.call(null,c__8592__auto___31060);
var G__31064 = 0;
seq__30993_31018 = G__31061;
chunk__31000_31019 = G__31062;
count__31001_31020 = G__31063;
i__31002_31021 = G__31064;
continue;
}
} else
{var vec__31012_31065 = cljs.core.first.call(null,seq__30993_31059__$1);var orig_type_31066 = cljs.core.nth.call(null,vec__31012_31065,0,null);var f_31067 = cljs.core.nth.call(null,vec__31012_31065,1,null);var seq__30994_31068 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31066,new cljs.core.PersistentArrayMap.fromArray([orig_type_31066,cljs.core.identity], true, false)));var chunk__30996_31069 = null;var count__30997_31070 = 0;var i__30998_31071 = 0;while(true){
if((i__30998_31071 < count__30997_31070))
{var vec__31013_31072 = cljs.core._nth.call(null,chunk__30996_31069,i__30998_31071);var actual_type_31073 = cljs.core.nth.call(null,vec__31013_31072,0,null);var __31074 = cljs.core.nth.call(null,vec__31013_31072,1,null);var keys_31075 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31017,actual_type_31073,f_31067], null);var canonical_f_31076 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31016),keys_31075);dommy.core.update_event_listeners_BANG_.call(null,elem_31016,dommy.utils.dissoc_in,keys_31075);
if(cljs.core.truth_(elem_31016.removeEventListener))
{elem_31016.removeEventListener(cljs.core.name.call(null,actual_type_31073),canonical_f_31076);
} else
{elem_31016.detachEvent(cljs.core.name.call(null,actual_type_31073),canonical_f_31076);
}
{
var G__31077 = seq__30994_31068;
var G__31078 = chunk__30996_31069;
var G__31079 = count__30997_31070;
var G__31080 = (i__30998_31071 + 1);
seq__30994_31068 = G__31077;
chunk__30996_31069 = G__31078;
count__30997_31070 = G__31079;
i__30998_31071 = G__31080;
continue;
}
} else
{var temp__4092__auto___31081__$1 = cljs.core.seq.call(null,seq__30994_31068);if(temp__4092__auto___31081__$1)
{var seq__30994_31082__$1 = temp__4092__auto___31081__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30994_31082__$1))
{var c__8592__auto___31083 = cljs.core.chunk_first.call(null,seq__30994_31082__$1);{
var G__31084 = cljs.core.chunk_rest.call(null,seq__30994_31082__$1);
var G__31085 = c__8592__auto___31083;
var G__31086 = cljs.core.count.call(null,c__8592__auto___31083);
var G__31087 = 0;
seq__30994_31068 = G__31084;
chunk__30996_31069 = G__31085;
count__30997_31070 = G__31086;
i__30998_31071 = G__31087;
continue;
}
} else
{var vec__31014_31088 = cljs.core.first.call(null,seq__30994_31082__$1);var actual_type_31089 = cljs.core.nth.call(null,vec__31014_31088,0,null);var __31090 = cljs.core.nth.call(null,vec__31014_31088,1,null);var keys_31091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31017,actual_type_31089,f_31067], null);var canonical_f_31092 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31016),keys_31091);dommy.core.update_event_listeners_BANG_.call(null,elem_31016,dommy.utils.dissoc_in,keys_31091);
if(cljs.core.truth_(elem_31016.removeEventListener))
{elem_31016.removeEventListener(cljs.core.name.call(null,actual_type_31089),canonical_f_31092);
} else
{elem_31016.detachEvent(cljs.core.name.call(null,actual_type_31089),canonical_f_31092);
}
{
var G__31093 = cljs.core.next.call(null,seq__30994_31082__$1);
var G__31094 = null;
var G__31095 = 0;
var G__31096 = 0;
seq__30994_31068 = G__31093;
chunk__30996_31069 = G__31094;
count__30997_31070 = G__31095;
i__30998_31071 = G__31096;
continue;
}
}
} else
{}
}
break;
}
{
var G__31097 = cljs.core.next.call(null,seq__30993_31059__$1);
var G__31098 = null;
var G__31099 = 0;
var G__31100 = 0;
seq__30993_31018 = G__31097;
chunk__31000_31019 = G__31098;
count__31001_31020 = G__31099;
i__31002_31021 = G__31100;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__31101){
var elem_sel = cljs.core.first(arglist__31101);
var type_fs = cljs.core.rest(arglist__31101);
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
var vec__31109_31116 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_31117 = cljs.core.nth.call(null,vec__31109_31116,0,null);var selector_31118 = cljs.core.nth.call(null,vec__31109_31116,1,null);var seq__31110_31119 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__31111_31120 = null;var count__31112_31121 = 0;var i__31113_31122 = 0;while(true){
if((i__31113_31122 < count__31112_31121))
{var vec__31114_31123 = cljs.core._nth.call(null,chunk__31111_31120,i__31113_31122);var type_31124 = cljs.core.nth.call(null,vec__31114_31123,0,null);var f_31125 = cljs.core.nth.call(null,vec__31114_31123,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_31124,((function (seq__31110_31119,chunk__31111_31120,count__31112_31121,i__31113_31122,vec__31114_31123,type_31124,f_31125){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_31124,this_fn);
return f_31125.call(null,e);
});})(seq__31110_31119,chunk__31111_31120,count__31112_31121,i__31113_31122,vec__31114_31123,type_31124,f_31125))
);
{
var G__31126 = seq__31110_31119;
var G__31127 = chunk__31111_31120;
var G__31128 = count__31112_31121;
var G__31129 = (i__31113_31122 + 1);
seq__31110_31119 = G__31126;
chunk__31111_31120 = G__31127;
count__31112_31121 = G__31128;
i__31113_31122 = G__31129;
continue;
}
} else
{var temp__4092__auto___31130 = cljs.core.seq.call(null,seq__31110_31119);if(temp__4092__auto___31130)
{var seq__31110_31131__$1 = temp__4092__auto___31130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31110_31131__$1))
{var c__8592__auto___31132 = cljs.core.chunk_first.call(null,seq__31110_31131__$1);{
var G__31133 = cljs.core.chunk_rest.call(null,seq__31110_31131__$1);
var G__31134 = c__8592__auto___31132;
var G__31135 = cljs.core.count.call(null,c__8592__auto___31132);
var G__31136 = 0;
seq__31110_31119 = G__31133;
chunk__31111_31120 = G__31134;
count__31112_31121 = G__31135;
i__31113_31122 = G__31136;
continue;
}
} else
{var vec__31115_31137 = cljs.core.first.call(null,seq__31110_31131__$1);var type_31138 = cljs.core.nth.call(null,vec__31115_31137,0,null);var f_31139 = cljs.core.nth.call(null,vec__31115_31137,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_31138,((function (seq__31110_31119,chunk__31111_31120,count__31112_31121,i__31113_31122,vec__31115_31137,type_31138,f_31139,seq__31110_31131__$1,temp__4092__auto___31130){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_31138,this_fn);
return f_31139.call(null,e);
});})(seq__31110_31119,chunk__31111_31120,count__31112_31121,i__31113_31122,vec__31115_31137,type_31138,f_31139,seq__31110_31131__$1,temp__4092__auto___31130))
);
{
var G__31140 = cljs.core.next.call(null,seq__31110_31131__$1);
var G__31141 = null;
var G__31142 = 0;
var G__31143 = 0;
seq__31110_31119 = G__31140;
chunk__31111_31120 = G__31141;
count__31112_31121 = G__31142;
i__31113_31122 = G__31143;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__31144){
var elem_sel = cljs.core.first(arglist__31144);
var type_fs = cljs.core.rest(arglist__31144);
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
var fire_BANG___delegate = function (node,event_type,p__31145){var vec__31147 = p__31145;var update_event_BANG_ = cljs.core.nth.call(null,vec__31147,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__31145 = null;if (arguments.length > 2) {
  p__31145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__31145);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__31148){
var node = cljs.core.first(arglist__31148);
arglist__31148 = cljs.core.next(arglist__31148);
var event_type = cljs.core.first(arglist__31148);
var p__31145 = cljs.core.rest(arglist__31148);
return fire_BANG___delegate(node,event_type,p__31145);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
