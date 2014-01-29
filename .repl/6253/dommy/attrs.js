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
var G__66142 = (i + class$.length);
start_from = G__66142;
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
{var temp__4090__auto___66167 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___66167))
{var class_list_66168 = temp__4090__auto___66167;var seq__66155_66169 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__66156_66170 = null;var count__66157_66171 = 0;var i__66158_66172 = 0;while(true){
if((i__66158_66172 < count__66157_66171))
{var class_66173 = cljs.core._nth.call(null,chunk__66156_66170,i__66158_66172);class_list_66168.add(class_66173);
{
var G__66174 = seq__66155_66169;
var G__66175 = chunk__66156_66170;
var G__66176 = count__66157_66171;
var G__66177 = (i__66158_66172 + 1);
seq__66155_66169 = G__66174;
chunk__66156_66170 = G__66175;
count__66157_66171 = G__66176;
i__66158_66172 = G__66177;
continue;
}
} else
{var temp__4092__auto___66178 = cljs.core.seq.call(null,seq__66155_66169);if(temp__4092__auto___66178)
{var seq__66155_66179__$1 = temp__4092__auto___66178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66155_66179__$1))
{var c__8604__auto___66180 = cljs.core.chunk_first.call(null,seq__66155_66179__$1);{
var G__66181 = cljs.core.chunk_rest.call(null,seq__66155_66179__$1);
var G__66182 = c__8604__auto___66180;
var G__66183 = cljs.core.count.call(null,c__8604__auto___66180);
var G__66184 = 0;
seq__66155_66169 = G__66181;
chunk__66156_66170 = G__66182;
count__66157_66171 = G__66183;
i__66158_66172 = G__66184;
continue;
}
} else
{var class_66185 = cljs.core.first.call(null,seq__66155_66179__$1);class_list_66168.add(class_66185);
{
var G__66186 = cljs.core.next.call(null,seq__66155_66179__$1);
var G__66187 = null;
var G__66188 = 0;
var G__66189 = 0;
seq__66155_66169 = G__66186;
chunk__66156_66170 = G__66187;
count__66157_66171 = G__66188;
i__66158_66172 = G__66189;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_66190 = elem__$1.className;var seq__66159_66191 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__66160_66192 = null;var count__66161_66193 = 0;var i__66162_66194 = 0;while(true){
if((i__66162_66194 < count__66161_66193))
{var class_66195 = cljs.core._nth.call(null,chunk__66160_66192,i__66162_66194);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_66190,class_66195)))
{} else
{elem__$1.className = (((class_name_66190 === ""))?class_66195:[cljs.core.str(class_name_66190),cljs.core.str(" "),cljs.core.str(class_66195)].join(''));
}
{
var G__66196 = seq__66159_66191;
var G__66197 = chunk__66160_66192;
var G__66198 = count__66161_66193;
var G__66199 = (i__66162_66194 + 1);
seq__66159_66191 = G__66196;
chunk__66160_66192 = G__66197;
count__66161_66193 = G__66198;
i__66162_66194 = G__66199;
continue;
}
} else
{var temp__4092__auto___66200 = cljs.core.seq.call(null,seq__66159_66191);if(temp__4092__auto___66200)
{var seq__66159_66201__$1 = temp__4092__auto___66200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66159_66201__$1))
{var c__8604__auto___66202 = cljs.core.chunk_first.call(null,seq__66159_66201__$1);{
var G__66203 = cljs.core.chunk_rest.call(null,seq__66159_66201__$1);
var G__66204 = c__8604__auto___66202;
var G__66205 = cljs.core.count.call(null,c__8604__auto___66202);
var G__66206 = 0;
seq__66159_66191 = G__66203;
chunk__66160_66192 = G__66204;
count__66161_66193 = G__66205;
i__66162_66194 = G__66206;
continue;
}
} else
{var class_66207 = cljs.core.first.call(null,seq__66159_66201__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_66190,class_66207)))
{} else
{elem__$1.className = (((class_name_66190 === ""))?class_66207:[cljs.core.str(class_name_66190),cljs.core.str(" "),cljs.core.str(class_66207)].join(''));
}
{
var G__66208 = cljs.core.next.call(null,seq__66159_66201__$1);
var G__66209 = null;
var G__66210 = 0;
var G__66211 = 0;
seq__66159_66191 = G__66208;
chunk__66160_66192 = G__66209;
count__66161_66193 = G__66210;
i__66162_66194 = G__66211;
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
var G__66212__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66163_66213 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__66164_66214 = null;var count__66165_66215 = 0;var i__66166_66216 = 0;while(true){
if((i__66166_66216 < count__66165_66215))
{var c_66217 = cljs.core._nth.call(null,chunk__66164_66214,i__66166_66216);add_class_BANG_.call(null,elem__$1,c_66217);
{
var G__66218 = seq__66163_66213;
var G__66219 = chunk__66164_66214;
var G__66220 = count__66165_66215;
var G__66221 = (i__66166_66216 + 1);
seq__66163_66213 = G__66218;
chunk__66164_66214 = G__66219;
count__66165_66215 = G__66220;
i__66166_66216 = G__66221;
continue;
}
} else
{var temp__4092__auto___66222 = cljs.core.seq.call(null,seq__66163_66213);if(temp__4092__auto___66222)
{var seq__66163_66223__$1 = temp__4092__auto___66222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66163_66223__$1))
{var c__8604__auto___66224 = cljs.core.chunk_first.call(null,seq__66163_66223__$1);{
var G__66225 = cljs.core.chunk_rest.call(null,seq__66163_66223__$1);
var G__66226 = c__8604__auto___66224;
var G__66227 = cljs.core.count.call(null,c__8604__auto___66224);
var G__66228 = 0;
seq__66163_66213 = G__66225;
chunk__66164_66214 = G__66226;
count__66165_66215 = G__66227;
i__66166_66216 = G__66228;
continue;
}
} else
{var c_66229 = cljs.core.first.call(null,seq__66163_66223__$1);add_class_BANG_.call(null,elem__$1,c_66229);
{
var G__66230 = cljs.core.next.call(null,seq__66163_66223__$1);
var G__66231 = null;
var G__66232 = 0;
var G__66233 = 0;
seq__66163_66213 = G__66230;
chunk__66164_66214 = G__66231;
count__66165_66215 = G__66232;
i__66166_66216 = G__66233;
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
var G__66212 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66212__delegate.call(this,elem,classes,more_classes);};
G__66212.cljs$lang$maxFixedArity = 2;
G__66212.cljs$lang$applyTo = (function (arglist__66234){
var elem = cljs.core.first(arglist__66234);
arglist__66234 = cljs.core.next(arglist__66234);
var classes = cljs.core.first(arglist__66234);
var more_classes = cljs.core.rest(arglist__66234);
return G__66212__delegate(elem,classes,more_classes);
});
G__66212.cljs$core$IFn$_invoke$arity$variadic = G__66212__delegate;
return G__66212;
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
var G__66235 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__66235;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___66244 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___66244))
{var class_list_66245 = temp__4090__auto___66244;class_list_66245.remove(class$__$1);
} else
{var class_name_66246 = elem__$1.className;var new_class_name_66247 = dommy.attrs.remove_class_str.call(null,class_name_66246,class$__$1);if((class_name_66246 === new_class_name_66247))
{} else
{elem__$1.className = new_class_name_66247;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__66248__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66240 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__66241 = null;var count__66242 = 0;var i__66243 = 0;while(true){
if((i__66243 < count__66242))
{var c = cljs.core._nth.call(null,chunk__66241,i__66243);remove_class_BANG_.call(null,elem__$1,c);
{
var G__66249 = seq__66240;
var G__66250 = chunk__66241;
var G__66251 = count__66242;
var G__66252 = (i__66243 + 1);
seq__66240 = G__66249;
chunk__66241 = G__66250;
count__66242 = G__66251;
i__66243 = G__66252;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__66240);if(temp__4092__auto__)
{var seq__66240__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66240__$1))
{var c__8604__auto__ = cljs.core.chunk_first.call(null,seq__66240__$1);{
var G__66253 = cljs.core.chunk_rest.call(null,seq__66240__$1);
var G__66254 = c__8604__auto__;
var G__66255 = cljs.core.count.call(null,c__8604__auto__);
var G__66256 = 0;
seq__66240 = G__66253;
chunk__66241 = G__66254;
count__66242 = G__66255;
i__66243 = G__66256;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__66240__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__66257 = cljs.core.next.call(null,seq__66240__$1);
var G__66258 = null;
var G__66259 = 0;
var G__66260 = 0;
seq__66240 = G__66257;
chunk__66241 = G__66258;
count__66242 = G__66259;
i__66243 = G__66260;
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
var G__66248 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66248__delegate.call(this,elem,class$,classes);};
G__66248.cljs$lang$maxFixedArity = 2;
G__66248.cljs$lang$applyTo = (function (arglist__66261){
var elem = cljs.core.first(arglist__66261);
arglist__66261 = cljs.core.next(arglist__66261);
var class$ = cljs.core.first(arglist__66261);
var classes = cljs.core.rest(arglist__66261);
return G__66248__delegate(elem,class$,classes);
});
G__66248.cljs$core$IFn$_invoke$arity$variadic = G__66248__delegate;
return G__66248;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___66262 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___66262))
{var class_list_66263 = temp__4090__auto___66262;class_list_66263.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__66266){var vec__66267 = p__66266;var k = cljs.core.nth.call(null,vec__66267,0,null);var v = cljs.core.nth.call(null,vec__66267,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__66274_66280 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__66275_66281 = null;var count__66276_66282 = 0;var i__66277_66283 = 0;while(true){
if((i__66277_66283 < count__66276_66282))
{var vec__66278_66284 = cljs.core._nth.call(null,chunk__66275_66281,i__66277_66283);var k_66285 = cljs.core.nth.call(null,vec__66278_66284,0,null);var v_66286 = cljs.core.nth.call(null,vec__66278_66284,1,null);(style[cljs.core.name.call(null,k_66285)] = v_66286);
{
var G__66287 = seq__66274_66280;
var G__66288 = chunk__66275_66281;
var G__66289 = count__66276_66282;
var G__66290 = (i__66277_66283 + 1);
seq__66274_66280 = G__66287;
chunk__66275_66281 = G__66288;
count__66276_66282 = G__66289;
i__66277_66283 = G__66290;
continue;
}
} else
{var temp__4092__auto___66291 = cljs.core.seq.call(null,seq__66274_66280);if(temp__4092__auto___66291)
{var seq__66274_66292__$1 = temp__4092__auto___66291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66274_66292__$1))
{var c__8604__auto___66293 = cljs.core.chunk_first.call(null,seq__66274_66292__$1);{
var G__66294 = cljs.core.chunk_rest.call(null,seq__66274_66292__$1);
var G__66295 = c__8604__auto___66293;
var G__66296 = cljs.core.count.call(null,c__8604__auto___66293);
var G__66297 = 0;
seq__66274_66280 = G__66294;
chunk__66275_66281 = G__66295;
count__66276_66282 = G__66296;
i__66277_66283 = G__66297;
continue;
}
} else
{var vec__66279_66298 = cljs.core.first.call(null,seq__66274_66292__$1);var k_66299 = cljs.core.nth.call(null,vec__66279_66298,0,null);var v_66300 = cljs.core.nth.call(null,vec__66279_66298,1,null);(style[cljs.core.name.call(null,k_66299)] = v_66300);
{
var G__66301 = cljs.core.next.call(null,seq__66274_66292__$1);
var G__66302 = null;
var G__66303 = 0;
var G__66304 = 0;
seq__66274_66280 = G__66301;
chunk__66275_66281 = G__66302;
count__66276_66282 = G__66303;
i__66277_66283 = G__66304;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__66305){
var elem = cljs.core.first(arglist__66305);
var kvs = cljs.core.rest(arglist__66305);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66312_66318 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__66313_66319 = null;var count__66314_66320 = 0;var i__66315_66321 = 0;while(true){
if((i__66315_66321 < count__66314_66320))
{var vec__66316_66322 = cljs.core._nth.call(null,chunk__66313_66319,i__66315_66321);var k_66323 = cljs.core.nth.call(null,vec__66316_66322,0,null);var v_66324 = cljs.core.nth.call(null,vec__66316_66322,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_66323,[cljs.core.str(v_66324),cljs.core.str("px")].join(''));
{
var G__66325 = seq__66312_66318;
var G__66326 = chunk__66313_66319;
var G__66327 = count__66314_66320;
var G__66328 = (i__66315_66321 + 1);
seq__66312_66318 = G__66325;
chunk__66313_66319 = G__66326;
count__66314_66320 = G__66327;
i__66315_66321 = G__66328;
continue;
}
} else
{var temp__4092__auto___66329 = cljs.core.seq.call(null,seq__66312_66318);if(temp__4092__auto___66329)
{var seq__66312_66330__$1 = temp__4092__auto___66329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66312_66330__$1))
{var c__8604__auto___66331 = cljs.core.chunk_first.call(null,seq__66312_66330__$1);{
var G__66332 = cljs.core.chunk_rest.call(null,seq__66312_66330__$1);
var G__66333 = c__8604__auto___66331;
var G__66334 = cljs.core.count.call(null,c__8604__auto___66331);
var G__66335 = 0;
seq__66312_66318 = G__66332;
chunk__66313_66319 = G__66333;
count__66314_66320 = G__66334;
i__66315_66321 = G__66335;
continue;
}
} else
{var vec__66317_66336 = cljs.core.first.call(null,seq__66312_66330__$1);var k_66337 = cljs.core.nth.call(null,vec__66317_66336,0,null);var v_66338 = cljs.core.nth.call(null,vec__66317_66336,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_66337,[cljs.core.str(v_66338),cljs.core.str("px")].join(''));
{
var G__66339 = cljs.core.next.call(null,seq__66312_66330__$1);
var G__66340 = null;
var G__66341 = 0;
var G__66342 = 0;
seq__66312_66318 = G__66339;
chunk__66313_66319 = G__66340;
count__66314_66320 = G__66341;
i__66315_66321 = G__66342;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__66343){
var elem = cljs.core.first(arglist__66343);
var kvs = cljs.core.rest(arglist__66343);
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
{var G__66352 = dommy.template.__GT_node_like.call(null,elem);(G__66352[cljs.core.name.call(null,k)] = v);
return G__66352;
} else
{var G__66353 = dommy.template.__GT_node_like.call(null,elem);G__66353.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__66353;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__66360__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66354_66361 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__66355_66362 = null;var count__66356_66363 = 0;var i__66357_66364 = 0;while(true){
if((i__66357_66364 < count__66356_66363))
{var vec__66358_66365 = cljs.core._nth.call(null,chunk__66355_66362,i__66357_66364);var k_66366__$1 = cljs.core.nth.call(null,vec__66358_66365,0,null);var v_66367__$1 = cljs.core.nth.call(null,vec__66358_66365,1,null);set_attr_BANG_.call(null,elem__$1,k_66366__$1,v_66367__$1);
{
var G__66368 = seq__66354_66361;
var G__66369 = chunk__66355_66362;
var G__66370 = count__66356_66363;
var G__66371 = (i__66357_66364 + 1);
seq__66354_66361 = G__66368;
chunk__66355_66362 = G__66369;
count__66356_66363 = G__66370;
i__66357_66364 = G__66371;
continue;
}
} else
{var temp__4092__auto___66372 = cljs.core.seq.call(null,seq__66354_66361);if(temp__4092__auto___66372)
{var seq__66354_66373__$1 = temp__4092__auto___66372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66354_66373__$1))
{var c__8604__auto___66374 = cljs.core.chunk_first.call(null,seq__66354_66373__$1);{
var G__66375 = cljs.core.chunk_rest.call(null,seq__66354_66373__$1);
var G__66376 = c__8604__auto___66374;
var G__66377 = cljs.core.count.call(null,c__8604__auto___66374);
var G__66378 = 0;
seq__66354_66361 = G__66375;
chunk__66355_66362 = G__66376;
count__66356_66363 = G__66377;
i__66357_66364 = G__66378;
continue;
}
} else
{var vec__66359_66379 = cljs.core.first.call(null,seq__66354_66373__$1);var k_66380__$1 = cljs.core.nth.call(null,vec__66359_66379,0,null);var v_66381__$1 = cljs.core.nth.call(null,vec__66359_66379,1,null);set_attr_BANG_.call(null,elem__$1,k_66380__$1,v_66381__$1);
{
var G__66382 = cljs.core.next.call(null,seq__66354_66373__$1);
var G__66383 = null;
var G__66384 = 0;
var G__66385 = 0;
seq__66354_66361 = G__66382;
chunk__66355_66362 = G__66383;
count__66356_66363 = G__66384;
i__66357_66364 = G__66385;
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
var G__66360 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__66360__delegate.call(this,elem,k,v,kvs);};
G__66360.cljs$lang$maxFixedArity = 3;
G__66360.cljs$lang$applyTo = (function (arglist__66386){
var elem = cljs.core.first(arglist__66386);
arglist__66386 = cljs.core.next(arglist__66386);
var k = cljs.core.first(arglist__66386);
arglist__66386 = cljs.core.next(arglist__66386);
var v = cljs.core.first(arglist__66386);
var kvs = cljs.core.rest(arglist__66386);
return G__66360__delegate(elem,k,v,kvs);
});
G__66360.cljs$core$IFn$_invoke$arity$variadic = G__66360__delegate;
return G__66360;
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
var G__66395__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__66391_66396 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__66392_66397 = null;var count__66393_66398 = 0;var i__66394_66399 = 0;while(true){
if((i__66394_66399 < count__66393_66398))
{var k_66400__$1 = cljs.core._nth.call(null,chunk__66392_66397,i__66394_66399);remove_attr_BANG_.call(null,elem__$1,k_66400__$1);
{
var G__66401 = seq__66391_66396;
var G__66402 = chunk__66392_66397;
var G__66403 = count__66393_66398;
var G__66404 = (i__66394_66399 + 1);
seq__66391_66396 = G__66401;
chunk__66392_66397 = G__66402;
count__66393_66398 = G__66403;
i__66394_66399 = G__66404;
continue;
}
} else
{var temp__4092__auto___66405 = cljs.core.seq.call(null,seq__66391_66396);if(temp__4092__auto___66405)
{var seq__66391_66406__$1 = temp__4092__auto___66405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66391_66406__$1))
{var c__8604__auto___66407 = cljs.core.chunk_first.call(null,seq__66391_66406__$1);{
var G__66408 = cljs.core.chunk_rest.call(null,seq__66391_66406__$1);
var G__66409 = c__8604__auto___66407;
var G__66410 = cljs.core.count.call(null,c__8604__auto___66407);
var G__66411 = 0;
seq__66391_66396 = G__66408;
chunk__66392_66397 = G__66409;
count__66393_66398 = G__66410;
i__66394_66399 = G__66411;
continue;
}
} else
{var k_66412__$1 = cljs.core.first.call(null,seq__66391_66406__$1);remove_attr_BANG_.call(null,elem__$1,k_66412__$1);
{
var G__66413 = cljs.core.next.call(null,seq__66391_66406__$1);
var G__66414 = null;
var G__66415 = 0;
var G__66416 = 0;
seq__66391_66396 = G__66413;
chunk__66392_66397 = G__66414;
count__66393_66398 = G__66415;
i__66394_66399 = G__66416;
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
var G__66395 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__66395__delegate.call(this,elem,k,ks);};
G__66395.cljs$lang$maxFixedArity = 2;
G__66395.cljs$lang$applyTo = (function (arglist__66417){
var elem = cljs.core.first(arglist__66417);
arglist__66417 = cljs.core.next(arglist__66417);
var k = cljs.core.first(arglist__66417);
var ks = cljs.core.rest(arglist__66417);
return G__66395__delegate(elem,k,ks);
});
G__66395.cljs$core$IFn$_invoke$arity$variadic = G__66395__delegate;
return G__66395;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__66419 = dommy.template.__GT_node_like.call(null,elem);G__66419.style.display = ((show_QMARK_)?"":"none");
return G__66419;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__66421 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__66421,false);
return G__66421;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__66423 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__66423,true);
return G__66423;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__66425 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__66425["constructor"] = Object);
return G__66425;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
