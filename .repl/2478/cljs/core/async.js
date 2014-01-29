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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t48143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48143 = (function (f,fn_handler,meta48144){
this.f = f;
this.fn_handler = fn_handler;
this.meta48144 = meta48144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48143.cljs$lang$type = true;
cljs.core.async.t48143.cljs$lang$ctorStr = "cljs.core.async/t48143";
cljs.core.async.t48143.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48143");
});
cljs.core.async.t48143.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t48143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t48143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48145){var self__ = this;
var _48145__$1 = this;return self__.meta48144;
});
cljs.core.async.t48143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48145,meta48144__$1){var self__ = this;
var _48145__$1 = this;return (new cljs.core.async.t48143(self__.f,self__.fn_handler,meta48144__$1));
});
cljs.core.async.__GT_t48143 = (function __GT_t48143(f__$1,fn_handler__$1,meta48144){return (new cljs.core.async.t48143(f__$1,fn_handler__$1,meta48144));
});
}
return (new cljs.core.async.t48143(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__48147 = buff;if(G__48147)
{var bit__8494__auto__ = null;if(cljs.core.truth_((function (){var or__7850__auto__ = bit__8494__auto__;if(cljs.core.truth_(or__7850__auto__))
{return or__7850__auto__;
} else
{return G__48147.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__48147.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__48147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__48147);
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
{var val_48148 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_48148);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_48148);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8692__auto___48149 = n;var x_48150 = 0;while(true){
if((x_48150 < n__8692__auto___48149))
{(a[x_48150] = 0);
{
var G__48151 = (x_48150 + 1);
x_48150 = G__48151;
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
var G__48152 = (i + 1);
i = G__48152;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t48156 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48156 = (function (flag,alt_flag,meta48157){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48157 = meta48157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48156.cljs$lang$type = true;
cljs.core.async.t48156.cljs$lang$ctorStr = "cljs.core.async/t48156";
cljs.core.async.t48156.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48156");
});
cljs.core.async.t48156.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t48156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t48156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48158){var self__ = this;
var _48158__$1 = this;return self__.meta48157;
});
cljs.core.async.t48156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48158,meta48157__$1){var self__ = this;
var _48158__$1 = this;return (new cljs.core.async.t48156(self__.flag,self__.alt_flag,meta48157__$1));
});
cljs.core.async.__GT_t48156 = (function __GT_t48156(flag__$1,alt_flag__$1,meta48157){return (new cljs.core.async.t48156(flag__$1,alt_flag__$1,meta48157));
});
}
return (new cljs.core.async.t48156(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t48162 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48162 = (function (cb,flag,alt_handler,meta48163){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48163 = meta48163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48162.cljs$lang$type = true;
cljs.core.async.t48162.cljs$lang$ctorStr = "cljs.core.async/t48162";
cljs.core.async.t48162.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48162");
});
cljs.core.async.t48162.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t48162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t48162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48164){var self__ = this;
var _48164__$1 = this;return self__.meta48163;
});
cljs.core.async.t48162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48164,meta48163__$1){var self__ = this;
var _48164__$1 = this;return (new cljs.core.async.t48162(self__.cb,self__.flag,self__.alt_handler,meta48163__$1));
});
cljs.core.async.__GT_t48162 = (function __GT_t48162(cb__$1,flag__$1,alt_handler__$1,meta48163){return (new cljs.core.async.t48162(cb__$1,flag__$1,alt_handler__$1,meta48163));
});
}
return (new cljs.core.async.t48162(cb,flag,alt_handler,null));
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
return (function (p1__48165_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48165_SHARP_,port], null));
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
var G__48166 = (i + 1);
i = G__48166;
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
var alts_BANG___delegate = function (ports,p__48167){var map__48169 = p__48167;var map__48169__$1 = ((cljs.core.seq_QMARK_.call(null,map__48169))?cljs.core.apply.call(null,cljs.core.hash_map,map__48169):map__48169);var opts = map__48169__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__48167 = null;if (arguments.length > 1) {
  p__48167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__48167);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48170){
var ports = cljs.core.first(arglist__48170);
var p__48167 = cljs.core.rest(arglist__48170);
return alts_BANG___delegate(ports,p__48167);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t48178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48178 = (function (ch,f,map_LT_,meta48179){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48179 = meta48179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48178.cljs$lang$type = true;
cljs.core.async.t48178.cljs$lang$ctorStr = "cljs.core.async/t48178";
cljs.core.async.t48178.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48178");
});
cljs.core.async.t48178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t48178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t48181 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48181 = (function (fn1,_,meta48179,ch,f,map_LT_,meta48182){
this.fn1 = fn1;
this._ = _;
this.meta48179 = meta48179;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48182 = meta48182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48181.cljs$lang$type = true;
cljs.core.async.t48181.cljs$lang$ctorStr = "cljs.core.async/t48181";
cljs.core.async.t48181.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48181");
});
cljs.core.async.t48181.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t48181.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t48181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__48171_SHARP_){return f1.call(null,(((p1__48171_SHARP_ == null))?null:self__.f.call(null,p1__48171_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t48181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48183){var self__ = this;
var _48183__$1 = this;return self__.meta48182;
});
cljs.core.async.t48181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48183,meta48182__$1){var self__ = this;
var _48183__$1 = this;return (new cljs.core.async.t48181(self__.fn1,self__._,self__.meta48179,self__.ch,self__.f,self__.map_LT_,meta48182__$1));
});
cljs.core.async.__GT_t48181 = (function __GT_t48181(fn1__$1,___$2,meta48179__$1,ch__$2,f__$2,map_LT___$2,meta48182){return (new cljs.core.async.t48181(fn1__$1,___$2,meta48179__$1,ch__$2,f__$2,map_LT___$2,meta48182));
});
}
return (new cljs.core.async.t48181(fn1,___$1,self__.meta48179,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t48178.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t48178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48180){var self__ = this;
var _48180__$1 = this;return self__.meta48179;
});
cljs.core.async.t48178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48180,meta48179__$1){var self__ = this;
var _48180__$1 = this;return (new cljs.core.async.t48178(self__.ch,self__.f,self__.map_LT_,meta48179__$1));
});
cljs.core.async.__GT_t48178 = (function __GT_t48178(ch__$1,f__$1,map_LT___$1,meta48179){return (new cljs.core.async.t48178(ch__$1,f__$1,map_LT___$1,meta48179));
});
}
return (new cljs.core.async.t48178(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t48187 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48187 = (function (ch,f,map_GT_,meta48188){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta48188 = meta48188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48187.cljs$lang$type = true;
cljs.core.async.t48187.cljs$lang$ctorStr = "cljs.core.async/t48187";
cljs.core.async.t48187.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48187");
});
cljs.core.async.t48187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t48187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t48187.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t48187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48189){var self__ = this;
var _48189__$1 = this;return self__.meta48188;
});
cljs.core.async.t48187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48189,meta48188__$1){var self__ = this;
var _48189__$1 = this;return (new cljs.core.async.t48187(self__.ch,self__.f,self__.map_GT_,meta48188__$1));
});
cljs.core.async.__GT_t48187 = (function __GT_t48187(ch__$1,f__$1,map_GT___$1,meta48188){return (new cljs.core.async.t48187(ch__$1,f__$1,map_GT___$1,meta48188));
});
}
return (new cljs.core.async.t48187(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t48193 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48193 = (function (ch,p,filter_GT_,meta48194){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta48194 = meta48194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48193.cljs$lang$type = true;
cljs.core.async.t48193.cljs$lang$ctorStr = "cljs.core.async/t48193";
cljs.core.async.t48193.cljs$lang$ctorPrWriter = (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t48193");
});
cljs.core.async.t48193.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t48193.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t48193.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t48193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48195){var self__ = this;
var _48195__$1 = this;return self__.meta48194;
});
cljs.core.async.t48193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48195,meta48194__$1){var self__ = this;
var _48195__$1 = this;return (new cljs.core.async.t48193(self__.ch,self__.p,self__.filter_GT_,meta48194__$1));
});
cljs.core.async.__GT_t48193 = (function __GT_t48193(ch__$1,p__$1,filter_GT___$1,meta48194){return (new cljs.core.async.t48193(ch__$1,p__$1,filter_GT___$1,meta48194));
});
}
return (new cljs.core.async.t48193(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___48278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_48257){var state_val_48258 = (state_48257[1]);if((state_val_48258 === 1))
{var state_48257__$1 = state_48257;var statearr_48259_48279 = state_48257__$1;(statearr_48259_48279[2] = null);
(statearr_48259_48279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 2))
{var state_48257__$1 = state_48257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48257__$1,4,ch);
} else
{if((state_val_48258 === 3))
{var inst_48255 = (state_48257[2]);var state_48257__$1 = state_48257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48257__$1,inst_48255);
} else
{if((state_val_48258 === 4))
{var inst_48239 = (state_48257[7]);var inst_48239__$1 = (state_48257[2]);var inst_48240 = (inst_48239__$1 == null);var state_48257__$1 = (function (){var statearr_48260 = state_48257;(statearr_48260[7] = inst_48239__$1);
return statearr_48260;
})();if(cljs.core.truth_(inst_48240))
{var statearr_48261_48280 = state_48257__$1;(statearr_48261_48280[1] = 5);
} else
{var statearr_48262_48281 = state_48257__$1;(statearr_48262_48281[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 5))
{var inst_48242 = cljs.core.async.close_BANG_.call(null,out);var state_48257__$1 = state_48257;var statearr_48263_48282 = state_48257__$1;(statearr_48263_48282[2] = inst_48242);
(statearr_48263_48282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 6))
{var inst_48239 = (state_48257[7]);var inst_48244 = p.call(null,inst_48239);var state_48257__$1 = state_48257;if(cljs.core.truth_(inst_48244))
{var statearr_48264_48283 = state_48257__$1;(statearr_48264_48283[1] = 8);
} else
{var statearr_48265_48284 = state_48257__$1;(statearr_48265_48284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 7))
{var inst_48253 = (state_48257[2]);var state_48257__$1 = state_48257;var statearr_48266_48285 = state_48257__$1;(statearr_48266_48285[2] = inst_48253);
(statearr_48266_48285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 8))
{var inst_48239 = (state_48257[7]);var state_48257__$1 = state_48257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48257__$1,11,out,inst_48239);
} else
{if((state_val_48258 === 9))
{var state_48257__$1 = state_48257;var statearr_48267_48286 = state_48257__$1;(statearr_48267_48286[2] = null);
(statearr_48267_48286[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 10))
{var inst_48250 = (state_48257[2]);var state_48257__$1 = (function (){var statearr_48268 = state_48257;(statearr_48268[8] = inst_48250);
return statearr_48268;
})();var statearr_48269_48287 = state_48257__$1;(statearr_48269_48287[2] = null);
(statearr_48269_48287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48258 === 11))
{var inst_48247 = (state_48257[2]);var state_48257__$1 = state_48257;var statearr_48270_48288 = state_48257__$1;(statearr_48270_48288[2] = inst_48247);
(statearr_48270_48288[1] = 10);
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
var state_machine__12424__auto____0 = (function (){var statearr_48274 = [null,null,null,null,null,null,null,null,null];(statearr_48274[0] = state_machine__12424__auto__);
(statearr_48274[1] = 1);
return statearr_48274;
});
var state_machine__12424__auto____1 = (function (state_48257){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_48257);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e48275){if((e48275 instanceof Object))
{var ex__12427__auto__ = e48275;var statearr_48276_48289 = state_48257;(statearr_48276_48289[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48257);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48290 = state_48257;
state_48257 = G__48290;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_48257){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_48257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_48277 = f__12523__auto__.call(null);(statearr_48277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___48278);
return statearr_48277;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_48442){var state_val_48443 = (state_48442[1]);if((state_val_48443 === 1))
{var state_48442__$1 = state_48442;var statearr_48444_48481 = state_48442__$1;(statearr_48444_48481[2] = null);
(statearr_48444_48481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 2))
{var state_48442__$1 = state_48442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48442__$1,4,in$);
} else
{if((state_val_48443 === 3))
{var inst_48440 = (state_48442[2]);var state_48442__$1 = state_48442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48442__$1,inst_48440);
} else
{if((state_val_48443 === 4))
{var inst_48388 = (state_48442[7]);var inst_48388__$1 = (state_48442[2]);var inst_48389 = (inst_48388__$1 == null);var state_48442__$1 = (function (){var statearr_48445 = state_48442;(statearr_48445[7] = inst_48388__$1);
return statearr_48445;
})();if(cljs.core.truth_(inst_48389))
{var statearr_48446_48482 = state_48442__$1;(statearr_48446_48482[1] = 5);
} else
{var statearr_48447_48483 = state_48442__$1;(statearr_48447_48483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 5))
{var inst_48391 = cljs.core.async.close_BANG_.call(null,out);var state_48442__$1 = state_48442;var statearr_48448_48484 = state_48442__$1;(statearr_48448_48484[2] = inst_48391);
(statearr_48448_48484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 6))
{var inst_48388 = (state_48442[7]);var inst_48393 = f.call(null,inst_48388);var inst_48398 = cljs.core.seq.call(null,inst_48393);var inst_48399 = inst_48398;var inst_48400 = null;var inst_48401 = 0;var inst_48402 = 0;var state_48442__$1 = (function (){var statearr_48449 = state_48442;(statearr_48449[8] = inst_48400);
(statearr_48449[9] = inst_48402);
(statearr_48449[10] = inst_48401);
(statearr_48449[11] = inst_48399);
return statearr_48449;
})();var statearr_48450_48485 = state_48442__$1;(statearr_48450_48485[2] = null);
(statearr_48450_48485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 7))
{var inst_48438 = (state_48442[2]);var state_48442__$1 = state_48442;var statearr_48451_48486 = state_48442__$1;(statearr_48451_48486[2] = inst_48438);
(statearr_48451_48486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 8))
{var inst_48402 = (state_48442[9]);var inst_48401 = (state_48442[10]);var inst_48404 = (inst_48402 < inst_48401);var inst_48405 = inst_48404;var state_48442__$1 = state_48442;if(cljs.core.truth_(inst_48405))
{var statearr_48452_48487 = state_48442__$1;(statearr_48452_48487[1] = 10);
} else
{var statearr_48453_48488 = state_48442__$1;(statearr_48453_48488[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 9))
{var inst_48435 = (state_48442[2]);var state_48442__$1 = (function (){var statearr_48454 = state_48442;(statearr_48454[12] = inst_48435);
return statearr_48454;
})();var statearr_48455_48489 = state_48442__$1;(statearr_48455_48489[2] = null);
(statearr_48455_48489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 10))
{var inst_48400 = (state_48442[8]);var inst_48402 = (state_48442[9]);var inst_48407 = cljs.core._nth.call(null,inst_48400,inst_48402);var state_48442__$1 = state_48442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48442__$1,13,out,inst_48407);
} else
{if((state_val_48443 === 11))
{var inst_48413 = (state_48442[13]);var inst_48399 = (state_48442[11]);var inst_48413__$1 = cljs.core.seq.call(null,inst_48399);var state_48442__$1 = (function (){var statearr_48459 = state_48442;(statearr_48459[13] = inst_48413__$1);
return statearr_48459;
})();if(inst_48413__$1)
{var statearr_48460_48490 = state_48442__$1;(statearr_48460_48490[1] = 14);
} else
{var statearr_48461_48491 = state_48442__$1;(statearr_48461_48491[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 12))
{var inst_48433 = (state_48442[2]);var state_48442__$1 = state_48442;var statearr_48462_48492 = state_48442__$1;(statearr_48462_48492[2] = inst_48433);
(statearr_48462_48492[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 13))
{var inst_48400 = (state_48442[8]);var inst_48402 = (state_48442[9]);var inst_48401 = (state_48442[10]);var inst_48399 = (state_48442[11]);var inst_48409 = (state_48442[2]);var inst_48410 = (inst_48402 + 1);var tmp48456 = inst_48400;var tmp48457 = inst_48401;var tmp48458 = inst_48399;var inst_48399__$1 = tmp48458;var inst_48400__$1 = tmp48456;var inst_48401__$1 = tmp48457;var inst_48402__$1 = inst_48410;var state_48442__$1 = (function (){var statearr_48463 = state_48442;(statearr_48463[8] = inst_48400__$1);
(statearr_48463[9] = inst_48402__$1);
(statearr_48463[10] = inst_48401__$1);
(statearr_48463[11] = inst_48399__$1);
(statearr_48463[14] = inst_48409);
return statearr_48463;
})();var statearr_48464_48493 = state_48442__$1;(statearr_48464_48493[2] = null);
(statearr_48464_48493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 14))
{var inst_48413 = (state_48442[13]);var inst_48415 = cljs.core.chunked_seq_QMARK_.call(null,inst_48413);var state_48442__$1 = state_48442;if(inst_48415)
{var statearr_48465_48494 = state_48442__$1;(statearr_48465_48494[1] = 17);
} else
{var statearr_48466_48495 = state_48442__$1;(statearr_48466_48495[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 15))
{var state_48442__$1 = state_48442;var statearr_48467_48496 = state_48442__$1;(statearr_48467_48496[2] = null);
(statearr_48467_48496[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 16))
{var inst_48431 = (state_48442[2]);var state_48442__$1 = state_48442;var statearr_48468_48497 = state_48442__$1;(statearr_48468_48497[2] = inst_48431);
(statearr_48468_48497[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 17))
{var inst_48413 = (state_48442[13]);var inst_48417 = cljs.core.chunk_first.call(null,inst_48413);var inst_48418 = cljs.core.chunk_rest.call(null,inst_48413);var inst_48419 = cljs.core.count.call(null,inst_48417);var inst_48399 = inst_48418;var inst_48400 = inst_48417;var inst_48401 = inst_48419;var inst_48402 = 0;var state_48442__$1 = (function (){var statearr_48469 = state_48442;(statearr_48469[8] = inst_48400);
(statearr_48469[9] = inst_48402);
(statearr_48469[10] = inst_48401);
(statearr_48469[11] = inst_48399);
return statearr_48469;
})();var statearr_48470_48498 = state_48442__$1;(statearr_48470_48498[2] = null);
(statearr_48470_48498[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 18))
{var inst_48413 = (state_48442[13]);var inst_48422 = cljs.core.first.call(null,inst_48413);var state_48442__$1 = state_48442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48442__$1,20,out,inst_48422);
} else
{if((state_val_48443 === 19))
{var inst_48428 = (state_48442[2]);var state_48442__$1 = state_48442;var statearr_48471_48499 = state_48442__$1;(statearr_48471_48499[2] = inst_48428);
(statearr_48471_48499[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48443 === 20))
{var inst_48413 = (state_48442[13]);var inst_48424 = (state_48442[2]);var inst_48425 = cljs.core.next.call(null,inst_48413);var inst_48399 = inst_48425;var inst_48400 = null;var inst_48401 = 0;var inst_48402 = 0;var state_48442__$1 = (function (){var statearr_48472 = state_48442;(statearr_48472[8] = inst_48400);
(statearr_48472[9] = inst_48402);
(statearr_48472[10] = inst_48401);
(statearr_48472[11] = inst_48399);
(statearr_48472[15] = inst_48424);
return statearr_48472;
})();var statearr_48473_48500 = state_48442__$1;(statearr_48473_48500[2] = null);
(statearr_48473_48500[1] = 8);
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
var state_machine__12424__auto____0 = (function (){var statearr_48477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48477[0] = state_machine__12424__auto__);
(statearr_48477[1] = 1);
return statearr_48477;
});
var state_machine__12424__auto____1 = (function (state_48442){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_48442);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e48478){if((e48478 instanceof Object))
{var ex__12427__auto__ = e48478;var statearr_48479_48501 = state_48442;(statearr_48479_48501[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48502 = state_48442;
state_48442 = G__48502;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_48442){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_48442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_48480 = f__12523__auto__.call(null);(statearr_48480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_48480;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12522__auto___48583 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_48562){var state_val_48563 = (state_48562[1]);if((state_val_48563 === 1))
{var state_48562__$1 = state_48562;var statearr_48564_48584 = state_48562__$1;(statearr_48564_48584[2] = null);
(statearr_48564_48584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 2))
{var state_48562__$1 = state_48562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48562__$1,4,from);
} else
{if((state_val_48563 === 3))
{var inst_48560 = (state_48562[2]);var state_48562__$1 = state_48562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48562__$1,inst_48560);
} else
{if((state_val_48563 === 4))
{var inst_48545 = (state_48562[7]);var inst_48545__$1 = (state_48562[2]);var inst_48546 = (inst_48545__$1 == null);var state_48562__$1 = (function (){var statearr_48565 = state_48562;(statearr_48565[7] = inst_48545__$1);
return statearr_48565;
})();if(cljs.core.truth_(inst_48546))
{var statearr_48566_48585 = state_48562__$1;(statearr_48566_48585[1] = 5);
} else
{var statearr_48567_48586 = state_48562__$1;(statearr_48567_48586[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 5))
{var state_48562__$1 = state_48562;if(cljs.core.truth_(close_QMARK_))
{var statearr_48568_48587 = state_48562__$1;(statearr_48568_48587[1] = 8);
} else
{var statearr_48569_48588 = state_48562__$1;(statearr_48569_48588[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 6))
{var inst_48545 = (state_48562[7]);var state_48562__$1 = state_48562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48562__$1,11,to,inst_48545);
} else
{if((state_val_48563 === 7))
{var inst_48558 = (state_48562[2]);var state_48562__$1 = state_48562;var statearr_48570_48589 = state_48562__$1;(statearr_48570_48589[2] = inst_48558);
(statearr_48570_48589[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 8))
{var inst_48549 = cljs.core.async.close_BANG_.call(null,to);var state_48562__$1 = state_48562;var statearr_48571_48590 = state_48562__$1;(statearr_48571_48590[2] = inst_48549);
(statearr_48571_48590[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 9))
{var state_48562__$1 = state_48562;var statearr_48572_48591 = state_48562__$1;(statearr_48572_48591[2] = null);
(statearr_48572_48591[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 10))
{var inst_48552 = (state_48562[2]);var state_48562__$1 = state_48562;var statearr_48573_48592 = state_48562__$1;(statearr_48573_48592[2] = inst_48552);
(statearr_48573_48592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48563 === 11))
{var inst_48555 = (state_48562[2]);var state_48562__$1 = (function (){var statearr_48574 = state_48562;(statearr_48574[8] = inst_48555);
return statearr_48574;
})();var statearr_48575_48593 = state_48562__$1;(statearr_48575_48593[2] = null);
(statearr_48575_48593[1] = 2);
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
var state_machine__12424__auto____0 = (function (){var statearr_48579 = [null,null,null,null,null,null,null,null,null];(statearr_48579[0] = state_machine__12424__auto__);
(statearr_48579[1] = 1);
return statearr_48579;
});
var state_machine__12424__auto____1 = (function (state_48562){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_48562);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e48580){if((e48580 instanceof Object))
{var ex__12427__auto__ = e48580;var statearr_48581_48594 = state_48562;(statearr_48581_48594[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48595 = state_48562;
state_48562 = G__48595;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_48562){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_48562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_48582 = f__12523__auto__.call(null);(statearr_48582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___48583);
return statearr_48582;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12522__auto___48682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_48660){var state_val_48661 = (state_48660[1]);if((state_val_48661 === 1))
{var state_48660__$1 = state_48660;var statearr_48662_48683 = state_48660__$1;(statearr_48662_48683[2] = null);
(statearr_48662_48683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 2))
{var state_48660__$1 = state_48660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48660__$1,4,ch);
} else
{if((state_val_48661 === 3))
{var inst_48658 = (state_48660[2]);var state_48660__$1 = state_48660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48660__$1,inst_48658);
} else
{if((state_val_48661 === 4))
{var inst_48641 = (state_48660[7]);var inst_48641__$1 = (state_48660[2]);var inst_48642 = (inst_48641__$1 == null);var state_48660__$1 = (function (){var statearr_48663 = state_48660;(statearr_48663[7] = inst_48641__$1);
return statearr_48663;
})();if(cljs.core.truth_(inst_48642))
{var statearr_48664_48684 = state_48660__$1;(statearr_48664_48684[1] = 5);
} else
{var statearr_48665_48685 = state_48660__$1;(statearr_48665_48685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 5))
{var inst_48644 = cljs.core.async.close_BANG_.call(null,tc);var inst_48645 = cljs.core.async.close_BANG_.call(null,fc);var state_48660__$1 = (function (){var statearr_48666 = state_48660;(statearr_48666[8] = inst_48644);
return statearr_48666;
})();var statearr_48667_48686 = state_48660__$1;(statearr_48667_48686[2] = inst_48645);
(statearr_48667_48686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 6))
{var inst_48641 = (state_48660[7]);var inst_48647 = p.call(null,inst_48641);var state_48660__$1 = state_48660;if(cljs.core.truth_(inst_48647))
{var statearr_48668_48687 = state_48660__$1;(statearr_48668_48687[1] = 9);
} else
{var statearr_48669_48688 = state_48660__$1;(statearr_48669_48688[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 7))
{var inst_48656 = (state_48660[2]);var state_48660__$1 = state_48660;var statearr_48670_48689 = state_48660__$1;(statearr_48670_48689[2] = inst_48656);
(statearr_48670_48689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 8))
{var inst_48653 = (state_48660[2]);var state_48660__$1 = (function (){var statearr_48671 = state_48660;(statearr_48671[9] = inst_48653);
return statearr_48671;
})();var statearr_48672_48690 = state_48660__$1;(statearr_48672_48690[2] = null);
(statearr_48672_48690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 9))
{var state_48660__$1 = state_48660;var statearr_48673_48691 = state_48660__$1;(statearr_48673_48691[2] = tc);
(statearr_48673_48691[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 10))
{var state_48660__$1 = state_48660;var statearr_48674_48692 = state_48660__$1;(statearr_48674_48692[2] = fc);
(statearr_48674_48692[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48661 === 11))
{var inst_48641 = (state_48660[7]);var inst_48651 = (state_48660[2]);var state_48660__$1 = state_48660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48660__$1,8,inst_48651,inst_48641);
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
var state_machine__12424__auto____0 = (function (){var statearr_48678 = [null,null,null,null,null,null,null,null,null,null];(statearr_48678[0] = state_machine__12424__auto__);
(statearr_48678[1] = 1);
return statearr_48678;
});
var state_machine__12424__auto____1 = (function (state_48660){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_48660);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e48679){if((e48679 instanceof Object))
{var ex__12427__auto__ = e48679;var statearr_48680_48693 = state_48660;(statearr_48680_48693[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48694 = state_48660;
state_48660 = G__48694;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_48660){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_48660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_48681 = f__12523__auto__.call(null);(statearr_48681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___48682);
return statearr_48681;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_48741){var state_val_48742 = (state_48741[1]);if((state_val_48742 === 7))
{var inst_48737 = (state_48741[2]);var state_48741__$1 = state_48741;var statearr_48743_48759 = state_48741__$1;(statearr_48743_48759[2] = inst_48737);
(statearr_48743_48759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48742 === 6))
{var inst_48727 = (state_48741[7]);var inst_48730 = (state_48741[8]);var inst_48734 = f.call(null,inst_48727,inst_48730);var inst_48727__$1 = inst_48734;var state_48741__$1 = (function (){var statearr_48744 = state_48741;(statearr_48744[7] = inst_48727__$1);
return statearr_48744;
})();var statearr_48745_48760 = state_48741__$1;(statearr_48745_48760[2] = null);
(statearr_48745_48760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48742 === 5))
{var inst_48727 = (state_48741[7]);var state_48741__$1 = state_48741;var statearr_48746_48761 = state_48741__$1;(statearr_48746_48761[2] = inst_48727);
(statearr_48746_48761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48742 === 4))
{var inst_48730 = (state_48741[8]);var inst_48730__$1 = (state_48741[2]);var inst_48731 = (inst_48730__$1 == null);var state_48741__$1 = (function (){var statearr_48747 = state_48741;(statearr_48747[8] = inst_48730__$1);
return statearr_48747;
})();if(cljs.core.truth_(inst_48731))
{var statearr_48748_48762 = state_48741__$1;(statearr_48748_48762[1] = 5);
} else
{var statearr_48749_48763 = state_48741__$1;(statearr_48749_48763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48742 === 3))
{var inst_48739 = (state_48741[2]);var state_48741__$1 = state_48741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48741__$1,inst_48739);
} else
{if((state_val_48742 === 2))
{var state_48741__$1 = state_48741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48741__$1,4,ch);
} else
{if((state_val_48742 === 1))
{var inst_48727 = init;var state_48741__$1 = (function (){var statearr_48750 = state_48741;(statearr_48750[7] = inst_48727);
return statearr_48750;
})();var statearr_48751_48764 = state_48741__$1;(statearr_48751_48764[2] = null);
(statearr_48751_48764[1] = 2);
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
var state_machine__12424__auto____0 = (function (){var statearr_48755 = [null,null,null,null,null,null,null,null,null];(statearr_48755[0] = state_machine__12424__auto__);
(statearr_48755[1] = 1);
return statearr_48755;
});
var state_machine__12424__auto____1 = (function (state_48741){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_48741);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e48756){if((e48756 instanceof Object))
{var ex__12427__auto__ = e48756;var statearr_48757_48765 = state_48741;(statearr_48757_48765[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48766 = state_48741;
state_48741 = G__48766;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_48741){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_48741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_48758 = f__12523__auto__.call(null);(statearr_48758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_48758;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12522__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_48828){var state_val_48829 = (state_48828[1]);if((state_val_48829 === 1))
{var inst_48808 = cljs.core.seq.call(null,coll);var inst_48809 = inst_48808;var state_48828__$1 = (function (){var statearr_48830 = state_48828;(statearr_48830[7] = inst_48809);
return statearr_48830;
})();var statearr_48831_48849 = state_48828__$1;(statearr_48831_48849[2] = null);
(statearr_48831_48849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 2))
{var inst_48809 = (state_48828[7]);var state_48828__$1 = state_48828;if(cljs.core.truth_(inst_48809))
{var statearr_48832_48850 = state_48828__$1;(statearr_48832_48850[1] = 4);
} else
{var statearr_48833_48851 = state_48828__$1;(statearr_48833_48851[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 3))
{var inst_48826 = (state_48828[2]);var state_48828__$1 = state_48828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48828__$1,inst_48826);
} else
{if((state_val_48829 === 4))
{var inst_48809 = (state_48828[7]);var inst_48812 = cljs.core.first.call(null,inst_48809);var state_48828__$1 = state_48828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48828__$1,7,ch,inst_48812);
} else
{if((state_val_48829 === 5))
{var state_48828__$1 = state_48828;if(cljs.core.truth_(close_QMARK_))
{var statearr_48834_48852 = state_48828__$1;(statearr_48834_48852[1] = 8);
} else
{var statearr_48835_48853 = state_48828__$1;(statearr_48835_48853[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 6))
{var inst_48824 = (state_48828[2]);var state_48828__$1 = state_48828;var statearr_48836_48854 = state_48828__$1;(statearr_48836_48854[2] = inst_48824);
(statearr_48836_48854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 7))
{var inst_48809 = (state_48828[7]);var inst_48814 = (state_48828[2]);var inst_48815 = cljs.core.next.call(null,inst_48809);var inst_48809__$1 = inst_48815;var state_48828__$1 = (function (){var statearr_48837 = state_48828;(statearr_48837[8] = inst_48814);
(statearr_48837[7] = inst_48809__$1);
return statearr_48837;
})();var statearr_48838_48855 = state_48828__$1;(statearr_48838_48855[2] = null);
(statearr_48838_48855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 8))
{var inst_48819 = cljs.core.async.close_BANG_.call(null,ch);var state_48828__$1 = state_48828;var statearr_48839_48856 = state_48828__$1;(statearr_48839_48856[2] = inst_48819);
(statearr_48839_48856[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 9))
{var state_48828__$1 = state_48828;var statearr_48840_48857 = state_48828__$1;(statearr_48840_48857[2] = null);
(statearr_48840_48857[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48829 === 10))
{var inst_48822 = (state_48828[2]);var state_48828__$1 = state_48828;var statearr_48841_48858 = state_48828__$1;(statearr_48841_48858[2] = inst_48822);
(statearr_48841_48858[1] = 6);
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
var state_machine__12424__auto____0 = (function (){var statearr_48845 = [null,null,null,null,null,null,null,null,null];(statearr_48845[0] = state_machine__12424__auto__);
(statearr_48845[1] = 1);
return statearr_48845;
});
var state_machine__12424__auto____1 = (function (state_48828){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_48828);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e48846){if((e48846 instanceof Object))
{var ex__12427__auto__ = e48846;var statearr_48847_48859 = state_48828;(statearr_48847_48859[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48860 = state_48828;
state_48828 = G__48860;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_48828){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_48828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_48848 = f__12523__auto__.call(null);(statearr_48848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto__);
return statearr_48848;
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
cljs.core.async.Mux = (function (){var obj48862 = {};return obj48862;
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
cljs.core.async.Mult = (function (){var obj48864 = {};return obj48864;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t49088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49088 = (function (cs,ch,mult,meta49089){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49089 = meta49089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49088.cljs$lang$type = true;
cljs.core.async.t49088.cljs$lang$ctorStr = "cljs.core.async/t49088";
cljs.core.async.t49088.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t49088");
});})(cs))
;
cljs.core.async.t49088.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t49088.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t49088.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t49088.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t49088.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t49088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49090){var self__ = this;
var _49090__$1 = this;return self__.meta49089;
});})(cs))
;
cljs.core.async.t49088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49090,meta49089__$1){var self__ = this;
var _49090__$1 = this;return (new cljs.core.async.t49088(self__.cs,self__.ch,self__.mult,meta49089__$1));
});})(cs))
;
cljs.core.async.__GT_t49088 = ((function (cs){
return (function __GT_t49088(cs__$1,ch__$1,mult__$1,meta49089){return (new cljs.core.async.t49088(cs__$1,ch__$1,mult__$1,meta49089));
});})(cs))
;
}
return (new cljs.core.async.t49088(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12522__auto___49311 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_49225){var state_val_49226 = (state_49225[1]);if((state_val_49226 === 32))
{var inst_49093 = (state_49225[7]);var inst_49169 = (state_49225[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49225,31,Object,null,30);var inst_49176 = cljs.core.async.put_BANG_.call(null,inst_49169,inst_49093,done);var state_49225__$1 = state_49225;var statearr_49227_49312 = state_49225__$1;(statearr_49227_49312[2] = inst_49176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49225__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 1))
{var state_49225__$1 = state_49225;var statearr_49228_49313 = state_49225__$1;(statearr_49228_49313[2] = null);
(statearr_49228_49313[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 33))
{var inst_49182 = (state_49225[9]);var inst_49184 = cljs.core.chunked_seq_QMARK_.call(null,inst_49182);var state_49225__$1 = state_49225;if(inst_49184)
{var statearr_49229_49314 = state_49225__$1;(statearr_49229_49314[1] = 36);
} else
{var statearr_49230_49315 = state_49225__$1;(statearr_49230_49315[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 2))
{var state_49225__$1 = state_49225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49225__$1,4,ch);
} else
{if((state_val_49226 === 34))
{var state_49225__$1 = state_49225;var statearr_49231_49316 = state_49225__$1;(statearr_49231_49316[2] = null);
(statearr_49231_49316[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 3))
{var inst_49223 = (state_49225[2]);var state_49225__$1 = state_49225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49225__$1,inst_49223);
} else
{if((state_val_49226 === 35))
{var inst_49207 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49232_49317 = state_49225__$1;(statearr_49232_49317[2] = inst_49207);
(statearr_49232_49317[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 4))
{var inst_49093 = (state_49225[7]);var inst_49093__$1 = (state_49225[2]);var inst_49094 = (inst_49093__$1 == null);var state_49225__$1 = (function (){var statearr_49233 = state_49225;(statearr_49233[7] = inst_49093__$1);
return statearr_49233;
})();if(cljs.core.truth_(inst_49094))
{var statearr_49234_49318 = state_49225__$1;(statearr_49234_49318[1] = 5);
} else
{var statearr_49235_49319 = state_49225__$1;(statearr_49235_49319[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 36))
{var inst_49182 = (state_49225[9]);var inst_49186 = cljs.core.chunk_first.call(null,inst_49182);var inst_49187 = cljs.core.chunk_rest.call(null,inst_49182);var inst_49188 = cljs.core.count.call(null,inst_49186);var inst_49161 = inst_49187;var inst_49162 = inst_49186;var inst_49163 = inst_49188;var inst_49164 = 0;var state_49225__$1 = (function (){var statearr_49236 = state_49225;(statearr_49236[10] = inst_49161);
(statearr_49236[11] = inst_49162);
(statearr_49236[12] = inst_49164);
(statearr_49236[13] = inst_49163);
return statearr_49236;
})();var statearr_49237_49320 = state_49225__$1;(statearr_49237_49320[2] = null);
(statearr_49237_49320[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 5))
{var inst_49100 = cljs.core.deref.call(null,cs);var inst_49101 = cljs.core.seq.call(null,inst_49100);var inst_49102 = inst_49101;var inst_49103 = null;var inst_49104 = 0;var inst_49105 = 0;var state_49225__$1 = (function (){var statearr_49238 = state_49225;(statearr_49238[14] = inst_49105);
(statearr_49238[15] = inst_49103);
(statearr_49238[16] = inst_49104);
(statearr_49238[17] = inst_49102);
return statearr_49238;
})();var statearr_49239_49321 = state_49225__$1;(statearr_49239_49321[2] = null);
(statearr_49239_49321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 37))
{var inst_49182 = (state_49225[9]);var inst_49191 = cljs.core.first.call(null,inst_49182);var state_49225__$1 = (function (){var statearr_49240 = state_49225;(statearr_49240[18] = inst_49191);
return statearr_49240;
})();var statearr_49241_49322 = state_49225__$1;(statearr_49241_49322[2] = null);
(statearr_49241_49322[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 6))
{var inst_49153 = (state_49225[19]);var inst_49152 = cljs.core.deref.call(null,cs);var inst_49153__$1 = cljs.core.keys.call(null,inst_49152);var inst_49154 = cljs.core.count.call(null,inst_49153__$1);var inst_49155 = cljs.core.reset_BANG_.call(null,dctr,inst_49154);var inst_49160 = cljs.core.seq.call(null,inst_49153__$1);var inst_49161 = inst_49160;var inst_49162 = null;var inst_49163 = 0;var inst_49164 = 0;var state_49225__$1 = (function (){var statearr_49242 = state_49225;(statearr_49242[10] = inst_49161);
(statearr_49242[11] = inst_49162);
(statearr_49242[19] = inst_49153__$1);
(statearr_49242[20] = inst_49155);
(statearr_49242[12] = inst_49164);
(statearr_49242[13] = inst_49163);
return statearr_49242;
})();var statearr_49243_49323 = state_49225__$1;(statearr_49243_49323[2] = null);
(statearr_49243_49323[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 38))
{var inst_49204 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49244_49324 = state_49225__$1;(statearr_49244_49324[2] = inst_49204);
(statearr_49244_49324[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 7))
{var inst_49221 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49245_49325 = state_49225__$1;(statearr_49245_49325[2] = inst_49221);
(statearr_49245_49325[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 39))
{var inst_49182 = (state_49225[9]);var inst_49200 = (state_49225[2]);var inst_49201 = cljs.core.next.call(null,inst_49182);var inst_49161 = inst_49201;var inst_49162 = null;var inst_49163 = 0;var inst_49164 = 0;var state_49225__$1 = (function (){var statearr_49246 = state_49225;(statearr_49246[10] = inst_49161);
(statearr_49246[11] = inst_49162);
(statearr_49246[21] = inst_49200);
(statearr_49246[12] = inst_49164);
(statearr_49246[13] = inst_49163);
return statearr_49246;
})();var statearr_49247_49326 = state_49225__$1;(statearr_49247_49326[2] = null);
(statearr_49247_49326[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 8))
{var inst_49105 = (state_49225[14]);var inst_49104 = (state_49225[16]);var inst_49107 = (inst_49105 < inst_49104);var inst_49108 = inst_49107;var state_49225__$1 = state_49225;if(cljs.core.truth_(inst_49108))
{var statearr_49248_49327 = state_49225__$1;(statearr_49248_49327[1] = 10);
} else
{var statearr_49249_49328 = state_49225__$1;(statearr_49249_49328[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 40))
{var inst_49191 = (state_49225[18]);var inst_49192 = (state_49225[2]);var inst_49193 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_49194 = cljs.core.async.untap_STAR_.call(null,m,inst_49191);var state_49225__$1 = (function (){var statearr_49250 = state_49225;(statearr_49250[22] = inst_49192);
(statearr_49250[23] = inst_49193);
return statearr_49250;
})();var statearr_49251_49329 = state_49225__$1;(statearr_49251_49329[2] = inst_49194);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49225__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 9))
{var inst_49150 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49252_49330 = state_49225__$1;(statearr_49252_49330[2] = inst_49150);
(statearr_49252_49330[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 41))
{var inst_49191 = (state_49225[18]);var inst_49093 = (state_49225[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49225,40,Object,null,39);var inst_49198 = cljs.core.async.put_BANG_.call(null,inst_49191,inst_49093,done);var state_49225__$1 = state_49225;var statearr_49253_49331 = state_49225__$1;(statearr_49253_49331[2] = inst_49198);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49225__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 10))
{var inst_49105 = (state_49225[14]);var inst_49103 = (state_49225[15]);var inst_49111 = cljs.core._nth.call(null,inst_49103,inst_49105);var inst_49112 = cljs.core.nth.call(null,inst_49111,0,null);var inst_49113 = cljs.core.nth.call(null,inst_49111,1,null);var state_49225__$1 = (function (){var statearr_49254 = state_49225;(statearr_49254[24] = inst_49112);
return statearr_49254;
})();if(cljs.core.truth_(inst_49113))
{var statearr_49255_49332 = state_49225__$1;(statearr_49255_49332[1] = 13);
} else
{var statearr_49256_49333 = state_49225__$1;(statearr_49256_49333[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 42))
{var state_49225__$1 = state_49225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49225__$1,45,dchan);
} else
{if((state_val_49226 === 11))
{var inst_49102 = (state_49225[17]);var inst_49122 = (state_49225[25]);var inst_49122__$1 = cljs.core.seq.call(null,inst_49102);var state_49225__$1 = (function (){var statearr_49257 = state_49225;(statearr_49257[25] = inst_49122__$1);
return statearr_49257;
})();if(inst_49122__$1)
{var statearr_49258_49334 = state_49225__$1;(statearr_49258_49334[1] = 16);
} else
{var statearr_49259_49335 = state_49225__$1;(statearr_49259_49335[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 43))
{var state_49225__$1 = state_49225;var statearr_49260_49336 = state_49225__$1;(statearr_49260_49336[2] = null);
(statearr_49260_49336[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 12))
{var inst_49148 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49261_49337 = state_49225__$1;(statearr_49261_49337[2] = inst_49148);
(statearr_49261_49337[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 44))
{var inst_49218 = (state_49225[2]);var state_49225__$1 = (function (){var statearr_49262 = state_49225;(statearr_49262[26] = inst_49218);
return statearr_49262;
})();var statearr_49263_49338 = state_49225__$1;(statearr_49263_49338[2] = null);
(statearr_49263_49338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 13))
{var inst_49112 = (state_49225[24]);var inst_49115 = cljs.core.async.close_BANG_.call(null,inst_49112);var state_49225__$1 = state_49225;var statearr_49264_49339 = state_49225__$1;(statearr_49264_49339[2] = inst_49115);
(statearr_49264_49339[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 45))
{var inst_49215 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49268_49340 = state_49225__$1;(statearr_49268_49340[2] = inst_49215);
(statearr_49268_49340[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 14))
{var state_49225__$1 = state_49225;var statearr_49269_49341 = state_49225__$1;(statearr_49269_49341[2] = null);
(statearr_49269_49341[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 15))
{var inst_49105 = (state_49225[14]);var inst_49103 = (state_49225[15]);var inst_49104 = (state_49225[16]);var inst_49102 = (state_49225[17]);var inst_49118 = (state_49225[2]);var inst_49119 = (inst_49105 + 1);var tmp49265 = inst_49103;var tmp49266 = inst_49104;var tmp49267 = inst_49102;var inst_49102__$1 = tmp49267;var inst_49103__$1 = tmp49265;var inst_49104__$1 = tmp49266;var inst_49105__$1 = inst_49119;var state_49225__$1 = (function (){var statearr_49270 = state_49225;(statearr_49270[14] = inst_49105__$1);
(statearr_49270[15] = inst_49103__$1);
(statearr_49270[16] = inst_49104__$1);
(statearr_49270[17] = inst_49102__$1);
(statearr_49270[27] = inst_49118);
return statearr_49270;
})();var statearr_49271_49342 = state_49225__$1;(statearr_49271_49342[2] = null);
(statearr_49271_49342[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 16))
{var inst_49122 = (state_49225[25]);var inst_49124 = cljs.core.chunked_seq_QMARK_.call(null,inst_49122);var state_49225__$1 = state_49225;if(inst_49124)
{var statearr_49272_49343 = state_49225__$1;(statearr_49272_49343[1] = 19);
} else
{var statearr_49273_49344 = state_49225__$1;(statearr_49273_49344[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 17))
{var state_49225__$1 = state_49225;var statearr_49274_49345 = state_49225__$1;(statearr_49274_49345[2] = null);
(statearr_49274_49345[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 18))
{var inst_49146 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49275_49346 = state_49225__$1;(statearr_49275_49346[2] = inst_49146);
(statearr_49275_49346[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 19))
{var inst_49122 = (state_49225[25]);var inst_49126 = cljs.core.chunk_first.call(null,inst_49122);var inst_49127 = cljs.core.chunk_rest.call(null,inst_49122);var inst_49128 = cljs.core.count.call(null,inst_49126);var inst_49102 = inst_49127;var inst_49103 = inst_49126;var inst_49104 = inst_49128;var inst_49105 = 0;var state_49225__$1 = (function (){var statearr_49276 = state_49225;(statearr_49276[14] = inst_49105);
(statearr_49276[15] = inst_49103);
(statearr_49276[16] = inst_49104);
(statearr_49276[17] = inst_49102);
return statearr_49276;
})();var statearr_49277_49347 = state_49225__$1;(statearr_49277_49347[2] = null);
(statearr_49277_49347[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 20))
{var inst_49122 = (state_49225[25]);var inst_49132 = cljs.core.first.call(null,inst_49122);var inst_49133 = cljs.core.nth.call(null,inst_49132,0,null);var inst_49134 = cljs.core.nth.call(null,inst_49132,1,null);var state_49225__$1 = (function (){var statearr_49278 = state_49225;(statearr_49278[28] = inst_49133);
return statearr_49278;
})();if(cljs.core.truth_(inst_49134))
{var statearr_49279_49348 = state_49225__$1;(statearr_49279_49348[1] = 22);
} else
{var statearr_49280_49349 = state_49225__$1;(statearr_49280_49349[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 21))
{var inst_49143 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49281_49350 = state_49225__$1;(statearr_49281_49350[2] = inst_49143);
(statearr_49281_49350[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 22))
{var inst_49133 = (state_49225[28]);var inst_49136 = cljs.core.async.close_BANG_.call(null,inst_49133);var state_49225__$1 = state_49225;var statearr_49282_49351 = state_49225__$1;(statearr_49282_49351[2] = inst_49136);
(statearr_49282_49351[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 23))
{var state_49225__$1 = state_49225;var statearr_49283_49352 = state_49225__$1;(statearr_49283_49352[2] = null);
(statearr_49283_49352[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 24))
{var inst_49122 = (state_49225[25]);var inst_49139 = (state_49225[2]);var inst_49140 = cljs.core.next.call(null,inst_49122);var inst_49102 = inst_49140;var inst_49103 = null;var inst_49104 = 0;var inst_49105 = 0;var state_49225__$1 = (function (){var statearr_49284 = state_49225;(statearr_49284[14] = inst_49105);
(statearr_49284[15] = inst_49103);
(statearr_49284[16] = inst_49104);
(statearr_49284[17] = inst_49102);
(statearr_49284[29] = inst_49139);
return statearr_49284;
})();var statearr_49285_49353 = state_49225__$1;(statearr_49285_49353[2] = null);
(statearr_49285_49353[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 25))
{var inst_49164 = (state_49225[12]);var inst_49163 = (state_49225[13]);var inst_49166 = (inst_49164 < inst_49163);var inst_49167 = inst_49166;var state_49225__$1 = state_49225;if(cljs.core.truth_(inst_49167))
{var statearr_49286_49354 = state_49225__$1;(statearr_49286_49354[1] = 27);
} else
{var statearr_49287_49355 = state_49225__$1;(statearr_49287_49355[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 26))
{var inst_49153 = (state_49225[19]);var inst_49211 = (state_49225[2]);var inst_49212 = cljs.core.seq.call(null,inst_49153);var state_49225__$1 = (function (){var statearr_49288 = state_49225;(statearr_49288[30] = inst_49211);
return statearr_49288;
})();if(inst_49212)
{var statearr_49289_49356 = state_49225__$1;(statearr_49289_49356[1] = 42);
} else
{var statearr_49290_49357 = state_49225__$1;(statearr_49290_49357[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 27))
{var inst_49162 = (state_49225[11]);var inst_49164 = (state_49225[12]);var inst_49169 = cljs.core._nth.call(null,inst_49162,inst_49164);var state_49225__$1 = (function (){var statearr_49291 = state_49225;(statearr_49291[8] = inst_49169);
return statearr_49291;
})();var statearr_49292_49358 = state_49225__$1;(statearr_49292_49358[2] = null);
(statearr_49292_49358[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 28))
{var inst_49161 = (state_49225[10]);var inst_49182 = (state_49225[9]);var inst_49182__$1 = cljs.core.seq.call(null,inst_49161);var state_49225__$1 = (function (){var statearr_49296 = state_49225;(statearr_49296[9] = inst_49182__$1);
return statearr_49296;
})();if(inst_49182__$1)
{var statearr_49297_49359 = state_49225__$1;(statearr_49297_49359[1] = 33);
} else
{var statearr_49298_49360 = state_49225__$1;(statearr_49298_49360[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 29))
{var inst_49209 = (state_49225[2]);var state_49225__$1 = state_49225;var statearr_49299_49361 = state_49225__$1;(statearr_49299_49361[2] = inst_49209);
(statearr_49299_49361[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 30))
{var inst_49161 = (state_49225[10]);var inst_49162 = (state_49225[11]);var inst_49164 = (state_49225[12]);var inst_49163 = (state_49225[13]);var inst_49178 = (state_49225[2]);var inst_49179 = (inst_49164 + 1);var tmp49293 = inst_49161;var tmp49294 = inst_49162;var tmp49295 = inst_49163;var inst_49161__$1 = tmp49293;var inst_49162__$1 = tmp49294;var inst_49163__$1 = tmp49295;var inst_49164__$1 = inst_49179;var state_49225__$1 = (function (){var statearr_49300 = state_49225;(statearr_49300[10] = inst_49161__$1);
(statearr_49300[31] = inst_49178);
(statearr_49300[11] = inst_49162__$1);
(statearr_49300[12] = inst_49164__$1);
(statearr_49300[13] = inst_49163__$1);
return statearr_49300;
})();var statearr_49301_49362 = state_49225__$1;(statearr_49301_49362[2] = null);
(statearr_49301_49362[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49226 === 31))
{var inst_49169 = (state_49225[8]);var inst_49170 = (state_49225[2]);var inst_49171 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_49172 = cljs.core.async.untap_STAR_.call(null,m,inst_49169);var state_49225__$1 = (function (){var statearr_49302 = state_49225;(statearr_49302[32] = inst_49170);
(statearr_49302[33] = inst_49171);
return statearr_49302;
})();var statearr_49303_49363 = state_49225__$1;(statearr_49303_49363[2] = inst_49172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49225__$1);
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
var state_machine__12424__auto____0 = (function (){var statearr_49307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49307[0] = state_machine__12424__auto__);
(statearr_49307[1] = 1);
return statearr_49307;
});
var state_machine__12424__auto____1 = (function (state_49225){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_49225);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e49308){if((e49308 instanceof Object))
{var ex__12427__auto__ = e49308;var statearr_49309_49364 = state_49225;(statearr_49309_49364[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49225);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49365 = state_49225;
state_49225 = G__49365;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_49225){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_49225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_49310 = f__12523__auto__.call(null);(statearr_49310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___49311);
return statearr_49310;
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
cljs.core.async.Mix = (function (){var obj49367 = {};return obj49367;
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
;var m = (function (){if(typeof cljs.core.async.t49477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49477 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta49478){
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
this.meta49478 = meta49478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49477.cljs$lang$type = true;
cljs.core.async.t49477.cljs$lang$ctorStr = "cljs.core.async/t49477";
cljs.core.async.t49477.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t49477");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t49477.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49479){var self__ = this;
var _49479__$1 = this;return self__.meta49478;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49479,meta49478__$1){var self__ = this;
var _49479__$1 = this;return (new cljs.core.async.t49477(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta49478__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t49477 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t49477(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta49478){return (new cljs.core.async.t49477(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta49478));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t49477(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12522__auto___49586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_49544){var state_val_49545 = (state_49544[1]);if((state_val_49545 === 1))
{var inst_49483 = (state_49544[7]);var inst_49483__$1 = calc_state.call(null);var inst_49484 = cljs.core.seq_QMARK_.call(null,inst_49483__$1);var state_49544__$1 = (function (){var statearr_49546 = state_49544;(statearr_49546[7] = inst_49483__$1);
return statearr_49546;
})();if(inst_49484)
{var statearr_49547_49587 = state_49544__$1;(statearr_49547_49587[1] = 2);
} else
{var statearr_49548_49588 = state_49544__$1;(statearr_49548_49588[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 2))
{var inst_49483 = (state_49544[7]);var inst_49486 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49483);var state_49544__$1 = state_49544;var statearr_49549_49589 = state_49544__$1;(statearr_49549_49589[2] = inst_49486);
(statearr_49549_49589[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 3))
{var inst_49483 = (state_49544[7]);var state_49544__$1 = state_49544;var statearr_49550_49590 = state_49544__$1;(statearr_49550_49590[2] = inst_49483);
(statearr_49550_49590[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 4))
{var inst_49483 = (state_49544[7]);var inst_49489 = (state_49544[2]);var inst_49490 = cljs.core.get.call(null,inst_49489,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_49491 = cljs.core.get.call(null,inst_49489,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_49492 = cljs.core.get.call(null,inst_49489,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_49493 = inst_49483;var state_49544__$1 = (function (){var statearr_49551 = state_49544;(statearr_49551[8] = inst_49493);
(statearr_49551[9] = inst_49490);
(statearr_49551[10] = inst_49491);
(statearr_49551[11] = inst_49492);
return statearr_49551;
})();var statearr_49552_49591 = state_49544__$1;(statearr_49552_49591[2] = null);
(statearr_49552_49591[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 5))
{var inst_49493 = (state_49544[8]);var inst_49496 = cljs.core.seq_QMARK_.call(null,inst_49493);var state_49544__$1 = state_49544;if(inst_49496)
{var statearr_49553_49592 = state_49544__$1;(statearr_49553_49592[1] = 7);
} else
{var statearr_49554_49593 = state_49544__$1;(statearr_49554_49593[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 6))
{var inst_49542 = (state_49544[2]);var state_49544__$1 = state_49544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49544__$1,inst_49542);
} else
{if((state_val_49545 === 7))
{var inst_49493 = (state_49544[8]);var inst_49498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49493);var state_49544__$1 = state_49544;var statearr_49555_49594 = state_49544__$1;(statearr_49555_49594[2] = inst_49498);
(statearr_49555_49594[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 8))
{var inst_49493 = (state_49544[8]);var state_49544__$1 = state_49544;var statearr_49556_49595 = state_49544__$1;(statearr_49556_49595[2] = inst_49493);
(statearr_49556_49595[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 9))
{var inst_49501 = (state_49544[12]);var inst_49501__$1 = (state_49544[2]);var inst_49502 = cljs.core.get.call(null,inst_49501__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_49503 = cljs.core.get.call(null,inst_49501__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_49504 = cljs.core.get.call(null,inst_49501__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_49544__$1 = (function (){var statearr_49557 = state_49544;(statearr_49557[13] = inst_49504);
(statearr_49557[14] = inst_49503);
(statearr_49557[12] = inst_49501__$1);
return statearr_49557;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49544__$1,10,inst_49502);
} else
{if((state_val_49545 === 10))
{var inst_49509 = (state_49544[15]);var inst_49508 = (state_49544[16]);var inst_49507 = (state_49544[2]);var inst_49508__$1 = cljs.core.nth.call(null,inst_49507,0,null);var inst_49509__$1 = cljs.core.nth.call(null,inst_49507,1,null);var inst_49510 = (inst_49508__$1 == null);var inst_49511 = cljs.core._EQ_.call(null,inst_49509__$1,change);var inst_49512 = (inst_49510) || (inst_49511);var state_49544__$1 = (function (){var statearr_49558 = state_49544;(statearr_49558[15] = inst_49509__$1);
(statearr_49558[16] = inst_49508__$1);
return statearr_49558;
})();if(cljs.core.truth_(inst_49512))
{var statearr_49559_49596 = state_49544__$1;(statearr_49559_49596[1] = 11);
} else
{var statearr_49560_49597 = state_49544__$1;(statearr_49560_49597[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 11))
{var inst_49508 = (state_49544[16]);var inst_49514 = (inst_49508 == null);var state_49544__$1 = state_49544;if(cljs.core.truth_(inst_49514))
{var statearr_49561_49598 = state_49544__$1;(statearr_49561_49598[1] = 14);
} else
{var statearr_49562_49599 = state_49544__$1;(statearr_49562_49599[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 12))
{var inst_49509 = (state_49544[15]);var inst_49504 = (state_49544[13]);var inst_49523 = (state_49544[17]);var inst_49523__$1 = inst_49504.call(null,inst_49509);var state_49544__$1 = (function (){var statearr_49563 = state_49544;(statearr_49563[17] = inst_49523__$1);
return statearr_49563;
})();if(cljs.core.truth_(inst_49523__$1))
{var statearr_49564_49600 = state_49544__$1;(statearr_49564_49600[1] = 17);
} else
{var statearr_49565_49601 = state_49544__$1;(statearr_49565_49601[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 13))
{var inst_49540 = (state_49544[2]);var state_49544__$1 = state_49544;var statearr_49566_49602 = state_49544__$1;(statearr_49566_49602[2] = inst_49540);
(statearr_49566_49602[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 14))
{var inst_49509 = (state_49544[15]);var inst_49516 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49509);var state_49544__$1 = state_49544;var statearr_49567_49603 = state_49544__$1;(statearr_49567_49603[2] = inst_49516);
(statearr_49567_49603[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 15))
{var state_49544__$1 = state_49544;var statearr_49568_49604 = state_49544__$1;(statearr_49568_49604[2] = null);
(statearr_49568_49604[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 16))
{var inst_49519 = (state_49544[2]);var inst_49520 = calc_state.call(null);var inst_49493 = inst_49520;var state_49544__$1 = (function (){var statearr_49569 = state_49544;(statearr_49569[8] = inst_49493);
(statearr_49569[18] = inst_49519);
return statearr_49569;
})();var statearr_49570_49605 = state_49544__$1;(statearr_49570_49605[2] = null);
(statearr_49570_49605[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 17))
{var inst_49523 = (state_49544[17]);var state_49544__$1 = state_49544;var statearr_49571_49606 = state_49544__$1;(statearr_49571_49606[2] = inst_49523);
(statearr_49571_49606[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 18))
{var inst_49509 = (state_49544[15]);var inst_49504 = (state_49544[13]);var inst_49503 = (state_49544[14]);var inst_49526 = cljs.core.empty_QMARK_.call(null,inst_49504);var inst_49527 = inst_49503.call(null,inst_49509);var inst_49528 = cljs.core.not.call(null,inst_49527);var inst_49529 = (inst_49526) && (inst_49528);var state_49544__$1 = state_49544;var statearr_49572_49607 = state_49544__$1;(statearr_49572_49607[2] = inst_49529);
(statearr_49572_49607[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 19))
{var inst_49531 = (state_49544[2]);var state_49544__$1 = state_49544;if(cljs.core.truth_(inst_49531))
{var statearr_49573_49608 = state_49544__$1;(statearr_49573_49608[1] = 20);
} else
{var statearr_49574_49609 = state_49544__$1;(statearr_49574_49609[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 20))
{var inst_49508 = (state_49544[16]);var state_49544__$1 = state_49544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49544__$1,23,out,inst_49508);
} else
{if((state_val_49545 === 21))
{var state_49544__$1 = state_49544;var statearr_49575_49610 = state_49544__$1;(statearr_49575_49610[2] = null);
(statearr_49575_49610[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 22))
{var inst_49501 = (state_49544[12]);var inst_49537 = (state_49544[2]);var inst_49493 = inst_49501;var state_49544__$1 = (function (){var statearr_49576 = state_49544;(statearr_49576[8] = inst_49493);
(statearr_49576[19] = inst_49537);
return statearr_49576;
})();var statearr_49577_49611 = state_49544__$1;(statearr_49577_49611[2] = null);
(statearr_49577_49611[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49545 === 23))
{var inst_49534 = (state_49544[2]);var state_49544__$1 = state_49544;var statearr_49578_49612 = state_49544__$1;(statearr_49578_49612[2] = inst_49534);
(statearr_49578_49612[1] = 22);
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
var state_machine__12424__auto____0 = (function (){var statearr_49582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49582[0] = state_machine__12424__auto__);
(statearr_49582[1] = 1);
return statearr_49582;
});
var state_machine__12424__auto____1 = (function (state_49544){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_49544);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e49583){if((e49583 instanceof Object))
{var ex__12427__auto__ = e49583;var statearr_49584_49613 = state_49544;(statearr_49584_49613[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49544);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49614 = state_49544;
state_49544 = G__49614;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_49544){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_49544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_49585 = f__12523__auto__.call(null);(statearr_49585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___49586);
return statearr_49585;
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
cljs.core.async.Pub = (function (){var obj49616 = {};return obj49616;
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
return (function (p1__49617_SHARP_){if(cljs.core.truth_(p1__49617_SHARP_.call(null,topic)))
{return p1__49617_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__49617_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7850__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t49742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49742 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta49743){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta49743 = meta49743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49742.cljs$lang$type = true;
cljs.core.async.t49742.cljs$lang$ctorStr = "cljs.core.async/t49742";
cljs.core.async.t49742.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8412__auto__,writer__8413__auto__,opt__8414__auto__){return cljs.core._write.call(null,writer__8413__auto__,"cljs.core.async/t49742");
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t49742.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49744){var self__ = this;
var _49744__$1 = this;return self__.meta49743;
});})(mults,ensure_mult))
;
cljs.core.async.t49742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49744,meta49743__$1){var self__ = this;
var _49744__$1 = this;return (new cljs.core.async.t49742(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta49743__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t49742 = ((function (mults,ensure_mult){
return (function __GT_t49742(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49743){return (new cljs.core.async.t49742(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49743));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t49742(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12522__auto___49866 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_49818){var state_val_49819 = (state_49818[1]);if((state_val_49819 === 1))
{var state_49818__$1 = state_49818;var statearr_49820_49867 = state_49818__$1;(statearr_49820_49867[2] = null);
(statearr_49820_49867[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 2))
{var state_49818__$1 = state_49818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49818__$1,4,ch);
} else
{if((state_val_49819 === 3))
{var inst_49816 = (state_49818[2]);var state_49818__$1 = state_49818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49818__$1,inst_49816);
} else
{if((state_val_49819 === 4))
{var inst_49747 = (state_49818[7]);var inst_49747__$1 = (state_49818[2]);var inst_49748 = (inst_49747__$1 == null);var state_49818__$1 = (function (){var statearr_49821 = state_49818;(statearr_49821[7] = inst_49747__$1);
return statearr_49821;
})();if(cljs.core.truth_(inst_49748))
{var statearr_49822_49868 = state_49818__$1;(statearr_49822_49868[1] = 5);
} else
{var statearr_49823_49869 = state_49818__$1;(statearr_49823_49869[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 5))
{var inst_49754 = cljs.core.deref.call(null,mults);var inst_49755 = cljs.core.vals.call(null,inst_49754);var inst_49756 = cljs.core.seq.call(null,inst_49755);var inst_49757 = inst_49756;var inst_49758 = null;var inst_49759 = 0;var inst_49760 = 0;var state_49818__$1 = (function (){var statearr_49824 = state_49818;(statearr_49824[8] = inst_49758);
(statearr_49824[9] = inst_49759);
(statearr_49824[10] = inst_49757);
(statearr_49824[11] = inst_49760);
return statearr_49824;
})();var statearr_49825_49870 = state_49818__$1;(statearr_49825_49870[2] = null);
(statearr_49825_49870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 6))
{var inst_49797 = (state_49818[12]);var inst_49795 = (state_49818[13]);var inst_49747 = (state_49818[7]);var inst_49795__$1 = topic_fn.call(null,inst_49747);var inst_49796 = cljs.core.deref.call(null,mults);var inst_49797__$1 = cljs.core.get.call(null,inst_49796,inst_49795__$1);var state_49818__$1 = (function (){var statearr_49826 = state_49818;(statearr_49826[12] = inst_49797__$1);
(statearr_49826[13] = inst_49795__$1);
return statearr_49826;
})();if(cljs.core.truth_(inst_49797__$1))
{var statearr_49827_49871 = state_49818__$1;(statearr_49827_49871[1] = 19);
} else
{var statearr_49828_49872 = state_49818__$1;(statearr_49828_49872[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 7))
{var inst_49814 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49829_49873 = state_49818__$1;(statearr_49829_49873[2] = inst_49814);
(statearr_49829_49873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 8))
{var inst_49759 = (state_49818[9]);var inst_49760 = (state_49818[11]);var inst_49762 = (inst_49760 < inst_49759);var inst_49763 = inst_49762;var state_49818__$1 = state_49818;if(cljs.core.truth_(inst_49763))
{var statearr_49833_49874 = state_49818__$1;(statearr_49833_49874[1] = 10);
} else
{var statearr_49834_49875 = state_49818__$1;(statearr_49834_49875[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 9))
{var inst_49793 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49835_49876 = state_49818__$1;(statearr_49835_49876[2] = inst_49793);
(statearr_49835_49876[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 10))
{var inst_49758 = (state_49818[8]);var inst_49759 = (state_49818[9]);var inst_49757 = (state_49818[10]);var inst_49760 = (state_49818[11]);var inst_49765 = cljs.core._nth.call(null,inst_49758,inst_49760);var inst_49766 = cljs.core.async.muxch_STAR_.call(null,inst_49765);var inst_49767 = cljs.core.async.close_BANG_.call(null,inst_49766);var inst_49768 = (inst_49760 + 1);var tmp49830 = inst_49758;var tmp49831 = inst_49759;var tmp49832 = inst_49757;var inst_49757__$1 = tmp49832;var inst_49758__$1 = tmp49830;var inst_49759__$1 = tmp49831;var inst_49760__$1 = inst_49768;var state_49818__$1 = (function (){var statearr_49836 = state_49818;(statearr_49836[8] = inst_49758__$1);
(statearr_49836[9] = inst_49759__$1);
(statearr_49836[14] = inst_49767);
(statearr_49836[10] = inst_49757__$1);
(statearr_49836[11] = inst_49760__$1);
return statearr_49836;
})();var statearr_49837_49877 = state_49818__$1;(statearr_49837_49877[2] = null);
(statearr_49837_49877[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 11))
{var inst_49771 = (state_49818[15]);var inst_49757 = (state_49818[10]);var inst_49771__$1 = cljs.core.seq.call(null,inst_49757);var state_49818__$1 = (function (){var statearr_49838 = state_49818;(statearr_49838[15] = inst_49771__$1);
return statearr_49838;
})();if(inst_49771__$1)
{var statearr_49839_49878 = state_49818__$1;(statearr_49839_49878[1] = 13);
} else
{var statearr_49840_49879 = state_49818__$1;(statearr_49840_49879[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 12))
{var inst_49791 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49841_49880 = state_49818__$1;(statearr_49841_49880[2] = inst_49791);
(statearr_49841_49880[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 13))
{var inst_49771 = (state_49818[15]);var inst_49773 = cljs.core.chunked_seq_QMARK_.call(null,inst_49771);var state_49818__$1 = state_49818;if(inst_49773)
{var statearr_49842_49881 = state_49818__$1;(statearr_49842_49881[1] = 16);
} else
{var statearr_49843_49882 = state_49818__$1;(statearr_49843_49882[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 14))
{var state_49818__$1 = state_49818;var statearr_49844_49883 = state_49818__$1;(statearr_49844_49883[2] = null);
(statearr_49844_49883[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 15))
{var inst_49789 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49845_49884 = state_49818__$1;(statearr_49845_49884[2] = inst_49789);
(statearr_49845_49884[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 16))
{var inst_49771 = (state_49818[15]);var inst_49775 = cljs.core.chunk_first.call(null,inst_49771);var inst_49776 = cljs.core.chunk_rest.call(null,inst_49771);var inst_49777 = cljs.core.count.call(null,inst_49775);var inst_49757 = inst_49776;var inst_49758 = inst_49775;var inst_49759 = inst_49777;var inst_49760 = 0;var state_49818__$1 = (function (){var statearr_49846 = state_49818;(statearr_49846[8] = inst_49758);
(statearr_49846[9] = inst_49759);
(statearr_49846[10] = inst_49757);
(statearr_49846[11] = inst_49760);
return statearr_49846;
})();var statearr_49847_49885 = state_49818__$1;(statearr_49847_49885[2] = null);
(statearr_49847_49885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 17))
{var inst_49771 = (state_49818[15]);var inst_49780 = cljs.core.first.call(null,inst_49771);var inst_49781 = cljs.core.async.muxch_STAR_.call(null,inst_49780);var inst_49782 = cljs.core.async.close_BANG_.call(null,inst_49781);var inst_49783 = cljs.core.next.call(null,inst_49771);var inst_49757 = inst_49783;var inst_49758 = null;var inst_49759 = 0;var inst_49760 = 0;var state_49818__$1 = (function (){var statearr_49848 = state_49818;(statearr_49848[16] = inst_49782);
(statearr_49848[8] = inst_49758);
(statearr_49848[9] = inst_49759);
(statearr_49848[10] = inst_49757);
(statearr_49848[11] = inst_49760);
return statearr_49848;
})();var statearr_49849_49886 = state_49818__$1;(statearr_49849_49886[2] = null);
(statearr_49849_49886[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 18))
{var inst_49786 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49850_49887 = state_49818__$1;(statearr_49850_49887[2] = inst_49786);
(statearr_49850_49887[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 19))
{var state_49818__$1 = state_49818;var statearr_49851_49888 = state_49818__$1;(statearr_49851_49888[2] = null);
(statearr_49851_49888[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 20))
{var state_49818__$1 = state_49818;var statearr_49852_49889 = state_49818__$1;(statearr_49852_49889[2] = null);
(statearr_49852_49889[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 21))
{var inst_49811 = (state_49818[2]);var state_49818__$1 = (function (){var statearr_49853 = state_49818;(statearr_49853[17] = inst_49811);
return statearr_49853;
})();var statearr_49854_49890 = state_49818__$1;(statearr_49854_49890[2] = null);
(statearr_49854_49890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 22))
{var inst_49808 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49855_49891 = state_49818__$1;(statearr_49855_49891[2] = inst_49808);
(statearr_49855_49891[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 23))
{var inst_49795 = (state_49818[13]);var inst_49799 = (state_49818[2]);var inst_49800 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49795);var state_49818__$1 = (function (){var statearr_49856 = state_49818;(statearr_49856[18] = inst_49799);
return statearr_49856;
})();var statearr_49857_49892 = state_49818__$1;(statearr_49857_49892[2] = inst_49800);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49818__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49819 === 24))
{var inst_49797 = (state_49818[12]);var inst_49747 = (state_49818[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49818,23,Object,null,22);var inst_49804 = cljs.core.async.muxch_STAR_.call(null,inst_49797);var state_49818__$1 = state_49818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49818__$1,25,inst_49804,inst_49747);
} else
{if((state_val_49819 === 25))
{var inst_49806 = (state_49818[2]);var state_49818__$1 = state_49818;var statearr_49858_49893 = state_49818__$1;(statearr_49858_49893[2] = inst_49806);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49818__$1);
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
var state_machine__12424__auto____0 = (function (){var statearr_49862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49862[0] = state_machine__12424__auto__);
(statearr_49862[1] = 1);
return statearr_49862;
});
var state_machine__12424__auto____1 = (function (state_49818){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_49818);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e49863){if((e49863 instanceof Object))
{var ex__12427__auto__ = e49863;var statearr_49864_49894 = state_49818;(statearr_49864_49894[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49895 = state_49818;
state_49818 = G__49895;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_49818){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_49818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_49865 = f__12523__auto__.call(null);(statearr_49865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___49866);
return statearr_49865;
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
,cljs.core.range.call(null,cnt));var c__12522__auto___50032 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50002){var state_val_50003 = (state_50002[1]);if((state_val_50003 === 1))
{var state_50002__$1 = state_50002;var statearr_50004_50033 = state_50002__$1;(statearr_50004_50033[2] = null);
(statearr_50004_50033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 2))
{var inst_49965 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_49966 = 0;var state_50002__$1 = (function (){var statearr_50005 = state_50002;(statearr_50005[7] = inst_49966);
(statearr_50005[8] = inst_49965);
return statearr_50005;
})();var statearr_50006_50034 = state_50002__$1;(statearr_50006_50034[2] = null);
(statearr_50006_50034[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 3))
{var inst_50000 = (state_50002[2]);var state_50002__$1 = state_50002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50002__$1,inst_50000);
} else
{if((state_val_50003 === 4))
{var inst_49966 = (state_50002[7]);var inst_49968 = (inst_49966 < cnt);var state_50002__$1 = state_50002;if(cljs.core.truth_(inst_49968))
{var statearr_50007_50035 = state_50002__$1;(statearr_50007_50035[1] = 6);
} else
{var statearr_50008_50036 = state_50002__$1;(statearr_50008_50036[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 5))
{var inst_49986 = (state_50002[2]);var state_50002__$1 = (function (){var statearr_50009 = state_50002;(statearr_50009[9] = inst_49986);
return statearr_50009;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50002__$1,12,dchan);
} else
{if((state_val_50003 === 6))
{var state_50002__$1 = state_50002;var statearr_50010_50037 = state_50002__$1;(statearr_50010_50037[2] = null);
(statearr_50010_50037[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 7))
{var state_50002__$1 = state_50002;var statearr_50011_50038 = state_50002__$1;(statearr_50011_50038[2] = null);
(statearr_50011_50038[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 8))
{var inst_49984 = (state_50002[2]);var state_50002__$1 = state_50002;var statearr_50012_50039 = state_50002__$1;(statearr_50012_50039[2] = inst_49984);
(statearr_50012_50039[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 9))
{var inst_49966 = (state_50002[7]);var inst_49979 = (state_50002[2]);var inst_49980 = (inst_49966 + 1);var inst_49966__$1 = inst_49980;var state_50002__$1 = (function (){var statearr_50013 = state_50002;(statearr_50013[10] = inst_49979);
(statearr_50013[7] = inst_49966__$1);
return statearr_50013;
})();var statearr_50014_50040 = state_50002__$1;(statearr_50014_50040[2] = null);
(statearr_50014_50040[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 10))
{var inst_49970 = (state_50002[2]);var inst_49971 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_50002__$1 = (function (){var statearr_50015 = state_50002;(statearr_50015[11] = inst_49970);
return statearr_50015;
})();var statearr_50016_50041 = state_50002__$1;(statearr_50016_50041[2] = inst_49971);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50002__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 11))
{var inst_49966 = (state_50002[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50002,10,Object,null,9);var inst_49975 = chs__$1.call(null,inst_49966);var inst_49976 = done.call(null,inst_49966);var inst_49977 = cljs.core.async.take_BANG_.call(null,inst_49975,inst_49976);var state_50002__$1 = state_50002;var statearr_50017_50042 = state_50002__$1;(statearr_50017_50042[2] = inst_49977);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50002__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 12))
{var inst_49988 = (state_50002[12]);var inst_49988__$1 = (state_50002[2]);var inst_49989 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49988__$1);var state_50002__$1 = (function (){var statearr_50018 = state_50002;(statearr_50018[12] = inst_49988__$1);
return statearr_50018;
})();if(cljs.core.truth_(inst_49989))
{var statearr_50019_50043 = state_50002__$1;(statearr_50019_50043[1] = 13);
} else
{var statearr_50020_50044 = state_50002__$1;(statearr_50020_50044[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 13))
{var inst_49991 = cljs.core.async.close_BANG_.call(null,out);var state_50002__$1 = state_50002;var statearr_50021_50045 = state_50002__$1;(statearr_50021_50045[2] = inst_49991);
(statearr_50021_50045[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 14))
{var inst_49988 = (state_50002[12]);var inst_49993 = cljs.core.apply.call(null,f,inst_49988);var state_50002__$1 = state_50002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50002__$1,16,out,inst_49993);
} else
{if((state_val_50003 === 15))
{var inst_49998 = (state_50002[2]);var state_50002__$1 = state_50002;var statearr_50022_50046 = state_50002__$1;(statearr_50022_50046[2] = inst_49998);
(statearr_50022_50046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50003 === 16))
{var inst_49995 = (state_50002[2]);var state_50002__$1 = (function (){var statearr_50023 = state_50002;(statearr_50023[13] = inst_49995);
return statearr_50023;
})();var statearr_50024_50047 = state_50002__$1;(statearr_50024_50047[2] = null);
(statearr_50024_50047[1] = 2);
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
var state_machine__12424__auto____0 = (function (){var statearr_50028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50028[0] = state_machine__12424__auto__);
(statearr_50028[1] = 1);
return statearr_50028;
});
var state_machine__12424__auto____1 = (function (state_50002){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50002);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50029){if((e50029 instanceof Object))
{var ex__12427__auto__ = e50029;var statearr_50030_50048 = state_50002;(statearr_50030_50048[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50002);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50049 = state_50002;
state_50002 = G__50049;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50002){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50031 = f__12523__auto__.call(null);(statearr_50031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___50032);
return statearr_50031;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___50157 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50133){var state_val_50134 = (state_50133[1]);if((state_val_50134 === 1))
{var inst_50104 = cljs.core.vec.call(null,chs);var inst_50105 = inst_50104;var state_50133__$1 = (function (){var statearr_50135 = state_50133;(statearr_50135[7] = inst_50105);
return statearr_50135;
})();var statearr_50136_50158 = state_50133__$1;(statearr_50136_50158[2] = null);
(statearr_50136_50158[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 2))
{var inst_50105 = (state_50133[7]);var inst_50107 = cljs.core.count.call(null,inst_50105);var inst_50108 = (inst_50107 > 0);var state_50133__$1 = state_50133;if(cljs.core.truth_(inst_50108))
{var statearr_50137_50159 = state_50133__$1;(statearr_50137_50159[1] = 4);
} else
{var statearr_50138_50160 = state_50133__$1;(statearr_50138_50160[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 3))
{var inst_50131 = (state_50133[2]);var state_50133__$1 = state_50133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50133__$1,inst_50131);
} else
{if((state_val_50134 === 4))
{var inst_50105 = (state_50133[7]);var state_50133__$1 = state_50133;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_50133__$1,7,inst_50105);
} else
{if((state_val_50134 === 5))
{var inst_50127 = cljs.core.async.close_BANG_.call(null,out);var state_50133__$1 = state_50133;var statearr_50139_50161 = state_50133__$1;(statearr_50139_50161[2] = inst_50127);
(statearr_50139_50161[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 6))
{var inst_50129 = (state_50133[2]);var state_50133__$1 = state_50133;var statearr_50140_50162 = state_50133__$1;(statearr_50140_50162[2] = inst_50129);
(statearr_50140_50162[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 7))
{var inst_50112 = (state_50133[8]);var inst_50113 = (state_50133[9]);var inst_50112__$1 = (state_50133[2]);var inst_50113__$1 = cljs.core.nth.call(null,inst_50112__$1,0,null);var inst_50114 = cljs.core.nth.call(null,inst_50112__$1,1,null);var inst_50115 = (inst_50113__$1 == null);var state_50133__$1 = (function (){var statearr_50141 = state_50133;(statearr_50141[8] = inst_50112__$1);
(statearr_50141[9] = inst_50113__$1);
(statearr_50141[10] = inst_50114);
return statearr_50141;
})();if(cljs.core.truth_(inst_50115))
{var statearr_50142_50163 = state_50133__$1;(statearr_50142_50163[1] = 8);
} else
{var statearr_50143_50164 = state_50133__$1;(statearr_50143_50164[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 8))
{var inst_50105 = (state_50133[7]);var inst_50112 = (state_50133[8]);var inst_50113 = (state_50133[9]);var inst_50114 = (state_50133[10]);var inst_50117 = (function (){var c = inst_50114;var v = inst_50113;var vec__50110 = inst_50112;var cs = inst_50105;return ((function (c,v,vec__50110,cs,inst_50105,inst_50112,inst_50113,inst_50114,state_val_50134){
return (function (p1__50050_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__50050_SHARP_);
});
;})(c,v,vec__50110,cs,inst_50105,inst_50112,inst_50113,inst_50114,state_val_50134))
})();var inst_50118 = cljs.core.filterv.call(null,inst_50117,inst_50105);var inst_50105__$1 = inst_50118;var state_50133__$1 = (function (){var statearr_50144 = state_50133;(statearr_50144[7] = inst_50105__$1);
return statearr_50144;
})();var statearr_50145_50165 = state_50133__$1;(statearr_50145_50165[2] = null);
(statearr_50145_50165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 9))
{var inst_50113 = (state_50133[9]);var state_50133__$1 = state_50133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50133__$1,11,out,inst_50113);
} else
{if((state_val_50134 === 10))
{var inst_50125 = (state_50133[2]);var state_50133__$1 = state_50133;var statearr_50147_50166 = state_50133__$1;(statearr_50147_50166[2] = inst_50125);
(statearr_50147_50166[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50134 === 11))
{var inst_50105 = (state_50133[7]);var inst_50122 = (state_50133[2]);var tmp50146 = inst_50105;var inst_50105__$1 = tmp50146;var state_50133__$1 = (function (){var statearr_50148 = state_50133;(statearr_50148[11] = inst_50122);
(statearr_50148[7] = inst_50105__$1);
return statearr_50148;
})();var statearr_50149_50167 = state_50133__$1;(statearr_50149_50167[2] = null);
(statearr_50149_50167[1] = 2);
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
var state_machine__12424__auto____0 = (function (){var statearr_50153 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50153[0] = state_machine__12424__auto__);
(statearr_50153[1] = 1);
return statearr_50153;
});
var state_machine__12424__auto____1 = (function (state_50133){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50133);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50154){if((e50154 instanceof Object))
{var ex__12427__auto__ = e50154;var statearr_50155_50168 = state_50133;(statearr_50155_50168[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50169 = state_50133;
state_50133 = G__50169;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50133){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50156 = f__12523__auto__.call(null);(statearr_50156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___50157);
return statearr_50156;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___50262 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50239){var state_val_50240 = (state_50239[1]);if((state_val_50240 === 1))
{var inst_50216 = 0;var state_50239__$1 = (function (){var statearr_50241 = state_50239;(statearr_50241[7] = inst_50216);
return statearr_50241;
})();var statearr_50242_50263 = state_50239__$1;(statearr_50242_50263[2] = null);
(statearr_50242_50263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 2))
{var inst_50216 = (state_50239[7]);var inst_50218 = (inst_50216 < n);var state_50239__$1 = state_50239;if(cljs.core.truth_(inst_50218))
{var statearr_50243_50264 = state_50239__$1;(statearr_50243_50264[1] = 4);
} else
{var statearr_50244_50265 = state_50239__$1;(statearr_50244_50265[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 3))
{var inst_50236 = (state_50239[2]);var inst_50237 = cljs.core.async.close_BANG_.call(null,out);var state_50239__$1 = (function (){var statearr_50245 = state_50239;(statearr_50245[8] = inst_50236);
return statearr_50245;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50239__$1,inst_50237);
} else
{if((state_val_50240 === 4))
{var state_50239__$1 = state_50239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50239__$1,7,ch);
} else
{if((state_val_50240 === 5))
{var state_50239__$1 = state_50239;var statearr_50246_50266 = state_50239__$1;(statearr_50246_50266[2] = null);
(statearr_50246_50266[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 6))
{var inst_50234 = (state_50239[2]);var state_50239__$1 = state_50239;var statearr_50247_50267 = state_50239__$1;(statearr_50247_50267[2] = inst_50234);
(statearr_50247_50267[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 7))
{var inst_50221 = (state_50239[9]);var inst_50221__$1 = (state_50239[2]);var inst_50222 = (inst_50221__$1 == null);var inst_50223 = cljs.core.not.call(null,inst_50222);var state_50239__$1 = (function (){var statearr_50248 = state_50239;(statearr_50248[9] = inst_50221__$1);
return statearr_50248;
})();if(inst_50223)
{var statearr_50249_50268 = state_50239__$1;(statearr_50249_50268[1] = 8);
} else
{var statearr_50250_50269 = state_50239__$1;(statearr_50250_50269[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 8))
{var inst_50221 = (state_50239[9]);var state_50239__$1 = state_50239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50239__$1,11,out,inst_50221);
} else
{if((state_val_50240 === 9))
{var state_50239__$1 = state_50239;var statearr_50251_50270 = state_50239__$1;(statearr_50251_50270[2] = null);
(statearr_50251_50270[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 10))
{var inst_50231 = (state_50239[2]);var state_50239__$1 = state_50239;var statearr_50252_50271 = state_50239__$1;(statearr_50252_50271[2] = inst_50231);
(statearr_50252_50271[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50240 === 11))
{var inst_50216 = (state_50239[7]);var inst_50226 = (state_50239[2]);var inst_50227 = (inst_50216 + 1);var inst_50216__$1 = inst_50227;var state_50239__$1 = (function (){var statearr_50253 = state_50239;(statearr_50253[7] = inst_50216__$1);
(statearr_50253[10] = inst_50226);
return statearr_50253;
})();var statearr_50254_50272 = state_50239__$1;(statearr_50254_50272[2] = null);
(statearr_50254_50272[1] = 2);
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
var state_machine__12424__auto____0 = (function (){var statearr_50258 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50258[0] = state_machine__12424__auto__);
(statearr_50258[1] = 1);
return statearr_50258;
});
var state_machine__12424__auto____1 = (function (state_50239){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50239);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50259){if((e50259 instanceof Object))
{var ex__12427__auto__ = e50259;var statearr_50260_50273 = state_50239;(statearr_50260_50273[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50274 = state_50239;
state_50239 = G__50274;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50239){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50261 = f__12523__auto__.call(null);(statearr_50261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___50262);
return statearr_50261;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___50371 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50346){var state_val_50347 = (state_50346[1]);if((state_val_50347 === 1))
{var inst_50323 = null;var state_50346__$1 = (function (){var statearr_50348 = state_50346;(statearr_50348[7] = inst_50323);
return statearr_50348;
})();var statearr_50349_50372 = state_50346__$1;(statearr_50349_50372[2] = null);
(statearr_50349_50372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 2))
{var state_50346__$1 = state_50346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50346__$1,4,ch);
} else
{if((state_val_50347 === 3))
{var inst_50343 = (state_50346[2]);var inst_50344 = cljs.core.async.close_BANG_.call(null,out);var state_50346__$1 = (function (){var statearr_50350 = state_50346;(statearr_50350[8] = inst_50343);
return statearr_50350;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50346__$1,inst_50344);
} else
{if((state_val_50347 === 4))
{var inst_50326 = (state_50346[9]);var inst_50326__$1 = (state_50346[2]);var inst_50327 = (inst_50326__$1 == null);var inst_50328 = cljs.core.not.call(null,inst_50327);var state_50346__$1 = (function (){var statearr_50351 = state_50346;(statearr_50351[9] = inst_50326__$1);
return statearr_50351;
})();if(inst_50328)
{var statearr_50352_50373 = state_50346__$1;(statearr_50352_50373[1] = 5);
} else
{var statearr_50353_50374 = state_50346__$1;(statearr_50353_50374[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 5))
{var inst_50323 = (state_50346[7]);var inst_50326 = (state_50346[9]);var inst_50330 = cljs.core._EQ_.call(null,inst_50326,inst_50323);var state_50346__$1 = state_50346;if(inst_50330)
{var statearr_50354_50375 = state_50346__$1;(statearr_50354_50375[1] = 8);
} else
{var statearr_50355_50376 = state_50346__$1;(statearr_50355_50376[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 6))
{var state_50346__$1 = state_50346;var statearr_50357_50377 = state_50346__$1;(statearr_50357_50377[2] = null);
(statearr_50357_50377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 7))
{var inst_50341 = (state_50346[2]);var state_50346__$1 = state_50346;var statearr_50358_50378 = state_50346__$1;(statearr_50358_50378[2] = inst_50341);
(statearr_50358_50378[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 8))
{var inst_50323 = (state_50346[7]);var tmp50356 = inst_50323;var inst_50323__$1 = tmp50356;var state_50346__$1 = (function (){var statearr_50359 = state_50346;(statearr_50359[7] = inst_50323__$1);
return statearr_50359;
})();var statearr_50360_50379 = state_50346__$1;(statearr_50360_50379[2] = null);
(statearr_50360_50379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 9))
{var inst_50326 = (state_50346[9]);var state_50346__$1 = state_50346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50346__$1,11,out,inst_50326);
} else
{if((state_val_50347 === 10))
{var inst_50338 = (state_50346[2]);var state_50346__$1 = state_50346;var statearr_50361_50380 = state_50346__$1;(statearr_50361_50380[2] = inst_50338);
(statearr_50361_50380[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50347 === 11))
{var inst_50326 = (state_50346[9]);var inst_50335 = (state_50346[2]);var inst_50323 = inst_50326;var state_50346__$1 = (function (){var statearr_50362 = state_50346;(statearr_50362[10] = inst_50335);
(statearr_50362[7] = inst_50323);
return statearr_50362;
})();var statearr_50363_50381 = state_50346__$1;(statearr_50363_50381[2] = null);
(statearr_50363_50381[1] = 2);
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
var state_machine__12424__auto____0 = (function (){var statearr_50367 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50367[0] = state_machine__12424__auto__);
(statearr_50367[1] = 1);
return statearr_50367;
});
var state_machine__12424__auto____1 = (function (state_50346){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50346);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50368){if((e50368 instanceof Object))
{var ex__12427__auto__ = e50368;var statearr_50369_50382 = state_50346;(statearr_50369_50382[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50383 = state_50346;
state_50346 = G__50383;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50346){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50370 = f__12523__auto__.call(null);(statearr_50370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___50371);
return statearr_50370;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___50518 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50488){var state_val_50489 = (state_50488[1]);if((state_val_50489 === 1))
{var inst_50451 = (new Array(n));var inst_50452 = inst_50451;var inst_50453 = 0;var state_50488__$1 = (function (){var statearr_50490 = state_50488;(statearr_50490[7] = inst_50452);
(statearr_50490[8] = inst_50453);
return statearr_50490;
})();var statearr_50491_50519 = state_50488__$1;(statearr_50491_50519[2] = null);
(statearr_50491_50519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 2))
{var state_50488__$1 = state_50488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50488__$1,4,ch);
} else
{if((state_val_50489 === 3))
{var inst_50486 = (state_50488[2]);var state_50488__$1 = state_50488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50488__$1,inst_50486);
} else
{if((state_val_50489 === 4))
{var inst_50456 = (state_50488[9]);var inst_50456__$1 = (state_50488[2]);var inst_50457 = (inst_50456__$1 == null);var inst_50458 = cljs.core.not.call(null,inst_50457);var state_50488__$1 = (function (){var statearr_50492 = state_50488;(statearr_50492[9] = inst_50456__$1);
return statearr_50492;
})();if(inst_50458)
{var statearr_50493_50520 = state_50488__$1;(statearr_50493_50520[1] = 5);
} else
{var statearr_50494_50521 = state_50488__$1;(statearr_50494_50521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 5))
{var inst_50456 = (state_50488[9]);var inst_50461 = (state_50488[10]);var inst_50452 = (state_50488[7]);var inst_50453 = (state_50488[8]);var inst_50460 = (inst_50452[inst_50453] = inst_50456);var inst_50461__$1 = (inst_50453 + 1);var inst_50462 = (inst_50461__$1 < n);var state_50488__$1 = (function (){var statearr_50495 = state_50488;(statearr_50495[10] = inst_50461__$1);
(statearr_50495[11] = inst_50460);
return statearr_50495;
})();if(cljs.core.truth_(inst_50462))
{var statearr_50496_50522 = state_50488__$1;(statearr_50496_50522[1] = 8);
} else
{var statearr_50497_50523 = state_50488__$1;(statearr_50497_50523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 6))
{var inst_50453 = (state_50488[8]);var inst_50474 = (inst_50453 > 0);var state_50488__$1 = state_50488;if(cljs.core.truth_(inst_50474))
{var statearr_50499_50524 = state_50488__$1;(statearr_50499_50524[1] = 12);
} else
{var statearr_50500_50525 = state_50488__$1;(statearr_50500_50525[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 7))
{var inst_50484 = (state_50488[2]);var state_50488__$1 = state_50488;var statearr_50501_50526 = state_50488__$1;(statearr_50501_50526[2] = inst_50484);
(statearr_50501_50526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 8))
{var inst_50461 = (state_50488[10]);var inst_50452 = (state_50488[7]);var tmp50498 = inst_50452;var inst_50452__$1 = tmp50498;var inst_50453 = inst_50461;var state_50488__$1 = (function (){var statearr_50502 = state_50488;(statearr_50502[7] = inst_50452__$1);
(statearr_50502[8] = inst_50453);
return statearr_50502;
})();var statearr_50503_50527 = state_50488__$1;(statearr_50503_50527[2] = null);
(statearr_50503_50527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 9))
{var inst_50452 = (state_50488[7]);var inst_50466 = cljs.core.vec.call(null,inst_50452);var state_50488__$1 = state_50488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50488__$1,11,out,inst_50466);
} else
{if((state_val_50489 === 10))
{var inst_50472 = (state_50488[2]);var state_50488__$1 = state_50488;var statearr_50504_50528 = state_50488__$1;(statearr_50504_50528[2] = inst_50472);
(statearr_50504_50528[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 11))
{var inst_50468 = (state_50488[2]);var inst_50469 = (new Array(n));var inst_50452 = inst_50469;var inst_50453 = 0;var state_50488__$1 = (function (){var statearr_50505 = state_50488;(statearr_50505[12] = inst_50468);
(statearr_50505[7] = inst_50452);
(statearr_50505[8] = inst_50453);
return statearr_50505;
})();var statearr_50506_50529 = state_50488__$1;(statearr_50506_50529[2] = null);
(statearr_50506_50529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 12))
{var inst_50452 = (state_50488[7]);var inst_50476 = cljs.core.vec.call(null,inst_50452);var state_50488__$1 = state_50488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50488__$1,15,out,inst_50476);
} else
{if((state_val_50489 === 13))
{var state_50488__$1 = state_50488;var statearr_50507_50530 = state_50488__$1;(statearr_50507_50530[2] = null);
(statearr_50507_50530[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 14))
{var inst_50481 = (state_50488[2]);var inst_50482 = cljs.core.async.close_BANG_.call(null,out);var state_50488__$1 = (function (){var statearr_50508 = state_50488;(statearr_50508[13] = inst_50481);
return statearr_50508;
})();var statearr_50509_50531 = state_50488__$1;(statearr_50509_50531[2] = inst_50482);
(statearr_50509_50531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50489 === 15))
{var inst_50478 = (state_50488[2]);var state_50488__$1 = state_50488;var statearr_50510_50532 = state_50488__$1;(statearr_50510_50532[2] = inst_50478);
(statearr_50510_50532[1] = 14);
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
var state_machine__12424__auto____0 = (function (){var statearr_50514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50514[0] = state_machine__12424__auto__);
(statearr_50514[1] = 1);
return statearr_50514;
});
var state_machine__12424__auto____1 = (function (state_50488){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50488);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50515){if((e50515 instanceof Object))
{var ex__12427__auto__ = e50515;var statearr_50516_50533 = state_50488;(statearr_50516_50533[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50534 = state_50488;
state_50488 = G__50534;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50488){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50517 = f__12523__auto__.call(null);(statearr_50517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___50518);
return statearr_50517;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12522__auto___50677 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12523__auto__ = (function (){var switch__12423__auto__ = (function (state_50647){var state_val_50648 = (state_50647[1]);if((state_val_50648 === 1))
{var inst_50606 = [];var inst_50607 = inst_50606;var inst_50608 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_50647__$1 = (function (){var statearr_50649 = state_50647;(statearr_50649[7] = inst_50608);
(statearr_50649[8] = inst_50607);
return statearr_50649;
})();var statearr_50650_50678 = state_50647__$1;(statearr_50650_50678[2] = null);
(statearr_50650_50678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 2))
{var state_50647__$1 = state_50647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50647__$1,4,ch);
} else
{if((state_val_50648 === 3))
{var inst_50645 = (state_50647[2]);var state_50647__$1 = state_50647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50647__$1,inst_50645);
} else
{if((state_val_50648 === 4))
{var inst_50611 = (state_50647[9]);var inst_50611__$1 = (state_50647[2]);var inst_50612 = (inst_50611__$1 == null);var inst_50613 = cljs.core.not.call(null,inst_50612);var state_50647__$1 = (function (){var statearr_50651 = state_50647;(statearr_50651[9] = inst_50611__$1);
return statearr_50651;
})();if(inst_50613)
{var statearr_50652_50679 = state_50647__$1;(statearr_50652_50679[1] = 5);
} else
{var statearr_50653_50680 = state_50647__$1;(statearr_50653_50680[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 5))
{var inst_50611 = (state_50647[9]);var inst_50615 = (state_50647[10]);var inst_50608 = (state_50647[7]);var inst_50615__$1 = f.call(null,inst_50611);var inst_50616 = cljs.core._EQ_.call(null,inst_50615__$1,inst_50608);var inst_50617 = cljs.core.keyword_identical_QMARK_.call(null,inst_50608,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_50618 = (inst_50616) || (inst_50617);var state_50647__$1 = (function (){var statearr_50654 = state_50647;(statearr_50654[10] = inst_50615__$1);
return statearr_50654;
})();if(cljs.core.truth_(inst_50618))
{var statearr_50655_50681 = state_50647__$1;(statearr_50655_50681[1] = 8);
} else
{var statearr_50656_50682 = state_50647__$1;(statearr_50656_50682[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 6))
{var inst_50607 = (state_50647[8]);var inst_50632 = inst_50607.length;var inst_50633 = (inst_50632 > 0);var state_50647__$1 = state_50647;if(cljs.core.truth_(inst_50633))
{var statearr_50658_50683 = state_50647__$1;(statearr_50658_50683[1] = 12);
} else
{var statearr_50659_50684 = state_50647__$1;(statearr_50659_50684[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 7))
{var inst_50643 = (state_50647[2]);var state_50647__$1 = state_50647;var statearr_50660_50685 = state_50647__$1;(statearr_50660_50685[2] = inst_50643);
(statearr_50660_50685[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 8))
{var inst_50611 = (state_50647[9]);var inst_50615 = (state_50647[10]);var inst_50607 = (state_50647[8]);var inst_50620 = inst_50607.push(inst_50611);var tmp50657 = inst_50607;var inst_50607__$1 = tmp50657;var inst_50608 = inst_50615;var state_50647__$1 = (function (){var statearr_50661 = state_50647;(statearr_50661[11] = inst_50620);
(statearr_50661[7] = inst_50608);
(statearr_50661[8] = inst_50607__$1);
return statearr_50661;
})();var statearr_50662_50686 = state_50647__$1;(statearr_50662_50686[2] = null);
(statearr_50662_50686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 9))
{var inst_50607 = (state_50647[8]);var inst_50623 = cljs.core.vec.call(null,inst_50607);var state_50647__$1 = state_50647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50647__$1,11,out,inst_50623);
} else
{if((state_val_50648 === 10))
{var inst_50630 = (state_50647[2]);var state_50647__$1 = state_50647;var statearr_50663_50687 = state_50647__$1;(statearr_50663_50687[2] = inst_50630);
(statearr_50663_50687[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 11))
{var inst_50611 = (state_50647[9]);var inst_50615 = (state_50647[10]);var inst_50625 = (state_50647[2]);var inst_50626 = [];var inst_50627 = inst_50626.push(inst_50611);var inst_50607 = inst_50626;var inst_50608 = inst_50615;var state_50647__$1 = (function (){var statearr_50664 = state_50647;(statearr_50664[12] = inst_50627);
(statearr_50664[13] = inst_50625);
(statearr_50664[7] = inst_50608);
(statearr_50664[8] = inst_50607);
return statearr_50664;
})();var statearr_50665_50688 = state_50647__$1;(statearr_50665_50688[2] = null);
(statearr_50665_50688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 12))
{var inst_50607 = (state_50647[8]);var inst_50635 = cljs.core.vec.call(null,inst_50607);var state_50647__$1 = state_50647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50647__$1,15,out,inst_50635);
} else
{if((state_val_50648 === 13))
{var state_50647__$1 = state_50647;var statearr_50666_50689 = state_50647__$1;(statearr_50666_50689[2] = null);
(statearr_50666_50689[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 14))
{var inst_50640 = (state_50647[2]);var inst_50641 = cljs.core.async.close_BANG_.call(null,out);var state_50647__$1 = (function (){var statearr_50667 = state_50647;(statearr_50667[14] = inst_50640);
return statearr_50667;
})();var statearr_50668_50690 = state_50647__$1;(statearr_50668_50690[2] = inst_50641);
(statearr_50668_50690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50648 === 15))
{var inst_50637 = (state_50647[2]);var state_50647__$1 = state_50647;var statearr_50669_50691 = state_50647__$1;(statearr_50669_50691[2] = inst_50637);
(statearr_50669_50691[1] = 14);
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
var state_machine__12424__auto____0 = (function (){var statearr_50673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50673[0] = state_machine__12424__auto__);
(statearr_50673[1] = 1);
return statearr_50673;
});
var state_machine__12424__auto____1 = (function (state_50647){while(true){
var ret_value__12425__auto__ = (function (){try{while(true){
var result__12426__auto__ = switch__12423__auto__.call(null,state_50647);if(cljs.core.keyword_identical_QMARK_.call(null,result__12426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12426__auto__;
}
break;
}
}catch (e50674){if((e50674 instanceof Object))
{var ex__12427__auto__ = e50674;var statearr_50675_50692 = state_50647;(statearr_50675_50692[5] = ex__12427__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12425__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50693 = state_50647;
state_50647 = G__50693;
continue;
}
} else
{return ret_value__12425__auto__;
}
break;
}
});
state_machine__12424__auto__ = function(state_50647){
switch(arguments.length){
case 0:
return state_machine__12424__auto____0.call(this);
case 1:
return state_machine__12424__auto____1.call(this,state_50647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12424__auto____0;
state_machine__12424__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12424__auto____1;
return state_machine__12424__auto__;
})()
;})(switch__12423__auto__))
})();var state__12524__auto__ = (function (){var statearr_50676 = f__12523__auto__.call(null);(statearr_50676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12522__auto___50677);
return statearr_50676;
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
