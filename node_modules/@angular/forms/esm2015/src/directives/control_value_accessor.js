/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/control_value_accessor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * \@description
 * Defines an interface that acts as a bridge between the Angular forms API and a
 * native element in the DOM.
 *
 * Implement this interface to create a custom form control directive
 * that integrates with Angular forms.
 *
 * @see DefaultValueAccessor
 *
 * \@publicApi
 * @record
 */
export function ControlValueAccessor() { }
if (false) {
    /**
     * \@description
     * Writes a new value to the element.
     *
     * This method is called by the forms API to write to the view when programmatic
     * changes from model to view are requested.
     *
     * \@usageNotes
     * ### Write a value to the element
     *
     * The following example writes a value to the native DOM element.
     *
     * ```ts
     * writeValue(value: any): void {
     *   this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
     * }
     * ```
     *
     * @param {?} obj The new value for the element
     * @return {?}
     */
    ControlValueAccessor.prototype.writeValue = function (obj) { };
    /**
     * \@description
     * Registers a callback function that is called when the control's value
     * changes in the UI.
     *
     * This method is called by the forms API on initialization to update the form
     * model when values propagate from the view to the model.
     *
     * When implementing the `registerOnChange` method in your own value accessor,
     * save the given function so your class calls it at the appropriate time.
     *
     * \@usageNotes
     * ### Store the change function
     *
     * The following example stores the provided function as an internal method.
     *
     * ```ts
     * registerOnChange(fn: (_: any) => void): void {
     *   this._onChange = fn;
     * }
     * ```
     *
     * When the value changes in the UI, call the registered
     * function to allow the forms API to update itself:
     *
     * ```ts
     * host: {
     *    '(change)': '_onChange($event.target.value)'
     * }
     * ```
     *
     * @param {?} fn The callback function to register
     * @return {?}
     */
    ControlValueAccessor.prototype.registerOnChange = function (fn) { };
    /**
     * \@description
     * Registers a callback function is called by the forms API on initialization
     * to update the form model on blur.
     *
     * When implementing `registerOnTouched` in your own value accessor, save the given
     * function so your class calls it when the control should be considered
     * blurred or "touched".
     *
     * \@usageNotes
     * ### Store the callback function
     *
     * The following example stores the provided function as an internal method.
     *
     * ```ts
     * registerOnTouched(fn: any): void {
     *   this._onTouched = fn;
     * }
     * ```
     *
     * On blur (or equivalent), your class should call the registered function to allow
     * the forms API to update itself:
     *
     * ```ts
     * host: {
     *    '(blur)': '_onTouched()'
     * }
     * ```
     *
     * @param {?} fn The callback function to register
     * @return {?}
     */
    ControlValueAccessor.prototype.registerOnTouched = function (fn) { };
    /**
     * \@description
     * Function that is called by the forms API when the control status changes to
     * or from 'DISABLED'. Depending on the status, it enables or disables the
     * appropriate DOM element.
     *
     * \@usageNotes
     * The following is an example of writing the disabled property to a native DOM element:
     *
     * ```ts
     * setDisabledState(isDisabled: boolean): void {
     *   this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
     * }
     * ```
     *
     * @param {?} isDisabled The disabled status to set on the element
     * @return {?}
     */
    ControlValueAccessor.prototype.setDisabledState = function (isDisabled) { };
}
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * \@publicApi
 * @type {?}
 */
export const NG_VALUE_ACCESSOR = new InjectionToken('NgValueAccessor');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF92YWx1ZV9hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjN0MsMENBNkdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXhGQywrREFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUMzQixvRUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDaEMscUVBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJqQyw0RUFBNkM7Ozs7Ozs7Ozs7QUFVL0MsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUF1QixpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBEZWZpbmVzIGFuIGludGVyZmFjZSB0aGF0IGFjdHMgYXMgYSBicmlkZ2UgYmV0d2VlbiB0aGUgQW5ndWxhciBmb3JtcyBBUEkgYW5kIGFcbiAqIG5hdGl2ZSBlbGVtZW50IGluIHRoZSBET00uXG4gKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGNyZWF0ZSBhIGN1c3RvbSBmb3JtIGNvbnRyb2wgZGlyZWN0aXZlXG4gKiB0aGF0IGludGVncmF0ZXMgd2l0aCBBbmd1bGFyIGZvcm1zLlxuICpcbiAqIEBzZWUgRGVmYXVsdFZhbHVlQWNjZXNzb3JcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFdyaXRlcyBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBmb3JtcyBBUEkgdG8gd3JpdGUgdG8gdGhlIHZpZXcgd2hlbiBwcm9ncmFtbWF0aWNcbiAgICogY2hhbmdlcyBmcm9tIG1vZGVsIHRvIHZpZXcgYXJlIHJlcXVlc3RlZC5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIFdyaXRlIGEgdmFsdWUgdG8gdGhlIGVsZW1lbnRcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHdyaXRlcyBhIHZhbHVlIHRvIHRoZSBuYXRpdmUgRE9NIGVsZW1lbnQuXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgKiAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBlbGVtZW50XG4gICAqL1xuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wncyB2YWx1ZVxuICAgKiBjaGFuZ2VzIGluIHRoZSBVSS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBmb3JtcyBBUEkgb24gaW5pdGlhbGl6YXRpb24gdG8gdXBkYXRlIHRoZSBmb3JtXG4gICAqIG1vZGVsIHdoZW4gdmFsdWVzIHByb3BhZ2F0ZSBmcm9tIHRoZSB2aWV3IHRvIHRoZSBtb2RlbC5cbiAgICpcbiAgICogV2hlbiBpbXBsZW1lbnRpbmcgdGhlIGByZWdpc3Rlck9uQ2hhbmdlYCBtZXRob2QgaW4geW91ciBvd24gdmFsdWUgYWNjZXNzb3IsXG4gICAqIHNhdmUgdGhlIGdpdmVuIGZ1bmN0aW9uIHNvIHlvdXIgY2xhc3MgY2FsbHMgaXQgYXQgdGhlIGFwcHJvcHJpYXRlIHRpbWUuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBTdG9yZSB0aGUgY2hhbmdlIGZ1bmN0aW9uXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzdG9yZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGFzIGFuIGludGVybmFsIG1ldGhvZC5cbiAgICpcbiAgICogYGBgdHNcbiAgICogcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgKiAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIFdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgaW4gdGhlIFVJLCBjYWxsIHRoZSByZWdpc3RlcmVkXG4gICAqIGZ1bmN0aW9uIHRvIGFsbG93IHRoZSBmb3JtcyBBUEkgdG8gdXBkYXRlIGl0c2VsZjpcbiAgICpcbiAgICogYGBgdHNcbiAgICogaG9zdDoge1xuICAgKiAgICAnKGNoYW5nZSknOiAnX29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IHRoZSBmb3JtcyBBUEkgb24gaW5pdGlhbGl6YXRpb25cbiAgICogdG8gdXBkYXRlIHRoZSBmb3JtIG1vZGVsIG9uIGJsdXIuXG4gICAqXG4gICAqIFdoZW4gaW1wbGVtZW50aW5nIGByZWdpc3Rlck9uVG91Y2hlZGAgaW4geW91ciBvd24gdmFsdWUgYWNjZXNzb3IsIHNhdmUgdGhlIGdpdmVuXG4gICAqIGZ1bmN0aW9uIHNvIHlvdXIgY2xhc3MgY2FsbHMgaXQgd2hlbiB0aGUgY29udHJvbCBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgKiBibHVycmVkIG9yIFwidG91Y2hlZFwiLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgU3RvcmUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzdG9yZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGFzIGFuIGludGVybmFsIG1ldGhvZC5cbiAgICpcbiAgICogYGBgdHNcbiAgICogcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgKiAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBPbiBibHVyIChvciBlcXVpdmFsZW50KSwgeW91ciBjbGFzcyBzaG91bGQgY2FsbCB0aGUgcmVnaXN0ZXJlZCBmdW5jdGlvbiB0byBhbGxvd1xuICAgKiB0aGUgZm9ybXMgQVBJIHRvIHVwZGF0ZSBpdHNlbGY6XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGhvc3Q6IHtcbiAgICogICAgJyhibHVyKSc6ICdfb25Ub3VjaGVkKCknXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYnkgdGhlIGZvcm1zIEFQSSB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvXG4gICAqIG9yIGZyb20gJ0RJU0FCTEVEJy4gRGVwZW5kaW5nIG9uIHRoZSBzdGF0dXMsIGl0IGVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlXG4gICAqIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50LlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiBUaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2Ygd3JpdGluZyB0aGUgZGlzYWJsZWQgcHJvcGVydHkgdG8gYSBuYXRpdmUgRE9NIGVsZW1lbnQ6XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgKiAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFRoZSBkaXNhYmxlZCBzdGF0dXMgdG8gc2V0IG9uIHRoZSBlbGVtZW50XG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqXG4gKiBVc2VkIHRvIHByb3ZpZGUgYSBgQ29udHJvbFZhbHVlQWNjZXNzb3JgIGZvciBmb3JtIGNvbnRyb2xzLlxuICpcbiAqIFNlZSBgRGVmYXVsdFZhbHVlQWNjZXNzb3JgIGZvciBob3cgdG8gaW1wbGVtZW50IG9uZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBOR19WQUxVRV9BQ0NFU1NPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb250cm9sVmFsdWVBY2Nlc3Nvcj4oJ05nVmFsdWVBY2Nlc3NvcicpO1xuIl19