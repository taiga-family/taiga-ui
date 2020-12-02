/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/http.ts
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
const xhr2 = require('xhr2');
import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpBackend, XhrFactory, ɵHttpInterceptingHandler as HttpInterceptingHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
export class ServerXhr {
    /**
     * @return {?}
     */
    build() {
        return new xhr2.XMLHttpRequest();
    }
}
ServerXhr.decorators = [
    { type: Injectable }
];
/**
 * @abstract
 * @template S, R
 */
export class ZoneMacroTaskWrapper {
    /**
     * @param {?} request
     * @return {?}
     */
    wrap(request) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let task = (/** @type {?} */ (null));
            /** @type {?} */
            let scheduled = false;
            /** @type {?} */
            let sub = null;
            /** @type {?} */
            let savedResult = null;
            /** @type {?} */
            let savedError = null;
            /** @type {?} */
            const scheduleTask = (/**
             * @param {?} _task
             * @return {?}
             */
            (_task) => {
                task = _task;
                scheduled = true;
                /** @type {?} */
                const delegate = this.delegate(request);
                sub = delegate.subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => savedResult = res), (/**
                 * @param {?} err
                 * @return {?}
                 */
                err => {
                    if (!scheduled) {
                        throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                    }
                    savedError = err;
                    scheduled = false;
                    task.invoke();
                }), (/**
                 * @return {?}
                 */
                () => {
                    if (!scheduled) {
                        throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                    }
                    scheduled = false;
                    task.invoke();
                }));
            });
            /** @type {?} */
            const cancelTask = (/**
             * @param {?} _task
             * @return {?}
             */
            (_task) => {
                if (!scheduled) {
                    return;
                }
                scheduled = false;
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            });
            /** @type {?} */
            const onComplete = (/**
             * @return {?}
             */
            () => {
                if (savedError !== null) {
                    observer.error(savedError);
                }
                else {
                    observer.next(savedResult);
                    observer.complete();
                }
            });
            // MockBackend for Http is synchronous, which means that if scheduleTask is by
            // scheduleMacroTask, the request will hit MockBackend and the response will be
            // sent, causing task.invoke() to be called.
            /** @type {?} */
            const _task = Zone.current.scheduleMacroTask('ZoneMacroTaskWrapper.subscribe', onComplete, {}, (/**
             * @return {?}
             */
            () => null), cancelTask);
            scheduleTask(_task);
            return (/**
             * @return {?}
             */
            () => {
                if (scheduled && task) {
                    task.zone.cancelTask(task);
                    scheduled = false;
                }
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            });
        }));
    }
}
if (false) {
    /**
     * @abstract
     * @protected
     * @param {?} request
     * @return {?}
     */
    ZoneMacroTaskWrapper.prototype.delegate = function (request) { };
}
export class ZoneClientBackend extends ZoneMacroTaskWrapper {
    /**
     * @param {?} backend
     */
    constructor(backend) {
        super();
        this.backend = backend;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    handle(request) {
        return this.wrap(request);
    }
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    delegate(request) {
        return this.backend.handle(request);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ZoneClientBackend.prototype.backend;
}
/**
 * @param {?} backend
 * @param {?} injector
 * @return {?}
 */
export function zoneWrappedInterceptingHandler(backend, injector) {
    /** @type {?} */
    const realBackend = new HttpInterceptingHandler(backend, injector);
    return new ZoneClientBackend(realBackend);
}
/** @type {?} */
export const SERVER_HTTP_PROVIDERS = [
    { provide: XhrFactory, useClass: ServerXhr },
    { provide: HttpHandler, useFactory: zoneWrappedInterceptingHandler, deps: [HttpBackend, Injector] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLXNlcnZlci9zcmMvaHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BU00sSUFBSSxHQUFRLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFFakMsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUF5QixXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsSUFBSSx1QkFBdUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZKLE9BQU8sRUFBQyxVQUFVLEVBQXlCLE1BQU0sTUFBTSxDQUFDO0FBR3hELE1BQU0sT0FBTyxTQUFTOzs7O0lBQ3BCLEtBQUs7UUFDSCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQUpGLFVBQVU7Ozs7OztBQU9YLE1BQU0sT0FBZ0Isb0JBQW9COzs7OztJQUN4QyxJQUFJLENBQUMsT0FBVTtRQUNiLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUFxQixFQUFFLEVBQUU7O2dCQUMxQyxJQUFJLEdBQVMsbUJBQUEsSUFBSSxFQUFDOztnQkFDbEIsU0FBUyxHQUFZLEtBQUs7O2dCQUMxQixHQUFHLEdBQXNCLElBQUk7O2dCQUM3QixXQUFXLEdBQVEsSUFBSTs7Z0JBQ3ZCLFVBQVUsR0FBUSxJQUFJOztrQkFFcEIsWUFBWTs7OztZQUFHLENBQUMsS0FBVyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2IsU0FBUyxHQUFHLElBQUksQ0FBQzs7c0JBRVgsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVM7Ozs7Z0JBQ3BCLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLEdBQUc7Ozs7Z0JBQ3hCLEdBQUcsQ0FBQyxFQUFFO29CQUNKLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCxvRkFBb0YsQ0FBQyxDQUFDO3FCQUMzRjtvQkFDRCxVQUFVLEdBQUcsR0FBRyxDQUFDO29CQUNqQixTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7OztnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDZCxNQUFNLElBQUksS0FBSyxDQUNYLG9GQUFvRixDQUFDLENBQUM7cUJBQzNGO29CQUNELFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQyxFQUFDLENBQUM7WUFDVCxDQUFDLENBQUE7O2tCQUVLLFVBQVU7Ozs7WUFBRyxDQUFDLEtBQVcsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNkLE9BQU87aUJBQ1I7Z0JBQ0QsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDO2lCQUNaO1lBQ0gsQ0FBQyxDQUFBOztrQkFFSyxVQUFVOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtvQkFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDNUI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDM0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQTs7Ozs7a0JBS0ssS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQ3hDLGdDQUFnQyxFQUFFLFVBQVUsRUFBRSxFQUFFOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUUsVUFBVSxDQUFDO1lBQzdFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwQjs7O1lBQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtvQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ25CO2dCQUNELElBQUksR0FBRyxFQUFFO29CQUNQLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQztpQkFDWjtZQUNILENBQUMsRUFBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUdGOzs7Ozs7OztJQURDLGlFQUF1RDs7QUFHekQsTUFBTSxPQUFPLGlCQUFrQixTQUMzQixvQkFBc0Q7Ozs7SUFDeEQsWUFBb0IsT0FBb0I7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFEVSxZQUFPLEdBQVAsT0FBTyxDQUFhO0lBRXhDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQXlCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFUyxRQUFRLENBQUMsT0FBeUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7Ozs7OztJQVhhLG9DQUE0Qjs7Ozs7OztBQWExQyxNQUFNLFVBQVUsOEJBQThCLENBQUMsT0FBb0IsRUFBRSxRQUFrQjs7VUFDL0UsV0FBVyxHQUFnQixJQUFJLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDL0UsT0FBTyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVDLENBQUM7O0FBRUQsTUFBTSxPQUFPLHFCQUFxQixHQUFlO0lBQy9DLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO0lBQzFDLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFDO0NBQ2xHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmNvbnN0IHhocjI6IGFueSA9IHJlcXVpcmUoJ3hocjInKTtcblxuaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3RvciwgUHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0h0dHBFdmVudCwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSwgybVIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciBhcyBIdHRwSW50ZXJjZXB0aW5nSGFuZGxlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyWGhyIGltcGxlbWVudHMgWGhyRmFjdG9yeSB7XG4gIGJ1aWxkKCk6IFhNTEh0dHBSZXF1ZXN0IHtcbiAgICByZXR1cm4gbmV3IHhocjIuWE1MSHR0cFJlcXVlc3QoKTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgWm9uZU1hY3JvVGFza1dyYXBwZXI8UywgUj4ge1xuICB3cmFwKHJlcXVlc3Q6IFMpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxSPikgPT4ge1xuICAgICAgbGV0IHRhc2s6IFRhc2sgPSBudWxsITtcbiAgICAgIGxldCBzY2hlZHVsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGxldCBzdWI6IFN1YnNjcmlwdGlvbnxudWxsID0gbnVsbDtcbiAgICAgIGxldCBzYXZlZFJlc3VsdDogYW55ID0gbnVsbDtcbiAgICAgIGxldCBzYXZlZEVycm9yOiBhbnkgPSBudWxsO1xuXG4gICAgICBjb25zdCBzY2hlZHVsZVRhc2sgPSAoX3Rhc2s6IFRhc2spID0+IHtcbiAgICAgICAgdGFzayA9IF90YXNrO1xuICAgICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZShyZXF1ZXN0KTtcbiAgICAgICAgc3ViID0gZGVsZWdhdGUuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHNhdmVkUmVzdWx0ID0gcmVzLFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBbiBodHRwIG9ic2VydmFibGUgd2FzIGNvbXBsZXRlZCB0d2ljZS4gVGhpcyBzaG91bGRuXFwndCBoYXBwZW4sIHBsZWFzZSBmaWxlIGEgYnVnLicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNhdmVkRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBbiBodHRwIG9ic2VydmFibGUgd2FzIGNvbXBsZXRlZCB0d2ljZS4gVGhpcyBzaG91bGRuXFwndCBoYXBwZW4sIHBsZWFzZSBmaWxlIGEgYnVnLicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjYW5jZWxUYXNrID0gKF90YXNrOiBUYXNrKSA9PiB7XG4gICAgICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoc3ViKSB7XG4gICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgc3ViID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNhdmVkRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihzYXZlZEVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHNhdmVkUmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBNb2NrQmFja2VuZCBmb3IgSHR0cCBpcyBzeW5jaHJvbm91cywgd2hpY2ggbWVhbnMgdGhhdCBpZiBzY2hlZHVsZVRhc2sgaXMgYnlcbiAgICAgIC8vIHNjaGVkdWxlTWFjcm9UYXNrLCB0aGUgcmVxdWVzdCB3aWxsIGhpdCBNb2NrQmFja2VuZCBhbmQgdGhlIHJlc3BvbnNlIHdpbGwgYmVcbiAgICAgIC8vIHNlbnQsIGNhdXNpbmcgdGFzay5pbnZva2UoKSB0byBiZSBjYWxsZWQuXG4gICAgICBjb25zdCBfdGFzayA9IFpvbmUuY3VycmVudC5zY2hlZHVsZU1hY3JvVGFzayhcbiAgICAgICAgICAnWm9uZU1hY3JvVGFza1dyYXBwZXIuc3Vic2NyaWJlJywgb25Db21wbGV0ZSwge30sICgpID0+IG51bGwsIGNhbmNlbFRhc2spO1xuICAgICAgc2NoZWR1bGVUYXNrKF90YXNrKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKHNjaGVkdWxlZCAmJiB0YXNrKSB7XG4gICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIHN1YiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZWdhdGUocmVxdWVzdDogUyk6IE9ic2VydmFibGU8Uj47XG59XG5cbmV4cG9ydCBjbGFzcyBab25lQ2xpZW50QmFja2VuZCBleHRlbmRzXG4gICAgWm9uZU1hY3JvVGFza1dyYXBwZXI8SHR0cFJlcXVlc3Q8YW55PiwgSHR0cEV2ZW50PGFueT4+IGltcGxlbWVudHMgSHR0cEJhY2tlbmQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmQ6IEh0dHBCYWNrZW5kKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGhhbmRsZShyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLndyYXAocmVxdWVzdCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVsZWdhdGUocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5iYWNrZW5kLmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gem9uZVdyYXBwZWRJbnRlcmNlcHRpbmdIYW5kbGVyKGJhY2tlbmQ6IEh0dHBCYWNrZW5kLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVhbEJhY2tlbmQ6IEh0dHBCYWNrZW5kID0gbmV3IEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyKGJhY2tlbmQsIGluamVjdG9yKTtcbiAgcmV0dXJuIG5ldyBab25lQ2xpZW50QmFja2VuZChyZWFsQmFja2VuZCk7XG59XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfSFRUUF9QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIHtwcm92aWRlOiBYaHJGYWN0b3J5LCB1c2VDbGFzczogU2VydmVyWGhyfSxcbiAge3Byb3ZpZGU6IEh0dHBIYW5kbGVyLCB1c2VGYWN0b3J5OiB6b25lV3JhcHBlZEludGVyY2VwdGluZ0hhbmRsZXIsIGRlcHM6IFtIdHRwQmFja2VuZCwgSW5qZWN0b3JdfVxuXTtcbiJdfQ==