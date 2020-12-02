/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _global = (typeof window === 'undefined' ? global : window);
/**
 * Wraps a test function in an asynchronous test zone. The test will automatically
 * complete when all asynchronous calls within this zone are done. Can be used
 * to wrap an {@link inject} call.
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
 */
export function asyncFallback(fn) {
    // If we're running using the Jasmine test framework, adapt to call the 'done'
    // function when asynchronous activity is finished.
    if (_global.jasmine) {
        // Not using an arrow function to preserve context passed from call site
        return function (done) {
            if (!done) {
                // if we run beforeEach in @angular/core/testing/testing_internal then we get no done
                // fake it here and assume sync.
                done = function () { };
                done.fail = function (e) {
                    throw e;
                };
            }
            runInTestZone(fn, this, done, function (err) {
                if (typeof err === 'string') {
                    return done.fail(new Error(err));
                }
                else {
                    done.fail(err);
                }
            });
        };
    }
    // Otherwise, return a promise which will resolve when asynchronous activity
    // is finished. This will be correctly consumed by the Mocha framework with
    // it('...', async(myFn)); or can be used in a custom framework.
    // Not using an arrow function to preserve context passed from call site
    return function () {
        var _this = this;
        return new Promise(function (finishCallback, failCallback) {
            runInTestZone(fn, _this, finishCallback, failCallback);
        });
    };
}
function runInTestZone(fn, context, finishCallback, failCallback) {
    var currentZone = Zone.current;
    var AsyncTestZoneSpec = Zone['AsyncTestZoneSpec'];
    if (AsyncTestZoneSpec === undefined) {
        throw new Error('AsyncTestZoneSpec is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/dist/async-test.js');
    }
    var ProxyZoneSpec = Zone['ProxyZoneSpec'];
    if (ProxyZoneSpec === undefined) {
        throw new Error('ProxyZoneSpec is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/dist/proxy.js');
    }
    var proxyZoneSpec = ProxyZoneSpec.get();
    ProxyZoneSpec.assertPresent();
    // We need to create the AsyncTestZoneSpec outside the ProxyZone.
    // If we do it in ProxyZone then we will get to infinite recursion.
    var proxyZone = Zone.current.getZoneWith('ProxyZoneSpec');
    var previousDelegate = proxyZoneSpec.getDelegate();
    proxyZone.parent.run(function () {
        var testZoneSpec = new AsyncTestZoneSpec(function () {
            // Need to restore the original zone.
            currentZone.run(function () {
                if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                    // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                    proxyZoneSpec.setDelegate(previousDelegate);
                }
                finishCallback();
            });
        }, function (error) {
            // Need to restore the original zone.
            currentZone.run(function () {
                if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                    // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                    proxyZoneSpec.setDelegate(previousDelegate);
                }
                failCallback(error);
            });
        }, 'test');
        proxyZoneSpec.setDelegate(testZoneSpec);
    });
    return Zone.current.runGuarded(fn, context);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfZmFsbGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2FzeW5jX2ZhbGxiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQVFILElBQU0sT0FBTyxHQUFRLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxFQUFZO0lBQ3hDLDhFQUE4RTtJQUM5RSxtREFBbUQ7SUFDbkQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ25CLHdFQUF3RTtRQUN4RSxPQUFPLFVBQXdCLElBQVM7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxxRkFBcUY7Z0JBQ3JGLGdDQUFnQztnQkFDaEMsSUFBSSxHQUFHLGNBQVksQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVMsQ0FBTTtvQkFDekIsTUFBTSxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFRO2dCQUNyQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7S0FDSDtJQUNELDRFQUE0RTtJQUM1RSwyRUFBMkU7SUFDM0UsZ0VBQWdFO0lBQ2hFLHdFQUF3RTtJQUN4RSxPQUFPO1FBQUEsaUJBSU47UUFIQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsY0FBYyxFQUFFLFlBQVk7WUFDcEQsYUFBYSxDQUFDLEVBQUUsRUFBRSxLQUFJLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsYUFBYSxDQUNsQixFQUFZLEVBQUUsT0FBWSxFQUFFLGNBQXdCLEVBQUUsWUFBc0I7SUFDOUUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxJQUFNLGlCQUFpQixHQUFJLElBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQ1gsa0ZBQWtGO1lBQ2xGLDRFQUE0RSxDQUFDLENBQUM7S0FDbkY7SUFDRCxJQUFNLGFBQWEsR0FBSSxJQUFZLENBQUMsZUFBZSxDQUdsRCxDQUFDO0lBQ0YsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQ1gsOEVBQThFO1lBQzlFLHVFQUF1RSxDQUFDLENBQUM7S0FDOUU7SUFDRCxJQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlCLGlFQUFpRTtJQUNqRSxtRUFBbUU7SUFDbkUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsSUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsU0FBVSxDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDckIsSUFBTSxZQUFZLEdBQWEsSUFBSSxpQkFBaUIsQ0FDaEQ7WUFDRSxxQ0FBcUM7WUFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFDZCxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLEVBQUU7b0JBQy9DLDZFQUE2RTtvQkFDN0UsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFDLEtBQVU7WUFDVCxxQ0FBcUM7WUFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFDZCxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLEVBQUU7b0JBQy9DLDZFQUE2RTtvQkFDN0UsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0QsTUFBTSxDQUFDLENBQUM7UUFDWixhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBhc3luYyBoYXMgYmVlbiBtb3ZlZCB0byB6b25lLmpzXG4gKiB0aGlzIGZpbGUgaXMgZm9yIGZhbGxiYWNrIGluIGNhc2Ugb2xkIHZlcnNpb24gb2Ygem9uZS5qcyBpcyB1c2VkXG4gKi9cbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xuXG5jb25zdCBfZ2xvYmFsID0gPGFueT4odHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3cpO1xuXG4vKipcbiAqIFdyYXBzIGEgdGVzdCBmdW5jdGlvbiBpbiBhbiBhc3luY2hyb25vdXMgdGVzdCB6b25lLiBUaGUgdGVzdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAqIGNvbXBsZXRlIHdoZW4gYWxsIGFzeW5jaHJvbm91cyBjYWxscyB3aXRoaW4gdGhpcyB6b25lIGFyZSBkb25lLiBDYW4gYmUgdXNlZFxuICogdG8gd3JhcCBhbiB7QGxpbmsgaW5qZWN0fSBjYWxsLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBgXG4gKiBpdCgnLi4uJywgYXN5bmMoaW5qZWN0KFtBQ2xhc3NdLCAob2JqZWN0KSA9PiB7XG4gKiAgIG9iamVjdC5kb1NvbWV0aGluZy50aGVuKCgpID0+IHtcbiAqICAgICBleHBlY3QoLi4uKTtcbiAqICAgfSlcbiAqIH0pO1xuICogYGBgXG4gKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jRmFsbGJhY2soZm46IEZ1bmN0aW9uKTogKGRvbmU6IGFueSkgPT4gYW55IHtcbiAgLy8gSWYgd2UncmUgcnVubmluZyB1c2luZyB0aGUgSmFzbWluZSB0ZXN0IGZyYW1ld29yaywgYWRhcHQgdG8gY2FsbCB0aGUgJ2RvbmUnXG4gIC8vIGZ1bmN0aW9uIHdoZW4gYXN5bmNocm9ub3VzIGFjdGl2aXR5IGlzIGZpbmlzaGVkLlxuICBpZiAoX2dsb2JhbC5qYXNtaW5lKSB7XG4gICAgLy8gTm90IHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHQgcGFzc2VkIGZyb20gY2FsbCBzaXRlXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24sIGRvbmU6IGFueSkge1xuICAgICAgaWYgKCFkb25lKSB7XG4gICAgICAgIC8vIGlmIHdlIHJ1biBiZWZvcmVFYWNoIGluIEBhbmd1bGFyL2NvcmUvdGVzdGluZy90ZXN0aW5nX2ludGVybmFsIHRoZW4gd2UgZ2V0IG5vIGRvbmVcbiAgICAgICAgLy8gZmFrZSBpdCBoZXJlIGFuZCBhc3N1bWUgc3luYy5cbiAgICAgICAgZG9uZSA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIGRvbmUuZmFpbCA9IGZ1bmN0aW9uKGU6IGFueSkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBydW5JblRlc3Rab25lKGZuLCB0aGlzLCBkb25lLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUuZmFpbChuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9uZS5mYWlsKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gYSBwcm9taXNlIHdoaWNoIHdpbGwgcmVzb2x2ZSB3aGVuIGFzeW5jaHJvbm91cyBhY3Rpdml0eVxuICAvLyBpcyBmaW5pc2hlZC4gVGhpcyB3aWxsIGJlIGNvcnJlY3RseSBjb25zdW1lZCBieSB0aGUgTW9jaGEgZnJhbWV3b3JrIHdpdGhcbiAgLy8gaXQoJy4uLicsIGFzeW5jKG15Rm4pKTsgb3IgY2FuIGJlIHVzZWQgaW4gYSBjdXN0b20gZnJhbWV3b3JrLlxuICAvLyBOb3QgdXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dCBwYXNzZWQgZnJvbSBjYWxsIHNpdGVcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IHVua25vd24pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGZpbmlzaENhbGxiYWNrLCBmYWlsQ2FsbGJhY2spID0+IHtcbiAgICAgIHJ1bkluVGVzdFpvbmUoZm4sIHRoaXMsIGZpbmlzaENhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBydW5JblRlc3Rab25lKFxuICAgIGZuOiBGdW5jdGlvbiwgY29udGV4dDogYW55LCBmaW5pc2hDYWxsYmFjazogRnVuY3Rpb24sIGZhaWxDYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgY29uc3QgY3VycmVudFpvbmUgPSBab25lLmN1cnJlbnQ7XG4gIGNvbnN0IEFzeW5jVGVzdFpvbmVTcGVjID0gKFpvbmUgYXMgYW55KVsnQXN5bmNUZXN0Wm9uZVNwZWMnXTtcbiAgaWYgKEFzeW5jVGVzdFpvbmVTcGVjID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdBc3luY1Rlc3Rab25lU3BlYyBpcyBuZWVkZWQgZm9yIHRoZSBhc3luYygpIHRlc3QgaGVscGVyIGJ1dCBjb3VsZCBub3QgYmUgZm91bmQuICcgK1xuICAgICAgICAnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgZW52aXJvbm1lbnQgaW5jbHVkZXMgem9uZS5qcy9kaXN0L2FzeW5jLXRlc3QuanMnKTtcbiAgfVxuICBjb25zdCBQcm94eVpvbmVTcGVjID0gKFpvbmUgYXMgYW55KVsnUHJveHlab25lU3BlYyddIGFzIHtcbiAgICBnZXQoKToge3NldERlbGVnYXRlKHNwZWM6IFpvbmVTcGVjKTogdm9pZDsgZ2V0RGVsZWdhdGUoKTogWm9uZVNwZWM7fTtcbiAgICBhc3NlcnRQcmVzZW50OiAoKSA9PiB2b2lkO1xuICB9O1xuICBpZiAoUHJveHlab25lU3BlYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUHJveHlab25lU3BlYyBpcyBuZWVkZWQgZm9yIHRoZSBhc3luYygpIHRlc3QgaGVscGVyIGJ1dCBjb3VsZCBub3QgYmUgZm91bmQuICcgK1xuICAgICAgICAnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgZW52aXJvbm1lbnQgaW5jbHVkZXMgem9uZS5qcy9kaXN0L3Byb3h5LmpzJyk7XG4gIH1cbiAgY29uc3QgcHJveHlab25lU3BlYyA9IFByb3h5Wm9uZVNwZWMuZ2V0KCk7XG4gIFByb3h5Wm9uZVNwZWMuYXNzZXJ0UHJlc2VudCgpO1xuICAvLyBXZSBuZWVkIHRvIGNyZWF0ZSB0aGUgQXN5bmNUZXN0Wm9uZVNwZWMgb3V0c2lkZSB0aGUgUHJveHlab25lLlxuICAvLyBJZiB3ZSBkbyBpdCBpbiBQcm94eVpvbmUgdGhlbiB3ZSB3aWxsIGdldCB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gIGNvbnN0IHByb3h5Wm9uZSA9IFpvbmUuY3VycmVudC5nZXRab25lV2l0aCgnUHJveHlab25lU3BlYycpO1xuICBjb25zdCBwcmV2aW91c0RlbGVnYXRlID0gcHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpO1xuICBwcm94eVpvbmUhLnBhcmVudCEucnVuKCgpID0+IHtcbiAgICBjb25zdCB0ZXN0Wm9uZVNwZWM6IFpvbmVTcGVjID0gbmV3IEFzeW5jVGVzdFpvbmVTcGVjKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gTmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCB6b25lLlxuICAgICAgICAgIGN1cnJlbnRab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpID09IHRlc3Rab25lU3BlYykge1xuICAgICAgICAgICAgICAvLyBPbmx5IHJlc2V0IHRoZSB6b25lIHNwZWMgaWYgaXQncyBzaWxsIHRoaXMgb25lLiBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIE9LLlxuICAgICAgICAgICAgICBwcm94eVpvbmVTcGVjLnNldERlbGVnYXRlKHByZXZpb3VzRGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyBOZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHpvbmUuXG4gICAgICAgICAgY3VycmVudFpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm94eVpvbmVTcGVjLmdldERlbGVnYXRlKCkgPT0gdGVzdFpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIHpvbmUgc3BlYyBpZiBpdCdzIHNpbGwgdGhpcyBvbmUuIE90aGVyd2lzZSwgYXNzdW1lIGl0J3MgT0suXG4gICAgICAgICAgICAgIHByb3h5Wm9uZVNwZWMuc2V0RGVsZWdhdGUocHJldmlvdXNEZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmYWlsQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAndGVzdCcpO1xuICAgIHByb3h5Wm9uZVNwZWMuc2V0RGVsZWdhdGUodGVzdFpvbmVTcGVjKTtcbiAgfSk7XG4gIHJldHVybiBab25lLmN1cnJlbnQucnVuR3VhcmRlZChmbiwgY29udGV4dCk7XG59XG4iXX0=