// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj31153 = {};return obj31153;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7838__auto__ = this$;if(and__7838__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7838__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8471__auto__ = (((this$ == null))?null:this$);return (function (){var or__7850__auto__ = (dommy.template._elem[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (dommy.template._elem["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
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
{var str_31156 = node_str.substring(base_idx);while(true){
var next_idx_31157 = dommy.template.next_css_index.call(null,str_31156,1);var frag_31158 = (((next_idx_31157 >= 0))?str_31156.substring(0,next_idx_31157):str_31156);var G__31155_31159 = frag_31158.charAt(0);if(cljs.core._EQ_.call(null,"#",G__31155_31159))
{node.setAttribute("id",frag_31158.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__31155_31159))
{dommy.attrs.add_class_BANG_.call(null,node,frag_31158.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_31158.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_31157 >= 0))
{{
var G__31160 = str_31156.substring(next_idx_31157);
str_31156 = G__31160;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__31166 = data;if(G__31166)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__31166.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31166.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31166);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31166);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__31167_31171 = cljs.core.seq.call(null,data);var chunk__31168_31172 = null;var count__31169_31173 = 0;var i__31170_31174 = 0;while(true){
if((i__31170_31174 < count__31169_31173))
{var child_31175 = cljs.core._nth.call(null,chunk__31168_31172,i__31170_31174);__GT_document_fragment.call(null,result_frag,child_31175);
{
var G__31176 = seq__31167_31171;
var G__31177 = chunk__31168_31172;
var G__31178 = count__31169_31173;
var G__31179 = (i__31170_31174 + 1);
seq__31167_31171 = G__31176;
chunk__31168_31172 = G__31177;
count__31169_31173 = G__31178;
i__31170_31174 = G__31179;
continue;
}
} else
{var temp__4092__auto___31180 = cljs.core.seq.call(null,seq__31167_31171);if(temp__4092__auto___31180)
{var seq__31167_31181__$1 = temp__4092__auto___31180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31167_31181__$1))
{var c__8592__auto___31182 = cljs.core.chunk_first.call(null,seq__31167_31181__$1);{
var G__31183 = cljs.core.chunk_rest.call(null,seq__31167_31181__$1);
var G__31184 = c__8592__auto___31182;
var G__31185 = cljs.core.count.call(null,c__8592__auto___31182);
var G__31186 = 0;
seq__31167_31171 = G__31183;
chunk__31168_31172 = G__31184;
count__31169_31173 = G__31185;
i__31170_31174 = G__31186;
continue;
}
} else
{var child_31187 = cljs.core.first.call(null,seq__31167_31181__$1);__GT_document_fragment.call(null,result_frag,child_31187);
{
var G__31188 = cljs.core.next.call(null,seq__31167_31181__$1);
var G__31189 = null;
var G__31190 = 0;
var G__31191 = 0;
seq__31167_31171 = G__31188;
chunk__31168_31172 = G__31189;
count__31169_31173 = G__31190;
i__31170_31174 = G__31191;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__31193 = data;if(G__31193)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__31193.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31193.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31193);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31193);
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
dommy.template.compound_element = (function compound_element(p__31194){var vec__31214 = p__31194;var tag_name = cljs.core.nth.call(null,vec__31214,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__31214,1,null);var children = cljs.core.nthnext.call(null,vec__31214,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__31216 = maybe_attrs;if(G__31216)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__31216.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31216.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31216);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31216);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__31217_31233 = cljs.core.seq.call(null,attrs);var chunk__31218_31234 = null;var count__31219_31235 = 0;var i__31220_31236 = 0;while(true){
if((i__31220_31236 < count__31219_31235))
{var vec__31221_31237 = cljs.core._nth.call(null,chunk__31218_31234,i__31220_31236);var k_31238 = cljs.core.nth.call(null,vec__31221_31237,0,null);var v_31239 = cljs.core.nth.call(null,vec__31221_31237,1,null);var G__31222_31240 = k_31238;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__31222_31240))
{var seq__31223_31241 = cljs.core.seq.call(null,v_31239);var chunk__31224_31242 = null;var count__31225_31243 = 0;var i__31226_31244 = 0;while(true){
if((i__31226_31244 < count__31225_31243))
{var c_31245 = cljs.core._nth.call(null,chunk__31224_31242,i__31226_31244);dommy.attrs.add_class_BANG_.call(null,n,c_31245);
{
var G__31246 = seq__31223_31241;
var G__31247 = chunk__31224_31242;
var G__31248 = count__31225_31243;
var G__31249 = (i__31226_31244 + 1);
seq__31223_31241 = G__31246;
chunk__31224_31242 = G__31247;
count__31225_31243 = G__31248;
i__31226_31244 = G__31249;
continue;
}
} else
{var temp__4092__auto___31250 = cljs.core.seq.call(null,seq__31223_31241);if(temp__4092__auto___31250)
{var seq__31223_31251__$1 = temp__4092__auto___31250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31223_31251__$1))
{var c__8592__auto___31252 = cljs.core.chunk_first.call(null,seq__31223_31251__$1);{
var G__31253 = cljs.core.chunk_rest.call(null,seq__31223_31251__$1);
var G__31254 = c__8592__auto___31252;
var G__31255 = cljs.core.count.call(null,c__8592__auto___31252);
var G__31256 = 0;
seq__31223_31241 = G__31253;
chunk__31224_31242 = G__31254;
count__31225_31243 = G__31255;
i__31226_31244 = G__31256;
continue;
}
} else
{var c_31257 = cljs.core.first.call(null,seq__31223_31251__$1);dommy.attrs.add_class_BANG_.call(null,n,c_31257);
{
var G__31258 = cljs.core.next.call(null,seq__31223_31251__$1);
var G__31259 = null;
var G__31260 = 0;
var G__31261 = 0;
seq__31223_31241 = G__31258;
chunk__31224_31242 = G__31259;
count__31225_31243 = G__31260;
i__31226_31244 = G__31261;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__31222_31240))
{dommy.attrs.add_class_BANG_.call(null,n,v_31239);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_31238,v_31239);
} else
{}
}
}
{
var G__31262 = seq__31217_31233;
var G__31263 = chunk__31218_31234;
var G__31264 = count__31219_31235;
var G__31265 = (i__31220_31236 + 1);
seq__31217_31233 = G__31262;
chunk__31218_31234 = G__31263;
count__31219_31235 = G__31264;
i__31220_31236 = G__31265;
continue;
}
} else
{var temp__4092__auto___31266 = cljs.core.seq.call(null,seq__31217_31233);if(temp__4092__auto___31266)
{var seq__31217_31267__$1 = temp__4092__auto___31266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31217_31267__$1))
{var c__8592__auto___31268 = cljs.core.chunk_first.call(null,seq__31217_31267__$1);{
var G__31269 = cljs.core.chunk_rest.call(null,seq__31217_31267__$1);
var G__31270 = c__8592__auto___31268;
var G__31271 = cljs.core.count.call(null,c__8592__auto___31268);
var G__31272 = 0;
seq__31217_31233 = G__31269;
chunk__31218_31234 = G__31270;
count__31219_31235 = G__31271;
i__31220_31236 = G__31272;
continue;
}
} else
{var vec__31227_31273 = cljs.core.first.call(null,seq__31217_31267__$1);var k_31274 = cljs.core.nth.call(null,vec__31227_31273,0,null);var v_31275 = cljs.core.nth.call(null,vec__31227_31273,1,null);var G__31228_31276 = k_31274;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__31228_31276))
{var seq__31229_31277 = cljs.core.seq.call(null,v_31275);var chunk__31230_31278 = null;var count__31231_31279 = 0;var i__31232_31280 = 0;while(true){
if((i__31232_31280 < count__31231_31279))
{var c_31281 = cljs.core._nth.call(null,chunk__31230_31278,i__31232_31280);dommy.attrs.add_class_BANG_.call(null,n,c_31281);
{
var G__31282 = seq__31229_31277;
var G__31283 = chunk__31230_31278;
var G__31284 = count__31231_31279;
var G__31285 = (i__31232_31280 + 1);
seq__31229_31277 = G__31282;
chunk__31230_31278 = G__31283;
count__31231_31279 = G__31284;
i__31232_31280 = G__31285;
continue;
}
} else
{var temp__4092__auto___31286__$1 = cljs.core.seq.call(null,seq__31229_31277);if(temp__4092__auto___31286__$1)
{var seq__31229_31287__$1 = temp__4092__auto___31286__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31229_31287__$1))
{var c__8592__auto___31288 = cljs.core.chunk_first.call(null,seq__31229_31287__$1);{
var G__31289 = cljs.core.chunk_rest.call(null,seq__31229_31287__$1);
var G__31290 = c__8592__auto___31288;
var G__31291 = cljs.core.count.call(null,c__8592__auto___31288);
var G__31292 = 0;
seq__31229_31277 = G__31289;
chunk__31230_31278 = G__31290;
count__31231_31279 = G__31291;
i__31232_31280 = G__31292;
continue;
}
} else
{var c_31293 = cljs.core.first.call(null,seq__31229_31287__$1);dommy.attrs.add_class_BANG_.call(null,n,c_31293);
{
var G__31294 = cljs.core.next.call(null,seq__31229_31287__$1);
var G__31295 = null;
var G__31296 = 0;
var G__31297 = 0;
seq__31229_31277 = G__31294;
chunk__31230_31278 = G__31295;
count__31231_31279 = G__31296;
i__31232_31280 = G__31297;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__31228_31276))
{dommy.attrs.add_class_BANG_.call(null,n,v_31275);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_31274,v_31275);
} else
{}
}
}
{
var G__31298 = cljs.core.next.call(null,seq__31217_31267__$1);
var G__31299 = null;
var G__31300 = 0;
var G__31301 = 0;
seq__31217_31233 = G__31298;
chunk__31218_31234 = G__31299;
count__31219_31235 = G__31300;
i__31220_31236 = G__31301;
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
}catch (e31302){if((e31302 instanceof ReferenceError))
{var __31303 = e31302;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31302;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__31305 = data;if(G__31305)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__31305.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31305.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31305);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31305);
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
