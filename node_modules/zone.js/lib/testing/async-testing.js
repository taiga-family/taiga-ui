(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("zone.js/lib/testing/async-testing", ["require", "exports", "../zone-spec/async-test"], factory);
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
    require("../zone-spec/async-test");
    Zone.__load_patch('asynctest', function (global, Zone, api) {
        /**
         * Wraps a test function in an asynchronous test zone. The test will automatically
         * complete when all asynchronous calls within this zone are done.
         */
        Zone[api.symbol('asyncTest')] = function asyncTest(fn) {
            // If we're running using the Jasmine test framework, adapt to call the 'done'
            // function when asynchronous activity is finished.
            if (global.jasmine) {
                // Not using an arrow function to preserve context passed from call site
                return function (done) {
                    if (!done) {
                        // if we run beforeEach in @angular/core/testing/testing_internal then we get no done
                        // fake it here and assume sync.
                        done = function () { };
                        done.fail = function (e) { throw e; };
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
        };
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
                    if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                        // Only reset the zone spec if it's
                        // sill this one. Otherwise, assume
                        // it's OK.
                        proxyZoneSpec.setDelegate(previousDelegate);
                    }
                    testZoneSpec.unPatchPromiseForTest();
                    currentZone.run(function () { finishCallback(); });
                }, function (error) {
                    // Need to restore the original zone.
                    if (proxyZoneSpec.getDelegate() == testZoneSpec) {
                        // Only reset the zone spec if it's sill this one. Otherwise, assume it's OK.
                        proxyZoneSpec.setDelegate(previousDelegate);
                    }
                    testZoneSpec.unPatchPromiseForTest();
                    currentZone.run(function () { failCallback(error); });
                }, 'test');
                proxyZoneSpec.setDelegate(testZoneSpec);
                testZoneSpec.patchPromiseForTest();
            });
            return Zone.current.runGuarded(fn, context);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtdGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3pvbmUuanMvbGliL3Rlc3RpbmcvYXN5bmMtdGVzdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILG1DQUFpQztJQUVqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7UUFDNUU7OztXQUdHO1FBQ0YsSUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTLFNBQVMsQ0FBQyxFQUFZO1lBQ3RFLDhFQUE4RTtZQUM5RSxtREFBbUQ7WUFDbkQsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNsQix3RUFBd0U7Z0JBQ3hFLE9BQU8sVUFBd0IsSUFBUztvQkFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDVCxxRkFBcUY7d0JBQ3JGLGdDQUFnQzt3QkFDaEMsSUFBSSxHQUFHLGNBQVksQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVMsQ0FBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMzQztvQkFDRCxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFRO3dCQUNyQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTs0QkFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ2xDOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hCO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQzthQUNIO1lBQ0QsNEVBQTRFO1lBQzVFLDJFQUEyRTtZQUMzRSxnRUFBZ0U7WUFDaEUsd0VBQXdFO1lBQ3hFLE9BQU87Z0JBQUEsaUJBSU47Z0JBSEMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLGNBQWMsRUFBRSxZQUFZO29CQUNwRCxhQUFhLENBQUMsRUFBRSxFQUFFLEtBQUksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsU0FBUyxhQUFhLENBQ2xCLEVBQVksRUFBRSxPQUFZLEVBQUUsY0FBd0IsRUFBRSxZQUFzQjtZQUM5RSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2pDLElBQU0saUJBQWlCLEdBQUksSUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDN0QsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQ1gsa0ZBQWtGO29CQUNsRiw0RUFBNEUsQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsSUFBTSxhQUFhLEdBQUksSUFBWSxDQUFDLGVBQWUsQ0FHbEQsQ0FBQztZQUNGLElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FDWCw4RUFBOEU7b0JBQzlFLHVFQUF1RSxDQUFDLENBQUM7YUFDOUU7WUFDRCxJQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLGlFQUFpRTtZQUNqRSxtRUFBbUU7WUFDbkUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsSUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckQsU0FBVyxDQUFDLE1BQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCLElBQU0sWUFBWSxHQUFhLElBQUksaUJBQWlCLENBQ2hEO29CQUNFLHFDQUFxQztvQkFDckMsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksWUFBWSxFQUFFO3dCQUMvQyxtQ0FBbUM7d0JBQ25DLG1DQUFtQzt3QkFDbkMsV0FBVzt3QkFDWCxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzdDO29CQUNBLFlBQW9CLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDOUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFRLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsRUFDRCxVQUFDLEtBQVU7b0JBQ1QscUNBQXFDO29CQUNyQyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLEVBQUU7d0JBQy9DLDZFQUE2RTt3QkFDN0UsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUM3QztvQkFDQSxZQUFvQixDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQzlDLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBUSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUNELE1BQU0sQ0FBQyxDQUFDO2dCQUNaLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZDLFlBQW9CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAnLi4vem9uZS1zcGVjL2FzeW5jLXRlc3QnO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnYXN5bmN0ZXN0JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgLyoqXG4gICAqIFdyYXBzIGEgdGVzdCBmdW5jdGlvbiBpbiBhbiBhc3luY2hyb25vdXMgdGVzdCB6b25lLiBUaGUgdGVzdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICogY29tcGxldGUgd2hlbiBhbGwgYXN5bmNocm9ub3VzIGNhbGxzIHdpdGhpbiB0aGlzIHpvbmUgYXJlIGRvbmUuXG4gICAqL1xuICAoWm9uZSBhcyBhbnkpW2FwaS5zeW1ib2woJ2FzeW5jVGVzdCcpXSA9IGZ1bmN0aW9uIGFzeW5jVGVzdChmbjogRnVuY3Rpb24pOiAoZG9uZTogYW55KSA9PiBhbnkge1xuICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgdXNpbmcgdGhlIEphc21pbmUgdGVzdCBmcmFtZXdvcmssIGFkYXB0IHRvIGNhbGwgdGhlICdkb25lJ1xuICAgIC8vIGZ1bmN0aW9uIHdoZW4gYXN5bmNocm9ub3VzIGFjdGl2aXR5IGlzIGZpbmlzaGVkLlxuICAgIGlmIChnbG9iYWwuamFzbWluZSkge1xuICAgICAgLy8gTm90IHVzaW5nIGFuIGFycm93IGZ1bmN0aW9uIHRvIHByZXNlcnZlIGNvbnRleHQgcGFzc2VkIGZyb20gY2FsbCBzaXRlXG4gICAgICByZXR1cm4gZnVuY3Rpb24odGhpczogdW5rbm93biwgZG9uZTogYW55KSB7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgIC8vIGlmIHdlIHJ1biBiZWZvcmVFYWNoIGluIEBhbmd1bGFyL2NvcmUvdGVzdGluZy90ZXN0aW5nX2ludGVybmFsIHRoZW4gd2UgZ2V0IG5vIGRvbmVcbiAgICAgICAgICAvLyBmYWtlIGl0IGhlcmUgYW5kIGFzc3VtZSBzeW5jLlxuICAgICAgICAgIGRvbmUgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICAgIGRvbmUuZmFpbCA9IGZ1bmN0aW9uKGU6IGFueSkgeyB0aHJvdyBlOyB9O1xuICAgICAgICB9XG4gICAgICAgIHJ1bkluVGVzdFpvbmUoZm4sIHRoaXMsIGRvbmUsIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXJyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUuZmFpbChuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbmUuZmFpbChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJldHVybiBhIHByb21pc2Ugd2hpY2ggd2lsbCByZXNvbHZlIHdoZW4gYXN5bmNocm9ub3VzIGFjdGl2aXR5XG4gICAgLy8gaXMgZmluaXNoZWQuIFRoaXMgd2lsbCBiZSBjb3JyZWN0bHkgY29uc3VtZWQgYnkgdGhlIE1vY2hhIGZyYW1ld29yayB3aXRoXG4gICAgLy8gaXQoJy4uLicsIGFzeW5jKG15Rm4pKTsgb3IgY2FuIGJlIHVzZWQgaW4gYSBjdXN0b20gZnJhbWV3b3JrLlxuICAgIC8vIE5vdCB1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB0byBwcmVzZXJ2ZSBjb250ZXh0IHBhc3NlZCBmcm9tIGNhbGwgc2l0ZVxuICAgIHJldHVybiBmdW5jdGlvbih0aGlzOiB1bmtub3duKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGZpbmlzaENhbGxiYWNrLCBmYWlsQ2FsbGJhY2spID0+IHtcbiAgICAgICAgcnVuSW5UZXN0Wm9uZShmbiwgdGhpcywgZmluaXNoQ2FsbGJhY2ssIGZhaWxDYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJ1bkluVGVzdFpvbmUoXG4gICAgICBmbjogRnVuY3Rpb24sIGNvbnRleHQ6IGFueSwgZmluaXNoQ2FsbGJhY2s6IEZ1bmN0aW9uLCBmYWlsQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgY29uc3QgQXN5bmNUZXN0Wm9uZVNwZWMgPSAoWm9uZSBhcyBhbnkpWydBc3luY1Rlc3Rab25lU3BlYyddO1xuICAgIGlmIChBc3luY1Rlc3Rab25lU3BlYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0FzeW5jVGVzdFpvbmVTcGVjIGlzIG5lZWRlZCBmb3IgdGhlIGFzeW5jKCkgdGVzdCBoZWxwZXIgYnV0IGNvdWxkIG5vdCBiZSBmb3VuZC4gJyArXG4gICAgICAgICAgJ1BsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIGVudmlyb25tZW50IGluY2x1ZGVzIHpvbmUuanMvZGlzdC9hc3luYy10ZXN0LmpzJyk7XG4gICAgfVxuICAgIGNvbnN0IFByb3h5Wm9uZVNwZWMgPSAoWm9uZSBhcyBhbnkpWydQcm94eVpvbmVTcGVjJ10gYXMge1xuICAgICAgZ2V0KCk6IHtzZXREZWxlZ2F0ZShzcGVjOiBab25lU3BlYyk6IHZvaWQ7IGdldERlbGVnYXRlKCk6IFpvbmVTcGVjO307XG4gICAgICBhc3NlcnRQcmVzZW50OiAoKSA9PiB2b2lkO1xuICAgIH07XG4gICAgaWYgKFByb3h5Wm9uZVNwZWMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdQcm94eVpvbmVTcGVjIGlzIG5lZWRlZCBmb3IgdGhlIGFzeW5jKCkgdGVzdCBoZWxwZXIgYnV0IGNvdWxkIG5vdCBiZSBmb3VuZC4gJyArXG4gICAgICAgICAgJ1BsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIGVudmlyb25tZW50IGluY2x1ZGVzIHpvbmUuanMvZGlzdC9wcm94eS5qcycpO1xuICAgIH1cbiAgICBjb25zdCBwcm94eVpvbmVTcGVjID0gUHJveHlab25lU3BlYy5nZXQoKTtcbiAgICBQcm94eVpvbmVTcGVjLmFzc2VydFByZXNlbnQoKTtcbiAgICAvLyBXZSBuZWVkIHRvIGNyZWF0ZSB0aGUgQXN5bmNUZXN0Wm9uZVNwZWMgb3V0c2lkZSB0aGUgUHJveHlab25lLlxuICAgIC8vIElmIHdlIGRvIGl0IGluIFByb3h5Wm9uZSB0aGVuIHdlIHdpbGwgZ2V0IHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICBjb25zdCBwcm94eVpvbmUgPSBab25lLmN1cnJlbnQuZ2V0Wm9uZVdpdGgoJ1Byb3h5Wm9uZVNwZWMnKTtcbiAgICBjb25zdCBwcmV2aW91c0RlbGVnYXRlID0gcHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpO1xuICAgIHByb3h5Wm9uZSAhLnBhcmVudCAhLnJ1bigoKSA9PiB7XG4gICAgICBjb25zdCB0ZXN0Wm9uZVNwZWM6IFpvbmVTcGVjID0gbmV3IEFzeW5jVGVzdFpvbmVTcGVjKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgem9uZS5cbiAgICAgICAgICAgIGlmIChwcm94eVpvbmVTcGVjLmdldERlbGVnYXRlKCkgPT0gdGVzdFpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIHpvbmUgc3BlYyBpZiBpdCdzXG4gICAgICAgICAgICAgIC8vIHNpbGwgdGhpcyBvbmUuIE90aGVyd2lzZSwgYXNzdW1lXG4gICAgICAgICAgICAgIC8vIGl0J3MgT0suXG4gICAgICAgICAgICAgIHByb3h5Wm9uZVNwZWMuc2V0RGVsZWdhdGUocHJldmlvdXNEZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAodGVzdFpvbmVTcGVjIGFzIGFueSkudW5QYXRjaFByb21pc2VGb3JUZXN0KCk7XG4gICAgICAgICAgICBjdXJyZW50Wm9uZS5ydW4oKCkgPT4geyBmaW5pc2hDYWxsYmFjaygpOyB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBOZWVkIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHpvbmUuXG4gICAgICAgICAgICBpZiAocHJveHlab25lU3BlYy5nZXREZWxlZ2F0ZSgpID09IHRlc3Rab25lU3BlYykge1xuICAgICAgICAgICAgICAvLyBPbmx5IHJlc2V0IHRoZSB6b25lIHNwZWMgaWYgaXQncyBzaWxsIHRoaXMgb25lLiBPdGhlcndpc2UsIGFzc3VtZSBpdCdzIE9LLlxuICAgICAgICAgICAgICBwcm94eVpvbmVTcGVjLnNldERlbGVnYXRlKHByZXZpb3VzRGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKHRlc3Rab25lU3BlYyBhcyBhbnkpLnVuUGF0Y2hQcm9taXNlRm9yVGVzdCgpO1xuICAgICAgICAgICAgY3VycmVudFpvbmUucnVuKCgpID0+IHsgZmFpbENhbGxiYWNrKGVycm9yKTsgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAndGVzdCcpO1xuICAgICAgcHJveHlab25lU3BlYy5zZXREZWxlZ2F0ZSh0ZXN0Wm9uZVNwZWMpO1xuICAgICAgKHRlc3Rab25lU3BlYyBhcyBhbnkpLnBhdGNoUHJvbWlzZUZvclRlc3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bkd1YXJkZWQoZm4sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdfQ==