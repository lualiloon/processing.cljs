// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj24064 = {};return obj24064;
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
{var str_24067 = node_str.substring(base_idx);while(true){
var next_idx_24068 = dommy.template.next_css_index.call(null,str_24067,1);var frag_24069 = (((next_idx_24068 >= 0))?str_24067.substring(0,next_idx_24068):str_24067);var G__24066_24070 = frag_24069.charAt(0);if(cljs.core._EQ_.call(null,"#",G__24066_24070))
{node.setAttribute("id",frag_24069.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__24066_24070))
{dommy.attrs.add_class_BANG_.call(null,node,frag_24069.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_24069.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_24068 >= 0))
{{
var G__24071 = str_24067.substring(next_idx_24068);
str_24067 = G__24071;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__24077 = data;if(G__24077)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__24077.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24077.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24077);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__24078_24082 = cljs.core.seq.call(null,data);var chunk__24079_24083 = null;var count__24080_24084 = 0;var i__24081_24085 = 0;while(true){
if((i__24081_24085 < count__24080_24084))
{var child_24086 = cljs.core._nth.call(null,chunk__24079_24083,i__24081_24085);__GT_document_fragment.call(null,result_frag,child_24086);
{
var G__24087 = seq__24078_24082;
var G__24088 = chunk__24079_24083;
var G__24089 = count__24080_24084;
var G__24090 = (i__24081_24085 + 1);
seq__24078_24082 = G__24087;
chunk__24079_24083 = G__24088;
count__24080_24084 = G__24089;
i__24081_24085 = G__24090;
continue;
}
} else
{var temp__4092__auto___24091 = cljs.core.seq.call(null,seq__24078_24082);if(temp__4092__auto___24091)
{var seq__24078_24092__$1 = temp__4092__auto___24091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24078_24092__$1))
{var c__8592__auto___24093 = cljs.core.chunk_first.call(null,seq__24078_24092__$1);{
var G__24094 = cljs.core.chunk_rest.call(null,seq__24078_24092__$1);
var G__24095 = c__8592__auto___24093;
var G__24096 = cljs.core.count.call(null,c__8592__auto___24093);
var G__24097 = 0;
seq__24078_24082 = G__24094;
chunk__24079_24083 = G__24095;
count__24080_24084 = G__24096;
i__24081_24085 = G__24097;
continue;
}
} else
{var child_24098 = cljs.core.first.call(null,seq__24078_24092__$1);__GT_document_fragment.call(null,result_frag,child_24098);
{
var G__24099 = cljs.core.next.call(null,seq__24078_24092__$1);
var G__24100 = null;
var G__24101 = 0;
var G__24102 = 0;
seq__24078_24082 = G__24099;
chunk__24079_24083 = G__24100;
count__24080_24084 = G__24101;
i__24081_24085 = G__24102;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__24104 = data;if(G__24104)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__24104.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24104.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24104);
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
dommy.template.compound_element = (function compound_element(p__24105){var vec__24125 = p__24105;var tag_name = cljs.core.nth.call(null,vec__24125,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__24125,1,null);var children = cljs.core.nthnext.call(null,vec__24125,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__24127 = maybe_attrs;if(G__24127)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__24127.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24127.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24127);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24127);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__24128_24144 = cljs.core.seq.call(null,attrs);var chunk__24129_24145 = null;var count__24130_24146 = 0;var i__24131_24147 = 0;while(true){
if((i__24131_24147 < count__24130_24146))
{var vec__24132_24148 = cljs.core._nth.call(null,chunk__24129_24145,i__24131_24147);var k_24149 = cljs.core.nth.call(null,vec__24132_24148,0,null);var v_24150 = cljs.core.nth.call(null,vec__24132_24148,1,null);var G__24133_24151 = k_24149;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24133_24151))
{var seq__24134_24152 = cljs.core.seq.call(null,v_24150);var chunk__24135_24153 = null;var count__24136_24154 = 0;var i__24137_24155 = 0;while(true){
if((i__24137_24155 < count__24136_24154))
{var c_24156 = cljs.core._nth.call(null,chunk__24135_24153,i__24137_24155);dommy.attrs.add_class_BANG_.call(null,n,c_24156);
{
var G__24157 = seq__24134_24152;
var G__24158 = chunk__24135_24153;
var G__24159 = count__24136_24154;
var G__24160 = (i__24137_24155 + 1);
seq__24134_24152 = G__24157;
chunk__24135_24153 = G__24158;
count__24136_24154 = G__24159;
i__24137_24155 = G__24160;
continue;
}
} else
{var temp__4092__auto___24161 = cljs.core.seq.call(null,seq__24134_24152);if(temp__4092__auto___24161)
{var seq__24134_24162__$1 = temp__4092__auto___24161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24134_24162__$1))
{var c__8592__auto___24163 = cljs.core.chunk_first.call(null,seq__24134_24162__$1);{
var G__24164 = cljs.core.chunk_rest.call(null,seq__24134_24162__$1);
var G__24165 = c__8592__auto___24163;
var G__24166 = cljs.core.count.call(null,c__8592__auto___24163);
var G__24167 = 0;
seq__24134_24152 = G__24164;
chunk__24135_24153 = G__24165;
count__24136_24154 = G__24166;
i__24137_24155 = G__24167;
continue;
}
} else
{var c_24168 = cljs.core.first.call(null,seq__24134_24162__$1);dommy.attrs.add_class_BANG_.call(null,n,c_24168);
{
var G__24169 = cljs.core.next.call(null,seq__24134_24162__$1);
var G__24170 = null;
var G__24171 = 0;
var G__24172 = 0;
seq__24134_24152 = G__24169;
chunk__24135_24153 = G__24170;
count__24136_24154 = G__24171;
i__24137_24155 = G__24172;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24133_24151))
{dommy.attrs.add_class_BANG_.call(null,n,v_24150);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_24149,v_24150);
} else
{}
}
}
{
var G__24173 = seq__24128_24144;
var G__24174 = chunk__24129_24145;
var G__24175 = count__24130_24146;
var G__24176 = (i__24131_24147 + 1);
seq__24128_24144 = G__24173;
chunk__24129_24145 = G__24174;
count__24130_24146 = G__24175;
i__24131_24147 = G__24176;
continue;
}
} else
{var temp__4092__auto___24177 = cljs.core.seq.call(null,seq__24128_24144);if(temp__4092__auto___24177)
{var seq__24128_24178__$1 = temp__4092__auto___24177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24128_24178__$1))
{var c__8592__auto___24179 = cljs.core.chunk_first.call(null,seq__24128_24178__$1);{
var G__24180 = cljs.core.chunk_rest.call(null,seq__24128_24178__$1);
var G__24181 = c__8592__auto___24179;
var G__24182 = cljs.core.count.call(null,c__8592__auto___24179);
var G__24183 = 0;
seq__24128_24144 = G__24180;
chunk__24129_24145 = G__24181;
count__24130_24146 = G__24182;
i__24131_24147 = G__24183;
continue;
}
} else
{var vec__24138_24184 = cljs.core.first.call(null,seq__24128_24178__$1);var k_24185 = cljs.core.nth.call(null,vec__24138_24184,0,null);var v_24186 = cljs.core.nth.call(null,vec__24138_24184,1,null);var G__24139_24187 = k_24185;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24139_24187))
{var seq__24140_24188 = cljs.core.seq.call(null,v_24186);var chunk__24141_24189 = null;var count__24142_24190 = 0;var i__24143_24191 = 0;while(true){
if((i__24143_24191 < count__24142_24190))
{var c_24192 = cljs.core._nth.call(null,chunk__24141_24189,i__24143_24191);dommy.attrs.add_class_BANG_.call(null,n,c_24192);
{
var G__24193 = seq__24140_24188;
var G__24194 = chunk__24141_24189;
var G__24195 = count__24142_24190;
var G__24196 = (i__24143_24191 + 1);
seq__24140_24188 = G__24193;
chunk__24141_24189 = G__24194;
count__24142_24190 = G__24195;
i__24143_24191 = G__24196;
continue;
}
} else
{var temp__4092__auto___24197__$1 = cljs.core.seq.call(null,seq__24140_24188);if(temp__4092__auto___24197__$1)
{var seq__24140_24198__$1 = temp__4092__auto___24197__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24140_24198__$1))
{var c__8592__auto___24199 = cljs.core.chunk_first.call(null,seq__24140_24198__$1);{
var G__24200 = cljs.core.chunk_rest.call(null,seq__24140_24198__$1);
var G__24201 = c__8592__auto___24199;
var G__24202 = cljs.core.count.call(null,c__8592__auto___24199);
var G__24203 = 0;
seq__24140_24188 = G__24200;
chunk__24141_24189 = G__24201;
count__24142_24190 = G__24202;
i__24143_24191 = G__24203;
continue;
}
} else
{var c_24204 = cljs.core.first.call(null,seq__24140_24198__$1);dommy.attrs.add_class_BANG_.call(null,n,c_24204);
{
var G__24205 = cljs.core.next.call(null,seq__24140_24198__$1);
var G__24206 = null;
var G__24207 = 0;
var G__24208 = 0;
seq__24140_24188 = G__24205;
chunk__24141_24189 = G__24206;
count__24142_24190 = G__24207;
i__24143_24191 = G__24208;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24139_24187))
{dommy.attrs.add_class_BANG_.call(null,n,v_24186);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_24185,v_24186);
} else
{}
}
}
{
var G__24209 = cljs.core.next.call(null,seq__24128_24178__$1);
var G__24210 = null;
var G__24211 = 0;
var G__24212 = 0;
seq__24128_24144 = G__24209;
chunk__24129_24145 = G__24210;
count__24130_24146 = G__24211;
i__24131_24147 = G__24212;
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
}catch (e24213){if((e24213 instanceof ReferenceError))
{var __24214 = e24213;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24213;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__24216 = data;if(G__24216)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__24216.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24216.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24216);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24216);
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
