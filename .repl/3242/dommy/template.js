// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj52160 = {};return obj52160;
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
{var str_52163 = node_str.substring(base_idx);while(true){
var next_idx_52164 = dommy.template.next_css_index.call(null,str_52163,1);var frag_52165 = (((next_idx_52164 >= 0))?str_52163.substring(0,next_idx_52164):str_52163);var G__52162_52166 = frag_52165.charAt(0);if(cljs.core._EQ_.call(null,"#",G__52162_52166))
{node.setAttribute("id",frag_52165.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__52162_52166))
{dommy.attrs.add_class_BANG_.call(null,node,frag_52165.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_52165.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_52164 >= 0))
{{
var G__52167 = str_52163.substring(next_idx_52164);
str_52163 = G__52167;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__52173 = data;if(G__52173)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__52173.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__52173.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52173);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52173);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__52174_52178 = cljs.core.seq.call(null,data);var chunk__52175_52179 = null;var count__52176_52180 = 0;var i__52177_52181 = 0;while(true){
if((i__52177_52181 < count__52176_52180))
{var child_52182 = cljs.core._nth.call(null,chunk__52175_52179,i__52177_52181);__GT_document_fragment.call(null,result_frag,child_52182);
{
var G__52183 = seq__52174_52178;
var G__52184 = chunk__52175_52179;
var G__52185 = count__52176_52180;
var G__52186 = (i__52177_52181 + 1);
seq__52174_52178 = G__52183;
chunk__52175_52179 = G__52184;
count__52176_52180 = G__52185;
i__52177_52181 = G__52186;
continue;
}
} else
{var temp__4092__auto___52187 = cljs.core.seq.call(null,seq__52174_52178);if(temp__4092__auto___52187)
{var seq__52174_52188__$1 = temp__4092__auto___52187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52174_52188__$1))
{var c__8604__auto___52189 = cljs.core.chunk_first.call(null,seq__52174_52188__$1);{
var G__52190 = cljs.core.chunk_rest.call(null,seq__52174_52188__$1);
var G__52191 = c__8604__auto___52189;
var G__52192 = cljs.core.count.call(null,c__8604__auto___52189);
var G__52193 = 0;
seq__52174_52178 = G__52190;
chunk__52175_52179 = G__52191;
count__52176_52180 = G__52192;
i__52177_52181 = G__52193;
continue;
}
} else
{var child_52194 = cljs.core.first.call(null,seq__52174_52188__$1);__GT_document_fragment.call(null,result_frag,child_52194);
{
var G__52195 = cljs.core.next.call(null,seq__52174_52188__$1);
var G__52196 = null;
var G__52197 = 0;
var G__52198 = 0;
seq__52174_52178 = G__52195;
chunk__52175_52179 = G__52196;
count__52176_52180 = G__52197;
i__52177_52181 = G__52198;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__52200 = data;if(G__52200)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__52200.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__52200.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52200);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52200);
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
dommy.template.compound_element = (function compound_element(p__52201){var vec__52221 = p__52201;var tag_name = cljs.core.nth.call(null,vec__52221,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__52221,1,null);var children = cljs.core.nthnext.call(null,vec__52221,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__52223 = maybe_attrs;if(G__52223)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__52223.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__52223.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52223);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52223);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__52224_52240 = cljs.core.seq.call(null,attrs);var chunk__52225_52241 = null;var count__52226_52242 = 0;var i__52227_52243 = 0;while(true){
if((i__52227_52243 < count__52226_52242))
{var vec__52228_52244 = cljs.core._nth.call(null,chunk__52225_52241,i__52227_52243);var k_52245 = cljs.core.nth.call(null,vec__52228_52244,0,null);var v_52246 = cljs.core.nth.call(null,vec__52228_52244,1,null);var G__52229_52247 = k_52245;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__52229_52247))
{var seq__52230_52248 = cljs.core.seq.call(null,v_52246);var chunk__52231_52249 = null;var count__52232_52250 = 0;var i__52233_52251 = 0;while(true){
if((i__52233_52251 < count__52232_52250))
{var c_52252 = cljs.core._nth.call(null,chunk__52231_52249,i__52233_52251);dommy.attrs.add_class_BANG_.call(null,n,c_52252);
{
var G__52253 = seq__52230_52248;
var G__52254 = chunk__52231_52249;
var G__52255 = count__52232_52250;
var G__52256 = (i__52233_52251 + 1);
seq__52230_52248 = G__52253;
chunk__52231_52249 = G__52254;
count__52232_52250 = G__52255;
i__52233_52251 = G__52256;
continue;
}
} else
{var temp__4092__auto___52257 = cljs.core.seq.call(null,seq__52230_52248);if(temp__4092__auto___52257)
{var seq__52230_52258__$1 = temp__4092__auto___52257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52230_52258__$1))
{var c__8604__auto___52259 = cljs.core.chunk_first.call(null,seq__52230_52258__$1);{
var G__52260 = cljs.core.chunk_rest.call(null,seq__52230_52258__$1);
var G__52261 = c__8604__auto___52259;
var G__52262 = cljs.core.count.call(null,c__8604__auto___52259);
var G__52263 = 0;
seq__52230_52248 = G__52260;
chunk__52231_52249 = G__52261;
count__52232_52250 = G__52262;
i__52233_52251 = G__52263;
continue;
}
} else
{var c_52264 = cljs.core.first.call(null,seq__52230_52258__$1);dommy.attrs.add_class_BANG_.call(null,n,c_52264);
{
var G__52265 = cljs.core.next.call(null,seq__52230_52258__$1);
var G__52266 = null;
var G__52267 = 0;
var G__52268 = 0;
seq__52230_52248 = G__52265;
chunk__52231_52249 = G__52266;
count__52232_52250 = G__52267;
i__52233_52251 = G__52268;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__52229_52247))
{dommy.attrs.add_class_BANG_.call(null,n,v_52246);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_52245,v_52246);
} else
{}
}
}
{
var G__52269 = seq__52224_52240;
var G__52270 = chunk__52225_52241;
var G__52271 = count__52226_52242;
var G__52272 = (i__52227_52243 + 1);
seq__52224_52240 = G__52269;
chunk__52225_52241 = G__52270;
count__52226_52242 = G__52271;
i__52227_52243 = G__52272;
continue;
}
} else
{var temp__4092__auto___52273 = cljs.core.seq.call(null,seq__52224_52240);if(temp__4092__auto___52273)
{var seq__52224_52274__$1 = temp__4092__auto___52273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52224_52274__$1))
{var c__8604__auto___52275 = cljs.core.chunk_first.call(null,seq__52224_52274__$1);{
var G__52276 = cljs.core.chunk_rest.call(null,seq__52224_52274__$1);
var G__52277 = c__8604__auto___52275;
var G__52278 = cljs.core.count.call(null,c__8604__auto___52275);
var G__52279 = 0;
seq__52224_52240 = G__52276;
chunk__52225_52241 = G__52277;
count__52226_52242 = G__52278;
i__52227_52243 = G__52279;
continue;
}
} else
{var vec__52234_52280 = cljs.core.first.call(null,seq__52224_52274__$1);var k_52281 = cljs.core.nth.call(null,vec__52234_52280,0,null);var v_52282 = cljs.core.nth.call(null,vec__52234_52280,1,null);var G__52235_52283 = k_52281;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__52235_52283))
{var seq__52236_52284 = cljs.core.seq.call(null,v_52282);var chunk__52237_52285 = null;var count__52238_52286 = 0;var i__52239_52287 = 0;while(true){
if((i__52239_52287 < count__52238_52286))
{var c_52288 = cljs.core._nth.call(null,chunk__52237_52285,i__52239_52287);dommy.attrs.add_class_BANG_.call(null,n,c_52288);
{
var G__52289 = seq__52236_52284;
var G__52290 = chunk__52237_52285;
var G__52291 = count__52238_52286;
var G__52292 = (i__52239_52287 + 1);
seq__52236_52284 = G__52289;
chunk__52237_52285 = G__52290;
count__52238_52286 = G__52291;
i__52239_52287 = G__52292;
continue;
}
} else
{var temp__4092__auto___52293__$1 = cljs.core.seq.call(null,seq__52236_52284);if(temp__4092__auto___52293__$1)
{var seq__52236_52294__$1 = temp__4092__auto___52293__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52236_52294__$1))
{var c__8604__auto___52295 = cljs.core.chunk_first.call(null,seq__52236_52294__$1);{
var G__52296 = cljs.core.chunk_rest.call(null,seq__52236_52294__$1);
var G__52297 = c__8604__auto___52295;
var G__52298 = cljs.core.count.call(null,c__8604__auto___52295);
var G__52299 = 0;
seq__52236_52284 = G__52296;
chunk__52237_52285 = G__52297;
count__52238_52286 = G__52298;
i__52239_52287 = G__52299;
continue;
}
} else
{var c_52300 = cljs.core.first.call(null,seq__52236_52294__$1);dommy.attrs.add_class_BANG_.call(null,n,c_52300);
{
var G__52301 = cljs.core.next.call(null,seq__52236_52294__$1);
var G__52302 = null;
var G__52303 = 0;
var G__52304 = 0;
seq__52236_52284 = G__52301;
chunk__52237_52285 = G__52302;
count__52238_52286 = G__52303;
i__52239_52287 = G__52304;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__52235_52283))
{dommy.attrs.add_class_BANG_.call(null,n,v_52282);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_52281,v_52282);
} else
{}
}
}
{
var G__52305 = cljs.core.next.call(null,seq__52224_52274__$1);
var G__52306 = null;
var G__52307 = 0;
var G__52308 = 0;
seq__52224_52240 = G__52305;
chunk__52225_52241 = G__52306;
count__52226_52242 = G__52307;
i__52227_52243 = G__52308;
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
}catch (e52309){if((e52309 instanceof ReferenceError))
{var __52310 = e52309;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e52309;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__52312 = data;if(G__52312)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__52312.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__52312.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52312);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__52312);
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
