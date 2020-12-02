"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Promise for async/fakeAsync zoneSpec test
 * can support async operation which not supported by zone.js
 * such as
 * it ('test jsonp in AsyncZone', async() => {
 *   new Promise(res => {
 *     jsonp(url, (data) => {
 *       // success callback
 *       res(data);
 *     });
 *   }).then((jsonpResult) => {
 *     // get jsonp result.
 *
 *     // user will expect AsyncZoneSpec wait for
 *     // then, but because jsonp is not zone aware
 *     // AsyncZone will finish before then is called.
 *   });
 * });
 */
Zone.__load_patch('promisefortest', function (global, Zone, api) {
    var symbolState = api.symbol('state');
    var UNRESOLVED = null;
    var symbolParentUnresolved = api.symbol('parentUnresolved');
    // patch Promise.prototype.then to keep an internal
    // number for tracking unresolved chained promise
    // we will decrease this number when the parent promise
    // being resolved/rejected and chained promise was
    // scheduled as a microTask.
    // so we can know such kind of chained promise still
    // not resolved in AsyncTestZone
    Promise[api.symbol('patchPromiseForTest')] = function patchPromiseForTest() {
        var oriThen = Promise[Zone.__symbol__('ZonePromiseThen')];
        if (oriThen) {
            return;
        }
        oriThen = Promise[Zone.__symbol__('ZonePromiseThen')] = Promise.prototype.then;
        Promise.prototype.then = function () {
            var chained = oriThen.apply(this, arguments);
            if (this[symbolState] === UNRESOLVED) {
                // parent promise is unresolved.
                var asyncTestZoneSpec = Zone.current.get('AsyncTestZoneSpec');
                if (asyncTestZoneSpec) {
                    asyncTestZoneSpec.unresolvedChainedPromiseCount++;
                    chained[symbolParentUnresolved] = true;
                }
            }
            return chained;
        };
    };
    Promise[api.symbol('unPatchPromiseForTest')] = function unpatchPromiseForTest() {
        // restore origin then
        var oriThen = Promise[Zone.__symbol__('ZonePromiseThen')];
        if (oriThen) {
            Promise.prototype.then = oriThen;
            Promise[Zone.__symbol__('ZonePromiseThen')] = undefined;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS10ZXN0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvdGVzdGluZy9wcm9taXNlLXRlc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsTUFBVyxFQUFFLElBQWMsRUFBRSxHQUFpQjtJQUNqRixJQUFNLFdBQVcsR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELElBQU0sVUFBVSxHQUFTLElBQUksQ0FBQztJQUM5QixJQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUU5RCxtREFBbUQ7SUFDbkQsaURBQWlEO0lBQ2pELHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsNEJBQTRCO0lBQzVCLG9EQUFvRDtJQUNwRCxnQ0FBZ0M7SUFDL0IsT0FBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CO1FBQ2hGLElBQUksT0FBTyxHQUFJLE9BQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUNELE9BQU8sR0FBSSxPQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDeEYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUc7WUFDdkIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0MsSUFBSyxJQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUM3QyxnQ0FBZ0M7Z0JBQ2hDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxpQkFBaUIsRUFBRTtvQkFDckIsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUN4QzthQUNGO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUQsT0FBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLFNBQVMscUJBQXFCO1FBQ3BGLHNCQUFzQjtRQUN0QixJQUFNLE9BQU8sR0FBSSxPQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDaEMsT0FBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNsRTtJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFByb21pc2UgZm9yIGFzeW5jL2Zha2VBc3luYyB6b25lU3BlYyB0ZXN0XG4gKiBjYW4gc3VwcG9ydCBhc3luYyBvcGVyYXRpb24gd2hpY2ggbm90IHN1cHBvcnRlZCBieSB6b25lLmpzXG4gKiBzdWNoIGFzXG4gKiBpdCAoJ3Rlc3QganNvbnAgaW4gQXN5bmNab25lJywgYXN5bmMoKSA9PiB7XG4gKiAgIG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gKiAgICAganNvbnAodXJsLCAoZGF0YSkgPT4ge1xuICogICAgICAgLy8gc3VjY2VzcyBjYWxsYmFja1xuICogICAgICAgcmVzKGRhdGEpO1xuICogICAgIH0pO1xuICogICB9KS50aGVuKChqc29ucFJlc3VsdCkgPT4ge1xuICogICAgIC8vIGdldCBqc29ucCByZXN1bHQuXG4gKlxuICogICAgIC8vIHVzZXIgd2lsbCBleHBlY3QgQXN5bmNab25lU3BlYyB3YWl0IGZvclxuICogICAgIC8vIHRoZW4sIGJ1dCBiZWNhdXNlIGpzb25wIGlzIG5vdCB6b25lIGF3YXJlXG4gKiAgICAgLy8gQXN5bmNab25lIHdpbGwgZmluaXNoIGJlZm9yZSB0aGVuIGlzIGNhbGxlZC5cbiAqICAgfSk7XG4gKiB9KTtcbiAqL1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3Byb21pc2Vmb3J0ZXN0JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgY29uc3Qgc3ltYm9sU3RhdGU6IHN0cmluZyA9IGFwaS5zeW1ib2woJ3N0YXRlJyk7XG4gIGNvbnN0IFVOUkVTT0xWRUQ6IG51bGwgPSBudWxsO1xuICBjb25zdCBzeW1ib2xQYXJlbnRVbnJlc29sdmVkID0gYXBpLnN5bWJvbCgncGFyZW50VW5yZXNvbHZlZCcpO1xuXG4gIC8vIHBhdGNoIFByb21pc2UucHJvdG90eXBlLnRoZW4gdG8ga2VlcCBhbiBpbnRlcm5hbFxuICAvLyBudW1iZXIgZm9yIHRyYWNraW5nIHVucmVzb2x2ZWQgY2hhaW5lZCBwcm9taXNlXG4gIC8vIHdlIHdpbGwgZGVjcmVhc2UgdGhpcyBudW1iZXIgd2hlbiB0aGUgcGFyZW50IHByb21pc2VcbiAgLy8gYmVpbmcgcmVzb2x2ZWQvcmVqZWN0ZWQgYW5kIGNoYWluZWQgcHJvbWlzZSB3YXNcbiAgLy8gc2NoZWR1bGVkIGFzIGEgbWljcm9UYXNrLlxuICAvLyBzbyB3ZSBjYW4ga25vdyBzdWNoIGtpbmQgb2YgY2hhaW5lZCBwcm9taXNlIHN0aWxsXG4gIC8vIG5vdCByZXNvbHZlZCBpbiBBc3luY1Rlc3Rab25lXG4gIChQcm9taXNlIGFzIGFueSlbYXBpLnN5bWJvbCgncGF0Y2hQcm9taXNlRm9yVGVzdCcpXSA9IGZ1bmN0aW9uIHBhdGNoUHJvbWlzZUZvclRlc3QoKSB7XG4gICAgbGV0IG9yaVRoZW4gPSAoUHJvbWlzZSBhcyBhbnkpW1pvbmUuX19zeW1ib2xfXygnWm9uZVByb21pc2VUaGVuJyldO1xuICAgIGlmIChvcmlUaGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9yaVRoZW4gPSAoUHJvbWlzZSBhcyBhbnkpW1pvbmUuX19zeW1ib2xfXygnWm9uZVByb21pc2VUaGVuJyldID0gUHJvbWlzZS5wcm90b3R5cGUudGhlbjtcbiAgICBQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjaGFpbmVkID0gb3JpVGhlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKCh0aGlzIGFzIGFueSlbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAgIC8vIHBhcmVudCBwcm9taXNlIGlzIHVucmVzb2x2ZWQuXG4gICAgICAgIGNvbnN0IGFzeW5jVGVzdFpvbmVTcGVjID0gWm9uZS5jdXJyZW50LmdldCgnQXN5bmNUZXN0Wm9uZVNwZWMnKTtcbiAgICAgICAgaWYgKGFzeW5jVGVzdFpvbmVTcGVjKSB7XG4gICAgICAgICAgYXN5bmNUZXN0Wm9uZVNwZWMudW5yZXNvbHZlZENoYWluZWRQcm9taXNlQ291bnQrKztcbiAgICAgICAgICBjaGFpbmVkW3N5bWJvbFBhcmVudFVucmVzb2x2ZWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYWluZWQ7XG4gICAgfTtcbiAgfTtcblxuICAoUHJvbWlzZSBhcyBhbnkpW2FwaS5zeW1ib2woJ3VuUGF0Y2hQcm9taXNlRm9yVGVzdCcpXSA9IGZ1bmN0aW9uIHVucGF0Y2hQcm9taXNlRm9yVGVzdCgpIHtcbiAgICAvLyByZXN0b3JlIG9yaWdpbiB0aGVuXG4gICAgY29uc3Qgb3JpVGhlbiA9IChQcm9taXNlIGFzIGFueSlbWm9uZS5fX3N5bWJvbF9fKCdab25lUHJvbWlzZVRoZW4nKV07XG4gICAgaWYgKG9yaVRoZW4pIHtcbiAgICAgIFByb21pc2UucHJvdG90eXBlLnRoZW4gPSBvcmlUaGVuO1xuICAgICAgKFByb21pc2UgYXMgYW55KVtab25lLl9fc3ltYm9sX18oJ1pvbmVQcm9taXNlVGhlbicpXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG59KTtcbiJdfQ==