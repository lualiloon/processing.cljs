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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t191594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191594 = (function (f,fn_handler,meta191595){
this.f = f;
this.fn_handler = fn_handler;
this.meta191595 = meta191595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191594.cljs$lang$type = true;
cljs.core.async.t191594.cljs$lang$ctorStr = "cljs.core.async/t191594";
cljs.core.async.t191594.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191594");
});
cljs.core.async.t191594.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t191594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t191594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t191594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191596){var self__ = this;
var _191596__$1 = this;return self__.meta191595;
});
cljs.core.async.t191594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191596,meta191595__$1){var self__ = this;
var _191596__$1 = this;return (new cljs.core.async.t191594(self__.f,self__.fn_handler,meta191595__$1));
});
cljs.core.async.__GT_t191594 = (function __GT_t191594(f__$1,fn_handler__$1,meta191595){return (new cljs.core.async.t191594(f__$1,fn_handler__$1,meta191595));
});
}
return (new cljs.core.async.t191594(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__191598 = buff;if(G__191598)
{var bit__11502__auto__ = null;if(cljs.core.truth_((function (){var or__10858__auto__ = bit__11502__auto__;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return G__191598.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__191598.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__191598);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__191598);
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
{var val_191599 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_191599);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_191599);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__10846__auto__ = ret;if(cljs.core.truth_(and__10846__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__10846__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11700__auto___191600 = n;var x_191601 = 0;while(true){
if((x_191601 < n__11700__auto___191600))
{(a[x_191601] = 0);
{
var G__191602 = (x_191601 + 1);
x_191601 = G__191602;
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
var G__191603 = (i + 1);
i = G__191603;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t191607 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191607 = (function (flag,alt_flag,meta191608){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta191608 = meta191608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191607.cljs$lang$type = true;
cljs.core.async.t191607.cljs$lang$ctorStr = "cljs.core.async/t191607";
cljs.core.async.t191607.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191607");
});
cljs.core.async.t191607.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t191607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t191607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t191607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191609){var self__ = this;
var _191609__$1 = this;return self__.meta191608;
});
cljs.core.async.t191607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191609,meta191608__$1){var self__ = this;
var _191609__$1 = this;return (new cljs.core.async.t191607(self__.flag,self__.alt_flag,meta191608__$1));
});
cljs.core.async.__GT_t191607 = (function __GT_t191607(flag__$1,alt_flag__$1,meta191608){return (new cljs.core.async.t191607(flag__$1,alt_flag__$1,meta191608));
});
}
return (new cljs.core.async.t191607(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t191613 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191613 = (function (cb,flag,alt_handler,meta191614){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta191614 = meta191614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191613.cljs$lang$type = true;
cljs.core.async.t191613.cljs$lang$ctorStr = "cljs.core.async/t191613";
cljs.core.async.t191613.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191613");
});
cljs.core.async.t191613.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t191613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t191613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t191613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191615){var self__ = this;
var _191615__$1 = this;return self__.meta191614;
});
cljs.core.async.t191613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191615,meta191614__$1){var self__ = this;
var _191615__$1 = this;return (new cljs.core.async.t191613(self__.cb,self__.flag,self__.alt_handler,meta191614__$1));
});
cljs.core.async.__GT_t191613 = (function __GT_t191613(cb__$1,flag__$1,alt_handler__$1,meta191614){return (new cljs.core.async.t191613(cb__$1,flag__$1,alt_handler__$1,meta191614));
});
}
return (new cljs.core.async.t191613(cb,flag,alt_handler,null));
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
return (function (p1__191616_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__191616_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10858__auto__ = wport;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__191617 = (i + 1);
i = G__191617;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10858__auto__ = ret;if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__10846__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10846__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10846__auto__;
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
var alts_BANG___delegate = function (ports,p__191618){var map__191620 = p__191618;var map__191620__$1 = ((cljs.core.seq_QMARK_.call(null,map__191620))?cljs.core.apply.call(null,cljs.core.hash_map,map__191620):map__191620);var opts = map__191620__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__191618 = null;if (arguments.length > 1) {
  p__191618 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__191618);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__191621){
var ports = cljs.core.first(arglist__191621);
var p__191618 = cljs.core.rest(arglist__191621);
return alts_BANG___delegate(ports,p__191618);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t191629 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191629 = (function (ch,f,map_LT_,meta191630){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta191630 = meta191630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191629.cljs$lang$type = true;
cljs.core.async.t191629.cljs$lang$ctorStr = "cljs.core.async/t191629";
cljs.core.async.t191629.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191629");
});
cljs.core.async.t191629.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t191629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t191629.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t191629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t191632 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191632 = (function (fn1,_,meta191630,ch,f,map_LT_,meta191633){
this.fn1 = fn1;
this._ = _;
this.meta191630 = meta191630;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta191633 = meta191633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191632.cljs$lang$type = true;
cljs.core.async.t191632.cljs$lang$ctorStr = "cljs.core.async/t191632";
cljs.core.async.t191632.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191632");
});
cljs.core.async.t191632.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t191632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t191632.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t191632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__191622_SHARP_){return f1.call(null,(((p1__191622_SHARP_ == null))?null:self__.f.call(null,p1__191622_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t191632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191634){var self__ = this;
var _191634__$1 = this;return self__.meta191633;
});
cljs.core.async.t191632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191634,meta191633__$1){var self__ = this;
var _191634__$1 = this;return (new cljs.core.async.t191632(self__.fn1,self__._,self__.meta191630,self__.ch,self__.f,self__.map_LT_,meta191633__$1));
});
cljs.core.async.__GT_t191632 = (function __GT_t191632(fn1__$1,___$2,meta191630__$1,ch__$2,f__$2,map_LT___$2,meta191633){return (new cljs.core.async.t191632(fn1__$1,___$2,meta191630__$1,ch__$2,f__$2,map_LT___$2,meta191633));
});
}
return (new cljs.core.async.t191632(fn1,___$1,self__.meta191630,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10846__auto__ = ret;if(cljs.core.truth_(and__10846__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10846__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t191629.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t191629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t191629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191631){var self__ = this;
var _191631__$1 = this;return self__.meta191630;
});
cljs.core.async.t191629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191631,meta191630__$1){var self__ = this;
var _191631__$1 = this;return (new cljs.core.async.t191629(self__.ch,self__.f,self__.map_LT_,meta191630__$1));
});
cljs.core.async.__GT_t191629 = (function __GT_t191629(ch__$1,f__$1,map_LT___$1,meta191630){return (new cljs.core.async.t191629(ch__$1,f__$1,map_LT___$1,meta191630));
});
}
return (new cljs.core.async.t191629(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t191638 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191638 = (function (ch,f,map_GT_,meta191639){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta191639 = meta191639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191638.cljs$lang$type = true;
cljs.core.async.t191638.cljs$lang$ctorStr = "cljs.core.async/t191638";
cljs.core.async.t191638.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191638");
});
cljs.core.async.t191638.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t191638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t191638.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t191638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t191638.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t191638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t191638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191640){var self__ = this;
var _191640__$1 = this;return self__.meta191639;
});
cljs.core.async.t191638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191640,meta191639__$1){var self__ = this;
var _191640__$1 = this;return (new cljs.core.async.t191638(self__.ch,self__.f,self__.map_GT_,meta191639__$1));
});
cljs.core.async.__GT_t191638 = (function __GT_t191638(ch__$1,f__$1,map_GT___$1,meta191639){return (new cljs.core.async.t191638(ch__$1,f__$1,map_GT___$1,meta191639));
});
}
return (new cljs.core.async.t191638(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t191644 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t191644 = (function (ch,p,filter_GT_,meta191645){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta191645 = meta191645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t191644.cljs$lang$type = true;
cljs.core.async.t191644.cljs$lang$ctorStr = "cljs.core.async/t191644";
cljs.core.async.t191644.cljs$lang$ctorPrWriter = (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t191644");
});
cljs.core.async.t191644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t191644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t191644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t191644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t191644.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t191644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t191644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_191646){var self__ = this;
var _191646__$1 = this;return self__.meta191645;
});
cljs.core.async.t191644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_191646,meta191645__$1){var self__ = this;
var _191646__$1 = this;return (new cljs.core.async.t191644(self__.ch,self__.p,self__.filter_GT_,meta191645__$1));
});
cljs.core.async.__GT_t191644 = (function __GT_t191644(ch__$1,p__$1,filter_GT___$1,meta191645){return (new cljs.core.async.t191644(ch__$1,p__$1,filter_GT___$1,meta191645));
});
}
return (new cljs.core.async.t191644(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__189212__auto___191729 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_191708){var state_val_191709 = (state_191708[1]);if((state_val_191709 === 1))
{var state_191708__$1 = state_191708;var statearr_191710_191730 = state_191708__$1;(statearr_191710_191730[2] = null);
(statearr_191710_191730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 2))
{var state_191708__$1 = state_191708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191708__$1,4,ch);
} else
{if((state_val_191709 === 3))
{var inst_191706 = (state_191708[2]);var state_191708__$1 = state_191708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_191708__$1,inst_191706);
} else
{if((state_val_191709 === 4))
{var inst_191690 = (state_191708[7]);var inst_191690__$1 = (state_191708[2]);var inst_191691 = (inst_191690__$1 == null);var state_191708__$1 = (function (){var statearr_191711 = state_191708;(statearr_191711[7] = inst_191690__$1);
return statearr_191711;
})();if(cljs.core.truth_(inst_191691))
{var statearr_191712_191731 = state_191708__$1;(statearr_191712_191731[1] = 5);
} else
{var statearr_191713_191732 = state_191708__$1;(statearr_191713_191732[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 5))
{var inst_191693 = cljs.core.async.close_BANG_.call(null,out);var state_191708__$1 = state_191708;var statearr_191714_191733 = state_191708__$1;(statearr_191714_191733[2] = inst_191693);
(statearr_191714_191733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 6))
{var inst_191690 = (state_191708[7]);var inst_191695 = p.call(null,inst_191690);var state_191708__$1 = state_191708;if(cljs.core.truth_(inst_191695))
{var statearr_191715_191734 = state_191708__$1;(statearr_191715_191734[1] = 8);
} else
{var statearr_191716_191735 = state_191708__$1;(statearr_191716_191735[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 7))
{var inst_191704 = (state_191708[2]);var state_191708__$1 = state_191708;var statearr_191717_191736 = state_191708__$1;(statearr_191717_191736[2] = inst_191704);
(statearr_191717_191736[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 8))
{var inst_191690 = (state_191708[7]);var state_191708__$1 = state_191708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_191708__$1,11,out,inst_191690);
} else
{if((state_val_191709 === 9))
{var state_191708__$1 = state_191708;var statearr_191718_191737 = state_191708__$1;(statearr_191718_191737[2] = null);
(statearr_191718_191737[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 10))
{var inst_191701 = (state_191708[2]);var state_191708__$1 = (function (){var statearr_191719 = state_191708;(statearr_191719[8] = inst_191701);
return statearr_191719;
})();var statearr_191720_191738 = state_191708__$1;(statearr_191720_191738[2] = null);
(statearr_191720_191738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191709 === 11))
{var inst_191698 = (state_191708[2]);var state_191708__$1 = state_191708;var statearr_191721_191739 = state_191708__$1;(statearr_191721_191739[2] = inst_191698);
(statearr_191721_191739[1] = 10);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_191725 = [null,null,null,null,null,null,null,null,null];(statearr_191725[0] = state_machine__189143__auto__);
(statearr_191725[1] = 1);
return statearr_191725;
});
var state_machine__189143__auto____1 = (function (state_191708){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_191708);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e191726){if((e191726 instanceof Object))
{var ex__189146__auto__ = e191726;var statearr_191727_191740 = state_191708;(statearr_191727_191740[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_191708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e191726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__191741 = state_191708;
state_191708 = G__191741;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_191708){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_191708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_191728 = f__189213__auto__.call(null);(statearr_191728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___191729);
return statearr_191728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__189212__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_191893){var state_val_191894 = (state_191893[1]);if((state_val_191894 === 1))
{var state_191893__$1 = state_191893;var statearr_191895_191932 = state_191893__$1;(statearr_191895_191932[2] = null);
(statearr_191895_191932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 2))
{var state_191893__$1 = state_191893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_191893__$1,4,in$);
} else
{if((state_val_191894 === 3))
{var inst_191891 = (state_191893[2]);var state_191893__$1 = state_191893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_191893__$1,inst_191891);
} else
{if((state_val_191894 === 4))
{var inst_191839 = (state_191893[7]);var inst_191839__$1 = (state_191893[2]);var inst_191840 = (inst_191839__$1 == null);var state_191893__$1 = (function (){var statearr_191896 = state_191893;(statearr_191896[7] = inst_191839__$1);
return statearr_191896;
})();if(cljs.core.truth_(inst_191840))
{var statearr_191897_191933 = state_191893__$1;(statearr_191897_191933[1] = 5);
} else
{var statearr_191898_191934 = state_191893__$1;(statearr_191898_191934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 5))
{var inst_191842 = cljs.core.async.close_BANG_.call(null,out);var state_191893__$1 = state_191893;var statearr_191899_191935 = state_191893__$1;(statearr_191899_191935[2] = inst_191842);
(statearr_191899_191935[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 6))
{var inst_191839 = (state_191893[7]);var inst_191844 = f.call(null,inst_191839);var inst_191849 = cljs.core.seq.call(null,inst_191844);var inst_191850 = inst_191849;var inst_191851 = null;var inst_191852 = 0;var inst_191853 = 0;var state_191893__$1 = (function (){var statearr_191900 = state_191893;(statearr_191900[8] = inst_191850);
(statearr_191900[9] = inst_191853);
(statearr_191900[10] = inst_191851);
(statearr_191900[11] = inst_191852);
return statearr_191900;
})();var statearr_191901_191936 = state_191893__$1;(statearr_191901_191936[2] = null);
(statearr_191901_191936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 7))
{var inst_191889 = (state_191893[2]);var state_191893__$1 = state_191893;var statearr_191902_191937 = state_191893__$1;(statearr_191902_191937[2] = inst_191889);
(statearr_191902_191937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 8))
{var inst_191853 = (state_191893[9]);var inst_191852 = (state_191893[11]);var inst_191855 = (inst_191853 < inst_191852);var inst_191856 = inst_191855;var state_191893__$1 = state_191893;if(cljs.core.truth_(inst_191856))
{var statearr_191903_191938 = state_191893__$1;(statearr_191903_191938[1] = 10);
} else
{var statearr_191904_191939 = state_191893__$1;(statearr_191904_191939[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 9))
{var inst_191886 = (state_191893[2]);var state_191893__$1 = (function (){var statearr_191905 = state_191893;(statearr_191905[12] = inst_191886);
return statearr_191905;
})();var statearr_191906_191940 = state_191893__$1;(statearr_191906_191940[2] = null);
(statearr_191906_191940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 10))
{var inst_191853 = (state_191893[9]);var inst_191851 = (state_191893[10]);var inst_191858 = cljs.core._nth.call(null,inst_191851,inst_191853);var state_191893__$1 = state_191893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_191893__$1,13,out,inst_191858);
} else
{if((state_val_191894 === 11))
{var inst_191850 = (state_191893[8]);var inst_191864 = (state_191893[13]);var inst_191864__$1 = cljs.core.seq.call(null,inst_191850);var state_191893__$1 = (function (){var statearr_191910 = state_191893;(statearr_191910[13] = inst_191864__$1);
return statearr_191910;
})();if(inst_191864__$1)
{var statearr_191911_191941 = state_191893__$1;(statearr_191911_191941[1] = 14);
} else
{var statearr_191912_191942 = state_191893__$1;(statearr_191912_191942[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 12))
{var inst_191884 = (state_191893[2]);var state_191893__$1 = state_191893;var statearr_191913_191943 = state_191893__$1;(statearr_191913_191943[2] = inst_191884);
(statearr_191913_191943[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 13))
{var inst_191850 = (state_191893[8]);var inst_191853 = (state_191893[9]);var inst_191851 = (state_191893[10]);var inst_191852 = (state_191893[11]);var inst_191860 = (state_191893[2]);var inst_191861 = (inst_191853 + 1);var tmp191907 = inst_191850;var tmp191908 = inst_191851;var tmp191909 = inst_191852;var inst_191850__$1 = tmp191907;var inst_191851__$1 = tmp191908;var inst_191852__$1 = tmp191909;var inst_191853__$1 = inst_191861;var state_191893__$1 = (function (){var statearr_191914 = state_191893;(statearr_191914[8] = inst_191850__$1);
(statearr_191914[9] = inst_191853__$1);
(statearr_191914[10] = inst_191851__$1);
(statearr_191914[11] = inst_191852__$1);
(statearr_191914[14] = inst_191860);
return statearr_191914;
})();var statearr_191915_191944 = state_191893__$1;(statearr_191915_191944[2] = null);
(statearr_191915_191944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 14))
{var inst_191864 = (state_191893[13]);var inst_191866 = cljs.core.chunked_seq_QMARK_.call(null,inst_191864);var state_191893__$1 = state_191893;if(inst_191866)
{var statearr_191916_191945 = state_191893__$1;(statearr_191916_191945[1] = 17);
} else
{var statearr_191917_191946 = state_191893__$1;(statearr_191917_191946[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 15))
{var state_191893__$1 = state_191893;var statearr_191918_191947 = state_191893__$1;(statearr_191918_191947[2] = null);
(statearr_191918_191947[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 16))
{var inst_191882 = (state_191893[2]);var state_191893__$1 = state_191893;var statearr_191919_191948 = state_191893__$1;(statearr_191919_191948[2] = inst_191882);
(statearr_191919_191948[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 17))
{var inst_191864 = (state_191893[13]);var inst_191868 = cljs.core.chunk_first.call(null,inst_191864);var inst_191869 = cljs.core.chunk_rest.call(null,inst_191864);var inst_191870 = cljs.core.count.call(null,inst_191868);var inst_191850 = inst_191869;var inst_191851 = inst_191868;var inst_191852 = inst_191870;var inst_191853 = 0;var state_191893__$1 = (function (){var statearr_191920 = state_191893;(statearr_191920[8] = inst_191850);
(statearr_191920[9] = inst_191853);
(statearr_191920[10] = inst_191851);
(statearr_191920[11] = inst_191852);
return statearr_191920;
})();var statearr_191921_191949 = state_191893__$1;(statearr_191921_191949[2] = null);
(statearr_191921_191949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 18))
{var inst_191864 = (state_191893[13]);var inst_191873 = cljs.core.first.call(null,inst_191864);var state_191893__$1 = state_191893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_191893__$1,20,out,inst_191873);
} else
{if((state_val_191894 === 19))
{var inst_191879 = (state_191893[2]);var state_191893__$1 = state_191893;var statearr_191922_191950 = state_191893__$1;(statearr_191922_191950[2] = inst_191879);
(statearr_191922_191950[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_191894 === 20))
{var inst_191864 = (state_191893[13]);var inst_191875 = (state_191893[2]);var inst_191876 = cljs.core.next.call(null,inst_191864);var inst_191850 = inst_191876;var inst_191851 = null;var inst_191852 = 0;var inst_191853 = 0;var state_191893__$1 = (function (){var statearr_191923 = state_191893;(statearr_191923[8] = inst_191850);
(statearr_191923[9] = inst_191853);
(statearr_191923[10] = inst_191851);
(statearr_191923[11] = inst_191852);
(statearr_191923[15] = inst_191875);
return statearr_191923;
})();var statearr_191924_191951 = state_191893__$1;(statearr_191924_191951[2] = null);
(statearr_191924_191951[1] = 8);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_191928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_191928[0] = state_machine__189143__auto__);
(statearr_191928[1] = 1);
return statearr_191928;
});
var state_machine__189143__auto____1 = (function (state_191893){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_191893);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e191929){if((e191929 instanceof Object))
{var ex__189146__auto__ = e191929;var statearr_191930_191952 = state_191893;(statearr_191930_191952[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_191893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e191929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__191953 = state_191893;
state_191893 = G__191953;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_191893){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_191893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_191931 = f__189213__auto__.call(null);(statearr_191931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto__);
return statearr_191931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
}));
return c__189212__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__189212__auto___192034 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_192013){var state_val_192014 = (state_192013[1]);if((state_val_192014 === 1))
{var state_192013__$1 = state_192013;var statearr_192015_192035 = state_192013__$1;(statearr_192015_192035[2] = null);
(statearr_192015_192035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 2))
{var state_192013__$1 = state_192013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_192013__$1,4,from);
} else
{if((state_val_192014 === 3))
{var inst_192011 = (state_192013[2]);var state_192013__$1 = state_192013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_192013__$1,inst_192011);
} else
{if((state_val_192014 === 4))
{var inst_191996 = (state_192013[7]);var inst_191996__$1 = (state_192013[2]);var inst_191997 = (inst_191996__$1 == null);var state_192013__$1 = (function (){var statearr_192016 = state_192013;(statearr_192016[7] = inst_191996__$1);
return statearr_192016;
})();if(cljs.core.truth_(inst_191997))
{var statearr_192017_192036 = state_192013__$1;(statearr_192017_192036[1] = 5);
} else
{var statearr_192018_192037 = state_192013__$1;(statearr_192018_192037[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 5))
{var state_192013__$1 = state_192013;if(cljs.core.truth_(close_QMARK_))
{var statearr_192019_192038 = state_192013__$1;(statearr_192019_192038[1] = 8);
} else
{var statearr_192020_192039 = state_192013__$1;(statearr_192020_192039[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 6))
{var inst_191996 = (state_192013[7]);var state_192013__$1 = state_192013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_192013__$1,11,to,inst_191996);
} else
{if((state_val_192014 === 7))
{var inst_192009 = (state_192013[2]);var state_192013__$1 = state_192013;var statearr_192021_192040 = state_192013__$1;(statearr_192021_192040[2] = inst_192009);
(statearr_192021_192040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 8))
{var inst_192000 = cljs.core.async.close_BANG_.call(null,to);var state_192013__$1 = state_192013;var statearr_192022_192041 = state_192013__$1;(statearr_192022_192041[2] = inst_192000);
(statearr_192022_192041[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 9))
{var state_192013__$1 = state_192013;var statearr_192023_192042 = state_192013__$1;(statearr_192023_192042[2] = null);
(statearr_192023_192042[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 10))
{var inst_192003 = (state_192013[2]);var state_192013__$1 = state_192013;var statearr_192024_192043 = state_192013__$1;(statearr_192024_192043[2] = inst_192003);
(statearr_192024_192043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192014 === 11))
{var inst_192006 = (state_192013[2]);var state_192013__$1 = (function (){var statearr_192025 = state_192013;(statearr_192025[8] = inst_192006);
return statearr_192025;
})();var statearr_192026_192044 = state_192013__$1;(statearr_192026_192044[2] = null);
(statearr_192026_192044[1] = 2);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_192030 = [null,null,null,null,null,null,null,null,null];(statearr_192030[0] = state_machine__189143__auto__);
(statearr_192030[1] = 1);
return statearr_192030;
});
var state_machine__189143__auto____1 = (function (state_192013){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_192013);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e192031){if((e192031 instanceof Object))
{var ex__189146__auto__ = e192031;var statearr_192032_192045 = state_192013;(statearr_192032_192045[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e192031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__192046 = state_192013;
state_192013 = G__192046;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_192013){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_192013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_192033 = f__189213__auto__.call(null);(statearr_192033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___192034);
return statearr_192033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__189212__auto___192133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_192111){var state_val_192112 = (state_192111[1]);if((state_val_192112 === 1))
{var state_192111__$1 = state_192111;var statearr_192113_192134 = state_192111__$1;(statearr_192113_192134[2] = null);
(statearr_192113_192134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 2))
{var state_192111__$1 = state_192111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_192111__$1,4,ch);
} else
{if((state_val_192112 === 3))
{var inst_192109 = (state_192111[2]);var state_192111__$1 = state_192111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_192111__$1,inst_192109);
} else
{if((state_val_192112 === 4))
{var inst_192092 = (state_192111[7]);var inst_192092__$1 = (state_192111[2]);var inst_192093 = (inst_192092__$1 == null);var state_192111__$1 = (function (){var statearr_192114 = state_192111;(statearr_192114[7] = inst_192092__$1);
return statearr_192114;
})();if(cljs.core.truth_(inst_192093))
{var statearr_192115_192135 = state_192111__$1;(statearr_192115_192135[1] = 5);
} else
{var statearr_192116_192136 = state_192111__$1;(statearr_192116_192136[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 5))
{var inst_192095 = cljs.core.async.close_BANG_.call(null,tc);var inst_192096 = cljs.core.async.close_BANG_.call(null,fc);var state_192111__$1 = (function (){var statearr_192117 = state_192111;(statearr_192117[8] = inst_192095);
return statearr_192117;
})();var statearr_192118_192137 = state_192111__$1;(statearr_192118_192137[2] = inst_192096);
(statearr_192118_192137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 6))
{var inst_192092 = (state_192111[7]);var inst_192098 = p.call(null,inst_192092);var state_192111__$1 = state_192111;if(cljs.core.truth_(inst_192098))
{var statearr_192119_192138 = state_192111__$1;(statearr_192119_192138[1] = 9);
} else
{var statearr_192120_192139 = state_192111__$1;(statearr_192120_192139[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 7))
{var inst_192107 = (state_192111[2]);var state_192111__$1 = state_192111;var statearr_192121_192140 = state_192111__$1;(statearr_192121_192140[2] = inst_192107);
(statearr_192121_192140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 8))
{var inst_192104 = (state_192111[2]);var state_192111__$1 = (function (){var statearr_192122 = state_192111;(statearr_192122[9] = inst_192104);
return statearr_192122;
})();var statearr_192123_192141 = state_192111__$1;(statearr_192123_192141[2] = null);
(statearr_192123_192141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 9))
{var state_192111__$1 = state_192111;var statearr_192124_192142 = state_192111__$1;(statearr_192124_192142[2] = tc);
(statearr_192124_192142[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 10))
{var state_192111__$1 = state_192111;var statearr_192125_192143 = state_192111__$1;(statearr_192125_192143[2] = fc);
(statearr_192125_192143[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192112 === 11))
{var inst_192092 = (state_192111[7]);var inst_192102 = (state_192111[2]);var state_192111__$1 = state_192111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_192111__$1,8,inst_192102,inst_192092);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_192129 = [null,null,null,null,null,null,null,null,null,null];(statearr_192129[0] = state_machine__189143__auto__);
(statearr_192129[1] = 1);
return statearr_192129;
});
var state_machine__189143__auto____1 = (function (state_192111){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_192111);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e192130){if((e192130 instanceof Object))
{var ex__189146__auto__ = e192130;var statearr_192131_192144 = state_192111;(statearr_192131_192144[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e192130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__192145 = state_192111;
state_192111 = G__192145;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_192111){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_192111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_192132 = f__189213__auto__.call(null);(statearr_192132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___192133);
return statearr_192132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__189212__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_192192){var state_val_192193 = (state_192192[1]);if((state_val_192193 === 7))
{var inst_192188 = (state_192192[2]);var state_192192__$1 = state_192192;var statearr_192194_192210 = state_192192__$1;(statearr_192194_192210[2] = inst_192188);
(statearr_192194_192210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192193 === 6))
{var inst_192178 = (state_192192[7]);var inst_192181 = (state_192192[8]);var inst_192185 = f.call(null,inst_192178,inst_192181);var inst_192178__$1 = inst_192185;var state_192192__$1 = (function (){var statearr_192195 = state_192192;(statearr_192195[7] = inst_192178__$1);
return statearr_192195;
})();var statearr_192196_192211 = state_192192__$1;(statearr_192196_192211[2] = null);
(statearr_192196_192211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192193 === 5))
{var inst_192178 = (state_192192[7]);var state_192192__$1 = state_192192;var statearr_192197_192212 = state_192192__$1;(statearr_192197_192212[2] = inst_192178);
(statearr_192197_192212[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192193 === 4))
{var inst_192181 = (state_192192[8]);var inst_192181__$1 = (state_192192[2]);var inst_192182 = (inst_192181__$1 == null);var state_192192__$1 = (function (){var statearr_192198 = state_192192;(statearr_192198[8] = inst_192181__$1);
return statearr_192198;
})();if(cljs.core.truth_(inst_192182))
{var statearr_192199_192213 = state_192192__$1;(statearr_192199_192213[1] = 5);
} else
{var statearr_192200_192214 = state_192192__$1;(statearr_192200_192214[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192193 === 3))
{var inst_192190 = (state_192192[2]);var state_192192__$1 = state_192192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_192192__$1,inst_192190);
} else
{if((state_val_192193 === 2))
{var state_192192__$1 = state_192192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_192192__$1,4,ch);
} else
{if((state_val_192193 === 1))
{var inst_192178 = init;var state_192192__$1 = (function (){var statearr_192201 = state_192192;(statearr_192201[7] = inst_192178);
return statearr_192201;
})();var statearr_192202_192215 = state_192192__$1;(statearr_192202_192215[2] = null);
(statearr_192202_192215[1] = 2);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_192206 = [null,null,null,null,null,null,null,null,null];(statearr_192206[0] = state_machine__189143__auto__);
(statearr_192206[1] = 1);
return statearr_192206;
});
var state_machine__189143__auto____1 = (function (state_192192){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_192192);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e192207){if((e192207 instanceof Object))
{var ex__189146__auto__ = e192207;var statearr_192208_192216 = state_192192;(statearr_192208_192216[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192192);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e192207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__192217 = state_192192;
state_192192 = G__192217;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_192192){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_192192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_192209 = f__189213__auto__.call(null);(statearr_192209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto__);
return statearr_192209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
}));
return c__189212__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__189212__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_192279){var state_val_192280 = (state_192279[1]);if((state_val_192280 === 1))
{var inst_192259 = cljs.core.seq.call(null,coll);var inst_192260 = inst_192259;var state_192279__$1 = (function (){var statearr_192281 = state_192279;(statearr_192281[7] = inst_192260);
return statearr_192281;
})();var statearr_192282_192300 = state_192279__$1;(statearr_192282_192300[2] = null);
(statearr_192282_192300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 2))
{var inst_192260 = (state_192279[7]);var state_192279__$1 = state_192279;if(cljs.core.truth_(inst_192260))
{var statearr_192283_192301 = state_192279__$1;(statearr_192283_192301[1] = 4);
} else
{var statearr_192284_192302 = state_192279__$1;(statearr_192284_192302[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 3))
{var inst_192277 = (state_192279[2]);var state_192279__$1 = state_192279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_192279__$1,inst_192277);
} else
{if((state_val_192280 === 4))
{var inst_192260 = (state_192279[7]);var inst_192263 = cljs.core.first.call(null,inst_192260);var state_192279__$1 = state_192279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_192279__$1,7,ch,inst_192263);
} else
{if((state_val_192280 === 5))
{var state_192279__$1 = state_192279;if(cljs.core.truth_(close_QMARK_))
{var statearr_192285_192303 = state_192279__$1;(statearr_192285_192303[1] = 8);
} else
{var statearr_192286_192304 = state_192279__$1;(statearr_192286_192304[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 6))
{var inst_192275 = (state_192279[2]);var state_192279__$1 = state_192279;var statearr_192287_192305 = state_192279__$1;(statearr_192287_192305[2] = inst_192275);
(statearr_192287_192305[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 7))
{var inst_192260 = (state_192279[7]);var inst_192265 = (state_192279[2]);var inst_192266 = cljs.core.next.call(null,inst_192260);var inst_192260__$1 = inst_192266;var state_192279__$1 = (function (){var statearr_192288 = state_192279;(statearr_192288[8] = inst_192265);
(statearr_192288[7] = inst_192260__$1);
return statearr_192288;
})();var statearr_192289_192306 = state_192279__$1;(statearr_192289_192306[2] = null);
(statearr_192289_192306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 8))
{var inst_192270 = cljs.core.async.close_BANG_.call(null,ch);var state_192279__$1 = state_192279;var statearr_192290_192307 = state_192279__$1;(statearr_192290_192307[2] = inst_192270);
(statearr_192290_192307[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 9))
{var state_192279__$1 = state_192279;var statearr_192291_192308 = state_192279__$1;(statearr_192291_192308[2] = null);
(statearr_192291_192308[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192280 === 10))
{var inst_192273 = (state_192279[2]);var state_192279__$1 = state_192279;var statearr_192292_192309 = state_192279__$1;(statearr_192292_192309[2] = inst_192273);
(statearr_192292_192309[1] = 6);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_192296 = [null,null,null,null,null,null,null,null,null];(statearr_192296[0] = state_machine__189143__auto__);
(statearr_192296[1] = 1);
return statearr_192296;
});
var state_machine__189143__auto____1 = (function (state_192279){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_192279);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e192297){if((e192297 instanceof Object))
{var ex__189146__auto__ = e192297;var statearr_192298_192310 = state_192279;(statearr_192298_192310[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192279);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e192297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__192311 = state_192279;
state_192279 = G__192311;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_192279){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_192279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_192299 = f__189213__auto__.call(null);(statearr_192299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto__);
return statearr_192299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
}));
return c__189212__auto__;
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
cljs.core.async.Mux = (function (){var obj192313 = {};return obj192313;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10846__auto__ = _;if(and__10846__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10846__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__11479__auto__ = (((_ == null))?null:_);return (function (){var or__10858__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj192315 = {};return obj192315;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t192539 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t192539 = (function (cs,ch,mult,meta192540){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta192540 = meta192540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t192539.cljs$lang$type = true;
cljs.core.async.t192539.cljs$lang$ctorStr = "cljs.core.async/t192539";
cljs.core.async.t192539.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t192539");
});})(cs))
;
cljs.core.async.t192539.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t192539.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t192539.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t192539.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t192539.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t192539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t192539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_192541){var self__ = this;
var _192541__$1 = this;return self__.meta192540;
});})(cs))
;
cljs.core.async.t192539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_192541,meta192540__$1){var self__ = this;
var _192541__$1 = this;return (new cljs.core.async.t192539(self__.cs,self__.ch,self__.mult,meta192540__$1));
});})(cs))
;
cljs.core.async.__GT_t192539 = ((function (cs){
return (function __GT_t192539(cs__$1,ch__$1,mult__$1,meta192540){return (new cljs.core.async.t192539(cs__$1,ch__$1,mult__$1,meta192540));
});})(cs))
;
}
return (new cljs.core.async.t192539(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__189212__auto___192762 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_192676){var state_val_192677 = (state_192676[1]);if((state_val_192677 === 32))
{var inst_192620 = (state_192676[7]);var inst_192544 = (state_192676[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_192676,31,Object,null,30);var inst_192627 = cljs.core.async.put_BANG_.call(null,inst_192620,inst_192544,done);var state_192676__$1 = state_192676;var statearr_192678_192763 = state_192676__$1;(statearr_192678_192763[2] = inst_192627);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192676__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 1))
{var state_192676__$1 = state_192676;var statearr_192679_192764 = state_192676__$1;(statearr_192679_192764[2] = null);
(statearr_192679_192764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 33))
{var inst_192633 = (state_192676[9]);var inst_192635 = cljs.core.chunked_seq_QMARK_.call(null,inst_192633);var state_192676__$1 = state_192676;if(inst_192635)
{var statearr_192680_192765 = state_192676__$1;(statearr_192680_192765[1] = 36);
} else
{var statearr_192681_192766 = state_192676__$1;(statearr_192681_192766[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 2))
{var state_192676__$1 = state_192676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_192676__$1,4,ch);
} else
{if((state_val_192677 === 34))
{var state_192676__$1 = state_192676;var statearr_192682_192767 = state_192676__$1;(statearr_192682_192767[2] = null);
(statearr_192682_192767[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 3))
{var inst_192674 = (state_192676[2]);var state_192676__$1 = state_192676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_192676__$1,inst_192674);
} else
{if((state_val_192677 === 35))
{var inst_192658 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192683_192768 = state_192676__$1;(statearr_192683_192768[2] = inst_192658);
(statearr_192683_192768[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 4))
{var inst_192544 = (state_192676[8]);var inst_192544__$1 = (state_192676[2]);var inst_192545 = (inst_192544__$1 == null);var state_192676__$1 = (function (){var statearr_192684 = state_192676;(statearr_192684[8] = inst_192544__$1);
return statearr_192684;
})();if(cljs.core.truth_(inst_192545))
{var statearr_192685_192769 = state_192676__$1;(statearr_192685_192769[1] = 5);
} else
{var statearr_192686_192770 = state_192676__$1;(statearr_192686_192770[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 36))
{var inst_192633 = (state_192676[9]);var inst_192637 = cljs.core.chunk_first.call(null,inst_192633);var inst_192638 = cljs.core.chunk_rest.call(null,inst_192633);var inst_192639 = cljs.core.count.call(null,inst_192637);var inst_192612 = inst_192638;var inst_192613 = inst_192637;var inst_192614 = inst_192639;var inst_192615 = 0;var state_192676__$1 = (function (){var statearr_192687 = state_192676;(statearr_192687[10] = inst_192612);
(statearr_192687[11] = inst_192613);
(statearr_192687[12] = inst_192615);
(statearr_192687[13] = inst_192614);
return statearr_192687;
})();var statearr_192688_192771 = state_192676__$1;(statearr_192688_192771[2] = null);
(statearr_192688_192771[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 5))
{var inst_192551 = cljs.core.deref.call(null,cs);var inst_192552 = cljs.core.seq.call(null,inst_192551);var inst_192553 = inst_192552;var inst_192554 = null;var inst_192555 = 0;var inst_192556 = 0;var state_192676__$1 = (function (){var statearr_192689 = state_192676;(statearr_192689[14] = inst_192554);
(statearr_192689[15] = inst_192553);
(statearr_192689[16] = inst_192555);
(statearr_192689[17] = inst_192556);
return statearr_192689;
})();var statearr_192690_192772 = state_192676__$1;(statearr_192690_192772[2] = null);
(statearr_192690_192772[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 37))
{var inst_192633 = (state_192676[9]);var inst_192642 = cljs.core.first.call(null,inst_192633);var state_192676__$1 = (function (){var statearr_192691 = state_192676;(statearr_192691[18] = inst_192642);
return statearr_192691;
})();var statearr_192692_192773 = state_192676__$1;(statearr_192692_192773[2] = null);
(statearr_192692_192773[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 6))
{var inst_192604 = (state_192676[19]);var inst_192603 = cljs.core.deref.call(null,cs);var inst_192604__$1 = cljs.core.keys.call(null,inst_192603);var inst_192605 = cljs.core.count.call(null,inst_192604__$1);var inst_192606 = cljs.core.reset_BANG_.call(null,dctr,inst_192605);var inst_192611 = cljs.core.seq.call(null,inst_192604__$1);var inst_192612 = inst_192611;var inst_192613 = null;var inst_192614 = 0;var inst_192615 = 0;var state_192676__$1 = (function (){var statearr_192693 = state_192676;(statearr_192693[10] = inst_192612);
(statearr_192693[11] = inst_192613);
(statearr_192693[12] = inst_192615);
(statearr_192693[13] = inst_192614);
(statearr_192693[20] = inst_192606);
(statearr_192693[19] = inst_192604__$1);
return statearr_192693;
})();var statearr_192694_192774 = state_192676__$1;(statearr_192694_192774[2] = null);
(statearr_192694_192774[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 38))
{var inst_192655 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192695_192775 = state_192676__$1;(statearr_192695_192775[2] = inst_192655);
(statearr_192695_192775[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 7))
{var inst_192672 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192696_192776 = state_192676__$1;(statearr_192696_192776[2] = inst_192672);
(statearr_192696_192776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 39))
{var inst_192633 = (state_192676[9]);var inst_192651 = (state_192676[2]);var inst_192652 = cljs.core.next.call(null,inst_192633);var inst_192612 = inst_192652;var inst_192613 = null;var inst_192614 = 0;var inst_192615 = 0;var state_192676__$1 = (function (){var statearr_192697 = state_192676;(statearr_192697[21] = inst_192651);
(statearr_192697[10] = inst_192612);
(statearr_192697[11] = inst_192613);
(statearr_192697[12] = inst_192615);
(statearr_192697[13] = inst_192614);
return statearr_192697;
})();var statearr_192698_192777 = state_192676__$1;(statearr_192698_192777[2] = null);
(statearr_192698_192777[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 8))
{var inst_192555 = (state_192676[16]);var inst_192556 = (state_192676[17]);var inst_192558 = (inst_192556 < inst_192555);var inst_192559 = inst_192558;var state_192676__$1 = state_192676;if(cljs.core.truth_(inst_192559))
{var statearr_192699_192778 = state_192676__$1;(statearr_192699_192778[1] = 10);
} else
{var statearr_192700_192779 = state_192676__$1;(statearr_192700_192779[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 40))
{var inst_192642 = (state_192676[18]);var inst_192643 = (state_192676[2]);var inst_192644 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_192645 = cljs.core.async.untap_STAR_.call(null,m,inst_192642);var state_192676__$1 = (function (){var statearr_192701 = state_192676;(statearr_192701[22] = inst_192643);
(statearr_192701[23] = inst_192644);
return statearr_192701;
})();var statearr_192702_192780 = state_192676__$1;(statearr_192702_192780[2] = inst_192645);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192676__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 9))
{var inst_192601 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192703_192781 = state_192676__$1;(statearr_192703_192781[2] = inst_192601);
(statearr_192703_192781[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 41))
{var inst_192544 = (state_192676[8]);var inst_192642 = (state_192676[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_192676,40,Object,null,39);var inst_192649 = cljs.core.async.put_BANG_.call(null,inst_192642,inst_192544,done);var state_192676__$1 = state_192676;var statearr_192704_192782 = state_192676__$1;(statearr_192704_192782[2] = inst_192649);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192676__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 10))
{var inst_192554 = (state_192676[14]);var inst_192556 = (state_192676[17]);var inst_192562 = cljs.core._nth.call(null,inst_192554,inst_192556);var inst_192563 = cljs.core.nth.call(null,inst_192562,0,null);var inst_192564 = cljs.core.nth.call(null,inst_192562,1,null);var state_192676__$1 = (function (){var statearr_192705 = state_192676;(statearr_192705[24] = inst_192563);
return statearr_192705;
})();if(cljs.core.truth_(inst_192564))
{var statearr_192706_192783 = state_192676__$1;(statearr_192706_192783[1] = 13);
} else
{var statearr_192707_192784 = state_192676__$1;(statearr_192707_192784[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 42))
{var state_192676__$1 = state_192676;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_192676__$1,45,dchan);
} else
{if((state_val_192677 === 11))
{var inst_192573 = (state_192676[25]);var inst_192553 = (state_192676[15]);var inst_192573__$1 = cljs.core.seq.call(null,inst_192553);var state_192676__$1 = (function (){var statearr_192708 = state_192676;(statearr_192708[25] = inst_192573__$1);
return statearr_192708;
})();if(inst_192573__$1)
{var statearr_192709_192785 = state_192676__$1;(statearr_192709_192785[1] = 16);
} else
{var statearr_192710_192786 = state_192676__$1;(statearr_192710_192786[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 43))
{var state_192676__$1 = state_192676;var statearr_192711_192787 = state_192676__$1;(statearr_192711_192787[2] = null);
(statearr_192711_192787[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 12))
{var inst_192599 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192712_192788 = state_192676__$1;(statearr_192712_192788[2] = inst_192599);
(statearr_192712_192788[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 44))
{var inst_192669 = (state_192676[2]);var state_192676__$1 = (function (){var statearr_192713 = state_192676;(statearr_192713[26] = inst_192669);
return statearr_192713;
})();var statearr_192714_192789 = state_192676__$1;(statearr_192714_192789[2] = null);
(statearr_192714_192789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 13))
{var inst_192563 = (state_192676[24]);var inst_192566 = cljs.core.async.close_BANG_.call(null,inst_192563);var state_192676__$1 = state_192676;var statearr_192715_192790 = state_192676__$1;(statearr_192715_192790[2] = inst_192566);
(statearr_192715_192790[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 45))
{var inst_192666 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192719_192791 = state_192676__$1;(statearr_192719_192791[2] = inst_192666);
(statearr_192719_192791[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 14))
{var state_192676__$1 = state_192676;var statearr_192720_192792 = state_192676__$1;(statearr_192720_192792[2] = null);
(statearr_192720_192792[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 15))
{var inst_192554 = (state_192676[14]);var inst_192553 = (state_192676[15]);var inst_192555 = (state_192676[16]);var inst_192556 = (state_192676[17]);var inst_192569 = (state_192676[2]);var inst_192570 = (inst_192556 + 1);var tmp192716 = inst_192554;var tmp192717 = inst_192553;var tmp192718 = inst_192555;var inst_192553__$1 = tmp192717;var inst_192554__$1 = tmp192716;var inst_192555__$1 = tmp192718;var inst_192556__$1 = inst_192570;var state_192676__$1 = (function (){var statearr_192721 = state_192676;(statearr_192721[14] = inst_192554__$1);
(statearr_192721[15] = inst_192553__$1);
(statearr_192721[16] = inst_192555__$1);
(statearr_192721[17] = inst_192556__$1);
(statearr_192721[27] = inst_192569);
return statearr_192721;
})();var statearr_192722_192793 = state_192676__$1;(statearr_192722_192793[2] = null);
(statearr_192722_192793[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 16))
{var inst_192573 = (state_192676[25]);var inst_192575 = cljs.core.chunked_seq_QMARK_.call(null,inst_192573);var state_192676__$1 = state_192676;if(inst_192575)
{var statearr_192723_192794 = state_192676__$1;(statearr_192723_192794[1] = 19);
} else
{var statearr_192724_192795 = state_192676__$1;(statearr_192724_192795[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 17))
{var state_192676__$1 = state_192676;var statearr_192725_192796 = state_192676__$1;(statearr_192725_192796[2] = null);
(statearr_192725_192796[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 18))
{var inst_192597 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192726_192797 = state_192676__$1;(statearr_192726_192797[2] = inst_192597);
(statearr_192726_192797[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 19))
{var inst_192573 = (state_192676[25]);var inst_192577 = cljs.core.chunk_first.call(null,inst_192573);var inst_192578 = cljs.core.chunk_rest.call(null,inst_192573);var inst_192579 = cljs.core.count.call(null,inst_192577);var inst_192553 = inst_192578;var inst_192554 = inst_192577;var inst_192555 = inst_192579;var inst_192556 = 0;var state_192676__$1 = (function (){var statearr_192727 = state_192676;(statearr_192727[14] = inst_192554);
(statearr_192727[15] = inst_192553);
(statearr_192727[16] = inst_192555);
(statearr_192727[17] = inst_192556);
return statearr_192727;
})();var statearr_192728_192798 = state_192676__$1;(statearr_192728_192798[2] = null);
(statearr_192728_192798[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 20))
{var inst_192573 = (state_192676[25]);var inst_192583 = cljs.core.first.call(null,inst_192573);var inst_192584 = cljs.core.nth.call(null,inst_192583,0,null);var inst_192585 = cljs.core.nth.call(null,inst_192583,1,null);var state_192676__$1 = (function (){var statearr_192729 = state_192676;(statearr_192729[28] = inst_192584);
return statearr_192729;
})();if(cljs.core.truth_(inst_192585))
{var statearr_192730_192799 = state_192676__$1;(statearr_192730_192799[1] = 22);
} else
{var statearr_192731_192800 = state_192676__$1;(statearr_192731_192800[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 21))
{var inst_192594 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192732_192801 = state_192676__$1;(statearr_192732_192801[2] = inst_192594);
(statearr_192732_192801[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 22))
{var inst_192584 = (state_192676[28]);var inst_192587 = cljs.core.async.close_BANG_.call(null,inst_192584);var state_192676__$1 = state_192676;var statearr_192733_192802 = state_192676__$1;(statearr_192733_192802[2] = inst_192587);
(statearr_192733_192802[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 23))
{var state_192676__$1 = state_192676;var statearr_192734_192803 = state_192676__$1;(statearr_192734_192803[2] = null);
(statearr_192734_192803[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 24))
{var inst_192573 = (state_192676[25]);var inst_192590 = (state_192676[2]);var inst_192591 = cljs.core.next.call(null,inst_192573);var inst_192553 = inst_192591;var inst_192554 = null;var inst_192555 = 0;var inst_192556 = 0;var state_192676__$1 = (function (){var statearr_192735 = state_192676;(statearr_192735[14] = inst_192554);
(statearr_192735[15] = inst_192553);
(statearr_192735[29] = inst_192590);
(statearr_192735[16] = inst_192555);
(statearr_192735[17] = inst_192556);
return statearr_192735;
})();var statearr_192736_192804 = state_192676__$1;(statearr_192736_192804[2] = null);
(statearr_192736_192804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 25))
{var inst_192615 = (state_192676[12]);var inst_192614 = (state_192676[13]);var inst_192617 = (inst_192615 < inst_192614);var inst_192618 = inst_192617;var state_192676__$1 = state_192676;if(cljs.core.truth_(inst_192618))
{var statearr_192737_192805 = state_192676__$1;(statearr_192737_192805[1] = 27);
} else
{var statearr_192738_192806 = state_192676__$1;(statearr_192738_192806[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 26))
{var inst_192604 = (state_192676[19]);var inst_192662 = (state_192676[2]);var inst_192663 = cljs.core.seq.call(null,inst_192604);var state_192676__$1 = (function (){var statearr_192739 = state_192676;(statearr_192739[30] = inst_192662);
return statearr_192739;
})();if(inst_192663)
{var statearr_192740_192807 = state_192676__$1;(statearr_192740_192807[1] = 42);
} else
{var statearr_192741_192808 = state_192676__$1;(statearr_192741_192808[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 27))
{var inst_192613 = (state_192676[11]);var inst_192615 = (state_192676[12]);var inst_192620 = cljs.core._nth.call(null,inst_192613,inst_192615);var state_192676__$1 = (function (){var statearr_192742 = state_192676;(statearr_192742[7] = inst_192620);
return statearr_192742;
})();var statearr_192743_192809 = state_192676__$1;(statearr_192743_192809[2] = null);
(statearr_192743_192809[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 28))
{var inst_192612 = (state_192676[10]);var inst_192633 = (state_192676[9]);var inst_192633__$1 = cljs.core.seq.call(null,inst_192612);var state_192676__$1 = (function (){var statearr_192747 = state_192676;(statearr_192747[9] = inst_192633__$1);
return statearr_192747;
})();if(inst_192633__$1)
{var statearr_192748_192810 = state_192676__$1;(statearr_192748_192810[1] = 33);
} else
{var statearr_192749_192811 = state_192676__$1;(statearr_192749_192811[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 29))
{var inst_192660 = (state_192676[2]);var state_192676__$1 = state_192676;var statearr_192750_192812 = state_192676__$1;(statearr_192750_192812[2] = inst_192660);
(statearr_192750_192812[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 30))
{var inst_192612 = (state_192676[10]);var inst_192613 = (state_192676[11]);var inst_192615 = (state_192676[12]);var inst_192614 = (state_192676[13]);var inst_192629 = (state_192676[2]);var inst_192630 = (inst_192615 + 1);var tmp192744 = inst_192612;var tmp192745 = inst_192613;var tmp192746 = inst_192614;var inst_192612__$1 = tmp192744;var inst_192613__$1 = tmp192745;var inst_192614__$1 = tmp192746;var inst_192615__$1 = inst_192630;var state_192676__$1 = (function (){var statearr_192751 = state_192676;(statearr_192751[31] = inst_192629);
(statearr_192751[10] = inst_192612__$1);
(statearr_192751[11] = inst_192613__$1);
(statearr_192751[12] = inst_192615__$1);
(statearr_192751[13] = inst_192614__$1);
return statearr_192751;
})();var statearr_192752_192813 = state_192676__$1;(statearr_192752_192813[2] = null);
(statearr_192752_192813[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192677 === 31))
{var inst_192620 = (state_192676[7]);var inst_192621 = (state_192676[2]);var inst_192622 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_192623 = cljs.core.async.untap_STAR_.call(null,m,inst_192620);var state_192676__$1 = (function (){var statearr_192753 = state_192676;(statearr_192753[32] = inst_192621);
(statearr_192753[33] = inst_192622);
return statearr_192753;
})();var statearr_192754_192814 = state_192676__$1;(statearr_192754_192814[2] = inst_192623);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192676__$1);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_192758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_192758[0] = state_machine__189143__auto__);
(statearr_192758[1] = 1);
return statearr_192758;
});
var state_machine__189143__auto____1 = (function (state_192676){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_192676);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e192759){if((e192759 instanceof Object))
{var ex__189146__auto__ = e192759;var statearr_192760_192815 = state_192676;(statearr_192760_192815[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e192759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__192816 = state_192676;
state_192676 = G__192816;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_192676){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_192676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_192761 = f__189213__auto__.call(null);(statearr_192761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___192762);
return statearr_192761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
cljs.core.async.Mix = (function (){var obj192818 = {};return obj192818;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10846__auto__ = m;if(and__10846__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10846__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__11479__auto__ = (((m == null))?null:m);return (function (){var or__10858__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t192928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t192928 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta192929){
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
this.meta192929 = meta192929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t192928.cljs$lang$type = true;
cljs.core.async.t192928.cljs$lang$ctorStr = "cljs.core.async/t192928";
cljs.core.async.t192928.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t192928");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t192928.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t192928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_192930){var self__ = this;
var _192930__$1 = this;return self__.meta192929;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t192928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_192930,meta192929__$1){var self__ = this;
var _192930__$1 = this;return (new cljs.core.async.t192928(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta192929__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t192928 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t192928(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta192929){return (new cljs.core.async.t192928(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta192929));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t192928(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__189212__auto___193037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_192995){var state_val_192996 = (state_192995[1]);if((state_val_192996 === 1))
{var inst_192934 = (state_192995[7]);var inst_192934__$1 = calc_state.call(null);var inst_192935 = cljs.core.seq_QMARK_.call(null,inst_192934__$1);var state_192995__$1 = (function (){var statearr_192997 = state_192995;(statearr_192997[7] = inst_192934__$1);
return statearr_192997;
})();if(inst_192935)
{var statearr_192998_193038 = state_192995__$1;(statearr_192998_193038[1] = 2);
} else
{var statearr_192999_193039 = state_192995__$1;(statearr_192999_193039[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 2))
{var inst_192934 = (state_192995[7]);var inst_192937 = cljs.core.apply.call(null,cljs.core.hash_map,inst_192934);var state_192995__$1 = state_192995;var statearr_193000_193040 = state_192995__$1;(statearr_193000_193040[2] = inst_192937);
(statearr_193000_193040[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 3))
{var inst_192934 = (state_192995[7]);var state_192995__$1 = state_192995;var statearr_193001_193041 = state_192995__$1;(statearr_193001_193041[2] = inst_192934);
(statearr_193001_193041[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 4))
{var inst_192934 = (state_192995[7]);var inst_192940 = (state_192995[2]);var inst_192941 = cljs.core.get.call(null,inst_192940,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_192942 = cljs.core.get.call(null,inst_192940,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_192943 = cljs.core.get.call(null,inst_192940,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_192944 = inst_192934;var state_192995__$1 = (function (){var statearr_193002 = state_192995;(statearr_193002[8] = inst_192944);
(statearr_193002[9] = inst_192942);
(statearr_193002[10] = inst_192943);
(statearr_193002[11] = inst_192941);
return statearr_193002;
})();var statearr_193003_193042 = state_192995__$1;(statearr_193003_193042[2] = null);
(statearr_193003_193042[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 5))
{var inst_192944 = (state_192995[8]);var inst_192947 = cljs.core.seq_QMARK_.call(null,inst_192944);var state_192995__$1 = state_192995;if(inst_192947)
{var statearr_193004_193043 = state_192995__$1;(statearr_193004_193043[1] = 7);
} else
{var statearr_193005_193044 = state_192995__$1;(statearr_193005_193044[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 6))
{var inst_192993 = (state_192995[2]);var state_192995__$1 = state_192995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_192995__$1,inst_192993);
} else
{if((state_val_192996 === 7))
{var inst_192944 = (state_192995[8]);var inst_192949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_192944);var state_192995__$1 = state_192995;var statearr_193006_193045 = state_192995__$1;(statearr_193006_193045[2] = inst_192949);
(statearr_193006_193045[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 8))
{var inst_192944 = (state_192995[8]);var state_192995__$1 = state_192995;var statearr_193007_193046 = state_192995__$1;(statearr_193007_193046[2] = inst_192944);
(statearr_193007_193046[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 9))
{var inst_192952 = (state_192995[12]);var inst_192952__$1 = (state_192995[2]);var inst_192953 = cljs.core.get.call(null,inst_192952__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_192954 = cljs.core.get.call(null,inst_192952__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_192955 = cljs.core.get.call(null,inst_192952__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_192995__$1 = (function (){var statearr_193008 = state_192995;(statearr_193008[13] = inst_192954);
(statearr_193008[12] = inst_192952__$1);
(statearr_193008[14] = inst_192955);
return statearr_193008;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_192995__$1,10,inst_192953);
} else
{if((state_val_192996 === 10))
{var inst_192959 = (state_192995[15]);var inst_192960 = (state_192995[16]);var inst_192958 = (state_192995[2]);var inst_192959__$1 = cljs.core.nth.call(null,inst_192958,0,null);var inst_192960__$1 = cljs.core.nth.call(null,inst_192958,1,null);var inst_192961 = (inst_192959__$1 == null);var inst_192962 = cljs.core._EQ_.call(null,inst_192960__$1,change);var inst_192963 = (inst_192961) || (inst_192962);var state_192995__$1 = (function (){var statearr_193009 = state_192995;(statearr_193009[15] = inst_192959__$1);
(statearr_193009[16] = inst_192960__$1);
return statearr_193009;
})();if(cljs.core.truth_(inst_192963))
{var statearr_193010_193047 = state_192995__$1;(statearr_193010_193047[1] = 11);
} else
{var statearr_193011_193048 = state_192995__$1;(statearr_193011_193048[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 11))
{var inst_192959 = (state_192995[15]);var inst_192965 = (inst_192959 == null);var state_192995__$1 = state_192995;if(cljs.core.truth_(inst_192965))
{var statearr_193012_193049 = state_192995__$1;(statearr_193012_193049[1] = 14);
} else
{var statearr_193013_193050 = state_192995__$1;(statearr_193013_193050[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 12))
{var inst_192974 = (state_192995[17]);var inst_192955 = (state_192995[14]);var inst_192960 = (state_192995[16]);var inst_192974__$1 = inst_192955.call(null,inst_192960);var state_192995__$1 = (function (){var statearr_193014 = state_192995;(statearr_193014[17] = inst_192974__$1);
return statearr_193014;
})();if(cljs.core.truth_(inst_192974__$1))
{var statearr_193015_193051 = state_192995__$1;(statearr_193015_193051[1] = 17);
} else
{var statearr_193016_193052 = state_192995__$1;(statearr_193016_193052[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 13))
{var inst_192991 = (state_192995[2]);var state_192995__$1 = state_192995;var statearr_193017_193053 = state_192995__$1;(statearr_193017_193053[2] = inst_192991);
(statearr_193017_193053[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 14))
{var inst_192960 = (state_192995[16]);var inst_192967 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_192960);var state_192995__$1 = state_192995;var statearr_193018_193054 = state_192995__$1;(statearr_193018_193054[2] = inst_192967);
(statearr_193018_193054[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 15))
{var state_192995__$1 = state_192995;var statearr_193019_193055 = state_192995__$1;(statearr_193019_193055[2] = null);
(statearr_193019_193055[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 16))
{var inst_192970 = (state_192995[2]);var inst_192971 = calc_state.call(null);var inst_192944 = inst_192971;var state_192995__$1 = (function (){var statearr_193020 = state_192995;(statearr_193020[18] = inst_192970);
(statearr_193020[8] = inst_192944);
return statearr_193020;
})();var statearr_193021_193056 = state_192995__$1;(statearr_193021_193056[2] = null);
(statearr_193021_193056[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 17))
{var inst_192974 = (state_192995[17]);var state_192995__$1 = state_192995;var statearr_193022_193057 = state_192995__$1;(statearr_193022_193057[2] = inst_192974);
(statearr_193022_193057[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 18))
{var inst_192954 = (state_192995[13]);var inst_192955 = (state_192995[14]);var inst_192960 = (state_192995[16]);var inst_192977 = cljs.core.empty_QMARK_.call(null,inst_192955);var inst_192978 = inst_192954.call(null,inst_192960);var inst_192979 = cljs.core.not.call(null,inst_192978);var inst_192980 = (inst_192977) && (inst_192979);var state_192995__$1 = state_192995;var statearr_193023_193058 = state_192995__$1;(statearr_193023_193058[2] = inst_192980);
(statearr_193023_193058[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 19))
{var inst_192982 = (state_192995[2]);var state_192995__$1 = state_192995;if(cljs.core.truth_(inst_192982))
{var statearr_193024_193059 = state_192995__$1;(statearr_193024_193059[1] = 20);
} else
{var statearr_193025_193060 = state_192995__$1;(statearr_193025_193060[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 20))
{var inst_192959 = (state_192995[15]);var state_192995__$1 = state_192995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_192995__$1,23,out,inst_192959);
} else
{if((state_val_192996 === 21))
{var state_192995__$1 = state_192995;var statearr_193026_193061 = state_192995__$1;(statearr_193026_193061[2] = null);
(statearr_193026_193061[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 22))
{var inst_192952 = (state_192995[12]);var inst_192988 = (state_192995[2]);var inst_192944 = inst_192952;var state_192995__$1 = (function (){var statearr_193027 = state_192995;(statearr_193027[8] = inst_192944);
(statearr_193027[19] = inst_192988);
return statearr_193027;
})();var statearr_193028_193062 = state_192995__$1;(statearr_193028_193062[2] = null);
(statearr_193028_193062[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_192996 === 23))
{var inst_192985 = (state_192995[2]);var state_192995__$1 = state_192995;var statearr_193029_193063 = state_192995__$1;(statearr_193029_193063[2] = inst_192985);
(statearr_193029_193063[1] = 22);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_193033[0] = state_machine__189143__auto__);
(statearr_193033[1] = 1);
return statearr_193033;
});
var state_machine__189143__auto____1 = (function (state_192995){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_192995);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193034){if((e193034 instanceof Object))
{var ex__189146__auto__ = e193034;var statearr_193035_193064 = state_192995;(statearr_193035_193064[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_192995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193065 = state_192995;
state_192995 = G__193065;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_192995){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_192995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193036 = f__189213__auto__.call(null);(statearr_193036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193037);
return statearr_193036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
cljs.core.async.Pub = (function (){var obj193067 = {};return obj193067;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10846__auto__ = p;if(and__10846__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10846__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__11479__auto__ = (((p == null))?null:p);return (function (){var or__10858__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10846__auto__ = p;if(and__10846__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10846__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__11479__auto__ = (((p == null))?null:p);return (function (){var or__10858__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10846__auto__ = p;if(and__10846__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10846__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__11479__auto__ = (((p == null))?null:p);return (function (){var or__10858__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10846__auto__ = p;if(and__10846__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10846__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__11479__auto__ = (((p == null))?null:p);return (function (){var or__10858__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11479__auto__)]);if(or__10858__auto__)
{return or__10858__auto__;
} else
{var or__10858__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10858__auto____$1)
{return or__10858__auto____$1;
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
return (function (topic){var or__10858__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10858__auto__))
{return or__10858__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10858__auto__,mults){
return (function (p1__193068_SHARP_){if(cljs.core.truth_(p1__193068_SHARP_.call(null,topic)))
{return p1__193068_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__193068_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10858__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t193193 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t193193 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta193194){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta193194 = meta193194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t193193.cljs$lang$type = true;
cljs.core.async.t193193.cljs$lang$ctorStr = "cljs.core.async/t193193";
cljs.core.async.t193193.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11420__auto__,writer__11421__auto__,opt__11422__auto__){return cljs.core._write.call(null,writer__11421__auto__,"cljs.core.async/t193193");
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t193193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t193193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_193195){var self__ = this;
var _193195__$1 = this;return self__.meta193194;
});})(mults,ensure_mult))
;
cljs.core.async.t193193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_193195,meta193194__$1){var self__ = this;
var _193195__$1 = this;return (new cljs.core.async.t193193(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta193194__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t193193 = ((function (mults,ensure_mult){
return (function __GT_t193193(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta193194){return (new cljs.core.async.t193193(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta193194));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t193193(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__189212__auto___193317 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_193269){var state_val_193270 = (state_193269[1]);if((state_val_193270 === 1))
{var state_193269__$1 = state_193269;var statearr_193271_193318 = state_193269__$1;(statearr_193271_193318[2] = null);
(statearr_193271_193318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 2))
{var state_193269__$1 = state_193269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_193269__$1,4,ch);
} else
{if((state_val_193270 === 3))
{var inst_193267 = (state_193269[2]);var state_193269__$1 = state_193269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_193269__$1,inst_193267);
} else
{if((state_val_193270 === 4))
{var inst_193198 = (state_193269[7]);var inst_193198__$1 = (state_193269[2]);var inst_193199 = (inst_193198__$1 == null);var state_193269__$1 = (function (){var statearr_193272 = state_193269;(statearr_193272[7] = inst_193198__$1);
return statearr_193272;
})();if(cljs.core.truth_(inst_193199))
{var statearr_193273_193319 = state_193269__$1;(statearr_193273_193319[1] = 5);
} else
{var statearr_193274_193320 = state_193269__$1;(statearr_193274_193320[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 5))
{var inst_193205 = cljs.core.deref.call(null,mults);var inst_193206 = cljs.core.vals.call(null,inst_193205);var inst_193207 = cljs.core.seq.call(null,inst_193206);var inst_193208 = inst_193207;var inst_193209 = null;var inst_193210 = 0;var inst_193211 = 0;var state_193269__$1 = (function (){var statearr_193275 = state_193269;(statearr_193275[8] = inst_193210);
(statearr_193275[9] = inst_193211);
(statearr_193275[10] = inst_193209);
(statearr_193275[11] = inst_193208);
return statearr_193275;
})();var statearr_193276_193321 = state_193269__$1;(statearr_193276_193321[2] = null);
(statearr_193276_193321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 6))
{var inst_193246 = (state_193269[12]);var inst_193198 = (state_193269[7]);var inst_193248 = (state_193269[13]);var inst_193246__$1 = topic_fn.call(null,inst_193198);var inst_193247 = cljs.core.deref.call(null,mults);var inst_193248__$1 = cljs.core.get.call(null,inst_193247,inst_193246__$1);var state_193269__$1 = (function (){var statearr_193277 = state_193269;(statearr_193277[12] = inst_193246__$1);
(statearr_193277[13] = inst_193248__$1);
return statearr_193277;
})();if(cljs.core.truth_(inst_193248__$1))
{var statearr_193278_193322 = state_193269__$1;(statearr_193278_193322[1] = 19);
} else
{var statearr_193279_193323 = state_193269__$1;(statearr_193279_193323[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 7))
{var inst_193265 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193280_193324 = state_193269__$1;(statearr_193280_193324[2] = inst_193265);
(statearr_193280_193324[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 8))
{var inst_193210 = (state_193269[8]);var inst_193211 = (state_193269[9]);var inst_193213 = (inst_193211 < inst_193210);var inst_193214 = inst_193213;var state_193269__$1 = state_193269;if(cljs.core.truth_(inst_193214))
{var statearr_193284_193325 = state_193269__$1;(statearr_193284_193325[1] = 10);
} else
{var statearr_193285_193326 = state_193269__$1;(statearr_193285_193326[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 9))
{var inst_193244 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193286_193327 = state_193269__$1;(statearr_193286_193327[2] = inst_193244);
(statearr_193286_193327[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 10))
{var inst_193210 = (state_193269[8]);var inst_193211 = (state_193269[9]);var inst_193209 = (state_193269[10]);var inst_193208 = (state_193269[11]);var inst_193216 = cljs.core._nth.call(null,inst_193209,inst_193211);var inst_193217 = cljs.core.async.muxch_STAR_.call(null,inst_193216);var inst_193218 = cljs.core.async.close_BANG_.call(null,inst_193217);var inst_193219 = (inst_193211 + 1);var tmp193281 = inst_193210;var tmp193282 = inst_193209;var tmp193283 = inst_193208;var inst_193208__$1 = tmp193283;var inst_193209__$1 = tmp193282;var inst_193210__$1 = tmp193281;var inst_193211__$1 = inst_193219;var state_193269__$1 = (function (){var statearr_193287 = state_193269;(statearr_193287[8] = inst_193210__$1);
(statearr_193287[9] = inst_193211__$1);
(statearr_193287[10] = inst_193209__$1);
(statearr_193287[11] = inst_193208__$1);
(statearr_193287[14] = inst_193218);
return statearr_193287;
})();var statearr_193288_193328 = state_193269__$1;(statearr_193288_193328[2] = null);
(statearr_193288_193328[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 11))
{var inst_193222 = (state_193269[15]);var inst_193208 = (state_193269[11]);var inst_193222__$1 = cljs.core.seq.call(null,inst_193208);var state_193269__$1 = (function (){var statearr_193289 = state_193269;(statearr_193289[15] = inst_193222__$1);
return statearr_193289;
})();if(inst_193222__$1)
{var statearr_193290_193329 = state_193269__$1;(statearr_193290_193329[1] = 13);
} else
{var statearr_193291_193330 = state_193269__$1;(statearr_193291_193330[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 12))
{var inst_193242 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193292_193331 = state_193269__$1;(statearr_193292_193331[2] = inst_193242);
(statearr_193292_193331[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 13))
{var inst_193222 = (state_193269[15]);var inst_193224 = cljs.core.chunked_seq_QMARK_.call(null,inst_193222);var state_193269__$1 = state_193269;if(inst_193224)
{var statearr_193293_193332 = state_193269__$1;(statearr_193293_193332[1] = 16);
} else
{var statearr_193294_193333 = state_193269__$1;(statearr_193294_193333[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 14))
{var state_193269__$1 = state_193269;var statearr_193295_193334 = state_193269__$1;(statearr_193295_193334[2] = null);
(statearr_193295_193334[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 15))
{var inst_193240 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193296_193335 = state_193269__$1;(statearr_193296_193335[2] = inst_193240);
(statearr_193296_193335[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 16))
{var inst_193222 = (state_193269[15]);var inst_193226 = cljs.core.chunk_first.call(null,inst_193222);var inst_193227 = cljs.core.chunk_rest.call(null,inst_193222);var inst_193228 = cljs.core.count.call(null,inst_193226);var inst_193208 = inst_193227;var inst_193209 = inst_193226;var inst_193210 = inst_193228;var inst_193211 = 0;var state_193269__$1 = (function (){var statearr_193297 = state_193269;(statearr_193297[8] = inst_193210);
(statearr_193297[9] = inst_193211);
(statearr_193297[10] = inst_193209);
(statearr_193297[11] = inst_193208);
return statearr_193297;
})();var statearr_193298_193336 = state_193269__$1;(statearr_193298_193336[2] = null);
(statearr_193298_193336[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 17))
{var inst_193222 = (state_193269[15]);var inst_193231 = cljs.core.first.call(null,inst_193222);var inst_193232 = cljs.core.async.muxch_STAR_.call(null,inst_193231);var inst_193233 = cljs.core.async.close_BANG_.call(null,inst_193232);var inst_193234 = cljs.core.next.call(null,inst_193222);var inst_193208 = inst_193234;var inst_193209 = null;var inst_193210 = 0;var inst_193211 = 0;var state_193269__$1 = (function (){var statearr_193299 = state_193269;(statearr_193299[8] = inst_193210);
(statearr_193299[16] = inst_193233);
(statearr_193299[9] = inst_193211);
(statearr_193299[10] = inst_193209);
(statearr_193299[11] = inst_193208);
return statearr_193299;
})();var statearr_193300_193337 = state_193269__$1;(statearr_193300_193337[2] = null);
(statearr_193300_193337[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 18))
{var inst_193237 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193301_193338 = state_193269__$1;(statearr_193301_193338[2] = inst_193237);
(statearr_193301_193338[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 19))
{var state_193269__$1 = state_193269;var statearr_193302_193339 = state_193269__$1;(statearr_193302_193339[2] = null);
(statearr_193302_193339[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 20))
{var state_193269__$1 = state_193269;var statearr_193303_193340 = state_193269__$1;(statearr_193303_193340[2] = null);
(statearr_193303_193340[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 21))
{var inst_193262 = (state_193269[2]);var state_193269__$1 = (function (){var statearr_193304 = state_193269;(statearr_193304[17] = inst_193262);
return statearr_193304;
})();var statearr_193305_193341 = state_193269__$1;(statearr_193305_193341[2] = null);
(statearr_193305_193341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 22))
{var inst_193259 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193306_193342 = state_193269__$1;(statearr_193306_193342[2] = inst_193259);
(statearr_193306_193342[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 23))
{var inst_193246 = (state_193269[12]);var inst_193250 = (state_193269[2]);var inst_193251 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_193246);var state_193269__$1 = (function (){var statearr_193307 = state_193269;(statearr_193307[18] = inst_193250);
return statearr_193307;
})();var statearr_193308_193343 = state_193269__$1;(statearr_193308_193343[2] = inst_193251);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193269__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193270 === 24))
{var inst_193198 = (state_193269[7]);var inst_193248 = (state_193269[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_193269,23,Object,null,22);var inst_193255 = cljs.core.async.muxch_STAR_.call(null,inst_193248);var state_193269__$1 = state_193269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193269__$1,25,inst_193255,inst_193198);
} else
{if((state_val_193270 === 25))
{var inst_193257 = (state_193269[2]);var state_193269__$1 = state_193269;var statearr_193309_193344 = state_193269__$1;(statearr_193309_193344[2] = inst_193257);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193269__$1);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_193313[0] = state_machine__189143__auto__);
(statearr_193313[1] = 1);
return statearr_193313;
});
var state_machine__189143__auto____1 = (function (state_193269){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_193269);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193314){if((e193314 instanceof Object))
{var ex__189146__auto__ = e193314;var statearr_193315_193345 = state_193269;(statearr_193315_193345[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193346 = state_193269;
state_193269 = G__193346;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_193269){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_193269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193316 = f__189213__auto__.call(null);(statearr_193316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193317);
return statearr_193316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
,cljs.core.range.call(null,cnt));var c__189212__auto___193483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_193453){var state_val_193454 = (state_193453[1]);if((state_val_193454 === 1))
{var state_193453__$1 = state_193453;var statearr_193455_193484 = state_193453__$1;(statearr_193455_193484[2] = null);
(statearr_193455_193484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 2))
{var inst_193416 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_193417 = 0;var state_193453__$1 = (function (){var statearr_193456 = state_193453;(statearr_193456[7] = inst_193417);
(statearr_193456[8] = inst_193416);
return statearr_193456;
})();var statearr_193457_193485 = state_193453__$1;(statearr_193457_193485[2] = null);
(statearr_193457_193485[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 3))
{var inst_193451 = (state_193453[2]);var state_193453__$1 = state_193453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_193453__$1,inst_193451);
} else
{if((state_val_193454 === 4))
{var inst_193417 = (state_193453[7]);var inst_193419 = (inst_193417 < cnt);var state_193453__$1 = state_193453;if(cljs.core.truth_(inst_193419))
{var statearr_193458_193486 = state_193453__$1;(statearr_193458_193486[1] = 6);
} else
{var statearr_193459_193487 = state_193453__$1;(statearr_193459_193487[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 5))
{var inst_193437 = (state_193453[2]);var state_193453__$1 = (function (){var statearr_193460 = state_193453;(statearr_193460[9] = inst_193437);
return statearr_193460;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_193453__$1,12,dchan);
} else
{if((state_val_193454 === 6))
{var state_193453__$1 = state_193453;var statearr_193461_193488 = state_193453__$1;(statearr_193461_193488[2] = null);
(statearr_193461_193488[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 7))
{var state_193453__$1 = state_193453;var statearr_193462_193489 = state_193453__$1;(statearr_193462_193489[2] = null);
(statearr_193462_193489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 8))
{var inst_193435 = (state_193453[2]);var state_193453__$1 = state_193453;var statearr_193463_193490 = state_193453__$1;(statearr_193463_193490[2] = inst_193435);
(statearr_193463_193490[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 9))
{var inst_193417 = (state_193453[7]);var inst_193430 = (state_193453[2]);var inst_193431 = (inst_193417 + 1);var inst_193417__$1 = inst_193431;var state_193453__$1 = (function (){var statearr_193464 = state_193453;(statearr_193464[7] = inst_193417__$1);
(statearr_193464[10] = inst_193430);
return statearr_193464;
})();var statearr_193465_193491 = state_193453__$1;(statearr_193465_193491[2] = null);
(statearr_193465_193491[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 10))
{var inst_193421 = (state_193453[2]);var inst_193422 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_193453__$1 = (function (){var statearr_193466 = state_193453;(statearr_193466[11] = inst_193421);
return statearr_193466;
})();var statearr_193467_193492 = state_193453__$1;(statearr_193467_193492[2] = inst_193422);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193453__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 11))
{var inst_193417 = (state_193453[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_193453,10,Object,null,9);var inst_193426 = chs__$1.call(null,inst_193417);var inst_193427 = done.call(null,inst_193417);var inst_193428 = cljs.core.async.take_BANG_.call(null,inst_193426,inst_193427);var state_193453__$1 = state_193453;var statearr_193468_193493 = state_193453__$1;(statearr_193468_193493[2] = inst_193428);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193453__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 12))
{var inst_193439 = (state_193453[12]);var inst_193439__$1 = (state_193453[2]);var inst_193440 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_193439__$1);var state_193453__$1 = (function (){var statearr_193469 = state_193453;(statearr_193469[12] = inst_193439__$1);
return statearr_193469;
})();if(cljs.core.truth_(inst_193440))
{var statearr_193470_193494 = state_193453__$1;(statearr_193470_193494[1] = 13);
} else
{var statearr_193471_193495 = state_193453__$1;(statearr_193471_193495[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 13))
{var inst_193442 = cljs.core.async.close_BANG_.call(null,out);var state_193453__$1 = state_193453;var statearr_193472_193496 = state_193453__$1;(statearr_193472_193496[2] = inst_193442);
(statearr_193472_193496[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 14))
{var inst_193439 = (state_193453[12]);var inst_193444 = cljs.core.apply.call(null,f,inst_193439);var state_193453__$1 = state_193453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193453__$1,16,out,inst_193444);
} else
{if((state_val_193454 === 15))
{var inst_193449 = (state_193453[2]);var state_193453__$1 = state_193453;var statearr_193473_193497 = state_193453__$1;(statearr_193473_193497[2] = inst_193449);
(statearr_193473_193497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193454 === 16))
{var inst_193446 = (state_193453[2]);var state_193453__$1 = (function (){var statearr_193474 = state_193453;(statearr_193474[13] = inst_193446);
return statearr_193474;
})();var statearr_193475_193498 = state_193453__$1;(statearr_193475_193498[2] = null);
(statearr_193475_193498[1] = 2);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_193479[0] = state_machine__189143__auto__);
(statearr_193479[1] = 1);
return statearr_193479;
});
var state_machine__189143__auto____1 = (function (state_193453){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_193453);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193480){if((e193480 instanceof Object))
{var ex__189146__auto__ = e193480;var statearr_193481_193499 = state_193453;(statearr_193481_193499[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193500 = state_193453;
state_193453 = G__193500;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_193453){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_193453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193482 = f__189213__auto__.call(null);(statearr_193482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193483);
return statearr_193482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__189212__auto___193608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_193584){var state_val_193585 = (state_193584[1]);if((state_val_193585 === 1))
{var inst_193555 = cljs.core.vec.call(null,chs);var inst_193556 = inst_193555;var state_193584__$1 = (function (){var statearr_193586 = state_193584;(statearr_193586[7] = inst_193556);
return statearr_193586;
})();var statearr_193587_193609 = state_193584__$1;(statearr_193587_193609[2] = null);
(statearr_193587_193609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 2))
{var inst_193556 = (state_193584[7]);var inst_193558 = cljs.core.count.call(null,inst_193556);var inst_193559 = (inst_193558 > 0);var state_193584__$1 = state_193584;if(cljs.core.truth_(inst_193559))
{var statearr_193588_193610 = state_193584__$1;(statearr_193588_193610[1] = 4);
} else
{var statearr_193589_193611 = state_193584__$1;(statearr_193589_193611[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 3))
{var inst_193582 = (state_193584[2]);var state_193584__$1 = state_193584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_193584__$1,inst_193582);
} else
{if((state_val_193585 === 4))
{var inst_193556 = (state_193584[7]);var state_193584__$1 = state_193584;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_193584__$1,7,inst_193556);
} else
{if((state_val_193585 === 5))
{var inst_193578 = cljs.core.async.close_BANG_.call(null,out);var state_193584__$1 = state_193584;var statearr_193590_193612 = state_193584__$1;(statearr_193590_193612[2] = inst_193578);
(statearr_193590_193612[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 6))
{var inst_193580 = (state_193584[2]);var state_193584__$1 = state_193584;var statearr_193591_193613 = state_193584__$1;(statearr_193591_193613[2] = inst_193580);
(statearr_193591_193613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 7))
{var inst_193564 = (state_193584[8]);var inst_193563 = (state_193584[9]);var inst_193563__$1 = (state_193584[2]);var inst_193564__$1 = cljs.core.nth.call(null,inst_193563__$1,0,null);var inst_193565 = cljs.core.nth.call(null,inst_193563__$1,1,null);var inst_193566 = (inst_193564__$1 == null);var state_193584__$1 = (function (){var statearr_193592 = state_193584;(statearr_193592[8] = inst_193564__$1);
(statearr_193592[9] = inst_193563__$1);
(statearr_193592[10] = inst_193565);
return statearr_193592;
})();if(cljs.core.truth_(inst_193566))
{var statearr_193593_193614 = state_193584__$1;(statearr_193593_193614[1] = 8);
} else
{var statearr_193594_193615 = state_193584__$1;(statearr_193594_193615[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 8))
{var inst_193556 = (state_193584[7]);var inst_193564 = (state_193584[8]);var inst_193563 = (state_193584[9]);var inst_193565 = (state_193584[10]);var inst_193568 = (function (){var c = inst_193565;var v = inst_193564;var vec__193561 = inst_193563;var cs = inst_193556;return ((function (c,v,vec__193561,cs,inst_193556,inst_193564,inst_193563,inst_193565,state_val_193585){
return (function (p1__193501_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__193501_SHARP_);
});
;})(c,v,vec__193561,cs,inst_193556,inst_193564,inst_193563,inst_193565,state_val_193585))
})();var inst_193569 = cljs.core.filterv.call(null,inst_193568,inst_193556);var inst_193556__$1 = inst_193569;var state_193584__$1 = (function (){var statearr_193595 = state_193584;(statearr_193595[7] = inst_193556__$1);
return statearr_193595;
})();var statearr_193596_193616 = state_193584__$1;(statearr_193596_193616[2] = null);
(statearr_193596_193616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 9))
{var inst_193564 = (state_193584[8]);var state_193584__$1 = state_193584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193584__$1,11,out,inst_193564);
} else
{if((state_val_193585 === 10))
{var inst_193576 = (state_193584[2]);var state_193584__$1 = state_193584;var statearr_193598_193617 = state_193584__$1;(statearr_193598_193617[2] = inst_193576);
(statearr_193598_193617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193585 === 11))
{var inst_193556 = (state_193584[7]);var inst_193573 = (state_193584[2]);var tmp193597 = inst_193556;var inst_193556__$1 = tmp193597;var state_193584__$1 = (function (){var statearr_193599 = state_193584;(statearr_193599[11] = inst_193573);
(statearr_193599[7] = inst_193556__$1);
return statearr_193599;
})();var statearr_193600_193618 = state_193584__$1;(statearr_193600_193618[2] = null);
(statearr_193600_193618[1] = 2);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193604 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_193604[0] = state_machine__189143__auto__);
(statearr_193604[1] = 1);
return statearr_193604;
});
var state_machine__189143__auto____1 = (function (state_193584){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_193584);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193605){if((e193605 instanceof Object))
{var ex__189146__auto__ = e193605;var statearr_193606_193619 = state_193584;(statearr_193606_193619[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193620 = state_193584;
state_193584 = G__193620;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_193584){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_193584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193607 = f__189213__auto__.call(null);(statearr_193607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193608);
return statearr_193607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__189212__auto___193713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_193690){var state_val_193691 = (state_193690[1]);if((state_val_193691 === 1))
{var inst_193667 = 0;var state_193690__$1 = (function (){var statearr_193692 = state_193690;(statearr_193692[7] = inst_193667);
return statearr_193692;
})();var statearr_193693_193714 = state_193690__$1;(statearr_193693_193714[2] = null);
(statearr_193693_193714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 2))
{var inst_193667 = (state_193690[7]);var inst_193669 = (inst_193667 < n);var state_193690__$1 = state_193690;if(cljs.core.truth_(inst_193669))
{var statearr_193694_193715 = state_193690__$1;(statearr_193694_193715[1] = 4);
} else
{var statearr_193695_193716 = state_193690__$1;(statearr_193695_193716[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 3))
{var inst_193687 = (state_193690[2]);var inst_193688 = cljs.core.async.close_BANG_.call(null,out);var state_193690__$1 = (function (){var statearr_193696 = state_193690;(statearr_193696[8] = inst_193687);
return statearr_193696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_193690__$1,inst_193688);
} else
{if((state_val_193691 === 4))
{var state_193690__$1 = state_193690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_193690__$1,7,ch);
} else
{if((state_val_193691 === 5))
{var state_193690__$1 = state_193690;var statearr_193697_193717 = state_193690__$1;(statearr_193697_193717[2] = null);
(statearr_193697_193717[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 6))
{var inst_193685 = (state_193690[2]);var state_193690__$1 = state_193690;var statearr_193698_193718 = state_193690__$1;(statearr_193698_193718[2] = inst_193685);
(statearr_193698_193718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 7))
{var inst_193672 = (state_193690[9]);var inst_193672__$1 = (state_193690[2]);var inst_193673 = (inst_193672__$1 == null);var inst_193674 = cljs.core.not.call(null,inst_193673);var state_193690__$1 = (function (){var statearr_193699 = state_193690;(statearr_193699[9] = inst_193672__$1);
return statearr_193699;
})();if(inst_193674)
{var statearr_193700_193719 = state_193690__$1;(statearr_193700_193719[1] = 8);
} else
{var statearr_193701_193720 = state_193690__$1;(statearr_193701_193720[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 8))
{var inst_193672 = (state_193690[9]);var state_193690__$1 = state_193690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193690__$1,11,out,inst_193672);
} else
{if((state_val_193691 === 9))
{var state_193690__$1 = state_193690;var statearr_193702_193721 = state_193690__$1;(statearr_193702_193721[2] = null);
(statearr_193702_193721[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 10))
{var inst_193682 = (state_193690[2]);var state_193690__$1 = state_193690;var statearr_193703_193722 = state_193690__$1;(statearr_193703_193722[2] = inst_193682);
(statearr_193703_193722[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193691 === 11))
{var inst_193667 = (state_193690[7]);var inst_193677 = (state_193690[2]);var inst_193678 = (inst_193667 + 1);var inst_193667__$1 = inst_193678;var state_193690__$1 = (function (){var statearr_193704 = state_193690;(statearr_193704[7] = inst_193667__$1);
(statearr_193704[10] = inst_193677);
return statearr_193704;
})();var statearr_193705_193723 = state_193690__$1;(statearr_193705_193723[2] = null);
(statearr_193705_193723[1] = 2);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193709 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_193709[0] = state_machine__189143__auto__);
(statearr_193709[1] = 1);
return statearr_193709;
});
var state_machine__189143__auto____1 = (function (state_193690){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_193690);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193710){if((e193710 instanceof Object))
{var ex__189146__auto__ = e193710;var statearr_193711_193724 = state_193690;(statearr_193711_193724[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193725 = state_193690;
state_193690 = G__193725;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_193690){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_193690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193712 = f__189213__auto__.call(null);(statearr_193712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193713);
return statearr_193712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__189212__auto___193822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_193797){var state_val_193798 = (state_193797[1]);if((state_val_193798 === 1))
{var inst_193774 = null;var state_193797__$1 = (function (){var statearr_193799 = state_193797;(statearr_193799[7] = inst_193774);
return statearr_193799;
})();var statearr_193800_193823 = state_193797__$1;(statearr_193800_193823[2] = null);
(statearr_193800_193823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 2))
{var state_193797__$1 = state_193797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_193797__$1,4,ch);
} else
{if((state_val_193798 === 3))
{var inst_193794 = (state_193797[2]);var inst_193795 = cljs.core.async.close_BANG_.call(null,out);var state_193797__$1 = (function (){var statearr_193801 = state_193797;(statearr_193801[8] = inst_193794);
return statearr_193801;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_193797__$1,inst_193795);
} else
{if((state_val_193798 === 4))
{var inst_193777 = (state_193797[9]);var inst_193777__$1 = (state_193797[2]);var inst_193778 = (inst_193777__$1 == null);var inst_193779 = cljs.core.not.call(null,inst_193778);var state_193797__$1 = (function (){var statearr_193802 = state_193797;(statearr_193802[9] = inst_193777__$1);
return statearr_193802;
})();if(inst_193779)
{var statearr_193803_193824 = state_193797__$1;(statearr_193803_193824[1] = 5);
} else
{var statearr_193804_193825 = state_193797__$1;(statearr_193804_193825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 5))
{var inst_193774 = (state_193797[7]);var inst_193777 = (state_193797[9]);var inst_193781 = cljs.core._EQ_.call(null,inst_193777,inst_193774);var state_193797__$1 = state_193797;if(inst_193781)
{var statearr_193805_193826 = state_193797__$1;(statearr_193805_193826[1] = 8);
} else
{var statearr_193806_193827 = state_193797__$1;(statearr_193806_193827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 6))
{var state_193797__$1 = state_193797;var statearr_193808_193828 = state_193797__$1;(statearr_193808_193828[2] = null);
(statearr_193808_193828[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 7))
{var inst_193792 = (state_193797[2]);var state_193797__$1 = state_193797;var statearr_193809_193829 = state_193797__$1;(statearr_193809_193829[2] = inst_193792);
(statearr_193809_193829[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 8))
{var inst_193774 = (state_193797[7]);var tmp193807 = inst_193774;var inst_193774__$1 = tmp193807;var state_193797__$1 = (function (){var statearr_193810 = state_193797;(statearr_193810[7] = inst_193774__$1);
return statearr_193810;
})();var statearr_193811_193830 = state_193797__$1;(statearr_193811_193830[2] = null);
(statearr_193811_193830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 9))
{var inst_193777 = (state_193797[9]);var state_193797__$1 = state_193797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193797__$1,11,out,inst_193777);
} else
{if((state_val_193798 === 10))
{var inst_193789 = (state_193797[2]);var state_193797__$1 = state_193797;var statearr_193812_193831 = state_193797__$1;(statearr_193812_193831[2] = inst_193789);
(statearr_193812_193831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193798 === 11))
{var inst_193777 = (state_193797[9]);var inst_193786 = (state_193797[2]);var inst_193774 = inst_193777;var state_193797__$1 = (function (){var statearr_193813 = state_193797;(statearr_193813[10] = inst_193786);
(statearr_193813[7] = inst_193774);
return statearr_193813;
})();var statearr_193814_193832 = state_193797__$1;(statearr_193814_193832[2] = null);
(statearr_193814_193832[1] = 2);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193818 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_193818[0] = state_machine__189143__auto__);
(statearr_193818[1] = 1);
return statearr_193818;
});
var state_machine__189143__auto____1 = (function (state_193797){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_193797);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193819){if((e193819 instanceof Object))
{var ex__189146__auto__ = e193819;var statearr_193820_193833 = state_193797;(statearr_193820_193833[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193834 = state_193797;
state_193797 = G__193834;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_193797){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_193797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193821 = f__189213__auto__.call(null);(statearr_193821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193822);
return statearr_193821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__189212__auto___193969 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_193939){var state_val_193940 = (state_193939[1]);if((state_val_193940 === 1))
{var inst_193902 = (new Array(n));var inst_193903 = inst_193902;var inst_193904 = 0;var state_193939__$1 = (function (){var statearr_193941 = state_193939;(statearr_193941[7] = inst_193904);
(statearr_193941[8] = inst_193903);
return statearr_193941;
})();var statearr_193942_193970 = state_193939__$1;(statearr_193942_193970[2] = null);
(statearr_193942_193970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 2))
{var state_193939__$1 = state_193939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_193939__$1,4,ch);
} else
{if((state_val_193940 === 3))
{var inst_193937 = (state_193939[2]);var state_193939__$1 = state_193939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_193939__$1,inst_193937);
} else
{if((state_val_193940 === 4))
{var inst_193907 = (state_193939[9]);var inst_193907__$1 = (state_193939[2]);var inst_193908 = (inst_193907__$1 == null);var inst_193909 = cljs.core.not.call(null,inst_193908);var state_193939__$1 = (function (){var statearr_193943 = state_193939;(statearr_193943[9] = inst_193907__$1);
return statearr_193943;
})();if(inst_193909)
{var statearr_193944_193971 = state_193939__$1;(statearr_193944_193971[1] = 5);
} else
{var statearr_193945_193972 = state_193939__$1;(statearr_193945_193972[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 5))
{var inst_193912 = (state_193939[10]);var inst_193904 = (state_193939[7]);var inst_193903 = (state_193939[8]);var inst_193907 = (state_193939[9]);var inst_193911 = (inst_193903[inst_193904] = inst_193907);var inst_193912__$1 = (inst_193904 + 1);var inst_193913 = (inst_193912__$1 < n);var state_193939__$1 = (function (){var statearr_193946 = state_193939;(statearr_193946[10] = inst_193912__$1);
(statearr_193946[11] = inst_193911);
return statearr_193946;
})();if(cljs.core.truth_(inst_193913))
{var statearr_193947_193973 = state_193939__$1;(statearr_193947_193973[1] = 8);
} else
{var statearr_193948_193974 = state_193939__$1;(statearr_193948_193974[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 6))
{var inst_193904 = (state_193939[7]);var inst_193925 = (inst_193904 > 0);var state_193939__$1 = state_193939;if(cljs.core.truth_(inst_193925))
{var statearr_193950_193975 = state_193939__$1;(statearr_193950_193975[1] = 12);
} else
{var statearr_193951_193976 = state_193939__$1;(statearr_193951_193976[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 7))
{var inst_193935 = (state_193939[2]);var state_193939__$1 = state_193939;var statearr_193952_193977 = state_193939__$1;(statearr_193952_193977[2] = inst_193935);
(statearr_193952_193977[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 8))
{var inst_193912 = (state_193939[10]);var inst_193903 = (state_193939[8]);var tmp193949 = inst_193903;var inst_193903__$1 = tmp193949;var inst_193904 = inst_193912;var state_193939__$1 = (function (){var statearr_193953 = state_193939;(statearr_193953[7] = inst_193904);
(statearr_193953[8] = inst_193903__$1);
return statearr_193953;
})();var statearr_193954_193978 = state_193939__$1;(statearr_193954_193978[2] = null);
(statearr_193954_193978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 9))
{var inst_193903 = (state_193939[8]);var inst_193917 = cljs.core.vec.call(null,inst_193903);var state_193939__$1 = state_193939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193939__$1,11,out,inst_193917);
} else
{if((state_val_193940 === 10))
{var inst_193923 = (state_193939[2]);var state_193939__$1 = state_193939;var statearr_193955_193979 = state_193939__$1;(statearr_193955_193979[2] = inst_193923);
(statearr_193955_193979[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 11))
{var inst_193919 = (state_193939[2]);var inst_193920 = (new Array(n));var inst_193903 = inst_193920;var inst_193904 = 0;var state_193939__$1 = (function (){var statearr_193956 = state_193939;(statearr_193956[12] = inst_193919);
(statearr_193956[7] = inst_193904);
(statearr_193956[8] = inst_193903);
return statearr_193956;
})();var statearr_193957_193980 = state_193939__$1;(statearr_193957_193980[2] = null);
(statearr_193957_193980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 12))
{var inst_193903 = (state_193939[8]);var inst_193927 = cljs.core.vec.call(null,inst_193903);var state_193939__$1 = state_193939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_193939__$1,15,out,inst_193927);
} else
{if((state_val_193940 === 13))
{var state_193939__$1 = state_193939;var statearr_193958_193981 = state_193939__$1;(statearr_193958_193981[2] = null);
(statearr_193958_193981[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 14))
{var inst_193932 = (state_193939[2]);var inst_193933 = cljs.core.async.close_BANG_.call(null,out);var state_193939__$1 = (function (){var statearr_193959 = state_193939;(statearr_193959[13] = inst_193932);
return statearr_193959;
})();var statearr_193960_193982 = state_193939__$1;(statearr_193960_193982[2] = inst_193933);
(statearr_193960_193982[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_193940 === 15))
{var inst_193929 = (state_193939[2]);var state_193939__$1 = state_193939;var statearr_193961_193983 = state_193939__$1;(statearr_193961_193983[2] = inst_193929);
(statearr_193961_193983[1] = 14);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_193965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_193965[0] = state_machine__189143__auto__);
(statearr_193965[1] = 1);
return statearr_193965;
});
var state_machine__189143__auto____1 = (function (state_193939){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_193939);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e193966){if((e193966 instanceof Object))
{var ex__189146__auto__ = e193966;var statearr_193967_193984 = state_193939;(statearr_193967_193984[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_193939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e193966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__193985 = state_193939;
state_193939 = G__193985;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_193939){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_193939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_193968 = f__189213__auto__.call(null);(statearr_193968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___193969);
return statearr_193968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__189212__auto___194128 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__189213__auto__ = (function (){var switch__189142__auto__ = (function (state_194098){var state_val_194099 = (state_194098[1]);if((state_val_194099 === 1))
{var inst_194057 = [];var inst_194058 = inst_194057;var inst_194059 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_194098__$1 = (function (){var statearr_194100 = state_194098;(statearr_194100[7] = inst_194059);
(statearr_194100[8] = inst_194058);
return statearr_194100;
})();var statearr_194101_194129 = state_194098__$1;(statearr_194101_194129[2] = null);
(statearr_194101_194129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 2))
{var state_194098__$1 = state_194098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_194098__$1,4,ch);
} else
{if((state_val_194099 === 3))
{var inst_194096 = (state_194098[2]);var state_194098__$1 = state_194098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_194098__$1,inst_194096);
} else
{if((state_val_194099 === 4))
{var inst_194062 = (state_194098[9]);var inst_194062__$1 = (state_194098[2]);var inst_194063 = (inst_194062__$1 == null);var inst_194064 = cljs.core.not.call(null,inst_194063);var state_194098__$1 = (function (){var statearr_194102 = state_194098;(statearr_194102[9] = inst_194062__$1);
return statearr_194102;
})();if(inst_194064)
{var statearr_194103_194130 = state_194098__$1;(statearr_194103_194130[1] = 5);
} else
{var statearr_194104_194131 = state_194098__$1;(statearr_194104_194131[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 5))
{var inst_194066 = (state_194098[10]);var inst_194062 = (state_194098[9]);var inst_194059 = (state_194098[7]);var inst_194066__$1 = f.call(null,inst_194062);var inst_194067 = cljs.core._EQ_.call(null,inst_194066__$1,inst_194059);var inst_194068 = cljs.core.keyword_identical_QMARK_.call(null,inst_194059,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_194069 = (inst_194067) || (inst_194068);var state_194098__$1 = (function (){var statearr_194105 = state_194098;(statearr_194105[10] = inst_194066__$1);
return statearr_194105;
})();if(cljs.core.truth_(inst_194069))
{var statearr_194106_194132 = state_194098__$1;(statearr_194106_194132[1] = 8);
} else
{var statearr_194107_194133 = state_194098__$1;(statearr_194107_194133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 6))
{var inst_194058 = (state_194098[8]);var inst_194083 = inst_194058.length;var inst_194084 = (inst_194083 > 0);var state_194098__$1 = state_194098;if(cljs.core.truth_(inst_194084))
{var statearr_194109_194134 = state_194098__$1;(statearr_194109_194134[1] = 12);
} else
{var statearr_194110_194135 = state_194098__$1;(statearr_194110_194135[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 7))
{var inst_194094 = (state_194098[2]);var state_194098__$1 = state_194098;var statearr_194111_194136 = state_194098__$1;(statearr_194111_194136[2] = inst_194094);
(statearr_194111_194136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 8))
{var inst_194066 = (state_194098[10]);var inst_194062 = (state_194098[9]);var inst_194058 = (state_194098[8]);var inst_194071 = inst_194058.push(inst_194062);var tmp194108 = inst_194058;var inst_194058__$1 = tmp194108;var inst_194059 = inst_194066;var state_194098__$1 = (function (){var statearr_194112 = state_194098;(statearr_194112[11] = inst_194071);
(statearr_194112[7] = inst_194059);
(statearr_194112[8] = inst_194058__$1);
return statearr_194112;
})();var statearr_194113_194137 = state_194098__$1;(statearr_194113_194137[2] = null);
(statearr_194113_194137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 9))
{var inst_194058 = (state_194098[8]);var inst_194074 = cljs.core.vec.call(null,inst_194058);var state_194098__$1 = state_194098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_194098__$1,11,out,inst_194074);
} else
{if((state_val_194099 === 10))
{var inst_194081 = (state_194098[2]);var state_194098__$1 = state_194098;var statearr_194114_194138 = state_194098__$1;(statearr_194114_194138[2] = inst_194081);
(statearr_194114_194138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 11))
{var inst_194066 = (state_194098[10]);var inst_194062 = (state_194098[9]);var inst_194076 = (state_194098[2]);var inst_194077 = [];var inst_194078 = inst_194077.push(inst_194062);var inst_194058 = inst_194077;var inst_194059 = inst_194066;var state_194098__$1 = (function (){var statearr_194115 = state_194098;(statearr_194115[7] = inst_194059);
(statearr_194115[8] = inst_194058);
(statearr_194115[12] = inst_194076);
(statearr_194115[13] = inst_194078);
return statearr_194115;
})();var statearr_194116_194139 = state_194098__$1;(statearr_194116_194139[2] = null);
(statearr_194116_194139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 12))
{var inst_194058 = (state_194098[8]);var inst_194086 = cljs.core.vec.call(null,inst_194058);var state_194098__$1 = state_194098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_194098__$1,15,out,inst_194086);
} else
{if((state_val_194099 === 13))
{var state_194098__$1 = state_194098;var statearr_194117_194140 = state_194098__$1;(statearr_194117_194140[2] = null);
(statearr_194117_194140[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 14))
{var inst_194091 = (state_194098[2]);var inst_194092 = cljs.core.async.close_BANG_.call(null,out);var state_194098__$1 = (function (){var statearr_194118 = state_194098;(statearr_194118[14] = inst_194091);
return statearr_194118;
})();var statearr_194119_194141 = state_194098__$1;(statearr_194119_194141[2] = inst_194092);
(statearr_194119_194141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_194099 === 15))
{var inst_194088 = (state_194098[2]);var state_194098__$1 = state_194098;var statearr_194120_194142 = state_194098__$1;(statearr_194120_194142[2] = inst_194088);
(statearr_194120_194142[1] = 14);
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
});return ((function (switch__189142__auto__){
return (function() {
var state_machine__189143__auto__ = null;
var state_machine__189143__auto____0 = (function (){var statearr_194124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_194124[0] = state_machine__189143__auto__);
(statearr_194124[1] = 1);
return statearr_194124;
});
var state_machine__189143__auto____1 = (function (state_194098){while(true){
var ret_value__189144__auto__ = (function (){try{while(true){
var result__189145__auto__ = switch__189142__auto__.call(null,state_194098);if(cljs.core.keyword_identical_QMARK_.call(null,result__189145__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__189145__auto__;
}
break;
}
}catch (e194125){if((e194125 instanceof Object))
{var ex__189146__auto__ = e194125;var statearr_194126_194143 = state_194098;(statearr_194126_194143[5] = ex__189146__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_194098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e194125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__189144__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__194144 = state_194098;
state_194098 = G__194144;
continue;
}
} else
{return ret_value__189144__auto__;
}
break;
}
});
state_machine__189143__auto__ = function(state_194098){
switch(arguments.length){
case 0:
return state_machine__189143__auto____0.call(this);
case 1:
return state_machine__189143__auto____1.call(this,state_194098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__189143__auto____0;
state_machine__189143__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__189143__auto____1;
return state_machine__189143__auto__;
})()
;})(switch__189142__auto__))
})();var state__189214__auto__ = (function (){var statearr_194127 = f__189213__auto__.call(null);(statearr_194127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__189212__auto___194128);
return statearr_194127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__189214__auto__);
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

//# sourceMappingURL=async.js.map