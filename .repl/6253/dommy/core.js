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
var append_BANG___2 = (function (parent,child){var G__65595 = dommy.template.__GT_node_like.call(null,parent);G__65595.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__65595;
});
var append_BANG___3 = (function() { 
var G__65600__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__65596_65601 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__65597_65602 = null;var count__65598_65603 = 0;var i__65599_65604 = 0;while(true){
if((i__65599_65604 < count__65598_65603))
{var c_65605 = cljs.core._nth.call(null,chunk__65597_65602,i__65599_65604);append_BANG_.call(null,parent__$1,c_65605);
{
var G__65606 = seq__65596_65601;
var G__65607 = chunk__65597_65602;
var G__65608 = count__65598_65603;
var G__65609 = (i__65599_65604 + 1);
seq__65596_65601 = G__65606;
chunk__65597_65602 = G__65607;
count__65598_65603 = G__65608;
i__65599_65604 = G__65609;
continue;
}
} else
{var temp__4092__auto___65610 = cljs.core.seq.call(null,seq__65596_65601);if(temp__4092__auto___65610)
{var seq__65596_65611__$1 = temp__4092__auto___65610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65596_65611__$1))
{var c__8604__auto___65612 = cljs.core.chunk_first.call(null,seq__65596_65611__$1);{
var G__65613 = cljs.core.chunk_rest.call(null,seq__65596_65611__$1);
var G__65614 = c__8604__auto___65612;
var G__65615 = cljs.core.count.call(null,c__8604__auto___65612);
var G__65616 = 0;
seq__65596_65601 = G__65613;
chunk__65597_65602 = G__65614;
count__65598_65603 = G__65615;
i__65599_65604 = G__65616;
continue;
}
} else
{var c_65617 = cljs.core.first.call(null,seq__65596_65611__$1);append_BANG_.call(null,parent__$1,c_65617);
{
var G__65618 = cljs.core.next.call(null,seq__65596_65611__$1);
var G__65619 = null;
var G__65620 = 0;
var G__65621 = 0;
seq__65596_65601 = G__65618;
chunk__65597_65602 = G__65619;
count__65598_65603 = G__65620;
i__65599_65604 = G__65621;
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
var G__65600 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65600__delegate.call(this,parent,child,more_children);};
G__65600.cljs$lang$maxFixedArity = 2;
G__65600.cljs$lang$applyTo = (function (arglist__65622){
var parent = cljs.core.first(arglist__65622);
arglist__65622 = cljs.core.next(arglist__65622);
var child = cljs.core.first(arglist__65622);
var more_children = cljs.core.rest(arglist__65622);
return G__65600__delegate(parent,child,more_children);
});
G__65600.cljs$core$IFn$_invoke$arity$variadic = G__65600__delegate;
return G__65600;
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
var G__65631__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__65627_65632 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__65628_65633 = null;var count__65629_65634 = 0;var i__65630_65635 = 0;while(true){
if((i__65630_65635 < count__65629_65634))
{var c_65636 = cljs.core._nth.call(null,chunk__65628_65633,i__65630_65635);prepend_BANG_.call(null,parent__$1,c_65636);
{
var G__65637 = seq__65627_65632;
var G__65638 = chunk__65628_65633;
var G__65639 = count__65629_65634;
var G__65640 = (i__65630_65635 + 1);
seq__65627_65632 = G__65637;
chunk__65628_65633 = G__65638;
count__65629_65634 = G__65639;
i__65630_65635 = G__65640;
continue;
}
} else
{var temp__4092__auto___65641 = cljs.core.seq.call(null,seq__65627_65632);if(temp__4092__auto___65641)
{var seq__65627_65642__$1 = temp__4092__auto___65641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65627_65642__$1))
{var c__8604__auto___65643 = cljs.core.chunk_first.call(null,seq__65627_65642__$1);{
var G__65644 = cljs.core.chunk_rest.call(null,seq__65627_65642__$1);
var G__65645 = c__8604__auto___65643;
var G__65646 = cljs.core.count.call(null,c__8604__auto___65643);
var G__65647 = 0;
seq__65627_65632 = G__65644;
chunk__65628_65633 = G__65645;
count__65629_65634 = G__65646;
i__65630_65635 = G__65647;
continue;
}
} else
{var c_65648 = cljs.core.first.call(null,seq__65627_65642__$1);prepend_BANG_.call(null,parent__$1,c_65648);
{
var G__65649 = cljs.core.next.call(null,seq__65627_65642__$1);
var G__65650 = null;
var G__65651 = 0;
var G__65652 = 0;
seq__65627_65632 = G__65649;
chunk__65628_65633 = G__65650;
count__65629_65634 = G__65651;
i__65630_65635 = G__65652;
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
var G__65631 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65631__delegate.call(this,parent,child,more_children);};
G__65631.cljs$lang$maxFixedArity = 2;
G__65631.cljs$lang$applyTo = (function (arglist__65653){
var parent = cljs.core.first(arglist__65653);
arglist__65653 = cljs.core.next(arglist__65653);
var child = cljs.core.first(arglist__65653);
var more_children = cljs.core.rest(arglist__65653);
return G__65631__delegate(parent,child,more_children);
});
G__65631.cljs$core$IFn$_invoke$arity$variadic = G__65631__delegate;
return G__65631;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___65654 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___65654))
{var next_65655 = temp__4090__auto___65654;parent.insertBefore(actual_node,next_65655);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__65657 = dommy.template.__GT_node_like.call(null,parent);G__65657.innerHTML = "";
dommy.core.append_BANG_.call(null,G__65657,node_like);
return G__65657;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__65659 = elem__$1.parentNode;G__65659.removeChild(elem__$1);
return G__65659;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__65665){var vec__65666 = p__65665;var k = cljs.core.nth.call(null,vec__65666,0,null);var v = cljs.core.nth.call(null,vec__65666,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t65667 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t65667 = (function (v,k,vec__65666,p__65665,container,key_selectors_map,template,selector_map,meta65668){
this.v = v;
this.k = k;
this.vec__65666 = vec__65666;
this.p__65665 = p__65665;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta65668 = meta65668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t65667.cljs$lang$type = true;
dommy.core.t65667.cljs$lang$ctorStr = "dommy.core/t65667";
dommy.core.t65667.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"dommy.core/t65667");
});
dommy.core.t65667.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t65667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65669){var self__ = this;
var _65669__$1 = this;return self__.meta65668;
});
dommy.core.t65667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65669,meta65668__$1){var self__ = this;
var _65669__$1 = this;return (new dommy.core.t65667(self__.v,self__.k,self__.vec__65666,self__.p__65665,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta65668__$1));
});
dommy.core.__GT_t65667 = (function __GT_t65667(v__$1,k__$1,vec__65666__$1,p__65665__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta65668){return (new dommy.core.t65667(v__$1,k__$1,vec__65666__$1,p__65665__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta65668));
});
}
return (new dommy.core.t65667(v,k,vec__65666,p__65665,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__65670_SHARP_){return p1__65670_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__65671_SHARP_){return !((p1__65671_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__65672){var vec__65673 = p__65672;var special_mouse_event = cljs.core.nth.call(null,vec__65673,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__65673,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7862__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7862__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__65674){
var elem = cljs.core.first(arglist__65674);
arglist__65674 = cljs.core.next(arglist__65674);
var f = cljs.core.first(arglist__65674);
var args = cljs.core.rest(arglist__65674);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__65675_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__65675_SHARP_));
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
var vec__65699_65722 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_65723 = cljs.core.nth.call(null,vec__65699_65722,0,null);var selector_65724 = cljs.core.nth.call(null,vec__65699_65722,1,null);var seq__65700_65725 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__65707_65726 = null;var count__65708_65727 = 0;var i__65709_65728 = 0;while(true){
if((i__65709_65728 < count__65708_65727))
{var vec__65716_65729 = cljs.core._nth.call(null,chunk__65707_65726,i__65709_65728);var orig_type_65730 = cljs.core.nth.call(null,vec__65716_65729,0,null);var f_65731 = cljs.core.nth.call(null,vec__65716_65729,1,null);var seq__65710_65732 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65730,new cljs.core.PersistentArrayMap.fromArray([orig_type_65730,cljs.core.identity], true, false)));var chunk__65712_65733 = null;var count__65713_65734 = 0;var i__65714_65735 = 0;while(true){
if((i__65714_65735 < count__65713_65734))
{var vec__65717_65736 = cljs.core._nth.call(null,chunk__65712_65733,i__65714_65735);var actual_type_65737 = cljs.core.nth.call(null,vec__65717_65736,0,null);var factory_65738 = cljs.core.nth.call(null,vec__65717_65736,1,null);var canonical_f_65739 = (cljs.core.truth_(selector_65724)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65723,selector_65724):cljs.core.identity).call(null,factory_65738.call(null,f_65731));dommy.core.update_event_listeners_BANG_.call(null,elem_65723,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65724,actual_type_65737,f_65731], null),canonical_f_65739);
if(cljs.core.truth_(elem_65723.addEventListener))
{elem_65723.addEventListener(cljs.core.name.call(null,actual_type_65737),canonical_f_65739);
} else
{elem_65723.attachEvent(cljs.core.name.call(null,actual_type_65737),canonical_f_65739);
}
{
var G__65740 = seq__65710_65732;
var G__65741 = chunk__65712_65733;
var G__65742 = count__65713_65734;
var G__65743 = (i__65714_65735 + 1);
seq__65710_65732 = G__65740;
chunk__65712_65733 = G__65741;
count__65713_65734 = G__65742;
i__65714_65735 = G__65743;
continue;
}
} else
{var temp__4092__auto___65744 = cljs.core.seq.call(null,seq__65710_65732);if(temp__4092__auto___65744)
{var seq__65710_65745__$1 = temp__4092__auto___65744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65710_65745__$1))
{var c__8604__auto___65746 = cljs.core.chunk_first.call(null,seq__65710_65745__$1);{
var G__65747 = cljs.core.chunk_rest.call(null,seq__65710_65745__$1);
var G__65748 = c__8604__auto___65746;
var G__65749 = cljs.core.count.call(null,c__8604__auto___65746);
var G__65750 = 0;
seq__65710_65732 = G__65747;
chunk__65712_65733 = G__65748;
count__65713_65734 = G__65749;
i__65714_65735 = G__65750;
continue;
}
} else
{var vec__65718_65751 = cljs.core.first.call(null,seq__65710_65745__$1);var actual_type_65752 = cljs.core.nth.call(null,vec__65718_65751,0,null);var factory_65753 = cljs.core.nth.call(null,vec__65718_65751,1,null);var canonical_f_65754 = (cljs.core.truth_(selector_65724)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65723,selector_65724):cljs.core.identity).call(null,factory_65753.call(null,f_65731));dommy.core.update_event_listeners_BANG_.call(null,elem_65723,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65724,actual_type_65752,f_65731], null),canonical_f_65754);
if(cljs.core.truth_(elem_65723.addEventListener))
{elem_65723.addEventListener(cljs.core.name.call(null,actual_type_65752),canonical_f_65754);
} else
{elem_65723.attachEvent(cljs.core.name.call(null,actual_type_65752),canonical_f_65754);
}
{
var G__65755 = cljs.core.next.call(null,seq__65710_65745__$1);
var G__65756 = null;
var G__65757 = 0;
var G__65758 = 0;
seq__65710_65732 = G__65755;
chunk__65712_65733 = G__65756;
count__65713_65734 = G__65757;
i__65714_65735 = G__65758;
continue;
}
}
} else
{}
}
break;
}
{
var G__65759 = seq__65700_65725;
var G__65760 = chunk__65707_65726;
var G__65761 = count__65708_65727;
var G__65762 = (i__65709_65728 + 1);
seq__65700_65725 = G__65759;
chunk__65707_65726 = G__65760;
count__65708_65727 = G__65761;
i__65709_65728 = G__65762;
continue;
}
} else
{var temp__4092__auto___65763 = cljs.core.seq.call(null,seq__65700_65725);if(temp__4092__auto___65763)
{var seq__65700_65764__$1 = temp__4092__auto___65763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65700_65764__$1))
{var c__8604__auto___65765 = cljs.core.chunk_first.call(null,seq__65700_65764__$1);{
var G__65766 = cljs.core.chunk_rest.call(null,seq__65700_65764__$1);
var G__65767 = c__8604__auto___65765;
var G__65768 = cljs.core.count.call(null,c__8604__auto___65765);
var G__65769 = 0;
seq__65700_65725 = G__65766;
chunk__65707_65726 = G__65767;
count__65708_65727 = G__65768;
i__65709_65728 = G__65769;
continue;
}
} else
{var vec__65719_65770 = cljs.core.first.call(null,seq__65700_65764__$1);var orig_type_65771 = cljs.core.nth.call(null,vec__65719_65770,0,null);var f_65772 = cljs.core.nth.call(null,vec__65719_65770,1,null);var seq__65701_65773 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65771,new cljs.core.PersistentArrayMap.fromArray([orig_type_65771,cljs.core.identity], true, false)));var chunk__65703_65774 = null;var count__65704_65775 = 0;var i__65705_65776 = 0;while(true){
if((i__65705_65776 < count__65704_65775))
{var vec__65720_65777 = cljs.core._nth.call(null,chunk__65703_65774,i__65705_65776);var actual_type_65778 = cljs.core.nth.call(null,vec__65720_65777,0,null);var factory_65779 = cljs.core.nth.call(null,vec__65720_65777,1,null);var canonical_f_65780 = (cljs.core.truth_(selector_65724)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65723,selector_65724):cljs.core.identity).call(null,factory_65779.call(null,f_65772));dommy.core.update_event_listeners_BANG_.call(null,elem_65723,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65724,actual_type_65778,f_65772], null),canonical_f_65780);
if(cljs.core.truth_(elem_65723.addEventListener))
{elem_65723.addEventListener(cljs.core.name.call(null,actual_type_65778),canonical_f_65780);
} else
{elem_65723.attachEvent(cljs.core.name.call(null,actual_type_65778),canonical_f_65780);
}
{
var G__65781 = seq__65701_65773;
var G__65782 = chunk__65703_65774;
var G__65783 = count__65704_65775;
var G__65784 = (i__65705_65776 + 1);
seq__65701_65773 = G__65781;
chunk__65703_65774 = G__65782;
count__65704_65775 = G__65783;
i__65705_65776 = G__65784;
continue;
}
} else
{var temp__4092__auto___65785__$1 = cljs.core.seq.call(null,seq__65701_65773);if(temp__4092__auto___65785__$1)
{var seq__65701_65786__$1 = temp__4092__auto___65785__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65701_65786__$1))
{var c__8604__auto___65787 = cljs.core.chunk_first.call(null,seq__65701_65786__$1);{
var G__65788 = cljs.core.chunk_rest.call(null,seq__65701_65786__$1);
var G__65789 = c__8604__auto___65787;
var G__65790 = cljs.core.count.call(null,c__8604__auto___65787);
var G__65791 = 0;
seq__65701_65773 = G__65788;
chunk__65703_65774 = G__65789;
count__65704_65775 = G__65790;
i__65705_65776 = G__65791;
continue;
}
} else
{var vec__65721_65792 = cljs.core.first.call(null,seq__65701_65786__$1);var actual_type_65793 = cljs.core.nth.call(null,vec__65721_65792,0,null);var factory_65794 = cljs.core.nth.call(null,vec__65721_65792,1,null);var canonical_f_65795 = (cljs.core.truth_(selector_65724)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65723,selector_65724):cljs.core.identity).call(null,factory_65794.call(null,f_65772));dommy.core.update_event_listeners_BANG_.call(null,elem_65723,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65724,actual_type_65793,f_65772], null),canonical_f_65795);
if(cljs.core.truth_(elem_65723.addEventListener))
{elem_65723.addEventListener(cljs.core.name.call(null,actual_type_65793),canonical_f_65795);
} else
{elem_65723.attachEvent(cljs.core.name.call(null,actual_type_65793),canonical_f_65795);
}
{
var G__65796 = cljs.core.next.call(null,seq__65701_65786__$1);
var G__65797 = null;
var G__65798 = 0;
var G__65799 = 0;
seq__65701_65773 = G__65796;
chunk__65703_65774 = G__65797;
count__65704_65775 = G__65798;
i__65705_65776 = G__65799;
continue;
}
}
} else
{}
}
break;
}
{
var G__65800 = cljs.core.next.call(null,seq__65700_65764__$1);
var G__65801 = null;
var G__65802 = 0;
var G__65803 = 0;
seq__65700_65725 = G__65800;
chunk__65707_65726 = G__65801;
count__65708_65727 = G__65802;
i__65709_65728 = G__65803;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__65804){
var elem_sel = cljs.core.first(arglist__65804);
var type_fs = cljs.core.rest(arglist__65804);
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
var vec__65828_65851 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_65852 = cljs.core.nth.call(null,vec__65828_65851,0,null);var selector_65853 = cljs.core.nth.call(null,vec__65828_65851,1,null);var seq__65829_65854 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__65836_65855 = null;var count__65837_65856 = 0;var i__65838_65857 = 0;while(true){
if((i__65838_65857 < count__65837_65856))
{var vec__65845_65858 = cljs.core._nth.call(null,chunk__65836_65855,i__65838_65857);var orig_type_65859 = cljs.core.nth.call(null,vec__65845_65858,0,null);var f_65860 = cljs.core.nth.call(null,vec__65845_65858,1,null);var seq__65839_65861 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65859,new cljs.core.PersistentArrayMap.fromArray([orig_type_65859,cljs.core.identity], true, false)));var chunk__65841_65862 = null;var count__65842_65863 = 0;var i__65843_65864 = 0;while(true){
if((i__65843_65864 < count__65842_65863))
{var vec__65846_65865 = cljs.core._nth.call(null,chunk__65841_65862,i__65843_65864);var actual_type_65866 = cljs.core.nth.call(null,vec__65846_65865,0,null);var __65867 = cljs.core.nth.call(null,vec__65846_65865,1,null);var keys_65868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65853,actual_type_65866,f_65860], null);var canonical_f_65869 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65852),keys_65868);dommy.core.update_event_listeners_BANG_.call(null,elem_65852,dommy.utils.dissoc_in,keys_65868);
if(cljs.core.truth_(elem_65852.removeEventListener))
{elem_65852.removeEventListener(cljs.core.name.call(null,actual_type_65866),canonical_f_65869);
} else
{elem_65852.detachEvent(cljs.core.name.call(null,actual_type_65866),canonical_f_65869);
}
{
var G__65870 = seq__65839_65861;
var G__65871 = chunk__65841_65862;
var G__65872 = count__65842_65863;
var G__65873 = (i__65843_65864 + 1);
seq__65839_65861 = G__65870;
chunk__65841_65862 = G__65871;
count__65842_65863 = G__65872;
i__65843_65864 = G__65873;
continue;
}
} else
{var temp__4092__auto___65874 = cljs.core.seq.call(null,seq__65839_65861);if(temp__4092__auto___65874)
{var seq__65839_65875__$1 = temp__4092__auto___65874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65839_65875__$1))
{var c__8604__auto___65876 = cljs.core.chunk_first.call(null,seq__65839_65875__$1);{
var G__65877 = cljs.core.chunk_rest.call(null,seq__65839_65875__$1);
var G__65878 = c__8604__auto___65876;
var G__65879 = cljs.core.count.call(null,c__8604__auto___65876);
var G__65880 = 0;
seq__65839_65861 = G__65877;
chunk__65841_65862 = G__65878;
count__65842_65863 = G__65879;
i__65843_65864 = G__65880;
continue;
}
} else
{var vec__65847_65881 = cljs.core.first.call(null,seq__65839_65875__$1);var actual_type_65882 = cljs.core.nth.call(null,vec__65847_65881,0,null);var __65883 = cljs.core.nth.call(null,vec__65847_65881,1,null);var keys_65884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65853,actual_type_65882,f_65860], null);var canonical_f_65885 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65852),keys_65884);dommy.core.update_event_listeners_BANG_.call(null,elem_65852,dommy.utils.dissoc_in,keys_65884);
if(cljs.core.truth_(elem_65852.removeEventListener))
{elem_65852.removeEventListener(cljs.core.name.call(null,actual_type_65882),canonical_f_65885);
} else
{elem_65852.detachEvent(cljs.core.name.call(null,actual_type_65882),canonical_f_65885);
}
{
var G__65886 = cljs.core.next.call(null,seq__65839_65875__$1);
var G__65887 = null;
var G__65888 = 0;
var G__65889 = 0;
seq__65839_65861 = G__65886;
chunk__65841_65862 = G__65887;
count__65842_65863 = G__65888;
i__65843_65864 = G__65889;
continue;
}
}
} else
{}
}
break;
}
{
var G__65890 = seq__65829_65854;
var G__65891 = chunk__65836_65855;
var G__65892 = count__65837_65856;
var G__65893 = (i__65838_65857 + 1);
seq__65829_65854 = G__65890;
chunk__65836_65855 = G__65891;
count__65837_65856 = G__65892;
i__65838_65857 = G__65893;
continue;
}
} else
{var temp__4092__auto___65894 = cljs.core.seq.call(null,seq__65829_65854);if(temp__4092__auto___65894)
{var seq__65829_65895__$1 = temp__4092__auto___65894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65829_65895__$1))
{var c__8604__auto___65896 = cljs.core.chunk_first.call(null,seq__65829_65895__$1);{
var G__65897 = cljs.core.chunk_rest.call(null,seq__65829_65895__$1);
var G__65898 = c__8604__auto___65896;
var G__65899 = cljs.core.count.call(null,c__8604__auto___65896);
var G__65900 = 0;
seq__65829_65854 = G__65897;
chunk__65836_65855 = G__65898;
count__65837_65856 = G__65899;
i__65838_65857 = G__65900;
continue;
}
} else
{var vec__65848_65901 = cljs.core.first.call(null,seq__65829_65895__$1);var orig_type_65902 = cljs.core.nth.call(null,vec__65848_65901,0,null);var f_65903 = cljs.core.nth.call(null,vec__65848_65901,1,null);var seq__65830_65904 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65902,new cljs.core.PersistentArrayMap.fromArray([orig_type_65902,cljs.core.identity], true, false)));var chunk__65832_65905 = null;var count__65833_65906 = 0;var i__65834_65907 = 0;while(true){
if((i__65834_65907 < count__65833_65906))
{var vec__65849_65908 = cljs.core._nth.call(null,chunk__65832_65905,i__65834_65907);var actual_type_65909 = cljs.core.nth.call(null,vec__65849_65908,0,null);var __65910 = cljs.core.nth.call(null,vec__65849_65908,1,null);var keys_65911 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65853,actual_type_65909,f_65903], null);var canonical_f_65912 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65852),keys_65911);dommy.core.update_event_listeners_BANG_.call(null,elem_65852,dommy.utils.dissoc_in,keys_65911);
if(cljs.core.truth_(elem_65852.removeEventListener))
{elem_65852.removeEventListener(cljs.core.name.call(null,actual_type_65909),canonical_f_65912);
} else
{elem_65852.detachEvent(cljs.core.name.call(null,actual_type_65909),canonical_f_65912);
}
{
var G__65913 = seq__65830_65904;
var G__65914 = chunk__65832_65905;
var G__65915 = count__65833_65906;
var G__65916 = (i__65834_65907 + 1);
seq__65830_65904 = G__65913;
chunk__65832_65905 = G__65914;
count__65833_65906 = G__65915;
i__65834_65907 = G__65916;
continue;
}
} else
{var temp__4092__auto___65917__$1 = cljs.core.seq.call(null,seq__65830_65904);if(temp__4092__auto___65917__$1)
{var seq__65830_65918__$1 = temp__4092__auto___65917__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65830_65918__$1))
{var c__8604__auto___65919 = cljs.core.chunk_first.call(null,seq__65830_65918__$1);{
var G__65920 = cljs.core.chunk_rest.call(null,seq__65830_65918__$1);
var G__65921 = c__8604__auto___65919;
var G__65922 = cljs.core.count.call(null,c__8604__auto___65919);
var G__65923 = 0;
seq__65830_65904 = G__65920;
chunk__65832_65905 = G__65921;
count__65833_65906 = G__65922;
i__65834_65907 = G__65923;
continue;
}
} else
{var vec__65850_65924 = cljs.core.first.call(null,seq__65830_65918__$1);var actual_type_65925 = cljs.core.nth.call(null,vec__65850_65924,0,null);var __65926 = cljs.core.nth.call(null,vec__65850_65924,1,null);var keys_65927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65853,actual_type_65925,f_65903], null);var canonical_f_65928 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65852),keys_65927);dommy.core.update_event_listeners_BANG_.call(null,elem_65852,dommy.utils.dissoc_in,keys_65927);
if(cljs.core.truth_(elem_65852.removeEventListener))
{elem_65852.removeEventListener(cljs.core.name.call(null,actual_type_65925),canonical_f_65928);
} else
{elem_65852.detachEvent(cljs.core.name.call(null,actual_type_65925),canonical_f_65928);
}
{
var G__65929 = cljs.core.next.call(null,seq__65830_65918__$1);
var G__65930 = null;
var G__65931 = 0;
var G__65932 = 0;
seq__65830_65904 = G__65929;
chunk__65832_65905 = G__65930;
count__65833_65906 = G__65931;
i__65834_65907 = G__65932;
continue;
}
}
} else
{}
}
break;
}
{
var G__65933 = cljs.core.next.call(null,seq__65829_65895__$1);
var G__65934 = null;
var G__65935 = 0;
var G__65936 = 0;
seq__65829_65854 = G__65933;
chunk__65836_65855 = G__65934;
count__65837_65856 = G__65935;
i__65838_65857 = G__65936;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__65937){
var elem_sel = cljs.core.first(arglist__65937);
var type_fs = cljs.core.rest(arglist__65937);
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
var vec__65945_65952 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_65953 = cljs.core.nth.call(null,vec__65945_65952,0,null);var selector_65954 = cljs.core.nth.call(null,vec__65945_65952,1,null);var seq__65946_65955 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__65947_65956 = null;var count__65948_65957 = 0;var i__65949_65958 = 0;while(true){
if((i__65949_65958 < count__65948_65957))
{var vec__65950_65959 = cljs.core._nth.call(null,chunk__65947_65956,i__65949_65958);var type_65960 = cljs.core.nth.call(null,vec__65950_65959,0,null);var f_65961 = cljs.core.nth.call(null,vec__65950_65959,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_65960,((function (seq__65946_65955,chunk__65947_65956,count__65948_65957,i__65949_65958,vec__65950_65959,type_65960,f_65961){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_65960,this_fn);
return f_65961.call(null,e);
});})(seq__65946_65955,chunk__65947_65956,count__65948_65957,i__65949_65958,vec__65950_65959,type_65960,f_65961))
);
{
var G__65962 = seq__65946_65955;
var G__65963 = chunk__65947_65956;
var G__65964 = count__65948_65957;
var G__65965 = (i__65949_65958 + 1);
seq__65946_65955 = G__65962;
chunk__65947_65956 = G__65963;
count__65948_65957 = G__65964;
i__65949_65958 = G__65965;
continue;
}
} else
{var temp__4092__auto___65966 = cljs.core.seq.call(null,seq__65946_65955);if(temp__4092__auto___65966)
{var seq__65946_65967__$1 = temp__4092__auto___65966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65946_65967__$1))
{var c__8604__auto___65968 = cljs.core.chunk_first.call(null,seq__65946_65967__$1);{
var G__65969 = cljs.core.chunk_rest.call(null,seq__65946_65967__$1);
var G__65970 = c__8604__auto___65968;
var G__65971 = cljs.core.count.call(null,c__8604__auto___65968);
var G__65972 = 0;
seq__65946_65955 = G__65969;
chunk__65947_65956 = G__65970;
count__65948_65957 = G__65971;
i__65949_65958 = G__65972;
continue;
}
} else
{var vec__65951_65973 = cljs.core.first.call(null,seq__65946_65967__$1);var type_65974 = cljs.core.nth.call(null,vec__65951_65973,0,null);var f_65975 = cljs.core.nth.call(null,vec__65951_65973,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_65974,((function (seq__65946_65955,chunk__65947_65956,count__65948_65957,i__65949_65958,vec__65951_65973,type_65974,f_65975,seq__65946_65967__$1,temp__4092__auto___65966){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_65974,this_fn);
return f_65975.call(null,e);
});})(seq__65946_65955,chunk__65947_65956,count__65948_65957,i__65949_65958,vec__65951_65973,type_65974,f_65975,seq__65946_65967__$1,temp__4092__auto___65966))
);
{
var G__65976 = cljs.core.next.call(null,seq__65946_65967__$1);
var G__65977 = null;
var G__65978 = 0;
var G__65979 = 0;
seq__65946_65955 = G__65976;
chunk__65947_65956 = G__65977;
count__65948_65957 = G__65978;
i__65949_65958 = G__65979;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__65980){
var elem_sel = cljs.core.first(arglist__65980);
var type_fs = cljs.core.rest(arglist__65980);
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
var fire_BANG___delegate = function (node,event_type,p__65981){var vec__65983 = p__65981;var update_event_BANG_ = cljs.core.nth.call(null,vec__65983,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__65981 = null;if (arguments.length > 2) {
  p__65981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__65981);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__65984){
var node = cljs.core.first(arglist__65984);
arglist__65984 = cljs.core.next(arglist__65984);
var event_type = cljs.core.first(arglist__65984);
var p__65981 = cljs.core.rest(arglist__65984);
return fire_BANG___delegate(node,event_type,p__65981);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
