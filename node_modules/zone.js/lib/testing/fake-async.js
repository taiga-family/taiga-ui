(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/testing/fake-async", ["require", "exports", "../zone-spec/fake-async-test"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    require("../zone-spec/fake-async-test");
    Zone.__load_patch('fakeasync', function (global, Zone, api) {
        var FakeAsyncTestZoneSpec = Zone && Zone['FakeAsyncTestZoneSpec'];
        var ProxyZoneSpec = Zone && Zone['ProxyZoneSpec'];
        var _fakeAsyncTestZoneSpec = null;
        /**
         * Clears out the shared fake async zone for a test.
         * To be called in a global `beforeEach`.
         *
         * @experimental
         */
        function resetFakeAsyncZone() {
            if (_fakeAsyncTestZoneSpec) {
                _fakeAsyncTestZoneSpec.unlockDatePatch();
            }
            _fakeAsyncTestZoneSpec = null;
            // in node.js testing we may not have ProxyZoneSpec in which case there is nothing to reset.
            ProxyZoneSpec && ProxyZoneSpec.assertPresent().resetDelegate();
        }
        /**
         * Wraps a function to be executed in the fakeAsync zone:
         * - microtasks are manually executed by calling `flushMicrotasks()`,
         * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
         *
         * If there are any pending timers at the end of the function, an exception will be thrown.
         *
         * Can be used to wrap inject() calls.
         *
         * ## Example
         *
         * {@example core/testing/ts/fake_async.ts region='basic'}
         *
         * @param fn
         * @returns The function wrapped to be executed in the fakeAsync zone
         *
         * @experimental
         */
        function fakeAsync(fn) {
            // Not using an arrow function to preserve context passed from call site
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var proxyZoneSpec = ProxyZoneSpec.assertPresent();
                if (Zone.current.get('FakeAsyncTestZoneSpec')) {
                    throw new Error('fakeAsync() calls can not be nested');
                }
                try {
                    // in case jasmine.clock init a fakeAsyncTestZoneSpec
                    if (!_fakeAsyncTestZoneSpec) {
                        if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec) {
                            throw new Error('fakeAsync() calls can not be nested');
                        }
                        _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec();
                    }
                    var res = void 0;
                    var lastProxyZoneSpec = proxyZoneSpec.getDelegate();
                    proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
                    _fakeAsyncTestZoneSpec.lockDatePatch();
                    try {
                        res = fn.apply(this, args);
                        flushMicrotasks();
                    }
                    finally {
                        proxyZoneSpec.setDelegate(lastProxyZoneSpec);
                    }
                    if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
                        throw new Error(_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length + " " +
                            "periodic timer(s) still in the queue.");
                    }
                    if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
                        throw new Error(_fakeAsyncTestZoneSpec.pendingTimers.length + " timer(s) still in the queue.");
                    }
                    return res;
                }
                finally {
                    resetFakeAsyncZone();
                }
            };
        }
        function _getFakeAsyncZoneSpec() {
            if (_fakeAsyncTestZoneSpec == null) {
                _fakeAsyncTestZoneSpec = Zone.current.get('FakeAsyncTestZoneSpec');
                if (_fakeAsyncTestZoneSpec == null) {
                    throw new Error('The code should be running in the fakeAsync zone to call this function');
                }
            }
            return _fakeAsyncTestZoneSpec;
        }
        /**
         * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
         *
         * The microtasks queue is drained at the very start of this function and after any timer callback
         * has been executed.
         *
         * ## Example
         *
         * {@example core/testing/ts/fake_async.ts region='basic'}
         *
         * @experimental
         */
        function tick(millis, ignoreNestedTimeout) {
            if (millis === void 0) { millis = 0; }
            if (ignoreNestedTimeout === void 0) { ignoreNestedTimeout = false; }
            _getFakeAsyncZoneSpec().tick(millis, null, ignoreNestedTimeout);
        }
        /**
         * Simulates the asynchronous passage of time for the timers in the fakeAsync zone by
         * draining the macrotask queue until it is empty. The returned value is the milliseconds
         * of time that would have been elapsed.
         *
         * @param maxTurns
         * @returns The simulated time elapsed, in millis.
         *
         * @experimental
         */
        function flush(maxTurns) { return _getFakeAsyncZoneSpec().flush(maxTurns); }
        /**
         * Discard all remaining periodic tasks.
         *
         * @experimental
         */
        function discardPeriodicTasks() {
            var zoneSpec = _getFakeAsyncZoneSpec();
            var pendingTimers = zoneSpec.pendingPeriodicTimers;
            zoneSpec.pendingPeriodicTimers.length = 0;
        }
        /**
         * Flush any pending microtasks.
         *
         * @experimental
         */
        function flushMicrotasks() { _getFakeAsyncZoneSpec().flushMicrotasks(); }
        Zone[api.symbol('fakeAsyncTest')] = {
            resetFakeAsyncZone: resetFakeAsyncZone, flushMicrotasks: flushMicrotasks, discardPeriodicTasks: discardPeriodicTasks, tick: tick, flush: flush, fakeAsync: fakeAsync
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1hc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL3Rlc3RpbmcvZmFrZS1hc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILHdDQUFzQztJQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7UUFDNUUsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLElBQUssSUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFJN0UsSUFBTSxhQUFhLEdBQ2YsSUFBSSxJQUFLLElBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUzQyxJQUFJLHNCQUFzQixHQUFRLElBQUksQ0FBQztRQUV2Qzs7Ozs7V0FLRztRQUNILFNBQVMsa0JBQWtCO1lBQ3pCLElBQUksc0JBQXNCLEVBQUU7Z0JBQzFCLHNCQUFzQixDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFDO1lBQ0Qsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLDRGQUE0RjtZQUM1RixhQUFhLElBQUksYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2pFLENBQUM7UUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FpQkc7UUFDSCxTQUFTLFNBQVMsQ0FBQyxFQUFZO1lBQzdCLHdFQUF3RTtZQUN4RSxPQUFPO2dCQUF3QixjQUFjO3FCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7b0JBQWQseUJBQWM7O2dCQUMzQyxJQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3BELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBRTtvQkFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2lCQUN4RDtn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V0FBQTtTQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgJy4uL3pvbmUtc3BlYy9mYWtlLWFzeW5jLXRlc3QnO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnZmFrZWFzeW5jJywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgY29uc3QgRmFrZUFzeW5jVGVzdFpvbmVTcGVjID0gWm9uZSAmJiAoWm9uZSBhcyBhbnkpWydGYWtlQXN5bmNUZXN0Wm9uZVNwZWMnXTtcbiAgdHlwZSBQcm94eVpvbmVTcGVjID0ge1xuICAgIHNldERlbGVnYXRlKGRlbGVnYXRlU3BlYzogWm9uZVNwZWMpOiB2b2lkOyBnZXREZWxlZ2F0ZSgpOiBab25lU3BlYzsgcmVzZXREZWxlZ2F0ZSgpOiB2b2lkO1xuICB9O1xuICBjb25zdCBQcm94eVpvbmVTcGVjOiB7Z2V0KCk6IFByb3h5Wm9uZVNwZWM7IGFzc2VydFByZXNlbnQ6ICgpID0+IFByb3h5Wm9uZVNwZWN9ID1cbiAgICAgIFpvbmUgJiYgKFpvbmUgYXMgYW55KVsnUHJveHlab25lU3BlYyddO1xuXG4gIGxldCBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjOiBhbnkgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3V0IHRoZSBzaGFyZWQgZmFrZSBhc3luYyB6b25lIGZvciBhIHRlc3QuXG4gICAqIFRvIGJlIGNhbGxlZCBpbiBhIGdsb2JhbCBgYmVmb3JlRWFjaGAuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0RmFrZUFzeW5jWm9uZSgpIHtcbiAgICBpZiAoX2Zha2VBc3luY1Rlc3Rab25lU3BlYykge1xuICAgICAgX2Zha2VBc3luY1Rlc3Rab25lU3BlYy51bmxvY2tEYXRlUGF0Y2goKTtcbiAgICB9XG4gICAgX2Zha2VBc3luY1Rlc3Rab25lU3BlYyA9IG51bGw7XG4gICAgLy8gaW4gbm9kZS5qcyB0ZXN0aW5nIHdlIG1heSBub3QgaGF2ZSBQcm94eVpvbmVTcGVjIGluIHdoaWNoIGNhc2UgdGhlcmUgaXMgbm90aGluZyB0byByZXNldC5cbiAgICBQcm94eVpvbmVTcGVjICYmIFByb3h5Wm9uZVNwZWMuYXNzZXJ0UHJlc2VudCgpLnJlc2V0RGVsZWdhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcyBhIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGluIHRoZSBmYWtlQXN5bmMgem9uZTpcbiAgICogLSBtaWNyb3Rhc2tzIGFyZSBtYW51YWxseSBleGVjdXRlZCBieSBjYWxsaW5nIGBmbHVzaE1pY3JvdGFza3MoKWAsXG4gICAqIC0gdGltZXJzIGFyZSBzeW5jaHJvbm91cywgYHRpY2soKWAgc2ltdWxhdGVzIHRoZSBhc3luY2hyb25vdXMgcGFzc2FnZSBvZiB0aW1lLlxuICAgKlxuICAgKiBJZiB0aGVyZSBhcmUgYW55IHBlbmRpbmcgdGltZXJzIGF0IHRoZSBlbmQgb2YgdGhlIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24uXG4gICAqXG4gICAqIENhbiBiZSB1c2VkIHRvIHdyYXAgaW5qZWN0KCkgY2FsbHMuXG4gICAqXG4gICAqICMjIEV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvdGVzdGluZy90cy9mYWtlX2FzeW5jLnRzIHJlZ2lvbj0nYmFzaWMnfVxuICAgKlxuICAgKiBAcGFyYW0gZm5cbiAgICogQHJldHVybnMgVGhlIGZ1bmN0aW9uIHdyYXBwZWQgdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIGZha2VBc3luYyB6b25lXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGZ1bmN0aW9uIGZha2VBc3luYyhmbjogRnVuY3Rpb24pOiAoLi4uYXJnczogYW55W10pID0+IGFueSB7XG4gICAgLy8gTm90IHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHQgcGFzc2VkIGZyb20gY2FsbCBzaXRlXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24sIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBjb25zdCBwcm94eVpvbmVTcGVjID0gUHJveHlab25lU3BlYy5hc3NlcnRQcmVzZW50KCk7XG4gICAgICBpZiAoWm9uZS5jdXJyZW50LmdldCgnRmFrZUFzeW5jVGVzdFpvbmVTcGVjJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWtlQXN5bmMoKSBjYWxscyBjYW4gbm90IGJlIG5lc3RlZCcpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gaW4gY2FzZSBqYXNtaW5lLmNsb2NrIGluaXQgYSBmYWtlQXN5bmNUZXN0Wm9uZVNwZWNcbiAgICAgICAgaWYgKCFfZmFrZUFzeW5jVGVzdFpvbmVTcGVjKSB7XG4gICAgICAgICAgaWYgKHByb3h5Wm9uZVNwZWMuZ2V0RGVsZWdhdGUoKSBpbnN0YW5jZW9mIEZha2VBc3luY1Rlc3Rab25lU3BlYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWtlQXN5bmMoKSBjYWxscyBjYW4gbm90IGJlIG5lc3RlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMgPSBuZXcgRmFrZUFzeW5jVGVzdFpvbmVTcGVjKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzOiBhbnk7XG4gICAgICAgIGNvbnN0IGxhc3RQcm94eVpvbmVTcGVjID0gcHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpO1xuICAgICAgICBwcm94eVpvbmVTcGVjLnNldERlbGVnYXRlKF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMpO1xuICAgICAgICBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjLmxvY2tEYXRlUGF0Y2goKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBwcm94eVpvbmVTcGVjLnNldERlbGVnYXRlKGxhc3RQcm94eVpvbmVTcGVjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfZmFrZUFzeW5jVGVzdFpvbmVTcGVjLnBlbmRpbmdQZXJpb2RpY1RpbWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgJHtfZmFrZUFzeW5jVGVzdFpvbmVTcGVjLnBlbmRpbmdQZXJpb2RpY1RpbWVycy5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgICBgcGVyaW9kaWMgdGltZXIocykgc3RpbGwgaW4gdGhlIHF1ZXVlLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMucGVuZGluZ1RpbWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgJHtfZmFrZUFzeW5jVGVzdFpvbmVTcGVjLnBlbmRpbmdUaW1lcnMubGVuZ3RofSB0aW1lcihzKSBzdGlsbCBpbiB0aGUgcXVldWUuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHJlc2V0RmFrZUFzeW5jWm9uZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKTogYW55IHtcbiAgICBpZiAoX2Zha2VBc3luY1Rlc3Rab25lU3BlYyA9PSBudWxsKSB7XG4gICAgICBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjID0gWm9uZS5jdXJyZW50LmdldCgnRmFrZUFzeW5jVGVzdFpvbmVTcGVjJyk7XG4gICAgICBpZiAoX2Zha2VBc3luY1Rlc3Rab25lU3BlYyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvZGUgc2hvdWxkIGJlIHJ1bm5pbmcgaW4gdGhlIGZha2VBc3luYyB6b25lIHRvIGNhbGwgdGhpcyBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2Zha2VBc3luY1Rlc3Rab25lU3BlYztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW11bGF0ZXMgdGhlIGFzeW5jaHJvbm91cyBwYXNzYWdlIG9mIHRpbWUgZm9yIHRoZSB0aW1lcnMgaW4gdGhlIGZha2VBc3luYyB6b25lLlxuICAgKlxuICAgKiBUaGUgbWljcm90YXNrcyBxdWV1ZSBpcyBkcmFpbmVkIGF0IHRoZSB2ZXJ5IHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb24gYW5kIGFmdGVyIGFueSB0aW1lciBjYWxsYmFja1xuICAgKiBoYXMgYmVlbiBleGVjdXRlZC5cbiAgICpcbiAgICogIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS90ZXN0aW5nL3RzL2Zha2VfYXN5bmMudHMgcmVnaW9uPSdiYXNpYyd9XG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIGZ1bmN0aW9uIHRpY2sobWlsbGlzOiBudW1iZXIgPSAwLCBpZ25vcmVOZXN0ZWRUaW1lb3V0ID0gZmFsc2UpOiB2b2lkIHtcbiAgICBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKS50aWNrKG1pbGxpcywgbnVsbCwgaWdub3JlTmVzdGVkVGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogU2ltdWxhdGVzIHRoZSBhc3luY2hyb25vdXMgcGFzc2FnZSBvZiB0aW1lIGZvciB0aGUgdGltZXJzIGluIHRoZSBmYWtlQXN5bmMgem9uZSBieVxuICAgKiBkcmFpbmluZyB0aGUgbWFjcm90YXNrIHF1ZXVlIHVudGlsIGl0IGlzIGVtcHR5LiBUaGUgcmV0dXJuZWQgdmFsdWUgaXMgdGhlIG1pbGxpc2Vjb25kc1xuICAgKiBvZiB0aW1lIHRoYXQgd291bGQgaGF2ZSBiZWVuIGVsYXBzZWQuXG4gICAqXG4gICAqIEBwYXJhbSBtYXhUdXJuc1xuICAgKiBAcmV0dXJucyBUaGUgc2ltdWxhdGVkIHRpbWUgZWxhcHNlZCwgaW4gbWlsbGlzLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBmdW5jdGlvbiBmbHVzaChtYXhUdXJucz86IG51bWJlcik6IG51bWJlciB7IHJldHVybiBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKS5mbHVzaChtYXhUdXJucyk7IH1cblxuICAvKipcbiAgICogRGlzY2FyZCBhbGwgcmVtYWluaW5nIHBlcmlvZGljIHRhc2tzLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBmdW5jdGlvbiBkaXNjYXJkUGVyaW9kaWNUYXNrcygpOiB2b2lkIHtcbiAgICBjb25zdCB6b25lU3BlYyA9IF9nZXRGYWtlQXN5bmNab25lU3BlYygpO1xuICAgIGNvbnN0IHBlbmRpbmdUaW1lcnMgPSB6b25lU3BlYy5wZW5kaW5nUGVyaW9kaWNUaW1lcnM7XG4gICAgem9uZVNwZWMucGVuZGluZ1BlcmlvZGljVGltZXJzLmxlbmd0aCA9IDA7XG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggYW55IHBlbmRpbmcgbWljcm90YXNrcy5cbiAgICpcbiAgICogQGV4cGVyaW1lbnRhbFxuICAgKi9cbiAgZnVuY3Rpb24gZmx1c2hNaWNyb3Rhc2tzKCk6IHZvaWQgeyBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKS5mbHVzaE1pY3JvdGFza3MoKTsgfVxuICAoWm9uZSBhcyBhbnkpW2FwaS5zeW1ib2woJ2Zha2VBc3luY1Rlc3QnKV0gPSB7XG4gICAgICByZXNldEZha2VBc3luY1pvbmUsIGZsdXNoTWljcm90YXNrcywgZGlzY2FyZFBlcmlvZGljVGFza3MsIHRpY2ssIGZsdXNoLCBmYWtlQXN5bmN9O1xufSk7XG4iXX0=