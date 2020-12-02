"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        var _loop_1 = function () {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
            try {
                uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
            }
            catch (error) {
                handleUnhandledRejection(error);
            }
        };
        while (_uncaughtPromiseErrors.length) {
            _loop_1();
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) { return value && value.then; }
    function forwardResolution(value) { return value; }
    function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () { resolvePromise(promise, false, err); })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () { resolvePromise(promise, false, err); })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    var uncaughtPromiseError = value;
                    if (!isDisableWrappingUncaughtPromiseRejection) {
                        // If disable wrapping uncaught promise reject
                        // and the rejected value is an Error object,
                        // use the value instead of wrapping it.
                        try {
                            // Here we throws a new Error to print more readable error log
                            // and if the value is not an error, zone.js builds an `Error`
                            // Object here to attach the stack information.
                            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                (value && value.stack ? '\n' + value.stack : ''));
                        }
                        catch (err) {
                            uncaughtPromiseError = err;
                        }
                    }
                    uncaughtPromiseError.rejection = value;
                    uncaughtPromiseError.promise = promise;
                    uncaughtPromiseError.zone = Zone.current;
                    uncaughtPromiseError.task = Zone.currentTask;
                    _uncaughtPromiseErrors.push(uncaughtPromiseError);
                    api.scheduleMicroTask(); // to make sure that it is running
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var noop = function () { };
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () { return ZONE_AWARE_PROMISE_TO_STRING; };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) { resolve(value); }
            function onReject(error) { reject(error); }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) { return ZoneAwarePromise.allWithCallback(values); };
        ZoneAwarePromise.allSettled = function (values) {
            var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
            return P.allWithCallback(values, {
                thenCallback: function (value) { return ({ status: 'fulfilled', value: value }); },
                errorCallback: function (err) { return ({ status: 'rejected', reason: err }); }
            });
        };
        ZoneAwarePromise.allWithCallback = function (values, callback) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                try {
                    value.then(function (value) {
                        resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                        unresolvedCount--;
                        if (unresolvedCount === 0) {
                            resolve(resolvedValues);
                        }
                    }, function (err) {
                        if (!callback) {
                            reject(err);
                        }
                        else {
                            resolvedValues[curValueIndex] = callback.errorCallback(err);
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }
                    });
                }
                catch (thenErr) {
                    reject(thenErr);
                }
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
            get: function () { return 'Promise'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
            get: function () { return ZoneAwarePromise; },
            enumerable: true,
            configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var C = this.constructor[Symbol.species];
            if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
            }
            var chainPromise = new C(noop);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var C = this.constructor[Symbol.species];
            if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
            }
            var chainPromise = new C(noop);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) { originalThen.call(_this, resolve, reject); });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global[api.symbol('fetch')] = fetch_1;
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL2NvbW1vbi9wcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNILElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQ25GLElBQU0sOEJBQThCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZFLElBQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUVuRCxTQUFTLHNCQUFzQixDQUFDLEdBQVE7UUFDdEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNyRCxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEU7UUFFRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDOUIsSUFBTSxzQkFBc0IsR0FBMkIsRUFBRSxDQUFDO0lBQzFELElBQU0seUNBQXlDLEdBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FB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Q3pCLElBQU0sT0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLE9BQU8sT0FBSyxJQUFJLFVBQVUsRUFBRTtZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQUssQ0FBQztZQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQUssQ0FBQyxDQUFDO1NBQ2xDO0tBQ0Y7SUFFRCwrRUFBK0U7SUFDOUUsT0FBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0lBQ3BGLE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgnWm9uZUF3YXJlUHJvbWlzZScsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGNvbnN0IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4gIGZ1bmN0aW9uIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcob2JqOiBhbnkpIHtcbiAgICBpZiAob2JqICYmIG9iai50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgcmV0dXJuIChjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqID8gb2JqLnRvU3RyaW5nKCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgfVxuXG4gIGNvbnN0IF9fc3ltYm9sX18gPSBhcGkuc3ltYm9sO1xuICBjb25zdCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzOiBVbmNhdWdodFByb21pc2VFcnJvcltdID0gW107XG4gIGNvbnN0IGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uID1cbiAgICAgIGdsb2JhbFtfX3N5bWJvbF9fKCdESVNBQkxFX1dSQVBQSU5HX1VOQ0FVR0hUX1BST01JU0VfUkVKRUNUSU9OJyldID09PSB0cnVlO1xuICBjb25zdCBzeW1ib2xQcm9taXNlID0gX19zeW1ib2xfXygnUHJvbWlzZScpO1xuICBjb25zdCBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICBjb25zdCBjcmVhdGlvblRyYWNlID0gJ19fY3JlYXRpb25UcmFjZV9fJztcblxuICBhcGkub25VbmhhbmRsZWRFcnJvciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgIGNvbnN0IHJlamVjdGlvbiA9IGUgJiYgZS5yZWplY3Rpb247XG4gICAgICBpZiAocmVqZWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVW5oYW5kbGVkIFByb21pc2UgcmVqZWN0aW9uOicsXG4gICAgICAgICAgICByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsXG4gICAgICAgICAgICAoPFpvbmU+ZS56b25lKS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiAoPFRhc2s+ZS50YXNrKS5zb3VyY2UsICc7IFZhbHVlOicsIHJlamVjdGlvbixcbiAgICAgICAgICAgIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSAoKSA9PiB7XG4gICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB1bmNhdWdodFByb21pc2VFcnJvcjogVW5jYXVnaHRQcm9taXNlRXJyb3IgPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNoaWZ0KCkgITtcbiAgICAgIHRyeSB7XG4gICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZCgoKSA9PiB7IHRocm93IHVuY2F1Z2h0UHJvbWlzZUVycm9yOyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFVOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTCA9IF9fc3ltYm9sX18oJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKHRoaXM6IHVua25vd24sIGU6IGFueSkge1xuICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKFpvbmUgYXMgYW55KVtVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0xdO1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlOiBhbnkpOiBib29sZWFuIHsgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW47IH1cblxuICBmdW5jdGlvbiBmb3J3YXJkUmVzb2x1dGlvbih2YWx1ZTogYW55KTogYW55IHsgcmV0dXJuIHZhbHVlOyB9XG5cbiAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb246IGFueSk6IGFueSB7IHJldHVybiBab25lQXdhcmVQcm9taXNlLnJlamVjdChyZWplY3Rpb24pOyB9XG5cbiAgY29uc3Qgc3ltYm9sU3RhdGU6IHN0cmluZyA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gIGNvbnN0IHN5bWJvbFZhbHVlOiBzdHJpbmcgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICBjb25zdCBzeW1ib2xGaW5hbGx5OiBzdHJpbmcgPSBfX3N5bWJvbF9fKCdmaW5hbGx5Jyk7XG4gIGNvbnN0IHN5bWJvbFBhcmVudFByb21pc2VWYWx1ZTogc3RyaW5nID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVZhbHVlJyk7XG4gIGNvbnN0IHN5bWJvbFBhcmVudFByb21pc2VTdGF0ZTogc3RyaW5nID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gJ1Byb21pc2UudGhlbic7XG4gIGNvbnN0IFVOUkVTT0xWRUQ6IG51bGwgPSBudWxsO1xuICBjb25zdCBSRVNPTFZFRCA9IHRydWU7XG4gIGNvbnN0IFJFSkVDVEVEID0gZmFsc2U7XG4gIGNvbnN0IFJFSkVDVEVEX05PX0NBVENIID0gMDtcblxuICBmdW5jdGlvbiBtYWtlUmVzb2x2ZXIocHJvbWlzZTogWm9uZUF3YXJlUHJvbWlzZTxhbnk+LCBzdGF0ZTogYm9vbGVhbik6ICh2YWx1ZTogYW55KSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKHYpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgIH1cbiAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgb25jZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCB3YXNDYWxsZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKHdyYXBwZWRGdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdhc0NhbGxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3YXNDYWxsZWQgPSB0cnVlO1xuICAgICAgICB3cmFwcGVkRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBUWVBFX0VSUk9SID0gJ1Byb21pc2UgcmVzb2x2ZWQgd2l0aCBpdHNlbGYnO1xuICBjb25zdCBDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MID0gX19zeW1ib2xfXygnY3VycmVudFRhc2tUcmFjZScpO1xuXG4gIC8vIFByb21pc2UgUmVzb2x1dGlvblxuICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShcbiAgICAgIHByb21pc2U6IFpvbmVBd2FyZVByb21pc2U8YW55Piwgc3RhdGU6IGJvb2xlYW4sIHZhbHVlOiBhbnkpOiBab25lQXdhcmVQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihUWVBFX0VSUk9SKTtcbiAgICB9XG4gICAgaWYgKChwcm9taXNlIGFzIGFueSlbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAvLyBzaG91bGQgb25seSBnZXQgdmFsdWUudGhlbiBvbmNlIGJhc2VkIG9uIHByb21pc2Ugc3BlYy5cbiAgICAgIGxldCB0aGVuOiBhbnkgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhlbiA9IHZhbHVlICYmIHZhbHVlLnRoZW47XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBvbmNlV3JhcHBlcigoKSA9PiB7IHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpOyB9KSgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIC8vIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgIGlmIChzdGF0ZSAhPT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlICYmXG4gICAgICAgICAgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sU3RhdGUpICYmIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFZhbHVlKSAmJlxuICAgICAgICAgICh2YWx1ZSBhcyBhbnkpW3N5bWJvbFN0YXRlXSAhPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG4gICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsICh2YWx1ZSBhcyBhbnkpW3N5bWJvbFN0YXRlXSwgKHZhbHVlIGFzIGFueSlbc3ltYm9sVmFsdWVdKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWx1ZSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSksXG4gICAgICAgICAgICAgIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBmYWxzZSkpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgb25jZVdyYXBwZXIoKCkgPT4geyByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTsgfSkoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHByb21pc2UgYXMgYW55KVtzeW1ib2xTdGF0ZV0gPSBzdGF0ZTtcbiAgICAgICAgY29uc3QgcXVldWUgPSAocHJvbWlzZSBhcyBhbnkpW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgKHByb21pc2UgYXMgYW55KVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoKHByb21pc2UgYXMgYW55KVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIGlzIGdlbmVyYXRlZCBieSBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBSRVNPTFZFRCkge1xuICAgICAgICAgICAgLy8gdGhlIHN0YXRlIGlzIHJlc29sdmVkLCBzaG91bGQgaWdub3JlIHRoZSB2YWx1ZVxuICAgICAgICAgICAgLy8gYW5kIHVzZSBwYXJlbnQgcHJvbWlzZSB2YWx1ZVxuICAgICAgICAgICAgKHByb21pc2UgYXMgYW55KVtzeW1ib2xTdGF0ZV0gPSAocHJvbWlzZSBhcyBhbnkpW3N5bWJvbFBhcmVudFByb21pc2VTdGF0ZV07XG4gICAgICAgICAgICAocHJvbWlzZSBhcyBhbnkpW3N5bWJvbFZhbHVlXSA9IChwcm9taXNlIGFzIGFueSlbc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWNvcmQgdGFzayBpbmZvcm1hdGlvbiBpbiB2YWx1ZSB3aGVuIGVycm9yIG9jY3Vycywgc28gd2UgY2FuXG4gICAgICAgIC8vIGRvIHNvbWUgYWRkaXRpb25hbCB3b3JrIHN1Y2ggYXMgcmVuZGVyIGxvbmdTdGFja1RyYWNlXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGxvbmdTdGFja1RyYWNlWm9uZSBpcyBoZXJlXG4gICAgICAgICAgY29uc3QgdHJhY2UgPSBab25lLmN1cnJlbnRUYXNrICYmIFpvbmUuY3VycmVudFRhc2suZGF0YSAmJlxuICAgICAgICAgICAgICAoWm9uZS5jdXJyZW50VGFzay5kYXRhIGFzIGFueSlbY3JlYXRpb25UcmFjZV07XG4gICAgICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgICAgICAvLyBvbmx5IGtlZXAgdGhlIGxvbmcgc3RhY2sgdHJhY2UgaW50byBlcnJvciB3aGVuIGluIGxvbmdTdGFja1RyYWNlWm9uZVxuICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgdmFsdWUsIENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wsXG4gICAgICAgICAgICAgICAge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdHJhY2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDspIHtcbiAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAocHJvbWlzZSBhcyBhbnkpW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEX05PX0NBVENIO1xuICAgICAgICAgIGxldCB1bmNhdWdodFByb21pc2VFcnJvciA9IHZhbHVlO1xuICAgICAgICAgIGlmICghaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGUgd3JhcHBpbmcgdW5jYXVnaHQgcHJvbWlzZSByZWplY3RcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgcmVqZWN0ZWQgdmFsdWUgaXMgYW4gRXJyb3Igb2JqZWN0LFxuICAgICAgICAgICAgLy8gdXNlIHRoZSB2YWx1ZSBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0LlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gSGVyZSB3ZSB0aHJvd3MgYSBuZXcgRXJyb3IgdG8gcHJpbnQgbW9yZSByZWFkYWJsZSBlcnJvciBsb2dcbiAgICAgICAgICAgICAgLy8gYW5kIGlmIHRoZSB2YWx1ZSBpcyBub3QgYW4gZXJyb3IsIHpvbmUuanMgYnVpbGRzIGFuIGBFcnJvcmBcbiAgICAgICAgICAgICAgLy8gT2JqZWN0IGhlcmUgdG8gYXR0YWNoIHRoZSBzdGFjayBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgJ1VuY2F1Z2h0IChpbiBwcm9taXNlKTogJyArIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcodmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrICE7XG4gICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKHVuY2F1Z2h0UHJvbWlzZUVycm9yKTtcbiAgICAgICAgICBhcGkuc2NoZWR1bGVNaWNyb1Rhc2soKTsgIC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGNvbnN0IFJFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVIgPSBfX3N5bWJvbF9fKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpO1xuICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaCh0aGlzOiB1bmtub3duLCBwcm9taXNlOiBab25lQXdhcmVQcm9taXNlPGFueT4pOiB2b2lkIHtcbiAgICBpZiAoKHByb21pc2UgYXMgYW55KVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAvLyBpZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCBubyBjYXRjaCBzdGF0dXNcbiAgICAgIC8vIGFuZCBxdWV1ZS5sZW5ndGggPiAwLCBtZWFucyB0aGVyZSBpcyBhIGVycm9yIGhhbmRsZXJcbiAgICAgIC8vIGhlcmUgdG8gaGFuZGxlIHRoZSByZWplY3RlZCBwcm9taXNlLCB3ZSBzaG91bGQgdHJpZ2dlclxuICAgICAgLy8gd2luZG93cy5yZWplY3Rpb25oYW5kbGVkIGV2ZW50SGFuZGxlciBvciBub2RlanMgcmVqZWN0aW9uSGFuZGxlZFxuICAgICAgLy8gZXZlbnRIYW5kbGVyXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKFpvbmUgYXMgYW55KVtSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSXTtcbiAgICAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywge3JlamVjdGlvbjogKHByb21pc2UgYXMgYW55KVtzeW1ib2xWYWx1ZV0sIHByb21pc2U6IHByb21pc2V9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB9XG4gICAgICAocHJvbWlzZSBhcyBhbnkpW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9taXNlID09PSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzW2ldLnByb21pc2UpIHtcbiAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0PFIsIFUxLCBVMj4oXG4gICAgICBwcm9taXNlOiBab25lQXdhcmVQcm9taXNlPGFueT4sIHpvbmU6IFpvbmUsIGNoYWluUHJvbWlzZTogWm9uZUF3YXJlUHJvbWlzZTxhbnk+LFxuICAgICAgb25GdWxmaWxsZWQ/OiAoKHZhbHVlOiBSKSA9PiBVMSkgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgICAgb25SZWplY3RlZD86ICgoZXJyb3I6IGFueSkgPT4gVTIpIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpO1xuICAgIGNvbnN0IHByb21pc2VTdGF0ZSA9IChwcm9taXNlIGFzIGFueSlbc3ltYm9sU3RhdGVdO1xuICAgIGNvbnN0IGRlbGVnYXRlID0gcHJvbWlzZVN0YXRlID9cbiAgICAgICAgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykgPyBvbkZ1bGZpbGxlZCA6IGZvcndhcmRSZXNvbHV0aW9uIDpcbiAgICAgICAgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSA/IG9uUmVqZWN0ZWQgOiBmb3J3YXJkUmVqZWN0aW9uO1xuICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJlbnRQcm9taXNlVmFsdWUgPSAocHJvbWlzZSBhcyBhbnkpW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgY29uc3QgaXNGaW5hbGx5UHJvbWlzZSA9XG4gICAgICAgICAgICAhIWNoYWluUHJvbWlzZSAmJiBzeW1ib2xGaW5hbGx5ID09PSAoY2hhaW5Qcm9taXNlIGFzIGFueSlbc3ltYm9sRmluYWxseV07XG4gICAgICAgIGlmIChpc0ZpbmFsbHlQcm9taXNlKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGZyb20gZmluYWxseSBjYWxsLCBrZWVwIHBhcmVudCBwcm9taXNlJ3Mgc3RhdGUgYW5kIHZhbHVlXG4gICAgICAgICAgKGNoYWluUHJvbWlzZSBhcyBhbnkpW3N5bWJvbFBhcmVudFByb21pc2VWYWx1ZV0gPSBwYXJlbnRQcm9taXNlVmFsdWU7XG4gICAgICAgICAgKGNoYWluUHJvbWlzZSBhcyBhbnkpW3N5bWJvbFBhcmVudFByb21pc2VTdGF0ZV0gPSBwcm9taXNlU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2hvdWxkIG5vdCBwYXNzIHZhbHVlIHRvIGZpbmFsbHkgY2FsbGJhY2tcbiAgICAgICAgY29uc3QgdmFsdWUgPSB6b25lLnJ1bihcbiAgICAgICAgICAgIGRlbGVnYXRlLCB1bmRlZmluZWQsXG4gICAgICAgICAgICBpc0ZpbmFsbHlQcm9taXNlICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVqZWN0aW9uICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVzb2x1dGlvbiA/XG4gICAgICAgICAgICAgICAgW10gOlxuICAgICAgICAgICAgICAgIFtwYXJlbnRQcm9taXNlVmFsdWVdKTtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMsIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoaXMgZXJyb3JcbiAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0sIGNoYWluUHJvbWlzZSBhcyBUYXNrRGF0YSk7XG4gIH1cblxuICBjb25zdCBaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HID0gJ2Z1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG5cbiAgY29uc3Qgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbiAgY2xhc3MgWm9uZUF3YXJlUHJvbWlzZTxSPiBpbXBsZW1lbnRzIFByb21pc2U8Uj4ge1xuICAgIHN0YXRpYyB0b1N0cmluZygpIHsgcmV0dXJuIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkc7IH1cblxuICAgIHN0YXRpYyByZXNvbHZlPFI+KHZhbHVlOiBSKTogUHJvbWlzZTxSPiB7XG4gICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UoPFpvbmVBd2FyZVByb21pc2U8Uj4+bmV3IHRoaXMobnVsbCBhcyBhbnkpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWplY3Q8VT4oZXJyb3I6IFUpOiBQcm9taXNlPFU+IHtcbiAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZSg8Wm9uZUF3YXJlUHJvbWlzZTxVPj5uZXcgdGhpcyhudWxsIGFzIGFueSksIFJFSkVDVEVELCBlcnJvcik7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhY2U8Uj4odmFsdWVzOiBQcm9taXNlTGlrZTxhbnk+W10pOiBQcm9taXNlPFI+IHtcbiAgICAgIGxldCByZXNvbHZlOiAodjogYW55KSA9PiB2b2lkO1xuICAgICAgbGV0IHJlamVjdDogKHY6IGFueSkgPT4gdm9pZDtcbiAgICAgIGxldCBwcm9taXNlOiBhbnkgPSBuZXcgdGhpcygocmVzLCByZWopID0+IHtcbiAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgcmVqZWN0ID0gcmVqO1xuICAgICAgfSk7XG4gICAgICBmdW5jdGlvbiBvblJlc29sdmUodmFsdWU6IGFueSkgeyByZXNvbHZlKHZhbHVlKTsgfVxuICAgICAgZnVuY3Rpb24gb25SZWplY3QoZXJyb3I6IGFueSkgeyByZWplY3QoZXJyb3IpOyB9XG5cbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWxsPFI+KHZhbHVlczogYW55KTogUHJvbWlzZTxSPiB7IHJldHVybiBab25lQXdhcmVQcm9taXNlLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMpOyB9XG5cbiAgICBzdGF0aWMgYWxsU2V0dGxlZDxSPih2YWx1ZXM6IGFueSk6IFByb21pc2U8Uj4ge1xuICAgICAgY29uc3QgUCA9IHRoaXMgJiYgdGhpcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlID8gdGhpcyA6IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICByZXR1cm4gUC5hbGxXaXRoQ2FsbGJhY2sodmFsdWVzLCB7XG4gICAgICAgIHRoZW5DYWxsYmFjazogKHZhbHVlOiBhbnkpID0+ICh7c3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWV9KSxcbiAgICAgICAgZXJyb3JDYWxsYmFjazogKGVycjogYW55KSA9PiAoe3N0YXR1czogJ3JlamVjdGVkJywgcmVhc29uOiBlcnJ9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFsbFdpdGhDYWxsYmFjazxSPih2YWx1ZXM6IGFueSwgY2FsbGJhY2s/OiB7XG4gICAgICB0aGVuQ2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiBhbnksXG4gICAgICBlcnJvckNhbGxiYWNrOiAoZXJyOiBhbnkpID0+IGFueVxuICAgIH0pOiBQcm9taXNlPFI+IHtcbiAgICAgIGxldCByZXNvbHZlOiAodjogYW55KSA9PiB2b2lkO1xuICAgICAgbGV0IHJlamVjdDogKHY6IGFueSkgPT4gdm9pZDtcbiAgICAgIGxldCBwcm9taXNlID0gbmV3IHRoaXM8Uj4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTdGFydCBhdCAyIHRvIHByZXZlbnQgcHJlbWF0dXJlbHkgcmVzb2x2aW5nIGlmIC50aGVuIGlzIGNhbGxlZCBpbW1lZGlhdGVseS5cbiAgICAgIGxldCB1bnJlc29sdmVkQ291bnQgPSAyO1xuICAgICAgbGV0IHZhbHVlSW5kZXggPSAwO1xuXG4gICAgICBjb25zdCByZXNvbHZlZFZhbHVlczogYW55W10gPSBbXTtcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VyVmFsdWVJbmRleCA9IHZhbHVlSW5kZXg7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsdWUudGhlbihcbiAgICAgICAgICAgICAgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrID8gY2FsbGJhY2sudGhlbkNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUgIShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QgIShlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrLmVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlICEocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHRoZW5FcnIpIHtcbiAgICAgICAgICByZWplY3QgISh0aGVuRXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVucmVzb2x2ZWRDb3VudCsrO1xuICAgICAgICB2YWx1ZUluZGV4Kys7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgdGhlIHVucmVzb2x2ZWRDb3VudCB6ZXJvLWJhc2VkIGFnYWluLlxuICAgICAgdW5yZXNvbHZlZENvdW50IC09IDI7XG5cbiAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZSAhKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGV4ZWN1dG9yOlxuICAgICAgICAgICAgKHJlc29sdmU6ICh2YWx1ZT86IFJ8UHJvbWlzZUxpa2U8Uj4pID0+IHZvaWQsIHJlamVjdDogKGVycm9yPzogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgICBjb25zdCBwcm9taXNlOiBab25lQXdhcmVQcm9taXNlPFI+ID0gdGhpcztcbiAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgYW4gaW5zdGFuY2VvZiBQcm9taXNlLicpO1xuICAgICAgfVxuICAgICAgKHByb21pc2UgYXMgYW55KVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgKHByb21pc2UgYXMgYW55KVtzeW1ib2xWYWx1ZV0gPSBbXTsgIC8vIHF1ZXVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXhlY3V0b3IgJiYgZXhlY3V0b3IobWFrZVJlc29sdmVyKHByb21pc2UsIFJFU09MVkVEKSwgbWFrZVJlc29sdmVyKHByb21pc2UsIFJFSkVDVEVEKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldFtTeW1ib2wudG9TdHJpbmdUYWddKCkgeyByZXR1cm4gJ1Byb21pc2UnIGFzIGFueTsgfVxuXG4gICAgZ2V0W1N5bWJvbC5zcGVjaWVzXSgpIHsgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7IH1cblxuICAgIHRoZW48VFJlc3VsdDEgPSBSLCBUUmVzdWx0MiA9IG5ldmVyPihcbiAgICAgICAgb25GdWxmaWxsZWQ/OiAoKHZhbHVlOiBSKSA9PiBUUmVzdWx0MSB8IFByb21pc2VMaWtlPFRSZXN1bHQxPil8dW5kZWZpbmVkfG51bGwsXG4gICAgICAgIG9uUmVqZWN0ZWQ/OiAoKHJlYXNvbjogYW55KSA9PiBUUmVzdWx0MiB8IFByb21pc2VMaWtlPFRSZXN1bHQyPil8dW5kZWZpbmVkfFxuICAgICAgICBudWxsKTogUHJvbWlzZTxUUmVzdWx0MXxUUmVzdWx0Mj4ge1xuICAgICAgbGV0IEMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpW1N5bWJvbC5zcGVjaWVzXTtcbiAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBDID0gdGhpcy5jb25zdHJ1Y3RvciB8fCBab25lQXdhcmVQcm9taXNlO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hhaW5Qcm9taXNlOiBQcm9taXNlPFRSZXN1bHQxfFRSZXN1bHQyPiA9IG5ldyAoQyBhcyB0eXBlb2YgWm9uZUF3YXJlUHJvbWlzZSkobm9vcCk7XG4gICAgICBjb25zdCB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgaWYgKCh0aGlzIGFzIGFueSlbc3ltYm9sU3RhdGVdID09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgKDxhbnlbXT4odGhpcyBhcyBhbnkpW3N5bWJvbFZhbHVlXSkucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSBhcyBhbnksIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgfVxuXG4gICAgY2F0Y2g8VFJlc3VsdCA9IG5ldmVyPihvblJlamVjdGVkPzogKChyZWFzb246IGFueSkgPT4gVFJlc3VsdCB8IFByb21pc2VMaWtlPFRSZXN1bHQ+KXx1bmRlZmluZWR8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKTogUHJvbWlzZTxSfFRSZXN1bHQ+IHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgfVxuXG4gICAgZmluYWxseTxVPihvbkZpbmFsbHk/OiAoKSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4pOiBQcm9taXNlPFI+IHtcbiAgICAgIGxldCBDID0gKHRoaXMuY29uc3RydWN0b3IgYXMgYW55KVtTeW1ib2wuc3BlY2llc107XG4gICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgQyA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBjaGFpblByb21pc2U6IFByb21pc2U8UnxuZXZlcj4gPSBuZXcgKEMgYXMgdHlwZW9mIFpvbmVBd2FyZVByb21pc2UpKG5vb3ApO1xuICAgICAgKGNoYWluUHJvbWlzZSBhcyBhbnkpW3N5bWJvbEZpbmFsbHldID0gc3ltYm9sRmluYWxseTtcbiAgICAgIGNvbnN0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICBpZiAoKHRoaXMgYXMgYW55KVtzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAoPGFueVtdPih0aGlzIGFzIGFueSlbc3ltYm9sVmFsdWVdKS5wdXNoKHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlIGFzIGFueSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICB9XG4gIH1cbiAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gIC8vIEUuZy4gQ2xvc3VyZSBDb21waWxlciBpbiBhZHZhbmNlZCBtb2RlLlxuICBab25lQXdhcmVQcm9taXNlWydyZXNvbHZlJ10gPSBab25lQXdhcmVQcm9taXNlLnJlc29sdmU7XG4gIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gIFpvbmVBd2FyZVByb21pc2VbJ3JhY2UnXSA9IFpvbmVBd2FyZVByb21pc2UucmFjZTtcbiAgWm9uZUF3YXJlUHJvbWlzZVsnYWxsJ10gPSBab25lQXdhcmVQcm9taXNlLmFsbDtcblxuICBjb25zdCBOYXRpdmVQcm9taXNlID0gZ2xvYmFsW3N5bWJvbFByb21pc2VdID0gZ2xvYmFsWydQcm9taXNlJ107XG4gIGNvbnN0IFpPTkVfQVdBUkVfUFJPTUlTRSA9IFpvbmUuX19zeW1ib2xfXygnWm9uZUF3YXJlUHJvbWlzZScpO1xuXG4gIGxldCBkZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbCwgJ1Byb21pc2UnKTtcbiAgaWYgKCFkZXNjIHx8IGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgZGVzYyAmJiBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgICBkZXNjICYmIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgIGlmICghZGVzYykge1xuICAgICAgZGVzYyA9IHtjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWV9O1xuICAgIH1cbiAgICBkZXNjLmdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgd2UgYWxyZWFkeSBzZXQgWm9uZUF3YXJlUHJvbWlzZSwgdXNlIHBhdGNoZWQgb25lXG4gICAgICAvLyBvdGhlcndpc2UgcmV0dXJuIG5hdGl2ZSBvbmUuXG4gICAgICByZXR1cm4gZ2xvYmFsW1pPTkVfQVdBUkVfUFJPTUlTRV0gPyBnbG9iYWxbWk9ORV9BV0FSRV9QUk9NSVNFXSA6IGdsb2JhbFtzeW1ib2xQcm9taXNlXTtcbiAgICB9O1xuICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24oTmV3TmF0aXZlUHJvbWlzZSkge1xuICAgICAgaWYgKE5ld05hdGl2ZVByb21pc2UgPT09IFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgLy8gaWYgdGhlIE5ld05hdGl2ZVByb21pc2UgaXMgWm9uZUF3YXJlUHJvbWlzZVxuICAgICAgICAvLyBzYXZlIHRvIGdsb2JhbFxuICAgICAgICBnbG9iYWxbWk9ORV9BV0FSRV9QUk9NSVNFXSA9IE5ld05hdGl2ZVByb21pc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgTmV3TmF0aXZlUHJvbWlzZSBpcyBub3QgWm9uZUF3YXJlUHJvbWlzZVxuICAgICAgICAvLyBmb3IgZXhhbXBsZTogYWZ0ZXIgbG9hZCB6b25lLmpzLCBzb21lIGxpYnJhcnkganVzdFxuICAgICAgICAvLyBzZXQgZXM2LXByb21pc2UgdG8gZ2xvYmFsLCBpZiB3ZSBzZXQgaXQgdG8gZ2xvYmFsXG4gICAgICAgIC8vIGRpcmVjdGx5LCBhc3NlcnRab25lUGF0Y2hlZCB3aWxsIGZhaWwgYW5kIGFuZ3VsYXJcbiAgICAgICAgLy8gd2lsbCBub3QgbG9hZGVkLCBzbyB3ZSBqdXN0IHNldCB0aGUgTmV3TmF0aXZlUHJvbWlzZVxuICAgICAgICAvLyB0byBnbG9iYWxbc3ltYm9sUHJvbWlzZV0sIHNvIHRoZSByZXN1bHQgaXMganVzdCBsaWtlXG4gICAgICAgIC8vIHdlIGxvYWQgRVM2IFByb21pc2UgYmVmb3JlIHpvbmUuanNcbiAgICAgICAgZ2xvYmFsW3N5bWJvbFByb21pc2VdID0gTmV3TmF0aXZlUHJvbWlzZTtcbiAgICAgICAgaWYgKCFOZXdOYXRpdmVQcm9taXNlLnByb3RvdHlwZVtzeW1ib2xUaGVuXSkge1xuICAgICAgICAgIHBhdGNoVGhlbihOZXdOYXRpdmVQcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgICBhcGkuc2V0TmF0aXZlUHJvbWlzZShOZXdOYXRpdmVQcm9taXNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAnUHJvbWlzZScsIGRlc2MpO1xuICB9XG5cbiAgZ2xvYmFsWydQcm9taXNlJ10gPSBab25lQXdhcmVQcm9taXNlO1xuXG4gIGNvbnN0IHN5bWJvbFRoZW5QYXRjaGVkID0gX19zeW1ib2xfXygndGhlblBhdGNoZWQnKTtcblxuICBmdW5jdGlvbiBwYXRjaFRoZW4oQ3RvcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBwcm90byA9IEN0b3IucHJvdG90eXBlO1xuXG4gICAgY29uc3QgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICBpZiAocHJvcCAmJiAocHJvcC53cml0YWJsZSA9PT0gZmFsc2UgfHwgIXByb3AuY29uZmlndXJhYmxlKSkge1xuICAgICAgLy8gY2hlY2sgQ3Rvci5wcm90b3R5cGUudGhlbiBwcm9wZXJ0eURlc2NyaXB0b3IgaXMgd3JpdGFibGUgb3Igbm90XG4gICAgICAvLyBpbiBtZXRlb3IgZW52LCB3cml0YWJsZSBpcyBmYWxzZSwgd2Ugc2hvdWxkIGlnbm9yZSBzdWNoIGNhc2VcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcmlnaW5hbFRoZW4gPSBwcm90by50aGVuO1xuICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICBwcm90b1tzeW1ib2xUaGVuXSA9IG9yaWdpbmFsVGhlbjtcblxuICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvblJlc29sdmU6IGFueSwgb25SZWplY3Q6IGFueSkge1xuICAgICAgY29uc3Qgd3JhcHBlZCA9XG4gICAgICAgICAgbmV3IFpvbmVBd2FyZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBvcmlnaW5hbFRoZW4uY2FsbCh0aGlzLCByZXNvbHZlLCByZWplY3QpOyB9KTtcbiAgICAgIHJldHVybiB3cmFwcGVkLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgfTtcbiAgICAoQ3RvciBhcyBhbnkpW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gIH1cblxuICBhcGkucGF0Y2hUaGVuID0gcGF0Y2hUaGVuO1xuXG4gIGZ1bmN0aW9uIHpvbmVpZnkoZm46IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24pIHtcbiAgICAgIGxldCByZXN1bHRQcm9taXNlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmIChyZXN1bHRQcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGxldCBjdG9yID0gcmVzdWx0UHJvbWlzZS5jb25zdHJ1Y3RvcjtcbiAgICAgIGlmICghY3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0pIHtcbiAgICAgICAgcGF0Y2hUaGVuKGN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgcGF0Y2hUaGVuKE5hdGl2ZVByb21pc2UpO1xuICAgIGNvbnN0IGZldGNoID0gZ2xvYmFsWydmZXRjaCddO1xuICAgIGlmICh0eXBlb2YgZmV0Y2ggPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZ2xvYmFsW2FwaS5zeW1ib2woJ2ZldGNoJyldID0gZmV0Y2g7XG4gICAgICBnbG9iYWxbJ2ZldGNoJ10gPSB6b25laWZ5KGZldGNoKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gIChQcm9taXNlIGFzIGFueSlbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbn0pO1xuIl19