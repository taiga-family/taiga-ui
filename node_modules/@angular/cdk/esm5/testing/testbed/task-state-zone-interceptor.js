/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { BehaviorSubject } from 'rxjs';
/** Unique symbol that is used to patch a property to a proxy zone. */
var stateObservableSymbol = Symbol('ProxyZone_PATCHED#stateObservable');
/**
 * Interceptor that can be set up in a `ProxyZone` instance. The interceptor
 * will keep track of the task state and emit whenever the state changes.
 *
 * This serves as a workaround for https://github.com/angular/angular/issues/32896.
 */
var TaskStateZoneInterceptor = /** @class */ (function () {
    function TaskStateZoneInterceptor(_lastState) {
        this._lastState = _lastState;
        /** Subject that can be used to emit a new state change. */
        this._stateSubject = new BehaviorSubject(this._lastState ? this._getTaskStateFromInternalZoneState(this._lastState) : { stable: true });
        /** Public observable that emits whenever the task state changes. */
        this.state = this._stateSubject.asObservable();
    }
    /** This will be called whenever the task state changes in the intercepted zone. */
    TaskStateZoneInterceptor.prototype.onHasTask = function (delegate, current, target, hasTaskState) {
        if (current === target) {
            this._stateSubject.next(this._getTaskStateFromInternalZoneState(hasTaskState));
        }
    };
    /** Gets the task state from the internal ZoneJS task state. */
    TaskStateZoneInterceptor.prototype._getTaskStateFromInternalZoneState = function (state) {
        return { stable: !state.macroTask && !state.microTask };
    };
    /**
     * Sets up the custom task state Zone interceptor in the  `ProxyZone`. Throws if
     * no `ProxyZone` could be found.
     * @returns an observable that emits whenever the task state changes.
     */
    TaskStateZoneInterceptor.setup = function () {
        if (Zone === undefined) {
            throw Error('Could not find ZoneJS. For test harnesses running in TestBed, ' +
                'ZoneJS needs to be installed.');
        }
        // tslint:disable-next-line:variable-name
        var ProxyZoneSpec = Zone['ProxyZoneSpec'];
        // If there is no "ProxyZoneSpec" installed, we throw an error and recommend
        // setting up the proxy zone by pulling in the testing bundle.
        if (!ProxyZoneSpec) {
            throw Error('ProxyZoneSpec is needed for the test harnesses but could not be found. ' +
                'Please make sure that your environment includes zone.js/dist/zone-testing.js');
        }
        // Ensure that there is a proxy zone instance set up, and get
        // a reference to the instance if present.
        var zoneSpec = ProxyZoneSpec.assertPresent();
        // If there already is a delegate registered in the proxy zone, and it
        // is type of the custom task state interceptor, we just use that state
        // observable. This allows us to only intercept Zone once per test
        // (similar to how `fakeAsync` or `async` work).
        if (zoneSpec[stateObservableSymbol]) {
            return zoneSpec[stateObservableSymbol];
        }
        // Since we intercept on environment creation and the fixture has been
        // created before, we might have missed tasks scheduled before. Fortunately
        // the proxy zone keeps track of the previous task state, so we can just pass
        // this as initial state to the task zone interceptor.
        var interceptor = new TaskStateZoneInterceptor(zoneSpec.lastTaskState);
        var zoneSpecOnHasTask = zoneSpec.onHasTask.bind(zoneSpec);
        // We setup the task state interceptor in the `ProxyZone`. Note that we cannot register
        // the interceptor as a new proxy zone delegate because it would mean that other zone
        // delegates (e.g. `FakeAsyncTestZone` or `AsyncTestZone`) can accidentally overwrite/disable
        // our interceptor. Since we just intend to monitor the task state of the proxy zone, it is
        // sufficient to just patch the proxy zone. This also avoids that we interfere with the task
        // queue scheduling logic.
        zoneSpec.onHasTask = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            zoneSpecOnHasTask.apply(void 0, __spread(args));
            interceptor.onHasTask.apply(interceptor, __spread(args));
        };
        return zoneSpec[stateObservableSymbol] = interceptor.state;
    };
    return TaskStateZoneInterceptor;
}());
export { TaskStateZoneInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0ZS16b25lLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3RiZWQvdGFzay1zdGF0ZS16b25lLWludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBU2pELHNFQUFzRTtBQUN0RSxJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBTzFFOzs7OztHQUtHO0FBQ0g7SUFRRSxrQ0FBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFQakQsMkRBQTJEO1FBQ25ELGtCQUFhLEdBQStCLElBQUksZUFBZSxDQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRWpHLG9FQUFvRTtRQUMzRCxVQUFLLEdBQTBCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVyRCxtRkFBbUY7SUFDbkYsNENBQVMsR0FBVCxVQUFVLFFBQXNCLEVBQUUsT0FBYSxFQUFFLE1BQVksRUFBRSxZQUEwQjtRQUN2RixJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDO0lBRUQsK0RBQStEO0lBQ3ZELHFFQUFrQyxHQUExQyxVQUEyQyxLQUFtQjtRQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDhCQUFLLEdBQVo7UUFDRSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxLQUFLLENBQUMsZ0VBQWdFO2dCQUMxRSwrQkFBK0IsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQseUNBQXlDO1FBQ3pDLElBQU0sYUFBYSxHQUFJLElBQVksQ0FBQyxlQUFlLENBQThCLENBQUM7UUFFbEYsNEVBQTRFO1FBQzVFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE1BQU0sS0FBSyxDQUNULHlFQUF5RTtnQkFDekUsOEVBQThFLENBQUMsQ0FBQztTQUNuRjtRQUVELDZEQUE2RDtRQUM3RCwwQ0FBMEM7UUFDMUMsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLGFBQWEsRUFBc0IsQ0FBQztRQUVuRSxzRUFBc0U7UUFDdEUsdUVBQXVFO1FBQ3ZFLGtFQUFrRTtRQUNsRSxnREFBZ0Q7UUFDaEQsSUFBSSxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUNuQyxPQUFPLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBRSxDQUFDO1NBQ3pDO1FBRUQsc0VBQXNFO1FBQ3RFLDJFQUEyRTtRQUMzRSw2RUFBNkU7UUFDN0Usc0RBQXNEO1FBQ3RELElBQU0sV0FBVyxHQUFHLElBQUksd0JBQXdCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pFLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsdUZBQXVGO1FBQ3ZGLHFGQUFxRjtRQUNyRiw2RkFBNkY7UUFDN0YsMkZBQTJGO1FBQzNGLDRGQUE0RjtRQUM1RiwwQkFBMEI7UUFDMUIsUUFBUSxDQUFDLFNBQVMsR0FBRztZQUFTLGNBQWlEO2lCQUFqRCxVQUFpRCxFQUFqRCxxQkFBaUQsRUFBakQsSUFBaUQ7Z0JBQWpELHlCQUFpRDs7WUFDN0UsaUJBQWlCLHdCQUFJLElBQUksR0FBRTtZQUMzQixXQUFXLENBQUMsU0FBUyxPQUFyQixXQUFXLFdBQWMsSUFBSSxHQUFFO1FBQ2pDLENBQUMsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUM3RCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UHJveHlab25lLCBQcm94eVpvbmVTdGF0aWN9IGZyb20gJy4vcHJveHktem9uZS10eXBlcyc7XG5cbi8qKiBDdXJyZW50IHN0YXRlIG9mIHRoZSBpbnRlcmNlcHRlZCB6b25lLiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYXNrU3RhdGUge1xuICAvKiogV2hldGhlciB0aGUgem9uZSBpcyBzdGFibGUgKGkuZS4gbm8gbWljcm90YXNrcyBhbmQgbWFjcm90YXNrcykuICovXG4gIHN0YWJsZTogYm9vbGVhbjtcbn1cblxuLyoqIFVuaXF1ZSBzeW1ib2wgdGhhdCBpcyB1c2VkIHRvIHBhdGNoIGEgcHJvcGVydHkgdG8gYSBwcm94eSB6b25lLiAqL1xuY29uc3Qgc3RhdGVPYnNlcnZhYmxlU3ltYm9sID0gU3ltYm9sKCdQcm94eVpvbmVfUEFUQ0hFRCNzdGF0ZU9ic2VydmFibGUnKTtcblxuLyoqIFR5cGUgdGhhdCBkZXNjcmliZXMgYSBwb3RlbnRpYWxseSBwYXRjaGVkIHByb3h5IHpvbmUgaW5zdGFuY2UuICovXG50eXBlIFBhdGNoZWRQcm94eVpvbmUgPSBQcm94eVpvbmUgJiB7XG4gIFtzdGF0ZU9ic2VydmFibGVTeW1ib2xdOiB1bmRlZmluZWR8T2JzZXJ2YWJsZTxUYXNrU3RhdGU+O1xufTtcblxuLyoqXG4gKiBJbnRlcmNlcHRvciB0aGF0IGNhbiBiZSBzZXQgdXAgaW4gYSBgUHJveHlab25lYCBpbnN0YW5jZS4gVGhlIGludGVyY2VwdG9yXG4gKiB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlIHRhc2sgc3RhdGUgYW5kIGVtaXQgd2hlbmV2ZXIgdGhlIHN0YXRlIGNoYW5nZXMuXG4gKlxuICogVGhpcyBzZXJ2ZXMgYXMgYSB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMjg5Ni5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhc2tTdGF0ZVpvbmVJbnRlcmNlcHRvciB7XG4gIC8qKiBTdWJqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gZW1pdCBhIG5ldyBzdGF0ZSBjaGFuZ2UuICovXG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFRhc2tTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRhc2tTdGF0ZT4oXG4gICAgICB0aGlzLl9sYXN0U3RhdGUgPyB0aGlzLl9nZXRUYXNrU3RhdGVGcm9tSW50ZXJuYWxab25lU3RhdGUodGhpcy5fbGFzdFN0YXRlKSA6IHtzdGFibGU6IHRydWV9KTtcblxuICAvKiogUHVibGljIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgdGFzayBzdGF0ZSBjaGFuZ2VzLiAqL1xuICByZWFkb25seSBzdGF0ZTogT2JzZXJ2YWJsZTxUYXNrU3RhdGU+ID0gdGhpcy5fc3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xhc3RTdGF0ZTogSGFzVGFza1N0YXRlfG51bGwpIHt9XG5cbiAgLyoqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIHRhc2sgc3RhdGUgY2hhbmdlcyBpbiB0aGUgaW50ZXJjZXB0ZWQgem9uZS4gKi9cbiAgb25IYXNUYXNrKGRlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnQ6IFpvbmUsIHRhcmdldDogWm9uZSwgaGFzVGFza1N0YXRlOiBIYXNUYXNrU3RhdGUpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dCh0aGlzLl9nZXRUYXNrU3RhdGVGcm9tSW50ZXJuYWxab25lU3RhdGUoaGFzVGFza1N0YXRlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIHRhc2sgc3RhdGUgZnJvbSB0aGUgaW50ZXJuYWwgWm9uZUpTIHRhc2sgc3RhdGUuICovXG4gIHByaXZhdGUgX2dldFRhc2tTdGF0ZUZyb21JbnRlcm5hbFpvbmVTdGF0ZShzdGF0ZTogSGFzVGFza1N0YXRlKTogVGFza1N0YXRlIHtcbiAgICByZXR1cm4ge3N0YWJsZTogIXN0YXRlLm1hY3JvVGFzayAmJiAhc3RhdGUubWljcm9UYXNrfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIHRoZSBjdXN0b20gdGFzayBzdGF0ZSBab25lIGludGVyY2VwdG9yIGluIHRoZSAgYFByb3h5Wm9uZWAuIFRocm93cyBpZlxuICAgKiBubyBgUHJveHlab25lYCBjb3VsZCBiZSBmb3VuZC5cbiAgICogQHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSB0YXNrIHN0YXRlIGNoYW5nZXMuXG4gICAqL1xuICBzdGF0aWMgc2V0dXAoKTogT2JzZXJ2YWJsZTxUYXNrU3RhdGU+IHtcbiAgICBpZiAoWm9uZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgWm9uZUpTLiBGb3IgdGVzdCBoYXJuZXNzZXMgcnVubmluZyBpbiBUZXN0QmVkLCAnICtcbiAgICAgICAgJ1pvbmVKUyBuZWVkcyB0byBiZSBpbnN0YWxsZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBjb25zdCBQcm94eVpvbmVTcGVjID0gKFpvbmUgYXMgYW55KVsnUHJveHlab25lU3BlYyddIGFzIFByb3h5Wm9uZVN0YXRpY3x1bmRlZmluZWQ7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBcIlByb3h5Wm9uZVNwZWNcIiBpbnN0YWxsZWQsIHdlIHRocm93IGFuIGVycm9yIGFuZCByZWNvbW1lbmRcbiAgICAvLyBzZXR0aW5nIHVwIHRoZSBwcm94eSB6b25lIGJ5IHB1bGxpbmcgaW4gdGhlIHRlc3RpbmcgYnVuZGxlLlxuICAgIGlmICghUHJveHlab25lU3BlYykge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICdQcm94eVpvbmVTcGVjIGlzIG5lZWRlZCBmb3IgdGhlIHRlc3QgaGFybmVzc2VzIGJ1dCBjb3VsZCBub3QgYmUgZm91bmQuICcgK1xuICAgICAgICAnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgZW52aXJvbm1lbnQgaW5jbHVkZXMgem9uZS5qcy9kaXN0L3pvbmUtdGVzdGluZy5qcycpO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZXJlIGlzIGEgcHJveHkgem9uZSBpbnN0YW5jZSBzZXQgdXAsIGFuZCBnZXRcbiAgICAvLyBhIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2UgaWYgcHJlc2VudC5cbiAgICBjb25zdCB6b25lU3BlYyA9IFByb3h5Wm9uZVNwZWMuYXNzZXJ0UHJlc2VudCgpIGFzIFBhdGNoZWRQcm94eVpvbmU7XG5cbiAgICAvLyBJZiB0aGVyZSBhbHJlYWR5IGlzIGEgZGVsZWdhdGUgcmVnaXN0ZXJlZCBpbiB0aGUgcHJveHkgem9uZSwgYW5kIGl0XG4gICAgLy8gaXMgdHlwZSBvZiB0aGUgY3VzdG9tIHRhc2sgc3RhdGUgaW50ZXJjZXB0b3IsIHdlIGp1c3QgdXNlIHRoYXQgc3RhdGVcbiAgICAvLyBvYnNlcnZhYmxlLiBUaGlzIGFsbG93cyB1cyB0byBvbmx5IGludGVyY2VwdCBab25lIG9uY2UgcGVyIHRlc3RcbiAgICAvLyAoc2ltaWxhciB0byBob3cgYGZha2VBc3luY2Agb3IgYGFzeW5jYCB3b3JrKS5cbiAgICBpZiAoem9uZVNwZWNbc3RhdGVPYnNlcnZhYmxlU3ltYm9sXSkge1xuICAgICAgcmV0dXJuIHpvbmVTcGVjW3N0YXRlT2JzZXJ2YWJsZVN5bWJvbF0hO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHdlIGludGVyY2VwdCBvbiBlbnZpcm9ubWVudCBjcmVhdGlvbiBhbmQgdGhlIGZpeHR1cmUgaGFzIGJlZW5cbiAgICAvLyBjcmVhdGVkIGJlZm9yZSwgd2UgbWlnaHQgaGF2ZSBtaXNzZWQgdGFza3Mgc2NoZWR1bGVkIGJlZm9yZS4gRm9ydHVuYXRlbHlcbiAgICAvLyB0aGUgcHJveHkgem9uZSBrZWVwcyB0cmFjayBvZiB0aGUgcHJldmlvdXMgdGFzayBzdGF0ZSwgc28gd2UgY2FuIGp1c3QgcGFzc1xuICAgIC8vIHRoaXMgYXMgaW5pdGlhbCBzdGF0ZSB0byB0aGUgdGFzayB6b25lIGludGVyY2VwdG9yLlxuICAgIGNvbnN0IGludGVyY2VwdG9yID0gbmV3IFRhc2tTdGF0ZVpvbmVJbnRlcmNlcHRvcih6b25lU3BlYy5sYXN0VGFza1N0YXRlKTtcbiAgICBjb25zdCB6b25lU3BlY09uSGFzVGFzayA9IHpvbmVTcGVjLm9uSGFzVGFzay5iaW5kKHpvbmVTcGVjKTtcblxuICAgIC8vIFdlIHNldHVwIHRoZSB0YXNrIHN0YXRlIGludGVyY2VwdG9yIGluIHRoZSBgUHJveHlab25lYC4gTm90ZSB0aGF0IHdlIGNhbm5vdCByZWdpc3RlclxuICAgIC8vIHRoZSBpbnRlcmNlcHRvciBhcyBhIG5ldyBwcm94eSB6b25lIGRlbGVnYXRlIGJlY2F1c2UgaXQgd291bGQgbWVhbiB0aGF0IG90aGVyIHpvbmVcbiAgICAvLyBkZWxlZ2F0ZXMgKGUuZy4gYEZha2VBc3luY1Rlc3Rab25lYCBvciBgQXN5bmNUZXN0Wm9uZWApIGNhbiBhY2NpZGVudGFsbHkgb3ZlcndyaXRlL2Rpc2FibGVcbiAgICAvLyBvdXIgaW50ZXJjZXB0b3IuIFNpbmNlIHdlIGp1c3QgaW50ZW5kIHRvIG1vbml0b3IgdGhlIHRhc2sgc3RhdGUgb2YgdGhlIHByb3h5IHpvbmUsIGl0IGlzXG4gICAgLy8gc3VmZmljaWVudCB0byBqdXN0IHBhdGNoIHRoZSBwcm94eSB6b25lLiBUaGlzIGFsc28gYXZvaWRzIHRoYXQgd2UgaW50ZXJmZXJlIHdpdGggdGhlIHRhc2tcbiAgICAvLyBxdWV1ZSBzY2hlZHVsaW5nIGxvZ2ljLlxuICAgIHpvbmVTcGVjLm9uSGFzVGFzayA9IGZ1bmN0aW9uKC4uLmFyZ3M6IFtab25lRGVsZWdhdGUsIFpvbmUsIFpvbmUsIEhhc1Rhc2tTdGF0ZV0pIHtcbiAgICAgIHpvbmVTcGVjT25IYXNUYXNrKC4uLmFyZ3MpO1xuICAgICAgaW50ZXJjZXB0b3Iub25IYXNUYXNrKC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gem9uZVNwZWNbc3RhdGVPYnNlcnZhYmxlU3ltYm9sXSA9IGludGVyY2VwdG9yLnN0YXRlO1xuICB9XG59XG4iXX0=