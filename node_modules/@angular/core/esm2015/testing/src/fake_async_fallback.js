/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/fake_async_fallback.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * fakeAsync has been moved to zone.js
 * this file is for fallback in case old version of zone.js is used
 * @type {?}
 */
const _Zone = typeof Zone !== 'undefined' ? Zone : null;
/** @type {?} */
const FakeAsyncTestZoneSpec = _Zone && _Zone['FakeAsyncTestZoneSpec'];
/** @type {?} */
const ProxyZoneSpec = _Zone && _Zone['ProxyZoneSpec'];
/** @type {?} */
let _fakeAsyncTestZoneSpec = null;
/**
 * Clears out the shared fake async zone for a test.
 * To be called in a global `beforeEach`.
 *
 * \@publicApi
 * @return {?}
 */
export function resetFakeAsyncZoneFallback() {
    _fakeAsyncTestZoneSpec = null;
    // in node.js testing we may not have ProxyZoneSpec in which case there is nothing to reset.
    ProxyZoneSpec && ProxyZoneSpec.assertPresent().resetDelegate();
}
/** @type {?} */
let _inFakeAsyncCall = false;
/**
 * Wraps a function to be executed in the fakeAsync zone:
 * - microtasks are manually executed by calling `flushMicrotasks()`,
 * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
 *
 * If there are any pending timers at the end of the function, an exception will be thrown.
 *
 * Can be used to wrap inject() calls.
 *
 * \@usageNotes
 * ### Example
 *
 * {\@example core/testing/ts/fake_async.ts region='basic'}
 *
 * \@publicApi
 * @param {?} fn
 * @return {?} The function wrapped to be executed in the fakeAsync zone
 *
 */
export function fakeAsyncFallback(fn) {
    // Not using an arrow function to preserve context passed from call site
    return (/**
     * @this {?}
     * @param {...?} args
     * @return {?}
     */
    function (...args) {
        /** @type {?} */
        const proxyZoneSpec = ProxyZoneSpec.assertPresent();
        if (_inFakeAsyncCall) {
            throw new Error('fakeAsync() calls can not be nested');
        }
        _inFakeAsyncCall = true;
        try {
            if (!_fakeAsyncTestZoneSpec) {
                if (proxyZoneSpec.getDelegate() instanceof FakeAsyncTestZoneSpec) {
                    throw new Error('fakeAsync() calls can not be nested');
                }
                _fakeAsyncTestZoneSpec = new FakeAsyncTestZoneSpec();
            }
            /** @type {?} */
            let res;
            /** @type {?} */
            const lastProxyZoneSpec = proxyZoneSpec.getDelegate();
            proxyZoneSpec.setDelegate(_fakeAsyncTestZoneSpec);
            try {
                res = fn.apply(this, args);
                flushMicrotasksFallback();
            }
            finally {
                proxyZoneSpec.setDelegate(lastProxyZoneSpec);
            }
            if (_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
                throw new Error(`${_fakeAsyncTestZoneSpec.pendingPeriodicTimers.length} ` +
                    `periodic timer(s) still in the queue.`);
            }
            if (_fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
                throw new Error(`${_fakeAsyncTestZoneSpec.pendingTimers.length} timer(s) still in the queue.`);
            }
            return res;
        }
        finally {
            _inFakeAsyncCall = false;
            resetFakeAsyncZoneFallback();
        }
    });
}
/**
 * @return {?}
 */
function _getFakeAsyncZoneSpec() {
    if (_fakeAsyncTestZoneSpec == null) {
        throw new Error('The code should be running in the fakeAsync zone to call this function');
    }
    return _fakeAsyncTestZoneSpec;
}
/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
 *
 * The microtasks queue is drained at the very start of this function and after any timer callback
 * has been executed.
 *
 * \@usageNotes
 * ### Example
 *
 * {\@example core/testing/ts/fake_async.ts region='basic'}
 *
 * \@publicApi
 * @param {?=} millis
 * @param {?=} tickOptions
 * @return {?}
 */
export function tickFallback(millis = 0, tickOptions = {
    processNewMacroTasksSynchronously: true
}) {
    _getFakeAsyncZoneSpec().tick(millis, null, tickOptions);
}
/**
 * Simulates the asynchronous passage of time for the timers in the fakeAsync zone by
 * draining the macrotask queue until it is empty. The returned value is the milliseconds
 * of time that would have been elapsed.
 *
 * \@publicApi
 * @param {?=} maxTurns
 * @return {?} The simulated time elapsed, in millis.
 *
 */
export function flushFallback(maxTurns) {
    return _getFakeAsyncZoneSpec().flush(maxTurns);
}
/**
 * Discard all remaining periodic tasks.
 *
 * \@publicApi
 * @return {?}
 */
export function discardPeriodicTasksFallback() {
    /** @type {?} */
    const zoneSpec = _getFakeAsyncZoneSpec();
    zoneSpec.pendingPeriodicTimers.length = 0;
}
/**
 * Flush any pending microtasks.
 *
 * \@publicApi
 * @return {?}
 */
export function flushMicrotasksFallback() {
    _getFakeAsyncZoneSpec().flushMicrotasks();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZV9hc3luY19mYWxsYmFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvZmFrZV9hc3luY19mYWxsYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQVlNLEtBQUssR0FBUSxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTs7TUFDdEQscUJBQXFCLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7TUFJL0QsYUFBYSxHQUNmLEtBQUssSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDOztJQUUvQixzQkFBc0IsR0FBUSxJQUFJOzs7Ozs7OztBQVF0QyxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUM5Qiw0RkFBNEY7SUFDNUYsYUFBYSxJQUFJLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNqRSxDQUFDOztJQUVHLGdCQUFnQixHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUI1QixNQUFNLFVBQVUsaUJBQWlCLENBQUMsRUFBWTtJQUM1Qyx3RUFBd0U7SUFDeEU7Ozs7O0lBQU8sVUFBd0IsR0FBRyxJQUFXOztjQUNyQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsRUFBRTtRQUNuRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN4RDtRQUNELGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUMzQixJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsWUFBWSxxQkFBcUIsRUFBRTtvQkFDaEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2lCQUN4RDtnQkFFRCxzQkFBc0IsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7YUFDdEQ7O2dCQUVHLEdBQVE7O2tCQUNOLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUU7WUFDckQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2xELElBQUk7Z0JBQ0YsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQix1QkFBdUIsRUFBRSxDQUFDO2FBQzNCO29CQUFTO2dCQUNSLGFBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksc0JBQXNCLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0QsTUFBTSxJQUFJLEtBQUssQ0FDWCxHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRztvQkFDekQsdUNBQXVDLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQ1gsR0FBRyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsTUFBTSwrQkFBK0IsQ0FBQyxDQUFDO2FBQ3BGO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjtnQkFBUztZQUNSLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUN6QiwwQkFBMEIsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7OztBQUVELFNBQVMscUJBQXFCO0lBQzVCLElBQUksc0JBQXNCLElBQUksSUFBSSxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUMzRjtJQUNELE9BQU8sc0JBQXNCLENBQUM7QUFDaEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlRCxNQUFNLFVBQVUsWUFBWSxDQUN4QixTQUFpQixDQUFDLEVBQUUsY0FBNEQ7SUFDOUUsaUNBQWlDLEVBQUUsSUFBSTtDQUN4QztJQUNILHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7QUFZRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWlCO0lBQzdDLE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakQsQ0FBQzs7Ozs7OztBQU9ELE1BQU0sVUFBVSw0QkFBNEI7O1VBQ3BDLFFBQVEsR0FBRyxxQkFBcUIsRUFBRTtJQUN4QyxRQUFRLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QyxDQUFDOzs7Ozs7O0FBT0QsTUFBTSxVQUFVLHVCQUF1QjtJQUNyQyxxQkFBcUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogZmFrZUFzeW5jIGhhcyBiZWVuIG1vdmVkIHRvIHpvbmUuanNcbiAqIHRoaXMgZmlsZSBpcyBmb3IgZmFsbGJhY2sgaW4gY2FzZSBvbGQgdmVyc2lvbiBvZiB6b25lLmpzIGlzIHVzZWRcbiAqL1xuY29uc3QgX1pvbmU6IGFueSA9IHR5cGVvZiBab25lICE9PSAndW5kZWZpbmVkJyA/IFpvbmUgOiBudWxsO1xuY29uc3QgRmFrZUFzeW5jVGVzdFpvbmVTcGVjID0gX1pvbmUgJiYgX1pvbmVbJ0Zha2VBc3luY1Rlc3Rab25lU3BlYyddO1xudHlwZSBQcm94eVpvbmVTcGVjID0ge1xuICBzZXREZWxlZ2F0ZShkZWxlZ2F0ZVNwZWM6IFpvbmVTcGVjKTogdm9pZDsgZ2V0RGVsZWdhdGUoKTogWm9uZVNwZWM7IHJlc2V0RGVsZWdhdGUoKTogdm9pZDtcbn07XG5jb25zdCBQcm94eVpvbmVTcGVjOiB7Z2V0KCk6IFByb3h5Wm9uZVNwZWM7IGFzc2VydFByZXNlbnQ6ICgpID0+IFByb3h5Wm9uZVNwZWN9ID1cbiAgICBfWm9uZSAmJiBfWm9uZVsnUHJveHlab25lU3BlYyddO1xuXG5sZXQgX2Zha2VBc3luY1Rlc3Rab25lU3BlYzogYW55ID0gbnVsbDtcblxuLyoqXG4gKiBDbGVhcnMgb3V0IHRoZSBzaGFyZWQgZmFrZSBhc3luYyB6b25lIGZvciBhIHRlc3QuXG4gKiBUbyBiZSBjYWxsZWQgaW4gYSBnbG9iYWwgYGJlZm9yZUVhY2hgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RmFrZUFzeW5jWm9uZUZhbGxiYWNrKCkge1xuICBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjID0gbnVsbDtcbiAgLy8gaW4gbm9kZS5qcyB0ZXN0aW5nIHdlIG1heSBub3QgaGF2ZSBQcm94eVpvbmVTcGVjIGluIHdoaWNoIGNhc2UgdGhlcmUgaXMgbm90aGluZyB0byByZXNldC5cbiAgUHJveHlab25lU3BlYyAmJiBQcm94eVpvbmVTcGVjLmFzc2VydFByZXNlbnQoKS5yZXNldERlbGVnYXRlKCk7XG59XG5cbmxldCBfaW5GYWtlQXN5bmNDYWxsID0gZmFsc2U7XG5cbi8qKlxuICogV3JhcHMgYSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBpbiB0aGUgZmFrZUFzeW5jIHpvbmU6XG4gKiAtIG1pY3JvdGFza3MgYXJlIG1hbnVhbGx5IGV4ZWN1dGVkIGJ5IGNhbGxpbmcgYGZsdXNoTWljcm90YXNrcygpYCxcbiAqIC0gdGltZXJzIGFyZSBzeW5jaHJvbm91cywgYHRpY2soKWAgc2ltdWxhdGVzIHRoZSBhc3luY2hyb25vdXMgcGFzc2FnZSBvZiB0aW1lLlxuICpcbiAqIElmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyB0aW1lcnMgYXQgdGhlIGVuZCBvZiB0aGUgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBDYW4gYmUgdXNlZCB0byB3cmFwIGluamVjdCgpIGNhbGxzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL3Rlc3RpbmcvdHMvZmFrZV9hc3luYy50cyByZWdpb249J2Jhc2ljJ31cbiAqXG4gKiBAcGFyYW0gZm5cbiAqIEByZXR1cm5zIFRoZSBmdW5jdGlvbiB3cmFwcGVkIHRvIGJlIGV4ZWN1dGVkIGluIHRoZSBmYWtlQXN5bmMgem9uZVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZha2VBc3luY0ZhbGxiYWNrKGZuOiBGdW5jdGlvbik6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55IHtcbiAgLy8gTm90IHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHQgcGFzc2VkIGZyb20gY2FsbCBzaXRlXG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnN0IHByb3h5Wm9uZVNwZWMgPSBQcm94eVpvbmVTcGVjLmFzc2VydFByZXNlbnQoKTtcbiAgICBpZiAoX2luRmFrZUFzeW5jQ2FsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWtlQXN5bmMoKSBjYWxscyBjYW4gbm90IGJlIG5lc3RlZCcpO1xuICAgIH1cbiAgICBfaW5GYWtlQXN5bmNDYWxsID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfZmFrZUFzeW5jVGVzdFpvbmVTcGVjKSB7XG4gICAgICAgIGlmIChwcm94eVpvbmVTcGVjLmdldERlbGVnYXRlKCkgaW5zdGFuY2VvZiBGYWtlQXN5bmNUZXN0Wm9uZVNwZWMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zha2VBc3luYygpIGNhbGxzIGNhbiBub3QgYmUgbmVzdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjID0gbmV3IEZha2VBc3luY1Rlc3Rab25lU3BlYygpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzOiBhbnk7XG4gICAgICBjb25zdCBsYXN0UHJveHlab25lU3BlYyA9IHByb3h5Wm9uZVNwZWMuZ2V0RGVsZWdhdGUoKTtcbiAgICAgIHByb3h5Wm9uZVNwZWMuc2V0RGVsZWdhdGUoX2Zha2VBc3luY1Rlc3Rab25lU3BlYyk7XG4gICAgICB0cnkge1xuICAgICAgICByZXMgPSBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzRmFsbGJhY2soKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHByb3h5Wm9uZVNwZWMuc2V0RGVsZWdhdGUobGFzdFByb3h5Wm9uZVNwZWMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2Zha2VBc3luY1Rlc3Rab25lU3BlYy5wZW5kaW5nUGVyaW9kaWNUaW1lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtfZmFrZUFzeW5jVGVzdFpvbmVTcGVjLnBlbmRpbmdQZXJpb2RpY1RpbWVycy5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgYHBlcmlvZGljIHRpbWVyKHMpIHN0aWxsIGluIHRoZSBxdWV1ZS5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMucGVuZGluZ1RpbWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke19mYWtlQXN5bmNUZXN0Wm9uZVNwZWMucGVuZGluZ1RpbWVycy5sZW5ndGh9IHRpbWVyKHMpIHN0aWxsIGluIHRoZSBxdWV1ZS5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pbkZha2VBc3luY0NhbGwgPSBmYWxzZTtcbiAgICAgIHJlc2V0RmFrZUFzeW5jWm9uZUZhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKTogYW55IHtcbiAgaWYgKF9mYWtlQXN5bmNUZXN0Wm9uZVNwZWMgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvZGUgc2hvdWxkIGJlIHJ1bm5pbmcgaW4gdGhlIGZha2VBc3luYyB6b25lIHRvIGNhbGwgdGhpcyBmdW5jdGlvbicpO1xuICB9XG4gIHJldHVybiBfZmFrZUFzeW5jVGVzdFpvbmVTcGVjO1xufVxuXG4vKipcbiAqIFNpbXVsYXRlcyB0aGUgYXN5bmNocm9ub3VzIHBhc3NhZ2Ugb2YgdGltZSBmb3IgdGhlIHRpbWVycyBpbiB0aGUgZmFrZUFzeW5jIHpvbmUuXG4gKlxuICogVGhlIG1pY3JvdGFza3MgcXVldWUgaXMgZHJhaW5lZCBhdCB0aGUgdmVyeSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uIGFuZCBhZnRlciBhbnkgdGltZXIgY2FsbGJhY2tcbiAqIGhhcyBiZWVuIGV4ZWN1dGVkLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL3Rlc3RpbmcvdHMvZmFrZV9hc3luYy50cyByZWdpb249J2Jhc2ljJ31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrRmFsbGJhY2soXG4gICAgbWlsbGlzOiBudW1iZXIgPSAwLCB0aWNrT3B0aW9uczoge3Byb2Nlc3NOZXdNYWNyb1Rhc2tzU3luY2hyb25vdXNseTogYm9vbGVhbn0gPSB7XG4gICAgICBwcm9jZXNzTmV3TWFjcm9UYXNrc1N5bmNocm9ub3VzbHk6IHRydWVcbiAgICB9KTogdm9pZCB7XG4gIF9nZXRGYWtlQXN5bmNab25lU3BlYygpLnRpY2sobWlsbGlzLCBudWxsLCB0aWNrT3B0aW9ucyk7XG59XG5cbi8qKlxuICogU2ltdWxhdGVzIHRoZSBhc3luY2hyb25vdXMgcGFzc2FnZSBvZiB0aW1lIGZvciB0aGUgdGltZXJzIGluIHRoZSBmYWtlQXN5bmMgem9uZSBieVxuICogZHJhaW5pbmcgdGhlIG1hY3JvdGFzayBxdWV1ZSB1bnRpbCBpdCBpcyBlbXB0eS4gVGhlIHJldHVybmVkIHZhbHVlIGlzIHRoZSBtaWxsaXNlY29uZHNcbiAqIG9mIHRpbWUgdGhhdCB3b3VsZCBoYXZlIGJlZW4gZWxhcHNlZC5cbiAqXG4gKiBAcGFyYW0gbWF4VHVybnNcbiAqIEByZXR1cm5zIFRoZSBzaW11bGF0ZWQgdGltZSBlbGFwc2VkLCBpbiBtaWxsaXMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hGYWxsYmFjayhtYXhUdXJucz86IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBfZ2V0RmFrZUFzeW5jWm9uZVNwZWMoKS5mbHVzaChtYXhUdXJucyk7XG59XG5cbi8qKlxuICogRGlzY2FyZCBhbGwgcmVtYWluaW5nIHBlcmlvZGljIHRhc2tzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2NhcmRQZXJpb2RpY1Rhc2tzRmFsbGJhY2soKTogdm9pZCB7XG4gIGNvbnN0IHpvbmVTcGVjID0gX2dldEZha2VBc3luY1pvbmVTcGVjKCk7XG4gIHpvbmVTcGVjLnBlbmRpbmdQZXJpb2RpY1RpbWVycy5sZW5ndGggPSAwO1xufVxuXG4vKipcbiAqIEZsdXNoIGFueSBwZW5kaW5nIG1pY3JvdGFza3MuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hNaWNyb3Rhc2tzRmFsbGJhY2soKTogdm9pZCB7XG4gIF9nZXRGYWtlQXN5bmNab25lU3BlYygpLmZsdXNoTWljcm90YXNrcygpO1xufVxuIl19