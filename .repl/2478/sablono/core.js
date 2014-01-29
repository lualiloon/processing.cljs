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
var G__47981__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__47980 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__47980,0,null);var body = cljs.core.nthnext.call(null,vec__47980,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__47981 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47981__delegate.call(this,args);};
G__47981.cljs$lang$maxFixedArity = 0;
G__47981.cljs$lang$applyTo = (function (arglist__47982){
var args = cljs.core.seq(arglist__47982);
return G__47981__delegate(args);
});
G__47981.cljs$core$IFn$_invoke$arity$variadic = G__47981__delegate;
return G__47981;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8561__auto__ = (function iter__47987(s__47988){return (new cljs.core.LazySeq(null,(function (){var s__47988__$1 = s__47988;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__47988__$1);if(temp__4092__auto__)
{var s__47988__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47988__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__47988__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__47990 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__47989 = 0;while(true){
if((i__47989 < size__8560__auto__))
{var args = cljs.core._nth.call(null,c__8559__auto__,i__47989);cljs.core.chunk_append.call(null,b__47990,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__47991 = (i__47989 + 1);
i__47989 = G__47991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47990),iter__47987.call(null,cljs.core.chunk_rest.call(null,s__47988__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47990),null);
}
} else
{var args = cljs.core.first.call(null,s__47988__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__47987.call(null,cljs.core.rest.call(null,s__47988__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__47992_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__47992_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8561__auto__ = (function iter__47997(s__47998){return (new cljs.core.LazySeq(null,(function (){var s__47998__$1 = s__47998;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__47998__$1);if(temp__4092__auto__)
{var s__47998__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47998__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__47998__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__48000 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__47999 = 0;while(true){
if((i__47999 < size__8560__auto__))
{var style = cljs.core._nth.call(null,c__8559__auto__,i__47999);cljs.core.chunk_append.call(null,b__48000,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__48001 = (i__47999 + 1);
i__47999 = G__48001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48000),iter__47997.call(null,cljs.core.chunk_rest.call(null,s__47998__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48000),null);
}
} else
{var style = cljs.core.first.call(null,s__47998__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__47997.call(null,cljs.core.rest.call(null,s__47998__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__48002){
var styles = cljs.core.seq(arglist__48002);
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
sablono.core.link_to48003 = (function() { 
var link_to48003__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to48003 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to48003__delegate.call(this,url,content);};
link_to48003.cljs$lang$maxFixedArity = 1;
link_to48003.cljs$lang$applyTo = (function (arglist__48004){
var url = cljs.core.first(arglist__48004);
var content = cljs.core.rest(arglist__48004);
return link_to48003__delegate(url,content);
});
link_to48003.cljs$core$IFn$_invoke$arity$variadic = link_to48003__delegate;
return link_to48003;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to48003);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to48005 = (function() { 
var mail_to48005__delegate = function (e_mail,p__48006){var vec__48008 = p__48006;var content = cljs.core.nth.call(null,vec__48008,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7850__auto__ = content;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to48005 = function (e_mail,var_args){
var p__48006 = null;if (arguments.length > 1) {
  p__48006 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to48005__delegate.call(this,e_mail,p__48006);};
mail_to48005.cljs$lang$maxFixedArity = 1;
mail_to48005.cljs$lang$applyTo = (function (arglist__48009){
var e_mail = cljs.core.first(arglist__48009);
var p__48006 = cljs.core.rest(arglist__48009);
return mail_to48005__delegate(e_mail,p__48006);
});
mail_to48005.cljs$core$IFn$_invoke$arity$variadic = mail_to48005__delegate;
return mail_to48005;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to48005);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list48010 = (function unordered_list48010(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8561__auto__ = (function iter__48015(s__48016){return (new cljs.core.LazySeq(null,(function (){var s__48016__$1 = s__48016;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48016__$1);if(temp__4092__auto__)
{var s__48016__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48016__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__48016__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__48018 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__48017 = 0;while(true){
if((i__48017 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__48017);cljs.core.chunk_append.call(null,b__48018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__48019 = (i__48017 + 1);
i__48017 = G__48019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48018),iter__48015.call(null,cljs.core.chunk_rest.call(null,s__48016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48018),null);
}
} else
{var x = cljs.core.first.call(null,s__48016__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__48015.call(null,cljs.core.rest.call(null,s__48016__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list48010);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list48020 = (function ordered_list48020(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8561__auto__ = (function iter__48025(s__48026){return (new cljs.core.LazySeq(null,(function (){var s__48026__$1 = s__48026;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48026__$1);if(temp__4092__auto__)
{var s__48026__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48026__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__48026__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__48028 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__48027 = 0;while(true){
if((i__48027 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__48027);cljs.core.chunk_append.call(null,b__48028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__48029 = (i__48027 + 1);
i__48027 = G__48029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48028),iter__48025.call(null,cljs.core.chunk_rest.call(null,s__48026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48028),null);
}
} else
{var x = cljs.core.first.call(null,s__48026__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__48025.call(null,cljs.core.rest.call(null,s__48026__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list48020);
/**
* Create an image element.
*/
sablono.core.image48030 = (function() {
var image48030 = null;
var image48030__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image48030__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image48030 = function(src,alt){
switch(arguments.length){
case 1:
return image48030__1.call(this,src);
case 2:
return image48030__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image48030.cljs$core$IFn$_invoke$arity$1 = image48030__1;
image48030.cljs$core$IFn$_invoke$arity$2 = image48030__2;
return image48030;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image48030);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__48031_SHARP_,p2__48032_SHARP_){return [cljs.core.str(p1__48031_SHARP_),cljs.core.str("["),cljs.core.str(p2__48032_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__48033_SHARP_,p2__48034_SHARP_){return [cljs.core.str(p1__48033_SHARP_),cljs.core.str("-"),cljs.core.str(p2__48034_SHARP_)].join('');
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
sablono.core.hidden_field48035 = (function() {
var hidden_field48035 = null;
var hidden_field48035__1 = (function (name){return hidden_field48035.call(null,name,null);
});
var hidden_field48035__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field48035 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field48035__1.call(this,name);
case 2:
return hidden_field48035__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field48035.cljs$core$IFn$_invoke$arity$1 = hidden_field48035__1;
hidden_field48035.cljs$core$IFn$_invoke$arity$2 = hidden_field48035__2;
return hidden_field48035;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field48035);
/**
* Creates a new text input field.
*/
sablono.core.text_field48036 = (function() {
var text_field48036 = null;
var text_field48036__1 = (function (name){return text_field48036.call(null,name,null);
});
var text_field48036__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field48036 = function(name,value){
switch(arguments.length){
case 1:
return text_field48036__1.call(this,name);
case 2:
return text_field48036__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field48036.cljs$core$IFn$_invoke$arity$1 = text_field48036__1;
text_field48036.cljs$core$IFn$_invoke$arity$2 = text_field48036__2;
return text_field48036;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field48036);
/**
* Creates a new password field.
*/
sablono.core.password_field48037 = (function() {
var password_field48037 = null;
var password_field48037__1 = (function (name){return password_field48037.call(null,name,null);
});
var password_field48037__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field48037 = function(name,value){
switch(arguments.length){
case 1:
return password_field48037__1.call(this,name);
case 2:
return password_field48037__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field48037.cljs$core$IFn$_invoke$arity$1 = password_field48037__1;
password_field48037.cljs$core$IFn$_invoke$arity$2 = password_field48037__2;
return password_field48037;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field48037);
/**
* Creates a new email input field.
*/
sablono.core.email_field48038 = (function() {
var email_field48038 = null;
var email_field48038__1 = (function (name){return email_field48038.call(null,name,null);
});
var email_field48038__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field48038 = function(name,value){
switch(arguments.length){
case 1:
return email_field48038__1.call(this,name);
case 2:
return email_field48038__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field48038.cljs$core$IFn$_invoke$arity$1 = email_field48038__1;
email_field48038.cljs$core$IFn$_invoke$arity$2 = email_field48038__2;
return email_field48038;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field48038);
/**
* Creates a check box.
*/
sablono.core.check_box48039 = (function() {
var check_box48039 = null;
var check_box48039__1 = (function (name){return check_box48039.call(null,name,null);
});
var check_box48039__2 = (function (name,checked_QMARK_){return check_box48039.call(null,name,checked_QMARK_,"true");
});
var check_box48039__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box48039 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box48039__1.call(this,name);
case 2:
return check_box48039__2.call(this,name,checked_QMARK_);
case 3:
return check_box48039__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box48039.cljs$core$IFn$_invoke$arity$1 = check_box48039__1;
check_box48039.cljs$core$IFn$_invoke$arity$2 = check_box48039__2;
check_box48039.cljs$core$IFn$_invoke$arity$3 = check_box48039__3;
return check_box48039;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box48039);
/**
* Creates a radio button.
*/
sablono.core.radio_button48040 = (function() {
var radio_button48040 = null;
var radio_button48040__1 = (function (group){return radio_button48040.call(null,group,null);
});
var radio_button48040__2 = (function (group,checked_QMARK_){return radio_button48040.call(null,group,checked_QMARK_,"true");
});
var radio_button48040__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button48040 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button48040__1.call(this,group);
case 2:
return radio_button48040__2.call(this,group,checked_QMARK_);
case 3:
return radio_button48040__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button48040.cljs$core$IFn$_invoke$arity$1 = radio_button48040__1;
radio_button48040.cljs$core$IFn$_invoke$arity$2 = radio_button48040__2;
radio_button48040.cljs$core$IFn$_invoke$arity$3 = radio_button48040__3;
return radio_button48040;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button48040);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options48041 = (function() {
var select_options48041 = null;
var select_options48041__1 = (function (coll){return select_options48041.call(null,coll,null);
});
var select_options48041__2 = (function (coll,selected){var iter__8561__auto__ = (function iter__48050(s__48051){return (new cljs.core.LazySeq(null,(function (){var s__48051__$1 = s__48051;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48051__$1);if(temp__4092__auto__)
{var s__48051__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48051__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__48051__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__48053 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__48052 = 0;while(true){
if((i__48052 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__48052);cljs.core.chunk_append.call(null,b__48053,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__48056 = x;var text = cljs.core.nth.call(null,vec__48056,0,null);var val = cljs.core.nth.call(null,vec__48056,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options48041.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__48058 = (i__48052 + 1);
i__48052 = G__48058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48053),iter__48050.call(null,cljs.core.chunk_rest.call(null,s__48051__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48053),null);
}
} else
{var x = cljs.core.first.call(null,s__48051__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__48057 = x;var text = cljs.core.nth.call(null,vec__48057,0,null);var val = cljs.core.nth.call(null,vec__48057,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options48041.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__48050.call(null,cljs.core.rest.call(null,s__48051__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,coll);
});
select_options48041 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options48041__1.call(this,coll);
case 2:
return select_options48041__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options48041.cljs$core$IFn$_invoke$arity$1 = select_options48041__1;
select_options48041.cljs$core$IFn$_invoke$arity$2 = select_options48041__2;
return select_options48041;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options48041);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down48059 = (function() {
var drop_down48059 = null;
var drop_down48059__2 = (function (name,options){return drop_down48059.call(null,name,options,null);
});
var drop_down48059__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down48059 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down48059__2.call(this,name,options);
case 3:
return drop_down48059__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down48059.cljs$core$IFn$_invoke$arity$2 = drop_down48059__2;
drop_down48059.cljs$core$IFn$_invoke$arity$3 = drop_down48059__3;
return drop_down48059;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down48059);
/**
* Creates a text area element.
*/
sablono.core.text_area48060 = (function() {
var text_area48060 = null;
var text_area48060__1 = (function (name){return text_area48060.call(null,name,null);
});
var text_area48060__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area48060 = function(name,value){
switch(arguments.length){
case 1:
return text_area48060__1.call(this,name);
case 2:
return text_area48060__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area48060.cljs$core$IFn$_invoke$arity$1 = text_area48060__1;
text_area48060.cljs$core$IFn$_invoke$arity$2 = text_area48060__2;
return text_area48060;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area48060);
/**
* Creates a file upload input.
*/
sablono.core.file_upload48061 = (function file_upload48061(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload48061);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label48062 = (function label48062(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label48062);
/**
* Creates a submit button.
*/
sablono.core.submit_button48063 = (function submit_button48063(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button48063);
/**
* Creates a form reset button.
*/
sablono.core.reset_button48064 = (function reset_button48064(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button48064);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to48065 = (function() { 
var form_to48065__delegate = function (p__48066,body){var vec__48068 = p__48066;var method = cljs.core.nth.call(null,vec__48068,0,null);var action = cljs.core.nth.call(null,vec__48068,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to48065 = function (p__48066,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to48065__delegate.call(this,p__48066,body);};
form_to48065.cljs$lang$maxFixedArity = 1;
form_to48065.cljs$lang$applyTo = (function (arglist__48069){
var p__48066 = cljs.core.first(arglist__48069);
var body = cljs.core.rest(arglist__48069);
return form_to48065__delegate(p__48066,body);
});
form_to48065.cljs$core$IFn$_invoke$arity$variadic = form_to48065__delegate;
return form_to48065;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to48065);
