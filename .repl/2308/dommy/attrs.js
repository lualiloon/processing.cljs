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
var G__38045 = (i + class$.length);
start_from = G__38045;
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
{var temp__4090__auto___38070 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___38070))
{var class_list_38071 = temp__4090__auto___38070;var seq__38058_38072 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__38059_38073 = null;var count__38060_38074 = 0;var i__38061_38075 = 0;while(true){
if((i__38061_38075 < count__38060_38074))
{var class_38076 = cljs.core._nth.call(null,chunk__38059_38073,i__38061_38075);class_list_38071.add(class_38076);
{
var G__38077 = seq__38058_38072;
var G__38078 = chunk__38059_38073;
var G__38079 = count__38060_38074;
var G__38080 = (i__38061_38075 + 1);
seq__38058_38072 = G__38077;
chunk__38059_38073 = G__38078;
count__38060_38074 = G__38079;
i__38061_38075 = G__38080;
continue;
}
} else
{var temp__4092__auto___38081 = cljs.core.seq.call(null,seq__38058_38072);if(temp__4092__auto___38081)
{var seq__38058_38082__$1 = temp__4092__auto___38081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38058_38082__$1))
{var c__8604__auto___38083 = cljs.core.chunk_first.call(null,seq__38058_38082__$1);{
var G__38084 = cljs.core.chunk_rest.call(null,seq__38058_38082__$1);
var G__38085 = c__8604__auto___38083;
var G__38086 = cljs.core.count.call(null,c__8604__auto___38083);
var G__38087 = 0;
seq__38058_38072 = G__38084;
chunk__38059_38073 = G__38085;
count__38060_38074 = G__38086;
i__38061_38075 = G__38087;
continue;
}
} else
{var class_38088 = cljs.core.first.call(null,seq__38058_38082__$1);class_list_38071.add(class_38088);
{
var G__38089 = cljs.core.next.call(null,seq__38058_38082__$1);
var G__38090 = null;
var G__38091 = 0;
var G__38092 = 0;
seq__38058_38072 = G__38089;
chunk__38059_38073 = G__38090;
count__38060_38074 = G__38091;
i__38061_38075 = G__38092;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_38093 = elem__$1.className;var seq__38062_38094 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__38063_38095 = null;var count__38064_38096 = 0;var i__38065_38097 = 0;while(true){
if((i__38065_38097 < count__38064_38096))
{var class_38098 = cljs.core._nth.call(null,chunk__38063_38095,i__38065_38097);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_38093,class_38098)))
{} else
{elem__$1.className = (((class_name_38093 === ""))?class_38098:[cljs.core.str(class_name_38093),cljs.core.str(" "),cljs.core.str(class_38098)].join(''));
}
{
var G__38099 = seq__38062_38094;
var G__38100 = chunk__38063_38095;
var G__38101 = count__38064_38096;
var G__38102 = (i__38065_38097 + 1);
seq__38062_38094 = G__38099;
chunk__38063_38095 = G__38100;
count__38064_38096 = G__38101;
i__38065_38097 = G__38102;
continue;
}
} else
{var temp__4092__auto___38103 = cljs.core.seq.call(null,seq__38062_38094);if(temp__4092__auto___38103)
{var seq__38062_38104__$1 = temp__4092__auto___38103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38062_38104__$1))
{var c__8604__auto___38105 = cljs.core.chunk_first.call(null,seq__38062_38104__$1);{
var G__38106 = cljs.core.chunk_rest.call(null,seq__38062_38104__$1);
var G__38107 = c__8604__auto___38105;
var G__38108 = cljs.core.count.call(null,c__8604__auto___38105);
var G__38109 = 0;
seq__38062_38094 = G__38106;
chunk__38063_38095 = G__38107;
count__38064_38096 = G__38108;
i__38065_38097 = G__38109;
continue;
}
} else
{var class_38110 = cljs.core.first.call(null,seq__38062_38104__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_38093,class_38110)))
{} else
{elem__$1.className = (((class_name_38093 === ""))?class_38110:[cljs.core.str(class_name_38093),cljs.core.str(" "),cljs.core.str(class_38110)].join(''));
}
{
var G__38111 = cljs.core.next.call(null,seq__38062_38104__$1);
var G__38112 = null;
var G__38113 = 0;
var G__38114 = 0;
seq__38062_38094 = G__38111;
chunk__38063_38095 = G__38112;
count__38064_38096 = G__38113;
i__38065_38097 = G__38114;
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
var G__38115__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__38066_38116 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__38067_38117 = null;var count__38068_38118 = 0;var i__38069_38119 = 0;while(true){
if((i__38069_38119 < count__38068_38118))
{var c_38120 = cljs.core._nth.call(null,chunk__38067_38117,i__38069_38119);add_class_BANG_.call(null,elem__$1,c_38120);
{
var G__38121 = seq__38066_38116;
var G__38122 = chunk__38067_38117;
var G__38123 = count__38068_38118;
var G__38124 = (i__38069_38119 + 1);
seq__38066_38116 = G__38121;
chunk__38067_38117 = G__38122;
count__38068_38118 = G__38123;
i__38069_38119 = G__38124;
continue;
}
} else
{var temp__4092__auto___38125 = cljs.core.seq.call(null,seq__38066_38116);if(temp__4092__auto___38125)
{var seq__38066_38126__$1 = temp__4092__auto___38125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38066_38126__$1))
{var c__8604__auto___38127 = cljs.core.chunk_first.call(null,seq__38066_38126__$1);{
var G__38128 = cljs.core.chunk_rest.call(null,seq__38066_38126__$1);
var G__38129 = c__8604__auto___38127;
var G__38130 = cljs.core.count.call(null,c__8604__auto___38127);
var G__38131 = 0;
seq__38066_38116 = G__38128;
chunk__38067_38117 = G__38129;
count__38068_38118 = G__38130;
i__38069_38119 = G__38131;
continue;
}
} else
{var c_38132 = cljs.core.first.call(null,seq__38066_38126__$1);add_class_BANG_.call(null,elem__$1,c_38132);
{
var G__38133 = cljs.core.next.call(null,seq__38066_38126__$1);
var G__38134 = null;
var G__38135 = 0;
var G__38136 = 0;
seq__38066_38116 = G__38133;
chunk__38067_38117 = G__38134;
count__38068_38118 = G__38135;
i__38069_38119 = G__38136;
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
var G__38115 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38115__delegate.call(this,elem,classes,more_classes);};
G__38115.cljs$lang$maxFixedArity = 2;
G__38115.cljs$lang$applyTo = (function (arglist__38137){
var elem = cljs.core.first(arglist__38137);
arglist__38137 = cljs.core.next(arglist__38137);
var classes = cljs.core.first(arglist__38137);
var more_classes = cljs.core.rest(arglist__38137);
return G__38115__delegate(elem,classes,more_classes);
});
G__38115.cljs$core$IFn$_invoke$arity$variadic = G__38115__delegate;
return G__38115;
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
var G__38138 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__38138;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___38147 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___38147))
{var class_list_38148 = temp__4090__auto___38147;class_list_38148.remove(class$__$1);
} else
{var class_name_38149 = elem__$1.className;var new_class_name_38150 = dommy.attrs.remove_class_str.call(null,class_name_38149,class$__$1);if((class_name_38149 === new_class_name_38150))
{} else
{elem__$1.className = new_class_name_38150;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__38151__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__38143 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__38144 = null;var count__38145 = 0;var i__38146 = 0;while(true){
if((i__38146 < count__38145))
{var c = cljs.core._nth.call(null,chunk__38144,i__38146);remove_class_BANG_.call(null,elem__$1,c);
{
var G__38152 = seq__38143;
var G__38153 = chunk__38144;
var G__38154 = count__38145;
var G__38155 = (i__38146 + 1);
seq__38143 = G__38152;
chunk__38144 = G__38153;
count__38145 = G__38154;
i__38146 = G__38155;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38143);if(temp__4092__auto__)
{var seq__38143__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38143__$1))
{var c__8604__auto__ = cljs.core.chunk_first.call(null,seq__38143__$1);{
var G__38156 = cljs.core.chunk_rest.call(null,seq__38143__$1);
var G__38157 = c__8604__auto__;
var G__38158 = cljs.core.count.call(null,c__8604__auto__);
var G__38159 = 0;
seq__38143 = G__38156;
chunk__38144 = G__38157;
count__38145 = G__38158;
i__38146 = G__38159;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__38143__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__38160 = cljs.core.next.call(null,seq__38143__$1);
var G__38161 = null;
var G__38162 = 0;
var G__38163 = 0;
seq__38143 = G__38160;
chunk__38144 = G__38161;
count__38145 = G__38162;
i__38146 = G__38163;
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
var G__38151 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38151__delegate.call(this,elem,class$,classes);};
G__38151.cljs$lang$maxFixedArity = 2;
G__38151.cljs$lang$applyTo = (function (arglist__38164){
var elem = cljs.core.first(arglist__38164);
arglist__38164 = cljs.core.next(arglist__38164);
var class$ = cljs.core.first(arglist__38164);
var classes = cljs.core.rest(arglist__38164);
return G__38151__delegate(elem,class$,classes);
});
G__38151.cljs$core$IFn$_invoke$arity$variadic = G__38151__delegate;
return G__38151;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___38165 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___38165))
{var class_list_38166 = temp__4090__auto___38165;class_list_38166.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__38169){var vec__38170 = p__38169;var k = cljs.core.nth.call(null,vec__38170,0,null);var v = cljs.core.nth.call(null,vec__38170,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__38177_38183 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__38178_38184 = null;var count__38179_38185 = 0;var i__38180_38186 = 0;while(true){
if((i__38180_38186 < count__38179_38185))
{var vec__38181_38187 = cljs.core._nth.call(null,chunk__38178_38184,i__38180_38186);var k_38188 = cljs.core.nth.call(null,vec__38181_38187,0,null);var v_38189 = cljs.core.nth.call(null,vec__38181_38187,1,null);(style[cljs.core.name.call(null,k_38188)] = v_38189);
{
var G__38190 = seq__38177_38183;
var G__38191 = chunk__38178_38184;
var G__38192 = count__38179_38185;
var G__38193 = (i__38180_38186 + 1);
seq__38177_38183 = G__38190;
chunk__38178_38184 = G__38191;
count__38179_38185 = G__38192;
i__38180_38186 = G__38193;
continue;
}
} else
{var temp__4092__auto___38194 = cljs.core.seq.call(null,seq__38177_38183);if(temp__4092__auto___38194)
{var seq__38177_38195__$1 = temp__4092__auto___38194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38177_38195__$1))
{var c__8604__auto___38196 = cljs.core.chunk_first.call(null,seq__38177_38195__$1);{
var G__38197 = cljs.core.chunk_rest.call(null,seq__38177_38195__$1);
var G__38198 = c__8604__auto___38196;
var G__38199 = cljs.core.count.call(null,c__8604__auto___38196);
var G__38200 = 0;
seq__38177_38183 = G__38197;
chunk__38178_38184 = G__38198;
count__38179_38185 = G__38199;
i__38180_38186 = G__38200;
continue;
}
} else
{var vec__38182_38201 = cljs.core.first.call(null,seq__38177_38195__$1);var k_38202 = cljs.core.nth.call(null,vec__38182_38201,0,null);var v_38203 = cljs.core.nth.call(null,vec__38182_38201,1,null);(style[cljs.core.name.call(null,k_38202)] = v_38203);
{
var G__38204 = cljs.core.next.call(null,seq__38177_38195__$1);
var G__38205 = null;
var G__38206 = 0;
var G__38207 = 0;
seq__38177_38183 = G__38204;
chunk__38178_38184 = G__38205;
count__38179_38185 = G__38206;
i__38180_38186 = G__38207;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38208){
var elem = cljs.core.first(arglist__38208);
var kvs = cljs.core.rest(arglist__38208);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__38215_38221 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__38216_38222 = null;var count__38217_38223 = 0;var i__38218_38224 = 0;while(true){
if((i__38218_38224 < count__38217_38223))
{var vec__38219_38225 = cljs.core._nth.call(null,chunk__38216_38222,i__38218_38224);var k_38226 = cljs.core.nth.call(null,vec__38219_38225,0,null);var v_38227 = cljs.core.nth.call(null,vec__38219_38225,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_38226,[cljs.core.str(v_38227),cljs.core.str("px")].join(''));
{
var G__38228 = seq__38215_38221;
var G__38229 = chunk__38216_38222;
var G__38230 = count__38217_38223;
var G__38231 = (i__38218_38224 + 1);
seq__38215_38221 = G__38228;
chunk__38216_38222 = G__38229;
count__38217_38223 = G__38230;
i__38218_38224 = G__38231;
continue;
}
} else
{var temp__4092__auto___38232 = cljs.core.seq.call(null,seq__38215_38221);if(temp__4092__auto___38232)
{var seq__38215_38233__$1 = temp__4092__auto___38232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38215_38233__$1))
{var c__8604__auto___38234 = cljs.core.chunk_first.call(null,seq__38215_38233__$1);{
var G__38235 = cljs.core.chunk_rest.call(null,seq__38215_38233__$1);
var G__38236 = c__8604__auto___38234;
var G__38237 = cljs.core.count.call(null,c__8604__auto___38234);
var G__38238 = 0;
seq__38215_38221 = G__38235;
chunk__38216_38222 = G__38236;
count__38217_38223 = G__38237;
i__38218_38224 = G__38238;
continue;
}
} else
{var vec__38220_38239 = cljs.core.first.call(null,seq__38215_38233__$1);var k_38240 = cljs.core.nth.call(null,vec__38220_38239,0,null);var v_38241 = cljs.core.nth.call(null,vec__38220_38239,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_38240,[cljs.core.str(v_38241),cljs.core.str("px")].join(''));
{
var G__38242 = cljs.core.next.call(null,seq__38215_38233__$1);
var G__38243 = null;
var G__38244 = 0;
var G__38245 = 0;
seq__38215_38221 = G__38242;
chunk__38216_38222 = G__38243;
count__38217_38223 = G__38244;
i__38218_38224 = G__38245;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__38246){
var elem = cljs.core.first(arglist__38246);
var kvs = cljs.core.rest(arglist__38246);
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
{var G__38255 = dommy.template.__GT_node_like.call(null,elem);(G__38255[cljs.core.name.call(null,k)] = v);
return G__38255;
} else
{var G__38256 = dommy.template.__GT_node_like.call(null,elem);G__38256.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__38256;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__38263__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__38257_38264 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__38258_38265 = null;var count__38259_38266 = 0;var i__38260_38267 = 0;while(true){
if((i__38260_38267 < count__38259_38266))
{var vec__38261_38268 = cljs.core._nth.call(null,chunk__38258_38265,i__38260_38267);var k_38269__$1 = cljs.core.nth.call(null,vec__38261_38268,0,null);var v_38270__$1 = cljs.core.nth.call(null,vec__38261_38268,1,null);set_attr_BANG_.call(null,elem__$1,k_38269__$1,v_38270__$1);
{
var G__38271 = seq__38257_38264;
var G__38272 = chunk__38258_38265;
var G__38273 = count__38259_38266;
var G__38274 = (i__38260_38267 + 1);
seq__38257_38264 = G__38271;
chunk__38258_38265 = G__38272;
count__38259_38266 = G__38273;
i__38260_38267 = G__38274;
continue;
}
} else
{var temp__4092__auto___38275 = cljs.core.seq.call(null,seq__38257_38264);if(temp__4092__auto___38275)
{var seq__38257_38276__$1 = temp__4092__auto___38275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38257_38276__$1))
{var c__8604__auto___38277 = cljs.core.chunk_first.call(null,seq__38257_38276__$1);{
var G__38278 = cljs.core.chunk_rest.call(null,seq__38257_38276__$1);
var G__38279 = c__8604__auto___38277;
var G__38280 = cljs.core.count.call(null,c__8604__auto___38277);
var G__38281 = 0;
seq__38257_38264 = G__38278;
chunk__38258_38265 = G__38279;
count__38259_38266 = G__38280;
i__38260_38267 = G__38281;
continue;
}
} else
{var vec__38262_38282 = cljs.core.first.call(null,seq__38257_38276__$1);var k_38283__$1 = cljs.core.nth.call(null,vec__38262_38282,0,null);var v_38284__$1 = cljs.core.nth.call(null,vec__38262_38282,1,null);set_attr_BANG_.call(null,elem__$1,k_38283__$1,v_38284__$1);
{
var G__38285 = cljs.core.next.call(null,seq__38257_38276__$1);
var G__38286 = null;
var G__38287 = 0;
var G__38288 = 0;
seq__38257_38264 = G__38285;
chunk__38258_38265 = G__38286;
count__38259_38266 = G__38287;
i__38260_38267 = G__38288;
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
var G__38263 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__38263__delegate.call(this,elem,k,v,kvs);};
G__38263.cljs$lang$maxFixedArity = 3;
G__38263.cljs$lang$applyTo = (function (arglist__38289){
var elem = cljs.core.first(arglist__38289);
arglist__38289 = cljs.core.next(arglist__38289);
var k = cljs.core.first(arglist__38289);
arglist__38289 = cljs.core.next(arglist__38289);
var v = cljs.core.first(arglist__38289);
var kvs = cljs.core.rest(arglist__38289);
return G__38263__delegate(elem,k,v,kvs);
});
G__38263.cljs$core$IFn$_invoke$arity$variadic = G__38263__delegate;
return G__38263;
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
var G__38298__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__38294_38299 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__38295_38300 = null;var count__38296_38301 = 0;var i__38297_38302 = 0;while(true){
if((i__38297_38302 < count__38296_38301))
{var k_38303__$1 = cljs.core._nth.call(null,chunk__38295_38300,i__38297_38302);remove_attr_BANG_.call(null,elem__$1,k_38303__$1);
{
var G__38304 = seq__38294_38299;
var G__38305 = chunk__38295_38300;
var G__38306 = count__38296_38301;
var G__38307 = (i__38297_38302 + 1);
seq__38294_38299 = G__38304;
chunk__38295_38300 = G__38305;
count__38296_38301 = G__38306;
i__38297_38302 = G__38307;
continue;
}
} else
{var temp__4092__auto___38308 = cljs.core.seq.call(null,seq__38294_38299);if(temp__4092__auto___38308)
{var seq__38294_38309__$1 = temp__4092__auto___38308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38294_38309__$1))
{var c__8604__auto___38310 = cljs.core.chunk_first.call(null,seq__38294_38309__$1);{
var G__38311 = cljs.core.chunk_rest.call(null,seq__38294_38309__$1);
var G__38312 = c__8604__auto___38310;
var G__38313 = cljs.core.count.call(null,c__8604__auto___38310);
var G__38314 = 0;
seq__38294_38299 = G__38311;
chunk__38295_38300 = G__38312;
count__38296_38301 = G__38313;
i__38297_38302 = G__38314;
continue;
}
} else
{var k_38315__$1 = cljs.core.first.call(null,seq__38294_38309__$1);remove_attr_BANG_.call(null,elem__$1,k_38315__$1);
{
var G__38316 = cljs.core.next.call(null,seq__38294_38309__$1);
var G__38317 = null;
var G__38318 = 0;
var G__38319 = 0;
seq__38294_38299 = G__38316;
chunk__38295_38300 = G__38317;
count__38296_38301 = G__38318;
i__38297_38302 = G__38319;
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
var G__38298 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38298__delegate.call(this,elem,k,ks);};
G__38298.cljs$lang$maxFixedArity = 2;
G__38298.cljs$lang$applyTo = (function (arglist__38320){
var elem = cljs.core.first(arglist__38320);
arglist__38320 = cljs.core.next(arglist__38320);
var k = cljs.core.first(arglist__38320);
var ks = cljs.core.rest(arglist__38320);
return G__38298__delegate(elem,k,ks);
});
G__38298.cljs$core$IFn$_invoke$arity$variadic = G__38298__delegate;
return G__38298;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__38322 = dommy.template.__GT_node_like.call(null,elem);G__38322.style.display = ((show_QMARK_)?"":"none");
return G__38322;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__38324 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__38324,false);
return G__38324;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__38326 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__38326,true);
return G__38326;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__38328 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__38328["constructor"] = Object);
return G__38328;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
