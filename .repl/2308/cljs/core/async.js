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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34851 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34851 = (function (f,fn_handler,meta34852){
this.f = f;
this.fn_handler = fn_handler;
this.meta34852 = meta34852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34851.cljs$lang$type = true;
cljs.core.async.t34851.cljs$lang$ctorStr = "cljs.core.async/t34851";
cljs.core.async.t34851.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34851");
});
cljs.core.async.t34851.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34853){var self__ = this;
var _34853__$1 = this;return self__.meta34852;
});
cljs.core.async.t34851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34853,meta34852__$1){var self__ = this;
var _34853__$1 = this;return (new cljs.core.async.t34851(self__.f,self__.fn_handler,meta34852__$1));
});
cljs.core.async.__GT_t34851 = (function __GT_t34851(f__$1,fn_handler__$1,meta34852){return (new cljs.core.async.t34851(f__$1,fn_handler__$1,meta34852));
});
}
return (new cljs.core.async.t34851(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34855 = buff;if(G__34855)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__34855.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34855.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34855);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34855);
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
{var val_34856 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34856);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34856);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8704__auto___34857 = n;var x_34858 = 0;while(true){
if((x_34858 < n__8704__auto___34857))
{(a[x_34858] = 0);
{
var G__34859 = (x_34858 + 1);
x_34858 = G__34859;
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
var G__34860 = (i + 1);
i = G__34860;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34864 = (function (flag,alt_flag,meta34865){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34865 = meta34865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34864.cljs$lang$type = true;
cljs.core.async.t34864.cljs$lang$ctorStr = "cljs.core.async/t34864";
cljs.core.async.t34864.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34864");
});
cljs.core.async.t34864.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34866){var self__ = this;
var _34866__$1 = this;return self__.meta34865;
});
cljs.core.async.t34864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34866,meta34865__$1){var self__ = this;
var _34866__$1 = this;return (new cljs.core.async.t34864(self__.flag,self__.alt_flag,meta34865__$1));
});
cljs.core.async.__GT_t34864 = (function __GT_t34864(flag__$1,alt_flag__$1,meta34865){return (new cljs.core.async.t34864(flag__$1,alt_flag__$1,meta34865));
});
}
return (new cljs.core.async.t34864(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34870 = (function (cb,flag,alt_handler,meta34871){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34871 = meta34871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34870.cljs$lang$type = true;
cljs.core.async.t34870.cljs$lang$ctorStr = "cljs.core.async/t34870";
cljs.core.async.t34870.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34870");
});
cljs.core.async.t34870.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34872){var self__ = this;
var _34872__$1 = this;return self__.meta34871;
});
cljs.core.async.t34870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34872,meta34871__$1){var self__ = this;
var _34872__$1 = this;return (new cljs.core.async.t34870(self__.cb,self__.flag,self__.alt_handler,meta34871__$1));
});
cljs.core.async.__GT_t34870 = (function __GT_t34870(cb__$1,flag__$1,alt_handler__$1,meta34871){return (new cljs.core.async.t34870(cb__$1,flag__$1,alt_handler__$1,meta34871));
});
}
return (new cljs.core.async.t34870(cb,flag,alt_handler,null));
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
return (function (p1__34873_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34873_SHARP_,port], null));
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
var G__34874 = (i + 1);
i = G__34874;
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
var alts_BANG___delegate = function (ports,p__34875){var map__34877 = p__34875;var map__34877__$1 = ((cljs.core.seq_QMARK_.call(null,map__34877))?cljs.core.apply.call(null,cljs.core.hash_map,map__34877):map__34877);var opts = map__34877__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34875 = null;if (arguments.length > 1) {
  p__34875 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34875);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34878){
var ports = cljs.core.first(arglist__34878);
var p__34875 = cljs.core.rest(arglist__34878);
return alts_BANG___delegate(ports,p__34875);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34886 = (function (ch,f,map_LT_,meta34887){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34887 = meta34887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34886.cljs$lang$type = true;
cljs.core.async.t34886.cljs$lang$ctorStr = "cljs.core.async/t34886";
cljs.core.async.t34886.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34886");
});
cljs.core.async.t34886.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34886.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34889 = (function (fn1,_,meta34887,ch,f,map_LT_,meta34890){
this.fn1 = fn1;
this._ = _;
this.meta34887 = meta34887;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34890 = meta34890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34889.cljs$lang$type = true;
cljs.core.async.t34889.cljs$lang$ctorStr = "cljs.core.async/t34889";
cljs.core.async.t34889.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34889");
});
cljs.core.async.t34889.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34889.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34879_SHARP_){return f1.call(null,(((p1__34879_SHARP_ == null))?null:self__.f.call(null,p1__34879_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34891){var self__ = this;
var _34891__$1 = this;return self__.meta34890;
});
cljs.core.async.t34889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34891,meta34890__$1){var self__ = this;
var _34891__$1 = this;return (new cljs.core.async.t34889(self__.fn1,self__._,self__.meta34887,self__.ch,self__.f,self__.map_LT_,meta34890__$1));
});
cljs.core.async.__GT_t34889 = (function __GT_t34889(fn1__$1,___$2,meta34887__$1,ch__$2,f__$2,map_LT___$2,meta34890){return (new cljs.core.async.t34889(fn1__$1,___$2,meta34887__$1,ch__$2,f__$2,map_LT___$2,meta34890));
});
}
return (new cljs.core.async.t34889(fn1,___$1,self__.meta34887,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34886.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34888){var self__ = this;
var _34888__$1 = this;return self__.meta34887;
});
cljs.core.async.t34886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34888,meta34887__$1){var self__ = this;
var _34888__$1 = this;return (new cljs.core.async.t34886(self__.ch,self__.f,self__.map_LT_,meta34887__$1));
});
cljs.core.async.__GT_t34886 = (function __GT_t34886(ch__$1,f__$1,map_LT___$1,meta34887){return (new cljs.core.async.t34886(ch__$1,f__$1,map_LT___$1,meta34887));
});
}
return (new cljs.core.async.t34886(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34895 = (function (ch,f,map_GT_,meta34896){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34896 = meta34896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34895.cljs$lang$type = true;
cljs.core.async.t34895.cljs$lang$ctorStr = "cljs.core.async/t34895";
cljs.core.async.t34895.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34895");
});
cljs.core.async.t34895.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34895.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34895.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34897){var self__ = this;
var _34897__$1 = this;return self__.meta34896;
});
cljs.core.async.t34895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34897,meta34896__$1){var self__ = this;
var _34897__$1 = this;return (new cljs.core.async.t34895(self__.ch,self__.f,self__.map_GT_,meta34896__$1));
});
cljs.core.async.__GT_t34895 = (function __GT_t34895(ch__$1,f__$1,map_GT___$1,meta34896){return (new cljs.core.async.t34895(ch__$1,f__$1,map_GT___$1,meta34896));
});
}
return (new cljs.core.async.t34895(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34901 = (function (ch,p,filter_GT_,meta34902){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34902 = meta34902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34901.cljs$lang$type = true;
cljs.core.async.t34901.cljs$lang$ctorStr = "cljs.core.async/t34901";
cljs.core.async.t34901.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t34901");
});
cljs.core.async.t34901.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34901.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34901.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34903){var self__ = this;
var _34903__$1 = this;return self__.meta34902;
});
cljs.core.async.t34901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34903,meta34902__$1){var self__ = this;
var _34903__$1 = this;return (new cljs.core.async.t34901(self__.ch,self__.p,self__.filter_GT_,meta34902__$1));
});
cljs.core.async.__GT_t34901 = (function __GT_t34901(ch__$1,p__$1,filter_GT___$1,meta34902){return (new cljs.core.async.t34901(ch__$1,p__$1,filter_GT___$1,meta34902));
});
}
return (new cljs.core.async.t34901(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___34986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_34965){var state_val_34966 = (state_34965[1]);if((state_val_34966 === 1))
{var state_34965__$1 = state_34965;var statearr_34967_34987 = state_34965__$1;(statearr_34967_34987[2] = null);
(statearr_34967_34987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 2))
{var state_34965__$1 = state_34965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34965__$1,4,ch);
} else
{if((state_val_34966 === 3))
{var inst_34963 = (state_34965[2]);var state_34965__$1 = state_34965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34965__$1,inst_34963);
} else
{if((state_val_34966 === 4))
{var inst_34947 = (state_34965[7]);var inst_34947__$1 = (state_34965[2]);var inst_34948 = (inst_34947__$1 == null);var state_34965__$1 = (function (){var statearr_34968 = state_34965;(statearr_34968[7] = inst_34947__$1);
return statearr_34968;
})();if(cljs.core.truth_(inst_34948))
{var statearr_34969_34988 = state_34965__$1;(statearr_34969_34988[1] = 5);
} else
{var statearr_34970_34989 = state_34965__$1;(statearr_34970_34989[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 5))
{var inst_34950 = cljs.core.async.close_BANG_.call(null,out);var state_34965__$1 = state_34965;var statearr_34971_34990 = state_34965__$1;(statearr_34971_34990[2] = inst_34950);
(statearr_34971_34990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 6))
{var inst_34947 = (state_34965[7]);var inst_34952 = p.call(null,inst_34947);var state_34965__$1 = state_34965;if(cljs.core.truth_(inst_34952))
{var statearr_34972_34991 = state_34965__$1;(statearr_34972_34991[1] = 8);
} else
{var statearr_34973_34992 = state_34965__$1;(statearr_34973_34992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 7))
{var inst_34961 = (state_34965[2]);var state_34965__$1 = state_34965;var statearr_34974_34993 = state_34965__$1;(statearr_34974_34993[2] = inst_34961);
(statearr_34974_34993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 8))
{var inst_34947 = (state_34965[7]);var state_34965__$1 = state_34965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34965__$1,11,out,inst_34947);
} else
{if((state_val_34966 === 9))
{var state_34965__$1 = state_34965;var statearr_34975_34994 = state_34965__$1;(statearr_34975_34994[2] = null);
(statearr_34975_34994[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 10))
{var inst_34958 = (state_34965[2]);var state_34965__$1 = (function (){var statearr_34976 = state_34965;(statearr_34976[8] = inst_34958);
return statearr_34976;
})();var statearr_34977_34995 = state_34965__$1;(statearr_34977_34995[2] = null);
(statearr_34977_34995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34966 === 11))
{var inst_34955 = (state_34965[2]);var state_34965__$1 = state_34965;var statearr_34978_34996 = state_34965__$1;(statearr_34978_34996[2] = inst_34955);
(statearr_34978_34996[1] = 10);
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
var state_machine__13648__auto____0 = (function (){var statearr_34982 = [null,null,null,null,null,null,null,null,null];(statearr_34982[0] = state_machine__13648__auto__);
(statearr_34982[1] = 1);
return statearr_34982;
});
var state_machine__13648__auto____1 = (function (state_34965){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_34965);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e34983){if((e34983 instanceof Object))
{var ex__13651__auto__ = e34983;var statearr_34984_34997 = state_34965;(statearr_34984_34997[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34998 = state_34965;
state_34965 = G__34998;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_34965){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_34965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_34985 = f__13746__auto__.call(null);(statearr_34985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___34986);
return statearr_34985;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_35150){var state_val_35151 = (state_35150[1]);if((state_val_35151 === 1))
{var state_35150__$1 = state_35150;var statearr_35152_35189 = state_35150__$1;(statearr_35152_35189[2] = null);
(statearr_35152_35189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 2))
{var state_35150__$1 = state_35150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35150__$1,4,in$);
} else
{if((state_val_35151 === 3))
{var inst_35148 = (state_35150[2]);var state_35150__$1 = state_35150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35150__$1,inst_35148);
} else
{if((state_val_35151 === 4))
{var inst_35096 = (state_35150[7]);var inst_35096__$1 = (state_35150[2]);var inst_35097 = (inst_35096__$1 == null);var state_35150__$1 = (function (){var statearr_35153 = state_35150;(statearr_35153[7] = inst_35096__$1);
return statearr_35153;
})();if(cljs.core.truth_(inst_35097))
{var statearr_35154_35190 = state_35150__$1;(statearr_35154_35190[1] = 5);
} else
{var statearr_35155_35191 = state_35150__$1;(statearr_35155_35191[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 5))
{var inst_35099 = cljs.core.async.close_BANG_.call(null,out);var state_35150__$1 = state_35150;var statearr_35156_35192 = state_35150__$1;(statearr_35156_35192[2] = inst_35099);
(statearr_35156_35192[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 6))
{var inst_35096 = (state_35150[7]);var inst_35101 = f.call(null,inst_35096);var inst_35106 = cljs.core.seq.call(null,inst_35101);var inst_35107 = inst_35106;var inst_35108 = null;var inst_35109 = 0;var inst_35110 = 0;var state_35150__$1 = (function (){var statearr_35157 = state_35150;(statearr_35157[8] = inst_35110);
(statearr_35157[9] = inst_35107);
(statearr_35157[10] = inst_35108);
(statearr_35157[11] = inst_35109);
return statearr_35157;
})();var statearr_35158_35193 = state_35150__$1;(statearr_35158_35193[2] = null);
(statearr_35158_35193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 7))
{var inst_35146 = (state_35150[2]);var state_35150__$1 = state_35150;var statearr_35159_35194 = state_35150__$1;(statearr_35159_35194[2] = inst_35146);
(statearr_35159_35194[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 8))
{var inst_35110 = (state_35150[8]);var inst_35109 = (state_35150[11]);var inst_35112 = (inst_35110 < inst_35109);var inst_35113 = inst_35112;var state_35150__$1 = state_35150;if(cljs.core.truth_(inst_35113))
{var statearr_35160_35195 = state_35150__$1;(statearr_35160_35195[1] = 10);
} else
{var statearr_35161_35196 = state_35150__$1;(statearr_35161_35196[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 9))
{var inst_35143 = (state_35150[2]);var state_35150__$1 = (function (){var statearr_35162 = state_35150;(statearr_35162[12] = inst_35143);
return statearr_35162;
})();var statearr_35163_35197 = state_35150__$1;(statearr_35163_35197[2] = null);
(statearr_35163_35197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 10))
{var inst_35110 = (state_35150[8]);var inst_35108 = (state_35150[10]);var inst_35115 = cljs.core._nth.call(null,inst_35108,inst_35110);var state_35150__$1 = state_35150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35150__$1,13,out,inst_35115);
} else
{if((state_val_35151 === 11))
{var inst_35121 = (state_35150[13]);var inst_35107 = (state_35150[9]);var inst_35121__$1 = cljs.core.seq.call(null,inst_35107);var state_35150__$1 = (function (){var statearr_35167 = state_35150;(statearr_35167[13] = inst_35121__$1);
return statearr_35167;
})();if(inst_35121__$1)
{var statearr_35168_35198 = state_35150__$1;(statearr_35168_35198[1] = 14);
} else
{var statearr_35169_35199 = state_35150__$1;(statearr_35169_35199[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 12))
{var inst_35141 = (state_35150[2]);var state_35150__$1 = state_35150;var statearr_35170_35200 = state_35150__$1;(statearr_35170_35200[2] = inst_35141);
(statearr_35170_35200[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 13))
{var inst_35110 = (state_35150[8]);var inst_35107 = (state_35150[9]);var inst_35108 = (state_35150[10]);var inst_35109 = (state_35150[11]);var inst_35117 = (state_35150[2]);var inst_35118 = (inst_35110 + 1);var tmp35164 = inst_35107;var tmp35165 = inst_35108;var tmp35166 = inst_35109;var inst_35107__$1 = tmp35164;var inst_35108__$1 = tmp35165;var inst_35109__$1 = tmp35166;var inst_35110__$1 = inst_35118;var state_35150__$1 = (function (){var statearr_35171 = state_35150;(statearr_35171[8] = inst_35110__$1);
(statearr_35171[14] = inst_35117);
(statearr_35171[9] = inst_35107__$1);
(statearr_35171[10] = inst_35108__$1);
(statearr_35171[11] = inst_35109__$1);
return statearr_35171;
})();var statearr_35172_35201 = state_35150__$1;(statearr_35172_35201[2] = null);
(statearr_35172_35201[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 14))
{var inst_35121 = (state_35150[13]);var inst_35123 = cljs.core.chunked_seq_QMARK_.call(null,inst_35121);var state_35150__$1 = state_35150;if(inst_35123)
{var statearr_35173_35202 = state_35150__$1;(statearr_35173_35202[1] = 17);
} else
{var statearr_35174_35203 = state_35150__$1;(statearr_35174_35203[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 15))
{var state_35150__$1 = state_35150;var statearr_35175_35204 = state_35150__$1;(statearr_35175_35204[2] = null);
(statearr_35175_35204[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 16))
{var inst_35139 = (state_35150[2]);var state_35150__$1 = state_35150;var statearr_35176_35205 = state_35150__$1;(statearr_35176_35205[2] = inst_35139);
(statearr_35176_35205[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 17))
{var inst_35121 = (state_35150[13]);var inst_35125 = cljs.core.chunk_first.call(null,inst_35121);var inst_35126 = cljs.core.chunk_rest.call(null,inst_35121);var inst_35127 = cljs.core.count.call(null,inst_35125);var inst_35107 = inst_35126;var inst_35108 = inst_35125;var inst_35109 = inst_35127;var inst_35110 = 0;var state_35150__$1 = (function (){var statearr_35177 = state_35150;(statearr_35177[8] = inst_35110);
(statearr_35177[9] = inst_35107);
(statearr_35177[10] = inst_35108);
(statearr_35177[11] = inst_35109);
return statearr_35177;
})();var statearr_35178_35206 = state_35150__$1;(statearr_35178_35206[2] = null);
(statearr_35178_35206[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 18))
{var inst_35121 = (state_35150[13]);var inst_35130 = cljs.core.first.call(null,inst_35121);var state_35150__$1 = state_35150;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35150__$1,20,out,inst_35130);
} else
{if((state_val_35151 === 19))
{var inst_35136 = (state_35150[2]);var state_35150__$1 = state_35150;var statearr_35179_35207 = state_35150__$1;(statearr_35179_35207[2] = inst_35136);
(statearr_35179_35207[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35151 === 20))
{var inst_35121 = (state_35150[13]);var inst_35132 = (state_35150[2]);var inst_35133 = cljs.core.next.call(null,inst_35121);var inst_35107 = inst_35133;var inst_35108 = null;var inst_35109 = 0;var inst_35110 = 0;var state_35150__$1 = (function (){var statearr_35180 = state_35150;(statearr_35180[15] = inst_35132);
(statearr_35180[8] = inst_35110);
(statearr_35180[9] = inst_35107);
(statearr_35180[10] = inst_35108);
(statearr_35180[11] = inst_35109);
return statearr_35180;
})();var statearr_35181_35208 = state_35150__$1;(statearr_35181_35208[2] = null);
(statearr_35181_35208[1] = 8);
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
var state_machine__13648__auto____0 = (function (){var statearr_35185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35185[0] = state_machine__13648__auto__);
(statearr_35185[1] = 1);
return statearr_35185;
});
var state_machine__13648__auto____1 = (function (state_35150){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_35150);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e35186){if((e35186 instanceof Object))
{var ex__13651__auto__ = e35186;var statearr_35187_35209 = state_35150;(statearr_35187_35209[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35210 = state_35150;
state_35150 = G__35210;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_35150){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_35150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_35188 = f__13746__auto__.call(null);(statearr_35188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_35188;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13745__auto___35291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_35270){var state_val_35271 = (state_35270[1]);if((state_val_35271 === 1))
{var state_35270__$1 = state_35270;var statearr_35272_35292 = state_35270__$1;(statearr_35272_35292[2] = null);
(statearr_35272_35292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 2))
{var state_35270__$1 = state_35270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,4,from);
} else
{if((state_val_35271 === 3))
{var inst_35268 = (state_35270[2]);var state_35270__$1 = state_35270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35270__$1,inst_35268);
} else
{if((state_val_35271 === 4))
{var inst_35253 = (state_35270[7]);var inst_35253__$1 = (state_35270[2]);var inst_35254 = (inst_35253__$1 == null);var state_35270__$1 = (function (){var statearr_35273 = state_35270;(statearr_35273[7] = inst_35253__$1);
return statearr_35273;
})();if(cljs.core.truth_(inst_35254))
{var statearr_35274_35293 = state_35270__$1;(statearr_35274_35293[1] = 5);
} else
{var statearr_35275_35294 = state_35270__$1;(statearr_35275_35294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 5))
{var state_35270__$1 = state_35270;if(cljs.core.truth_(close_QMARK_))
{var statearr_35276_35295 = state_35270__$1;(statearr_35276_35295[1] = 8);
} else
{var statearr_35277_35296 = state_35270__$1;(statearr_35277_35296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 6))
{var inst_35253 = (state_35270[7]);var state_35270__$1 = state_35270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35270__$1,11,to,inst_35253);
} else
{if((state_val_35271 === 7))
{var inst_35266 = (state_35270[2]);var state_35270__$1 = state_35270;var statearr_35278_35297 = state_35270__$1;(statearr_35278_35297[2] = inst_35266);
(statearr_35278_35297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 8))
{var inst_35257 = cljs.core.async.close_BANG_.call(null,to);var state_35270__$1 = state_35270;var statearr_35279_35298 = state_35270__$1;(statearr_35279_35298[2] = inst_35257);
(statearr_35279_35298[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 9))
{var state_35270__$1 = state_35270;var statearr_35280_35299 = state_35270__$1;(statearr_35280_35299[2] = null);
(statearr_35280_35299[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 10))
{var inst_35260 = (state_35270[2]);var state_35270__$1 = state_35270;var statearr_35281_35300 = state_35270__$1;(statearr_35281_35300[2] = inst_35260);
(statearr_35281_35300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35271 === 11))
{var inst_35263 = (state_35270[2]);var state_35270__$1 = (function (){var statearr_35282 = state_35270;(statearr_35282[8] = inst_35263);
return statearr_35282;
})();var statearr_35283_35301 = state_35270__$1;(statearr_35283_35301[2] = null);
(statearr_35283_35301[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_35287 = [null,null,null,null,null,null,null,null,null];(statearr_35287[0] = state_machine__13648__auto__);
(statearr_35287[1] = 1);
return statearr_35287;
});
var state_machine__13648__auto____1 = (function (state_35270){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_35270);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e35288){if((e35288 instanceof Object))
{var ex__13651__auto__ = e35288;var statearr_35289_35302 = state_35270;(statearr_35289_35302[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35303 = state_35270;
state_35270 = G__35303;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_35270){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_35270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_35290 = f__13746__auto__.call(null);(statearr_35290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___35291);
return statearr_35290;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13745__auto___35390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_35368){var state_val_35369 = (state_35368[1]);if((state_val_35369 === 1))
{var state_35368__$1 = state_35368;var statearr_35370_35391 = state_35368__$1;(statearr_35370_35391[2] = null);
(statearr_35370_35391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 2))
{var state_35368__$1 = state_35368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35368__$1,4,ch);
} else
{if((state_val_35369 === 3))
{var inst_35366 = (state_35368[2]);var state_35368__$1 = state_35368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35368__$1,inst_35366);
} else
{if((state_val_35369 === 4))
{var inst_35349 = (state_35368[7]);var inst_35349__$1 = (state_35368[2]);var inst_35350 = (inst_35349__$1 == null);var state_35368__$1 = (function (){var statearr_35371 = state_35368;(statearr_35371[7] = inst_35349__$1);
return statearr_35371;
})();if(cljs.core.truth_(inst_35350))
{var statearr_35372_35392 = state_35368__$1;(statearr_35372_35392[1] = 5);
} else
{var statearr_35373_35393 = state_35368__$1;(statearr_35373_35393[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 5))
{var inst_35352 = cljs.core.async.close_BANG_.call(null,tc);var inst_35353 = cljs.core.async.close_BANG_.call(null,fc);var state_35368__$1 = (function (){var statearr_35374 = state_35368;(statearr_35374[8] = inst_35352);
return statearr_35374;
})();var statearr_35375_35394 = state_35368__$1;(statearr_35375_35394[2] = inst_35353);
(statearr_35375_35394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 6))
{var inst_35349 = (state_35368[7]);var inst_35355 = p.call(null,inst_35349);var state_35368__$1 = state_35368;if(cljs.core.truth_(inst_35355))
{var statearr_35376_35395 = state_35368__$1;(statearr_35376_35395[1] = 9);
} else
{var statearr_35377_35396 = state_35368__$1;(statearr_35377_35396[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 7))
{var inst_35364 = (state_35368[2]);var state_35368__$1 = state_35368;var statearr_35378_35397 = state_35368__$1;(statearr_35378_35397[2] = inst_35364);
(statearr_35378_35397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 8))
{var inst_35361 = (state_35368[2]);var state_35368__$1 = (function (){var statearr_35379 = state_35368;(statearr_35379[9] = inst_35361);
return statearr_35379;
})();var statearr_35380_35398 = state_35368__$1;(statearr_35380_35398[2] = null);
(statearr_35380_35398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 9))
{var state_35368__$1 = state_35368;var statearr_35381_35399 = state_35368__$1;(statearr_35381_35399[2] = tc);
(statearr_35381_35399[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 10))
{var state_35368__$1 = state_35368;var statearr_35382_35400 = state_35368__$1;(statearr_35382_35400[2] = fc);
(statearr_35382_35400[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35369 === 11))
{var inst_35349 = (state_35368[7]);var inst_35359 = (state_35368[2]);var state_35368__$1 = state_35368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35368__$1,8,inst_35359,inst_35349);
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
var state_machine__13648__auto____0 = (function (){var statearr_35386 = [null,null,null,null,null,null,null,null,null,null];(statearr_35386[0] = state_machine__13648__auto__);
(statearr_35386[1] = 1);
return statearr_35386;
});
var state_machine__13648__auto____1 = (function (state_35368){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_35368);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e35387){if((e35387 instanceof Object))
{var ex__13651__auto__ = e35387;var statearr_35388_35401 = state_35368;(statearr_35388_35401[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35402 = state_35368;
state_35368 = G__35402;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_35368){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_35368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_35389 = f__13746__auto__.call(null);(statearr_35389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___35390);
return statearr_35389;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_35449){var state_val_35450 = (state_35449[1]);if((state_val_35450 === 7))
{var inst_35445 = (state_35449[2]);var state_35449__$1 = state_35449;var statearr_35451_35467 = state_35449__$1;(statearr_35451_35467[2] = inst_35445);
(statearr_35451_35467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35450 === 6))
{var inst_35438 = (state_35449[7]);var inst_35435 = (state_35449[8]);var inst_35442 = f.call(null,inst_35435,inst_35438);var inst_35435__$1 = inst_35442;var state_35449__$1 = (function (){var statearr_35452 = state_35449;(statearr_35452[8] = inst_35435__$1);
return statearr_35452;
})();var statearr_35453_35468 = state_35449__$1;(statearr_35453_35468[2] = null);
(statearr_35453_35468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35450 === 5))
{var inst_35435 = (state_35449[8]);var state_35449__$1 = state_35449;var statearr_35454_35469 = state_35449__$1;(statearr_35454_35469[2] = inst_35435);
(statearr_35454_35469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35450 === 4))
{var inst_35438 = (state_35449[7]);var inst_35438__$1 = (state_35449[2]);var inst_35439 = (inst_35438__$1 == null);var state_35449__$1 = (function (){var statearr_35455 = state_35449;(statearr_35455[7] = inst_35438__$1);
return statearr_35455;
})();if(cljs.core.truth_(inst_35439))
{var statearr_35456_35470 = state_35449__$1;(statearr_35456_35470[1] = 5);
} else
{var statearr_35457_35471 = state_35449__$1;(statearr_35457_35471[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35450 === 3))
{var inst_35447 = (state_35449[2]);var state_35449__$1 = state_35449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35449__$1,inst_35447);
} else
{if((state_val_35450 === 2))
{var state_35449__$1 = state_35449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35449__$1,4,ch);
} else
{if((state_val_35450 === 1))
{var inst_35435 = init;var state_35449__$1 = (function (){var statearr_35458 = state_35449;(statearr_35458[8] = inst_35435);
return statearr_35458;
})();var statearr_35459_35472 = state_35449__$1;(statearr_35459_35472[2] = null);
(statearr_35459_35472[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_35463 = [null,null,null,null,null,null,null,null,null];(statearr_35463[0] = state_machine__13648__auto__);
(statearr_35463[1] = 1);
return statearr_35463;
});
var state_machine__13648__auto____1 = (function (state_35449){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_35449);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e35464){if((e35464 instanceof Object))
{var ex__13651__auto__ = e35464;var statearr_35465_35473 = state_35449;(statearr_35465_35473[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35474 = state_35449;
state_35449 = G__35474;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_35449){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_35449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_35466 = f__13746__auto__.call(null);(statearr_35466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_35466;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_35536){var state_val_35537 = (state_35536[1]);if((state_val_35537 === 1))
{var inst_35516 = cljs.core.seq.call(null,coll);var inst_35517 = inst_35516;var state_35536__$1 = (function (){var statearr_35538 = state_35536;(statearr_35538[7] = inst_35517);
return statearr_35538;
})();var statearr_35539_35557 = state_35536__$1;(statearr_35539_35557[2] = null);
(statearr_35539_35557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 2))
{var inst_35517 = (state_35536[7]);var state_35536__$1 = state_35536;if(cljs.core.truth_(inst_35517))
{var statearr_35540_35558 = state_35536__$1;(statearr_35540_35558[1] = 4);
} else
{var statearr_35541_35559 = state_35536__$1;(statearr_35541_35559[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 3))
{var inst_35534 = (state_35536[2]);var state_35536__$1 = state_35536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35536__$1,inst_35534);
} else
{if((state_val_35537 === 4))
{var inst_35517 = (state_35536[7]);var inst_35520 = cljs.core.first.call(null,inst_35517);var state_35536__$1 = state_35536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35536__$1,7,ch,inst_35520);
} else
{if((state_val_35537 === 5))
{var state_35536__$1 = state_35536;if(cljs.core.truth_(close_QMARK_))
{var statearr_35542_35560 = state_35536__$1;(statearr_35542_35560[1] = 8);
} else
{var statearr_35543_35561 = state_35536__$1;(statearr_35543_35561[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 6))
{var inst_35532 = (state_35536[2]);var state_35536__$1 = state_35536;var statearr_35544_35562 = state_35536__$1;(statearr_35544_35562[2] = inst_35532);
(statearr_35544_35562[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 7))
{var inst_35517 = (state_35536[7]);var inst_35522 = (state_35536[2]);var inst_35523 = cljs.core.next.call(null,inst_35517);var inst_35517__$1 = inst_35523;var state_35536__$1 = (function (){var statearr_35545 = state_35536;(statearr_35545[7] = inst_35517__$1);
(statearr_35545[8] = inst_35522);
return statearr_35545;
})();var statearr_35546_35563 = state_35536__$1;(statearr_35546_35563[2] = null);
(statearr_35546_35563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 8))
{var inst_35527 = cljs.core.async.close_BANG_.call(null,ch);var state_35536__$1 = state_35536;var statearr_35547_35564 = state_35536__$1;(statearr_35547_35564[2] = inst_35527);
(statearr_35547_35564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 9))
{var state_35536__$1 = state_35536;var statearr_35548_35565 = state_35536__$1;(statearr_35548_35565[2] = null);
(statearr_35548_35565[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35537 === 10))
{var inst_35530 = (state_35536[2]);var state_35536__$1 = state_35536;var statearr_35549_35566 = state_35536__$1;(statearr_35549_35566[2] = inst_35530);
(statearr_35549_35566[1] = 6);
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
var state_machine__13648__auto____0 = (function (){var statearr_35553 = [null,null,null,null,null,null,null,null,null];(statearr_35553[0] = state_machine__13648__auto__);
(statearr_35553[1] = 1);
return statearr_35553;
});
var state_machine__13648__auto____1 = (function (state_35536){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_35536);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e35554){if((e35554 instanceof Object))
{var ex__13651__auto__ = e35554;var statearr_35555_35567 = state_35536;(statearr_35555_35567[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35568 = state_35536;
state_35536 = G__35568;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_35536){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_35536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_35556 = f__13746__auto__.call(null);(statearr_35556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_35556;
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
cljs.core.async.Mux = (function (){var obj35570 = {};return obj35570;
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
cljs.core.async.Mult = (function (){var obj35572 = {};return obj35572;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35796 = (function (cs,ch,mult,meta35797){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35797 = meta35797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35796.cljs$lang$type = true;
cljs.core.async.t35796.cljs$lang$ctorStr = "cljs.core.async/t35796";
cljs.core.async.t35796.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t35796");
});})(cs))
;
cljs.core.async.t35796.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35796.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35796.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35796.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35796.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35798){var self__ = this;
var _35798__$1 = this;return self__.meta35797;
});})(cs))
;
cljs.core.async.t35796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35798,meta35797__$1){var self__ = this;
var _35798__$1 = this;return (new cljs.core.async.t35796(self__.cs,self__.ch,self__.mult,meta35797__$1));
});})(cs))
;
cljs.core.async.__GT_t35796 = ((function (cs){
return (function __GT_t35796(cs__$1,ch__$1,mult__$1,meta35797){return (new cljs.core.async.t35796(cs__$1,ch__$1,mult__$1,meta35797));
});})(cs))
;
}
return (new cljs.core.async.t35796(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13745__auto___36019 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_35933){var state_val_35934 = (state_35933[1]);if((state_val_35934 === 32))
{var inst_35801 = (state_35933[7]);var inst_35877 = (state_35933[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35933,31,Object,null,30);var inst_35884 = cljs.core.async.put_BANG_.call(null,inst_35877,inst_35801,done);var state_35933__$1 = state_35933;var statearr_35935_36020 = state_35933__$1;(statearr_35935_36020[2] = inst_35884);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 1))
{var state_35933__$1 = state_35933;var statearr_35936_36021 = state_35933__$1;(statearr_35936_36021[2] = null);
(statearr_35936_36021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 33))
{var inst_35890 = (state_35933[9]);var inst_35892 = cljs.core.chunked_seq_QMARK_.call(null,inst_35890);var state_35933__$1 = state_35933;if(inst_35892)
{var statearr_35937_36022 = state_35933__$1;(statearr_35937_36022[1] = 36);
} else
{var statearr_35938_36023 = state_35933__$1;(statearr_35938_36023[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 2))
{var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,4,ch);
} else
{if((state_val_35934 === 34))
{var state_35933__$1 = state_35933;var statearr_35939_36024 = state_35933__$1;(statearr_35939_36024[2] = null);
(statearr_35939_36024[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 3))
{var inst_35931 = (state_35933[2]);var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else
{if((state_val_35934 === 35))
{var inst_35915 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35940_36025 = state_35933__$1;(statearr_35940_36025[2] = inst_35915);
(statearr_35940_36025[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 4))
{var inst_35801 = (state_35933[7]);var inst_35801__$1 = (state_35933[2]);var inst_35802 = (inst_35801__$1 == null);var state_35933__$1 = (function (){var statearr_35941 = state_35933;(statearr_35941[7] = inst_35801__$1);
return statearr_35941;
})();if(cljs.core.truth_(inst_35802))
{var statearr_35942_36026 = state_35933__$1;(statearr_35942_36026[1] = 5);
} else
{var statearr_35943_36027 = state_35933__$1;(statearr_35943_36027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 36))
{var inst_35890 = (state_35933[9]);var inst_35894 = cljs.core.chunk_first.call(null,inst_35890);var inst_35895 = cljs.core.chunk_rest.call(null,inst_35890);var inst_35896 = cljs.core.count.call(null,inst_35894);var inst_35869 = inst_35895;var inst_35870 = inst_35894;var inst_35871 = inst_35896;var inst_35872 = 0;var state_35933__$1 = (function (){var statearr_35944 = state_35933;(statearr_35944[10] = inst_35869);
(statearr_35944[11] = inst_35870);
(statearr_35944[12] = inst_35871);
(statearr_35944[13] = inst_35872);
return statearr_35944;
})();var statearr_35945_36028 = state_35933__$1;(statearr_35945_36028[2] = null);
(statearr_35945_36028[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 5))
{var inst_35808 = cljs.core.deref.call(null,cs);var inst_35809 = cljs.core.seq.call(null,inst_35808);var inst_35810 = inst_35809;var inst_35811 = null;var inst_35812 = 0;var inst_35813 = 0;var state_35933__$1 = (function (){var statearr_35946 = state_35933;(statearr_35946[14] = inst_35810);
(statearr_35946[15] = inst_35811);
(statearr_35946[16] = inst_35812);
(statearr_35946[17] = inst_35813);
return statearr_35946;
})();var statearr_35947_36029 = state_35933__$1;(statearr_35947_36029[2] = null);
(statearr_35947_36029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 37))
{var inst_35890 = (state_35933[9]);var inst_35899 = cljs.core.first.call(null,inst_35890);var state_35933__$1 = (function (){var statearr_35948 = state_35933;(statearr_35948[18] = inst_35899);
return statearr_35948;
})();var statearr_35949_36030 = state_35933__$1;(statearr_35949_36030[2] = null);
(statearr_35949_36030[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 6))
{var inst_35861 = (state_35933[19]);var inst_35860 = cljs.core.deref.call(null,cs);var inst_35861__$1 = cljs.core.keys.call(null,inst_35860);var inst_35862 = cljs.core.count.call(null,inst_35861__$1);var inst_35863 = cljs.core.reset_BANG_.call(null,dctr,inst_35862);var inst_35868 = cljs.core.seq.call(null,inst_35861__$1);var inst_35869 = inst_35868;var inst_35870 = null;var inst_35871 = 0;var inst_35872 = 0;var state_35933__$1 = (function (){var statearr_35950 = state_35933;(statearr_35950[10] = inst_35869);
(statearr_35950[20] = inst_35863);
(statearr_35950[19] = inst_35861__$1);
(statearr_35950[11] = inst_35870);
(statearr_35950[12] = inst_35871);
(statearr_35950[13] = inst_35872);
return statearr_35950;
})();var statearr_35951_36031 = state_35933__$1;(statearr_35951_36031[2] = null);
(statearr_35951_36031[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 38))
{var inst_35912 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35952_36032 = state_35933__$1;(statearr_35952_36032[2] = inst_35912);
(statearr_35952_36032[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 7))
{var inst_35929 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35953_36033 = state_35933__$1;(statearr_35953_36033[2] = inst_35929);
(statearr_35953_36033[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 39))
{var inst_35890 = (state_35933[9]);var inst_35908 = (state_35933[2]);var inst_35909 = cljs.core.next.call(null,inst_35890);var inst_35869 = inst_35909;var inst_35870 = null;var inst_35871 = 0;var inst_35872 = 0;var state_35933__$1 = (function (){var statearr_35954 = state_35933;(statearr_35954[10] = inst_35869);
(statearr_35954[21] = inst_35908);
(statearr_35954[11] = inst_35870);
(statearr_35954[12] = inst_35871);
(statearr_35954[13] = inst_35872);
return statearr_35954;
})();var statearr_35955_36034 = state_35933__$1;(statearr_35955_36034[2] = null);
(statearr_35955_36034[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 8))
{var inst_35812 = (state_35933[16]);var inst_35813 = (state_35933[17]);var inst_35815 = (inst_35813 < inst_35812);var inst_35816 = inst_35815;var state_35933__$1 = state_35933;if(cljs.core.truth_(inst_35816))
{var statearr_35956_36035 = state_35933__$1;(statearr_35956_36035[1] = 10);
} else
{var statearr_35957_36036 = state_35933__$1;(statearr_35957_36036[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 40))
{var inst_35899 = (state_35933[18]);var inst_35900 = (state_35933[2]);var inst_35901 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35902 = cljs.core.async.untap_STAR_.call(null,m,inst_35899);var state_35933__$1 = (function (){var statearr_35958 = state_35933;(statearr_35958[22] = inst_35900);
(statearr_35958[23] = inst_35901);
return statearr_35958;
})();var statearr_35959_36037 = state_35933__$1;(statearr_35959_36037[2] = inst_35902);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 9))
{var inst_35858 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35960_36038 = state_35933__$1;(statearr_35960_36038[2] = inst_35858);
(statearr_35960_36038[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 41))
{var inst_35899 = (state_35933[18]);var inst_35801 = (state_35933[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35933,40,Object,null,39);var inst_35906 = cljs.core.async.put_BANG_.call(null,inst_35899,inst_35801,done);var state_35933__$1 = state_35933;var statearr_35961_36039 = state_35933__$1;(statearr_35961_36039[2] = inst_35906);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 10))
{var inst_35811 = (state_35933[15]);var inst_35813 = (state_35933[17]);var inst_35819 = cljs.core._nth.call(null,inst_35811,inst_35813);var inst_35820 = cljs.core.nth.call(null,inst_35819,0,null);var inst_35821 = cljs.core.nth.call(null,inst_35819,1,null);var state_35933__$1 = (function (){var statearr_35962 = state_35933;(statearr_35962[24] = inst_35820);
return statearr_35962;
})();if(cljs.core.truth_(inst_35821))
{var statearr_35963_36040 = state_35933__$1;(statearr_35963_36040[1] = 13);
} else
{var statearr_35964_36041 = state_35933__$1;(statearr_35964_36041[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 42))
{var state_35933__$1 = state_35933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,45,dchan);
} else
{if((state_val_35934 === 11))
{var inst_35810 = (state_35933[14]);var inst_35830 = (state_35933[25]);var inst_35830__$1 = cljs.core.seq.call(null,inst_35810);var state_35933__$1 = (function (){var statearr_35965 = state_35933;(statearr_35965[25] = inst_35830__$1);
return statearr_35965;
})();if(inst_35830__$1)
{var statearr_35966_36042 = state_35933__$1;(statearr_35966_36042[1] = 16);
} else
{var statearr_35967_36043 = state_35933__$1;(statearr_35967_36043[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 43))
{var state_35933__$1 = state_35933;var statearr_35968_36044 = state_35933__$1;(statearr_35968_36044[2] = null);
(statearr_35968_36044[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 12))
{var inst_35856 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35969_36045 = state_35933__$1;(statearr_35969_36045[2] = inst_35856);
(statearr_35969_36045[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 44))
{var inst_35926 = (state_35933[2]);var state_35933__$1 = (function (){var statearr_35970 = state_35933;(statearr_35970[26] = inst_35926);
return statearr_35970;
})();var statearr_35971_36046 = state_35933__$1;(statearr_35971_36046[2] = null);
(statearr_35971_36046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 13))
{var inst_35820 = (state_35933[24]);var inst_35823 = cljs.core.async.close_BANG_.call(null,inst_35820);var state_35933__$1 = state_35933;var statearr_35972_36047 = state_35933__$1;(statearr_35972_36047[2] = inst_35823);
(statearr_35972_36047[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 45))
{var inst_35923 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35976_36048 = state_35933__$1;(statearr_35976_36048[2] = inst_35923);
(statearr_35976_36048[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 14))
{var state_35933__$1 = state_35933;var statearr_35977_36049 = state_35933__$1;(statearr_35977_36049[2] = null);
(statearr_35977_36049[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 15))
{var inst_35810 = (state_35933[14]);var inst_35811 = (state_35933[15]);var inst_35812 = (state_35933[16]);var inst_35813 = (state_35933[17]);var inst_35826 = (state_35933[2]);var inst_35827 = (inst_35813 + 1);var tmp35973 = inst_35810;var tmp35974 = inst_35811;var tmp35975 = inst_35812;var inst_35810__$1 = tmp35973;var inst_35811__$1 = tmp35974;var inst_35812__$1 = tmp35975;var inst_35813__$1 = inst_35827;var state_35933__$1 = (function (){var statearr_35978 = state_35933;(statearr_35978[27] = inst_35826);
(statearr_35978[14] = inst_35810__$1);
(statearr_35978[15] = inst_35811__$1);
(statearr_35978[16] = inst_35812__$1);
(statearr_35978[17] = inst_35813__$1);
return statearr_35978;
})();var statearr_35979_36050 = state_35933__$1;(statearr_35979_36050[2] = null);
(statearr_35979_36050[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 16))
{var inst_35830 = (state_35933[25]);var inst_35832 = cljs.core.chunked_seq_QMARK_.call(null,inst_35830);var state_35933__$1 = state_35933;if(inst_35832)
{var statearr_35980_36051 = state_35933__$1;(statearr_35980_36051[1] = 19);
} else
{var statearr_35981_36052 = state_35933__$1;(statearr_35981_36052[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 17))
{var state_35933__$1 = state_35933;var statearr_35982_36053 = state_35933__$1;(statearr_35982_36053[2] = null);
(statearr_35982_36053[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 18))
{var inst_35854 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35983_36054 = state_35933__$1;(statearr_35983_36054[2] = inst_35854);
(statearr_35983_36054[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 19))
{var inst_35830 = (state_35933[25]);var inst_35834 = cljs.core.chunk_first.call(null,inst_35830);var inst_35835 = cljs.core.chunk_rest.call(null,inst_35830);var inst_35836 = cljs.core.count.call(null,inst_35834);var inst_35810 = inst_35835;var inst_35811 = inst_35834;var inst_35812 = inst_35836;var inst_35813 = 0;var state_35933__$1 = (function (){var statearr_35984 = state_35933;(statearr_35984[14] = inst_35810);
(statearr_35984[15] = inst_35811);
(statearr_35984[16] = inst_35812);
(statearr_35984[17] = inst_35813);
return statearr_35984;
})();var statearr_35985_36055 = state_35933__$1;(statearr_35985_36055[2] = null);
(statearr_35985_36055[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 20))
{var inst_35830 = (state_35933[25]);var inst_35840 = cljs.core.first.call(null,inst_35830);var inst_35841 = cljs.core.nth.call(null,inst_35840,0,null);var inst_35842 = cljs.core.nth.call(null,inst_35840,1,null);var state_35933__$1 = (function (){var statearr_35986 = state_35933;(statearr_35986[28] = inst_35841);
return statearr_35986;
})();if(cljs.core.truth_(inst_35842))
{var statearr_35987_36056 = state_35933__$1;(statearr_35987_36056[1] = 22);
} else
{var statearr_35988_36057 = state_35933__$1;(statearr_35988_36057[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 21))
{var inst_35851 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_35989_36058 = state_35933__$1;(statearr_35989_36058[2] = inst_35851);
(statearr_35989_36058[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 22))
{var inst_35841 = (state_35933[28]);var inst_35844 = cljs.core.async.close_BANG_.call(null,inst_35841);var state_35933__$1 = state_35933;var statearr_35990_36059 = state_35933__$1;(statearr_35990_36059[2] = inst_35844);
(statearr_35990_36059[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 23))
{var state_35933__$1 = state_35933;var statearr_35991_36060 = state_35933__$1;(statearr_35991_36060[2] = null);
(statearr_35991_36060[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 24))
{var inst_35830 = (state_35933[25]);var inst_35847 = (state_35933[2]);var inst_35848 = cljs.core.next.call(null,inst_35830);var inst_35810 = inst_35848;var inst_35811 = null;var inst_35812 = 0;var inst_35813 = 0;var state_35933__$1 = (function (){var statearr_35992 = state_35933;(statearr_35992[14] = inst_35810);
(statearr_35992[15] = inst_35811);
(statearr_35992[16] = inst_35812);
(statearr_35992[17] = inst_35813);
(statearr_35992[29] = inst_35847);
return statearr_35992;
})();var statearr_35993_36061 = state_35933__$1;(statearr_35993_36061[2] = null);
(statearr_35993_36061[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 25))
{var inst_35871 = (state_35933[12]);var inst_35872 = (state_35933[13]);var inst_35874 = (inst_35872 < inst_35871);var inst_35875 = inst_35874;var state_35933__$1 = state_35933;if(cljs.core.truth_(inst_35875))
{var statearr_35994_36062 = state_35933__$1;(statearr_35994_36062[1] = 27);
} else
{var statearr_35995_36063 = state_35933__$1;(statearr_35995_36063[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 26))
{var inst_35861 = (state_35933[19]);var inst_35919 = (state_35933[2]);var inst_35920 = cljs.core.seq.call(null,inst_35861);var state_35933__$1 = (function (){var statearr_35996 = state_35933;(statearr_35996[30] = inst_35919);
return statearr_35996;
})();if(inst_35920)
{var statearr_35997_36064 = state_35933__$1;(statearr_35997_36064[1] = 42);
} else
{var statearr_35998_36065 = state_35933__$1;(statearr_35998_36065[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 27))
{var inst_35870 = (state_35933[11]);var inst_35872 = (state_35933[13]);var inst_35877 = cljs.core._nth.call(null,inst_35870,inst_35872);var state_35933__$1 = (function (){var statearr_35999 = state_35933;(statearr_35999[8] = inst_35877);
return statearr_35999;
})();var statearr_36000_36066 = state_35933__$1;(statearr_36000_36066[2] = null);
(statearr_36000_36066[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 28))
{var inst_35869 = (state_35933[10]);var inst_35890 = (state_35933[9]);var inst_35890__$1 = cljs.core.seq.call(null,inst_35869);var state_35933__$1 = (function (){var statearr_36004 = state_35933;(statearr_36004[9] = inst_35890__$1);
return statearr_36004;
})();if(inst_35890__$1)
{var statearr_36005_36067 = state_35933__$1;(statearr_36005_36067[1] = 33);
} else
{var statearr_36006_36068 = state_35933__$1;(statearr_36006_36068[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 29))
{var inst_35917 = (state_35933[2]);var state_35933__$1 = state_35933;var statearr_36007_36069 = state_35933__$1;(statearr_36007_36069[2] = inst_35917);
(statearr_36007_36069[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 30))
{var inst_35869 = (state_35933[10]);var inst_35870 = (state_35933[11]);var inst_35871 = (state_35933[12]);var inst_35872 = (state_35933[13]);var inst_35886 = (state_35933[2]);var inst_35887 = (inst_35872 + 1);var tmp36001 = inst_35869;var tmp36002 = inst_35870;var tmp36003 = inst_35871;var inst_35869__$1 = tmp36001;var inst_35870__$1 = tmp36002;var inst_35871__$1 = tmp36003;var inst_35872__$1 = inst_35887;var state_35933__$1 = (function (){var statearr_36008 = state_35933;(statearr_36008[10] = inst_35869__$1);
(statearr_36008[11] = inst_35870__$1);
(statearr_36008[12] = inst_35871__$1);
(statearr_36008[31] = inst_35886);
(statearr_36008[13] = inst_35872__$1);
return statearr_36008;
})();var statearr_36009_36070 = state_35933__$1;(statearr_36009_36070[2] = null);
(statearr_36009_36070[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35934 === 31))
{var inst_35877 = (state_35933[8]);var inst_35878 = (state_35933[2]);var inst_35879 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35880 = cljs.core.async.untap_STAR_.call(null,m,inst_35877);var state_35933__$1 = (function (){var statearr_36010 = state_35933;(statearr_36010[32] = inst_35878);
(statearr_36010[33] = inst_35879);
return statearr_36010;
})();var statearr_36011_36071 = state_35933__$1;(statearr_36011_36071[2] = inst_35880);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933__$1);
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
var state_machine__13648__auto____0 = (function (){var statearr_36015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36015[0] = state_machine__13648__auto__);
(statearr_36015[1] = 1);
return statearr_36015;
});
var state_machine__13648__auto____1 = (function (state_35933){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_35933);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e36016){if((e36016 instanceof Object))
{var ex__13651__auto__ = e36016;var statearr_36017_36072 = state_35933;(statearr_36017_36072[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36073 = state_35933;
state_35933 = G__36073;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_36018 = f__13746__auto__.call(null);(statearr_36018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___36019);
return statearr_36018;
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
cljs.core.async.Mix = (function (){var obj36075 = {};return obj36075;
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
;var m = (function (){if(typeof cljs.core.async.t36185 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36185 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36186){
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
this.meta36186 = meta36186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36185.cljs$lang$type = true;
cljs.core.async.t36185.cljs$lang$ctorStr = "cljs.core.async/t36185";
cljs.core.async.t36185.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t36185");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36185.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36187){var self__ = this;
var _36187__$1 = this;return self__.meta36186;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36187,meta36186__$1){var self__ = this;
var _36187__$1 = this;return (new cljs.core.async.t36185(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36186__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36185 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36185(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36186){return (new cljs.core.async.t36185(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36186));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36185(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13745__auto___36294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_36252){var state_val_36253 = (state_36252[1]);if((state_val_36253 === 1))
{var inst_36191 = (state_36252[7]);var inst_36191__$1 = calc_state.call(null);var inst_36192 = cljs.core.seq_QMARK_.call(null,inst_36191__$1);var state_36252__$1 = (function (){var statearr_36254 = state_36252;(statearr_36254[7] = inst_36191__$1);
return statearr_36254;
})();if(inst_36192)
{var statearr_36255_36295 = state_36252__$1;(statearr_36255_36295[1] = 2);
} else
{var statearr_36256_36296 = state_36252__$1;(statearr_36256_36296[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 2))
{var inst_36191 = (state_36252[7]);var inst_36194 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36191);var state_36252__$1 = state_36252;var statearr_36257_36297 = state_36252__$1;(statearr_36257_36297[2] = inst_36194);
(statearr_36257_36297[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 3))
{var inst_36191 = (state_36252[7]);var state_36252__$1 = state_36252;var statearr_36258_36298 = state_36252__$1;(statearr_36258_36298[2] = inst_36191);
(statearr_36258_36298[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 4))
{var inst_36191 = (state_36252[7]);var inst_36197 = (state_36252[2]);var inst_36198 = cljs.core.get.call(null,inst_36197,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36199 = cljs.core.get.call(null,inst_36197,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36200 = cljs.core.get.call(null,inst_36197,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36201 = inst_36191;var state_36252__$1 = (function (){var statearr_36259 = state_36252;(statearr_36259[8] = inst_36198);
(statearr_36259[9] = inst_36199);
(statearr_36259[10] = inst_36200);
(statearr_36259[11] = inst_36201);
return statearr_36259;
})();var statearr_36260_36299 = state_36252__$1;(statearr_36260_36299[2] = null);
(statearr_36260_36299[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 5))
{var inst_36201 = (state_36252[11]);var inst_36204 = cljs.core.seq_QMARK_.call(null,inst_36201);var state_36252__$1 = state_36252;if(inst_36204)
{var statearr_36261_36300 = state_36252__$1;(statearr_36261_36300[1] = 7);
} else
{var statearr_36262_36301 = state_36252__$1;(statearr_36262_36301[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 6))
{var inst_36250 = (state_36252[2]);var state_36252__$1 = state_36252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36252__$1,inst_36250);
} else
{if((state_val_36253 === 7))
{var inst_36201 = (state_36252[11]);var inst_36206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36201);var state_36252__$1 = state_36252;var statearr_36263_36302 = state_36252__$1;(statearr_36263_36302[2] = inst_36206);
(statearr_36263_36302[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 8))
{var inst_36201 = (state_36252[11]);var state_36252__$1 = state_36252;var statearr_36264_36303 = state_36252__$1;(statearr_36264_36303[2] = inst_36201);
(statearr_36264_36303[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 9))
{var inst_36209 = (state_36252[12]);var inst_36209__$1 = (state_36252[2]);var inst_36210 = cljs.core.get.call(null,inst_36209__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36211 = cljs.core.get.call(null,inst_36209__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36212 = cljs.core.get.call(null,inst_36209__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36252__$1 = (function (){var statearr_36265 = state_36252;(statearr_36265[12] = inst_36209__$1);
(statearr_36265[13] = inst_36211);
(statearr_36265[14] = inst_36212);
return statearr_36265;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36252__$1,10,inst_36210);
} else
{if((state_val_36253 === 10))
{var inst_36217 = (state_36252[15]);var inst_36216 = (state_36252[16]);var inst_36215 = (state_36252[2]);var inst_36216__$1 = cljs.core.nth.call(null,inst_36215,0,null);var inst_36217__$1 = cljs.core.nth.call(null,inst_36215,1,null);var inst_36218 = (inst_36216__$1 == null);var inst_36219 = cljs.core._EQ_.call(null,inst_36217__$1,change);var inst_36220 = (inst_36218) || (inst_36219);var state_36252__$1 = (function (){var statearr_36266 = state_36252;(statearr_36266[15] = inst_36217__$1);
(statearr_36266[16] = inst_36216__$1);
return statearr_36266;
})();if(cljs.core.truth_(inst_36220))
{var statearr_36267_36304 = state_36252__$1;(statearr_36267_36304[1] = 11);
} else
{var statearr_36268_36305 = state_36252__$1;(statearr_36268_36305[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 11))
{var inst_36216 = (state_36252[16]);var inst_36222 = (inst_36216 == null);var state_36252__$1 = state_36252;if(cljs.core.truth_(inst_36222))
{var statearr_36269_36306 = state_36252__$1;(statearr_36269_36306[1] = 14);
} else
{var statearr_36270_36307 = state_36252__$1;(statearr_36270_36307[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 12))
{var inst_36231 = (state_36252[17]);var inst_36217 = (state_36252[15]);var inst_36212 = (state_36252[14]);var inst_36231__$1 = inst_36212.call(null,inst_36217);var state_36252__$1 = (function (){var statearr_36271 = state_36252;(statearr_36271[17] = inst_36231__$1);
return statearr_36271;
})();if(cljs.core.truth_(inst_36231__$1))
{var statearr_36272_36308 = state_36252__$1;(statearr_36272_36308[1] = 17);
} else
{var statearr_36273_36309 = state_36252__$1;(statearr_36273_36309[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 13))
{var inst_36248 = (state_36252[2]);var state_36252__$1 = state_36252;var statearr_36274_36310 = state_36252__$1;(statearr_36274_36310[2] = inst_36248);
(statearr_36274_36310[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 14))
{var inst_36217 = (state_36252[15]);var inst_36224 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36217);var state_36252__$1 = state_36252;var statearr_36275_36311 = state_36252__$1;(statearr_36275_36311[2] = inst_36224);
(statearr_36275_36311[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 15))
{var state_36252__$1 = state_36252;var statearr_36276_36312 = state_36252__$1;(statearr_36276_36312[2] = null);
(statearr_36276_36312[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 16))
{var inst_36227 = (state_36252[2]);var inst_36228 = calc_state.call(null);var inst_36201 = inst_36228;var state_36252__$1 = (function (){var statearr_36277 = state_36252;(statearr_36277[18] = inst_36227);
(statearr_36277[11] = inst_36201);
return statearr_36277;
})();var statearr_36278_36313 = state_36252__$1;(statearr_36278_36313[2] = null);
(statearr_36278_36313[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 17))
{var inst_36231 = (state_36252[17]);var state_36252__$1 = state_36252;var statearr_36279_36314 = state_36252__$1;(statearr_36279_36314[2] = inst_36231);
(statearr_36279_36314[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 18))
{var inst_36217 = (state_36252[15]);var inst_36211 = (state_36252[13]);var inst_36212 = (state_36252[14]);var inst_36234 = cljs.core.empty_QMARK_.call(null,inst_36212);var inst_36235 = inst_36211.call(null,inst_36217);var inst_36236 = cljs.core.not.call(null,inst_36235);var inst_36237 = (inst_36234) && (inst_36236);var state_36252__$1 = state_36252;var statearr_36280_36315 = state_36252__$1;(statearr_36280_36315[2] = inst_36237);
(statearr_36280_36315[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 19))
{var inst_36239 = (state_36252[2]);var state_36252__$1 = state_36252;if(cljs.core.truth_(inst_36239))
{var statearr_36281_36316 = state_36252__$1;(statearr_36281_36316[1] = 20);
} else
{var statearr_36282_36317 = state_36252__$1;(statearr_36282_36317[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 20))
{var inst_36216 = (state_36252[16]);var state_36252__$1 = state_36252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36252__$1,23,out,inst_36216);
} else
{if((state_val_36253 === 21))
{var state_36252__$1 = state_36252;var statearr_36283_36318 = state_36252__$1;(statearr_36283_36318[2] = null);
(statearr_36283_36318[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 22))
{var inst_36209 = (state_36252[12]);var inst_36245 = (state_36252[2]);var inst_36201 = inst_36209;var state_36252__$1 = (function (){var statearr_36284 = state_36252;(statearr_36284[19] = inst_36245);
(statearr_36284[11] = inst_36201);
return statearr_36284;
})();var statearr_36285_36319 = state_36252__$1;(statearr_36285_36319[2] = null);
(statearr_36285_36319[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36253 === 23))
{var inst_36242 = (state_36252[2]);var state_36252__$1 = state_36252;var statearr_36286_36320 = state_36252__$1;(statearr_36286_36320[2] = inst_36242);
(statearr_36286_36320[1] = 22);
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
var state_machine__13648__auto____0 = (function (){var statearr_36290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36290[0] = state_machine__13648__auto__);
(statearr_36290[1] = 1);
return statearr_36290;
});
var state_machine__13648__auto____1 = (function (state_36252){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_36252);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e36291){if((e36291 instanceof Object))
{var ex__13651__auto__ = e36291;var statearr_36292_36321 = state_36252;(statearr_36292_36321[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36322 = state_36252;
state_36252 = G__36322;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_36252){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_36252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_36293 = f__13746__auto__.call(null);(statearr_36293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___36294);
return statearr_36293;
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
cljs.core.async.Pub = (function (){var obj36324 = {};return obj36324;
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
return (function (p1__36325_SHARP_){if(cljs.core.truth_(p1__36325_SHARP_.call(null,topic)))
{return p1__36325_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36325_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7862__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36450 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36450 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36451){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36451 = meta36451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36450.cljs$lang$type = true;
cljs.core.async.t36450.cljs$lang$ctorStr = "cljs.core.async/t36450";
cljs.core.async.t36450.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t36450");
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36450.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36452){var self__ = this;
var _36452__$1 = this;return self__.meta36451;
});})(mults,ensure_mult))
;
cljs.core.async.t36450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36452,meta36451__$1){var self__ = this;
var _36452__$1 = this;return (new cljs.core.async.t36450(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36451__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36450 = ((function (mults,ensure_mult){
return (function __GT_t36450(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36451){return (new cljs.core.async.t36450(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36451));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36450(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13745__auto___36574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_36526){var state_val_36527 = (state_36526[1]);if((state_val_36527 === 1))
{var state_36526__$1 = state_36526;var statearr_36528_36575 = state_36526__$1;(statearr_36528_36575[2] = null);
(statearr_36528_36575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 2))
{var state_36526__$1 = state_36526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36526__$1,4,ch);
} else
{if((state_val_36527 === 3))
{var inst_36524 = (state_36526[2]);var state_36526__$1 = state_36526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36526__$1,inst_36524);
} else
{if((state_val_36527 === 4))
{var inst_36455 = (state_36526[7]);var inst_36455__$1 = (state_36526[2]);var inst_36456 = (inst_36455__$1 == null);var state_36526__$1 = (function (){var statearr_36529 = state_36526;(statearr_36529[7] = inst_36455__$1);
return statearr_36529;
})();if(cljs.core.truth_(inst_36456))
{var statearr_36530_36576 = state_36526__$1;(statearr_36530_36576[1] = 5);
} else
{var statearr_36531_36577 = state_36526__$1;(statearr_36531_36577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 5))
{var inst_36462 = cljs.core.deref.call(null,mults);var inst_36463 = cljs.core.vals.call(null,inst_36462);var inst_36464 = cljs.core.seq.call(null,inst_36463);var inst_36465 = inst_36464;var inst_36466 = null;var inst_36467 = 0;var inst_36468 = 0;var state_36526__$1 = (function (){var statearr_36532 = state_36526;(statearr_36532[8] = inst_36465);
(statearr_36532[9] = inst_36468);
(statearr_36532[10] = inst_36467);
(statearr_36532[11] = inst_36466);
return statearr_36532;
})();var statearr_36533_36578 = state_36526__$1;(statearr_36533_36578[2] = null);
(statearr_36533_36578[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 6))
{var inst_36503 = (state_36526[12]);var inst_36505 = (state_36526[13]);var inst_36455 = (state_36526[7]);var inst_36503__$1 = topic_fn.call(null,inst_36455);var inst_36504 = cljs.core.deref.call(null,mults);var inst_36505__$1 = cljs.core.get.call(null,inst_36504,inst_36503__$1);var state_36526__$1 = (function (){var statearr_36534 = state_36526;(statearr_36534[12] = inst_36503__$1);
(statearr_36534[13] = inst_36505__$1);
return statearr_36534;
})();if(cljs.core.truth_(inst_36505__$1))
{var statearr_36535_36579 = state_36526__$1;(statearr_36535_36579[1] = 19);
} else
{var statearr_36536_36580 = state_36526__$1;(statearr_36536_36580[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 7))
{var inst_36522 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36537_36581 = state_36526__$1;(statearr_36537_36581[2] = inst_36522);
(statearr_36537_36581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 8))
{var inst_36468 = (state_36526[9]);var inst_36467 = (state_36526[10]);var inst_36470 = (inst_36468 < inst_36467);var inst_36471 = inst_36470;var state_36526__$1 = state_36526;if(cljs.core.truth_(inst_36471))
{var statearr_36541_36582 = state_36526__$1;(statearr_36541_36582[1] = 10);
} else
{var statearr_36542_36583 = state_36526__$1;(statearr_36542_36583[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 9))
{var inst_36501 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36543_36584 = state_36526__$1;(statearr_36543_36584[2] = inst_36501);
(statearr_36543_36584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 10))
{var inst_36465 = (state_36526[8]);var inst_36468 = (state_36526[9]);var inst_36467 = (state_36526[10]);var inst_36466 = (state_36526[11]);var inst_36473 = cljs.core._nth.call(null,inst_36466,inst_36468);var inst_36474 = cljs.core.async.muxch_STAR_.call(null,inst_36473);var inst_36475 = cljs.core.async.close_BANG_.call(null,inst_36474);var inst_36476 = (inst_36468 + 1);var tmp36538 = inst_36465;var tmp36539 = inst_36467;var tmp36540 = inst_36466;var inst_36465__$1 = tmp36538;var inst_36466__$1 = tmp36540;var inst_36467__$1 = tmp36539;var inst_36468__$1 = inst_36476;var state_36526__$1 = (function (){var statearr_36544 = state_36526;(statearr_36544[8] = inst_36465__$1);
(statearr_36544[14] = inst_36475);
(statearr_36544[9] = inst_36468__$1);
(statearr_36544[10] = inst_36467__$1);
(statearr_36544[11] = inst_36466__$1);
return statearr_36544;
})();var statearr_36545_36585 = state_36526__$1;(statearr_36545_36585[2] = null);
(statearr_36545_36585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 11))
{var inst_36465 = (state_36526[8]);var inst_36479 = (state_36526[15]);var inst_36479__$1 = cljs.core.seq.call(null,inst_36465);var state_36526__$1 = (function (){var statearr_36546 = state_36526;(statearr_36546[15] = inst_36479__$1);
return statearr_36546;
})();if(inst_36479__$1)
{var statearr_36547_36586 = state_36526__$1;(statearr_36547_36586[1] = 13);
} else
{var statearr_36548_36587 = state_36526__$1;(statearr_36548_36587[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 12))
{var inst_36499 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36549_36588 = state_36526__$1;(statearr_36549_36588[2] = inst_36499);
(statearr_36549_36588[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 13))
{var inst_36479 = (state_36526[15]);var inst_36481 = cljs.core.chunked_seq_QMARK_.call(null,inst_36479);var state_36526__$1 = state_36526;if(inst_36481)
{var statearr_36550_36589 = state_36526__$1;(statearr_36550_36589[1] = 16);
} else
{var statearr_36551_36590 = state_36526__$1;(statearr_36551_36590[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 14))
{var state_36526__$1 = state_36526;var statearr_36552_36591 = state_36526__$1;(statearr_36552_36591[2] = null);
(statearr_36552_36591[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 15))
{var inst_36497 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36553_36592 = state_36526__$1;(statearr_36553_36592[2] = inst_36497);
(statearr_36553_36592[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 16))
{var inst_36479 = (state_36526[15]);var inst_36483 = cljs.core.chunk_first.call(null,inst_36479);var inst_36484 = cljs.core.chunk_rest.call(null,inst_36479);var inst_36485 = cljs.core.count.call(null,inst_36483);var inst_36465 = inst_36484;var inst_36466 = inst_36483;var inst_36467 = inst_36485;var inst_36468 = 0;var state_36526__$1 = (function (){var statearr_36554 = state_36526;(statearr_36554[8] = inst_36465);
(statearr_36554[9] = inst_36468);
(statearr_36554[10] = inst_36467);
(statearr_36554[11] = inst_36466);
return statearr_36554;
})();var statearr_36555_36593 = state_36526__$1;(statearr_36555_36593[2] = null);
(statearr_36555_36593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 17))
{var inst_36479 = (state_36526[15]);var inst_36488 = cljs.core.first.call(null,inst_36479);var inst_36489 = cljs.core.async.muxch_STAR_.call(null,inst_36488);var inst_36490 = cljs.core.async.close_BANG_.call(null,inst_36489);var inst_36491 = cljs.core.next.call(null,inst_36479);var inst_36465 = inst_36491;var inst_36466 = null;var inst_36467 = 0;var inst_36468 = 0;var state_36526__$1 = (function (){var statearr_36556 = state_36526;(statearr_36556[8] = inst_36465);
(statearr_36556[16] = inst_36490);
(statearr_36556[9] = inst_36468);
(statearr_36556[10] = inst_36467);
(statearr_36556[11] = inst_36466);
return statearr_36556;
})();var statearr_36557_36594 = state_36526__$1;(statearr_36557_36594[2] = null);
(statearr_36557_36594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 18))
{var inst_36494 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36558_36595 = state_36526__$1;(statearr_36558_36595[2] = inst_36494);
(statearr_36558_36595[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 19))
{var state_36526__$1 = state_36526;var statearr_36559_36596 = state_36526__$1;(statearr_36559_36596[2] = null);
(statearr_36559_36596[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 20))
{var state_36526__$1 = state_36526;var statearr_36560_36597 = state_36526__$1;(statearr_36560_36597[2] = null);
(statearr_36560_36597[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 21))
{var inst_36519 = (state_36526[2]);var state_36526__$1 = (function (){var statearr_36561 = state_36526;(statearr_36561[17] = inst_36519);
return statearr_36561;
})();var statearr_36562_36598 = state_36526__$1;(statearr_36562_36598[2] = null);
(statearr_36562_36598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 22))
{var inst_36516 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36563_36599 = state_36526__$1;(statearr_36563_36599[2] = inst_36516);
(statearr_36563_36599[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 23))
{var inst_36503 = (state_36526[12]);var inst_36507 = (state_36526[2]);var inst_36508 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36503);var state_36526__$1 = (function (){var statearr_36564 = state_36526;(statearr_36564[18] = inst_36507);
return statearr_36564;
})();var statearr_36565_36600 = state_36526__$1;(statearr_36565_36600[2] = inst_36508);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36527 === 24))
{var inst_36505 = (state_36526[13]);var inst_36455 = (state_36526[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36526,23,Object,null,22);var inst_36512 = cljs.core.async.muxch_STAR_.call(null,inst_36505);var state_36526__$1 = state_36526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36526__$1,25,inst_36512,inst_36455);
} else
{if((state_val_36527 === 25))
{var inst_36514 = (state_36526[2]);var state_36526__$1 = state_36526;var statearr_36566_36601 = state_36526__$1;(statearr_36566_36601[2] = inst_36514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36526__$1);
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
var state_machine__13648__auto____0 = (function (){var statearr_36570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36570[0] = state_machine__13648__auto__);
(statearr_36570[1] = 1);
return statearr_36570;
});
var state_machine__13648__auto____1 = (function (state_36526){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_36526);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e36571){if((e36571 instanceof Object))
{var ex__13651__auto__ = e36571;var statearr_36572_36602 = state_36526;(statearr_36572_36602[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36526);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36603 = state_36526;
state_36526 = G__36603;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_36526){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_36526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_36573 = f__13746__auto__.call(null);(statearr_36573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___36574);
return statearr_36573;
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
,cljs.core.range.call(null,cnt));var c__13745__auto___36740 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_36710){var state_val_36711 = (state_36710[1]);if((state_val_36711 === 1))
{var state_36710__$1 = state_36710;var statearr_36712_36741 = state_36710__$1;(statearr_36712_36741[2] = null);
(statearr_36712_36741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 2))
{var inst_36673 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36674 = 0;var state_36710__$1 = (function (){var statearr_36713 = state_36710;(statearr_36713[7] = inst_36673);
(statearr_36713[8] = inst_36674);
return statearr_36713;
})();var statearr_36714_36742 = state_36710__$1;(statearr_36714_36742[2] = null);
(statearr_36714_36742[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 3))
{var inst_36708 = (state_36710[2]);var state_36710__$1 = state_36710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36710__$1,inst_36708);
} else
{if((state_val_36711 === 4))
{var inst_36674 = (state_36710[8]);var inst_36676 = (inst_36674 < cnt);var state_36710__$1 = state_36710;if(cljs.core.truth_(inst_36676))
{var statearr_36715_36743 = state_36710__$1;(statearr_36715_36743[1] = 6);
} else
{var statearr_36716_36744 = state_36710__$1;(statearr_36716_36744[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 5))
{var inst_36694 = (state_36710[2]);var state_36710__$1 = (function (){var statearr_36717 = state_36710;(statearr_36717[9] = inst_36694);
return statearr_36717;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36710__$1,12,dchan);
} else
{if((state_val_36711 === 6))
{var state_36710__$1 = state_36710;var statearr_36718_36745 = state_36710__$1;(statearr_36718_36745[2] = null);
(statearr_36718_36745[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 7))
{var state_36710__$1 = state_36710;var statearr_36719_36746 = state_36710__$1;(statearr_36719_36746[2] = null);
(statearr_36719_36746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 8))
{var inst_36692 = (state_36710[2]);var state_36710__$1 = state_36710;var statearr_36720_36747 = state_36710__$1;(statearr_36720_36747[2] = inst_36692);
(statearr_36720_36747[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 9))
{var inst_36674 = (state_36710[8]);var inst_36687 = (state_36710[2]);var inst_36688 = (inst_36674 + 1);var inst_36674__$1 = inst_36688;var state_36710__$1 = (function (){var statearr_36721 = state_36710;(statearr_36721[8] = inst_36674__$1);
(statearr_36721[10] = inst_36687);
return statearr_36721;
})();var statearr_36722_36748 = state_36710__$1;(statearr_36722_36748[2] = null);
(statearr_36722_36748[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 10))
{var inst_36678 = (state_36710[2]);var inst_36679 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36710__$1 = (function (){var statearr_36723 = state_36710;(statearr_36723[11] = inst_36678);
return statearr_36723;
})();var statearr_36724_36749 = state_36710__$1;(statearr_36724_36749[2] = inst_36679);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36710__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 11))
{var inst_36674 = (state_36710[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36710,10,Object,null,9);var inst_36683 = chs__$1.call(null,inst_36674);var inst_36684 = done.call(null,inst_36674);var inst_36685 = cljs.core.async.take_BANG_.call(null,inst_36683,inst_36684);var state_36710__$1 = state_36710;var statearr_36725_36750 = state_36710__$1;(statearr_36725_36750[2] = inst_36685);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36710__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 12))
{var inst_36696 = (state_36710[12]);var inst_36696__$1 = (state_36710[2]);var inst_36697 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36696__$1);var state_36710__$1 = (function (){var statearr_36726 = state_36710;(statearr_36726[12] = inst_36696__$1);
return statearr_36726;
})();if(cljs.core.truth_(inst_36697))
{var statearr_36727_36751 = state_36710__$1;(statearr_36727_36751[1] = 13);
} else
{var statearr_36728_36752 = state_36710__$1;(statearr_36728_36752[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 13))
{var inst_36699 = cljs.core.async.close_BANG_.call(null,out);var state_36710__$1 = state_36710;var statearr_36729_36753 = state_36710__$1;(statearr_36729_36753[2] = inst_36699);
(statearr_36729_36753[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 14))
{var inst_36696 = (state_36710[12]);var inst_36701 = cljs.core.apply.call(null,f,inst_36696);var state_36710__$1 = state_36710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36710__$1,16,out,inst_36701);
} else
{if((state_val_36711 === 15))
{var inst_36706 = (state_36710[2]);var state_36710__$1 = state_36710;var statearr_36730_36754 = state_36710__$1;(statearr_36730_36754[2] = inst_36706);
(statearr_36730_36754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36711 === 16))
{var inst_36703 = (state_36710[2]);var state_36710__$1 = (function (){var statearr_36731 = state_36710;(statearr_36731[13] = inst_36703);
return statearr_36731;
})();var statearr_36732_36755 = state_36710__$1;(statearr_36732_36755[2] = null);
(statearr_36732_36755[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_36736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36736[0] = state_machine__13648__auto__);
(statearr_36736[1] = 1);
return statearr_36736;
});
var state_machine__13648__auto____1 = (function (state_36710){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_36710);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e36737){if((e36737 instanceof Object))
{var ex__13651__auto__ = e36737;var statearr_36738_36756 = state_36710;(statearr_36738_36756[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36710);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36757 = state_36710;
state_36710 = G__36757;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_36710){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_36710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_36739 = f__13746__auto__.call(null);(statearr_36739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___36740);
return statearr_36739;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___36865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_36841){var state_val_36842 = (state_36841[1]);if((state_val_36842 === 1))
{var inst_36812 = cljs.core.vec.call(null,chs);var inst_36813 = inst_36812;var state_36841__$1 = (function (){var statearr_36843 = state_36841;(statearr_36843[7] = inst_36813);
return statearr_36843;
})();var statearr_36844_36866 = state_36841__$1;(statearr_36844_36866[2] = null);
(statearr_36844_36866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 2))
{var inst_36813 = (state_36841[7]);var inst_36815 = cljs.core.count.call(null,inst_36813);var inst_36816 = (inst_36815 > 0);var state_36841__$1 = state_36841;if(cljs.core.truth_(inst_36816))
{var statearr_36845_36867 = state_36841__$1;(statearr_36845_36867[1] = 4);
} else
{var statearr_36846_36868 = state_36841__$1;(statearr_36846_36868[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 3))
{var inst_36839 = (state_36841[2]);var state_36841__$1 = state_36841;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36841__$1,inst_36839);
} else
{if((state_val_36842 === 4))
{var inst_36813 = (state_36841[7]);var state_36841__$1 = state_36841;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36841__$1,7,inst_36813);
} else
{if((state_val_36842 === 5))
{var inst_36835 = cljs.core.async.close_BANG_.call(null,out);var state_36841__$1 = state_36841;var statearr_36847_36869 = state_36841__$1;(statearr_36847_36869[2] = inst_36835);
(statearr_36847_36869[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 6))
{var inst_36837 = (state_36841[2]);var state_36841__$1 = state_36841;var statearr_36848_36870 = state_36841__$1;(statearr_36848_36870[2] = inst_36837);
(statearr_36848_36870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 7))
{var inst_36821 = (state_36841[8]);var inst_36820 = (state_36841[9]);var inst_36820__$1 = (state_36841[2]);var inst_36821__$1 = cljs.core.nth.call(null,inst_36820__$1,0,null);var inst_36822 = cljs.core.nth.call(null,inst_36820__$1,1,null);var inst_36823 = (inst_36821__$1 == null);var state_36841__$1 = (function (){var statearr_36849 = state_36841;(statearr_36849[10] = inst_36822);
(statearr_36849[8] = inst_36821__$1);
(statearr_36849[9] = inst_36820__$1);
return statearr_36849;
})();if(cljs.core.truth_(inst_36823))
{var statearr_36850_36871 = state_36841__$1;(statearr_36850_36871[1] = 8);
} else
{var statearr_36851_36872 = state_36841__$1;(statearr_36851_36872[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 8))
{var inst_36822 = (state_36841[10]);var inst_36821 = (state_36841[8]);var inst_36820 = (state_36841[9]);var inst_36813 = (state_36841[7]);var inst_36825 = (function (){var c = inst_36822;var v = inst_36821;var vec__36818 = inst_36820;var cs = inst_36813;return ((function (c,v,vec__36818,cs,inst_36822,inst_36821,inst_36820,inst_36813,state_val_36842){
return (function (p1__36758_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36758_SHARP_);
});
;})(c,v,vec__36818,cs,inst_36822,inst_36821,inst_36820,inst_36813,state_val_36842))
})();var inst_36826 = cljs.core.filterv.call(null,inst_36825,inst_36813);var inst_36813__$1 = inst_36826;var state_36841__$1 = (function (){var statearr_36852 = state_36841;(statearr_36852[7] = inst_36813__$1);
return statearr_36852;
})();var statearr_36853_36873 = state_36841__$1;(statearr_36853_36873[2] = null);
(statearr_36853_36873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 9))
{var inst_36821 = (state_36841[8]);var state_36841__$1 = state_36841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36841__$1,11,out,inst_36821);
} else
{if((state_val_36842 === 10))
{var inst_36833 = (state_36841[2]);var state_36841__$1 = state_36841;var statearr_36855_36874 = state_36841__$1;(statearr_36855_36874[2] = inst_36833);
(statearr_36855_36874[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36842 === 11))
{var inst_36813 = (state_36841[7]);var inst_36830 = (state_36841[2]);var tmp36854 = inst_36813;var inst_36813__$1 = tmp36854;var state_36841__$1 = (function (){var statearr_36856 = state_36841;(statearr_36856[11] = inst_36830);
(statearr_36856[7] = inst_36813__$1);
return statearr_36856;
})();var statearr_36857_36875 = state_36841__$1;(statearr_36857_36875[2] = null);
(statearr_36857_36875[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_36861 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36861[0] = state_machine__13648__auto__);
(statearr_36861[1] = 1);
return statearr_36861;
});
var state_machine__13648__auto____1 = (function (state_36841){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_36841);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e36862){if((e36862 instanceof Object))
{var ex__13651__auto__ = e36862;var statearr_36863_36876 = state_36841;(statearr_36863_36876[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36841);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36877 = state_36841;
state_36841 = G__36877;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_36841){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_36841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_36864 = f__13746__auto__.call(null);(statearr_36864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___36865);
return statearr_36864;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___36970 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_36947){var state_val_36948 = (state_36947[1]);if((state_val_36948 === 1))
{var inst_36924 = 0;var state_36947__$1 = (function (){var statearr_36949 = state_36947;(statearr_36949[7] = inst_36924);
return statearr_36949;
})();var statearr_36950_36971 = state_36947__$1;(statearr_36950_36971[2] = null);
(statearr_36950_36971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 2))
{var inst_36924 = (state_36947[7]);var inst_36926 = (inst_36924 < n);var state_36947__$1 = state_36947;if(cljs.core.truth_(inst_36926))
{var statearr_36951_36972 = state_36947__$1;(statearr_36951_36972[1] = 4);
} else
{var statearr_36952_36973 = state_36947__$1;(statearr_36952_36973[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 3))
{var inst_36944 = (state_36947[2]);var inst_36945 = cljs.core.async.close_BANG_.call(null,out);var state_36947__$1 = (function (){var statearr_36953 = state_36947;(statearr_36953[8] = inst_36944);
return statearr_36953;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36947__$1,inst_36945);
} else
{if((state_val_36948 === 4))
{var state_36947__$1 = state_36947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36947__$1,7,ch);
} else
{if((state_val_36948 === 5))
{var state_36947__$1 = state_36947;var statearr_36954_36974 = state_36947__$1;(statearr_36954_36974[2] = null);
(statearr_36954_36974[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 6))
{var inst_36942 = (state_36947[2]);var state_36947__$1 = state_36947;var statearr_36955_36975 = state_36947__$1;(statearr_36955_36975[2] = inst_36942);
(statearr_36955_36975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 7))
{var inst_36929 = (state_36947[9]);var inst_36929__$1 = (state_36947[2]);var inst_36930 = (inst_36929__$1 == null);var inst_36931 = cljs.core.not.call(null,inst_36930);var state_36947__$1 = (function (){var statearr_36956 = state_36947;(statearr_36956[9] = inst_36929__$1);
return statearr_36956;
})();if(inst_36931)
{var statearr_36957_36976 = state_36947__$1;(statearr_36957_36976[1] = 8);
} else
{var statearr_36958_36977 = state_36947__$1;(statearr_36958_36977[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 8))
{var inst_36929 = (state_36947[9]);var state_36947__$1 = state_36947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,11,out,inst_36929);
} else
{if((state_val_36948 === 9))
{var state_36947__$1 = state_36947;var statearr_36959_36978 = state_36947__$1;(statearr_36959_36978[2] = null);
(statearr_36959_36978[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 10))
{var inst_36939 = (state_36947[2]);var state_36947__$1 = state_36947;var statearr_36960_36979 = state_36947__$1;(statearr_36960_36979[2] = inst_36939);
(statearr_36960_36979[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36948 === 11))
{var inst_36924 = (state_36947[7]);var inst_36934 = (state_36947[2]);var inst_36935 = (inst_36924 + 1);var inst_36924__$1 = inst_36935;var state_36947__$1 = (function (){var statearr_36961 = state_36947;(statearr_36961[10] = inst_36934);
(statearr_36961[7] = inst_36924__$1);
return statearr_36961;
})();var statearr_36962_36980 = state_36947__$1;(statearr_36962_36980[2] = null);
(statearr_36962_36980[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_36966 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36966[0] = state_machine__13648__auto__);
(statearr_36966[1] = 1);
return statearr_36966;
});
var state_machine__13648__auto____1 = (function (state_36947){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_36947);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e36967){if((e36967 instanceof Object))
{var ex__13651__auto__ = e36967;var statearr_36968_36981 = state_36947;(statearr_36968_36981[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36982 = state_36947;
state_36947 = G__36982;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_36947){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_36947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_36969 = f__13746__auto__.call(null);(statearr_36969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___36970);
return statearr_36969;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___37079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_37054){var state_val_37055 = (state_37054[1]);if((state_val_37055 === 1))
{var inst_37031 = null;var state_37054__$1 = (function (){var statearr_37056 = state_37054;(statearr_37056[7] = inst_37031);
return statearr_37056;
})();var statearr_37057_37080 = state_37054__$1;(statearr_37057_37080[2] = null);
(statearr_37057_37080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 2))
{var state_37054__$1 = state_37054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37054__$1,4,ch);
} else
{if((state_val_37055 === 3))
{var inst_37051 = (state_37054[2]);var inst_37052 = cljs.core.async.close_BANG_.call(null,out);var state_37054__$1 = (function (){var statearr_37058 = state_37054;(statearr_37058[8] = inst_37051);
return statearr_37058;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37054__$1,inst_37052);
} else
{if((state_val_37055 === 4))
{var inst_37034 = (state_37054[9]);var inst_37034__$1 = (state_37054[2]);var inst_37035 = (inst_37034__$1 == null);var inst_37036 = cljs.core.not.call(null,inst_37035);var state_37054__$1 = (function (){var statearr_37059 = state_37054;(statearr_37059[9] = inst_37034__$1);
return statearr_37059;
})();if(inst_37036)
{var statearr_37060_37081 = state_37054__$1;(statearr_37060_37081[1] = 5);
} else
{var statearr_37061_37082 = state_37054__$1;(statearr_37061_37082[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 5))
{var inst_37034 = (state_37054[9]);var inst_37031 = (state_37054[7]);var inst_37038 = cljs.core._EQ_.call(null,inst_37034,inst_37031);var state_37054__$1 = state_37054;if(inst_37038)
{var statearr_37062_37083 = state_37054__$1;(statearr_37062_37083[1] = 8);
} else
{var statearr_37063_37084 = state_37054__$1;(statearr_37063_37084[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 6))
{var state_37054__$1 = state_37054;var statearr_37065_37085 = state_37054__$1;(statearr_37065_37085[2] = null);
(statearr_37065_37085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 7))
{var inst_37049 = (state_37054[2]);var state_37054__$1 = state_37054;var statearr_37066_37086 = state_37054__$1;(statearr_37066_37086[2] = inst_37049);
(statearr_37066_37086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 8))
{var inst_37031 = (state_37054[7]);var tmp37064 = inst_37031;var inst_37031__$1 = tmp37064;var state_37054__$1 = (function (){var statearr_37067 = state_37054;(statearr_37067[7] = inst_37031__$1);
return statearr_37067;
})();var statearr_37068_37087 = state_37054__$1;(statearr_37068_37087[2] = null);
(statearr_37068_37087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 9))
{var inst_37034 = (state_37054[9]);var state_37054__$1 = state_37054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37054__$1,11,out,inst_37034);
} else
{if((state_val_37055 === 10))
{var inst_37046 = (state_37054[2]);var state_37054__$1 = state_37054;var statearr_37069_37088 = state_37054__$1;(statearr_37069_37088[2] = inst_37046);
(statearr_37069_37088[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37055 === 11))
{var inst_37034 = (state_37054[9]);var inst_37043 = (state_37054[2]);var inst_37031 = inst_37034;var state_37054__$1 = (function (){var statearr_37070 = state_37054;(statearr_37070[7] = inst_37031);
(statearr_37070[10] = inst_37043);
return statearr_37070;
})();var statearr_37071_37089 = state_37054__$1;(statearr_37071_37089[2] = null);
(statearr_37071_37089[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_37075 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37075[0] = state_machine__13648__auto__);
(statearr_37075[1] = 1);
return statearr_37075;
});
var state_machine__13648__auto____1 = (function (state_37054){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_37054);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e37076){if((e37076 instanceof Object))
{var ex__13651__auto__ = e37076;var statearr_37077_37090 = state_37054;(statearr_37077_37090[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37091 = state_37054;
state_37054 = G__37091;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_37054){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_37054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_37078 = f__13746__auto__.call(null);(statearr_37078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___37079);
return statearr_37078;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___37226 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_37196){var state_val_37197 = (state_37196[1]);if((state_val_37197 === 1))
{var inst_37159 = (new Array(n));var inst_37160 = inst_37159;var inst_37161 = 0;var state_37196__$1 = (function (){var statearr_37198 = state_37196;(statearr_37198[7] = inst_37160);
(statearr_37198[8] = inst_37161);
return statearr_37198;
})();var statearr_37199_37227 = state_37196__$1;(statearr_37199_37227[2] = null);
(statearr_37199_37227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 2))
{var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37196__$1,4,ch);
} else
{if((state_val_37197 === 3))
{var inst_37194 = (state_37196[2]);var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37196__$1,inst_37194);
} else
{if((state_val_37197 === 4))
{var inst_37164 = (state_37196[9]);var inst_37164__$1 = (state_37196[2]);var inst_37165 = (inst_37164__$1 == null);var inst_37166 = cljs.core.not.call(null,inst_37165);var state_37196__$1 = (function (){var statearr_37200 = state_37196;(statearr_37200[9] = inst_37164__$1);
return statearr_37200;
})();if(inst_37166)
{var statearr_37201_37228 = state_37196__$1;(statearr_37201_37228[1] = 5);
} else
{var statearr_37202_37229 = state_37196__$1;(statearr_37202_37229[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 5))
{var inst_37169 = (state_37196[10]);var inst_37164 = (state_37196[9]);var inst_37160 = (state_37196[7]);var inst_37161 = (state_37196[8]);var inst_37168 = (inst_37160[inst_37161] = inst_37164);var inst_37169__$1 = (inst_37161 + 1);var inst_37170 = (inst_37169__$1 < n);var state_37196__$1 = (function (){var statearr_37203 = state_37196;(statearr_37203[11] = inst_37168);
(statearr_37203[10] = inst_37169__$1);
return statearr_37203;
})();if(cljs.core.truth_(inst_37170))
{var statearr_37204_37230 = state_37196__$1;(statearr_37204_37230[1] = 8);
} else
{var statearr_37205_37231 = state_37196__$1;(statearr_37205_37231[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 6))
{var inst_37161 = (state_37196[8]);var inst_37182 = (inst_37161 > 0);var state_37196__$1 = state_37196;if(cljs.core.truth_(inst_37182))
{var statearr_37207_37232 = state_37196__$1;(statearr_37207_37232[1] = 12);
} else
{var statearr_37208_37233 = state_37196__$1;(statearr_37208_37233[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 7))
{var inst_37192 = (state_37196[2]);var state_37196__$1 = state_37196;var statearr_37209_37234 = state_37196__$1;(statearr_37209_37234[2] = inst_37192);
(statearr_37209_37234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 8))
{var inst_37169 = (state_37196[10]);var inst_37160 = (state_37196[7]);var tmp37206 = inst_37160;var inst_37160__$1 = tmp37206;var inst_37161 = inst_37169;var state_37196__$1 = (function (){var statearr_37210 = state_37196;(statearr_37210[7] = inst_37160__$1);
(statearr_37210[8] = inst_37161);
return statearr_37210;
})();var statearr_37211_37235 = state_37196__$1;(statearr_37211_37235[2] = null);
(statearr_37211_37235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 9))
{var inst_37160 = (state_37196[7]);var inst_37174 = cljs.core.vec.call(null,inst_37160);var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37196__$1,11,out,inst_37174);
} else
{if((state_val_37197 === 10))
{var inst_37180 = (state_37196[2]);var state_37196__$1 = state_37196;var statearr_37212_37236 = state_37196__$1;(statearr_37212_37236[2] = inst_37180);
(statearr_37212_37236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 11))
{var inst_37176 = (state_37196[2]);var inst_37177 = (new Array(n));var inst_37160 = inst_37177;var inst_37161 = 0;var state_37196__$1 = (function (){var statearr_37213 = state_37196;(statearr_37213[7] = inst_37160);
(statearr_37213[8] = inst_37161);
(statearr_37213[12] = inst_37176);
return statearr_37213;
})();var statearr_37214_37237 = state_37196__$1;(statearr_37214_37237[2] = null);
(statearr_37214_37237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 12))
{var inst_37160 = (state_37196[7]);var inst_37184 = cljs.core.vec.call(null,inst_37160);var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37196__$1,15,out,inst_37184);
} else
{if((state_val_37197 === 13))
{var state_37196__$1 = state_37196;var statearr_37215_37238 = state_37196__$1;(statearr_37215_37238[2] = null);
(statearr_37215_37238[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 14))
{var inst_37189 = (state_37196[2]);var inst_37190 = cljs.core.async.close_BANG_.call(null,out);var state_37196__$1 = (function (){var statearr_37216 = state_37196;(statearr_37216[13] = inst_37189);
return statearr_37216;
})();var statearr_37217_37239 = state_37196__$1;(statearr_37217_37239[2] = inst_37190);
(statearr_37217_37239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 15))
{var inst_37186 = (state_37196[2]);var state_37196__$1 = state_37196;var statearr_37218_37240 = state_37196__$1;(statearr_37218_37240[2] = inst_37186);
(statearr_37218_37240[1] = 14);
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
var state_machine__13648__auto____0 = (function (){var statearr_37222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37222[0] = state_machine__13648__auto__);
(statearr_37222[1] = 1);
return statearr_37222;
});
var state_machine__13648__auto____1 = (function (state_37196){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_37196);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e37223){if((e37223 instanceof Object))
{var ex__13651__auto__ = e37223;var statearr_37224_37241 = state_37196;(statearr_37224_37241[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37242 = state_37196;
state_37196 = G__37242;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_37196){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_37196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_37225 = f__13746__auto__.call(null);(statearr_37225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___37226);
return statearr_37225;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___37385 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_37355){var state_val_37356 = (state_37355[1]);if((state_val_37356 === 1))
{var inst_37314 = [];var inst_37315 = inst_37314;var inst_37316 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37355__$1 = (function (){var statearr_37357 = state_37355;(statearr_37357[7] = inst_37316);
(statearr_37357[8] = inst_37315);
return statearr_37357;
})();var statearr_37358_37386 = state_37355__$1;(statearr_37358_37386[2] = null);
(statearr_37358_37386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 2))
{var state_37355__$1 = state_37355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37355__$1,4,ch);
} else
{if((state_val_37356 === 3))
{var inst_37353 = (state_37355[2]);var state_37355__$1 = state_37355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37355__$1,inst_37353);
} else
{if((state_val_37356 === 4))
{var inst_37319 = (state_37355[9]);var inst_37319__$1 = (state_37355[2]);var inst_37320 = (inst_37319__$1 == null);var inst_37321 = cljs.core.not.call(null,inst_37320);var state_37355__$1 = (function (){var statearr_37359 = state_37355;(statearr_37359[9] = inst_37319__$1);
return statearr_37359;
})();if(inst_37321)
{var statearr_37360_37387 = state_37355__$1;(statearr_37360_37387[1] = 5);
} else
{var statearr_37361_37388 = state_37355__$1;(statearr_37361_37388[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 5))
{var inst_37319 = (state_37355[9]);var inst_37323 = (state_37355[10]);var inst_37316 = (state_37355[7]);var inst_37323__$1 = f.call(null,inst_37319);var inst_37324 = cljs.core._EQ_.call(null,inst_37323__$1,inst_37316);var inst_37325 = cljs.core.keyword_identical_QMARK_.call(null,inst_37316,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37326 = (inst_37324) || (inst_37325);var state_37355__$1 = (function (){var statearr_37362 = state_37355;(statearr_37362[10] = inst_37323__$1);
return statearr_37362;
})();if(cljs.core.truth_(inst_37326))
{var statearr_37363_37389 = state_37355__$1;(statearr_37363_37389[1] = 8);
} else
{var statearr_37364_37390 = state_37355__$1;(statearr_37364_37390[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 6))
{var inst_37315 = (state_37355[8]);var inst_37340 = inst_37315.length;var inst_37341 = (inst_37340 > 0);var state_37355__$1 = state_37355;if(cljs.core.truth_(inst_37341))
{var statearr_37366_37391 = state_37355__$1;(statearr_37366_37391[1] = 12);
} else
{var statearr_37367_37392 = state_37355__$1;(statearr_37367_37392[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 7))
{var inst_37351 = (state_37355[2]);var state_37355__$1 = state_37355;var statearr_37368_37393 = state_37355__$1;(statearr_37368_37393[2] = inst_37351);
(statearr_37368_37393[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 8))
{var inst_37319 = (state_37355[9]);var inst_37323 = (state_37355[10]);var inst_37315 = (state_37355[8]);var inst_37328 = inst_37315.push(inst_37319);var tmp37365 = inst_37315;var inst_37315__$1 = tmp37365;var inst_37316 = inst_37323;var state_37355__$1 = (function (){var statearr_37369 = state_37355;(statearr_37369[7] = inst_37316);
(statearr_37369[8] = inst_37315__$1);
(statearr_37369[11] = inst_37328);
return statearr_37369;
})();var statearr_37370_37394 = state_37355__$1;(statearr_37370_37394[2] = null);
(statearr_37370_37394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 9))
{var inst_37315 = (state_37355[8]);var inst_37331 = cljs.core.vec.call(null,inst_37315);var state_37355__$1 = state_37355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37355__$1,11,out,inst_37331);
} else
{if((state_val_37356 === 10))
{var inst_37338 = (state_37355[2]);var state_37355__$1 = state_37355;var statearr_37371_37395 = state_37355__$1;(statearr_37371_37395[2] = inst_37338);
(statearr_37371_37395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 11))
{var inst_37319 = (state_37355[9]);var inst_37323 = (state_37355[10]);var inst_37333 = (state_37355[2]);var inst_37334 = [];var inst_37335 = inst_37334.push(inst_37319);var inst_37315 = inst_37334;var inst_37316 = inst_37323;var state_37355__$1 = (function (){var statearr_37372 = state_37355;(statearr_37372[7] = inst_37316);
(statearr_37372[8] = inst_37315);
(statearr_37372[12] = inst_37333);
(statearr_37372[13] = inst_37335);
return statearr_37372;
})();var statearr_37373_37396 = state_37355__$1;(statearr_37373_37396[2] = null);
(statearr_37373_37396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 12))
{var inst_37315 = (state_37355[8]);var inst_37343 = cljs.core.vec.call(null,inst_37315);var state_37355__$1 = state_37355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37355__$1,15,out,inst_37343);
} else
{if((state_val_37356 === 13))
{var state_37355__$1 = state_37355;var statearr_37374_37397 = state_37355__$1;(statearr_37374_37397[2] = null);
(statearr_37374_37397[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 14))
{var inst_37348 = (state_37355[2]);var inst_37349 = cljs.core.async.close_BANG_.call(null,out);var state_37355__$1 = (function (){var statearr_37375 = state_37355;(statearr_37375[14] = inst_37348);
return statearr_37375;
})();var statearr_37376_37398 = state_37355__$1;(statearr_37376_37398[2] = inst_37349);
(statearr_37376_37398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37356 === 15))
{var inst_37345 = (state_37355[2]);var state_37355__$1 = state_37355;var statearr_37377_37399 = state_37355__$1;(statearr_37377_37399[2] = inst_37345);
(statearr_37377_37399[1] = 14);
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
var state_machine__13648__auto____0 = (function (){var statearr_37381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37381[0] = state_machine__13648__auto__);
(statearr_37381[1] = 1);
return statearr_37381;
});
var state_machine__13648__auto____1 = (function (state_37355){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_37355);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e37382){if((e37382 instanceof Object))
{var ex__13651__auto__ = e37382;var statearr_37383_37400 = state_37355;(statearr_37383_37400[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37355);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37401 = state_37355;
state_37355 = G__37401;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_37355){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_37355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_37384 = f__13746__auto__.call(null);(statearr_37384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___37385);
return statearr_37384;
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
