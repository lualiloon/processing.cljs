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
var G__31306 = (i + class$.length);
start_from = G__31306;
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
{var temp__4090__auto___31331 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___31331))
{var class_list_31332 = temp__4090__auto___31331;var seq__31319_31333 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__31320_31334 = null;var count__31321_31335 = 0;var i__31322_31336 = 0;while(true){
if((i__31322_31336 < count__31321_31335))
{var class_31337 = cljs.core._nth.call(null,chunk__31320_31334,i__31322_31336);class_list_31332.add(class_31337);
{
var G__31338 = seq__31319_31333;
var G__31339 = chunk__31320_31334;
var G__31340 = count__31321_31335;
var G__31341 = (i__31322_31336 + 1);
seq__31319_31333 = G__31338;
chunk__31320_31334 = G__31339;
count__31321_31335 = G__31340;
i__31322_31336 = G__31341;
continue;
}
} else
{var temp__4092__auto___31342 = cljs.core.seq.call(null,seq__31319_31333);if(temp__4092__auto___31342)
{var seq__31319_31343__$1 = temp__4092__auto___31342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31319_31343__$1))
{var c__8592__auto___31344 = cljs.core.chunk_first.call(null,seq__31319_31343__$1);{
var G__31345 = cljs.core.chunk_rest.call(null,seq__31319_31343__$1);
var G__31346 = c__8592__auto___31344;
var G__31347 = cljs.core.count.call(null,c__8592__auto___31344);
var G__31348 = 0;
seq__31319_31333 = G__31345;
chunk__31320_31334 = G__31346;
count__31321_31335 = G__31347;
i__31322_31336 = G__31348;
continue;
}
} else
{var class_31349 = cljs.core.first.call(null,seq__31319_31343__$1);class_list_31332.add(class_31349);
{
var G__31350 = cljs.core.next.call(null,seq__31319_31343__$1);
var G__31351 = null;
var G__31352 = 0;
var G__31353 = 0;
seq__31319_31333 = G__31350;
chunk__31320_31334 = G__31351;
count__31321_31335 = G__31352;
i__31322_31336 = G__31353;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_31354 = elem__$1.className;var seq__31323_31355 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__31324_31356 = null;var count__31325_31357 = 0;var i__31326_31358 = 0;while(true){
if((i__31326_31358 < count__31325_31357))
{var class_31359 = cljs.core._nth.call(null,chunk__31324_31356,i__31326_31358);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_31354,class_31359)))
{} else
{elem__$1.className = (((class_name_31354 === ""))?class_31359:[cljs.core.str(class_name_31354),cljs.core.str(" "),cljs.core.str(class_31359)].join(''));
}
{
var G__31360 = seq__31323_31355;
var G__31361 = chunk__31324_31356;
var G__31362 = count__31325_31357;
var G__31363 = (i__31326_31358 + 1);
seq__31323_31355 = G__31360;
chunk__31324_31356 = G__31361;
count__31325_31357 = G__31362;
i__31326_31358 = G__31363;
continue;
}
} else
{var temp__4092__auto___31364 = cljs.core.seq.call(null,seq__31323_31355);if(temp__4092__auto___31364)
{var seq__31323_31365__$1 = temp__4092__auto___31364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31323_31365__$1))
{var c__8592__auto___31366 = cljs.core.chunk_first.call(null,seq__31323_31365__$1);{
var G__31367 = cljs.core.chunk_rest.call(null,seq__31323_31365__$1);
var G__31368 = c__8592__auto___31366;
var G__31369 = cljs.core.count.call(null,c__8592__auto___31366);
var G__31370 = 0;
seq__31323_31355 = G__31367;
chunk__31324_31356 = G__31368;
count__31325_31357 = G__31369;
i__31326_31358 = G__31370;
continue;
}
} else
{var class_31371 = cljs.core.first.call(null,seq__31323_31365__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_31354,class_31371)))
{} else
{elem__$1.className = (((class_name_31354 === ""))?class_31371:[cljs.core.str(class_name_31354),cljs.core.str(" "),cljs.core.str(class_31371)].join(''));
}
{
var G__31372 = cljs.core.next.call(null,seq__31323_31365__$1);
var G__31373 = null;
var G__31374 = 0;
var G__31375 = 0;
seq__31323_31355 = G__31372;
chunk__31324_31356 = G__31373;
count__31325_31357 = G__31374;
i__31326_31358 = G__31375;
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
var G__31376__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31327_31377 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__31328_31378 = null;var count__31329_31379 = 0;var i__31330_31380 = 0;while(true){
if((i__31330_31380 < count__31329_31379))
{var c_31381 = cljs.core._nth.call(null,chunk__31328_31378,i__31330_31380);add_class_BANG_.call(null,elem__$1,c_31381);
{
var G__31382 = seq__31327_31377;
var G__31383 = chunk__31328_31378;
var G__31384 = count__31329_31379;
var G__31385 = (i__31330_31380 + 1);
seq__31327_31377 = G__31382;
chunk__31328_31378 = G__31383;
count__31329_31379 = G__31384;
i__31330_31380 = G__31385;
continue;
}
} else
{var temp__4092__auto___31386 = cljs.core.seq.call(null,seq__31327_31377);if(temp__4092__auto___31386)
{var seq__31327_31387__$1 = temp__4092__auto___31386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31327_31387__$1))
{var c__8592__auto___31388 = cljs.core.chunk_first.call(null,seq__31327_31387__$1);{
var G__31389 = cljs.core.chunk_rest.call(null,seq__31327_31387__$1);
var G__31390 = c__8592__auto___31388;
var G__31391 = cljs.core.count.call(null,c__8592__auto___31388);
var G__31392 = 0;
seq__31327_31377 = G__31389;
chunk__31328_31378 = G__31390;
count__31329_31379 = G__31391;
i__31330_31380 = G__31392;
continue;
}
} else
{var c_31393 = cljs.core.first.call(null,seq__31327_31387__$1);add_class_BANG_.call(null,elem__$1,c_31393);
{
var G__31394 = cljs.core.next.call(null,seq__31327_31387__$1);
var G__31395 = null;
var G__31396 = 0;
var G__31397 = 0;
seq__31327_31377 = G__31394;
chunk__31328_31378 = G__31395;
count__31329_31379 = G__31396;
i__31330_31380 = G__31397;
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
var G__31376 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31376__delegate.call(this,elem,classes,more_classes);};
G__31376.cljs$lang$maxFixedArity = 2;
G__31376.cljs$lang$applyTo = (function (arglist__31398){
var elem = cljs.core.first(arglist__31398);
arglist__31398 = cljs.core.next(arglist__31398);
var classes = cljs.core.first(arglist__31398);
var more_classes = cljs.core.rest(arglist__31398);
return G__31376__delegate(elem,classes,more_classes);
});
G__31376.cljs$core$IFn$_invoke$arity$variadic = G__31376__delegate;
return G__31376;
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
var G__31399 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__31399;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___31408 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___31408))
{var class_list_31409 = temp__4090__auto___31408;class_list_31409.remove(class$__$1);
} else
{var class_name_31410 = elem__$1.className;var new_class_name_31411 = dommy.attrs.remove_class_str.call(null,class_name_31410,class$__$1);if((class_name_31410 === new_class_name_31411))
{} else
{elem__$1.className = new_class_name_31411;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__31412__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31404 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__31405 = null;var count__31406 = 0;var i__31407 = 0;while(true){
if((i__31407 < count__31406))
{var c = cljs.core._nth.call(null,chunk__31405,i__31407);remove_class_BANG_.call(null,elem__$1,c);
{
var G__31413 = seq__31404;
var G__31414 = chunk__31405;
var G__31415 = count__31406;
var G__31416 = (i__31407 + 1);
seq__31404 = G__31413;
chunk__31405 = G__31414;
count__31406 = G__31415;
i__31407 = G__31416;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31404);if(temp__4092__auto__)
{var seq__31404__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31404__$1))
{var c__8592__auto__ = cljs.core.chunk_first.call(null,seq__31404__$1);{
var G__31417 = cljs.core.chunk_rest.call(null,seq__31404__$1);
var G__31418 = c__8592__auto__;
var G__31419 = cljs.core.count.call(null,c__8592__auto__);
var G__31420 = 0;
seq__31404 = G__31417;
chunk__31405 = G__31418;
count__31406 = G__31419;
i__31407 = G__31420;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__31404__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__31421 = cljs.core.next.call(null,seq__31404__$1);
var G__31422 = null;
var G__31423 = 0;
var G__31424 = 0;
seq__31404 = G__31421;
chunk__31405 = G__31422;
count__31406 = G__31423;
i__31407 = G__31424;
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
var G__31412 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31412__delegate.call(this,elem,class$,classes);};
G__31412.cljs$lang$maxFixedArity = 2;
G__31412.cljs$lang$applyTo = (function (arglist__31425){
var elem = cljs.core.first(arglist__31425);
arglist__31425 = cljs.core.next(arglist__31425);
var class$ = cljs.core.first(arglist__31425);
var classes = cljs.core.rest(arglist__31425);
return G__31412__delegate(elem,class$,classes);
});
G__31412.cljs$core$IFn$_invoke$arity$variadic = G__31412__delegate;
return G__31412;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___31426 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___31426))
{var class_list_31427 = temp__4090__auto___31426;class_list_31427.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__31430){var vec__31431 = p__31430;var k = cljs.core.nth.call(null,vec__31431,0,null);var v = cljs.core.nth.call(null,vec__31431,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__31438_31444 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__31439_31445 = null;var count__31440_31446 = 0;var i__31441_31447 = 0;while(true){
if((i__31441_31447 < count__31440_31446))
{var vec__31442_31448 = cljs.core._nth.call(null,chunk__31439_31445,i__31441_31447);var k_31449 = cljs.core.nth.call(null,vec__31442_31448,0,null);var v_31450 = cljs.core.nth.call(null,vec__31442_31448,1,null);(style[cljs.core.name.call(null,k_31449)] = v_31450);
{
var G__31451 = seq__31438_31444;
var G__31452 = chunk__31439_31445;
var G__31453 = count__31440_31446;
var G__31454 = (i__31441_31447 + 1);
seq__31438_31444 = G__31451;
chunk__31439_31445 = G__31452;
count__31440_31446 = G__31453;
i__31441_31447 = G__31454;
continue;
}
} else
{var temp__4092__auto___31455 = cljs.core.seq.call(null,seq__31438_31444);if(temp__4092__auto___31455)
{var seq__31438_31456__$1 = temp__4092__auto___31455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31438_31456__$1))
{var c__8592__auto___31457 = cljs.core.chunk_first.call(null,seq__31438_31456__$1);{
var G__31458 = cljs.core.chunk_rest.call(null,seq__31438_31456__$1);
var G__31459 = c__8592__auto___31457;
var G__31460 = cljs.core.count.call(null,c__8592__auto___31457);
var G__31461 = 0;
seq__31438_31444 = G__31458;
chunk__31439_31445 = G__31459;
count__31440_31446 = G__31460;
i__31441_31447 = G__31461;
continue;
}
} else
{var vec__31443_31462 = cljs.core.first.call(null,seq__31438_31456__$1);var k_31463 = cljs.core.nth.call(null,vec__31443_31462,0,null);var v_31464 = cljs.core.nth.call(null,vec__31443_31462,1,null);(style[cljs.core.name.call(null,k_31463)] = v_31464);
{
var G__31465 = cljs.core.next.call(null,seq__31438_31456__$1);
var G__31466 = null;
var G__31467 = 0;
var G__31468 = 0;
seq__31438_31444 = G__31465;
chunk__31439_31445 = G__31466;
count__31440_31446 = G__31467;
i__31441_31447 = G__31468;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31469){
var elem = cljs.core.first(arglist__31469);
var kvs = cljs.core.rest(arglist__31469);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31476_31482 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__31477_31483 = null;var count__31478_31484 = 0;var i__31479_31485 = 0;while(true){
if((i__31479_31485 < count__31478_31484))
{var vec__31480_31486 = cljs.core._nth.call(null,chunk__31477_31483,i__31479_31485);var k_31487 = cljs.core.nth.call(null,vec__31480_31486,0,null);var v_31488 = cljs.core.nth.call(null,vec__31480_31486,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_31487,[cljs.core.str(v_31488),cljs.core.str("px")].join(''));
{
var G__31489 = seq__31476_31482;
var G__31490 = chunk__31477_31483;
var G__31491 = count__31478_31484;
var G__31492 = (i__31479_31485 + 1);
seq__31476_31482 = G__31489;
chunk__31477_31483 = G__31490;
count__31478_31484 = G__31491;
i__31479_31485 = G__31492;
continue;
}
} else
{var temp__4092__auto___31493 = cljs.core.seq.call(null,seq__31476_31482);if(temp__4092__auto___31493)
{var seq__31476_31494__$1 = temp__4092__auto___31493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31476_31494__$1))
{var c__8592__auto___31495 = cljs.core.chunk_first.call(null,seq__31476_31494__$1);{
var G__31496 = cljs.core.chunk_rest.call(null,seq__31476_31494__$1);
var G__31497 = c__8592__auto___31495;
var G__31498 = cljs.core.count.call(null,c__8592__auto___31495);
var G__31499 = 0;
seq__31476_31482 = G__31496;
chunk__31477_31483 = G__31497;
count__31478_31484 = G__31498;
i__31479_31485 = G__31499;
continue;
}
} else
{var vec__31481_31500 = cljs.core.first.call(null,seq__31476_31494__$1);var k_31501 = cljs.core.nth.call(null,vec__31481_31500,0,null);var v_31502 = cljs.core.nth.call(null,vec__31481_31500,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_31501,[cljs.core.str(v_31502),cljs.core.str("px")].join(''));
{
var G__31503 = cljs.core.next.call(null,seq__31476_31494__$1);
var G__31504 = null;
var G__31505 = 0;
var G__31506 = 0;
seq__31476_31482 = G__31503;
chunk__31477_31483 = G__31504;
count__31478_31484 = G__31505;
i__31479_31485 = G__31506;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__31507){
var elem = cljs.core.first(arglist__31507);
var kvs = cljs.core.rest(arglist__31507);
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
{var G__31516 = dommy.template.__GT_node_like.call(null,elem);(G__31516[cljs.core.name.call(null,k)] = v);
return G__31516;
} else
{var G__31517 = dommy.template.__GT_node_like.call(null,elem);G__31517.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__31517;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__31524__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31518_31525 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__31519_31526 = null;var count__31520_31527 = 0;var i__31521_31528 = 0;while(true){
if((i__31521_31528 < count__31520_31527))
{var vec__31522_31529 = cljs.core._nth.call(null,chunk__31519_31526,i__31521_31528);var k_31530__$1 = cljs.core.nth.call(null,vec__31522_31529,0,null);var v_31531__$1 = cljs.core.nth.call(null,vec__31522_31529,1,null);set_attr_BANG_.call(null,elem__$1,k_31530__$1,v_31531__$1);
{
var G__31532 = seq__31518_31525;
var G__31533 = chunk__31519_31526;
var G__31534 = count__31520_31527;
var G__31535 = (i__31521_31528 + 1);
seq__31518_31525 = G__31532;
chunk__31519_31526 = G__31533;
count__31520_31527 = G__31534;
i__31521_31528 = G__31535;
continue;
}
} else
{var temp__4092__auto___31536 = cljs.core.seq.call(null,seq__31518_31525);if(temp__4092__auto___31536)
{var seq__31518_31537__$1 = temp__4092__auto___31536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31518_31537__$1))
{var c__8592__auto___31538 = cljs.core.chunk_first.call(null,seq__31518_31537__$1);{
var G__31539 = cljs.core.chunk_rest.call(null,seq__31518_31537__$1);
var G__31540 = c__8592__auto___31538;
var G__31541 = cljs.core.count.call(null,c__8592__auto___31538);
var G__31542 = 0;
seq__31518_31525 = G__31539;
chunk__31519_31526 = G__31540;
count__31520_31527 = G__31541;
i__31521_31528 = G__31542;
continue;
}
} else
{var vec__31523_31543 = cljs.core.first.call(null,seq__31518_31537__$1);var k_31544__$1 = cljs.core.nth.call(null,vec__31523_31543,0,null);var v_31545__$1 = cljs.core.nth.call(null,vec__31523_31543,1,null);set_attr_BANG_.call(null,elem__$1,k_31544__$1,v_31545__$1);
{
var G__31546 = cljs.core.next.call(null,seq__31518_31537__$1);
var G__31547 = null;
var G__31548 = 0;
var G__31549 = 0;
seq__31518_31525 = G__31546;
chunk__31519_31526 = G__31547;
count__31520_31527 = G__31548;
i__31521_31528 = G__31549;
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
var G__31524 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__31524__delegate.call(this,elem,k,v,kvs);};
G__31524.cljs$lang$maxFixedArity = 3;
G__31524.cljs$lang$applyTo = (function (arglist__31550){
var elem = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var k = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var v = cljs.core.first(arglist__31550);
var kvs = cljs.core.rest(arglist__31550);
return G__31524__delegate(elem,k,v,kvs);
});
G__31524.cljs$core$IFn$_invoke$arity$variadic = G__31524__delegate;
return G__31524;
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
var G__31559__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31555_31560 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__31556_31561 = null;var count__31557_31562 = 0;var i__31558_31563 = 0;while(true){
if((i__31558_31563 < count__31557_31562))
{var k_31564__$1 = cljs.core._nth.call(null,chunk__31556_31561,i__31558_31563);remove_attr_BANG_.call(null,elem__$1,k_31564__$1);
{
var G__31565 = seq__31555_31560;
var G__31566 = chunk__31556_31561;
var G__31567 = count__31557_31562;
var G__31568 = (i__31558_31563 + 1);
seq__31555_31560 = G__31565;
chunk__31556_31561 = G__31566;
count__31557_31562 = G__31567;
i__31558_31563 = G__31568;
continue;
}
} else
{var temp__4092__auto___31569 = cljs.core.seq.call(null,seq__31555_31560);if(temp__4092__auto___31569)
{var seq__31555_31570__$1 = temp__4092__auto___31569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31555_31570__$1))
{var c__8592__auto___31571 = cljs.core.chunk_first.call(null,seq__31555_31570__$1);{
var G__31572 = cljs.core.chunk_rest.call(null,seq__31555_31570__$1);
var G__31573 = c__8592__auto___31571;
var G__31574 = cljs.core.count.call(null,c__8592__auto___31571);
var G__31575 = 0;
seq__31555_31560 = G__31572;
chunk__31556_31561 = G__31573;
count__31557_31562 = G__31574;
i__31558_31563 = G__31575;
continue;
}
} else
{var k_31576__$1 = cljs.core.first.call(null,seq__31555_31570__$1);remove_attr_BANG_.call(null,elem__$1,k_31576__$1);
{
var G__31577 = cljs.core.next.call(null,seq__31555_31570__$1);
var G__31578 = null;
var G__31579 = 0;
var G__31580 = 0;
seq__31555_31560 = G__31577;
chunk__31556_31561 = G__31578;
count__31557_31562 = G__31579;
i__31558_31563 = G__31580;
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
var G__31559 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31559__delegate.call(this,elem,k,ks);};
G__31559.cljs$lang$maxFixedArity = 2;
G__31559.cljs$lang$applyTo = (function (arglist__31581){
var elem = cljs.core.first(arglist__31581);
arglist__31581 = cljs.core.next(arglist__31581);
var k = cljs.core.first(arglist__31581);
var ks = cljs.core.rest(arglist__31581);
return G__31559__delegate(elem,k,ks);
});
G__31559.cljs$core$IFn$_invoke$arity$variadic = G__31559__delegate;
return G__31559;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__31583 = dommy.template.__GT_node_like.call(null,elem);G__31583.style.display = ((show_QMARK_)?"":"none");
return G__31583;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__31585 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__31585,false);
return G__31585;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__31587 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__31587,true);
return G__31587;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__31589 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__31589["constructor"] = Object);
return G__31589;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
