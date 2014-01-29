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
var G__48955__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__48954 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__48954,0,null);var body = cljs.core.nthnext.call(null,vec__48954,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__48955 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48955__delegate.call(this,args);};
G__48955.cljs$lang$maxFixedArity = 0;
G__48955.cljs$lang$applyTo = (function (arglist__48956){
var args = cljs.core.seq(arglist__48956);
return G__48955__delegate(args);
});
G__48955.cljs$core$IFn$_invoke$arity$variadic = G__48955__delegate;
return G__48955;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8573__auto__ = (function iter__48961(s__48962){return (new cljs.core.LazySeq(null,(function (){var s__48962__$1 = s__48962;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48962__$1);if(temp__4092__auto__)
{var s__48962__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48962__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__48962__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__48964 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__48963 = 0;while(true){
if((i__48963 < size__8572__auto__))
{var args = cljs.core._nth.call(null,c__8571__auto__,i__48963);cljs.core.chunk_append.call(null,b__48964,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__48965 = (i__48963 + 1);
i__48963 = G__48965;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48964),iter__48961.call(null,cljs.core.chunk_rest.call(null,s__48962__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48964),null);
}
} else
{var args = cljs.core.first.call(null,s__48962__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__48961.call(null,cljs.core.rest.call(null,s__48962__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__48966_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__48966_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8573__auto__ = (function iter__48971(s__48972){return (new cljs.core.LazySeq(null,(function (){var s__48972__$1 = s__48972;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48972__$1);if(temp__4092__auto__)
{var s__48972__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48972__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__48972__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__48974 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__48973 = 0;while(true){
if((i__48973 < size__8572__auto__))
{var style = cljs.core._nth.call(null,c__8571__auto__,i__48973);cljs.core.chunk_append.call(null,b__48974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__48975 = (i__48973 + 1);
i__48973 = G__48975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48974),iter__48971.call(null,cljs.core.chunk_rest.call(null,s__48972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48974),null);
}
} else
{var style = cljs.core.first.call(null,s__48972__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__48971.call(null,cljs.core.rest.call(null,s__48972__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__48976){
var styles = cljs.core.seq(arglist__48976);
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
sablono.core.link_to48977 = (function() { 
var link_to48977__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to48977 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to48977__delegate.call(this,url,content);};
link_to48977.cljs$lang$maxFixedArity = 1;
link_to48977.cljs$lang$applyTo = (function (arglist__48978){
var url = cljs.core.first(arglist__48978);
var content = cljs.core.rest(arglist__48978);
return link_to48977__delegate(url,content);
});
link_to48977.cljs$core$IFn$_invoke$arity$variadic = link_to48977__delegate;
return link_to48977;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to48977);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to48979 = (function() { 
var mail_to48979__delegate = function (e_mail,p__48980){var vec__48982 = p__48980;var content = cljs.core.nth.call(null,vec__48982,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7862__auto__ = content;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to48979 = function (e_mail,var_args){
var p__48980 = null;if (arguments.length > 1) {
  p__48980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to48979__delegate.call(this,e_mail,p__48980);};
mail_to48979.cljs$lang$maxFixedArity = 1;
mail_to48979.cljs$lang$applyTo = (function (arglist__48983){
var e_mail = cljs.core.first(arglist__48983);
var p__48980 = cljs.core.rest(arglist__48983);
return mail_to48979__delegate(e_mail,p__48980);
});
mail_to48979.cljs$core$IFn$_invoke$arity$variadic = mail_to48979__delegate;
return mail_to48979;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to48979);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list48984 = (function unordered_list48984(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8573__auto__ = (function iter__48989(s__48990){return (new cljs.core.LazySeq(null,(function (){var s__48990__$1 = s__48990;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48990__$1);if(temp__4092__auto__)
{var s__48990__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48990__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__48990__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__48992 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__48991 = 0;while(true){
if((i__48991 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__48991);cljs.core.chunk_append.call(null,b__48992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__48993 = (i__48991 + 1);
i__48991 = G__48993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48992),iter__48989.call(null,cljs.core.chunk_rest.call(null,s__48990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48992),null);
}
} else
{var x = cljs.core.first.call(null,s__48990__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__48989.call(null,cljs.core.rest.call(null,s__48990__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list48984);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list48994 = (function ordered_list48994(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8573__auto__ = (function iter__48999(s__49000){return (new cljs.core.LazySeq(null,(function (){var s__49000__$1 = s__49000;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49000__$1);if(temp__4092__auto__)
{var s__49000__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49000__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__49000__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__49002 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__49001 = 0;while(true){
if((i__49001 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__49001);cljs.core.chunk_append.call(null,b__49002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49003 = (i__49001 + 1);
i__49001 = G__49003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49002),iter__48999.call(null,cljs.core.chunk_rest.call(null,s__49000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49002),null);
}
} else
{var x = cljs.core.first.call(null,s__49000__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__48999.call(null,cljs.core.rest.call(null,s__49000__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list48994);
/**
* Create an image element.
*/
sablono.core.image49004 = (function() {
var image49004 = null;
var image49004__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image49004__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image49004 = function(src,alt){
switch(arguments.length){
case 1:
return image49004__1.call(this,src);
case 2:
return image49004__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image49004.cljs$core$IFn$_invoke$arity$1 = image49004__1;
image49004.cljs$core$IFn$_invoke$arity$2 = image49004__2;
return image49004;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image49004);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__49005_SHARP_,p2__49006_SHARP_){return [cljs.core.str(p1__49005_SHARP_),cljs.core.str("["),cljs.core.str(p2__49006_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__49007_SHARP_,p2__49008_SHARP_){return [cljs.core.str(p1__49007_SHARP_),cljs.core.str("-"),cljs.core.str(p2__49008_SHARP_)].join('');
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
sablono.core.hidden_field49009 = (function() {
var hidden_field49009 = null;
var hidden_field49009__1 = (function (name){return hidden_field49009.call(null,name,null);
});
var hidden_field49009__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field49009 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field49009__1.call(this,name);
case 2:
return hidden_field49009__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field49009.cljs$core$IFn$_invoke$arity$1 = hidden_field49009__1;
hidden_field49009.cljs$core$IFn$_invoke$arity$2 = hidden_field49009__2;
return hidden_field49009;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field49009);
/**
* Creates a new text input field.
*/
sablono.core.text_field49010 = (function() {
var text_field49010 = null;
var text_field49010__1 = (function (name){return text_field49010.call(null,name,null);
});
var text_field49010__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field49010 = function(name,value){
switch(arguments.length){
case 1:
return text_field49010__1.call(this,name);
case 2:
return text_field49010__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field49010.cljs$core$IFn$_invoke$arity$1 = text_field49010__1;
text_field49010.cljs$core$IFn$_invoke$arity$2 = text_field49010__2;
return text_field49010;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field49010);
/**
* Creates a new password field.
*/
sablono.core.password_field49011 = (function() {
var password_field49011 = null;
var password_field49011__1 = (function (name){return password_field49011.call(null,name,null);
});
var password_field49011__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field49011 = function(name,value){
switch(arguments.length){
case 1:
return password_field49011__1.call(this,name);
case 2:
return password_field49011__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field49011.cljs$core$IFn$_invoke$arity$1 = password_field49011__1;
password_field49011.cljs$core$IFn$_invoke$arity$2 = password_field49011__2;
return password_field49011;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field49011);
/**
* Creates a new email input field.
*/
sablono.core.email_field49012 = (function() {
var email_field49012 = null;
var email_field49012__1 = (function (name){return email_field49012.call(null,name,null);
});
var email_field49012__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field49012 = function(name,value){
switch(arguments.length){
case 1:
return email_field49012__1.call(this,name);
case 2:
return email_field49012__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field49012.cljs$core$IFn$_invoke$arity$1 = email_field49012__1;
email_field49012.cljs$core$IFn$_invoke$arity$2 = email_field49012__2;
return email_field49012;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field49012);
/**
* Creates a check box.
*/
sablono.core.check_box49013 = (function() {
var check_box49013 = null;
var check_box49013__1 = (function (name){return check_box49013.call(null,name,null);
});
var check_box49013__2 = (function (name,checked_QMARK_){return check_box49013.call(null,name,checked_QMARK_,"true");
});
var check_box49013__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box49013 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box49013__1.call(this,name);
case 2:
return check_box49013__2.call(this,name,checked_QMARK_);
case 3:
return check_box49013__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box49013.cljs$core$IFn$_invoke$arity$1 = check_box49013__1;
check_box49013.cljs$core$IFn$_invoke$arity$2 = check_box49013__2;
check_box49013.cljs$core$IFn$_invoke$arity$3 = check_box49013__3;
return check_box49013;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box49013);
/**
* Creates a radio button.
*/
sablono.core.radio_button49014 = (function() {
var radio_button49014 = null;
var radio_button49014__1 = (function (group){return radio_button49014.call(null,group,null);
});
var radio_button49014__2 = (function (group,checked_QMARK_){return radio_button49014.call(null,group,checked_QMARK_,"true");
});
var radio_button49014__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button49014 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button49014__1.call(this,group);
case 2:
return radio_button49014__2.call(this,group,checked_QMARK_);
case 3:
return radio_button49014__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button49014.cljs$core$IFn$_invoke$arity$1 = radio_button49014__1;
radio_button49014.cljs$core$IFn$_invoke$arity$2 = radio_button49014__2;
radio_button49014.cljs$core$IFn$_invoke$arity$3 = radio_button49014__3;
return radio_button49014;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button49014);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options49015 = (function() {
var select_options49015 = null;
var select_options49015__1 = (function (coll){return select_options49015.call(null,coll,null);
});
var select_options49015__2 = (function (coll,selected){var iter__8573__auto__ = (function iter__49024(s__49025){return (new cljs.core.LazySeq(null,(function (){var s__49025__$1 = s__49025;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49025__$1);if(temp__4092__auto__)
{var s__49025__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49025__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__49025__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__49027 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__49026 = 0;while(true){
if((i__49026 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__49026);cljs.core.chunk_append.call(null,b__49027,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49030 = x;var text = cljs.core.nth.call(null,vec__49030,0,null);var val = cljs.core.nth.call(null,vec__49030,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49015.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__49032 = (i__49026 + 1);
i__49026 = G__49032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49027),iter__49024.call(null,cljs.core.chunk_rest.call(null,s__49025__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49027),null);
}
} else
{var x = cljs.core.first.call(null,s__49025__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49031 = x;var text = cljs.core.nth.call(null,vec__49031,0,null);var val = cljs.core.nth.call(null,vec__49031,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49015.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__49024.call(null,cljs.core.rest.call(null,s__49025__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,coll);
});
select_options49015 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options49015__1.call(this,coll);
case 2:
return select_options49015__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options49015.cljs$core$IFn$_invoke$arity$1 = select_options49015__1;
select_options49015.cljs$core$IFn$_invoke$arity$2 = select_options49015__2;
return select_options49015;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options49015);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down49033 = (function() {
var drop_down49033 = null;
var drop_down49033__2 = (function (name,options){return drop_down49033.call(null,name,options,null);
});
var drop_down49033__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down49033 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down49033__2.call(this,name,options);
case 3:
return drop_down49033__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down49033.cljs$core$IFn$_invoke$arity$2 = drop_down49033__2;
drop_down49033.cljs$core$IFn$_invoke$arity$3 = drop_down49033__3;
return drop_down49033;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down49033);
/**
* Creates a text area element.
*/
sablono.core.text_area49034 = (function() {
var text_area49034 = null;
var text_area49034__1 = (function (name){return text_area49034.call(null,name,null);
});
var text_area49034__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area49034 = function(name,value){
switch(arguments.length){
case 1:
return text_area49034__1.call(this,name);
case 2:
return text_area49034__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area49034.cljs$core$IFn$_invoke$arity$1 = text_area49034__1;
text_area49034.cljs$core$IFn$_invoke$arity$2 = text_area49034__2;
return text_area49034;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area49034);
/**
* Creates a file upload input.
*/
sablono.core.file_upload49035 = (function file_upload49035(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload49035);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label49036 = (function label49036(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label49036);
/**
* Creates a submit button.
*/
sablono.core.submit_button49037 = (function submit_button49037(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button49037);
/**
* Creates a form reset button.
*/
sablono.core.reset_button49038 = (function reset_button49038(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button49038);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to49039 = (function() { 
var form_to49039__delegate = function (p__49040,body){var vec__49042 = p__49040;var method = cljs.core.nth.call(null,vec__49042,0,null);var action = cljs.core.nth.call(null,vec__49042,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to49039 = function (p__49040,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to49039__delegate.call(this,p__49040,body);};
form_to49039.cljs$lang$maxFixedArity = 1;
form_to49039.cljs$lang$applyTo = (function (arglist__49043){
var p__49040 = cljs.core.first(arglist__49043);
var body = cljs.core.rest(arglist__49043);
return form_to49039__delegate(p__49040,body);
});
form_to49039.cljs$core$IFn$_invoke$arity$variadic = form_to49039__delegate;
return form_to49039;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to49039);
