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
var G__62412__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__62411 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__62411,0,null);var body = cljs.core.nthnext.call(null,vec__62411,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__62412 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__62412__delegate.call(this,args);};
G__62412.cljs$lang$maxFixedArity = 0;
G__62412.cljs$lang$applyTo = (function (arglist__62413){
var args = cljs.core.seq(arglist__62413);
return G__62412__delegate(args);
});
G__62412.cljs$core$IFn$_invoke$arity$variadic = G__62412__delegate;
return G__62412;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8573__auto__ = (function iter__62418(s__62419){return (new cljs.core.LazySeq(null,(function (){var s__62419__$1 = s__62419;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__62419__$1);if(temp__4092__auto__)
{var s__62419__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62419__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__62419__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__62421 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__62420 = 0;while(true){
if((i__62420 < size__8572__auto__))
{var args = cljs.core._nth.call(null,c__8571__auto__,i__62420);cljs.core.chunk_append.call(null,b__62421,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__62422 = (i__62420 + 1);
i__62420 = G__62422;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62421),iter__62418.call(null,cljs.core.chunk_rest.call(null,s__62419__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62421),null);
}
} else
{var args = cljs.core.first.call(null,s__62419__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__62418.call(null,cljs.core.rest.call(null,s__62419__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__62423_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__62423_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8573__auto__ = (function iter__62428(s__62429){return (new cljs.core.LazySeq(null,(function (){var s__62429__$1 = s__62429;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__62429__$1);if(temp__4092__auto__)
{var s__62429__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62429__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__62429__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__62431 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__62430 = 0;while(true){
if((i__62430 < size__8572__auto__))
{var style = cljs.core._nth.call(null,c__8571__auto__,i__62430);cljs.core.chunk_append.call(null,b__62431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__62432 = (i__62430 + 1);
i__62430 = G__62432;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62431),iter__62428.call(null,cljs.core.chunk_rest.call(null,s__62429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62431),null);
}
} else
{var style = cljs.core.first.call(null,s__62429__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__62428.call(null,cljs.core.rest.call(null,s__62429__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__62433){
var styles = cljs.core.seq(arglist__62433);
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
sablono.core.link_to62434 = (function() { 
var link_to62434__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to62434 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to62434__delegate.call(this,url,content);};
link_to62434.cljs$lang$maxFixedArity = 1;
link_to62434.cljs$lang$applyTo = (function (arglist__62435){
var url = cljs.core.first(arglist__62435);
var content = cljs.core.rest(arglist__62435);
return link_to62434__delegate(url,content);
});
link_to62434.cljs$core$IFn$_invoke$arity$variadic = link_to62434__delegate;
return link_to62434;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to62434);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to62436 = (function() { 
var mail_to62436__delegate = function (e_mail,p__62437){var vec__62439 = p__62437;var content = cljs.core.nth.call(null,vec__62439,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7862__auto__ = content;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to62436 = function (e_mail,var_args){
var p__62437 = null;if (arguments.length > 1) {
  p__62437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to62436__delegate.call(this,e_mail,p__62437);};
mail_to62436.cljs$lang$maxFixedArity = 1;
mail_to62436.cljs$lang$applyTo = (function (arglist__62440){
var e_mail = cljs.core.first(arglist__62440);
var p__62437 = cljs.core.rest(arglist__62440);
return mail_to62436__delegate(e_mail,p__62437);
});
mail_to62436.cljs$core$IFn$_invoke$arity$variadic = mail_to62436__delegate;
return mail_to62436;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to62436);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list62441 = (function unordered_list62441(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8573__auto__ = (function iter__62446(s__62447){return (new cljs.core.LazySeq(null,(function (){var s__62447__$1 = s__62447;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__62447__$1);if(temp__4092__auto__)
{var s__62447__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62447__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__62447__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__62449 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__62448 = 0;while(true){
if((i__62448 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__62448);cljs.core.chunk_append.call(null,b__62449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__62450 = (i__62448 + 1);
i__62448 = G__62450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62449),iter__62446.call(null,cljs.core.chunk_rest.call(null,s__62447__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62449),null);
}
} else
{var x = cljs.core.first.call(null,s__62447__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__62446.call(null,cljs.core.rest.call(null,s__62447__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list62441);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list62451 = (function ordered_list62451(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8573__auto__ = (function iter__62456(s__62457){return (new cljs.core.LazySeq(null,(function (){var s__62457__$1 = s__62457;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__62457__$1);if(temp__4092__auto__)
{var s__62457__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62457__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__62457__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__62459 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__62458 = 0;while(true){
if((i__62458 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__62458);cljs.core.chunk_append.call(null,b__62459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__62460 = (i__62458 + 1);
i__62458 = G__62460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62459),iter__62456.call(null,cljs.core.chunk_rest.call(null,s__62457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62459),null);
}
} else
{var x = cljs.core.first.call(null,s__62457__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__62456.call(null,cljs.core.rest.call(null,s__62457__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list62451);
/**
* Create an image element.
*/
sablono.core.image62461 = (function() {
var image62461 = null;
var image62461__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image62461__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image62461 = function(src,alt){
switch(arguments.length){
case 1:
return image62461__1.call(this,src);
case 2:
return image62461__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image62461.cljs$core$IFn$_invoke$arity$1 = image62461__1;
image62461.cljs$core$IFn$_invoke$arity$2 = image62461__2;
return image62461;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image62461);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__62462_SHARP_,p2__62463_SHARP_){return [cljs.core.str(p1__62462_SHARP_),cljs.core.str("["),cljs.core.str(p2__62463_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__62464_SHARP_,p2__62465_SHARP_){return [cljs.core.str(p1__62464_SHARP_),cljs.core.str("-"),cljs.core.str(p2__62465_SHARP_)].join('');
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
sablono.core.hidden_field62466 = (function() {
var hidden_field62466 = null;
var hidden_field62466__1 = (function (name){return hidden_field62466.call(null,name,null);
});
var hidden_field62466__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field62466 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field62466__1.call(this,name);
case 2:
return hidden_field62466__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field62466.cljs$core$IFn$_invoke$arity$1 = hidden_field62466__1;
hidden_field62466.cljs$core$IFn$_invoke$arity$2 = hidden_field62466__2;
return hidden_field62466;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field62466);
/**
* Creates a new text input field.
*/
sablono.core.text_field62467 = (function() {
var text_field62467 = null;
var text_field62467__1 = (function (name){return text_field62467.call(null,name,null);
});
var text_field62467__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field62467 = function(name,value){
switch(arguments.length){
case 1:
return text_field62467__1.call(this,name);
case 2:
return text_field62467__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field62467.cljs$core$IFn$_invoke$arity$1 = text_field62467__1;
text_field62467.cljs$core$IFn$_invoke$arity$2 = text_field62467__2;
return text_field62467;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field62467);
/**
* Creates a new password field.
*/
sablono.core.password_field62468 = (function() {
var password_field62468 = null;
var password_field62468__1 = (function (name){return password_field62468.call(null,name,null);
});
var password_field62468__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field62468 = function(name,value){
switch(arguments.length){
case 1:
return password_field62468__1.call(this,name);
case 2:
return password_field62468__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field62468.cljs$core$IFn$_invoke$arity$1 = password_field62468__1;
password_field62468.cljs$core$IFn$_invoke$arity$2 = password_field62468__2;
return password_field62468;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field62468);
/**
* Creates a new email input field.
*/
sablono.core.email_field62469 = (function() {
var email_field62469 = null;
var email_field62469__1 = (function (name){return email_field62469.call(null,name,null);
});
var email_field62469__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field62469 = function(name,value){
switch(arguments.length){
case 1:
return email_field62469__1.call(this,name);
case 2:
return email_field62469__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field62469.cljs$core$IFn$_invoke$arity$1 = email_field62469__1;
email_field62469.cljs$core$IFn$_invoke$arity$2 = email_field62469__2;
return email_field62469;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field62469);
/**
* Creates a check box.
*/
sablono.core.check_box62470 = (function() {
var check_box62470 = null;
var check_box62470__1 = (function (name){return check_box62470.call(null,name,null);
});
var check_box62470__2 = (function (name,checked_QMARK_){return check_box62470.call(null,name,checked_QMARK_,"true");
});
var check_box62470__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box62470 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box62470__1.call(this,name);
case 2:
return check_box62470__2.call(this,name,checked_QMARK_);
case 3:
return check_box62470__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box62470.cljs$core$IFn$_invoke$arity$1 = check_box62470__1;
check_box62470.cljs$core$IFn$_invoke$arity$2 = check_box62470__2;
check_box62470.cljs$core$IFn$_invoke$arity$3 = check_box62470__3;
return check_box62470;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box62470);
/**
* Creates a radio button.
*/
sablono.core.radio_button62471 = (function() {
var radio_button62471 = null;
var radio_button62471__1 = (function (group){return radio_button62471.call(null,group,null);
});
var radio_button62471__2 = (function (group,checked_QMARK_){return radio_button62471.call(null,group,checked_QMARK_,"true");
});
var radio_button62471__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button62471 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button62471__1.call(this,group);
case 2:
return radio_button62471__2.call(this,group,checked_QMARK_);
case 3:
return radio_button62471__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button62471.cljs$core$IFn$_invoke$arity$1 = radio_button62471__1;
radio_button62471.cljs$core$IFn$_invoke$arity$2 = radio_button62471__2;
radio_button62471.cljs$core$IFn$_invoke$arity$3 = radio_button62471__3;
return radio_button62471;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button62471);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options62472 = (function() {
var select_options62472 = null;
var select_options62472__1 = (function (coll){return select_options62472.call(null,coll,null);
});
var select_options62472__2 = (function (coll,selected){var iter__8573__auto__ = (function iter__62481(s__62482){return (new cljs.core.LazySeq(null,(function (){var s__62482__$1 = s__62482;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__62482__$1);if(temp__4092__auto__)
{var s__62482__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62482__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__62482__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__62484 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__62483 = 0;while(true){
if((i__62483 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__62483);cljs.core.chunk_append.call(null,b__62484,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__62487 = x;var text = cljs.core.nth.call(null,vec__62487,0,null);var val = cljs.core.nth.call(null,vec__62487,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options62472.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__62489 = (i__62483 + 1);
i__62483 = G__62489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62484),iter__62481.call(null,cljs.core.chunk_rest.call(null,s__62482__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62484),null);
}
} else
{var x = cljs.core.first.call(null,s__62482__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__62488 = x;var text = cljs.core.nth.call(null,vec__62488,0,null);var val = cljs.core.nth.call(null,vec__62488,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options62472.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__62481.call(null,cljs.core.rest.call(null,s__62482__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,coll);
});
select_options62472 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options62472__1.call(this,coll);
case 2:
return select_options62472__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options62472.cljs$core$IFn$_invoke$arity$1 = select_options62472__1;
select_options62472.cljs$core$IFn$_invoke$arity$2 = select_options62472__2;
return select_options62472;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options62472);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down62490 = (function() {
var drop_down62490 = null;
var drop_down62490__2 = (function (name,options){return drop_down62490.call(null,name,options,null);
});
var drop_down62490__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down62490 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down62490__2.call(this,name,options);
case 3:
return drop_down62490__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down62490.cljs$core$IFn$_invoke$arity$2 = drop_down62490__2;
drop_down62490.cljs$core$IFn$_invoke$arity$3 = drop_down62490__3;
return drop_down62490;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down62490);
/**
* Creates a text area element.
*/
sablono.core.text_area62491 = (function() {
var text_area62491 = null;
var text_area62491__1 = (function (name){return text_area62491.call(null,name,null);
});
var text_area62491__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area62491 = function(name,value){
switch(arguments.length){
case 1:
return text_area62491__1.call(this,name);
case 2:
return text_area62491__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area62491.cljs$core$IFn$_invoke$arity$1 = text_area62491__1;
text_area62491.cljs$core$IFn$_invoke$arity$2 = text_area62491__2;
return text_area62491;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area62491);
/**
* Creates a file upload input.
*/
sablono.core.file_upload62492 = (function file_upload62492(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload62492);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label62493 = (function label62493(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label62493);
/**
* Creates a submit button.
*/
sablono.core.submit_button62494 = (function submit_button62494(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button62494);
/**
* Creates a form reset button.
*/
sablono.core.reset_button62495 = (function reset_button62495(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button62495);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to62496 = (function() { 
var form_to62496__delegate = function (p__62497,body){var vec__62499 = p__62497;var method = cljs.core.nth.call(null,vec__62499,0,null);var action = cljs.core.nth.call(null,vec__62499,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to62496 = function (p__62497,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to62496__delegate.call(this,p__62497,body);};
form_to62496.cljs$lang$maxFixedArity = 1;
form_to62496.cljs$lang$applyTo = (function (arglist__62500){
var p__62497 = cljs.core.first(arglist__62500);
var body = cljs.core.rest(arglist__62500);
return form_to62496__delegate(p__62497,body);
});
form_to62496.cljs$core$IFn$_invoke$arity$variadic = form_to62496__delegate;
return form_to62496;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to62496);
