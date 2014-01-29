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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t49117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49117 = (function (f,fn_handler,meta49118){
this.f = f;
this.fn_handler = fn_handler;
this.meta49118 = meta49118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49117.cljs$lang$type = true;
cljs.core.async.t49117.cljs$lang$ctorStr = "cljs.core.async/t49117";
cljs.core.async.t49117.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49117");
});
cljs.core.async.t49117.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t49117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t49117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49119){var self__ = this;
var _49119__$1 = this;return self__.meta49118;
});
cljs.core.async.t49117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49119,meta49118__$1){var self__ = this;
var _49119__$1 = this;return (new cljs.core.async.t49117(self__.f,self__.fn_handler,meta49118__$1));
});
cljs.core.async.__GT_t49117 = (function __GT_t49117(f__$1,fn_handler__$1,meta49118){return (new cljs.core.async.t49117(f__$1,fn_handler__$1,meta49118));
});
}
return (new cljs.core.async.t49117(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__49121 = buff;if(G__49121)
{var bit__8506__auto__ = null;if(cljs.core.truth_((function (){var or__7862__auto__ = bit__8506__auto__;if(cljs.core.truth_(or__7862__auto__))
{return or__7862__auto__;
} else
{return G__49121.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__49121.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__49121);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__49121);
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
{var val_49122 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_49122);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_49122);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8704__auto___49123 = n;var x_49124 = 0;while(true){
if((x_49124 < n__8704__auto___49123))
{(a[x_49124] = 0);
{
var G__49125 = (x_49124 + 1);
x_49124 = G__49125;
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
var G__49126 = (i + 1);
i = G__49126;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t49130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49130 = (function (flag,alt_flag,meta49131){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta49131 = meta49131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49130.cljs$lang$type = true;
cljs.core.async.t49130.cljs$lang$ctorStr = "cljs.core.async/t49130";
cljs.core.async.t49130.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49130");
});
cljs.core.async.t49130.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t49130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t49130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49132){var self__ = this;
var _49132__$1 = this;return self__.meta49131;
});
cljs.core.async.t49130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49132,meta49131__$1){var self__ = this;
var _49132__$1 = this;return (new cljs.core.async.t49130(self__.flag,self__.alt_flag,meta49131__$1));
});
cljs.core.async.__GT_t49130 = (function __GT_t49130(flag__$1,alt_flag__$1,meta49131){return (new cljs.core.async.t49130(flag__$1,alt_flag__$1,meta49131));
});
}
return (new cljs.core.async.t49130(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t49136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49136 = (function (cb,flag,alt_handler,meta49137){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta49137 = meta49137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49136.cljs$lang$type = true;
cljs.core.async.t49136.cljs$lang$ctorStr = "cljs.core.async/t49136";
cljs.core.async.t49136.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49136");
});
cljs.core.async.t49136.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t49136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t49136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49138){var self__ = this;
var _49138__$1 = this;return self__.meta49137;
});
cljs.core.async.t49136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49138,meta49137__$1){var self__ = this;
var _49138__$1 = this;return (new cljs.core.async.t49136(self__.cb,self__.flag,self__.alt_handler,meta49137__$1));
});
cljs.core.async.__GT_t49136 = (function __GT_t49136(cb__$1,flag__$1,alt_handler__$1,meta49137){return (new cljs.core.async.t49136(cb__$1,flag__$1,alt_handler__$1,meta49137));
});
}
return (new cljs.core.async.t49136(cb,flag,alt_handler,null));
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
return (function (p1__49139_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49139_SHARP_,port], null));
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
var G__49140 = (i + 1);
i = G__49140;
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
var alts_BANG___delegate = function (ports,p__49141){var map__49143 = p__49141;var map__49143__$1 = ((cljs.core.seq_QMARK_.call(null,map__49143))?cljs.core.apply.call(null,cljs.core.hash_map,map__49143):map__49143);var opts = map__49143__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__49141 = null;if (arguments.length > 1) {
  p__49141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__49141);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__49144){
var ports = cljs.core.first(arglist__49144);
var p__49141 = cljs.core.rest(arglist__49144);
return alts_BANG___delegate(ports,p__49141);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t49152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49152 = (function (ch,f,map_LT_,meta49153){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta49153 = meta49153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49152.cljs$lang$type = true;
cljs.core.async.t49152.cljs$lang$ctorStr = "cljs.core.async/t49152";
cljs.core.async.t49152.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49152");
});
cljs.core.async.t49152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t49152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t49155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49155 = (function (fn1,_,meta49153,ch,f,map_LT_,meta49156){
this.fn1 = fn1;
this._ = _;
this.meta49153 = meta49153;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta49156 = meta49156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49155.cljs$lang$type = true;
cljs.core.async.t49155.cljs$lang$ctorStr = "cljs.core.async/t49155";
cljs.core.async.t49155.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49155");
});
cljs.core.async.t49155.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t49155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t49155.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t49155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__49145_SHARP_){return f1.call(null,(((p1__49145_SHARP_ == null))?null:self__.f.call(null,p1__49145_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t49155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49157){var self__ = this;
var _49157__$1 = this;return self__.meta49156;
});
cljs.core.async.t49155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49157,meta49156__$1){var self__ = this;
var _49157__$1 = this;return (new cljs.core.async.t49155(self__.fn1,self__._,self__.meta49153,self__.ch,self__.f,self__.map_LT_,meta49156__$1));
});
cljs.core.async.__GT_t49155 = (function __GT_t49155(fn1__$1,___$2,meta49153__$1,ch__$2,f__$2,map_LT___$2,meta49156){return (new cljs.core.async.t49155(fn1__$1,___$2,meta49153__$1,ch__$2,f__$2,map_LT___$2,meta49156));
});
}
return (new cljs.core.async.t49155(fn1,___$1,self__.meta49153,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t49152.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t49152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49154){var self__ = this;
var _49154__$1 = this;return self__.meta49153;
});
cljs.core.async.t49152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49154,meta49153__$1){var self__ = this;
var _49154__$1 = this;return (new cljs.core.async.t49152(self__.ch,self__.f,self__.map_LT_,meta49153__$1));
});
cljs.core.async.__GT_t49152 = (function __GT_t49152(ch__$1,f__$1,map_LT___$1,meta49153){return (new cljs.core.async.t49152(ch__$1,f__$1,map_LT___$1,meta49153));
});
}
return (new cljs.core.async.t49152(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t49161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49161 = (function (ch,f,map_GT_,meta49162){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta49162 = meta49162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49161.cljs$lang$type = true;
cljs.core.async.t49161.cljs$lang$ctorStr = "cljs.core.async/t49161";
cljs.core.async.t49161.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49161");
});
cljs.core.async.t49161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t49161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t49161.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t49161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49163){var self__ = this;
var _49163__$1 = this;return self__.meta49162;
});
cljs.core.async.t49161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49163,meta49162__$1){var self__ = this;
var _49163__$1 = this;return (new cljs.core.async.t49161(self__.ch,self__.f,self__.map_GT_,meta49162__$1));
});
cljs.core.async.__GT_t49161 = (function __GT_t49161(ch__$1,f__$1,map_GT___$1,meta49162){return (new cljs.core.async.t49161(ch__$1,f__$1,map_GT___$1,meta49162));
});
}
return (new cljs.core.async.t49161(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t49167 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49167 = (function (ch,p,filter_GT_,meta49168){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta49168 = meta49168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49167.cljs$lang$type = true;
cljs.core.async.t49167.cljs$lang$ctorStr = "cljs.core.async/t49167";
cljs.core.async.t49167.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t49167");
});
cljs.core.async.t49167.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t49167.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t49167.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t49167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49169){var self__ = this;
var _49169__$1 = this;return self__.meta49168;
});
cljs.core.async.t49167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49169,meta49168__$1){var self__ = this;
var _49169__$1 = this;return (new cljs.core.async.t49167(self__.ch,self__.p,self__.filter_GT_,meta49168__$1));
});
cljs.core.async.__GT_t49167 = (function __GT_t49167(ch__$1,p__$1,filter_GT___$1,meta49168){return (new cljs.core.async.t49167(ch__$1,p__$1,filter_GT___$1,meta49168));
});
}
return (new cljs.core.async.t49167(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___49252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_49231){var state_val_49232 = (state_49231[1]);if((state_val_49232 === 1))
{var state_49231__$1 = state_49231;var statearr_49233_49253 = state_49231__$1;(statearr_49233_49253[2] = null);
(statearr_49233_49253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 2))
{var state_49231__$1 = state_49231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49231__$1,4,ch);
} else
{if((state_val_49232 === 3))
{var inst_49229 = (state_49231[2]);var state_49231__$1 = state_49231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49231__$1,inst_49229);
} else
{if((state_val_49232 === 4))
{var inst_49213 = (state_49231[7]);var inst_49213__$1 = (state_49231[2]);var inst_49214 = (inst_49213__$1 == null);var state_49231__$1 = (function (){var statearr_49234 = state_49231;(statearr_49234[7] = inst_49213__$1);
return statearr_49234;
})();if(cljs.core.truth_(inst_49214))
{var statearr_49235_49254 = state_49231__$1;(statearr_49235_49254[1] = 5);
} else
{var statearr_49236_49255 = state_49231__$1;(statearr_49236_49255[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 5))
{var inst_49216 = cljs.core.async.close_BANG_.call(null,out);var state_49231__$1 = state_49231;var statearr_49237_49256 = state_49231__$1;(statearr_49237_49256[2] = inst_49216);
(statearr_49237_49256[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 6))
{var inst_49213 = (state_49231[7]);var inst_49218 = p.call(null,inst_49213);var state_49231__$1 = state_49231;if(cljs.core.truth_(inst_49218))
{var statearr_49238_49257 = state_49231__$1;(statearr_49238_49257[1] = 8);
} else
{var statearr_49239_49258 = state_49231__$1;(statearr_49239_49258[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 7))
{var inst_49227 = (state_49231[2]);var state_49231__$1 = state_49231;var statearr_49240_49259 = state_49231__$1;(statearr_49240_49259[2] = inst_49227);
(statearr_49240_49259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 8))
{var inst_49213 = (state_49231[7]);var state_49231__$1 = state_49231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49231__$1,11,out,inst_49213);
} else
{if((state_val_49232 === 9))
{var state_49231__$1 = state_49231;var statearr_49241_49260 = state_49231__$1;(statearr_49241_49260[2] = null);
(statearr_49241_49260[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 10))
{var inst_49224 = (state_49231[2]);var state_49231__$1 = (function (){var statearr_49242 = state_49231;(statearr_49242[8] = inst_49224);
return statearr_49242;
})();var statearr_49243_49261 = state_49231__$1;(statearr_49243_49261[2] = null);
(statearr_49243_49261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49232 === 11))
{var inst_49221 = (state_49231[2]);var state_49231__$1 = state_49231;var statearr_49244_49262 = state_49231__$1;(statearr_49244_49262[2] = inst_49221);
(statearr_49244_49262[1] = 10);
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
var state_machine__13648__auto____0 = (function (){var statearr_49248 = [null,null,null,null,null,null,null,null,null];(statearr_49248[0] = state_machine__13648__auto__);
(statearr_49248[1] = 1);
return statearr_49248;
});
var state_machine__13648__auto____1 = (function (state_49231){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_49231);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e49249){if((e49249 instanceof Object))
{var ex__13651__auto__ = e49249;var statearr_49250_49263 = state_49231;(statearr_49250_49263[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49264 = state_49231;
state_49231 = G__49264;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_49231){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_49231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_49251 = f__13746__auto__.call(null);(statearr_49251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___49252);
return statearr_49251;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_49416){var state_val_49417 = (state_49416[1]);if((state_val_49417 === 1))
{var state_49416__$1 = state_49416;var statearr_49418_49455 = state_49416__$1;(statearr_49418_49455[2] = null);
(statearr_49418_49455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 2))
{var state_49416__$1 = state_49416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49416__$1,4,in$);
} else
{if((state_val_49417 === 3))
{var inst_49414 = (state_49416[2]);var state_49416__$1 = state_49416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49416__$1,inst_49414);
} else
{if((state_val_49417 === 4))
{var inst_49362 = (state_49416[7]);var inst_49362__$1 = (state_49416[2]);var inst_49363 = (inst_49362__$1 == null);var state_49416__$1 = (function (){var statearr_49419 = state_49416;(statearr_49419[7] = inst_49362__$1);
return statearr_49419;
})();if(cljs.core.truth_(inst_49363))
{var statearr_49420_49456 = state_49416__$1;(statearr_49420_49456[1] = 5);
} else
{var statearr_49421_49457 = state_49416__$1;(statearr_49421_49457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 5))
{var inst_49365 = cljs.core.async.close_BANG_.call(null,out);var state_49416__$1 = state_49416;var statearr_49422_49458 = state_49416__$1;(statearr_49422_49458[2] = inst_49365);
(statearr_49422_49458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 6))
{var inst_49362 = (state_49416[7]);var inst_49367 = f.call(null,inst_49362);var inst_49372 = cljs.core.seq.call(null,inst_49367);var inst_49373 = inst_49372;var inst_49374 = null;var inst_49375 = 0;var inst_49376 = 0;var state_49416__$1 = (function (){var statearr_49423 = state_49416;(statearr_49423[8] = inst_49376);
(statearr_49423[9] = inst_49373);
(statearr_49423[10] = inst_49375);
(statearr_49423[11] = inst_49374);
return statearr_49423;
})();var statearr_49424_49459 = state_49416__$1;(statearr_49424_49459[2] = null);
(statearr_49424_49459[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 7))
{var inst_49412 = (state_49416[2]);var state_49416__$1 = state_49416;var statearr_49425_49460 = state_49416__$1;(statearr_49425_49460[2] = inst_49412);
(statearr_49425_49460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 8))
{var inst_49376 = (state_49416[8]);var inst_49375 = (state_49416[10]);var inst_49378 = (inst_49376 < inst_49375);var inst_49379 = inst_49378;var state_49416__$1 = state_49416;if(cljs.core.truth_(inst_49379))
{var statearr_49426_49461 = state_49416__$1;(statearr_49426_49461[1] = 10);
} else
{var statearr_49427_49462 = state_49416__$1;(statearr_49427_49462[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 9))
{var inst_49409 = (state_49416[2]);var state_49416__$1 = (function (){var statearr_49428 = state_49416;(statearr_49428[12] = inst_49409);
return statearr_49428;
})();var statearr_49429_49463 = state_49416__$1;(statearr_49429_49463[2] = null);
(statearr_49429_49463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 10))
{var inst_49376 = (state_49416[8]);var inst_49374 = (state_49416[11]);var inst_49381 = cljs.core._nth.call(null,inst_49374,inst_49376);var state_49416__$1 = state_49416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49416__$1,13,out,inst_49381);
} else
{if((state_val_49417 === 11))
{var inst_49373 = (state_49416[9]);var inst_49387 = (state_49416[13]);var inst_49387__$1 = cljs.core.seq.call(null,inst_49373);var state_49416__$1 = (function (){var statearr_49433 = state_49416;(statearr_49433[13] = inst_49387__$1);
return statearr_49433;
})();if(inst_49387__$1)
{var statearr_49434_49464 = state_49416__$1;(statearr_49434_49464[1] = 14);
} else
{var statearr_49435_49465 = state_49416__$1;(statearr_49435_49465[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 12))
{var inst_49407 = (state_49416[2]);var state_49416__$1 = state_49416;var statearr_49436_49466 = state_49416__$1;(statearr_49436_49466[2] = inst_49407);
(statearr_49436_49466[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 13))
{var inst_49376 = (state_49416[8]);var inst_49373 = (state_49416[9]);var inst_49375 = (state_49416[10]);var inst_49374 = (state_49416[11]);var inst_49383 = (state_49416[2]);var inst_49384 = (inst_49376 + 1);var tmp49430 = inst_49373;var tmp49431 = inst_49375;var tmp49432 = inst_49374;var inst_49373__$1 = tmp49430;var inst_49374__$1 = tmp49432;var inst_49375__$1 = tmp49431;var inst_49376__$1 = inst_49384;var state_49416__$1 = (function (){var statearr_49437 = state_49416;(statearr_49437[8] = inst_49376__$1);
(statearr_49437[9] = inst_49373__$1);
(statearr_49437[10] = inst_49375__$1);
(statearr_49437[11] = inst_49374__$1);
(statearr_49437[14] = inst_49383);
return statearr_49437;
})();var statearr_49438_49467 = state_49416__$1;(statearr_49438_49467[2] = null);
(statearr_49438_49467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 14))
{var inst_49387 = (state_49416[13]);var inst_49389 = cljs.core.chunked_seq_QMARK_.call(null,inst_49387);var state_49416__$1 = state_49416;if(inst_49389)
{var statearr_49439_49468 = state_49416__$1;(statearr_49439_49468[1] = 17);
} else
{var statearr_49440_49469 = state_49416__$1;(statearr_49440_49469[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 15))
{var state_49416__$1 = state_49416;var statearr_49441_49470 = state_49416__$1;(statearr_49441_49470[2] = null);
(statearr_49441_49470[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 16))
{var inst_49405 = (state_49416[2]);var state_49416__$1 = state_49416;var statearr_49442_49471 = state_49416__$1;(statearr_49442_49471[2] = inst_49405);
(statearr_49442_49471[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 17))
{var inst_49387 = (state_49416[13]);var inst_49391 = cljs.core.chunk_first.call(null,inst_49387);var inst_49392 = cljs.core.chunk_rest.call(null,inst_49387);var inst_49393 = cljs.core.count.call(null,inst_49391);var inst_49373 = inst_49392;var inst_49374 = inst_49391;var inst_49375 = inst_49393;var inst_49376 = 0;var state_49416__$1 = (function (){var statearr_49443 = state_49416;(statearr_49443[8] = inst_49376);
(statearr_49443[9] = inst_49373);
(statearr_49443[10] = inst_49375);
(statearr_49443[11] = inst_49374);
return statearr_49443;
})();var statearr_49444_49472 = state_49416__$1;(statearr_49444_49472[2] = null);
(statearr_49444_49472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 18))
{var inst_49387 = (state_49416[13]);var inst_49396 = cljs.core.first.call(null,inst_49387);var state_49416__$1 = state_49416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49416__$1,20,out,inst_49396);
} else
{if((state_val_49417 === 19))
{var inst_49402 = (state_49416[2]);var state_49416__$1 = state_49416;var statearr_49445_49473 = state_49416__$1;(statearr_49445_49473[2] = inst_49402);
(statearr_49445_49473[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49417 === 20))
{var inst_49387 = (state_49416[13]);var inst_49398 = (state_49416[2]);var inst_49399 = cljs.core.next.call(null,inst_49387);var inst_49373 = inst_49399;var inst_49374 = null;var inst_49375 = 0;var inst_49376 = 0;var state_49416__$1 = (function (){var statearr_49446 = state_49416;(statearr_49446[8] = inst_49376);
(statearr_49446[9] = inst_49373);
(statearr_49446[10] = inst_49375);
(statearr_49446[11] = inst_49374);
(statearr_49446[15] = inst_49398);
return statearr_49446;
})();var statearr_49447_49474 = state_49416__$1;(statearr_49447_49474[2] = null);
(statearr_49447_49474[1] = 8);
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
var state_machine__13648__auto____0 = (function (){var statearr_49451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49451[0] = state_machine__13648__auto__);
(statearr_49451[1] = 1);
return statearr_49451;
});
var state_machine__13648__auto____1 = (function (state_49416){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_49416);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e49452){if((e49452 instanceof Object))
{var ex__13651__auto__ = e49452;var statearr_49453_49475 = state_49416;(statearr_49453_49475[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49476 = state_49416;
state_49416 = G__49476;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_49416){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_49416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_49454 = f__13746__auto__.call(null);(statearr_49454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_49454;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13745__auto___49557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_49536){var state_val_49537 = (state_49536[1]);if((state_val_49537 === 1))
{var state_49536__$1 = state_49536;var statearr_49538_49558 = state_49536__$1;(statearr_49538_49558[2] = null);
(statearr_49538_49558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 2))
{var state_49536__$1 = state_49536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49536__$1,4,from);
} else
{if((state_val_49537 === 3))
{var inst_49534 = (state_49536[2]);var state_49536__$1 = state_49536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49536__$1,inst_49534);
} else
{if((state_val_49537 === 4))
{var inst_49519 = (state_49536[7]);var inst_49519__$1 = (state_49536[2]);var inst_49520 = (inst_49519__$1 == null);var state_49536__$1 = (function (){var statearr_49539 = state_49536;(statearr_49539[7] = inst_49519__$1);
return statearr_49539;
})();if(cljs.core.truth_(inst_49520))
{var statearr_49540_49559 = state_49536__$1;(statearr_49540_49559[1] = 5);
} else
{var statearr_49541_49560 = state_49536__$1;(statearr_49541_49560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 5))
{var state_49536__$1 = state_49536;if(cljs.core.truth_(close_QMARK_))
{var statearr_49542_49561 = state_49536__$1;(statearr_49542_49561[1] = 8);
} else
{var statearr_49543_49562 = state_49536__$1;(statearr_49543_49562[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 6))
{var inst_49519 = (state_49536[7]);var state_49536__$1 = state_49536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49536__$1,11,to,inst_49519);
} else
{if((state_val_49537 === 7))
{var inst_49532 = (state_49536[2]);var state_49536__$1 = state_49536;var statearr_49544_49563 = state_49536__$1;(statearr_49544_49563[2] = inst_49532);
(statearr_49544_49563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 8))
{var inst_49523 = cljs.core.async.close_BANG_.call(null,to);var state_49536__$1 = state_49536;var statearr_49545_49564 = state_49536__$1;(statearr_49545_49564[2] = inst_49523);
(statearr_49545_49564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 9))
{var state_49536__$1 = state_49536;var statearr_49546_49565 = state_49536__$1;(statearr_49546_49565[2] = null);
(statearr_49546_49565[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 10))
{var inst_49526 = (state_49536[2]);var state_49536__$1 = state_49536;var statearr_49547_49566 = state_49536__$1;(statearr_49547_49566[2] = inst_49526);
(statearr_49547_49566[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49537 === 11))
{var inst_49529 = (state_49536[2]);var state_49536__$1 = (function (){var statearr_49548 = state_49536;(statearr_49548[8] = inst_49529);
return statearr_49548;
})();var statearr_49549_49567 = state_49536__$1;(statearr_49549_49567[2] = null);
(statearr_49549_49567[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_49553 = [null,null,null,null,null,null,null,null,null];(statearr_49553[0] = state_machine__13648__auto__);
(statearr_49553[1] = 1);
return statearr_49553;
});
var state_machine__13648__auto____1 = (function (state_49536){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_49536);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e49554){if((e49554 instanceof Object))
{var ex__13651__auto__ = e49554;var statearr_49555_49568 = state_49536;(statearr_49555_49568[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49569 = state_49536;
state_49536 = G__49569;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_49536){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_49536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_49556 = f__13746__auto__.call(null);(statearr_49556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___49557);
return statearr_49556;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13745__auto___49656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_49634){var state_val_49635 = (state_49634[1]);if((state_val_49635 === 1))
{var state_49634__$1 = state_49634;var statearr_49636_49657 = state_49634__$1;(statearr_49636_49657[2] = null);
(statearr_49636_49657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 2))
{var state_49634__$1 = state_49634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49634__$1,4,ch);
} else
{if((state_val_49635 === 3))
{var inst_49632 = (state_49634[2]);var state_49634__$1 = state_49634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49634__$1,inst_49632);
} else
{if((state_val_49635 === 4))
{var inst_49615 = (state_49634[7]);var inst_49615__$1 = (state_49634[2]);var inst_49616 = (inst_49615__$1 == null);var state_49634__$1 = (function (){var statearr_49637 = state_49634;(statearr_49637[7] = inst_49615__$1);
return statearr_49637;
})();if(cljs.core.truth_(inst_49616))
{var statearr_49638_49658 = state_49634__$1;(statearr_49638_49658[1] = 5);
} else
{var statearr_49639_49659 = state_49634__$1;(statearr_49639_49659[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 5))
{var inst_49618 = cljs.core.async.close_BANG_.call(null,tc);var inst_49619 = cljs.core.async.close_BANG_.call(null,fc);var state_49634__$1 = (function (){var statearr_49640 = state_49634;(statearr_49640[8] = inst_49618);
return statearr_49640;
})();var statearr_49641_49660 = state_49634__$1;(statearr_49641_49660[2] = inst_49619);
(statearr_49641_49660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 6))
{var inst_49615 = (state_49634[7]);var inst_49621 = p.call(null,inst_49615);var state_49634__$1 = state_49634;if(cljs.core.truth_(inst_49621))
{var statearr_49642_49661 = state_49634__$1;(statearr_49642_49661[1] = 9);
} else
{var statearr_49643_49662 = state_49634__$1;(statearr_49643_49662[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 7))
{var inst_49630 = (state_49634[2]);var state_49634__$1 = state_49634;var statearr_49644_49663 = state_49634__$1;(statearr_49644_49663[2] = inst_49630);
(statearr_49644_49663[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 8))
{var inst_49627 = (state_49634[2]);var state_49634__$1 = (function (){var statearr_49645 = state_49634;(statearr_49645[9] = inst_49627);
return statearr_49645;
})();var statearr_49646_49664 = state_49634__$1;(statearr_49646_49664[2] = null);
(statearr_49646_49664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 9))
{var state_49634__$1 = state_49634;var statearr_49647_49665 = state_49634__$1;(statearr_49647_49665[2] = tc);
(statearr_49647_49665[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 10))
{var state_49634__$1 = state_49634;var statearr_49648_49666 = state_49634__$1;(statearr_49648_49666[2] = fc);
(statearr_49648_49666[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49635 === 11))
{var inst_49615 = (state_49634[7]);var inst_49625 = (state_49634[2]);var state_49634__$1 = state_49634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49634__$1,8,inst_49625,inst_49615);
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
var state_machine__13648__auto____0 = (function (){var statearr_49652 = [null,null,null,null,null,null,null,null,null,null];(statearr_49652[0] = state_machine__13648__auto__);
(statearr_49652[1] = 1);
return statearr_49652;
});
var state_machine__13648__auto____1 = (function (state_49634){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_49634);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e49653){if((e49653 instanceof Object))
{var ex__13651__auto__ = e49653;var statearr_49654_49667 = state_49634;(statearr_49654_49667[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49668 = state_49634;
state_49634 = G__49668;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_49634){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_49634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_49655 = f__13746__auto__.call(null);(statearr_49655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___49656);
return statearr_49655;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_49715){var state_val_49716 = (state_49715[1]);if((state_val_49716 === 7))
{var inst_49711 = (state_49715[2]);var state_49715__$1 = state_49715;var statearr_49717_49733 = state_49715__$1;(statearr_49717_49733[2] = inst_49711);
(statearr_49717_49733[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49716 === 6))
{var inst_49701 = (state_49715[7]);var inst_49704 = (state_49715[8]);var inst_49708 = f.call(null,inst_49701,inst_49704);var inst_49701__$1 = inst_49708;var state_49715__$1 = (function (){var statearr_49718 = state_49715;(statearr_49718[7] = inst_49701__$1);
return statearr_49718;
})();var statearr_49719_49734 = state_49715__$1;(statearr_49719_49734[2] = null);
(statearr_49719_49734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49716 === 5))
{var inst_49701 = (state_49715[7]);var state_49715__$1 = state_49715;var statearr_49720_49735 = state_49715__$1;(statearr_49720_49735[2] = inst_49701);
(statearr_49720_49735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49716 === 4))
{var inst_49704 = (state_49715[8]);var inst_49704__$1 = (state_49715[2]);var inst_49705 = (inst_49704__$1 == null);var state_49715__$1 = (function (){var statearr_49721 = state_49715;(statearr_49721[8] = inst_49704__$1);
return statearr_49721;
})();if(cljs.core.truth_(inst_49705))
{var statearr_49722_49736 = state_49715__$1;(statearr_49722_49736[1] = 5);
} else
{var statearr_49723_49737 = state_49715__$1;(statearr_49723_49737[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49716 === 3))
{var inst_49713 = (state_49715[2]);var state_49715__$1 = state_49715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49715__$1,inst_49713);
} else
{if((state_val_49716 === 2))
{var state_49715__$1 = state_49715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49715__$1,4,ch);
} else
{if((state_val_49716 === 1))
{var inst_49701 = init;var state_49715__$1 = (function (){var statearr_49724 = state_49715;(statearr_49724[7] = inst_49701);
return statearr_49724;
})();var statearr_49725_49738 = state_49715__$1;(statearr_49725_49738[2] = null);
(statearr_49725_49738[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_49729 = [null,null,null,null,null,null,null,null,null];(statearr_49729[0] = state_machine__13648__auto__);
(statearr_49729[1] = 1);
return statearr_49729;
});
var state_machine__13648__auto____1 = (function (state_49715){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_49715);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e49730){if((e49730 instanceof Object))
{var ex__13651__auto__ = e49730;var statearr_49731_49739 = state_49715;(statearr_49731_49739[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49740 = state_49715;
state_49715 = G__49740;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_49715){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_49715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_49732 = f__13746__auto__.call(null);(statearr_49732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_49732;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13745__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_49802){var state_val_49803 = (state_49802[1]);if((state_val_49803 === 1))
{var inst_49782 = cljs.core.seq.call(null,coll);var inst_49783 = inst_49782;var state_49802__$1 = (function (){var statearr_49804 = state_49802;(statearr_49804[7] = inst_49783);
return statearr_49804;
})();var statearr_49805_49823 = state_49802__$1;(statearr_49805_49823[2] = null);
(statearr_49805_49823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 2))
{var inst_49783 = (state_49802[7]);var state_49802__$1 = state_49802;if(cljs.core.truth_(inst_49783))
{var statearr_49806_49824 = state_49802__$1;(statearr_49806_49824[1] = 4);
} else
{var statearr_49807_49825 = state_49802__$1;(statearr_49807_49825[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 3))
{var inst_49800 = (state_49802[2]);var state_49802__$1 = state_49802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49802__$1,inst_49800);
} else
{if((state_val_49803 === 4))
{var inst_49783 = (state_49802[7]);var inst_49786 = cljs.core.first.call(null,inst_49783);var state_49802__$1 = state_49802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49802__$1,7,ch,inst_49786);
} else
{if((state_val_49803 === 5))
{var state_49802__$1 = state_49802;if(cljs.core.truth_(close_QMARK_))
{var statearr_49808_49826 = state_49802__$1;(statearr_49808_49826[1] = 8);
} else
{var statearr_49809_49827 = state_49802__$1;(statearr_49809_49827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 6))
{var inst_49798 = (state_49802[2]);var state_49802__$1 = state_49802;var statearr_49810_49828 = state_49802__$1;(statearr_49810_49828[2] = inst_49798);
(statearr_49810_49828[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 7))
{var inst_49783 = (state_49802[7]);var inst_49788 = (state_49802[2]);var inst_49789 = cljs.core.next.call(null,inst_49783);var inst_49783__$1 = inst_49789;var state_49802__$1 = (function (){var statearr_49811 = state_49802;(statearr_49811[8] = inst_49788);
(statearr_49811[7] = inst_49783__$1);
return statearr_49811;
})();var statearr_49812_49829 = state_49802__$1;(statearr_49812_49829[2] = null);
(statearr_49812_49829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 8))
{var inst_49793 = cljs.core.async.close_BANG_.call(null,ch);var state_49802__$1 = state_49802;var statearr_49813_49830 = state_49802__$1;(statearr_49813_49830[2] = inst_49793);
(statearr_49813_49830[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 9))
{var state_49802__$1 = state_49802;var statearr_49814_49831 = state_49802__$1;(statearr_49814_49831[2] = null);
(statearr_49814_49831[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49803 === 10))
{var inst_49796 = (state_49802[2]);var state_49802__$1 = state_49802;var statearr_49815_49832 = state_49802__$1;(statearr_49815_49832[2] = inst_49796);
(statearr_49815_49832[1] = 6);
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
var state_machine__13648__auto____0 = (function (){var statearr_49819 = [null,null,null,null,null,null,null,null,null];(statearr_49819[0] = state_machine__13648__auto__);
(statearr_49819[1] = 1);
return statearr_49819;
});
var state_machine__13648__auto____1 = (function (state_49802){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_49802);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e49820){if((e49820 instanceof Object))
{var ex__13651__auto__ = e49820;var statearr_49821_49833 = state_49802;(statearr_49821_49833[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49834 = state_49802;
state_49802 = G__49834;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_49802){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_49802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_49822 = f__13746__auto__.call(null);(statearr_49822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto__);
return statearr_49822;
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
cljs.core.async.Mux = (function (){var obj49836 = {};return obj49836;
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
cljs.core.async.Mult = (function (){var obj49838 = {};return obj49838;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t50062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50062 = (function (cs,ch,mult,meta50063){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta50063 = meta50063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50062.cljs$lang$type = true;
cljs.core.async.t50062.cljs$lang$ctorStr = "cljs.core.async/t50062";
cljs.core.async.t50062.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t50062");
});})(cs))
;
cljs.core.async.t50062.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t50062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t50062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t50062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t50062.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t50062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50064){var self__ = this;
var _50064__$1 = this;return self__.meta50063;
});})(cs))
;
cljs.core.async.t50062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50064,meta50063__$1){var self__ = this;
var _50064__$1 = this;return (new cljs.core.async.t50062(self__.cs,self__.ch,self__.mult,meta50063__$1));
});})(cs))
;
cljs.core.async.__GT_t50062 = ((function (cs){
return (function __GT_t50062(cs__$1,ch__$1,mult__$1,meta50063){return (new cljs.core.async.t50062(cs__$1,ch__$1,mult__$1,meta50063));
});})(cs))
;
}
return (new cljs.core.async.t50062(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13745__auto___50285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_50199){var state_val_50200 = (state_50199[1]);if((state_val_50200 === 32))
{var inst_50143 = (state_50199[7]);var inst_50067 = (state_50199[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50199,31,Object,null,30);var inst_50150 = cljs.core.async.put_BANG_.call(null,inst_50143,inst_50067,done);var state_50199__$1 = state_50199;var statearr_50201_50286 = state_50199__$1;(statearr_50201_50286[2] = inst_50150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 1))
{var state_50199__$1 = state_50199;var statearr_50202_50287 = state_50199__$1;(statearr_50202_50287[2] = null);
(statearr_50202_50287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 33))
{var inst_50156 = (state_50199[9]);var inst_50158 = cljs.core.chunked_seq_QMARK_.call(null,inst_50156);var state_50199__$1 = state_50199;if(inst_50158)
{var statearr_50203_50288 = state_50199__$1;(statearr_50203_50288[1] = 36);
} else
{var statearr_50204_50289 = state_50199__$1;(statearr_50204_50289[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 2))
{var state_50199__$1 = state_50199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50199__$1,4,ch);
} else
{if((state_val_50200 === 34))
{var state_50199__$1 = state_50199;var statearr_50205_50290 = state_50199__$1;(statearr_50205_50290[2] = null);
(statearr_50205_50290[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 3))
{var inst_50197 = (state_50199[2]);var state_50199__$1 = state_50199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50199__$1,inst_50197);
} else
{if((state_val_50200 === 35))
{var inst_50181 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50206_50291 = state_50199__$1;(statearr_50206_50291[2] = inst_50181);
(statearr_50206_50291[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 4))
{var inst_50067 = (state_50199[8]);var inst_50067__$1 = (state_50199[2]);var inst_50068 = (inst_50067__$1 == null);var state_50199__$1 = (function (){var statearr_50207 = state_50199;(statearr_50207[8] = inst_50067__$1);
return statearr_50207;
})();if(cljs.core.truth_(inst_50068))
{var statearr_50208_50292 = state_50199__$1;(statearr_50208_50292[1] = 5);
} else
{var statearr_50209_50293 = state_50199__$1;(statearr_50209_50293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 36))
{var inst_50156 = (state_50199[9]);var inst_50160 = cljs.core.chunk_first.call(null,inst_50156);var inst_50161 = cljs.core.chunk_rest.call(null,inst_50156);var inst_50162 = cljs.core.count.call(null,inst_50160);var inst_50135 = inst_50161;var inst_50136 = inst_50160;var inst_50137 = inst_50162;var inst_50138 = 0;var state_50199__$1 = (function (){var statearr_50210 = state_50199;(statearr_50210[10] = inst_50137);
(statearr_50210[11] = inst_50136);
(statearr_50210[12] = inst_50138);
(statearr_50210[13] = inst_50135);
return statearr_50210;
})();var statearr_50211_50294 = state_50199__$1;(statearr_50211_50294[2] = null);
(statearr_50211_50294[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 5))
{var inst_50074 = cljs.core.deref.call(null,cs);var inst_50075 = cljs.core.seq.call(null,inst_50074);var inst_50076 = inst_50075;var inst_50077 = null;var inst_50078 = 0;var inst_50079 = 0;var state_50199__$1 = (function (){var statearr_50212 = state_50199;(statearr_50212[14] = inst_50077);
(statearr_50212[15] = inst_50078);
(statearr_50212[16] = inst_50079);
(statearr_50212[17] = inst_50076);
return statearr_50212;
})();var statearr_50213_50295 = state_50199__$1;(statearr_50213_50295[2] = null);
(statearr_50213_50295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 37))
{var inst_50156 = (state_50199[9]);var inst_50165 = cljs.core.first.call(null,inst_50156);var state_50199__$1 = (function (){var statearr_50214 = state_50199;(statearr_50214[18] = inst_50165);
return statearr_50214;
})();var statearr_50215_50296 = state_50199__$1;(statearr_50215_50296[2] = null);
(statearr_50215_50296[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 6))
{var inst_50127 = (state_50199[19]);var inst_50126 = cljs.core.deref.call(null,cs);var inst_50127__$1 = cljs.core.keys.call(null,inst_50126);var inst_50128 = cljs.core.count.call(null,inst_50127__$1);var inst_50129 = cljs.core.reset_BANG_.call(null,dctr,inst_50128);var inst_50134 = cljs.core.seq.call(null,inst_50127__$1);var inst_50135 = inst_50134;var inst_50136 = null;var inst_50137 = 0;var inst_50138 = 0;var state_50199__$1 = (function (){var statearr_50216 = state_50199;(statearr_50216[10] = inst_50137);
(statearr_50216[11] = inst_50136);
(statearr_50216[12] = inst_50138);
(statearr_50216[19] = inst_50127__$1);
(statearr_50216[20] = inst_50129);
(statearr_50216[13] = inst_50135);
return statearr_50216;
})();var statearr_50217_50297 = state_50199__$1;(statearr_50217_50297[2] = null);
(statearr_50217_50297[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 38))
{var inst_50178 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50218_50298 = state_50199__$1;(statearr_50218_50298[2] = inst_50178);
(statearr_50218_50298[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 7))
{var inst_50195 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50219_50299 = state_50199__$1;(statearr_50219_50299[2] = inst_50195);
(statearr_50219_50299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 39))
{var inst_50156 = (state_50199[9]);var inst_50174 = (state_50199[2]);var inst_50175 = cljs.core.next.call(null,inst_50156);var inst_50135 = inst_50175;var inst_50136 = null;var inst_50137 = 0;var inst_50138 = 0;var state_50199__$1 = (function (){var statearr_50220 = state_50199;(statearr_50220[10] = inst_50137);
(statearr_50220[11] = inst_50136);
(statearr_50220[12] = inst_50138);
(statearr_50220[21] = inst_50174);
(statearr_50220[13] = inst_50135);
return statearr_50220;
})();var statearr_50221_50300 = state_50199__$1;(statearr_50221_50300[2] = null);
(statearr_50221_50300[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 8))
{var inst_50078 = (state_50199[15]);var inst_50079 = (state_50199[16]);var inst_50081 = (inst_50079 < inst_50078);var inst_50082 = inst_50081;var state_50199__$1 = state_50199;if(cljs.core.truth_(inst_50082))
{var statearr_50222_50301 = state_50199__$1;(statearr_50222_50301[1] = 10);
} else
{var statearr_50223_50302 = state_50199__$1;(statearr_50223_50302[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 40))
{var inst_50165 = (state_50199[18]);var inst_50166 = (state_50199[2]);var inst_50167 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_50168 = cljs.core.async.untap_STAR_.call(null,m,inst_50165);var state_50199__$1 = (function (){var statearr_50224 = state_50199;(statearr_50224[22] = inst_50166);
(statearr_50224[23] = inst_50167);
return statearr_50224;
})();var statearr_50225_50303 = state_50199__$1;(statearr_50225_50303[2] = inst_50168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 9))
{var inst_50124 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50226_50304 = state_50199__$1;(statearr_50226_50304[2] = inst_50124);
(statearr_50226_50304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 41))
{var inst_50165 = (state_50199[18]);var inst_50067 = (state_50199[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50199,40,Object,null,39);var inst_50172 = cljs.core.async.put_BANG_.call(null,inst_50165,inst_50067,done);var state_50199__$1 = state_50199;var statearr_50227_50305 = state_50199__$1;(statearr_50227_50305[2] = inst_50172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 10))
{var inst_50077 = (state_50199[14]);var inst_50079 = (state_50199[16]);var inst_50085 = cljs.core._nth.call(null,inst_50077,inst_50079);var inst_50086 = cljs.core.nth.call(null,inst_50085,0,null);var inst_50087 = cljs.core.nth.call(null,inst_50085,1,null);var state_50199__$1 = (function (){var statearr_50228 = state_50199;(statearr_50228[24] = inst_50086);
return statearr_50228;
})();if(cljs.core.truth_(inst_50087))
{var statearr_50229_50306 = state_50199__$1;(statearr_50229_50306[1] = 13);
} else
{var statearr_50230_50307 = state_50199__$1;(statearr_50230_50307[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 42))
{var state_50199__$1 = state_50199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50199__$1,45,dchan);
} else
{if((state_val_50200 === 11))
{var inst_50096 = (state_50199[25]);var inst_50076 = (state_50199[17]);var inst_50096__$1 = cljs.core.seq.call(null,inst_50076);var state_50199__$1 = (function (){var statearr_50231 = state_50199;(statearr_50231[25] = inst_50096__$1);
return statearr_50231;
})();if(inst_50096__$1)
{var statearr_50232_50308 = state_50199__$1;(statearr_50232_50308[1] = 16);
} else
{var statearr_50233_50309 = state_50199__$1;(statearr_50233_50309[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 43))
{var state_50199__$1 = state_50199;var statearr_50234_50310 = state_50199__$1;(statearr_50234_50310[2] = null);
(statearr_50234_50310[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 12))
{var inst_50122 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50235_50311 = state_50199__$1;(statearr_50235_50311[2] = inst_50122);
(statearr_50235_50311[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 44))
{var inst_50192 = (state_50199[2]);var state_50199__$1 = (function (){var statearr_50236 = state_50199;(statearr_50236[26] = inst_50192);
return statearr_50236;
})();var statearr_50237_50312 = state_50199__$1;(statearr_50237_50312[2] = null);
(statearr_50237_50312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 13))
{var inst_50086 = (state_50199[24]);var inst_50089 = cljs.core.async.close_BANG_.call(null,inst_50086);var state_50199__$1 = state_50199;var statearr_50238_50313 = state_50199__$1;(statearr_50238_50313[2] = inst_50089);
(statearr_50238_50313[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 45))
{var inst_50189 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50242_50314 = state_50199__$1;(statearr_50242_50314[2] = inst_50189);
(statearr_50242_50314[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 14))
{var state_50199__$1 = state_50199;var statearr_50243_50315 = state_50199__$1;(statearr_50243_50315[2] = null);
(statearr_50243_50315[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 15))
{var inst_50077 = (state_50199[14]);var inst_50078 = (state_50199[15]);var inst_50079 = (state_50199[16]);var inst_50076 = (state_50199[17]);var inst_50092 = (state_50199[2]);var inst_50093 = (inst_50079 + 1);var tmp50239 = inst_50077;var tmp50240 = inst_50078;var tmp50241 = inst_50076;var inst_50076__$1 = tmp50241;var inst_50077__$1 = tmp50239;var inst_50078__$1 = tmp50240;var inst_50079__$1 = inst_50093;var state_50199__$1 = (function (){var statearr_50244 = state_50199;(statearr_50244[27] = inst_50092);
(statearr_50244[14] = inst_50077__$1);
(statearr_50244[15] = inst_50078__$1);
(statearr_50244[16] = inst_50079__$1);
(statearr_50244[17] = inst_50076__$1);
return statearr_50244;
})();var statearr_50245_50316 = state_50199__$1;(statearr_50245_50316[2] = null);
(statearr_50245_50316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 16))
{var inst_50096 = (state_50199[25]);var inst_50098 = cljs.core.chunked_seq_QMARK_.call(null,inst_50096);var state_50199__$1 = state_50199;if(inst_50098)
{var statearr_50246_50317 = state_50199__$1;(statearr_50246_50317[1] = 19);
} else
{var statearr_50247_50318 = state_50199__$1;(statearr_50247_50318[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 17))
{var state_50199__$1 = state_50199;var statearr_50248_50319 = state_50199__$1;(statearr_50248_50319[2] = null);
(statearr_50248_50319[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 18))
{var inst_50120 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50249_50320 = state_50199__$1;(statearr_50249_50320[2] = inst_50120);
(statearr_50249_50320[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 19))
{var inst_50096 = (state_50199[25]);var inst_50100 = cljs.core.chunk_first.call(null,inst_50096);var inst_50101 = cljs.core.chunk_rest.call(null,inst_50096);var inst_50102 = cljs.core.count.call(null,inst_50100);var inst_50076 = inst_50101;var inst_50077 = inst_50100;var inst_50078 = inst_50102;var inst_50079 = 0;var state_50199__$1 = (function (){var statearr_50250 = state_50199;(statearr_50250[14] = inst_50077);
(statearr_50250[15] = inst_50078);
(statearr_50250[16] = inst_50079);
(statearr_50250[17] = inst_50076);
return statearr_50250;
})();var statearr_50251_50321 = state_50199__$1;(statearr_50251_50321[2] = null);
(statearr_50251_50321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 20))
{var inst_50096 = (state_50199[25]);var inst_50106 = cljs.core.first.call(null,inst_50096);var inst_50107 = cljs.core.nth.call(null,inst_50106,0,null);var inst_50108 = cljs.core.nth.call(null,inst_50106,1,null);var state_50199__$1 = (function (){var statearr_50252 = state_50199;(statearr_50252[28] = inst_50107);
return statearr_50252;
})();if(cljs.core.truth_(inst_50108))
{var statearr_50253_50322 = state_50199__$1;(statearr_50253_50322[1] = 22);
} else
{var statearr_50254_50323 = state_50199__$1;(statearr_50254_50323[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 21))
{var inst_50117 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50255_50324 = state_50199__$1;(statearr_50255_50324[2] = inst_50117);
(statearr_50255_50324[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 22))
{var inst_50107 = (state_50199[28]);var inst_50110 = cljs.core.async.close_BANG_.call(null,inst_50107);var state_50199__$1 = state_50199;var statearr_50256_50325 = state_50199__$1;(statearr_50256_50325[2] = inst_50110);
(statearr_50256_50325[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 23))
{var state_50199__$1 = state_50199;var statearr_50257_50326 = state_50199__$1;(statearr_50257_50326[2] = null);
(statearr_50257_50326[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 24))
{var inst_50096 = (state_50199[25]);var inst_50113 = (state_50199[2]);var inst_50114 = cljs.core.next.call(null,inst_50096);var inst_50076 = inst_50114;var inst_50077 = null;var inst_50078 = 0;var inst_50079 = 0;var state_50199__$1 = (function (){var statearr_50258 = state_50199;(statearr_50258[14] = inst_50077);
(statearr_50258[15] = inst_50078);
(statearr_50258[16] = inst_50079);
(statearr_50258[29] = inst_50113);
(statearr_50258[17] = inst_50076);
return statearr_50258;
})();var statearr_50259_50327 = state_50199__$1;(statearr_50259_50327[2] = null);
(statearr_50259_50327[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 25))
{var inst_50137 = (state_50199[10]);var inst_50138 = (state_50199[12]);var inst_50140 = (inst_50138 < inst_50137);var inst_50141 = inst_50140;var state_50199__$1 = state_50199;if(cljs.core.truth_(inst_50141))
{var statearr_50260_50328 = state_50199__$1;(statearr_50260_50328[1] = 27);
} else
{var statearr_50261_50329 = state_50199__$1;(statearr_50261_50329[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 26))
{var inst_50127 = (state_50199[19]);var inst_50185 = (state_50199[2]);var inst_50186 = cljs.core.seq.call(null,inst_50127);var state_50199__$1 = (function (){var statearr_50262 = state_50199;(statearr_50262[30] = inst_50185);
return statearr_50262;
})();if(inst_50186)
{var statearr_50263_50330 = state_50199__$1;(statearr_50263_50330[1] = 42);
} else
{var statearr_50264_50331 = state_50199__$1;(statearr_50264_50331[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 27))
{var inst_50136 = (state_50199[11]);var inst_50138 = (state_50199[12]);var inst_50143 = cljs.core._nth.call(null,inst_50136,inst_50138);var state_50199__$1 = (function (){var statearr_50265 = state_50199;(statearr_50265[7] = inst_50143);
return statearr_50265;
})();var statearr_50266_50332 = state_50199__$1;(statearr_50266_50332[2] = null);
(statearr_50266_50332[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 28))
{var inst_50156 = (state_50199[9]);var inst_50135 = (state_50199[13]);var inst_50156__$1 = cljs.core.seq.call(null,inst_50135);var state_50199__$1 = (function (){var statearr_50270 = state_50199;(statearr_50270[9] = inst_50156__$1);
return statearr_50270;
})();if(inst_50156__$1)
{var statearr_50271_50333 = state_50199__$1;(statearr_50271_50333[1] = 33);
} else
{var statearr_50272_50334 = state_50199__$1;(statearr_50272_50334[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 29))
{var inst_50183 = (state_50199[2]);var state_50199__$1 = state_50199;var statearr_50273_50335 = state_50199__$1;(statearr_50273_50335[2] = inst_50183);
(statearr_50273_50335[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 30))
{var inst_50137 = (state_50199[10]);var inst_50136 = (state_50199[11]);var inst_50138 = (state_50199[12]);var inst_50135 = (state_50199[13]);var inst_50152 = (state_50199[2]);var inst_50153 = (inst_50138 + 1);var tmp50267 = inst_50137;var tmp50268 = inst_50136;var tmp50269 = inst_50135;var inst_50135__$1 = tmp50269;var inst_50136__$1 = tmp50268;var inst_50137__$1 = tmp50267;var inst_50138__$1 = inst_50153;var state_50199__$1 = (function (){var statearr_50274 = state_50199;(statearr_50274[10] = inst_50137__$1);
(statearr_50274[11] = inst_50136__$1);
(statearr_50274[12] = inst_50138__$1);
(statearr_50274[31] = inst_50152);
(statearr_50274[13] = inst_50135__$1);
return statearr_50274;
})();var statearr_50275_50336 = state_50199__$1;(statearr_50275_50336[2] = null);
(statearr_50275_50336[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50200 === 31))
{var inst_50143 = (state_50199[7]);var inst_50144 = (state_50199[2]);var inst_50145 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_50146 = cljs.core.async.untap_STAR_.call(null,m,inst_50143);var state_50199__$1 = (function (){var statearr_50276 = state_50199;(statearr_50276[32] = inst_50144);
(statearr_50276[33] = inst_50145);
return statearr_50276;
})();var statearr_50277_50337 = state_50199__$1;(statearr_50277_50337[2] = inst_50146);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199__$1);
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
var state_machine__13648__auto____0 = (function (){var statearr_50281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50281[0] = state_machine__13648__auto__);
(statearr_50281[1] = 1);
return statearr_50281;
});
var state_machine__13648__auto____1 = (function (state_50199){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_50199);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e50282){if((e50282 instanceof Object))
{var ex__13651__auto__ = e50282;var statearr_50283_50338 = state_50199;(statearr_50283_50338[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50339 = state_50199;
state_50199 = G__50339;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_50199){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_50199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_50284 = f__13746__auto__.call(null);(statearr_50284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___50285);
return statearr_50284;
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
cljs.core.async.Mix = (function (){var obj50341 = {};return obj50341;
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
;var m = (function (){if(typeof cljs.core.async.t50451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50451 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta50452){
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
this.meta50452 = meta50452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50451.cljs$lang$type = true;
cljs.core.async.t50451.cljs$lang$ctorStr = "cljs.core.async/t50451";
cljs.core.async.t50451.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t50451");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t50451.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50453){var self__ = this;
var _50453__$1 = this;return self__.meta50452;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50453,meta50452__$1){var self__ = this;
var _50453__$1 = this;return (new cljs.core.async.t50451(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta50452__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t50451 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50451(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta50452){return (new cljs.core.async.t50451(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta50452));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t50451(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13745__auto___50560 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_50518){var state_val_50519 = (state_50518[1]);if((state_val_50519 === 1))
{var inst_50457 = (state_50518[7]);var inst_50457__$1 = calc_state.call(null);var inst_50458 = cljs.core.seq_QMARK_.call(null,inst_50457__$1);var state_50518__$1 = (function (){var statearr_50520 = state_50518;(statearr_50520[7] = inst_50457__$1);
return statearr_50520;
})();if(inst_50458)
{var statearr_50521_50561 = state_50518__$1;(statearr_50521_50561[1] = 2);
} else
{var statearr_50522_50562 = state_50518__$1;(statearr_50522_50562[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 2))
{var inst_50457 = (state_50518[7]);var inst_50460 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50457);var state_50518__$1 = state_50518;var statearr_50523_50563 = state_50518__$1;(statearr_50523_50563[2] = inst_50460);
(statearr_50523_50563[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 3))
{var inst_50457 = (state_50518[7]);var state_50518__$1 = state_50518;var statearr_50524_50564 = state_50518__$1;(statearr_50524_50564[2] = inst_50457);
(statearr_50524_50564[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 4))
{var inst_50457 = (state_50518[7]);var inst_50463 = (state_50518[2]);var inst_50464 = cljs.core.get.call(null,inst_50463,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_50465 = cljs.core.get.call(null,inst_50463,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_50466 = cljs.core.get.call(null,inst_50463,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_50467 = inst_50457;var state_50518__$1 = (function (){var statearr_50525 = state_50518;(statearr_50525[8] = inst_50467);
(statearr_50525[9] = inst_50466);
(statearr_50525[10] = inst_50464);
(statearr_50525[11] = inst_50465);
return statearr_50525;
})();var statearr_50526_50565 = state_50518__$1;(statearr_50526_50565[2] = null);
(statearr_50526_50565[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 5))
{var inst_50467 = (state_50518[8]);var inst_50470 = cljs.core.seq_QMARK_.call(null,inst_50467);var state_50518__$1 = state_50518;if(inst_50470)
{var statearr_50527_50566 = state_50518__$1;(statearr_50527_50566[1] = 7);
} else
{var statearr_50528_50567 = state_50518__$1;(statearr_50528_50567[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 6))
{var inst_50516 = (state_50518[2]);var state_50518__$1 = state_50518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50518__$1,inst_50516);
} else
{if((state_val_50519 === 7))
{var inst_50467 = (state_50518[8]);var inst_50472 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50467);var state_50518__$1 = state_50518;var statearr_50529_50568 = state_50518__$1;(statearr_50529_50568[2] = inst_50472);
(statearr_50529_50568[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 8))
{var inst_50467 = (state_50518[8]);var state_50518__$1 = state_50518;var statearr_50530_50569 = state_50518__$1;(statearr_50530_50569[2] = inst_50467);
(statearr_50530_50569[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 9))
{var inst_50475 = (state_50518[12]);var inst_50475__$1 = (state_50518[2]);var inst_50476 = cljs.core.get.call(null,inst_50475__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_50477 = cljs.core.get.call(null,inst_50475__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_50478 = cljs.core.get.call(null,inst_50475__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_50518__$1 = (function (){var statearr_50531 = state_50518;(statearr_50531[12] = inst_50475__$1);
(statearr_50531[13] = inst_50478);
(statearr_50531[14] = inst_50477);
return statearr_50531;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_50518__$1,10,inst_50476);
} else
{if((state_val_50519 === 10))
{var inst_50483 = (state_50518[15]);var inst_50482 = (state_50518[16]);var inst_50481 = (state_50518[2]);var inst_50482__$1 = cljs.core.nth.call(null,inst_50481,0,null);var inst_50483__$1 = cljs.core.nth.call(null,inst_50481,1,null);var inst_50484 = (inst_50482__$1 == null);var inst_50485 = cljs.core._EQ_.call(null,inst_50483__$1,change);var inst_50486 = (inst_50484) || (inst_50485);var state_50518__$1 = (function (){var statearr_50532 = state_50518;(statearr_50532[15] = inst_50483__$1);
(statearr_50532[16] = inst_50482__$1);
return statearr_50532;
})();if(cljs.core.truth_(inst_50486))
{var statearr_50533_50570 = state_50518__$1;(statearr_50533_50570[1] = 11);
} else
{var statearr_50534_50571 = state_50518__$1;(statearr_50534_50571[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 11))
{var inst_50482 = (state_50518[16]);var inst_50488 = (inst_50482 == null);var state_50518__$1 = state_50518;if(cljs.core.truth_(inst_50488))
{var statearr_50535_50572 = state_50518__$1;(statearr_50535_50572[1] = 14);
} else
{var statearr_50536_50573 = state_50518__$1;(statearr_50536_50573[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 12))
{var inst_50483 = (state_50518[15]);var inst_50478 = (state_50518[13]);var inst_50497 = (state_50518[17]);var inst_50497__$1 = inst_50478.call(null,inst_50483);var state_50518__$1 = (function (){var statearr_50537 = state_50518;(statearr_50537[17] = inst_50497__$1);
return statearr_50537;
})();if(cljs.core.truth_(inst_50497__$1))
{var statearr_50538_50574 = state_50518__$1;(statearr_50538_50574[1] = 17);
} else
{var statearr_50539_50575 = state_50518__$1;(statearr_50539_50575[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 13))
{var inst_50514 = (state_50518[2]);var state_50518__$1 = state_50518;var statearr_50540_50576 = state_50518__$1;(statearr_50540_50576[2] = inst_50514);
(statearr_50540_50576[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 14))
{var inst_50483 = (state_50518[15]);var inst_50490 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_50483);var state_50518__$1 = state_50518;var statearr_50541_50577 = state_50518__$1;(statearr_50541_50577[2] = inst_50490);
(statearr_50541_50577[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 15))
{var state_50518__$1 = state_50518;var statearr_50542_50578 = state_50518__$1;(statearr_50542_50578[2] = null);
(statearr_50542_50578[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 16))
{var inst_50493 = (state_50518[2]);var inst_50494 = calc_state.call(null);var inst_50467 = inst_50494;var state_50518__$1 = (function (){var statearr_50543 = state_50518;(statearr_50543[18] = inst_50493);
(statearr_50543[8] = inst_50467);
return statearr_50543;
})();var statearr_50544_50579 = state_50518__$1;(statearr_50544_50579[2] = null);
(statearr_50544_50579[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 17))
{var inst_50497 = (state_50518[17]);var state_50518__$1 = state_50518;var statearr_50545_50580 = state_50518__$1;(statearr_50545_50580[2] = inst_50497);
(statearr_50545_50580[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 18))
{var inst_50483 = (state_50518[15]);var inst_50478 = (state_50518[13]);var inst_50477 = (state_50518[14]);var inst_50500 = cljs.core.empty_QMARK_.call(null,inst_50478);var inst_50501 = inst_50477.call(null,inst_50483);var inst_50502 = cljs.core.not.call(null,inst_50501);var inst_50503 = (inst_50500) && (inst_50502);var state_50518__$1 = state_50518;var statearr_50546_50581 = state_50518__$1;(statearr_50546_50581[2] = inst_50503);
(statearr_50546_50581[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 19))
{var inst_50505 = (state_50518[2]);var state_50518__$1 = state_50518;if(cljs.core.truth_(inst_50505))
{var statearr_50547_50582 = state_50518__$1;(statearr_50547_50582[1] = 20);
} else
{var statearr_50548_50583 = state_50518__$1;(statearr_50548_50583[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 20))
{var inst_50482 = (state_50518[16]);var state_50518__$1 = state_50518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50518__$1,23,out,inst_50482);
} else
{if((state_val_50519 === 21))
{var state_50518__$1 = state_50518;var statearr_50549_50584 = state_50518__$1;(statearr_50549_50584[2] = null);
(statearr_50549_50584[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 22))
{var inst_50475 = (state_50518[12]);var inst_50511 = (state_50518[2]);var inst_50467 = inst_50475;var state_50518__$1 = (function (){var statearr_50550 = state_50518;(statearr_50550[8] = inst_50467);
(statearr_50550[19] = inst_50511);
return statearr_50550;
})();var statearr_50551_50585 = state_50518__$1;(statearr_50551_50585[2] = null);
(statearr_50551_50585[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50519 === 23))
{var inst_50508 = (state_50518[2]);var state_50518__$1 = state_50518;var statearr_50552_50586 = state_50518__$1;(statearr_50552_50586[2] = inst_50508);
(statearr_50552_50586[1] = 22);
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
var state_machine__13648__auto____0 = (function (){var statearr_50556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50556[0] = state_machine__13648__auto__);
(statearr_50556[1] = 1);
return statearr_50556;
});
var state_machine__13648__auto____1 = (function (state_50518){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_50518);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e50557){if((e50557 instanceof Object))
{var ex__13651__auto__ = e50557;var statearr_50558_50587 = state_50518;(statearr_50558_50587[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50588 = state_50518;
state_50518 = G__50588;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_50518){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_50518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_50559 = f__13746__auto__.call(null);(statearr_50559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___50560);
return statearr_50559;
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
cljs.core.async.Pub = (function (){var obj50590 = {};return obj50590;
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
return (function (p1__50591_SHARP_){if(cljs.core.truth_(p1__50591_SHARP_.call(null,topic)))
{return p1__50591_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__50591_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7862__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t50716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50716 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50717){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50717 = meta50717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50716.cljs$lang$type = true;
cljs.core.async.t50716.cljs$lang$ctorStr = "cljs.core.async/t50716";
cljs.core.async.t50716.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8424__auto__,writer__8425__auto__,opt__8426__auto__){return cljs.core._write.call(null,writer__8425__auto__,"cljs.core.async/t50716");
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t50716.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50718){var self__ = this;
var _50718__$1 = this;return self__.meta50717;
});})(mults,ensure_mult))
;
cljs.core.async.t50716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50718,meta50717__$1){var self__ = this;
var _50718__$1 = this;return (new cljs.core.async.t50716(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50717__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t50716 = ((function (mults,ensure_mult){
return (function __GT_t50716(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50717){return (new cljs.core.async.t50716(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50717));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t50716(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13745__auto___50840 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_50792){var state_val_50793 = (state_50792[1]);if((state_val_50793 === 1))
{var state_50792__$1 = state_50792;var statearr_50794_50841 = state_50792__$1;(statearr_50794_50841[2] = null);
(statearr_50794_50841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 2))
{var state_50792__$1 = state_50792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50792__$1,4,ch);
} else
{if((state_val_50793 === 3))
{var inst_50790 = (state_50792[2]);var state_50792__$1 = state_50792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50792__$1,inst_50790);
} else
{if((state_val_50793 === 4))
{var inst_50721 = (state_50792[7]);var inst_50721__$1 = (state_50792[2]);var inst_50722 = (inst_50721__$1 == null);var state_50792__$1 = (function (){var statearr_50795 = state_50792;(statearr_50795[7] = inst_50721__$1);
return statearr_50795;
})();if(cljs.core.truth_(inst_50722))
{var statearr_50796_50842 = state_50792__$1;(statearr_50796_50842[1] = 5);
} else
{var statearr_50797_50843 = state_50792__$1;(statearr_50797_50843[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 5))
{var inst_50728 = cljs.core.deref.call(null,mults);var inst_50729 = cljs.core.vals.call(null,inst_50728);var inst_50730 = cljs.core.seq.call(null,inst_50729);var inst_50731 = inst_50730;var inst_50732 = null;var inst_50733 = 0;var inst_50734 = 0;var state_50792__$1 = (function (){var statearr_50798 = state_50792;(statearr_50798[8] = inst_50731);
(statearr_50798[9] = inst_50733);
(statearr_50798[10] = inst_50732);
(statearr_50798[11] = inst_50734);
return statearr_50798;
})();var statearr_50799_50844 = state_50792__$1;(statearr_50799_50844[2] = null);
(statearr_50799_50844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 6))
{var inst_50721 = (state_50792[7]);var inst_50769 = (state_50792[12]);var inst_50771 = (state_50792[13]);var inst_50769__$1 = topic_fn.call(null,inst_50721);var inst_50770 = cljs.core.deref.call(null,mults);var inst_50771__$1 = cljs.core.get.call(null,inst_50770,inst_50769__$1);var state_50792__$1 = (function (){var statearr_50800 = state_50792;(statearr_50800[12] = inst_50769__$1);
(statearr_50800[13] = inst_50771__$1);
return statearr_50800;
})();if(cljs.core.truth_(inst_50771__$1))
{var statearr_50801_50845 = state_50792__$1;(statearr_50801_50845[1] = 19);
} else
{var statearr_50802_50846 = state_50792__$1;(statearr_50802_50846[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 7))
{var inst_50788 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50803_50847 = state_50792__$1;(statearr_50803_50847[2] = inst_50788);
(statearr_50803_50847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 8))
{var inst_50733 = (state_50792[9]);var inst_50734 = (state_50792[11]);var inst_50736 = (inst_50734 < inst_50733);var inst_50737 = inst_50736;var state_50792__$1 = state_50792;if(cljs.core.truth_(inst_50737))
{var statearr_50807_50848 = state_50792__$1;(statearr_50807_50848[1] = 10);
} else
{var statearr_50808_50849 = state_50792__$1;(statearr_50808_50849[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 9))
{var inst_50767 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50809_50850 = state_50792__$1;(statearr_50809_50850[2] = inst_50767);
(statearr_50809_50850[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 10))
{var inst_50731 = (state_50792[8]);var inst_50733 = (state_50792[9]);var inst_50732 = (state_50792[10]);var inst_50734 = (state_50792[11]);var inst_50739 = cljs.core._nth.call(null,inst_50732,inst_50734);var inst_50740 = cljs.core.async.muxch_STAR_.call(null,inst_50739);var inst_50741 = cljs.core.async.close_BANG_.call(null,inst_50740);var inst_50742 = (inst_50734 + 1);var tmp50804 = inst_50731;var tmp50805 = inst_50733;var tmp50806 = inst_50732;var inst_50731__$1 = tmp50804;var inst_50732__$1 = tmp50806;var inst_50733__$1 = tmp50805;var inst_50734__$1 = inst_50742;var state_50792__$1 = (function (){var statearr_50810 = state_50792;(statearr_50810[8] = inst_50731__$1);
(statearr_50810[9] = inst_50733__$1);
(statearr_50810[10] = inst_50732__$1);
(statearr_50810[11] = inst_50734__$1);
(statearr_50810[14] = inst_50741);
return statearr_50810;
})();var statearr_50811_50851 = state_50792__$1;(statearr_50811_50851[2] = null);
(statearr_50811_50851[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 11))
{var inst_50731 = (state_50792[8]);var inst_50745 = (state_50792[15]);var inst_50745__$1 = cljs.core.seq.call(null,inst_50731);var state_50792__$1 = (function (){var statearr_50812 = state_50792;(statearr_50812[15] = inst_50745__$1);
return statearr_50812;
})();if(inst_50745__$1)
{var statearr_50813_50852 = state_50792__$1;(statearr_50813_50852[1] = 13);
} else
{var statearr_50814_50853 = state_50792__$1;(statearr_50814_50853[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 12))
{var inst_50765 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50815_50854 = state_50792__$1;(statearr_50815_50854[2] = inst_50765);
(statearr_50815_50854[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 13))
{var inst_50745 = (state_50792[15]);var inst_50747 = cljs.core.chunked_seq_QMARK_.call(null,inst_50745);var state_50792__$1 = state_50792;if(inst_50747)
{var statearr_50816_50855 = state_50792__$1;(statearr_50816_50855[1] = 16);
} else
{var statearr_50817_50856 = state_50792__$1;(statearr_50817_50856[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 14))
{var state_50792__$1 = state_50792;var statearr_50818_50857 = state_50792__$1;(statearr_50818_50857[2] = null);
(statearr_50818_50857[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 15))
{var inst_50763 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50819_50858 = state_50792__$1;(statearr_50819_50858[2] = inst_50763);
(statearr_50819_50858[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 16))
{var inst_50745 = (state_50792[15]);var inst_50749 = cljs.core.chunk_first.call(null,inst_50745);var inst_50750 = cljs.core.chunk_rest.call(null,inst_50745);var inst_50751 = cljs.core.count.call(null,inst_50749);var inst_50731 = inst_50750;var inst_50732 = inst_50749;var inst_50733 = inst_50751;var inst_50734 = 0;var state_50792__$1 = (function (){var statearr_50820 = state_50792;(statearr_50820[8] = inst_50731);
(statearr_50820[9] = inst_50733);
(statearr_50820[10] = inst_50732);
(statearr_50820[11] = inst_50734);
return statearr_50820;
})();var statearr_50821_50859 = state_50792__$1;(statearr_50821_50859[2] = null);
(statearr_50821_50859[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 17))
{var inst_50745 = (state_50792[15]);var inst_50754 = cljs.core.first.call(null,inst_50745);var inst_50755 = cljs.core.async.muxch_STAR_.call(null,inst_50754);var inst_50756 = cljs.core.async.close_BANG_.call(null,inst_50755);var inst_50757 = cljs.core.next.call(null,inst_50745);var inst_50731 = inst_50757;var inst_50732 = null;var inst_50733 = 0;var inst_50734 = 0;var state_50792__$1 = (function (){var statearr_50822 = state_50792;(statearr_50822[8] = inst_50731);
(statearr_50822[9] = inst_50733);
(statearr_50822[10] = inst_50732);
(statearr_50822[11] = inst_50734);
(statearr_50822[16] = inst_50756);
return statearr_50822;
})();var statearr_50823_50860 = state_50792__$1;(statearr_50823_50860[2] = null);
(statearr_50823_50860[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 18))
{var inst_50760 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50824_50861 = state_50792__$1;(statearr_50824_50861[2] = inst_50760);
(statearr_50824_50861[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 19))
{var state_50792__$1 = state_50792;var statearr_50825_50862 = state_50792__$1;(statearr_50825_50862[2] = null);
(statearr_50825_50862[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 20))
{var state_50792__$1 = state_50792;var statearr_50826_50863 = state_50792__$1;(statearr_50826_50863[2] = null);
(statearr_50826_50863[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 21))
{var inst_50785 = (state_50792[2]);var state_50792__$1 = (function (){var statearr_50827 = state_50792;(statearr_50827[17] = inst_50785);
return statearr_50827;
})();var statearr_50828_50864 = state_50792__$1;(statearr_50828_50864[2] = null);
(statearr_50828_50864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 22))
{var inst_50782 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50829_50865 = state_50792__$1;(statearr_50829_50865[2] = inst_50782);
(statearr_50829_50865[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 23))
{var inst_50769 = (state_50792[12]);var inst_50773 = (state_50792[2]);var inst_50774 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50769);var state_50792__$1 = (function (){var statearr_50830 = state_50792;(statearr_50830[18] = inst_50773);
return statearr_50830;
})();var statearr_50831_50866 = state_50792__$1;(statearr_50831_50866[2] = inst_50774);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50792__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50793 === 24))
{var inst_50721 = (state_50792[7]);var inst_50771 = (state_50792[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50792,23,Object,null,22);var inst_50778 = cljs.core.async.muxch_STAR_.call(null,inst_50771);var state_50792__$1 = state_50792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50792__$1,25,inst_50778,inst_50721);
} else
{if((state_val_50793 === 25))
{var inst_50780 = (state_50792[2]);var state_50792__$1 = state_50792;var statearr_50832_50867 = state_50792__$1;(statearr_50832_50867[2] = inst_50780);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50792__$1);
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
var state_machine__13648__auto____0 = (function (){var statearr_50836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50836[0] = state_machine__13648__auto__);
(statearr_50836[1] = 1);
return statearr_50836;
});
var state_machine__13648__auto____1 = (function (state_50792){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_50792);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e50837){if((e50837 instanceof Object))
{var ex__13651__auto__ = e50837;var statearr_50838_50868 = state_50792;(statearr_50838_50868[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50869 = state_50792;
state_50792 = G__50869;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_50792){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_50792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_50839 = f__13746__auto__.call(null);(statearr_50839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___50840);
return statearr_50839;
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
,cljs.core.range.call(null,cnt));var c__13745__auto___51006 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_50976){var state_val_50977 = (state_50976[1]);if((state_val_50977 === 1))
{var state_50976__$1 = state_50976;var statearr_50978_51007 = state_50976__$1;(statearr_50978_51007[2] = null);
(statearr_50978_51007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 2))
{var inst_50939 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_50940 = 0;var state_50976__$1 = (function (){var statearr_50979 = state_50976;(statearr_50979[7] = inst_50940);
(statearr_50979[8] = inst_50939);
return statearr_50979;
})();var statearr_50980_51008 = state_50976__$1;(statearr_50980_51008[2] = null);
(statearr_50980_51008[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 3))
{var inst_50974 = (state_50976[2]);var state_50976__$1 = state_50976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50976__$1,inst_50974);
} else
{if((state_val_50977 === 4))
{var inst_50940 = (state_50976[7]);var inst_50942 = (inst_50940 < cnt);var state_50976__$1 = state_50976;if(cljs.core.truth_(inst_50942))
{var statearr_50981_51009 = state_50976__$1;(statearr_50981_51009[1] = 6);
} else
{var statearr_50982_51010 = state_50976__$1;(statearr_50982_51010[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 5))
{var inst_50960 = (state_50976[2]);var state_50976__$1 = (function (){var statearr_50983 = state_50976;(statearr_50983[9] = inst_50960);
return statearr_50983;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50976__$1,12,dchan);
} else
{if((state_val_50977 === 6))
{var state_50976__$1 = state_50976;var statearr_50984_51011 = state_50976__$1;(statearr_50984_51011[2] = null);
(statearr_50984_51011[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 7))
{var state_50976__$1 = state_50976;var statearr_50985_51012 = state_50976__$1;(statearr_50985_51012[2] = null);
(statearr_50985_51012[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 8))
{var inst_50958 = (state_50976[2]);var state_50976__$1 = state_50976;var statearr_50986_51013 = state_50976__$1;(statearr_50986_51013[2] = inst_50958);
(statearr_50986_51013[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 9))
{var inst_50940 = (state_50976[7]);var inst_50953 = (state_50976[2]);var inst_50954 = (inst_50940 + 1);var inst_50940__$1 = inst_50954;var state_50976__$1 = (function (){var statearr_50987 = state_50976;(statearr_50987[7] = inst_50940__$1);
(statearr_50987[10] = inst_50953);
return statearr_50987;
})();var statearr_50988_51014 = state_50976__$1;(statearr_50988_51014[2] = null);
(statearr_50988_51014[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 10))
{var inst_50944 = (state_50976[2]);var inst_50945 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_50976__$1 = (function (){var statearr_50989 = state_50976;(statearr_50989[11] = inst_50944);
return statearr_50989;
})();var statearr_50990_51015 = state_50976__$1;(statearr_50990_51015[2] = inst_50945);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50976__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 11))
{var inst_50940 = (state_50976[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50976,10,Object,null,9);var inst_50949 = chs__$1.call(null,inst_50940);var inst_50950 = done.call(null,inst_50940);var inst_50951 = cljs.core.async.take_BANG_.call(null,inst_50949,inst_50950);var state_50976__$1 = state_50976;var statearr_50991_51016 = state_50976__$1;(statearr_50991_51016[2] = inst_50951);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50976__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 12))
{var inst_50962 = (state_50976[12]);var inst_50962__$1 = (state_50976[2]);var inst_50963 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50962__$1);var state_50976__$1 = (function (){var statearr_50992 = state_50976;(statearr_50992[12] = inst_50962__$1);
return statearr_50992;
})();if(cljs.core.truth_(inst_50963))
{var statearr_50993_51017 = state_50976__$1;(statearr_50993_51017[1] = 13);
} else
{var statearr_50994_51018 = state_50976__$1;(statearr_50994_51018[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 13))
{var inst_50965 = cljs.core.async.close_BANG_.call(null,out);var state_50976__$1 = state_50976;var statearr_50995_51019 = state_50976__$1;(statearr_50995_51019[2] = inst_50965);
(statearr_50995_51019[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 14))
{var inst_50962 = (state_50976[12]);var inst_50967 = cljs.core.apply.call(null,f,inst_50962);var state_50976__$1 = state_50976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50976__$1,16,out,inst_50967);
} else
{if((state_val_50977 === 15))
{var inst_50972 = (state_50976[2]);var state_50976__$1 = state_50976;var statearr_50996_51020 = state_50976__$1;(statearr_50996_51020[2] = inst_50972);
(statearr_50996_51020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50977 === 16))
{var inst_50969 = (state_50976[2]);var state_50976__$1 = (function (){var statearr_50997 = state_50976;(statearr_50997[13] = inst_50969);
return statearr_50997;
})();var statearr_50998_51021 = state_50976__$1;(statearr_50998_51021[2] = null);
(statearr_50998_51021[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_51002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51002[0] = state_machine__13648__auto__);
(statearr_51002[1] = 1);
return statearr_51002;
});
var state_machine__13648__auto____1 = (function (state_50976){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_50976);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e51003){if((e51003 instanceof Object))
{var ex__13651__auto__ = e51003;var statearr_51004_51022 = state_50976;(statearr_51004_51022[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51023 = state_50976;
state_50976 = G__51023;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_50976){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_50976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_51005 = f__13746__auto__.call(null);(statearr_51005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___51006);
return statearr_51005;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___51131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_51107){var state_val_51108 = (state_51107[1]);if((state_val_51108 === 1))
{var inst_51078 = cljs.core.vec.call(null,chs);var inst_51079 = inst_51078;var state_51107__$1 = (function (){var statearr_51109 = state_51107;(statearr_51109[7] = inst_51079);
return statearr_51109;
})();var statearr_51110_51132 = state_51107__$1;(statearr_51110_51132[2] = null);
(statearr_51110_51132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 2))
{var inst_51079 = (state_51107[7]);var inst_51081 = cljs.core.count.call(null,inst_51079);var inst_51082 = (inst_51081 > 0);var state_51107__$1 = state_51107;if(cljs.core.truth_(inst_51082))
{var statearr_51111_51133 = state_51107__$1;(statearr_51111_51133[1] = 4);
} else
{var statearr_51112_51134 = state_51107__$1;(statearr_51112_51134[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 3))
{var inst_51105 = (state_51107[2]);var state_51107__$1 = state_51107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51107__$1,inst_51105);
} else
{if((state_val_51108 === 4))
{var inst_51079 = (state_51107[7]);var state_51107__$1 = state_51107;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_51107__$1,7,inst_51079);
} else
{if((state_val_51108 === 5))
{var inst_51101 = cljs.core.async.close_BANG_.call(null,out);var state_51107__$1 = state_51107;var statearr_51113_51135 = state_51107__$1;(statearr_51113_51135[2] = inst_51101);
(statearr_51113_51135[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 6))
{var inst_51103 = (state_51107[2]);var state_51107__$1 = state_51107;var statearr_51114_51136 = state_51107__$1;(statearr_51114_51136[2] = inst_51103);
(statearr_51114_51136[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 7))
{var inst_51087 = (state_51107[8]);var inst_51086 = (state_51107[9]);var inst_51086__$1 = (state_51107[2]);var inst_51087__$1 = cljs.core.nth.call(null,inst_51086__$1,0,null);var inst_51088 = cljs.core.nth.call(null,inst_51086__$1,1,null);var inst_51089 = (inst_51087__$1 == null);var state_51107__$1 = (function (){var statearr_51115 = state_51107;(statearr_51115[10] = inst_51088);
(statearr_51115[8] = inst_51087__$1);
(statearr_51115[9] = inst_51086__$1);
return statearr_51115;
})();if(cljs.core.truth_(inst_51089))
{var statearr_51116_51137 = state_51107__$1;(statearr_51116_51137[1] = 8);
} else
{var statearr_51117_51138 = state_51107__$1;(statearr_51117_51138[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 8))
{var inst_51088 = (state_51107[10]);var inst_51079 = (state_51107[7]);var inst_51087 = (state_51107[8]);var inst_51086 = (state_51107[9]);var inst_51091 = (function (){var c = inst_51088;var v = inst_51087;var vec__51084 = inst_51086;var cs = inst_51079;return ((function (c,v,vec__51084,cs,inst_51088,inst_51079,inst_51087,inst_51086,state_val_51108){
return (function (p1__51024_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__51024_SHARP_);
});
;})(c,v,vec__51084,cs,inst_51088,inst_51079,inst_51087,inst_51086,state_val_51108))
})();var inst_51092 = cljs.core.filterv.call(null,inst_51091,inst_51079);var inst_51079__$1 = inst_51092;var state_51107__$1 = (function (){var statearr_51118 = state_51107;(statearr_51118[7] = inst_51079__$1);
return statearr_51118;
})();var statearr_51119_51139 = state_51107__$1;(statearr_51119_51139[2] = null);
(statearr_51119_51139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 9))
{var inst_51087 = (state_51107[8]);var state_51107__$1 = state_51107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51107__$1,11,out,inst_51087);
} else
{if((state_val_51108 === 10))
{var inst_51099 = (state_51107[2]);var state_51107__$1 = state_51107;var statearr_51121_51140 = state_51107__$1;(statearr_51121_51140[2] = inst_51099);
(statearr_51121_51140[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51108 === 11))
{var inst_51079 = (state_51107[7]);var inst_51096 = (state_51107[2]);var tmp51120 = inst_51079;var inst_51079__$1 = tmp51120;var state_51107__$1 = (function (){var statearr_51122 = state_51107;(statearr_51122[11] = inst_51096);
(statearr_51122[7] = inst_51079__$1);
return statearr_51122;
})();var statearr_51123_51141 = state_51107__$1;(statearr_51123_51141[2] = null);
(statearr_51123_51141[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_51127 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51127[0] = state_machine__13648__auto__);
(statearr_51127[1] = 1);
return statearr_51127;
});
var state_machine__13648__auto____1 = (function (state_51107){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_51107);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e51128){if((e51128 instanceof Object))
{var ex__13651__auto__ = e51128;var statearr_51129_51142 = state_51107;(statearr_51129_51142[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51143 = state_51107;
state_51107 = G__51143;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_51107){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_51107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_51130 = f__13746__auto__.call(null);(statearr_51130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___51131);
return statearr_51130;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___51236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_51213){var state_val_51214 = (state_51213[1]);if((state_val_51214 === 1))
{var inst_51190 = 0;var state_51213__$1 = (function (){var statearr_51215 = state_51213;(statearr_51215[7] = inst_51190);
return statearr_51215;
})();var statearr_51216_51237 = state_51213__$1;(statearr_51216_51237[2] = null);
(statearr_51216_51237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 2))
{var inst_51190 = (state_51213[7]);var inst_51192 = (inst_51190 < n);var state_51213__$1 = state_51213;if(cljs.core.truth_(inst_51192))
{var statearr_51217_51238 = state_51213__$1;(statearr_51217_51238[1] = 4);
} else
{var statearr_51218_51239 = state_51213__$1;(statearr_51218_51239[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 3))
{var inst_51210 = (state_51213[2]);var inst_51211 = cljs.core.async.close_BANG_.call(null,out);var state_51213__$1 = (function (){var statearr_51219 = state_51213;(statearr_51219[8] = inst_51210);
return statearr_51219;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51213__$1,inst_51211);
} else
{if((state_val_51214 === 4))
{var state_51213__$1 = state_51213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51213__$1,7,ch);
} else
{if((state_val_51214 === 5))
{var state_51213__$1 = state_51213;var statearr_51220_51240 = state_51213__$1;(statearr_51220_51240[2] = null);
(statearr_51220_51240[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 6))
{var inst_51208 = (state_51213[2]);var state_51213__$1 = state_51213;var statearr_51221_51241 = state_51213__$1;(statearr_51221_51241[2] = inst_51208);
(statearr_51221_51241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 7))
{var inst_51195 = (state_51213[9]);var inst_51195__$1 = (state_51213[2]);var inst_51196 = (inst_51195__$1 == null);var inst_51197 = cljs.core.not.call(null,inst_51196);var state_51213__$1 = (function (){var statearr_51222 = state_51213;(statearr_51222[9] = inst_51195__$1);
return statearr_51222;
})();if(inst_51197)
{var statearr_51223_51242 = state_51213__$1;(statearr_51223_51242[1] = 8);
} else
{var statearr_51224_51243 = state_51213__$1;(statearr_51224_51243[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 8))
{var inst_51195 = (state_51213[9]);var state_51213__$1 = state_51213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51213__$1,11,out,inst_51195);
} else
{if((state_val_51214 === 9))
{var state_51213__$1 = state_51213;var statearr_51225_51244 = state_51213__$1;(statearr_51225_51244[2] = null);
(statearr_51225_51244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 10))
{var inst_51205 = (state_51213[2]);var state_51213__$1 = state_51213;var statearr_51226_51245 = state_51213__$1;(statearr_51226_51245[2] = inst_51205);
(statearr_51226_51245[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51214 === 11))
{var inst_51190 = (state_51213[7]);var inst_51200 = (state_51213[2]);var inst_51201 = (inst_51190 + 1);var inst_51190__$1 = inst_51201;var state_51213__$1 = (function (){var statearr_51227 = state_51213;(statearr_51227[10] = inst_51200);
(statearr_51227[7] = inst_51190__$1);
return statearr_51227;
})();var statearr_51228_51246 = state_51213__$1;(statearr_51228_51246[2] = null);
(statearr_51228_51246[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_51232 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51232[0] = state_machine__13648__auto__);
(statearr_51232[1] = 1);
return statearr_51232;
});
var state_machine__13648__auto____1 = (function (state_51213){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_51213);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e51233){if((e51233 instanceof Object))
{var ex__13651__auto__ = e51233;var statearr_51234_51247 = state_51213;(statearr_51234_51247[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51248 = state_51213;
state_51213 = G__51248;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_51213){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_51213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_51235 = f__13746__auto__.call(null);(statearr_51235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___51236);
return statearr_51235;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___51345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_51320){var state_val_51321 = (state_51320[1]);if((state_val_51321 === 1))
{var inst_51297 = null;var state_51320__$1 = (function (){var statearr_51322 = state_51320;(statearr_51322[7] = inst_51297);
return statearr_51322;
})();var statearr_51323_51346 = state_51320__$1;(statearr_51323_51346[2] = null);
(statearr_51323_51346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 2))
{var state_51320__$1 = state_51320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51320__$1,4,ch);
} else
{if((state_val_51321 === 3))
{var inst_51317 = (state_51320[2]);var inst_51318 = cljs.core.async.close_BANG_.call(null,out);var state_51320__$1 = (function (){var statearr_51324 = state_51320;(statearr_51324[8] = inst_51317);
return statearr_51324;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51320__$1,inst_51318);
} else
{if((state_val_51321 === 4))
{var inst_51300 = (state_51320[9]);var inst_51300__$1 = (state_51320[2]);var inst_51301 = (inst_51300__$1 == null);var inst_51302 = cljs.core.not.call(null,inst_51301);var state_51320__$1 = (function (){var statearr_51325 = state_51320;(statearr_51325[9] = inst_51300__$1);
return statearr_51325;
})();if(inst_51302)
{var statearr_51326_51347 = state_51320__$1;(statearr_51326_51347[1] = 5);
} else
{var statearr_51327_51348 = state_51320__$1;(statearr_51327_51348[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 5))
{var inst_51297 = (state_51320[7]);var inst_51300 = (state_51320[9]);var inst_51304 = cljs.core._EQ_.call(null,inst_51300,inst_51297);var state_51320__$1 = state_51320;if(inst_51304)
{var statearr_51328_51349 = state_51320__$1;(statearr_51328_51349[1] = 8);
} else
{var statearr_51329_51350 = state_51320__$1;(statearr_51329_51350[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 6))
{var state_51320__$1 = state_51320;var statearr_51331_51351 = state_51320__$1;(statearr_51331_51351[2] = null);
(statearr_51331_51351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 7))
{var inst_51315 = (state_51320[2]);var state_51320__$1 = state_51320;var statearr_51332_51352 = state_51320__$1;(statearr_51332_51352[2] = inst_51315);
(statearr_51332_51352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 8))
{var inst_51297 = (state_51320[7]);var tmp51330 = inst_51297;var inst_51297__$1 = tmp51330;var state_51320__$1 = (function (){var statearr_51333 = state_51320;(statearr_51333[7] = inst_51297__$1);
return statearr_51333;
})();var statearr_51334_51353 = state_51320__$1;(statearr_51334_51353[2] = null);
(statearr_51334_51353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 9))
{var inst_51300 = (state_51320[9]);var state_51320__$1 = state_51320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51320__$1,11,out,inst_51300);
} else
{if((state_val_51321 === 10))
{var inst_51312 = (state_51320[2]);var state_51320__$1 = state_51320;var statearr_51335_51354 = state_51320__$1;(statearr_51335_51354[2] = inst_51312);
(statearr_51335_51354[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51321 === 11))
{var inst_51300 = (state_51320[9]);var inst_51309 = (state_51320[2]);var inst_51297 = inst_51300;var state_51320__$1 = (function (){var statearr_51336 = state_51320;(statearr_51336[10] = inst_51309);
(statearr_51336[7] = inst_51297);
return statearr_51336;
})();var statearr_51337_51355 = state_51320__$1;(statearr_51337_51355[2] = null);
(statearr_51337_51355[1] = 2);
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
var state_machine__13648__auto____0 = (function (){var statearr_51341 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51341[0] = state_machine__13648__auto__);
(statearr_51341[1] = 1);
return statearr_51341;
});
var state_machine__13648__auto____1 = (function (state_51320){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_51320);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e51342){if((e51342 instanceof Object))
{var ex__13651__auto__ = e51342;var statearr_51343_51356 = state_51320;(statearr_51343_51356[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51357 = state_51320;
state_51320 = G__51357;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_51320){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_51320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_51344 = f__13746__auto__.call(null);(statearr_51344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___51345);
return statearr_51344;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___51492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_51462){var state_val_51463 = (state_51462[1]);if((state_val_51463 === 1))
{var inst_51425 = (new Array(n));var inst_51426 = inst_51425;var inst_51427 = 0;var state_51462__$1 = (function (){var statearr_51464 = state_51462;(statearr_51464[7] = inst_51426);
(statearr_51464[8] = inst_51427);
return statearr_51464;
})();var statearr_51465_51493 = state_51462__$1;(statearr_51465_51493[2] = null);
(statearr_51465_51493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 2))
{var state_51462__$1 = state_51462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51462__$1,4,ch);
} else
{if((state_val_51463 === 3))
{var inst_51460 = (state_51462[2]);var state_51462__$1 = state_51462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51462__$1,inst_51460);
} else
{if((state_val_51463 === 4))
{var inst_51430 = (state_51462[9]);var inst_51430__$1 = (state_51462[2]);var inst_51431 = (inst_51430__$1 == null);var inst_51432 = cljs.core.not.call(null,inst_51431);var state_51462__$1 = (function (){var statearr_51466 = state_51462;(statearr_51466[9] = inst_51430__$1);
return statearr_51466;
})();if(inst_51432)
{var statearr_51467_51494 = state_51462__$1;(statearr_51467_51494[1] = 5);
} else
{var statearr_51468_51495 = state_51462__$1;(statearr_51468_51495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 5))
{var inst_51426 = (state_51462[7]);var inst_51427 = (state_51462[8]);var inst_51435 = (state_51462[10]);var inst_51430 = (state_51462[9]);var inst_51434 = (inst_51426[inst_51427] = inst_51430);var inst_51435__$1 = (inst_51427 + 1);var inst_51436 = (inst_51435__$1 < n);var state_51462__$1 = (function (){var statearr_51469 = state_51462;(statearr_51469[10] = inst_51435__$1);
(statearr_51469[11] = inst_51434);
return statearr_51469;
})();if(cljs.core.truth_(inst_51436))
{var statearr_51470_51496 = state_51462__$1;(statearr_51470_51496[1] = 8);
} else
{var statearr_51471_51497 = state_51462__$1;(statearr_51471_51497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 6))
{var inst_51427 = (state_51462[8]);var inst_51448 = (inst_51427 > 0);var state_51462__$1 = state_51462;if(cljs.core.truth_(inst_51448))
{var statearr_51473_51498 = state_51462__$1;(statearr_51473_51498[1] = 12);
} else
{var statearr_51474_51499 = state_51462__$1;(statearr_51474_51499[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 7))
{var inst_51458 = (state_51462[2]);var state_51462__$1 = state_51462;var statearr_51475_51500 = state_51462__$1;(statearr_51475_51500[2] = inst_51458);
(statearr_51475_51500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 8))
{var inst_51426 = (state_51462[7]);var inst_51435 = (state_51462[10]);var tmp51472 = inst_51426;var inst_51426__$1 = tmp51472;var inst_51427 = inst_51435;var state_51462__$1 = (function (){var statearr_51476 = state_51462;(statearr_51476[7] = inst_51426__$1);
(statearr_51476[8] = inst_51427);
return statearr_51476;
})();var statearr_51477_51501 = state_51462__$1;(statearr_51477_51501[2] = null);
(statearr_51477_51501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 9))
{var inst_51426 = (state_51462[7]);var inst_51440 = cljs.core.vec.call(null,inst_51426);var state_51462__$1 = state_51462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51462__$1,11,out,inst_51440);
} else
{if((state_val_51463 === 10))
{var inst_51446 = (state_51462[2]);var state_51462__$1 = state_51462;var statearr_51478_51502 = state_51462__$1;(statearr_51478_51502[2] = inst_51446);
(statearr_51478_51502[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 11))
{var inst_51442 = (state_51462[2]);var inst_51443 = (new Array(n));var inst_51426 = inst_51443;var inst_51427 = 0;var state_51462__$1 = (function (){var statearr_51479 = state_51462;(statearr_51479[7] = inst_51426);
(statearr_51479[8] = inst_51427);
(statearr_51479[12] = inst_51442);
return statearr_51479;
})();var statearr_51480_51503 = state_51462__$1;(statearr_51480_51503[2] = null);
(statearr_51480_51503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 12))
{var inst_51426 = (state_51462[7]);var inst_51450 = cljs.core.vec.call(null,inst_51426);var state_51462__$1 = state_51462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51462__$1,15,out,inst_51450);
} else
{if((state_val_51463 === 13))
{var state_51462__$1 = state_51462;var statearr_51481_51504 = state_51462__$1;(statearr_51481_51504[2] = null);
(statearr_51481_51504[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 14))
{var inst_51455 = (state_51462[2]);var inst_51456 = cljs.core.async.close_BANG_.call(null,out);var state_51462__$1 = (function (){var statearr_51482 = state_51462;(statearr_51482[13] = inst_51455);
return statearr_51482;
})();var statearr_51483_51505 = state_51462__$1;(statearr_51483_51505[2] = inst_51456);
(statearr_51483_51505[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51463 === 15))
{var inst_51452 = (state_51462[2]);var state_51462__$1 = state_51462;var statearr_51484_51506 = state_51462__$1;(statearr_51484_51506[2] = inst_51452);
(statearr_51484_51506[1] = 14);
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
var state_machine__13648__auto____0 = (function (){var statearr_51488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51488[0] = state_machine__13648__auto__);
(statearr_51488[1] = 1);
return statearr_51488;
});
var state_machine__13648__auto____1 = (function (state_51462){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_51462);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e51489){if((e51489 instanceof Object))
{var ex__13651__auto__ = e51489;var statearr_51490_51507 = state_51462;(statearr_51490_51507[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51462);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51508 = state_51462;
state_51462 = G__51508;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_51462){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_51462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_51491 = f__13746__auto__.call(null);(statearr_51491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___51492);
return statearr_51491;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13745__auto___51651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13746__auto__ = (function (){var switch__13647__auto__ = (function (state_51621){var state_val_51622 = (state_51621[1]);if((state_val_51622 === 1))
{var inst_51580 = [];var inst_51581 = inst_51580;var inst_51582 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_51621__$1 = (function (){var statearr_51623 = state_51621;(statearr_51623[7] = inst_51582);
(statearr_51623[8] = inst_51581);
return statearr_51623;
})();var statearr_51624_51652 = state_51621__$1;(statearr_51624_51652[2] = null);
(statearr_51624_51652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 2))
{var state_51621__$1 = state_51621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51621__$1,4,ch);
} else
{if((state_val_51622 === 3))
{var inst_51619 = (state_51621[2]);var state_51621__$1 = state_51621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51621__$1,inst_51619);
} else
{if((state_val_51622 === 4))
{var inst_51585 = (state_51621[9]);var inst_51585__$1 = (state_51621[2]);var inst_51586 = (inst_51585__$1 == null);var inst_51587 = cljs.core.not.call(null,inst_51586);var state_51621__$1 = (function (){var statearr_51625 = state_51621;(statearr_51625[9] = inst_51585__$1);
return statearr_51625;
})();if(inst_51587)
{var statearr_51626_51653 = state_51621__$1;(statearr_51626_51653[1] = 5);
} else
{var statearr_51627_51654 = state_51621__$1;(statearr_51627_51654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 5))
{var inst_51589 = (state_51621[10]);var inst_51582 = (state_51621[7]);var inst_51585 = (state_51621[9]);var inst_51589__$1 = f.call(null,inst_51585);var inst_51590 = cljs.core._EQ_.call(null,inst_51589__$1,inst_51582);var inst_51591 = cljs.core.keyword_identical_QMARK_.call(null,inst_51582,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_51592 = (inst_51590) || (inst_51591);var state_51621__$1 = (function (){var statearr_51628 = state_51621;(statearr_51628[10] = inst_51589__$1);
return statearr_51628;
})();if(cljs.core.truth_(inst_51592))
{var statearr_51629_51655 = state_51621__$1;(statearr_51629_51655[1] = 8);
} else
{var statearr_51630_51656 = state_51621__$1;(statearr_51630_51656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 6))
{var inst_51581 = (state_51621[8]);var inst_51606 = inst_51581.length;var inst_51607 = (inst_51606 > 0);var state_51621__$1 = state_51621;if(cljs.core.truth_(inst_51607))
{var statearr_51632_51657 = state_51621__$1;(statearr_51632_51657[1] = 12);
} else
{var statearr_51633_51658 = state_51621__$1;(statearr_51633_51658[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 7))
{var inst_51617 = (state_51621[2]);var state_51621__$1 = state_51621;var statearr_51634_51659 = state_51621__$1;(statearr_51634_51659[2] = inst_51617);
(statearr_51634_51659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 8))
{var inst_51589 = (state_51621[10]);var inst_51581 = (state_51621[8]);var inst_51585 = (state_51621[9]);var inst_51594 = inst_51581.push(inst_51585);var tmp51631 = inst_51581;var inst_51581__$1 = tmp51631;var inst_51582 = inst_51589;var state_51621__$1 = (function (){var statearr_51635 = state_51621;(statearr_51635[7] = inst_51582);
(statearr_51635[8] = inst_51581__$1);
(statearr_51635[11] = inst_51594);
return statearr_51635;
})();var statearr_51636_51660 = state_51621__$1;(statearr_51636_51660[2] = null);
(statearr_51636_51660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 9))
{var inst_51581 = (state_51621[8]);var inst_51597 = cljs.core.vec.call(null,inst_51581);var state_51621__$1 = state_51621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51621__$1,11,out,inst_51597);
} else
{if((state_val_51622 === 10))
{var inst_51604 = (state_51621[2]);var state_51621__$1 = state_51621;var statearr_51637_51661 = state_51621__$1;(statearr_51637_51661[2] = inst_51604);
(statearr_51637_51661[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 11))
{var inst_51589 = (state_51621[10]);var inst_51585 = (state_51621[9]);var inst_51599 = (state_51621[2]);var inst_51600 = [];var inst_51601 = inst_51600.push(inst_51585);var inst_51581 = inst_51600;var inst_51582 = inst_51589;var state_51621__$1 = (function (){var statearr_51638 = state_51621;(statearr_51638[7] = inst_51582);
(statearr_51638[8] = inst_51581);
(statearr_51638[12] = inst_51599);
(statearr_51638[13] = inst_51601);
return statearr_51638;
})();var statearr_51639_51662 = state_51621__$1;(statearr_51639_51662[2] = null);
(statearr_51639_51662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 12))
{var inst_51581 = (state_51621[8]);var inst_51609 = cljs.core.vec.call(null,inst_51581);var state_51621__$1 = state_51621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51621__$1,15,out,inst_51609);
} else
{if((state_val_51622 === 13))
{var state_51621__$1 = state_51621;var statearr_51640_51663 = state_51621__$1;(statearr_51640_51663[2] = null);
(statearr_51640_51663[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 14))
{var inst_51614 = (state_51621[2]);var inst_51615 = cljs.core.async.close_BANG_.call(null,out);var state_51621__$1 = (function (){var statearr_51641 = state_51621;(statearr_51641[14] = inst_51614);
return statearr_51641;
})();var statearr_51642_51664 = state_51621__$1;(statearr_51642_51664[2] = inst_51615);
(statearr_51642_51664[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51622 === 15))
{var inst_51611 = (state_51621[2]);var state_51621__$1 = state_51621;var statearr_51643_51665 = state_51621__$1;(statearr_51643_51665[2] = inst_51611);
(statearr_51643_51665[1] = 14);
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
var state_machine__13648__auto____0 = (function (){var statearr_51647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51647[0] = state_machine__13648__auto__);
(statearr_51647[1] = 1);
return statearr_51647;
});
var state_machine__13648__auto____1 = (function (state_51621){while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__.call(null,state_51621);if(cljs.core.keyword_identical_QMARK_.call(null,result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13650__auto__;
}
break;
}
}catch (e51648){if((e51648 instanceof Object))
{var ex__13651__auto__ = e51648;var statearr_51649_51666 = state_51621;(statearr_51649_51666[5] = ex__13651__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51667 = state_51621;
state_51621 = G__51667;
continue;
}
} else
{return ret_value__13649__auto__;
}
break;
}
});
state_machine__13648__auto__ = function(state_51621){
switch(arguments.length){
case 0:
return state_machine__13648__auto____0.call(this);
case 1:
return state_machine__13648__auto____1.call(this,state_51621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13648__auto____0;
state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13648__auto____1;
return state_machine__13648__auto__;
})()
;})(switch__13647__auto__))
})();var state__13747__auto__ = (function (){var statearr_51650 = f__13746__auto__.call(null);(statearr_51650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13745__auto___51651);
return statearr_51650;
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
