// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj186733 = {};return obj186733;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__10846__auto__ = this$;if(and__10846__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__10846__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__11479__auto__ = (((this$ == null))?null:this$);return (function (){var or__10858__auto__ = (dommy.template._elem[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (dommy.template._elem["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
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
{var str_186736 = node_str.substring(base_idx);while(true){
var next_idx_186737 = dommy.template.next_css_index.call(null,str_186736,1);var frag_186738 = (((next_idx_186737 >= 0))?str_186736.substring(0,next_idx_186737):str_186736);var G__186735_186739 = frag_186738.charAt(0);if(cljs.core._EQ_.call(null,"#",G__186735_186739))
{node.setAttribute("id",frag_186738.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__186735_186739))
{dommy.attrs.add_class_BANG_.call(null,node,frag_186738.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_186738.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_186737 >= 0))
{{
var G__186740 = str_186736.substring(next_idx_186737);
str_186736 = G__186740;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__186746 = data;if(G__186746)
{var bit__11502__auto__ = null;if(cljs.core.truth_((function (){var or__10858__auto__ = bit__11502__auto__;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return G__186746.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__186746.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186746);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186746);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__186747_186751 = cljs.core.seq.call(null,data);var chunk__186748_186752 = null;var count__186749_186753 = 0;var i__186750_186754 = 0;while(true){
if((i__186750_186754 < count__186749_186753))
{var child_186755 = cljs.core._nth.call(null,chunk__186748_186752,i__186750_186754);__GT_document_fragment.call(null,result_frag,child_186755);
{
var G__186756 = seq__186747_186751;
var G__186757 = chunk__186748_186752;
var G__186758 = count__186749_186753;
var G__186759 = (i__186750_186754 + 1);
seq__186747_186751 = G__186756;
chunk__186748_186752 = G__186757;
count__186749_186753 = G__186758;
i__186750_186754 = G__186759;
continue;
}
} else
{var temp__4092__auto___186760 = cljs.core.seq.call(null,seq__186747_186751);if(temp__4092__auto___186760)
{var seq__186747_186761__$1 = temp__4092__auto___186760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186747_186761__$1))
{var c__11600__auto___186762 = cljs.core.chunk_first.call(null,seq__186747_186761__$1);{
var G__186763 = cljs.core.chunk_rest.call(null,seq__186747_186761__$1);
var G__186764 = c__11600__auto___186762;
var G__186765 = cljs.core.count.call(null,c__11600__auto___186762);
var G__186766 = 0;
seq__186747_186751 = G__186763;
chunk__186748_186752 = G__186764;
count__186749_186753 = G__186765;
i__186750_186754 = G__186766;
continue;
}
} else
{var child_186767 = cljs.core.first.call(null,seq__186747_186761__$1);__GT_document_fragment.call(null,result_frag,child_186767);
{
var G__186768 = cljs.core.next.call(null,seq__186747_186761__$1);
var G__186769 = null;
var G__186770 = 0;
var G__186771 = 0;
seq__186747_186751 = G__186768;
chunk__186748_186752 = G__186769;
count__186749_186753 = G__186770;
i__186750_186754 = G__186771;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__186773 = data;if(G__186773)
{var bit__11502__auto__ = null;if(cljs.core.truth_((function (){var or__10858__auto__ = bit__11502__auto__;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return G__186773.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__186773.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186773);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186773);
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
dommy.template.compound_element = (function compound_element(p__186774){var vec__186794 = p__186774;var tag_name = cljs.core.nth.call(null,vec__186794,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__186794,1,null);var children = cljs.core.nthnext.call(null,vec__186794,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__186796 = maybe_attrs;if(G__186796)
{var bit__11502__auto__ = null;if(cljs.core.truth_((function (){var or__10858__auto__ = bit__11502__auto__;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return G__186796.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__186796.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186796);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__186797_186813 = cljs.core.seq.call(null,attrs);var chunk__186798_186814 = null;var count__186799_186815 = 0;var i__186800_186816 = 0;while(true){
if((i__186800_186816 < count__186799_186815))
{var vec__186801_186817 = cljs.core._nth.call(null,chunk__186798_186814,i__186800_186816);var k_186818 = cljs.core.nth.call(null,vec__186801_186817,0,null);var v_186819 = cljs.core.nth.call(null,vec__186801_186817,1,null);var G__186802_186820 = k_186818;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__186802_186820))
{var seq__186803_186821 = cljs.core.seq.call(null,v_186819);var chunk__186804_186822 = null;var count__186805_186823 = 0;var i__186806_186824 = 0;while(true){
if((i__186806_186824 < count__186805_186823))
{var c_186825 = cljs.core._nth.call(null,chunk__186804_186822,i__186806_186824);dommy.attrs.add_class_BANG_.call(null,n,c_186825);
{
var G__186826 = seq__186803_186821;
var G__186827 = chunk__186804_186822;
var G__186828 = count__186805_186823;
var G__186829 = (i__186806_186824 + 1);
seq__186803_186821 = G__186826;
chunk__186804_186822 = G__186827;
count__186805_186823 = G__186828;
i__186806_186824 = G__186829;
continue;
}
} else
{var temp__4092__auto___186830 = cljs.core.seq.call(null,seq__186803_186821);if(temp__4092__auto___186830)
{var seq__186803_186831__$1 = temp__4092__auto___186830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186803_186831__$1))
{var c__11600__auto___186832 = cljs.core.chunk_first.call(null,seq__186803_186831__$1);{
var G__186833 = cljs.core.chunk_rest.call(null,seq__186803_186831__$1);
var G__186834 = c__11600__auto___186832;
var G__186835 = cljs.core.count.call(null,c__11600__auto___186832);
var G__186836 = 0;
seq__186803_186821 = G__186833;
chunk__186804_186822 = G__186834;
count__186805_186823 = G__186835;
i__186806_186824 = G__186836;
continue;
}
} else
{var c_186837 = cljs.core.first.call(null,seq__186803_186831__$1);dommy.attrs.add_class_BANG_.call(null,n,c_186837);
{
var G__186838 = cljs.core.next.call(null,seq__186803_186831__$1);
var G__186839 = null;
var G__186840 = 0;
var G__186841 = 0;
seq__186803_186821 = G__186838;
chunk__186804_186822 = G__186839;
count__186805_186823 = G__186840;
i__186806_186824 = G__186841;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__186802_186820))
{dommy.attrs.add_class_BANG_.call(null,n,v_186819);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_186818,v_186819);
} else
{}
}
}
{
var G__186842 = seq__186797_186813;
var G__186843 = chunk__186798_186814;
var G__186844 = count__186799_186815;
var G__186845 = (i__186800_186816 + 1);
seq__186797_186813 = G__186842;
chunk__186798_186814 = G__186843;
count__186799_186815 = G__186844;
i__186800_186816 = G__186845;
continue;
}
} else
{var temp__4092__auto___186846 = cljs.core.seq.call(null,seq__186797_186813);if(temp__4092__auto___186846)
{var seq__186797_186847__$1 = temp__4092__auto___186846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186797_186847__$1))
{var c__11600__auto___186848 = cljs.core.chunk_first.call(null,seq__186797_186847__$1);{
var G__186849 = cljs.core.chunk_rest.call(null,seq__186797_186847__$1);
var G__186850 = c__11600__auto___186848;
var G__186851 = cljs.core.count.call(null,c__11600__auto___186848);
var G__186852 = 0;
seq__186797_186813 = G__186849;
chunk__186798_186814 = G__186850;
count__186799_186815 = G__186851;
i__186800_186816 = G__186852;
continue;
}
} else
{var vec__186807_186853 = cljs.core.first.call(null,seq__186797_186847__$1);var k_186854 = cljs.core.nth.call(null,vec__186807_186853,0,null);var v_186855 = cljs.core.nth.call(null,vec__186807_186853,1,null);var G__186808_186856 = k_186854;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__186808_186856))
{var seq__186809_186857 = cljs.core.seq.call(null,v_186855);var chunk__186810_186858 = null;var count__186811_186859 = 0;var i__186812_186860 = 0;while(true){
if((i__186812_186860 < count__186811_186859))
{var c_186861 = cljs.core._nth.call(null,chunk__186810_186858,i__186812_186860);dommy.attrs.add_class_BANG_.call(null,n,c_186861);
{
var G__186862 = seq__186809_186857;
var G__186863 = chunk__186810_186858;
var G__186864 = count__186811_186859;
var G__186865 = (i__186812_186860 + 1);
seq__186809_186857 = G__186862;
chunk__186810_186858 = G__186863;
count__186811_186859 = G__186864;
i__186812_186860 = G__186865;
continue;
}
} else
{var temp__4092__auto___186866__$1 = cljs.core.seq.call(null,seq__186809_186857);if(temp__4092__auto___186866__$1)
{var seq__186809_186867__$1 = temp__4092__auto___186866__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__186809_186867__$1))
{var c__11600__auto___186868 = cljs.core.chunk_first.call(null,seq__186809_186867__$1);{
var G__186869 = cljs.core.chunk_rest.call(null,seq__186809_186867__$1);
var G__186870 = c__11600__auto___186868;
var G__186871 = cljs.core.count.call(null,c__11600__auto___186868);
var G__186872 = 0;
seq__186809_186857 = G__186869;
chunk__186810_186858 = G__186870;
count__186811_186859 = G__186871;
i__186812_186860 = G__186872;
continue;
}
} else
{var c_186873 = cljs.core.first.call(null,seq__186809_186867__$1);dommy.attrs.add_class_BANG_.call(null,n,c_186873);
{
var G__186874 = cljs.core.next.call(null,seq__186809_186867__$1);
var G__186875 = null;
var G__186876 = 0;
var G__186877 = 0;
seq__186809_186857 = G__186874;
chunk__186810_186858 = G__186875;
count__186811_186859 = G__186876;
i__186812_186860 = G__186877;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__186808_186856))
{dommy.attrs.add_class_BANG_.call(null,n,v_186855);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_186854,v_186855);
} else
{}
}
}
{
var G__186878 = cljs.core.next.call(null,seq__186797_186847__$1);
var G__186879 = null;
var G__186880 = 0;
var G__186881 = 0;
seq__186797_186813 = G__186878;
chunk__186798_186814 = G__186879;
count__186799_186815 = G__186880;
i__186800_186816 = G__186881;
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
}catch (e186882){if((e186882 instanceof ReferenceError))
{var __186883 = e186882;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e186882;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__186885 = data;if(G__186885)
{var bit__11502__auto__ = null;if(cljs.core.truth_((function (){var or__10858__auto__ = bit__11502__auto__;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return G__186885.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__186885.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186885);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__186885);
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

//# sourceMappingURL=template.js.map