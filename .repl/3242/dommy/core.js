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
var append_BANG___2 = (function (parent,child){var G__51764 = dommy.template.__GT_node_like.call(null,parent);G__51764.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__51764;
});
var append_BANG___3 = (function() { 
var G__51769__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__51765_51770 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__51766_51771 = null;var count__51767_51772 = 0;var i__51768_51773 = 0;while(true){
if((i__51768_51773 < count__51767_51772))
{var c_51774 = cljs.core._nth.call(null,chunk__51766_51771,i__51768_51773);append_BANG_.call(null,parent__$1,c_51774);
{
var G__51775 = seq__51765_51770;
var G__51776 = chunk__51766_51771;
var G__51777 = count__51767_51772;
var G__51778 = (i__51768_51773 + 1);
seq__51765_51770 = G__51775;
chunk__51766_51771 = G__51776;
count__51767_51772 = G__51777;
i__51768_51773 = G__51778;
continue;
}
} else
{var temp__4092__auto___51779 = cljs.core.seq.call(null,seq__51765_51770);if(temp__4092__auto___51779)
{var seq__51765_51780__$1 = temp__4092__auto___51779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51765_51780__$1))
{var c__8604__auto___51781 = cljs.core.chunk_first.call(null,seq__51765_51780__$1);{
var G__51782 = cljs.core.chunk_rest.call(null,seq__51765_51780__$1);
var G__51783 = c__8604__auto___51781;
var G__51784 = cljs.core.count.call(null,c__8604__auto___51781);
var G__51785 = 0;
seq__51765_51770 = G__51782;
chunk__51766_51771 = G__51783;
count__51767_51772 = G__51784;
i__51768_51773 = G__51785;
continue;
}
} else
{var c_51786 = cljs.core.first.call(null,seq__51765_51780__$1);append_BANG_.call(null,parent__$1,c_51786);
{
var G__51787 = cljs.core.next.call(null,seq__51765_51780__$1);
var G__51788 = null;
var G__51789 = 0;
var G__51790 = 0;
seq__51765_51770 = G__51787;
chunk__51766_51771 = G__51788;
count__51767_51772 = G__51789;
i__51768_51773 = G__51790;
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
var G__51769 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51769__delegate.call(this,parent,child,more_children);};
G__51769.cljs$lang$maxFixedArity = 2;
G__51769.cljs$lang$applyTo = (function (arglist__51791){
var parent = cljs.core.first(arglist__51791);
arglist__51791 = cljs.core.next(arglist__51791);
var child = cljs.core.first(arglist__51791);
var more_children = cljs.core.rest(arglist__51791);
return G__51769__delegate(parent,child,more_children);
});
G__51769.cljs$core$IFn$_invoke$arity$variadic = G__51769__delegate;
return G__51769;
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
var G__51800__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__51796_51801 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__51797_51802 = null;var count__51798_51803 = 0;var i__51799_51804 = 0;while(true){
if((i__51799_51804 < count__51798_51803))
{var c_51805 = cljs.core._nth.call(null,chunk__51797_51802,i__51799_51804);prepend_BANG_.call(null,parent__$1,c_51805);
{
var G__51806 = seq__51796_51801;
var G__51807 = chunk__51797_51802;
var G__51808 = count__51798_51803;
var G__51809 = (i__51799_51804 + 1);
seq__51796_51801 = G__51806;
chunk__51797_51802 = G__51807;
count__51798_51803 = G__51808;
i__51799_51804 = G__51809;
continue;
}
} else
{var temp__4092__auto___51810 = cljs.core.seq.call(null,seq__51796_51801);if(temp__4092__auto___51810)
{var seq__51796_51811__$1 = temp__4092__auto___51810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51796_51811__$1))
{var c__8604__auto___51812 = cljs.core.chunk_first.call(null,seq__51796_51811__$1);{
var G__51813 = cljs.core.chunk_rest.call(null,seq__51796_51811__$1);
var G__51814 = c__8604__auto___51812;
var G__51815 = cljs.core.count.call(null,c__8604__auto___51812);
var G__51816 = 0;
seq__51796_51801 = G__51813;
chunk__51797_51802 = G__51814;
count__51798_51803 = G__51815;
i__51799_51804 = G__51816;
continue;
}
} else
{var c_51817 = cljs.core.first.call(null,seq__51796_51811__$1);prepend_BANG_.call(null,parent__$1,c_51817);
{
var G__51818 = cljs.core.next.call(null,seq__51796_51811__$1);
var G__51819 = null;
var G__51820 = 0;
var G__51821 = 0;
seq__51796_51801 = G__51818;
chunk__51797_51802 = G__51819;
count__51798_51803 = G__51820;
i__51799_51804 = G__51821;
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
var G__51800 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51800__delegate.call(this,parent,child,more_children);};
G__51800.cljs$lang$maxFixedArity = 2;
G__51800.cljs$lang$applyTo = (function (arglist__51822){
var parent = cljs.core.first(arglist__51822);
arglist__51822 = cljs.core.next(arglist__51822);
var child = cljs.core.first(arglist__51822);
var more_children = cljs.core.rest(arglist__51822);
return G__51800__delegate(parent,child,more_children);
});
G__51800.cljs$core$IFn$_invoke$arity$variadic = G__51800__delegate;
return G__51800;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___51823 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___51823))
{var next_51824 = temp__4090__auto___51823;parent.insertBefore(actual_node,next_51824);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__51826 = dommy.template.__GT_node_like.call(null,parent);G__51826.innerHTML = "";
dommy.core.append_BANG_.call(null,G__51826,node_like);
return G__51826;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__51828 = elem__$1.parentNode;G__51828.removeChild(elem__$1);
return G__51828;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51834){var vec__51835 = p__51834;var k = cljs.core.nth.call(null,vec__51835,0,null);var v = cljs.core.nth.call(null,vec__51835,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t51836 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t51836 = (function (v,k,vec__51835,p__51834,container,key_selectors_map,template,selector_map,meta51837){
this.v = v;
this.k = k;
this.vec__51835 = vec__51835;
this.p__51834 = p__51834;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta51837 = meta51837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t51836.cljs$lang$type = true;
dommy.core.t51836.cljs$lang$ctorStr = "dommy.core/t51836";
dommy.core.t51836.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"dommy.core/t51836");
});
dommy.core.t51836.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t51836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51838){var self__ = this;
var _51838__$1 = this;return self__.meta51837;
});
dommy.core.t51836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51838,meta51837__$1){var self__ = this;
var _51838__$1 = this;return (new dommy.core.t51836(self__.v,self__.k,self__.vec__51835,self__.p__51834,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta51837__$1));
});
dommy.core.__GT_t51836 = (function __GT_t51836(v__$1,k__$1,vec__51835__$1,p__51834__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta51837){return (new dommy.core.t51836(v__$1,k__$1,vec__51835__$1,p__51834__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta51837));
});
}
return (new dommy.core.t51836(v,k,vec__51835,p__51834,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__51839_SHARP_){return p1__51839_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__51842_SHARP_){return !((p1__51842_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__51843){var vec__51844 = p__51843;var special_mouse_event = cljs.core.nth.call(null,vec__51844,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__51844,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7862__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7862__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__51845){
var elem = cljs.core.first(arglist__51845);
arglist__51845 = cljs.core.next(arglist__51845);
var f = cljs.core.first(arglist__51845);
var args = cljs.core.rest(arglist__51845);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__51846_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__51846_SHARP_));
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
var vec__51870_51893 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_51894 = cljs.core.nth.call(null,vec__51870_51893,0,null);var selector_51895 = cljs.core.nth.call(null,vec__51870_51893,1,null);var seq__51871_51896 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__51878_51897 = null;var count__51879_51898 = 0;var i__51880_51899 = 0;while(true){
if((i__51880_51899 < count__51879_51898))
{var vec__51887_51900 = cljs.core._nth.call(null,chunk__51878_51897,i__51880_51899);var orig_type_51901 = cljs.core.nth.call(null,vec__51887_51900,0,null);var f_51902 = cljs.core.nth.call(null,vec__51887_51900,1,null);var seq__51881_51903 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_51901,new cljs.core.PersistentArrayMap.fromArray([orig_type_51901,cljs.core.identity], true, false)));var chunk__51883_51904 = null;var count__51884_51905 = 0;var i__51885_51906 = 0;while(true){
if((i__51885_51906 < count__51884_51905))
{var vec__51888_51907 = cljs.core._nth.call(null,chunk__51883_51904,i__51885_51906);var actual_type_51908 = cljs.core.nth.call(null,vec__51888_51907,0,null);var factory_51909 = cljs.core.nth.call(null,vec__51888_51907,1,null);var canonical_f_51910 = (cljs.core.truth_(selector_51895)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51894,selector_51895):cljs.core.identity).call(null,factory_51909.call(null,f_51902));dommy.core.update_event_listeners_BANG_.call(null,elem_51894,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51895,actual_type_51908,f_51902], null),canonical_f_51910);
if(cljs.core.truth_(elem_51894.addEventListener))
{elem_51894.addEventListener(cljs.core.name.call(null,actual_type_51908),canonical_f_51910);
} else
{elem_51894.attachEvent(cljs.core.name.call(null,actual_type_51908),canonical_f_51910);
}
{
var G__51911 = seq__51881_51903;
var G__51912 = chunk__51883_51904;
var G__51913 = count__51884_51905;
var G__51914 = (i__51885_51906 + 1);
seq__51881_51903 = G__51911;
chunk__51883_51904 = G__51912;
count__51884_51905 = G__51913;
i__51885_51906 = G__51914;
continue;
}
} else
{var temp__4092__auto___51915 = cljs.core.seq.call(null,seq__51881_51903);if(temp__4092__auto___51915)
{var seq__51881_51916__$1 = temp__4092__auto___51915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51881_51916__$1))
{var c__8604__auto___51917 = cljs.core.chunk_first.call(null,seq__51881_51916__$1);{
var G__51918 = cljs.core.chunk_rest.call(null,seq__51881_51916__$1);
var G__51919 = c__8604__auto___51917;
var G__51920 = cljs.core.count.call(null,c__8604__auto___51917);
var G__51921 = 0;
seq__51881_51903 = G__51918;
chunk__51883_51904 = G__51919;
count__51884_51905 = G__51920;
i__51885_51906 = G__51921;
continue;
}
} else
{var vec__51889_51922 = cljs.core.first.call(null,seq__51881_51916__$1);var actual_type_51923 = cljs.core.nth.call(null,vec__51889_51922,0,null);var factory_51924 = cljs.core.nth.call(null,vec__51889_51922,1,null);var canonical_f_51925 = (cljs.core.truth_(selector_51895)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51894,selector_51895):cljs.core.identity).call(null,factory_51924.call(null,f_51902));dommy.core.update_event_listeners_BANG_.call(null,elem_51894,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51895,actual_type_51923,f_51902], null),canonical_f_51925);
if(cljs.core.truth_(elem_51894.addEventListener))
{elem_51894.addEventListener(cljs.core.name.call(null,actual_type_51923),canonical_f_51925);
} else
{elem_51894.attachEvent(cljs.core.name.call(null,actual_type_51923),canonical_f_51925);
}
{
var G__51926 = cljs.core.next.call(null,seq__51881_51916__$1);
var G__51927 = null;
var G__51928 = 0;
var G__51929 = 0;
seq__51881_51903 = G__51926;
chunk__51883_51904 = G__51927;
count__51884_51905 = G__51928;
i__51885_51906 = G__51929;
continue;
}
}
} else
{}
}
break;
}
{
var G__51930 = seq__51871_51896;
var G__51931 = chunk__51878_51897;
var G__51932 = count__51879_51898;
var G__51933 = (i__51880_51899 + 1);
seq__51871_51896 = G__51930;
chunk__51878_51897 = G__51931;
count__51879_51898 = G__51932;
i__51880_51899 = G__51933;
continue;
}
} else
{var temp__4092__auto___51934 = cljs.core.seq.call(null,seq__51871_51896);if(temp__4092__auto___51934)
{var seq__51871_51935__$1 = temp__4092__auto___51934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51871_51935__$1))
{var c__8604__auto___51936 = cljs.core.chunk_first.call(null,seq__51871_51935__$1);{
var G__51937 = cljs.core.chunk_rest.call(null,seq__51871_51935__$1);
var G__51938 = c__8604__auto___51936;
var G__51939 = cljs.core.count.call(null,c__8604__auto___51936);
var G__51940 = 0;
seq__51871_51896 = G__51937;
chunk__51878_51897 = G__51938;
count__51879_51898 = G__51939;
i__51880_51899 = G__51940;
continue;
}
} else
{var vec__51890_51941 = cljs.core.first.call(null,seq__51871_51935__$1);var orig_type_51942 = cljs.core.nth.call(null,vec__51890_51941,0,null);var f_51943 = cljs.core.nth.call(null,vec__51890_51941,1,null);var seq__51872_51944 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_51942,new cljs.core.PersistentArrayMap.fromArray([orig_type_51942,cljs.core.identity], true, false)));var chunk__51874_51945 = null;var count__51875_51946 = 0;var i__51876_51947 = 0;while(true){
if((i__51876_51947 < count__51875_51946))
{var vec__51891_51948 = cljs.core._nth.call(null,chunk__51874_51945,i__51876_51947);var actual_type_51949 = cljs.core.nth.call(null,vec__51891_51948,0,null);var factory_51950 = cljs.core.nth.call(null,vec__51891_51948,1,null);var canonical_f_51951 = (cljs.core.truth_(selector_51895)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51894,selector_51895):cljs.core.identity).call(null,factory_51950.call(null,f_51943));dommy.core.update_event_listeners_BANG_.call(null,elem_51894,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51895,actual_type_51949,f_51943], null),canonical_f_51951);
if(cljs.core.truth_(elem_51894.addEventListener))
{elem_51894.addEventListener(cljs.core.name.call(null,actual_type_51949),canonical_f_51951);
} else
{elem_51894.attachEvent(cljs.core.name.call(null,actual_type_51949),canonical_f_51951);
}
{
var G__51952 = seq__51872_51944;
var G__51953 = chunk__51874_51945;
var G__51954 = count__51875_51946;
var G__51955 = (i__51876_51947 + 1);
seq__51872_51944 = G__51952;
chunk__51874_51945 = G__51953;
count__51875_51946 = G__51954;
i__51876_51947 = G__51955;
continue;
}
} else
{var temp__4092__auto___51956__$1 = cljs.core.seq.call(null,seq__51872_51944);if(temp__4092__auto___51956__$1)
{var seq__51872_51957__$1 = temp__4092__auto___51956__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51872_51957__$1))
{var c__8604__auto___51958 = cljs.core.chunk_first.call(null,seq__51872_51957__$1);{
var G__51959 = cljs.core.chunk_rest.call(null,seq__51872_51957__$1);
var G__51960 = c__8604__auto___51958;
var G__51961 = cljs.core.count.call(null,c__8604__auto___51958);
var G__51962 = 0;
seq__51872_51944 = G__51959;
chunk__51874_51945 = G__51960;
count__51875_51946 = G__51961;
i__51876_51947 = G__51962;
continue;
}
} else
{var vec__51892_51963 = cljs.core.first.call(null,seq__51872_51957__$1);var actual_type_51964 = cljs.core.nth.call(null,vec__51892_51963,0,null);var factory_51965 = cljs.core.nth.call(null,vec__51892_51963,1,null);var canonical_f_51966 = (cljs.core.truth_(selector_51895)?cljs.core.partial.call(null,dommy.core.live_listener,elem_51894,selector_51895):cljs.core.identity).call(null,factory_51965.call(null,f_51943));dommy.core.update_event_listeners_BANG_.call(null,elem_51894,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_51895,actual_type_51964,f_51943], null),canonical_f_51966);
if(cljs.core.truth_(elem_51894.addEventListener))
{elem_51894.addEventListener(cljs.core.name.call(null,actual_type_51964),canonical_f_51966);
} else
{elem_51894.attachEvent(cljs.core.name.call(null,actual_type_51964),canonical_f_51966);
}
{
var G__51967 = cljs.core.next.call(null,seq__51872_51957__$1);
var G__51968 = null;
var G__51969 = 0;
var G__51970 = 0;
seq__51872_51944 = G__51967;
chunk__51874_51945 = G__51968;
count__51875_51946 = G__51969;
i__51876_51947 = G__51970;
continue;
}
}
} else
{}
}
break;
}
{
var G__51971 = cljs.core.next.call(null,seq__51871_51935__$1);
var G__51972 = null;
var G__51973 = 0;
var G__51974 = 0;
seq__51871_51896 = G__51971;
chunk__51878_51897 = G__51972;
count__51879_51898 = G__51973;
i__51880_51899 = G__51974;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__51975){
var elem_sel = cljs.core.first(arglist__51975);
var type_fs = cljs.core.rest(arglist__51975);
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
var vec__51999_52022 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_52023 = cljs.core.nth.call(null,vec__51999_52022,0,null);var selector_52024 = cljs.core.nth.call(null,vec__51999_52022,1,null);var seq__52000_52025 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__52007_52026 = null;var count__52008_52027 = 0;var i__52009_52028 = 0;while(true){
if((i__52009_52028 < count__52008_52027))
{var vec__52016_52029 = cljs.core._nth.call(null,chunk__52007_52026,i__52009_52028);var orig_type_52030 = cljs.core.nth.call(null,vec__52016_52029,0,null);var f_52031 = cljs.core.nth.call(null,vec__52016_52029,1,null);var seq__52010_52032 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_52030,new cljs.core.PersistentArrayMap.fromArray([orig_type_52030,cljs.core.identity], true, false)));var chunk__52012_52033 = null;var count__52013_52034 = 0;var i__52014_52035 = 0;while(true){
if((i__52014_52035 < count__52013_52034))
{var vec__52017_52036 = cljs.core._nth.call(null,chunk__52012_52033,i__52014_52035);var actual_type_52037 = cljs.core.nth.call(null,vec__52017_52036,0,null);var __52038 = cljs.core.nth.call(null,vec__52017_52036,1,null);var keys_52039 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52024,actual_type_52037,f_52031], null);var canonical_f_52040 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_52023),keys_52039);dommy.core.update_event_listeners_BANG_.call(null,elem_52023,dommy.utils.dissoc_in,keys_52039);
if(cljs.core.truth_(elem_52023.removeEventListener))
{elem_52023.removeEventListener(cljs.core.name.call(null,actual_type_52037),canonical_f_52040);
} else
{elem_52023.detachEvent(cljs.core.name.call(null,actual_type_52037),canonical_f_52040);
}
{
var G__52041 = seq__52010_52032;
var G__52042 = chunk__52012_52033;
var G__52043 = count__52013_52034;
var G__52044 = (i__52014_52035 + 1);
seq__52010_52032 = G__52041;
chunk__52012_52033 = G__52042;
count__52013_52034 = G__52043;
i__52014_52035 = G__52044;
continue;
}
} else
{var temp__4092__auto___52045 = cljs.core.seq.call(null,seq__52010_52032);if(temp__4092__auto___52045)
{var seq__52010_52046__$1 = temp__4092__auto___52045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52010_52046__$1))
{var c__8604__auto___52047 = cljs.core.chunk_first.call(null,seq__52010_52046__$1);{
var G__52048 = cljs.core.chunk_rest.call(null,seq__52010_52046__$1);
var G__52049 = c__8604__auto___52047;
var G__52050 = cljs.core.count.call(null,c__8604__auto___52047);
var G__52051 = 0;
seq__52010_52032 = G__52048;
chunk__52012_52033 = G__52049;
count__52013_52034 = G__52050;
i__52014_52035 = G__52051;
continue;
}
} else
{var vec__52018_52052 = cljs.core.first.call(null,seq__52010_52046__$1);var actual_type_52053 = cljs.core.nth.call(null,vec__52018_52052,0,null);var __52054 = cljs.core.nth.call(null,vec__52018_52052,1,null);var keys_52055 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52024,actual_type_52053,f_52031], null);var canonical_f_52056 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_52023),keys_52055);dommy.core.update_event_listeners_BANG_.call(null,elem_52023,dommy.utils.dissoc_in,keys_52055);
if(cljs.core.truth_(elem_52023.removeEventListener))
{elem_52023.removeEventListener(cljs.core.name.call(null,actual_type_52053),canonical_f_52056);
} else
{elem_52023.detachEvent(cljs.core.name.call(null,actual_type_52053),canonical_f_52056);
}
{
var G__52057 = cljs.core.next.call(null,seq__52010_52046__$1);
var G__52058 = null;
var G__52059 = 0;
var G__52060 = 0;
seq__52010_52032 = G__52057;
chunk__52012_52033 = G__52058;
count__52013_52034 = G__52059;
i__52014_52035 = G__52060;
continue;
}
}
} else
{}
}
break;
}
{
var G__52061 = seq__52000_52025;
var G__52062 = chunk__52007_52026;
var G__52063 = count__52008_52027;
var G__52064 = (i__52009_52028 + 1);
seq__52000_52025 = G__52061;
chunk__52007_52026 = G__52062;
count__52008_52027 = G__52063;
i__52009_52028 = G__52064;
continue;
}
} else
{var temp__4092__auto___52065 = cljs.core.seq.call(null,seq__52000_52025);if(temp__4092__auto___52065)
{var seq__52000_52066__$1 = temp__4092__auto___52065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52000_52066__$1))
{var c__8604__auto___52067 = cljs.core.chunk_first.call(null,seq__52000_52066__$1);{
var G__52068 = cljs.core.chunk_rest.call(null,seq__52000_52066__$1);
var G__52069 = c__8604__auto___52067;
var G__52070 = cljs.core.count.call(null,c__8604__auto___52067);
var G__52071 = 0;
seq__52000_52025 = G__52068;
chunk__52007_52026 = G__52069;
count__52008_52027 = G__52070;
i__52009_52028 = G__52071;
continue;
}
} else
{var vec__52019_52072 = cljs.core.first.call(null,seq__52000_52066__$1);var orig_type_52073 = cljs.core.nth.call(null,vec__52019_52072,0,null);var f_52074 = cljs.core.nth.call(null,vec__52019_52072,1,null);var seq__52001_52075 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_52073,new cljs.core.PersistentArrayMap.fromArray([orig_type_52073,cljs.core.identity], true, false)));var chunk__52003_52076 = null;var count__52004_52077 = 0;var i__52005_52078 = 0;while(true){
if((i__52005_52078 < count__52004_52077))
{var vec__52020_52079 = cljs.core._nth.call(null,chunk__52003_52076,i__52005_52078);var actual_type_52080 = cljs.core.nth.call(null,vec__52020_52079,0,null);var __52081 = cljs.core.nth.call(null,vec__52020_52079,1,null);var keys_52082 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52024,actual_type_52080,f_52074], null);var canonical_f_52083 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_52023),keys_52082);dommy.core.update_event_listeners_BANG_.call(null,elem_52023,dommy.utils.dissoc_in,keys_52082);
if(cljs.core.truth_(elem_52023.removeEventListener))
{elem_52023.removeEventListener(cljs.core.name.call(null,actual_type_52080),canonical_f_52083);
} else
{elem_52023.detachEvent(cljs.core.name.call(null,actual_type_52080),canonical_f_52083);
}
{
var G__52084 = seq__52001_52075;
var G__52085 = chunk__52003_52076;
var G__52086 = count__52004_52077;
var G__52087 = (i__52005_52078 + 1);
seq__52001_52075 = G__52084;
chunk__52003_52076 = G__52085;
count__52004_52077 = G__52086;
i__52005_52078 = G__52087;
continue;
}
} else
{var temp__4092__auto___52088__$1 = cljs.core.seq.call(null,seq__52001_52075);if(temp__4092__auto___52088__$1)
{var seq__52001_52089__$1 = temp__4092__auto___52088__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52001_52089__$1))
{var c__8604__auto___52090 = cljs.core.chunk_first.call(null,seq__52001_52089__$1);{
var G__52091 = cljs.core.chunk_rest.call(null,seq__52001_52089__$1);
var G__52092 = c__8604__auto___52090;
var G__52093 = cljs.core.count.call(null,c__8604__auto___52090);
var G__52094 = 0;
seq__52001_52075 = G__52091;
chunk__52003_52076 = G__52092;
count__52004_52077 = G__52093;
i__52005_52078 = G__52094;
continue;
}
} else
{var vec__52021_52095 = cljs.core.first.call(null,seq__52001_52089__$1);var actual_type_52096 = cljs.core.nth.call(null,vec__52021_52095,0,null);var __52097 = cljs.core.nth.call(null,vec__52021_52095,1,null);var keys_52098 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_52024,actual_type_52096,f_52074], null);var canonical_f_52099 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_52023),keys_52098);dommy.core.update_event_listeners_BANG_.call(null,elem_52023,dommy.utils.dissoc_in,keys_52098);
if(cljs.core.truth_(elem_52023.removeEventListener))
{elem_52023.removeEventListener(cljs.core.name.call(null,actual_type_52096),canonical_f_52099);
} else
{elem_52023.detachEvent(cljs.core.name.call(null,actual_type_52096),canonical_f_52099);
}
{
var G__52100 = cljs.core.next.call(null,seq__52001_52089__$1);
var G__52101 = null;
var G__52102 = 0;
var G__52103 = 0;
seq__52001_52075 = G__52100;
chunk__52003_52076 = G__52101;
count__52004_52077 = G__52102;
i__52005_52078 = G__52103;
continue;
}
}
} else
{}
}
break;
}
{
var G__52104 = cljs.core.next.call(null,seq__52000_52066__$1);
var G__52105 = null;
var G__52106 = 0;
var G__52107 = 0;
seq__52000_52025 = G__52104;
chunk__52007_52026 = G__52105;
count__52008_52027 = G__52106;
i__52009_52028 = G__52107;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__52108){
var elem_sel = cljs.core.first(arglist__52108);
var type_fs = cljs.core.rest(arglist__52108);
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
var vec__52116_52123 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_52124 = cljs.core.nth.call(null,vec__52116_52123,0,null);var selector_52125 = cljs.core.nth.call(null,vec__52116_52123,1,null);var seq__52117_52126 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__52118_52127 = null;var count__52119_52128 = 0;var i__52120_52129 = 0;while(true){
if((i__52120_52129 < count__52119_52128))
{var vec__52121_52130 = cljs.core._nth.call(null,chunk__52118_52127,i__52120_52129);var type_52131 = cljs.core.nth.call(null,vec__52121_52130,0,null);var f_52132 = cljs.core.nth.call(null,vec__52121_52130,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_52131,((function (seq__52117_52126,chunk__52118_52127,count__52119_52128,i__52120_52129,vec__52121_52130,type_52131,f_52132){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_52131,this_fn);
return f_52132.call(null,e);
});})(seq__52117_52126,chunk__52118_52127,count__52119_52128,i__52120_52129,vec__52121_52130,type_52131,f_52132))
);
{
var G__52133 = seq__52117_52126;
var G__52134 = chunk__52118_52127;
var G__52135 = count__52119_52128;
var G__52136 = (i__52120_52129 + 1);
seq__52117_52126 = G__52133;
chunk__52118_52127 = G__52134;
count__52119_52128 = G__52135;
i__52120_52129 = G__52136;
continue;
}
} else
{var temp__4092__auto___52137 = cljs.core.seq.call(null,seq__52117_52126);if(temp__4092__auto___52137)
{var seq__52117_52138__$1 = temp__4092__auto___52137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52117_52138__$1))
{var c__8604__auto___52139 = cljs.core.chunk_first.call(null,seq__52117_52138__$1);{
var G__52140 = cljs.core.chunk_rest.call(null,seq__52117_52138__$1);
var G__52141 = c__8604__auto___52139;
var G__52142 = cljs.core.count.call(null,c__8604__auto___52139);
var G__52143 = 0;
seq__52117_52126 = G__52140;
chunk__52118_52127 = G__52141;
count__52119_52128 = G__52142;
i__52120_52129 = G__52143;
continue;
}
} else
{var vec__52122_52144 = cljs.core.first.call(null,seq__52117_52138__$1);var type_52145 = cljs.core.nth.call(null,vec__52122_52144,0,null);var f_52146 = cljs.core.nth.call(null,vec__52122_52144,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_52145,((function (seq__52117_52126,chunk__52118_52127,count__52119_52128,i__52120_52129,vec__52122_52144,type_52145,f_52146,seq__52117_52138__$1,temp__4092__auto___52137){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_52145,this_fn);
return f_52146.call(null,e);
});})(seq__52117_52126,chunk__52118_52127,count__52119_52128,i__52120_52129,vec__52122_52144,type_52145,f_52146,seq__52117_52138__$1,temp__4092__auto___52137))
);
{
var G__52147 = cljs.core.next.call(null,seq__52117_52138__$1);
var G__52148 = null;
var G__52149 = 0;
var G__52150 = 0;
seq__52117_52126 = G__52147;
chunk__52118_52127 = G__52148;
count__52119_52128 = G__52149;
i__52120_52129 = G__52150;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__52151){
var elem_sel = cljs.core.first(arglist__52151);
var type_fs = cljs.core.rest(arglist__52151);
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
var fire_BANG___delegate = function (node,event_type,p__52152){var vec__52154 = p__52152;var update_event_BANG_ = cljs.core.nth.call(null,vec__52154,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__52152 = null;if (arguments.length > 2) {
  p__52152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__52152);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__52155){
var node = cljs.core.first(arglist__52155);
arglist__52155 = cljs.core.next(arglist__52155);
var event_type = cljs.core.first(arglist__52155);
var p__52152 = cljs.core.rest(arglist__52155);
return fire_BANG___delegate(node,event_type,p__52152);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
