// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__34689__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34688 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34688,0,null);var body = cljs.core.nthnext.call(null,vec__34688,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34689 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34689__delegate.call(this,args);};
G__34689.cljs$lang$maxFixedArity = 0;
G__34689.cljs$lang$applyTo = (function (arglist__34690){
var args = cljs.core.seq(arglist__34690);
return G__34689__delegate(args);
});
G__34689.cljs$core$IFn$_invoke$arity$variadic = G__34689__delegate;
return G__34689;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8573__auto__ = (function iter__34695(s__34696){return (new cljs.core.LazySeq(null,(function (){var s__34696__$1 = s__34696;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34696__$1);if(temp__4092__auto__)
{var s__34696__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34696__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__34696__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__34698 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__34697 = 0;while(true){
if((i__34697 < size__8572__auto__))
{var args = cljs.core._nth.call(null,c__8571__auto__,i__34697);cljs.core.chunk_append.call(null,b__34698,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__34699 = (i__34697 + 1);
i__34697 = G__34699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34698),iter__34695.call(null,cljs.core.chunk_rest.call(null,s__34696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34698),null);
}
} else
{var args = cljs.core.first.call(null,s__34696__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__34695.call(null,cljs.core.rest.call(null,s__34696__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__34700_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__34700_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8573__auto__ = (function iter__34705(s__34706){return (new cljs.core.LazySeq(null,(function (){var s__34706__$1 = s__34706;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34706__$1);if(temp__4092__auto__)
{var s__34706__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34706__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__34706__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__34708 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__34707 = 0;while(true){
if((i__34707 < size__8572__auto__))
{var style = cljs.core._nth.call(null,c__8571__auto__,i__34707);cljs.core.chunk_append.call(null,b__34708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__34709 = (i__34707 + 1);
i__34707 = G__34709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34708),iter__34705.call(null,cljs.core.chunk_rest.call(null,s__34706__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34708),null);
}
} else
{var style = cljs.core.first.call(null,s__34706__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__34705.call(null,cljs.core.rest.call(null,s__34706__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__34710){
var styles = cljs.core.seq(arglist__34710);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to34711 = (function() { 
var link_to34711__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34711 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34711__delegate.call(this,url,content);};
link_to34711.cljs$lang$maxFixedArity = 1;
link_to34711.cljs$lang$applyTo = (function (arglist__34712){
var url = cljs.core.first(arglist__34712);
var content = cljs.core.rest(arglist__34712);
return link_to34711__delegate(url,content);
});
link_to34711.cljs$core$IFn$_invoke$arity$variadic = link_to34711__delegate;
return link_to34711;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34711);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34713 = (function() { 
var mail_to34713__delegate = function (e_mail,p__34714){var vec__34716 = p__34714;var content = cljs.core.nth.call(null,vec__34716,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7862__auto__ = content;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34713 = function (e_mail,var_args){
var p__34714 = null;if (arguments.length > 1) {
  p__34714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34713__delegate.call(this,e_mail,p__34714);};
mail_to34713.cljs$lang$maxFixedArity = 1;
mail_to34713.cljs$lang$applyTo = (function (arglist__34717){
var e_mail = cljs.core.first(arglist__34717);
var p__34714 = cljs.core.rest(arglist__34717);
return mail_to34713__delegate(e_mail,p__34714);
});
mail_to34713.cljs$core$IFn$_invoke$arity$variadic = mail_to34713__delegate;
return mail_to34713;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34713);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34718 = (function unordered_list34718(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8573__auto__ = (function iter__34723(s__34724){return (new cljs.core.LazySeq(null,(function (){var s__34724__$1 = s__34724;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34724__$1);if(temp__4092__auto__)
{var s__34724__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34724__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__34724__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__34726 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__34725 = 0;while(true){
if((i__34725 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__34725);cljs.core.chunk_append.call(null,b__34726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34727 = (i__34725 + 1);
i__34725 = G__34727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34726),iter__34723.call(null,cljs.core.chunk_rest.call(null,s__34724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34726),null);
}
} else
{var x = cljs.core.first.call(null,s__34724__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34723.call(null,cljs.core.rest.call(null,s__34724__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34718);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34728 = (function ordered_list34728(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8573__auto__ = (function iter__34733(s__34734){return (new cljs.core.LazySeq(null,(function (){var s__34734__$1 = s__34734;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34734__$1);if(temp__4092__auto__)
{var s__34734__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34734__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__34734__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__34736 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__34735 = 0;while(true){
if((i__34735 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__34735);cljs.core.chunk_append.call(null,b__34736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34737 = (i__34735 + 1);
i__34735 = G__34737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34736),iter__34733.call(null,cljs.core.chunk_rest.call(null,s__34734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34736),null);
}
} else
{var x = cljs.core.first.call(null,s__34734__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34733.call(null,cljs.core.rest.call(null,s__34734__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34728);
/**
* Create an image element.
*/
sablono.core.image34738 = (function() {
var image34738 = null;
var image34738__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image34738__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image34738 = function(src,alt){
switch(arguments.length){
case 1:
return image34738__1.call(this,src);
case 2:
return image34738__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34738.cljs$core$IFn$_invoke$arity$1 = image34738__1;
image34738.cljs$core$IFn$_invoke$arity$2 = image34738__2;
return image34738;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34738);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34739_SHARP_,p2__34740_SHARP_){return [cljs.core.str(p1__34739_SHARP_),cljs.core.str("["),cljs.core.str(p2__34740_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34741_SHARP_,p2__34742_SHARP_){return [cljs.core.str(p1__34741_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34742_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field34743 = (function() {
var hidden_field34743 = null;
var hidden_field34743__1 = (function (name){return hidden_field34743.call(null,name,null);
});
var hidden_field34743__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field34743 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field34743__1.call(this,name);
case 2:
return hidden_field34743__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34743.cljs$core$IFn$_invoke$arity$1 = hidden_field34743__1;
hidden_field34743.cljs$core$IFn$_invoke$arity$2 = hidden_field34743__2;
return hidden_field34743;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34743);
/**
* Creates a new text input field.
*/
sablono.core.text_field34744 = (function() {
var text_field34744 = null;
var text_field34744__1 = (function (name){return text_field34744.call(null,name,null);
});
var text_field34744__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field34744 = function(name,value){
switch(arguments.length){
case 1:
return text_field34744__1.call(this,name);
case 2:
return text_field34744__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34744.cljs$core$IFn$_invoke$arity$1 = text_field34744__1;
text_field34744.cljs$core$IFn$_invoke$arity$2 = text_field34744__2;
return text_field34744;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34744);
/**
* Creates a new password field.
*/
sablono.core.password_field34745 = (function() {
var password_field34745 = null;
var password_field34745__1 = (function (name){return password_field34745.call(null,name,null);
});
var password_field34745__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field34745 = function(name,value){
switch(arguments.length){
case 1:
return password_field34745__1.call(this,name);
case 2:
return password_field34745__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34745.cljs$core$IFn$_invoke$arity$1 = password_field34745__1;
password_field34745.cljs$core$IFn$_invoke$arity$2 = password_field34745__2;
return password_field34745;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34745);
/**
* Creates a new email input field.
*/
sablono.core.email_field34746 = (function() {
var email_field34746 = null;
var email_field34746__1 = (function (name){return email_field34746.call(null,name,null);
});
var email_field34746__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field34746 = function(name,value){
switch(arguments.length){
case 1:
return email_field34746__1.call(this,name);
case 2:
return email_field34746__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34746.cljs$core$IFn$_invoke$arity$1 = email_field34746__1;
email_field34746.cljs$core$IFn$_invoke$arity$2 = email_field34746__2;
return email_field34746;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34746);
/**
* Creates a check box.
*/
sablono.core.check_box34747 = (function() {
var check_box34747 = null;
var check_box34747__1 = (function (name){return check_box34747.call(null,name,null);
});
var check_box34747__2 = (function (name,checked_QMARK_){return check_box34747.call(null,name,checked_QMARK_,"true");
});
var check_box34747__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box34747 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34747__1.call(this,name);
case 2:
return check_box34747__2.call(this,name,checked_QMARK_);
case 3:
return check_box34747__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34747.cljs$core$IFn$_invoke$arity$1 = check_box34747__1;
check_box34747.cljs$core$IFn$_invoke$arity$2 = check_box34747__2;
check_box34747.cljs$core$IFn$_invoke$arity$3 = check_box34747__3;
return check_box34747;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34747);
/**
* Creates a radio button.
*/
sablono.core.radio_button34748 = (function() {
var radio_button34748 = null;
var radio_button34748__1 = (function (group){return radio_button34748.call(null,group,null);
});
var radio_button34748__2 = (function (group,checked_QMARK_){return radio_button34748.call(null,group,checked_QMARK_,"true");
});
var radio_button34748__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button34748 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34748__1.call(this,group);
case 2:
return radio_button34748__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34748__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34748.cljs$core$IFn$_invoke$arity$1 = radio_button34748__1;
radio_button34748.cljs$core$IFn$_invoke$arity$2 = radio_button34748__2;
radio_button34748.cljs$core$IFn$_invoke$arity$3 = radio_button34748__3;
return radio_button34748;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34748);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34749 = (function() {
var select_options34749 = null;
var select_options34749__1 = (function (coll){return select_options34749.call(null,coll,null);
});
var select_options34749__2 = (function (coll,selected){var iter__8573__auto__ = (function iter__34758(s__34759){return (new cljs.core.LazySeq(null,(function (){var s__34759__$1 = s__34759;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34759__$1);if(temp__4092__auto__)
{var s__34759__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34759__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__34759__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__34761 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__34760 = 0;while(true){
if((i__34760 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__34760);cljs.core.chunk_append.call(null,b__34761,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34764 = x;var text = cljs.core.nth.call(null,vec__34764,0,null);var val = cljs.core.nth.call(null,vec__34764,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34749.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34766 = (i__34760 + 1);
i__34760 = G__34766;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34761),iter__34758.call(null,cljs.core.chunk_rest.call(null,s__34759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34761),null);
}
} else
{var x = cljs.core.first.call(null,s__34759__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34765 = x;var text = cljs.core.nth.call(null,vec__34765,0,null);var val = cljs.core.nth.call(null,vec__34765,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34749.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34758.call(null,cljs.core.rest.call(null,s__34759__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,coll);
});
select_options34749 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34749__1.call(this,coll);
case 2:
return select_options34749__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34749.cljs$core$IFn$_invoke$arity$1 = select_options34749__1;
select_options34749.cljs$core$IFn$_invoke$arity$2 = select_options34749__2;
return select_options34749;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34749);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34767 = (function() {
var drop_down34767 = null;
var drop_down34767__2 = (function (name,options){return drop_down34767.call(null,name,options,null);
});
var drop_down34767__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34767 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34767__2.call(this,name,options);
case 3:
return drop_down34767__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34767.cljs$core$IFn$_invoke$arity$2 = drop_down34767__2;
drop_down34767.cljs$core$IFn$_invoke$arity$3 = drop_down34767__3;
return drop_down34767;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34767);
/**
* Creates a text area element.
*/
sablono.core.text_area34768 = (function() {
var text_area34768 = null;
var text_area34768__1 = (function (name){return text_area34768.call(null,name,null);
});
var text_area34768__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area34768 = function(name,value){
switch(arguments.length){
case 1:
return text_area34768__1.call(this,name);
case 2:
return text_area34768__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34768.cljs$core$IFn$_invoke$arity$1 = text_area34768__1;
text_area34768.cljs$core$IFn$_invoke$arity$2 = text_area34768__2;
return text_area34768;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34768);
/**
* Creates a file upload input.
*/
sablono.core.file_upload34769 = (function file_upload34769(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload34769);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34770 = (function label34770(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34770);
/**
* Creates a submit button.
*/
sablono.core.submit_button34771 = (function submit_button34771(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34771);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34772 = (function reset_button34772(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34772);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34773 = (function() { 
var form_to34773__delegate = function (p__34774,body){var vec__34776 = p__34774;var method = cljs.core.nth.call(null,vec__34776,0,null);var action = cljs.core.nth.call(null,vec__34776,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34773 = function (p__34774,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34773__delegate.call(this,p__34774,body);};
form_to34773.cljs$lang$maxFixedArity = 1;
form_to34773.cljs$lang$applyTo = (function (arglist__34777){
var p__34774 = cljs.core.first(arglist__34777);
var body = cljs.core.rest(arglist__34777);
return form_to34773__delegate(p__34774,body);
});
form_to34773.cljs$core$IFn$_invoke$arity$variadic = form_to34773__delegate;
return form_to34773;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34773);
