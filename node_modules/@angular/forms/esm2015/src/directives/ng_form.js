/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/ng_form.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, EventEmitter, forwardRef, Inject, Input, Optional, Self } from '@angular/core';
import { FormGroup } from '../model';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '../validators';
import { ControlContainer } from './control_container';
import { composeAsyncValidators, composeValidators, removeDir, setUpControl, setUpFormContainer, syncPendingControls } from './shared';
/** @type {?} */
export const formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgForm))
};
const ɵ0 = /**
 * @return {?}
 */
() => Promise.resolve(null);
/** @type {?} */
const resolvedPromise = ((ɵ0))();
/**
 * \@description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * \@usageNotes
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * ### Native DOM validation UI
 *
 * In order to prevent the native DOM form validation UI from interfering with Angular's form
 * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
 * `FormModule` or `ReactiveFormModule` are imported into the application.
 * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
 * `ngNativeValidate` attribute to the `<form>` element:
 *
 * ```html
 * <form ngNativeValidate>
 *   ...
 * </form>
 * ```
 *
 * \@ngModule FormsModule
 * \@publicApi
 */
export class NgForm extends ControlContainer {
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(validators, asyncValidators) {
        super();
        /**
         * \@description
         * Returns whether the form submission has been triggered.
         */
        this.submitted = false;
        this._directives = [];
        /**
         * \@description
         * Event emitter for the "ngSubmit" event
         */
        this.ngSubmit = new EventEmitter();
        this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    }
    /**
     * \@description
     * Lifecycle method called after the view is initialized. For internal use only.
     * @return {?}
     */
    ngAfterViewInit() {
        this._setUpdateStrategy();
    }
    /**
     * \@description
     * The directive instance.
     * @return {?}
     */
    get formDirective() {
        return this;
    }
    /**
     * \@description
     * The internal `FormGroup` instance.
     * @return {?}
     */
    get control() {
        return this.form;
    }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     * @return {?}
     */
    get path() {
        return [];
    }
    /**
     * \@description
     * Returns a map of the controls in this group.
     * @return {?}
     */
    get controls() {
        return this.form.controls;
    }
    /**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    addControl(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            ((/** @type {?} */ (dir))).control =
                (/** @type {?} */ (container.registerControl(dir.name, dir.control)));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            this._directives.push(dir);
        }));
    }
    /**
     * \@description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    getControl(dir) {
        return (/** @type {?} */ (this.form.get(dir.path)));
    }
    /**
     * \@description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    removeControl(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(this._directives, dir);
        }));
    }
    /**
     * \@description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    addFormGroup(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            /** @type {?} */
            const group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        }));
    }
    /**
     * \@description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    removeFormGroup(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        }));
    }
    /**
     * \@description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    getFormGroup(dir) {
        return (/** @type {?} */ (this.form.get(dir.path)));
    }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param {?} dir The `NgControl` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */
    updateModel(dir, value) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const ctrl = (/** @type {?} */ (this.form.get((/** @type {?} */ (dir.path)))));
            ctrl.setValue(value);
        }));
    }
    /**
     * \@description
     * Sets the value for this `FormGroup`.
     *
     * @param {?} value The new value
     * @return {?}
     */
    setValue(value) {
        this.control.setValue(value);
    }
    /**
     * \@description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */
    onSubmit($event) {
        ((/** @type {?} */ (this))).submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */
    onReset() {
        this.resetForm();
    }
    /**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        ((/** @type {?} */ (this))).submitted = false;
    }
    /**
     * @private
     * @return {?}
     */
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    }
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    _findContainer(path) {
        path.pop();
        return path.length ? (/** @type {?} */ (this.form.get(path))) : this.form;
    }
}
NgForm.decorators = [
    { type: Directive, args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] }
];
/** @nocollapse */
NgForm.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] }] }
];
NgForm.propDecorators = {
    options: [{ type: Input, args: ['ngFormOptions',] }]
};
if (false) {
    /**
     * \@description
     * Returns whether the form submission has been triggered.
     * @type {?}
     */
    NgForm.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    NgForm.prototype._directives;
    /**
     * \@description
     * The `FormGroup` instance created for this form.
     * @type {?}
     */
    NgForm.prototype.form;
    /**
     * \@description
     * Event emitter for the "ngSubmit" event
     * @type {?}
     */
    NgForm.prototype.ngSubmit;
    /**
     * \@description
     * Tracks options for the `NgForm` instance.
     *
     * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
     * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
     * Possible values: `'change'` | `'blur'` | `'submit'`.
     *
     * @type {?}
     */
    NgForm.prototype.options;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaEgsT0FBTyxFQUErQixTQUFTLEVBQVksTUFBTSxVQUFVLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUtyRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7QUFFckksTUFBTSxPQUFPLHFCQUFxQixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBQztDQUN0Qzs7OztBQUV3QixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7TUFBOUMsZUFBZSxHQUFHLE1BQTZCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUV2RCxNQUFNLE9BQU8sTUFBTyxTQUFRLGdCQUFnQjs7Ozs7SUFpQzFDLFlBQytDLFVBQWlCLEVBQ1gsZUFBc0I7UUFDekUsS0FBSyxFQUFFLENBQUM7Ozs7O1FBL0JNLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFbkMsZ0JBQVcsR0FBYyxFQUFFLENB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Q29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbmplY3QsIElucHV0LCBPcHRpb25hbCwgU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtSG9va3N9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJy4vbmdfbW9kZWwnO1xuaW1wb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vbmdfbW9kZWxfZ3JvdXAnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgcmVtb3ZlRGlyLCBzZXRVcENvbnRyb2wsIHNldFVwRm9ybUNvbnRhaW5lciwgc3luY1BlbmRpbmdDb250cm9sc30gZnJvbSAnLi9zaGFyZWQnO1xuXG5leHBvcnQgY29uc3QgZm9ybURpcmVjdGl2ZVByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nRm9ybSlcbn07XG5cbmNvbnN0IHJlc29sdmVkUHJvbWlzZSA9ICgoKSA9PiBQcm9taXNlLnJlc29sdmUobnVsbCkpKCk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGVzIGEgdG9wLWxldmVsIGBGb3JtR3JvdXBgIGluc3RhbmNlIGFuZCBiaW5kcyBpdCB0byBhIGZvcm1cbiAqIHRvIHRyYWNrIGFnZ3JlZ2F0ZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cy5cbiAqXG4gKiBBcyBzb29uIGFzIHlvdSBpbXBvcnQgdGhlIGBGb3Jtc01vZHVsZWAsIHRoaXMgZGlyZWN0aXZlIGJlY29tZXMgYWN0aXZlIGJ5IGRlZmF1bHQgb25cbiAqIGFsbCBgPGZvcm0+YCB0YWdzLiAgWW91IGRvbid0IG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3Rvci5cbiAqXG4gKiBZb3Ugb3B0aW9uYWxseSBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgYXMgdGhlIGtleVxuICogKGV4OiBgI215Rm9ybT1cIm5nRm9ybVwiYCkuIFRoaXMgaXMgb3B0aW9uYWwsIGJ1dCB1c2VmdWwuICBNYW55IHByb3BlcnRpZXMgZnJvbSB0aGUgdW5kZXJseWluZ1xuICogYEZvcm1Hcm91cGAgaW5zdGFuY2UgYXJlIGR1cGxpY2F0ZWQgb24gdGhlIGRpcmVjdGl2ZSBpdHNlbGYsIHNvIGEgcmVmZXJlbmNlIHRvIGl0XG4gKiBnaXZlcyB5b3UgYWNjZXNzIHRvIHRoZSBhZ2dyZWdhdGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXR1cyBvZiB0aGUgZm9ybSwgYXMgd2VsbCBhc1xuICogdXNlciBpbnRlcmFjdGlvbiBwcm9wZXJ0aWVzIGxpa2UgYGRpcnR5YCBhbmQgYHRvdWNoZWRgLlxuICpcbiAqIFRvIHJlZ2lzdGVyIGNoaWxkIGNvbnRyb2xzIHdpdGggdGhlIGZvcm0sIHVzZSBgTmdNb2RlbGAgd2l0aCBhIGBuYW1lYFxuICogYXR0cmlidXRlLiBZb3UgbWF5IHVzZSBgTmdNb2RlbEdyb3VwYCB0byBjcmVhdGUgc3ViLWdyb3VwcyB3aXRoaW4gdGhlIGZvcm0uXG4gKlxuICogSWYgbmVjZXNzYXJ5LCBsaXN0ZW4gdG8gdGhlIGRpcmVjdGl2ZSdzIGBuZ1N1Ym1pdGAgZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBoYXNcbiAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgZW1pdHMgdGhlIG9yaWdpbmFsIGZvcm1cbiAqIHN1Ym1pc3Npb24gZXZlbnQuXG4gKlxuICogSW4gdGVtcGxhdGUgZHJpdmVuIGZvcm1zLCBhbGwgYDxmb3JtPmAgdGFncyBhcmUgYXV0b21hdGljYWxseSB0YWdnZWQgYXMgYE5nRm9ybWAuXG4gKiBUbyBpbXBvcnQgdGhlIGBGb3Jtc01vZHVsZWAgYnV0IHNraXAgaXRzIHVzYWdlIGluIHNvbWUgZm9ybXMsXG4gKiBmb3IgZXhhbXBsZSwgdG8gdXNlIG5hdGl2ZSBIVE1MNSB2YWxpZGF0aW9uLCBhZGQgdGhlIGBuZ05vRm9ybWAgYW5kIHRoZSBgPGZvcm0+YFxuICogdGFncyB3b24ndCBjcmVhdGUgYW4gYE5nRm9ybWAgZGlyZWN0aXZlLiBJbiByZWFjdGl2ZSBmb3JtcywgdXNpbmcgYG5nTm9Gb3JtYCBpc1xuICogdW5uZWNlc3NhcnkgYmVjYXVzZSB0aGUgYDxmb3JtPmAgdGFncyBhcmUgaW5lcnQuIEluIHRoYXQgY2FzZSwgeW91IHdvdWxkXG4gKiByZWZyYWluIGZyb20gdXNpbmcgdGhlIGBmb3JtR3JvdXBgIGRpcmVjdGl2ZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBMaXN0ZW5pbmcgZm9yIGZvcm0gc3VibWlzc2lvblxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdG8gY2FwdHVyZSB0aGUgZm9ybSB2YWx1ZXMgZnJvbSB0aGUgXCJuZ1N1Ym1pdFwiIGV2ZW50LlxuICpcbiAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICpcbiAqICMjIyBTZXR0aW5nIHRoZSB1cGRhdGUgb3B0aW9uc1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyB5b3UgaG93IHRvIGNoYW5nZSB0aGUgXCJ1cGRhdGVPblwiIG9wdGlvbiBmcm9tIGl0cyBkZWZhdWx0IHVzaW5nXG4gKiBuZ0Zvcm1PcHRpb25zLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxmb3JtIFtuZ0Zvcm1PcHRpb25zXT1cInt1cGRhdGVPbjogJ2JsdXInfVwiPlxuICogICAgPGlucHV0IG5hbWU9XCJvbmVcIiBuZ01vZGVsPiAgPCEtLSB0aGlzIG5nTW9kZWwgd2lsbCB1cGRhdGUgb24gYmx1ciAtLT5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqICMjIyBOYXRpdmUgRE9NIHZhbGlkYXRpb24gVUlcbiAqXG4gKiBJbiBvcmRlciB0byBwcmV2ZW50IHRoZSBuYXRpdmUgRE9NIGZvcm0gdmFsaWRhdGlvbiBVSSBmcm9tIGludGVyZmVyaW5nIHdpdGggQW5ndWxhcidzIGZvcm1cbiAqIHZhbGlkYXRpb24sIEFuZ3VsYXIgYXV0b21hdGljYWxseSBhZGRzIHRoZSBgbm92YWxpZGF0ZWAgYXR0cmlidXRlIG9uIGFueSBgPGZvcm0+YCB3aGVuZXZlclxuICogYEZvcm1Nb2R1bGVgIG9yIGBSZWFjdGl2ZUZvcm1Nb2R1bGVgIGFyZSBpbXBvcnRlZCBpbnRvIHRoZSBhcHBsaWNhdGlvbi5cbiAqIElmIHlvdSB3YW50IHRvIGV4cGxpY2l0bHkgZW5hYmxlIG5hdGl2ZSBET00gdmFsaWRhdGlvbiBVSSB3aXRoIEFuZ3VsYXIgZm9ybXMsIHlvdSBjYW4gYWRkIHRoZVxuICogYG5nTmF0aXZlVmFsaWRhdGVgIGF0dHJpYnV0ZSB0byB0aGUgYDxmb3JtPmAgZWxlbWVudDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8Zm9ybSBuZ05hdGl2ZVZhbGlkYXRlPlxuICogICAuLi5cbiAqIDwvZm9ybT5cbiAqIGBgYFxuICpcbiAqIEBuZ01vZHVsZSBGb3Jtc01vZHVsZVxuICogQHB1YmxpY0FwaVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdOb0Zvcm1dKTpub3QoW2Zvcm1Hcm91cF0pLG5nLWZvcm0sW25nRm9ybV0nLFxuICBwcm92aWRlcnM6IFtmb3JtRGlyZWN0aXZlUHJvdmlkZXJdLFxuICBob3N0OiB7JyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknfSxcbiAgb3V0cHV0czogWyduZ1N1Ym1pdCddLFxuICBleHBvcnRBczogJ25nRm9ybSdcbn0pXG5leHBvcnQgY2xhc3MgTmdGb3JtIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIEZvcm0sIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgZm9ybSBzdWJtaXNzaW9uIGhhcyBiZWVuIHRyaWdnZXJlZC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9kaXJlY3RpdmVzOiBOZ01vZGVsW10gPSBbXTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBgRm9ybUdyb3VwYCBpbnN0YW5jZSBjcmVhdGVkIGZvciB0aGlzIGZvcm0uXG4gICAqL1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBFdmVudCBlbWl0dGVyIGZvciB0aGUgXCJuZ1N1Ym1pdFwiIGV2ZW50XG4gICAqL1xuICBuZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRyYWNrcyBvcHRpb25zIGZvciB0aGUgYE5nRm9ybWAgaW5zdGFuY2UuXG4gICAqXG4gICAqICoqdXBkYXRlT24qKjogU2V0cyB0aGUgZGVmYXVsdCBgdXBkYXRlT25gIHZhbHVlIGZvciBhbGwgY2hpbGQgYE5nTW9kZWxzYCBiZWxvdyBpdFxuICAgKiB1bmxlc3MgZXhwbGljaXRseSBzZXQgYnkgYSBjaGlsZCBgTmdNb2RlbGAgdXNpbmcgYG5nTW9kZWxPcHRpb25zYCkuIERlZmF1bHRzIHRvICdjaGFuZ2UnLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IGAnY2hhbmdlJ2AgfCBgJ2JsdXInYCB8IGAnc3VibWl0J2AuXG4gICAqXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgQElucHV0KCduZ0Zvcm1PcHRpb25zJykgb3B0aW9ucyE6IHt1cGRhdGVPbj86IEZvcm1Ib29rc307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIEBJbmplY3QoTkdfVkFMSURBVE9SUykgdmFsaWRhdG9yczogYW55W10sXG4gICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIEBJbmplY3QoTkdfQVNZTkNfVkFMSURBVE9SUykgYXN5bmNWYWxpZGF0b3JzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtID1cbiAgICAgICAgbmV3IEZvcm1Hcm91cCh7fSwgY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9ycyksIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIExpZmVjeWNsZSBtZXRob2QgY2FsbGVkIGFmdGVyIHRoZSB2aWV3IGlzIGluaXRpYWxpemVkLiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fc2V0VXBkYXRlU3RyYXRlZ3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAgICovXG4gIGdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm0ge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGUgaW50ZXJuYWwgYEZvcm1Hcm91cGAgaW5zdGFuY2UuXG4gICAqL1xuICBnZXQgY29udHJvbCgpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZvcm07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBwYXRoIHRvIHRoaXMgZ3JvdXAuIEJlY2F1c2UgdGhpcyBkaXJlY3RpdmVcbiAgICogYWx3YXlzIGxpdmVzIGF0IHRoZSB0b3AgbGV2ZWwgb2YgYSBmb3JtLCBpdCBpcyBhbHdheXMgYW4gZW1wdHkgYXJyYXkuXG4gICAqL1xuICBnZXQgcGF0aCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXR1cm5zIGEgbWFwIG9mIHRoZSBjb250cm9scyBpbiB0aGlzIGdyb3VwLlxuICAgKi9cbiAgZ2V0IGNvbnRyb2xzKCk6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBNZXRob2QgdGhhdCBzZXRzIHVwIHRoZSBjb250cm9sIGRpcmVjdGl2ZSBpbiB0aGlzIGdyb3VwLCByZS1jYWxjdWxhdGVzIGl0cyB2YWx1ZVxuICAgKiBhbmQgdmFsaWRpdHksIGFuZCBhZGRzIHRoZSBpbnN0YW5jZSB0byB0aGUgaW50ZXJuYWwgbGlzdCBvZiBkaXJlY3RpdmVzLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyIFRoZSBgTmdNb2RlbGAgZGlyZWN0aXZlIGluc3RhbmNlLlxuICAgKi9cbiAgYWRkQ29udHJvbChkaXI6IE5nTW9kZWwpOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgIChkaXIgYXMge2NvbnRyb2w6IEZvcm1Db250cm9sfSkuY29udHJvbCA9XG4gICAgICAgICAgPEZvcm1Db250cm9sPmNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGRpci5jb250cm9sKTtcbiAgICAgIHNldFVwQ29udHJvbChkaXIuY29udHJvbCwgZGlyKTtcbiAgICAgIGRpci5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICAgIHRoaXMuX2RpcmVjdGl2ZXMucHVzaChkaXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXRyaWV2ZXMgdGhlIGBGb3JtQ29udHJvbGAgaW5zdGFuY2UgZnJvbSB0aGUgcHJvdmlkZWQgYE5nTW9kZWxgIGRpcmVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIGRpciBUaGUgYE5nTW9kZWxgIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAgICovXG4gIGdldENvbnRyb2woZGlyOiBOZ01vZGVsKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlbW92ZXMgdGhlIGBOZ01vZGVsYCBpbnN0YW5jZSBmcm9tIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGRpcmVjdGl2ZXNcbiAgICpcbiAgICogQHBhcmFtIGRpciBUaGUgYE5nTW9kZWxgIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAgICovXG4gIHJlbW92ZUNvbnRyb2woZGlyOiBOZ01vZGVsKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZURpcjxOZ01vZGVsPih0aGlzLl9kaXJlY3RpdmVzLCBkaXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBZGRzIGEgbmV3IGBOZ01vZGVsR3JvdXBgIGRpcmVjdGl2ZSBpbnN0YW5jZSB0byB0aGUgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGRpciBUaGUgYE5nTW9kZWxHcm91cGAgZGlyZWN0aXZlIGluc3RhbmNlLlxuICAgKi9cbiAgYWRkRm9ybUdyb3VwKGRpcjogTmdNb2RlbEdyb3VwKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBjb25zdCBncm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGdyb3VwLCBkaXIpO1xuICAgICAgY29udGFpbmVyLnJlZ2lzdGVyQ29udHJvbChkaXIubmFtZSwgZ3JvdXApO1xuICAgICAgZ3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmVzIHRoZSBgTmdNb2RlbEdyb3VwYCBkaXJlY3RpdmUgaW5zdGFuY2UgZnJvbSB0aGUgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGRpciBUaGUgYE5nTW9kZWxHcm91cGAgZGlyZWN0aXZlIGluc3RhbmNlLlxuICAgKi9cbiAgcmVtb3ZlRm9ybUdyb3VwKGRpcjogTmdNb2RlbEdyb3VwKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0cmlldmVzIHRoZSBgRm9ybUdyb3VwYCBmb3IgYSBwcm92aWRlZCBgTmdNb2RlbEdyb3VwYCBkaXJlY3RpdmUgaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIGRpciBUaGUgYE5nTW9kZWxHcm91cGAgZGlyZWN0aXZlIGluc3RhbmNlLlxuICAgKi9cbiAgZ2V0Rm9ybUdyb3VwKGRpcjogTmdNb2RlbEdyb3VwKTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXcgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBgTmdDb250cm9sYCBkaXJlY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSBkaXIgVGhlIGBOZ0NvbnRyb2xgIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBkaXJlY3RpdmUncyBjb250cm9sLlxuICAgKi9cbiAgdXBkYXRlTW9kZWwoZGlyOiBOZ0NvbnRyb2wsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBjdHJsID0gPEZvcm1Db250cm9sPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGghKTtcbiAgICAgIGN0cmwuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXRzIHRoZSB2YWx1ZSBmb3IgdGhpcyBgRm9ybUdyb3VwYC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIE1ldGhvZCBjYWxsZWQgd2hlbiB0aGUgXCJzdWJtaXRcIiBldmVudCBpcyB0cmlnZ2VyZWQgb24gdGhlIGZvcm0uXG4gICAqIFRyaWdnZXJzIHRoZSBgbmdTdWJtaXRgIGVtaXR0ZXIgdG8gZW1pdCB0aGUgXCJzdWJtaXRcIiBldmVudCBhcyBpdHMgcGF5bG9hZC5cbiAgICpcbiAgICogQHBhcmFtICRldmVudCBUaGUgXCJzdWJtaXRcIiBldmVudCBvYmplY3RcbiAgICovXG4gIG9uU3VibWl0KCRldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICAodGhpcyBhcyB7c3VibWl0dGVkOiBib29sZWFufSkuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICBzeW5jUGVuZGluZ0NvbnRyb2xzKHRoaXMuZm9ybSwgdGhpcy5fZGlyZWN0aXZlcyk7XG4gICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBNZXRob2QgY2FsbGVkIHdoZW4gdGhlIFwicmVzZXRcIiBldmVudCBpcyB0cmlnZ2VyZWQgb24gdGhlIGZvcm0uXG4gICAqL1xuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlc2V0cyB0aGUgZm9ybSB0byBhbiBpbml0aWFsIHZhbHVlIGFuZCByZXNldHMgaXRzIHN1Ym1pdHRlZCBzdGF0dXMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgZm9ybS5cbiAgICovXG4gIHJlc2V0Rm9ybSh2YWx1ZTogYW55ID0gdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnJlc2V0KHZhbHVlKTtcbiAgICAodGhpcyBhcyB7c3VibWl0dGVkOiBib29sZWFufSkuc3VibWl0dGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRVcGRhdGVTdHJhdGVneSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy51cGRhdGVPbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmZvcm0uX3VwZGF0ZU9uID0gdGhpcy5vcHRpb25zLnVwZGF0ZU9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2ZpbmRDb250YWluZXIocGF0aDogc3RyaW5nW10pOiBGb3JtR3JvdXAge1xuICAgIHBhdGgucG9wKCk7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoID8gPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KHBhdGgpIDogdGhpcy5mb3JtO1xuICB9XG59XG4iXX0=