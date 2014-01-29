// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj51650 = {};return obj51650;
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
{var str_51653 = node_str.substring(base_idx);while(true){
var next_idx_51654 = dommy.template.next_css_index.call(null,str_51653,1);var frag_51655 = (((next_idx_51654 >= 0))?str_51653.substring(0,next_idx_51654):str_51653);var G__51652_51656 = frag_51655.charAt(0);if(cljs.core._EQ_.call(null,"#",G__51652_51656))
{node.setAttribute("id",frag_51655.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__51652_51656))
{dommy.attrs.add_class_BANG_.call(null,node,frag_51655.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_51655.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_51654 >= 0))
{{
var G__51657 = str_51653.substring(next_idx_51654);
str_51653 = G__51657;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__51663 = data;if(G__51663)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__51663.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__51663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51663);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__51664_51668 = cljs.core.seq.call(null,data);var chunk__51665_51669 = null;var count__51666_51670 = 0;var i__51667_51671 = 0;while(true){
if((i__51667_51671 < count__51666_51670))
{var child_51672 = cljs.core._nth.call(null,chunk__51665_51669,i__51667_51671);__GT_document_fragment.call(null,result_frag,child_51672);
{
var G__51673 = seq__51664_51668;
var G__51674 = chunk__51665_51669;
var G__51675 = count__51666_51670;
var G__51676 = (i__51667_51671 + 1);
seq__51664_51668 = G__51673;
chunk__51665_51669 = G__51674;
count__51666_51670 = G__51675;
i__51667_51671 = G__51676;
continue;
}
} else
{var temp__4092__auto___51677 = cljs.core.seq.call(null,seq__51664_51668);if(temp__4092__auto___51677)
{var seq__51664_51678__$1 = temp__4092__auto___51677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51664_51678__$1))
{var c__8592__auto___51679 = cljs.core.chunk_first.call(null,seq__51664_51678__$1);{
var G__51680 = cljs.core.chunk_rest.call(null,seq__51664_51678__$1);
var G__51681 = c__8592__auto___51679;
var G__51682 = cljs.core.count.call(null,c__8592__auto___51679);
var G__51683 = 0;
seq__51664_51668 = G__51680;
chunk__51665_51669 = G__51681;
count__51666_51670 = G__51682;
i__51667_51671 = G__51683;
continue;
}
} else
{var child_51684 = cljs.core.first.call(null,seq__51664_51678__$1);__GT_document_fragment.call(null,result_frag,child_51684);
{
var G__51685 = cljs.core.next.call(null,seq__51664_51678__$1);
var G__51686 = null;
var G__51687 = 0;
var G__51688 = 0;
seq__51664_51668 = G__51685;
chunk__51665_51669 = G__51686;
count__51666_51670 = G__51687;
i__51667_51671 = G__51688;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__51690 = data;if(G__51690)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__51690.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__51690.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51690);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51690);
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
dommy.template.compound_element = (function compound_element(p__51691){var vec__51711 = p__51691;var tag_name = cljs.core.nth.call(null,vec__51711,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__51711,1,null);var children = cljs.core.nthnext.call(null,vec__51711,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__51713 = maybe_attrs;if(G__51713)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__51713.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__51713.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51713);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51713);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__51714_51730 = cljs.core.seq.call(null,attrs);var chunk__51715_51731 = null;var count__51716_51732 = 0;var i__51717_51733 = 0;while(true){
if((i__51717_51733 < count__51716_51732))
{var vec__51718_51734 = cljs.core._nth.call(null,chunk__51715_51731,i__51717_51733);var k_51735 = cljs.core.nth.call(null,vec__51718_51734,0,null);var v_51736 = cljs.core.nth.call(null,vec__51718_51734,1,null);var G__51719_51737 = k_51735;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__51719_51737))
{var seq__51720_51738 = cljs.core.seq.call(null,v_51736);var chunk__51721_51739 = null;var count__51722_51740 = 0;var i__51723_51741 = 0;while(true){
if((i__51723_51741 < count__51722_51740))
{var c_51742 = cljs.core._nth.call(null,chunk__51721_51739,i__51723_51741);dommy.attrs.add_class_BANG_.call(null,n,c_51742);
{
var G__51743 = seq__51720_51738;
var G__51744 = chunk__51721_51739;
var G__51745 = count__51722_51740;
var G__51746 = (i__51723_51741 + 1);
seq__51720_51738 = G__51743;
chunk__51721_51739 = G__51744;
count__51722_51740 = G__51745;
i__51723_51741 = G__51746;
continue;
}
} else
{var temp__4092__auto___51747 = cljs.core.seq.call(null,seq__51720_51738);if(temp__4092__auto___51747)
{var seq__51720_51748__$1 = temp__4092__auto___51747;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51720_51748__$1))
{var c__8592__auto___51749 = cljs.core.chunk_first.call(null,seq__51720_51748__$1);{
var G__51750 = cljs.core.chunk_rest.call(null,seq__51720_51748__$1);
var G__51751 = c__8592__auto___51749;
var G__51752 = cljs.core.count.call(null,c__8592__auto___51749);
var G__51753 = 0;
seq__51720_51738 = G__51750;
chunk__51721_51739 = G__51751;
count__51722_51740 = G__51752;
i__51723_51741 = G__51753;
continue;
}
} else
{var c_51754 = cljs.core.first.call(null,seq__51720_51748__$1);dommy.attrs.add_class_BANG_.call(null,n,c_51754);
{
var G__51755 = cljs.core.next.call(null,seq__51720_51748__$1);
var G__51756 = null;
var G__51757 = 0;
var G__51758 = 0;
seq__51720_51738 = G__51755;
chunk__51721_51739 = G__51756;
count__51722_51740 = G__51757;
i__51723_51741 = G__51758;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__51719_51737))
{dommy.attrs.add_class_BANG_.call(null,n,v_51736);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_51735,v_51736);
} else
{}
}
}
{
var G__51759 = seq__51714_51730;
var G__51760 = chunk__51715_51731;
var G__51761 = count__51716_51732;
var G__51762 = (i__51717_51733 + 1);
seq__51714_51730 = G__51759;
chunk__51715_51731 = G__51760;
count__51716_51732 = G__51761;
i__51717_51733 = G__51762;
continue;
}
} else
{var temp__4092__auto___51763 = cljs.core.seq.call(null,seq__51714_51730);if(temp__4092__auto___51763)
{var seq__51714_51764__$1 = temp__4092__auto___51763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51714_51764__$1))
{var c__8592__auto___51765 = cljs.core.chunk_first.call(null,seq__51714_51764__$1);{
var G__51766 = cljs.core.chunk_rest.call(null,seq__51714_51764__$1);
var G__51767 = c__8592__auto___51765;
var G__51768 = cljs.core.count.call(null,c__8592__auto___51765);
var G__51769 = 0;
seq__51714_51730 = G__51766;
chunk__51715_51731 = G__51767;
count__51716_51732 = G__51768;
i__51717_51733 = G__51769;
continue;
}
} else
{var vec__51724_51770 = cljs.core.first.call(null,seq__51714_51764__$1);var k_51771 = cljs.core.nth.call(null,vec__51724_51770,0,null);var v_51772 = cljs.core.nth.call(null,vec__51724_51770,1,null);var G__51725_51773 = k_51771;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__51725_51773))
{var seq__51726_51774 = cljs.core.seq.call(null,v_51772);var chunk__51727_51775 = null;var count__51728_51776 = 0;var i__51729_51777 = 0;while(true){
if((i__51729_51777 < count__51728_51776))
{var c_51778 = cljs.core._nth.call(null,chunk__51727_51775,i__51729_51777);dommy.attrs.add_class_BANG_.call(null,n,c_51778);
{
var G__51779 = seq__51726_51774;
var G__51780 = chunk__51727_51775;
var G__51781 = count__51728_51776;
var G__51782 = (i__51729_51777 + 1);
seq__51726_51774 = G__51779;
chunk__51727_51775 = G__51780;
count__51728_51776 = G__51781;
i__51729_51777 = G__51782;
continue;
}
} else
{var temp__4092__auto___51783__$1 = cljs.core.seq.call(null,seq__51726_51774);if(temp__4092__auto___51783__$1)
{var seq__51726_51784__$1 = temp__4092__auto___51783__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51726_51784__$1))
{var c__8592__auto___51785 = cljs.core.chunk_first.call(null,seq__51726_51784__$1);{
var G__51786 = cljs.core.chunk_rest.call(null,seq__51726_51784__$1);
var G__51787 = c__8592__auto___51785;
var G__51788 = cljs.core.count.call(null,c__8592__auto___51785);
var G__51789 = 0;
seq__51726_51774 = G__51786;
chunk__51727_51775 = G__51787;
count__51728_51776 = G__51788;
i__51729_51777 = G__51789;
continue;
}
} else
{var c_51790 = cljs.core.first.call(null,seq__51726_51784__$1);dommy.attrs.add_class_BANG_.call(null,n,c_51790);
{
var G__51791 = cljs.core.next.call(null,seq__51726_51784__$1);
var G__51792 = null;
var G__51793 = 0;
var G__51794 = 0;
seq__51726_51774 = G__51791;
chunk__51727_51775 = G__51792;
count__51728_51776 = G__51793;
i__51729_51777 = G__51794;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__51725_51773))
{dommy.attrs.add_class_BANG_.call(null,n,v_51772);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_51771,v_51772);
} else
{}
}
}
{
var G__51795 = cljs.core.next.call(null,seq__51714_51764__$1);
var G__51796 = null;
var G__51797 = 0;
var G__51798 = 0;
seq__51714_51730 = G__51795;
chunk__51715_51731 = G__51796;
count__51716_51732 = G__51797;
i__51717_51733 = G__51798;
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
}catch (e51799){if((e51799 instanceof ReferenceError))
{var __51800 = e51799;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51799;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__51802 = data;if(G__51802)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__51802.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__51802.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51802);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__51802);
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
