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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27656 = (function (f,fn_handler,meta27657){
this.f = f;
this.fn_handler = fn_handler;
this.meta27657 = meta27657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27656.cljs$lang$type = true;
cljs.core.async.t27656.cljs$lang$ctorStr = "cljs.core.async/t27656";
cljs.core.async.t27656.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27656");
});
cljs.core.async.t27656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27658){var self__ = this;
var _27658__$1 = this;return self__.meta27657;
});
cljs.core.async.t27656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27658,meta27657__$1){var self__ = this;
var _27658__$1 = this;return (new cljs.core.async.t27656(self__.f,self__.fn_handler,meta27657__$1));
});
cljs.core.async.__GT_t27656 = (function __GT_t27656(f__$1,fn_handler__$1,meta27657){return (new cljs.core.async.t27656(f__$1,fn_handler__$1,meta27657));
});
}
return (new cljs.core.async.t27656(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27660 = buff;if(G__27660)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__27660.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27660.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27660);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27660);
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
{var val_27661 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27661);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_27661);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8692__auto___27662 = n;var x_27663 = 0;while(true){
if((x_27663 < n__8692__auto___27662))
{(a[x_27663] = 0);
{
var G__27664 = (x_27663 + 1);
x_27663 = G__27664;
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
var G__27665 = (i + 1);
i = G__27665;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27669 = (function (flag,alt_flag,meta27670){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27670 = meta27670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27669.cljs$lang$type = true;
cljs.core.async.t27669.cljs$lang$ctorStr = "cljs.core.async/t27669";
cljs.core.async.t27669.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27669");
});
cljs.core.async.t27669.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t27669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t27669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27671){var self__ = this;
var _27671__$1 = this;return self__.meta27670;
});
cljs.core.async.t27669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27671,meta27670__$1){var self__ = this;
var _27671__$1 = this;return (new cljs.core.async.t27669(self__.flag,self__.alt_flag,meta27670__$1));
});
cljs.core.async.__GT_t27669 = (function __GT_t27669(flag__$1,alt_flag__$1,meta27670){return (new cljs.core.async.t27669(flag__$1,alt_flag__$1,meta27670));
});
}
return (new cljs.core.async.t27669(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27675 = (function (cb,flag,alt_handler,meta27676){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27676 = meta27676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27675.cljs$lang$type = true;
cljs.core.async.t27675.cljs$lang$ctorStr = "cljs.core.async/t27675";
cljs.core.async.t27675.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27675");
});
cljs.core.async.t27675.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27677){var self__ = this;
var _27677__$1 = this;return self__.meta27676;
});
cljs.core.async.t27675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27677,meta27676__$1){var self__ = this;
var _27677__$1 = this;return (new cljs.core.async.t27675(self__.cb,self__.flag,self__.alt_handler,meta27676__$1));
});
cljs.core.async.__GT_t27675 = (function __GT_t27675(cb__$1,flag__$1,alt_handler__$1,meta27676){return (new cljs.core.async.t27675(cb__$1,flag__$1,alt_handler__$1,meta27676));
});
}
return (new cljs.core.async.t27675(cb,flag,alt_handler,null));
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
return (function (p1__27678_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27678_SHARP_,port], null));
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
var G__27679 = (i + 1);
i = G__27679;
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
var alts_BANG___delegate = function (ports,p__27680){var map__27682 = p__27680;var map__27682__$1 = ((cljs.core.seq_QMARK_.call(null,map__27682))?cljs.core.apply.call(null,cljs.core.hash_map,map__27682):map__27682);var opts = map__27682__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27680 = null;if (arguments.length > 1) {
  p__27680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27680);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27683){
var ports = cljs.core.first(arglist__27683);
var p__27680 = cljs.core.rest(arglist__27683);
return alts_BANG___delegate(ports,p__27680);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27691 = (function (ch,f,map_LT_,meta27692){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27692 = meta27692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27691.cljs$lang$type = true;
cljs.core.async.t27691.cljs$lang$ctorStr = "cljs.core.async/t27691";
cljs.core.async.t27691.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27691");
});
cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27694 = (function (fn1,_,meta27692,ch,f,map_LT_,meta27695){
this.fn1 = fn1;
this._ = _;
this.meta27692 = meta27692;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27695 = meta27695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27694.cljs$lang$type = true;
cljs.core.async.t27694.cljs$lang$ctorStr = "cljs.core.async/t27694";
cljs.core.async.t27694.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27694");
});
cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__27684_SHARP_){return f1.call(null,(((p1__27684_SHARP_ == null))?null:self__.f.call(null,p1__27684_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t27694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27696){var self__ = this;
var _27696__$1 = this;return self__.meta27695;
});
cljs.core.async.t27694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27696,meta27695__$1){var self__ = this;
var _27696__$1 = this;return (new cljs.core.async.t27694(self__.fn1,self__._,self__.meta27692,self__.ch,self__.f,self__.map_LT_,meta27695__$1));
});
cljs.core.async.__GT_t27694 = (function __GT_t27694(fn1__$1,___$2,meta27692__$1,ch__$2,f__$2,map_LT___$2,meta27695){return (new cljs.core.async.t27694(fn1__$1,___$2,meta27692__$1,ch__$2,f__$2,map_LT___$2,meta27695));
});
}
return (new cljs.core.async.t27694(fn1,___$1,self__.meta27692,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27693){var self__ = this;
var _27693__$1 = this;return self__.meta27692;
});
cljs.core.async.t27691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27693,meta27692__$1){var self__ = this;
var _27693__$1 = this;return (new cljs.core.async.t27691(self__.ch,self__.f,self__.map_LT_,meta27692__$1));
});
cljs.core.async.__GT_t27691 = (function __GT_t27691(ch__$1,f__$1,map_LT___$1,meta27692){return (new cljs.core.async.t27691(ch__$1,f__$1,map_LT___$1,meta27692));
});
}
return (new cljs.core.async.t27691(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27700 = (function (ch,f,map_GT_,meta27701){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27701 = meta27701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27700.cljs$lang$type = true;
cljs.core.async.t27700.cljs$lang$ctorStr = "cljs.core.async/t27700";
cljs.core.async.t27700.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27700");
});
cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27702){var self__ = this;
var _27702__$1 = this;return self__.meta27701;
});
cljs.core.async.t27700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27702,meta27701__$1){var self__ = this;
var _27702__$1 = this;return (new cljs.core.async.t27700(self__.ch,self__.f,self__.map_GT_,meta27701__$1));
});
cljs.core.async.__GT_t27700 = (function __GT_t27700(ch__$1,f__$1,map_GT___$1,meta27701){return (new cljs.core.async.t27700(ch__$1,f__$1,map_GT___$1,meta27701));
});
}
return (new cljs.core.async.t27700(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27706 = (function (ch,p,filter_GT_,meta27707){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27707 = meta27707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27706.cljs$lang$type = true;
cljs.core.async.t27706.cljs$lang$ctorStr = "cljs.core.async/t27706";
cljs.core.async.t27706.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t27706");
});
cljs.core.async.t27706.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t27706.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27706.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27708){var self__ = this;
var _27708__$1 = this;return self__.meta27707;
});
cljs.core.async.t27706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27708,meta27707__$1){var self__ = this;
var _27708__$1 = this;return (new cljs.core.async.t27706(self__.ch,self__.p,self__.filter_GT_,meta27707__$1));
});
cljs.core.async.__GT_t27706 = (function __GT_t27706(ch__$1,p__$1,filter_GT___$1,meta27707){return (new cljs.core.async.t27706(ch__$1,p__$1,filter_GT___$1,meta27707));
});
}
return (new cljs.core.async.t27706(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___27791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_27770){var state_val_27771 = (state_27770[1]);if((state_val_27771 === 1))
{var state_27770__$1 = state_27770;var statearr_27772_27792 = state_27770__$1;(statearr_27772_27792[2] = null);
(statearr_27772_27792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 2))
{var state_27770__$1 = state_27770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27770__$1,4,ch);
} else
{if((state_val_27771 === 3))
{var inst_27768 = (state_27770[2]);var state_27770__$1 = state_27770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27770__$1,inst_27768);
} else
{if((state_val_27771 === 4))
{var inst_27752 = (state_27770[7]);var inst_27752__$1 = (state_27770[2]);var inst_27753 = (inst_27752__$1 == null);var state_27770__$1 = (function (){var statearr_27773 = state_27770;(statearr_27773[7] = inst_27752__$1);
return statearr_27773;
})();if(cljs.core.truth_(inst_27753))
{var statearr_27774_27793 = state_27770__$1;(statearr_27774_27793[1] = 5);
} else
{var statearr_27775_27794 = state_27770__$1;(statearr_27775_27794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 5))
{var inst_27755 = cljs.core.async.close_BANG_.call(null,out);var state_27770__$1 = state_27770;var statearr_27776_27795 = state_27770__$1;(statearr_27776_27795[2] = inst_27755);
(statearr_27776_27795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 6))
{var inst_27752 = (state_27770[7]);var inst_27757 = p.call(null,inst_27752);var state_27770__$1 = state_27770;if(cljs.core.truth_(inst_27757))
{var statearr_27777_27796 = state_27770__$1;(statearr_27777_27796[1] = 8);
} else
{var statearr_27778_27797 = state_27770__$1;(statearr_27778_27797[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 7))
{var inst_27766 = (state_27770[2]);var state_27770__$1 = state_27770;var statearr_27779_27798 = state_27770__$1;(statearr_27779_27798[2] = inst_27766);
(statearr_27779_27798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 8))
{var inst_27752 = (state_27770[7]);var state_27770__$1 = state_27770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27770__$1,11,out,inst_27752);
} else
{if((state_val_27771 === 9))
{var state_27770__$1 = state_27770;var statearr_27780_27799 = state_27770__$1;(statearr_27780_27799[2] = null);
(statearr_27780_27799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 10))
{var inst_27763 = (state_27770[2]);var state_27770__$1 = (function (){var statearr_27781 = state_27770;(statearr_27781[8] = inst_27763);
return statearr_27781;
})();var statearr_27782_27800 = state_27770__$1;(statearr_27782_27800[2] = null);
(statearr_27782_27800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27771 === 11))
{var inst_27760 = (state_27770[2]);var state_27770__$1 = state_27770;var statearr_27783_27801 = state_27770__$1;(statearr_27783_27801[2] = inst_27760);
(statearr_27783_27801[1] = 10);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_27787 = [null,null,null,null,null,null,null,null,null];(statearr_27787[0] = state_machine__12424__auto__);
(statearr_27787[1] = 1);
return statearr_27787;
});
var state_machine__12424__auto____1 = (function (state_27770){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_27770);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e27788){if((e27788 instanceof Object))
{var ex__12427__auto__ = e27788;var statearr_27789_27802 = state_27770;(statearr_27789_27802[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27803 = state_27770;
state_27770 = G__27803;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_27770){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_27770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_27790 = f__12523__auto__.call(null);(statearr_27790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___27791);
return statearr_27790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_27955){var state_val_27956 = (state_27955[1]);if((state_val_27956 === 1))
{var state_27955__$1 = state_27955;var statearr_27957_27994 = state_27955__$1;(statearr_27957_27994[2] = null);
(statearr_27957_27994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 2))
{var state_27955__$1 = state_27955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27955__$1,4,in$);
} else
{if((state_val_27956 === 3))
{var inst_27953 = (state_27955[2]);var state_27955__$1 = state_27955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27955__$1,inst_27953);
} else
{if((state_val_27956 === 4))
{var inst_27901 = (state_27955[7]);var inst_27901__$1 = (state_27955[2]);var inst_27902 = (inst_27901__$1 == null);var state_27955__$1 = (function (){var statearr_27958 = state_27955;(statearr_27958[7] = inst_27901__$1);
return statearr_27958;
})();if(cljs.core.truth_(inst_27902))
{var statearr_27959_27995 = state_27955__$1;(statearr_27959_27995[1] = 5);
} else
{var statearr_27960_27996 = state_27955__$1;(statearr_27960_27996[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 5))
{var inst_27904 = cljs.core.async.close_BANG_.call(null,out);var state_27955__$1 = state_27955;var statearr_27961_27997 = state_27955__$1;(statearr_27961_27997[2] = inst_27904);
(statearr_27961_27997[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 6))
{var inst_27901 = (state_27955[7]);var inst_27906 = f.call(null,inst_27901);var inst_27911 = cljs.core.seq.call(null,inst_27906);var inst_27912 = inst_27911;var inst_27913 = null;var inst_27914 = 0;var inst_27915 = 0;var state_27955__$1 = (function (){var statearr_27962 = state_27955;(statearr_27962[8] = inst_27912);
(statearr_27962[9] = inst_27913);
(statearr_27962[10] = inst_27914);
(statearr_27962[11] = inst_27915);
return statearr_27962;
})();var statearr_27963_27998 = state_27955__$1;(statearr_27963_27998[2] = null);
(statearr_27963_27998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 7))
{var inst_27951 = (state_27955[2]);var state_27955__$1 = state_27955;var statearr_27964_27999 = state_27955__$1;(statearr_27964_27999[2] = inst_27951);
(statearr_27964_27999[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 8))
{var inst_27914 = (state_27955[10]);var inst_27915 = (state_27955[11]);var inst_27917 = (inst_27915 < inst_27914);var inst_27918 = inst_27917;var state_27955__$1 = state_27955;if(cljs.core.truth_(inst_27918))
{var statearr_27965_28000 = state_27955__$1;(statearr_27965_28000[1] = 10);
} else
{var statearr_27966_28001 = state_27955__$1;(statearr_27966_28001[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 9))
{var inst_27948 = (state_27955[2]);var state_27955__$1 = (function (){var statearr_27967 = state_27955;(statearr_27967[12] = inst_27948);
return statearr_27967;
})();var statearr_27968_28002 = state_27955__$1;(statearr_27968_28002[2] = null);
(statearr_27968_28002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 10))
{var inst_27913 = (state_27955[9]);var inst_27915 = (state_27955[11]);var inst_27920 = cljs.core._nth.call(null,inst_27913,inst_27915);var state_27955__$1 = state_27955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27955__$1,13,out,inst_27920);
} else
{if((state_val_27956 === 11))
{var inst_27912 = (state_27955[8]);var inst_27926 = (state_27955[13]);var inst_27926__$1 = cljs.core.seq.call(null,inst_27912);var state_27955__$1 = (function (){var statearr_27972 = state_27955;(statearr_27972[13] = inst_27926__$1);
return statearr_27972;
})();if(inst_27926__$1)
{var statearr_27973_28003 = state_27955__$1;(statearr_27973_28003[1] = 14);
} else
{var statearr_27974_28004 = state_27955__$1;(statearr_27974_28004[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 12))
{var inst_27946 = (state_27955[2]);var state_27955__$1 = state_27955;var statearr_27975_28005 = state_27955__$1;(statearr_27975_28005[2] = inst_27946);
(statearr_27975_28005[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 13))
{var inst_27912 = (state_27955[8]);var inst_27913 = (state_27955[9]);var inst_27914 = (state_27955[10]);var inst_27915 = (state_27955[11]);var inst_27922 = (state_27955[2]);var inst_27923 = (inst_27915 + 1);var tmp27969 = inst_27912;var tmp27970 = inst_27913;var tmp27971 = inst_27914;var inst_27912__$1 = tmp27969;var inst_27913__$1 = tmp27970;var inst_27914__$1 = tmp27971;var inst_27915__$1 = inst_27923;var state_27955__$1 = (function (){var statearr_27976 = state_27955;(statearr_27976[14] = inst_27922);
(statearr_27976[8] = inst_27912__$1);
(statearr_27976[9] = inst_27913__$1);
(statearr_27976[10] = inst_27914__$1);
(statearr_27976[11] = inst_27915__$1);
return statearr_27976;
})();var statearr_27977_28006 = state_27955__$1;(statearr_27977_28006[2] = null);
(statearr_27977_28006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 14))
{var inst_27926 = (state_27955[13]);var inst_27928 = cljs.core.chunked_seq_QMARK_.call(null,inst_27926);var state_27955__$1 = state_27955;if(inst_27928)
{var statearr_27978_28007 = state_27955__$1;(statearr_27978_28007[1] = 17);
} else
{var statearr_27979_28008 = state_27955__$1;(statearr_27979_28008[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 15))
{var state_27955__$1 = state_27955;var statearr_27980_28009 = state_27955__$1;(statearr_27980_28009[2] = null);
(statearr_27980_28009[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 16))
{var inst_27944 = (state_27955[2]);var state_27955__$1 = state_27955;var statearr_27981_28010 = state_27955__$1;(statearr_27981_28010[2] = inst_27944);
(statearr_27981_28010[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 17))
{var inst_27926 = (state_27955[13]);var inst_27930 = cljs.core.chunk_first.call(null,inst_27926);var inst_27931 = cljs.core.chunk_rest.call(null,inst_27926);var inst_27932 = cljs.core.count.call(null,inst_27930);var inst_27912 = inst_27931;var inst_27913 = inst_27930;var inst_27914 = inst_27932;var inst_27915 = 0;var state_27955__$1 = (function (){var statearr_27982 = state_27955;(statearr_27982[8] = inst_27912);
(statearr_27982[9] = inst_27913);
(statearr_27982[10] = inst_27914);
(statearr_27982[11] = inst_27915);
return statearr_27982;
})();var statearr_27983_28011 = state_27955__$1;(statearr_27983_28011[2] = null);
(statearr_27983_28011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 18))
{var inst_27926 = (state_27955[13]);var inst_27935 = cljs.core.first.call(null,inst_27926);var state_27955__$1 = state_27955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27955__$1,20,out,inst_27935);
} else
{if((state_val_27956 === 19))
{var inst_27941 = (state_27955[2]);var state_27955__$1 = state_27955;var statearr_27984_28012 = state_27955__$1;(statearr_27984_28012[2] = inst_27941);
(statearr_27984_28012[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27956 === 20))
{var inst_27926 = (state_27955[13]);var inst_27937 = (state_27955[2]);var inst_27938 = cljs.core.next.call(null,inst_27926);var inst_27912 = inst_27938;var inst_27913 = null;var inst_27914 = 0;var inst_27915 = 0;var state_27955__$1 = (function (){var statearr_27985 = state_27955;(statearr_27985[8] = inst_27912);
(statearr_27985[9] = inst_27913);
(statearr_27985[10] = inst_27914);
(statearr_27985[11] = inst_27915);
(statearr_27985[15] = inst_27937);
return statearr_27985;
})();var statearr_27986_28013 = state_27955__$1;(statearr_27986_28013[2] = null);
(statearr_27986_28013[1] = 8);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_27990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27990[0] = state_machine__12424__auto__);
(statearr_27990[1] = 1);
return statearr_27990;
});
var state_machine__12424__auto____1 = (function (state_27955){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_27955);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e27991){if((e27991 instanceof Object))
{var ex__12427__auto__ = e27991;var statearr_27992_28014 = state_27955;(statearr_27992_28014[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28015 = state_27955;
state_27955 = G__28015;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_27955){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_27955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_27993 = f__12523__auto__.call(null);(statearr_27993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_27993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12522__auto___28096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_28075){var state_val_28076 = (state_28075[1]);if((state_val_28076 === 1))
{var state_28075__$1 = state_28075;var statearr_28077_28097 = state_28075__$1;(statearr_28077_28097[2] = null);
(statearr_28077_28097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 2))
{var state_28075__$1 = state_28075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28075__$1,4,from);
} else
{if((state_val_28076 === 3))
{var inst_28073 = (state_28075[2]);var state_28075__$1 = state_28075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28075__$1,inst_28073);
} else
{if((state_val_28076 === 4))
{var inst_28058 = (state_28075[7]);var inst_28058__$1 = (state_28075[2]);var inst_28059 = (inst_28058__$1 == null);var state_28075__$1 = (function (){var statearr_28078 = state_28075;(statearr_28078[7] = inst_28058__$1);
return statearr_28078;
})();if(cljs.core.truth_(inst_28059))
{var statearr_28079_28098 = state_28075__$1;(statearr_28079_28098[1] = 5);
} else
{var statearr_28080_28099 = state_28075__$1;(statearr_28080_28099[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 5))
{var state_28075__$1 = state_28075;if(cljs.core.truth_(close_QMARK_))
{var statearr_28081_28100 = state_28075__$1;(statearr_28081_28100[1] = 8);
} else
{var statearr_28082_28101 = state_28075__$1;(statearr_28082_28101[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 6))
{var inst_28058 = (state_28075[7]);var state_28075__$1 = state_28075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28075__$1,11,to,inst_28058);
} else
{if((state_val_28076 === 7))
{var inst_28071 = (state_28075[2]);var state_28075__$1 = state_28075;var statearr_28083_28102 = state_28075__$1;(statearr_28083_28102[2] = inst_28071);
(statearr_28083_28102[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 8))
{var inst_28062 = cljs.core.async.close_BANG_.call(null,to);var state_28075__$1 = state_28075;var statearr_28084_28103 = state_28075__$1;(statearr_28084_28103[2] = inst_28062);
(statearr_28084_28103[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 9))
{var state_28075__$1 = state_28075;var statearr_28085_28104 = state_28075__$1;(statearr_28085_28104[2] = null);
(statearr_28085_28104[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 10))
{var inst_28065 = (state_28075[2]);var state_28075__$1 = state_28075;var statearr_28086_28105 = state_28075__$1;(statearr_28086_28105[2] = inst_28065);
(statearr_28086_28105[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28076 === 11))
{var inst_28068 = (state_28075[2]);var state_28075__$1 = (function (){var statearr_28087 = state_28075;(statearr_28087[8] = inst_28068);
return statearr_28087;
})();var statearr_28088_28106 = state_28075__$1;(statearr_28088_28106[2] = null);
(statearr_28088_28106[1] = 2);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_28092 = [null,null,null,null,null,null,null,null,null];(statearr_28092[0] = state_machine__12424__auto__);
(statearr_28092[1] = 1);
return statearr_28092;
});
var state_machine__12424__auto____1 = (function (state_28075){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_28075);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e28093){if((e28093 instanceof Object))
{var ex__12427__auto__ = e28093;var statearr_28094_28107 = state_28075;(statearr_28094_28107[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28075);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28108 = state_28075;
state_28075 = G__28108;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_28075){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_28075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_28095 = f__12523__auto__.call(null);(statearr_28095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___28096);
return statearr_28095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12522__auto___28195 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_28173){var state_val_28174 = (state_28173[1]);if((state_val_28174 === 1))
{var state_28173__$1 = state_28173;var statearr_28175_28196 = state_28173__$1;(statearr_28175_28196[2] = null);
(statearr_28175_28196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 2))
{var state_28173__$1 = state_28173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28173__$1,4,ch);
} else
{if((state_val_28174 === 3))
{var inst_28171 = (state_28173[2]);var state_28173__$1 = state_28173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28173__$1,inst_28171);
} else
{if((state_val_28174 === 4))
{var inst_28154 = (state_28173[7]);var inst_28154__$1 = (state_28173[2]);var inst_28155 = (inst_28154__$1 == null);var state_28173__$1 = (function (){var statearr_28176 = state_28173;(statearr_28176[7] = inst_28154__$1);
return statearr_28176;
})();if(cljs.core.truth_(inst_28155))
{var statearr_28177_28197 = state_28173__$1;(statearr_28177_28197[1] = 5);
} else
{var statearr_28178_28198 = state_28173__$1;(statearr_28178_28198[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 5))
{var inst_28157 = cljs.core.async.close_BANG_.call(null,tc);var inst_28158 = cljs.core.async.close_BANG_.call(null,fc);var state_28173__$1 = (function (){var statearr_28179 = state_28173;(statearr_28179[8] = inst_28157);
return statearr_28179;
})();var statearr_28180_28199 = state_28173__$1;(statearr_28180_28199[2] = inst_28158);
(statearr_28180_28199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 6))
{var inst_28154 = (state_28173[7]);var inst_28160 = p.call(null,inst_28154);var state_28173__$1 = state_28173;if(cljs.core.truth_(inst_28160))
{var statearr_28181_28200 = state_28173__$1;(statearr_28181_28200[1] = 9);
} else
{var statearr_28182_28201 = state_28173__$1;(statearr_28182_28201[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 7))
{var inst_28169 = (state_28173[2]);var state_28173__$1 = state_28173;var statearr_28183_28202 = state_28173__$1;(statearr_28183_28202[2] = inst_28169);
(statearr_28183_28202[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 8))
{var inst_28166 = (state_28173[2]);var state_28173__$1 = (function (){var statearr_28184 = state_28173;(statearr_28184[9] = inst_28166);
return statearr_28184;
})();var statearr_28185_28203 = state_28173__$1;(statearr_28185_28203[2] = null);
(statearr_28185_28203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 9))
{var state_28173__$1 = state_28173;var statearr_28186_28204 = state_28173__$1;(statearr_28186_28204[2] = tc);
(statearr_28186_28204[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 10))
{var state_28173__$1 = state_28173;var statearr_28187_28205 = state_28173__$1;(statearr_28187_28205[2] = fc);
(statearr_28187_28205[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28174 === 11))
{var inst_28154 = (state_28173[7]);var inst_28164 = (state_28173[2]);var state_28173__$1 = state_28173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28173__$1,8,inst_28164,inst_28154);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_28191 = [null,null,null,null,null,null,null,null,null,null];(statearr_28191[0] = state_machine__12424__auto__);
(statearr_28191[1] = 1);
return statearr_28191;
});
var state_machine__12424__auto____1 = (function (state_28173){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_28173);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e28192){if((e28192 instanceof Object))
{var ex__12427__auto__ = e28192;var statearr_28193_28206 = state_28173;(statearr_28193_28206[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28207 = state_28173;
state_28173 = G__28207;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_28173){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_28173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_28194 = f__12523__auto__.call(null);(statearr_28194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___28195);
return statearr_28194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_28254){var state_val_28255 = (state_28254[1]);if((state_val_28255 === 7))
{var inst_28250 = (state_28254[2]);var state_28254__$1 = state_28254;var statearr_28256_28272 = state_28254__$1;(statearr_28256_28272[2] = inst_28250);
(statearr_28256_28272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28255 === 6))
{var inst_28243 = (state_28254[7]);var inst_28240 = (state_28254[8]);var inst_28247 = f.call(null,inst_28240,inst_28243);var inst_28240__$1 = inst_28247;var state_28254__$1 = (function (){var statearr_28257 = state_28254;(statearr_28257[8] = inst_28240__$1);
return statearr_28257;
})();var statearr_28258_28273 = state_28254__$1;(statearr_28258_28273[2] = null);
(statearr_28258_28273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28255 === 5))
{var inst_28240 = (state_28254[8]);var state_28254__$1 = state_28254;var statearr_28259_28274 = state_28254__$1;(statearr_28259_28274[2] = inst_28240);
(statearr_28259_28274[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28255 === 4))
{var inst_28243 = (state_28254[7]);var inst_28243__$1 = (state_28254[2]);var inst_28244 = (inst_28243__$1 == null);var state_28254__$1 = (function (){var statearr_28260 = state_28254;(statearr_28260[7] = inst_28243__$1);
return statearr_28260;
})();if(cljs.core.truth_(inst_28244))
{var statearr_28261_28275 = state_28254__$1;(statearr_28261_28275[1] = 5);
} else
{var statearr_28262_28276 = state_28254__$1;(statearr_28262_28276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28255 === 3))
{var inst_28252 = (state_28254[2]);var state_28254__$1 = state_28254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28254__$1,inst_28252);
} else
{if((state_val_28255 === 2))
{var state_28254__$1 = state_28254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,4,ch);
} else
{if((state_val_28255 === 1))
{var inst_28240 = init;var state_28254__$1 = (function (){var statearr_28263 = state_28254;(statearr_28263[8] = inst_28240);
return statearr_28263;
})();var statearr_28264_28277 = state_28254__$1;(statearr_28264_28277[2] = null);
(statearr_28264_28277[1] = 2);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_28268 = [null,null,null,null,null,null,null,null,null];(statearr_28268[0] = state_machine__12424__auto__);
(statearr_28268[1] = 1);
return statearr_28268;
});
var state_machine__12424__auto____1 = (function (state_28254){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_28254);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e28269){if((e28269 instanceof Object))
{var ex__12427__auto__ = e28269;var statearr_28270_28278 = state_28254;(statearr_28270_28278[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28279 = state_28254;
state_28254 = G__28279;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_28254){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_28254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_28271 = f__12523__auto__.call(null);(statearr_28271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_28271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_28341){var state_val_28342 = (state_28341[1]);if((state_val_28342 === 1))
{var inst_28321 = cljs.core.seq.call(null,coll);var inst_28322 = inst_28321;var state_28341__$1 = (function (){var statearr_28343 = state_28341;(statearr_28343[7] = inst_28322);
return statearr_28343;
})();var statearr_28344_28362 = state_28341__$1;(statearr_28344_28362[2] = null);
(statearr_28344_28362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 2))
{var inst_28322 = (state_28341[7]);var state_28341__$1 = state_28341;if(cljs.core.truth_(inst_28322))
{var statearr_28345_28363 = state_28341__$1;(statearr_28345_28363[1] = 4);
} else
{var statearr_28346_28364 = state_28341__$1;(statearr_28346_28364[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 3))
{var inst_28339 = (state_28341[2]);var state_28341__$1 = state_28341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28341__$1,inst_28339);
} else
{if((state_val_28342 === 4))
{var inst_28322 = (state_28341[7]);var inst_28325 = cljs.core.first.call(null,inst_28322);var state_28341__$1 = state_28341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28341__$1,7,ch,inst_28325);
} else
{if((state_val_28342 === 5))
{var state_28341__$1 = state_28341;if(cljs.core.truth_(close_QMARK_))
{var statearr_28347_28365 = state_28341__$1;(statearr_28347_28365[1] = 8);
} else
{var statearr_28348_28366 = state_28341__$1;(statearr_28348_28366[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 6))
{var inst_28337 = (state_28341[2]);var state_28341__$1 = state_28341;var statearr_28349_28367 = state_28341__$1;(statearr_28349_28367[2] = inst_28337);
(statearr_28349_28367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 7))
{var inst_28322 = (state_28341[7]);var inst_28327 = (state_28341[2]);var inst_28328 = cljs.core.next.call(null,inst_28322);var inst_28322__$1 = inst_28328;var state_28341__$1 = (function (){var statearr_28350 = state_28341;(statearr_28350[7] = inst_28322__$1);
(statearr_28350[8] = inst_28327);
return statearr_28350;
})();var statearr_28351_28368 = state_28341__$1;(statearr_28351_28368[2] = null);
(statearr_28351_28368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 8))
{var inst_28332 = cljs.core.async.close_BANG_.call(null,ch);var state_28341__$1 = state_28341;var statearr_28352_28369 = state_28341__$1;(statearr_28352_28369[2] = inst_28332);
(statearr_28352_28369[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 9))
{var state_28341__$1 = state_28341;var statearr_28353_28370 = state_28341__$1;(statearr_28353_28370[2] = null);
(statearr_28353_28370[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28342 === 10))
{var inst_28335 = (state_28341[2]);var state_28341__$1 = state_28341;var statearr_28354_28371 = state_28341__$1;(statearr_28354_28371[2] = inst_28335);
(statearr_28354_28371[1] = 6);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_28358 = [null,null,null,null,null,null,null,null,null];(statearr_28358[0] = state_machine__12424__auto__);
(statearr_28358[1] = 1);
return statearr_28358;
});
var state_machine__12424__auto____1 = (function (state_28341){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_28341);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e28359){if((e28359 instanceof Object))
{var ex__12427__auto__ = e28359;var statearr_28360_28372 = state_28341;(statearr_28360_28372[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28373 = state_28341;
state_28341 = G__28373;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_28341){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_28341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_28361 = f__12523__auto__.call(null);(statearr_28361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_28361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
}));
return c__12522__auto__;
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
cljs.core.async.Mux = (function (){var obj28375 = {};return obj28375;
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
cljs.core.async.Mult = (function (){var obj28377 = {};return obj28377;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28601 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28601 = (function (cs,ch,mult,meta28602){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28602 = meta28602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28601.cljs$lang$type = true;
cljs.core.async.t28601.cljs$lang$ctorStr = "cljs.core.async/t28601";
cljs.core.async.t28601.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t28601");
});})(cs))
;
cljs.core.async.t28601.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28601.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28601.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28601.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28601.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28603){var self__ = this;
var _28603__$1 = this;return self__.meta28602;
});})(cs))
;
cljs.core.async.t28601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28603,meta28602__$1){var self__ = this;
var _28603__$1 = this;return (new cljs.core.async.t28601(self__.cs,self__.ch,self__.mult,meta28602__$1));
});})(cs))
;
cljs.core.async.__GT_t28601 = ((function (cs){
return (function __GT_t28601(cs__$1,ch__$1,mult__$1,meta28602){return (new cljs.core.async.t28601(cs__$1,ch__$1,mult__$1,meta28602));
});})(cs))
;
}
return (new cljs.core.async.t28601(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12522__auto___28824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_28738){var state_val_28739 = (state_28738[1]);if((state_val_28739 === 32))
{var inst_28682 = (state_28738[7]);var inst_28606 = (state_28738[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28738,31,Object,null,30);var inst_28689 = cljs.core.async.put_BANG_.call(null,inst_28682,inst_28606,done);var state_28738__$1 = state_28738;var statearr_28740_28825 = state_28738__$1;(statearr_28740_28825[2] = inst_28689);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28738__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 1))
{var state_28738__$1 = state_28738;var statearr_28741_28826 = state_28738__$1;(statearr_28741_28826[2] = null);
(statearr_28741_28826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 33))
{var inst_28695 = (state_28738[9]);var inst_28697 = cljs.core.chunked_seq_QMARK_.call(null,inst_28695);var state_28738__$1 = state_28738;if(inst_28697)
{var statearr_28742_28827 = state_28738__$1;(statearr_28742_28827[1] = 36);
} else
{var statearr_28743_28828 = state_28738__$1;(statearr_28743_28828[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 2))
{var state_28738__$1 = state_28738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28738__$1,4,ch);
} else
{if((state_val_28739 === 34))
{var state_28738__$1 = state_28738;var statearr_28744_28829 = state_28738__$1;(statearr_28744_28829[2] = null);
(statearr_28744_28829[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 3))
{var inst_28736 = (state_28738[2]);var state_28738__$1 = state_28738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28738__$1,inst_28736);
} else
{if((state_val_28739 === 35))
{var inst_28720 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28745_28830 = state_28738__$1;(statearr_28745_28830[2] = inst_28720);
(statearr_28745_28830[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 4))
{var inst_28606 = (state_28738[8]);var inst_28606__$1 = (state_28738[2]);var inst_28607 = (inst_28606__$1 == null);var state_28738__$1 = (function (){var statearr_28746 = state_28738;(statearr_28746[8] = inst_28606__$1);
return statearr_28746;
})();if(cljs.core.truth_(inst_28607))
{var statearr_28747_28831 = state_28738__$1;(statearr_28747_28831[1] = 5);
} else
{var statearr_28748_28832 = state_28738__$1;(statearr_28748_28832[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 36))
{var inst_28695 = (state_28738[9]);var inst_28699 = cljs.core.chunk_first.call(null,inst_28695);var inst_28700 = cljs.core.chunk_rest.call(null,inst_28695);var inst_28701 = cljs.core.count.call(null,inst_28699);var inst_28674 = inst_28700;var inst_28675 = inst_28699;var inst_28676 = inst_28701;var inst_28677 = 0;var state_28738__$1 = (function (){var statearr_28749 = state_28738;(statearr_28749[10] = inst_28676);
(statearr_28749[11] = inst_28677);
(statearr_28749[12] = inst_28674);
(statearr_28749[13] = inst_28675);
return statearr_28749;
})();var statearr_28750_28833 = state_28738__$1;(statearr_28750_28833[2] = null);
(statearr_28750_28833[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 5))
{var inst_28613 = cljs.core.deref.call(null,cs);var inst_28614 = cljs.core.seq.call(null,inst_28613);var inst_28615 = inst_28614;var inst_28616 = null;var inst_28617 = 0;var inst_28618 = 0;var state_28738__$1 = (function (){var statearr_28751 = state_28738;(statearr_28751[14] = inst_28615);
(statearr_28751[15] = inst_28616);
(statearr_28751[16] = inst_28617);
(statearr_28751[17] = inst_28618);
return statearr_28751;
})();var statearr_28752_28834 = state_28738__$1;(statearr_28752_28834[2] = null);
(statearr_28752_28834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 37))
{var inst_28695 = (state_28738[9]);var inst_28704 = cljs.core.first.call(null,inst_28695);var state_28738__$1 = (function (){var statearr_28753 = state_28738;(statearr_28753[18] = inst_28704);
return statearr_28753;
})();var statearr_28754_28835 = state_28738__$1;(statearr_28754_28835[2] = null);
(statearr_28754_28835[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 6))
{var inst_28666 = (state_28738[19]);var inst_28665 = cljs.core.deref.call(null,cs);var inst_28666__$1 = cljs.core.keys.call(null,inst_28665);var inst_28667 = cljs.core.count.call(null,inst_28666__$1);var inst_28668 = cljs.core.reset_BANG_.call(null,dctr,inst_28667);var inst_28673 = cljs.core.seq.call(null,inst_28666__$1);var inst_28674 = inst_28673;var inst_28675 = null;var inst_28676 = 0;var inst_28677 = 0;var state_28738__$1 = (function (){var statearr_28755 = state_28738;(statearr_28755[19] = inst_28666__$1);
(statearr_28755[10] = inst_28676);
(statearr_28755[11] = inst_28677);
(statearr_28755[12] = inst_28674);
(statearr_28755[13] = inst_28675);
(statearr_28755[20] = inst_28668);
return statearr_28755;
})();var statearr_28756_28836 = state_28738__$1;(statearr_28756_28836[2] = null);
(statearr_28756_28836[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 38))
{var inst_28717 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28757_28837 = state_28738__$1;(statearr_28757_28837[2] = inst_28717);
(statearr_28757_28837[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 7))
{var inst_28734 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28758_28838 = state_28738__$1;(statearr_28758_28838[2] = inst_28734);
(statearr_28758_28838[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 39))
{var inst_28695 = (state_28738[9]);var inst_28713 = (state_28738[2]);var inst_28714 = cljs.core.next.call(null,inst_28695);var inst_28674 = inst_28714;var inst_28675 = null;var inst_28676 = 0;var inst_28677 = 0;var state_28738__$1 = (function (){var statearr_28759 = state_28738;(statearr_28759[21] = inst_28713);
(statearr_28759[10] = inst_28676);
(statearr_28759[11] = inst_28677);
(statearr_28759[12] = inst_28674);
(statearr_28759[13] = inst_28675);
return statearr_28759;
})();var statearr_28760_28839 = state_28738__$1;(statearr_28760_28839[2] = null);
(statearr_28760_28839[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 8))
{var inst_28617 = (state_28738[16]);var inst_28618 = (state_28738[17]);var inst_28620 = (inst_28618 < inst_28617);var inst_28621 = inst_28620;var state_28738__$1 = state_28738;if(cljs.core.truth_(inst_28621))
{var statearr_28761_28840 = state_28738__$1;(statearr_28761_28840[1] = 10);
} else
{var statearr_28762_28841 = state_28738__$1;(statearr_28762_28841[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 40))
{var inst_28704 = (state_28738[18]);var inst_28705 = (state_28738[2]);var inst_28706 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28707 = cljs.core.async.untap_STAR_.call(null,m,inst_28704);var state_28738__$1 = (function (){var statearr_28763 = state_28738;(statearr_28763[22] = inst_28705);
(statearr_28763[23] = inst_28706);
return statearr_28763;
})();var statearr_28764_28842 = state_28738__$1;(statearr_28764_28842[2] = inst_28707);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28738__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 9))
{var inst_28663 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28765_28843 = state_28738__$1;(statearr_28765_28843[2] = inst_28663);
(statearr_28765_28843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 41))
{var inst_28606 = (state_28738[8]);var inst_28704 = (state_28738[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28738,40,Object,null,39);var inst_28711 = cljs.core.async.put_BANG_.call(null,inst_28704,inst_28606,done);var state_28738__$1 = state_28738;var statearr_28766_28844 = state_28738__$1;(statearr_28766_28844[2] = inst_28711);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28738__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 10))
{var inst_28616 = (state_28738[15]);var inst_28618 = (state_28738[17]);var inst_28624 = cljs.core._nth.call(null,inst_28616,inst_28618);var inst_28625 = cljs.core.nth.call(null,inst_28624,0,null);var inst_28626 = cljs.core.nth.call(null,inst_28624,1,null);var state_28738__$1 = (function (){var statearr_28767 = state_28738;(statearr_28767[24] = inst_28625);
return statearr_28767;
})();if(cljs.core.truth_(inst_28626))
{var statearr_28768_28845 = state_28738__$1;(statearr_28768_28845[1] = 13);
} else
{var statearr_28769_28846 = state_28738__$1;(statearr_28769_28846[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 42))
{var state_28738__$1 = state_28738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28738__$1,45,dchan);
} else
{if((state_val_28739 === 11))
{var inst_28615 = (state_28738[14]);var inst_28635 = (state_28738[25]);var inst_28635__$1 = cljs.core.seq.call(null,inst_28615);var state_28738__$1 = (function (){var statearr_28770 = state_28738;(statearr_28770[25] = inst_28635__$1);
return statearr_28770;
})();if(inst_28635__$1)
{var statearr_28771_28847 = state_28738__$1;(statearr_28771_28847[1] = 16);
} else
{var statearr_28772_28848 = state_28738__$1;(statearr_28772_28848[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 43))
{var state_28738__$1 = state_28738;var statearr_28773_28849 = state_28738__$1;(statearr_28773_28849[2] = null);
(statearr_28773_28849[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 12))
{var inst_28661 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28774_28850 = state_28738__$1;(statearr_28774_28850[2] = inst_28661);
(statearr_28774_28850[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 44))
{var inst_28731 = (state_28738[2]);var state_28738__$1 = (function (){var statearr_28775 = state_28738;(statearr_28775[26] = inst_28731);
return statearr_28775;
})();var statearr_28776_28851 = state_28738__$1;(statearr_28776_28851[2] = null);
(statearr_28776_28851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 13))
{var inst_28625 = (state_28738[24]);var inst_28628 = cljs.core.async.close_BANG_.call(null,inst_28625);var state_28738__$1 = state_28738;var statearr_28777_28852 = state_28738__$1;(statearr_28777_28852[2] = inst_28628);
(statearr_28777_28852[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 45))
{var inst_28728 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28781_28853 = state_28738__$1;(statearr_28781_28853[2] = inst_28728);
(statearr_28781_28853[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 14))
{var state_28738__$1 = state_28738;var statearr_28782_28854 = state_28738__$1;(statearr_28782_28854[2] = null);
(statearr_28782_28854[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 15))
{var inst_28615 = (state_28738[14]);var inst_28616 = (state_28738[15]);var inst_28617 = (state_28738[16]);var inst_28618 = (state_28738[17]);var inst_28631 = (state_28738[2]);var inst_28632 = (inst_28618 + 1);var tmp28778 = inst_28615;var tmp28779 = inst_28616;var tmp28780 = inst_28617;var inst_28615__$1 = tmp28778;var inst_28616__$1 = tmp28779;var inst_28617__$1 = tmp28780;var inst_28618__$1 = inst_28632;var state_28738__$1 = (function (){var statearr_28783 = state_28738;(statearr_28783[14] = inst_28615__$1);
(statearr_28783[27] = inst_28631);
(statearr_28783[15] = inst_28616__$1);
(statearr_28783[16] = inst_28617__$1);
(statearr_28783[17] = inst_28618__$1);
return statearr_28783;
})();var statearr_28784_28855 = state_28738__$1;(statearr_28784_28855[2] = null);
(statearr_28784_28855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 16))
{var inst_28635 = (state_28738[25]);var inst_28637 = cljs.core.chunked_seq_QMARK_.call(null,inst_28635);var state_28738__$1 = state_28738;if(inst_28637)
{var statearr_28785_28856 = state_28738__$1;(statearr_28785_28856[1] = 19);
} else
{var statearr_28786_28857 = state_28738__$1;(statearr_28786_28857[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 17))
{var state_28738__$1 = state_28738;var statearr_28787_28858 = state_28738__$1;(statearr_28787_28858[2] = null);
(statearr_28787_28858[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 18))
{var inst_28659 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28788_28859 = state_28738__$1;(statearr_28788_28859[2] = inst_28659);
(statearr_28788_28859[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 19))
{var inst_28635 = (state_28738[25]);var inst_28639 = cljs.core.chunk_first.call(null,inst_28635);var inst_28640 = cljs.core.chunk_rest.call(null,inst_28635);var inst_28641 = cljs.core.count.call(null,inst_28639);var inst_28615 = inst_28640;var inst_28616 = inst_28639;var inst_28617 = inst_28641;var inst_28618 = 0;var state_28738__$1 = (function (){var statearr_28789 = state_28738;(statearr_28789[14] = inst_28615);
(statearr_28789[15] = inst_28616);
(statearr_28789[16] = inst_28617);
(statearr_28789[17] = inst_28618);
return statearr_28789;
})();var statearr_28790_28860 = state_28738__$1;(statearr_28790_28860[2] = null);
(statearr_28790_28860[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 20))
{var inst_28635 = (state_28738[25]);var inst_28645 = cljs.core.first.call(null,inst_28635);var inst_28646 = cljs.core.nth.call(null,inst_28645,0,null);var inst_28647 = cljs.core.nth.call(null,inst_28645,1,null);var state_28738__$1 = (function (){var statearr_28791 = state_28738;(statearr_28791[28] = inst_28646);
return statearr_28791;
})();if(cljs.core.truth_(inst_28647))
{var statearr_28792_28861 = state_28738__$1;(statearr_28792_28861[1] = 22);
} else
{var statearr_28793_28862 = state_28738__$1;(statearr_28793_28862[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 21))
{var inst_28656 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28794_28863 = state_28738__$1;(statearr_28794_28863[2] = inst_28656);
(statearr_28794_28863[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 22))
{var inst_28646 = (state_28738[28]);var inst_28649 = cljs.core.async.close_BANG_.call(null,inst_28646);var state_28738__$1 = state_28738;var statearr_28795_28864 = state_28738__$1;(statearr_28795_28864[2] = inst_28649);
(statearr_28795_28864[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 23))
{var state_28738__$1 = state_28738;var statearr_28796_28865 = state_28738__$1;(statearr_28796_28865[2] = null);
(statearr_28796_28865[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 24))
{var inst_28635 = (state_28738[25]);var inst_28652 = (state_28738[2]);var inst_28653 = cljs.core.next.call(null,inst_28635);var inst_28615 = inst_28653;var inst_28616 = null;var inst_28617 = 0;var inst_28618 = 0;var state_28738__$1 = (function (){var statearr_28797 = state_28738;(statearr_28797[14] = inst_28615);
(statearr_28797[29] = inst_28652);
(statearr_28797[15] = inst_28616);
(statearr_28797[16] = inst_28617);
(statearr_28797[17] = inst_28618);
return statearr_28797;
})();var statearr_28798_28866 = state_28738__$1;(statearr_28798_28866[2] = null);
(statearr_28798_28866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 25))
{var inst_28676 = (state_28738[10]);var inst_28677 = (state_28738[11]);var inst_28679 = (inst_28677 < inst_28676);var inst_28680 = inst_28679;var state_28738__$1 = state_28738;if(cljs.core.truth_(inst_28680))
{var statearr_28799_28867 = state_28738__$1;(statearr_28799_28867[1] = 27);
} else
{var statearr_28800_28868 = state_28738__$1;(statearr_28800_28868[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 26))
{var inst_28666 = (state_28738[19]);var inst_28724 = (state_28738[2]);var inst_28725 = cljs.core.seq.call(null,inst_28666);var state_28738__$1 = (function (){var statearr_28801 = state_28738;(statearr_28801[30] = inst_28724);
return statearr_28801;
})();if(inst_28725)
{var statearr_28802_28869 = state_28738__$1;(statearr_28802_28869[1] = 42);
} else
{var statearr_28803_28870 = state_28738__$1;(statearr_28803_28870[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 27))
{var inst_28677 = (state_28738[11]);var inst_28675 = (state_28738[13]);var inst_28682 = cljs.core._nth.call(null,inst_28675,inst_28677);var state_28738__$1 = (function (){var statearr_28804 = state_28738;(statearr_28804[7] = inst_28682);
return statearr_28804;
})();var statearr_28805_28871 = state_28738__$1;(statearr_28805_28871[2] = null);
(statearr_28805_28871[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 28))
{var inst_28695 = (state_28738[9]);var inst_28674 = (state_28738[12]);var inst_28695__$1 = cljs.core.seq.call(null,inst_28674);var state_28738__$1 = (function (){var statearr_28809 = state_28738;(statearr_28809[9] = inst_28695__$1);
return statearr_28809;
})();if(inst_28695__$1)
{var statearr_28810_28872 = state_28738__$1;(statearr_28810_28872[1] = 33);
} else
{var statearr_28811_28873 = state_28738__$1;(statearr_28811_28873[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 29))
{var inst_28722 = (state_28738[2]);var state_28738__$1 = state_28738;var statearr_28812_28874 = state_28738__$1;(statearr_28812_28874[2] = inst_28722);
(statearr_28812_28874[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 30))
{var inst_28676 = (state_28738[10]);var inst_28677 = (state_28738[11]);var inst_28674 = (state_28738[12]);var inst_28675 = (state_28738[13]);var inst_28691 = (state_28738[2]);var inst_28692 = (inst_28677 + 1);var tmp28806 = inst_28676;var tmp28807 = inst_28674;var tmp28808 = inst_28675;var inst_28674__$1 = tmp28807;var inst_28675__$1 = tmp28808;var inst_28676__$1 = tmp28806;var inst_28677__$1 = inst_28692;var state_28738__$1 = (function (){var statearr_28813 = state_28738;(statearr_28813[31] = inst_28691);
(statearr_28813[10] = inst_28676__$1);
(statearr_28813[11] = inst_28677__$1);
(statearr_28813[12] = inst_28674__$1);
(statearr_28813[13] = inst_28675__$1);
return statearr_28813;
})();var statearr_28814_28875 = state_28738__$1;(statearr_28814_28875[2] = null);
(statearr_28814_28875[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28739 === 31))
{var inst_28682 = (state_28738[7]);var inst_28683 = (state_28738[2]);var inst_28684 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28685 = cljs.core.async.untap_STAR_.call(null,m,inst_28682);var state_28738__$1 = (function (){var statearr_28815 = state_28738;(statearr_28815[32] = inst_28684);
(statearr_28815[33] = inst_28683);
return statearr_28815;
})();var statearr_28816_28876 = state_28738__$1;(statearr_28816_28876[2] = inst_28685);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28738__$1);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_28820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28820[0] = state_machine__12424__auto__);
(statearr_28820[1] = 1);
return statearr_28820;
});
var state_machine__12424__auto____1 = (function (state_28738){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_28738);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e28821){if((e28821 instanceof Object))
{var ex__12427__auto__ = e28821;var statearr_28822_28877 = state_28738;(statearr_28822_28877[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28738);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28878 = state_28738;
state_28738 = G__28878;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_28738){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_28738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_28823 = f__12523__auto__.call(null);(statearr_28823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___28824);
return statearr_28823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
cljs.core.async.Mix = (function (){var obj28880 = {};return obj28880;
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
;var m = (function (){if(typeof cljs.core.async.t28990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28990 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta28991){
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
this.meta28991 = meta28991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28990.cljs$lang$type = true;
cljs.core.async.t28990.cljs$lang$ctorStr = "cljs.core.async/t28990";
cljs.core.async.t28990.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t28990");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28990.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28992){var self__ = this;
var _28992__$1 = this;return self__.meta28991;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28992,meta28991__$1){var self__ = this;
var _28992__$1 = this;return (new cljs.core.async.t28990(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta28991__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28990 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28990(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta28991){return (new cljs.core.async.t28990(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta28991));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28990(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12522__auto___29099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_29057){var state_val_29058 = (state_29057[1]);if((state_val_29058 === 1))
{var inst_28996 = (state_29057[7]);var inst_28996__$1 = calc_state.call(null);var inst_28997 = cljs.core.seq_QMARK_.call(null,inst_28996__$1);var state_29057__$1 = (function (){var statearr_29059 = state_29057;(statearr_29059[7] = inst_28996__$1);
return statearr_29059;
})();if(inst_28997)
{var statearr_29060_29100 = state_29057__$1;(statearr_29060_29100[1] = 2);
} else
{var statearr_29061_29101 = state_29057__$1;(statearr_29061_29101[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 2))
{var inst_28996 = (state_29057[7]);var inst_28999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28996);var state_29057__$1 = state_29057;var statearr_29062_29102 = state_29057__$1;(statearr_29062_29102[2] = inst_28999);
(statearr_29062_29102[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 3))
{var inst_28996 = (state_29057[7]);var state_29057__$1 = state_29057;var statearr_29063_29103 = state_29057__$1;(statearr_29063_29103[2] = inst_28996);
(statearr_29063_29103[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 4))
{var inst_28996 = (state_29057[7]);var inst_29002 = (state_29057[2]);var inst_29003 = cljs.core.get.call(null,inst_29002,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_29004 = cljs.core.get.call(null,inst_29002,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_29005 = cljs.core.get.call(null,inst_29002,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_29006 = inst_28996;var state_29057__$1 = (function (){var statearr_29064 = state_29057;(statearr_29064[8] = inst_29006);
(statearr_29064[9] = inst_29004);
(statearr_29064[10] = inst_29005);
(statearr_29064[11] = inst_29003);
return statearr_29064;
})();var statearr_29065_29104 = state_29057__$1;(statearr_29065_29104[2] = null);
(statearr_29065_29104[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 5))
{var inst_29006 = (state_29057[8]);var inst_29009 = cljs.core.seq_QMARK_.call(null,inst_29006);var state_29057__$1 = state_29057;if(inst_29009)
{var statearr_29066_29105 = state_29057__$1;(statearr_29066_29105[1] = 7);
} else
{var statearr_29067_29106 = state_29057__$1;(statearr_29067_29106[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 6))
{var inst_29055 = (state_29057[2]);var state_29057__$1 = state_29057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29057__$1,inst_29055);
} else
{if((state_val_29058 === 7))
{var inst_29006 = (state_29057[8]);var inst_29011 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29006);var state_29057__$1 = state_29057;var statearr_29068_29107 = state_29057__$1;(statearr_29068_29107[2] = inst_29011);
(statearr_29068_29107[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 8))
{var inst_29006 = (state_29057[8]);var state_29057__$1 = state_29057;var statearr_29069_29108 = state_29057__$1;(statearr_29069_29108[2] = inst_29006);
(statearr_29069_29108[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 9))
{var inst_29014 = (state_29057[12]);var inst_29014__$1 = (state_29057[2]);var inst_29015 = cljs.core.get.call(null,inst_29014__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_29016 = cljs.core.get.call(null,inst_29014__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_29017 = cljs.core.get.call(null,inst_29014__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_29057__$1 = (function (){var statearr_29070 = state_29057;(statearr_29070[13] = inst_29017);
(statearr_29070[14] = inst_29016);
(statearr_29070[12] = inst_29014__$1);
return statearr_29070;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29057__$1,10,inst_29015);
} else
{if((state_val_29058 === 10))
{var inst_29022 = (state_29057[15]);var inst_29021 = (state_29057[16]);var inst_29020 = (state_29057[2]);var inst_29021__$1 = cljs.core.nth.call(null,inst_29020,0,null);var inst_29022__$1 = cljs.core.nth.call(null,inst_29020,1,null);var inst_29023 = (inst_29021__$1 == null);var inst_29024 = cljs.core._EQ_.call(null,inst_29022__$1,change);var inst_29025 = (inst_29023) || (inst_29024);var state_29057__$1 = (function (){var statearr_29071 = state_29057;(statearr_29071[15] = inst_29022__$1);
(statearr_29071[16] = inst_29021__$1);
return statearr_29071;
})();if(cljs.core.truth_(inst_29025))
{var statearr_29072_29109 = state_29057__$1;(statearr_29072_29109[1] = 11);
} else
{var statearr_29073_29110 = state_29057__$1;(statearr_29073_29110[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 11))
{var inst_29021 = (state_29057[16]);var inst_29027 = (inst_29021 == null);var state_29057__$1 = state_29057;if(cljs.core.truth_(inst_29027))
{var statearr_29074_29111 = state_29057__$1;(statearr_29074_29111[1] = 14);
} else
{var statearr_29075_29112 = state_29057__$1;(statearr_29075_29112[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 12))
{var inst_29017 = (state_29057[13]);var inst_29022 = (state_29057[15]);var inst_29036 = (state_29057[17]);var inst_29036__$1 = inst_29017.call(null,inst_29022);var state_29057__$1 = (function (){var statearr_29076 = state_29057;(statearr_29076[17] = inst_29036__$1);
return statearr_29076;
})();if(cljs.core.truth_(inst_29036__$1))
{var statearr_29077_29113 = state_29057__$1;(statearr_29077_29113[1] = 17);
} else
{var statearr_29078_29114 = state_29057__$1;(statearr_29078_29114[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 13))
{var inst_29053 = (state_29057[2]);var state_29057__$1 = state_29057;var statearr_29079_29115 = state_29057__$1;(statearr_29079_29115[2] = inst_29053);
(statearr_29079_29115[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 14))
{var inst_29022 = (state_29057[15]);var inst_29029 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29022);var state_29057__$1 = state_29057;var statearr_29080_29116 = state_29057__$1;(statearr_29080_29116[2] = inst_29029);
(statearr_29080_29116[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 15))
{var state_29057__$1 = state_29057;var statearr_29081_29117 = state_29057__$1;(statearr_29081_29117[2] = null);
(statearr_29081_29117[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 16))
{var inst_29032 = (state_29057[2]);var inst_29033 = calc_state.call(null);var inst_29006 = inst_29033;var state_29057__$1 = (function (){var statearr_29082 = state_29057;(statearr_29082[18] = inst_29032);
(statearr_29082[8] = inst_29006);
return statearr_29082;
})();var statearr_29083_29118 = state_29057__$1;(statearr_29083_29118[2] = null);
(statearr_29083_29118[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 17))
{var inst_29036 = (state_29057[17]);var state_29057__$1 = state_29057;var statearr_29084_29119 = state_29057__$1;(statearr_29084_29119[2] = inst_29036);
(statearr_29084_29119[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 18))
{var inst_29017 = (state_29057[13]);var inst_29016 = (state_29057[14]);var inst_29022 = (state_29057[15]);var inst_29039 = cljs.core.empty_QMARK_.call(null,inst_29017);var inst_29040 = inst_29016.call(null,inst_29022);var inst_29041 = cljs.core.not.call(null,inst_29040);var inst_29042 = (inst_29039) && (inst_29041);var state_29057__$1 = state_29057;var statearr_29085_29120 = state_29057__$1;(statearr_29085_29120[2] = inst_29042);
(statearr_29085_29120[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 19))
{var inst_29044 = (state_29057[2]);var state_29057__$1 = state_29057;if(cljs.core.truth_(inst_29044))
{var statearr_29086_29121 = state_29057__$1;(statearr_29086_29121[1] = 20);
} else
{var statearr_29087_29122 = state_29057__$1;(statearr_29087_29122[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 20))
{var inst_29021 = (state_29057[16]);var state_29057__$1 = state_29057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29057__$1,23,out,inst_29021);
} else
{if((state_val_29058 === 21))
{var state_29057__$1 = state_29057;var statearr_29088_29123 = state_29057__$1;(statearr_29088_29123[2] = null);
(statearr_29088_29123[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 22))
{var inst_29014 = (state_29057[12]);var inst_29050 = (state_29057[2]);var inst_29006 = inst_29014;var state_29057__$1 = (function (){var statearr_29089 = state_29057;(statearr_29089[19] = inst_29050);
(statearr_29089[8] = inst_29006);
return statearr_29089;
})();var statearr_29090_29124 = state_29057__$1;(statearr_29090_29124[2] = null);
(statearr_29090_29124[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 23))
{var inst_29047 = (state_29057[2]);var state_29057__$1 = state_29057;var statearr_29091_29125 = state_29057__$1;(statearr_29091_29125[2] = inst_29047);
(statearr_29091_29125[1] = 22);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_29095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29095[0] = state_machine__12424__auto__);
(statearr_29095[1] = 1);
return statearr_29095;
});
var state_machine__12424__auto____1 = (function (state_29057){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_29057);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e29096){if((e29096 instanceof Object))
{var ex__12427__auto__ = e29096;var statearr_29097_29126 = state_29057;(statearr_29097_29126[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29127 = state_29057;
state_29057 = G__29127;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_29057){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_29057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_29098 = f__12523__auto__.call(null);(statearr_29098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___29099);
return statearr_29098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
cljs.core.async.Pub = (function (){var obj29129 = {};return obj29129;
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
return (function (p1__29130_SHARP_){if(cljs.core.truth_(p1__29130_SHARP_.call(null,topic)))
{return p1__29130_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29130_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7850__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29255 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29256){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29256 = meta29256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29255.cljs$lang$type = true;
cljs.core.async.t29255.cljs$lang$ctorStr = "cljs.core.async/t29255";
cljs.core.async.t29255.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t29255");
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29255.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29257){var self__ = this;
var _29257__$1 = this;return self__.meta29256;
});})(mults,ensure_mult))
;
cljs.core.async.t29255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29257,meta29256__$1){var self__ = this;
var _29257__$1 = this;return (new cljs.core.async.t29255(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29256__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29255 = ((function (mults,ensure_mult){
return (function __GT_t29255(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29256){return (new cljs.core.async.t29255(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29256));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29255(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12522__auto___29379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_29331){var state_val_29332 = (state_29331[1]);if((state_val_29332 === 1))
{var state_29331__$1 = state_29331;var statearr_29333_29380 = state_29331__$1;(statearr_29333_29380[2] = null);
(statearr_29333_29380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 2))
{var state_29331__$1 = state_29331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29331__$1,4,ch);
} else
{if((state_val_29332 === 3))
{var inst_29329 = (state_29331[2]);var state_29331__$1 = state_29331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29331__$1,inst_29329);
} else
{if((state_val_29332 === 4))
{var inst_29260 = (state_29331[7]);var inst_29260__$1 = (state_29331[2]);var inst_29261 = (inst_29260__$1 == null);var state_29331__$1 = (function (){var statearr_29334 = state_29331;(statearr_29334[7] = inst_29260__$1);
return statearr_29334;
})();if(cljs.core.truth_(inst_29261))
{var statearr_29335_29381 = state_29331__$1;(statearr_29335_29381[1] = 5);
} else
{var statearr_29336_29382 = state_29331__$1;(statearr_29336_29382[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 5))
{var inst_29267 = cljs.core.deref.call(null,mults);var inst_29268 = cljs.core.vals.call(null,inst_29267);var inst_29269 = cljs.core.seq.call(null,inst_29268);var inst_29270 = inst_29269;var inst_29271 = null;var inst_29272 = 0;var inst_29273 = 0;var state_29331__$1 = (function (){var statearr_29337 = state_29331;(statearr_29337[8] = inst_29271);
(statearr_29337[9] = inst_29270);
(statearr_29337[10] = inst_29272);
(statearr_29337[11] = inst_29273);
return statearr_29337;
})();var statearr_29338_29383 = state_29331__$1;(statearr_29338_29383[2] = null);
(statearr_29338_29383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 6))
{var inst_29308 = (state_29331[12]);var inst_29260 = (state_29331[7]);var inst_29310 = (state_29331[13]);var inst_29308__$1 = topic_fn.call(null,inst_29260);var inst_29309 = cljs.core.deref.call(null,mults);var inst_29310__$1 = cljs.core.get.call(null,inst_29309,inst_29308__$1);var state_29331__$1 = (function (){var statearr_29339 = state_29331;(statearr_29339[12] = inst_29308__$1);
(statearr_29339[13] = inst_29310__$1);
return statearr_29339;
})();if(cljs.core.truth_(inst_29310__$1))
{var statearr_29340_29384 = state_29331__$1;(statearr_29340_29384[1] = 19);
} else
{var statearr_29341_29385 = state_29331__$1;(statearr_29341_29385[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 7))
{var inst_29327 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29342_29386 = state_29331__$1;(statearr_29342_29386[2] = inst_29327);
(statearr_29342_29386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 8))
{var inst_29272 = (state_29331[10]);var inst_29273 = (state_29331[11]);var inst_29275 = (inst_29273 < inst_29272);var inst_29276 = inst_29275;var state_29331__$1 = state_29331;if(cljs.core.truth_(inst_29276))
{var statearr_29346_29387 = state_29331__$1;(statearr_29346_29387[1] = 10);
} else
{var statearr_29347_29388 = state_29331__$1;(statearr_29347_29388[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 9))
{var inst_29306 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29348_29389 = state_29331__$1;(statearr_29348_29389[2] = inst_29306);
(statearr_29348_29389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 10))
{var inst_29271 = (state_29331[8]);var inst_29270 = (state_29331[9]);var inst_29272 = (state_29331[10]);var inst_29273 = (state_29331[11]);var inst_29278 = cljs.core._nth.call(null,inst_29271,inst_29273);var inst_29279 = cljs.core.async.muxch_STAR_.call(null,inst_29278);var inst_29280 = cljs.core.async.close_BANG_.call(null,inst_29279);var inst_29281 = (inst_29273 + 1);var tmp29343 = inst_29271;var tmp29344 = inst_29270;var tmp29345 = inst_29272;var inst_29270__$1 = tmp29344;var inst_29271__$1 = tmp29343;var inst_29272__$1 = tmp29345;var inst_29273__$1 = inst_29281;var state_29331__$1 = (function (){var statearr_29349 = state_29331;(statearr_29349[14] = inst_29280);
(statearr_29349[8] = inst_29271__$1);
(statearr_29349[9] = inst_29270__$1);
(statearr_29349[10] = inst_29272__$1);
(statearr_29349[11] = inst_29273__$1);
return statearr_29349;
})();var statearr_29350_29390 = state_29331__$1;(statearr_29350_29390[2] = null);
(statearr_29350_29390[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 11))
{var inst_29284 = (state_29331[15]);var inst_29270 = (state_29331[9]);var inst_29284__$1 = cljs.core.seq.call(null,inst_29270);var state_29331__$1 = (function (){var statearr_29351 = state_29331;(statearr_29351[15] = inst_29284__$1);
return statearr_29351;
})();if(inst_29284__$1)
{var statearr_29352_29391 = state_29331__$1;(statearr_29352_29391[1] = 13);
} else
{var statearr_29353_29392 = state_29331__$1;(statearr_29353_29392[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 12))
{var inst_29304 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29354_29393 = state_29331__$1;(statearr_29354_29393[2] = inst_29304);
(statearr_29354_29393[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 13))
{var inst_29284 = (state_29331[15]);var inst_29286 = cljs.core.chunked_seq_QMARK_.call(null,inst_29284);var state_29331__$1 = state_29331;if(inst_29286)
{var statearr_29355_29394 = state_29331__$1;(statearr_29355_29394[1] = 16);
} else
{var statearr_29356_29395 = state_29331__$1;(statearr_29356_29395[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 14))
{var state_29331__$1 = state_29331;var statearr_29357_29396 = state_29331__$1;(statearr_29357_29396[2] = null);
(statearr_29357_29396[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 15))
{var inst_29302 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29358_29397 = state_29331__$1;(statearr_29358_29397[2] = inst_29302);
(statearr_29358_29397[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 16))
{var inst_29284 = (state_29331[15]);var inst_29288 = cljs.core.chunk_first.call(null,inst_29284);var inst_29289 = cljs.core.chunk_rest.call(null,inst_29284);var inst_29290 = cljs.core.count.call(null,inst_29288);var inst_29270 = inst_29289;var inst_29271 = inst_29288;var inst_29272 = inst_29290;var inst_29273 = 0;var state_29331__$1 = (function (){var statearr_29359 = state_29331;(statearr_29359[8] = inst_29271);
(statearr_29359[9] = inst_29270);
(statearr_29359[10] = inst_29272);
(statearr_29359[11] = inst_29273);
return statearr_29359;
})();var statearr_29360_29398 = state_29331__$1;(statearr_29360_29398[2] = null);
(statearr_29360_29398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 17))
{var inst_29284 = (state_29331[15]);var inst_29293 = cljs.core.first.call(null,inst_29284);var inst_29294 = cljs.core.async.muxch_STAR_.call(null,inst_29293);var inst_29295 = cljs.core.async.close_BANG_.call(null,inst_29294);var inst_29296 = cljs.core.next.call(null,inst_29284);var inst_29270 = inst_29296;var inst_29271 = null;var inst_29272 = 0;var inst_29273 = 0;var state_29331__$1 = (function (){var statearr_29361 = state_29331;(statearr_29361[8] = inst_29271);
(statearr_29361[9] = inst_29270);
(statearr_29361[10] = inst_29272);
(statearr_29361[11] = inst_29273);
(statearr_29361[16] = inst_29295);
return statearr_29361;
})();var statearr_29362_29399 = state_29331__$1;(statearr_29362_29399[2] = null);
(statearr_29362_29399[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 18))
{var inst_29299 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29363_29400 = state_29331__$1;(statearr_29363_29400[2] = inst_29299);
(statearr_29363_29400[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 19))
{var state_29331__$1 = state_29331;var statearr_29364_29401 = state_29331__$1;(statearr_29364_29401[2] = null);
(statearr_29364_29401[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 20))
{var state_29331__$1 = state_29331;var statearr_29365_29402 = state_29331__$1;(statearr_29365_29402[2] = null);
(statearr_29365_29402[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 21))
{var inst_29324 = (state_29331[2]);var state_29331__$1 = (function (){var statearr_29366 = state_29331;(statearr_29366[17] = inst_29324);
return statearr_29366;
})();var statearr_29367_29403 = state_29331__$1;(statearr_29367_29403[2] = null);
(statearr_29367_29403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 22))
{var inst_29321 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29368_29404 = state_29331__$1;(statearr_29368_29404[2] = inst_29321);
(statearr_29368_29404[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 23))
{var inst_29308 = (state_29331[12]);var inst_29312 = (state_29331[2]);var inst_29313 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29308);var state_29331__$1 = (function (){var statearr_29369 = state_29331;(statearr_29369[18] = inst_29312);
return statearr_29369;
})();var statearr_29370_29405 = state_29331__$1;(statearr_29370_29405[2] = inst_29313);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29331__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29332 === 24))
{var inst_29260 = (state_29331[7]);var inst_29310 = (state_29331[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29331,23,Object,null,22);var inst_29317 = cljs.core.async.muxch_STAR_.call(null,inst_29310);var state_29331__$1 = state_29331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29331__$1,25,inst_29317,inst_29260);
} else
{if((state_val_29332 === 25))
{var inst_29319 = (state_29331[2]);var state_29331__$1 = state_29331;var statearr_29371_29406 = state_29331__$1;(statearr_29371_29406[2] = inst_29319);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29331__$1);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_29375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29375[0] = state_machine__12424__auto__);
(statearr_29375[1] = 1);
return statearr_29375;
});
var state_machine__12424__auto____1 = (function (state_29331){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_29331);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e29376){if((e29376 instanceof Object))
{var ex__12427__auto__ = e29376;var statearr_29377_29407 = state_29331;(statearr_29377_29407[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29408 = state_29331;
state_29331 = G__29408;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_29331){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_29331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_29378 = f__12523__auto__.call(null);(statearr_29378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___29379);
return statearr_29378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
,cljs.core.range.call(null,cnt));var c__12522__auto___29545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_29515){var state_val_29516 = (state_29515[1]);if((state_val_29516 === 1))
{var state_29515__$1 = state_29515;var statearr_29517_29546 = state_29515__$1;(statearr_29517_29546[2] = null);
(statearr_29517_29546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 2))
{var inst_29478 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29479 = 0;var state_29515__$1 = (function (){var statearr_29518 = state_29515;(statearr_29518[7] = inst_29479);
(statearr_29518[8] = inst_29478);
return statearr_29518;
})();var statearr_29519_29547 = state_29515__$1;(statearr_29519_29547[2] = null);
(statearr_29519_29547[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 3))
{var inst_29513 = (state_29515[2]);var state_29515__$1 = state_29515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29515__$1,inst_29513);
} else
{if((state_val_29516 === 4))
{var inst_29479 = (state_29515[7]);var inst_29481 = (inst_29479 < cnt);var state_29515__$1 = state_29515;if(cljs.core.truth_(inst_29481))
{var statearr_29520_29548 = state_29515__$1;(statearr_29520_29548[1] = 6);
} else
{var statearr_29521_29549 = state_29515__$1;(statearr_29521_29549[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 5))
{var inst_29499 = (state_29515[2]);var state_29515__$1 = (function (){var statearr_29522 = state_29515;(statearr_29522[9] = inst_29499);
return statearr_29522;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29515__$1,12,dchan);
} else
{if((state_val_29516 === 6))
{var state_29515__$1 = state_29515;var statearr_29523_29550 = state_29515__$1;(statearr_29523_29550[2] = null);
(statearr_29523_29550[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 7))
{var state_29515__$1 = state_29515;var statearr_29524_29551 = state_29515__$1;(statearr_29524_29551[2] = null);
(statearr_29524_29551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 8))
{var inst_29497 = (state_29515[2]);var state_29515__$1 = state_29515;var statearr_29525_29552 = state_29515__$1;(statearr_29525_29552[2] = inst_29497);
(statearr_29525_29552[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 9))
{var inst_29479 = (state_29515[7]);var inst_29492 = (state_29515[2]);var inst_29493 = (inst_29479 + 1);var inst_29479__$1 = inst_29493;var state_29515__$1 = (function (){var statearr_29526 = state_29515;(statearr_29526[7] = inst_29479__$1);
(statearr_29526[10] = inst_29492);
return statearr_29526;
})();var statearr_29527_29553 = state_29515__$1;(statearr_29527_29553[2] = null);
(statearr_29527_29553[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 10))
{var inst_29483 = (state_29515[2]);var inst_29484 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29515__$1 = (function (){var statearr_29528 = state_29515;(statearr_29528[11] = inst_29483);
return statearr_29528;
})();var statearr_29529_29554 = state_29515__$1;(statearr_29529_29554[2] = inst_29484);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 11))
{var inst_29479 = (state_29515[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29515,10,Object,null,9);var inst_29488 = chs__$1.call(null,inst_29479);var inst_29489 = done.call(null,inst_29479);var inst_29490 = cljs.core.async.take_BANG_.call(null,inst_29488,inst_29489);var state_29515__$1 = state_29515;var statearr_29530_29555 = state_29515__$1;(statearr_29530_29555[2] = inst_29490);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 12))
{var inst_29501 = (state_29515[12]);var inst_29501__$1 = (state_29515[2]);var inst_29502 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29501__$1);var state_29515__$1 = (function (){var statearr_29531 = state_29515;(statearr_29531[12] = inst_29501__$1);
return statearr_29531;
})();if(cljs.core.truth_(inst_29502))
{var statearr_29532_29556 = state_29515__$1;(statearr_29532_29556[1] = 13);
} else
{var statearr_29533_29557 = state_29515__$1;(statearr_29533_29557[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 13))
{var inst_29504 = cljs.core.async.close_BANG_.call(null,out);var state_29515__$1 = state_29515;var statearr_29534_29558 = state_29515__$1;(statearr_29534_29558[2] = inst_29504);
(statearr_29534_29558[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 14))
{var inst_29501 = (state_29515[12]);var inst_29506 = cljs.core.apply.call(null,f,inst_29501);var state_29515__$1 = state_29515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29515__$1,16,out,inst_29506);
} else
{if((state_val_29516 === 15))
{var inst_29511 = (state_29515[2]);var state_29515__$1 = state_29515;var statearr_29535_29559 = state_29515__$1;(statearr_29535_29559[2] = inst_29511);
(statearr_29535_29559[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29516 === 16))
{var inst_29508 = (state_29515[2]);var state_29515__$1 = (function (){var statearr_29536 = state_29515;(statearr_29536[13] = inst_29508);
return statearr_29536;
})();var statearr_29537_29560 = state_29515__$1;(statearr_29537_29560[2] = null);
(statearr_29537_29560[1] = 2);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_29541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29541[0] = state_machine__12424__auto__);
(statearr_29541[1] = 1);
return statearr_29541;
});
var state_machine__12424__auto____1 = (function (state_29515){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_29515);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e29542){if((e29542 instanceof Object))
{var ex__12427__auto__ = e29542;var statearr_29543_29561 = state_29515;(statearr_29543_29561[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29562 = state_29515;
state_29515 = G__29562;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_29515){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_29515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_29544 = f__12523__auto__.call(null);(statearr_29544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___29545);
return statearr_29544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___29670 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_29646){var state_val_29647 = (state_29646[1]);if((state_val_29647 === 1))
{var inst_29617 = cljs.core.vec.call(null,chs);var inst_29618 = inst_29617;var state_29646__$1 = (function (){var statearr_29648 = state_29646;(statearr_29648[7] = inst_29618);
return statearr_29648;
})();var statearr_29649_29671 = state_29646__$1;(statearr_29649_29671[2] = null);
(statearr_29649_29671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 2))
{var inst_29618 = (state_29646[7]);var inst_29620 = cljs.core.count.call(null,inst_29618);var inst_29621 = (inst_29620 > 0);var state_29646__$1 = state_29646;if(cljs.core.truth_(inst_29621))
{var statearr_29650_29672 = state_29646__$1;(statearr_29650_29672[1] = 4);
} else
{var statearr_29651_29673 = state_29646__$1;(statearr_29651_29673[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 3))
{var inst_29644 = (state_29646[2]);var state_29646__$1 = state_29646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29646__$1,inst_29644);
} else
{if((state_val_29647 === 4))
{var inst_29618 = (state_29646[7]);var state_29646__$1 = state_29646;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29646__$1,7,inst_29618);
} else
{if((state_val_29647 === 5))
{var inst_29640 = cljs.core.async.close_BANG_.call(null,out);var state_29646__$1 = state_29646;var statearr_29652_29674 = state_29646__$1;(statearr_29652_29674[2] = inst_29640);
(statearr_29652_29674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 6))
{var inst_29642 = (state_29646[2]);var state_29646__$1 = state_29646;var statearr_29653_29675 = state_29646__$1;(statearr_29653_29675[2] = inst_29642);
(statearr_29653_29675[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 7))
{var inst_29626 = (state_29646[8]);var inst_29625 = (state_29646[9]);var inst_29625__$1 = (state_29646[2]);var inst_29626__$1 = cljs.core.nth.call(null,inst_29625__$1,0,null);var inst_29627 = cljs.core.nth.call(null,inst_29625__$1,1,null);var inst_29628 = (inst_29626__$1 == null);var state_29646__$1 = (function (){var statearr_29654 = state_29646;(statearr_29654[10] = inst_29627);
(statearr_29654[8] = inst_29626__$1);
(statearr_29654[9] = inst_29625__$1);
return statearr_29654;
})();if(cljs.core.truth_(inst_29628))
{var statearr_29655_29676 = state_29646__$1;(statearr_29655_29676[1] = 8);
} else
{var statearr_29656_29677 = state_29646__$1;(statearr_29656_29677[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 8))
{var inst_29627 = (state_29646[10]);var inst_29618 = (state_29646[7]);var inst_29626 = (state_29646[8]);var inst_29625 = (state_29646[9]);var inst_29630 = (function (){var c = inst_29627;var v = inst_29626;var vec__29623 = inst_29625;var cs = inst_29618;return ((function (c,v,vec__29623,cs,inst_29627,inst_29618,inst_29626,inst_29625,state_val_29647){
return (function (p1__29563_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29563_SHARP_);
});
;})(c,v,vec__29623,cs,inst_29627,inst_29618,inst_29626,inst_29625,state_val_29647))
})();var inst_29631 = cljs.core.filterv.call(null,inst_29630,inst_29618);var inst_29618__$1 = inst_29631;var state_29646__$1 = (function (){var statearr_29657 = state_29646;(statearr_29657[7] = inst_29618__$1);
return statearr_29657;
})();var statearr_29658_29678 = state_29646__$1;(statearr_29658_29678[2] = null);
(statearr_29658_29678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 9))
{var inst_29626 = (state_29646[8]);var state_29646__$1 = state_29646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29646__$1,11,out,inst_29626);
} else
{if((state_val_29647 === 10))
{var inst_29638 = (state_29646[2]);var state_29646__$1 = state_29646;var statearr_29660_29679 = state_29646__$1;(statearr_29660_29679[2] = inst_29638);
(statearr_29660_29679[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29647 === 11))
{var inst_29618 = (state_29646[7]);var inst_29635 = (state_29646[2]);var tmp29659 = inst_29618;var inst_29618__$1 = tmp29659;var state_29646__$1 = (function (){var statearr_29661 = state_29646;(statearr_29661[7] = inst_29618__$1);
(statearr_29661[11] = inst_29635);
return statearr_29661;
})();var statearr_29662_29680 = state_29646__$1;(statearr_29662_29680[2] = null);
(statearr_29662_29680[1] = 2);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_29666 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29666[0] = state_machine__12424__auto__);
(statearr_29666[1] = 1);
return statearr_29666;
});
var state_machine__12424__auto____1 = (function (state_29646){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_29646);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e29667){if((e29667 instanceof Object))
{var ex__12427__auto__ = e29667;var statearr_29668_29681 = state_29646;(statearr_29668_29681[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29682 = state_29646;
state_29646 = G__29682;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_29646){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_29646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_29669 = f__12523__auto__.call(null);(statearr_29669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___29670);
return statearr_29669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___29775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_29752){var state_val_29753 = (state_29752[1]);if((state_val_29753 === 1))
{var inst_29729 = 0;var state_29752__$1 = (function (){var statearr_29754 = state_29752;(statearr_29754[7] = inst_29729);
return statearr_29754;
})();var statearr_29755_29776 = state_29752__$1;(statearr_29755_29776[2] = null);
(statearr_29755_29776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 2))
{var inst_29729 = (state_29752[7]);var inst_29731 = (inst_29729 < n);var state_29752__$1 = state_29752;if(cljs.core.truth_(inst_29731))
{var statearr_29756_29777 = state_29752__$1;(statearr_29756_29777[1] = 4);
} else
{var statearr_29757_29778 = state_29752__$1;(statearr_29757_29778[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 3))
{var inst_29749 = (state_29752[2]);var inst_29750 = cljs.core.async.close_BANG_.call(null,out);var state_29752__$1 = (function (){var statearr_29758 = state_29752;(statearr_29758[8] = inst_29749);
return statearr_29758;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29752__$1,inst_29750);
} else
{if((state_val_29753 === 4))
{var state_29752__$1 = state_29752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29752__$1,7,ch);
} else
{if((state_val_29753 === 5))
{var state_29752__$1 = state_29752;var statearr_29759_29779 = state_29752__$1;(statearr_29759_29779[2] = null);
(statearr_29759_29779[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 6))
{var inst_29747 = (state_29752[2]);var state_29752__$1 = state_29752;var statearr_29760_29780 = state_29752__$1;(statearr_29760_29780[2] = inst_29747);
(statearr_29760_29780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 7))
{var inst_29734 = (state_29752[9]);var inst_29734__$1 = (state_29752[2]);var inst_29735 = (inst_29734__$1 == null);var inst_29736 = cljs.core.not.call(null,inst_29735);var state_29752__$1 = (function (){var statearr_29761 = state_29752;(statearr_29761[9] = inst_29734__$1);
return statearr_29761;
})();if(inst_29736)
{var statearr_29762_29781 = state_29752__$1;(statearr_29762_29781[1] = 8);
} else
{var statearr_29763_29782 = state_29752__$1;(statearr_29763_29782[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 8))
{var inst_29734 = (state_29752[9]);var state_29752__$1 = state_29752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29752__$1,11,out,inst_29734);
} else
{if((state_val_29753 === 9))
{var state_29752__$1 = state_29752;var statearr_29764_29783 = state_29752__$1;(statearr_29764_29783[2] = null);
(statearr_29764_29783[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 10))
{var inst_29744 = (state_29752[2]);var state_29752__$1 = state_29752;var statearr_29765_29784 = state_29752__$1;(statearr_29765_29784[2] = inst_29744);
(statearr_29765_29784[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29753 === 11))
{var inst_29729 = (state_29752[7]);var inst_29739 = (state_29752[2]);var inst_29740 = (inst_29729 + 1);var inst_29729__$1 = inst_29740;var state_29752__$1 = (function (){var statearr_29766 = state_29752;(statearr_29766[10] = inst_29739);
(statearr_29766[7] = inst_29729__$1);
return statearr_29766;
})();var statearr_29767_29785 = state_29752__$1;(statearr_29767_29785[2] = null);
(statearr_29767_29785[1] = 2);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_29771 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29771[0] = state_machine__12424__auto__);
(statearr_29771[1] = 1);
return statearr_29771;
});
var state_machine__12424__auto____1 = (function (state_29752){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_29752);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e29772){if((e29772 instanceof Object))
{var ex__12427__auto__ = e29772;var statearr_29773_29786 = state_29752;(statearr_29773_29786[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29787 = state_29752;
state_29752 = G__29787;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_29752){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_29752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_29774 = f__12523__auto__.call(null);(statearr_29774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___29775);
return statearr_29774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___29884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_29859){var state_val_29860 = (state_29859[1]);if((state_val_29860 === 1))
{var inst_29836 = null;var state_29859__$1 = (function (){var statearr_29861 = state_29859;(statearr_29861[7] = inst_29836);
return statearr_29861;
})();var statearr_29862_29885 = state_29859__$1;(statearr_29862_29885[2] = null);
(statearr_29862_29885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 2))
{var state_29859__$1 = state_29859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,4,ch);
} else
{if((state_val_29860 === 3))
{var inst_29856 = (state_29859[2]);var inst_29857 = cljs.core.async.close_BANG_.call(null,out);var state_29859__$1 = (function (){var statearr_29863 = state_29859;(statearr_29863[8] = inst_29856);
return statearr_29863;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29859__$1,inst_29857);
} else
{if((state_val_29860 === 4))
{var inst_29839 = (state_29859[9]);var inst_29839__$1 = (state_29859[2]);var inst_29840 = (inst_29839__$1 == null);var inst_29841 = cljs.core.not.call(null,inst_29840);var state_29859__$1 = (function (){var statearr_29864 = state_29859;(statearr_29864[9] = inst_29839__$1);
return statearr_29864;
})();if(inst_29841)
{var statearr_29865_29886 = state_29859__$1;(statearr_29865_29886[1] = 5);
} else
{var statearr_29866_29887 = state_29859__$1;(statearr_29866_29887[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 5))
{var inst_29839 = (state_29859[9]);var inst_29836 = (state_29859[7]);var inst_29843 = cljs.core._EQ_.call(null,inst_29839,inst_29836);var state_29859__$1 = state_29859;if(inst_29843)
{var statearr_29867_29888 = state_29859__$1;(statearr_29867_29888[1] = 8);
} else
{var statearr_29868_29889 = state_29859__$1;(statearr_29868_29889[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 6))
{var state_29859__$1 = state_29859;var statearr_29870_29890 = state_29859__$1;(statearr_29870_29890[2] = null);
(statearr_29870_29890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 7))
{var inst_29854 = (state_29859[2]);var state_29859__$1 = state_29859;var statearr_29871_29891 = state_29859__$1;(statearr_29871_29891[2] = inst_29854);
(statearr_29871_29891[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 8))
{var inst_29836 = (state_29859[7]);var tmp29869 = inst_29836;var inst_29836__$1 = tmp29869;var state_29859__$1 = (function (){var statearr_29872 = state_29859;(statearr_29872[7] = inst_29836__$1);
return statearr_29872;
})();var statearr_29873_29892 = state_29859__$1;(statearr_29873_29892[2] = null);
(statearr_29873_29892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 9))
{var inst_29839 = (state_29859[9]);var state_29859__$1 = state_29859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29859__$1,11,out,inst_29839);
} else
{if((state_val_29860 === 10))
{var inst_29851 = (state_29859[2]);var state_29859__$1 = state_29859;var statearr_29874_29893 = state_29859__$1;(statearr_29874_29893[2] = inst_29851);
(statearr_29874_29893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29860 === 11))
{var inst_29839 = (state_29859[9]);var inst_29848 = (state_29859[2]);var inst_29836 = inst_29839;var state_29859__$1 = (function (){var statearr_29875 = state_29859;(statearr_29875[10] = inst_29848);
(statearr_29875[7] = inst_29836);
return statearr_29875;
})();var statearr_29876_29894 = state_29859__$1;(statearr_29876_29894[2] = null);
(statearr_29876_29894[1] = 2);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_29880 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29880[0] = state_machine__12424__auto__);
(statearr_29880[1] = 1);
return statearr_29880;
});
var state_machine__12424__auto____1 = (function (state_29859){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_29859);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e29881){if((e29881 instanceof Object))
{var ex__12427__auto__ = e29881;var statearr_29882_29895 = state_29859;(statearr_29882_29895[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29896 = state_29859;
state_29859 = G__29896;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_29859){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_29859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_29883 = f__12523__auto__.call(null);(statearr_29883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___29884);
return statearr_29883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___30031 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_30001){var state_val_30002 = (state_30001[1]);if((state_val_30002 === 1))
{var inst_29964 = (new Array(n));var inst_29965 = inst_29964;var inst_29966 = 0;var state_30001__$1 = (function (){var statearr_30003 = state_30001;(statearr_30003[7] = inst_29966);
(statearr_30003[8] = inst_29965);
return statearr_30003;
})();var statearr_30004_30032 = state_30001__$1;(statearr_30004_30032[2] = null);
(statearr_30004_30032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 2))
{var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30001__$1,4,ch);
} else
{if((state_val_30002 === 3))
{var inst_29999 = (state_30001[2]);var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30001__$1,inst_29999);
} else
{if((state_val_30002 === 4))
{var inst_29969 = (state_30001[9]);var inst_29969__$1 = (state_30001[2]);var inst_29970 = (inst_29969__$1 == null);var inst_29971 = cljs.core.not.call(null,inst_29970);var state_30001__$1 = (function (){var statearr_30005 = state_30001;(statearr_30005[9] = inst_29969__$1);
return statearr_30005;
})();if(inst_29971)
{var statearr_30006_30033 = state_30001__$1;(statearr_30006_30033[1] = 5);
} else
{var statearr_30007_30034 = state_30001__$1;(statearr_30007_30034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 5))
{var inst_29974 = (state_30001[10]);var inst_29969 = (state_30001[9]);var inst_29966 = (state_30001[7]);var inst_29965 = (state_30001[8]);var inst_29973 = (inst_29965[inst_29966] = inst_29969);var inst_29974__$1 = (inst_29966 + 1);var inst_29975 = (inst_29974__$1 < n);var state_30001__$1 = (function (){var statearr_30008 = state_30001;(statearr_30008[10] = inst_29974__$1);
(statearr_30008[11] = inst_29973);
return statearr_30008;
})();if(cljs.core.truth_(inst_29975))
{var statearr_30009_30035 = state_30001__$1;(statearr_30009_30035[1] = 8);
} else
{var statearr_30010_30036 = state_30001__$1;(statearr_30010_30036[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 6))
{var inst_29966 = (state_30001[7]);var inst_29987 = (inst_29966 > 0);var state_30001__$1 = state_30001;if(cljs.core.truth_(inst_29987))
{var statearr_30012_30037 = state_30001__$1;(statearr_30012_30037[1] = 12);
} else
{var statearr_30013_30038 = state_30001__$1;(statearr_30013_30038[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 7))
{var inst_29997 = (state_30001[2]);var state_30001__$1 = state_30001;var statearr_30014_30039 = state_30001__$1;(statearr_30014_30039[2] = inst_29997);
(statearr_30014_30039[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 8))
{var inst_29974 = (state_30001[10]);var inst_29965 = (state_30001[8]);var tmp30011 = inst_29965;var inst_29965__$1 = tmp30011;var inst_29966 = inst_29974;var state_30001__$1 = (function (){var statearr_30015 = state_30001;(statearr_30015[7] = inst_29966);
(statearr_30015[8] = inst_29965__$1);
return statearr_30015;
})();var statearr_30016_30040 = state_30001__$1;(statearr_30016_30040[2] = null);
(statearr_30016_30040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 9))
{var inst_29965 = (state_30001[8]);var inst_29979 = cljs.core.vec.call(null,inst_29965);var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30001__$1,11,out,inst_29979);
} else
{if((state_val_30002 === 10))
{var inst_29985 = (state_30001[2]);var state_30001__$1 = state_30001;var statearr_30017_30041 = state_30001__$1;(statearr_30017_30041[2] = inst_29985);
(statearr_30017_30041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 11))
{var inst_29981 = (state_30001[2]);var inst_29982 = (new Array(n));var inst_29965 = inst_29982;var inst_29966 = 0;var state_30001__$1 = (function (){var statearr_30018 = state_30001;(statearr_30018[12] = inst_29981);
(statearr_30018[7] = inst_29966);
(statearr_30018[8] = inst_29965);
return statearr_30018;
})();var statearr_30019_30042 = state_30001__$1;(statearr_30019_30042[2] = null);
(statearr_30019_30042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 12))
{var inst_29965 = (state_30001[8]);var inst_29989 = cljs.core.vec.call(null,inst_29965);var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30001__$1,15,out,inst_29989);
} else
{if((state_val_30002 === 13))
{var state_30001__$1 = state_30001;var statearr_30020_30043 = state_30001__$1;(statearr_30020_30043[2] = null);
(statearr_30020_30043[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 14))
{var inst_29994 = (state_30001[2]);var inst_29995 = cljs.core.async.close_BANG_.call(null,out);var state_30001__$1 = (function (){var statearr_30021 = state_30001;(statearr_30021[13] = inst_29994);
return statearr_30021;
})();var statearr_30022_30044 = state_30001__$1;(statearr_30022_30044[2] = inst_29995);
(statearr_30022_30044[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30002 === 15))
{var inst_29991 = (state_30001[2]);var state_30001__$1 = state_30001;var statearr_30023_30045 = state_30001__$1;(statearr_30023_30045[2] = inst_29991);
(statearr_30023_30045[1] = 14);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_30027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30027[0] = state_machine__12424__auto__);
(statearr_30027[1] = 1);
return statearr_30027;
});
var state_machine__12424__auto____1 = (function (state_30001){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_30001);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e30028){if((e30028 instanceof Object))
{var ex__12427__auto__ = e30028;var statearr_30029_30046 = state_30001;(statearr_30029_30046[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30001);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30047 = state_30001;
state_30001 = G__30047;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_30001){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_30001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_30030 = f__12523__auto__.call(null);(statearr_30030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___30031);
return statearr_30030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___30190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_30160){var state_val_30161 = (state_30160[1]);if((state_val_30161 === 1))
{var inst_30119 = [];var inst_30120 = inst_30119;var inst_30121 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_30160__$1 = (function (){var statearr_30162 = state_30160;(statearr_30162[7] = inst_30121);
(statearr_30162[8] = inst_30120);
return statearr_30162;
})();var statearr_30163_30191 = state_30160__$1;(statearr_30163_30191[2] = null);
(statearr_30163_30191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 2))
{var state_30160__$1 = state_30160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30160__$1,4,ch);
} else
{if((state_val_30161 === 3))
{var inst_30158 = (state_30160[2]);var state_30160__$1 = state_30160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30160__$1,inst_30158);
} else
{if((state_val_30161 === 4))
{var inst_30124 = (state_30160[9]);var inst_30124__$1 = (state_30160[2]);var inst_30125 = (inst_30124__$1 == null);var inst_30126 = cljs.core.not.call(null,inst_30125);var state_30160__$1 = (function (){var statearr_30164 = state_30160;(statearr_30164[9] = inst_30124__$1);
return statearr_30164;
})();if(inst_30126)
{var statearr_30165_30192 = state_30160__$1;(statearr_30165_30192[1] = 5);
} else
{var statearr_30166_30193 = state_30160__$1;(statearr_30166_30193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 5))
{var inst_30124 = (state_30160[9]);var inst_30121 = (state_30160[7]);var inst_30128 = (state_30160[10]);var inst_30128__$1 = f.call(null,inst_30124);var inst_30129 = cljs.core._EQ_.call(null,inst_30128__$1,inst_30121);var inst_30130 = cljs.core.keyword_identical_QMARK_.call(null,inst_30121,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_30131 = (inst_30129) || (inst_30130);var state_30160__$1 = (function (){var statearr_30167 = state_30160;(statearr_30167[10] = inst_30128__$1);
return statearr_30167;
})();if(cljs.core.truth_(inst_30131))
{var statearr_30168_30194 = state_30160__$1;(statearr_30168_30194[1] = 8);
} else
{var statearr_30169_30195 = state_30160__$1;(statearr_30169_30195[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 6))
{var inst_30120 = (state_30160[8]);var inst_30145 = inst_30120.length;var inst_30146 = (inst_30145 > 0);var state_30160__$1 = state_30160;if(cljs.core.truth_(inst_30146))
{var statearr_30171_30196 = state_30160__$1;(statearr_30171_30196[1] = 12);
} else
{var statearr_30172_30197 = state_30160__$1;(statearr_30172_30197[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 7))
{var inst_30156 = (state_30160[2]);var state_30160__$1 = state_30160;var statearr_30173_30198 = state_30160__$1;(statearr_30173_30198[2] = inst_30156);
(statearr_30173_30198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 8))
{var inst_30124 = (state_30160[9]);var inst_30120 = (state_30160[8]);var inst_30128 = (state_30160[10]);var inst_30133 = inst_30120.push(inst_30124);var tmp30170 = inst_30120;var inst_30120__$1 = tmp30170;var inst_30121 = inst_30128;var state_30160__$1 = (function (){var statearr_30174 = state_30160;(statearr_30174[11] = inst_30133);
(statearr_30174[7] = inst_30121);
(statearr_30174[8] = inst_30120__$1);
return statearr_30174;
})();var statearr_30175_30199 = state_30160__$1;(statearr_30175_30199[2] = null);
(statearr_30175_30199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 9))
{var inst_30120 = (state_30160[8]);var inst_30136 = cljs.core.vec.call(null,inst_30120);var state_30160__$1 = state_30160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30160__$1,11,out,inst_30136);
} else
{if((state_val_30161 === 10))
{var inst_30143 = (state_30160[2]);var state_30160__$1 = state_30160;var statearr_30176_30200 = state_30160__$1;(statearr_30176_30200[2] = inst_30143);
(statearr_30176_30200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 11))
{var inst_30124 = (state_30160[9]);var inst_30128 = (state_30160[10]);var inst_30138 = (state_30160[2]);var inst_30139 = [];var inst_30140 = inst_30139.push(inst_30124);var inst_30120 = inst_30139;var inst_30121 = inst_30128;var state_30160__$1 = (function (){var statearr_30177 = state_30160;(statearr_30177[12] = inst_30138);
(statearr_30177[7] = inst_30121);
(statearr_30177[8] = inst_30120);
(statearr_30177[13] = inst_30140);
return statearr_30177;
})();var statearr_30178_30201 = state_30160__$1;(statearr_30178_30201[2] = null);
(statearr_30178_30201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 12))
{var inst_30120 = (state_30160[8]);var inst_30148 = cljs.core.vec.call(null,inst_30120);var state_30160__$1 = state_30160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30160__$1,15,out,inst_30148);
} else
{if((state_val_30161 === 13))
{var state_30160__$1 = state_30160;var statearr_30179_30202 = state_30160__$1;(statearr_30179_30202[2] = null);
(statearr_30179_30202[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 14))
{var inst_30153 = (state_30160[2]);var inst_30154 = cljs.core.async.close_BANG_.call(null,out);var state_30160__$1 = (function (){var statearr_30180 = state_30160;(statearr_30180[14] = inst_30153);
return statearr_30180;
})();var statearr_30181_30203 = state_30160__$1;(statearr_30181_30203[2] = inst_30154);
(statearr_30181_30203[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30161 === 15))
{var inst_30150 = (state_30160[2]);var state_30160__$1 = state_30160;var statearr_30182_30204 = state_30160__$1;(statearr_30182_30204[2] = inst_30150);
(statearr_30182_30204[1] = 14);
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
});return ((function (switch__12423__auto__){
return (function() {
var state_machine__12424__auto__ = null;
var state_machine__12424__auto____0 = (function (){var statearr_30186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30186[0] = state_machine__12424__auto__);
(statearr_30186[1] = 1);
return statearr_30186;
});
var state_machine__12424__auto____1 = (function (state_30160){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_30160);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e30187){if((e30187 instanceof Object))
{var ex__12427__auto__ = e30187;var statearr_30188_30205 = state_30160;(statearr_30188_30205[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30206 = state_30160;
state_30160 = G__30206;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_30160){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_30160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_30189 = f__12523__auto__.call(null);(statearr_30189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___30190);
return statearr_30189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12524__auto__);
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
