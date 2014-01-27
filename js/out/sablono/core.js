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
var G__184906__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__184905 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__184905,0,null);var body = cljs.core.nthnext.call(null,vec__184905,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__184906 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__184906__delegate.call(this,args);};
G__184906.cljs$lang$maxFixedArity = 0;
G__184906.cljs$lang$applyTo = (function (arglist__184907){
var args = cljs.core.seq(arglist__184907);
return G__184906__delegate(args);
});
G__184906.cljs$core$IFn$_invoke$arity$variadic = G__184906__delegate;
return G__184906;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__11569__auto__ = (function iter__184912(s__184913){return (new cljs.core.LazySeq(null,(function (){var s__184913__$1 = s__184913;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184913__$1);if(temp__4092__auto__)
{var s__184913__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184913__$2))
{var c__11567__auto__ = cljs.core.chunk_first.call(null,s__184913__$2);var size__11568__auto__ = cljs.core.count.call(null,c__11567__auto__);var b__184915 = cljs.core.chunk_buffer.call(null,size__11568__auto__);if((function (){var i__184914 = 0;while(true){
if((i__184914 < size__11568__auto__))
{var args = cljs.core._nth.call(null,c__11567__auto__,i__184914);cljs.core.chunk_append.call(null,b__184915,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__184916 = (i__184914 + 1);
i__184914 = G__184916;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184915),iter__184912.call(null,cljs.core.chunk_rest.call(null,s__184913__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184915),null);
}
} else
{var args = cljs.core.first.call(null,s__184913__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__184912.call(null,cljs.core.rest.call(null,s__184913__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11569__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__184917_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__184917_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__11569__auto__ = (function iter__184922(s__184923){return (new cljs.core.LazySeq(null,(function (){var s__184923__$1 = s__184923;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184923__$1);if(temp__4092__auto__)
{var s__184923__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184923__$2))
{var c__11567__auto__ = cljs.core.chunk_first.call(null,s__184923__$2);var size__11568__auto__ = cljs.core.count.call(null,c__11567__auto__);var b__184925 = cljs.core.chunk_buffer.call(null,size__11568__auto__);if((function (){var i__184924 = 0;while(true){
if((i__184924 < size__11568__auto__))
{var style = cljs.core._nth.call(null,c__11567__auto__,i__184924);cljs.core.chunk_append.call(null,b__184925,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__184926 = (i__184924 + 1);
i__184924 = G__184926;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184925),iter__184922.call(null,cljs.core.chunk_rest.call(null,s__184923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184925),null);
}
} else
{var style = cljs.core.first.call(null,s__184923__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__184922.call(null,cljs.core.rest.call(null,s__184923__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11569__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__184927){
var styles = cljs.core.seq(arglist__184927);
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
sablono.core.link_to184928 = (function() { 
var link_to184928__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to184928 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to184928__delegate.call(this,url,content);};
link_to184928.cljs$lang$maxFixedArity = 1;
link_to184928.cljs$lang$applyTo = (function (arglist__184929){
var url = cljs.core.first(arglist__184929);
var content = cljs.core.rest(arglist__184929);
return link_to184928__delegate(url,content);
});
link_to184928.cljs$core$IFn$_invoke$arity$variadic = link_to184928__delegate;
return link_to184928;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to184928);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to184930 = (function() { 
var mail_to184930__delegate = function (e_mail,p__184931){var vec__184933 = p__184931;var content = cljs.core.nth.call(null,vec__184933,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__10858__auto__ = content;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to184930 = function (e_mail,var_args){
var p__184931 = null;if (arguments.length > 1) {
  p__184931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to184930__delegate.call(this,e_mail,p__184931);};
mail_to184930.cljs$lang$maxFixedArity = 1;
mail_to184930.cljs$lang$applyTo = (function (arglist__184934){
var e_mail = cljs.core.first(arglist__184934);
var p__184931 = cljs.core.rest(arglist__184934);
return mail_to184930__delegate(e_mail,p__184931);
});
mail_to184930.cljs$core$IFn$_invoke$arity$variadic = mail_to184930__delegate;
return mail_to184930;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to184930);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list184935 = (function unordered_list184935(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__11569__auto__ = (function iter__184940(s__184941){return (new cljs.core.LazySeq(null,(function (){var s__184941__$1 = s__184941;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184941__$1);if(temp__4092__auto__)
{var s__184941__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184941__$2))
{var c__11567__auto__ = cljs.core.chunk_first.call(null,s__184941__$2);var size__11568__auto__ = cljs.core.count.call(null,c__11567__auto__);var b__184943 = cljs.core.chunk_buffer.call(null,size__11568__auto__);if((function (){var i__184942 = 0;while(true){
if((i__184942 < size__11568__auto__))
{var x = cljs.core._nth.call(null,c__11567__auto__,i__184942);cljs.core.chunk_append.call(null,b__184943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__184944 = (i__184942 + 1);
i__184942 = G__184944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184943),iter__184940.call(null,cljs.core.chunk_rest.call(null,s__184941__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184943),null);
}
} else
{var x = cljs.core.first.call(null,s__184941__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__184940.call(null,cljs.core.rest.call(null,s__184941__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11569__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list184935);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list184945 = (function ordered_list184945(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__11569__auto__ = (function iter__184950(s__184951){return (new cljs.core.LazySeq(null,(function (){var s__184951__$1 = s__184951;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184951__$1);if(temp__4092__auto__)
{var s__184951__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184951__$2))
{var c__11567__auto__ = cljs.core.chunk_first.call(null,s__184951__$2);var size__11568__auto__ = cljs.core.count.call(null,c__11567__auto__);var b__184953 = cljs.core.chunk_buffer.call(null,size__11568__auto__);if((function (){var i__184952 = 0;while(true){
if((i__184952 < size__11568__auto__))
{var x = cljs.core._nth.call(null,c__11567__auto__,i__184952);cljs.core.chunk_append.call(null,b__184953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__184954 = (i__184952 + 1);
i__184952 = G__184954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184953),iter__184950.call(null,cljs.core.chunk_rest.call(null,s__184951__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184953),null);
}
} else
{var x = cljs.core.first.call(null,s__184951__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__184950.call(null,cljs.core.rest.call(null,s__184951__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11569__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list184945);
/**
* Create an image element.
*/
sablono.core.image184955 = (function() {
var image184955 = null;
var image184955__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image184955__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image184955 = function(src,alt){
switch(arguments.length){
case 1:
return image184955__1.call(this,src);
case 2:
return image184955__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image184955.cljs$core$IFn$_invoke$arity$1 = image184955__1;
image184955.cljs$core$IFn$_invoke$arity$2 = image184955__2;
return image184955;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image184955);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__184956_SHARP_,p2__184957_SHARP_){return [cljs.core.str(p1__184956_SHARP_),cljs.core.str("["),cljs.core.str(p2__184957_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__184958_SHARP_,p2__184959_SHARP_){return [cljs.core.str(p1__184958_SHARP_),cljs.core.str("-"),cljs.core.str(p2__184959_SHARP_)].join('');
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
sablono.core.hidden_field184960 = (function() {
var hidden_field184960 = null;
var hidden_field184960__1 = (function (name){return hidden_field184960.call(null,name,null);
});
var hidden_field184960__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field184960 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field184960__1.call(this,name);
case 2:
return hidden_field184960__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field184960.cljs$core$IFn$_invoke$arity$1 = hidden_field184960__1;
hidden_field184960.cljs$core$IFn$_invoke$arity$2 = hidden_field184960__2;
return hidden_field184960;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field184960);
/**
* Creates a new text input field.
*/
sablono.core.text_field184961 = (function() {
var text_field184961 = null;
var text_field184961__1 = (function (name){return text_field184961.call(null,name,null);
});
var text_field184961__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field184961 = function(name,value){
switch(arguments.length){
case 1:
return text_field184961__1.call(this,name);
case 2:
return text_field184961__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field184961.cljs$core$IFn$_invoke$arity$1 = text_field184961__1;
text_field184961.cljs$core$IFn$_invoke$arity$2 = text_field184961__2;
return text_field184961;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field184961);
/**
* Creates a new password field.
*/
sablono.core.password_field184962 = (function() {
var password_field184962 = null;
var password_field184962__1 = (function (name){return password_field184962.call(null,name,null);
});
var password_field184962__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field184962 = function(name,value){
switch(arguments.length){
case 1:
return password_field184962__1.call(this,name);
case 2:
return password_field184962__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field184962.cljs$core$IFn$_invoke$arity$1 = password_field184962__1;
password_field184962.cljs$core$IFn$_invoke$arity$2 = password_field184962__2;
return password_field184962;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field184962);
/**
* Creates a new email input field.
*/
sablono.core.email_field184963 = (function() {
var email_field184963 = null;
var email_field184963__1 = (function (name){return email_field184963.call(null,name,null);
});
var email_field184963__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field184963 = function(name,value){
switch(arguments.length){
case 1:
return email_field184963__1.call(this,name);
case 2:
return email_field184963__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field184963.cljs$core$IFn$_invoke$arity$1 = email_field184963__1;
email_field184963.cljs$core$IFn$_invoke$arity$2 = email_field184963__2;
return email_field184963;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field184963);
/**
* Creates a check box.
*/
sablono.core.check_box184964 = (function() {
var check_box184964 = null;
var check_box184964__1 = (function (name){return check_box184964.call(null,name,null);
});
var check_box184964__2 = (function (name,checked_QMARK_){return check_box184964.call(null,name,checked_QMARK_,"true");
});
var check_box184964__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box184964 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box184964__1.call(this,name);
case 2:
return check_box184964__2.call(this,name,checked_QMARK_);
case 3:
return check_box184964__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box184964.cljs$core$IFn$_invoke$arity$1 = check_box184964__1;
check_box184964.cljs$core$IFn$_invoke$arity$2 = check_box184964__2;
check_box184964.cljs$core$IFn$_invoke$arity$3 = check_box184964__3;
return check_box184964;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box184964);
/**
* Creates a radio button.
*/
sablono.core.radio_button184965 = (function() {
var radio_button184965 = null;
var radio_button184965__1 = (function (group){return radio_button184965.call(null,group,null);
});
var radio_button184965__2 = (function (group,checked_QMARK_){return radio_button184965.call(null,group,checked_QMARK_,"true");
});
var radio_button184965__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button184965 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button184965__1.call(this,group);
case 2:
return radio_button184965__2.call(this,group,checked_QMARK_);
case 3:
return radio_button184965__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button184965.cljs$core$IFn$_invoke$arity$1 = radio_button184965__1;
radio_button184965.cljs$core$IFn$_invoke$arity$2 = radio_button184965__2;
radio_button184965.cljs$core$IFn$_invoke$arity$3 = radio_button184965__3;
return radio_button184965;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button184965);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options184966 = (function() {
var select_options184966 = null;
var select_options184966__1 = (function (coll){return select_options184966.call(null,coll,null);
});
var select_options184966__2 = (function (coll,selected){var iter__11569__auto__ = (function iter__184975(s__184976){return (new cljs.core.LazySeq(null,(function (){var s__184976__$1 = s__184976;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184976__$1);if(temp__4092__auto__)
{var s__184976__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184976__$2))
{var c__11567__auto__ = cljs.core.chunk_first.call(null,s__184976__$2);var size__11568__auto__ = cljs.core.count.call(null,c__11567__auto__);var b__184978 = cljs.core.chunk_buffer.call(null,size__11568__auto__);if((function (){var i__184977 = 0;while(true){
if((i__184977 < size__11568__auto__))
{var x = cljs.core._nth.call(null,c__11567__auto__,i__184977);cljs.core.chunk_append.call(null,b__184978,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__184981 = x;var text = cljs.core.nth.call(null,vec__184981,0,null);var val = cljs.core.nth.call(null,vec__184981,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options184966.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__184983 = (i__184977 + 1);
i__184977 = G__184983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184978),iter__184975.call(null,cljs.core.chunk_rest.call(null,s__184976__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184978),null);
}
} else
{var x = cljs.core.first.call(null,s__184976__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__184982 = x;var text = cljs.core.nth.call(null,vec__184982,0,null);var val = cljs.core.nth.call(null,vec__184982,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options184966.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__184975.call(null,cljs.core.rest.call(null,s__184976__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11569__auto__.call(null,coll);
});
select_options184966 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options184966__1.call(this,coll);
case 2:
return select_options184966__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options184966.cljs$core$IFn$_invoke$arity$1 = select_options184966__1;
select_options184966.cljs$core$IFn$_invoke$arity$2 = select_options184966__2;
return select_options184966;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options184966);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down184984 = (function() {
var drop_down184984 = null;
var drop_down184984__2 = (function (name,options){return drop_down184984.call(null,name,options,null);
});
var drop_down184984__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down184984 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down184984__2.call(this,name,options);
case 3:
return drop_down184984__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down184984.cljs$core$IFn$_invoke$arity$2 = drop_down184984__2;
drop_down184984.cljs$core$IFn$_invoke$arity$3 = drop_down184984__3;
return drop_down184984;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down184984);
/**
* Creates a text area element.
*/
sablono.core.text_area184985 = (function() {
var text_area184985 = null;
var text_area184985__1 = (function (name){return text_area184985.call(null,name,null);
});
var text_area184985__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area184985 = function(name,value){
switch(arguments.length){
case 1:
return text_area184985__1.call(this,name);
case 2:
return text_area184985__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area184985.cljs$core$IFn$_invoke$arity$1 = text_area184985__1;
text_area184985.cljs$core$IFn$_invoke$arity$2 = text_area184985__2;
return text_area184985;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area184985);
/**
* Creates a file upload input.
*/
sablono.core.file_upload184986 = (function file_upload184986(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload184986);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label184987 = (function label184987(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label184987);
/**
* Creates a submit button.
*/
sablono.core.submit_button184988 = (function submit_button184988(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button184988);
/**
* Creates a form reset button.
*/
sablono.core.reset_button184989 = (function reset_button184989(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button184989);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to184990 = (function() { 
var form_to184990__delegate = function (p__184991,body){var vec__184993 = p__184991;var method = cljs.core.nth.call(null,vec__184993,0,null);var action = cljs.core.nth.call(null,vec__184993,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to184990 = function (p__184991,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to184990__delegate.call(this,p__184991,body);};
form_to184990.cljs$lang$maxFixedArity = 1;
form_to184990.cljs$lang$applyTo = (function (arglist__184994){
var p__184991 = cljs.core.first(arglist__184994);
var body = cljs.core.rest(arglist__184994);
return form_to184990__delegate(p__184991,body);
});
form_to184990.cljs$core$IFn$_invoke$arity$variadic = form_to184990__delegate;
return form_to184990;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to184990);

//# sourceMappingURL=core.js.map