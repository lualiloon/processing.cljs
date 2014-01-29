// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__10846__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__10846__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__10846__auto__;
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
var G__186886 = (i + class$.length);
start_from = G__186886;
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
{var temp__4090__auto___186911 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___186911))
{var class_list_186912 = temp__4090__auto___186911;var seq__186899_186913 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__186900_186914 = null;var count__186901_186915 = 0;var i__186902_186916 = 0;while(true){
if((i__186902_186916 < count__186901_186915))
{var class_186917 = cljs.core._nth.call(null,chunk__186900_186914,i__186902_186916);class_list_186912.add(class_186917);
{
var G__186918 = seq__186899_186913;
var G__186919 = chunk__186900_186914;
var G__186920 = count__186901_186915;
var G__186921 = (i__186902_186916 + 1);
seq__186899_186913 = G__186918;
chunk__186900_186914 = G__186919;
count__186901_186915 = G__186920;
i__186902_186916 = G__186921;
continue;
}
} else
{var temp__4092__auto___186922 = cljs.core.seq.call(null,seq__186899_186913);if(temp__4092__auto___186922)
{var seq__186899_186923__$1 = temp__4092__auto___186922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186899_186923__$1))
{var c__11600__auto___186924 = cljs.core.chunk_first.call(null,seq__186899_186923__$1);{
var G__186925 = cljs.core.chunk_rest.call(null,seq__186899_186923__$1);
var G__186926 = c__11600__auto___186924;
var G__186927 = cljs.core.count.call(null,c__11600__auto___186924);
var G__186928 = 0;
seq__186899_186913 = G__186925;
chunk__186900_186914 = G__186926;
count__186901_186915 = G__186927;
i__186902_186916 = G__186928;
continue;
}
} else
{var class_186929 = cljs.core.first.call(null,seq__186899_186923__$1);class_list_186912.add(class_186929);
{
var G__186930 = cljs.core.next.call(null,seq__186899_186923__$1);
var G__186931 = null;
var G__186932 = 0;
var G__186933 = 0;
seq__186899_186913 = G__186930;
chunk__186900_186914 = G__186931;
count__186901_186915 = G__186932;
i__186902_186916 = G__186933;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_186934 = elem__$1.className;var seq__186903_186935 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__186904_186936 = null;var count__186905_186937 = 0;var i__186906_186938 = 0;while(true){
if((i__186906_186938 < count__186905_186937))
{var class_186939 = cljs.core._nth.call(null,chunk__186904_186936,i__186906_186938);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_186934,class_186939)))
{} else
{elem__$1.className = (((class_name_186934 === ""))?class_186939:[cljs.core.str(class_name_186934),cljs.core.str(" "),cljs.core.str(class_186939)].join(''));
}
{
var G__186940 = seq__186903_186935;
var G__186941 = chunk__186904_186936;
var G__186942 = count__186905_186937;
var G__186943 = (i__186906_186938 + 1);
seq__186903_186935 = G__186940;
chunk__186904_186936 = G__186941;
count__186905_186937 = G__186942;
i__186906_186938 = G__186943;
continue;
}
} else
{var temp__4092__auto___186944 = cljs.core.seq.call(null,seq__186903_186935);if(temp__4092__auto___186944)
{var seq__186903_186945__$1 = temp__4092__auto___186944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186903_186945__$1))
{var c__11600__auto___186946 = cljs.core.chunk_first.call(null,seq__186903_186945__$1);{
var G__186947 = cljs.core.chunk_rest.call(null,seq__186903_186945__$1);
var G__186948 = c__11600__auto___186946;
var G__186949 = cljs.core.count.call(null,c__11600__auto___186946);
var G__186950 = 0;
seq__186903_186935 = G__186947;
chunk__186904_186936 = G__186948;
count__186905_186937 = G__186949;
i__186906_186938 = G__186950;
continue;
}
} else
{var class_186951 = cljs.core.first.call(null,seq__186903_186945__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_186934,class_186951)))
{} else
{elem__$1.className = (((class_name_186934 === ""))?class_186951:[cljs.core.str(class_name_186934),cljs.core.str(" "),cljs.core.str(class_186951)].join(''));
}
{
var G__186952 = cljs.core.next.call(null,seq__186903_186945__$1);
var G__186953 = null;
var G__186954 = 0;
var G__186955 = 0;
seq__186903_186935 = G__186952;
chunk__186904_186936 = G__186953;
count__186905_186937 = G__186954;
i__186906_186938 = G__186955;
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
var G__186956__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__186907_186957 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__186908_186958 = null;var count__186909_186959 = 0;var i__186910_186960 = 0;while(true){
if((i__186910_186960 < count__186909_186959))
{var c_186961 = cljs.core._nth.call(null,chunk__186908_186958,i__186910_186960);add_class_BANG_.call(null,elem__$1,c_186961);
{
var G__186962 = seq__186907_186957;
var G__186963 = chunk__186908_186958;
var G__186964 = count__186909_186959;
var G__186965 = (i__186910_186960 + 1);
seq__186907_186957 = G__186962;
chunk__186908_186958 = G__186963;
count__186909_186959 = G__186964;
i__186910_186960 = G__186965;
continue;
}
} else
{var temp__4092__auto___186966 = cljs.core.seq.call(null,seq__186907_186957);if(temp__4092__auto___186966)
{var seq__186907_186967__$1 = temp__4092__auto___186966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186907_186967__$1))
{var c__11600__auto___186968 = cljs.core.chunk_first.call(null,seq__186907_186967__$1);{
var G__186969 = cljs.core.chunk_rest.call(null,seq__186907_186967__$1);
var G__186970 = c__11600__auto___186968;
var G__186971 = cljs.core.count.call(null,c__11600__auto___186968);
var G__186972 = 0;
seq__186907_186957 = G__186969;
chunk__186908_186958 = G__186970;
count__186909_186959 = G__186971;
i__186910_186960 = G__186972;
continue;
}
} else
{var c_186973 = cljs.core.first.call(null,seq__186907_186967__$1);add_class_BANG_.call(null,elem__$1,c_186973);
{
var G__186974 = cljs.core.next.call(null,seq__186907_186967__$1);
var G__186975 = null;
var G__186976 = 0;
var G__186977 = 0;
seq__186907_186957 = G__186974;
chunk__186908_186958 = G__186975;
count__186909_186959 = G__186976;
i__186910_186960 = G__186977;
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
var G__186956 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__186956__delegate.call(this,elem,classes,more_classes);};
G__186956.cljs$lang$maxFixedArity = 2;
G__186956.cljs$lang$applyTo = (function (arglist__186978){
var elem = cljs.core.first(arglist__186978);
arglist__186978 = cljs.core.next(arglist__186978);
var classes = cljs.core.first(arglist__186978);
var more_classes = cljs.core.rest(arglist__186978);
return G__186956__delegate(elem,classes,more_classes);
});
G__186956.cljs$core$IFn$_invoke$arity$variadic = G__186956__delegate;
return G__186956;
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
var G__186979 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__186979;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___186988 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___186988))
{var class_list_186989 = temp__4090__auto___186988;class_list_186989.remove(class$__$1);
} else
{var class_name_186990 = elem__$1.className;var new_class_name_186991 = dommy.attrs.remove_class_str.call(null,class_name_186990,class$__$1);if((class_name_186990 === new_class_name_186991))
{} else
{elem__$1.className = new_class_name_186991;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__186992__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__186984 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__186985 = null;var count__186986 = 0;var i__186987 = 0;while(true){
if((i__186987 < count__186986))
{var c = cljs.core._nth.call(null,chunk__186985,i__186987);remove_class_BANG_.call(null,elem__$1,c);
{
var G__186993 = seq__186984;
var G__186994 = chunk__186985;
var G__186995 = count__186986;
var G__186996 = (i__186987 + 1);
seq__186984 = G__186993;
chunk__186985 = G__186994;
count__186986 = G__186995;
i__186987 = G__186996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__186984);if(temp__4092__auto__)
{var seq__186984__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186984__$1))
{var c__11600__auto__ = cljs.core.chunk_first.call(null,seq__186984__$1);{
var G__186997 = cljs.core.chunk_rest.call(null,seq__186984__$1);
var G__186998 = c__11600__auto__;
var G__186999 = cljs.core.count.call(null,c__11600__auto__);
var G__187000 = 0;
seq__186984 = G__186997;
chunk__186985 = G__186998;
count__186986 = G__186999;
i__186987 = G__187000;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__186984__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__187001 = cljs.core.next.call(null,seq__186984__$1);
var G__187002 = null;
var G__187003 = 0;
var G__187004 = 0;
seq__186984 = G__187001;
chunk__186985 = G__187002;
count__186986 = G__187003;
i__186987 = G__187004;
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
var G__186992 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__186992__delegate.call(this,elem,class$,classes);};
G__186992.cljs$lang$maxFixedArity = 2;
G__186992.cljs$lang$applyTo = (function (arglist__187005){
var elem = cljs.core.first(arglist__187005);
arglist__187005 = cljs.core.next(arglist__187005);
var class$ = cljs.core.first(arglist__187005);
var classes = cljs.core.rest(arglist__187005);
return G__186992__delegate(elem,class$,classes);
});
G__186992.cljs$core$IFn$_invoke$arity$variadic = G__186992__delegate;
return G__186992;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___187006 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___187006))
{var class_list_187007 = temp__4090__auto___187006;class_list_187007.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__187010){var vec__187011 = p__187010;var k = cljs.core.nth.call(null,vec__187011,0,null);var v = cljs.core.nth.call(null,vec__187011,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__187018_187024 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__187019_187025 = null;var count__187020_187026 = 0;var i__187021_187027 = 0;while(true){
if((i__187021_187027 < count__187020_187026))
{var vec__187022_187028 = cljs.core._nth.call(null,chunk__187019_187025,i__187021_187027);var k_187029 = cljs.core.nth.call(null,vec__187022_187028,0,null);var v_187030 = cljs.core.nth.call(null,vec__187022_187028,1,null);(style[cljs.core.name.call(null,k_187029)] = v_187030);
{
var G__187031 = seq__187018_187024;
var G__187032 = chunk__187019_187025;
var G__187033 = count__187020_187026;
var G__187034 = (i__187021_187027 + 1);
seq__187018_187024 = G__187031;
chunk__187019_187025 = G__187032;
count__187020_187026 = G__187033;
i__187021_187027 = G__187034;
continue;
}
} else
{var temp__4092__auto___187035 = cljs.core.seq.call(null,seq__187018_187024);if(temp__4092__auto___187035)
{var seq__187018_187036__$1 = temp__4092__auto___187035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__187018_187036__$1))
{var c__11600__auto___187037 = cljs.core.chunk_first.call(null,seq__187018_187036__$1);{
var G__187038 = cljs.core.chunk_rest.call(null,seq__187018_187036__$1);
var G__187039 = c__11600__auto___187037;
var G__187040 = cljs.core.count.call(null,c__11600__auto___187037);
var G__187041 = 0;
seq__187018_187024 = G__187038;
chunk__187019_187025 = G__187039;
count__187020_187026 = G__187040;
i__187021_187027 = G__187041;
continue;
}
} else
{var vec__187023_187042 = cljs.core.first.call(null,seq__187018_187036__$1);var k_187043 = cljs.core.nth.call(null,vec__187023_187042,0,null);var v_187044 = cljs.core.nth.call(null,vec__187023_187042,1,null);(style[cljs.core.name.call(null,k_187043)] = v_187044);
{
var G__187045 = cljs.core.next.call(null,seq__187018_187036__$1);
var G__187046 = null;
var G__187047 = 0;
var G__187048 = 0;
seq__187018_187024 = G__187045;
chunk__187019_187025 = G__187046;
count__187020_187026 = G__187047;
i__187021_187027 = G__187048;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__187049){
var elem = cljs.core.first(arglist__187049);
var kvs = cljs.core.rest(arglist__187049);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__187056_187062 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__187057_187063 = null;var count__187058_187064 = 0;var i__187059_187065 = 0;while(true){
if((i__187059_187065 < count__187058_187064))
{var vec__187060_187066 = cljs.core._nth.call(null,chunk__187057_187063,i__187059_187065);var k_187067 = cljs.core.nth.call(null,vec__187060_187066,0,null);var v_187068 = cljs.core.nth.call(null,vec__187060_187066,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_187067,[cljs.core.str(v_187068),cljs.core.str("px")].join(''));
{
var G__187069 = seq__187056_187062;
var G__187070 = chunk__187057_187063;
var G__187071 = count__187058_187064;
var G__187072 = (i__187059_187065 + 1);
seq__187056_187062 = G__187069;
chunk__187057_187063 = G__187070;
count__187058_187064 = G__187071;
i__187059_187065 = G__187072;
continue;
}
} else
{var temp__4092__auto___187073 = cljs.core.seq.call(null,seq__187056_187062);if(temp__4092__auto___187073)
{var seq__187056_187074__$1 = temp__4092__auto___187073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__187056_187074__$1))
{var c__11600__auto___187075 = cljs.core.chunk_first.call(null,seq__187056_187074__$1);{
var G__187076 = cljs.core.chunk_rest.call(null,seq__187056_187074__$1);
var G__187077 = c__11600__auto___187075;
var G__187078 = cljs.core.count.call(null,c__11600__auto___187075);
var G__187079 = 0;
seq__187056_187062 = G__187076;
chunk__187057_187063 = G__187077;
count__187058_187064 = G__187078;
i__187059_187065 = G__187079;
continue;
}
} else
{var vec__187061_187080 = cljs.core.first.call(null,seq__187056_187074__$1);var k_187081 = cljs.core.nth.call(null,vec__187061_187080,0,null);var v_187082 = cljs.core.nth.call(null,vec__187061_187080,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_187081,[cljs.core.str(v_187082),cljs.core.str("px")].join(''));
{
var G__187083 = cljs.core.next.call(null,seq__187056_187074__$1);
var G__187084 = null;
var G__187085 = 0;
var G__187086 = 0;
seq__187056_187062 = G__187083;
chunk__187057_187063 = G__187084;
count__187058_187064 = G__187085;
i__187059_187065 = G__187086;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__187087){
var elem = cljs.core.first(arglist__187087);
var kvs = cljs.core.rest(arglist__187087);
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
{var G__187096 = dommy.template.__GT_node_like.call(null,elem);(G__187096[cljs.core.name.call(null,k)] = v);
return G__187096;
} else
{var G__187097 = dommy.template.__GT_node_like.call(null,elem);G__187097.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__187097;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__187104__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__187098_187105 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__187099_187106 = null;var count__187100_187107 = 0;var i__187101_187108 = 0;while(true){
if((i__187101_187108 < count__187100_187107))
{var vec__187102_187109 = cljs.core._nth.call(null,chunk__187099_187106,i__187101_187108);var k_187110__$1 = cljs.core.nth.call(null,vec__187102_187109,0,null);var v_187111__$1 = cljs.core.nth.call(null,vec__187102_187109,1,null);set_attr_BANG_.call(null,elem__$1,k_187110__$1,v_187111__$1);
{
var G__187112 = seq__187098_187105;
var G__187113 = chunk__187099_187106;
var G__187114 = count__187100_187107;
var G__187115 = (i__187101_187108 + 1);
seq__187098_187105 = G__187112;
chunk__187099_187106 = G__187113;
count__187100_187107 = G__187114;
i__187101_187108 = G__187115;
continue;
}
} else
{var temp__4092__auto___187116 = cljs.core.seq.call(null,seq__187098_187105);if(temp__4092__auto___187116)
{var seq__187098_187117__$1 = temp__4092__auto___187116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__187098_187117__$1))
{var c__11600__auto___187118 = cljs.core.chunk_first.call(null,seq__187098_187117__$1);{
var G__187119 = cljs.core.chunk_rest.call(null,seq__187098_187117__$1);
var G__187120 = c__11600__auto___187118;
var G__187121 = cljs.core.count.call(null,c__11600__auto___187118);
var G__187122 = 0;
seq__187098_187105 = G__187119;
chunk__187099_187106 = G__187120;
count__187100_187107 = G__187121;
i__187101_187108 = G__187122;
continue;
}
} else
{var vec__187103_187123 = cljs.core.first.call(null,seq__187098_187117__$1);var k_187124__$1 = cljs.core.nth.call(null,vec__187103_187123,0,null);var v_187125__$1 = cljs.core.nth.call(null,vec__187103_187123,1,null);set_attr_BANG_.call(null,elem__$1,k_187124__$1,v_187125__$1);
{
var G__187126 = cljs.core.next.call(null,seq__187098_187117__$1);
var G__187127 = null;
var G__187128 = 0;
var G__187129 = 0;
seq__187098_187105 = G__187126;
chunk__187099_187106 = G__187127;
count__187100_187107 = G__187128;
i__187101_187108 = G__187129;
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
var G__187104 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__187104__delegate.call(this,elem,k,v,kvs);};
G__187104.cljs$lang$maxFixedArity = 3;
G__187104.cljs$lang$applyTo = (function (arglist__187130){
var elem = cljs.core.first(arglist__187130);
arglist__187130 = cljs.core.next(arglist__187130);
var k = cljs.core.first(arglist__187130);
arglist__187130 = cljs.core.next(arglist__187130);
var v = cljs.core.first(arglist__187130);
var kvs = cljs.core.rest(arglist__187130);
return G__187104__delegate(elem,k,v,kvs);
});
G__187104.cljs$core$IFn$_invoke$arity$variadic = G__187104__delegate;
return G__187104;
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
var G__187139__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__187135_187140 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__187136_187141 = null;var count__187137_187142 = 0;var i__187138_187143 = 0;while(true){
if((i__187138_187143 < count__187137_187142))
{var k_187144__$1 = cljs.core._nth.call(null,chunk__187136_187141,i__187138_187143);remove_attr_BANG_.call(null,elem__$1,k_187144__$1);
{
var G__187145 = seq__187135_187140;
var G__187146 = chunk__187136_187141;
var G__187147 = count__187137_187142;
var G__187148 = (i__187138_187143 + 1);
seq__187135_187140 = G__187145;
chunk__187136_187141 = G__187146;
count__187137_187142 = G__187147;
i__187138_187143 = G__187148;
continue;
}
} else
{var temp__4092__auto___187149 = cljs.core.seq.call(null,seq__187135_187140);if(temp__4092__auto___187149)
{var seq__187135_187150__$1 = temp__4092__auto___187149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__187135_187150__$1))
{var c__11600__auto___187151 = cljs.core.chunk_first.call(null,seq__187135_187150__$1);{
var G__187152 = cljs.core.chunk_rest.call(null,seq__187135_187150__$1);
var G__187153 = c__11600__auto___187151;
var G__187154 = cljs.core.count.call(null,c__11600__auto___187151);
var G__187155 = 0;
seq__187135_187140 = G__187152;
chunk__187136_187141 = G__187153;
count__187137_187142 = G__187154;
i__187138_187143 = G__187155;
continue;
}
} else
{var k_187156__$1 = cljs.core.first.call(null,seq__187135_187150__$1);remove_attr_BANG_.call(null,elem__$1,k_187156__$1);
{
var G__187157 = cljs.core.next.call(null,seq__187135_187150__$1);
var G__187158 = null;
var G__187159 = 0;
var G__187160 = 0;
seq__187135_187140 = G__187157;
chunk__187136_187141 = G__187158;
count__187137_187142 = G__187159;
i__187138_187143 = G__187160;
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
var G__187139 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__187139__delegate.call(this,elem,k,ks);};
G__187139.cljs$lang$maxFixedArity = 2;
G__187139.cljs$lang$applyTo = (function (arglist__187161){
var elem = cljs.core.first(arglist__187161);
arglist__187161 = cljs.core.next(arglist__187161);
var k = cljs.core.first(arglist__187161);
var ks = cljs.core.rest(arglist__187161);
return G__187139__delegate(elem,k,ks);
});
G__187139.cljs$core$IFn$_invoke$arity$variadic = G__187139__delegate;
return G__187139;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__187163 = dommy.template.__GT_node_like.call(null,elem);G__187163.style.display = ((show_QMARK_)?"":"none");
return G__187163;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__187165 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__187165,false);
return G__187165;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__187167 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__187167,true);
return G__187167;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__187169 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__187169["constructor"] = Object);
return G__187169;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map