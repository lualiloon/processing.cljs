// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj65989 = {};return obj65989;
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
{var str_65992 = node_str.substring(base_idx);while(true){
var next_idx_65993 = dommy.template.next_css_index.call(null,str_65992,1);var frag_65994 = (((next_idx_65993 >= 0))?str_65992.substring(0,next_idx_65993):str_65992);var G__65991_65995 = frag_65994.charAt(0);if(cljs.core._EQ_.call(null,"#",G__65991_65995))
{node.setAttribute("id",frag_65994.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__65991_65995))
{dommy.attrs.add_class_BANG_.call(null,node,frag_65994.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_65994.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_65993 >= 0))
{{
var G__65996 = str_65992.substring(next_idx_65993);
str_65992 = G__65996;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__66002 = data;if(G__66002)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__66002.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66002.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66002);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66002);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__66003_66007 = cljs.core.seq.call(null,data);var chunk__66004_66008 = null;var count__66005_66009 = 0;var i__66006_66010 = 0;while(true){
if((i__66006_66010 < count__66005_66009))
{var child_66011 = cljs.core._nth.call(null,chunk__66004_66008,i__66006_66010);__GT_document_fragment.call(null,result_frag,child_66011);
{
var G__66012 = seq__66003_66007;
var G__66013 = chunk__66004_66008;
var G__66014 = count__66005_66009;
var G__66015 = (i__66006_66010 + 1);
seq__66003_66007 = G__66012;
chunk__66004_66008 = G__66013;
count__66005_66009 = G__66014;
i__66006_66010 = G__66015;
continue;
}
} else
{var temp__4092__auto___66016 = cljs.core.seq.call(null,seq__66003_66007);if(temp__4092__auto___66016)
{var seq__66003_66017__$1 = temp__4092__auto___66016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66003_66017__$1))
{var c__8604__auto___66018 = cljs.core.chunk_first.call(null,seq__66003_66017__$1);{
var G__66019 = cljs.core.chunk_rest.call(null,seq__66003_66017__$1);
var G__66020 = c__8604__auto___66018;
var G__66021 = cljs.core.count.call(null,c__8604__auto___66018);
var G__66022 = 0;
seq__66003_66007 = G__66019;
chunk__66004_66008 = G__66020;
count__66005_66009 = G__66021;
i__66006_66010 = G__66022;
continue;
}
} else
{var child_66023 = cljs.core.first.call(null,seq__66003_66017__$1);__GT_document_fragment.call(null,result_frag,child_66023);
{
var G__66024 = cljs.core.next.call(null,seq__66003_66017__$1);
var G__66025 = null;
var G__66026 = 0;
var G__66027 = 0;
seq__66003_66007 = G__66024;
chunk__66004_66008 = G__66025;
count__66005_66009 = G__66026;
i__66006_66010 = G__66027;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__66029 = data;if(G__66029)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__66029.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66029.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66029);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66029);
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
dommy.template.compound_element = (function compound_element(p__66030){var vec__66050 = p__66030;var tag_name = cljs.core.nth.call(null,vec__66050,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__66050,1,null);var children = cljs.core.nthnext.call(null,vec__66050,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__66052 = maybe_attrs;if(G__66052)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__66052.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66052.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66052);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66052);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__66053_66069 = cljs.core.seq.call(null,attrs);var chunk__66054_66070 = null;var count__66055_66071 = 0;var i__66056_66072 = 0;while(true){
if((i__66056_66072 < count__66055_66071))
{var vec__66057_66073 = cljs.core._nth.call(null,chunk__66054_66070,i__66056_66072);var k_66074 = cljs.core.nth.call(null,vec__66057_66073,0,null);var v_66075 = cljs.core.nth.call(null,vec__66057_66073,1,null);var G__66058_66076 = k_66074;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__66058_66076))
{var seq__66059_66077 = cljs.core.seq.call(null,v_66075);var chunk__66060_66078 = null;var count__66061_66079 = 0;var i__66062_66080 = 0;while(true){
if((i__66062_66080 < count__66061_66079))
{var c_66081 = cljs.core._nth.call(null,chunk__66060_66078,i__66062_66080);dommy.attrs.add_class_BANG_.call(null,n,c_66081);
{
var G__66082 = seq__66059_66077;
var G__66083 = chunk__66060_66078;
var G__66084 = count__66061_66079;
var G__66085 = (i__66062_66080 + 1);
seq__66059_66077 = G__66082;
chunk__66060_66078 = G__66083;
count__66061_66079 = G__66084;
i__66062_66080 = G__66085;
continue;
}
} else
{var temp__4092__auto___66086 = cljs.core.seq.call(null,seq__66059_66077);if(temp__4092__auto___66086)
{var seq__66059_66087__$1 = temp__4092__auto___66086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66059_66087__$1))
{var c__8604__auto___66088 = cljs.core.chunk_first.call(null,seq__66059_66087__$1);{
var G__66089 = cljs.core.chunk_rest.call(null,seq__66059_66087__$1);
var G__66090 = c__8604__auto___66088;
var G__66091 = cljs.core.count.call(null,c__8604__auto___66088);
var G__66092 = 0;
seq__66059_66077 = G__66089;
chunk__66060_66078 = G__66090;
count__66061_66079 = G__66091;
i__66062_66080 = G__66092;
continue;
}
} else
{var c_66093 = cljs.core.first.call(null,seq__66059_66087__$1);dommy.attrs.add_class_BANG_.call(null,n,c_66093);
{
var G__66094 = cljs.core.next.call(null,seq__66059_66087__$1);
var G__66095 = null;
var G__66096 = 0;
var G__66097 = 0;
seq__66059_66077 = G__66094;
chunk__66060_66078 = G__66095;
count__66061_66079 = G__66096;
i__66062_66080 = G__66097;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__66058_66076))
{dommy.attrs.add_class_BANG_.call(null,n,v_66075);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_66074,v_66075);
} else
{}
}
}
{
var G__66098 = seq__66053_66069;
var G__66099 = chunk__66054_66070;
var G__66100 = count__66055_66071;
var G__66101 = (i__66056_66072 + 1);
seq__66053_66069 = G__66098;
chunk__66054_66070 = G__66099;
count__66055_66071 = G__66100;
i__66056_66072 = G__66101;
continue;
}
} else
{var temp__4092__auto___66102 = cljs.core.seq.call(null,seq__66053_66069);if(temp__4092__auto___66102)
{var seq__66053_66103__$1 = temp__4092__auto___66102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66053_66103__$1))
{var c__8604__auto___66104 = cljs.core.chunk_first.call(null,seq__66053_66103__$1);{
var G__66105 = cljs.core.chunk_rest.call(null,seq__66053_66103__$1);
var G__66106 = c__8604__auto___66104;
var G__66107 = cljs.core.count.call(null,c__8604__auto___66104);
var G__66108 = 0;
seq__66053_66069 = G__66105;
chunk__66054_66070 = G__66106;
count__66055_66071 = G__66107;
i__66056_66072 = G__66108;
continue;
}
} else
{var vec__66063_66109 = cljs.core.first.call(null,seq__66053_66103__$1);var k_66110 = cljs.core.nth.call(null,vec__66063_66109,0,null);var v_66111 = cljs.core.nth.call(null,vec__66063_66109,1,null);var G__66064_66112 = k_66110;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__66064_66112))
{var seq__66065_66113 = cljs.core.seq.call(null,v_66111);var chunk__66066_66114 = null;var count__66067_66115 = 0;var i__66068_66116 = 0;while(true){
if((i__66068_66116 < count__66067_66115))
{var c_66117 = cljs.core._nth.call(null,chunk__66066_66114,i__66068_66116);dommy.attrs.add_class_BANG_.call(null,n,c_66117);
{
var G__66118 = seq__66065_66113;
var G__66119 = chunk__66066_66114;
var G__66120 = count__66067_66115;
var G__66121 = (i__66068_66116 + 1);
seq__66065_66113 = G__66118;
chunk__66066_66114 = G__66119;
count__66067_66115 = G__66120;
i__66068_66116 = G__66121;
continue;
}
} else
{var temp__4092__auto___66122__$1 = cljs.core.seq.call(null,seq__66065_66113);if(temp__4092__auto___66122__$1)
{var seq__66065_66123__$1 = temp__4092__auto___66122__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66065_66123__$1))
{var c__8604__auto___66124 = cljs.core.chunk_first.call(null,seq__66065_66123__$1);{
var G__66125 = cljs.core.chunk_rest.call(null,seq__66065_66123__$1);
var G__66126 = c__8604__auto___66124;
var G__66127 = cljs.core.count.call(null,c__8604__auto___66124);
var G__66128 = 0;
seq__66065_66113 = G__66125;
chunk__66066_66114 = G__66126;
count__66067_66115 = G__66127;
i__66068_66116 = G__66128;
continue;
}
} else
{var c_66129 = cljs.core.first.call(null,seq__66065_66123__$1);dommy.attrs.add_class_BANG_.call(null,n,c_66129);
{
var G__66130 = cljs.core.next.call(null,seq__66065_66123__$1);
var G__66131 = null;
var G__66132 = 0;
var G__66133 = 0;
seq__66065_66113 = G__66130;
chunk__66066_66114 = G__66131;
count__66067_66115 = G__66132;
i__66068_66116 = G__66133;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__66064_66112))
{dommy.attrs.add_class_BANG_.call(null,n,v_66111);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_66110,v_66111);
} else
{}
}
}
{
var G__66134 = cljs.core.next.call(null,seq__66053_66103__$1);
var G__66135 = null;
var G__66136 = 0;
var G__66137 = 0;
seq__66053_66069 = G__66134;
chunk__66054_66070 = G__66135;
count__66055_66071 = G__66136;
i__66056_66072 = G__66137;
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
}catch (e66138){if((e66138 instanceof ReferenceError))
{var __66139 = e66138;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e66138;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__66141 = data;if(G__66141)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__66141.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__66141.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66141);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__66141);
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
