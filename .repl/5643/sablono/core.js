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
var G__21651__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__21650 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__21650,0,null);var body = cljs.core.nthnext.call(null,vec__21650,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__21651 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21651__delegate.call(this,args);};
G__21651.cljs$lang$maxFixedArity = 0;
G__21651.cljs$lang$applyTo = (function (arglist__21652){
var args = cljs.core.seq(arglist__21652);
return G__21651__delegate(args);
});
G__21651.cljs$core$IFn$_invoke$arity$variadic = G__21651__delegate;
return G__21651;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8573__auto__ = (function iter__21657(s__21658){return (new cljs.core.LazySeq(null,(function (){var s__21658__$1 = s__21658;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21658__$1);if(temp__4092__auto__)
{var s__21658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21658__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__21658__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__21660 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__21659 = 0;while(true){
if((i__21659 < size__8572__auto__))
{var args = cljs.core._nth.call(null,c__8571__auto__,i__21659);cljs.core.chunk_append.call(null,b__21660,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__21661 = (i__21659 + 1);
i__21659 = G__21661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21660),iter__21657.call(null,cljs.core.chunk_rest.call(null,s__21658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21660),null);
}
} else
{var args = cljs.core.first.call(null,s__21658__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__21657.call(null,cljs.core.rest.call(null,s__21658__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__21662_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__21662_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8573__auto__ = (function iter__21667(s__21668){return (new cljs.core.LazySeq(null,(function (){var s__21668__$1 = s__21668;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21668__$1);if(temp__4092__auto__)
{var s__21668__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21668__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__21668__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__21670 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__21669 = 0;while(true){
if((i__21669 < size__8572__auto__))
{var style = cljs.core._nth.call(null,c__8571__auto__,i__21669);cljs.core.chunk_append.call(null,b__21670,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__21671 = (i__21669 + 1);
i__21669 = G__21671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21670),iter__21667.call(null,cljs.core.chunk_rest.call(null,s__21668__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21670),null);
}
} else
{var style = cljs.core.first.call(null,s__21668__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__21667.call(null,cljs.core.rest.call(null,s__21668__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__21672){
var styles = cljs.core.seq(arglist__21672);
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
sablono.core.link_to21673 = (function() { 
var link_to21673__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to21673 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to21673__delegate.call(this,url,content);};
link_to21673.cljs$lang$maxFixedArity = 1;
link_to21673.cljs$lang$applyTo = (function (arglist__21674){
var url = cljs.core.first(arglist__21674);
var content = cljs.core.rest(arglist__21674);
return link_to21673__delegate(url,content);
});
link_to21673.cljs$core$IFn$_invoke$arity$variadic = link_to21673__delegate;
return link_to21673;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21673);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to21675 = (function() { 
var mail_to21675__delegate = function (e_mail,p__21676){var vec__21678 = p__21676;var content = cljs.core.nth.call(null,vec__21678,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7862__auto__ = content;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to21675 = function (e_mail,var_args){
var p__21676 = null;if (arguments.length > 1) {
  p__21676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to21675__delegate.call(this,e_mail,p__21676);};
mail_to21675.cljs$lang$maxFixedArity = 1;
mail_to21675.cljs$lang$applyTo = (function (arglist__21679){
var e_mail = cljs.core.first(arglist__21679);
var p__21676 = cljs.core.rest(arglist__21679);
return mail_to21675__delegate(e_mail,p__21676);
});
mail_to21675.cljs$core$IFn$_invoke$arity$variadic = mail_to21675__delegate;
return mail_to21675;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21675);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list21680 = (function unordered_list21680(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8573__auto__ = (function iter__21685(s__21686){return (new cljs.core.LazySeq(null,(function (){var s__21686__$1 = s__21686;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21686__$1);if(temp__4092__auto__)
{var s__21686__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21686__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__21686__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__21688 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__21687 = 0;while(true){
if((i__21687 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__21687);cljs.core.chunk_append.call(null,b__21688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__21689 = (i__21687 + 1);
i__21687 = G__21689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),iter__21685.call(null,cljs.core.chunk_rest.call(null,s__21686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),null);
}
} else
{var x = cljs.core.first.call(null,s__21686__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__21685.call(null,cljs.core.rest.call(null,s__21686__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21680);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list21690 = (function ordered_list21690(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8573__auto__ = (function iter__21695(s__21696){return (new cljs.core.LazySeq(null,(function (){var s__21696__$1 = s__21696;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21696__$1);if(temp__4092__auto__)
{var s__21696__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21696__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__21696__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__21698 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__21697 = 0;while(true){
if((i__21697 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__21697);cljs.core.chunk_append.call(null,b__21698,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__21699 = (i__21697 + 1);
i__21697 = G__21699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21698),iter__21695.call(null,cljs.core.chunk_rest.call(null,s__21696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21698),null);
}
} else
{var x = cljs.core.first.call(null,s__21696__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__21695.call(null,cljs.core.rest.call(null,s__21696__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21690);
/**
* Create an image element.
*/
sablono.core.image21700 = (function() {
var image21700 = null;
var image21700__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image21700__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image21700 = function(src,alt){
switch(arguments.length){
case 1:
return image21700__1.call(this,src);
case 2:
return image21700__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image21700.cljs$core$IFn$_invoke$arity$1 = image21700__1;
image21700.cljs$core$IFn$_invoke$arity$2 = image21700__2;
return image21700;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21700);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__21701_SHARP_,p2__21702_SHARP_){return [cljs.core.str(p1__21701_SHARP_),cljs.core.str("["),cljs.core.str(p2__21702_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__21703_SHARP_,p2__21704_SHARP_){return [cljs.core.str(p1__21703_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21704_SHARP_)].join('');
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
sablono.core.hidden_field21705 = (function() {
var hidden_field21705 = null;
var hidden_field21705__1 = (function (name){return hidden_field21705.call(null,name,null);
});
var hidden_field21705__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field21705 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field21705__1.call(this,name);
case 2:
return hidden_field21705__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field21705.cljs$core$IFn$_invoke$arity$1 = hidden_field21705__1;
hidden_field21705.cljs$core$IFn$_invoke$arity$2 = hidden_field21705__2;
return hidden_field21705;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21705);
/**
* Creates a new text input field.
*/
sablono.core.text_field21706 = (function() {
var text_field21706 = null;
var text_field21706__1 = (function (name){return text_field21706.call(null,name,null);
});
var text_field21706__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field21706 = function(name,value){
switch(arguments.length){
case 1:
return text_field21706__1.call(this,name);
case 2:
return text_field21706__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field21706.cljs$core$IFn$_invoke$arity$1 = text_field21706__1;
text_field21706.cljs$core$IFn$_invoke$arity$2 = text_field21706__2;
return text_field21706;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21706);
/**
* Creates a new password field.
*/
sablono.core.password_field21707 = (function() {
var password_field21707 = null;
var password_field21707__1 = (function (name){return password_field21707.call(null,name,null);
});
var password_field21707__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field21707 = function(name,value){
switch(arguments.length){
case 1:
return password_field21707__1.call(this,name);
case 2:
return password_field21707__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field21707.cljs$core$IFn$_invoke$arity$1 = password_field21707__1;
password_field21707.cljs$core$IFn$_invoke$arity$2 = password_field21707__2;
return password_field21707;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21707);
/**
* Creates a new email input field.
*/
sablono.core.email_field21708 = (function() {
var email_field21708 = null;
var email_field21708__1 = (function (name){return email_field21708.call(null,name,null);
});
var email_field21708__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field21708 = function(name,value){
switch(arguments.length){
case 1:
return email_field21708__1.call(this,name);
case 2:
return email_field21708__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field21708.cljs$core$IFn$_invoke$arity$1 = email_field21708__1;
email_field21708.cljs$core$IFn$_invoke$arity$2 = email_field21708__2;
return email_field21708;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21708);
/**
* Creates a check box.
*/
sablono.core.check_box21709 = (function() {
var check_box21709 = null;
var check_box21709__1 = (function (name){return check_box21709.call(null,name,null);
});
var check_box21709__2 = (function (name,checked_QMARK_){return check_box21709.call(null,name,checked_QMARK_,"true");
});
var check_box21709__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box21709 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box21709__1.call(this,name);
case 2:
return check_box21709__2.call(this,name,checked_QMARK_);
case 3:
return check_box21709__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box21709.cljs$core$IFn$_invoke$arity$1 = check_box21709__1;
check_box21709.cljs$core$IFn$_invoke$arity$2 = check_box21709__2;
check_box21709.cljs$core$IFn$_invoke$arity$3 = check_box21709__3;
return check_box21709;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21709);
/**
* Creates a radio button.
*/
sablono.core.radio_button21710 = (function() {
var radio_button21710 = null;
var radio_button21710__1 = (function (group){return radio_button21710.call(null,group,null);
});
var radio_button21710__2 = (function (group,checked_QMARK_){return radio_button21710.call(null,group,checked_QMARK_,"true");
});
var radio_button21710__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button21710 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button21710__1.call(this,group);
case 2:
return radio_button21710__2.call(this,group,checked_QMARK_);
case 3:
return radio_button21710__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button21710.cljs$core$IFn$_invoke$arity$1 = radio_button21710__1;
radio_button21710.cljs$core$IFn$_invoke$arity$2 = radio_button21710__2;
radio_button21710.cljs$core$IFn$_invoke$arity$3 = radio_button21710__3;
return radio_button21710;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21710);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options21711 = (function() {
var select_options21711 = null;
var select_options21711__1 = (function (coll){return select_options21711.call(null,coll,null);
});
var select_options21711__2 = (function (coll,selected){var iter__8573__auto__ = (function iter__21720(s__21721){return (new cljs.core.LazySeq(null,(function (){var s__21721__$1 = s__21721;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21721__$1);if(temp__4092__auto__)
{var s__21721__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21721__$2))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,s__21721__$2);var size__8572__auto__ = cljs.core.count.call(null,c__8571__auto__);var b__21723 = cljs.core.chunk_buffer.call(null,size__8572__auto__);if((function (){var i__21722 = 0;while(true){
if((i__21722 < size__8572__auto__))
{var x = cljs.core._nth.call(null,c__8571__auto__,i__21722);cljs.core.chunk_append.call(null,b__21723,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21726 = x;var text = cljs.core.nth.call(null,vec__21726,0,null);var val = cljs.core.nth.call(null,vec__21726,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options21711.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__21728 = (i__21722 + 1);
i__21722 = G__21728;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21723),iter__21720.call(null,cljs.core.chunk_rest.call(null,s__21721__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21723),null);
}
} else
{var x = cljs.core.first.call(null,s__21721__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21727 = x;var text = cljs.core.nth.call(null,vec__21727,0,null);var val = cljs.core.nth.call(null,vec__21727,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options21711.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__21720.call(null,cljs.core.rest.call(null,s__21721__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8573__auto__.call(null,coll);
});
select_options21711 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options21711__1.call(this,coll);
case 2:
return select_options21711__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options21711.cljs$core$IFn$_invoke$arity$1 = select_options21711__1;
select_options21711.cljs$core$IFn$_invoke$arity$2 = select_options21711__2;
return select_options21711;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21711);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down21729 = (function() {
var drop_down21729 = null;
var drop_down21729__2 = (function (name,options){return drop_down21729.call(null,name,options,null);
});
var drop_down21729__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down21729 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down21729__2.call(this,name,options);
case 3:
return drop_down21729__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down21729.cljs$core$IFn$_invoke$arity$2 = drop_down21729__2;
drop_down21729.cljs$core$IFn$_invoke$arity$3 = drop_down21729__3;
return drop_down21729;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21729);
/**
* Creates a text area element.
*/
sablono.core.text_area21730 = (function() {
var text_area21730 = null;
var text_area21730__1 = (function (name){return text_area21730.call(null,name,null);
});
var text_area21730__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area21730 = function(name,value){
switch(arguments.length){
case 1:
return text_area21730__1.call(this,name);
case 2:
return text_area21730__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area21730.cljs$core$IFn$_invoke$arity$1 = text_area21730__1;
text_area21730.cljs$core$IFn$_invoke$arity$2 = text_area21730__2;
return text_area21730;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21730);
/**
* Creates a file upload input.
*/
sablono.core.file_upload21731 = (function file_upload21731(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload21731);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label21732 = (function label21732(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21732);
/**
* Creates a submit button.
*/
sablono.core.submit_button21733 = (function submit_button21733(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21733);
/**
* Creates a form reset button.
*/
sablono.core.reset_button21734 = (function reset_button21734(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21734);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to21735 = (function() { 
var form_to21735__delegate = function (p__21736,body){var vec__21738 = p__21736;var method = cljs.core.nth.call(null,vec__21738,0,null);var action = cljs.core.nth.call(null,vec__21738,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to21735 = function (p__21736,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to21735__delegate.call(this,p__21736,body);};
form_to21735.cljs$lang$maxFixedArity = 1;
form_to21735.cljs$lang$applyTo = (function (arglist__21739){
var p__21736 = cljs.core.first(arglist__21739);
var body = cljs.core.rest(arglist__21739);
return form_to21735__delegate(p__21736,body);
});
form_to21735.cljs$core$IFn$_invoke$arity$variadic = form_to21735__delegate;
return form_to21735;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21735);
