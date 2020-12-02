/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/radio_control_value_accessor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, forwardRef, Injectable, Injector, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from './control_value_accessor';
import { NgControl } from './ng_control';
/** @type {?} */
export const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => RadioControlValueAccessor)),
    multi: true
};
/**
 * \@description
 * Class used by Angular to track radio buttons. For internal use only.
 */
export class RadioControlRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * \@description
     * Adds a control to the internal registry. For internal use only.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    add(control, accessor) {
        this._accessors.push([control, accessor]);
    }
    /**
     * \@description
     * Removes a control from the internal registry. For internal use only.
     * @param {?} accessor
     * @return {?}
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    }
    /**
     * \@description
     * Selects a radio button. For internal use only.
     * @param {?} accessor
     * @return {?}
     */
    select(accessor) {
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        }));
    }
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    }
}
RadioControlRegistry.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RadioControlRegistry.prototype._accessors;
}
/**
 * \@description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * \@usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * \@ngModule ReactiveFormsModule
 * \@ngModule FormsModule
 * \@publicApi
 */
export class RadioControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    constructor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * \@description
     * A lifecycle method called when the directive is initialized. For internal use only.
     * @return {?}
     */
    ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        this._registry.remove(this);
    }
    /**
     * \@description
     * Sets the "checked" property value on the radio input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this._fn = fn;
        this.onChange = (/**
         * @return {?}
         */
        () => {
            fn(this.value);
            this._registry.select(this);
        });
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param {?} value
     * @return {?}
     */
    fireUncheck(value) {
        this.writeValue(value);
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @private
     * @return {?}
     */
    _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    }
    /**
     * @private
     * @return {?}
     */
    _throwNameError() {
        throw new Error(`
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
    }
}
RadioControlValueAccessor.decorators = [
    { type: Directive, args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
RadioControlValueAccessor.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: RadioControlRegistry },
    { type: Injector }
];
RadioControlValueAccessor.propDecorators = {
    name: [{ type: Input }],
    formControlName: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    RadioControlValueAccessor.prototype._state;
    /**
     * \@internal
     * @type {?}
     */
    RadioControlValueAccessor.prototype._control;
    /**
     * \@internal
     * @type {?}
     */
    RadioControlValueAccessor.prototype._fn;
    /**
     * \@description
     * The registered callback function called when a change event occurs on the input element.
     * @type {?}
     */
    RadioControlValueAccessor.prototype.onChange;
    /**
     * \@description
     * The registered callback function called when a blur event occurs on the input element.
     * @type {?}
     */
    RadioControlValueAccessor.prototype.onTouched;
    /**
     * \@description
     * Tracks the name of the radio input element.
     * @type {?}
     */
    RadioControlValueAccessor.prototype.name;
    /**
     * \@description
     * Tracks the name of the `FormControl` bound to the directive. The name corresponds
     * to a key in the parent `FormGroup` or `FormArray`.
     * @type {?}
     */
    RadioControlValueAccessor.prototype.formControlName;
    /**
     * \@description
     * Tracks the value of the radio input element
     * @type {?}
     */
    RadioControlValueAccessor.prototype.value;
    /**
     * @type {?}
     * @private
     */
    RadioControlValueAccessor.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    RadioControlValueAccessor.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    RadioControlValueAccessor.prototype._registry;
    /**
     * @type {?}
     * @private
     */
    RadioControlValueAccessor.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0gsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7O0FBRXZDLE1BQU0sT0FBTyxvQkFBb0IsR0FBUTtJQUN2QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7OztBQU9ELE1BQU0sT0FBTyxvQkFBb0I7SUFEakM7UUFFVSxlQUFVLEdBQVUsRUFBRSxDQUFDO0lBMENqQyxDQUFDOzs7Ozs7OztJQXBDQyxHQUFHLENBQUMsT0FBa0IsRUFBRSxRQUFtQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsUUFBbUM7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtB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OztJQUFFLDhDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQ2xhc3MgdXNlZCBieSBBbmd1bGFyIHRvIHRyYWNrIHJhZGlvIGJ1dHRvbnMuIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29udHJvbFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfYWNjZXNzb3JzOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQWRkcyBhIGNvbnRyb2wgdG8gdGhlIGludGVybmFsIHJlZ2lzdHJ5LiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqL1xuICBhZGQoY29udHJvbDogTmdDb250cm9sLCBhY2Nlc3NvcjogUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcikge1xuICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKFtjb250cm9sLCBhY2Nlc3Nvcl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmVzIGEgY29udHJvbCBmcm9tIHRoZSBpbnRlcm5hbCByZWdpc3RyeS4gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKi9cbiAgcmVtb3ZlKGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgaWYgKHRoaXMuX2FjY2Vzc29yc1tpXVsxXSA9PT0gYWNjZXNzb3IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2VsZWN0cyBhIHJhZGlvIGJ1dHRvbi4gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKi9cbiAgc2VsZWN0KGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgdGhpcy5fYWNjZXNzb3JzLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1NhbWVHcm91cChjLCBhY2Nlc3NvcikgJiYgY1sxXSAhPT0gYWNjZXNzb3IpIHtcbiAgICAgICAgY1sxXS5maXJlVW5jaGVjayhhY2Nlc3Nvci52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1NhbWVHcm91cChcbiAgICAgIGNvbnRyb2xQYWlyOiBbTmdDb250cm9sLCBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yXSxcbiAgICAgIGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb250cm9sUGFpclswXS5jb250cm9sKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnRyb2xQYWlyWzBdLl9wYXJlbnQgPT09IGFjY2Vzc29yLl9jb250cm9sLl9wYXJlbnQgJiZcbiAgICAgICAgY29udHJvbFBhaXJbMV0ubmFtZSA9PT0gYWNjZXNzb3IubmFtZTtcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGBDb250cm9sVmFsdWVBY2Nlc3NvcmAgZm9yIHdyaXRpbmcgcmFkaW8gY29udHJvbCB2YWx1ZXMgYW5kIGxpc3RlbmluZyB0byByYWRpbyBjb250cm9sXG4gKiBjaGFuZ2VzLiBUaGUgdmFsdWUgYWNjZXNzb3IgaXMgdXNlZCBieSB0aGUgYEZvcm1Db250cm9sRGlyZWN0aXZlYCwgYEZvcm1Db250cm9sTmFtZWAsIGFuZFxuICogYE5nTW9kZWxgIGRpcmVjdGl2ZXMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgVXNpbmcgcmFkaW8gYnV0dG9ucyB3aXRoIHJlYWN0aXZlIGZvcm0gZGlyZWN0aXZlc1xuICpcbiAqIFRoZSBmb2xsb3cgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIHJhZGlvIGJ1dHRvbnMgaW4gYSByZWFjdGl2ZSBmb3JtLiBXaGVuIHVzaW5nIHJhZGlvIGJ1dHRvbnMgaW5cbiAqIGEgcmVhY3RpdmUgZm9ybSwgcmFkaW8gYnV0dG9ucyBpbiB0aGUgc2FtZSBncm91cCBzaG91bGQgaGF2ZSB0aGUgc2FtZSBgZm9ybUNvbnRyb2xOYW1lYC5cbiAqIFByb3ZpZGluZyBhIGBuYW1lYCBhdHRyaWJ1dGUgaXMgb3B0aW9uYWwuXG4gKlxuICoge0BleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlUmFkaW9CdXR0b25zL3JlYWN0aXZlX3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nUmVhY3RpdmUnfVxuICpcbiAqIEBuZ01vZHVsZSBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gKiBAbmdNb2R1bGUgRm9ybXNNb2R1bGVcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W3R5cGU9cmFkaW9dW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFkaW9dW25nTW9kZWxdJyxcbiAgaG9zdDogeycoY2hhbmdlKSc6ICdvbkNoYW5nZSgpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKSd9LFxuICBwcm92aWRlcnM6IFtSQURJT19WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9zdGF0ZSE6IGJvb2xlYW47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9jb250cm9sITogTmdDb250cm9sO1xuICAvKiogQGludGVybmFsICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBfZm4hOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGEgY2hhbmdlIGV2ZW50IG9jY3VycyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIG9uQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBhIGJsdXIgZXZlbnQgb2NjdXJzIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUcmFja3MgdGhlIG5hbWUgb2YgdGhlIHJhZGlvIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgQElucHV0KCkgbmFtZSE6IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRyYWNrcyB0aGUgbmFtZSBvZiB0aGUgYEZvcm1Db250cm9sYCBib3VuZCB0byB0aGUgZGlyZWN0aXZlLiBUaGUgbmFtZSBjb3JyZXNwb25kc1xuICAgKiB0byBhIGtleSBpbiB0aGUgcGFyZW50IGBGb3JtR3JvdXBgIG9yIGBGb3JtQXJyYXlgLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sTmFtZSE6IHN0cmluZztcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRyYWNrcyB0aGUgdmFsdWUgb2YgdGhlIHJhZGlvIGlucHV0IGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgcHJpdmF0ZSBfcmVnaXN0cnk6IFJhZGlvQ29udHJvbFJlZ2lzdHJ5LCBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBpbml0aWFsaXplZC4gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbCA9IHRoaXMuX2luamVjdG9yLmdldChOZ0NvbnRyb2wpO1xuICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgIHRoaXMuX3JlZ2lzdHJ5LmFkZCh0aGlzLl9jb250cm9sLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogTGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgYmVmb3JlIHRoZSBkaXJlY3RpdmUncyBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdHJ5LnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0cyB0aGUgXCJjaGVja2VkXCIgcHJvcGVydHkgdmFsdWUgb24gdGhlIHJhZGlvIGlucHV0IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgY2hlY2tlZCB2YWx1ZVxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdGhpcy5fc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGZuKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fcmVnaXN0cnkuc2VsZWN0KHRoaXMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJ2YWx1ZVwiIG9uIHRoZSByYWRpbyBpbnB1dCBlbGVtZW50IGFuZCB1bmNoZWNrcyBpdC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBmaXJlVW5jaGVjayh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBcImRpc2FibGVkXCIgcHJvcGVydHkgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFRoZSBkaXNhYmxlZCB2YWx1ZVxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrTmFtZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMubmFtZSAhPT0gdGhpcy5mb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgIHRoaXMuX3Rocm93TmFtZUVycm9yKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5uYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB0aGlzLm5hbWUgPSB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgX3Rocm93TmFtZUVycm9yKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICBJZiB5b3UgZGVmaW5lIGJvdGggYSBuYW1lIGFuZCBhIGZvcm1Db250cm9sTmFtZSBhdHRyaWJ1dGUgb24geW91ciByYWRpbyBidXR0b24sIHRoZWlyIHZhbHVlc1xuICAgICAgbXVzdCBtYXRjaC4gRXg6IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBmb3JtQ29udHJvbE5hbWU9XCJmb29kXCIgbmFtZT1cImZvb2RcIj5cbiAgICBgKTtcbiAgfVxufVxuIl19