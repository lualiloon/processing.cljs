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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20519 = (function (f,fn_handler,meta20520){
this.f = f;
this.fn_handler = fn_handler;
this.meta20520 = meta20520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20519.cljs$lang$type = true;
cljs.core.async.t20519.cljs$lang$ctorStr = "cljs.core.async/t20519";
cljs.core.async.t20519.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20519");
});
cljs.core.async.t20519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20521){var self__ = this;
var _20521__$1 = this;return self__.meta20520;
});
cljs.core.async.t20519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20521,meta20520__$1){var self__ = this;
var _20521__$1 = this;return (new cljs.core.async.t20519(self__.f,self__.fn_handler,meta20520__$1));
});
cljs.core.async.__GT_t20519 = (function __GT_t20519(f__$1,fn_handler__$1,meta20520){return (new cljs.core.async.t20519(f__$1,fn_handler__$1,meta20520));
});
}
return (new cljs.core.async.t20519(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20523 = buff;if(G__20523)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__20523.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20523.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20523);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20523);
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
{var val_20524 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20524);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_20524);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7838__auto__ = ret;if(cljs.core.truth_(and__7838__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7838__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8692__auto___20525 = n;var x_20526 = 0;while(true){
if((x_20526 < n__8692__auto___20525))
{(a[x_20526] = 0);
{
var G__20527 = (x_20526 + 1);
x_20526 = G__20527;
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
var G__20528 = (i + 1);
i = G__20528;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20532 = (function (flag,alt_flag,meta20533){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20533 = meta20533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20532.cljs$lang$type = true;
cljs.core.async.t20532.cljs$lang$ctorStr = "cljs.core.async/t20532";
cljs.core.async.t20532.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20532");
});
cljs.core.async.t20532.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t20532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t20532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20534){var self__ = this;
var _20534__$1 = this;return self__.meta20533;
});
cljs.core.async.t20532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20534,meta20533__$1){var self__ = this;
var _20534__$1 = this;return (new cljs.core.async.t20532(self__.flag,self__.alt_flag,meta20533__$1));
});
cljs.core.async.__GT_t20532 = (function __GT_t20532(flag__$1,alt_flag__$1,meta20533){return (new cljs.core.async.t20532(flag__$1,alt_flag__$1,meta20533));
});
}
return (new cljs.core.async.t20532(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20538 = (function (cb,flag,alt_handler,meta20539){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20539 = meta20539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20538.cljs$lang$type = true;
cljs.core.async.t20538.cljs$lang$ctorStr = "cljs.core.async/t20538";
cljs.core.async.t20538.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20538");
});
cljs.core.async.t20538.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20540){var self__ = this;
var _20540__$1 = this;return self__.meta20539;
});
cljs.core.async.t20538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20540,meta20539__$1){var self__ = this;
var _20540__$1 = this;return (new cljs.core.async.t20538(self__.cb,self__.flag,self__.alt_handler,meta20539__$1));
});
cljs.core.async.__GT_t20538 = (function __GT_t20538(cb__$1,flag__$1,alt_handler__$1,meta20539){return (new cljs.core.async.t20538(cb__$1,flag__$1,alt_handler__$1,meta20539));
});
}
return (new cljs.core.async.t20538(cb,flag,alt_handler,null));
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
return (function (p1__20541_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20541_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7850__auto__ = wport;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20542 = (i + 1);
i = G__20542;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7850__auto__ = ret;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7838__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7838__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7838__auto__;
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
var alts_BANG___delegate = function (ports,p__20543){var map__20545 = p__20543;var map__20545__$1 = ((cljs.core.seq_QMARK_.call(null,map__20545))?cljs.core.apply.call(null,cljs.core.hash_map,map__20545):map__20545);var opts = map__20545__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20543 = null;if (arguments.length > 1) {
  p__20543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20543);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20546){
var ports = cljs.core.first(arglist__20546);
var p__20543 = cljs.core.rest(arglist__20546);
return alts_BANG___delegate(ports,p__20543);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20554 = (function (ch,f,map_LT_,meta20555){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20555 = meta20555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20554.cljs$lang$type = true;
cljs.core.async.t20554.cljs$lang$ctorStr = "cljs.core.async/t20554";
cljs.core.async.t20554.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20554");
});
cljs.core.async.t20554.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t20554.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20557 = (function (fn1,_,meta20555,ch,f,map_LT_,meta20558){
this.fn1 = fn1;
this._ = _;
this.meta20555 = meta20555;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20558 = meta20558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20557.cljs$lang$type = true;
cljs.core.async.t20557.cljs$lang$ctorStr = "cljs.core.async/t20557";
cljs.core.async.t20557.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20557");
});
cljs.core.async.t20557.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t20557.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t20557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__20547_SHARP_){return f1.call(null,(((p1__20547_SHARP_ == null))?null:self__.f.call(null,p1__20547_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t20557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20559){var self__ = this;
var _20559__$1 = this;return self__.meta20558;
});
cljs.core.async.t20557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20559,meta20558__$1){var self__ = this;
var _20559__$1 = this;return (new cljs.core.async.t20557(self__.fn1,self__._,self__.meta20555,self__.ch,self__.f,self__.map_LT_,meta20558__$1));
});
cljs.core.async.__GT_t20557 = (function __GT_t20557(fn1__$1,___$2,meta20555__$1,ch__$2,f__$2,map_LT___$2,meta20558){return (new cljs.core.async.t20557(fn1__$1,___$2,meta20555__$1,ch__$2,f__$2,map_LT___$2,meta20558));
});
}
return (new cljs.core.async.t20557(fn1,___$1,self__.meta20555,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7838__auto__ = ret;if(cljs.core.truth_(and__7838__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7838__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t20554.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20556){var self__ = this;
var _20556__$1 = this;return self__.meta20555;
});
cljs.core.async.t20554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20556,meta20555__$1){var self__ = this;
var _20556__$1 = this;return (new cljs.core.async.t20554(self__.ch,self__.f,self__.map_LT_,meta20555__$1));
});
cljs.core.async.__GT_t20554 = (function __GT_t20554(ch__$1,f__$1,map_LT___$1,meta20555){return (new cljs.core.async.t20554(ch__$1,f__$1,map_LT___$1,meta20555));
});
}
return (new cljs.core.async.t20554(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20563 = (function (ch,f,map_GT_,meta20564){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20564 = meta20564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20563.cljs$lang$type = true;
cljs.core.async.t20563.cljs$lang$ctorStr = "cljs.core.async/t20563";
cljs.core.async.t20563.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20563");
});
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20565){var self__ = this;
var _20565__$1 = this;return self__.meta20564;
});
cljs.core.async.t20563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20565,meta20564__$1){var self__ = this;
var _20565__$1 = this;return (new cljs.core.async.t20563(self__.ch,self__.f,self__.map_GT_,meta20564__$1));
});
cljs.core.async.__GT_t20563 = (function __GT_t20563(ch__$1,f__$1,map_GT___$1,meta20564){return (new cljs.core.async.t20563(ch__$1,f__$1,map_GT___$1,meta20564));
});
}
return (new cljs.core.async.t20563(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20569 = (function (ch,p,filter_GT_,meta20570){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20570 = meta20570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20569.cljs$lang$type = true;
cljs.core.async.t20569.cljs$lang$ctorStr = "cljs.core.async/t20569";
cljs.core.async.t20569.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t20569");
});
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20571){var self__ = this;
var _20571__$1 = this;return self__.meta20570;
});
cljs.core.async.t20569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20571,meta20570__$1){var self__ = this;
var _20571__$1 = this;return (new cljs.core.async.t20569(self__.ch,self__.p,self__.filter_GT_,meta20570__$1));
});
cljs.core.async.__GT_t20569 = (function __GT_t20569(ch__$1,p__$1,filter_GT___$1,meta20570){return (new cljs.core.async.t20569(ch__$1,p__$1,filter_GT___$1,meta20570));
});
}
return (new cljs.core.async.t20569(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12511__auto___20654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_20633){var state_val_20634 = (state_20633[1]);if((state_val_20634 === 1))
{var state_20633__$1 = state_20633;var statearr_20635_20655 = state_20633__$1;(statearr_20635_20655[2] = null);
(statearr_20635_20655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 2))
{var state_20633__$1 = state_20633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20633__$1,4,ch);
} else
{if((state_val_20634 === 3))
{var inst_20631 = (state_20633[2]);var state_20633__$1 = state_20633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20633__$1,inst_20631);
} else
{if((state_val_20634 === 4))
{var inst_20615 = (state_20633[7]);var inst_20615__$1 = (state_20633[2]);var inst_20616 = (inst_20615__$1 == null);var state_20633__$1 = (function (){var statearr_20636 = state_20633;(statearr_20636[7] = inst_20615__$1);
return statearr_20636;
})();if(cljs.core.truth_(inst_20616))
{var statearr_20637_20656 = state_20633__$1;(statearr_20637_20656[1] = 5);
} else
{var statearr_20638_20657 = state_20633__$1;(statearr_20638_20657[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 5))
{var inst_20618 = cljs.core.async.close_BANG_.call(null,out);var state_20633__$1 = state_20633;var statearr_20639_20658 = state_20633__$1;(statearr_20639_20658[2] = inst_20618);
(statearr_20639_20658[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 6))
{var inst_20615 = (state_20633[7]);var inst_20620 = p.call(null,inst_20615);var state_20633__$1 = state_20633;if(cljs.core.truth_(inst_20620))
{var statearr_20640_20659 = state_20633__$1;(statearr_20640_20659[1] = 8);
} else
{var statearr_20641_20660 = state_20633__$1;(statearr_20641_20660[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 7))
{var inst_20629 = (state_20633[2]);var state_20633__$1 = state_20633;var statearr_20642_20661 = state_20633__$1;(statearr_20642_20661[2] = inst_20629);
(statearr_20642_20661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 8))
{var inst_20615 = (state_20633[7]);var state_20633__$1 = state_20633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20633__$1,11,out,inst_20615);
} else
{if((state_val_20634 === 9))
{var state_20633__$1 = state_20633;var statearr_20643_20662 = state_20633__$1;(statearr_20643_20662[2] = null);
(statearr_20643_20662[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 10))
{var inst_20626 = (state_20633[2]);var state_20633__$1 = (function (){var statearr_20644 = state_20633;(statearr_20644[8] = inst_20626);
return statearr_20644;
})();var statearr_20645_20663 = state_20633__$1;(statearr_20645_20663[2] = null);
(statearr_20645_20663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20634 === 11))
{var inst_20623 = (state_20633[2]);var state_20633__$1 = state_20633;var statearr_20646_20664 = state_20633__$1;(statearr_20646_20664[2] = inst_20623);
(statearr_20646_20664[1] = 10);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_20650 = [null,null,null,null,null,null,null,null,null];(statearr_20650[0] = state_machine__12410__auto__);
(statearr_20650[1] = 1);
return statearr_20650;
});
var state_machine__12410__auto____1 = (function (state_20633){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_20633);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e20651){if((e20651 instanceof Object))
{var ex__12413__auto__ = e20651;var statearr_20652_20665 = state_20633;(statearr_20652_20665[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20666 = state_20633;
state_20633 = G__20666;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_20633){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_20633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_20653 = f__12512__auto__.call(null);(statearr_20653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___20654);
return statearr_20653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12511__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_20818){var state_val_20819 = (state_20818[1]);if((state_val_20819 === 1))
{var state_20818__$1 = state_20818;var statearr_20820_20857 = state_20818__$1;(statearr_20820_20857[2] = null);
(statearr_20820_20857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 2))
{var state_20818__$1 = state_20818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20818__$1,4,in$);
} else
{if((state_val_20819 === 3))
{var inst_20816 = (state_20818[2]);var state_20818__$1 = state_20818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20818__$1,inst_20816);
} else
{if((state_val_20819 === 4))
{var inst_20764 = (state_20818[7]);var inst_20764__$1 = (state_20818[2]);var inst_20765 = (inst_20764__$1 == null);var state_20818__$1 = (function (){var statearr_20821 = state_20818;(statearr_20821[7] = inst_20764__$1);
return statearr_20821;
})();if(cljs.core.truth_(inst_20765))
{var statearr_20822_20858 = state_20818__$1;(statearr_20822_20858[1] = 5);
} else
{var statearr_20823_20859 = state_20818__$1;(statearr_20823_20859[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 5))
{var inst_20767 = cljs.core.async.close_BANG_.call(null,out);var state_20818__$1 = state_20818;var statearr_20824_20860 = state_20818__$1;(statearr_20824_20860[2] = inst_20767);
(statearr_20824_20860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 6))
{var inst_20764 = (state_20818[7]);var inst_20769 = f.call(null,inst_20764);var inst_20774 = cljs.core.seq.call(null,inst_20769);var inst_20775 = inst_20774;var inst_20776 = null;var inst_20777 = 0;var inst_20778 = 0;var state_20818__$1 = (function (){var statearr_20825 = state_20818;(statearr_20825[8] = inst_20778);
(statearr_20825[9] = inst_20777);
(statearr_20825[10] = inst_20775);
(statearr_20825[11] = inst_20776);
return statearr_20825;
})();var statearr_20826_20861 = state_20818__$1;(statearr_20826_20861[2] = null);
(statearr_20826_20861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 7))
{var inst_20814 = (state_20818[2]);var state_20818__$1 = state_20818;var statearr_20827_20862 = state_20818__$1;(statearr_20827_20862[2] = inst_20814);
(statearr_20827_20862[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 8))
{var inst_20778 = (state_20818[8]);var inst_20777 = (state_20818[9]);var inst_20780 = (inst_20778 < inst_20777);var inst_20781 = inst_20780;var state_20818__$1 = state_20818;if(cljs.core.truth_(inst_20781))
{var statearr_20828_20863 = state_20818__$1;(statearr_20828_20863[1] = 10);
} else
{var statearr_20829_20864 = state_20818__$1;(statearr_20829_20864[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 9))
{var inst_20811 = (state_20818[2]);var state_20818__$1 = (function (){var statearr_20830 = state_20818;(statearr_20830[12] = inst_20811);
return statearr_20830;
})();var statearr_20831_20865 = state_20818__$1;(statearr_20831_20865[2] = null);
(statearr_20831_20865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 10))
{var inst_20778 = (state_20818[8]);var inst_20776 = (state_20818[11]);var inst_20783 = cljs.core._nth.call(null,inst_20776,inst_20778);var state_20818__$1 = state_20818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20818__$1,13,out,inst_20783);
} else
{if((state_val_20819 === 11))
{var inst_20789 = (state_20818[13]);var inst_20775 = (state_20818[10]);var inst_20789__$1 = cljs.core.seq.call(null,inst_20775);var state_20818__$1 = (function (){var statearr_20835 = state_20818;(statearr_20835[13] = inst_20789__$1);
return statearr_20835;
})();if(inst_20789__$1)
{var statearr_20836_20866 = state_20818__$1;(statearr_20836_20866[1] = 14);
} else
{var statearr_20837_20867 = state_20818__$1;(statearr_20837_20867[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 12))
{var inst_20809 = (state_20818[2]);var state_20818__$1 = state_20818;var statearr_20838_20868 = state_20818__$1;(statearr_20838_20868[2] = inst_20809);
(statearr_20838_20868[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 13))
{var inst_20778 = (state_20818[8]);var inst_20777 = (state_20818[9]);var inst_20775 = (state_20818[10]);var inst_20776 = (state_20818[11]);var inst_20785 = (state_20818[2]);var inst_20786 = (inst_20778 + 1);var tmp20832 = inst_20777;var tmp20833 = inst_20775;var tmp20834 = inst_20776;var inst_20775__$1 = tmp20833;var inst_20776__$1 = tmp20834;var inst_20777__$1 = tmp20832;var inst_20778__$1 = inst_20786;var state_20818__$1 = (function (){var statearr_20839 = state_20818;(statearr_20839[8] = inst_20778__$1);
(statearr_20839[9] = inst_20777__$1);
(statearr_20839[14] = inst_20785);
(statearr_20839[10] = inst_20775__$1);
(statearr_20839[11] = inst_20776__$1);
return statearr_20839;
})();var statearr_20840_20869 = state_20818__$1;(statearr_20840_20869[2] = null);
(statearr_20840_20869[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 14))
{var inst_20789 = (state_20818[13]);var inst_20791 = cljs.core.chunked_seq_QMARK_.call(null,inst_20789);var state_20818__$1 = state_20818;if(inst_20791)
{var statearr_20841_20870 = state_20818__$1;(statearr_20841_20870[1] = 17);
} else
{var statearr_20842_20871 = state_20818__$1;(statearr_20842_20871[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 15))
{var state_20818__$1 = state_20818;var statearr_20843_20872 = state_20818__$1;(statearr_20843_20872[2] = null);
(statearr_20843_20872[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 16))
{var inst_20807 = (state_20818[2]);var state_20818__$1 = state_20818;var statearr_20844_20873 = state_20818__$1;(statearr_20844_20873[2] = inst_20807);
(statearr_20844_20873[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 17))
{var inst_20789 = (state_20818[13]);var inst_20793 = cljs.core.chunk_first.call(null,inst_20789);var inst_20794 = cljs.core.chunk_rest.call(null,inst_20789);var inst_20795 = cljs.core.count.call(null,inst_20793);var inst_20775 = inst_20794;var inst_20776 = inst_20793;var inst_20777 = inst_20795;var inst_20778 = 0;var state_20818__$1 = (function (){var statearr_20845 = state_20818;(statearr_20845[8] = inst_20778);
(statearr_20845[9] = inst_20777);
(statearr_20845[10] = inst_20775);
(statearr_20845[11] = inst_20776);
return statearr_20845;
})();var statearr_20846_20874 = state_20818__$1;(statearr_20846_20874[2] = null);
(statearr_20846_20874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 18))
{var inst_20789 = (state_20818[13]);var inst_20798 = cljs.core.first.call(null,inst_20789);var state_20818__$1 = state_20818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20818__$1,20,out,inst_20798);
} else
{if((state_val_20819 === 19))
{var inst_20804 = (state_20818[2]);var state_20818__$1 = state_20818;var statearr_20847_20875 = state_20818__$1;(statearr_20847_20875[2] = inst_20804);
(statearr_20847_20875[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20819 === 20))
{var inst_20789 = (state_20818[13]);var inst_20800 = (state_20818[2]);var inst_20801 = cljs.core.next.call(null,inst_20789);var inst_20775 = inst_20801;var inst_20776 = null;var inst_20777 = 0;var inst_20778 = 0;var state_20818__$1 = (function (){var statearr_20848 = state_20818;(statearr_20848[8] = inst_20778);
(statearr_20848[9] = inst_20777);
(statearr_20848[15] = inst_20800);
(statearr_20848[10] = inst_20775);
(statearr_20848[11] = inst_20776);
return statearr_20848;
})();var statearr_20849_20876 = state_20818__$1;(statearr_20849_20876[2] = null);
(statearr_20849_20876[1] = 8);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_20853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20853[0] = state_machine__12410__auto__);
(statearr_20853[1] = 1);
return statearr_20853;
});
var state_machine__12410__auto____1 = (function (state_20818){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_20818);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e20854){if((e20854 instanceof Object))
{var ex__12413__auto__ = e20854;var statearr_20855_20877 = state_20818;(statearr_20855_20877[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20878 = state_20818;
state_20818 = G__20878;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_20818){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_20818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_20856 = f__12512__auto__.call(null);(statearr_20856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto__);
return statearr_20856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
}));
return c__12511__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12511__auto___20959 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_20938){var state_val_20939 = (state_20938[1]);if((state_val_20939 === 1))
{var state_20938__$1 = state_20938;var statearr_20940_20960 = state_20938__$1;(statearr_20940_20960[2] = null);
(statearr_20940_20960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 2))
{var state_20938__$1 = state_20938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20938__$1,4,from);
} else
{if((state_val_20939 === 3))
{var inst_20936 = (state_20938[2]);var state_20938__$1 = state_20938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20938__$1,inst_20936);
} else
{if((state_val_20939 === 4))
{var inst_20921 = (state_20938[7]);var inst_20921__$1 = (state_20938[2]);var inst_20922 = (inst_20921__$1 == null);var state_20938__$1 = (function (){var statearr_20941 = state_20938;(statearr_20941[7] = inst_20921__$1);
return statearr_20941;
})();if(cljs.core.truth_(inst_20922))
{var statearr_20942_20961 = state_20938__$1;(statearr_20942_20961[1] = 5);
} else
{var statearr_20943_20962 = state_20938__$1;(statearr_20943_20962[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 5))
{var state_20938__$1 = state_20938;if(cljs.core.truth_(close_QMARK_))
{var statearr_20944_20963 = state_20938__$1;(statearr_20944_20963[1] = 8);
} else
{var statearr_20945_20964 = state_20938__$1;(statearr_20945_20964[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 6))
{var inst_20921 = (state_20938[7]);var state_20938__$1 = state_20938;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20938__$1,11,to,inst_20921);
} else
{if((state_val_20939 === 7))
{var inst_20934 = (state_20938[2]);var state_20938__$1 = state_20938;var statearr_20946_20965 = state_20938__$1;(statearr_20946_20965[2] = inst_20934);
(statearr_20946_20965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 8))
{var inst_20925 = cljs.core.async.close_BANG_.call(null,to);var state_20938__$1 = state_20938;var statearr_20947_20966 = state_20938__$1;(statearr_20947_20966[2] = inst_20925);
(statearr_20947_20966[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 9))
{var state_20938__$1 = state_20938;var statearr_20948_20967 = state_20938__$1;(statearr_20948_20967[2] = null);
(statearr_20948_20967[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 10))
{var inst_20928 = (state_20938[2]);var state_20938__$1 = state_20938;var statearr_20949_20968 = state_20938__$1;(statearr_20949_20968[2] = inst_20928);
(statearr_20949_20968[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20939 === 11))
{var inst_20931 = (state_20938[2]);var state_20938__$1 = (function (){var statearr_20950 = state_20938;(statearr_20950[8] = inst_20931);
return statearr_20950;
})();var statearr_20951_20969 = state_20938__$1;(statearr_20951_20969[2] = null);
(statearr_20951_20969[1] = 2);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_20955 = [null,null,null,null,null,null,null,null,null];(statearr_20955[0] = state_machine__12410__auto__);
(statearr_20955[1] = 1);
return statearr_20955;
});
var state_machine__12410__auto____1 = (function (state_20938){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_20938);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e20956){if((e20956 instanceof Object))
{var ex__12413__auto__ = e20956;var statearr_20957_20970 = state_20938;(statearr_20957_20970[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20938);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20971 = state_20938;
state_20938 = G__20971;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_20938){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_20938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_20958 = f__12512__auto__.call(null);(statearr_20958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___20959);
return statearr_20958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12511__auto___21058 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_21036){var state_val_21037 = (state_21036[1]);if((state_val_21037 === 1))
{var state_21036__$1 = state_21036;var statearr_21038_21059 = state_21036__$1;(statearr_21038_21059[2] = null);
(statearr_21038_21059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 2))
{var state_21036__$1 = state_21036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21036__$1,4,ch);
} else
{if((state_val_21037 === 3))
{var inst_21034 = (state_21036[2]);var state_21036__$1 = state_21036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21036__$1,inst_21034);
} else
{if((state_val_21037 === 4))
{var inst_21017 = (state_21036[7]);var inst_21017__$1 = (state_21036[2]);var inst_21018 = (inst_21017__$1 == null);var state_21036__$1 = (function (){var statearr_21039 = state_21036;(statearr_21039[7] = inst_21017__$1);
return statearr_21039;
})();if(cljs.core.truth_(inst_21018))
{var statearr_21040_21060 = state_21036__$1;(statearr_21040_21060[1] = 5);
} else
{var statearr_21041_21061 = state_21036__$1;(statearr_21041_21061[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 5))
{var inst_21020 = cljs.core.async.close_BANG_.call(null,tc);var inst_21021 = cljs.core.async.close_BANG_.call(null,fc);var state_21036__$1 = (function (){var statearr_21042 = state_21036;(statearr_21042[8] = inst_21020);
return statearr_21042;
})();var statearr_21043_21062 = state_21036__$1;(statearr_21043_21062[2] = inst_21021);
(statearr_21043_21062[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 6))
{var inst_21017 = (state_21036[7]);var inst_21023 = p.call(null,inst_21017);var state_21036__$1 = state_21036;if(cljs.core.truth_(inst_21023))
{var statearr_21044_21063 = state_21036__$1;(statearr_21044_21063[1] = 9);
} else
{var statearr_21045_21064 = state_21036__$1;(statearr_21045_21064[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 7))
{var inst_21032 = (state_21036[2]);var state_21036__$1 = state_21036;var statearr_21046_21065 = state_21036__$1;(statearr_21046_21065[2] = inst_21032);
(statearr_21046_21065[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 8))
{var inst_21029 = (state_21036[2]);var state_21036__$1 = (function (){var statearr_21047 = state_21036;(statearr_21047[9] = inst_21029);
return statearr_21047;
})();var statearr_21048_21066 = state_21036__$1;(statearr_21048_21066[2] = null);
(statearr_21048_21066[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 9))
{var state_21036__$1 = state_21036;var statearr_21049_21067 = state_21036__$1;(statearr_21049_21067[2] = tc);
(statearr_21049_21067[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 10))
{var state_21036__$1 = state_21036;var statearr_21050_21068 = state_21036__$1;(statearr_21050_21068[2] = fc);
(statearr_21050_21068[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21037 === 11))
{var inst_21017 = (state_21036[7]);var inst_21027 = (state_21036[2]);var state_21036__$1 = state_21036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21036__$1,8,inst_21027,inst_21017);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_21054 = [null,null,null,null,null,null,null,null,null,null];(statearr_21054[0] = state_machine__12410__auto__);
(statearr_21054[1] = 1);
return statearr_21054;
});
var state_machine__12410__auto____1 = (function (state_21036){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_21036);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e21055){if((e21055 instanceof Object))
{var ex__12413__auto__ = e21055;var statearr_21056_21069 = state_21036;(statearr_21056_21069[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21036);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21070 = state_21036;
state_21036 = G__21070;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_21036){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_21036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_21057 = f__12512__auto__.call(null);(statearr_21057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___21058);
return statearr_21057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12511__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_21117){var state_val_21118 = (state_21117[1]);if((state_val_21118 === 7))
{var inst_21113 = (state_21117[2]);var state_21117__$1 = state_21117;var statearr_21119_21135 = state_21117__$1;(statearr_21119_21135[2] = inst_21113);
(statearr_21119_21135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21118 === 6))
{var inst_21103 = (state_21117[7]);var inst_21106 = (state_21117[8]);var inst_21110 = f.call(null,inst_21103,inst_21106);var inst_21103__$1 = inst_21110;var state_21117__$1 = (function (){var statearr_21120 = state_21117;(statearr_21120[7] = inst_21103__$1);
return statearr_21120;
})();var statearr_21121_21136 = state_21117__$1;(statearr_21121_21136[2] = null);
(statearr_21121_21136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21118 === 5))
{var inst_21103 = (state_21117[7]);var state_21117__$1 = state_21117;var statearr_21122_21137 = state_21117__$1;(statearr_21122_21137[2] = inst_21103);
(statearr_21122_21137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21118 === 4))
{var inst_21106 = (state_21117[8]);var inst_21106__$1 = (state_21117[2]);var inst_21107 = (inst_21106__$1 == null);var state_21117__$1 = (function (){var statearr_21123 = state_21117;(statearr_21123[8] = inst_21106__$1);
return statearr_21123;
})();if(cljs.core.truth_(inst_21107))
{var statearr_21124_21138 = state_21117__$1;(statearr_21124_21138[1] = 5);
} else
{var statearr_21125_21139 = state_21117__$1;(statearr_21125_21139[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21118 === 3))
{var inst_21115 = (state_21117[2]);var state_21117__$1 = state_21117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21117__$1,inst_21115);
} else
{if((state_val_21118 === 2))
{var state_21117__$1 = state_21117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21117__$1,4,ch);
} else
{if((state_val_21118 === 1))
{var inst_21103 = init;var state_21117__$1 = (function (){var statearr_21126 = state_21117;(statearr_21126[7] = inst_21103);
return statearr_21126;
})();var statearr_21127_21140 = state_21117__$1;(statearr_21127_21140[2] = null);
(statearr_21127_21140[1] = 2);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_21131 = [null,null,null,null,null,null,null,null,null];(statearr_21131[0] = state_machine__12410__auto__);
(statearr_21131[1] = 1);
return statearr_21131;
});
var state_machine__12410__auto____1 = (function (state_21117){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_21117);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e21132){if((e21132 instanceof Object))
{var ex__12413__auto__ = e21132;var statearr_21133_21141 = state_21117;(statearr_21133_21141[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21142 = state_21117;
state_21117 = G__21142;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_21117){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_21117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_21134 = f__12512__auto__.call(null);(statearr_21134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto__);
return statearr_21134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
}));
return c__12511__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12511__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_21204){var state_val_21205 = (state_21204[1]);if((state_val_21205 === 1))
{var inst_21184 = cljs.core.seq.call(null,coll);var inst_21185 = inst_21184;var state_21204__$1 = (function (){var statearr_21206 = state_21204;(statearr_21206[7] = inst_21185);
return statearr_21206;
})();var statearr_21207_21225 = state_21204__$1;(statearr_21207_21225[2] = null);
(statearr_21207_21225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 2))
{var inst_21185 = (state_21204[7]);var state_21204__$1 = state_21204;if(cljs.core.truth_(inst_21185))
{var statearr_21208_21226 = state_21204__$1;(statearr_21208_21226[1] = 4);
} else
{var statearr_21209_21227 = state_21204__$1;(statearr_21209_21227[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 3))
{var inst_21202 = (state_21204[2]);var state_21204__$1 = state_21204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21204__$1,inst_21202);
} else
{if((state_val_21205 === 4))
{var inst_21185 = (state_21204[7]);var inst_21188 = cljs.core.first.call(null,inst_21185);var state_21204__$1 = state_21204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21204__$1,7,ch,inst_21188);
} else
{if((state_val_21205 === 5))
{var state_21204__$1 = state_21204;if(cljs.core.truth_(close_QMARK_))
{var statearr_21210_21228 = state_21204__$1;(statearr_21210_21228[1] = 8);
} else
{var statearr_21211_21229 = state_21204__$1;(statearr_21211_21229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 6))
{var inst_21200 = (state_21204[2]);var state_21204__$1 = state_21204;var statearr_21212_21230 = state_21204__$1;(statearr_21212_21230[2] = inst_21200);
(statearr_21212_21230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 7))
{var inst_21185 = (state_21204[7]);var inst_21190 = (state_21204[2]);var inst_21191 = cljs.core.next.call(null,inst_21185);var inst_21185__$1 = inst_21191;var state_21204__$1 = (function (){var statearr_21213 = state_21204;(statearr_21213[7] = inst_21185__$1);
(statearr_21213[8] = inst_21190);
return statearr_21213;
})();var statearr_21214_21231 = state_21204__$1;(statearr_21214_21231[2] = null);
(statearr_21214_21231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 8))
{var inst_21195 = cljs.core.async.close_BANG_.call(null,ch);var state_21204__$1 = state_21204;var statearr_21215_21232 = state_21204__$1;(statearr_21215_21232[2] = inst_21195);
(statearr_21215_21232[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 9))
{var state_21204__$1 = state_21204;var statearr_21216_21233 = state_21204__$1;(statearr_21216_21233[2] = null);
(statearr_21216_21233[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21205 === 10))
{var inst_21198 = (state_21204[2]);var state_21204__$1 = state_21204;var statearr_21217_21234 = state_21204__$1;(statearr_21217_21234[2] = inst_21198);
(statearr_21217_21234[1] = 6);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_21221 = [null,null,null,null,null,null,null,null,null];(statearr_21221[0] = state_machine__12410__auto__);
(statearr_21221[1] = 1);
return statearr_21221;
});
var state_machine__12410__auto____1 = (function (state_21204){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_21204);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e21222){if((e21222 instanceof Object))
{var ex__12413__auto__ = e21222;var statearr_21223_21235 = state_21204;(statearr_21223_21235[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21236 = state_21204;
state_21204 = G__21236;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_21204){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_21204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_21224 = f__12512__auto__.call(null);(statearr_21224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto__);
return statearr_21224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
}));
return c__12511__auto__;
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
cljs.core.async.Mux = (function (){var obj21238 = {};return obj21238;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7838__auto__ = _;if(and__7838__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7838__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8471__auto__ = (((_ == null))?null:_);return (function (){var or__7850__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21240 = {};return obj21240;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21464 = (function (cs,ch,mult,meta21465){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21465 = meta21465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21464.cljs$lang$type = true;
cljs.core.async.t21464.cljs$lang$ctorStr = "cljs.core.async/t21464";
cljs.core.async.t21464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t21464");
});})(cs))
;
cljs.core.async.t21464.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21464.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21466){var self__ = this;
var _21466__$1 = this;return self__.meta21465;
});})(cs))
;
cljs.core.async.t21464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21466,meta21465__$1){var self__ = this;
var _21466__$1 = this;return (new cljs.core.async.t21464(self__.cs,self__.ch,self__.mult,meta21465__$1));
});})(cs))
;
cljs.core.async.__GT_t21464 = ((function (cs){
return (function __GT_t21464(cs__$1,ch__$1,mult__$1,meta21465){return (new cljs.core.async.t21464(cs__$1,ch__$1,mult__$1,meta21465));
});})(cs))
;
}
return (new cljs.core.async.t21464(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12511__auto___21687 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_21601){var state_val_21602 = (state_21601[1]);if((state_val_21602 === 32))
{var inst_21545 = (state_21601[7]);var inst_21469 = (state_21601[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21601,31,Object,null,30);var inst_21552 = cljs.core.async.put_BANG_.call(null,inst_21545,inst_21469,done);var state_21601__$1 = state_21601;var statearr_21603_21688 = state_21601__$1;(statearr_21603_21688[2] = inst_21552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21601__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 1))
{var state_21601__$1 = state_21601;var statearr_21604_21689 = state_21601__$1;(statearr_21604_21689[2] = null);
(statearr_21604_21689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 33))
{var inst_21558 = (state_21601[9]);var inst_21560 = cljs.core.chunked_seq_QMARK_.call(null,inst_21558);var state_21601__$1 = state_21601;if(inst_21560)
{var statearr_21605_21690 = state_21601__$1;(statearr_21605_21690[1] = 36);
} else
{var statearr_21606_21691 = state_21601__$1;(statearr_21606_21691[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 2))
{var state_21601__$1 = state_21601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21601__$1,4,ch);
} else
{if((state_val_21602 === 34))
{var state_21601__$1 = state_21601;var statearr_21607_21692 = state_21601__$1;(statearr_21607_21692[2] = null);
(statearr_21607_21692[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 3))
{var inst_21599 = (state_21601[2]);var state_21601__$1 = state_21601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21601__$1,inst_21599);
} else
{if((state_val_21602 === 35))
{var inst_21583 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21608_21693 = state_21601__$1;(statearr_21608_21693[2] = inst_21583);
(statearr_21608_21693[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 4))
{var inst_21469 = (state_21601[8]);var inst_21469__$1 = (state_21601[2]);var inst_21470 = (inst_21469__$1 == null);var state_21601__$1 = (function (){var statearr_21609 = state_21601;(statearr_21609[8] = inst_21469__$1);
return statearr_21609;
})();if(cljs.core.truth_(inst_21470))
{var statearr_21610_21694 = state_21601__$1;(statearr_21610_21694[1] = 5);
} else
{var statearr_21611_21695 = state_21601__$1;(statearr_21611_21695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 36))
{var inst_21558 = (state_21601[9]);var inst_21562 = cljs.core.chunk_first.call(null,inst_21558);var inst_21563 = cljs.core.chunk_rest.call(null,inst_21558);var inst_21564 = cljs.core.count.call(null,inst_21562);var inst_21537 = inst_21563;var inst_21538 = inst_21562;var inst_21539 = inst_21564;var inst_21540 = 0;var state_21601__$1 = (function (){var statearr_21612 = state_21601;(statearr_21612[10] = inst_21540);
(statearr_21612[11] = inst_21537);
(statearr_21612[12] = inst_21539);
(statearr_21612[13] = inst_21538);
return statearr_21612;
})();var statearr_21613_21696 = state_21601__$1;(statearr_21613_21696[2] = null);
(statearr_21613_21696[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 5))
{var inst_21476 = cljs.core.deref.call(null,cs);var inst_21477 = cljs.core.seq.call(null,inst_21476);var inst_21478 = inst_21477;var inst_21479 = null;var inst_21480 = 0;var inst_21481 = 0;var state_21601__$1 = (function (){var statearr_21614 = state_21601;(statearr_21614[14] = inst_21478);
(statearr_21614[15] = inst_21479);
(statearr_21614[16] = inst_21480);
(statearr_21614[17] = inst_21481);
return statearr_21614;
})();var statearr_21615_21697 = state_21601__$1;(statearr_21615_21697[2] = null);
(statearr_21615_21697[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 37))
{var inst_21558 = (state_21601[9]);var inst_21567 = cljs.core.first.call(null,inst_21558);var state_21601__$1 = (function (){var statearr_21616 = state_21601;(statearr_21616[18] = inst_21567);
return statearr_21616;
})();var statearr_21617_21698 = state_21601__$1;(statearr_21617_21698[2] = null);
(statearr_21617_21698[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 6))
{var inst_21529 = (state_21601[19]);var inst_21528 = cljs.core.deref.call(null,cs);var inst_21529__$1 = cljs.core.keys.call(null,inst_21528);var inst_21530 = cljs.core.count.call(null,inst_21529__$1);var inst_21531 = cljs.core.reset_BANG_.call(null,dctr,inst_21530);var inst_21536 = cljs.core.seq.call(null,inst_21529__$1);var inst_21537 = inst_21536;var inst_21538 = null;var inst_21539 = 0;var inst_21540 = 0;var state_21601__$1 = (function (){var statearr_21618 = state_21601;(statearr_21618[10] = inst_21540);
(statearr_21618[20] = inst_21531);
(statearr_21618[19] = inst_21529__$1);
(statearr_21618[11] = inst_21537);
(statearr_21618[12] = inst_21539);
(statearr_21618[13] = inst_21538);
return statearr_21618;
})();var statearr_21619_21699 = state_21601__$1;(statearr_21619_21699[2] = null);
(statearr_21619_21699[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 38))
{var inst_21580 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21620_21700 = state_21601__$1;(statearr_21620_21700[2] = inst_21580);
(statearr_21620_21700[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 7))
{var inst_21597 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21621_21701 = state_21601__$1;(statearr_21621_21701[2] = inst_21597);
(statearr_21621_21701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 39))
{var inst_21558 = (state_21601[9]);var inst_21576 = (state_21601[2]);var inst_21577 = cljs.core.next.call(null,inst_21558);var inst_21537 = inst_21577;var inst_21538 = null;var inst_21539 = 0;var inst_21540 = 0;var state_21601__$1 = (function (){var statearr_21622 = state_21601;(statearr_21622[21] = inst_21576);
(statearr_21622[10] = inst_21540);
(statearr_21622[11] = inst_21537);
(statearr_21622[12] = inst_21539);
(statearr_21622[13] = inst_21538);
return statearr_21622;
})();var statearr_21623_21702 = state_21601__$1;(statearr_21623_21702[2] = null);
(statearr_21623_21702[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 8))
{var inst_21480 = (state_21601[16]);var inst_21481 = (state_21601[17]);var inst_21483 = (inst_21481 < inst_21480);var inst_21484 = inst_21483;var state_21601__$1 = state_21601;if(cljs.core.truth_(inst_21484))
{var statearr_21624_21703 = state_21601__$1;(statearr_21624_21703[1] = 10);
} else
{var statearr_21625_21704 = state_21601__$1;(statearr_21625_21704[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 40))
{var inst_21567 = (state_21601[18]);var inst_21568 = (state_21601[2]);var inst_21569 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21570 = cljs.core.async.untap_STAR_.call(null,m,inst_21567);var state_21601__$1 = (function (){var statearr_21626 = state_21601;(statearr_21626[22] = inst_21568);
(statearr_21626[23] = inst_21569);
return statearr_21626;
})();var statearr_21627_21705 = state_21601__$1;(statearr_21627_21705[2] = inst_21570);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21601__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 9))
{var inst_21526 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21628_21706 = state_21601__$1;(statearr_21628_21706[2] = inst_21526);
(statearr_21628_21706[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 41))
{var inst_21567 = (state_21601[18]);var inst_21469 = (state_21601[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21601,40,Object,null,39);var inst_21574 = cljs.core.async.put_BANG_.call(null,inst_21567,inst_21469,done);var state_21601__$1 = state_21601;var statearr_21629_21707 = state_21601__$1;(statearr_21629_21707[2] = inst_21574);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21601__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 10))
{var inst_21479 = (state_21601[15]);var inst_21481 = (state_21601[17]);var inst_21487 = cljs.core._nth.call(null,inst_21479,inst_21481);var inst_21488 = cljs.core.nth.call(null,inst_21487,0,null);var inst_21489 = cljs.core.nth.call(null,inst_21487,1,null);var state_21601__$1 = (function (){var statearr_21630 = state_21601;(statearr_21630[24] = inst_21488);
return statearr_21630;
})();if(cljs.core.truth_(inst_21489))
{var statearr_21631_21708 = state_21601__$1;(statearr_21631_21708[1] = 13);
} else
{var statearr_21632_21709 = state_21601__$1;(statearr_21632_21709[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 42))
{var state_21601__$1 = state_21601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21601__$1,45,dchan);
} else
{if((state_val_21602 === 11))
{var inst_21498 = (state_21601[25]);var inst_21478 = (state_21601[14]);var inst_21498__$1 = cljs.core.seq.call(null,inst_21478);var state_21601__$1 = (function (){var statearr_21633 = state_21601;(statearr_21633[25] = inst_21498__$1);
return statearr_21633;
})();if(inst_21498__$1)
{var statearr_21634_21710 = state_21601__$1;(statearr_21634_21710[1] = 16);
} else
{var statearr_21635_21711 = state_21601__$1;(statearr_21635_21711[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 43))
{var state_21601__$1 = state_21601;var statearr_21636_21712 = state_21601__$1;(statearr_21636_21712[2] = null);
(statearr_21636_21712[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 12))
{var inst_21524 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21637_21713 = state_21601__$1;(statearr_21637_21713[2] = inst_21524);
(statearr_21637_21713[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 44))
{var inst_21594 = (state_21601[2]);var state_21601__$1 = (function (){var statearr_21638 = state_21601;(statearr_21638[26] = inst_21594);
return statearr_21638;
})();var statearr_21639_21714 = state_21601__$1;(statearr_21639_21714[2] = null);
(statearr_21639_21714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 13))
{var inst_21488 = (state_21601[24]);var inst_21491 = cljs.core.async.close_BANG_.call(null,inst_21488);var state_21601__$1 = state_21601;var statearr_21640_21715 = state_21601__$1;(statearr_21640_21715[2] = inst_21491);
(statearr_21640_21715[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 45))
{var inst_21591 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21644_21716 = state_21601__$1;(statearr_21644_21716[2] = inst_21591);
(statearr_21644_21716[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 14))
{var state_21601__$1 = state_21601;var statearr_21645_21717 = state_21601__$1;(statearr_21645_21717[2] = null);
(statearr_21645_21717[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 15))
{var inst_21478 = (state_21601[14]);var inst_21479 = (state_21601[15]);var inst_21480 = (state_21601[16]);var inst_21481 = (state_21601[17]);var inst_21494 = (state_21601[2]);var inst_21495 = (inst_21481 + 1);var tmp21641 = inst_21478;var tmp21642 = inst_21479;var tmp21643 = inst_21480;var inst_21478__$1 = tmp21641;var inst_21479__$1 = tmp21642;var inst_21480__$1 = tmp21643;var inst_21481__$1 = inst_21495;var state_21601__$1 = (function (){var statearr_21646 = state_21601;(statearr_21646[27] = inst_21494);
(statearr_21646[14] = inst_21478__$1);
(statearr_21646[15] = inst_21479__$1);
(statearr_21646[16] = inst_21480__$1);
(statearr_21646[17] = inst_21481__$1);
return statearr_21646;
})();var statearr_21647_21718 = state_21601__$1;(statearr_21647_21718[2] = null);
(statearr_21647_21718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 16))
{var inst_21498 = (state_21601[25]);var inst_21500 = cljs.core.chunked_seq_QMARK_.call(null,inst_21498);var state_21601__$1 = state_21601;if(inst_21500)
{var statearr_21648_21719 = state_21601__$1;(statearr_21648_21719[1] = 19);
} else
{var statearr_21649_21720 = state_21601__$1;(statearr_21649_21720[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 17))
{var state_21601__$1 = state_21601;var statearr_21650_21721 = state_21601__$1;(statearr_21650_21721[2] = null);
(statearr_21650_21721[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 18))
{var inst_21522 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21651_21722 = state_21601__$1;(statearr_21651_21722[2] = inst_21522);
(statearr_21651_21722[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 19))
{var inst_21498 = (state_21601[25]);var inst_21502 = cljs.core.chunk_first.call(null,inst_21498);var inst_21503 = cljs.core.chunk_rest.call(null,inst_21498);var inst_21504 = cljs.core.count.call(null,inst_21502);var inst_21478 = inst_21503;var inst_21479 = inst_21502;var inst_21480 = inst_21504;var inst_21481 = 0;var state_21601__$1 = (function (){var statearr_21652 = state_21601;(statearr_21652[14] = inst_21478);
(statearr_21652[15] = inst_21479);
(statearr_21652[16] = inst_21480);
(statearr_21652[17] = inst_21481);
return statearr_21652;
})();var statearr_21653_21723 = state_21601__$1;(statearr_21653_21723[2] = null);
(statearr_21653_21723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 20))
{var inst_21498 = (state_21601[25]);var inst_21508 = cljs.core.first.call(null,inst_21498);var inst_21509 = cljs.core.nth.call(null,inst_21508,0,null);var inst_21510 = cljs.core.nth.call(null,inst_21508,1,null);var state_21601__$1 = (function (){var statearr_21654 = state_21601;(statearr_21654[28] = inst_21509);
return statearr_21654;
})();if(cljs.core.truth_(inst_21510))
{var statearr_21655_21724 = state_21601__$1;(statearr_21655_21724[1] = 22);
} else
{var statearr_21656_21725 = state_21601__$1;(statearr_21656_21725[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 21))
{var inst_21519 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21657_21726 = state_21601__$1;(statearr_21657_21726[2] = inst_21519);
(statearr_21657_21726[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 22))
{var inst_21509 = (state_21601[28]);var inst_21512 = cljs.core.async.close_BANG_.call(null,inst_21509);var state_21601__$1 = state_21601;var statearr_21658_21727 = state_21601__$1;(statearr_21658_21727[2] = inst_21512);
(statearr_21658_21727[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 23))
{var state_21601__$1 = state_21601;var statearr_21659_21728 = state_21601__$1;(statearr_21659_21728[2] = null);
(statearr_21659_21728[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 24))
{var inst_21498 = (state_21601[25]);var inst_21515 = (state_21601[2]);var inst_21516 = cljs.core.next.call(null,inst_21498);var inst_21478 = inst_21516;var inst_21479 = null;var inst_21480 = 0;var inst_21481 = 0;var state_21601__$1 = (function (){var statearr_21660 = state_21601;(statearr_21660[29] = inst_21515);
(statearr_21660[14] = inst_21478);
(statearr_21660[15] = inst_21479);
(statearr_21660[16] = inst_21480);
(statearr_21660[17] = inst_21481);
return statearr_21660;
})();var statearr_21661_21729 = state_21601__$1;(statearr_21661_21729[2] = null);
(statearr_21661_21729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 25))
{var inst_21540 = (state_21601[10]);var inst_21539 = (state_21601[12]);var inst_21542 = (inst_21540 < inst_21539);var inst_21543 = inst_21542;var state_21601__$1 = state_21601;if(cljs.core.truth_(inst_21543))
{var statearr_21662_21730 = state_21601__$1;(statearr_21662_21730[1] = 27);
} else
{var statearr_21663_21731 = state_21601__$1;(statearr_21663_21731[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 26))
{var inst_21529 = (state_21601[19]);var inst_21587 = (state_21601[2]);var inst_21588 = cljs.core.seq.call(null,inst_21529);var state_21601__$1 = (function (){var statearr_21664 = state_21601;(statearr_21664[30] = inst_21587);
return statearr_21664;
})();if(inst_21588)
{var statearr_21665_21732 = state_21601__$1;(statearr_21665_21732[1] = 42);
} else
{var statearr_21666_21733 = state_21601__$1;(statearr_21666_21733[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 27))
{var inst_21540 = (state_21601[10]);var inst_21538 = (state_21601[13]);var inst_21545 = cljs.core._nth.call(null,inst_21538,inst_21540);var state_21601__$1 = (function (){var statearr_21667 = state_21601;(statearr_21667[7] = inst_21545);
return statearr_21667;
})();var statearr_21668_21734 = state_21601__$1;(statearr_21668_21734[2] = null);
(statearr_21668_21734[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 28))
{var inst_21558 = (state_21601[9]);var inst_21537 = (state_21601[11]);var inst_21558__$1 = cljs.core.seq.call(null,inst_21537);var state_21601__$1 = (function (){var statearr_21672 = state_21601;(statearr_21672[9] = inst_21558__$1);
return statearr_21672;
})();if(inst_21558__$1)
{var statearr_21673_21735 = state_21601__$1;(statearr_21673_21735[1] = 33);
} else
{var statearr_21674_21736 = state_21601__$1;(statearr_21674_21736[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 29))
{var inst_21585 = (state_21601[2]);var state_21601__$1 = state_21601;var statearr_21675_21737 = state_21601__$1;(statearr_21675_21737[2] = inst_21585);
(statearr_21675_21737[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 30))
{var inst_21540 = (state_21601[10]);var inst_21537 = (state_21601[11]);var inst_21539 = (state_21601[12]);var inst_21538 = (state_21601[13]);var inst_21554 = (state_21601[2]);var inst_21555 = (inst_21540 + 1);var tmp21669 = inst_21537;var tmp21670 = inst_21539;var tmp21671 = inst_21538;var inst_21537__$1 = tmp21669;var inst_21538__$1 = tmp21671;var inst_21539__$1 = tmp21670;var inst_21540__$1 = inst_21555;var state_21601__$1 = (function (){var statearr_21676 = state_21601;(statearr_21676[10] = inst_21540__$1);
(statearr_21676[31] = inst_21554);
(statearr_21676[11] = inst_21537__$1);
(statearr_21676[12] = inst_21539__$1);
(statearr_21676[13] = inst_21538__$1);
return statearr_21676;
})();var statearr_21677_21738 = state_21601__$1;(statearr_21677_21738[2] = null);
(statearr_21677_21738[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21602 === 31))
{var inst_21545 = (state_21601[7]);var inst_21546 = (state_21601[2]);var inst_21547 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21548 = cljs.core.async.untap_STAR_.call(null,m,inst_21545);var state_21601__$1 = (function (){var statearr_21678 = state_21601;(statearr_21678[32] = inst_21547);
(statearr_21678[33] = inst_21546);
return statearr_21678;
})();var statearr_21679_21739 = state_21601__$1;(statearr_21679_21739[2] = inst_21548);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21601__$1);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_21683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21683[0] = state_machine__12410__auto__);
(statearr_21683[1] = 1);
return statearr_21683;
});
var state_machine__12410__auto____1 = (function (state_21601){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_21601);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e21684){if((e21684 instanceof Object))
{var ex__12413__auto__ = e21684;var statearr_21685_21740 = state_21601;(statearr_21685_21740[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21741 = state_21601;
state_21601 = G__21741;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_21601){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_21601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_21686 = f__12512__auto__.call(null);(statearr_21686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___21687);
return statearr_21686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
cljs.core.async.Mix = (function (){var obj21743 = {};return obj21743;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7838__auto__ = m;if(and__7838__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7838__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8471__auto__ = (((m == null))?null:m);return (function (){var or__7850__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t21853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21853 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta21854){
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
this.meta21854 = meta21854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21853.cljs$lang$type = true;
cljs.core.async.t21853.cljs$lang$ctorStr = "cljs.core.async/t21853";
cljs.core.async.t21853.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t21853");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21853.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21855){var self__ = this;
var _21855__$1 = this;return self__.meta21854;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21855,meta21854__$1){var self__ = this;
var _21855__$1 = this;return (new cljs.core.async.t21853(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta21854__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21853 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21853(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21854){return (new cljs.core.async.t21853(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21854));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21853(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12511__auto___21962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_21920){var state_val_21921 = (state_21920[1]);if((state_val_21921 === 1))
{var inst_21859 = (state_21920[7]);var inst_21859__$1 = calc_state.call(null);var inst_21860 = cljs.core.seq_QMARK_.call(null,inst_21859__$1);var state_21920__$1 = (function (){var statearr_21922 = state_21920;(statearr_21922[7] = inst_21859__$1);
return statearr_21922;
})();if(inst_21860)
{var statearr_21923_21963 = state_21920__$1;(statearr_21923_21963[1] = 2);
} else
{var statearr_21924_21964 = state_21920__$1;(statearr_21924_21964[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 2))
{var inst_21859 = (state_21920[7]);var inst_21862 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21859);var state_21920__$1 = state_21920;var statearr_21925_21965 = state_21920__$1;(statearr_21925_21965[2] = inst_21862);
(statearr_21925_21965[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 3))
{var inst_21859 = (state_21920[7]);var state_21920__$1 = state_21920;var statearr_21926_21966 = state_21920__$1;(statearr_21926_21966[2] = inst_21859);
(statearr_21926_21966[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 4))
{var inst_21859 = (state_21920[7]);var inst_21865 = (state_21920[2]);var inst_21866 = cljs.core.get.call(null,inst_21865,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21867 = cljs.core.get.call(null,inst_21865,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21868 = cljs.core.get.call(null,inst_21865,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_21869 = inst_21859;var state_21920__$1 = (function (){var statearr_21927 = state_21920;(statearr_21927[8] = inst_21867);
(statearr_21927[9] = inst_21866);
(statearr_21927[10] = inst_21869);
(statearr_21927[11] = inst_21868);
return statearr_21927;
})();var statearr_21928_21967 = state_21920__$1;(statearr_21928_21967[2] = null);
(statearr_21928_21967[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 5))
{var inst_21869 = (state_21920[10]);var inst_21872 = cljs.core.seq_QMARK_.call(null,inst_21869);var state_21920__$1 = state_21920;if(inst_21872)
{var statearr_21929_21968 = state_21920__$1;(statearr_21929_21968[1] = 7);
} else
{var statearr_21930_21969 = state_21920__$1;(statearr_21930_21969[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 6))
{var inst_21918 = (state_21920[2]);var state_21920__$1 = state_21920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21920__$1,inst_21918);
} else
{if((state_val_21921 === 7))
{var inst_21869 = (state_21920[10]);var inst_21874 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21869);var state_21920__$1 = state_21920;var statearr_21931_21970 = state_21920__$1;(statearr_21931_21970[2] = inst_21874);
(statearr_21931_21970[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 8))
{var inst_21869 = (state_21920[10]);var state_21920__$1 = state_21920;var statearr_21932_21971 = state_21920__$1;(statearr_21932_21971[2] = inst_21869);
(statearr_21932_21971[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 9))
{var inst_21877 = (state_21920[12]);var inst_21877__$1 = (state_21920[2]);var inst_21878 = cljs.core.get.call(null,inst_21877__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_21879 = cljs.core.get.call(null,inst_21877__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_21880 = cljs.core.get.call(null,inst_21877__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_21920__$1 = (function (){var statearr_21933 = state_21920;(statearr_21933[12] = inst_21877__$1);
(statearr_21933[13] = inst_21879);
(statearr_21933[14] = inst_21880);
return statearr_21933;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21920__$1,10,inst_21878);
} else
{if((state_val_21921 === 10))
{var inst_21884 = (state_21920[15]);var inst_21885 = (state_21920[16]);var inst_21883 = (state_21920[2]);var inst_21884__$1 = cljs.core.nth.call(null,inst_21883,0,null);var inst_21885__$1 = cljs.core.nth.call(null,inst_21883,1,null);var inst_21886 = (inst_21884__$1 == null);var inst_21887 = cljs.core._EQ_.call(null,inst_21885__$1,change);var inst_21888 = (inst_21886) || (inst_21887);var state_21920__$1 = (function (){var statearr_21934 = state_21920;(statearr_21934[15] = inst_21884__$1);
(statearr_21934[16] = inst_21885__$1);
return statearr_21934;
})();if(cljs.core.truth_(inst_21888))
{var statearr_21935_21972 = state_21920__$1;(statearr_21935_21972[1] = 11);
} else
{var statearr_21936_21973 = state_21920__$1;(statearr_21936_21973[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 11))
{var inst_21884 = (state_21920[15]);var inst_21890 = (inst_21884 == null);var state_21920__$1 = state_21920;if(cljs.core.truth_(inst_21890))
{var statearr_21937_21974 = state_21920__$1;(statearr_21937_21974[1] = 14);
} else
{var statearr_21938_21975 = state_21920__$1;(statearr_21938_21975[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 12))
{var inst_21885 = (state_21920[16]);var inst_21880 = (state_21920[14]);var inst_21899 = (state_21920[17]);var inst_21899__$1 = inst_21880.call(null,inst_21885);var state_21920__$1 = (function (){var statearr_21939 = state_21920;(statearr_21939[17] = inst_21899__$1);
return statearr_21939;
})();if(cljs.core.truth_(inst_21899__$1))
{var statearr_21940_21976 = state_21920__$1;(statearr_21940_21976[1] = 17);
} else
{var statearr_21941_21977 = state_21920__$1;(statearr_21941_21977[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 13))
{var inst_21916 = (state_21920[2]);var state_21920__$1 = state_21920;var statearr_21942_21978 = state_21920__$1;(statearr_21942_21978[2] = inst_21916);
(statearr_21942_21978[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 14))
{var inst_21885 = (state_21920[16]);var inst_21892 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21885);var state_21920__$1 = state_21920;var statearr_21943_21979 = state_21920__$1;(statearr_21943_21979[2] = inst_21892);
(statearr_21943_21979[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 15))
{var state_21920__$1 = state_21920;var statearr_21944_21980 = state_21920__$1;(statearr_21944_21980[2] = null);
(statearr_21944_21980[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 16))
{var inst_21895 = (state_21920[2]);var inst_21896 = calc_state.call(null);var inst_21869 = inst_21896;var state_21920__$1 = (function (){var statearr_21945 = state_21920;(statearr_21945[10] = inst_21869);
(statearr_21945[18] = inst_21895);
return statearr_21945;
})();var statearr_21946_21981 = state_21920__$1;(statearr_21946_21981[2] = null);
(statearr_21946_21981[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 17))
{var inst_21899 = (state_21920[17]);var state_21920__$1 = state_21920;var statearr_21947_21982 = state_21920__$1;(statearr_21947_21982[2] = inst_21899);
(statearr_21947_21982[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 18))
{var inst_21879 = (state_21920[13]);var inst_21885 = (state_21920[16]);var inst_21880 = (state_21920[14]);var inst_21902 = cljs.core.empty_QMARK_.call(null,inst_21880);var inst_21903 = inst_21879.call(null,inst_21885);var inst_21904 = cljs.core.not.call(null,inst_21903);var inst_21905 = (inst_21902) && (inst_21904);var state_21920__$1 = state_21920;var statearr_21948_21983 = state_21920__$1;(statearr_21948_21983[2] = inst_21905);
(statearr_21948_21983[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 19))
{var inst_21907 = (state_21920[2]);var state_21920__$1 = state_21920;if(cljs.core.truth_(inst_21907))
{var statearr_21949_21984 = state_21920__$1;(statearr_21949_21984[1] = 20);
} else
{var statearr_21950_21985 = state_21920__$1;(statearr_21950_21985[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 20))
{var inst_21884 = (state_21920[15]);var state_21920__$1 = state_21920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21920__$1,23,out,inst_21884);
} else
{if((state_val_21921 === 21))
{var state_21920__$1 = state_21920;var statearr_21951_21986 = state_21920__$1;(statearr_21951_21986[2] = null);
(statearr_21951_21986[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 22))
{var inst_21877 = (state_21920[12]);var inst_21913 = (state_21920[2]);var inst_21869 = inst_21877;var state_21920__$1 = (function (){var statearr_21952 = state_21920;(statearr_21952[10] = inst_21869);
(statearr_21952[19] = inst_21913);
return statearr_21952;
})();var statearr_21953_21987 = state_21920__$1;(statearr_21953_21987[2] = null);
(statearr_21953_21987[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21921 === 23))
{var inst_21910 = (state_21920[2]);var state_21920__$1 = state_21920;var statearr_21954_21988 = state_21920__$1;(statearr_21954_21988[2] = inst_21910);
(statearr_21954_21988[1] = 22);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_21958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21958[0] = state_machine__12410__auto__);
(statearr_21958[1] = 1);
return statearr_21958;
});
var state_machine__12410__auto____1 = (function (state_21920){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_21920);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e21959){if((e21959 instanceof Object))
{var ex__12413__auto__ = e21959;var statearr_21960_21989 = state_21920;(statearr_21960_21989[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21990 = state_21920;
state_21920 = G__21990;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_21920){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_21920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_21961 = f__12512__auto__.call(null);(statearr_21961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___21962);
return statearr_21961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
cljs.core.async.Pub = (function (){var obj21992 = {};return obj21992;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7838__auto__ = p;if(and__7838__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7838__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8471__auto__ = (((p == null))?null:p);return (function (){var or__7850__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7838__auto__ = p;if(and__7838__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7838__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8471__auto__ = (((p == null))?null:p);return (function (){var or__7850__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7838__auto__ = p;if(and__7838__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7838__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8471__auto__ = (((p == null))?null:p);return (function (){var or__7850__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7838__auto__ = p;if(and__7838__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7838__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8471__auto__ = (((p == null))?null:p);return (function (){var or__7850__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8471__auto__)]);if(or__7850__auto__)
{return or__7850__auto__;
} else
{var or__7850__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7850__auto____$1)
{return or__7850__auto____$1;
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
return (function (topic){var or__7850__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7850__auto__,mults){
return (function (p1__21993_SHARP_){if(cljs.core.truth_(p1__21993_SHARP_.call(null,topic)))
{return p1__21993_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21993_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7850__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22118 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22119){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22119 = meta22119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22118.cljs$lang$type = true;
cljs.core.async.t22118.cljs$lang$ctorStr = "cljs.core.async/t22118";
cljs.core.async.t22118.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t22118");
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22118.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22120){var self__ = this;
var _22120__$1 = this;return self__.meta22119;
});})(mults,ensure_mult))
;
cljs.core.async.t22118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22120,meta22119__$1){var self__ = this;
var _22120__$1 = this;return (new cljs.core.async.t22118(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22119__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22118 = ((function (mults,ensure_mult){
return (function __GT_t22118(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22119){return (new cljs.core.async.t22118(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22119));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22118(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12511__auto___22242 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_22194){var state_val_22195 = (state_22194[1]);if((state_val_22195 === 1))
{var state_22194__$1 = state_22194;var statearr_22196_22243 = state_22194__$1;(statearr_22196_22243[2] = null);
(statearr_22196_22243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 2))
{var state_22194__$1 = state_22194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22194__$1,4,ch);
} else
{if((state_val_22195 === 3))
{var inst_22192 = (state_22194[2]);var state_22194__$1 = state_22194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22194__$1,inst_22192);
} else
{if((state_val_22195 === 4))
{var inst_22123 = (state_22194[7]);var inst_22123__$1 = (state_22194[2]);var inst_22124 = (inst_22123__$1 == null);var state_22194__$1 = (function (){var statearr_22197 = state_22194;(statearr_22197[7] = inst_22123__$1);
return statearr_22197;
})();if(cljs.core.truth_(inst_22124))
{var statearr_22198_22244 = state_22194__$1;(statearr_22198_22244[1] = 5);
} else
{var statearr_22199_22245 = state_22194__$1;(statearr_22199_22245[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 5))
{var inst_22130 = cljs.core.deref.call(null,mults);var inst_22131 = cljs.core.vals.call(null,inst_22130);var inst_22132 = cljs.core.seq.call(null,inst_22131);var inst_22133 = inst_22132;var inst_22134 = null;var inst_22135 = 0;var inst_22136 = 0;var state_22194__$1 = (function (){var statearr_22200 = state_22194;(statearr_22200[8] = inst_22136);
(statearr_22200[9] = inst_22135);
(statearr_22200[10] = inst_22134);
(statearr_22200[11] = inst_22133);
return statearr_22200;
})();var statearr_22201_22246 = state_22194__$1;(statearr_22201_22246[2] = null);
(statearr_22201_22246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 6))
{var inst_22173 = (state_22194[12]);var inst_22123 = (state_22194[7]);var inst_22171 = (state_22194[13]);var inst_22171__$1 = topic_fn.call(null,inst_22123);var inst_22172 = cljs.core.deref.call(null,mults);var inst_22173__$1 = cljs.core.get.call(null,inst_22172,inst_22171__$1);var state_22194__$1 = (function (){var statearr_22202 = state_22194;(statearr_22202[12] = inst_22173__$1);
(statearr_22202[13] = inst_22171__$1);
return statearr_22202;
})();if(cljs.core.truth_(inst_22173__$1))
{var statearr_22203_22247 = state_22194__$1;(statearr_22203_22247[1] = 19);
} else
{var statearr_22204_22248 = state_22194__$1;(statearr_22204_22248[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 7))
{var inst_22190 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22205_22249 = state_22194__$1;(statearr_22205_22249[2] = inst_22190);
(statearr_22205_22249[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 8))
{var inst_22136 = (state_22194[8]);var inst_22135 = (state_22194[9]);var inst_22138 = (inst_22136 < inst_22135);var inst_22139 = inst_22138;var state_22194__$1 = state_22194;if(cljs.core.truth_(inst_22139))
{var statearr_22209_22250 = state_22194__$1;(statearr_22209_22250[1] = 10);
} else
{var statearr_22210_22251 = state_22194__$1;(statearr_22210_22251[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 9))
{var inst_22169 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22211_22252 = state_22194__$1;(statearr_22211_22252[2] = inst_22169);
(statearr_22211_22252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 10))
{var inst_22136 = (state_22194[8]);var inst_22135 = (state_22194[9]);var inst_22134 = (state_22194[10]);var inst_22133 = (state_22194[11]);var inst_22141 = cljs.core._nth.call(null,inst_22134,inst_22136);var inst_22142 = cljs.core.async.muxch_STAR_.call(null,inst_22141);var inst_22143 = cljs.core.async.close_BANG_.call(null,inst_22142);var inst_22144 = (inst_22136 + 1);var tmp22206 = inst_22135;var tmp22207 = inst_22134;var tmp22208 = inst_22133;var inst_22133__$1 = tmp22208;var inst_22134__$1 = tmp22207;var inst_22135__$1 = tmp22206;var inst_22136__$1 = inst_22144;var state_22194__$1 = (function (){var statearr_22212 = state_22194;(statearr_22212[14] = inst_22143);
(statearr_22212[8] = inst_22136__$1);
(statearr_22212[9] = inst_22135__$1);
(statearr_22212[10] = inst_22134__$1);
(statearr_22212[11] = inst_22133__$1);
return statearr_22212;
})();var statearr_22213_22253 = state_22194__$1;(statearr_22213_22253[2] = null);
(statearr_22213_22253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 11))
{var inst_22147 = (state_22194[15]);var inst_22133 = (state_22194[11]);var inst_22147__$1 = cljs.core.seq.call(null,inst_22133);var state_22194__$1 = (function (){var statearr_22214 = state_22194;(statearr_22214[15] = inst_22147__$1);
return statearr_22214;
})();if(inst_22147__$1)
{var statearr_22215_22254 = state_22194__$1;(statearr_22215_22254[1] = 13);
} else
{var statearr_22216_22255 = state_22194__$1;(statearr_22216_22255[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 12))
{var inst_22167 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22217_22256 = state_22194__$1;(statearr_22217_22256[2] = inst_22167);
(statearr_22217_22256[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 13))
{var inst_22147 = (state_22194[15]);var inst_22149 = cljs.core.chunked_seq_QMARK_.call(null,inst_22147);var state_22194__$1 = state_22194;if(inst_22149)
{var statearr_22218_22257 = state_22194__$1;(statearr_22218_22257[1] = 16);
} else
{var statearr_22219_22258 = state_22194__$1;(statearr_22219_22258[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 14))
{var state_22194__$1 = state_22194;var statearr_22220_22259 = state_22194__$1;(statearr_22220_22259[2] = null);
(statearr_22220_22259[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 15))
{var inst_22165 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22221_22260 = state_22194__$1;(statearr_22221_22260[2] = inst_22165);
(statearr_22221_22260[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 16))
{var inst_22147 = (state_22194[15]);var inst_22151 = cljs.core.chunk_first.call(null,inst_22147);var inst_22152 = cljs.core.chunk_rest.call(null,inst_22147);var inst_22153 = cljs.core.count.call(null,inst_22151);var inst_22133 = inst_22152;var inst_22134 = inst_22151;var inst_22135 = inst_22153;var inst_22136 = 0;var state_22194__$1 = (function (){var statearr_22222 = state_22194;(statearr_22222[8] = inst_22136);
(statearr_22222[9] = inst_22135);
(statearr_22222[10] = inst_22134);
(statearr_22222[11] = inst_22133);
return statearr_22222;
})();var statearr_22223_22261 = state_22194__$1;(statearr_22223_22261[2] = null);
(statearr_22223_22261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 17))
{var inst_22147 = (state_22194[15]);var inst_22156 = cljs.core.first.call(null,inst_22147);var inst_22157 = cljs.core.async.muxch_STAR_.call(null,inst_22156);var inst_22158 = cljs.core.async.close_BANG_.call(null,inst_22157);var inst_22159 = cljs.core.next.call(null,inst_22147);var inst_22133 = inst_22159;var inst_22134 = null;var inst_22135 = 0;var inst_22136 = 0;var state_22194__$1 = (function (){var statearr_22224 = state_22194;(statearr_22224[16] = inst_22158);
(statearr_22224[8] = inst_22136);
(statearr_22224[9] = inst_22135);
(statearr_22224[10] = inst_22134);
(statearr_22224[11] = inst_22133);
return statearr_22224;
})();var statearr_22225_22262 = state_22194__$1;(statearr_22225_22262[2] = null);
(statearr_22225_22262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 18))
{var inst_22162 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22226_22263 = state_22194__$1;(statearr_22226_22263[2] = inst_22162);
(statearr_22226_22263[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 19))
{var state_22194__$1 = state_22194;var statearr_22227_22264 = state_22194__$1;(statearr_22227_22264[2] = null);
(statearr_22227_22264[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 20))
{var state_22194__$1 = state_22194;var statearr_22228_22265 = state_22194__$1;(statearr_22228_22265[2] = null);
(statearr_22228_22265[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 21))
{var inst_22187 = (state_22194[2]);var state_22194__$1 = (function (){var statearr_22229 = state_22194;(statearr_22229[17] = inst_22187);
return statearr_22229;
})();var statearr_22230_22266 = state_22194__$1;(statearr_22230_22266[2] = null);
(statearr_22230_22266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 22))
{var inst_22184 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22231_22267 = state_22194__$1;(statearr_22231_22267[2] = inst_22184);
(statearr_22231_22267[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 23))
{var inst_22171 = (state_22194[13]);var inst_22175 = (state_22194[2]);var inst_22176 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22171);var state_22194__$1 = (function (){var statearr_22232 = state_22194;(statearr_22232[18] = inst_22175);
return statearr_22232;
})();var statearr_22233_22268 = state_22194__$1;(statearr_22233_22268[2] = inst_22176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22194__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22195 === 24))
{var inst_22173 = (state_22194[12]);var inst_22123 = (state_22194[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22194,23,Object,null,22);var inst_22180 = cljs.core.async.muxch_STAR_.call(null,inst_22173);var state_22194__$1 = state_22194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22194__$1,25,inst_22180,inst_22123);
} else
{if((state_val_22195 === 25))
{var inst_22182 = (state_22194[2]);var state_22194__$1 = state_22194;var statearr_22234_22269 = state_22194__$1;(statearr_22234_22269[2] = inst_22182);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22194__$1);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_22238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22238[0] = state_machine__12410__auto__);
(statearr_22238[1] = 1);
return statearr_22238;
});
var state_machine__12410__auto____1 = (function (state_22194){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_22194);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e22239){if((e22239 instanceof Object))
{var ex__12413__auto__ = e22239;var statearr_22240_22270 = state_22194;(statearr_22240_22270[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22271 = state_22194;
state_22194 = G__22271;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_22194){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_22194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_22241 = f__12512__auto__.call(null);(statearr_22241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___22242);
return statearr_22241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
,cljs.core.range.call(null,cnt));var c__12511__auto___22408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_22378){var state_val_22379 = (state_22378[1]);if((state_val_22379 === 1))
{var state_22378__$1 = state_22378;var statearr_22380_22409 = state_22378__$1;(statearr_22380_22409[2] = null);
(statearr_22380_22409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 2))
{var inst_22341 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22342 = 0;var state_22378__$1 = (function (){var statearr_22381 = state_22378;(statearr_22381[7] = inst_22341);
(statearr_22381[8] = inst_22342);
return statearr_22381;
})();var statearr_22382_22410 = state_22378__$1;(statearr_22382_22410[2] = null);
(statearr_22382_22410[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 3))
{var inst_22376 = (state_22378[2]);var state_22378__$1 = state_22378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22378__$1,inst_22376);
} else
{if((state_val_22379 === 4))
{var inst_22342 = (state_22378[8]);var inst_22344 = (inst_22342 < cnt);var state_22378__$1 = state_22378;if(cljs.core.truth_(inst_22344))
{var statearr_22383_22411 = state_22378__$1;(statearr_22383_22411[1] = 6);
} else
{var statearr_22384_22412 = state_22378__$1;(statearr_22384_22412[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 5))
{var inst_22362 = (state_22378[2]);var state_22378__$1 = (function (){var statearr_22385 = state_22378;(statearr_22385[9] = inst_22362);
return statearr_22385;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22378__$1,12,dchan);
} else
{if((state_val_22379 === 6))
{var state_22378__$1 = state_22378;var statearr_22386_22413 = state_22378__$1;(statearr_22386_22413[2] = null);
(statearr_22386_22413[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 7))
{var state_22378__$1 = state_22378;var statearr_22387_22414 = state_22378__$1;(statearr_22387_22414[2] = null);
(statearr_22387_22414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 8))
{var inst_22360 = (state_22378[2]);var state_22378__$1 = state_22378;var statearr_22388_22415 = state_22378__$1;(statearr_22388_22415[2] = inst_22360);
(statearr_22388_22415[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 9))
{var inst_22342 = (state_22378[8]);var inst_22355 = (state_22378[2]);var inst_22356 = (inst_22342 + 1);var inst_22342__$1 = inst_22356;var state_22378__$1 = (function (){var statearr_22389 = state_22378;(statearr_22389[10] = inst_22355);
(statearr_22389[8] = inst_22342__$1);
return statearr_22389;
})();var statearr_22390_22416 = state_22378__$1;(statearr_22390_22416[2] = null);
(statearr_22390_22416[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 10))
{var inst_22346 = (state_22378[2]);var inst_22347 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22378__$1 = (function (){var statearr_22391 = state_22378;(statearr_22391[11] = inst_22346);
return statearr_22391;
})();var statearr_22392_22417 = state_22378__$1;(statearr_22392_22417[2] = inst_22347);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22378__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 11))
{var inst_22342 = (state_22378[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22378,10,Object,null,9);var inst_22351 = chs__$1.call(null,inst_22342);var inst_22352 = done.call(null,inst_22342);var inst_22353 = cljs.core.async.take_BANG_.call(null,inst_22351,inst_22352);var state_22378__$1 = state_22378;var statearr_22393_22418 = state_22378__$1;(statearr_22393_22418[2] = inst_22353);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22378__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 12))
{var inst_22364 = (state_22378[12]);var inst_22364__$1 = (state_22378[2]);var inst_22365 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22364__$1);var state_22378__$1 = (function (){var statearr_22394 = state_22378;(statearr_22394[12] = inst_22364__$1);
return statearr_22394;
})();if(cljs.core.truth_(inst_22365))
{var statearr_22395_22419 = state_22378__$1;(statearr_22395_22419[1] = 13);
} else
{var statearr_22396_22420 = state_22378__$1;(statearr_22396_22420[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 13))
{var inst_22367 = cljs.core.async.close_BANG_.call(null,out);var state_22378__$1 = state_22378;var statearr_22397_22421 = state_22378__$1;(statearr_22397_22421[2] = inst_22367);
(statearr_22397_22421[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 14))
{var inst_22364 = (state_22378[12]);var inst_22369 = cljs.core.apply.call(null,f,inst_22364);var state_22378__$1 = state_22378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22378__$1,16,out,inst_22369);
} else
{if((state_val_22379 === 15))
{var inst_22374 = (state_22378[2]);var state_22378__$1 = state_22378;var statearr_22398_22422 = state_22378__$1;(statearr_22398_22422[2] = inst_22374);
(statearr_22398_22422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22379 === 16))
{var inst_22371 = (state_22378[2]);var state_22378__$1 = (function (){var statearr_22399 = state_22378;(statearr_22399[13] = inst_22371);
return statearr_22399;
})();var statearr_22400_22423 = state_22378__$1;(statearr_22400_22423[2] = null);
(statearr_22400_22423[1] = 2);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_22404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22404[0] = state_machine__12410__auto__);
(statearr_22404[1] = 1);
return statearr_22404;
});
var state_machine__12410__auto____1 = (function (state_22378){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_22378);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e22405){if((e22405 instanceof Object))
{var ex__12413__auto__ = e22405;var statearr_22406_22424 = state_22378;(statearr_22406_22424[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22378);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22425 = state_22378;
state_22378 = G__22425;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_22378){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_22378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_22407 = f__12512__auto__.call(null);(statearr_22407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___22408);
return statearr_22407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12511__auto___22533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_22509){var state_val_22510 = (state_22509[1]);if((state_val_22510 === 1))
{var inst_22480 = cljs.core.vec.call(null,chs);var inst_22481 = inst_22480;var state_22509__$1 = (function (){var statearr_22511 = state_22509;(statearr_22511[7] = inst_22481);
return statearr_22511;
})();var statearr_22512_22534 = state_22509__$1;(statearr_22512_22534[2] = null);
(statearr_22512_22534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 2))
{var inst_22481 = (state_22509[7]);var inst_22483 = cljs.core.count.call(null,inst_22481);var inst_22484 = (inst_22483 > 0);var state_22509__$1 = state_22509;if(cljs.core.truth_(inst_22484))
{var statearr_22513_22535 = state_22509__$1;(statearr_22513_22535[1] = 4);
} else
{var statearr_22514_22536 = state_22509__$1;(statearr_22514_22536[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 3))
{var inst_22507 = (state_22509[2]);var state_22509__$1 = state_22509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22509__$1,inst_22507);
} else
{if((state_val_22510 === 4))
{var inst_22481 = (state_22509[7]);var state_22509__$1 = state_22509;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22509__$1,7,inst_22481);
} else
{if((state_val_22510 === 5))
{var inst_22503 = cljs.core.async.close_BANG_.call(null,out);var state_22509__$1 = state_22509;var statearr_22515_22537 = state_22509__$1;(statearr_22515_22537[2] = inst_22503);
(statearr_22515_22537[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 6))
{var inst_22505 = (state_22509[2]);var state_22509__$1 = state_22509;var statearr_22516_22538 = state_22509__$1;(statearr_22516_22538[2] = inst_22505);
(statearr_22516_22538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 7))
{var inst_22489 = (state_22509[8]);var inst_22488 = (state_22509[9]);var inst_22488__$1 = (state_22509[2]);var inst_22489__$1 = cljs.core.nth.call(null,inst_22488__$1,0,null);var inst_22490 = cljs.core.nth.call(null,inst_22488__$1,1,null);var inst_22491 = (inst_22489__$1 == null);var state_22509__$1 = (function (){var statearr_22517 = state_22509;(statearr_22517[8] = inst_22489__$1);
(statearr_22517[9] = inst_22488__$1);
(statearr_22517[10] = inst_22490);
return statearr_22517;
})();if(cljs.core.truth_(inst_22491))
{var statearr_22518_22539 = state_22509__$1;(statearr_22518_22539[1] = 8);
} else
{var statearr_22519_22540 = state_22509__$1;(statearr_22519_22540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 8))
{var inst_22481 = (state_22509[7]);var inst_22489 = (state_22509[8]);var inst_22488 = (state_22509[9]);var inst_22490 = (state_22509[10]);var inst_22493 = (function (){var c = inst_22490;var v = inst_22489;var vec__22486 = inst_22488;var cs = inst_22481;return ((function (c,v,vec__22486,cs,inst_22481,inst_22489,inst_22488,inst_22490,state_val_22510){
return (function (p1__22426_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22426_SHARP_);
});
;})(c,v,vec__22486,cs,inst_22481,inst_22489,inst_22488,inst_22490,state_val_22510))
})();var inst_22494 = cljs.core.filterv.call(null,inst_22493,inst_22481);var inst_22481__$1 = inst_22494;var state_22509__$1 = (function (){var statearr_22520 = state_22509;(statearr_22520[7] = inst_22481__$1);
return statearr_22520;
})();var statearr_22521_22541 = state_22509__$1;(statearr_22521_22541[2] = null);
(statearr_22521_22541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 9))
{var inst_22489 = (state_22509[8]);var state_22509__$1 = state_22509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22509__$1,11,out,inst_22489);
} else
{if((state_val_22510 === 10))
{var inst_22501 = (state_22509[2]);var state_22509__$1 = state_22509;var statearr_22523_22542 = state_22509__$1;(statearr_22523_22542[2] = inst_22501);
(statearr_22523_22542[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22510 === 11))
{var inst_22481 = (state_22509[7]);var inst_22498 = (state_22509[2]);var tmp22522 = inst_22481;var inst_22481__$1 = tmp22522;var state_22509__$1 = (function (){var statearr_22524 = state_22509;(statearr_22524[7] = inst_22481__$1);
(statearr_22524[11] = inst_22498);
return statearr_22524;
})();var statearr_22525_22543 = state_22509__$1;(statearr_22525_22543[2] = null);
(statearr_22525_22543[1] = 2);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_22529 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22529[0] = state_machine__12410__auto__);
(statearr_22529[1] = 1);
return statearr_22529;
});
var state_machine__12410__auto____1 = (function (state_22509){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_22509);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e22530){if((e22530 instanceof Object))
{var ex__12413__auto__ = e22530;var statearr_22531_22544 = state_22509;(statearr_22531_22544[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22545 = state_22509;
state_22509 = G__22545;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_22509){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_22509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_22532 = f__12512__auto__.call(null);(statearr_22532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___22533);
return statearr_22532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12511__auto___22638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_22615){var state_val_22616 = (state_22615[1]);if((state_val_22616 === 1))
{var inst_22592 = 0;var state_22615__$1 = (function (){var statearr_22617 = state_22615;(statearr_22617[7] = inst_22592);
return statearr_22617;
})();var statearr_22618_22639 = state_22615__$1;(statearr_22618_22639[2] = null);
(statearr_22618_22639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 2))
{var inst_22592 = (state_22615[7]);var inst_22594 = (inst_22592 < n);var state_22615__$1 = state_22615;if(cljs.core.truth_(inst_22594))
{var statearr_22619_22640 = state_22615__$1;(statearr_22619_22640[1] = 4);
} else
{var statearr_22620_22641 = state_22615__$1;(statearr_22620_22641[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 3))
{var inst_22612 = (state_22615[2]);var inst_22613 = cljs.core.async.close_BANG_.call(null,out);var state_22615__$1 = (function (){var statearr_22621 = state_22615;(statearr_22621[8] = inst_22612);
return statearr_22621;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22615__$1,inst_22613);
} else
{if((state_val_22616 === 4))
{var state_22615__$1 = state_22615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22615__$1,7,ch);
} else
{if((state_val_22616 === 5))
{var state_22615__$1 = state_22615;var statearr_22622_22642 = state_22615__$1;(statearr_22622_22642[2] = null);
(statearr_22622_22642[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 6))
{var inst_22610 = (state_22615[2]);var state_22615__$1 = state_22615;var statearr_22623_22643 = state_22615__$1;(statearr_22623_22643[2] = inst_22610);
(statearr_22623_22643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 7))
{var inst_22597 = (state_22615[9]);var inst_22597__$1 = (state_22615[2]);var inst_22598 = (inst_22597__$1 == null);var inst_22599 = cljs.core.not.call(null,inst_22598);var state_22615__$1 = (function (){var statearr_22624 = state_22615;(statearr_22624[9] = inst_22597__$1);
return statearr_22624;
})();if(inst_22599)
{var statearr_22625_22644 = state_22615__$1;(statearr_22625_22644[1] = 8);
} else
{var statearr_22626_22645 = state_22615__$1;(statearr_22626_22645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 8))
{var inst_22597 = (state_22615[9]);var state_22615__$1 = state_22615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22615__$1,11,out,inst_22597);
} else
{if((state_val_22616 === 9))
{var state_22615__$1 = state_22615;var statearr_22627_22646 = state_22615__$1;(statearr_22627_22646[2] = null);
(statearr_22627_22646[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 10))
{var inst_22607 = (state_22615[2]);var state_22615__$1 = state_22615;var statearr_22628_22647 = state_22615__$1;(statearr_22628_22647[2] = inst_22607);
(statearr_22628_22647[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22616 === 11))
{var inst_22592 = (state_22615[7]);var inst_22602 = (state_22615[2]);var inst_22603 = (inst_22592 + 1);var inst_22592__$1 = inst_22603;var state_22615__$1 = (function (){var statearr_22629 = state_22615;(statearr_22629[7] = inst_22592__$1);
(statearr_22629[10] = inst_22602);
return statearr_22629;
})();var statearr_22630_22648 = state_22615__$1;(statearr_22630_22648[2] = null);
(statearr_22630_22648[1] = 2);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_22634 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22634[0] = state_machine__12410__auto__);
(statearr_22634[1] = 1);
return statearr_22634;
});
var state_machine__12410__auto____1 = (function (state_22615){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_22615);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e22635){if((e22635 instanceof Object))
{var ex__12413__auto__ = e22635;var statearr_22636_22649 = state_22615;(statearr_22636_22649[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22650 = state_22615;
state_22615 = G__22650;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_22615){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_22615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_22637 = f__12512__auto__.call(null);(statearr_22637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___22638);
return statearr_22637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12511__auto___22747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_22722){var state_val_22723 = (state_22722[1]);if((state_val_22723 === 1))
{var inst_22699 = null;var state_22722__$1 = (function (){var statearr_22724 = state_22722;(statearr_22724[7] = inst_22699);
return statearr_22724;
})();var statearr_22725_22748 = state_22722__$1;(statearr_22725_22748[2] = null);
(statearr_22725_22748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 2))
{var state_22722__$1 = state_22722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22722__$1,4,ch);
} else
{if((state_val_22723 === 3))
{var inst_22719 = (state_22722[2]);var inst_22720 = cljs.core.async.close_BANG_.call(null,out);var state_22722__$1 = (function (){var statearr_22726 = state_22722;(statearr_22726[8] = inst_22719);
return statearr_22726;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22722__$1,inst_22720);
} else
{if((state_val_22723 === 4))
{var inst_22702 = (state_22722[9]);var inst_22702__$1 = (state_22722[2]);var inst_22703 = (inst_22702__$1 == null);var inst_22704 = cljs.core.not.call(null,inst_22703);var state_22722__$1 = (function (){var statearr_22727 = state_22722;(statearr_22727[9] = inst_22702__$1);
return statearr_22727;
})();if(inst_22704)
{var statearr_22728_22749 = state_22722__$1;(statearr_22728_22749[1] = 5);
} else
{var statearr_22729_22750 = state_22722__$1;(statearr_22729_22750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 5))
{var inst_22699 = (state_22722[7]);var inst_22702 = (state_22722[9]);var inst_22706 = cljs.core._EQ_.call(null,inst_22702,inst_22699);var state_22722__$1 = state_22722;if(inst_22706)
{var statearr_22730_22751 = state_22722__$1;(statearr_22730_22751[1] = 8);
} else
{var statearr_22731_22752 = state_22722__$1;(statearr_22731_22752[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 6))
{var state_22722__$1 = state_22722;var statearr_22733_22753 = state_22722__$1;(statearr_22733_22753[2] = null);
(statearr_22733_22753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 7))
{var inst_22717 = (state_22722[2]);var state_22722__$1 = state_22722;var statearr_22734_22754 = state_22722__$1;(statearr_22734_22754[2] = inst_22717);
(statearr_22734_22754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 8))
{var inst_22699 = (state_22722[7]);var tmp22732 = inst_22699;var inst_22699__$1 = tmp22732;var state_22722__$1 = (function (){var statearr_22735 = state_22722;(statearr_22735[7] = inst_22699__$1);
return statearr_22735;
})();var statearr_22736_22755 = state_22722__$1;(statearr_22736_22755[2] = null);
(statearr_22736_22755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 9))
{var inst_22702 = (state_22722[9]);var state_22722__$1 = state_22722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22722__$1,11,out,inst_22702);
} else
{if((state_val_22723 === 10))
{var inst_22714 = (state_22722[2]);var state_22722__$1 = state_22722;var statearr_22737_22756 = state_22722__$1;(statearr_22737_22756[2] = inst_22714);
(statearr_22737_22756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22723 === 11))
{var inst_22702 = (state_22722[9]);var inst_22711 = (state_22722[2]);var inst_22699 = inst_22702;var state_22722__$1 = (function (){var statearr_22738 = state_22722;(statearr_22738[7] = inst_22699);
(statearr_22738[10] = inst_22711);
return statearr_22738;
})();var statearr_22739_22757 = state_22722__$1;(statearr_22739_22757[2] = null);
(statearr_22739_22757[1] = 2);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_22743 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22743[0] = state_machine__12410__auto__);
(statearr_22743[1] = 1);
return statearr_22743;
});
var state_machine__12410__auto____1 = (function (state_22722){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_22722);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e22744){if((e22744 instanceof Object))
{var ex__12413__auto__ = e22744;var statearr_22745_22758 = state_22722;(statearr_22745_22758[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22759 = state_22722;
state_22722 = G__22759;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_22722){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_22722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_22746 = f__12512__auto__.call(null);(statearr_22746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___22747);
return statearr_22746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12511__auto___22894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_22864){var state_val_22865 = (state_22864[1]);if((state_val_22865 === 1))
{var inst_22827 = (new Array(n));var inst_22828 = inst_22827;var inst_22829 = 0;var state_22864__$1 = (function (){var statearr_22866 = state_22864;(statearr_22866[7] = inst_22829);
(statearr_22866[8] = inst_22828);
return statearr_22866;
})();var statearr_22867_22895 = state_22864__$1;(statearr_22867_22895[2] = null);
(statearr_22867_22895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 2))
{var state_22864__$1 = state_22864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22864__$1,4,ch);
} else
{if((state_val_22865 === 3))
{var inst_22862 = (state_22864[2]);var state_22864__$1 = state_22864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22864__$1,inst_22862);
} else
{if((state_val_22865 === 4))
{var inst_22832 = (state_22864[9]);var inst_22832__$1 = (state_22864[2]);var inst_22833 = (inst_22832__$1 == null);var inst_22834 = cljs.core.not.call(null,inst_22833);var state_22864__$1 = (function (){var statearr_22868 = state_22864;(statearr_22868[9] = inst_22832__$1);
return statearr_22868;
})();if(inst_22834)
{var statearr_22869_22896 = state_22864__$1;(statearr_22869_22896[1] = 5);
} else
{var statearr_22870_22897 = state_22864__$1;(statearr_22870_22897[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 5))
{var inst_22837 = (state_22864[10]);var inst_22829 = (state_22864[7]);var inst_22832 = (state_22864[9]);var inst_22828 = (state_22864[8]);var inst_22836 = (inst_22828[inst_22829] = inst_22832);var inst_22837__$1 = (inst_22829 + 1);var inst_22838 = (inst_22837__$1 < n);var state_22864__$1 = (function (){var statearr_22871 = state_22864;(statearr_22871[10] = inst_22837__$1);
(statearr_22871[11] = inst_22836);
return statearr_22871;
})();if(cljs.core.truth_(inst_22838))
{var statearr_22872_22898 = state_22864__$1;(statearr_22872_22898[1] = 8);
} else
{var statearr_22873_22899 = state_22864__$1;(statearr_22873_22899[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 6))
{var inst_22829 = (state_22864[7]);var inst_22850 = (inst_22829 > 0);var state_22864__$1 = state_22864;if(cljs.core.truth_(inst_22850))
{var statearr_22875_22900 = state_22864__$1;(statearr_22875_22900[1] = 12);
} else
{var statearr_22876_22901 = state_22864__$1;(statearr_22876_22901[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 7))
{var inst_22860 = (state_22864[2]);var state_22864__$1 = state_22864;var statearr_22877_22902 = state_22864__$1;(statearr_22877_22902[2] = inst_22860);
(statearr_22877_22902[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 8))
{var inst_22837 = (state_22864[10]);var inst_22828 = (state_22864[8]);var tmp22874 = inst_22828;var inst_22828__$1 = tmp22874;var inst_22829 = inst_22837;var state_22864__$1 = (function (){var statearr_22878 = state_22864;(statearr_22878[7] = inst_22829);
(statearr_22878[8] = inst_22828__$1);
return statearr_22878;
})();var statearr_22879_22903 = state_22864__$1;(statearr_22879_22903[2] = null);
(statearr_22879_22903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 9))
{var inst_22828 = (state_22864[8]);var inst_22842 = cljs.core.vec.call(null,inst_22828);var state_22864__$1 = state_22864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22864__$1,11,out,inst_22842);
} else
{if((state_val_22865 === 10))
{var inst_22848 = (state_22864[2]);var state_22864__$1 = state_22864;var statearr_22880_22904 = state_22864__$1;(statearr_22880_22904[2] = inst_22848);
(statearr_22880_22904[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 11))
{var inst_22844 = (state_22864[2]);var inst_22845 = (new Array(n));var inst_22828 = inst_22845;var inst_22829 = 0;var state_22864__$1 = (function (){var statearr_22881 = state_22864;(statearr_22881[12] = inst_22844);
(statearr_22881[7] = inst_22829);
(statearr_22881[8] = inst_22828);
return statearr_22881;
})();var statearr_22882_22905 = state_22864__$1;(statearr_22882_22905[2] = null);
(statearr_22882_22905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 12))
{var inst_22828 = (state_22864[8]);var inst_22852 = cljs.core.vec.call(null,inst_22828);var state_22864__$1 = state_22864;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22864__$1,15,out,inst_22852);
} else
{if((state_val_22865 === 13))
{var state_22864__$1 = state_22864;var statearr_22883_22906 = state_22864__$1;(statearr_22883_22906[2] = null);
(statearr_22883_22906[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 14))
{var inst_22857 = (state_22864[2]);var inst_22858 = cljs.core.async.close_BANG_.call(null,out);var state_22864__$1 = (function (){var statearr_22884 = state_22864;(statearr_22884[13] = inst_22857);
return statearr_22884;
})();var statearr_22885_22907 = state_22864__$1;(statearr_22885_22907[2] = inst_22858);
(statearr_22885_22907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22865 === 15))
{var inst_22854 = (state_22864[2]);var state_22864__$1 = state_22864;var statearr_22886_22908 = state_22864__$1;(statearr_22886_22908[2] = inst_22854);
(statearr_22886_22908[1] = 14);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_22890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22890[0] = state_machine__12410__auto__);
(statearr_22890[1] = 1);
return statearr_22890;
});
var state_machine__12410__auto____1 = (function (state_22864){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_22864);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e22891){if((e22891 instanceof Object))
{var ex__12413__auto__ = e22891;var statearr_22892_22909 = state_22864;(statearr_22892_22909[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22910 = state_22864;
state_22864 = G__22910;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_22864){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_22864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_22893 = f__12512__auto__.call(null);(statearr_22893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___22894);
return statearr_22893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12511__auto___23053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12512__auto__ = (function (){var switch__12409__auto__ = (function (state_23023){var state_val_23024 = (state_23023[1]);if((state_val_23024 === 1))
{var inst_22982 = [];var inst_22983 = inst_22982;var inst_22984 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23023__$1 = (function (){var statearr_23025 = state_23023;(statearr_23025[7] = inst_22984);
(statearr_23025[8] = inst_22983);
return statearr_23025;
})();var statearr_23026_23054 = state_23023__$1;(statearr_23026_23054[2] = null);
(statearr_23026_23054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 2))
{var state_23023__$1 = state_23023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23023__$1,4,ch);
} else
{if((state_val_23024 === 3))
{var inst_23021 = (state_23023[2]);var state_23023__$1 = state_23023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23023__$1,inst_23021);
} else
{if((state_val_23024 === 4))
{var inst_22987 = (state_23023[9]);var inst_22987__$1 = (state_23023[2]);var inst_22988 = (inst_22987__$1 == null);var inst_22989 = cljs.core.not.call(null,inst_22988);var state_23023__$1 = (function (){var statearr_23027 = state_23023;(statearr_23027[9] = inst_22987__$1);
return statearr_23027;
})();if(inst_22989)
{var statearr_23028_23055 = state_23023__$1;(statearr_23028_23055[1] = 5);
} else
{var statearr_23029_23056 = state_23023__$1;(statearr_23029_23056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 5))
{var inst_22984 = (state_23023[7]);var inst_22991 = (state_23023[10]);var inst_22987 = (state_23023[9]);var inst_22991__$1 = f.call(null,inst_22987);var inst_22992 = cljs.core._EQ_.call(null,inst_22991__$1,inst_22984);var inst_22993 = cljs.core.keyword_identical_QMARK_.call(null,inst_22984,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_22994 = (inst_22992) || (inst_22993);var state_23023__$1 = (function (){var statearr_23030 = state_23023;(statearr_23030[10] = inst_22991__$1);
return statearr_23030;
})();if(cljs.core.truth_(inst_22994))
{var statearr_23031_23057 = state_23023__$1;(statearr_23031_23057[1] = 8);
} else
{var statearr_23032_23058 = state_23023__$1;(statearr_23032_23058[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 6))
{var inst_22983 = (state_23023[8]);var inst_23008 = inst_22983.length;var inst_23009 = (inst_23008 > 0);var state_23023__$1 = state_23023;if(cljs.core.truth_(inst_23009))
{var statearr_23034_23059 = state_23023__$1;(statearr_23034_23059[1] = 12);
} else
{var statearr_23035_23060 = state_23023__$1;(statearr_23035_23060[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 7))
{var inst_23019 = (state_23023[2]);var state_23023__$1 = state_23023;var statearr_23036_23061 = state_23023__$1;(statearr_23036_23061[2] = inst_23019);
(statearr_23036_23061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 8))
{var inst_22991 = (state_23023[10]);var inst_22987 = (state_23023[9]);var inst_22983 = (state_23023[8]);var inst_22996 = inst_22983.push(inst_22987);var tmp23033 = inst_22983;var inst_22983__$1 = tmp23033;var inst_22984 = inst_22991;var state_23023__$1 = (function (){var statearr_23037 = state_23023;(statearr_23037[7] = inst_22984);
(statearr_23037[8] = inst_22983__$1);
(statearr_23037[11] = inst_22996);
return statearr_23037;
})();var statearr_23038_23062 = state_23023__$1;(statearr_23038_23062[2] = null);
(statearr_23038_23062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 9))
{var inst_22983 = (state_23023[8]);var inst_22999 = cljs.core.vec.call(null,inst_22983);var state_23023__$1 = state_23023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23023__$1,11,out,inst_22999);
} else
{if((state_val_23024 === 10))
{var inst_23006 = (state_23023[2]);var state_23023__$1 = state_23023;var statearr_23039_23063 = state_23023__$1;(statearr_23039_23063[2] = inst_23006);
(statearr_23039_23063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 11))
{var inst_22991 = (state_23023[10]);var inst_22987 = (state_23023[9]);var inst_23001 = (state_23023[2]);var inst_23002 = [];var inst_23003 = inst_23002.push(inst_22987);var inst_22983 = inst_23002;var inst_22984 = inst_22991;var state_23023__$1 = (function (){var statearr_23040 = state_23023;(statearr_23040[7] = inst_22984);
(statearr_23040[12] = inst_23003);
(statearr_23040[13] = inst_23001);
(statearr_23040[8] = inst_22983);
return statearr_23040;
})();var statearr_23041_23064 = state_23023__$1;(statearr_23041_23064[2] = null);
(statearr_23041_23064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 12))
{var inst_22983 = (state_23023[8]);var inst_23011 = cljs.core.vec.call(null,inst_22983);var state_23023__$1 = state_23023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23023__$1,15,out,inst_23011);
} else
{if((state_val_23024 === 13))
{var state_23023__$1 = state_23023;var statearr_23042_23065 = state_23023__$1;(statearr_23042_23065[2] = null);
(statearr_23042_23065[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 14))
{var inst_23016 = (state_23023[2]);var inst_23017 = cljs.core.async.close_BANG_.call(null,out);var state_23023__$1 = (function (){var statearr_23043 = state_23023;(statearr_23043[14] = inst_23016);
return statearr_23043;
})();var statearr_23044_23066 = state_23023__$1;(statearr_23044_23066[2] = inst_23017);
(statearr_23044_23066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23024 === 15))
{var inst_23013 = (state_23023[2]);var state_23023__$1 = state_23023;var statearr_23045_23067 = state_23023__$1;(statearr_23045_23067[2] = inst_23013);
(statearr_23045_23067[1] = 14);
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
});return ((function (switch__12409__auto__){
return (function() {
var state_machine__12410__auto__ = null;
var state_machine__12410__auto____0 = (function (){var statearr_23049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23049[0] = state_machine__12410__auto__);
(statearr_23049[1] = 1);
return statearr_23049;
});
var state_machine__12410__auto____1 = (function (state_23023){while(true){
var ret_value__12411__auto__ = (function (){try{while(true){
var result__12412__auto__ = switch__12409__auto__.call(null,state_23023);if(cljs.core.keyword_identical_QMARK_.call(null,result__12412__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12412__auto__;
}
break;
}
}catch (e23050){if((e23050 instanceof Object))
{var ex__12413__auto__ = e23050;var statearr_23051_23068 = state_23023;(statearr_23051_23068[5] = ex__12413__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12411__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23069 = state_23023;
state_23023 = G__23069;
continue;
}
} else
{return ret_value__12411__auto__;
}
break;
}
});
state_machine__12410__auto__ = function(state_23023){
switch(arguments.length){
case 0:
return state_machine__12410__auto____0.call(this);
case 1:
return state_machine__12410__auto____1.call(this,state_23023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12410__auto____0;
state_machine__12410__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12410__auto____1;
return state_machine__12410__auto__;
})()
;})(switch__12409__auto__))
})();var state__12513__auto__ = (function (){var statearr_23052 = f__12512__auto__.call(null);(statearr_23052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12511__auto___23053);
return statearr_23052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12513__auto__);
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
