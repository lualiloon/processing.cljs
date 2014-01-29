// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj37892 = {};return obj37892;
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
{var str_37895 = node_str.substring(base_idx);while(true){
var next_idx_37896 = dommy.template.next_css_index.call(null,str_37895,1);var frag_37897 = (((next_idx_37896 >= 0))?str_37895.substring(0,next_idx_37896):str_37895);var G__37894_37898 = frag_37897.charAt(0);if(cljs.core._EQ_.call(null,"#",G__37894_37898))
{node.setAttribute("id",frag_37897.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__37894_37898))
{dommy.attrs.add_class_BANG_.call(null,node,frag_37897.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_37897.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_37896 >= 0))
{{
var G__37899 = str_37895.substring(next_idx_37896);
str_37895 = G__37899;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__37905 = data;if(G__37905)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__37905.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37905.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37905);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37905);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__37906_37910 = cljs.core.seq.call(null,data);var chunk__37907_37911 = null;var count__37908_37912 = 0;var i__37909_37913 = 0;while(true){
if((i__37909_37913 < count__37908_37912))
{var child_37914 = cljs.core._nth.call(null,chunk__37907_37911,i__37909_37913);__GT_document_fragment.call(null,result_frag,child_37914);
{
var G__37915 = seq__37906_37910;
var G__37916 = chunk__37907_37911;
var G__37917 = count__37908_37912;
var G__37918 = (i__37909_37913 + 1);
seq__37906_37910 = G__37915;
chunk__37907_37911 = G__37916;
count__37908_37912 = G__37917;
i__37909_37913 = G__37918;
continue;
}
} else
{var temp__4092__auto___37919 = cljs.core.seq.call(null,seq__37906_37910);if(temp__4092__auto___37919)
{var seq__37906_37920__$1 = temp__4092__auto___37919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37906_37920__$1))
{var c__8604__auto___37921 = cljs.core.chunk_first.call(null,seq__37906_37920__$1);{
var G__37922 = cljs.core.chunk_rest.call(null,seq__37906_37920__$1);
var G__37923 = c__8604__auto___37921;
var G__37924 = cljs.core.count.call(null,c__8604__auto___37921);
var G__37925 = 0;
seq__37906_37910 = G__37922;
chunk__37907_37911 = G__37923;
count__37908_37912 = G__37924;
i__37909_37913 = G__37925;
continue;
}
} else
{var child_37926 = cljs.core.first.call(null,seq__37906_37920__$1);__GT_document_fragment.call(null,result_frag,child_37926);
{
var G__37927 = cljs.core.next.call(null,seq__37906_37920__$1);
var G__37928 = null;
var G__37929 = 0;
var G__37930 = 0;
seq__37906_37910 = G__37927;
chunk__37907_37911 = G__37928;
count__37908_37912 = G__37929;
i__37909_37913 = G__37930;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__37932 = data;if(G__37932)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__37932.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37932.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37932);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37932);
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
dommy.template.compound_element = (function compound_element(p__37933){var vec__37953 = p__37933;var tag_name = cljs.core.nth.call(null,vec__37953,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__37953,1,null);var children = cljs.core.nthnext.call(null,vec__37953,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__37955 = maybe_attrs;if(G__37955)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__37955.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37955.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37955);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37955);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__37956_37972 = cljs.core.seq.call(null,attrs);var chunk__37957_37973 = null;var count__37958_37974 = 0;var i__37959_37975 = 0;while(true){
if((i__37959_37975 < count__37958_37974))
{var vec__37960_37976 = cljs.core._nth.call(null,chunk__37957_37973,i__37959_37975);var k_37977 = cljs.core.nth.call(null,vec__37960_37976,0,null);var v_37978 = cljs.core.nth.call(null,vec__37960_37976,1,null);var G__37961_37979 = k_37977;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__37961_37979))
{var seq__37962_37980 = cljs.core.seq.call(null,v_37978);var chunk__37963_37981 = null;var count__37964_37982 = 0;var i__37965_37983 = 0;while(true){
if((i__37965_37983 < count__37964_37982))
{var c_37984 = cljs.core._nth.call(null,chunk__37963_37981,i__37965_37983);dommy.attrs.add_class_BANG_.call(null,n,c_37984);
{
var G__37985 = seq__37962_37980;
var G__37986 = chunk__37963_37981;
var G__37987 = count__37964_37982;
var G__37988 = (i__37965_37983 + 1);
seq__37962_37980 = G__37985;
chunk__37963_37981 = G__37986;
count__37964_37982 = G__37987;
i__37965_37983 = G__37988;
continue;
}
} else
{var temp__4092__auto___37989 = cljs.core.seq.call(null,seq__37962_37980);if(temp__4092__auto___37989)
{var seq__37962_37990__$1 = temp__4092__auto___37989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37962_37990__$1))
{var c__8604__auto___37991 = cljs.core.chunk_first.call(null,seq__37962_37990__$1);{
var G__37992 = cljs.core.chunk_rest.call(null,seq__37962_37990__$1);
var G__37993 = c__8604__auto___37991;
var G__37994 = cljs.core.count.call(null,c__8604__auto___37991);
var G__37995 = 0;
seq__37962_37980 = G__37992;
chunk__37963_37981 = G__37993;
count__37964_37982 = G__37994;
i__37965_37983 = G__37995;
continue;
}
} else
{var c_37996 = cljs.core.first.call(null,seq__37962_37990__$1);dommy.attrs.add_class_BANG_.call(null,n,c_37996);
{
var G__37997 = cljs.core.next.call(null,seq__37962_37990__$1);
var G__37998 = null;
var G__37999 = 0;
var G__38000 = 0;
seq__37962_37980 = G__37997;
chunk__37963_37981 = G__37998;
count__37964_37982 = G__37999;
i__37965_37983 = G__38000;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__37961_37979))
{dommy.attrs.add_class_BANG_.call(null,n,v_37978);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_37977,v_37978);
} else
{}
}
}
{
var G__38001 = seq__37956_37972;
var G__38002 = chunk__37957_37973;
var G__38003 = count__37958_37974;
var G__38004 = (i__37959_37975 + 1);
seq__37956_37972 = G__38001;
chunk__37957_37973 = G__38002;
count__37958_37974 = G__38003;
i__37959_37975 = G__38004;
continue;
}
} else
{var temp__4092__auto___38005 = cljs.core.seq.call(null,seq__37956_37972);if(temp__4092__auto___38005)
{var seq__37956_38006__$1 = temp__4092__auto___38005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37956_38006__$1))
{var c__8604__auto___38007 = cljs.core.chunk_first.call(null,seq__37956_38006__$1);{
var G__38008 = cljs.core.chunk_rest.call(null,seq__37956_38006__$1);
var G__38009 = c__8604__auto___38007;
var G__38010 = cljs.core.count.call(null,c__8604__auto___38007);
var G__38011 = 0;
seq__37956_37972 = G__38008;
chunk__37957_37973 = G__38009;
count__37958_37974 = G__38010;
i__37959_37975 = G__38011;
continue;
}
} else
{var vec__37966_38012 = cljs.core.first.call(null,seq__37956_38006__$1);var k_38013 = cljs.core.nth.call(null,vec__37966_38012,0,null);var v_38014 = cljs.core.nth.call(null,vec__37966_38012,1,null);var G__37967_38015 = k_38013;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__37967_38015))
{var seq__37968_38016 = cljs.core.seq.call(null,v_38014);var chunk__37969_38017 = null;var count__37970_38018 = 0;var i__37971_38019 = 0;while(true){
if((i__37971_38019 < count__37970_38018))
{var c_38020 = cljs.core._nth.call(null,chunk__37969_38017,i__37971_38019);dommy.attrs.add_class_BANG_.call(null,n,c_38020);
{
var G__38021 = seq__37968_38016;
var G__38022 = chunk__37969_38017;
var G__38023 = count__37970_38018;
var G__38024 = (i__37971_38019 + 1);
seq__37968_38016 = G__38021;
chunk__37969_38017 = G__38022;
count__37970_38018 = G__38023;
i__37971_38019 = G__38024;
continue;
}
} else
{var temp__4092__auto___38025__$1 = cljs.core.seq.call(null,seq__37968_38016);if(temp__4092__auto___38025__$1)
{var seq__37968_38026__$1 = temp__4092__auto___38025__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37968_38026__$1))
{var c__8604__auto___38027 = cljs.core.chunk_first.call(null,seq__37968_38026__$1);{
var G__38028 = cljs.core.chunk_rest.call(null,seq__37968_38026__$1);
var G__38029 = c__8604__auto___38027;
var G__38030 = cljs.core.count.call(null,c__8604__auto___38027);
var G__38031 = 0;
seq__37968_38016 = G__38028;
chunk__37969_38017 = G__38029;
count__37970_38018 = G__38030;
i__37971_38019 = G__38031;
continue;
}
} else
{var c_38032 = cljs.core.first.call(null,seq__37968_38026__$1);dommy.attrs.add_class_BANG_.call(null,n,c_38032);
{
var G__38033 = cljs.core.next.call(null,seq__37968_38026__$1);
var G__38034 = null;
var G__38035 = 0;
var G__38036 = 0;
seq__37968_38016 = G__38033;
chunk__37969_38017 = G__38034;
count__37970_38018 = G__38035;
i__37971_38019 = G__38036;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__37967_38015))
{dommy.attrs.add_class_BANG_.call(null,n,v_38014);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_38013,v_38014);
} else
{}
}
}
{
var G__38037 = cljs.core.next.call(null,seq__37956_38006__$1);
var G__38038 = null;
var G__38039 = 0;
var G__38040 = 0;
seq__37956_37972 = G__38037;
chunk__37957_37973 = G__38038;
count__37958_37974 = G__38039;
i__37959_37975 = G__38040;
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
}catch (e38041){if((e38041 instanceof ReferenceError))
{var __38042 = e38041;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38041;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__38044 = data;if(G__38044)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__38044.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__38044.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__38044);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__38044);
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
