// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7838__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7838__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7838__auto__;
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
var G__24217 = (i + class$.length);
start_from = G__24217;
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
{var temp__4090__auto___24242 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___24242))
{var class_list_24243 = temp__4090__auto___24242;var seq__24230_24244 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__24231_24245 = null;var count__24232_24246 = 0;var i__24233_24247 = 0;while(true){
if((i__24233_24247 < count__24232_24246))
{var class_24248 = cljs.core._nth.call(null,chunk__24231_24245,i__24233_24247);class_list_24243.add(class_24248);
{
var G__24249 = seq__24230_24244;
var G__24250 = chunk__24231_24245;
var G__24251 = count__24232_24246;
var G__24252 = (i__24233_24247 + 1);
seq__24230_24244 = G__24249;
chunk__24231_24245 = G__24250;
count__24232_24246 = G__24251;
i__24233_24247 = G__24252;
continue;
}
} else
{var temp__4092__auto___24253 = cljs.core.seq.call(null,seq__24230_24244);if(temp__4092__auto___24253)
{var seq__24230_24254__$1 = temp__4092__auto___24253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24230_24254__$1))
{var c__8592__auto___24255 = cljs.core.chunk_first.call(null,seq__24230_24254__$1);{
var G__24256 = cljs.core.chunk_rest.call(null,seq__24230_24254__$1);
var G__24257 = c__8592__auto___24255;
var G__24258 = cljs.core.count.call(null,c__8592__auto___24255);
var G__24259 = 0;
seq__24230_24244 = G__24256;
chunk__24231_24245 = G__24257;
count__24232_24246 = G__24258;
i__24233_24247 = G__24259;
continue;
}
} else
{var class_24260 = cljs.core.first.call(null,seq__24230_24254__$1);class_list_24243.add(class_24260);
{
var G__24261 = cljs.core.next.call(null,seq__24230_24254__$1);
var G__24262 = null;
var G__24263 = 0;
var G__24264 = 0;
seq__24230_24244 = G__24261;
chunk__24231_24245 = G__24262;
count__24232_24246 = G__24263;
i__24233_24247 = G__24264;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_24265 = elem__$1.className;var seq__24234_24266 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__24235_24267 = null;var count__24236_24268 = 0;var i__24237_24269 = 0;while(true){
if((i__24237_24269 < count__24236_24268))
{var class_24270 = cljs.core._nth.call(null,chunk__24235_24267,i__24237_24269);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_24265,class_24270)))
{} else
{elem__$1.className = (((class_name_24265 === ""))?class_24270:[cljs.core.str(class_name_24265),cljs.core.str(" "),cljs.core.str(class_24270)].join(''));
}
{
var G__24271 = seq__24234_24266;
var G__24272 = chunk__24235_24267;
var G__24273 = count__24236_24268;
var G__24274 = (i__24237_24269 + 1);
seq__24234_24266 = G__24271;
chunk__24235_24267 = G__24272;
count__24236_24268 = G__24273;
i__24237_24269 = G__24274;
continue;
}
} else
{var temp__4092__auto___24275 = cljs.core.seq.call(null,seq__24234_24266);if(temp__4092__auto___24275)
{var seq__24234_24276__$1 = temp__4092__auto___24275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24234_24276__$1))
{var c__8592__auto___24277 = cljs.core.chunk_first.call(null,seq__24234_24276__$1);{
var G__24278 = cljs.core.chunk_rest.call(null,seq__24234_24276__$1);
var G__24279 = c__8592__auto___24277;
var G__24280 = cljs.core.count.call(null,c__8592__auto___24277);
var G__24281 = 0;
seq__24234_24266 = G__24278;
chunk__24235_24267 = G__24279;
count__24236_24268 = G__24280;
i__24237_24269 = G__24281;
continue;
}
} else
{var class_24282 = cljs.core.first.call(null,seq__24234_24276__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_24265,class_24282)))
{} else
{elem__$1.className = (((class_name_24265 === ""))?class_24282:[cljs.core.str(class_name_24265),cljs.core.str(" "),cljs.core.str(class_24282)].join(''));
}
{
var G__24283 = cljs.core.next.call(null,seq__24234_24276__$1);
var G__24284 = null;
var G__24285 = 0;
var G__24286 = 0;
seq__24234_24266 = G__24283;
chunk__24235_24267 = G__24284;
count__24236_24268 = G__24285;
i__24237_24269 = G__24286;
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
var G__24287__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__24238_24288 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__24239_24289 = null;var count__24240_24290 = 0;var i__24241_24291 = 0;while(true){
if((i__24241_24291 < count__24240_24290))
{var c_24292 = cljs.core._nth.call(null,chunk__24239_24289,i__24241_24291);add_class_BANG_.call(null,elem__$1,c_24292);
{
var G__24293 = seq__24238_24288;
var G__24294 = chunk__24239_24289;
var G__24295 = count__24240_24290;
var G__24296 = (i__24241_24291 + 1);
seq__24238_24288 = G__24293;
chunk__24239_24289 = G__24294;
count__24240_24290 = G__24295;
i__24241_24291 = G__24296;
continue;
}
} else
{var temp__4092__auto___24297 = cljs.core.seq.call(null,seq__24238_24288);if(temp__4092__auto___24297)
{var seq__24238_24298__$1 = temp__4092__auto___24297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24238_24298__$1))
{var c__8592__auto___24299 = cljs.core.chunk_first.call(null,seq__24238_24298__$1);{
var G__24300 = cljs.core.chunk_rest.call(null,seq__24238_24298__$1);
var G__24301 = c__8592__auto___24299;
var G__24302 = cljs.core.count.call(null,c__8592__auto___24299);
var G__24303 = 0;
seq__24238_24288 = G__24300;
chunk__24239_24289 = G__24301;
count__24240_24290 = G__24302;
i__24241_24291 = G__24303;
continue;
}
} else
{var c_24304 = cljs.core.first.call(null,seq__24238_24298__$1);add_class_BANG_.call(null,elem__$1,c_24304);
{
var G__24305 = cljs.core.next.call(null,seq__24238_24298__$1);
var G__24306 = null;
var G__24307 = 0;
var G__24308 = 0;
seq__24238_24288 = G__24305;
chunk__24239_24289 = G__24306;
count__24240_24290 = G__24307;
i__24241_24291 = G__24308;
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
var G__24287 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24287__delegate.call(this,elem,classes,more_classes);};
G__24287.cljs$lang$maxFixedArity = 2;
G__24287.cljs$lang$applyTo = (function (arglist__24309){
var elem = cljs.core.first(arglist__24309);
arglist__24309 = cljs.core.next(arglist__24309);
var classes = cljs.core.first(arglist__24309);
var more_classes = cljs.core.rest(arglist__24309);
return G__24287__delegate(elem,classes,more_classes);
});
G__24287.cljs$core$IFn$_invoke$arity$variadic = G__24287__delegate;
return G__24287;
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
var G__24310 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__24310;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___24319 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___24319))
{var class_list_24320 = temp__4090__auto___24319;class_list_24320.remove(class$__$1);
} else
{var class_name_24321 = elem__$1.className;var new_class_name_24322 = dommy.attrs.remove_class_str.call(null,class_name_24321,class$__$1);if((class_name_24321 === new_class_name_24322))
{} else
{elem__$1.className = new_class_name_24322;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__24323__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__24315 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__24316 = null;var count__24317 = 0;var i__24318 = 0;while(true){
if((i__24318 < count__24317))
{var c = cljs.core._nth.call(null,chunk__24316,i__24318);remove_class_BANG_.call(null,elem__$1,c);
{
var G__24324 = seq__24315;
var G__24325 = chunk__24316;
var G__24326 = count__24317;
var G__24327 = (i__24318 + 1);
seq__24315 = G__24324;
chunk__24316 = G__24325;
count__24317 = G__24326;
i__24318 = G__24327;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24315);if(temp__4092__auto__)
{var seq__24315__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24315__$1))
{var c__8592__auto__ = cljs.core.chunk_first.call(null,seq__24315__$1);{
var G__24328 = cljs.core.chunk_rest.call(null,seq__24315__$1);
var G__24329 = c__8592__auto__;
var G__24330 = cljs.core.count.call(null,c__8592__auto__);
var G__24331 = 0;
seq__24315 = G__24328;
chunk__24316 = G__24329;
count__24317 = G__24330;
i__24318 = G__24331;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__24315__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__24332 = cljs.core.next.call(null,seq__24315__$1);
var G__24333 = null;
var G__24334 = 0;
var G__24335 = 0;
seq__24315 = G__24332;
chunk__24316 = G__24333;
count__24317 = G__24334;
i__24318 = G__24335;
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
var G__24323 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24323__delegate.call(this,elem,class$,classes);};
G__24323.cljs$lang$maxFixedArity = 2;
G__24323.cljs$lang$applyTo = (function (arglist__24336){
var elem = cljs.core.first(arglist__24336);
arglist__24336 = cljs.core.next(arglist__24336);
var class$ = cljs.core.first(arglist__24336);
var classes = cljs.core.rest(arglist__24336);
return G__24323__delegate(elem,class$,classes);
});
G__24323.cljs$core$IFn$_invoke$arity$variadic = G__24323__delegate;
return G__24323;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___24337 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___24337))
{var class_list_24338 = temp__4090__auto___24337;class_list_24338.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__24341){var vec__24342 = p__24341;var k = cljs.core.nth.call(null,vec__24342,0,null);var v = cljs.core.nth.call(null,vec__24342,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__24349_24355 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__24350_24356 = null;var count__24351_24357 = 0;var i__24352_24358 = 0;while(true){
if((i__24352_24358 < count__24351_24357))
{var vec__24353_24359 = cljs.core._nth.call(null,chunk__24350_24356,i__24352_24358);var k_24360 = cljs.core.nth.call(null,vec__24353_24359,0,null);var v_24361 = cljs.core.nth.call(null,vec__24353_24359,1,null);(style[cljs.core.name.call(null,k_24360)] = v_24361);
{
var G__24362 = seq__24349_24355;
var G__24363 = chunk__24350_24356;
var G__24364 = count__24351_24357;
var G__24365 = (i__24352_24358 + 1);
seq__24349_24355 = G__24362;
chunk__24350_24356 = G__24363;
count__24351_24357 = G__24364;
i__24352_24358 = G__24365;
continue;
}
} else
{var temp__4092__auto___24366 = cljs.core.seq.call(null,seq__24349_24355);if(temp__4092__auto___24366)
{var seq__24349_24367__$1 = temp__4092__auto___24366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24349_24367__$1))
{var c__8592__auto___24368 = cljs.core.chunk_first.call(null,seq__24349_24367__$1);{
var G__24369 = cljs.core.chunk_rest.call(null,seq__24349_24367__$1);
var G__24370 = c__8592__auto___24368;
var G__24371 = cljs.core.count.call(null,c__8592__auto___24368);
var G__24372 = 0;
seq__24349_24355 = G__24369;
chunk__24350_24356 = G__24370;
count__24351_24357 = G__24371;
i__24352_24358 = G__24372;
continue;
}
} else
{var vec__24354_24373 = cljs.core.first.call(null,seq__24349_24367__$1);var k_24374 = cljs.core.nth.call(null,vec__24354_24373,0,null);var v_24375 = cljs.core.nth.call(null,vec__24354_24373,1,null);(style[cljs.core.name.call(null,k_24374)] = v_24375);
{
var G__24376 = cljs.core.next.call(null,seq__24349_24367__$1);
var G__24377 = null;
var G__24378 = 0;
var G__24379 = 0;
seq__24349_24355 = G__24376;
chunk__24350_24356 = G__24377;
count__24351_24357 = G__24378;
i__24352_24358 = G__24379;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24380){
var elem = cljs.core.first(arglist__24380);
var kvs = cljs.core.rest(arglist__24380);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__24387_24393 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__24388_24394 = null;var count__24389_24395 = 0;var i__24390_24396 = 0;while(true){
if((i__24390_24396 < count__24389_24395))
{var vec__24391_24397 = cljs.core._nth.call(null,chunk__24388_24394,i__24390_24396);var k_24398 = cljs.core.nth.call(null,vec__24391_24397,0,null);var v_24399 = cljs.core.nth.call(null,vec__24391_24397,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_24398,[cljs.core.str(v_24399),cljs.core.str("px")].join(''));
{
var G__24400 = seq__24387_24393;
var G__24401 = chunk__24388_24394;
var G__24402 = count__24389_24395;
var G__24403 = (i__24390_24396 + 1);
seq__24387_24393 = G__24400;
chunk__24388_24394 = G__24401;
count__24389_24395 = G__24402;
i__24390_24396 = G__24403;
continue;
}
} else
{var temp__4092__auto___24404 = cljs.core.seq.call(null,seq__24387_24393);if(temp__4092__auto___24404)
{var seq__24387_24405__$1 = temp__4092__auto___24404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24387_24405__$1))
{var c__8592__auto___24406 = cljs.core.chunk_first.call(null,seq__24387_24405__$1);{
var G__24407 = cljs.core.chunk_rest.call(null,seq__24387_24405__$1);
var G__24408 = c__8592__auto___24406;
var G__24409 = cljs.core.count.call(null,c__8592__auto___24406);
var G__24410 = 0;
seq__24387_24393 = G__24407;
chunk__24388_24394 = G__24408;
count__24389_24395 = G__24409;
i__24390_24396 = G__24410;
continue;
}
} else
{var vec__24392_24411 = cljs.core.first.call(null,seq__24387_24405__$1);var k_24412 = cljs.core.nth.call(null,vec__24392_24411,0,null);var v_24413 = cljs.core.nth.call(null,vec__24392_24411,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_24412,[cljs.core.str(v_24413),cljs.core.str("px")].join(''));
{
var G__24414 = cljs.core.next.call(null,seq__24387_24405__$1);
var G__24415 = null;
var G__24416 = 0;
var G__24417 = 0;
seq__24387_24393 = G__24414;
chunk__24388_24394 = G__24415;
count__24389_24395 = G__24416;
i__24390_24396 = G__24417;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__24418){
var elem = cljs.core.first(arglist__24418);
var kvs = cljs.core.rest(arglist__24418);
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
{var G__24427 = dommy.template.__GT_node_like.call(null,elem);(G__24427[cljs.core.name.call(null,k)] = v);
return G__24427;
} else
{var G__24428 = dommy.template.__GT_node_like.call(null,elem);G__24428.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__24428;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__24435__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__24429_24436 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__24430_24437 = null;var count__24431_24438 = 0;var i__24432_24439 = 0;while(true){
if((i__24432_24439 < count__24431_24438))
{var vec__24433_24440 = cljs.core._nth.call(null,chunk__24430_24437,i__24432_24439);var k_24441__$1 = cljs.core.nth.call(null,vec__24433_24440,0,null);var v_24442__$1 = cljs.core.nth.call(null,vec__24433_24440,1,null);set_attr_BANG_.call(null,elem__$1,k_24441__$1,v_24442__$1);
{
var G__24443 = seq__24429_24436;
var G__24444 = chunk__24430_24437;
var G__24445 = count__24431_24438;
var G__24446 = (i__24432_24439 + 1);
seq__24429_24436 = G__24443;
chunk__24430_24437 = G__24444;
count__24431_24438 = G__24445;
i__24432_24439 = G__24446;
continue;
}
} else
{var temp__4092__auto___24447 = cljs.core.seq.call(null,seq__24429_24436);if(temp__4092__auto___24447)
{var seq__24429_24448__$1 = temp__4092__auto___24447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24429_24448__$1))
{var c__8592__auto___24449 = cljs.core.chunk_first.call(null,seq__24429_24448__$1);{
var G__24450 = cljs.core.chunk_rest.call(null,seq__24429_24448__$1);
var G__24451 = c__8592__auto___24449;
var G__24452 = cljs.core.count.call(null,c__8592__auto___24449);
var G__24453 = 0;
seq__24429_24436 = G__24450;
chunk__24430_24437 = G__24451;
count__24431_24438 = G__24452;
i__24432_24439 = G__24453;
continue;
}
} else
{var vec__24434_24454 = cljs.core.first.call(null,seq__24429_24448__$1);var k_24455__$1 = cljs.core.nth.call(null,vec__24434_24454,0,null);var v_24456__$1 = cljs.core.nth.call(null,vec__24434_24454,1,null);set_attr_BANG_.call(null,elem__$1,k_24455__$1,v_24456__$1);
{
var G__24457 = cljs.core.next.call(null,seq__24429_24448__$1);
var G__24458 = null;
var G__24459 = 0;
var G__24460 = 0;
seq__24429_24436 = G__24457;
chunk__24430_24437 = G__24458;
count__24431_24438 = G__24459;
i__24432_24439 = G__24460;
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
var G__24435 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24435__delegate.call(this,elem,k,v,kvs);};
G__24435.cljs$lang$maxFixedArity = 3;
G__24435.cljs$lang$applyTo = (function (arglist__24461){
var elem = cljs.core.first(arglist__24461);
arglist__24461 = cljs.core.next(arglist__24461);
var k = cljs.core.first(arglist__24461);
arglist__24461 = cljs.core.next(arglist__24461);
var v = cljs.core.first(arglist__24461);
var kvs = cljs.core.rest(arglist__24461);
return G__24435__delegate(elem,k,v,kvs);
});
G__24435.cljs$core$IFn$_invoke$arity$variadic = G__24435__delegate;
return G__24435;
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
var G__24470__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__24466_24471 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__24467_24472 = null;var count__24468_24473 = 0;var i__24469_24474 = 0;while(true){
if((i__24469_24474 < count__24468_24473))
{var k_24475__$1 = cljs.core._nth.call(null,chunk__24467_24472,i__24469_24474);remove_attr_BANG_.call(null,elem__$1,k_24475__$1);
{
var G__24476 = seq__24466_24471;
var G__24477 = chunk__24467_24472;
var G__24478 = count__24468_24473;
var G__24479 = (i__24469_24474 + 1);
seq__24466_24471 = G__24476;
chunk__24467_24472 = G__24477;
count__24468_24473 = G__24478;
i__24469_24474 = G__24479;
continue;
}
} else
{var temp__4092__auto___24480 = cljs.core.seq.call(null,seq__24466_24471);if(temp__4092__auto___24480)
{var seq__24466_24481__$1 = temp__4092__auto___24480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24466_24481__$1))
{var c__8592__auto___24482 = cljs.core.chunk_first.call(null,seq__24466_24481__$1);{
var G__24483 = cljs.core.chunk_rest.call(null,seq__24466_24481__$1);
var G__24484 = c__8592__auto___24482;
var G__24485 = cljs.core.count.call(null,c__8592__auto___24482);
var G__24486 = 0;
seq__24466_24471 = G__24483;
chunk__24467_24472 = G__24484;
count__24468_24473 = G__24485;
i__24469_24474 = G__24486;
continue;
}
} else
{var k_24487__$1 = cljs.core.first.call(null,seq__24466_24481__$1);remove_attr_BANG_.call(null,elem__$1,k_24487__$1);
{
var G__24488 = cljs.core.next.call(null,seq__24466_24481__$1);
var G__24489 = null;
var G__24490 = 0;
var G__24491 = 0;
seq__24466_24471 = G__24488;
chunk__24467_24472 = G__24489;
count__24468_24473 = G__24490;
i__24469_24474 = G__24491;
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
var G__24470 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24470__delegate.call(this,elem,k,ks);};
G__24470.cljs$lang$maxFixedArity = 2;
G__24470.cljs$lang$applyTo = (function (arglist__24492){
var elem = cljs.core.first(arglist__24492);
arglist__24492 = cljs.core.next(arglist__24492);
var k = cljs.core.first(arglist__24492);
var ks = cljs.core.rest(arglist__24492);
return G__24470__delegate(elem,k,ks);
});
G__24470.cljs$core$IFn$_invoke$arity$variadic = G__24470__delegate;
return G__24470;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__24494 = dommy.template.__GT_node_like.call(null,elem);G__24494.style.display = ((show_QMARK_)?"":"none");
return G__24494;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__24496 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__24496,false);
return G__24496;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__24498 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__24498,true);
return G__24498;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__24500 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__24500["constructor"] = Object);
return G__24500;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
