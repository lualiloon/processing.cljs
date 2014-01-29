// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj24920 = {};return obj24920;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7850__auto__ = this$;if(and__7850__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7850__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8483__auto__ = (((this$ == null))?null:this$);return (function (){var or__7862__auto__ = (dommy.template._elem[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (dommy.template._elem["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_24923 = node_str.substring(base_idx);while(true){
var next_idx_24924 = dommy.template.next_css_index.call(null,str_24923,1);var frag_24925 = (((next_idx_24924 >= 0))?str_24923.substring(0,next_idx_24924):str_24923);var G__24922_24926 = frag_24925.charAt(0);if(cljs.core._EQ_.call(null,"#",G__24922_24926))
{node.setAttribute("id",frag_24925.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__24922_24926))
{dommy.attrs.add_class_BANG_.call(null,node,frag_24925.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_24925.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_24924 >= 0))
{{
var G__24927 = str_24923.substring(next_idx_24924);
str_24923 = G__24927;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__24933 = data;if(G__24933)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__24933.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24933);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__24934_24938 = cljs.core.seq.call(null,data);var chunk__24935_24939 = null;var count__24936_24940 = 0;var i__24937_24941 = 0;while(true){
if((i__24937_24941 < count__24936_24940))
{var child_24942 = cljs.core._nth.call(null,chunk__24935_24939,i__24937_24941);__GT_document_fragment.call(null,result_frag,child_24942);
{
var G__24943 = seq__24934_24938;
var G__24944 = chunk__24935_24939;
var G__24945 = count__24936_24940;
var G__24946 = (i__24937_24941 + 1);
seq__24934_24938 = G__24943;
chunk__24935_24939 = G__24944;
count__24936_24940 = G__24945;
i__24937_24941 = G__24946;
continue;
}
} else
{var temp__4092__auto___24947 = cljs.core.seq.call(null,seq__24934_24938);if(temp__4092__auto___24947)
{var seq__24934_24948__$1 = temp__4092__auto___24947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24934_24948__$1))
{var c__8604__auto___24949 = cljs.core.chunk_first.call(null,seq__24934_24948__$1);{
var G__24950 = cljs.core.chunk_rest.call(null,seq__24934_24948__$1);
var G__24951 = c__8604__auto___24949;
var G__24952 = cljs.core.count.call(null,c__8604__auto___24949);
var G__24953 = 0;
seq__24934_24938 = G__24950;
chunk__24935_24939 = G__24951;
count__24936_24940 = G__24952;
i__24937_24941 = G__24953;
continue;
}
} else
{var child_24954 = cljs.core.first.call(null,seq__24934_24948__$1);__GT_document_fragment.call(null,result_frag,child_24954);
{
var G__24955 = cljs.core.next.call(null,seq__24934_24948__$1);
var G__24956 = null;
var G__24957 = 0;
var G__24958 = 0;
seq__24934_24938 = G__24955;
chunk__24935_24939 = G__24956;
count__24936_24940 = G__24957;
i__24937_24941 = G__24958;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__24960 = data;if(G__24960)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__24960.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24960.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24960);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24960);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__24961){var vec__24981 = p__24961;var tag_name = cljs.core.nth.call(null,vec__24981,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__24981,1,null);var children = cljs.core.nthnext.call(null,vec__24981,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__24983 = maybe_attrs;if(G__24983)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__24983.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24983.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24983);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24983);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__24984_25000 = cljs.core.seq.call(null,attrs);var chunk__24985_25001 = null;var count__24986_25002 = 0;var i__24987_25003 = 0;while(true){
if((i__24987_25003 < count__24986_25002))
{var vec__24988_25004 = cljs.core._nth.call(null,chunk__24985_25001,i__24987_25003);var k_25005 = cljs.core.nth.call(null,vec__24988_25004,0,null);var v_25006 = cljs.core.nth.call(null,vec__24988_25004,1,null);var G__24989_25007 = k_25005;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24989_25007))
{var seq__24990_25008 = cljs.core.seq.call(null,v_25006);var chunk__24991_25009 = null;var count__24992_25010 = 0;var i__24993_25011 = 0;while(true){
if((i__24993_25011 < count__24992_25010))
{var c_25012 = cljs.core._nth.call(null,chunk__24991_25009,i__24993_25011);dommy.attrs.add_class_BANG_.call(null,n,c_25012);
{
var G__25013 = seq__24990_25008;
var G__25014 = chunk__24991_25009;
var G__25015 = count__24992_25010;
var G__25016 = (i__24993_25011 + 1);
seq__24990_25008 = G__25013;
chunk__24991_25009 = G__25014;
count__24992_25010 = G__25015;
i__24993_25011 = G__25016;
continue;
}
} else
{var temp__4092__auto___25017 = cljs.core.seq.call(null,seq__24990_25008);if(temp__4092__auto___25017)
{var seq__24990_25018__$1 = temp__4092__auto___25017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24990_25018__$1))
{var c__8604__auto___25019 = cljs.core.chunk_first.call(null,seq__24990_25018__$1);{
var G__25020 = cljs.core.chunk_rest.call(null,seq__24990_25018__$1);
var G__25021 = c__8604__auto___25019;
var G__25022 = cljs.core.count.call(null,c__8604__auto___25019);
var G__25023 = 0;
seq__24990_25008 = G__25020;
chunk__24991_25009 = G__25021;
count__24992_25010 = G__25022;
i__24993_25011 = G__25023;
continue;
}
} else
{var c_25024 = cljs.core.first.call(null,seq__24990_25018__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25024);
{
var G__25025 = cljs.core.next.call(null,seq__24990_25018__$1);
var G__25026 = null;
var G__25027 = 0;
var G__25028 = 0;
seq__24990_25008 = G__25025;
chunk__24991_25009 = G__25026;
count__24992_25010 = G__25027;
i__24993_25011 = G__25028;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24989_25007))
{dommy.attrs.add_class_BANG_.call(null,n,v_25006);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25005,v_25006);
} else
{}
}
}
{
var G__25029 = seq__24984_25000;
var G__25030 = chunk__24985_25001;
var G__25031 = count__24986_25002;
var G__25032 = (i__24987_25003 + 1);
seq__24984_25000 = G__25029;
chunk__24985_25001 = G__25030;
count__24986_25002 = G__25031;
i__24987_25003 = G__25032;
continue;
}
} else
{var temp__4092__auto___25033 = cljs.core.seq.call(null,seq__24984_25000);if(temp__4092__auto___25033)
{var seq__24984_25034__$1 = temp__4092__auto___25033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24984_25034__$1))
{var c__8604__auto___25035 = cljs.core.chunk_first.call(null,seq__24984_25034__$1);{
var G__25036 = cljs.core.chunk_rest.call(null,seq__24984_25034__$1);
var G__25037 = c__8604__auto___25035;
var G__25038 = cljs.core.count.call(null,c__8604__auto___25035);
var G__25039 = 0;
seq__24984_25000 = G__25036;
chunk__24985_25001 = G__25037;
count__24986_25002 = G__25038;
i__24987_25003 = G__25039;
continue;
}
} else
{var vec__24994_25040 = cljs.core.first.call(null,seq__24984_25034__$1);var k_25041 = cljs.core.nth.call(null,vec__24994_25040,0,null);var v_25042 = cljs.core.nth.call(null,vec__24994_25040,1,null);var G__24995_25043 = k_25041;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24995_25043))
{var seq__24996_25044 = cljs.core.seq.call(null,v_25042);var chunk__24997_25045 = null;var count__24998_25046 = 0;var i__24999_25047 = 0;while(true){
if((i__24999_25047 < count__24998_25046))
{var c_25048 = cljs.core._nth.call(null,chunk__24997_25045,i__24999_25047);dommy.attrs.add_class_BANG_.call(null,n,c_25048);
{
var G__25049 = seq__24996_25044;
var G__25050 = chunk__24997_25045;
var G__25051 = count__24998_25046;
var G__25052 = (i__24999_25047 + 1);
seq__24996_25044 = G__25049;
chunk__24997_25045 = G__25050;
count__24998_25046 = G__25051;
i__24999_25047 = G__25052;
continue;
}
} else
{var temp__4092__auto___25053__$1 = cljs.core.seq.call(null,seq__24996_25044);if(temp__4092__auto___25053__$1)
{var seq__24996_25054__$1 = temp__4092__auto___25053__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24996_25054__$1))
{var c__8604__auto___25055 = cljs.core.chunk_first.call(null,seq__24996_25054__$1);{
var G__25056 = cljs.core.chunk_rest.call(null,seq__24996_25054__$1);
var G__25057 = c__8604__auto___25055;
var G__25058 = cljs.core.count.call(null,c__8604__auto___25055);
var G__25059 = 0;
seq__24996_25044 = G__25056;
chunk__24997_25045 = G__25057;
count__24998_25046 = G__25058;
i__24999_25047 = G__25059;
continue;
}
} else
{var c_25060 = cljs.core.first.call(null,seq__24996_25054__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25060);
{
var G__25061 = cljs.core.next.call(null,seq__24996_25054__$1);
var G__25062 = null;
var G__25063 = 0;
var G__25064 = 0;
seq__24996_25044 = G__25061;
chunk__24997_25045 = G__25062;
count__24998_25046 = G__25063;
i__24999_25047 = G__25064;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24995_25043))
{dommy.attrs.add_class_BANG_.call(null,n,v_25042);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25041,v_25042);
} else
{}
}
}
{
var G__25065 = cljs.core.next.call(null,seq__24984_25034__$1);
var G__25066 = null;
var G__25067 = 0;
var G__25068 = 0;
seq__24984_25000 = G__25065;
chunk__24985_25001 = G__25066;
count__24986_25002 = G__25067;
i__24987_25003 = G__25068;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e25069){if((e25069 instanceof ReferenceError))
{var __25070 = e25069;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25069;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__25072 = data;if(G__25072)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__25072.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25072.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25072);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25072);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
