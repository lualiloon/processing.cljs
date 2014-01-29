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
var G__20357__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__20356 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__20356,0,null);var body = cljs.core.nthnext.call(null,vec__20356,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__20357 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20357__delegate.call(this,args);};
G__20357.cljs$lang$maxFixedArity = 0;
G__20357.cljs$lang$applyTo = (function (arglist__20358){
var args = cljs.core.seq(arglist__20358);
return G__20357__delegate(args);
});
G__20357.cljs$core$IFn$_invoke$arity$variadic = G__20357__delegate;
return G__20357;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8561__auto__ = (function iter__20363(s__20364){return (new cljs.core.LazySeq(null,(function (){var s__20364__$1 = s__20364;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20364__$1);if(temp__4092__auto__)
{var s__20364__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20364__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__20364__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__20366 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__20365 = 0;while(true){
if((i__20365 < size__8560__auto__))
{var args = cljs.core._nth.call(null,c__8559__auto__,i__20365);cljs.core.chunk_append.call(null,b__20366,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__20367 = (i__20365 + 1);
i__20365 = G__20367;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20366),iter__20363.call(null,cljs.core.chunk_rest.call(null,s__20364__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20366),null);
}
} else
{var args = cljs.core.first.call(null,s__20364__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__20363.call(null,cljs.core.rest.call(null,s__20364__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__20368_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__20368_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8561__auto__ = (function iter__20373(s__20374){return (new cljs.core.LazySeq(null,(function (){var s__20374__$1 = s__20374;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20374__$1);if(temp__4092__auto__)
{var s__20374__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20374__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__20374__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__20376 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__20375 = 0;while(true){
if((i__20375 < size__8560__auto__))
{var style = cljs.core._nth.call(null,c__8559__auto__,i__20375);cljs.core.chunk_append.call(null,b__20376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__20377 = (i__20375 + 1);
i__20375 = G__20377;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20376),iter__20373.call(null,cljs.core.chunk_rest.call(null,s__20374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20376),null);
}
} else
{var style = cljs.core.first.call(null,s__20374__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__20373.call(null,cljs.core.rest.call(null,s__20374__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__20378){
var styles = cljs.core.seq(arglist__20378);
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
sablono.core.link_to20379 = (function() { 
var link_to20379__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to20379 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to20379__delegate.call(this,url,content);};
link_to20379.cljs$lang$maxFixedArity = 1;
link_to20379.cljs$lang$applyTo = (function (arglist__20380){
var url = cljs.core.first(arglist__20380);
var content = cljs.core.rest(arglist__20380);
return link_to20379__delegate(url,content);
});
link_to20379.cljs$core$IFn$_invoke$arity$variadic = link_to20379__delegate;
return link_to20379;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to20379);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to20381 = (function() { 
var mail_to20381__delegate = function (e_mail,p__20382){var vec__20384 = p__20382;var content = cljs.core.nth.call(null,vec__20384,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7850__auto__ = content;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to20381 = function (e_mail,var_args){
var p__20382 = null;if (arguments.length > 1) {
  p__20382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to20381__delegate.call(this,e_mail,p__20382);};
mail_to20381.cljs$lang$maxFixedArity = 1;
mail_to20381.cljs$lang$applyTo = (function (arglist__20385){
var e_mail = cljs.core.first(arglist__20385);
var p__20382 = cljs.core.rest(arglist__20385);
return mail_to20381__delegate(e_mail,p__20382);
});
mail_to20381.cljs$core$IFn$_invoke$arity$variadic = mail_to20381__delegate;
return mail_to20381;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to20381);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list20386 = (function unordered_list20386(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8561__auto__ = (function iter__20391(s__20392){return (new cljs.core.LazySeq(null,(function (){var s__20392__$1 = s__20392;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20392__$1);if(temp__4092__auto__)
{var s__20392__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20392__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__20392__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__20394 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__20393 = 0;while(true){
if((i__20393 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__20393);cljs.core.chunk_append.call(null,b__20394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__20395 = (i__20393 + 1);
i__20393 = G__20395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20394),iter__20391.call(null,cljs.core.chunk_rest.call(null,s__20392__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20394),null);
}
} else
{var x = cljs.core.first.call(null,s__20392__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__20391.call(null,cljs.core.rest.call(null,s__20392__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list20386);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list20396 = (function ordered_list20396(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8561__auto__ = (function iter__20401(s__20402){return (new cljs.core.LazySeq(null,(function (){var s__20402__$1 = s__20402;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20402__$1);if(temp__4092__auto__)
{var s__20402__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20402__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__20402__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__20404 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__20403 = 0;while(true){
if((i__20403 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__20403);cljs.core.chunk_append.call(null,b__20404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__20405 = (i__20403 + 1);
i__20403 = G__20405;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20404),iter__20401.call(null,cljs.core.chunk_rest.call(null,s__20402__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20404),null);
}
} else
{var x = cljs.core.first.call(null,s__20402__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__20401.call(null,cljs.core.rest.call(null,s__20402__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list20396);
/**
* Create an image element.
*/
sablono.core.image20406 = (function() {
var image20406 = null;
var image20406__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image20406__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image20406 = function(src,alt){
switch(arguments.length){
case 1:
return image20406__1.call(this,src);
case 2:
return image20406__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image20406.cljs$core$IFn$_invoke$arity$1 = image20406__1;
image20406.cljs$core$IFn$_invoke$arity$2 = image20406__2;
return image20406;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image20406);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__20407_SHARP_,p2__20408_SHARP_){return [cljs.core.str(p1__20407_SHARP_),cljs.core.str("["),cljs.core.str(p2__20408_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__20409_SHARP_,p2__20410_SHARP_){return [cljs.core.str(p1__20409_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20410_SHARP_)].join('');
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
sablono.core.hidden_field20411 = (function() {
var hidden_field20411 = null;
var hidden_field20411__1 = (function (name){return hidden_field20411.call(null,name,null);
});
var hidden_field20411__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field20411 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field20411__1.call(this,name);
case 2:
return hidden_field20411__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field20411.cljs$core$IFn$_invoke$arity$1 = hidden_field20411__1;
hidden_field20411.cljs$core$IFn$_invoke$arity$2 = hidden_field20411__2;
return hidden_field20411;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field20411);
/**
* Creates a new text input field.
*/
sablono.core.text_field20412 = (function() {
var text_field20412 = null;
var text_field20412__1 = (function (name){return text_field20412.call(null,name,null);
});
var text_field20412__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field20412 = function(name,value){
switch(arguments.length){
case 1:
return text_field20412__1.call(this,name);
case 2:
return text_field20412__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field20412.cljs$core$IFn$_invoke$arity$1 = text_field20412__1;
text_field20412.cljs$core$IFn$_invoke$arity$2 = text_field20412__2;
return text_field20412;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field20412);
/**
* Creates a new password field.
*/
sablono.core.password_field20413 = (function() {
var password_field20413 = null;
var password_field20413__1 = (function (name){return password_field20413.call(null,name,null);
});
var password_field20413__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field20413 = function(name,value){
switch(arguments.length){
case 1:
return password_field20413__1.call(this,name);
case 2:
return password_field20413__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field20413.cljs$core$IFn$_invoke$arity$1 = password_field20413__1;
password_field20413.cljs$core$IFn$_invoke$arity$2 = password_field20413__2;
return password_field20413;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field20413);
/**
* Creates a new email input field.
*/
sablono.core.email_field20414 = (function() {
var email_field20414 = null;
var email_field20414__1 = (function (name){return email_field20414.call(null,name,null);
});
var email_field20414__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field20414 = function(name,value){
switch(arguments.length){
case 1:
return email_field20414__1.call(this,name);
case 2:
return email_field20414__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field20414.cljs$core$IFn$_invoke$arity$1 = email_field20414__1;
email_field20414.cljs$core$IFn$_invoke$arity$2 = email_field20414__2;
return email_field20414;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field20414);
/**
* Creates a check box.
*/
sablono.core.check_box20415 = (function() {
var check_box20415 = null;
var check_box20415__1 = (function (name){return check_box20415.call(null,name,null);
});
var check_box20415__2 = (function (name,checked_QMARK_){return check_box20415.call(null,name,checked_QMARK_,"true");
});
var check_box20415__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box20415 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box20415__1.call(this,name);
case 2:
return check_box20415__2.call(this,name,checked_QMARK_);
case 3:
return check_box20415__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box20415.cljs$core$IFn$_invoke$arity$1 = check_box20415__1;
check_box20415.cljs$core$IFn$_invoke$arity$2 = check_box20415__2;
check_box20415.cljs$core$IFn$_invoke$arity$3 = check_box20415__3;
return check_box20415;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box20415);
/**
* Creates a radio button.
*/
sablono.core.radio_button20416 = (function() {
var radio_button20416 = null;
var radio_button20416__1 = (function (group){return radio_button20416.call(null,group,null);
});
var radio_button20416__2 = (function (group,checked_QMARK_){return radio_button20416.call(null,group,checked_QMARK_,"true");
});
var radio_button20416__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button20416 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button20416__1.call(this,group);
case 2:
return radio_button20416__2.call(this,group,checked_QMARK_);
case 3:
return radio_button20416__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button20416.cljs$core$IFn$_invoke$arity$1 = radio_button20416__1;
radio_button20416.cljs$core$IFn$_invoke$arity$2 = radio_button20416__2;
radio_button20416.cljs$core$IFn$_invoke$arity$3 = radio_button20416__3;
return radio_button20416;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button20416);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options20417 = (function() {
var select_options20417 = null;
var select_options20417__1 = (function (coll){return select_options20417.call(null,coll,null);
});
var select_options20417__2 = (function (coll,selected){var iter__8561__auto__ = (function iter__20426(s__20427){return (new cljs.core.LazySeq(null,(function (){var s__20427__$1 = s__20427;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20427__$1);if(temp__4092__auto__)
{var s__20427__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20427__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__20427__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__20429 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__20428 = 0;while(true){
if((i__20428 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__20428);cljs.core.chunk_append.call(null,b__20429,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20432 = x;var text = cljs.core.nth.call(null,vec__20432,0,null);var val = cljs.core.nth.call(null,vec__20432,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options20417.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__20434 = (i__20428 + 1);
i__20428 = G__20434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20429),iter__20426.call(null,cljs.core.chunk_rest.call(null,s__20427__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20429),null);
}
} else
{var x = cljs.core.first.call(null,s__20427__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__20433 = x;var text = cljs.core.nth.call(null,vec__20433,0,null);var val = cljs.core.nth.call(null,vec__20433,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options20417.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__20426.call(null,cljs.core.rest.call(null,s__20427__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,coll);
});
select_options20417 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options20417__1.call(this,coll);
case 2:
return select_options20417__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options20417.cljs$core$IFn$_invoke$arity$1 = select_options20417__1;
select_options20417.cljs$core$IFn$_invoke$arity$2 = select_options20417__2;
return select_options20417;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options20417);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down20435 = (function() {
var drop_down20435 = null;
var drop_down20435__2 = (function (name,options){return drop_down20435.call(null,name,options,null);
});
var drop_down20435__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down20435 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down20435__2.call(this,name,options);
case 3:
return drop_down20435__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down20435.cljs$core$IFn$_invoke$arity$2 = drop_down20435__2;
drop_down20435.cljs$core$IFn$_invoke$arity$3 = drop_down20435__3;
return drop_down20435;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down20435);
/**
* Creates a text area element.
*/
sablono.core.text_area20436 = (function() {
var text_area20436 = null;
var text_area20436__1 = (function (name){return text_area20436.call(null,name,null);
});
var text_area20436__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area20436 = function(name,value){
switch(arguments.length){
case 1:
return text_area20436__1.call(this,name);
case 2:
return text_area20436__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area20436.cljs$core$IFn$_invoke$arity$1 = text_area20436__1;
text_area20436.cljs$core$IFn$_invoke$arity$2 = text_area20436__2;
return text_area20436;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area20436);
/**
* Creates a file upload input.
*/
sablono.core.file_upload20437 = (function file_upload20437(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload20437);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label20438 = (function label20438(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label20438);
/**
* Creates a submit button.
*/
sablono.core.submit_button20439 = (function submit_button20439(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button20439);
/**
* Creates a form reset button.
*/
sablono.core.reset_button20440 = (function reset_button20440(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button20440);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to20441 = (function() { 
var form_to20441__delegate = function (p__20442,body){var vec__20444 = p__20442;var method = cljs.core.nth.call(null,vec__20444,0,null);var action = cljs.core.nth.call(null,vec__20444,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to20441 = function (p__20442,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to20441__delegate.call(this,p__20442,body);};
form_to20441.cljs$lang$maxFixedArity = 1;
form_to20441.cljs$lang$applyTo = (function (arglist__20445){
var p__20442 = cljs.core.first(arglist__20445);
var body = cljs.core.rest(arglist__20445);
return form_to20441__delegate(p__20442,body);
});
form_to20441.cljs$core$IFn$_invoke$arity$variadic = form_to20441__delegate;
return form_to20441;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to20441);
