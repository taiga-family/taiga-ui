"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nullOrUndef(t) {
    return t === null || t === undefined;
}
var Maybe = (function () {
    function Maybe(t) {
        this.t = t;
    }
    Maybe.lift = function (t) {
        return new Maybe(nullOrUndef(t) ? undefined : t);
    };
    Maybe.all = function (t0, t1) {
        return t0.bind(function (_t0) { return t1.fmap(function (_t1) { return [_t0, _t1]; }); });
    };
    Maybe.prototype.bind = function (fn) {
        return nullOrUndef(this.t) ? Maybe.nothing : fn(this.t);
    };
    Maybe.prototype.fmap = function (fn) {
        return this.bind(function (t) { return Maybe.lift(fn(t)); });
    };
    Object.defineProperty(Maybe.prototype, "isNothing", {
        get: function () {
            return nullOrUndef(this.t);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Maybe.prototype, "isSomething", {
        get: function () {
            return !nullOrUndef(this.t);
        },
        enumerable: true,
        configurable: true
    });
    Maybe.prototype.catch = function (def) {
        if (this.isNothing) {
            return def();
        }
        return this;
    };
    Maybe.prototype.unwrap = function () {
        return this.t;
    };
    Maybe.nothing = new Maybe(undefined);
    return Maybe;
}());
exports.Maybe = Maybe;
function unwrapFirst(ts) {
    var f = ts.find(function (t) { return t.isSomething; });
    if (f) {
        return f.unwrap();
    }
    return undefined;
}
exports.unwrapFirst = unwrapFirst;
function all() {
    var preds = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        preds[_i] = arguments[_i];
    }
    return function (t) { return !preds.find(function (p) { return !p(t); }); };
}
exports.all = all;
function any() {
    var preds = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        preds[_i] = arguments[_i];
    }
    return function (t) { return !!preds.find(function (p) { return p(t); }); };
}
exports.any = any;
function ifTrue(pred) {
    return function (t) { return (pred(t) ? Maybe.lift(t) : Maybe.nothing); };
}
exports.ifTrue = ifTrue;
function listToMaybe(ms) {
    var unWrapped = (ms || []).filter(function (m) { return m.isSomething; }).map(function (m) { return m.unwrap(); });
    return unWrapped.length === 0 ? Maybe.nothing : Maybe.lift(unWrapped);
}
exports.listToMaybe = listToMaybe;
