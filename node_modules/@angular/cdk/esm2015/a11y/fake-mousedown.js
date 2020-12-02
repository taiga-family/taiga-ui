/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/fake-mousedown.ts
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
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
export function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1tb3VzZWRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvZmFrZS1tb3VzZWRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsTUFBTSxVQUFVLCtCQUErQixDQUFDLEtBQWlCO0lBQy9ELE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFNjcmVlbnJlYWRlcnMgd2lsbCBvZnRlbiBmaXJlIGZha2UgbW91c2Vkb3duIGV2ZW50cyB3aGVuIGEgZm9jdXNhYmxlIGVsZW1lbnRcbiAqIGlzIGFjdGl2YXRlZCB1c2luZyB0aGUga2V5Ym9hcmQuIFdlIGNhbiB0eXBpY2FsbHkgZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVzZSBmYWtlZFxuICogbW91c2Vkb3duIGV2ZW50cyBhbmQgcmVhbCBtb3VzZWRvd24gZXZlbnRzIHVzaW5nIHRoZSBcImJ1dHRvbnNcIiBwcm9wZXJ0eS4gV2hpbGVcbiAqIHJlYWwgbW91c2Vkb3ducyB3aWxsIGluZGljYXRlIHRoZSBtb3VzZSBidXR0b24gdGhhdCB3YXMgcHJlc3NlZCAoZS5nLiBcIjFcIiBmb3JcbiAqIHRoZSBsZWZ0IG1vdXNlIGJ1dHRvbiksIGZha2VkIG1vdXNlZG93bnMgd2lsbCB1c3VhbGx5IHNldCB0aGUgcHJvcGVydHkgdmFsdWUgdG8gMC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmFrZU1vdXNlZG93bkZyb21TY3JlZW5SZWFkZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbnMgPT09IDA7XG59XG4iXX0=