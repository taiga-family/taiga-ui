/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/form_interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 * An interface implemented by `FormGroupDirective` and `NgForm` directives.
 *
 * Only used by the `ReactiveFormsModule` and `FormsModule`.
 *
 * \@publicApi
 * @record
 */
export function Form() { }
if (false) {
    /**
     * \@description
     * Add a control to this form.
     *
     * @param {?} dir The control directive to add to the form.
     * @return {?}
     */
    Form.prototype.addControl = function (dir) { };
    /**
     * \@description
     * Remove a control from this form.
     *
     * @param {?} dir
     * @return {?}
     */
    Form.prototype.removeControl = function (dir) { };
    /**
     * \@description
     * The control directive from which to get the `FormControl`.
     *
     * @param {?} dir
     * @return {?}
     */
    Form.prototype.getControl = function (dir) { };
    /**
     * \@description
     * Add a group of controls to this form.
     *
     * @param {?} dir
     * @return {?}
     */
    Form.prototype.addFormGroup = function (dir) { };
    /**
     * \@description
     * Remove a group of controls to this form.
     *
     * @param {?} dir
     * @return {?}
     */
    Form.prototype.removeFormGroup = function (dir) { };
    /**
     * \@description
     * The `FormGroup` associated with a particular `AbstractFormGroupDirective`.
     *
     * @param {?} dir
     * @return {?}
     */
    Form.prototype.getFormGroup = function (dir) { };
    /**
     * \@description
     * Update the model for a particular control with a new value.
     *
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    Form.prototype.updateModel = function (dir, value) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9mb3JtX2ludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsMEJBeURDOzs7Ozs7Ozs7SUFsREMsK0NBQWlDOzs7Ozs7OztJQVFqQyxrREFBb0M7Ozs7Ozs7O0lBUXBDLCtDQUF3Qzs7Ozs7Ozs7SUFReEMsaURBQW9EOzs7Ozs7OztJQVFwRCxvREFBdUQ7Ozs7Ozs7O0lBUXZELGlEQUF5RDs7Ozs7Ozs7O0lBU3pELHVEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICcuLi9tb2RlbCc7XG5cbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5cblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQW4gaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGBGb3JtR3JvdXBEaXJlY3RpdmVgIGFuZCBgTmdGb3JtYCBkaXJlY3RpdmVzLlxuICpcbiAqIE9ubHkgdXNlZCBieSB0aGUgYFJlYWN0aXZlRm9ybXNNb2R1bGVgIGFuZCBgRm9ybXNNb2R1bGVgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb3JtIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBZGQgYSBjb250cm9sIHRvIHRoaXMgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGRpciBUaGUgY29udHJvbCBkaXJlY3RpdmUgdG8gYWRkIHRvIHRoZSBmb3JtLlxuICAgKi9cbiAgYWRkQ29udHJvbChkaXI6IE5nQ29udHJvbCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyOiBUaGUgY29udHJvbCBkaXJlY3RpdmUgdG8gcmVtb3ZlIGZyb20gdGhlIGZvcm0uXG4gICAqL1xuICByZW1vdmVDb250cm9sKGRpcjogTmdDb250cm9sKTogdm9pZDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBjb250cm9sIGRpcmVjdGl2ZSBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYEZvcm1Db250cm9sYC5cbiAgICpcbiAgICogQHBhcmFtIGRpcjogVGhlIGNvbnRyb2wgZGlyZWN0aXZlLlxuICAgKi9cbiAgZ2V0Q29udHJvbChkaXI6IE5nQ29udHJvbCk6IEZvcm1Db250cm9sO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQWRkIGEgZ3JvdXAgb2YgY29udHJvbHMgdG8gdGhpcyBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyOiBUaGUgY29udHJvbCBncm91cCBkaXJlY3RpdmUgdG8gYWRkLlxuICAgKi9cbiAgYWRkRm9ybUdyb3VwKGRpcjogQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVtb3ZlIGEgZ3JvdXAgb2YgY29udHJvbHMgdG8gdGhpcyBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyOiBUaGUgY29udHJvbCBncm91cCBkaXJlY3RpdmUgdG8gcmVtb3ZlLlxuICAgKi9cbiAgcmVtb3ZlRm9ybUdyb3VwKGRpcjogQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIGBGb3JtR3JvdXBgIGFzc29jaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgYEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlYC5cbiAgICpcbiAgICogQHBhcmFtIGRpcjogVGhlIGZvcm0gZ3JvdXAgZGlyZWN0aXZlIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBgRm9ybUdyb3VwYC5cbiAgICovXG4gIGdldEZvcm1Hcm91cChkaXI6IEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKTogRm9ybUdyb3VwO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVXBkYXRlIHRoZSBtb2RlbCBmb3IgYSBwYXJ0aWN1bGFyIGNvbnRyb2wgd2l0aCBhIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIGRpcjogVGhlIGNvbnRyb2wgZGlyZWN0aXZlIHRvIHVwZGF0ZS5cbiAgICogQHBhcmFtIHZhbHVlOiBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY29udHJvbC5cbiAgICovXG4gIHVwZGF0ZU1vZGVsKGRpcjogTmdDb250cm9sLCB2YWx1ZTogYW55KTogdm9pZDtcbn1cbiJdfQ==