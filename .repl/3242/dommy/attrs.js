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
var G__52313 = (i + class$.length);
start_from = G__52313;
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
{var temp__4090__auto___52338 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___52338))
{var class_list_52339 = temp__4090__auto___52338;var seq__52326_52340 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__52327_52341 = null;var count__52328_52342 = 0;var i__52329_52343 = 0;while(true){
if((i__52329_52343 < count__52328_52342))
{var class_52344 = cljs.core._nth.call(null,chunk__52327_52341,i__52329_52343);class_list_52339.add(class_52344);
{
var G__52345 = seq__52326_52340;
var G__52346 = chunk__52327_52341;
var G__52347 = count__52328_52342;
var G__52348 = (i__52329_52343 + 1);
seq__52326_52340 = G__52345;
chunk__52327_52341 = G__52346;
count__52328_52342 = G__52347;
i__52329_52343 = G__52348;
continue;
}
} else
{var temp__4092__auto___52349 = cljs.core.seq.call(null,seq__52326_52340);if(temp__4092__auto___52349)
{var seq__52326_52350__$1 = temp__4092__auto___52349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52326_52350__$1))
{var c__8604__auto___52351 = cljs.core.chunk_first.call(null,seq__52326_52350__$1);{
var G__52352 = cljs.core.chunk_rest.call(null,seq__52326_52350__$1);
var G__52353 = c__8604__auto___52351;
var G__52354 = cljs.core.count.call(null,c__8604__auto___52351);
var G__52355 = 0;
seq__52326_52340 = G__52352;
chunk__52327_52341 = G__52353;
count__52328_52342 = G__52354;
i__52329_52343 = G__52355;
continue;
}
} else
{var class_52356 = cljs.core.first.call(null,seq__52326_52350__$1);class_list_52339.add(class_52356);
{
var G__52357 = cljs.core.next.call(null,seq__52326_52350__$1);
var G__52358 = null;
var G__52359 = 0;
var G__52360 = 0;
seq__52326_52340 = G__52357;
chunk__52327_52341 = G__52358;
count__52328_52342 = G__52359;
i__52329_52343 = G__52360;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_52361 = elem__$1.className;var seq__52330_52362 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__52331_52363 = null;var count__52332_52364 = 0;var i__52333_52365 = 0;while(true){
if((i__52333_52365 < count__52332_52364))
{var class_52366 = cljs.core._nth.call(null,chunk__52331_52363,i__52333_52365);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_52361,class_52366)))
{} else
{elem__$1.className = (((class_name_52361 === ""))?class_52366:[cljs.core.str(class_name_52361),cljs.core.str(" "),cljs.core.str(class_52366)].join(''));
}
{
var G__52367 = seq__52330_52362;
var G__52368 = chunk__52331_52363;
var G__52369 = count__52332_52364;
var G__52370 = (i__52333_52365 + 1);
seq__52330_52362 = G__52367;
chunk__52331_52363 = G__52368;
count__52332_52364 = G__52369;
i__52333_52365 = G__52370;
continue;
}
} else
{var temp__4092__auto___52371 = cljs.core.seq.call(null,seq__52330_52362);if(temp__4092__auto___52371)
{var seq__52330_52372__$1 = temp__4092__auto___52371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52330_52372__$1))
{var c__8604__auto___52373 = cljs.core.chunk_first.call(null,seq__52330_52372__$1);{
var G__52374 = cljs.core.chunk_rest.call(null,seq__52330_52372__$1);
var G__52375 = c__8604__auto___52373;
var G__52376 = cljs.core.count.call(null,c__8604__auto___52373);
var G__52377 = 0;
seq__52330_52362 = G__52374;
chunk__52331_52363 = G__52375;
count__52332_52364 = G__52376;
i__52333_52365 = G__52377;
continue;
}
} else
{var class_52378 = cljs.core.first.call(null,seq__52330_52372__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_52361,class_52378)))
{} else
{elem__$1.className = (((class_name_52361 === ""))?class_52378:[cljs.core.str(class_name_52361),cljs.core.str(" "),cljs.core.str(class_52378)].join(''));
}
{
var G__52379 = cljs.core.next.call(null,seq__52330_52372__$1);
var G__52380 = null;
var G__52381 = 0;
var G__52382 = 0;
seq__52330_52362 = G__52379;
chunk__52331_52363 = G__52380;
count__52332_52364 = G__52381;
i__52333_52365 = G__52382;
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
var G__52383__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52334_52384 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__52335_52385 = null;var count__52336_52386 = 0;var i__52337_52387 = 0;while(true){
if((i__52337_52387 < count__52336_52386))
{var c_52388 = cljs.core._nth.call(null,chunk__52335_52385,i__52337_52387);add_class_BANG_.call(null,elem__$1,c_52388);
{
var G__52389 = seq__52334_52384;
var G__52390 = chunk__52335_52385;
var G__52391 = count__52336_52386;
var G__52392 = (i__52337_52387 + 1);
seq__52334_52384 = G__52389;
chunk__52335_52385 = G__52390;
count__52336_52386 = G__52391;
i__52337_52387 = G__52392;
continue;
}
} else
{var temp__4092__auto___52393 = cljs.core.seq.call(null,seq__52334_52384);if(temp__4092__auto___52393)
{var seq__52334_52394__$1 = temp__4092__auto___52393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52334_52394__$1))
{var c__8604__auto___52395 = cljs.core.chunk_first.call(null,seq__52334_52394__$1);{
var G__52396 = cljs.core.chunk_rest.call(null,seq__52334_52394__$1);
var G__52397 = c__8604__auto___52395;
var G__52398 = cljs.core.count.call(null,c__8604__auto___52395);
var G__52399 = 0;
seq__52334_52384 = G__52396;
chunk__52335_52385 = G__52397;
count__52336_52386 = G__52398;
i__52337_52387 = G__52399;
continue;
}
} else
{var c_52400 = cljs.core.first.call(null,seq__52334_52394__$1);add_class_BANG_.call(null,elem__$1,c_52400);
{
var G__52401 = cljs.core.next.call(null,seq__52334_52394__$1);
var G__52402 = null;
var G__52403 = 0;
var G__52404 = 0;
seq__52334_52384 = G__52401;
chunk__52335_52385 = G__52402;
count__52336_52386 = G__52403;
i__52337_52387 = G__52404;
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
var G__52383 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__52383__delegate.call(this,elem,classes,more_classes);};
G__52383.cljs$lang$maxFixedArity = 2;
G__52383.cljs$lang$applyTo = (function (arglist__52405){
var elem = cljs.core.first(arglist__52405);
arglist__52405 = cljs.core.next(arglist__52405);
var classes = cljs.core.first(arglist__52405);
var more_classes = cljs.core.rest(arglist__52405);
return G__52383__delegate(elem,classes,more_classes);
});
G__52383.cljs$core$IFn$_invoke$arity$variadic = G__52383__delegate;
return G__52383;
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
var G__52406 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__52406;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___52415 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___52415))
{var class_list_52416 = temp__4090__auto___52415;class_list_52416.remove(class$__$1);
} else
{var class_name_52417 = elem__$1.className;var new_class_name_52418 = dommy.attrs.remove_class_str.call(null,class_name_52417,class$__$1);if((class_name_52417 === new_class_name_52418))
{} else
{elem__$1.className = new_class_name_52418;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__52419__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52411 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__52412 = null;var count__52413 = 0;var i__52414 = 0;while(true){
if((i__52414 < count__52413))
{var c = cljs.core._nth.call(null,chunk__52412,i__52414);remove_class_BANG_.call(null,elem__$1,c);
{
var G__52420 = seq__52411;
var G__52421 = chunk__52412;
var G__52422 = count__52413;
var G__52423 = (i__52414 + 1);
seq__52411 = G__52420;
chunk__52412 = G__52421;
count__52413 = G__52422;
i__52414 = G__52423;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__52411);if(temp__4092__auto__)
{var seq__52411__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52411__$1))
{var c__8604__auto__ = cljs.core.chunk_first.call(null,seq__52411__$1);{
var G__52424 = cljs.core.chunk_rest.call(null,seq__52411__$1);
var G__52425 = c__8604__auto__;
var G__52426 = cljs.core.count.call(null,c__8604__auto__);
var G__52427 = 0;
seq__52411 = G__52424;
chunk__52412 = G__52425;
count__52413 = G__52426;
i__52414 = G__52427;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__52411__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__52428 = cljs.core.next.call(null,seq__52411__$1);
var G__52429 = null;
var G__52430 = 0;
var G__52431 = 0;
seq__52411 = G__52428;
chunk__52412 = G__52429;
count__52413 = G__52430;
i__52414 = G__52431;
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
var G__52419 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__52419__delegate.call(this,elem,class$,classes);};
G__52419.cljs$lang$maxFixedArity = 2;
G__52419.cljs$lang$applyTo = (function (arglist__52432){
var elem = cljs.core.first(arglist__52432);
arglist__52432 = cljs.core.next(arglist__52432);
var class$ = cljs.core.first(arglist__52432);
var classes = cljs.core.rest(arglist__52432);
return G__52419__delegate(elem,class$,classes);
});
G__52419.cljs$core$IFn$_invoke$arity$variadic = G__52419__delegate;
return G__52419;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___52433 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___52433))
{var class_list_52434 = temp__4090__auto___52433;class_list_52434.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__52437){var vec__52438 = p__52437;var k = cljs.core.nth.call(null,vec__52438,0,null);var v = cljs.core.nth.call(null,vec__52438,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__52445_52451 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__52446_52452 = null;var count__52447_52453 = 0;var i__52448_52454 = 0;while(true){
if((i__52448_52454 < count__52447_52453))
{var vec__52449_52455 = cljs.core._nth.call(null,chunk__52446_52452,i__52448_52454);var k_52456 = cljs.core.nth.call(null,vec__52449_52455,0,null);var v_52457 = cljs.core.nth.call(null,vec__52449_52455,1,null);(style[cljs.core.name.call(null,k_52456)] = v_52457);
{
var G__52458 = seq__52445_52451;
var G__52459 = chunk__52446_52452;
var G__52460 = count__52447_52453;
var G__52461 = (i__52448_52454 + 1);
seq__52445_52451 = G__52458;
chunk__52446_52452 = G__52459;
count__52447_52453 = G__52460;
i__52448_52454 = G__52461;
continue;
}
} else
{var temp__4092__auto___52462 = cljs.core.seq.call(null,seq__52445_52451);if(temp__4092__auto___52462)
{var seq__52445_52463__$1 = temp__4092__auto___52462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52445_52463__$1))
{var c__8604__auto___52464 = cljs.core.chunk_first.call(null,seq__52445_52463__$1);{
var G__52465 = cljs.core.chunk_rest.call(null,seq__52445_52463__$1);
var G__52466 = c__8604__auto___52464;
var G__52467 = cljs.core.count.call(null,c__8604__auto___52464);
var G__52468 = 0;
seq__52445_52451 = G__52465;
chunk__52446_52452 = G__52466;
count__52447_52453 = G__52467;
i__52448_52454 = G__52468;
continue;
}
} else
{var vec__52450_52469 = cljs.core.first.call(null,seq__52445_52463__$1);var k_52470 = cljs.core.nth.call(null,vec__52450_52469,0,null);var v_52471 = cljs.core.nth.call(null,vec__52450_52469,1,null);(style[cljs.core.name.call(null,k_52470)] = v_52471);
{
var G__52472 = cljs.core.next.call(null,seq__52445_52463__$1);
var G__52473 = null;
var G__52474 = 0;
var G__52475 = 0;
seq__52445_52451 = G__52472;
chunk__52446_52452 = G__52473;
count__52447_52453 = G__52474;
i__52448_52454 = G__52475;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__52476){
var elem = cljs.core.first(arglist__52476);
var kvs = cljs.core.rest(arglist__52476);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52483_52489 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__52484_52490 = null;var count__52485_52491 = 0;var i__52486_52492 = 0;while(true){
if((i__52486_52492 < count__52485_52491))
{var vec__52487_52493 = cljs.core._nth.call(null,chunk__52484_52490,i__52486_52492);var k_52494 = cljs.core.nth.call(null,vec__52487_52493,0,null);var v_52495 = cljs.core.nth.call(null,vec__52487_52493,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_52494,[cljs.core.str(v_52495),cljs.core.str("px")].join(''));
{
var G__52496 = seq__52483_52489;
var G__52497 = chunk__52484_52490;
var G__52498 = count__52485_52491;
var G__52499 = (i__52486_52492 + 1);
seq__52483_52489 = G__52496;
chunk__52484_52490 = G__52497;
count__52485_52491 = G__52498;
i__52486_52492 = G__52499;
continue;
}
} else
{var temp__4092__auto___52500 = cljs.core.seq.call(null,seq__52483_52489);if(temp__4092__auto___52500)
{var seq__52483_52501__$1 = temp__4092__auto___52500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52483_52501__$1))
{var c__8604__auto___52502 = cljs.core.chunk_first.call(null,seq__52483_52501__$1);{
var G__52503 = cljs.core.chunk_rest.call(null,seq__52483_52501__$1);
var G__52504 = c__8604__auto___52502;
var G__52505 = cljs.core.count.call(null,c__8604__auto___52502);
var G__52506 = 0;
seq__52483_52489 = G__52503;
chunk__52484_52490 = G__52504;
count__52485_52491 = G__52505;
i__52486_52492 = G__52506;
continue;
}
} else
{var vec__52488_52507 = cljs.core.first.call(null,seq__52483_52501__$1);var k_52508 = cljs.core.nth.call(null,vec__52488_52507,0,null);var v_52509 = cljs.core.nth.call(null,vec__52488_52507,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_52508,[cljs.core.str(v_52509),cljs.core.str("px")].join(''));
{
var G__52510 = cljs.core.next.call(null,seq__52483_52501__$1);
var G__52511 = null;
var G__52512 = 0;
var G__52513 = 0;
seq__52483_52489 = G__52510;
chunk__52484_52490 = G__52511;
count__52485_52491 = G__52512;
i__52486_52492 = G__52513;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__52514){
var elem = cljs.core.first(arglist__52514);
var kvs = cljs.core.rest(arglist__52514);
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
{var G__52523 = dommy.template.__GT_node_like.call(null,elem);(G__52523[cljs.core.name.call(null,k)] = v);
return G__52523;
} else
{var G__52524 = dommy.template.__GT_node_like.call(null,elem);G__52524.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__52524;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__52531__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52525_52532 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__52526_52533 = null;var count__52527_52534 = 0;var i__52528_52535 = 0;while(true){
if((i__52528_52535 < count__52527_52534))
{var vec__52529_52536 = cljs.core._nth.call(null,chunk__52526_52533,i__52528_52535);var k_52537__$1 = cljs.core.nth.call(null,vec__52529_52536,0,null);var v_52538__$1 = cljs.core.nth.call(null,vec__52529_52536,1,null);set_attr_BANG_.call(null,elem__$1,k_52537__$1,v_52538__$1);
{
var G__52539 = seq__52525_52532;
var G__52540 = chunk__52526_52533;
var G__52541 = count__52527_52534;
var G__52542 = (i__52528_52535 + 1);
seq__52525_52532 = G__52539;
chunk__52526_52533 = G__52540;
count__52527_52534 = G__52541;
i__52528_52535 = G__52542;
continue;
}
} else
{var temp__4092__auto___52543 = cljs.core.seq.call(null,seq__52525_52532);if(temp__4092__auto___52543)
{var seq__52525_52544__$1 = temp__4092__auto___52543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52525_52544__$1))
{var c__8604__auto___52545 = cljs.core.chunk_first.call(null,seq__52525_52544__$1);{
var G__52546 = cljs.core.chunk_rest.call(null,seq__52525_52544__$1);
var G__52547 = c__8604__auto___52545;
var G__52548 = cljs.core.count.call(null,c__8604__auto___52545);
var G__52549 = 0;
seq__52525_52532 = G__52546;
chunk__52526_52533 = G__52547;
count__52527_52534 = G__52548;
i__52528_52535 = G__52549;
continue;
}
} else
{var vec__52530_52550 = cljs.core.first.call(null,seq__52525_52544__$1);var k_52551__$1 = cljs.core.nth.call(null,vec__52530_52550,0,null);var v_52552__$1 = cljs.core.nth.call(null,vec__52530_52550,1,null);set_attr_BANG_.call(null,elem__$1,k_52551__$1,v_52552__$1);
{
var G__52553 = cljs.core.next.call(null,seq__52525_52544__$1);
var G__52554 = null;
var G__52555 = 0;
var G__52556 = 0;
seq__52525_52532 = G__52553;
chunk__52526_52533 = G__52554;
count__52527_52534 = G__52555;
i__52528_52535 = G__52556;
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
var G__52531 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__52531__delegate.call(this,elem,k,v,kvs);};
G__52531.cljs$lang$maxFixedArity = 3;
G__52531.cljs$lang$applyTo = (function (arglist__52557){
var elem = cljs.core.first(arglist__52557);
arglist__52557 = cljs.core.next(arglist__52557);
var k = cljs.core.first(arglist__52557);
arglist__52557 = cljs.core.next(arglist__52557);
var v = cljs.core.first(arglist__52557);
var kvs = cljs.core.rest(arglist__52557);
return G__52531__delegate(elem,k,v,kvs);
});
G__52531.cljs$core$IFn$_invoke$arity$variadic = G__52531__delegate;
return G__52531;
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
var G__52566__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52562_52567 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__52563_52568 = null;var count__52564_52569 = 0;var i__52565_52570 = 0;while(true){
if((i__52565_52570 < count__52564_52569))
{var k_52571__$1 = cljs.core._nth.call(null,chunk__52563_52568,i__52565_52570);remove_attr_BANG_.call(null,elem__$1,k_52571__$1);
{
var G__52572 = seq__52562_52567;
var G__52573 = chunk__52563_52568;
var G__52574 = count__52564_52569;
var G__52575 = (i__52565_52570 + 1);
seq__52562_52567 = G__52572;
chunk__52563_52568 = G__52573;
count__52564_52569 = G__52574;
i__52565_52570 = G__52575;
continue;
}
} else
{var temp__4092__auto___52576 = cljs.core.seq.call(null,seq__52562_52567);if(temp__4092__auto___52576)
{var seq__52562_52577__$1 = temp__4092__auto___52576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52562_52577__$1))
{var c__8604__auto___52578 = cljs.core.chunk_first.call(null,seq__52562_52577__$1);{
var G__52579 = cljs.core.chunk_rest.call(null,seq__52562_52577__$1);
var G__52580 = c__8604__auto___52578;
var G__52581 = cljs.core.count.call(null,c__8604__auto___52578);
var G__52582 = 0;
seq__52562_52567 = G__52579;
chunk__52563_52568 = G__52580;
count__52564_52569 = G__52581;
i__52565_52570 = G__52582;
continue;
}
} else
{var k_52583__$1 = cljs.core.first.call(null,seq__52562_52577__$1);remove_attr_BANG_.call(null,elem__$1,k_52583__$1);
{
var G__52584 = cljs.core.next.call(null,seq__52562_52577__$1);
var G__52585 = null;
var G__52586 = 0;
var G__52587 = 0;
seq__52562_52567 = G__52584;
chunk__52563_52568 = G__52585;
count__52564_52569 = G__52586;
i__52565_52570 = G__52587;
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
var G__52566 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__52566__delegate.call(this,elem,k,ks);};
G__52566.cljs$lang$maxFixedArity = 2;
G__52566.cljs$lang$applyTo = (function (arglist__52588){
var elem = cljs.core.first(arglist__52588);
arglist__52588 = cljs.core.next(arglist__52588);
var k = cljs.core.first(arglist__52588);
var ks = cljs.core.rest(arglist__52588);
return G__52566__delegate(elem,k,ks);
});
G__52566.cljs$core$IFn$_invoke$arity$variadic = G__52566__delegate;
return G__52566;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__52590 = dommy.template.__GT_node_like.call(null,elem);G__52590.style.display = ((show_QMARK_)?"":"none");
return G__52590;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__52592 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__52592,false);
return G__52592;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__52594 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__52594,true);
return G__52594;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__52596 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__52596["constructor"] = Object);
return G__52596;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
