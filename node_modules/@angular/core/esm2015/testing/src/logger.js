/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
export class Log {
    constructor() {
        this.logItems = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    add(value /** TODO #9100 */) {
        this.logItems.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fn(value /** TODO #9100 */) {
        return (/**
         * @param {?=} a1
         * @param {?=} a2
         * @param {?=} a3
         * @param {?=} a4
         * @param {?=} a5
         * @return {?}
         */
        (a1 = null, a2 = null, a3 = null, a4 = null, a5 = null) => {
            this.logItems.push(value);
        });
    }
    /**
     * @return {?}
     */
    clear() {
        this.logItems = [];
    }
    /**
     * @return {?}
     */
    result() {
        return this.logItems.join('; ');
    }
}
Log.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Log.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    Log.prototype.logItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxNQUFNLE9BQU8sR0FBRztJQUdkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBVSxDQUFDLGlCQUFpQjtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELEVBQUUsQ0FBQyxLQUFVLENBQUMsaUJBQWlCO1FBQzdCOzs7Ozs7OztRQUFPLENBQUMsS0FBVSxJQUFJLEVBQUUsS0FBVSxJQUFJLEVBQUUsS0FBVSxJQUFJLEVBQUUsS0FBVSxJQUFJLEVBQUUsS0FBVSxJQUFJLEVBQUUsRUFBRTtZQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUM7SUFDSixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUF4QkYsVUFBVTs7Ozs7O0lBRVQsdUJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgbG9nSXRlbXM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9nSXRlbXMgPSBbXTtcbiAgfVxuXG4gIGFkZCh2YWx1ZTogYW55IC8qKiBUT0RPICM5MTAwICovKTogdm9pZCB7XG4gICAgdGhpcy5sb2dJdGVtcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIGZuKHZhbHVlOiBhbnkgLyoqIFRPRE8gIzkxMDAgKi8pIHtcbiAgICByZXR1cm4gKGExOiBhbnkgPSBudWxsLCBhMjogYW55ID0gbnVsbCwgYTM6IGFueSA9IG51bGwsIGE0OiBhbnkgPSBudWxsLCBhNTogYW55ID0gbnVsbCkgPT4ge1xuICAgICAgdGhpcy5sb2dJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dJdGVtcyA9IFtdO1xuICB9XG5cbiAgcmVzdWx0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9nSXRlbXMuam9pbignOyAnKTtcbiAgfVxufVxuIl19