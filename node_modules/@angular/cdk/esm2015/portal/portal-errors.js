/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/portal/portal-errors.ts
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
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
export function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
export function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
export function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
export function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
export function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
export function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvcG9ydGFsL3BvcnRhbC1lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLE1BQU0sS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDakQsQ0FBQzs7Ozs7O0FBTUQsTUFBTSxVQUFVLCtCQUErQjtJQUM3QyxNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3BELENBQUM7Ozs7OztBQU1ELE1BQU0sVUFBVSxxQ0FBcUM7SUFDbkQsTUFBTSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztBQUM3RCxDQUFDOzs7Ozs7QUFNRCxNQUFNLFVBQVUsMkJBQTJCO0lBQ3pDLE1BQU0sS0FBSyxDQUFDLCtFQUErRTtRQUMvRSx3Q0FBd0MsQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7OztBQU1ELE1BQU0sVUFBVSwwQkFBMEI7SUFDeEMsTUFBTSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUN0RSxDQUFDOzs7Ozs7QUFNRCxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLE1BQU0sS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7QUFDOUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFRocm93cyBhbiBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIGF0dGFjaCBhIG51bGwgcG9ydGFsIHRvIGEgaG9zdC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93TnVsbFBvcnRhbEVycm9yKCkge1xuICB0aHJvdyBFcnJvcignTXVzdCBwcm92aWRlIGEgcG9ydGFsIHRvIGF0dGFjaCcpO1xufVxuXG4vKipcbiAqIFRocm93cyBhbiBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIGF0dGFjaCBhIHBvcnRhbCB0byBhIGhvc3QgdGhhdCBpcyBhbHJlYWR5IGF0dGFjaGVkLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQb3J0YWxBbHJlYWR5QXR0YWNoZWRFcnJvcigpIHtcbiAgdGhyb3cgRXJyb3IoJ0hvc3QgYWxyZWFkeSBoYXMgYSBwb3J0YWwgYXR0YWNoZWQnKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4gYXR0ZW1wdGluZyB0byBhdHRhY2ggYSBwb3J0YWwgdG8gYW4gYWxyZWFkeS1kaXNwb3NlZCBob3N0LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQb3J0YWxPdXRsZXRBbHJlYWR5RGlzcG9zZWRFcnJvcigpIHtcbiAgdGhyb3cgRXJyb3IoJ1RoaXMgUG9ydGFsT3V0bGV0IGhhcyBhbHJlYWR5IGJlZW4gZGlzcG9zZWQnKTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4gYXR0ZW1wdGluZyB0byBhdHRhY2ggYW4gdW5rbm93biBwb3J0YWwgdHlwZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93VW5rbm93blBvcnRhbFR5cGVFcnJvcigpIHtcbiAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIGFuIHVua25vd24gUG9ydGFsIHR5cGUuIEJhc2VQb3J0YWxPdXRsZXQgYWNjZXB0cyBlaXRoZXIgJyArXG4gICAgICAgICAgICAgICdhIENvbXBvbmVudFBvcnRhbCBvciBhIFRlbXBsYXRlUG9ydGFsLicpO1xufVxuXG4vKipcbiAqIFRocm93cyBhbiBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIGF0dGFjaCBhIHBvcnRhbCB0byBhIG51bGwgaG9zdC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93TnVsbFBvcnRhbE91dGxldEVycm9yKCkge1xuICB0aHJvdyBFcnJvcignQXR0ZW1wdGluZyB0byBhdHRhY2ggYSBwb3J0YWwgdG8gYSBudWxsIFBvcnRhbE91dGxldCcpO1xufVxuXG4vKipcbiAqIFRocm93cyBhbiBleGNlcHRpb24gd2hlbiBhdHRlbXB0aW5nIHRvIGRldGFjaCBhIHBvcnRhbCB0aGF0IGlzIG5vdCBhdHRhY2hlZC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93Tm9Qb3J0YWxBdHRhY2hlZEVycm9yKCkge1xuICB0aHJvdyBFcnJvcignQXR0ZW1wdGluZyB0byBkZXRhY2ggYSBwb3J0YWwgdGhhdCBpcyBub3QgYXR0YWNoZWQgdG8gYSBob3N0Jyk7XG59XG4iXX0=