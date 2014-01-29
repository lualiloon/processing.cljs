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
var G__27494__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__27493 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__27493,0,null);var body = cljs.core.nthnext.call(null,vec__27493,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__27494 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27494__delegate.call(this,args);};
G__27494.cljs$lang$maxFixedArity = 0;
G__27494.cljs$lang$applyTo = (function (arglist__27495){
var args = cljs.core.seq(arglist__27495);
return G__27494__delegate(args);
});
G__27494.cljs$core$IFn$_invoke$arity$variadic = G__27494__delegate;
return G__27494;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8561__auto__ = (function iter__27500(s__27501){return (new cljs.core.LazySeq(null,(function (){var s__27501__$1 = s__27501;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27501__$1);if(temp__4092__auto__)
{var s__27501__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27501__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__27501__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__27503 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__27502 = 0;while(true){
if((i__27502 < size__8560__auto__))
{var args = cljs.core._nth.call(null,c__8559__auto__,i__27502);cljs.core.chunk_append.call(null,b__27503,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27504 = (i__27502 + 1);
i__27502 = G__27504;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27503),iter__27500.call(null,cljs.core.chunk_rest.call(null,s__27501__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27503),null);
}
} else
{var args = cljs.core.first.call(null,s__27501__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27500.call(null,cljs.core.rest.call(null,s__27501__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__27505_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__27505_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8561__auto__ = (function iter__27510(s__27511){return (new cljs.core.LazySeq(null,(function (){var s__27511__$1 = s__27511;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27511__$1);if(temp__4092__auto__)
{var s__27511__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27511__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__27511__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__27513 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__27512 = 0;while(true){
if((i__27512 < size__8560__auto__))
{var style = cljs.core._nth.call(null,c__8559__auto__,i__27512);cljs.core.chunk_append.call(null,b__27513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__27514 = (i__27512 + 1);
i__27512 = G__27514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27513),iter__27510.call(null,cljs.core.chunk_rest.call(null,s__27511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27513),null);
}
} else
{var style = cljs.core.first.call(null,s__27511__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__27510.call(null,cljs.core.rest.call(null,s__27511__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27515){
var styles = cljs.core.seq(arglist__27515);
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
sablono.core.link_to27516 = (function() { 
var link_to27516__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to27516 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27516__delegate.call(this,url,content);};
link_to27516.cljs$lang$maxFixedArity = 1;
link_to27516.cljs$lang$applyTo = (function (arglist__27517){
var url = cljs.core.first(arglist__27517);
var content = cljs.core.rest(arglist__27517);
return link_to27516__delegate(url,content);
});
link_to27516.cljs$core$IFn$_invoke$arity$variadic = link_to27516__delegate;
return link_to27516;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27516);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27518 = (function() { 
var mail_to27518__delegate = function (e_mail,p__27519){var vec__27521 = p__27519;var content = cljs.core.nth.call(null,vec__27521,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7850__auto__ = content;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27518 = function (e_mail,var_args){
var p__27519 = null;if (arguments.length > 1) {
  p__27519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27518__delegate.call(this,e_mail,p__27519);};
mail_to27518.cljs$lang$maxFixedArity = 1;
mail_to27518.cljs$lang$applyTo = (function (arglist__27522){
var e_mail = cljs.core.first(arglist__27522);
var p__27519 = cljs.core.rest(arglist__27522);
return mail_to27518__delegate(e_mail,p__27519);
});
mail_to27518.cljs$core$IFn$_invoke$arity$variadic = mail_to27518__delegate;
return mail_to27518;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27518);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27523 = (function unordered_list27523(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8561__auto__ = (function iter__27528(s__27529){return (new cljs.core.LazySeq(null,(function (){var s__27529__$1 = s__27529;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27529__$1);if(temp__4092__auto__)
{var s__27529__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27529__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__27529__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__27531 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__27530 = 0;while(true){
if((i__27530 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__27530);cljs.core.chunk_append.call(null,b__27531,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__27532 = (i__27530 + 1);
i__27530 = G__27532;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27531),iter__27528.call(null,cljs.core.chunk_rest.call(null,s__27529__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27531),null);
}
} else
{var x = cljs.core.first.call(null,s__27529__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__27528.call(null,cljs.core.rest.call(null,s__27529__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27523);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27533 = (function ordered_list27533(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8561__auto__ = (function iter__27538(s__27539){return (new cljs.core.LazySeq(null,(function (){var s__27539__$1 = s__27539;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27539__$1);if(temp__4092__auto__)
{var s__27539__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27539__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__27539__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__27541 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__27540 = 0;while(true){
if((i__27540 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__27540);cljs.core.chunk_append.call(null,b__27541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__27542 = (i__27540 + 1);
i__27540 = G__27542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27541),iter__27538.call(null,cljs.core.chunk_rest.call(null,s__27539__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27541),null);
}
} else
{var x = cljs.core.first.call(null,s__27539__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__27538.call(null,cljs.core.rest.call(null,s__27539__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27533);
/**
* Create an image element.
*/
sablono.core.image27543 = (function() {
var image27543 = null;
var image27543__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image27543__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image27543 = function(src,alt){
switch(arguments.length){
case 1:
return image27543__1.call(this,src);
case 2:
return image27543__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27543.cljs$core$IFn$_invoke$arity$1 = image27543__1;
image27543.cljs$core$IFn$_invoke$arity$2 = image27543__2;
return image27543;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27543);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__27544_SHARP_,p2__27545_SHARP_){return [cljs.core.str(p1__27544_SHARP_),cljs.core.str("["),cljs.core.str(p2__27545_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__27546_SHARP_,p2__27547_SHARP_){return [cljs.core.str(p1__27546_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27547_SHARP_)].join('');
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
sablono.core.hidden_field27548 = (function() {
var hidden_field27548 = null;
var hidden_field27548__1 = (function (name){return hidden_field27548.call(null,name,null);
});
var hidden_field27548__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field27548 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27548__1.call(this,name);
case 2:
return hidden_field27548__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27548.cljs$core$IFn$_invoke$arity$1 = hidden_field27548__1;
hidden_field27548.cljs$core$IFn$_invoke$arity$2 = hidden_field27548__2;
return hidden_field27548;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27548);
/**
* Creates a new text input field.
*/
sablono.core.text_field27549 = (function() {
var text_field27549 = null;
var text_field27549__1 = (function (name){return text_field27549.call(null,name,null);
});
var text_field27549__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field27549 = function(name,value){
switch(arguments.length){
case 1:
return text_field27549__1.call(this,name);
case 2:
return text_field27549__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27549.cljs$core$IFn$_invoke$arity$1 = text_field27549__1;
text_field27549.cljs$core$IFn$_invoke$arity$2 = text_field27549__2;
return text_field27549;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27549);
/**
* Creates a new password field.
*/
sablono.core.password_field27550 = (function() {
var password_field27550 = null;
var password_field27550__1 = (function (name){return password_field27550.call(null,name,null);
});
var password_field27550__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field27550 = function(name,value){
switch(arguments.length){
case 1:
return password_field27550__1.call(this,name);
case 2:
return password_field27550__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27550.cljs$core$IFn$_invoke$arity$1 = password_field27550__1;
password_field27550.cljs$core$IFn$_invoke$arity$2 = password_field27550__2;
return password_field27550;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27550);
/**
* Creates a new email input field.
*/
sablono.core.email_field27551 = (function() {
var email_field27551 = null;
var email_field27551__1 = (function (name){return email_field27551.call(null,name,null);
});
var email_field27551__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field27551 = function(name,value){
switch(arguments.length){
case 1:
return email_field27551__1.call(this,name);
case 2:
return email_field27551__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27551.cljs$core$IFn$_invoke$arity$1 = email_field27551__1;
email_field27551.cljs$core$IFn$_invoke$arity$2 = email_field27551__2;
return email_field27551;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27551);
/**
* Creates a check box.
*/
sablono.core.check_box27552 = (function() {
var check_box27552 = null;
var check_box27552__1 = (function (name){return check_box27552.call(null,name,null);
});
var check_box27552__2 = (function (name,checked_QMARK_){return check_box27552.call(null,name,checked_QMARK_,"true");
});
var check_box27552__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box27552 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27552__1.call(this,name);
case 2:
return check_box27552__2.call(this,name,checked_QMARK_);
case 3:
return check_box27552__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27552.cljs$core$IFn$_invoke$arity$1 = check_box27552__1;
check_box27552.cljs$core$IFn$_invoke$arity$2 = check_box27552__2;
check_box27552.cljs$core$IFn$_invoke$arity$3 = check_box27552__3;
return check_box27552;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27552);
/**
* Creates a radio button.
*/
sablono.core.radio_button27553 = (function() {
var radio_button27553 = null;
var radio_button27553__1 = (function (group){return radio_button27553.call(null,group,null);
});
var radio_button27553__2 = (function (group,checked_QMARK_){return radio_button27553.call(null,group,checked_QMARK_,"true");
});
var radio_button27553__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button27553 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27553__1.call(this,group);
case 2:
return radio_button27553__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27553__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27553.cljs$core$IFn$_invoke$arity$1 = radio_button27553__1;
radio_button27553.cljs$core$IFn$_invoke$arity$2 = radio_button27553__2;
radio_button27553.cljs$core$IFn$_invoke$arity$3 = radio_button27553__3;
return radio_button27553;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27553);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27554 = (function() {
var select_options27554 = null;
var select_options27554__1 = (function (coll){return select_options27554.call(null,coll,null);
});
var select_options27554__2 = (function (coll,selected){var iter__8561__auto__ = (function iter__27563(s__27564){return (new cljs.core.LazySeq(null,(function (){var s__27564__$1 = s__27564;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27564__$1);if(temp__4092__auto__)
{var s__27564__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27564__$2))
{var c__8559__auto__ = cljs.core.chunk_first.call(null,s__27564__$2);var size__8560__auto__ = cljs.core.count.call(null,c__8559__auto__);var b__27566 = cljs.core.chunk_buffer.call(null,size__8560__auto__);if((function (){var i__27565 = 0;while(true){
if((i__27565 < size__8560__auto__))
{var x = cljs.core._nth.call(null,c__8559__auto__,i__27565);cljs.core.chunk_append.call(null,b__27566,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27569 = x;var text = cljs.core.nth.call(null,vec__27569,0,null);var val = cljs.core.nth.call(null,vec__27569,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options27554.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__27571 = (i__27565 + 1);
i__27565 = G__27571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27566),iter__27563.call(null,cljs.core.chunk_rest.call(null,s__27564__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27566),null);
}
} else
{var x = cljs.core.first.call(null,s__27564__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27570 = x;var text = cljs.core.nth.call(null,vec__27570,0,null);var val = cljs.core.nth.call(null,vec__27570,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options27554.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__27563.call(null,cljs.core.rest.call(null,s__27564__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8561__auto__.call(null,coll);
});
select_options27554 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27554__1.call(this,coll);
case 2:
return select_options27554__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27554.cljs$core$IFn$_invoke$arity$1 = select_options27554__1;
select_options27554.cljs$core$IFn$_invoke$arity$2 = select_options27554__2;
return select_options27554;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27554);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27572 = (function() {
var drop_down27572 = null;
var drop_down27572__2 = (function (name,options){return drop_down27572.call(null,name,options,null);
});
var drop_down27572__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down27572 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27572__2.call(this,name,options);
case 3:
return drop_down27572__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27572.cljs$core$IFn$_invoke$arity$2 = drop_down27572__2;
drop_down27572.cljs$core$IFn$_invoke$arity$3 = drop_down27572__3;
return drop_down27572;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27572);
/**
* Creates a text area element.
*/
sablono.core.text_area27573 = (function() {
var text_area27573 = null;
var text_area27573__1 = (function (name){return text_area27573.call(null,name,null);
});
var text_area27573__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area27573 = function(name,value){
switch(arguments.length){
case 1:
return text_area27573__1.call(this,name);
case 2:
return text_area27573__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27573.cljs$core$IFn$_invoke$arity$1 = text_area27573__1;
text_area27573.cljs$core$IFn$_invoke$arity$2 = text_area27573__2;
return text_area27573;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27573);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27574 = (function file_upload27574(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload27574);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27575 = (function label27575(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27575);
/**
* Creates a submit button.
*/
sablono.core.submit_button27576 = (function submit_button27576(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27576);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27577 = (function reset_button27577(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27577);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27578 = (function() { 
var form_to27578__delegate = function (p__27579,body){var vec__27581 = p__27579;var method = cljs.core.nth.call(null,vec__27581,0,null);var action = cljs.core.nth.call(null,vec__27581,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to27578 = function (p__27579,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27578__delegate.call(this,p__27579,body);};
form_to27578.cljs$lang$maxFixedArity = 1;
form_to27578.cljs$lang$applyTo = (function (arglist__27582){
var p__27579 = cljs.core.first(arglist__27582);
var body = cljs.core.rest(arglist__27582);
return form_to27578__delegate(p__27579,body);
});
form_to27578.cljs$core$IFn$_invoke$arity$variadic = form_to27578__delegate;
return form_to27578;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27578);
