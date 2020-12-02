/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/async_fallback.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const _global = (/** @type {?} */ ((typeof window === 'undefined' ? global : window)));
/**
 * Wraps a test function in an asynchronous test zone. The test will automatically
 * complete when all asynchronous calls within this zone are done. Can be used
 * to wrap an {\@link inject} call.
 *
 * Example:
 *
 * ```
 * it('...', async(inject([AClass], (object) => {
 *   object.doSomething.then(() => {
 *     expect(...);
 *   })
 * });
 * ```
 *
 *
 * @param {?} fn
 * @return {?}
 */
export function asyncFallback(fn) {
    // If we're running using the Jasmine test framework, adapt to call the 'done'
    // function when asynchronous activity is finished.
    if (_global.jasmine) {
        // Not using an arrow function to preserve context passed from call site
        return (/**
         * @this {?}
         * @param {?} done
         * @return {?}
         */
        function (done) {
            if (!done) {
                // if we run beforeEach in @angular/core/testing/testing_internal then we get no done
                // fake it here and assume sync.
                done = (/**
                 * @return {?}
                 */
                function () { });
                done.fail = (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    throw e;
                });
            }
            runInTestZone(fn, this, done, (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                if (typeof err === 'string') {
                    return done.fail(new Error(err));
                }
                else {
                    done.fail(err);
                }
            }));
        });
    }
    // Otherwise, return a promise which will resolve when asynchronous activity
    // is finished. This will be correctly consumed by the Mocha framework with
    // it('...', async(myFn)); or can be used in a custom framework.
    // Not using an arrow function to preserve context passed from call site
    return (/**
     * @this {?}
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} finishCallback
         * @param {?} failCallback
         * @return {?}
         */
        (finishCallback, failCallback) => {
            runInTestZone(fn, this, finishCallback, failCallback);
        }));
    });
}
/**
 * @param {?} fn
 * @param {?} context
 * @param {?} finishCallback
 * @param {?} failCallback
 * @return {?}
 */
function runInTestZone(fn, context, finishCallback, failCallback) {
    /** @type {?} */
    const currentZone = Zone.current;
    /** @type {?} */
    const AsyncTestZoneSpec = ((/** @type {?} */ (Zone)))['AsyncTestZoneSpec'];
    if (AsyncTestZoneSpec === undefined) {
        throw new Error('AsyncTestZoneSpec is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/dist/async-test.js');
    }
    /** @type {?} */
    const ProxyZoneSpec = (/** @type {?} */ (((/** @type {?} */ (Zone)))['ProxyZoneSpec']));
    if (ProxyZoneSpec === undefined) {
        throw new Error('ProxyZoneSpec is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/dist/proxy.js');
    }
    /** @type {?} */
    const proxyZoneSpec = ProxyZoneSpec.get();
    ProxyZoneSpec.assertPresent();
    // We need to create the AsyncTestZoneSpec outside the ProxyZone.
    // If we do it in ProxyZone then we will get to infinite recursion.
    /** @type {?} */
    const proxyZone = Zone.current.getZoneWith('ProxyZoneSpec');
    /** @type {?} */
    const previousDelegate = proxyZoneSpec.getDelegate();
    (/** @type {?} */ ((/** @type {?} */ (proxyZone)).parent)).run((/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const testZoneSpec = new AsyncTestZoneSpec((/**
         * @return {?}
         */
        () => {
            // Need to restore the original zone.
            currentZone.run((/**
             * @return {?}
             */
            () => {
                if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                    // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                    proxyZoneSpec.setDelegate(previousDelegate);
                }
                finishCallback();
            }));
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            // Need to restore the original zone.
            currentZone.run((/**
             * @return {?}
             */
            () => {
                if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                    // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                    proxyZoneSpec.setDelegate(previousDelegate);
                }
                failCallback(error);
            }));
        }), 'test');
        proxyZoneSpec.setDelegate(testZoneSpec);
    }));
    return Zone.current.runGuarded(fn, context);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfZmFsbGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2FzeW5jX2ZhbGxiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFjTSxPQUFPLEdBQUcsbUJBQUssQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ0RSxNQUFNLFVBQVUsYUFBYSxDQUFDLEVBQVk7SUFDeEMsOEVBQThFO0lBQzlFLG1EQUFtRDtJQUNuRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDbkIsd0VBQXdFO1FBQ3hFOzs7OztRQUFPLFVBQXdCLElBQVM7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxxRkFBcUY7Z0JBQ3JGLGdDQUFnQztnQkFDaEMsSUFBSTs7O2dCQUFHLGNBQVksQ0FBQyxDQUFBLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFHLFVBQVMsQ0FBTTtvQkFDekIsTUFBTSxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFBLENBQUM7YUFDSDtZQUNELGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUk7Ozs7WUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUM7S0FDSDtJQUNELDRFQUE0RTtJQUM1RSwyRUFBMkU7SUFDM0UsZ0VBQWdFO0lBQ2hFLHdFQUF3RTtJQUN4RTs7OztJQUFPO1FBQ0wsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU8sQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLEVBQUU7WUFDeEQsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FDbEIsRUFBWSxFQUFFLE9BQVksRUFBRSxjQUF3QixFQUFFLFlBQXNCOztVQUN4RSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU87O1VBQzFCLGlCQUFpQixHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztJQUM1RCxJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRTtRQUNuQyxNQUFNLElBQUksS0FBSyxDQUNYLGtGQUFrRjtZQUNsRiw0RUFBNEUsQ0FBQyxDQUFDO0tBQ25GOztVQUNLLGFBQWEsR0FBRyxtQkFBQSxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBR25EO0lBQ0QsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQ1gsOEVBQThFO1lBQzlFLHVFQUF1RSxDQUFDLENBQUM7S0FDOUU7O1VBQ0ssYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDekMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDOzs7O1VBR3hCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7O1VBQ3JELGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDcEQsbUJBQUEsbUJBQUEsU0FBUyxFQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsR0FBRzs7O0lBQUMsR0FBRyxFQUFFOztjQUNwQixZQUFZLEdBQWEsSUFBSSxpQkFBaUI7OztRQUNoRCxHQUFHLEVBQUU7WUFDSCxxQ0FBcUM7WUFDckMsV0FBVyxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksWUFBWSxFQUFFO29CQUMvQyw2RUFBNkU7b0JBQzdFLGFBQWEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDOzs7O1FBQ0QsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNiLHFDQUFxQztZQUNyQyxXQUFXLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNuQixJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLEVBQUU7b0JBQy9DLDZFQUE2RTtvQkFDN0UsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEdBQ0QsTUFBTSxDQUFDO1FBQ1gsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogYXN5bmMgaGFzIGJlZW4gbW92ZWQgdG8gem9uZS5qc1xuICogdGhpcyBmaWxlIGlzIGZvciBmYWxsYmFjayBpbiBjYXNlIG9sZCB2ZXJzaW9uIG9mIHpvbmUuanMgaXMgdXNlZFxuICovXG5kZWNsYXJlIHZhciBnbG9iYWw6IGFueTtcblxuY29uc3QgX2dsb2JhbCA9IDxhbnk+KHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93KTtcblxuLyoqXG4gKiBXcmFwcyBhIHRlc3QgZnVuY3Rpb24gaW4gYW4gYXN5bmNocm9ub3VzIHRlc3Qgem9uZS4gVGhlIHRlc3Qgd2lsbCBhdXRvbWF0aWNhbGx5XG4gKiBjb21wbGV0ZSB3aGVuIGFsbCBhc3luY2hyb25vdXMgY2FsbHMgd2l0aGluIHRoaXMgem9uZSBhcmUgZG9uZS4gQ2FuIGJlIHVzZWRcbiAqIHRvIHdyYXAgYW4ge0BsaW5rIGluamVjdH0gY2FsbC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogaXQoJy4uLicsIGFzeW5jKGluamVjdChbQUNsYXNzXSwgKG9iamVjdCkgPT4ge1xuICogICBvYmplY3QuZG9Tb21ldGhpbmcudGhlbigoKSA9PiB7XG4gKiAgICAgZXhwZWN0KC4uLik7XG4gKiAgIH0pXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3luY0ZhbGxiYWNrKGZuOiBGdW5jdGlvbik6IChkb25lOiBhbnkpID0+IGFueSB7XG4gIC8vIElmIHdlJ3JlIHJ1bm5pbmcgdXNpbmcgdGhlIEphc21pbmUgdGVzdCBmcmFtZXdvcmssIGFkYXB0IHRvIGNhbGwgdGhlICdkb25lJ1xuICAvLyBmdW5jdGlvbiB3aGVuIGFzeW5jaHJvbm91cyBhY3Rpdml0eSBpcyBmaW5pc2hlZC5cbiAgaWYgKF9nbG9iYWwuamFzbWluZSkge1xuICAgIC8vIE5vdCB1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB0byBwcmVzZXJ2ZSBjb250ZXh0IHBhc3NlZCBmcm9tIGNhbGwgc2l0ZVxuICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duLCBkb25lOiBhbnkpIHtcbiAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAvLyBpZiB3ZSBydW4gYmVmb3JlRWFjaCBpbiBAYW5ndWxhci9jb3JlL3Rlc3RpbmcvdGVzdGluZ19pbnRlcm5hbCB0aGVuIHdlIGdldCBubyBkb25lXG4gICAgICAgIC8vIGZha2UgaXQgaGVyZSBhbmQgYXNzdW1lIHN5bmMuXG4gICAgICAgIGRvbmUgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICBkb25lLmZhaWwgPSBmdW5jdGlvbihlOiBhbnkpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcnVuSW5UZXN0Wm9uZShmbiwgdGhpcywgZG9uZSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZXJyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBkb25lLmZhaWwobmV3IEVycm9yKGVycikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbmUuZmFpbChlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIC8vIE90aGVyd2lzZSwgcmV0dXJuIGEgcHJvbWlzZSB3aGljaCB3aWxsIHJlc29sdmUgd2hlbiBhc3luY2hyb25vdXMgYWN0aXZpdHlcbiAgLy8gaXMgZmluaXNoZWQuIFRoaXMgd2lsbCBiZSBjb3JyZWN0bHkgY29uc3VtZWQgYnkgdGhlIE1vY2hhIGZyYW1ld29yayB3aXRoXG4gIC8vIGl0KCcuLi4nLCBhc3luYyhteUZuKSk7IG9yIGNhbiBiZSB1c2VkIGluIGEgY3VzdG9tIGZyYW1ld29yay5cbiAgLy8gTm90IHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHQgcGFzc2VkIGZyb20gY2FsbCBzaXRlXG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChmaW5pc2hDYWxsYmFjaywgZmFpbENhbGxiYWNrKSA9PiB7XG4gICAgICBydW5JblRlc3Rab25lKGZuLCB0aGlzLCBmaW5pc2hDYWxsYmFjaywgZmFpbENhbGxiYWNrKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVuSW5UZXN0Wm9uZShcbiAgICBmbjogRnVuY3Rpb24sIGNvbnRleHQ6IGFueSwgZmluaXNoQ2FsbGJhY2s6IEZ1bmN0aW9uLCBmYWlsQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gIGNvbnN0IGN1cnJlbnRab25lID0gWm9uZS5jdXJyZW50O1xuICBjb25zdCBBc3luY1Rlc3Rab25lU3BlYyA9IChab25lIGFzIGFueSlbJ0FzeW5jVGVzdFpvbmVTcGVjJ107XG4gIGlmIChBc3luY1Rlc3Rab25lU3BlYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQXN5bmNUZXN0Wm9uZVNwZWMgaXMgbmVlZGVkIGZvciB0aGUgYXN5bmMoKSB0ZXN0IGhlbHBlciBidXQgY291bGQgbm90IGJlIGZvdW5kLiAnICtcbiAgICAgICAgJ1BsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIGVudmlyb25tZW50IGluY2x1ZGVzIHpvbmUuanMvZGlzdC9hc3luYy10ZXN0LmpzJyk7XG4gIH1cbiAgY29uc3QgUHJveHlab25lU3BlYyA9IChab25lIGFzIGFueSlbJ1Byb3h5Wm9uZVNwZWMnXSBhcyB7XG4gICAgZ2V0KCk6IHtzZXREZWxlZ2F0ZShzcGVjOiBab25lU3BlYyk6IHZvaWQ7IGdldERlbGVnYXRlKCk6IFpvbmVTcGVjO307XG4gICAgYXNzZXJ0UHJlc2VudDogKCkgPT4gdm9pZDtcbiAgfTtcbiAgaWYgKFByb3h5Wm9uZVNwZWMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1Byb3h5Wm9uZVNwZWMgaXMgbmVlZGVkIGZvciB0aGUgYXN5bmMoKSB0ZXN0IGhlbHBlciBidXQgY291bGQgbm90IGJlIGZvdW5kLiAnICtcbiAgICAgICAgJ1BsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIGVudmlyb25tZW50IGluY2x1ZGVzIHpvbmUuanMvZGlzdC9wcm94eS5qcycpO1xuICB9XG4gIGNvbnN0IHByb3h5Wm9uZVNwZWMgPSBQcm94eVpvbmVTcGVjLmdldCgpO1xuICBQcm94eVpvbmVTcGVjLmFzc2VydFByZXNlbnQoKTtcbiAgLy8gV2UgbmVlZCB0byBjcmVhdGUgdGhlIEFzeW5jVGVzdFpvbmVTcGVjIG91dHNpZGUgdGhlIFByb3h5Wm9uZS5cbiAgLy8gSWYgd2UgZG8gaXQgaW4gUHJveHlab25lIHRoZW4gd2Ugd2lsbCBnZXQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICBjb25zdCBwcm94eVpvbmUgPSBab25lLmN1cnJlbnQuZ2V0Wm9uZVdpdGgoJ1Byb3h5Wm9uZVNwZWMnKTtcbiAgY29uc3QgcHJldmlvdXNEZWxlZ2F0ZSA9IHByb3h5Wm9uZVNwZWMuZ2V0RGVsZWdhdGUoKTtcbiAgcHJveHlab25lIS5wYXJlbnQhLnJ1bigoKSA9PiB7XG4gICAgY29uc3QgdGVzdFpvbmVTcGVjOiBab25lU3BlYyA9IG5ldyBBc3luY1Rlc3Rab25lU3BlYyhcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIE5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgem9uZS5cbiAgICAgICAgICBjdXJyZW50Wm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3h5Wm9uZVNwZWMuZ2V0RGVsZWdhdGUoKSA9PSB0ZXN0Wm9uZVNwZWMpIHtcbiAgICAgICAgICAgICAgLy8gT25seSByZXNldCB0aGUgem9uZSBzcGVjIGlmIGl0J3Mgc2lsbCB0aGlzIG9uZS4gT3RoZXJ3aXNlLCBhc3N1bWUgaXQncyBPSy5cbiAgICAgICAgICAgICAgcHJveHlab25lU3BlYy5zZXREZWxlZ2F0ZShwcmV2aW91c0RlbGVnYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgLy8gTmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCB6b25lLlxuICAgICAgICAgIGN1cnJlbnRab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpID09IHRlc3Rab25lU3BlYykge1xuICAgICAgICAgICAgICAvLyBPbmx5IHJlc2V0IHRoZSB6b25lIHNwZWMgaWYgaXQncyBzaWxsIHRoaXMgb25lLiBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIE9LLlxuICAgICAgICAgICAgICBwcm94eVpvbmVTcGVjLnNldERlbGVnYXRlKHByZXZpb3VzRGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmFpbENhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgJ3Rlc3QnKTtcbiAgICBwcm94eVpvbmVTcGVjLnNldERlbGVnYXRlKHRlc3Rab25lU3BlYyk7XG4gIH0pO1xuICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bkd1YXJkZWQoZm4sIGNvbnRleHQpO1xufVxuIl19