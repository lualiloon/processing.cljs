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
var G__51803 = (i + class$.length);
start_from = G__51803;
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
{var temp__4090__auto___51828 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___51828))
{var class_list_51829 = temp__4090__auto___51828;var seq__51816_51830 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__51817_51831 = null;var count__51818_51832 = 0;var i__51819_51833 = 0;while(true){
if((i__51819_51833 < count__51818_51832))
{var class_51834 = cljs.core._nth.call(null,chunk__51817_51831,i__51819_51833);class_list_51829.add(class_51834);
{
var G__51835 = seq__51816_51830;
var G__51836 = chunk__51817_51831;
var G__51837 = count__51818_51832;
var G__51838 = (i__51819_51833 + 1);
seq__51816_51830 = G__51835;
chunk__51817_51831 = G__51836;
count__51818_51832 = G__51837;
i__51819_51833 = G__51838;
continue;
}
} else
{var temp__4092__auto___51839 = cljs.core.seq.call(null,seq__51816_51830);if(temp__4092__auto___51839)
{var seq__51816_51840__$1 = temp__4092__auto___51839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51816_51840__$1))
{var c__8592__auto___51841 = cljs.core.chunk_first.call(null,seq__51816_51840__$1);{
var G__51842 = cljs.core.chunk_rest.call(null,seq__51816_51840__$1);
var G__51843 = c__8592__auto___51841;
var G__51844 = cljs.core.count.call(null,c__8592__auto___51841);
var G__51845 = 0;
seq__51816_51830 = G__51842;
chunk__51817_51831 = G__51843;
count__51818_51832 = G__51844;
i__51819_51833 = G__51845;
continue;
}
} else
{var class_51846 = cljs.core.first.call(null,seq__51816_51840__$1);class_list_51829.add(class_51846);
{
var G__51847 = cljs.core.next.call(null,seq__51816_51840__$1);
var G__51848 = null;
var G__51849 = 0;
var G__51850 = 0;
seq__51816_51830 = G__51847;
chunk__51817_51831 = G__51848;
count__51818_51832 = G__51849;
i__51819_51833 = G__51850;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_51851 = elem__$1.className;var seq__51820_51852 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__51821_51853 = null;var count__51822_51854 = 0;var i__51823_51855 = 0;while(true){
if((i__51823_51855 < count__51822_51854))
{var class_51856 = cljs.core._nth.call(null,chunk__51821_51853,i__51823_51855);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_51851,class_51856)))
{} else
{elem__$1.className = (((class_name_51851 === ""))?class_51856:[cljs.core.str(class_name_51851),cljs.core.str(" "),cljs.core.str(class_51856)].join(''));
}
{
var G__51857 = seq__51820_51852;
var G__51858 = chunk__51821_51853;
var G__51859 = count__51822_51854;
var G__51860 = (i__51823_51855 + 1);
seq__51820_51852 = G__51857;
chunk__51821_51853 = G__51858;
count__51822_51854 = G__51859;
i__51823_51855 = G__51860;
continue;
}
} else
{var temp__4092__auto___51861 = cljs.core.seq.call(null,seq__51820_51852);if(temp__4092__auto___51861)
{var seq__51820_51862__$1 = temp__4092__auto___51861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51820_51862__$1))
{var c__8592__auto___51863 = cljs.core.chunk_first.call(null,seq__51820_51862__$1);{
var G__51864 = cljs.core.chunk_rest.call(null,seq__51820_51862__$1);
var G__51865 = c__8592__auto___51863;
var G__51866 = cljs.core.count.call(null,c__8592__auto___51863);
var G__51867 = 0;
seq__51820_51852 = G__51864;
chunk__51821_51853 = G__51865;
count__51822_51854 = G__51866;
i__51823_51855 = G__51867;
continue;
}
} else
{var class_51868 = cljs.core.first.call(null,seq__51820_51862__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_51851,class_51868)))
{} else
{elem__$1.className = (((class_name_51851 === ""))?class_51868:[cljs.core.str(class_name_51851),cljs.core.str(" "),cljs.core.str(class_51868)].join(''));
}
{
var G__51869 = cljs.core.next.call(null,seq__51820_51862__$1);
var G__51870 = null;
var G__51871 = 0;
var G__51872 = 0;
seq__51820_51852 = G__51869;
chunk__51821_51853 = G__51870;
count__51822_51854 = G__51871;
i__51823_51855 = G__51872;
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
var G__51873__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__51824_51874 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__51825_51875 = null;var count__51826_51876 = 0;var i__51827_51877 = 0;while(true){
if((i__51827_51877 < count__51826_51876))
{var c_51878 = cljs.core._nth.call(null,chunk__51825_51875,i__51827_51877);add_class_BANG_.call(null,elem__$1,c_51878);
{
var G__51879 = seq__51824_51874;
var G__51880 = chunk__51825_51875;
var G__51881 = count__51826_51876;
var G__51882 = (i__51827_51877 + 1);
seq__51824_51874 = G__51879;
chunk__51825_51875 = G__51880;
count__51826_51876 = G__51881;
i__51827_51877 = G__51882;
continue;
}
} else
{var temp__4092__auto___51883 = cljs.core.seq.call(null,seq__51824_51874);if(temp__4092__auto___51883)
{var seq__51824_51884__$1 = temp__4092__auto___51883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51824_51884__$1))
{var c__8592__auto___51885 = cljs.core.chunk_first.call(null,seq__51824_51884__$1);{
var G__51886 = cljs.core.chunk_rest.call(null,seq__51824_51884__$1);
var G__51887 = c__8592__auto___51885;
var G__51888 = cljs.core.count.call(null,c__8592__auto___51885);
var G__51889 = 0;
seq__51824_51874 = G__51886;
chunk__51825_51875 = G__51887;
count__51826_51876 = G__51888;
i__51827_51877 = G__51889;
continue;
}
} else
{var c_51890 = cljs.core.first.call(null,seq__51824_51884__$1);add_class_BANG_.call(null,elem__$1,c_51890);
{
var G__51891 = cljs.core.next.call(null,seq__51824_51884__$1);
var G__51892 = null;
var G__51893 = 0;
var G__51894 = 0;
seq__51824_51874 = G__51891;
chunk__51825_51875 = G__51892;
count__51826_51876 = G__51893;
i__51827_51877 = G__51894;
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
var G__51873 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51873__delegate.call(this,elem,classes,more_classes);};
G__51873.cljs$lang$maxFixedArity = 2;
G__51873.cljs$lang$applyTo = (function (arglist__51895){
var elem = cljs.core.first(arglist__51895);
arglist__51895 = cljs.core.next(arglist__51895);
var classes = cljs.core.first(arglist__51895);
var more_classes = cljs.core.rest(arglist__51895);
return G__51873__delegate(elem,classes,more_classes);
});
G__51873.cljs$core$IFn$_invoke$arity$variadic = G__51873__delegate;
return G__51873;
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
var G__51896 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__51896;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___51905 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___51905))
{var class_list_51906 = temp__4090__auto___51905;class_list_51906.remove(class$__$1);
} else
{var class_name_51907 = elem__$1.className;var new_class_name_51908 = dommy.attrs.remove_class_str.call(null,class_name_51907,class$__$1);if((class_name_51907 === new_class_name_51908))
{} else
{elem__$1.className = new_class_name_51908;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__51909__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__51901 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__51902 = null;var count__51903 = 0;var i__51904 = 0;while(true){
if((i__51904 < count__51903))
{var c = cljs.core._nth.call(null,chunk__51902,i__51904);remove_class_BANG_.call(null,elem__$1,c);
{
var G__51910 = seq__51901;
var G__51911 = chunk__51902;
var G__51912 = count__51903;
var G__51913 = (i__51904 + 1);
seq__51901 = G__51910;
chunk__51902 = G__51911;
count__51903 = G__51912;
i__51904 = G__51913;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__51901);if(temp__4092__auto__)
{var seq__51901__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51901__$1))
{var c__8592__auto__ = cljs.core.chunk_first.call(null,seq__51901__$1);{
var G__51914 = cljs.core.chunk_rest.call(null,seq__51901__$1);
var G__51915 = c__8592__auto__;
var G__51916 = cljs.core.count.call(null,c__8592__auto__);
var G__51917 = 0;
seq__51901 = G__51914;
chunk__51902 = G__51915;
count__51903 = G__51916;
i__51904 = G__51917;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__51901__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__51918 = cljs.core.next.call(null,seq__51901__$1);
var G__51919 = null;
var G__51920 = 0;
var G__51921 = 0;
seq__51901 = G__51918;
chunk__51902 = G__51919;
count__51903 = G__51920;
i__51904 = G__51921;
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
var G__51909 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__51909__delegate.call(this,elem,class$,classes);};
G__51909.cljs$lang$maxFixedArity = 2;
G__51909.cljs$lang$applyTo = (function (arglist__51922){
var elem = cljs.core.first(arglist__51922);
arglist__51922 = cljs.core.next(arglist__51922);
var class$ = cljs.core.first(arglist__51922);
var classes = cljs.core.rest(arglist__51922);
return G__51909__delegate(elem,class$,classes);
});
G__51909.cljs$core$IFn$_invoke$arity$variadic = G__51909__delegate;
return G__51909;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___51923 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___51923))
{var class_list_51924 = temp__4090__auto___51923;class_list_51924.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__51927){var vec__51928 = p__51927;var k = cljs.core.nth.call(null,vec__51928,0,null);var v = cljs.core.nth.call(null,vec__51928,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__51935_51941 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__51936_51942 = null;var count__51937_51943 = 0;var i__51938_51944 = 0;while(true){
if((i__51938_51944 < count__51937_51943))
{var vec__51939_51945 = cljs.core._nth.call(null,chunk__51936_51942,i__51938_51944);var k_51946 = cljs.core.nth.call(null,vec__51939_51945,0,null);var v_51947 = cljs.core.nth.call(null,vec__51939_51945,1,null);(style[cljs.core.name.call(null,k_51946)] = v_51947);
{
var G__51948 = seq__51935_51941;
var G__51949 = chunk__51936_51942;
var G__51950 = count__51937_51943;
var G__51951 = (i__51938_51944 + 1);
seq__51935_51941 = G__51948;
chunk__51936_51942 = G__51949;
count__51937_51943 = G__51950;
i__51938_51944 = G__51951;
continue;
}
} else
{var temp__4092__auto___51952 = cljs.core.seq.call(null,seq__51935_51941);if(temp__4092__auto___51952)
{var seq__51935_51953__$1 = temp__4092__auto___51952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51935_51953__$1))
{var c__8592__auto___51954 = cljs.core.chunk_first.call(null,seq__51935_51953__$1);{
var G__51955 = cljs.core.chunk_rest.call(null,seq__51935_51953__$1);
var G__51956 = c__8592__auto___51954;
var G__51957 = cljs.core.count.call(null,c__8592__auto___51954);
var G__51958 = 0;
seq__51935_51941 = G__51955;
chunk__51936_51942 = G__51956;
count__51937_51943 = G__51957;
i__51938_51944 = G__51958;
continue;
}
} else
{var vec__51940_51959 = cljs.core.first.call(null,seq__51935_51953__$1);var k_51960 = cljs.core.nth.call(null,vec__51940_51959,0,null);var v_51961 = cljs.core.nth.call(null,vec__51940_51959,1,null);(style[cljs.core.name.call(null,k_51960)] = v_51961);
{
var G__51962 = cljs.core.next.call(null,seq__51935_51953__$1);
var G__51963 = null;
var G__51964 = 0;
var G__51965 = 0;
seq__51935_51941 = G__51962;
chunk__51936_51942 = G__51963;
count__51937_51943 = G__51964;
i__51938_51944 = G__51965;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__51966){
var elem = cljs.core.first(arglist__51966);
var kvs = cljs.core.rest(arglist__51966);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__51973_51979 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__51974_51980 = null;var count__51975_51981 = 0;var i__51976_51982 = 0;while(true){
if((i__51976_51982 < count__51975_51981))
{var vec__51977_51983 = cljs.core._nth.call(null,chunk__51974_51980,i__51976_51982);var k_51984 = cljs.core.nth.call(null,vec__51977_51983,0,null);var v_51985 = cljs.core.nth.call(null,vec__51977_51983,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_51984,[cljs.core.str(v_51985),cljs.core.str("px")].join(''));
{
var G__51986 = seq__51973_51979;
var G__51987 = chunk__51974_51980;
var G__51988 = count__51975_51981;
var G__51989 = (i__51976_51982 + 1);
seq__51973_51979 = G__51986;
chunk__51974_51980 = G__51987;
count__51975_51981 = G__51988;
i__51976_51982 = G__51989;
continue;
}
} else
{var temp__4092__auto___51990 = cljs.core.seq.call(null,seq__51973_51979);if(temp__4092__auto___51990)
{var seq__51973_51991__$1 = temp__4092__auto___51990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51973_51991__$1))
{var c__8592__auto___51992 = cljs.core.chunk_first.call(null,seq__51973_51991__$1);{
var G__51993 = cljs.core.chunk_rest.call(null,seq__51973_51991__$1);
var G__51994 = c__8592__auto___51992;
var G__51995 = cljs.core.count.call(null,c__8592__auto___51992);
var G__51996 = 0;
seq__51973_51979 = G__51993;
chunk__51974_51980 = G__51994;
count__51975_51981 = G__51995;
i__51976_51982 = G__51996;
continue;
}
} else
{var vec__51978_51997 = cljs.core.first.call(null,seq__51973_51991__$1);var k_51998 = cljs.core.nth.call(null,vec__51978_51997,0,null);var v_51999 = cljs.core.nth.call(null,vec__51978_51997,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_51998,[cljs.core.str(v_51999),cljs.core.str("px")].join(''));
{
var G__52000 = cljs.core.next.call(null,seq__51973_51991__$1);
var G__52001 = null;
var G__52002 = 0;
var G__52003 = 0;
seq__51973_51979 = G__52000;
chunk__51974_51980 = G__52001;
count__51975_51981 = G__52002;
i__51976_51982 = G__52003;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__52004){
var elem = cljs.core.first(arglist__52004);
var kvs = cljs.core.rest(arglist__52004);
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
{var G__52013 = dommy.template.__GT_node_like.call(null,elem);(G__52013[cljs.core.name.call(null,k)] = v);
return G__52013;
} else
{var G__52014 = dommy.template.__GT_node_like.call(null,elem);G__52014.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__52014;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__52021__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52015_52022 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__52016_52023 = null;var count__52017_52024 = 0;var i__52018_52025 = 0;while(true){
if((i__52018_52025 < count__52017_52024))
{var vec__52019_52026 = cljs.core._nth.call(null,chunk__52016_52023,i__52018_52025);var k_52027__$1 = cljs.core.nth.call(null,vec__52019_52026,0,null);var v_52028__$1 = cljs.core.nth.call(null,vec__52019_52026,1,null);set_attr_BANG_.call(null,elem__$1,k_52027__$1,v_52028__$1);
{
var G__52029 = seq__52015_52022;
var G__52030 = chunk__52016_52023;
var G__52031 = count__52017_52024;
var G__52032 = (i__52018_52025 + 1);
seq__52015_52022 = G__52029;
chunk__52016_52023 = G__52030;
count__52017_52024 = G__52031;
i__52018_52025 = G__52032;
continue;
}
} else
{var temp__4092__auto___52033 = cljs.core.seq.call(null,seq__52015_52022);if(temp__4092__auto___52033)
{var seq__52015_52034__$1 = temp__4092__auto___52033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52015_52034__$1))
{var c__8592__auto___52035 = cljs.core.chunk_first.call(null,seq__52015_52034__$1);{
var G__52036 = cljs.core.chunk_rest.call(null,seq__52015_52034__$1);
var G__52037 = c__8592__auto___52035;
var G__52038 = cljs.core.count.call(null,c__8592__auto___52035);
var G__52039 = 0;
seq__52015_52022 = G__52036;
chunk__52016_52023 = G__52037;
count__52017_52024 = G__52038;
i__52018_52025 = G__52039;
continue;
}
} else
{var vec__52020_52040 = cljs.core.first.call(null,seq__52015_52034__$1);var k_52041__$1 = cljs.core.nth.call(null,vec__52020_52040,0,null);var v_52042__$1 = cljs.core.nth.call(null,vec__52020_52040,1,null);set_attr_BANG_.call(null,elem__$1,k_52041__$1,v_52042__$1);
{
var G__52043 = cljs.core.next.call(null,seq__52015_52034__$1);
var G__52044 = null;
var G__52045 = 0;
var G__52046 = 0;
seq__52015_52022 = G__52043;
chunk__52016_52023 = G__52044;
count__52017_52024 = G__52045;
i__52018_52025 = G__52046;
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
var G__52021 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__52021__delegate.call(this,elem,k,v,kvs);};
G__52021.cljs$lang$maxFixedArity = 3;
G__52021.cljs$lang$applyTo = (function (arglist__52047){
var elem = cljs.core.first(arglist__52047);
arglist__52047 = cljs.core.next(arglist__52047);
var k = cljs.core.first(arglist__52047);
arglist__52047 = cljs.core.next(arglist__52047);
var v = cljs.core.first(arglist__52047);
var kvs = cljs.core.rest(arglist__52047);
return G__52021__delegate(elem,k,v,kvs);
});
G__52021.cljs$core$IFn$_invoke$arity$variadic = G__52021__delegate;
return G__52021;
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
var G__52056__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__52052_52057 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__52053_52058 = null;var count__52054_52059 = 0;var i__52055_52060 = 0;while(true){
if((i__52055_52060 < count__52054_52059))
{var k_52061__$1 = cljs.core._nth.call(null,chunk__52053_52058,i__52055_52060);remove_attr_BANG_.call(null,elem__$1,k_52061__$1);
{
var G__52062 = seq__52052_52057;
var G__52063 = chunk__52053_52058;
var G__52064 = count__52054_52059;
var G__52065 = (i__52055_52060 + 1);
seq__52052_52057 = G__52062;
chunk__52053_52058 = G__52063;
count__52054_52059 = G__52064;
i__52055_52060 = G__52065;
continue;
}
} else
{var temp__4092__auto___52066 = cljs.core.seq.call(null,seq__52052_52057);if(temp__4092__auto___52066)
{var seq__52052_52067__$1 = temp__4092__auto___52066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52052_52067__$1))
{var c__8592__auto___52068 = cljs.core.chunk_first.call(null,seq__52052_52067__$1);{
var G__52069 = cljs.core.chunk_rest.call(null,seq__52052_52067__$1);
var G__52070 = c__8592__auto___52068;
var G__52071 = cljs.core.count.call(null,c__8592__auto___52068);
var G__52072 = 0;
seq__52052_52057 = G__52069;
chunk__52053_52058 = G__52070;
count__52054_52059 = G__52071;
i__52055_52060 = G__52072;
continue;
}
} else
{var k_52073__$1 = cljs.core.first.call(null,seq__52052_52067__$1);remove_attr_BANG_.call(null,elem__$1,k_52073__$1);
{
var G__52074 = cljs.core.next.call(null,seq__52052_52067__$1);
var G__52075 = null;
var G__52076 = 0;
var G__52077 = 0;
seq__52052_52057 = G__52074;
chunk__52053_52058 = G__52075;
count__52054_52059 = G__52076;
i__52055_52060 = G__52077;
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
var G__52056 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__52056__delegate.call(this,elem,k,ks);};
G__52056.cljs$lang$maxFixedArity = 2;
G__52056.cljs$lang$applyTo = (function (arglist__52078){
var elem = cljs.core.first(arglist__52078);
arglist__52078 = cljs.core.next(arglist__52078);
var k = cljs.core.first(arglist__52078);
var ks = cljs.core.rest(arglist__52078);
return G__52056__delegate(elem,k,ks);
});
G__52056.cljs$core$IFn$_invoke$arity$variadic = G__52056__delegate;
return G__52056;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__52080 = dommy.template.__GT_node_like.call(null,elem);G__52080.style.display = ((show_QMARK_)?"":"none");
return G__52080;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__52082 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__52082,false);
return G__52082;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__52084 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__52084,true);
return G__52084;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__52086 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__52086["constructor"] = Object);
return G__52086;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
