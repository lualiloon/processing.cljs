// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7850__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7850__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7850__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__25073 = (i + class$.length);
start_from = G__25073;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___25098 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25098))
{var class_list_25099 = temp__4090__auto___25098;var seq__25086_25100 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25087_25101 = null;var count__25088_25102 = 0;var i__25089_25103 = 0;while(true){
if((i__25089_25103 < count__25088_25102))
{var class_25104 = cljs.core._nth.call(null,chunk__25087_25101,i__25089_25103);class_list_25099.add(class_25104);
{
var G__25105 = seq__25086_25100;
var G__25106 = chunk__25087_25101;
var G__25107 = count__25088_25102;
var G__25108 = (i__25089_25103 + 1);
seq__25086_25100 = G__25105;
chunk__25087_25101 = G__25106;
count__25088_25102 = G__25107;
i__25089_25103 = G__25108;
continue;
}
} else
{var temp__4092__auto___25109 = cljs.core.seq.call(null,seq__25086_25100);if(temp__4092__auto___25109)
{var seq__25086_25110__$1 = temp__4092__auto___25109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25086_25110__$1))
{var c__8604__auto___25111 = cljs.core.chunk_first.call(null,seq__25086_25110__$1);{
var G__25112 = cljs.core.chunk_rest.call(null,seq__25086_25110__$1);
var G__25113 = c__8604__auto___25111;
var G__25114 = cljs.core.count.call(null,c__8604__auto___25111);
var G__25115 = 0;
seq__25086_25100 = G__25112;
chunk__25087_25101 = G__25113;
count__25088_25102 = G__25114;
i__25089_25103 = G__25115;
continue;
}
} else
{var class_25116 = cljs.core.first.call(null,seq__25086_25110__$1);class_list_25099.add(class_25116);
{
var G__25117 = cljs.core.next.call(null,seq__25086_25110__$1);
var G__25118 = null;
var G__25119 = 0;
var G__25120 = 0;
seq__25086_25100 = G__25117;
chunk__25087_25101 = G__25118;
count__25088_25102 = G__25119;
i__25089_25103 = G__25120;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_25121 = elem__$1.className;var seq__25090_25122 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25091_25123 = null;var count__25092_25124 = 0;var i__25093_25125 = 0;while(true){
if((i__25093_25125 < count__25092_25124))
{var class_25126 = cljs.core._nth.call(null,chunk__25091_25123,i__25093_25125);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25121,class_25126)))
{} else
{elem__$1.className = (((class_name_25121 === ""))?class_25126:[cljs.core.str(class_name_25121),cljs.core.str(" "),cljs.core.str(class_25126)].join(''));
}
{
var G__25127 = seq__25090_25122;
var G__25128 = chunk__25091_25123;
var G__25129 = count__25092_25124;
var G__25130 = (i__25093_25125 + 1);
seq__25090_25122 = G__25127;
chunk__25091_25123 = G__25128;
count__25092_25124 = G__25129;
i__25093_25125 = G__25130;
continue;
}
} else
{var temp__4092__auto___25131 = cljs.core.seq.call(null,seq__25090_25122);if(temp__4092__auto___25131)
{var seq__25090_25132__$1 = temp__4092__auto___25131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25090_25132__$1))
{var c__8604__auto___25133 = cljs.core.chunk_first.call(null,seq__25090_25132__$1);{
var G__25134 = cljs.core.chunk_rest.call(null,seq__25090_25132__$1);
var G__25135 = c__8604__auto___25133;
var G__25136 = cljs.core.count.call(null,c__8604__auto___25133);
var G__25137 = 0;
seq__25090_25122 = G__25134;
chunk__25091_25123 = G__25135;
count__25092_25124 = G__25136;
i__25093_25125 = G__25137;
continue;
}
} else
{var class_25138 = cljs.core.first.call(null,seq__25090_25132__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25121,class_25138)))
{} else
{elem__$1.className = (((class_name_25121 === ""))?class_25138:[cljs.core.str(class_name_25121),cljs.core.str(" "),cljs.core.str(class_25138)].join(''));
}
{
var G__25139 = cljs.core.next.call(null,seq__25090_25132__$1);
var G__25140 = null;
var G__25141 = 0;
var G__25142 = 0;
seq__25090_25122 = G__25139;
chunk__25091_25123 = G__25140;
count__25092_25124 = G__25141;
i__25093_25125 = G__25142;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__25143__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25094_25144 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__25095_25145 = null;var count__25096_25146 = 0;var i__25097_25147 = 0;while(true){
if((i__25097_25147 < count__25096_25146))
{var c_25148 = cljs.core._nth.call(null,chunk__25095_25145,i__25097_25147);add_class_BANG_.call(null,elem__$1,c_25148);
{
var G__25149 = seq__25094_25144;
var G__25150 = chunk__25095_25145;
var G__25151 = count__25096_25146;
var G__25152 = (i__25097_25147 + 1);
seq__25094_25144 = G__25149;
chunk__25095_25145 = G__25150;
count__25096_25146 = G__25151;
i__25097_25147 = G__25152;
continue;
}
} else
{var temp__4092__auto___25153 = cljs.core.seq.call(null,seq__25094_25144);if(temp__4092__auto___25153)
{var seq__25094_25154__$1 = temp__4092__auto___25153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25094_25154__$1))
{var c__8604__auto___25155 = cljs.core.chunk_first.call(null,seq__25094_25154__$1);{
var G__25156 = cljs.core.chunk_rest.call(null,seq__25094_25154__$1);
var G__25157 = c__8604__auto___25155;
var G__25158 = cljs.core.count.call(null,c__8604__auto___25155);
var G__25159 = 0;
seq__25094_25144 = G__25156;
chunk__25095_25145 = G__25157;
count__25096_25146 = G__25158;
i__25097_25147 = G__25159;
continue;
}
} else
{var c_25160 = cljs.core.first.call(null,seq__25094_25154__$1);add_class_BANG_.call(null,elem__$1,c_25160);
{
var G__25161 = cljs.core.next.call(null,seq__25094_25154__$1);
var G__25162 = null;
var G__25163 = 0;
var G__25164 = 0;
seq__25094_25144 = G__25161;
chunk__25095_25145 = G__25162;
count__25096_25146 = G__25163;
i__25097_25147 = G__25164;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__25143 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25143__delegate.call(this,elem,classes,more_classes);};
G__25143.cljs$lang$maxFixedArity = 2;
G__25143.cljs$lang$applyTo = (function (arglist__25165){
var elem = cljs.core.first(arglist__25165);
arglist__25165 = cljs.core.next(arglist__25165);
var classes = cljs.core.first(arglist__25165);
var more_classes = cljs.core.rest(arglist__25165);
return G__25143__delegate(elem,classes,more_classes);
});
G__25143.cljs$core$IFn$_invoke$arity$variadic = G__25143__delegate;
return G__25143;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__25166 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__25166;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25175 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25175))
{var class_list_25176 = temp__4090__auto___25175;class_list_25176.remove(class$__$1);
} else
{var class_name_25177 = elem__$1.className;var new_class_name_25178 = dommy.attrs.remove_class_str.call(null,class_name_25177,class$__$1);if((class_name_25177 === new_class_name_25178))
{} else
{elem__$1.className = new_class_name_25178;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__25179__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25171 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__25172 = null;var count__25173 = 0;var i__25174 = 0;while(true){
if((i__25174 < count__25173))
{var c = cljs.core._nth.call(null,chunk__25172,i__25174);remove_class_BANG_.call(null,elem__$1,c);
{
var G__25180 = seq__25171;
var G__25181 = chunk__25172;
var G__25182 = count__25173;
var G__25183 = (i__25174 + 1);
seq__25171 = G__25180;
chunk__25172 = G__25181;
count__25173 = G__25182;
i__25174 = G__25183;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25171);if(temp__4092__auto__)
{var seq__25171__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25171__$1))
{var c__8604__auto__ = cljs.core.chunk_first.call(null,seq__25171__$1);{
var G__25184 = cljs.core.chunk_rest.call(null,seq__25171__$1);
var G__25185 = c__8604__auto__;
var G__25186 = cljs.core.count.call(null,c__8604__auto__);
var G__25187 = 0;
seq__25171 = G__25184;
chunk__25172 = G__25185;
count__25173 = G__25186;
i__25174 = G__25187;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__25171__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__25188 = cljs.core.next.call(null,seq__25171__$1);
var G__25189 = null;
var G__25190 = 0;
var G__25191 = 0;
seq__25171 = G__25188;
chunk__25172 = G__25189;
count__25173 = G__25190;
i__25174 = G__25191;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__25179 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25179__delegate.call(this,elem,class$,classes);};
G__25179.cljs$lang$maxFixedArity = 2;
G__25179.cljs$lang$applyTo = (function (arglist__25192){
var elem = cljs.core.first(arglist__25192);
arglist__25192 = cljs.core.next(arglist__25192);
var class$ = cljs.core.first(arglist__25192);
var classes = cljs.core.rest(arglist__25192);
return G__25179__delegate(elem,class$,classes);
});
G__25179.cljs$core$IFn$_invoke$arity$variadic = G__25179__delegate;
return G__25179;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25193 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25193))
{var class_list_25194 = temp__4090__auto___25193;class_list_25194.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__25197){var vec__25198 = p__25197;var k = cljs.core.nth.call(null,vec__25198,0,null);var v = cljs.core.nth.call(null,vec__25198,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__25205_25211 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__25206_25212 = null;var count__25207_25213 = 0;var i__25208_25214 = 0;while(true){
if((i__25208_25214 < count__25207_25213))
{var vec__25209_25215 = cljs.core._nth.call(null,chunk__25206_25212,i__25208_25214);var k_25216 = cljs.core.nth.call(null,vec__25209_25215,0,null);var v_25217 = cljs.core.nth.call(null,vec__25209_25215,1,null);(style[cljs.core.name.call(null,k_25216)] = v_25217);
{
var G__25218 = seq__25205_25211;
var G__25219 = chunk__25206_25212;
var G__25220 = count__25207_25213;
var G__25221 = (i__25208_25214 + 1);
seq__25205_25211 = G__25218;
chunk__25206_25212 = G__25219;
count__25207_25213 = G__25220;
i__25208_25214 = G__25221;
continue;
}
} else
{var temp__4092__auto___25222 = cljs.core.seq.call(null,seq__25205_25211);if(temp__4092__auto___25222)
{var seq__25205_25223__$1 = temp__4092__auto___25222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25205_25223__$1))
{var c__8604__auto___25224 = cljs.core.chunk_first.call(null,seq__25205_25223__$1);{
var G__25225 = cljs.core.chunk_rest.call(null,seq__25205_25223__$1);
var G__25226 = c__8604__auto___25224;
var G__25227 = cljs.core.count.call(null,c__8604__auto___25224);
var G__25228 = 0;
seq__25205_25211 = G__25225;
chunk__25206_25212 = G__25226;
count__25207_25213 = G__25227;
i__25208_25214 = G__25228;
continue;
}
} else
{var vec__25210_25229 = cljs.core.first.call(null,seq__25205_25223__$1);var k_25230 = cljs.core.nth.call(null,vec__25210_25229,0,null);var v_25231 = cljs.core.nth.call(null,vec__25210_25229,1,null);(style[cljs.core.name.call(null,k_25230)] = v_25231);
{
var G__25232 = cljs.core.next.call(null,seq__25205_25223__$1);
var G__25233 = null;
var G__25234 = 0;
var G__25235 = 0;
seq__25205_25211 = G__25232;
chunk__25206_25212 = G__25233;
count__25207_25213 = G__25234;
i__25208_25214 = G__25235;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25236){
var elem = cljs.core.first(arglist__25236);
var kvs = cljs.core.rest(arglist__25236);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25243_25249 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__25244_25250 = null;var count__25245_25251 = 0;var i__25246_25252 = 0;while(true){
if((i__25246_25252 < count__25245_25251))
{var vec__25247_25253 = cljs.core._nth.call(null,chunk__25244_25250,i__25246_25252);var k_25254 = cljs.core.nth.call(null,vec__25247_25253,0,null);var v_25255 = cljs.core.nth.call(null,vec__25247_25253,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_25254,[cljs.core.str(v_25255),cljs.core.str("px")].join(''));
{
var G__25256 = seq__25243_25249;
var G__25257 = chunk__25244_25250;
var G__25258 = count__25245_25251;
var G__25259 = (i__25246_25252 + 1);
seq__25243_25249 = G__25256;
chunk__25244_25250 = G__25257;
count__25245_25251 = G__25258;
i__25246_25252 = G__25259;
continue;
}
} else
{var temp__4092__auto___25260 = cljs.core.seq.call(null,seq__25243_25249);if(temp__4092__auto___25260)
{var seq__25243_25261__$1 = temp__4092__auto___25260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25243_25261__$1))
{var c__8604__auto___25262 = cljs.core.chunk_first.call(null,seq__25243_25261__$1);{
var G__25263 = cljs.core.chunk_rest.call(null,seq__25243_25261__$1);
var G__25264 = c__8604__auto___25262;
var G__25265 = cljs.core.count.call(null,c__8604__auto___25262);
var G__25266 = 0;
seq__25243_25249 = G__25263;
chunk__25244_25250 = G__25264;
count__25245_25251 = G__25265;
i__25246_25252 = G__25266;
continue;
}
} else
{var vec__25248_25267 = cljs.core.first.call(null,seq__25243_25261__$1);var k_25268 = cljs.core.nth.call(null,vec__25248_25267,0,null);var v_25269 = cljs.core.nth.call(null,vec__25248_25267,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_25268,[cljs.core.str(v_25269),cljs.core.str("px")].join(''));
{
var G__25270 = cljs.core.next.call(null,seq__25243_25261__$1);
var G__25271 = null;
var G__25272 = 0;
var G__25273 = 0;
seq__25243_25249 = G__25270;
chunk__25244_25250 = G__25271;
count__25245_25251 = G__25272;
i__25246_25252 = G__25273;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__25274){
var elem = cljs.core.first(arglist__25274);
var kvs = cljs.core.rest(arglist__25274);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__25283 = dommy.template.__GT_node_like.call(null,elem);(G__25283[cljs.core.name.call(null,k)] = v);
return G__25283;
} else
{var G__25284 = dommy.template.__GT_node_like.call(null,elem);G__25284.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__25284;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__25291__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25285_25292 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__25286_25293 = null;var count__25287_25294 = 0;var i__25288_25295 = 0;while(true){
if((i__25288_25295 < count__25287_25294))
{var vec__25289_25296 = cljs.core._nth.call(null,chunk__25286_25293,i__25288_25295);var k_25297__$1 = cljs.core.nth.call(null,vec__25289_25296,0,null);var v_25298__$1 = cljs.core.nth.call(null,vec__25289_25296,1,null);set_attr_BANG_.call(null,elem__$1,k_25297__$1,v_25298__$1);
{
var G__25299 = seq__25285_25292;
var G__25300 = chunk__25286_25293;
var G__25301 = count__25287_25294;
var G__25302 = (i__25288_25295 + 1);
seq__25285_25292 = G__25299;
chunk__25286_25293 = G__25300;
count__25287_25294 = G__25301;
i__25288_25295 = G__25302;
continue;
}
} else
{var temp__4092__auto___25303 = cljs.core.seq.call(null,seq__25285_25292);if(temp__4092__auto___25303)
{var seq__25285_25304__$1 = temp__4092__auto___25303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25285_25304__$1))
{var c__8604__auto___25305 = cljs.core.chunk_first.call(null,seq__25285_25304__$1);{
var G__25306 = cljs.core.chunk_rest.call(null,seq__25285_25304__$1);
var G__25307 = c__8604__auto___25305;
var G__25308 = cljs.core.count.call(null,c__8604__auto___25305);
var G__25309 = 0;
seq__25285_25292 = G__25306;
chunk__25286_25293 = G__25307;
count__25287_25294 = G__25308;
i__25288_25295 = G__25309;
continue;
}
} else
{var vec__25290_25310 = cljs.core.first.call(null,seq__25285_25304__$1);var k_25311__$1 = cljs.core.nth.call(null,vec__25290_25310,0,null);var v_25312__$1 = cljs.core.nth.call(null,vec__25290_25310,1,null);set_attr_BANG_.call(null,elem__$1,k_25311__$1,v_25312__$1);
{
var G__25313 = cljs.core.next.call(null,seq__25285_25304__$1);
var G__25314 = null;
var G__25315 = 0;
var G__25316 = 0;
seq__25285_25292 = G__25313;
chunk__25286_25293 = G__25314;
count__25287_25294 = G__25315;
i__25288_25295 = G__25316;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__25291 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25291__delegate.call(this,elem,k,v,kvs);};
G__25291.cljs$lang$maxFixedArity = 3;
G__25291.cljs$lang$applyTo = (function (arglist__25317){
var elem = cljs.core.first(arglist__25317);
arglist__25317 = cljs.core.next(arglist__25317);
var k = cljs.core.first(arglist__25317);
arglist__25317 = cljs.core.next(arglist__25317);
var v = cljs.core.first(arglist__25317);
var kvs = cljs.core.rest(arglist__25317);
return G__25291__delegate(elem,k,v,kvs);
});
G__25291.cljs$core$IFn$_invoke$arity$variadic = G__25291__delegate;
return G__25291;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__25326__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25322_25327 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__25323_25328 = null;var count__25324_25329 = 0;var i__25325_25330 = 0;while(true){
if((i__25325_25330 < count__25324_25329))
{var k_25331__$1 = cljs.core._nth.call(null,chunk__25323_25328,i__25325_25330);remove_attr_BANG_.call(null,elem__$1,k_25331__$1);
{
var G__25332 = seq__25322_25327;
var G__25333 = chunk__25323_25328;
var G__25334 = count__25324_25329;
var G__25335 = (i__25325_25330 + 1);
seq__25322_25327 = G__25332;
chunk__25323_25328 = G__25333;
count__25324_25329 = G__25334;
i__25325_25330 = G__25335;
continue;
}
} else
{var temp__4092__auto___25336 = cljs.core.seq.call(null,seq__25322_25327);if(temp__4092__auto___25336)
{var seq__25322_25337__$1 = temp__4092__auto___25336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25322_25337__$1))
{var c__8604__auto___25338 = cljs.core.chunk_first.call(null,seq__25322_25337__$1);{
var G__25339 = cljs.core.chunk_rest.call(null,seq__25322_25337__$1);
var G__25340 = c__8604__auto___25338;
var G__25341 = cljs.core.count.call(null,c__8604__auto___25338);
var G__25342 = 0;
seq__25322_25327 = G__25339;
chunk__25323_25328 = G__25340;
count__25324_25329 = G__25341;
i__25325_25330 = G__25342;
continue;
}
} else
{var k_25343__$1 = cljs.core.first.call(null,seq__25322_25337__$1);remove_attr_BANG_.call(null,elem__$1,k_25343__$1);
{
var G__25344 = cljs.core.next.call(null,seq__25322_25337__$1);
var G__25345 = null;
var G__25346 = 0;
var G__25347 = 0;
seq__25322_25327 = G__25344;
chunk__25323_25328 = G__25345;
count__25324_25329 = G__25346;
i__25325_25330 = G__25347;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__25326 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25326__delegate.call(this,elem,k,ks);};
G__25326.cljs$lang$maxFixedArity = 2;
G__25326.cljs$lang$applyTo = (function (arglist__25348){
var elem = cljs.core.first(arglist__25348);
arglist__25348 = cljs.core.next(arglist__25348);
var k = cljs.core.first(arglist__25348);
var ks = cljs.core.rest(arglist__25348);
return G__25326__delegate(elem,k,ks);
});
G__25326.cljs$core$IFn$_invoke$arity$variadic = G__25326__delegate;
return G__25326;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__25350 = dommy.template.__GT_node_like.call(null,elem);G__25350.style.display = ((show_QMARK_)?"":"none");
return G__25350;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__25352 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__25352,false);
return G__25352;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__25354 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__25354,true);
return G__25354;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__25356 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__25356["constructor"] = Object);
return G__25356;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
