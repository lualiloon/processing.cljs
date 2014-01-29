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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t62574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62574 = (function (f,fn_handler,meta62575){
this.f = f;
this.fn_handler = fn_handler;
this.meta62575 = meta62575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62574.cljs$lang$type = true;
cljs.core.async.t62574.cljs$lang$ctorStr = "cljs.core.async/t62574";
cljs.core.async.t62574.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62574");
});
cljs.core.async.t62574.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t62574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t62574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t62574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62576){var self__ = this;
var _62576__$1 = this;return self__.meta62575;
});
cljs.core.async.t62574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62576,meta62575__$1){var self__ = this;
var _62576__$1 = this;return (new cljs.core.async.t62574(self__.f,self__.fn_handler,meta62575__$1));
});
cljs.core.async.__GT_t62574 = (function __GT_t62574(f__$1,fn_handler__$1,meta62575){return (new cljs.core.async.t62574(f__$1,fn_handler__$1,meta62575));
});
}
return (new cljs.core.async.t62574(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__62578 = buff;if(G__62578)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__62578.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__62578.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__62578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__62578);
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
{var val_62579 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_62579);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_62579);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8704__auto___62580 = n;var x_62581 = 0;while(true){
if((x_62581 < n__8704__auto___62580))
{(a[x_62581] = 0);
{
var G__62582 = (x_62581 + 1);
x_62581 = G__62582;
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
var G__62583 = (i + 1);
i = G__62583;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t62587 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62587 = (function (flag,alt_flag,meta62588){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta62588 = meta62588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62587.cljs$lang$type = true;
cljs.core.async.t62587.cljs$lang$ctorStr = "cljs.core.async/t62587";
cljs.core.async.t62587.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62587");
});
cljs.core.async.t62587.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t62587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t62587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t62587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62589){var self__ = this;
var _62589__$1 = this;return self__.meta62588;
});
cljs.core.async.t62587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62589,meta62588__$1){var self__ = this;
var _62589__$1 = this;return (new cljs.core.async.t62587(self__.flag,self__.alt_flag,meta62588__$1));
});
cljs.core.async.__GT_t62587 = (function __GT_t62587(flag__$1,alt_flag__$1,meta62588){return (new cljs.core.async.t62587(flag__$1,alt_flag__$1,meta62588));
});
}
return (new cljs.core.async.t62587(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t62593 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62593 = (function (cb,flag,alt_handler,meta62594){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta62594 = meta62594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62593.cljs$lang$type = true;
cljs.core.async.t62593.cljs$lang$ctorStr = "cljs.core.async/t62593";
cljs.core.async.t62593.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62593");
});
cljs.core.async.t62593.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t62593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t62593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t62593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62595){var self__ = this;
var _62595__$1 = this;return self__.meta62594;
});
cljs.core.async.t62593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62595,meta62594__$1){var self__ = this;
var _62595__$1 = this;return (new cljs.core.async.t62593(self__.cb,self__.flag,self__.alt_handler,meta62594__$1));
});
cljs.core.async.__GT_t62593 = (function __GT_t62593(cb__$1,flag__$1,alt_handler__$1,meta62594){return (new cljs.core.async.t62593(cb__$1,flag__$1,alt_handler__$1,meta62594));
});
}
return (new cljs.core.async.t62593(cb,flag,alt_handler,null));
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
return (function (p1__62596_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62596_SHARP_,port], null));
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
var G__62597 = (i + 1);
i = G__62597;
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
var alts_BANG___delegate = function (ports,p__62598){var map__62600 = p__62598;var map__62600__$1 = ((cljs.core.seq_QMARK_.call(null,map__62600))?cljs.core.apply.call(null,cljs.core.hash_map,map__62600):map__62600);var opts = map__62600__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__62598 = null;if (arguments.length > 1) {
  p__62598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__62598);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__62601){
var ports = cljs.core.first(arglist__62601);
var p__62598 = cljs.core.rest(arglist__62601);
return alts_BANG___delegate(ports,p__62598);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t62609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62609 = (function (ch,f,map_LT_,meta62610){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta62610 = meta62610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62609.cljs$lang$type = true;
cljs.core.async.t62609.cljs$lang$ctorStr = "cljs.core.async/t62609";
cljs.core.async.t62609.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62609");
});
cljs.core.async.t62609.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t62609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t62609.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t62609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t62612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62612 = (function (fn1,_,meta62610,ch,f,map_LT_,meta62613){
this.fn1 = fn1;
this._ = _;
this.meta62610 = meta62610;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta62613 = meta62613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62612.cljs$lang$type = true;
cljs.core.async.t62612.cljs$lang$ctorStr = "cljs.core.async/t62612";
cljs.core.async.t62612.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62612");
});
cljs.core.async.t62612.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t62612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t62612.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t62612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__62602_SHARP_){return f1.call(null,(((p1__62602_SHARP_ == null))?null:self__.f.call(null,p1__62602_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t62612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62614){var self__ = this;
var _62614__$1 = this;return self__.meta62613;
});
cljs.core.async.t62612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62614,meta62613__$1){var self__ = this;
var _62614__$1 = this;return (new cljs.core.async.t62612(self__.fn1,self__._,self__.meta62610,self__.ch,self__.f,self__.map_LT_,meta62613__$1));
});
cljs.core.async.__GT_t62612 = (function __GT_t62612(fn1__$1,___$2,meta62610__$1,ch__$2,f__$2,map_LT___$2,meta62613){return (new cljs.core.async.t62612(fn1__$1,___$2,meta62610__$1,ch__$2,f__$2,map_LT___$2,meta62613));
});
}
return (new cljs.core.async.t62612(fn1,___$1,self__.meta62610,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t62609.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t62609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t62609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62611){var self__ = this;
var _62611__$1 = this;return self__.meta62610;
});
cljs.core.async.t62609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62611,meta62610__$1){var self__ = this;
var _62611__$1 = this;return (new cljs.core.async.t62609(self__.ch,self__.f,self__.map_LT_,meta62610__$1));
});
cljs.core.async.__GT_t62609 = (function __GT_t62609(ch__$1,f__$1,map_LT___$1,meta62610){return (new cljs.core.async.t62609(ch__$1,f__$1,map_LT___$1,meta62610));
});
}
return (new cljs.core.async.t62609(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t62618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62618 = (function (ch,f,map_GT_,meta62619){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta62619 = meta62619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62618.cljs$lang$type = true;
cljs.core.async.t62618.cljs$lang$ctorStr = "cljs.core.async/t62618";
cljs.core.async.t62618.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62618");
});
cljs.core.async.t62618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t62618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t62618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t62618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t62618.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t62618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t62618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62620){var self__ = this;
var _62620__$1 = this;return self__.meta62619;
});
cljs.core.async.t62618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62620,meta62619__$1){var self__ = this;
var _62620__$1 = this;return (new cljs.core.async.t62618(self__.ch,self__.f,self__.map_GT_,meta62619__$1));
});
cljs.core.async.__GT_t62618 = (function __GT_t62618(ch__$1,f__$1,map_GT___$1,meta62619){return (new cljs.core.async.t62618(ch__$1,f__$1,map_GT___$1,meta62619));
});
}
return (new cljs.core.async.t62618(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t62624 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62624 = (function (ch,p,filter_GT_,meta62625){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta62625 = meta62625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62624.cljs$lang$type = true;
cljs.core.async.t62624.cljs$lang$ctorStr = "cljs.core.async/t62624";
cljs.core.async.t62624.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t62624");
});
cljs.core.async.t62624.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t62624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t62624.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t62624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t62624.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t62624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t62624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62626){var self__ = this;
var _62626__$1 = this;return self__.meta62625;
});
cljs.core.async.t62624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62626,meta62625__$1){var self__ = this;
var _62626__$1 = this;return (new cljs.core.async.t62624(self__.ch,self__.p,self__.filter_GT_,meta62625__$1));
});
cljs.core.async.__GT_t62624 = (function __GT_t62624(ch__$1,p__$1,filter_GT___$1,meta62625){return (new cljs.core.async.t62624(ch__$1,p__$1,filter_GT___$1,meta62625));
});
}
return (new cljs.core.async.t62624(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___62709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_62688){var state_val_62689 = (state_62688[1]);if((state_val_62689 === 1))
{var state_62688__$1 = state_62688;var statearr_62690_62710 = state_62688__$1;(statearr_62690_62710[2] = null);
(statearr_62690_62710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 2))
{var state_62688__$1 = state_62688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62688__$1,4,ch);
} else
{if((state_val_62689 === 3))
{var inst_62686 = (state_62688[2]);var state_62688__$1 = state_62688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62688__$1,inst_62686);
} else
{if((state_val_62689 === 4))
{var inst_62670 = (state_62688[7]);var inst_62670__$1 = (state_62688[2]);var inst_62671 = (inst_62670__$1 == null);var state_62688__$1 = (function (){var statearr_62691 = state_62688;(statearr_62691[7] = inst_62670__$1);
return statearr_62691;
})();if(cljs.core.truth_(inst_62671))
{var statearr_62692_62711 = state_62688__$1;(statearr_62692_62711[1] = 5);
} else
{var statearr_62693_62712 = state_62688__$1;(statearr_62693_62712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 5))
{var inst_62673 = cljs.core.async.close_BANG_.call(null,out);var state_62688__$1 = state_62688;var statearr_62694_62713 = state_62688__$1;(statearr_62694_62713[2] = inst_62673);
(statearr_62694_62713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 6))
{var inst_62670 = (state_62688[7]);var inst_62675 = p.call(null,inst_62670);var state_62688__$1 = state_62688;if(cljs.core.truth_(inst_62675))
{var statearr_62695_62714 = state_62688__$1;(statearr_62695_62714[1] = 8);
} else
{var statearr_62696_62715 = state_62688__$1;(statearr_62696_62715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 7))
{var inst_62684 = (state_62688[2]);var state_62688__$1 = state_62688;var statearr_62697_62716 = state_62688__$1;(statearr_62697_62716[2] = inst_62684);
(statearr_62697_62716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 8))
{var inst_62670 = (state_62688[7]);var state_62688__$1 = state_62688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62688__$1,11,out,inst_62670);
} else
{if((state_val_62689 === 9))
{var state_62688__$1 = state_62688;var statearr_62698_62717 = state_62688__$1;(statearr_62698_62717[2] = null);
(statearr_62698_62717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 10))
{var inst_62681 = (state_62688[2]);var state_62688__$1 = (function (){var statearr_62699 = state_62688;(statearr_62699[8] = inst_62681);
return statearr_62699;
})();var statearr_62700_62718 = state_62688__$1;(statearr_62700_62718[2] = null);
(statearr_62700_62718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62689 === 11))
{var inst_62678 = (state_62688[2]);var state_62688__$1 = state_62688;var statearr_62701_62719 = state_62688__$1;(statearr_62701_62719[2] = inst_62678);
(statearr_62701_62719[1] = 10);
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
var state_machine__13648__auto____0 = (function (){var statearr_62705 = [null,null,null,null,null,null,null,null,null];(statearr_62705[0] = state_machine__13648__auto__);
(statearr_62705[1] = 1);
return statearr_62705;
});
var state_machine__13648__auto____1 = (function (state_62688){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_62688);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e62706){if((e62706 instanceof Object))
{var ex__13651__auto__ = e62706;var statearr_62707_62720 = state_62688;(statearr_62707_62720[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e62706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__62721 = state_62688;
state_62688 = G__62721;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_62688){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_62688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_62708 = f__13746__auto__.call(null);(statearr_62708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___62709);
return statearr_62708;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_62873){var state_val_62874 = (state_62873[1]);if((state_val_62874 === 1))
{var state_62873__$1 = state_62873;var statearr_62875_62912 = state_62873__$1;(statearr_62875_62912[2] = null);
(statearr_62875_62912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 2))
{var state_62873__$1 = state_62873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62873__$1,4,in$);
} else
{if((state_val_62874 === 3))
{var inst_62871 = (state_62873[2]);var state_62873__$1 = state_62873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62873__$1,inst_62871);
} else
{if((state_val_62874 === 4))
{var inst_62819 = (state_62873[7]);var inst_62819__$1 = (state_62873[2]);var inst_62820 = (inst_62819__$1 == null);var state_62873__$1 = (function (){var statearr_62876 = state_62873;(statearr_62876[7] = inst_62819__$1);
return statearr_62876;
})();if(cljs.core.truth_(inst_62820))
{var statearr_62877_62913 = state_62873__$1;(statearr_62877_62913[1] = 5);
} else
{var statearr_62878_62914 = state_62873__$1;(statearr_62878_62914[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 5))
{var inst_62822 = cljs.core.async.close_BANG_.call(null,out);var state_62873__$1 = state_62873;var statearr_62879_62915 = state_62873__$1;(statearr_62879_62915[2] = inst_62822);
(statearr_62879_62915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 6))
{var inst_62819 = (state_62873[7]);var inst_62824 = f.call(null,inst_62819);var inst_62829 = cljs.core.seq.call(null,inst_62824);var inst_62830 = inst_62829;var inst_62831 = null;var inst_62832 = 0;var inst_62833 = 0;var state_62873__$1 = (function (){var statearr_62880 = state_62873;(statearr_62880[8] = inst_62831);
(statearr_62880[9] = inst_62830);
(statearr_62880[10] = inst_62833);
(statearr_62880[11] = inst_62832);
return statearr_62880;
})();var statearr_62881_62916 = state_62873__$1;(statearr_62881_62916[2] = null);
(statearr_62881_62916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 7))
{var inst_62869 = (state_62873[2]);var state_62873__$1 = state_62873;var statearr_62882_62917 = state_62873__$1;(statearr_62882_62917[2] = inst_62869);
(statearr_62882_62917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 8))
{var inst_62833 = (state_62873[10]);var inst_62832 = (state_62873[11]);var inst_62835 = (inst_62833 < inst_62832);var inst_62836 = inst_62835;var state_62873__$1 = state_62873;if(cljs.core.truth_(inst_62836))
{var statearr_62883_62918 = state_62873__$1;(statearr_62883_62918[1] = 10);
} else
{var statearr_62884_62919 = state_62873__$1;(statearr_62884_62919[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 9))
{var inst_62866 = (state_62873[2]);var state_62873__$1 = (function (){var statearr_62885 = state_62873;(statearr_62885[12] = inst_62866);
return statearr_62885;
})();var statearr_62886_62920 = state_62873__$1;(statearr_62886_62920[2] = null);
(statearr_62886_62920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 10))
{var inst_62831 = (state_62873[8]);var inst_62833 = (state_62873[10]);var inst_62838 = cljs.core._nth.call(null,inst_62831,inst_62833);var state_62873__$1 = state_62873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62873__$1,13,out,inst_62838);
} else
{if((state_val_62874 === 11))
{var inst_62830 = (state_62873[9]);var inst_62844 = (state_62873[13]);var inst_62844__$1 = cljs.core.seq.call(null,inst_62830);var state_62873__$1 = (function (){var statearr_62890 = state_62873;(statearr_62890[13] = inst_62844__$1);
return statearr_62890;
})();if(inst_62844__$1)
{var statearr_62891_62921 = state_62873__$1;(statearr_62891_62921[1] = 14);
} else
{var statearr_62892_62922 = state_62873__$1;(statearr_62892_62922[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 12))
{var inst_62864 = (state_62873[2]);var state_62873__$1 = state_62873;var statearr_62893_62923 = state_62873__$1;(statearr_62893_62923[2] = inst_62864);
(statearr_62893_62923[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 13))
{var inst_62831 = (state_62873[8]);var inst_62830 = (state_62873[9]);var inst_62833 = (state_62873[10]);var inst_62832 = (state_62873[11]);var inst_62840 = (state_62873[2]);var inst_62841 = (inst_62833 + 1);var tmp62887 = inst_62831;var tmp62888 = inst_62830;var tmp62889 = inst_62832;var inst_62830__$1 = tmp62888;var inst_62831__$1 = tmp62887;var inst_62832__$1 = tmp62889;var inst_62833__$1 = inst_62841;var state_62873__$1 = (function (){var statearr_62894 = state_62873;(statearr_62894[8] = inst_62831__$1);
(statearr_62894[9] = inst_62830__$1);
(statearr_62894[10] = inst_62833__$1);
(statearr_62894[11] = inst_62832__$1);
(statearr_62894[14] = inst_62840);
return statearr_62894;
})();var statearr_62895_62924 = state_62873__$1;(statearr_62895_62924[2] = null);
(statearr_62895_62924[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 14))
{var inst_62844 = (state_62873[13]);var inst_62846 = cljs.core.chunked_seq_QMARK_.call(null,inst_62844);var state_62873__$1 = state_62873;if(inst_62846)
{var statearr_62896_62925 = state_62873__$1;(statearr_62896_62925[1] = 17);
} else
{var statearr_62897_62926 = state_62873__$1;(statearr_62897_62926[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 15))
{var state_62873__$1 = state_62873;var statearr_62898_62927 = state_62873__$1;(statearr_62898_62927[2] = null);
(statearr_62898_62927[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 16))
{var inst_62862 = (state_62873[2]);var state_62873__$1 = state_62873;var statearr_62899_62928 = state_62873__$1;(statearr_62899_62928[2] = inst_62862);
(statearr_62899_62928[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 17))
{var inst_62844 = (state_62873[13]);var inst_62848 = cljs.core.chunk_first.call(null,inst_62844);var inst_62849 = cljs.core.chunk_rest.call(null,inst_62844);var inst_62850 = cljs.core.count.call(null,inst_62848);var inst_62830 = inst_62849;var inst_62831 = inst_62848;var inst_62832 = inst_62850;var inst_62833 = 0;var state_62873__$1 = (function (){var statearr_62900 = state_62873;(statearr_62900[8] = inst_62831);
(statearr_62900[9] = inst_62830);
(statearr_62900[10] = inst_62833);
(statearr_62900[11] = inst_62832);
return statearr_62900;
})();var statearr_62901_62929 = state_62873__$1;(statearr_62901_62929[2] = null);
(statearr_62901_62929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 18))
{var inst_62844 = (state_62873[13]);var inst_62853 = cljs.core.first.call(null,inst_62844);var state_62873__$1 = state_62873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62873__$1,20,out,inst_62853);
} else
{if((state_val_62874 === 19))
{var inst_62859 = (state_62873[2]);var state_62873__$1 = state_62873;var statearr_62902_62930 = state_62873__$1;(statearr_62902_62930[2] = inst_62859);
(statearr_62902_62930[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62874 === 20))
{var inst_62844 = (state_62873[13]);var inst_62855 = (state_62873[2]);var inst_62856 = cljs.core.next.call(null,inst_62844);var inst_62830 = inst_62856;var inst_62831 = null;var inst_62832 = 0;var inst_62833 = 0;var state_62873__$1 = (function (){var statearr_62903 = state_62873;(statearr_62903[8] = inst_62831);
(statearr_62903[9] = inst_62830);
(statearr_62903[10] = inst_62833);
(statearr_62903[11] = inst_62832);
(statearr_62903[15] = inst_62855);
return statearr_62903;
})();var statearr_62904_62931 = state_62873__$1;(statearr_62904_62931[2] = null);
(statearr_62904_62931[1] = 8);
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
var state_machine__13648__auto____0 = (function (){var statearr_62908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62908[0] = state_machine__13648__auto__);
(statearr_62908[1] = 1);
return statearr_62908;
});
var state_machine__13648__auto____1 = (function (state_62873){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_62873);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e62909){if((e62909 instanceof Object))
{var ex__13651__auto__ = e62909;var statearr_62910_62932 = state_62873;(statearr_62910_62932[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e62909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__62933 = state_62873;
state_62873 = G__62933;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_62873){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_62873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_62911 = f__13746__auto__.call(null);(statearr_62911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_62911;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13745__auto___63014 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_62993){var state_val_62994 = (state_62993[1]);if((state_val_62994 === 1))
{var state_62993__$1 = state_62993;var statearr_62995_63015 = state_62993__$1;(statearr_62995_63015[2] = null);
(statearr_62995_63015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 2))
{var state_62993__$1 = state_62993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62993__$1,4,from);
} else
{if((state_val_62994 === 3))
{var inst_62991 = (state_62993[2]);var state_62993__$1 = state_62993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62993__$1,inst_62991);
} else
{if((state_val_62994 === 4))
{var inst_62976 = (state_62993[7]);var inst_62976__$1 = (state_62993[2]);var inst_62977 = (inst_62976__$1 == null);var state_62993__$1 = (function (){var statearr_62996 = state_62993;(statearr_62996[7] = inst_62976__$1);
return statearr_62996;
})();if(cljs.core.truth_(inst_62977))
{var statearr_62997_63016 = state_62993__$1;(statearr_62997_63016[1] = 5);
} else
{var statearr_62998_63017 = state_62993__$1;(statearr_62998_63017[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 5))
{var state_62993__$1 = state_62993;if(cljs.core.truth_(close_QMARK_))
{var statearr_62999_63018 = state_62993__$1;(statearr_62999_63018[1] = 8);
} else
{var statearr_63000_63019 = state_62993__$1;(statearr_63000_63019[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 6))
{var inst_62976 = (state_62993[7]);var state_62993__$1 = state_62993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62993__$1,11,to,inst_62976);
} else
{if((state_val_62994 === 7))
{var inst_62989 = (state_62993[2]);var state_62993__$1 = state_62993;var statearr_63001_63020 = state_62993__$1;(statearr_63001_63020[2] = inst_62989);
(statearr_63001_63020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 8))
{var inst_62980 = cljs.core.async.close_BANG_.call(null,to);var state_62993__$1 = state_62993;var statearr_63002_63021 = state_62993__$1;(statearr_63002_63021[2] = inst_62980);
(statearr_63002_63021[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 9))
{var state_62993__$1 = state_62993;var statearr_63003_63022 = state_62993__$1;(statearr_63003_63022[2] = null);
(statearr_63003_63022[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 10))
{var inst_62983 = (state_62993[2]);var state_62993__$1 = state_62993;var statearr_63004_63023 = state_62993__$1;(statearr_63004_63023[2] = inst_62983);
(statearr_63004_63023[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62994 === 11))
{var inst_62986 = (state_62993[2]);var state_62993__$1 = (function (){var statearr_63005 = state_62993;(statearr_63005[8] = inst_62986);
return statearr_63005;
})();var statearr_63006_63024 = state_62993__$1;(statearr_63006_63024[2] = null);
(statearr_63006_63024[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_63010 = [null,null,null,null,null,null,null,null,null];(statearr_63010[0] = state_machine__13648__auto__);
(statearr_63010[1] = 1);
return statearr_63010;
});
var state_machine__13648__auto____1 = (function (state_62993){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_62993);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e63011){if((e63011 instanceof Object))
{var ex__13651__auto__ = e63011;var statearr_63012_63025 = state_62993;(statearr_63012_63025[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63026 = state_62993;
state_62993 = G__63026;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_62993){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_62993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_63013 = f__13746__auto__.call(null);(statearr_63013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___63014);
return statearr_63013;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13745__auto___63113 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_63091){var state_val_63092 = (state_63091[1]);if((state_val_63092 === 1))
{var state_63091__$1 = state_63091;var statearr_63093_63114 = state_63091__$1;(statearr_63093_63114[2] = null);
(statearr_63093_63114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 2))
{var state_63091__$1 = state_63091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63091__$1,4,ch);
} else
{if((state_val_63092 === 3))
{var inst_63089 = (state_63091[2]);var state_63091__$1 = state_63091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63091__$1,inst_63089);
} else
{if((state_val_63092 === 4))
{var inst_63072 = (state_63091[7]);var inst_63072__$1 = (state_63091[2]);var inst_63073 = (inst_63072__$1 == null);var state_63091__$1 = (function (){var statearr_63094 = state_63091;(statearr_63094[7] = inst_63072__$1);
return statearr_63094;
})();if(cljs.core.truth_(inst_63073))
{var statearr_63095_63115 = state_63091__$1;(statearr_63095_63115[1] = 5);
} else
{var statearr_63096_63116 = state_63091__$1;(statearr_63096_63116[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 5))
{var inst_63075 = cljs.core.async.close_BANG_.call(null,tc);var inst_63076 = cljs.core.async.close_BANG_.call(null,fc);var state_63091__$1 = (function (){var statearr_63097 = state_63091;(statearr_63097[8] = inst_63075);
return statearr_63097;
})();var statearr_63098_63117 = state_63091__$1;(statearr_63098_63117[2] = inst_63076);
(statearr_63098_63117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 6))
{var inst_63072 = (state_63091[7]);var inst_63078 = p.call(null,inst_63072);var state_63091__$1 = state_63091;if(cljs.core.truth_(inst_63078))
{var statearr_63099_63118 = state_63091__$1;(statearr_63099_63118[1] = 9);
} else
{var statearr_63100_63119 = state_63091__$1;(statearr_63100_63119[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 7))
{var inst_63087 = (state_63091[2]);var state_63091__$1 = state_63091;var statearr_63101_63120 = state_63091__$1;(statearr_63101_63120[2] = inst_63087);
(statearr_63101_63120[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 8))
{var inst_63084 = (state_63091[2]);var state_63091__$1 = (function (){var statearr_63102 = state_63091;(statearr_63102[9] = inst_63084);
return statearr_63102;
})();var statearr_63103_63121 = state_63091__$1;(statearr_63103_63121[2] = null);
(statearr_63103_63121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 9))
{var state_63091__$1 = state_63091;var statearr_63104_63122 = state_63091__$1;(statearr_63104_63122[2] = tc);
(statearr_63104_63122[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 10))
{var state_63091__$1 = state_63091;var statearr_63105_63123 = state_63091__$1;(statearr_63105_63123[2] = fc);
(statearr_63105_63123[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63092 === 11))
{var inst_63072 = (state_63091[7]);var inst_63082 = (state_63091[2]);var state_63091__$1 = state_63091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63091__$1,8,inst_63082,inst_63072);
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
var state_machine__13648__auto____0 = (function (){var statearr_63109 = [null,null,null,null,null,null,null,null,null,null];(statearr_63109[0] = state_machine__13648__auto__);
(statearr_63109[1] = 1);
return statearr_63109;
});
var state_machine__13648__auto____1 = (function (state_63091){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_63091);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e63110){if((e63110 instanceof Object))
{var ex__13651__auto__ = e63110;var statearr_63111_63124 = state_63091;(statearr_63111_63124[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63125 = state_63091;
state_63091 = G__63125;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_63091){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_63091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_63112 = f__13746__auto__.call(null);(statearr_63112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___63113);
return statearr_63112;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_63172){var state_val_63173 = (state_63172[1]);if((state_val_63173 === 7))
{var inst_63168 = (state_63172[2]);var state_63172__$1 = state_63172;var statearr_63174_63190 = state_63172__$1;(statearr_63174_63190[2] = inst_63168);
(statearr_63174_63190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63173 === 6))
{var inst_63158 = (state_63172[7]);var inst_63161 = (state_63172[8]);var inst_63165 = f.call(null,inst_63158,inst_63161);var inst_63158__$1 = inst_63165;var state_63172__$1 = (function (){var statearr_63175 = state_63172;(statearr_63175[7] = inst_63158__$1);
return statearr_63175;
})();var statearr_63176_63191 = state_63172__$1;(statearr_63176_63191[2] = null);
(statearr_63176_63191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63173 === 5))
{var inst_63158 = (state_63172[7]);var state_63172__$1 = state_63172;var statearr_63177_63192 = state_63172__$1;(statearr_63177_63192[2] = inst_63158);
(statearr_63177_63192[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63173 === 4))
{var inst_63161 = (state_63172[8]);var inst_63161__$1 = (state_63172[2]);var inst_63162 = (inst_63161__$1 == null);var state_63172__$1 = (function (){var statearr_63178 = state_63172;(statearr_63178[8] = inst_63161__$1);
return statearr_63178;
})();if(cljs.core.truth_(inst_63162))
{var statearr_63179_63193 = state_63172__$1;(statearr_63179_63193[1] = 5);
} else
{var statearr_63180_63194 = state_63172__$1;(statearr_63180_63194[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63173 === 3))
{var inst_63170 = (state_63172[2]);var state_63172__$1 = state_63172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63172__$1,inst_63170);
} else
{if((state_val_63173 === 2))
{var state_63172__$1 = state_63172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63172__$1,4,ch);
} else
{if((state_val_63173 === 1))
{var inst_63158 = init;var state_63172__$1 = (function (){var statearr_63181 = state_63172;(statearr_63181[7] = inst_63158);
return statearr_63181;
})();var statearr_63182_63195 = state_63172__$1;(statearr_63182_63195[2] = null);
(statearr_63182_63195[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_63186 = [null,null,null,null,null,null,null,null,null];(statearr_63186[0] = state_machine__13648__auto__);
(statearr_63186[1] = 1);
return statearr_63186;
});
var state_machine__13648__auto____1 = (function (state_63172){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_63172);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e63187){if((e63187 instanceof Object))
{var ex__13651__auto__ = e63187;var statearr_63188_63196 = state_63172;(statearr_63188_63196[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63197 = state_63172;
state_63172 = G__63197;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_63172){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_63172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_63189 = f__13746__auto__.call(null);(statearr_63189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_63189;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_63259){var state_val_63260 = (state_63259[1]);if((state_val_63260 === 1))
{var inst_63239 = cljs.core.seq.call(null,coll);var inst_63240 = inst_63239;var state_63259__$1 = (function (){var statearr_63261 = state_63259;(statearr_63261[7] = inst_63240);
return statearr_63261;
})();var statearr_63262_63280 = state_63259__$1;(statearr_63262_63280[2] = null);
(statearr_63262_63280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 2))
{var inst_63240 = (state_63259[7]);var state_63259__$1 = state_63259;if(cljs.core.truth_(inst_63240))
{var statearr_63263_63281 = state_63259__$1;(statearr_63263_63281[1] = 4);
} else
{var statearr_63264_63282 = state_63259__$1;(statearr_63264_63282[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 3))
{var inst_63257 = (state_63259[2]);var state_63259__$1 = state_63259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63259__$1,inst_63257);
} else
{if((state_val_63260 === 4))
{var inst_63240 = (state_63259[7]);var inst_63243 = cljs.core.first.call(null,inst_63240);var state_63259__$1 = state_63259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63259__$1,7,ch,inst_63243);
} else
{if((state_val_63260 === 5))
{var state_63259__$1 = state_63259;if(cljs.core.truth_(close_QMARK_))
{var statearr_63265_63283 = state_63259__$1;(statearr_63265_63283[1] = 8);
} else
{var statearr_63266_63284 = state_63259__$1;(statearr_63266_63284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 6))
{var inst_63255 = (state_63259[2]);var state_63259__$1 = state_63259;var statearr_63267_63285 = state_63259__$1;(statearr_63267_63285[2] = inst_63255);
(statearr_63267_63285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 7))
{var inst_63240 = (state_63259[7]);var inst_63245 = (state_63259[2]);var inst_63246 = cljs.core.next.call(null,inst_63240);var inst_63240__$1 = inst_63246;var state_63259__$1 = (function (){var statearr_63268 = state_63259;(statearr_63268[7] = inst_63240__$1);
(statearr_63268[8] = inst_63245);
return statearr_63268;
})();var statearr_63269_63286 = state_63259__$1;(statearr_63269_63286[2] = null);
(statearr_63269_63286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 8))
{var inst_63250 = cljs.core.async.close_BANG_.call(null,ch);var state_63259__$1 = state_63259;var statearr_63270_63287 = state_63259__$1;(statearr_63270_63287[2] = inst_63250);
(statearr_63270_63287[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 9))
{var state_63259__$1 = state_63259;var statearr_63271_63288 = state_63259__$1;(statearr_63271_63288[2] = null);
(statearr_63271_63288[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63260 === 10))
{var inst_63253 = (state_63259[2]);var state_63259__$1 = state_63259;var statearr_63272_63289 = state_63259__$1;(statearr_63272_63289[2] = inst_63253);
(statearr_63272_63289[1] = 6);
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
var state_machine__13648__auto____0 = (function (){var statearr_63276 = [null,null,null,null,null,null,null,null,null];(statearr_63276[0] = state_machine__13648__auto__);
(statearr_63276[1] = 1);
return statearr_63276;
});
var state_machine__13648__auto____1 = (function (state_63259){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_63259);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e63277){if((e63277 instanceof Object))
{var ex__13651__auto__ = e63277;var statearr_63278_63290 = state_63259;(statearr_63278_63290[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63259);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63291 = state_63259;
state_63259 = G__63291;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_63259){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_63259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_63279 = f__13746__auto__.call(null);(statearr_63279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_63279;
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
cljs.core.async.Mux = (function (){var obj63293 = {};return obj63293;
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
cljs.core.async.Mult = (function (){var obj63295 = {};return obj63295;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t63519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63519 = (function (cs,ch,mult,meta63520){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta63520 = meta63520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63519.cljs$lang$type = true;
cljs.core.async.t63519.cljs$lang$ctorStr = "cljs.core.async/t63519";
cljs.core.async.t63519.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t63519");
});})(cs))
;
cljs.core.async.t63519.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t63519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t63519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t63519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t63519.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t63519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t63519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_63521){var self__ = this;
var _63521__$1 = this;return self__.meta63520;
});})(cs))
;
cljs.core.async.t63519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_63521,meta63520__$1){var self__ = this;
var _63521__$1 = this;return (new cljs.core.async.t63519(self__.cs,self__.ch,self__.mult,meta63520__$1));
});})(cs))
;
cljs.core.async.__GT_t63519 = ((function (cs){
return (function __GT_t63519(cs__$1,ch__$1,mult__$1,meta63520){return (new cljs.core.async.t63519(cs__$1,ch__$1,mult__$1,meta63520));
});})(cs))
;
}
return (new cljs.core.async.t63519(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13745__auto___63742 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_63656){var state_val_63657 = (state_63656[1]);if((state_val_63657 === 32))
{var inst_63524 = (state_63656[7]);var inst_63600 = (state_63656[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63656,31,Object,null,30);var inst_63607 = cljs.core.async.put_BANG_.call(null,inst_63600,inst_63524,done);var state_63656__$1 = state_63656;var statearr_63658_63743 = state_63656__$1;(statearr_63658_63743[2] = inst_63607);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63656__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 1))
{var state_63656__$1 = state_63656;var statearr_63659_63744 = state_63656__$1;(statearr_63659_63744[2] = null);
(statearr_63659_63744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 33))
{var inst_63613 = (state_63656[9]);var inst_63615 = cljs.core.chunked_seq_QMARK_.call(null,inst_63613);var state_63656__$1 = state_63656;if(inst_63615)
{var statearr_63660_63745 = state_63656__$1;(statearr_63660_63745[1] = 36);
} else
{var statearr_63661_63746 = state_63656__$1;(statearr_63661_63746[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 2))
{var state_63656__$1 = state_63656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63656__$1,4,ch);
} else
{if((state_val_63657 === 34))
{var state_63656__$1 = state_63656;var statearr_63662_63747 = state_63656__$1;(statearr_63662_63747[2] = null);
(statearr_63662_63747[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 3))
{var inst_63654 = (state_63656[2]);var state_63656__$1 = state_63656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63656__$1,inst_63654);
} else
{if((state_val_63657 === 35))
{var inst_63638 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63663_63748 = state_63656__$1;(statearr_63663_63748[2] = inst_63638);
(statearr_63663_63748[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 4))
{var inst_63524 = (state_63656[7]);var inst_63524__$1 = (state_63656[2]);var inst_63525 = (inst_63524__$1 == null);var state_63656__$1 = (function (){var statearr_63664 = state_63656;(statearr_63664[7] = inst_63524__$1);
return statearr_63664;
})();if(cljs.core.truth_(inst_63525))
{var statearr_63665_63749 = state_63656__$1;(statearr_63665_63749[1] = 5);
} else
{var statearr_63666_63750 = state_63656__$1;(statearr_63666_63750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 36))
{var inst_63613 = (state_63656[9]);var inst_63617 = cljs.core.chunk_first.call(null,inst_63613);var inst_63618 = cljs.core.chunk_rest.call(null,inst_63613);var inst_63619 = cljs.core.count.call(null,inst_63617);var inst_63592 = inst_63618;var inst_63593 = inst_63617;var inst_63594 = inst_63619;var inst_63595 = 0;var state_63656__$1 = (function (){var statearr_63667 = state_63656;(statearr_63667[10] = inst_63595);
(statearr_63667[11] = inst_63594);
(statearr_63667[12] = inst_63593);
(statearr_63667[13] = inst_63592);
return statearr_63667;
})();var statearr_63668_63751 = state_63656__$1;(statearr_63668_63751[2] = null);
(statearr_63668_63751[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 5))
{var inst_63531 = cljs.core.deref.call(null,cs);var inst_63532 = cljs.core.seq.call(null,inst_63531);var inst_63533 = inst_63532;var inst_63534 = null;var inst_63535 = 0;var inst_63536 = 0;var state_63656__$1 = (function (){var statearr_63669 = state_63656;(statearr_63669[14] = inst_63535);
(statearr_63669[15] = inst_63534);
(statearr_63669[16] = inst_63536);
(statearr_63669[17] = inst_63533);
return statearr_63669;
})();var statearr_63670_63752 = state_63656__$1;(statearr_63670_63752[2] = null);
(statearr_63670_63752[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 37))
{var inst_63613 = (state_63656[9]);var inst_63622 = cljs.core.first.call(null,inst_63613);var state_63656__$1 = (function (){var statearr_63671 = state_63656;(statearr_63671[18] = inst_63622);
return statearr_63671;
})();var statearr_63672_63753 = state_63656__$1;(statearr_63672_63753[2] = null);
(statearr_63672_63753[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 6))
{var inst_63584 = (state_63656[19]);var inst_63583 = cljs.core.deref.call(null,cs);var inst_63584__$1 = cljs.core.keys.call(null,inst_63583);var inst_63585 = cljs.core.count.call(null,inst_63584__$1);var inst_63586 = cljs.core.reset_BANG_.call(null,dctr,inst_63585);var inst_63591 = cljs.core.seq.call(null,inst_63584__$1);var inst_63592 = inst_63591;var inst_63593 = null;var inst_63594 = 0;var inst_63595 = 0;var state_63656__$1 = (function (){var statearr_63673 = state_63656;(statearr_63673[10] = inst_63595);
(statearr_63673[11] = inst_63594);
(statearr_63673[20] = inst_63586);
(statearr_63673[12] = inst_63593);
(statearr_63673[13] = inst_63592);
(statearr_63673[19] = inst_63584__$1);
return statearr_63673;
})();var statearr_63674_63754 = state_63656__$1;(statearr_63674_63754[2] = null);
(statearr_63674_63754[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 38))
{var inst_63635 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63675_63755 = state_63656__$1;(statearr_63675_63755[2] = inst_63635);
(statearr_63675_63755[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 7))
{var inst_63652 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63676_63756 = state_63656__$1;(statearr_63676_63756[2] = inst_63652);
(statearr_63676_63756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 39))
{var inst_63613 = (state_63656[9]);var inst_63631 = (state_63656[2]);var inst_63632 = cljs.core.next.call(null,inst_63613);var inst_63592 = inst_63632;var inst_63593 = null;var inst_63594 = 0;var inst_63595 = 0;var state_63656__$1 = (function (){var statearr_63677 = state_63656;(statearr_63677[21] = inst_63631);
(statearr_63677[10] = inst_63595);
(statearr_63677[11] = inst_63594);
(statearr_63677[12] = inst_63593);
(statearr_63677[13] = inst_63592);
return statearr_63677;
})();var statearr_63678_63757 = state_63656__$1;(statearr_63678_63757[2] = null);
(statearr_63678_63757[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 8))
{var inst_63535 = (state_63656[14]);var inst_63536 = (state_63656[16]);var inst_63538 = (inst_63536 < inst_63535);var inst_63539 = inst_63538;var state_63656__$1 = state_63656;if(cljs.core.truth_(inst_63539))
{var statearr_63679_63758 = state_63656__$1;(statearr_63679_63758[1] = 10);
} else
{var statearr_63680_63759 = state_63656__$1;(statearr_63680_63759[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 40))
{var inst_63622 = (state_63656[18]);var inst_63623 = (state_63656[2]);var inst_63624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_63625 = cljs.core.async.untap_STAR_.call(null,m,inst_63622);var state_63656__$1 = (function (){var statearr_63681 = state_63656;(statearr_63681[22] = inst_63623);
(statearr_63681[23] = inst_63624);
return statearr_63681;
})();var statearr_63682_63760 = state_63656__$1;(statearr_63682_63760[2] = inst_63625);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63656__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 9))
{var inst_63581 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63683_63761 = state_63656__$1;(statearr_63683_63761[2] = inst_63581);
(statearr_63683_63761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 41))
{var inst_63524 = (state_63656[7]);var inst_63622 = (state_63656[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63656,40,Object,null,39);var inst_63629 = cljs.core.async.put_BANG_.call(null,inst_63622,inst_63524,done);var state_63656__$1 = state_63656;var statearr_63684_63762 = state_63656__$1;(statearr_63684_63762[2] = inst_63629);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63656__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 10))
{var inst_63534 = (state_63656[15]);var inst_63536 = (state_63656[16]);var inst_63542 = cljs.core._nth.call(null,inst_63534,inst_63536);var inst_63543 = cljs.core.nth.call(null,inst_63542,0,null);var inst_63544 = cljs.core.nth.call(null,inst_63542,1,null);var state_63656__$1 = (function (){var statearr_63685 = state_63656;(statearr_63685[24] = inst_63543);
return statearr_63685;
})();if(cljs.core.truth_(inst_63544))
{var statearr_63686_63763 = state_63656__$1;(statearr_63686_63763[1] = 13);
} else
{var statearr_63687_63764 = state_63656__$1;(statearr_63687_63764[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 42))
{var state_63656__$1 = state_63656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63656__$1,45,dchan);
} else
{if((state_val_63657 === 11))
{var inst_63553 = (state_63656[25]);var inst_63533 = (state_63656[17]);var inst_63553__$1 = cljs.core.seq.call(null,inst_63533);var state_63656__$1 = (function (){var statearr_63688 = state_63656;(statearr_63688[25] = inst_63553__$1);
return statearr_63688;
})();if(inst_63553__$1)
{var statearr_63689_63765 = state_63656__$1;(statearr_63689_63765[1] = 16);
} else
{var statearr_63690_63766 = state_63656__$1;(statearr_63690_63766[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 43))
{var state_63656__$1 = state_63656;var statearr_63691_63767 = state_63656__$1;(statearr_63691_63767[2] = null);
(statearr_63691_63767[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 12))
{var inst_63579 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63692_63768 = state_63656__$1;(statearr_63692_63768[2] = inst_63579);
(statearr_63692_63768[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 44))
{var inst_63649 = (state_63656[2]);var state_63656__$1 = (function (){var statearr_63693 = state_63656;(statearr_63693[26] = inst_63649);
return statearr_63693;
})();var statearr_63694_63769 = state_63656__$1;(statearr_63694_63769[2] = null);
(statearr_63694_63769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 13))
{var inst_63543 = (state_63656[24]);var inst_63546 = cljs.core.async.close_BANG_.call(null,inst_63543);var state_63656__$1 = state_63656;var statearr_63695_63770 = state_63656__$1;(statearr_63695_63770[2] = inst_63546);
(statearr_63695_63770[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 45))
{var inst_63646 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63699_63771 = state_63656__$1;(statearr_63699_63771[2] = inst_63646);
(statearr_63699_63771[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 14))
{var state_63656__$1 = state_63656;var statearr_63700_63772 = state_63656__$1;(statearr_63700_63772[2] = null);
(statearr_63700_63772[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 15))
{var inst_63535 = (state_63656[14]);var inst_63534 = (state_63656[15]);var inst_63536 = (state_63656[16]);var inst_63533 = (state_63656[17]);var inst_63549 = (state_63656[2]);var inst_63550 = (inst_63536 + 1);var tmp63696 = inst_63535;var tmp63697 = inst_63534;var tmp63698 = inst_63533;var inst_63533__$1 = tmp63698;var inst_63534__$1 = tmp63697;var inst_63535__$1 = tmp63696;var inst_63536__$1 = inst_63550;var state_63656__$1 = (function (){var statearr_63701 = state_63656;(statearr_63701[14] = inst_63535__$1);
(statearr_63701[15] = inst_63534__$1);
(statearr_63701[16] = inst_63536__$1);
(statearr_63701[27] = inst_63549);
(statearr_63701[17] = inst_63533__$1);
return statearr_63701;
})();var statearr_63702_63773 = state_63656__$1;(statearr_63702_63773[2] = null);
(statearr_63702_63773[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 16))
{var inst_63553 = (state_63656[25]);var inst_63555 = cljs.core.chunked_seq_QMARK_.call(null,inst_63553);var state_63656__$1 = state_63656;if(inst_63555)
{var statearr_63703_63774 = state_63656__$1;(statearr_63703_63774[1] = 19);
} else
{var statearr_63704_63775 = state_63656__$1;(statearr_63704_63775[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 17))
{var state_63656__$1 = state_63656;var statearr_63705_63776 = state_63656__$1;(statearr_63705_63776[2] = null);
(statearr_63705_63776[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 18))
{var inst_63577 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63706_63777 = state_63656__$1;(statearr_63706_63777[2] = inst_63577);
(statearr_63706_63777[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 19))
{var inst_63553 = (state_63656[25]);var inst_63557 = cljs.core.chunk_first.call(null,inst_63553);var inst_63558 = cljs.core.chunk_rest.call(null,inst_63553);var inst_63559 = cljs.core.count.call(null,inst_63557);var inst_63533 = inst_63558;var inst_63534 = inst_63557;var inst_63535 = inst_63559;var inst_63536 = 0;var state_63656__$1 = (function (){var statearr_63707 = state_63656;(statearr_63707[14] = inst_63535);
(statearr_63707[15] = inst_63534);
(statearr_63707[16] = inst_63536);
(statearr_63707[17] = inst_63533);
return statearr_63707;
})();var statearr_63708_63778 = state_63656__$1;(statearr_63708_63778[2] = null);
(statearr_63708_63778[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 20))
{var inst_63553 = (state_63656[25]);var inst_63563 = cljs.core.first.call(null,inst_63553);var inst_63564 = cljs.core.nth.call(null,inst_63563,0,null);var inst_63565 = cljs.core.nth.call(null,inst_63563,1,null);var state_63656__$1 = (function (){var statearr_63709 = state_63656;(statearr_63709[28] = inst_63564);
return statearr_63709;
})();if(cljs.core.truth_(inst_63565))
{var statearr_63710_63779 = state_63656__$1;(statearr_63710_63779[1] = 22);
} else
{var statearr_63711_63780 = state_63656__$1;(statearr_63711_63780[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 21))
{var inst_63574 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63712_63781 = state_63656__$1;(statearr_63712_63781[2] = inst_63574);
(statearr_63712_63781[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 22))
{var inst_63564 = (state_63656[28]);var inst_63567 = cljs.core.async.close_BANG_.call(null,inst_63564);var state_63656__$1 = state_63656;var statearr_63713_63782 = state_63656__$1;(statearr_63713_63782[2] = inst_63567);
(statearr_63713_63782[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 23))
{var state_63656__$1 = state_63656;var statearr_63714_63783 = state_63656__$1;(statearr_63714_63783[2] = null);
(statearr_63714_63783[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 24))
{var inst_63553 = (state_63656[25]);var inst_63570 = (state_63656[2]);var inst_63571 = cljs.core.next.call(null,inst_63553);var inst_63533 = inst_63571;var inst_63534 = null;var inst_63535 = 0;var inst_63536 = 0;var state_63656__$1 = (function (){var statearr_63715 = state_63656;(statearr_63715[14] = inst_63535);
(statearr_63715[15] = inst_63534);
(statearr_63715[16] = inst_63536);
(statearr_63715[17] = inst_63533);
(statearr_63715[29] = inst_63570);
return statearr_63715;
})();var statearr_63716_63784 = state_63656__$1;(statearr_63716_63784[2] = null);
(statearr_63716_63784[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 25))
{var inst_63595 = (state_63656[10]);var inst_63594 = (state_63656[11]);var inst_63597 = (inst_63595 < inst_63594);var inst_63598 = inst_63597;var state_63656__$1 = state_63656;if(cljs.core.truth_(inst_63598))
{var statearr_63717_63785 = state_63656__$1;(statearr_63717_63785[1] = 27);
} else
{var statearr_63718_63786 = state_63656__$1;(statearr_63718_63786[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 26))
{var inst_63584 = (state_63656[19]);var inst_63642 = (state_63656[2]);var inst_63643 = cljs.core.seq.call(null,inst_63584);var state_63656__$1 = (function (){var statearr_63719 = state_63656;(statearr_63719[30] = inst_63642);
return statearr_63719;
})();if(inst_63643)
{var statearr_63720_63787 = state_63656__$1;(statearr_63720_63787[1] = 42);
} else
{var statearr_63721_63788 = state_63656__$1;(statearr_63721_63788[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 27))
{var inst_63595 = (state_63656[10]);var inst_63593 = (state_63656[12]);var inst_63600 = cljs.core._nth.call(null,inst_63593,inst_63595);var state_63656__$1 = (function (){var statearr_63722 = state_63656;(statearr_63722[8] = inst_63600);
return statearr_63722;
})();var statearr_63723_63789 = state_63656__$1;(statearr_63723_63789[2] = null);
(statearr_63723_63789[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 28))
{var inst_63613 = (state_63656[9]);var inst_63592 = (state_63656[13]);var inst_63613__$1 = cljs.core.seq.call(null,inst_63592);var state_63656__$1 = (function (){var statearr_63727 = state_63656;(statearr_63727[9] = inst_63613__$1);
return statearr_63727;
})();if(inst_63613__$1)
{var statearr_63728_63790 = state_63656__$1;(statearr_63728_63790[1] = 33);
} else
{var statearr_63729_63791 = state_63656__$1;(statearr_63729_63791[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 29))
{var inst_63640 = (state_63656[2]);var state_63656__$1 = state_63656;var statearr_63730_63792 = state_63656__$1;(statearr_63730_63792[2] = inst_63640);
(statearr_63730_63792[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 30))
{var inst_63595 = (state_63656[10]);var inst_63594 = (state_63656[11]);var inst_63593 = (state_63656[12]);var inst_63592 = (state_63656[13]);var inst_63609 = (state_63656[2]);var inst_63610 = (inst_63595 + 1);var tmp63724 = inst_63594;var tmp63725 = inst_63593;var tmp63726 = inst_63592;var inst_63592__$1 = tmp63726;var inst_63593__$1 = tmp63725;var inst_63594__$1 = tmp63724;var inst_63595__$1 = inst_63610;var state_63656__$1 = (function (){var statearr_63731 = state_63656;(statearr_63731[31] = inst_63609);
(statearr_63731[10] = inst_63595__$1);
(statearr_63731[11] = inst_63594__$1);
(statearr_63731[12] = inst_63593__$1);
(statearr_63731[13] = inst_63592__$1);
return statearr_63731;
})();var statearr_63732_63793 = state_63656__$1;(statearr_63732_63793[2] = null);
(statearr_63732_63793[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63657 === 31))
{var inst_63600 = (state_63656[8]);var inst_63601 = (state_63656[2]);var inst_63602 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_63603 = cljs.core.async.untap_STAR_.call(null,m,inst_63600);var state_63656__$1 = (function (){var statearr_63733 = state_63656;(statearr_63733[32] = inst_63601);
(statearr_63733[33] = inst_63602);
return statearr_63733;
})();var statearr_63734_63794 = state_63656__$1;(statearr_63734_63794[2] = inst_63603);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63656__$1);
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
var state_machine__13648__auto____0 = (function (){var statearr_63738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63738[0] = state_machine__13648__auto__);
(statearr_63738[1] = 1);
return statearr_63738;
});
var state_machine__13648__auto____1 = (function (state_63656){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_63656);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e63739){if((e63739 instanceof Object))
{var ex__13651__auto__ = e63739;var statearr_63740_63795 = state_63656;(statearr_63740_63795[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63656);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63796 = state_63656;
state_63656 = G__63796;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_63656){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_63656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_63741 = f__13746__auto__.call(null);(statearr_63741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___63742);
return statearr_63741;
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
cljs.core.async.Mix = (function (){var obj63798 = {};return obj63798;
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
;var m = (function (){if(typeof cljs.core.async.t63908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63908 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta63909){
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
this.meta63909 = meta63909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63908.cljs$lang$type = true;
cljs.core.async.t63908.cljs$lang$ctorStr = "cljs.core.async/t63908";
cljs.core.async.t63908.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t63908");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t63908.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t63908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63910){var self__ = this;
var _63910__$1 = this;return self__.meta63909;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t63908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63910,meta63909__$1){var self__ = this;
var _63910__$1 = this;return (new cljs.core.async.t63908(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta63909__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t63908 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t63908(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta63909){return (new cljs.core.async.t63908(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta63909));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t63908(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13745__auto___64017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_63975){var state_val_63976 = (state_63975[1]);if((state_val_63976 === 1))
{var inst_63914 = (state_63975[7]);var inst_63914__$1 = calc_state.call(null);var inst_63915 = cljs.core.seq_QMARK_.call(null,inst_63914__$1);var state_63975__$1 = (function (){var statearr_63977 = state_63975;(statearr_63977[7] = inst_63914__$1);
return statearr_63977;
})();if(inst_63915)
{var statearr_63978_64018 = state_63975__$1;(statearr_63978_64018[1] = 2);
} else
{var statearr_63979_64019 = state_63975__$1;(statearr_63979_64019[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 2))
{var inst_63914 = (state_63975[7]);var inst_63917 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63914);var state_63975__$1 = state_63975;var statearr_63980_64020 = state_63975__$1;(statearr_63980_64020[2] = inst_63917);
(statearr_63980_64020[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 3))
{var inst_63914 = (state_63975[7]);var state_63975__$1 = state_63975;var statearr_63981_64021 = state_63975__$1;(statearr_63981_64021[2] = inst_63914);
(statearr_63981_64021[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 4))
{var inst_63914 = (state_63975[7]);var inst_63920 = (state_63975[2]);var inst_63921 = cljs.core.get.call(null,inst_63920,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_63922 = cljs.core.get.call(null,inst_63920,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_63923 = cljs.core.get.call(null,inst_63920,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_63924 = inst_63914;var state_63975__$1 = (function (){var statearr_63982 = state_63975;(statearr_63982[8] = inst_63922);
(statearr_63982[9] = inst_63921);
(statearr_63982[10] = inst_63923);
(statearr_63982[11] = inst_63924);
return statearr_63982;
})();var statearr_63983_64022 = state_63975__$1;(statearr_63983_64022[2] = null);
(statearr_63983_64022[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 5))
{var inst_63924 = (state_63975[11]);var inst_63927 = cljs.core.seq_QMARK_.call(null,inst_63924);var state_63975__$1 = state_63975;if(inst_63927)
{var statearr_63984_64023 = state_63975__$1;(statearr_63984_64023[1] = 7);
} else
{var statearr_63985_64024 = state_63975__$1;(statearr_63985_64024[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 6))
{var inst_63973 = (state_63975[2]);var state_63975__$1 = state_63975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63975__$1,inst_63973);
} else
{if((state_val_63976 === 7))
{var inst_63924 = (state_63975[11]);var inst_63929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63924);var state_63975__$1 = state_63975;var statearr_63986_64025 = state_63975__$1;(statearr_63986_64025[2] = inst_63929);
(statearr_63986_64025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 8))
{var inst_63924 = (state_63975[11]);var state_63975__$1 = state_63975;var statearr_63987_64026 = state_63975__$1;(statearr_63987_64026[2] = inst_63924);
(statearr_63987_64026[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 9))
{var inst_63932 = (state_63975[12]);var inst_63932__$1 = (state_63975[2]);var inst_63933 = cljs.core.get.call(null,inst_63932__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_63934 = cljs.core.get.call(null,inst_63932__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_63935 = cljs.core.get.call(null,inst_63932__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_63975__$1 = (function (){var statearr_63988 = state_63975;(statearr_63988[12] = inst_63932__$1);
(statearr_63988[13] = inst_63934);
(statearr_63988[14] = inst_63935);
return statearr_63988;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_63975__$1,10,inst_63933);
} else
{if((state_val_63976 === 10))
{var inst_63939 = (state_63975[15]);var inst_63940 = (state_63975[16]);var inst_63938 = (state_63975[2]);var inst_63939__$1 = cljs.core.nth.call(null,inst_63938,0,null);var inst_63940__$1 = cljs.core.nth.call(null,inst_63938,1,null);var inst_63941 = (inst_63939__$1 == null);var inst_63942 = cljs.core._EQ_.call(null,inst_63940__$1,change);var inst_63943 = (inst_63941) || (inst_63942);var state_63975__$1 = (function (){var statearr_63989 = state_63975;(statearr_63989[15] = inst_63939__$1);
(statearr_63989[16] = inst_63940__$1);
return statearr_63989;
})();if(cljs.core.truth_(inst_63943))
{var statearr_63990_64027 = state_63975__$1;(statearr_63990_64027[1] = 11);
} else
{var statearr_63991_64028 = state_63975__$1;(statearr_63991_64028[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 11))
{var inst_63939 = (state_63975[15]);var inst_63945 = (inst_63939 == null);var state_63975__$1 = state_63975;if(cljs.core.truth_(inst_63945))
{var statearr_63992_64029 = state_63975__$1;(statearr_63992_64029[1] = 14);
} else
{var statearr_63993_64030 = state_63975__$1;(statearr_63993_64030[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 12))
{var inst_63940 = (state_63975[16]);var inst_63935 = (state_63975[14]);var inst_63954 = (state_63975[17]);var inst_63954__$1 = inst_63935.call(null,inst_63940);var state_63975__$1 = (function (){var statearr_63994 = state_63975;(statearr_63994[17] = inst_63954__$1);
return statearr_63994;
})();if(cljs.core.truth_(inst_63954__$1))
{var statearr_63995_64031 = state_63975__$1;(statearr_63995_64031[1] = 17);
} else
{var statearr_63996_64032 = state_63975__$1;(statearr_63996_64032[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 13))
{var inst_63971 = (state_63975[2]);var state_63975__$1 = state_63975;var statearr_63997_64033 = state_63975__$1;(statearr_63997_64033[2] = inst_63971);
(statearr_63997_64033[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 14))
{var inst_63940 = (state_63975[16]);var inst_63947 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_63940);var state_63975__$1 = state_63975;var statearr_63998_64034 = state_63975__$1;(statearr_63998_64034[2] = inst_63947);
(statearr_63998_64034[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 15))
{var state_63975__$1 = state_63975;var statearr_63999_64035 = state_63975__$1;(statearr_63999_64035[2] = null);
(statearr_63999_64035[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 16))
{var inst_63950 = (state_63975[2]);var inst_63951 = calc_state.call(null);var inst_63924 = inst_63951;var state_63975__$1 = (function (){var statearr_64000 = state_63975;(statearr_64000[18] = inst_63950);
(statearr_64000[11] = inst_63924);
return statearr_64000;
})();var statearr_64001_64036 = state_63975__$1;(statearr_64001_64036[2] = null);
(statearr_64001_64036[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 17))
{var inst_63954 = (state_63975[17]);var state_63975__$1 = state_63975;var statearr_64002_64037 = state_63975__$1;(statearr_64002_64037[2] = inst_63954);
(statearr_64002_64037[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 18))
{var inst_63934 = (state_63975[13]);var inst_63940 = (state_63975[16]);var inst_63935 = (state_63975[14]);var inst_63957 = cljs.core.empty_QMARK_.call(null,inst_63935);var inst_63958 = inst_63934.call(null,inst_63940);var inst_63959 = cljs.core.not.call(null,inst_63958);var inst_63960 = (inst_63957) && (inst_63959);var state_63975__$1 = state_63975;var statearr_64003_64038 = state_63975__$1;(statearr_64003_64038[2] = inst_63960);
(statearr_64003_64038[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 19))
{var inst_63962 = (state_63975[2]);var state_63975__$1 = state_63975;if(cljs.core.truth_(inst_63962))
{var statearr_64004_64039 = state_63975__$1;(statearr_64004_64039[1] = 20);
} else
{var statearr_64005_64040 = state_63975__$1;(statearr_64005_64040[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 20))
{var inst_63939 = (state_63975[15]);var state_63975__$1 = state_63975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63975__$1,23,out,inst_63939);
} else
{if((state_val_63976 === 21))
{var state_63975__$1 = state_63975;var statearr_64006_64041 = state_63975__$1;(statearr_64006_64041[2] = null);
(statearr_64006_64041[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 22))
{var inst_63932 = (state_63975[12]);var inst_63968 = (state_63975[2]);var inst_63924 = inst_63932;var state_63975__$1 = (function (){var statearr_64007 = state_63975;(statearr_64007[11] = inst_63924);
(statearr_64007[19] = inst_63968);
return statearr_64007;
})();var statearr_64008_64042 = state_63975__$1;(statearr_64008_64042[2] = null);
(statearr_64008_64042[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63976 === 23))
{var inst_63965 = (state_63975[2]);var state_63975__$1 = state_63975;var statearr_64009_64043 = state_63975__$1;(statearr_64009_64043[2] = inst_63965);
(statearr_64009_64043[1] = 22);
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
var state_machine__13648__auto____0 = (function (){var statearr_64013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64013[0] = state_machine__13648__auto__);
(statearr_64013[1] = 1);
return statearr_64013;
});
var state_machine__13648__auto____1 = (function (state_63975){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_63975);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64014){if((e64014 instanceof Object))
{var ex__13651__auto__ = e64014;var statearr_64015_64044 = state_63975;(statearr_64015_64044[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64045 = state_63975;
state_63975 = G__64045;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_63975){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_63975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64016 = f__13746__auto__.call(null);(statearr_64016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64017);
return statearr_64016;
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
cljs.core.async.Pub = (function (){var obj64047 = {};return obj64047;
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
return (function (p1__64048_SHARP_){if(cljs.core.truth_(p1__64048_SHARP_.call(null,topic)))
{return p1__64048_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__64048_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7862__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t64173 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t64173 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta64174){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta64174 = meta64174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t64173.cljs$lang$type = true;
cljs.core.async.t64173.cljs$lang$ctorStr = "cljs.core.async/t64173";
cljs.core.async.t64173.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t64173");
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t64173.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t64173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_64175){var self__ = this;
var _64175__$1 = this;return self__.meta64174;
});})(mults,ensure_mult))
;
cljs.core.async.t64173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_64175,meta64174__$1){var self__ = this;
var _64175__$1 = this;return (new cljs.core.async.t64173(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta64174__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t64173 = ((function (mults,ensure_mult){
return (function __GT_t64173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta64174){return (new cljs.core.async.t64173(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta64174));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t64173(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13745__auto___64297 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_64249){var state_val_64250 = (state_64249[1]);if((state_val_64250 === 1))
{var state_64249__$1 = state_64249;var statearr_64251_64298 = state_64249__$1;(statearr_64251_64298[2] = null);
(statearr_64251_64298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 2))
{var state_64249__$1 = state_64249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64249__$1,4,ch);
} else
{if((state_val_64250 === 3))
{var inst_64247 = (state_64249[2]);var state_64249__$1 = state_64249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64249__$1,inst_64247);
} else
{if((state_val_64250 === 4))
{var inst_64178 = (state_64249[7]);var inst_64178__$1 = (state_64249[2]);var inst_64179 = (inst_64178__$1 == null);var state_64249__$1 = (function (){var statearr_64252 = state_64249;(statearr_64252[7] = inst_64178__$1);
return statearr_64252;
})();if(cljs.core.truth_(inst_64179))
{var statearr_64253_64299 = state_64249__$1;(statearr_64253_64299[1] = 5);
} else
{var statearr_64254_64300 = state_64249__$1;(statearr_64254_64300[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 5))
{var inst_64185 = cljs.core.deref.call(null,mults);var inst_64186 = cljs.core.vals.call(null,inst_64185);var inst_64187 = cljs.core.seq.call(null,inst_64186);var inst_64188 = inst_64187;var inst_64189 = null;var inst_64190 = 0;var inst_64191 = 0;var state_64249__$1 = (function (){var statearr_64255 = state_64249;(statearr_64255[8] = inst_64189);
(statearr_64255[9] = inst_64190);
(statearr_64255[10] = inst_64188);
(statearr_64255[11] = inst_64191);
return statearr_64255;
})();var statearr_64256_64301 = state_64249__$1;(statearr_64256_64301[2] = null);
(statearr_64256_64301[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 6))
{var inst_64178 = (state_64249[7]);var inst_64228 = (state_64249[12]);var inst_64226 = (state_64249[13]);var inst_64226__$1 = topic_fn.call(null,inst_64178);var inst_64227 = cljs.core.deref.call(null,mults);var inst_64228__$1 = cljs.core.get.call(null,inst_64227,inst_64226__$1);var state_64249__$1 = (function (){var statearr_64257 = state_64249;(statearr_64257[12] = inst_64228__$1);
(statearr_64257[13] = inst_64226__$1);
return statearr_64257;
})();if(cljs.core.truth_(inst_64228__$1))
{var statearr_64258_64302 = state_64249__$1;(statearr_64258_64302[1] = 19);
} else
{var statearr_64259_64303 = state_64249__$1;(statearr_64259_64303[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 7))
{var inst_64245 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64260_64304 = state_64249__$1;(statearr_64260_64304[2] = inst_64245);
(statearr_64260_64304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 8))
{var inst_64190 = (state_64249[9]);var inst_64191 = (state_64249[11]);var inst_64193 = (inst_64191 < inst_64190);var inst_64194 = inst_64193;var state_64249__$1 = state_64249;if(cljs.core.truth_(inst_64194))
{var statearr_64264_64305 = state_64249__$1;(statearr_64264_64305[1] = 10);
} else
{var statearr_64265_64306 = state_64249__$1;(statearr_64265_64306[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 9))
{var inst_64224 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64266_64307 = state_64249__$1;(statearr_64266_64307[2] = inst_64224);
(statearr_64266_64307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 10))
{var inst_64189 = (state_64249[8]);var inst_64190 = (state_64249[9]);var inst_64188 = (state_64249[10]);var inst_64191 = (state_64249[11]);var inst_64196 = cljs.core._nth.call(null,inst_64189,inst_64191);var inst_64197 = cljs.core.async.muxch_STAR_.call(null,inst_64196);var inst_64198 = cljs.core.async.close_BANG_.call(null,inst_64197);var inst_64199 = (inst_64191 + 1);var tmp64261 = inst_64189;var tmp64262 = inst_64190;var tmp64263 = inst_64188;var inst_64188__$1 = tmp64263;var inst_64189__$1 = tmp64261;var inst_64190__$1 = tmp64262;var inst_64191__$1 = inst_64199;var state_64249__$1 = (function (){var statearr_64267 = state_64249;(statearr_64267[14] = inst_64198);
(statearr_64267[8] = inst_64189__$1);
(statearr_64267[9] = inst_64190__$1);
(statearr_64267[10] = inst_64188__$1);
(statearr_64267[11] = inst_64191__$1);
return statearr_64267;
})();var statearr_64268_64308 = state_64249__$1;(statearr_64268_64308[2] = null);
(statearr_64268_64308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 11))
{var inst_64202 = (state_64249[15]);var inst_64188 = (state_64249[10]);var inst_64202__$1 = cljs.core.seq.call(null,inst_64188);var state_64249__$1 = (function (){var statearr_64269 = state_64249;(statearr_64269[15] = inst_64202__$1);
return statearr_64269;
})();if(inst_64202__$1)
{var statearr_64270_64309 = state_64249__$1;(statearr_64270_64309[1] = 13);
} else
{var statearr_64271_64310 = state_64249__$1;(statearr_64271_64310[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 12))
{var inst_64222 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64272_64311 = state_64249__$1;(statearr_64272_64311[2] = inst_64222);
(statearr_64272_64311[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 13))
{var inst_64202 = (state_64249[15]);var inst_64204 = cljs.core.chunked_seq_QMARK_.call(null,inst_64202);var state_64249__$1 = state_64249;if(inst_64204)
{var statearr_64273_64312 = state_64249__$1;(statearr_64273_64312[1] = 16);
} else
{var statearr_64274_64313 = state_64249__$1;(statearr_64274_64313[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 14))
{var state_64249__$1 = state_64249;var statearr_64275_64314 = state_64249__$1;(statearr_64275_64314[2] = null);
(statearr_64275_64314[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 15))
{var inst_64220 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64276_64315 = state_64249__$1;(statearr_64276_64315[2] = inst_64220);
(statearr_64276_64315[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 16))
{var inst_64202 = (state_64249[15]);var inst_64206 = cljs.core.chunk_first.call(null,inst_64202);var inst_64207 = cljs.core.chunk_rest.call(null,inst_64202);var inst_64208 = cljs.core.count.call(null,inst_64206);var inst_64188 = inst_64207;var inst_64189 = inst_64206;var inst_64190 = inst_64208;var inst_64191 = 0;var state_64249__$1 = (function (){var statearr_64277 = state_64249;(statearr_64277[8] = inst_64189);
(statearr_64277[9] = inst_64190);
(statearr_64277[10] = inst_64188);
(statearr_64277[11] = inst_64191);
return statearr_64277;
})();var statearr_64278_64316 = state_64249__$1;(statearr_64278_64316[2] = null);
(statearr_64278_64316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 17))
{var inst_64202 = (state_64249[15]);var inst_64211 = cljs.core.first.call(null,inst_64202);var inst_64212 = cljs.core.async.muxch_STAR_.call(null,inst_64211);var inst_64213 = cljs.core.async.close_BANG_.call(null,inst_64212);var inst_64214 = cljs.core.next.call(null,inst_64202);var inst_64188 = inst_64214;var inst_64189 = null;var inst_64190 = 0;var inst_64191 = 0;var state_64249__$1 = (function (){var statearr_64279 = state_64249;(statearr_64279[8] = inst_64189);
(statearr_64279[9] = inst_64190);
(statearr_64279[10] = inst_64188);
(statearr_64279[16] = inst_64213);
(statearr_64279[11] = inst_64191);
return statearr_64279;
})();var statearr_64280_64317 = state_64249__$1;(statearr_64280_64317[2] = null);
(statearr_64280_64317[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 18))
{var inst_64217 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64281_64318 = state_64249__$1;(statearr_64281_64318[2] = inst_64217);
(statearr_64281_64318[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 19))
{var state_64249__$1 = state_64249;var statearr_64282_64319 = state_64249__$1;(statearr_64282_64319[2] = null);
(statearr_64282_64319[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 20))
{var state_64249__$1 = state_64249;var statearr_64283_64320 = state_64249__$1;(statearr_64283_64320[2] = null);
(statearr_64283_64320[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 21))
{var inst_64242 = (state_64249[2]);var state_64249__$1 = (function (){var statearr_64284 = state_64249;(statearr_64284[17] = inst_64242);
return statearr_64284;
})();var statearr_64285_64321 = state_64249__$1;(statearr_64285_64321[2] = null);
(statearr_64285_64321[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 22))
{var inst_64239 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64286_64322 = state_64249__$1;(statearr_64286_64322[2] = inst_64239);
(statearr_64286_64322[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 23))
{var inst_64226 = (state_64249[13]);var inst_64230 = (state_64249[2]);var inst_64231 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_64226);var state_64249__$1 = (function (){var statearr_64287 = state_64249;(statearr_64287[18] = inst_64230);
return statearr_64287;
})();var statearr_64288_64323 = state_64249__$1;(statearr_64288_64323[2] = inst_64231);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64249__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64250 === 24))
{var inst_64178 = (state_64249[7]);var inst_64228 = (state_64249[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64249,23,Object,null,22);var inst_64235 = cljs.core.async.muxch_STAR_.call(null,inst_64228);var state_64249__$1 = state_64249;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64249__$1,25,inst_64235,inst_64178);
} else
{if((state_val_64250 === 25))
{var inst_64237 = (state_64249[2]);var state_64249__$1 = state_64249;var statearr_64289_64324 = state_64249__$1;(statearr_64289_64324[2] = inst_64237);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64249__$1);
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
var state_machine__13648__auto____0 = (function (){var statearr_64293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64293[0] = state_machine__13648__auto__);
(statearr_64293[1] = 1);
return statearr_64293;
});
var state_machine__13648__auto____1 = (function (state_64249){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_64249);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64294){if((e64294 instanceof Object))
{var ex__13651__auto__ = e64294;var statearr_64295_64325 = state_64249;(statearr_64295_64325[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64249);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64326 = state_64249;
state_64249 = G__64326;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_64249){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_64249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64296 = f__13746__auto__.call(null);(statearr_64296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64297);
return statearr_64296;
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
,cljs.core.range.call(null,cnt));var c__13745__auto___64463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_64433){var state_val_64434 = (state_64433[1]);if((state_val_64434 === 1))
{var state_64433__$1 = state_64433;var statearr_64435_64464 = state_64433__$1;(statearr_64435_64464[2] = null);
(statearr_64435_64464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 2))
{var inst_64396 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_64397 = 0;var state_64433__$1 = (function (){var statearr_64436 = state_64433;(statearr_64436[7] = inst_64397);
(statearr_64436[8] = inst_64396);
return statearr_64436;
})();var statearr_64437_64465 = state_64433__$1;(statearr_64437_64465[2] = null);
(statearr_64437_64465[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 3))
{var inst_64431 = (state_64433[2]);var state_64433__$1 = state_64433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64433__$1,inst_64431);
} else
{if((state_val_64434 === 4))
{var inst_64397 = (state_64433[7]);var inst_64399 = (inst_64397 < cnt);var state_64433__$1 = state_64433;if(cljs.core.truth_(inst_64399))
{var statearr_64438_64466 = state_64433__$1;(statearr_64438_64466[1] = 6);
} else
{var statearr_64439_64467 = state_64433__$1;(statearr_64439_64467[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 5))
{var inst_64417 = (state_64433[2]);var state_64433__$1 = (function (){var statearr_64440 = state_64433;(statearr_64440[9] = inst_64417);
return statearr_64440;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64433__$1,12,dchan);
} else
{if((state_val_64434 === 6))
{var state_64433__$1 = state_64433;var statearr_64441_64468 = state_64433__$1;(statearr_64441_64468[2] = null);
(statearr_64441_64468[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 7))
{var state_64433__$1 = state_64433;var statearr_64442_64469 = state_64433__$1;(statearr_64442_64469[2] = null);
(statearr_64442_64469[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 8))
{var inst_64415 = (state_64433[2]);var state_64433__$1 = state_64433;var statearr_64443_64470 = state_64433__$1;(statearr_64443_64470[2] = inst_64415);
(statearr_64443_64470[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 9))
{var inst_64397 = (state_64433[7]);var inst_64410 = (state_64433[2]);var inst_64411 = (inst_64397 + 1);var inst_64397__$1 = inst_64411;var state_64433__$1 = (function (){var statearr_64444 = state_64433;(statearr_64444[7] = inst_64397__$1);
(statearr_64444[10] = inst_64410);
return statearr_64444;
})();var statearr_64445_64471 = state_64433__$1;(statearr_64445_64471[2] = null);
(statearr_64445_64471[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 10))
{var inst_64401 = (state_64433[2]);var inst_64402 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_64433__$1 = (function (){var statearr_64446 = state_64433;(statearr_64446[11] = inst_64401);
return statearr_64446;
})();var statearr_64447_64472 = state_64433__$1;(statearr_64447_64472[2] = inst_64402);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64433__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 11))
{var inst_64397 = (state_64433[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64433,10,Object,null,9);var inst_64406 = chs__$1.call(null,inst_64397);var inst_64407 = done.call(null,inst_64397);var inst_64408 = cljs.core.async.take_BANG_.call(null,inst_64406,inst_64407);var state_64433__$1 = state_64433;var statearr_64448_64473 = state_64433__$1;(statearr_64448_64473[2] = inst_64408);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64433__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 12))
{var inst_64419 = (state_64433[12]);var inst_64419__$1 = (state_64433[2]);var inst_64420 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_64419__$1);var state_64433__$1 = (function (){var statearr_64449 = state_64433;(statearr_64449[12] = inst_64419__$1);
return statearr_64449;
})();if(cljs.core.truth_(inst_64420))
{var statearr_64450_64474 = state_64433__$1;(statearr_64450_64474[1] = 13);
} else
{var statearr_64451_64475 = state_64433__$1;(statearr_64451_64475[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 13))
{var inst_64422 = cljs.core.async.close_BANG_.call(null,out);var state_64433__$1 = state_64433;var statearr_64452_64476 = state_64433__$1;(statearr_64452_64476[2] = inst_64422);
(statearr_64452_64476[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 14))
{var inst_64419 = (state_64433[12]);var inst_64424 = cljs.core.apply.call(null,f,inst_64419);var state_64433__$1 = state_64433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64433__$1,16,out,inst_64424);
} else
{if((state_val_64434 === 15))
{var inst_64429 = (state_64433[2]);var state_64433__$1 = state_64433;var statearr_64453_64477 = state_64433__$1;(statearr_64453_64477[2] = inst_64429);
(statearr_64453_64477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64434 === 16))
{var inst_64426 = (state_64433[2]);var state_64433__$1 = (function (){var statearr_64454 = state_64433;(statearr_64454[13] = inst_64426);
return statearr_64454;
})();var statearr_64455_64478 = state_64433__$1;(statearr_64455_64478[2] = null);
(statearr_64455_64478[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_64459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64459[0] = state_machine__13648__auto__);
(statearr_64459[1] = 1);
return statearr_64459;
});
var state_machine__13648__auto____1 = (function (state_64433){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_64433);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64460){if((e64460 instanceof Object))
{var ex__13651__auto__ = e64460;var statearr_64461_64479 = state_64433;(statearr_64461_64479[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64480 = state_64433;
state_64433 = G__64480;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_64433){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_64433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64462 = f__13746__auto__.call(null);(statearr_64462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64463);
return statearr_64462;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___64588 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_64564){var state_val_64565 = (state_64564[1]);if((state_val_64565 === 1))
{var inst_64535 = cljs.core.vec.call(null,chs);var inst_64536 = inst_64535;var state_64564__$1 = (function (){var statearr_64566 = state_64564;(statearr_64566[7] = inst_64536);
return statearr_64566;
})();var statearr_64567_64589 = state_64564__$1;(statearr_64567_64589[2] = null);
(statearr_64567_64589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 2))
{var inst_64536 = (state_64564[7]);var inst_64538 = cljs.core.count.call(null,inst_64536);var inst_64539 = (inst_64538 > 0);var state_64564__$1 = state_64564;if(cljs.core.truth_(inst_64539))
{var statearr_64568_64590 = state_64564__$1;(statearr_64568_64590[1] = 4);
} else
{var statearr_64569_64591 = state_64564__$1;(statearr_64569_64591[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 3))
{var inst_64562 = (state_64564[2]);var state_64564__$1 = state_64564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64564__$1,inst_64562);
} else
{if((state_val_64565 === 4))
{var inst_64536 = (state_64564[7]);var state_64564__$1 = state_64564;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_64564__$1,7,inst_64536);
} else
{if((state_val_64565 === 5))
{var inst_64558 = cljs.core.async.close_BANG_.call(null,out);var state_64564__$1 = state_64564;var statearr_64570_64592 = state_64564__$1;(statearr_64570_64592[2] = inst_64558);
(statearr_64570_64592[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 6))
{var inst_64560 = (state_64564[2]);var state_64564__$1 = state_64564;var statearr_64571_64593 = state_64564__$1;(statearr_64571_64593[2] = inst_64560);
(statearr_64571_64593[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 7))
{var inst_64543 = (state_64564[8]);var inst_64544 = (state_64564[9]);var inst_64543__$1 = (state_64564[2]);var inst_64544__$1 = cljs.core.nth.call(null,inst_64543__$1,0,null);var inst_64545 = cljs.core.nth.call(null,inst_64543__$1,1,null);var inst_64546 = (inst_64544__$1 == null);var state_64564__$1 = (function (){var statearr_64572 = state_64564;(statearr_64572[8] = inst_64543__$1);
(statearr_64572[9] = inst_64544__$1);
(statearr_64572[10] = inst_64545);
return statearr_64572;
})();if(cljs.core.truth_(inst_64546))
{var statearr_64573_64594 = state_64564__$1;(statearr_64573_64594[1] = 8);
} else
{var statearr_64574_64595 = state_64564__$1;(statearr_64574_64595[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 8))
{var inst_64536 = (state_64564[7]);var inst_64543 = (state_64564[8]);var inst_64544 = (state_64564[9]);var inst_64545 = (state_64564[10]);var inst_64548 = (function (){var c = inst_64545;var v = inst_64544;var vec__64541 = inst_64543;var cs = inst_64536;return ((function (c,v,vec__64541,cs,inst_64536,inst_64543,inst_64544,inst_64545,state_val_64565){
return (function (p1__64481_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__64481_SHARP_);
});
;})(c,v,vec__64541,cs,inst_64536,inst_64543,inst_64544,inst_64545,state_val_64565))
})();var inst_64549 = cljs.core.filterv.call(null,inst_64548,inst_64536);var inst_64536__$1 = inst_64549;var state_64564__$1 = (function (){var statearr_64575 = state_64564;(statearr_64575[7] = inst_64536__$1);
return statearr_64575;
})();var statearr_64576_64596 = state_64564__$1;(statearr_64576_64596[2] = null);
(statearr_64576_64596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 9))
{var inst_64544 = (state_64564[9]);var state_64564__$1 = state_64564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64564__$1,11,out,inst_64544);
} else
{if((state_val_64565 === 10))
{var inst_64556 = (state_64564[2]);var state_64564__$1 = state_64564;var statearr_64578_64597 = state_64564__$1;(statearr_64578_64597[2] = inst_64556);
(statearr_64578_64597[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64565 === 11))
{var inst_64536 = (state_64564[7]);var inst_64553 = (state_64564[2]);var tmp64577 = inst_64536;var inst_64536__$1 = tmp64577;var state_64564__$1 = (function (){var statearr_64579 = state_64564;(statearr_64579[7] = inst_64536__$1);
(statearr_64579[11] = inst_64553);
return statearr_64579;
})();var statearr_64580_64598 = state_64564__$1;(statearr_64580_64598[2] = null);
(statearr_64580_64598[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_64584 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64584[0] = state_machine__13648__auto__);
(statearr_64584[1] = 1);
return statearr_64584;
});
var state_machine__13648__auto____1 = (function (state_64564){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_64564);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64585){if((e64585 instanceof Object))
{var ex__13651__auto__ = e64585;var statearr_64586_64599 = state_64564;(statearr_64586_64599[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64564);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64600 = state_64564;
state_64564 = G__64600;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_64564){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_64564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64587 = f__13746__auto__.call(null);(statearr_64587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64588);
return statearr_64587;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___64693 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_64670){var state_val_64671 = (state_64670[1]);if((state_val_64671 === 1))
{var inst_64647 = 0;var state_64670__$1 = (function (){var statearr_64672 = state_64670;(statearr_64672[7] = inst_64647);
return statearr_64672;
})();var statearr_64673_64694 = state_64670__$1;(statearr_64673_64694[2] = null);
(statearr_64673_64694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 2))
{var inst_64647 = (state_64670[7]);var inst_64649 = (inst_64647 < n);var state_64670__$1 = state_64670;if(cljs.core.truth_(inst_64649))
{var statearr_64674_64695 = state_64670__$1;(statearr_64674_64695[1] = 4);
} else
{var statearr_64675_64696 = state_64670__$1;(statearr_64675_64696[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 3))
{var inst_64667 = (state_64670[2]);var inst_64668 = cljs.core.async.close_BANG_.call(null,out);var state_64670__$1 = (function (){var statearr_64676 = state_64670;(statearr_64676[8] = inst_64667);
return statearr_64676;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64670__$1,inst_64668);
} else
{if((state_val_64671 === 4))
{var state_64670__$1 = state_64670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64670__$1,7,ch);
} else
{if((state_val_64671 === 5))
{var state_64670__$1 = state_64670;var statearr_64677_64697 = state_64670__$1;(statearr_64677_64697[2] = null);
(statearr_64677_64697[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 6))
{var inst_64665 = (state_64670[2]);var state_64670__$1 = state_64670;var statearr_64678_64698 = state_64670__$1;(statearr_64678_64698[2] = inst_64665);
(statearr_64678_64698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 7))
{var inst_64652 = (state_64670[9]);var inst_64652__$1 = (state_64670[2]);var inst_64653 = (inst_64652__$1 == null);var inst_64654 = cljs.core.not.call(null,inst_64653);var state_64670__$1 = (function (){var statearr_64679 = state_64670;(statearr_64679[9] = inst_64652__$1);
return statearr_64679;
})();if(inst_64654)
{var statearr_64680_64699 = state_64670__$1;(statearr_64680_64699[1] = 8);
} else
{var statearr_64681_64700 = state_64670__$1;(statearr_64681_64700[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 8))
{var inst_64652 = (state_64670[9]);var state_64670__$1 = state_64670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64670__$1,11,out,inst_64652);
} else
{if((state_val_64671 === 9))
{var state_64670__$1 = state_64670;var statearr_64682_64701 = state_64670__$1;(statearr_64682_64701[2] = null);
(statearr_64682_64701[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 10))
{var inst_64662 = (state_64670[2]);var state_64670__$1 = state_64670;var statearr_64683_64702 = state_64670__$1;(statearr_64683_64702[2] = inst_64662);
(statearr_64683_64702[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64671 === 11))
{var inst_64647 = (state_64670[7]);var inst_64657 = (state_64670[2]);var inst_64658 = (inst_64647 + 1);var inst_64647__$1 = inst_64658;var state_64670__$1 = (function (){var statearr_64684 = state_64670;(statearr_64684[10] = inst_64657);
(statearr_64684[7] = inst_64647__$1);
return statearr_64684;
})();var statearr_64685_64703 = state_64670__$1;(statearr_64685_64703[2] = null);
(statearr_64685_64703[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_64689 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_64689[0] = state_machine__13648__auto__);
(statearr_64689[1] = 1);
return statearr_64689;
});
var state_machine__13648__auto____1 = (function (state_64670){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_64670);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64690){if((e64690 instanceof Object))
{var ex__13651__auto__ = e64690;var statearr_64691_64704 = state_64670;(statearr_64691_64704[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64705 = state_64670;
state_64670 = G__64705;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_64670){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_64670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64692 = f__13746__auto__.call(null);(statearr_64692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64693);
return statearr_64692;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___64802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_64777){var state_val_64778 = (state_64777[1]);if((state_val_64778 === 1))
{var inst_64754 = null;var state_64777__$1 = (function (){var statearr_64779 = state_64777;(statearr_64779[7] = inst_64754);
return statearr_64779;
})();var statearr_64780_64803 = state_64777__$1;(statearr_64780_64803[2] = null);
(statearr_64780_64803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 2))
{var state_64777__$1 = state_64777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64777__$1,4,ch);
} else
{if((state_val_64778 === 3))
{var inst_64774 = (state_64777[2]);var inst_64775 = cljs.core.async.close_BANG_.call(null,out);var state_64777__$1 = (function (){var statearr_64781 = state_64777;(statearr_64781[8] = inst_64774);
return statearr_64781;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64777__$1,inst_64775);
} else
{if((state_val_64778 === 4))
{var inst_64757 = (state_64777[9]);var inst_64757__$1 = (state_64777[2]);var inst_64758 = (inst_64757__$1 == null);var inst_64759 = cljs.core.not.call(null,inst_64758);var state_64777__$1 = (function (){var statearr_64782 = state_64777;(statearr_64782[9] = inst_64757__$1);
return statearr_64782;
})();if(inst_64759)
{var statearr_64783_64804 = state_64777__$1;(statearr_64783_64804[1] = 5);
} else
{var statearr_64784_64805 = state_64777__$1;(statearr_64784_64805[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 5))
{var inst_64754 = (state_64777[7]);var inst_64757 = (state_64777[9]);var inst_64761 = cljs.core._EQ_.call(null,inst_64757,inst_64754);var state_64777__$1 = state_64777;if(inst_64761)
{var statearr_64785_64806 = state_64777__$1;(statearr_64785_64806[1] = 8);
} else
{var statearr_64786_64807 = state_64777__$1;(statearr_64786_64807[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 6))
{var state_64777__$1 = state_64777;var statearr_64788_64808 = state_64777__$1;(statearr_64788_64808[2] = null);
(statearr_64788_64808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 7))
{var inst_64772 = (state_64777[2]);var state_64777__$1 = state_64777;var statearr_64789_64809 = state_64777__$1;(statearr_64789_64809[2] = inst_64772);
(statearr_64789_64809[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 8))
{var inst_64754 = (state_64777[7]);var tmp64787 = inst_64754;var inst_64754__$1 = tmp64787;var state_64777__$1 = (function (){var statearr_64790 = state_64777;(statearr_64790[7] = inst_64754__$1);
return statearr_64790;
})();var statearr_64791_64810 = state_64777__$1;(statearr_64791_64810[2] = null);
(statearr_64791_64810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 9))
{var inst_64757 = (state_64777[9]);var state_64777__$1 = state_64777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64777__$1,11,out,inst_64757);
} else
{if((state_val_64778 === 10))
{var inst_64769 = (state_64777[2]);var state_64777__$1 = state_64777;var statearr_64792_64811 = state_64777__$1;(statearr_64792_64811[2] = inst_64769);
(statearr_64792_64811[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64778 === 11))
{var inst_64757 = (state_64777[9]);var inst_64766 = (state_64777[2]);var inst_64754 = inst_64757;var state_64777__$1 = (function (){var statearr_64793 = state_64777;(statearr_64793[7] = inst_64754);
(statearr_64793[10] = inst_64766);
return statearr_64793;
})();var statearr_64794_64812 = state_64777__$1;(statearr_64794_64812[2] = null);
(statearr_64794_64812[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_64798 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_64798[0] = state_machine__13648__auto__);
(statearr_64798[1] = 1);
return statearr_64798;
});
var state_machine__13648__auto____1 = (function (state_64777){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_64777);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64799){if((e64799 instanceof Object))
{var ex__13651__auto__ = e64799;var statearr_64800_64813 = state_64777;(statearr_64800_64813[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64814 = state_64777;
state_64777 = G__64814;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_64777){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_64777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64801 = f__13746__auto__.call(null);(statearr_64801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64802);
return statearr_64801;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___64949 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_64919){var state_val_64920 = (state_64919[1]);if((state_val_64920 === 1))
{var inst_64882 = (new Array(n));var inst_64883 = inst_64882;var inst_64884 = 0;var state_64919__$1 = (function (){var statearr_64921 = state_64919;(statearr_64921[7] = inst_64883);
(statearr_64921[8] = inst_64884);
return statearr_64921;
})();var statearr_64922_64950 = state_64919__$1;(statearr_64922_64950[2] = null);
(statearr_64922_64950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 2))
{var state_64919__$1 = state_64919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64919__$1,4,ch);
} else
{if((state_val_64920 === 3))
{var inst_64917 = (state_64919[2]);var state_64919__$1 = state_64919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64919__$1,inst_64917);
} else
{if((state_val_64920 === 4))
{var inst_64887 = (state_64919[9]);var inst_64887__$1 = (state_64919[2]);var inst_64888 = (inst_64887__$1 == null);var inst_64889 = cljs.core.not.call(null,inst_64888);var state_64919__$1 = (function (){var statearr_64923 = state_64919;(statearr_64923[9] = inst_64887__$1);
return statearr_64923;
})();if(inst_64889)
{var statearr_64924_64951 = state_64919__$1;(statearr_64924_64951[1] = 5);
} else
{var statearr_64925_64952 = state_64919__$1;(statearr_64925_64952[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 5))
{var inst_64883 = (state_64919[7]);var inst_64892 = (state_64919[10]);var inst_64884 = (state_64919[8]);var inst_64887 = (state_64919[9]);var inst_64891 = (inst_64883[inst_64884] = inst_64887);var inst_64892__$1 = (inst_64884 + 1);var inst_64893 = (inst_64892__$1 < n);var state_64919__$1 = (function (){var statearr_64926 = state_64919;(statearr_64926[10] = inst_64892__$1);
(statearr_64926[11] = inst_64891);
return statearr_64926;
})();if(cljs.core.truth_(inst_64893))
{var statearr_64927_64953 = state_64919__$1;(statearr_64927_64953[1] = 8);
} else
{var statearr_64928_64954 = state_64919__$1;(statearr_64928_64954[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 6))
{var inst_64884 = (state_64919[8]);var inst_64905 = (inst_64884 > 0);var state_64919__$1 = state_64919;if(cljs.core.truth_(inst_64905))
{var statearr_64930_64955 = state_64919__$1;(statearr_64930_64955[1] = 12);
} else
{var statearr_64931_64956 = state_64919__$1;(statearr_64931_64956[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 7))
{var inst_64915 = (state_64919[2]);var state_64919__$1 = state_64919;var statearr_64932_64957 = state_64919__$1;(statearr_64932_64957[2] = inst_64915);
(statearr_64932_64957[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 8))
{var inst_64883 = (state_64919[7]);var inst_64892 = (state_64919[10]);var tmp64929 = inst_64883;var inst_64883__$1 = tmp64929;var inst_64884 = inst_64892;var state_64919__$1 = (function (){var statearr_64933 = state_64919;(statearr_64933[7] = inst_64883__$1);
(statearr_64933[8] = inst_64884);
return statearr_64933;
})();var statearr_64934_64958 = state_64919__$1;(statearr_64934_64958[2] = null);
(statearr_64934_64958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 9))
{var inst_64883 = (state_64919[7]);var inst_64897 = cljs.core.vec.call(null,inst_64883);var state_64919__$1 = state_64919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64919__$1,11,out,inst_64897);
} else
{if((state_val_64920 === 10))
{var inst_64903 = (state_64919[2]);var state_64919__$1 = state_64919;var statearr_64935_64959 = state_64919__$1;(statearr_64935_64959[2] = inst_64903);
(statearr_64935_64959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 11))
{var inst_64899 = (state_64919[2]);var inst_64900 = (new Array(n));var inst_64883 = inst_64900;var inst_64884 = 0;var state_64919__$1 = (function (){var statearr_64936 = state_64919;(statearr_64936[12] = inst_64899);
(statearr_64936[7] = inst_64883);
(statearr_64936[8] = inst_64884);
return statearr_64936;
})();var statearr_64937_64960 = state_64919__$1;(statearr_64937_64960[2] = null);
(statearr_64937_64960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 12))
{var inst_64883 = (state_64919[7]);var inst_64907 = cljs.core.vec.call(null,inst_64883);var state_64919__$1 = state_64919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64919__$1,15,out,inst_64907);
} else
{if((state_val_64920 === 13))
{var state_64919__$1 = state_64919;var statearr_64938_64961 = state_64919__$1;(statearr_64938_64961[2] = null);
(statearr_64938_64961[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 14))
{var inst_64912 = (state_64919[2]);var inst_64913 = cljs.core.async.close_BANG_.call(null,out);var state_64919__$1 = (function (){var statearr_64939 = state_64919;(statearr_64939[13] = inst_64912);
return statearr_64939;
})();var statearr_64940_64962 = state_64919__$1;(statearr_64940_64962[2] = inst_64913);
(statearr_64940_64962[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_64920 === 15))
{var inst_64909 = (state_64919[2]);var state_64919__$1 = state_64919;var statearr_64941_64963 = state_64919__$1;(statearr_64941_64963[2] = inst_64909);
(statearr_64941_64963[1] = 14);
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
var state_machine__13648__auto____0 = (function (){var statearr_64945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_64945[0] = state_machine__13648__auto__);
(statearr_64945[1] = 1);
return statearr_64945;
});
var state_machine__13648__auto____1 = (function (state_64919){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_64919);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e64946){if((e64946 instanceof Object))
{var ex__13651__auto__ = e64946;var statearr_64947_64964 = state_64919;(statearr_64947_64964[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e64946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__64965 = state_64919;
state_64919 = G__64965;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_64919){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_64919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_64948 = f__13746__auto__.call(null);(statearr_64948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___64949);
return statearr_64948;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___65108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_65078){var state_val_65079 = (state_65078[1]);if((state_val_65079 === 1))
{var inst_65037 = [];var inst_65038 = inst_65037;var inst_65039 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_65078__$1 = (function (){var statearr_65080 = state_65078;(statearr_65080[7] = inst_65038);
(statearr_65080[8] = inst_65039);
return statearr_65080;
})();var statearr_65081_65109 = state_65078__$1;(statearr_65081_65109[2] = null);
(statearr_65081_65109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 2))
{var state_65078__$1 = state_65078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65078__$1,4,ch);
} else
{if((state_val_65079 === 3))
{var inst_65076 = (state_65078[2]);var state_65078__$1 = state_65078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65078__$1,inst_65076);
} else
{if((state_val_65079 === 4))
{var inst_65042 = (state_65078[9]);var inst_65042__$1 = (state_65078[2]);var inst_65043 = (inst_65042__$1 == null);var inst_65044 = cljs.core.not.call(null,inst_65043);var state_65078__$1 = (function (){var statearr_65082 = state_65078;(statearr_65082[9] = inst_65042__$1);
return statearr_65082;
})();if(inst_65044)
{var statearr_65083_65110 = state_65078__$1;(statearr_65083_65110[1] = 5);
} else
{var statearr_65084_65111 = state_65078__$1;(statearr_65084_65111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 5))
{var inst_65046 = (state_65078[10]);var inst_65039 = (state_65078[8]);var inst_65042 = (state_65078[9]);var inst_65046__$1 = f.call(null,inst_65042);var inst_65047 = cljs.core._EQ_.call(null,inst_65046__$1,inst_65039);var inst_65048 = cljs.core.keyword_identical_QMARK_.call(null,inst_65039,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_65049 = (inst_65047) || (inst_65048);var state_65078__$1 = (function (){var statearr_65085 = state_65078;(statearr_65085[10] = inst_65046__$1);
return statearr_65085;
})();if(cljs.core.truth_(inst_65049))
{var statearr_65086_65112 = state_65078__$1;(statearr_65086_65112[1] = 8);
} else
{var statearr_65087_65113 = state_65078__$1;(statearr_65087_65113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 6))
{var inst_65038 = (state_65078[7]);var inst_65063 = inst_65038.length;var inst_65064 = (inst_65063 > 0);var state_65078__$1 = state_65078;if(cljs.core.truth_(inst_65064))
{var statearr_65089_65114 = state_65078__$1;(statearr_65089_65114[1] = 12);
} else
{var statearr_65090_65115 = state_65078__$1;(statearr_65090_65115[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 7))
{var inst_65074 = (state_65078[2]);var state_65078__$1 = state_65078;var statearr_65091_65116 = state_65078__$1;(statearr_65091_65116[2] = inst_65074);
(statearr_65091_65116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 8))
{var inst_65046 = (state_65078[10]);var inst_65038 = (state_65078[7]);var inst_65042 = (state_65078[9]);var inst_65051 = inst_65038.push(inst_65042);var tmp65088 = inst_65038;var inst_65038__$1 = tmp65088;var inst_65039 = inst_65046;var state_65078__$1 = (function (){var statearr_65092 = state_65078;(statearr_65092[11] = inst_65051);
(statearr_65092[7] = inst_65038__$1);
(statearr_65092[8] = inst_65039);
return statearr_65092;
})();var statearr_65093_65117 = state_65078__$1;(statearr_65093_65117[2] = null);
(statearr_65093_65117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 9))
{var inst_65038 = (state_65078[7]);var inst_65054 = cljs.core.vec.call(null,inst_65038);var state_65078__$1 = state_65078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65078__$1,11,out,inst_65054);
} else
{if((state_val_65079 === 10))
{var inst_65061 = (state_65078[2]);var state_65078__$1 = state_65078;var statearr_65094_65118 = state_65078__$1;(statearr_65094_65118[2] = inst_65061);
(statearr_65094_65118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 11))
{var inst_65046 = (state_65078[10]);var inst_65042 = (state_65078[9]);var inst_65056 = (state_65078[2]);var inst_65057 = [];var inst_65058 = inst_65057.push(inst_65042);var inst_65038 = inst_65057;var inst_65039 = inst_65046;var state_65078__$1 = (function (){var statearr_65095 = state_65078;(statearr_65095[12] = inst_65058);
(statearr_65095[13] = inst_65056);
(statearr_65095[7] = inst_65038);
(statearr_65095[8] = inst_65039);
return statearr_65095;
})();var statearr_65096_65119 = state_65078__$1;(statearr_65096_65119[2] = null);
(statearr_65096_65119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 12))
{var inst_65038 = (state_65078[7]);var inst_65066 = cljs.core.vec.call(null,inst_65038);var state_65078__$1 = state_65078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65078__$1,15,out,inst_65066);
} else
{if((state_val_65079 === 13))
{var state_65078__$1 = state_65078;var statearr_65097_65120 = state_65078__$1;(statearr_65097_65120[2] = null);
(statearr_65097_65120[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 14))
{var inst_65071 = (state_65078[2]);var inst_65072 = cljs.core.async.close_BANG_.call(null,out);var state_65078__$1 = (function (){var statearr_65098 = state_65078;(statearr_65098[14] = inst_65071);
return statearr_65098;
})();var statearr_65099_65121 = state_65078__$1;(statearr_65099_65121[2] = inst_65072);
(statearr_65099_65121[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_65079 === 15))
{var inst_65068 = (state_65078[2]);var state_65078__$1 = state_65078;var statearr_65100_65122 = state_65078__$1;(statearr_65100_65122[2] = inst_65068);
(statearr_65100_65122[1] = 14);
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
var state_machine__13648__auto____0 = (function (){var statearr_65104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65104[0] = state_machine__13648__auto__);
(statearr_65104[1] = 1);
return statearr_65104;
});
var state_machine__13648__auto____1 = (function (state_65078){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_65078);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e65105){if((e65105 instanceof Object))
{var ex__13651__auto__ = e65105;var statearr_65106_65123 = state_65078;(statearr_65106_65123[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e65105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__65124 = state_65078;
state_65078 = G__65124;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_65078){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_65078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_65107 = f__13746__auto__.call(null);(statearr_65107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___65108);
return statearr_65107;
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
