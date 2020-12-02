/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/scroll/scroll-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
 * @record
 */
export function ScrollStrategy() { }
if (false) {
    /**
     * Enable this scroll strategy (called when the attached overlay is attached to a portal).
     * @type {?}
     */
    ScrollStrategy.prototype.enable;
    /**
     * Disable this scroll strategy (called when the attached overlay is detached from a portal).
     * @type {?}
     */
    ScrollStrategy.prototype.disable;
    /**
     * Attaches this `ScrollStrategy` to an overlay.
     * @type {?}
     */
    ScrollStrategy.prototype.attach;
    /**
     * Detaches the scroll strategy from the current overlay.
     * @type {?|undefined}
     */
    ScrollStrategy.prototype.detach;
}
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
export function getMatScrollStrategyAlreadyAttachedError() {
    return Error(`Scroll strategy has already been attached.`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9vdmVybGF5L3Njcm9sbC9zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLG9DQVlDOzs7Ozs7SUFWQyxnQ0FBbUI7Ozs7O0lBR25CLGlDQUFvQjs7Ozs7SUFHcEIsZ0NBQStDOzs7OztJQUcvQyxnQ0FBb0I7Ozs7OztBQU10QixNQUFNLFVBQVUsd0NBQXdDO0lBQ3RELE9BQU8sS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge092ZXJsYXlSZWZlcmVuY2V9IGZyb20gJy4uL292ZXJsYXktcmVmZXJlbmNlJztcblxuLyoqXG4gKiBEZXNjcmliZXMgYSBzdHJhdGVneSB0aGF0IHdpbGwgYmUgdXNlZCBieSBhbiBvdmVybGF5IHRvIGhhbmRsZSBzY3JvbGwgZXZlbnRzIHdoaWxlIGl0IGlzIG9wZW4uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsU3RyYXRlZ3kge1xuICAvKiogRW5hYmxlIHRoaXMgc2Nyb2xsIHN0cmF0ZWd5IChjYWxsZWQgd2hlbiB0aGUgYXR0YWNoZWQgb3ZlcmxheSBpcyBhdHRhY2hlZCB0byBhIHBvcnRhbCkuICovXG4gIGVuYWJsZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGlzYWJsZSB0aGlzIHNjcm9sbCBzdHJhdGVneSAoY2FsbGVkIHdoZW4gdGhlIGF0dGFjaGVkIG92ZXJsYXkgaXMgZGV0YWNoZWQgZnJvbSBhIHBvcnRhbCkuICovXG4gIGRpc2FibGU6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIEF0dGFjaGVzIHRoaXMgYFNjcm9sbFN0cmF0ZWd5YCB0byBhbiBvdmVybGF5LiAqL1xuICBhdHRhY2g6IChvdmVybGF5UmVmOiBPdmVybGF5UmVmZXJlbmNlKSA9PiB2b2lkO1xuXG4gIC8qKiBEZXRhY2hlcyB0aGUgc2Nyb2xsIHN0cmF0ZWd5IGZyb20gdGhlIGN1cnJlbnQgb3ZlcmxheS4gKi9cbiAgZGV0YWNoPzogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIGF0dGVtcHRpbmcgdG8gYXR0YWNoIGFuIGFscmVhZHktYXR0YWNoZWQgc2Nyb2xsIHN0cmF0ZWd5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF0U2Nyb2xsU3RyYXRlZ3lBbHJlYWR5QXR0YWNoZWRFcnJvcigpOiBFcnJvciB7XG4gIHJldHVybiBFcnJvcihgU2Nyb2xsIHN0cmF0ZWd5IGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNoZWQuYCk7XG59XG4iXX0=