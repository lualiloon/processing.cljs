// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21867 = (function (f,fn_handler,meta21868){
this.f = f;
this.fn_handler = fn_handler;
this.meta21868 = meta21868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21867.cljs$lang$type = true;
cljs.core.async.t21867.cljs$lang$ctorStr = "cljs.core.async/t21867";
cljs.core.async.t21867.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21867");
});
cljs.core.async.t21867.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21869){var self__ = this;
var _21869__$1 = this;return self__.meta21868;
});
cljs.core.async.t21867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21869,meta21868__$1){var self__ = this;
var _21869__$1 = this;return (new cljs.core.async.t21867(self__.f,self__.fn_handler,meta21868__$1));
});
cljs.core.async.__GT_t21867 = (function __GT_t21867(f__$1,fn_handler__$1,meta21868){return (new cljs.core.async.t21867(f__$1,fn_handler__$1,meta21868));
});
}
return (new cljs.core.async.t21867(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21871 = buff;if(G__21871)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__21871.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21871.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21871);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_21872 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21872);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21872);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7850__auto__ = ret;if(cljs.core.truth_(and__7850__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7850__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8704__auto___21873 = n;var x_21874 = 0;while(true){
if((x_21874 < n__8704__auto___21873))
{(a[x_21874] = 0);
{
var G__21875 = (x_21874 + 1);
x_21874 = G__21875;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__21876 = (i + 1);
i = G__21876;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21880 = (function (flag,alt_flag,meta21881){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21881 = meta21881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21880.cljs$lang$type = true;
cljs.core.async.t21880.cljs$lang$ctorStr = "cljs.core.async/t21880";
cljs.core.async.t21880.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21880");
});
cljs.core.async.t21880.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21882){var self__ = this;
var _21882__$1 = this;return self__.meta21881;
});
cljs.core.async.t21880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21882,meta21881__$1){var self__ = this;
var _21882__$1 = this;return (new cljs.core.async.t21880(self__.flag,self__.alt_flag,meta21881__$1));
});
cljs.core.async.__GT_t21880 = (function __GT_t21880(flag__$1,alt_flag__$1,meta21881){return (new cljs.core.async.t21880(flag__$1,alt_flag__$1,meta21881));
});
}
return (new cljs.core.async.t21880(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21886 = (function (cb,flag,alt_handler,meta21887){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21887 = meta21887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21886.cljs$lang$type = true;
cljs.core.async.t21886.cljs$lang$ctorStr = "cljs.core.async/t21886";
cljs.core.async.t21886.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21886");
});
cljs.core.async.t21886.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21888){var self__ = this;
var _21888__$1 = this;return self__.meta21887;
});
cljs.core.async.t21886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21888,meta21887__$1){var self__ = this;
var _21888__$1 = this;return (new cljs.core.async.t21886(self__.cb,self__.flag,self__.alt_handler,meta21887__$1));
});
cljs.core.async.__GT_t21886 = (function __GT_t21886(cb__$1,flag__$1,alt_handler__$1,meta21887){return (new cljs.core.async.t21886(cb__$1,flag__$1,alt_handler__$1,meta21887));
});
}
return (new cljs.core.async.t21886(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21889_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21889_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7862__auto__ = wport;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21890 = (i + 1);
i = G__21890;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7862__auto__ = ret;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7850__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7850__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7850__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21891){var map__21893 = p__21891;var map__21893__$1 = ((cljs.core.seq_QMARK_.call(null,map__21893))?cljs.core.apply.call(null,cljs.core.hash_map,map__21893):map__21893);var opts = map__21893__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21891 = null;if (arguments.length > 1) {
  p__21891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21891);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21894){
var ports = cljs.core.first(arglist__21894);
var p__21891 = cljs.core.rest(arglist__21894);
return alts_BANG___delegate(ports,p__21891);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21902 = (function (ch,f,map_LT_,meta21903){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21903 = meta21903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21902.cljs$lang$type = true;
cljs.core.async.t21902.cljs$lang$ctorStr = "cljs.core.async/t21902";
cljs.core.async.t21902.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21902");
});
cljs.core.async.t21902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21905 = (function (fn1,_,meta21903,ch,f,map_LT_,meta21906){
this.fn1 = fn1;
this._ = _;
this.meta21903 = meta21903;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21906 = meta21906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21905.cljs$lang$type = true;
cljs.core.async.t21905.cljs$lang$ctorStr = "cljs.core.async/t21905";
cljs.core.async.t21905.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21905");
});
cljs.core.async.t21905.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21905.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21895_SHARP_){return f1.call(null,(((p1__21895_SHARP_ == null))?null:self__.f.call(null,p1__21895_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21907){var self__ = this;
var _21907__$1 = this;return self__.meta21906;
});
cljs.core.async.t21905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21907,meta21906__$1){var self__ = this;
var _21907__$1 = this;return (new cljs.core.async.t21905(self__.fn1,self__._,self__.meta21903,self__.ch,self__.f,self__.map_LT_,meta21906__$1));
});
cljs.core.async.__GT_t21905 = (function __GT_t21905(fn1__$1,___$2,meta21903__$1,ch__$2,f__$2,map_LT___$2,meta21906){return (new cljs.core.async.t21905(fn1__$1,___$2,meta21903__$1,ch__$2,f__$2,map_LT___$2,meta21906));
});
}
return (new cljs.core.async.t21905(fn1,___$1,self__.meta21903,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7850__auto__ = ret;if(cljs.core.truth_(and__7850__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7850__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21902.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21904){var self__ = this;
var _21904__$1 = this;return self__.meta21903;
});
cljs.core.async.t21902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21904,meta21903__$1){var self__ = this;
var _21904__$1 = this;return (new cljs.core.async.t21902(self__.ch,self__.f,self__.map_LT_,meta21903__$1));
});
cljs.core.async.__GT_t21902 = (function __GT_t21902(ch__$1,f__$1,map_LT___$1,meta21903){return (new cljs.core.async.t21902(ch__$1,f__$1,map_LT___$1,meta21903));
});
}
return (new cljs.core.async.t21902(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21911 = (function (ch,f,map_GT_,meta21912){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21912 = meta21912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21911.cljs$lang$type = true;
cljs.core.async.t21911.cljs$lang$ctorStr = "cljs.core.async/t21911";
cljs.core.async.t21911.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21911");
});
cljs.core.async.t21911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21911.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21913){var self__ = this;
var _21913__$1 = this;return self__.meta21912;
});
cljs.core.async.t21911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21913,meta21912__$1){var self__ = this;
var _21913__$1 = this;return (new cljs.core.async.t21911(self__.ch,self__.f,self__.map_GT_,meta21912__$1));
});
cljs.core.async.__GT_t21911 = (function __GT_t21911(ch__$1,f__$1,map_GT___$1,meta21912){return (new cljs.core.async.t21911(ch__$1,f__$1,map_GT___$1,meta21912));
});
}
return (new cljs.core.async.t21911(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21917 = (function (ch,p,filter_GT_,meta21918){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21918 = meta21918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21917.cljs$lang$type = true;
cljs.core.async.t21917.cljs$lang$ctorStr = "cljs.core.async/t21917";
cljs.core.async.t21917.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t21917");
});
cljs.core.async.t21917.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21917.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21917.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21919){var self__ = this;
var _21919__$1 = this;return self__.meta21918;
});
cljs.core.async.t21917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21919,meta21918__$1){var self__ = this;
var _21919__$1 = this;return (new cljs.core.async.t21917(self__.ch,self__.p,self__.filter_GT_,meta21918__$1));
});
cljs.core.async.__GT_t21917 = (function __GT_t21917(ch__$1,p__$1,filter_GT___$1,meta21918){return (new cljs.core.async.t21917(ch__$1,p__$1,filter_GT___$1,meta21918));
});
}
return (new cljs.core.async.t21917(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___22002 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_21981){var state_val_21982 = (state_21981[1]);if((state_val_21982 === 1))
{var state_21981__$1 = state_21981;var statearr_21983_22003 = state_21981__$1;(statearr_21983_22003[2] = null);
(statearr_21983_22003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 2))
{var state_21981__$1 = state_21981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21981__$1,4,ch);
} else
{if((state_val_21982 === 3))
{var inst_21979 = (state_21981[2]);var state_21981__$1 = state_21981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21981__$1,inst_21979);
} else
{if((state_val_21982 === 4))
{var inst_21963 = (state_21981[7]);var inst_21963__$1 = (state_21981[2]);var inst_21964 = (inst_21963__$1 == null);var state_21981__$1 = (function (){var statearr_21984 = state_21981;(statearr_21984[7] = inst_21963__$1);
return statearr_21984;
})();if(cljs.core.truth_(inst_21964))
{var statearr_21985_22004 = state_21981__$1;(statearr_21985_22004[1] = 5);
} else
{var statearr_21986_22005 = state_21981__$1;(statearr_21986_22005[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 5))
{var inst_21966 = cljs.core.async.close_BANG_.call(null,out);var state_21981__$1 = state_21981;var statearr_21987_22006 = state_21981__$1;(statearr_21987_22006[2] = inst_21966);
(statearr_21987_22006[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 6))
{var inst_21963 = (state_21981[7]);var inst_21968 = p.call(null,inst_21963);var state_21981__$1 = state_21981;if(cljs.core.truth_(inst_21968))
{var statearr_21988_22007 = state_21981__$1;(statearr_21988_22007[1] = 8);
} else
{var statearr_21989_22008 = state_21981__$1;(statearr_21989_22008[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 7))
{var inst_21977 = (state_21981[2]);var state_21981__$1 = state_21981;var statearr_21990_22009 = state_21981__$1;(statearr_21990_22009[2] = inst_21977);
(statearr_21990_22009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 8))
{var inst_21963 = (state_21981[7]);var state_21981__$1 = state_21981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21981__$1,11,out,inst_21963);
} else
{if((state_val_21982 === 9))
{var state_21981__$1 = state_21981;var statearr_21991_22010 = state_21981__$1;(statearr_21991_22010[2] = null);
(statearr_21991_22010[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 10))
{var inst_21974 = (state_21981[2]);var state_21981__$1 = (function (){var statearr_21992 = state_21981;(statearr_21992[8] = inst_21974);
return statearr_21992;
})();var statearr_21993_22011 = state_21981__$1;(statearr_21993_22011[2] = null);
(statearr_21993_22011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21982 === 11))
{var inst_21971 = (state_21981[2]);var state_21981__$1 = state_21981;var statearr_21994_22012 = state_21981__$1;(statearr_21994_22012[2] = inst_21971);
(statearr_21994_22012[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_21998 = [null,null,null,null,null,null,null,null,null];(statearr_21998[0] = state_machine__13648__auto__);
(statearr_21998[1] = 1);
return statearr_21998;
});
var state_machine__13648__auto____1 = (function (state_21981){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_21981);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e21999){if((e21999 instanceof Object))
{var ex__13651__auto__ = e21999;var statearr_22000_22013 = state_21981;(statearr_22000_22013[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21981);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22014 = state_21981;
state_21981 = G__22014;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_21981){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_21981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_22001 = f__13746__auto__.call(null);(statearr_22001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___22002);
return statearr_22001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_22166){var state_val_22167 = (state_22166[1]);if((state_val_22167 === 1))
{var state_22166__$1 = state_22166;var statearr_22168_22205 = state_22166__$1;(statearr_22168_22205[2] = null);
(statearr_22168_22205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 2))
{var state_22166__$1 = state_22166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22166__$1,4,in$);
} else
{if((state_val_22167 === 3))
{var inst_22164 = (state_22166[2]);var state_22166__$1 = state_22166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22166__$1,inst_22164);
} else
{if((state_val_22167 === 4))
{var inst_22112 = (state_22166[7]);var inst_22112__$1 = (state_22166[2]);var inst_22113 = (inst_22112__$1 == null);var state_22166__$1 = (function (){var statearr_22169 = state_22166;(statearr_22169[7] = inst_22112__$1);
return statearr_22169;
})();if(cljs.core.truth_(inst_22113))
{var statearr_22170_22206 = state_22166__$1;(statearr_22170_22206[1] = 5);
} else
{var statearr_22171_22207 = state_22166__$1;(statearr_22171_22207[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 5))
{var inst_22115 = cljs.core.async.close_BANG_.call(null,out);var state_22166__$1 = state_22166;var statearr_22172_22208 = state_22166__$1;(statearr_22172_22208[2] = inst_22115);
(statearr_22172_22208[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 6))
{var inst_22112 = (state_22166[7]);var inst_22117 = f.call(null,inst_22112);var inst_22122 = cljs.core.seq.call(null,inst_22117);var inst_22123 = inst_22122;var inst_22124 = null;var inst_22125 = 0;var inst_22126 = 0;var state_22166__$1 = (function (){var statearr_22173 = state_22166;(statearr_22173[8] = inst_22126);
(statearr_22173[9] = inst_22125);
(statearr_22173[10] = inst_22124);
(statearr_22173[11] = inst_22123);
return statearr_22173;
})();var statearr_22174_22209 = state_22166__$1;(statearr_22174_22209[2] = null);
(statearr_22174_22209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 7))
{var inst_22162 = (state_22166[2]);var state_22166__$1 = state_22166;var statearr_22175_22210 = state_22166__$1;(statearr_22175_22210[2] = inst_22162);
(statearr_22175_22210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 8))
{var inst_22126 = (state_22166[8]);var inst_22125 = (state_22166[9]);var inst_22128 = (inst_22126 < inst_22125);var inst_22129 = inst_22128;var state_22166__$1 = state_22166;if(cljs.core.truth_(inst_22129))
{var statearr_22176_22211 = state_22166__$1;(statearr_22176_22211[1] = 10);
} else
{var statearr_22177_22212 = state_22166__$1;(statearr_22177_22212[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 9))
{var inst_22159 = (state_22166[2]);var state_22166__$1 = (function (){var statearr_22178 = state_22166;(statearr_22178[12] = inst_22159);
return statearr_22178;
})();var statearr_22179_22213 = state_22166__$1;(statearr_22179_22213[2] = null);
(statearr_22179_22213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 10))
{var inst_22126 = (state_22166[8]);var inst_22124 = (state_22166[10]);var inst_22131 = cljs.core._nth.call(null,inst_22124,inst_22126);var state_22166__$1 = state_22166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22166__$1,13,out,inst_22131);
} else
{if((state_val_22167 === 11))
{var inst_22137 = (state_22166[13]);var inst_22123 = (state_22166[11]);var inst_22137__$1 = cljs.core.seq.call(null,inst_22123);var state_22166__$1 = (function (){var statearr_22183 = state_22166;(statearr_22183[13] = inst_22137__$1);
return statearr_22183;
})();if(inst_22137__$1)
{var statearr_22184_22214 = state_22166__$1;(statearr_22184_22214[1] = 14);
} else
{var statearr_22185_22215 = state_22166__$1;(statearr_22185_22215[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 12))
{var inst_22157 = (state_22166[2]);var state_22166__$1 = state_22166;var statearr_22186_22216 = state_22166__$1;(statearr_22186_22216[2] = inst_22157);
(statearr_22186_22216[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 13))
{var inst_22126 = (state_22166[8]);var inst_22125 = (state_22166[9]);var inst_22124 = (state_22166[10]);var inst_22123 = (state_22166[11]);var inst_22133 = (state_22166[2]);var inst_22134 = (inst_22126 + 1);var tmp22180 = inst_22125;var tmp22181 = inst_22124;var tmp22182 = inst_22123;var inst_22123__$1 = tmp22182;var inst_22124__$1 = tmp22181;var inst_22125__$1 = tmp22180;var inst_22126__$1 = inst_22134;var state_22166__$1 = (function (){var statearr_22187 = state_22166;(statearr_22187[8] = inst_22126__$1);
(statearr_22187[14] = inst_22133);
(statearr_22187[9] = inst_22125__$1);
(statearr_22187[10] = inst_22124__$1);
(statearr_22187[11] = inst_22123__$1);
return statearr_22187;
})();var statearr_22188_22217 = state_22166__$1;(statearr_22188_22217[2] = null);
(statearr_22188_22217[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 14))
{var inst_22137 = (state_22166[13]);var inst_22139 = cljs.core.chunked_seq_QMARK_.call(null,inst_22137);var state_22166__$1 = state_22166;if(inst_22139)
{var statearr_22189_22218 = state_22166__$1;(statearr_22189_22218[1] = 17);
} else
{var statearr_22190_22219 = state_22166__$1;(statearr_22190_22219[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 15))
{var state_22166__$1 = state_22166;var statearr_22191_22220 = state_22166__$1;(statearr_22191_22220[2] = null);
(statearr_22191_22220[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 16))
{var inst_22155 = (state_22166[2]);var state_22166__$1 = state_22166;var statearr_22192_22221 = state_22166__$1;(statearr_22192_22221[2] = inst_22155);
(statearr_22192_22221[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 17))
{var inst_22137 = (state_22166[13]);var inst_22141 = cljs.core.chunk_first.call(null,inst_22137);var inst_22142 = cljs.core.chunk_rest.call(null,inst_22137);var inst_22143 = cljs.core.count.call(null,inst_22141);var inst_22123 = inst_22142;var inst_22124 = inst_22141;var inst_22125 = inst_22143;var inst_22126 = 0;var state_22166__$1 = (function (){var statearr_22193 = state_22166;(statearr_22193[8] = inst_22126);
(statearr_22193[9] = inst_22125);
(statearr_22193[10] = inst_22124);
(statearr_22193[11] = inst_22123);
return statearr_22193;
})();var statearr_22194_22222 = state_22166__$1;(statearr_22194_22222[2] = null);
(statearr_22194_22222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 18))
{var inst_22137 = (state_22166[13]);var inst_22146 = cljs.core.first.call(null,inst_22137);var state_22166__$1 = state_22166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22166__$1,20,out,inst_22146);
} else
{if((state_val_22167 === 19))
{var inst_22152 = (state_22166[2]);var state_22166__$1 = state_22166;var statearr_22195_22223 = state_22166__$1;(statearr_22195_22223[2] = inst_22152);
(statearr_22195_22223[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22167 === 20))
{var inst_22137 = (state_22166[13]);var inst_22148 = (state_22166[2]);var inst_22149 = cljs.core.next.call(null,inst_22137);var inst_22123 = inst_22149;var inst_22124 = null;var inst_22125 = 0;var inst_22126 = 0;var state_22166__$1 = (function (){var statearr_22196 = state_22166;(statearr_22196[15] = inst_22148);
(statearr_22196[8] = inst_22126);
(statearr_22196[9] = inst_22125);
(statearr_22196[10] = inst_22124);
(statearr_22196[11] = inst_22123);
return statearr_22196;
})();var statearr_22197_22224 = state_22166__$1;(statearr_22197_22224[2] = null);
(statearr_22197_22224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_22201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22201[0] = state_machine__13648__auto__);
(statearr_22201[1] = 1);
return statearr_22201;
});
var state_machine__13648__auto____1 = (function (state_22166){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_22166);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e22202){if((e22202 instanceof Object))
{var ex__13651__auto__ = e22202;var statearr_22203_22225 = state_22166;(statearr_22203_22225[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22226 = state_22166;
state_22166 = G__22226;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_22166){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_22166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_22204 = f__13746__auto__.call(null);(statearr_22204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_22204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return c__13745__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13745__auto___22307 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_22286){var state_val_22287 = (state_22286[1]);if((state_val_22287 === 1))
{var state_22286__$1 = state_22286;var statearr_22288_22308 = state_22286__$1;(statearr_22288_22308[2] = null);
(statearr_22288_22308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 2))
{var state_22286__$1 = state_22286;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22286__$1,4,from);
} else
{if((state_val_22287 === 3))
{var inst_22284 = (state_22286[2]);var state_22286__$1 = state_22286;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22286__$1,inst_22284);
} else
{if((state_val_22287 === 4))
{var inst_22269 = (state_22286[7]);var inst_22269__$1 = (state_22286[2]);var inst_22270 = (inst_22269__$1 == null);var state_22286__$1 = (function (){var statearr_22289 = state_22286;(statearr_22289[7] = inst_22269__$1);
return statearr_22289;
})();if(cljs.core.truth_(inst_22270))
{var statearr_22290_22309 = state_22286__$1;(statearr_22290_22309[1] = 5);
} else
{var statearr_22291_22310 = state_22286__$1;(statearr_22291_22310[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 5))
{var state_22286__$1 = state_22286;if(cljs.core.truth_(close_QMARK_))
{var statearr_22292_22311 = state_22286__$1;(statearr_22292_22311[1] = 8);
} else
{var statearr_22293_22312 = state_22286__$1;(statearr_22293_22312[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 6))
{var inst_22269 = (state_22286[7]);var state_22286__$1 = state_22286;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22286__$1,11,to,inst_22269);
} else
{if((state_val_22287 === 7))
{var inst_22282 = (state_22286[2]);var state_22286__$1 = state_22286;var statearr_22294_22313 = state_22286__$1;(statearr_22294_22313[2] = inst_22282);
(statearr_22294_22313[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 8))
{var inst_22273 = cljs.core.async.close_BANG_.call(null,to);var state_22286__$1 = state_22286;var statearr_22295_22314 = state_22286__$1;(statearr_22295_22314[2] = inst_22273);
(statearr_22295_22314[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 9))
{var state_22286__$1 = state_22286;var statearr_22296_22315 = state_22286__$1;(statearr_22296_22315[2] = null);
(statearr_22296_22315[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 10))
{var inst_22276 = (state_22286[2]);var state_22286__$1 = state_22286;var statearr_22297_22316 = state_22286__$1;(statearr_22297_22316[2] = inst_22276);
(statearr_22297_22316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22287 === 11))
{var inst_22279 = (state_22286[2]);var state_22286__$1 = (function (){var statearr_22298 = state_22286;(statearr_22298[8] = inst_22279);
return statearr_22298;
})();var statearr_22299_22317 = state_22286__$1;(statearr_22299_22317[2] = null);
(statearr_22299_22317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_22303 = [null,null,null,null,null,null,null,null,null];(statearr_22303[0] = state_machine__13648__auto__);
(statearr_22303[1] = 1);
return statearr_22303;
});
var state_machine__13648__auto____1 = (function (state_22286){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_22286);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e22304){if((e22304 instanceof Object))
{var ex__13651__auto__ = e22304;var statearr_22305_22318 = state_22286;(statearr_22305_22318[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22286);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22319 = state_22286;
state_22286 = G__22319;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_22286){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_22286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_22306 = f__13746__auto__.call(null);(statearr_22306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___22307);
return statearr_22306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13745__auto___22406 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_22384){var state_val_22385 = (state_22384[1]);if((state_val_22385 === 1))
{var state_22384__$1 = state_22384;var statearr_22386_22407 = state_22384__$1;(statearr_22386_22407[2] = null);
(statearr_22386_22407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 2))
{var state_22384__$1 = state_22384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22384__$1,4,ch);
} else
{if((state_val_22385 === 3))
{var inst_22382 = (state_22384[2]);var state_22384__$1 = state_22384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22384__$1,inst_22382);
} else
{if((state_val_22385 === 4))
{var inst_22365 = (state_22384[7]);var inst_22365__$1 = (state_22384[2]);var inst_22366 = (inst_22365__$1 == null);var state_22384__$1 = (function (){var statearr_22387 = state_22384;(statearr_22387[7] = inst_22365__$1);
return statearr_22387;
})();if(cljs.core.truth_(inst_22366))
{var statearr_22388_22408 = state_22384__$1;(statearr_22388_22408[1] = 5);
} else
{var statearr_22389_22409 = state_22384__$1;(statearr_22389_22409[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 5))
{var inst_22368 = cljs.core.async.close_BANG_.call(null,tc);var inst_22369 = cljs.core.async.close_BANG_.call(null,fc);var state_22384__$1 = (function (){var statearr_22390 = state_22384;(statearr_22390[8] = inst_22368);
return statearr_22390;
})();var statearr_22391_22410 = state_22384__$1;(statearr_22391_22410[2] = inst_22369);
(statearr_22391_22410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 6))
{var inst_22365 = (state_22384[7]);var inst_22371 = p.call(null,inst_22365);var state_22384__$1 = state_22384;if(cljs.core.truth_(inst_22371))
{var statearr_22392_22411 = state_22384__$1;(statearr_22392_22411[1] = 9);
} else
{var statearr_22393_22412 = state_22384__$1;(statearr_22393_22412[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 7))
{var inst_22380 = (state_22384[2]);var state_22384__$1 = state_22384;var statearr_22394_22413 = state_22384__$1;(statearr_22394_22413[2] = inst_22380);
(statearr_22394_22413[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 8))
{var inst_22377 = (state_22384[2]);var state_22384__$1 = (function (){var statearr_22395 = state_22384;(statearr_22395[9] = inst_22377);
return statearr_22395;
})();var statearr_22396_22414 = state_22384__$1;(statearr_22396_22414[2] = null);
(statearr_22396_22414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 9))
{var state_22384__$1 = state_22384;var statearr_22397_22415 = state_22384__$1;(statearr_22397_22415[2] = tc);
(statearr_22397_22415[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 10))
{var state_22384__$1 = state_22384;var statearr_22398_22416 = state_22384__$1;(statearr_22398_22416[2] = fc);
(statearr_22398_22416[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22385 === 11))
{var inst_22365 = (state_22384[7]);var inst_22375 = (state_22384[2]);var state_22384__$1 = state_22384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22384__$1,8,inst_22375,inst_22365);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_22402 = [null,null,null,null,null,null,null,null,null,null];(statearr_22402[0] = state_machine__13648__auto__);
(statearr_22402[1] = 1);
return statearr_22402;
});
var state_machine__13648__auto____1 = (function (state_22384){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_22384);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e22403){if((e22403 instanceof Object))
{var ex__13651__auto__ = e22403;var statearr_22404_22417 = state_22384;(statearr_22404_22417[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22418 = state_22384;
state_22384 = G__22418;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_22384){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_22384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_22405 = f__13746__auto__.call(null);(statearr_22405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___22406);
return statearr_22405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_22465){var state_val_22466 = (state_22465[1]);if((state_val_22466 === 7))
{var inst_22461 = (state_22465[2]);var state_22465__$1 = state_22465;var statearr_22467_22483 = state_22465__$1;(statearr_22467_22483[2] = inst_22461);
(statearr_22467_22483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22466 === 6))
{var inst_22454 = (state_22465[7]);var inst_22451 = (state_22465[8]);var inst_22458 = f.call(null,inst_22451,inst_22454);var inst_22451__$1 = inst_22458;var state_22465__$1 = (function (){var statearr_22468 = state_22465;(statearr_22468[8] = inst_22451__$1);
return statearr_22468;
})();var statearr_22469_22484 = state_22465__$1;(statearr_22469_22484[2] = null);
(statearr_22469_22484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22466 === 5))
{var inst_22451 = (state_22465[8]);var state_22465__$1 = state_22465;var statearr_22470_22485 = state_22465__$1;(statearr_22470_22485[2] = inst_22451);
(statearr_22470_22485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22466 === 4))
{var inst_22454 = (state_22465[7]);var inst_22454__$1 = (state_22465[2]);var inst_22455 = (inst_22454__$1 == null);var state_22465__$1 = (function (){var statearr_22471 = state_22465;(statearr_22471[7] = inst_22454__$1);
return statearr_22471;
})();if(cljs.core.truth_(inst_22455))
{var statearr_22472_22486 = state_22465__$1;(statearr_22472_22486[1] = 5);
} else
{var statearr_22473_22487 = state_22465__$1;(statearr_22473_22487[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22466 === 3))
{var inst_22463 = (state_22465[2]);var state_22465__$1 = state_22465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22465__$1,inst_22463);
} else
{if((state_val_22466 === 2))
{var state_22465__$1 = state_22465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22465__$1,4,ch);
} else
{if((state_val_22466 === 1))
{var inst_22451 = init;var state_22465__$1 = (function (){var statearr_22474 = state_22465;(statearr_22474[8] = inst_22451);
return statearr_22474;
})();var statearr_22475_22488 = state_22465__$1;(statearr_22475_22488[2] = null);
(statearr_22475_22488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_22479 = [null,null,null,null,null,null,null,null,null];(statearr_22479[0] = state_machine__13648__auto__);
(statearr_22479[1] = 1);
return statearr_22479;
});
var state_machine__13648__auto____1 = (function (state_22465){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_22465);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e22480){if((e22480 instanceof Object))
{var ex__13651__auto__ = e22480;var statearr_22481_22489 = state_22465;(statearr_22481_22489[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22465);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22490 = state_22465;
state_22465 = G__22490;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_22465){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_22465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_22482 = f__13746__auto__.call(null);(statearr_22482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_22482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return c__13745__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_22552){var state_val_22553 = (state_22552[1]);if((state_val_22553 === 1))
{var inst_22532 = cljs.core.seq.call(null,coll);var inst_22533 = inst_22532;var state_22552__$1 = (function (){var statearr_22554 = state_22552;(statearr_22554[7] = inst_22533);
return statearr_22554;
})();var statearr_22555_22573 = state_22552__$1;(statearr_22555_22573[2] = null);
(statearr_22555_22573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 2))
{var inst_22533 = (state_22552[7]);var state_22552__$1 = state_22552;if(cljs.core.truth_(inst_22533))
{var statearr_22556_22574 = state_22552__$1;(statearr_22556_22574[1] = 4);
} else
{var statearr_22557_22575 = state_22552__$1;(statearr_22557_22575[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 3))
{var inst_22550 = (state_22552[2]);var state_22552__$1 = state_22552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22552__$1,inst_22550);
} else
{if((state_val_22553 === 4))
{var inst_22533 = (state_22552[7]);var inst_22536 = cljs.core.first.call(null,inst_22533);var state_22552__$1 = state_22552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22552__$1,7,ch,inst_22536);
} else
{if((state_val_22553 === 5))
{var state_22552__$1 = state_22552;if(cljs.core.truth_(close_QMARK_))
{var statearr_22558_22576 = state_22552__$1;(statearr_22558_22576[1] = 8);
} else
{var statearr_22559_22577 = state_22552__$1;(statearr_22559_22577[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 6))
{var inst_22548 = (state_22552[2]);var state_22552__$1 = state_22552;var statearr_22560_22578 = state_22552__$1;(statearr_22560_22578[2] = inst_22548);
(statearr_22560_22578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 7))
{var inst_22533 = (state_22552[7]);var inst_22538 = (state_22552[2]);var inst_22539 = cljs.core.next.call(null,inst_22533);var inst_22533__$1 = inst_22539;var state_22552__$1 = (function (){var statearr_22561 = state_22552;(statearr_22561[7] = inst_22533__$1);
(statearr_22561[8] = inst_22538);
return statearr_22561;
})();var statearr_22562_22579 = state_22552__$1;(statearr_22562_22579[2] = null);
(statearr_22562_22579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 8))
{var inst_22543 = cljs.core.async.close_BANG_.call(null,ch);var state_22552__$1 = state_22552;var statearr_22563_22580 = state_22552__$1;(statearr_22563_22580[2] = inst_22543);
(statearr_22563_22580[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 9))
{var state_22552__$1 = state_22552;var statearr_22564_22581 = state_22552__$1;(statearr_22564_22581[2] = null);
(statearr_22564_22581[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22553 === 10))
{var inst_22546 = (state_22552[2]);var state_22552__$1 = state_22552;var statearr_22565_22582 = state_22552__$1;(statearr_22565_22582[2] = inst_22546);
(statearr_22565_22582[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_22569 = [null,null,null,null,null,null,null,null,null];(statearr_22569[0] = state_machine__13648__auto__);
(statearr_22569[1] = 1);
return statearr_22569;
});
var state_machine__13648__auto____1 = (function (state_22552){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_22552);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e22570){if((e22570 instanceof Object))
{var ex__13651__auto__ = e22570;var statearr_22571_22583 = state_22552;(statearr_22571_22583[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22552);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22584 = state_22552;
state_22552 = G__22584;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_22552){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_22552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_22572 = f__13746__auto__.call(null);(statearr_22572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_22572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return c__13745__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj22586 = {};return obj22586;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7850__auto__ = _;if(and__7850__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7850__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8483__auto__ = (((_ == null))?null:_);return (function (){var or__7862__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22588 = {};return obj22588;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22812 = (function (cs,ch,mult,meta22813){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22813 = meta22813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22812.cljs$lang$type = true;
cljs.core.async.t22812.cljs$lang$ctorStr = "cljs.core.async/t22812";
cljs.core.async.t22812.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t22812");
});})(cs))
;
cljs.core.async.t22812.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22812.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22812.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22812.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22812.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22814){var self__ = this;
var _22814__$1 = this;return self__.meta22813;
});})(cs))
;
cljs.core.async.t22812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22814,meta22813__$1){var self__ = this;
var _22814__$1 = this;return (new cljs.core.async.t22812(self__.cs,self__.ch,self__.mult,meta22813__$1));
});})(cs))
;
cljs.core.async.__GT_t22812 = ((function (cs){
return (function __GT_t22812(cs__$1,ch__$1,mult__$1,meta22813){return (new cljs.core.async.t22812(cs__$1,ch__$1,mult__$1,meta22813));
});})(cs))
;
}
return (new cljs.core.async.t22812(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13745__auto___23035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_22949){var state_val_22950 = (state_22949[1]);if((state_val_22950 === 32))
{var inst_22893 = (state_22949[7]);var inst_22817 = (state_22949[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22949,31,Object,null,30);var inst_22900 = cljs.core.async.put_BANG_.call(null,inst_22893,inst_22817,done);var state_22949__$1 = state_22949;var statearr_22951_23036 = state_22949__$1;(statearr_22951_23036[2] = inst_22900);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22949__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 1))
{var state_22949__$1 = state_22949;var statearr_22952_23037 = state_22949__$1;(statearr_22952_23037[2] = null);
(statearr_22952_23037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 33))
{var inst_22906 = (state_22949[9]);var inst_22908 = cljs.core.chunked_seq_QMARK_.call(null,inst_22906);var state_22949__$1 = state_22949;if(inst_22908)
{var statearr_22953_23038 = state_22949__$1;(statearr_22953_23038[1] = 36);
} else
{var statearr_22954_23039 = state_22949__$1;(statearr_22954_23039[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 2))
{var state_22949__$1 = state_22949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22949__$1,4,ch);
} else
{if((state_val_22950 === 34))
{var state_22949__$1 = state_22949;var statearr_22955_23040 = state_22949__$1;(statearr_22955_23040[2] = null);
(statearr_22955_23040[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 3))
{var inst_22947 = (state_22949[2]);var state_22949__$1 = state_22949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22949__$1,inst_22947);
} else
{if((state_val_22950 === 35))
{var inst_22931 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22956_23041 = state_22949__$1;(statearr_22956_23041[2] = inst_22931);
(statearr_22956_23041[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 4))
{var inst_22817 = (state_22949[8]);var inst_22817__$1 = (state_22949[2]);var inst_22818 = (inst_22817__$1 == null);var state_22949__$1 = (function (){var statearr_22957 = state_22949;(statearr_22957[8] = inst_22817__$1);
return statearr_22957;
})();if(cljs.core.truth_(inst_22818))
{var statearr_22958_23042 = state_22949__$1;(statearr_22958_23042[1] = 5);
} else
{var statearr_22959_23043 = state_22949__$1;(statearr_22959_23043[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 36))
{var inst_22906 = (state_22949[9]);var inst_22910 = cljs.core.chunk_first.call(null,inst_22906);var inst_22911 = cljs.core.chunk_rest.call(null,inst_22906);var inst_22912 = cljs.core.count.call(null,inst_22910);var inst_22885 = inst_22911;var inst_22886 = inst_22910;var inst_22887 = inst_22912;var inst_22888 = 0;var state_22949__$1 = (function (){var statearr_22960 = state_22949;(statearr_22960[10] = inst_22885);
(statearr_22960[11] = inst_22886);
(statearr_22960[12] = inst_22887);
(statearr_22960[13] = inst_22888);
return statearr_22960;
})();var statearr_22961_23044 = state_22949__$1;(statearr_22961_23044[2] = null);
(statearr_22961_23044[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 5))
{var inst_22824 = cljs.core.deref.call(null,cs);var inst_22825 = cljs.core.seq.call(null,inst_22824);var inst_22826 = inst_22825;var inst_22827 = null;var inst_22828 = 0;var inst_22829 = 0;var state_22949__$1 = (function (){var statearr_22962 = state_22949;(statearr_22962[14] = inst_22826);
(statearr_22962[15] = inst_22829);
(statearr_22962[16] = inst_22827);
(statearr_22962[17] = inst_22828);
return statearr_22962;
})();var statearr_22963_23045 = state_22949__$1;(statearr_22963_23045[2] = null);
(statearr_22963_23045[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 37))
{var inst_22906 = (state_22949[9]);var inst_22915 = cljs.core.first.call(null,inst_22906);var state_22949__$1 = (function (){var statearr_22964 = state_22949;(statearr_22964[18] = inst_22915);
return statearr_22964;
})();var statearr_22965_23046 = state_22949__$1;(statearr_22965_23046[2] = null);
(statearr_22965_23046[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 6))
{var inst_22877 = (state_22949[19]);var inst_22876 = cljs.core.deref.call(null,cs);var inst_22877__$1 = cljs.core.keys.call(null,inst_22876);var inst_22878 = cljs.core.count.call(null,inst_22877__$1);var inst_22879 = cljs.core.reset_BANG_.call(null,dctr,inst_22878);var inst_22884 = cljs.core.seq.call(null,inst_22877__$1);var inst_22885 = inst_22884;var inst_22886 = null;var inst_22887 = 0;var inst_22888 = 0;var state_22949__$1 = (function (){var statearr_22966 = state_22949;(statearr_22966[20] = inst_22879);
(statearr_22966[10] = inst_22885);
(statearr_22966[11] = inst_22886);
(statearr_22966[12] = inst_22887);
(statearr_22966[13] = inst_22888);
(statearr_22966[19] = inst_22877__$1);
return statearr_22966;
})();var statearr_22967_23047 = state_22949__$1;(statearr_22967_23047[2] = null);
(statearr_22967_23047[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 38))
{var inst_22928 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22968_23048 = state_22949__$1;(statearr_22968_23048[2] = inst_22928);
(statearr_22968_23048[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 7))
{var inst_22945 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22969_23049 = state_22949__$1;(statearr_22969_23049[2] = inst_22945);
(statearr_22969_23049[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 39))
{var inst_22906 = (state_22949[9]);var inst_22924 = (state_22949[2]);var inst_22925 = cljs.core.next.call(null,inst_22906);var inst_22885 = inst_22925;var inst_22886 = null;var inst_22887 = 0;var inst_22888 = 0;var state_22949__$1 = (function (){var statearr_22970 = state_22949;(statearr_22970[21] = inst_22924);
(statearr_22970[10] = inst_22885);
(statearr_22970[11] = inst_22886);
(statearr_22970[12] = inst_22887);
(statearr_22970[13] = inst_22888);
return statearr_22970;
})();var statearr_22971_23050 = state_22949__$1;(statearr_22971_23050[2] = null);
(statearr_22971_23050[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 8))
{var inst_22829 = (state_22949[15]);var inst_22828 = (state_22949[17]);var inst_22831 = (inst_22829 < inst_22828);var inst_22832 = inst_22831;var state_22949__$1 = state_22949;if(cljs.core.truth_(inst_22832))
{var statearr_22972_23051 = state_22949__$1;(statearr_22972_23051[1] = 10);
} else
{var statearr_22973_23052 = state_22949__$1;(statearr_22973_23052[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 40))
{var inst_22915 = (state_22949[18]);var inst_22916 = (state_22949[2]);var inst_22917 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22918 = cljs.core.async.untap_STAR_.call(null,m,inst_22915);var state_22949__$1 = (function (){var statearr_22974 = state_22949;(statearr_22974[22] = inst_22917);
(statearr_22974[23] = inst_22916);
return statearr_22974;
})();var statearr_22975_23053 = state_22949__$1;(statearr_22975_23053[2] = inst_22918);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22949__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 9))
{var inst_22874 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22976_23054 = state_22949__$1;(statearr_22976_23054[2] = inst_22874);
(statearr_22976_23054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 41))
{var inst_22915 = (state_22949[18]);var inst_22817 = (state_22949[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22949,40,Object,null,39);var inst_22922 = cljs.core.async.put_BANG_.call(null,inst_22915,inst_22817,done);var state_22949__$1 = state_22949;var statearr_22977_23055 = state_22949__$1;(statearr_22977_23055[2] = inst_22922);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22949__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 10))
{var inst_22829 = (state_22949[15]);var inst_22827 = (state_22949[16]);var inst_22835 = cljs.core._nth.call(null,inst_22827,inst_22829);var inst_22836 = cljs.core.nth.call(null,inst_22835,0,null);var inst_22837 = cljs.core.nth.call(null,inst_22835,1,null);var state_22949__$1 = (function (){var statearr_22978 = state_22949;(statearr_22978[24] = inst_22836);
return statearr_22978;
})();if(cljs.core.truth_(inst_22837))
{var statearr_22979_23056 = state_22949__$1;(statearr_22979_23056[1] = 13);
} else
{var statearr_22980_23057 = state_22949__$1;(statearr_22980_23057[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 42))
{var state_22949__$1 = state_22949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22949__$1,45,dchan);
} else
{if((state_val_22950 === 11))
{var inst_22846 = (state_22949[25]);var inst_22826 = (state_22949[14]);var inst_22846__$1 = cljs.core.seq.call(null,inst_22826);var state_22949__$1 = (function (){var statearr_22981 = state_22949;(statearr_22981[25] = inst_22846__$1);
return statearr_22981;
})();if(inst_22846__$1)
{var statearr_22982_23058 = state_22949__$1;(statearr_22982_23058[1] = 16);
} else
{var statearr_22983_23059 = state_22949__$1;(statearr_22983_23059[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 43))
{var state_22949__$1 = state_22949;var statearr_22984_23060 = state_22949__$1;(statearr_22984_23060[2] = null);
(statearr_22984_23060[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 12))
{var inst_22872 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22985_23061 = state_22949__$1;(statearr_22985_23061[2] = inst_22872);
(statearr_22985_23061[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 44))
{var inst_22942 = (state_22949[2]);var state_22949__$1 = (function (){var statearr_22986 = state_22949;(statearr_22986[26] = inst_22942);
return statearr_22986;
})();var statearr_22987_23062 = state_22949__$1;(statearr_22987_23062[2] = null);
(statearr_22987_23062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 13))
{var inst_22836 = (state_22949[24]);var inst_22839 = cljs.core.async.close_BANG_.call(null,inst_22836);var state_22949__$1 = state_22949;var statearr_22988_23063 = state_22949__$1;(statearr_22988_23063[2] = inst_22839);
(statearr_22988_23063[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 45))
{var inst_22939 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22992_23064 = state_22949__$1;(statearr_22992_23064[2] = inst_22939);
(statearr_22992_23064[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 14))
{var state_22949__$1 = state_22949;var statearr_22993_23065 = state_22949__$1;(statearr_22993_23065[2] = null);
(statearr_22993_23065[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 15))
{var inst_22826 = (state_22949[14]);var inst_22829 = (state_22949[15]);var inst_22827 = (state_22949[16]);var inst_22828 = (state_22949[17]);var inst_22842 = (state_22949[2]);var inst_22843 = (inst_22829 + 1);var tmp22989 = inst_22826;var tmp22990 = inst_22827;var tmp22991 = inst_22828;var inst_22826__$1 = tmp22989;var inst_22827__$1 = tmp22990;var inst_22828__$1 = tmp22991;var inst_22829__$1 = inst_22843;var state_22949__$1 = (function (){var statearr_22994 = state_22949;(statearr_22994[27] = inst_22842);
(statearr_22994[14] = inst_22826__$1);
(statearr_22994[15] = inst_22829__$1);
(statearr_22994[16] = inst_22827__$1);
(statearr_22994[17] = inst_22828__$1);
return statearr_22994;
})();var statearr_22995_23066 = state_22949__$1;(statearr_22995_23066[2] = null);
(statearr_22995_23066[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 16))
{var inst_22846 = (state_22949[25]);var inst_22848 = cljs.core.chunked_seq_QMARK_.call(null,inst_22846);var state_22949__$1 = state_22949;if(inst_22848)
{var statearr_22996_23067 = state_22949__$1;(statearr_22996_23067[1] = 19);
} else
{var statearr_22997_23068 = state_22949__$1;(statearr_22997_23068[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 17))
{var state_22949__$1 = state_22949;var statearr_22998_23069 = state_22949__$1;(statearr_22998_23069[2] = null);
(statearr_22998_23069[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 18))
{var inst_22870 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_22999_23070 = state_22949__$1;(statearr_22999_23070[2] = inst_22870);
(statearr_22999_23070[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 19))
{var inst_22846 = (state_22949[25]);var inst_22850 = cljs.core.chunk_first.call(null,inst_22846);var inst_22851 = cljs.core.chunk_rest.call(null,inst_22846);var inst_22852 = cljs.core.count.call(null,inst_22850);var inst_22826 = inst_22851;var inst_22827 = inst_22850;var inst_22828 = inst_22852;var inst_22829 = 0;var state_22949__$1 = (function (){var statearr_23000 = state_22949;(statearr_23000[14] = inst_22826);
(statearr_23000[15] = inst_22829);
(statearr_23000[16] = inst_22827);
(statearr_23000[17] = inst_22828);
return statearr_23000;
})();var statearr_23001_23071 = state_22949__$1;(statearr_23001_23071[2] = null);
(statearr_23001_23071[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 20))
{var inst_22846 = (state_22949[25]);var inst_22856 = cljs.core.first.call(null,inst_22846);var inst_22857 = cljs.core.nth.call(null,inst_22856,0,null);var inst_22858 = cljs.core.nth.call(null,inst_22856,1,null);var state_22949__$1 = (function (){var statearr_23002 = state_22949;(statearr_23002[28] = inst_22857);
return statearr_23002;
})();if(cljs.core.truth_(inst_22858))
{var statearr_23003_23072 = state_22949__$1;(statearr_23003_23072[1] = 22);
} else
{var statearr_23004_23073 = state_22949__$1;(statearr_23004_23073[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 21))
{var inst_22867 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_23005_23074 = state_22949__$1;(statearr_23005_23074[2] = inst_22867);
(statearr_23005_23074[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 22))
{var inst_22857 = (state_22949[28]);var inst_22860 = cljs.core.async.close_BANG_.call(null,inst_22857);var state_22949__$1 = state_22949;var statearr_23006_23075 = state_22949__$1;(statearr_23006_23075[2] = inst_22860);
(statearr_23006_23075[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 23))
{var state_22949__$1 = state_22949;var statearr_23007_23076 = state_22949__$1;(statearr_23007_23076[2] = null);
(statearr_23007_23076[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 24))
{var inst_22846 = (state_22949[25]);var inst_22863 = (state_22949[2]);var inst_22864 = cljs.core.next.call(null,inst_22846);var inst_22826 = inst_22864;var inst_22827 = null;var inst_22828 = 0;var inst_22829 = 0;var state_22949__$1 = (function (){var statearr_23008 = state_22949;(statearr_23008[29] = inst_22863);
(statearr_23008[14] = inst_22826);
(statearr_23008[15] = inst_22829);
(statearr_23008[16] = inst_22827);
(statearr_23008[17] = inst_22828);
return statearr_23008;
})();var statearr_23009_23077 = state_22949__$1;(statearr_23009_23077[2] = null);
(statearr_23009_23077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 25))
{var inst_22887 = (state_22949[12]);var inst_22888 = (state_22949[13]);var inst_22890 = (inst_22888 < inst_22887);var inst_22891 = inst_22890;var state_22949__$1 = state_22949;if(cljs.core.truth_(inst_22891))
{var statearr_23010_23078 = state_22949__$1;(statearr_23010_23078[1] = 27);
} else
{var statearr_23011_23079 = state_22949__$1;(statearr_23011_23079[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 26))
{var inst_22877 = (state_22949[19]);var inst_22935 = (state_22949[2]);var inst_22936 = cljs.core.seq.call(null,inst_22877);var state_22949__$1 = (function (){var statearr_23012 = state_22949;(statearr_23012[30] = inst_22935);
return statearr_23012;
})();if(inst_22936)
{var statearr_23013_23080 = state_22949__$1;(statearr_23013_23080[1] = 42);
} else
{var statearr_23014_23081 = state_22949__$1;(statearr_23014_23081[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 27))
{var inst_22886 = (state_22949[11]);var inst_22888 = (state_22949[13]);var inst_22893 = cljs.core._nth.call(null,inst_22886,inst_22888);var state_22949__$1 = (function (){var statearr_23015 = state_22949;(statearr_23015[7] = inst_22893);
return statearr_23015;
})();var statearr_23016_23082 = state_22949__$1;(statearr_23016_23082[2] = null);
(statearr_23016_23082[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 28))
{var inst_22885 = (state_22949[10]);var inst_22906 = (state_22949[9]);var inst_22906__$1 = cljs.core.seq.call(null,inst_22885);var state_22949__$1 = (function (){var statearr_23020 = state_22949;(statearr_23020[9] = inst_22906__$1);
return statearr_23020;
})();if(inst_22906__$1)
{var statearr_23021_23083 = state_22949__$1;(statearr_23021_23083[1] = 33);
} else
{var statearr_23022_23084 = state_22949__$1;(statearr_23022_23084[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 29))
{var inst_22933 = (state_22949[2]);var state_22949__$1 = state_22949;var statearr_23023_23085 = state_22949__$1;(statearr_23023_23085[2] = inst_22933);
(statearr_23023_23085[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 30))
{var inst_22885 = (state_22949[10]);var inst_22886 = (state_22949[11]);var inst_22887 = (state_22949[12]);var inst_22888 = (state_22949[13]);var inst_22902 = (state_22949[2]);var inst_22903 = (inst_22888 + 1);var tmp23017 = inst_22885;var tmp23018 = inst_22886;var tmp23019 = inst_22887;var inst_22885__$1 = tmp23017;var inst_22886__$1 = tmp23018;var inst_22887__$1 = tmp23019;var inst_22888__$1 = inst_22903;var state_22949__$1 = (function (){var statearr_23024 = state_22949;(statearr_23024[10] = inst_22885__$1);
(statearr_23024[11] = inst_22886__$1);
(statearr_23024[12] = inst_22887__$1);
(statearr_23024[13] = inst_22888__$1);
(statearr_23024[31] = inst_22902);
return statearr_23024;
})();var statearr_23025_23086 = state_22949__$1;(statearr_23025_23086[2] = null);
(statearr_23025_23086[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22950 === 31))
{var inst_22893 = (state_22949[7]);var inst_22894 = (state_22949[2]);var inst_22895 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22896 = cljs.core.async.untap_STAR_.call(null,m,inst_22893);var state_22949__$1 = (function (){var statearr_23026 = state_22949;(statearr_23026[32] = inst_22895);
(statearr_23026[33] = inst_22894);
return statearr_23026;
})();var statearr_23027_23087 = state_22949__$1;(statearr_23027_23087[2] = inst_22896);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22949__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_23031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23031[0] = state_machine__13648__auto__);
(statearr_23031[1] = 1);
return statearr_23031;
});
var state_machine__13648__auto____1 = (function (state_22949){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_22949);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e23032){if((e23032 instanceof Object))
{var ex__13651__auto__ = e23032;var statearr_23033_23088 = state_22949;(statearr_23033_23088[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23089 = state_22949;
state_22949 = G__23089;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_22949){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_22949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_23034 = f__13746__auto__.call(null);(statearr_23034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___23035);
return statearr_23034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj23091 = {};return obj23091;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7850__auto__ = m;if(and__7850__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7850__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8483__auto__ = (((m == null))?null:m);return (function (){var or__7862__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23201 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23201 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23202){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta23202 = meta23202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23201.cljs$lang$type = true;
cljs.core.async.t23201.cljs$lang$ctorStr = "cljs.core.async/t23201";
cljs.core.async.t23201.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t23201");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23201.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23203){var self__ = this;
var _23203__$1 = this;return self__.meta23202;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23203,meta23202__$1){var self__ = this;
var _23203__$1 = this;return (new cljs.core.async.t23201(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23202__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23201 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23201(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23202){return (new cljs.core.async.t23201(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23202));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23201(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13745__auto___23310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_23268){var state_val_23269 = (state_23268[1]);if((state_val_23269 === 1))
{var inst_23207 = (state_23268[7]);var inst_23207__$1 = calc_state.call(null);var inst_23208 = cljs.core.seq_QMARK_.call(null,inst_23207__$1);var state_23268__$1 = (function (){var statearr_23270 = state_23268;(statearr_23270[7] = inst_23207__$1);
return statearr_23270;
})();if(inst_23208)
{var statearr_23271_23311 = state_23268__$1;(statearr_23271_23311[1] = 2);
} else
{var statearr_23272_23312 = state_23268__$1;(statearr_23272_23312[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 2))
{var inst_23207 = (state_23268[7]);var inst_23210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23207);var state_23268__$1 = state_23268;var statearr_23273_23313 = state_23268__$1;(statearr_23273_23313[2] = inst_23210);
(statearr_23273_23313[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 3))
{var inst_23207 = (state_23268[7]);var state_23268__$1 = state_23268;var statearr_23274_23314 = state_23268__$1;(statearr_23274_23314[2] = inst_23207);
(statearr_23274_23314[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 4))
{var inst_23207 = (state_23268[7]);var inst_23213 = (state_23268[2]);var inst_23214 = cljs.core.get.call(null,inst_23213,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23215 = cljs.core.get.call(null,inst_23213,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23216 = cljs.core.get.call(null,inst_23213,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_23217 = inst_23207;var state_23268__$1 = (function (){var statearr_23275 = state_23268;(statearr_23275[8] = inst_23215);
(statearr_23275[9] = inst_23216);
(statearr_23275[10] = inst_23217);
(statearr_23275[11] = inst_23214);
return statearr_23275;
})();var statearr_23276_23315 = state_23268__$1;(statearr_23276_23315[2] = null);
(statearr_23276_23315[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 5))
{var inst_23217 = (state_23268[10]);var inst_23220 = cljs.core.seq_QMARK_.call(null,inst_23217);var state_23268__$1 = state_23268;if(inst_23220)
{var statearr_23277_23316 = state_23268__$1;(statearr_23277_23316[1] = 7);
} else
{var statearr_23278_23317 = state_23268__$1;(statearr_23278_23317[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 6))
{var inst_23266 = (state_23268[2]);var state_23268__$1 = state_23268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23268__$1,inst_23266);
} else
{if((state_val_23269 === 7))
{var inst_23217 = (state_23268[10]);var inst_23222 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23217);var state_23268__$1 = state_23268;var statearr_23279_23318 = state_23268__$1;(statearr_23279_23318[2] = inst_23222);
(statearr_23279_23318[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 8))
{var inst_23217 = (state_23268[10]);var state_23268__$1 = state_23268;var statearr_23280_23319 = state_23268__$1;(statearr_23280_23319[2] = inst_23217);
(statearr_23280_23319[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 9))
{var inst_23225 = (state_23268[12]);var inst_23225__$1 = (state_23268[2]);var inst_23226 = cljs.core.get.call(null,inst_23225__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23227 = cljs.core.get.call(null,inst_23225__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23228 = cljs.core.get.call(null,inst_23225__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_23268__$1 = (function (){var statearr_23281 = state_23268;(statearr_23281[13] = inst_23227);
(statearr_23281[14] = inst_23228);
(statearr_23281[12] = inst_23225__$1);
return statearr_23281;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23268__$1,10,inst_23226);
} else
{if((state_val_23269 === 10))
{var inst_23232 = (state_23268[15]);var inst_23233 = (state_23268[16]);var inst_23231 = (state_23268[2]);var inst_23232__$1 = cljs.core.nth.call(null,inst_23231,0,null);var inst_23233__$1 = cljs.core.nth.call(null,inst_23231,1,null);var inst_23234 = (inst_23232__$1 == null);var inst_23235 = cljs.core._EQ_.call(null,inst_23233__$1,change);var inst_23236 = (inst_23234) || (inst_23235);var state_23268__$1 = (function (){var statearr_23282 = state_23268;(statearr_23282[15] = inst_23232__$1);
(statearr_23282[16] = inst_23233__$1);
return statearr_23282;
})();if(cljs.core.truth_(inst_23236))
{var statearr_23283_23320 = state_23268__$1;(statearr_23283_23320[1] = 11);
} else
{var statearr_23284_23321 = state_23268__$1;(statearr_23284_23321[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 11))
{var inst_23232 = (state_23268[15]);var inst_23238 = (inst_23232 == null);var state_23268__$1 = state_23268;if(cljs.core.truth_(inst_23238))
{var statearr_23285_23322 = state_23268__$1;(statearr_23285_23322[1] = 14);
} else
{var statearr_23286_23323 = state_23268__$1;(statearr_23286_23323[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 12))
{var inst_23247 = (state_23268[17]);var inst_23228 = (state_23268[14]);var inst_23233 = (state_23268[16]);var inst_23247__$1 = inst_23228.call(null,inst_23233);var state_23268__$1 = (function (){var statearr_23287 = state_23268;(statearr_23287[17] = inst_23247__$1);
return statearr_23287;
})();if(cljs.core.truth_(inst_23247__$1))
{var statearr_23288_23324 = state_23268__$1;(statearr_23288_23324[1] = 17);
} else
{var statearr_23289_23325 = state_23268__$1;(statearr_23289_23325[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 13))
{var inst_23264 = (state_23268[2]);var state_23268__$1 = state_23268;var statearr_23290_23326 = state_23268__$1;(statearr_23290_23326[2] = inst_23264);
(statearr_23290_23326[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 14))
{var inst_23233 = (state_23268[16]);var inst_23240 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23233);var state_23268__$1 = state_23268;var statearr_23291_23327 = state_23268__$1;(statearr_23291_23327[2] = inst_23240);
(statearr_23291_23327[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 15))
{var state_23268__$1 = state_23268;var statearr_23292_23328 = state_23268__$1;(statearr_23292_23328[2] = null);
(statearr_23292_23328[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 16))
{var inst_23243 = (state_23268[2]);var inst_23244 = calc_state.call(null);var inst_23217 = inst_23244;var state_23268__$1 = (function (){var statearr_23293 = state_23268;(statearr_23293[18] = inst_23243);
(statearr_23293[10] = inst_23217);
return statearr_23293;
})();var statearr_23294_23329 = state_23268__$1;(statearr_23294_23329[2] = null);
(statearr_23294_23329[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 17))
{var inst_23247 = (state_23268[17]);var state_23268__$1 = state_23268;var statearr_23295_23330 = state_23268__$1;(statearr_23295_23330[2] = inst_23247);
(statearr_23295_23330[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 18))
{var inst_23227 = (state_23268[13]);var inst_23228 = (state_23268[14]);var inst_23233 = (state_23268[16]);var inst_23250 = cljs.core.empty_QMARK_.call(null,inst_23228);var inst_23251 = inst_23227.call(null,inst_23233);var inst_23252 = cljs.core.not.call(null,inst_23251);var inst_23253 = (inst_23250) && (inst_23252);var state_23268__$1 = state_23268;var statearr_23296_23331 = state_23268__$1;(statearr_23296_23331[2] = inst_23253);
(statearr_23296_23331[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 19))
{var inst_23255 = (state_23268[2]);var state_23268__$1 = state_23268;if(cljs.core.truth_(inst_23255))
{var statearr_23297_23332 = state_23268__$1;(statearr_23297_23332[1] = 20);
} else
{var statearr_23298_23333 = state_23268__$1;(statearr_23298_23333[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 20))
{var inst_23232 = (state_23268[15]);var state_23268__$1 = state_23268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23268__$1,23,out,inst_23232);
} else
{if((state_val_23269 === 21))
{var state_23268__$1 = state_23268;var statearr_23299_23334 = state_23268__$1;(statearr_23299_23334[2] = null);
(statearr_23299_23334[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 22))
{var inst_23225 = (state_23268[12]);var inst_23261 = (state_23268[2]);var inst_23217 = inst_23225;var state_23268__$1 = (function (){var statearr_23300 = state_23268;(statearr_23300[10] = inst_23217);
(statearr_23300[19] = inst_23261);
return statearr_23300;
})();var statearr_23301_23335 = state_23268__$1;(statearr_23301_23335[2] = null);
(statearr_23301_23335[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23269 === 23))
{var inst_23258 = (state_23268[2]);var state_23268__$1 = state_23268;var statearr_23302_23336 = state_23268__$1;(statearr_23302_23336[2] = inst_23258);
(statearr_23302_23336[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_23306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23306[0] = state_machine__13648__auto__);
(statearr_23306[1] = 1);
return statearr_23306;
});
var state_machine__13648__auto____1 = (function (state_23268){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_23268);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e23307){if((e23307 instanceof Object))
{var ex__13651__auto__ = e23307;var statearr_23308_23337 = state_23268;(statearr_23308_23337[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23268);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23338 = state_23268;
state_23268 = G__23338;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_23268){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_23268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_23309 = f__13746__auto__.call(null);(statearr_23309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___23310);
return statearr_23309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj23340 = {};return obj23340;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7850__auto__ = p;if(and__7850__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7850__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8483__auto__ = (((p == null))?null:p);return (function (){var or__7862__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7850__auto__ = p;if(and__7850__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7850__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8483__auto__ = (((p == null))?null:p);return (function (){var or__7862__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7850__auto__ = p;if(and__7850__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7850__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8483__auto__ = (((p == null))?null:p);return (function (){var or__7862__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7850__auto__ = p;if(and__7850__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7850__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8483__auto__ = (((p == null))?null:p);return (function (){var or__7862__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8483__auto__)]);if(or__7862__auto__)
{return or__7862__auto__;
} else
{var or__7862__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7862__auto____$1)
{return or__7862__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7862__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7862__auto__,mults){
return (function (p1__23341_SHARP_){if(cljs.core.truth_(p1__23341_SHARP_.call(null,topic)))
{return p1__23341_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23341_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7862__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23466 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23467){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23467 = meta23467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23466.cljs$lang$type = true;
cljs.core.async.t23466.cljs$lang$ctorStr = "cljs.core.async/t23466";
cljs.core.async.t23466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t23466");
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23468){var self__ = this;
var _23468__$1 = this;return self__.meta23467;
});})(mults,ensure_mult))
;
cljs.core.async.t23466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23468,meta23467__$1){var self__ = this;
var _23468__$1 = this;return (new cljs.core.async.t23466(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23467__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23466 = ((function (mults,ensure_mult){
return (function __GT_t23466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23467){return (new cljs.core.async.t23466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23467));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23466(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13745__auto___23590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_23542){var state_val_23543 = (state_23542[1]);if((state_val_23543 === 1))
{var state_23542__$1 = state_23542;var statearr_23544_23591 = state_23542__$1;(statearr_23544_23591[2] = null);
(statearr_23544_23591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 2))
{var state_23542__$1 = state_23542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23542__$1,4,ch);
} else
{if((state_val_23543 === 3))
{var inst_23540 = (state_23542[2]);var state_23542__$1 = state_23542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23542__$1,inst_23540);
} else
{if((state_val_23543 === 4))
{var inst_23471 = (state_23542[7]);var inst_23471__$1 = (state_23542[2]);var inst_23472 = (inst_23471__$1 == null);var state_23542__$1 = (function (){var statearr_23545 = state_23542;(statearr_23545[7] = inst_23471__$1);
return statearr_23545;
})();if(cljs.core.truth_(inst_23472))
{var statearr_23546_23592 = state_23542__$1;(statearr_23546_23592[1] = 5);
} else
{var statearr_23547_23593 = state_23542__$1;(statearr_23547_23593[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 5))
{var inst_23478 = cljs.core.deref.call(null,mults);var inst_23479 = cljs.core.vals.call(null,inst_23478);var inst_23480 = cljs.core.seq.call(null,inst_23479);var inst_23481 = inst_23480;var inst_23482 = null;var inst_23483 = 0;var inst_23484 = 0;var state_23542__$1 = (function (){var statearr_23548 = state_23542;(statearr_23548[8] = inst_23484);
(statearr_23548[9] = inst_23482);
(statearr_23548[10] = inst_23483);
(statearr_23548[11] = inst_23481);
return statearr_23548;
})();var statearr_23549_23594 = state_23542__$1;(statearr_23549_23594[2] = null);
(statearr_23549_23594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 6))
{var inst_23471 = (state_23542[7]);var inst_23521 = (state_23542[12]);var inst_23519 = (state_23542[13]);var inst_23519__$1 = topic_fn.call(null,inst_23471);var inst_23520 = cljs.core.deref.call(null,mults);var inst_23521__$1 = cljs.core.get.call(null,inst_23520,inst_23519__$1);var state_23542__$1 = (function (){var statearr_23550 = state_23542;(statearr_23550[12] = inst_23521__$1);
(statearr_23550[13] = inst_23519__$1);
return statearr_23550;
})();if(cljs.core.truth_(inst_23521__$1))
{var statearr_23551_23595 = state_23542__$1;(statearr_23551_23595[1] = 19);
} else
{var statearr_23552_23596 = state_23542__$1;(statearr_23552_23596[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 7))
{var inst_23538 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23553_23597 = state_23542__$1;(statearr_23553_23597[2] = inst_23538);
(statearr_23553_23597[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 8))
{var inst_23484 = (state_23542[8]);var inst_23483 = (state_23542[10]);var inst_23486 = (inst_23484 < inst_23483);var inst_23487 = inst_23486;var state_23542__$1 = state_23542;if(cljs.core.truth_(inst_23487))
{var statearr_23557_23598 = state_23542__$1;(statearr_23557_23598[1] = 10);
} else
{var statearr_23558_23599 = state_23542__$1;(statearr_23558_23599[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 9))
{var inst_23517 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23559_23600 = state_23542__$1;(statearr_23559_23600[2] = inst_23517);
(statearr_23559_23600[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 10))
{var inst_23484 = (state_23542[8]);var inst_23482 = (state_23542[9]);var inst_23483 = (state_23542[10]);var inst_23481 = (state_23542[11]);var inst_23489 = cljs.core._nth.call(null,inst_23482,inst_23484);var inst_23490 = cljs.core.async.muxch_STAR_.call(null,inst_23489);var inst_23491 = cljs.core.async.close_BANG_.call(null,inst_23490);var inst_23492 = (inst_23484 + 1);var tmp23554 = inst_23482;var tmp23555 = inst_23483;var tmp23556 = inst_23481;var inst_23481__$1 = tmp23556;var inst_23482__$1 = tmp23554;var inst_23483__$1 = tmp23555;var inst_23484__$1 = inst_23492;var state_23542__$1 = (function (){var statearr_23560 = state_23542;(statearr_23560[8] = inst_23484__$1);
(statearr_23560[9] = inst_23482__$1);
(statearr_23560[10] = inst_23483__$1);
(statearr_23560[11] = inst_23481__$1);
(statearr_23560[14] = inst_23491);
return statearr_23560;
})();var statearr_23561_23601 = state_23542__$1;(statearr_23561_23601[2] = null);
(statearr_23561_23601[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 11))
{var inst_23481 = (state_23542[11]);var inst_23495 = (state_23542[15]);var inst_23495__$1 = cljs.core.seq.call(null,inst_23481);var state_23542__$1 = (function (){var statearr_23562 = state_23542;(statearr_23562[15] = inst_23495__$1);
return statearr_23562;
})();if(inst_23495__$1)
{var statearr_23563_23602 = state_23542__$1;(statearr_23563_23602[1] = 13);
} else
{var statearr_23564_23603 = state_23542__$1;(statearr_23564_23603[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 12))
{var inst_23515 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23565_23604 = state_23542__$1;(statearr_23565_23604[2] = inst_23515);
(statearr_23565_23604[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 13))
{var inst_23495 = (state_23542[15]);var inst_23497 = cljs.core.chunked_seq_QMARK_.call(null,inst_23495);var state_23542__$1 = state_23542;if(inst_23497)
{var statearr_23566_23605 = state_23542__$1;(statearr_23566_23605[1] = 16);
} else
{var statearr_23567_23606 = state_23542__$1;(statearr_23567_23606[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 14))
{var state_23542__$1 = state_23542;var statearr_23568_23607 = state_23542__$1;(statearr_23568_23607[2] = null);
(statearr_23568_23607[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 15))
{var inst_23513 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23569_23608 = state_23542__$1;(statearr_23569_23608[2] = inst_23513);
(statearr_23569_23608[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 16))
{var inst_23495 = (state_23542[15]);var inst_23499 = cljs.core.chunk_first.call(null,inst_23495);var inst_23500 = cljs.core.chunk_rest.call(null,inst_23495);var inst_23501 = cljs.core.count.call(null,inst_23499);var inst_23481 = inst_23500;var inst_23482 = inst_23499;var inst_23483 = inst_23501;var inst_23484 = 0;var state_23542__$1 = (function (){var statearr_23570 = state_23542;(statearr_23570[8] = inst_23484);
(statearr_23570[9] = inst_23482);
(statearr_23570[10] = inst_23483);
(statearr_23570[11] = inst_23481);
return statearr_23570;
})();var statearr_23571_23609 = state_23542__$1;(statearr_23571_23609[2] = null);
(statearr_23571_23609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 17))
{var inst_23495 = (state_23542[15]);var inst_23504 = cljs.core.first.call(null,inst_23495);var inst_23505 = cljs.core.async.muxch_STAR_.call(null,inst_23504);var inst_23506 = cljs.core.async.close_BANG_.call(null,inst_23505);var inst_23507 = cljs.core.next.call(null,inst_23495);var inst_23481 = inst_23507;var inst_23482 = null;var inst_23483 = 0;var inst_23484 = 0;var state_23542__$1 = (function (){var statearr_23572 = state_23542;(statearr_23572[8] = inst_23484);
(statearr_23572[9] = inst_23482);
(statearr_23572[10] = inst_23483);
(statearr_23572[11] = inst_23481);
(statearr_23572[16] = inst_23506);
return statearr_23572;
})();var statearr_23573_23610 = state_23542__$1;(statearr_23573_23610[2] = null);
(statearr_23573_23610[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 18))
{var inst_23510 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23574_23611 = state_23542__$1;(statearr_23574_23611[2] = inst_23510);
(statearr_23574_23611[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 19))
{var state_23542__$1 = state_23542;var statearr_23575_23612 = state_23542__$1;(statearr_23575_23612[2] = null);
(statearr_23575_23612[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 20))
{var state_23542__$1 = state_23542;var statearr_23576_23613 = state_23542__$1;(statearr_23576_23613[2] = null);
(statearr_23576_23613[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 21))
{var inst_23535 = (state_23542[2]);var state_23542__$1 = (function (){var statearr_23577 = state_23542;(statearr_23577[17] = inst_23535);
return statearr_23577;
})();var statearr_23578_23614 = state_23542__$1;(statearr_23578_23614[2] = null);
(statearr_23578_23614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 22))
{var inst_23532 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23579_23615 = state_23542__$1;(statearr_23579_23615[2] = inst_23532);
(statearr_23579_23615[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 23))
{var inst_23519 = (state_23542[13]);var inst_23523 = (state_23542[2]);var inst_23524 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23519);var state_23542__$1 = (function (){var statearr_23580 = state_23542;(statearr_23580[18] = inst_23523);
return statearr_23580;
})();var statearr_23581_23616 = state_23542__$1;(statearr_23581_23616[2] = inst_23524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23543 === 24))
{var inst_23471 = (state_23542[7]);var inst_23521 = (state_23542[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23542,23,Object,null,22);var inst_23528 = cljs.core.async.muxch_STAR_.call(null,inst_23521);var state_23542__$1 = state_23542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23542__$1,25,inst_23528,inst_23471);
} else
{if((state_val_23543 === 25))
{var inst_23530 = (state_23542[2]);var state_23542__$1 = state_23542;var statearr_23582_23617 = state_23542__$1;(statearr_23582_23617[2] = inst_23530);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_23586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23586[0] = state_machine__13648__auto__);
(statearr_23586[1] = 1);
return statearr_23586;
});
var state_machine__13648__auto____1 = (function (state_23542){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_23542);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e23587){if((e23587 instanceof Object))
{var ex__13651__auto__ = e23587;var statearr_23588_23618 = state_23542;(statearr_23588_23618[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23619 = state_23542;
state_23542 = G__23619;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_23542){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_23542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_23589 = f__13746__auto__.call(null);(statearr_23589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___23590);
return statearr_23589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13745__auto___23756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_23726){var state_val_23727 = (state_23726[1]);if((state_val_23727 === 1))
{var state_23726__$1 = state_23726;var statearr_23728_23757 = state_23726__$1;(statearr_23728_23757[2] = null);
(statearr_23728_23757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 2))
{var inst_23689 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23690 = 0;var state_23726__$1 = (function (){var statearr_23729 = state_23726;(statearr_23729[7] = inst_23690);
(statearr_23729[8] = inst_23689);
return statearr_23729;
})();var statearr_23730_23758 = state_23726__$1;(statearr_23730_23758[2] = null);
(statearr_23730_23758[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 3))
{var inst_23724 = (state_23726[2]);var state_23726__$1 = state_23726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23726__$1,inst_23724);
} else
{if((state_val_23727 === 4))
{var inst_23690 = (state_23726[7]);var inst_23692 = (inst_23690 < cnt);var state_23726__$1 = state_23726;if(cljs.core.truth_(inst_23692))
{var statearr_23731_23759 = state_23726__$1;(statearr_23731_23759[1] = 6);
} else
{var statearr_23732_23760 = state_23726__$1;(statearr_23732_23760[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 5))
{var inst_23710 = (state_23726[2]);var state_23726__$1 = (function (){var statearr_23733 = state_23726;(statearr_23733[9] = inst_23710);
return statearr_23733;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23726__$1,12,dchan);
} else
{if((state_val_23727 === 6))
{var state_23726__$1 = state_23726;var statearr_23734_23761 = state_23726__$1;(statearr_23734_23761[2] = null);
(statearr_23734_23761[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 7))
{var state_23726__$1 = state_23726;var statearr_23735_23762 = state_23726__$1;(statearr_23735_23762[2] = null);
(statearr_23735_23762[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 8))
{var inst_23708 = (state_23726[2]);var state_23726__$1 = state_23726;var statearr_23736_23763 = state_23726__$1;(statearr_23736_23763[2] = inst_23708);
(statearr_23736_23763[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 9))
{var inst_23690 = (state_23726[7]);var inst_23703 = (state_23726[2]);var inst_23704 = (inst_23690 + 1);var inst_23690__$1 = inst_23704;var state_23726__$1 = (function (){var statearr_23737 = state_23726;(statearr_23737[10] = inst_23703);
(statearr_23737[7] = inst_23690__$1);
return statearr_23737;
})();var statearr_23738_23764 = state_23726__$1;(statearr_23738_23764[2] = null);
(statearr_23738_23764[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 10))
{var inst_23694 = (state_23726[2]);var inst_23695 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23726__$1 = (function (){var statearr_23739 = state_23726;(statearr_23739[11] = inst_23694);
return statearr_23739;
})();var statearr_23740_23765 = state_23726__$1;(statearr_23740_23765[2] = inst_23695);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23726__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 11))
{var inst_23690 = (state_23726[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23726,10,Object,null,9);var inst_23699 = chs__$1.call(null,inst_23690);var inst_23700 = done.call(null,inst_23690);var inst_23701 = cljs.core.async.take_BANG_.call(null,inst_23699,inst_23700);var state_23726__$1 = state_23726;var statearr_23741_23766 = state_23726__$1;(statearr_23741_23766[2] = inst_23701);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23726__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 12))
{var inst_23712 = (state_23726[12]);var inst_23712__$1 = (state_23726[2]);var inst_23713 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23712__$1);var state_23726__$1 = (function (){var statearr_23742 = state_23726;(statearr_23742[12] = inst_23712__$1);
return statearr_23742;
})();if(cljs.core.truth_(inst_23713))
{var statearr_23743_23767 = state_23726__$1;(statearr_23743_23767[1] = 13);
} else
{var statearr_23744_23768 = state_23726__$1;(statearr_23744_23768[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 13))
{var inst_23715 = cljs.core.async.close_BANG_.call(null,out);var state_23726__$1 = state_23726;var statearr_23745_23769 = state_23726__$1;(statearr_23745_23769[2] = inst_23715);
(statearr_23745_23769[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 14))
{var inst_23712 = (state_23726[12]);var inst_23717 = cljs.core.apply.call(null,f,inst_23712);var state_23726__$1 = state_23726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23726__$1,16,out,inst_23717);
} else
{if((state_val_23727 === 15))
{var inst_23722 = (state_23726[2]);var state_23726__$1 = state_23726;var statearr_23746_23770 = state_23726__$1;(statearr_23746_23770[2] = inst_23722);
(statearr_23746_23770[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23727 === 16))
{var inst_23719 = (state_23726[2]);var state_23726__$1 = (function (){var statearr_23747 = state_23726;(statearr_23747[13] = inst_23719);
return statearr_23747;
})();var statearr_23748_23771 = state_23726__$1;(statearr_23748_23771[2] = null);
(statearr_23748_23771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_23752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23752[0] = state_machine__13648__auto__);
(statearr_23752[1] = 1);
return statearr_23752;
});
var state_machine__13648__auto____1 = (function (state_23726){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_23726);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e23753){if((e23753 instanceof Object))
{var ex__13651__auto__ = e23753;var statearr_23754_23772 = state_23726;(statearr_23754_23772[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23773 = state_23726;
state_23726 = G__23773;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_23726){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_23726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_23755 = f__13746__auto__.call(null);(statearr_23755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___23756);
return statearr_23755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___23881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_23857){var state_val_23858 = (state_23857[1]);if((state_val_23858 === 1))
{var inst_23828 = cljs.core.vec.call(null,chs);var inst_23829 = inst_23828;var state_23857__$1 = (function (){var statearr_23859 = state_23857;(statearr_23859[7] = inst_23829);
return statearr_23859;
})();var statearr_23860_23882 = state_23857__$1;(statearr_23860_23882[2] = null);
(statearr_23860_23882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 2))
{var inst_23829 = (state_23857[7]);var inst_23831 = cljs.core.count.call(null,inst_23829);var inst_23832 = (inst_23831 > 0);var state_23857__$1 = state_23857;if(cljs.core.truth_(inst_23832))
{var statearr_23861_23883 = state_23857__$1;(statearr_23861_23883[1] = 4);
} else
{var statearr_23862_23884 = state_23857__$1;(statearr_23862_23884[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 3))
{var inst_23855 = (state_23857[2]);var state_23857__$1 = state_23857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23857__$1,inst_23855);
} else
{if((state_val_23858 === 4))
{var inst_23829 = (state_23857[7]);var state_23857__$1 = state_23857;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23857__$1,7,inst_23829);
} else
{if((state_val_23858 === 5))
{var inst_23851 = cljs.core.async.close_BANG_.call(null,out);var state_23857__$1 = state_23857;var statearr_23863_23885 = state_23857__$1;(statearr_23863_23885[2] = inst_23851);
(statearr_23863_23885[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 6))
{var inst_23853 = (state_23857[2]);var state_23857__$1 = state_23857;var statearr_23864_23886 = state_23857__$1;(statearr_23864_23886[2] = inst_23853);
(statearr_23864_23886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 7))
{var inst_23836 = (state_23857[8]);var inst_23837 = (state_23857[9]);var inst_23836__$1 = (state_23857[2]);var inst_23837__$1 = cljs.core.nth.call(null,inst_23836__$1,0,null);var inst_23838 = cljs.core.nth.call(null,inst_23836__$1,1,null);var inst_23839 = (inst_23837__$1 == null);var state_23857__$1 = (function (){var statearr_23865 = state_23857;(statearr_23865[8] = inst_23836__$1);
(statearr_23865[10] = inst_23838);
(statearr_23865[9] = inst_23837__$1);
return statearr_23865;
})();if(cljs.core.truth_(inst_23839))
{var statearr_23866_23887 = state_23857__$1;(statearr_23866_23887[1] = 8);
} else
{var statearr_23867_23888 = state_23857__$1;(statearr_23867_23888[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 8))
{var inst_23829 = (state_23857[7]);var inst_23836 = (state_23857[8]);var inst_23838 = (state_23857[10]);var inst_23837 = (state_23857[9]);var inst_23841 = (function (){var c = inst_23838;var v = inst_23837;var vec__23834 = inst_23836;var cs = inst_23829;return ((function (c,v,vec__23834,cs,inst_23829,inst_23836,inst_23838,inst_23837,state_val_23858){
return (function (p1__23774_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23774_SHARP_);
});
;})(c,v,vec__23834,cs,inst_23829,inst_23836,inst_23838,inst_23837,state_val_23858))
})();var inst_23842 = cljs.core.filterv.call(null,inst_23841,inst_23829);var inst_23829__$1 = inst_23842;var state_23857__$1 = (function (){var statearr_23868 = state_23857;(statearr_23868[7] = inst_23829__$1);
return statearr_23868;
})();var statearr_23869_23889 = state_23857__$1;(statearr_23869_23889[2] = null);
(statearr_23869_23889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 9))
{var inst_23837 = (state_23857[9]);var state_23857__$1 = state_23857;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23857__$1,11,out,inst_23837);
} else
{if((state_val_23858 === 10))
{var inst_23849 = (state_23857[2]);var state_23857__$1 = state_23857;var statearr_23871_23890 = state_23857__$1;(statearr_23871_23890[2] = inst_23849);
(statearr_23871_23890[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23858 === 11))
{var inst_23829 = (state_23857[7]);var inst_23846 = (state_23857[2]);var tmp23870 = inst_23829;var inst_23829__$1 = tmp23870;var state_23857__$1 = (function (){var statearr_23872 = state_23857;(statearr_23872[11] = inst_23846);
(statearr_23872[7] = inst_23829__$1);
return statearr_23872;
})();var statearr_23873_23891 = state_23857__$1;(statearr_23873_23891[2] = null);
(statearr_23873_23891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_23877 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23877[0] = state_machine__13648__auto__);
(statearr_23877[1] = 1);
return statearr_23877;
});
var state_machine__13648__auto____1 = (function (state_23857){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_23857);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e23878){if((e23878 instanceof Object))
{var ex__13651__auto__ = e23878;var statearr_23879_23892 = state_23857;(statearr_23879_23892[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23857);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23893 = state_23857;
state_23857 = G__23893;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_23857){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_23857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_23880 = f__13746__auto__.call(null);(statearr_23880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___23881);
return statearr_23880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___23986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_23963){var state_val_23964 = (state_23963[1]);if((state_val_23964 === 1))
{var inst_23940 = 0;var state_23963__$1 = (function (){var statearr_23965 = state_23963;(statearr_23965[7] = inst_23940);
return statearr_23965;
})();var statearr_23966_23987 = state_23963__$1;(statearr_23966_23987[2] = null);
(statearr_23966_23987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 2))
{var inst_23940 = (state_23963[7]);var inst_23942 = (inst_23940 < n);var state_23963__$1 = state_23963;if(cljs.core.truth_(inst_23942))
{var statearr_23967_23988 = state_23963__$1;(statearr_23967_23988[1] = 4);
} else
{var statearr_23968_23989 = state_23963__$1;(statearr_23968_23989[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 3))
{var inst_23960 = (state_23963[2]);var inst_23961 = cljs.core.async.close_BANG_.call(null,out);var state_23963__$1 = (function (){var statearr_23969 = state_23963;(statearr_23969[8] = inst_23960);
return statearr_23969;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23963__$1,inst_23961);
} else
{if((state_val_23964 === 4))
{var state_23963__$1 = state_23963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23963__$1,7,ch);
} else
{if((state_val_23964 === 5))
{var state_23963__$1 = state_23963;var statearr_23970_23990 = state_23963__$1;(statearr_23970_23990[2] = null);
(statearr_23970_23990[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 6))
{var inst_23958 = (state_23963[2]);var state_23963__$1 = state_23963;var statearr_23971_23991 = state_23963__$1;(statearr_23971_23991[2] = inst_23958);
(statearr_23971_23991[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 7))
{var inst_23945 = (state_23963[9]);var inst_23945__$1 = (state_23963[2]);var inst_23946 = (inst_23945__$1 == null);var inst_23947 = cljs.core.not.call(null,inst_23946);var state_23963__$1 = (function (){var statearr_23972 = state_23963;(statearr_23972[9] = inst_23945__$1);
return statearr_23972;
})();if(inst_23947)
{var statearr_23973_23992 = state_23963__$1;(statearr_23973_23992[1] = 8);
} else
{var statearr_23974_23993 = state_23963__$1;(statearr_23974_23993[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 8))
{var inst_23945 = (state_23963[9]);var state_23963__$1 = state_23963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23963__$1,11,out,inst_23945);
} else
{if((state_val_23964 === 9))
{var state_23963__$1 = state_23963;var statearr_23975_23994 = state_23963__$1;(statearr_23975_23994[2] = null);
(statearr_23975_23994[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 10))
{var inst_23955 = (state_23963[2]);var state_23963__$1 = state_23963;var statearr_23976_23995 = state_23963__$1;(statearr_23976_23995[2] = inst_23955);
(statearr_23976_23995[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23964 === 11))
{var inst_23940 = (state_23963[7]);var inst_23950 = (state_23963[2]);var inst_23951 = (inst_23940 + 1);var inst_23940__$1 = inst_23951;var state_23963__$1 = (function (){var statearr_23977 = state_23963;(statearr_23977[10] = inst_23950);
(statearr_23977[7] = inst_23940__$1);
return statearr_23977;
})();var statearr_23978_23996 = state_23963__$1;(statearr_23978_23996[2] = null);
(statearr_23978_23996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_23982 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23982[0] = state_machine__13648__auto__);
(statearr_23982[1] = 1);
return statearr_23982;
});
var state_machine__13648__auto____1 = (function (state_23963){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_23963);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object))
{var ex__13651__auto__ = e23983;var statearr_23984_23997 = state_23963;(statearr_23984_23997[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23998 = state_23963;
state_23963 = G__23998;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_23963){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_23963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_23985 = f__13746__auto__.call(null);(statearr_23985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___23986);
return statearr_23985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___24095 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_24070){var state_val_24071 = (state_24070[1]);if((state_val_24071 === 1))
{var inst_24047 = null;var state_24070__$1 = (function (){var statearr_24072 = state_24070;(statearr_24072[7] = inst_24047);
return statearr_24072;
})();var statearr_24073_24096 = state_24070__$1;(statearr_24073_24096[2] = null);
(statearr_24073_24096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 2))
{var state_24070__$1 = state_24070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24070__$1,4,ch);
} else
{if((state_val_24071 === 3))
{var inst_24067 = (state_24070[2]);var inst_24068 = cljs.core.async.close_BANG_.call(null,out);var state_24070__$1 = (function (){var statearr_24074 = state_24070;(statearr_24074[8] = inst_24067);
return statearr_24074;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24070__$1,inst_24068);
} else
{if((state_val_24071 === 4))
{var inst_24050 = (state_24070[9]);var inst_24050__$1 = (state_24070[2]);var inst_24051 = (inst_24050__$1 == null);var inst_24052 = cljs.core.not.call(null,inst_24051);var state_24070__$1 = (function (){var statearr_24075 = state_24070;(statearr_24075[9] = inst_24050__$1);
return statearr_24075;
})();if(inst_24052)
{var statearr_24076_24097 = state_24070__$1;(statearr_24076_24097[1] = 5);
} else
{var statearr_24077_24098 = state_24070__$1;(statearr_24077_24098[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 5))
{var inst_24050 = (state_24070[9]);var inst_24047 = (state_24070[7]);var inst_24054 = cljs.core._EQ_.call(null,inst_24050,inst_24047);var state_24070__$1 = state_24070;if(inst_24054)
{var statearr_24078_24099 = state_24070__$1;(statearr_24078_24099[1] = 8);
} else
{var statearr_24079_24100 = state_24070__$1;(statearr_24079_24100[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 6))
{var state_24070__$1 = state_24070;var statearr_24081_24101 = state_24070__$1;(statearr_24081_24101[2] = null);
(statearr_24081_24101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 7))
{var inst_24065 = (state_24070[2]);var state_24070__$1 = state_24070;var statearr_24082_24102 = state_24070__$1;(statearr_24082_24102[2] = inst_24065);
(statearr_24082_24102[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 8))
{var inst_24047 = (state_24070[7]);var tmp24080 = inst_24047;var inst_24047__$1 = tmp24080;var state_24070__$1 = (function (){var statearr_24083 = state_24070;(statearr_24083[7] = inst_24047__$1);
return statearr_24083;
})();var statearr_24084_24103 = state_24070__$1;(statearr_24084_24103[2] = null);
(statearr_24084_24103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 9))
{var inst_24050 = (state_24070[9]);var state_24070__$1 = state_24070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24070__$1,11,out,inst_24050);
} else
{if((state_val_24071 === 10))
{var inst_24062 = (state_24070[2]);var state_24070__$1 = state_24070;var statearr_24085_24104 = state_24070__$1;(statearr_24085_24104[2] = inst_24062);
(statearr_24085_24104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24071 === 11))
{var inst_24050 = (state_24070[9]);var inst_24059 = (state_24070[2]);var inst_24047 = inst_24050;var state_24070__$1 = (function (){var statearr_24086 = state_24070;(statearr_24086[10] = inst_24059);
(statearr_24086[7] = inst_24047);
return statearr_24086;
})();var statearr_24087_24105 = state_24070__$1;(statearr_24087_24105[2] = null);
(statearr_24087_24105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_24091 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24091[0] = state_machine__13648__auto__);
(statearr_24091[1] = 1);
return statearr_24091;
});
var state_machine__13648__auto____1 = (function (state_24070){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_24070);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e24092){if((e24092 instanceof Object))
{var ex__13651__auto__ = e24092;var statearr_24093_24106 = state_24070;(statearr_24093_24106[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24107 = state_24070;
state_24070 = G__24107;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_24070){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_24070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_24094 = f__13746__auto__.call(null);(statearr_24094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___24095);
return statearr_24094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___24242 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_24212){var state_val_24213 = (state_24212[1]);if((state_val_24213 === 1))
{var inst_24175 = (new Array(n));var inst_24176 = inst_24175;var inst_24177 = 0;var state_24212__$1 = (function (){var statearr_24214 = state_24212;(statearr_24214[7] = inst_24177);
(statearr_24214[8] = inst_24176);
return statearr_24214;
})();var statearr_24215_24243 = state_24212__$1;(statearr_24215_24243[2] = null);
(statearr_24215_24243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 2))
{var state_24212__$1 = state_24212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24212__$1,4,ch);
} else
{if((state_val_24213 === 3))
{var inst_24210 = (state_24212[2]);var state_24212__$1 = state_24212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24212__$1,inst_24210);
} else
{if((state_val_24213 === 4))
{var inst_24180 = (state_24212[9]);var inst_24180__$1 = (state_24212[2]);var inst_24181 = (inst_24180__$1 == null);var inst_24182 = cljs.core.not.call(null,inst_24181);var state_24212__$1 = (function (){var statearr_24216 = state_24212;(statearr_24216[9] = inst_24180__$1);
return statearr_24216;
})();if(inst_24182)
{var statearr_24217_24244 = state_24212__$1;(statearr_24217_24244[1] = 5);
} else
{var statearr_24218_24245 = state_24212__$1;(statearr_24218_24245[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 5))
{var inst_24177 = (state_24212[7]);var inst_24180 = (state_24212[9]);var inst_24176 = (state_24212[8]);var inst_24185 = (state_24212[10]);var inst_24184 = (inst_24176[inst_24177] = inst_24180);var inst_24185__$1 = (inst_24177 + 1);var inst_24186 = (inst_24185__$1 < n);var state_24212__$1 = (function (){var statearr_24219 = state_24212;(statearr_24219[10] = inst_24185__$1);
(statearr_24219[11] = inst_24184);
return statearr_24219;
})();if(cljs.core.truth_(inst_24186))
{var statearr_24220_24246 = state_24212__$1;(statearr_24220_24246[1] = 8);
} else
{var statearr_24221_24247 = state_24212__$1;(statearr_24221_24247[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 6))
{var inst_24177 = (state_24212[7]);var inst_24198 = (inst_24177 > 0);var state_24212__$1 = state_24212;if(cljs.core.truth_(inst_24198))
{var statearr_24223_24248 = state_24212__$1;(statearr_24223_24248[1] = 12);
} else
{var statearr_24224_24249 = state_24212__$1;(statearr_24224_24249[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 7))
{var inst_24208 = (state_24212[2]);var state_24212__$1 = state_24212;var statearr_24225_24250 = state_24212__$1;(statearr_24225_24250[2] = inst_24208);
(statearr_24225_24250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 8))
{var inst_24176 = (state_24212[8]);var inst_24185 = (state_24212[10]);var tmp24222 = inst_24176;var inst_24176__$1 = tmp24222;var inst_24177 = inst_24185;var state_24212__$1 = (function (){var statearr_24226 = state_24212;(statearr_24226[7] = inst_24177);
(statearr_24226[8] = inst_24176__$1);
return statearr_24226;
})();var statearr_24227_24251 = state_24212__$1;(statearr_24227_24251[2] = null);
(statearr_24227_24251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 9))
{var inst_24176 = (state_24212[8]);var inst_24190 = cljs.core.vec.call(null,inst_24176);var state_24212__$1 = state_24212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24212__$1,11,out,inst_24190);
} else
{if((state_val_24213 === 10))
{var inst_24196 = (state_24212[2]);var state_24212__$1 = state_24212;var statearr_24228_24252 = state_24212__$1;(statearr_24228_24252[2] = inst_24196);
(statearr_24228_24252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 11))
{var inst_24192 = (state_24212[2]);var inst_24193 = (new Array(n));var inst_24176 = inst_24193;var inst_24177 = 0;var state_24212__$1 = (function (){var statearr_24229 = state_24212;(statearr_24229[12] = inst_24192);
(statearr_24229[7] = inst_24177);
(statearr_24229[8] = inst_24176);
return statearr_24229;
})();var statearr_24230_24253 = state_24212__$1;(statearr_24230_24253[2] = null);
(statearr_24230_24253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 12))
{var inst_24176 = (state_24212[8]);var inst_24200 = cljs.core.vec.call(null,inst_24176);var state_24212__$1 = state_24212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24212__$1,15,out,inst_24200);
} else
{if((state_val_24213 === 13))
{var state_24212__$1 = state_24212;var statearr_24231_24254 = state_24212__$1;(statearr_24231_24254[2] = null);
(statearr_24231_24254[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 14))
{var inst_24205 = (state_24212[2]);var inst_24206 = cljs.core.async.close_BANG_.call(null,out);var state_24212__$1 = (function (){var statearr_24232 = state_24212;(statearr_24232[13] = inst_24205);
return statearr_24232;
})();var statearr_24233_24255 = state_24212__$1;(statearr_24233_24255[2] = inst_24206);
(statearr_24233_24255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24213 === 15))
{var inst_24202 = (state_24212[2]);var state_24212__$1 = state_24212;var statearr_24234_24256 = state_24212__$1;(statearr_24234_24256[2] = inst_24202);
(statearr_24234_24256[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_24238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24238[0] = state_machine__13648__auto__);
(statearr_24238[1] = 1);
return statearr_24238;
});
var state_machine__13648__auto____1 = (function (state_24212){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_24212);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e24239){if((e24239 instanceof Object))
{var ex__13651__auto__ = e24239;var statearr_24240_24257 = state_24212;(statearr_24240_24257[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24258 = state_24212;
state_24212 = G__24258;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_24212){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_24212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_24241 = f__13746__auto__.call(null);(statearr_24241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___24242);
return statearr_24241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___24401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_24371){var state_val_24372 = (state_24371[1]);if((state_val_24372 === 1))
{var inst_24330 = [];var inst_24331 = inst_24330;var inst_24332 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_24371__$1 = (function (){var statearr_24373 = state_24371;(statearr_24373[7] = inst_24331);
(statearr_24373[8] = inst_24332);
return statearr_24373;
})();var statearr_24374_24402 = state_24371__$1;(statearr_24374_24402[2] = null);
(statearr_24374_24402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 2))
{var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24371__$1,4,ch);
} else
{if((state_val_24372 === 3))
{var inst_24369 = (state_24371[2]);var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24371__$1,inst_24369);
} else
{if((state_val_24372 === 4))
{var inst_24335 = (state_24371[9]);var inst_24335__$1 = (state_24371[2]);var inst_24336 = (inst_24335__$1 == null);var inst_24337 = cljs.core.not.call(null,inst_24336);var state_24371__$1 = (function (){var statearr_24375 = state_24371;(statearr_24375[9] = inst_24335__$1);
return statearr_24375;
})();if(inst_24337)
{var statearr_24376_24403 = state_24371__$1;(statearr_24376_24403[1] = 5);
} else
{var statearr_24377_24404 = state_24371__$1;(statearr_24377_24404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 5))
{var inst_24335 = (state_24371[9]);var inst_24332 = (state_24371[8]);var inst_24339 = (state_24371[10]);var inst_24339__$1 = f.call(null,inst_24335);var inst_24340 = cljs.core._EQ_.call(null,inst_24339__$1,inst_24332);var inst_24341 = cljs.core.keyword_identical_QMARK_.call(null,inst_24332,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_24342 = (inst_24340) || (inst_24341);var state_24371__$1 = (function (){var statearr_24378 = state_24371;(statearr_24378[10] = inst_24339__$1);
return statearr_24378;
})();if(cljs.core.truth_(inst_24342))
{var statearr_24379_24405 = state_24371__$1;(statearr_24379_24405[1] = 8);
} else
{var statearr_24380_24406 = state_24371__$1;(statearr_24380_24406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 6))
{var inst_24331 = (state_24371[7]);var inst_24356 = inst_24331.length;var inst_24357 = (inst_24356 > 0);var state_24371__$1 = state_24371;if(cljs.core.truth_(inst_24357))
{var statearr_24382_24407 = state_24371__$1;(statearr_24382_24407[1] = 12);
} else
{var statearr_24383_24408 = state_24371__$1;(statearr_24383_24408[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 7))
{var inst_24367 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24384_24409 = state_24371__$1;(statearr_24384_24409[2] = inst_24367);
(statearr_24384_24409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 8))
{var inst_24335 = (state_24371[9]);var inst_24331 = (state_24371[7]);var inst_24339 = (state_24371[10]);var inst_24344 = inst_24331.push(inst_24335);var tmp24381 = inst_24331;var inst_24331__$1 = tmp24381;var inst_24332 = inst_24339;var state_24371__$1 = (function (){var statearr_24385 = state_24371;(statearr_24385[7] = inst_24331__$1);
(statearr_24385[8] = inst_24332);
(statearr_24385[11] = inst_24344);
return statearr_24385;
})();var statearr_24386_24410 = state_24371__$1;(statearr_24386_24410[2] = null);
(statearr_24386_24410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 9))
{var inst_24331 = (state_24371[7]);var inst_24347 = cljs.core.vec.call(null,inst_24331);var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24371__$1,11,out,inst_24347);
} else
{if((state_val_24372 === 10))
{var inst_24354 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24387_24411 = state_24371__$1;(statearr_24387_24411[2] = inst_24354);
(statearr_24387_24411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 11))
{var inst_24335 = (state_24371[9]);var inst_24339 = (state_24371[10]);var inst_24349 = (state_24371[2]);var inst_24350 = [];var inst_24351 = inst_24350.push(inst_24335);var inst_24331 = inst_24350;var inst_24332 = inst_24339;var state_24371__$1 = (function (){var statearr_24388 = state_24371;(statearr_24388[7] = inst_24331);
(statearr_24388[8] = inst_24332);
(statearr_24388[12] = inst_24349);
(statearr_24388[13] = inst_24351);
return statearr_24388;
})();var statearr_24389_24412 = state_24371__$1;(statearr_24389_24412[2] = null);
(statearr_24389_24412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 12))
{var inst_24331 = (state_24371[7]);var inst_24359 = cljs.core.vec.call(null,inst_24331);var state_24371__$1 = state_24371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24371__$1,15,out,inst_24359);
} else
{if((state_val_24372 === 13))
{var state_24371__$1 = state_24371;var statearr_24390_24413 = state_24371__$1;(statearr_24390_24413[2] = null);
(statearr_24390_24413[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 14))
{var inst_24364 = (state_24371[2]);var inst_24365 = cljs.core.async.close_BANG_.call(null,out);var state_24371__$1 = (function (){var statearr_24391 = state_24371;(statearr_24391[14] = inst_24364);
return statearr_24391;
})();var statearr_24392_24414 = state_24371__$1;(statearr_24392_24414[2] = inst_24365);
(statearr_24392_24414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24372 === 15))
{var inst_24361 = (state_24371[2]);var state_24371__$1 = state_24371;var statearr_24393_24415 = state_24371__$1;(statearr_24393_24415[2] = inst_24361);
(statearr_24393_24415[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__13647__auto__){
return (function() {
var state_machine__13648__auto__ = null;
var state_machine__13648__auto____0 = (function (){var statearr_24397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24397[0] = state_machine__13648__auto__);
(statearr_24397[1] = 1);
return statearr_24397;
});
var state_machine__13648__auto____1 = (function (state_24371){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_24371);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e24398){if((e24398 instanceof Object))
{var ex__13651__auto__ = e24398;var statearr_24399_24416 = state_24371;(statearr_24399_24416[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24417 = state_24371;
state_24371 = G__24417;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_24371){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_24371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_24400 = f__13746__auto__.call(null);(statearr_24400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___24401);
return statearr_24400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13747__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
