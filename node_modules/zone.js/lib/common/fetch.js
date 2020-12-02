"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    if (typeof fetch !== 'function') {
        return;
    }
    var originalFetch = global[api.symbol('fetch')];
    if (originalFetch) {
        // restore unpatched fetch first
        fetch = originalFetch;
    }
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, { fetchArgs: args }, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy96b25lLmpzL2xpYi9jb21tb24vZmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNIOzs7R0FHRztBQUVILElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBVyxFQUFFLElBQWMsRUFBRSxHQUFpQjtJQUl4RSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLEVBQUU7UUFDL0IsT0FBTztLQUNSO0lBQ0QsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFJLGFBQWEsRUFBRTtRQUNqQixnQ0FBZ0M7UUFDaEMsS0FBSyxHQUFHLGFBQWEsQ0FBQztLQUN2QjtJQUNELElBQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN4QyxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsSUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDOUQsSUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsSUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxJQUFNLFlBQVksR0FBRyxPQUFPLHVCQUF1QixLQUFLLFVBQVUsQ0FBQztJQUNuRSxJQUFJLFdBQVcsR0FBa0IsSUFBSSxDQUFDO0lBQ3RDLElBQUksWUFBWSxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHO1lBQzFCLElBQU0sZUFBZSxHQUFHLElBQUks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QU87aUJBQ1I7Z0JBQ0QsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUNuRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLFVBQVUsSUFBSSxXQUFXLEVBQUU7b0JBQ3JFLElBQUk7d0JBQ0QsSUFBSSxDQUFDLE9BQWUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzFDOzRCQUFTO3dCQUNQLElBQUksQ0FBQyxPQUFlLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ2xEO2lCQUNGO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2lCQUNuRDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ1AsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRTtnQkFDcEMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnZmV0Y2gnLCAoZ2xvYmFsOiBhbnksIFpvbmU6IFpvbmVUeXBlLCBhcGk6IF9ab25lUHJpdmF0ZSkgPT4ge1xuICBpbnRlcmZhY2UgRmV0Y2hUYXNrRGF0YSBleHRlbmRzIFRhc2tEYXRhIHtcbiAgICBmZXRjaEFyZ3M/OiBhbnlbXTtcbiAgfVxuICBsZXQgZmV0Y2ggPSBnbG9iYWxbJ2ZldGNoJ107XG4gIGlmICh0eXBlb2YgZmV0Y2ggIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb3JpZ2luYWxGZXRjaCA9IGdsb2JhbFthcGkuc3ltYm9sKCdmZXRjaCcpXTtcbiAgaWYgKG9yaWdpbmFsRmV0Y2gpIHtcbiAgICAvLyByZXN0b3JlIHVucGF0Y2hlZCBmZXRjaCBmaXJzdFxuICAgIGZldGNoID0gb3JpZ2luYWxGZXRjaDtcbiAgfVxuICBjb25zdCBab25lQXdhcmVQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG4gIGNvbnN0IHN5bWJvbFRoZW5QYXRjaGVkID0gYXBpLnN5bWJvbCgndGhlblBhdGNoZWQnKTtcbiAgY29uc3QgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IGFwaS5zeW1ib2woJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgY29uc3QgZmV0Y2hUYXNrQWJvcnRpbmcgPSBhcGkuc3ltYm9sKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICBjb25zdCBPcmlnaW5hbEFib3J0Q29udHJvbGxlciA9IGdsb2JhbFsnQWJvcnRDb250cm9sbGVyJ107XG4gIGNvbnN0IHN1cHBvcnRBYm9ydCA9IHR5cGVvZiBPcmlnaW5hbEFib3J0Q29udHJvbGxlciA9PT0gJ2Z1bmN0aW9uJztcbiAgbGV0IGFib3J0TmF0aXZlOiBGdW5jdGlvbnxudWxsID0gbnVsbDtcbiAgaWYgKHN1cHBvcnRBYm9ydCkge1xuICAgIGdsb2JhbFsnQWJvcnRDb250cm9sbGVyJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBPcmlnaW5hbEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3Qgc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcbiAgICAgIHNpZ25hbC5hYm9ydENvbnRyb2xsZXIgPSBhYm9ydENvbnRyb2xsZXI7XG4gICAgICByZXR1cm4gYWJvcnRDb250cm9sbGVyO1xuICAgIH07XG4gICAgYWJvcnROYXRpdmUgPSBhcGkucGF0Y2hNZXRob2QoXG4gICAgICAgIE9yaWdpbmFsQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwgJ2Fib3J0JyxcbiAgICAgICAgKGRlbGVnYXRlOiBGdW5jdGlvbikgPT4gKHNlbGY6IGFueSwgYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGYudGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYudGFzay56b25lLmNhbmNlbFRhc2soc2VsZi50YXNrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgfVxuICBjb25zdCBwbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCkge307XG4gIGdsb2JhbFsnZmV0Y2gnXSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogbnVsbDtcbiAgICBjb25zdCBzaWduYWwgPSBvcHRpb25zICYmIG9wdGlvbnMuc2lnbmFsO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIGNvbnN0IHRhc2sgPSBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soXG4gICAgICAgICAgJ2ZldGNoJywgcGxhY2Vob2xkZXIsIHsgZmV0Y2hBcmdzOiBhcmdzIH0gYXMgRmV0Y2hUYXNrRGF0YSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZmV0Y2hQcm9taXNlO1xuICAgICAgICAgICAgbGV0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAoem9uZSBhcyBhbnkpW2ZldGNoVGFza1NjaGVkdWxpbmddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZmV0Y2hQcm9taXNlID0gZmV0Y2guYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICByZWooZXJyb3IpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAoem9uZSBhcyBhbnkpW2ZldGNoVGFza1NjaGVkdWxpbmddID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKGZldGNoUHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpKSB7XG4gICAgICAgICAgICAgIGxldCBjdG9yID0gZmV0Y2hQcm9taXNlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICBpZiAoIWN0b3Jbc3ltYm9sVGhlblBhdGNoZWRdKSB7XG4gICAgICAgICAgICAgICAgYXBpLnBhdGNoVGhlbihjdG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hQcm9taXNlLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc291cmNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSAnbm90U2NoZWR1bGVkJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVzKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gJ25vdFNjaGVkdWxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN1cHBvcnRBYm9ydCkge1xuICAgICAgICAgICAgICByZWooJ05vIEFib3J0Q29udHJvbGxlciBzdXBwb3J0ZWQsIGNhbiBub3QgY2FuY2VsIGZldGNoJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0Q29udHJvbGxlciAmJiAhc2lnbmFsLmFib3J0ZWQgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2Ygc2lnbmFsLmFib3J0Q29udHJvbGxlci5hYm9ydCA9PT0gJ2Z1bmN0aW9uJyAmJiBhYm9ydE5hdGl2ZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChab25lLmN1cnJlbnQgYXMgYW55KVtmZXRjaFRhc2tBYm9ydGluZ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFib3J0TmF0aXZlLmNhbGwoc2lnbmFsLmFib3J0Q29udHJvbGxlcik7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgKFpvbmUuY3VycmVudCBhcyBhbnkpW2ZldGNoVGFza0Fib3J0aW5nXSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWooJ2NhbmNlbCBmZXRjaCBuZWVkIGEgQWJvcnRDb250cm9sbGVyLnNpZ25hbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgaWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgIHNpZ25hbC5hYm9ydENvbnRyb2xsZXIudGFzayA9IHRhc2s7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59KTtcbiJdfQ==