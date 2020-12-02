/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BehaviorSubject } from 'rxjs';
/** Unique symbol that is used to patch a property to a proxy zone. */
const stateObservableSymbol = Symbol('ProxyZone_PATCHED#stateObservable');
/**
 * Interceptor that can be set up in a `ProxyZone` instance. The interceptor
 * will keep track of the task state and emit whenever the state changes.
 *
 * This serves as a workaround for https://github.com/angular/angular/issues/32896.
 */
export class TaskStateZoneInterceptor {
    constructor(_lastState) {
        this._lastState = _lastState;
        /** Subject that can be used to emit a new state change. */
        this._stateSubject = new BehaviorSubject(this._lastState ? this._getTaskStateFromInternalZoneState(this._lastState) : { stable: true });
        /** Public observable that emits whenever the task state changes. */
        this.state = this._stateSubject.asObservable();
    }
    /** This will be called whenever the task state changes in the intercepted zone. */
    onHasTask(delegate, current, target, hasTaskState) {
        if (current === target) {
            this._stateSubject.next(this._getTaskStateFromInternalZoneState(hasTaskState));
        }
    }
    /** Gets the task state from the internal ZoneJS task state. */
    _getTaskStateFromInternalZoneState(state) {
        return { stable: !state.macroTask && !state.microTask };
    }
    /**
     * Sets up the custom task state Zone interceptor in the  `ProxyZone`. Throws if
     * no `ProxyZone` could be found.
     * @returns an observable that emits whenever the task state changes.
     */
    static setup() {
        if (Zone === undefined) {
            throw Error('Could not find ZoneJS. For test harnesses running in TestBed, ' +
                'ZoneJS needs to be installed.');
        }
        // tslint:disable-next-line:variable-name
        const ProxyZoneSpec = Zone['ProxyZoneSpec'];
        // If there is no "ProxyZoneSpec" installed, we throw an error and recommend
        // setting up the proxy zone by pulling in the testing bundle.
        if (!ProxyZoneSpec) {
            throw Error('ProxyZoneSpec is needed for the test harnesses but could not be found. ' +
                'Please make sure that your environment includes zone.js/dist/zone-testing.js');
        }
        // Ensure that there is a proxy zone instance set up, and get
        // a reference to the instance if present.
        const zoneSpec = ProxyZoneSpec.assertPresent();
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
        const interceptor = new TaskStateZoneInterceptor(zoneSpec.lastTaskState);
        const zoneSpecOnHasTask = zoneSpec.onHasTask.bind(zoneSpec);
        // We setup the task state interceptor in the `ProxyZone`. Note that we cannot register
        // the interceptor as a new proxy zone delegate because it would mean that other zone
        // delegates (e.g. `FakeAsyncTestZone` or `AsyncTestZone`) can accidentally overwrite/disable
        // our interceptor. Since we just intend to monitor the task state of the proxy zone, it is
        // sufficient to just patch the proxy zone. This also avoids that we interfere with the task
        // queue scheduling logic.
        zoneSpec.onHasTask = function (...args) {
            zoneSpecOnHasTask(...args);
            interceptor.onHasTask(...args);
        };
        return zoneSpec[stateObservableSymbol] = interceptor.state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdGF0ZS16b25lLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90ZXN0aW5nL3Rlc3RiZWQvdGFzay1zdGF0ZS16b25lLWludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFTakQsc0VBQXNFO0FBQ3RFLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFPMUU7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sd0JBQXdCO0lBUW5DLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBUGpELDJEQUEyRDtRQUNuRCxrQkFBYSxHQUErQixJQUFJLGVBQWUsQ0FDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUVqRyxvRUFBb0U7UUFDM0QsVUFBSyxHQUEwQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFFckQsbUZBQW1GO0lBQ25GLFNBQVMsQ0FBQyxRQUFzQixFQUFFLE9BQWEsRUFBRSxNQUFZLEVBQUUsWUFBMEI7UUFDdkYsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUVELCtEQUErRDtJQUN2RCxrQ0FBa0MsQ0FBQyxLQUFtQjtRQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sS0FBSyxDQUFDLGdFQUFnRTtnQkFDMUUsK0JBQStCLENBQUMsQ0FBQztTQUNwQztRQUVELHlDQUF5QztRQUN6QyxNQUFNLGFBQWEsR0FBSSxJQUFZLENBQUMsZUFBZSxDQUE4QixDQUFDO1FBRWxGLDRFQUE0RTtRQUM1RSw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLEtBQUssQ0FDVCx5RUFBeUU7Z0JBQ3pFLDhFQUE4RSxDQUFDLENBQUM7U0FDbkY7UUFFRCw2REFBNkQ7UUFDN0QsMENBQTBDO1FBQzFDLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxhQUFhLEVBQXNCLENBQUM7UUFFbkUsc0VBQXNFO1FBQ3RFLHVFQUF1RTtRQUN2RSxrRUFBa0U7UUFDbEUsZ0RBQWdEO1FBQ2hELElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDbkMsT0FBTyxRQUFRLENBQUMscUJBQXFCLENBQUUsQ0FBQztTQUN6QztRQUVELHNFQUFzRTtRQUN0RSwyRUFBMkU7UUFDM0UsNkVBQTZFO1FBQzdFLHNEQUFzRDtRQUN0RCxNQUFNLFdBQVcsR0FBRyxJQUFJLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RSxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVELHVGQUF1RjtRQUN2RixxRkFBcUY7UUFDckYsNkZBQTZGO1FBQzdGLDJGQUEyRjtRQUMzRiw0RkFBNEY7UUFDNUYsMEJBQTBCO1FBQzFCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBUyxHQUFHLElBQThDO1lBQzdFLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUM3RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQcm94eVpvbmUsIFByb3h5Wm9uZVN0YXRpY30gZnJvbSAnLi9wcm94eS16b25lLXR5cGVzJztcblxuLyoqIEN1cnJlbnQgc3RhdGUgb2YgdGhlIGludGVyY2VwdGVkIHpvbmUuICovXG5leHBvcnQgaW50ZXJmYWNlIFRhc2tTdGF0ZSB7XG4gIC8qKiBXaGV0aGVyIHRoZSB6b25lIGlzIHN0YWJsZSAoaS5lLiBubyBtaWNyb3Rhc2tzIGFuZCBtYWNyb3Rhc2tzKS4gKi9cbiAgc3RhYmxlOiBib29sZWFuO1xufVxuXG4vKiogVW5pcXVlIHN5bWJvbCB0aGF0IGlzIHVzZWQgdG8gcGF0Y2ggYSBwcm9wZXJ0eSB0byBhIHByb3h5IHpvbmUuICovXG5jb25zdCBzdGF0ZU9ic2VydmFibGVTeW1ib2wgPSBTeW1ib2woJ1Byb3h5Wm9uZV9QQVRDSEVEI3N0YXRlT2JzZXJ2YWJsZScpO1xuXG4vKiogVHlwZSB0aGF0IGRlc2NyaWJlcyBhIHBvdGVudGlhbGx5IHBhdGNoZWQgcHJveHkgem9uZSBpbnN0YW5jZS4gKi9cbnR5cGUgUGF0Y2hlZFByb3h5Wm9uZSA9IFByb3h5Wm9uZSAmIHtcbiAgW3N0YXRlT2JzZXJ2YWJsZVN5bWJvbF06IHVuZGVmaW5lZHxPYnNlcnZhYmxlPFRhc2tTdGF0ZT47XG59O1xuXG4vKipcbiAqIEludGVyY2VwdG9yIHRoYXQgY2FuIGJlIHNldCB1cCBpbiBhIGBQcm94eVpvbmVgIGluc3RhbmNlLiBUaGUgaW50ZXJjZXB0b3JcbiAqIHdpbGwga2VlcCB0cmFjayBvZiB0aGUgdGFzayBzdGF0ZSBhbmQgZW1pdCB3aGVuZXZlciB0aGUgc3RhdGUgY2hhbmdlcy5cbiAqXG4gKiBUaGlzIHNlcnZlcyBhcyBhIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMyODk2LlxuICovXG5leHBvcnQgY2xhc3MgVGFza1N0YXRlWm9uZUludGVyY2VwdG9yIHtcbiAgLyoqIFN1YmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBlbWl0IGEgbmV3IHN0YXRlIGNoYW5nZS4gKi9cbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8VGFza1N0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGFza1N0YXRlPihcbiAgICAgIHRoaXMuX2xhc3RTdGF0ZSA/IHRoaXMuX2dldFRhc2tTdGF0ZUZyb21JbnRlcm5hbFpvbmVTdGF0ZSh0aGlzLl9sYXN0U3RhdGUpIDoge3N0YWJsZTogdHJ1ZX0pO1xuXG4gIC8qKiBQdWJsaWMgb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSB0YXNrIHN0YXRlIGNoYW5nZXMuICovXG4gIHJlYWRvbmx5IHN0YXRlOiBPYnNlcnZhYmxlPFRhc2tTdGF0ZT4gPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbGFzdFN0YXRlOiBIYXNUYXNrU3RhdGV8bnVsbCkge31cblxuICAvKiogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgdGFzayBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBpbnRlcmNlcHRlZCB6b25lLiAqL1xuICBvbkhhc1Rhc2soZGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudDogWm9uZSwgdGFyZ2V0OiBab25lLCBoYXNUYXNrU3RhdGU6IEhhc1Rhc2tTdGF0ZSkge1xuICAgIGlmIChjdXJyZW50ID09PSB0YXJnZXQpIHtcbiAgICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHRoaXMuX2dldFRhc2tTdGF0ZUZyb21JbnRlcm5hbFpvbmVTdGF0ZShoYXNUYXNrU3RhdGUpKTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0cyB0aGUgdGFzayBzdGF0ZSBmcm9tIHRoZSBpbnRlcm5hbCBab25lSlMgdGFzayBzdGF0ZS4gKi9cbiAgcHJpdmF0ZSBfZ2V0VGFza1N0YXRlRnJvbUludGVybmFsWm9uZVN0YXRlKHN0YXRlOiBIYXNUYXNrU3RhdGUpOiBUYXNrU3RhdGUge1xuICAgIHJldHVybiB7c3RhYmxlOiAhc3RhdGUubWFjcm9UYXNrICYmICFzdGF0ZS5taWNyb1Rhc2t9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIGN1c3RvbSB0YXNrIHN0YXRlIFpvbmUgaW50ZXJjZXB0b3IgaW4gdGhlICBgUHJveHlab25lYC4gVGhyb3dzIGlmXG4gICAqIG5vIGBQcm94eVpvbmVgIGNvdWxkIGJlIGZvdW5kLlxuICAgKiBAcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHRhc2sgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIHN0YXRpYyBzZXR1cCgpOiBPYnNlcnZhYmxlPFRhc2tTdGF0ZT4ge1xuICAgIGlmIChab25lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmluZCBab25lSlMuIEZvciB0ZXN0IGhhcm5lc3NlcyBydW5uaW5nIGluIFRlc3RCZWQsICcgK1xuICAgICAgICAnWm9uZUpTIG5lZWRzIHRvIGJlIGluc3RhbGxlZC4nKTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIGNvbnN0IFByb3h5Wm9uZVNwZWMgPSAoWm9uZSBhcyBhbnkpWydQcm94eVpvbmVTcGVjJ10gYXMgUHJveHlab25lU3RhdGljfHVuZGVmaW5lZDtcblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIFwiUHJveHlab25lU3BlY1wiIGluc3RhbGxlZCwgd2UgdGhyb3cgYW4gZXJyb3IgYW5kIHJlY29tbWVuZFxuICAgIC8vIHNldHRpbmcgdXAgdGhlIHByb3h5IHpvbmUgYnkgcHVsbGluZyBpbiB0aGUgdGVzdGluZyBidW5kbGUuXG4gICAgaWYgKCFQcm94eVpvbmVTcGVjKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgJ1Byb3h5Wm9uZVNwZWMgaXMgbmVlZGVkIGZvciB0aGUgdGVzdCBoYXJuZXNzZXMgYnV0IGNvdWxkIG5vdCBiZSBmb3VuZC4gJyArXG4gICAgICAgICdQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91ciBlbnZpcm9ubWVudCBpbmNsdWRlcyB6b25lLmpzL2Rpc3Qvem9uZS10ZXN0aW5nLmpzJyk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlcmUgaXMgYSBwcm94eSB6b25lIGluc3RhbmNlIHNldCB1cCwgYW5kIGdldFxuICAgIC8vIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBpZiBwcmVzZW50LlxuICAgIGNvbnN0IHpvbmVTcGVjID0gUHJveHlab25lU3BlYy5hc3NlcnRQcmVzZW50KCkgYXMgUGF0Y2hlZFByb3h5Wm9uZTtcblxuICAgIC8vIElmIHRoZXJlIGFscmVhZHkgaXMgYSBkZWxlZ2F0ZSByZWdpc3RlcmVkIGluIHRoZSBwcm94eSB6b25lLCBhbmQgaXRcbiAgICAvLyBpcyB0eXBlIG9mIHRoZSBjdXN0b20gdGFzayBzdGF0ZSBpbnRlcmNlcHRvciwgd2UganVzdCB1c2UgdGhhdCBzdGF0ZVxuICAgIC8vIG9ic2VydmFibGUuIFRoaXMgYWxsb3dzIHVzIHRvIG9ubHkgaW50ZXJjZXB0IFpvbmUgb25jZSBwZXIgdGVzdFxuICAgIC8vIChzaW1pbGFyIHRvIGhvdyBgZmFrZUFzeW5jYCBvciBgYXN5bmNgIHdvcmspLlxuICAgIGlmICh6b25lU3BlY1tzdGF0ZU9ic2VydmFibGVTeW1ib2xdKSB7XG4gICAgICByZXR1cm4gem9uZVNwZWNbc3RhdGVPYnNlcnZhYmxlU3ltYm9sXSE7XG4gICAgfVxuXG4gICAgLy8gU2luY2Ugd2UgaW50ZXJjZXB0IG9uIGVudmlyb25tZW50IGNyZWF0aW9uIGFuZCB0aGUgZml4dHVyZSBoYXMgYmVlblxuICAgIC8vIGNyZWF0ZWQgYmVmb3JlLCB3ZSBtaWdodCBoYXZlIG1pc3NlZCB0YXNrcyBzY2hlZHVsZWQgYmVmb3JlLiBGb3J0dW5hdGVseVxuICAgIC8vIHRoZSBwcm94eSB6b25lIGtlZXBzIHRyYWNrIG9mIHRoZSBwcmV2aW91cyB0YXNrIHN0YXRlLCBzbyB3ZSBjYW4ganVzdCBwYXNzXG4gICAgLy8gdGhpcyBhcyBpbml0aWFsIHN0YXRlIHRvIHRoZSB0YXNrIHpvbmUgaW50ZXJjZXB0b3IuXG4gICAgY29uc3QgaW50ZXJjZXB0b3IgPSBuZXcgVGFza1N0YXRlWm9uZUludGVyY2VwdG9yKHpvbmVTcGVjLmxhc3RUYXNrU3RhdGUpO1xuICAgIGNvbnN0IHpvbmVTcGVjT25IYXNUYXNrID0gem9uZVNwZWMub25IYXNUYXNrLmJpbmQoem9uZVNwZWMpO1xuXG4gICAgLy8gV2Ugc2V0dXAgdGhlIHRhc2sgc3RhdGUgaW50ZXJjZXB0b3IgaW4gdGhlIGBQcm94eVpvbmVgLiBOb3RlIHRoYXQgd2UgY2Fubm90IHJlZ2lzdGVyXG4gICAgLy8gdGhlIGludGVyY2VwdG9yIGFzIGEgbmV3IHByb3h5IHpvbmUgZGVsZWdhdGUgYmVjYXVzZSBpdCB3b3VsZCBtZWFuIHRoYXQgb3RoZXIgem9uZVxuICAgIC8vIGRlbGVnYXRlcyAoZS5nLiBgRmFrZUFzeW5jVGVzdFpvbmVgIG9yIGBBc3luY1Rlc3Rab25lYCkgY2FuIGFjY2lkZW50YWxseSBvdmVyd3JpdGUvZGlzYWJsZVxuICAgIC8vIG91ciBpbnRlcmNlcHRvci4gU2luY2Ugd2UganVzdCBpbnRlbmQgdG8gbW9uaXRvciB0aGUgdGFzayBzdGF0ZSBvZiB0aGUgcHJveHkgem9uZSwgaXQgaXNcbiAgICAvLyBzdWZmaWNpZW50IHRvIGp1c3QgcGF0Y2ggdGhlIHByb3h5IHpvbmUuIFRoaXMgYWxzbyBhdm9pZHMgdGhhdCB3ZSBpbnRlcmZlcmUgd2l0aCB0aGUgdGFza1xuICAgIC8vIHF1ZXVlIHNjaGVkdWxpbmcgbG9naWMuXG4gICAgem9uZVNwZWMub25IYXNUYXNrID0gZnVuY3Rpb24oLi4uYXJnczogW1pvbmVEZWxlZ2F0ZSwgWm9uZSwgWm9uZSwgSGFzVGFza1N0YXRlXSkge1xuICAgICAgem9uZVNwZWNPbkhhc1Rhc2soLi4uYXJncyk7XG4gICAgICBpbnRlcmNlcHRvci5vbkhhc1Rhc2soLi4uYXJncyk7XG4gICAgfTtcblxuICAgIHJldHVybiB6b25lU3BlY1tzdGF0ZU9ic2VydmFibGVTeW1ib2xdID0gaW50ZXJjZXB0b3Iuc3RhdGU7XG4gIH1cbn1cbiJdfQ==