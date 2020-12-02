/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter } from '@angular/core';
import { composeAsyncValidators, composeValidators } from './directives/shared';
import { toObservable } from './validators';
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */
export const VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
export const INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
export const PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
export const DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!Array.isArray(path)) {
        path = path.split(delimiter);
    }
    if (Array.isArray(path) && path.length === 0)
        return null;
    // Not using Array.reduce here due to a Chrome 80 bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    /** @type {?} */
    let controlToFind = control;
    path.forEach((/**
     * @param {?} name
     * @return {?}
     */
    (name) => {
        if (controlToFind instanceof FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty((/** @type {?} */ (name))) ?
                controlToFind.controls[name] :
                null;
        }
        else if (controlToFind instanceof FormArray) {
            controlToFind = controlToFind.at((/** @type {?} */ (name))) || null;
        }
        else {
            controlToFind = null;
        }
    }));
    return controlToFind;
}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToValidator(validatorOrOpts) {
    /** @type {?} */
    const validator = (/** @type {?} */ ((isOptionsObj(validatorOrOpts) ? ((/** @type {?} */ (validatorOrOpts))).validators :
        validatorOrOpts)));
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * @param {?=} asyncValidator
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    /** @type {?} */
    const origAsyncValidator = (/** @type {?} */ ((isOptionsObj(validatorOrOpts) ? ((/** @type {?} */ (validatorOrOpts))).asyncValidators :
        asyncValidator)));
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
/**
 * Interface for options provided to an `AbstractControl`.
 *
 * \@publicApi
 * @record
 */
export function AbstractControlOptions() { }
if (false) {
    /**
     * \@description
     * The list of validators applied to a control.
     * @type {?|undefined}
     */
    AbstractControlOptions.prototype.validators;
    /**
     * \@description
     * The list of async validators applied to control.
     * @type {?|undefined}
     */
    AbstractControlOptions.prototype.asyncValidators;
    /**
     * \@description
     * The event name for control to update upon.
     * @type {?|undefined}
     */
    AbstractControlOptions.prototype.updateOn;
}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * \@publicApi
 * @abstract
 */
export class AbstractControl {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param {?} validator The function that determines the synchronous validity of this control.
     * @param {?} asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    constructor(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    /**
     * The parent control.
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() {
        return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() {
        return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() {
        return this.status == PENDING;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control is disabled, false otherwise.
     */
    get disabled() {
        return this.status === DISABLED;
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */
    get enabled() {
        return this.status !== DISABLED;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() {
        return !this.pristine;
    }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     * @return {?}
     */
    get untouched() {
        return !this.touched;
    }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     * @return {?}
     */
    get updateOn() {
        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
    }
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */
    setValidators(newValidator) {
        this.validator = coerceToValidator(newValidator);
    }
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param {?} newValidator
     * @return {?}
     */
    setAsyncValidators(newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    }
    /**
     * Empties out the sync validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */
    clearValidators() {
        this.validator = null;
    }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */
    clearAsyncValidators() {
        this.asyncValidator = null;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsTouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     * @return {?}
     */
    markAllAsTouched() {
        this.markAsTouched({ onlySelf: true });
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.markAllAsTouched()));
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsUntouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = false;
        this._pendingTouched = false;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.markAsUntouched({ onlySelf: true });
        }));
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsDirty(opts = {}) {
        ((/** @type {?} */ (this))).pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
     *
     * @param {?=} opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsPristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = true;
        this._pendingDirty = false;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.markAsPristine({ onlySelf: true });
        }));
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    markAsPending(opts = {}) {
        ((/** @type {?} */ (this))).status = PENDING;
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     * @return {?}
     */
    disable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        /** @type {?} */
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        ((/** @type {?} */ (this))).status = DISABLED;
        ((/** @type {?} */ (this))).errors = null;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.disable(Object.assign(Object.assign({}, opts), { onlySelf: true }));
        }));
        this._updateValue();
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        this._updateAncestors(Object.assign(Object.assign({}, opts), { skipPristineCheck }));
        this._onDisabledChange.forEach((/**
         * @param {?} changeFn
         * @return {?}
         */
        (changeFn) => changeFn(true)));
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {\@link AbstractControl.status}
     *
     * @param {?=} opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     * @return {?}
     */
    enable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        /** @type {?} */
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        ((/** @type {?} */ (this))).status = VALID;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.enable(Object.assign(Object.assign({}, opts), { onlySelf: true }));
        }));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(Object.assign(Object.assign({}, opts), { skipPristineCheck }));
        this._onDisabledChange.forEach((/**
         * @param {?} changeFn
         * @return {?}
         */
        (changeFn) => changeFn(false)));
    }
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    _updateAncestors(opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
            }
            this._parent._updateTouched();
        }
    }
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    setParent(parent) {
        this._parent = parent;
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runValidator();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((/**
         * @param {?} ctrl
         * @return {?}
         */
        (ctrl) => ctrl._updateTreeValidity(opts)));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    }
    /**
     * @private
     * @return {?}
     */
    _setInitialStatus() {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    /**
     * @private
     * @return {?}
     */
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    /**
     * @private
     * @param {?=} emitEvent
     * @return {?}
     */
    _runAsyncValidator(emitEvent) {
        if (this.asyncValidator) {
            ((/** @type {?} */ (this))).status = PENDING;
            /** @type {?} */
            const obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe((/**
                 * @param {?} errors
                 * @return {?}
                 */
                (errors) => this.setErrors(errors, { emitEvent })));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    get(path) {
        return _find(this, path, '.');
    }
    /**
     * \@description
     * Reports error data for the control with the given path.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        /** @type {?} */
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * \@description
     * Reports whether the control with the given path has the error specified.
     *
     * \@usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @param {?} errorCode The code of the error to check
     * @param {?=} path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @return {?} whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     * @return {?}
     */
    get root() {
        /** @type {?} */
        let x = this;
        while (x._parent) {
            x = x._parent;
        }
        return x;
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsErrors(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.status === status));
    }
    /**
     * \@internal
     * @return {?}
     */
    _anyControlsDirty() {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.dirty));
    }
    /**
     * \@internal
     * @return {?}
     */
    _anyControlsTouched() {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.touched));
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updatePristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateTouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    _isBoxedValue(formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && ((/** @type {?} */ (opts))).updateOn != null) {
            this._updateOn = (/** @type {?} */ (((/** @type {?} */ (opts))).updateOn));
        }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * \@internal
     * @private
     * @param {?=} onlySelf
     * @return {?}
     */
    _parentMarkedDirty(onlySelf) {
        /** @type {?} */
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
    }
}
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._pendingDirty;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._pendingTouched;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._onCollectionChange;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._updateOn;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._asyncValidationSubscription;
    /**
     * The current value of the control.
     *
     * * For a `FormControl`, the current value.
     * * For an enabled `FormGroup`, the values of enabled controls as an object
     * with a key-value pair for each member of the group.
     * * For a disabled `FormGroup`, the values of all controls as an object
     * with a key-value pair for each member of the group.
     * * For a `FormArray`, the values of enabled controls as an array.
     *
     * @type {?}
     */
    AbstractControl.prototype.value;
    /**
     * The validation status of the control. There are four possible
     * validation status values:
     *
     * * **VALID**: This control has passed all validation checks.
     * * **INVALID**: This control has failed at least one validation check.
     * * **PENDING**: This control is in the midst of conducting a validation check.
     * * **DISABLED**: This control is exempt from validation checks.
     *
     * These status values are mutually exclusive, so a control cannot be
     * both valid AND invalid or invalid AND disabled.
     * @type {?}
     */
    AbstractControl.prototype.status;
    /**
     * An object containing any errors generated by failing validation,
     * or null if there are no errors.
     * @type {?}
     */
    AbstractControl.prototype.errors;
    /**
     * A control is `pristine` if the user has not yet changed
     * the value in the UI.
     *
     * \@return True if the user has not yet changed the value in the UI; compare `dirty`.
     * Programmatic changes to a control's value do not mark it dirty.
     * @type {?}
     */
    AbstractControl.prototype.pristine;
    /**
     * True if the control is marked as `touched`.
     *
     * A control is marked `touched` once the user has triggered
     * a `blur` event on it.
     * @type {?}
     */
    AbstractControl.prototype.touched;
    /**
     * A multicasting observable that emits an event every time the value of the control changes, in
     * the UI or programmatically. It also emits an event each time you call enable() or disable()
     * without passing along {emitEvent: false} as a function argument.
     * @type {?}
     */
    AbstractControl.prototype.valueChanges;
    /**
     * A multicasting observable that emits an event every time the validation `status` of the control
     * recalculates.
     *
     * @see {\@link AbstractControl.status}
     *
     * @type {?}
     */
    AbstractControl.prototype.statusChanges;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._onDisabledChange;
    /** @type {?} */
    AbstractControl.prototype.validator;
    /** @type {?} */
    AbstractControl.prototype.asyncValidator;
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.patchValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} cb
     * @return {?}
     */
    AbstractControl.prototype._forEachChild = function (cb) { };
    /**
     * \@internal
     * @abstract
     * @param {?} condition
     * @return {?}
     */
    AbstractControl.prototype._anyControls = function (condition) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._syncPendingControls = function () { };
}
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events. See [usage examples below](#usage-notes).
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */
export class FormControl extends AbstractControl {
    /**
     * Creates a new `FormControl` instance.
     *
     * @param {?=} formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /**
         * \@internal
         */
        this._onChange = [];
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this._initObservables();
    }
    /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */
    setValue(value, options = {}) {
        ((/** @type {?} */ (this))).value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach((/**
             * @param {?} changeFn
             * @return {?}
             */
            (changeFn) => changeFn(this.value, options.emitViewToModelChange !== false)));
        }
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    patchValue(value, options = {}) {
        this.setValue(value, options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    reset(formState = null, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() { }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        return false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return this.disabled;
    }
    /**
     * Register a listener for change events.
     *
     * @param {?} fn The method that is called when the value changes
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange.push(fn);
    }
    /**
     * \@internal
     * @return {?}
     */
    _clearChangeFns() {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Register a listener for disabled events.
     *
     * @param {?} fn The method that is called when the disabled status changes.
     * @return {?}
     */
    registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) { }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} formState
     * @return {?}
     */
    _applyFormState(formState) {
        if (this._isBoxedValue(formState)) {
            ((/** @type {?} */ (this))).value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            ((/** @type {?} */ (this))).value = this._pendingValue = formState;
        }
    }
}
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    FormControl.prototype._onChange;
    /**
     * \@internal
     * @type {?}
     */
    FormControl.prototype._pendingValue;
    /**
     * \@internal
     * @type {?}
     */
    FormControl.prototype._pendingChange;
}
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * \@usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * \@publicApi
 */
export class FormGroup extends AbstractControl {
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param {?} controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    addControl(name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    removeControl(name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    setControl(name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {\@link AbstractControl#get get} instead.
     *
     * @param {?} controlName The control name to check for existence in the collection
     *
     * @return {?} false for disabled controls, true otherwise.
     */
    contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you exclude a value of a control that does exist.
     *
     * @param {?} value The new value for the control that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this._throwIfControlMissing(name);
            this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * \@usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param {?} value The object that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    patchValue(value, options = {}) {
        Object.keys(value).forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            if (this.controls[name]) {
                this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    reset(value = {}, options = {}) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     * @return {?}
     */
    getRawValue() {
        return this._reduceChildren({}, (/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (acc, control, name) => {
            acc[name] = control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
            return acc;
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        /** @type {?} */
        let subtreeUpdated = this._reduceChildren(false, (/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */
        (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }));
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    _throwIfControlMissing(name) {
        if (!Object.keys(this.controls).length) {
            throw new Error(`
        There are no form controls registered with this group yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.controls[name]) {
            throw new Error(`Cannot find form control with name: ${name}.`);
        }
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) {
        Object.keys(this.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => cb(this.controls[k], k)));
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value = this._reduceValue();
    }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        /** @type {?} */
        let res = false;
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            res = res || (this.contains(name) && condition(control));
        }));
        return res;
    }
    /**
     * \@internal
     * @return {?}
     */
    _reduceValue() {
        return this._reduceChildren({}, (/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (acc, control, name) => {
            if (control.enabled || this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        }));
    }
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    _reduceChildren(initValue, fn) {
        /** @type {?} */
        let res = initValue;
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            res = fn(res, control, name);
        }));
        return res;
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _checkAllValuesPresent(value) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            if (value[name] === undefined) {
                throw new Error(`Must supply a value for form control with name: '${name}'.`);
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    FormGroup.prototype.controls;
}
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * \@usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * \@publicApi
 */
export class FormArray extends AbstractControl {
    /**
     * Creates a new `FormArray` instance.
     *
     * @param {?} controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param {?=} validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param {?=} asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */
    at(index) {
        return this.controls[index];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    push(control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    insert(index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */
    removeAt(index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */
    setControl(index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    }
    /**
     * Length of the control array.
     * @return {?}
     */
    get length() {
        return this.controls.length;
    }
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * \@usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param {?} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        value.forEach((/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */
        (newValue, index) => {
            this._throwIfControlMissing(index);
            this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * \@usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param {?} value Array of latest values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    patchValue(value, options = {}) {
        value.forEach((/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */
        (newValue, index) => {
            if (this.at(index)) {
                this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        }));
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * \@usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param {?=} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    reset(value = [], options = {}) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */
        (control, index) => {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        }));
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    getRawValue() {
        return this.controls.map((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            return control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
        }));
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * \@usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     * @return {?}
     */
    clear() {
        if (this.controls.length < 1)
            return;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control._registerOnCollectionChange((/**
         * @return {?}
         */
        () => { }))));
        this.controls.splice(0);
        this.updateValueAndValidity();
    }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        /** @type {?} */
        let subtreeUpdated = this.controls.reduce((/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */
        (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }), false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    _throwIfControlMissing(index) {
        if (!this.controls.length) {
            throw new Error(`
        There are no form controls registered with this array yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.at(index)) {
            throw new Error(`Cannot find form control at index ${index}`);
        }
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) {
        this.controls.forEach((/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */
        (control, index) => {
            cb(control, index);
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value =
            this.controls.filter((/**
             * @param {?} control
             * @return {?}
             */
            (control) => control.enabled || this.disabled))
                .map((/**
             * @param {?} control
             * @return {?}
             */
            (control) => control.value));
    }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        return this.controls.some((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.enabled && condition(control)));
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => this._registerControl(control)));
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _checkAllValuesPresent(value) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} i
         * @return {?}
         */
        (control, i) => {
            if (value[i] === undefined) {
                throw new Error(`Must supply a value for form control at index: ${i}.`);
            }
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        for (const control of this.controls) {
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    }
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    }
}
if (false) {
    /** @type {?} */
    FormArray.prototype.controls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0FBTzFDLE1BQU0sT0FBTyxLQUFLLEdBQUcsT0FBTzs7Ozs7OztBQU81QixNQUFNLE9BQU8sT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNoQyxNQUFNLE9BQU8sT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNoQyxNQUFNLE9BQU8sUUFBUSxHQUFHLFVBQVU7Ozs7Ozs7QUFFbEMsU0FBUyxLQUFLLENBQUMsT0FBd0IsRUFBRSxJQUFpQyxFQUFFLFNBQWlCO0lBQzNGLElBQUksSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5QjtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQzs7OztRQUl0RCxhQUFhLEdBQXlCLE9BQU87SUFDakQsSUFBSSxDQUFDLE9BQU87Ozs7SUFBQyxDQUFDLElBQW1CLEVBQUUsRUFBRTtRQUNuQyxJQUFJLGFBQWEsWUFBWSxTQUFTLEVBQUU7WUFDdEMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFBLElBQUksRUFBVSxD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QixFQUFFLENBQVMsRUFBRSxFQUFFO1lBQ3pELElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6RTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCxvQkFBb0I7UUFDbEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksT0FBTyxDQUFDLE9BQU87Z0JBQUUsT0FBTyxLQUFLLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLE9BQXdCO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjs7O0lBclZLLDZCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnN9IGZyb20gJy4vZGlyZWN0aXZlcy9zaGFyZWQnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHt0b09ic2VydmFibGV9IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5cbi8qKlxuICogUmVwb3J0cyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgdmFsaWQsIG1lYW5pbmcgdGhhdCBubyBlcnJvcnMgZXhpc3QgaW4gdGhlIGlucHV0IHZhbHVlLlxuICpcbiAqIEBzZWUgYHN0YXR1c2BcbiAqL1xuZXhwb3J0IGNvbnN0IFZBTElEID0gJ1ZBTElEJztcblxuLyoqXG4gKiBSZXBvcnRzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBpbnZhbGlkLCBtZWFuaW5nIHRoYXQgYW4gZXJyb3IgZXhpc3RzIGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAqXG4gKiBAc2VlIGBzdGF0dXNgXG4gKi9cbmV4cG9ydCBjb25zdCBJTlZBTElEID0gJ0lOVkFMSUQnO1xuXG4vKipcbiAqIFJlcG9ydHMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHBlbmRpbmcsIG1lYW5pbmcgdGhhdCB0aGF0IGFzeW5jIHZhbGlkYXRpb24gaXMgb2NjdXJyaW5nIGFuZFxuICogZXJyb3JzIGFyZSBub3QgeWV0IGF2YWlsYWJsZSBmb3IgdGhlIGlucHV0IHZhbHVlLlxuICpcbiAqIEBzZWUgYG1hcmtBc1BlbmRpbmdgXG4gKiBAc2VlIGBzdGF0dXNgXG4gKi9cbmV4cG9ydCBjb25zdCBQRU5ESU5HID0gJ1BFTkRJTkcnO1xuXG4vKipcbiAqIFJlcG9ydHMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGRpc2FibGVkLCBtZWFuaW5nIHRoYXQgdGhlIGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gYW5jZXN0b3JcbiAqIGNhbGN1bGF0aW9ucyBvZiB2YWxpZGl0eSBvciB2YWx1ZS5cbiAqXG4gKiBAc2VlIGBtYXJrQXNEaXNhYmxlZGBcbiAqIEBzZWUgYHN0YXR1c2BcbiAqL1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gJ0RJU0FCTEVEJztcblxuZnVuY3Rpb24gX2ZpbmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBwYXRoOiBBcnJheTxzdHJpbmd8bnVtYmVyPnxzdHJpbmcsIGRlbGltaXRlcjogc3RyaW5nKSB7XG4gIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShwYXRoKSkge1xuICAgIHBhdGggPSBwYXRoLnNwbGl0KGRlbGltaXRlcik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkgJiYgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gIC8vIE5vdCB1c2luZyBBcnJheS5yZWR1Y2UgaGVyZSBkdWUgdG8gYSBDaHJvbWUgODAgYnVnXG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwNDk5ODJcbiAgbGV0IGNvbnRyb2xUb0ZpbmQ6IEFic3RyYWN0Q29udHJvbHxudWxsID0gY29udHJvbDtcbiAgcGF0aC5mb3JFYWNoKChuYW1lOiBzdHJpbmd8bnVtYmVyKSA9PiB7XG4gICAgaWYgKGNvbnRyb2xUb0ZpbmQgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcbiAgICAgIGNvbnRyb2xUb0ZpbmQgPSBjb250cm9sVG9GaW5kLmNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUgYXMgc3RyaW5nKSA/XG4gICAgICAgICAgY29udHJvbFRvRmluZC5jb250cm9sc1tuYW1lXSA6XG4gICAgICAgICAgbnVsbDtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2xUb0ZpbmQgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnRyb2xUb0ZpbmQgPSBjb250cm9sVG9GaW5kLmF0KDxudW1iZXI+bmFtZSkgfHwgbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbFRvRmluZCA9IG51bGw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbnRyb2xUb0ZpbmQ7XG59XG5cbmZ1bmN0aW9uIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvck9yT3B0cz86IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW118QWJzdHJhY3RDb250cm9sT3B0aW9uc3xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpOiBWYWxpZGF0b3JGbnxudWxsIHtcbiAgY29uc3QgdmFsaWRhdG9yID1cbiAgICAgIChpc09wdGlvbnNPYmoodmFsaWRhdG9yT3JPcHRzKSA/ICh2YWxpZGF0b3JPck9wdHMgYXMgQWJzdHJhY3RDb250cm9sT3B0aW9ucykudmFsaWRhdG9ycyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JPck9wdHMpIGFzIFZhbGlkYXRvckZuIHxcbiAgICAgIFZhbGlkYXRvckZuW10gfCBudWxsO1xuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbGlkYXRvcikgPyBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3IpIDogdmFsaWRhdG9yIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoXG4gICAgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXXxudWxsLFxuICAgIHZhbGlkYXRvck9yT3B0cz86IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW118QWJzdHJhY3RDb250cm9sT3B0aW9uc3xudWxsKTogQXN5bmNWYWxpZGF0b3JGbnxcbiAgICBudWxsIHtcbiAgY29uc3Qgb3JpZ0FzeW5jVmFsaWRhdG9yID1cbiAgICAgIChpc09wdGlvbnNPYmoodmFsaWRhdG9yT3JPcHRzKSA/ICh2YWxpZGF0b3JPck9wdHMgYXMgQWJzdHJhY3RDb250cm9sT3B0aW9ucykuYXN5bmNWYWxpZGF0b3JzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yKSBhcyBBc3luY1ZhbGlkYXRvckZuIHxcbiAgICAgIEFzeW5jVmFsaWRhdG9yRm4gfCBudWxsO1xuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9yaWdBc3luY1ZhbGlkYXRvcikgPyBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKG9yaWdBc3luY1ZhbGlkYXRvcikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ0FzeW5jVmFsaWRhdG9yIHx8IG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIEZvcm1Ib29rcyA9ICdjaGFuZ2UnfCdibHVyJ3wnc3VibWl0JztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIG9wdGlvbnMgcHJvdmlkZWQgdG8gYW4gYEFic3RyYWN0Q29udHJvbGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0Q29udHJvbE9wdGlvbnMge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBsaXN0IG9mIHZhbGlkYXRvcnMgYXBwbGllZCB0byBhIGNvbnRyb2wuXG4gICAqL1xuICB2YWxpZGF0b3JzPzogVmFsaWRhdG9yRm58VmFsaWRhdG9yRm5bXXxudWxsO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSBsaXN0IG9mIGFzeW5jIHZhbGlkYXRvcnMgYXBwbGllZCB0byBjb250cm9sLlxuICAgKi9cbiAgYXN5bmNWYWxpZGF0b3JzPzogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW118bnVsbDtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGUgZXZlbnQgbmFtZSBmb3IgY29udHJvbCB0byB1cGRhdGUgdXBvbi5cbiAgICovXG4gIHVwZGF0ZU9uPzogJ2NoYW5nZSd8J2JsdXInfCdzdWJtaXQnO1xufVxuXG5cbmZ1bmN0aW9uIGlzT3B0aW9uc09iaih2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdfEFic3RyYWN0Q29udHJvbE9wdGlvbnN8XG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsaWRhdG9yT3JPcHRzICE9IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsaWRhdG9yT3JPcHRzKSAmJlxuICAgICAgdHlwZW9mIHZhbGlkYXRvck9yT3B0cyA9PT0gJ29iamVjdCc7XG59XG5cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciBgRm9ybUNvbnRyb2xgLCBgRm9ybUdyb3VwYCwgYW5kIGBGb3JtQXJyYXlgLlxuICpcbiAqIEl0IHByb3ZpZGVzIHNvbWUgb2YgdGhlIHNoYXJlZCBiZWhhdmlvciB0aGF0IGFsbCBjb250cm9scyBhbmQgZ3JvdXBzIG9mIGNvbnRyb2xzIGhhdmUsIGxpa2VcbiAqIHJ1bm5pbmcgdmFsaWRhdG9ycywgY2FsY3VsYXRpbmcgc3RhdHVzLCBhbmQgcmVzZXR0aW5nIHN0YXRlLiBJdCBhbHNvIGRlZmluZXMgdGhlIHByb3BlcnRpZXNcbiAqIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBzdWItY2xhc3NlcywgbGlrZSBgdmFsdWVgLCBgdmFsaWRgLCBhbmQgYGRpcnR5YC4gSXQgc2hvdWxkbid0IGJlXG4gKiBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuXG4gKlxuICogQHNlZSBbRm9ybXMgR3VpZGVdKC9ndWlkZS9mb3JtcylcbiAqIEBzZWUgW1JlYWN0aXZlIEZvcm1zIEd1aWRlXSgvZ3VpZGUvcmVhY3RpdmUtZm9ybXMpXG4gKiBAc2VlIFtEeW5hbWljIEZvcm1zIEd1aWRlXSgvZ3VpZGUvZHluYW1pYy1mb3JtKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29udHJvbCB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9wZW5kaW5nRGlydHkhOiBib29sZWFuO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIF9wZW5kaW5nVG91Y2hlZCE6IGJvb2xlYW47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25Db2xsZWN0aW9uQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgX3VwZGF0ZU9uITogRm9ybUhvb2tzO1xuXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9wYXJlbnQhOiBGb3JtR3JvdXB8Rm9ybUFycmF5O1xuICBwcml2YXRlIF9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb246IGFueTtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNvbnRyb2wuXG4gICAqXG4gICAqICogRm9yIGEgYEZvcm1Db250cm9sYCwgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqICogRm9yIGFuIGVuYWJsZWQgYEZvcm1Hcm91cGAsIHRoZSB2YWx1ZXMgb2YgZW5hYmxlZCBjb250cm9scyBhcyBhbiBvYmplY3RcbiAgICogd2l0aCBhIGtleS12YWx1ZSBwYWlyIGZvciBlYWNoIG1lbWJlciBvZiB0aGUgZ3JvdXAuXG4gICAqICogRm9yIGEgZGlzYWJsZWQgYEZvcm1Hcm91cGAsIHRoZSB2YWx1ZXMgb2YgYWxsIGNvbnRyb2xzIGFzIGFuIG9iamVjdFxuICAgKiB3aXRoIGEga2V5LXZhbHVlIHBhaXIgZm9yIGVhY2ggbWVtYmVyIG9mIHRoZSBncm91cC5cbiAgICogKiBGb3IgYSBgRm9ybUFycmF5YCwgdGhlIHZhbHVlcyBvZiBlbmFibGVkIGNvbnRyb2xzIGFzIGFuIGFycmF5LlxuICAgKlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIEFic3RyYWN0Q29udHJvbCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBzeW5jaHJvbm91cyB2YWxpZGl0eSBvZiB0aGlzIGNvbnRyb2wuXG4gICAqIEBwYXJhbSBhc3luY1ZhbGlkYXRvciBUaGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBhc3luY2hyb25vdXMgdmFsaWRpdHkgb2YgdGhpc1xuICAgKiBjb250cm9sLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yRm58bnVsbCwgcHVibGljIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZufG51bGwpIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgY29udHJvbC5cbiAgICovXG4gIGdldCBwYXJlbnQoKTogRm9ybUdyb3VwfEZvcm1BcnJheSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuIFRoZXJlIGFyZSBmb3VyIHBvc3NpYmxlXG4gICAqIHZhbGlkYXRpb24gc3RhdHVzIHZhbHVlczpcbiAgICpcbiAgICogKiAqKlZBTElEKio6IFRoaXMgY29udHJvbCBoYXMgcGFzc2VkIGFsbCB2YWxpZGF0aW9uIGNoZWNrcy5cbiAgICogKiAqKklOVkFMSUQqKjogVGhpcyBjb250cm9sIGhhcyBmYWlsZWQgYXQgbGVhc3Qgb25lIHZhbGlkYXRpb24gY2hlY2suXG4gICAqICogKipQRU5ESU5HKio6IFRoaXMgY29udHJvbCBpcyBpbiB0aGUgbWlkc3Qgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXG4gICAqICogKipESVNBQkxFRCoqOiBUaGlzIGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MuXG4gICAqXG4gICAqIFRoZXNlIHN0YXR1cyB2YWx1ZXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSwgc28gYSBjb250cm9sIGNhbm5vdCBiZVxuICAgKiBib3RoIHZhbGlkIEFORCBpbnZhbGlkIG9yIGludmFsaWQgQU5EIGRpc2FibGVkLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHB1YmxpYyByZWFkb25seSBzdGF0dXMhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgdmFsaWRgIHdoZW4gaXRzIGBzdGF0dXNgIGlzIGBWQUxJRGAuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXN9XG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgb2YgaXRzIHZhbGlkYXRpb24gdGVzdHMsXG4gICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgaW52YWxpZGAgd2hlbiBpdHMgYHN0YXR1c2AgaXMgYElOVkFMSURgLlxuICAgKlxuICAgKiBAc2VlIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzfVxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgY29udHJvbCBoYXMgZmFpbGVkIG9uZSBvciBtb3JlIG9mIGl0cyB2YWxpZGF0aW9uIGNoZWNrcyxcbiAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgZ2V0IGludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgcGVuZGluZ2Agd2hlbiBpdHMgYHN0YXR1c2AgaXMgYFBFTkRJTkdgLlxuICAgKlxuICAgKiBAc2VlIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzfVxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgY29udHJvbCBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVjayxcbiAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgZ2V0IHBlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09IFBFTkRJTkc7XG4gIH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIGBkaXNhYmxlZGAgd2hlbiBpdHMgYHN0YXR1c2AgaXMgYERJU0FCTEVEYC5cbiAgICpcbiAgICogRGlzYWJsZWQgY29udHJvbHMgYXJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgKiBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlaXIgYW5jZXN0b3JcbiAgICogY29udHJvbHMuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXN9XG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbnRyb2wgaXMgZGlzYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IERJU0FCTEVEO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgZW5hYmxlZGAgYXMgbG9uZyBhcyBpdHMgYHN0YXR1c2AgaXMgbm90IGBESVNBQkxFRGAuXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbnRyb2wgaGFzIGFueSBzdGF0dXMgb3RoZXIgdGhhbiAnRElTQUJMRUQnLFxuICAgKiBmYWxzZSBpZiB0aGUgc3RhdHVzIGlzICdESVNBQkxFRCcuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXN9XG4gICAqXG4gICAqL1xuICBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgIT09IERJU0FCTEVEO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCBjb250YWluaW5nIGFueSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IGZhaWxpbmcgdmFsaWRhdGlvbixcbiAgICogb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHB1YmxpYyByZWFkb25seSBlcnJvcnMhOiBWYWxpZGF0aW9uRXJyb3JzfG51bGw7XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWRcbiAgICogdGhlIHZhbHVlIGluIHRoZSBVSS5cbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdXNlciBoYXMgbm90IHlldCBjaGFuZ2VkIHRoZSB2YWx1ZSBpbiB0aGUgVUk7IGNvbXBhcmUgYGRpcnR5YC5cbiAgICogUHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgZG8gbm90IG1hcmsgaXQgZGlydHkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcHJpc3RpbmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIGNvbnRyb2wgaXMgYGRpcnR5YCBpZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgdmFsdWVcbiAgICogaW4gdGhlIFVJLlxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZSBvZiB0aGlzIGNvbnRyb2wgaW4gdGhlIFVJOyBjb21wYXJlIGBwcmlzdGluZWAuXG4gICAqIFByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIGRvIG5vdCBtYXJrIGl0IGRpcnR5LlxuICAgKi9cbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5wcmlzdGluZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBjb250cm9sIGlzIG1hcmtlZCBhcyBgdG91Y2hlZGAuXG4gICAqXG4gICAqIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxuICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB0b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGNvbnRyb2wgaGFzIG5vdCBiZWVuIG1hcmtlZCBhcyB0b3VjaGVkXG4gICAqXG4gICAqIEEgY29udHJvbCBpcyBgdW50b3VjaGVkYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCB0cmlnZ2VyZWRcbiAgICogYSBgYmx1cmAgZXZlbnQgb24gaXQuXG4gICAqL1xuICBnZXQgdW50b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50b3VjaGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbXVsdGljYXN0aW5nIG9ic2VydmFibGUgdGhhdCBlbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VzLCBpblxuICAgKiB0aGUgVUkgb3IgcHJvZ3JhbW1hdGljYWxseS4gSXQgYWxzbyBlbWl0cyBhbiBldmVudCBlYWNoIHRpbWUgeW91IGNhbGwgZW5hYmxlKCkgb3IgZGlzYWJsZSgpXG4gICAqIHdpdGhvdXQgcGFzc2luZyBhbG9uZyB7ZW1pdEV2ZW50OiBmYWxzZX0gYXMgYSBmdW5jdGlvbiBhcmd1bWVudC5cbiAgICovXG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwdWJsaWMgcmVhZG9ubHkgdmFsdWVDaGFuZ2VzITogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIG11bHRpY2FzdGluZyBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsaWRhdGlvbiBgc3RhdHVzYCBvZiB0aGUgY29udHJvbFxuICAgKiByZWNhbGN1bGF0ZXMuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXN9XG4gICAqXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1c0NoYW5nZXMhOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgdGhlIHVwZGF0ZSBzdHJhdGVneSBvZiB0aGUgYEFic3RyYWN0Q29udHJvbGAgKG1lYW5pbmdcbiAgICogdGhlIGV2ZW50IG9uIHdoaWNoIHRoZSBjb250cm9sIHVwZGF0ZXMgaXRzZWxmKS5cbiAgICogUG9zc2libGUgdmFsdWVzOiBgJ2NoYW5nZSdgIHwgYCdibHVyJ2AgfCBgJ3N1Ym1pdCdgXG4gICAqIERlZmF1bHQgdmFsdWU6IGAnY2hhbmdlJ2BcbiAgICovXG4gIGdldCB1cGRhdGVPbigpOiBGb3JtSG9va3Mge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVPbiA/IHRoaXMuX3VwZGF0ZU9uIDogKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudXBkYXRlT24gOiAnY2hhbmdlJyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3luY2hyb25vdXMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiAgQ2FsbGluZ1xuICAgKiB0aGlzIG92ZXJ3cml0ZXMgYW55IGV4aXN0aW5nIHN5bmMgdmFsaWRhdG9ycy5cbiAgICpcbiAgICogV2hlbiB5b3UgYWRkIG9yIHJlbW92ZSBhIHZhbGlkYXRvciBhdCBydW4gdGltZSwgeW91IG11c3QgY2FsbFxuICAgKiBgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpYCBmb3IgdGhlIG5ldyB2YWxpZGF0aW9uIHRvIHRha2UgZWZmZWN0LlxuICAgKlxuICAgKi9cbiAgc2V0VmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW118bnVsbCk6IHZvaWQge1xuICAgIHRoaXMudmFsaWRhdG9yID0gY29lcmNlVG9WYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhc3luYyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuIENhbGxpbmcgdGhpc1xuICAgKiBvdmVyd3JpdGVzIGFueSBleGlzdGluZyBhc3luYyB2YWxpZGF0b3JzLlxuICAgKlxuICAgKiBXaGVuIHlvdSBhZGQgb3IgcmVtb3ZlIGEgdmFsaWRhdG9yIGF0IHJ1biB0aW1lLCB5b3UgbXVzdCBjYWxsXG4gICAqIGB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KClgIGZvciB0aGUgbmV3IHZhbGlkYXRpb24gdG8gdGFrZSBlZmZlY3QuXG4gICAqXG4gICAqL1xuICBzZXRBc3luY1ZhbGlkYXRvcnMobmV3VmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXXxudWxsKTogdm9pZCB7XG4gICAgdGhpcy5hc3luY1ZhbGlkYXRvciA9IGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IobmV3VmFsaWRhdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbXB0aWVzIG91dCB0aGUgc3luYyB2YWxpZGF0b3IgbGlzdC5cbiAgICpcbiAgICogV2hlbiB5b3UgYWRkIG9yIHJlbW92ZSBhIHZhbGlkYXRvciBhdCBydW4gdGltZSwgeW91IG11c3QgY2FsbFxuICAgKiBgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpYCBmb3IgdGhlIG5ldyB2YWxpZGF0aW9uIHRvIHRha2UgZWZmZWN0LlxuICAgKlxuICAgKi9cbiAgY2xlYXJWYWxpZGF0b3JzKCk6IHZvaWQge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbXB0aWVzIG91dCB0aGUgYXN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAqXG4gICAqIFdoZW4geW91IGFkZCBvciByZW1vdmUgYSB2YWxpZGF0b3IgYXQgcnVuIHRpbWUsIHlvdSBtdXN0IGNhbGxcbiAgICogYHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKWAgZm9yIHRoZSBuZXcgdmFsaWRhdGlvbiB0byB0YWtlIGVmZmVjdC5cbiAgICpcbiAgICovXG4gIGNsZWFyQXN5bmNWYWxpZGF0b3JzKCk6IHZvaWQge1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC4gQSBjb250cm9sIGlzIHRvdWNoZWQgYnkgZm9jdXMgYW5kXG4gICAqIGJsdXIgZXZlbnRzIHRoYXQgZG8gbm90IGNoYW5nZSB0aGUgdmFsdWUuXG4gICAqXG4gICAqIEBzZWUgYG1hcmtBc1VudG91Y2hlZCgpYFxuICAgKiBAc2VlIGBtYXJrQXNEaXJ0eSgpYFxuICAgKiBAc2VlIGBtYXJrQXNQcmlzdGluZSgpYFxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIG1hcmtpbmcgaXMgYXBwbGllZC5cbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIG1hcmtBc1RvdWNoZWQob3B0czoge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgICh0aGlzIGFzIHt0b3VjaGVkOiBib29sZWFufSkudG91Y2hlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvcHRzLm9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQubWFya0FzVG91Y2hlZChvcHRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYW5kIGFsbCBpdHMgZGVzY2VuZGFudCBjb250cm9scyBhcyBgdG91Y2hlZGAuXG4gICAqIEBzZWUgYG1hcmtBc1RvdWNoZWQoKWBcbiAgICovXG4gIG1hcmtBbGxBc1RvdWNoZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKHtvbmx5U2VsZjogdHJ1ZX0pO1xuXG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IGNvbnRyb2wubWFya0FsbEFzVG91Y2hlZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdW50b3VjaGVkYC5cbiAgICpcbiAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgYWxzbyBtYXJrcyBhbGwgY2hpbGRyZW4gYXMgYHVudG91Y2hlZGBcbiAgICogYW5kIHJlY2FsY3VsYXRlcyB0aGUgYHRvdWNoZWRgIHN0YXR1cyBvZiBhbGwgcGFyZW50IGNvbnRyb2xzLlxuICAgKlxuICAgKiBAc2VlIGBtYXJrQXNUb3VjaGVkKClgXG4gICAqIEBzZWUgYG1hcmtBc0RpcnR5KClgXG4gICAqIEBzZWUgYG1hcmtBc1ByaXN0aW5lKClgXG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIG1hcmtpbmcgaXMgYXBwbGllZC5cbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIG1hcmtBc1VudG91Y2hlZChvcHRzOiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgKHRoaXMgYXMge3RvdWNoZWQ6IGJvb2xlYW59KS50b3VjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGVuZGluZ1RvdWNoZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZCh7b25seVNlbGY6IHRydWV9KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9wdHMub25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZChvcHRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYGRpcnR5YC4gQSBjb250cm9sIGJlY29tZXMgZGlydHkgd2hlblxuICAgKiB0aGUgY29udHJvbCdzIHZhbHVlIGlzIGNoYW5nZWQgdGhyb3VnaCB0aGUgVUk7IGNvbXBhcmUgYG1hcmtBc1RvdWNoZWRgLlxuICAgKlxuICAgKiBAc2VlIGBtYXJrQXNUb3VjaGVkKClgXG4gICAqIEBzZWUgYG1hcmtBc1VudG91Y2hlZCgpYFxuICAgKiBAc2VlIGBtYXJrQXNQcmlzdGluZSgpYFxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIG1hcmtpbmcgaXMgYXBwbGllZC5cbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIG1hcmtBc0RpcnR5KG9wdHM6IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICAodGhpcyBhcyB7cHJpc3RpbmU6IGJvb2xlYW59KS5wcmlzdGluZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc0RpcnR5KG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcHJpc3RpbmVgLlxuICAgKlxuICAgKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBtYXJrcyBhbGwgY2hpbGRyZW4gYXMgYHByaXN0aW5lYCxcbiAgICogYW5kIHJlY2FsY3VsYXRlcyB0aGUgYHByaXN0aW5lYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxuICAgKiBjb250cm9scy5cbiAgICpcbiAgICogQHNlZSBgbWFya0FzVG91Y2hlZCgpYFxuICAgKiBAc2VlIGBtYXJrQXNVbnRvdWNoZWQoKWBcbiAgICogQHNlZSBgbWFya0FzRGlydHkoKWBcbiAgICpcbiAgICogQHBhcmFtIG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBlbWl0cyBldmVudHMgYWZ0ZXJcbiAgICogbWFya2luZyBpcyBhcHBsaWVkLlxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgbWFyayBvbmx5IHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXG4gICAqIG1hcmtzIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgbWFya0FzUHJpc3RpbmUob3B0czoge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgICh0aGlzIGFzIHtwcmlzdGluZTogYm9vbGVhbn0pLnByaXN0aW5lID0gdHJ1ZTtcbiAgICB0aGlzLl9wZW5kaW5nRGlydHkgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKHtvbmx5U2VsZjogdHJ1ZX0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZShvcHRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHBlbmRpbmdgLlxuICAgKlxuICAgKiBBIGNvbnRyb2wgaXMgcGVuZGluZyB3aGlsZSB0aGUgY29udHJvbCBwZXJmb3JtcyBhc3luYyB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBAc2VlIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzfVxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlcyBhbmRcbiAgICogZW1pdHMgZXZlbnRzIGFmdGVyIG1hcmtpbmcgaXMgYXBwbGllZC5cbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCB0aGUgYHN0YXR1c0NoYW5nZXNgXG4gICAqIG9ic2VydmFibGUgZW1pdHMgYW4gZXZlbnQgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyB0aGUgY29udHJvbCBpcyBtYXJrZWQgcGVuZGluZy5cbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxuICAgKlxuICAgKi9cbiAgbWFya0FzUGVuZGluZyhvcHRzOiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgKHRoaXMgYXMge3N0YXR1czogc3RyaW5nfSkuc3RhdHVzID0gUEVORElORztcblxuICAgIGlmIChvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpIHtcbiAgICAgICh0aGlzLnN0YXR1c0NoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPGFueT4pLmVtaXQodGhpcy5zdGF0dXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9wdHMub25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5tYXJrQXNQZW5kaW5nKG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgY29udHJvbC4gVGhpcyBtZWFucyB0aGUgY29udHJvbCBpcyBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICogZXhjbHVkZWQgZnJvbSB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGFueSBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgYERJU0FCTEVEYC5cbiAgICpcbiAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGNoaWxkcmVuLCBhbGwgY2hpbGRyZW4gYXJlIGFsc28gZGlzYWJsZWQuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXN9XG4gICAqXG4gICAqIEBwYXJhbSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlc1xuICAgKiBjaGFuZ2VzIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIGNvbnRyb2wgaXMgZGlzYWJsZWQuXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBtYXJrIG9ubHkgdGhpcyBjb250cm9sLiBXaGVuIGZhbHNlIG9yIG5vdCBzdXBwbGllZCxcbiAgICogbWFya3MgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIGRpc2FibGVkLlxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXG4gICAqL1xuICBkaXNhYmxlKG9wdHM6IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICAvLyBJZiBwYXJlbnQgaGFzIGJlZW4gbWFya2VkIGFydGlmaWNpYWxseSBkaXJ0eSB3ZSBkb24ndCB3YW50IHRvIHJlLWNhbGN1bGF0ZSB0aGVcbiAgICAvLyBwYXJlbnQncyBkaXJ0aW5lc3MgYmFzZWQgb24gdGhlIGNoaWxkcmVuLlxuICAgIGNvbnN0IHNraXBQcmlzdGluZUNoZWNrID0gdGhpcy5fcGFyZW50TWFya2VkRGlydHkob3B0cy5vbmx5U2VsZik7XG5cbiAgICAodGhpcyBhcyB7c3RhdHVzOiBzdHJpbmd9KS5zdGF0dXMgPSBESVNBQkxFRDtcbiAgICAodGhpcyBhcyB7ZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0pLmVycm9ycyA9IG51bGw7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wuZGlzYWJsZSh7Li4ub3B0cywgb25seVNlbGY6IHRydWV9KTtcbiAgICB9KTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgKHRoaXMudmFsdWVDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgKHRoaXMuc3RhdHVzQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8c3RyaW5nPikuZW1pdCh0aGlzLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKHsuLi5vcHRzLCBza2lwUHJpc3RpbmVDaGVja30pO1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaCgoY2hhbmdlRm4pID0+IGNoYW5nZUZuKHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIGlzIGluY2x1ZGVkIGluIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgKiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGl0cyBwYXJlbnQuIEl0cyBzdGF0dXMgcmVjYWxjdWxhdGVzIGJhc2VkIG9uIGl0cyB2YWx1ZSBhbmRcbiAgICogaXRzIHZhbGlkYXRvcnMuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGlmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIGFyZSBlbmFibGVkLlxuICAgKlxuICAgKiBAc2VlIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzfVxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBDb25maWd1cmUgb3B0aW9ucyB0aGF0IGNvbnRyb2wgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlcyBhbmRcbiAgICogZW1pdHMgZXZlbnRzIHdoZW4gbWFya2VkIGFzIHVudG91Y2hlZFxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgbWFyayBvbmx5IHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXG4gICAqIG1hcmtzIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcbiAgICogYHZhbHVlQ2hhbmdlc2BcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXG4gICAqL1xuICBlbmFibGUob3B0czoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIC8vIElmIHBhcmVudCBoYXMgYmVlbiBtYXJrZWQgYXJ0aWZpY2lhbGx5IGRpcnR5IHdlIGRvbid0IHdhbnQgdG8gcmUtY2FsY3VsYXRlIHRoZVxuICAgIC8vIHBhcmVudCdzIGRpcnRpbmVzcyBiYXNlZCBvbiB0aGUgY2hpbGRyZW4uXG4gICAgY29uc3Qgc2tpcFByaXN0aW5lQ2hlY2sgPSB0aGlzLl9wYXJlbnRNYXJrZWREaXJ0eShvcHRzLm9ubHlTZWxmKTtcblxuICAgICh0aGlzIGFzIHtzdGF0dXM6IHN0cmluZ30pLnN0YXR1cyA9IFZBTElEO1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLmVuYWJsZSh7Li4ub3B0cywgb25seVNlbGY6IHRydWV9KTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdHMuZW1pdEV2ZW50fSk7XG5cbiAgICB0aGlzLl91cGRhdGVBbmNlc3RvcnMoey4uLm9wdHMsIHNraXBQcmlzdGluZUNoZWNrfSk7XG4gICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5mb3JFYWNoKChjaGFuZ2VGbikgPT4gY2hhbmdlRm4oZmFsc2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFuY2VzdG9ycyhcbiAgICAgIG9wdHM6IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4sIHNraXBQcmlzdGluZUNoZWNrPzogYm9vbGVhbn0pIHtcbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvcHRzLm9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRzKTtcbiAgICAgIGlmICghb3B0cy5za2lwUHJpc3RpbmVDaGVjaykge1xuICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHBhcmVudCBTZXRzIHRoZSBwYXJlbnQgb2YgdGhlIGNvbnRyb2xcbiAgICovXG4gIHNldFBhcmVudChwYXJlbnQ6IEZvcm1Hcm91cHxGb3JtQXJyYXkpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAgICovXG4gIGFic3RyYWN0IHBhdGNoVmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gICAqL1xuICBhYnN0cmFjdCByZXNldCh2YWx1ZT86IGFueSwgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpdCBhbHNvIHVwZGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBvZiBpdHMgYW5jZXN0b3JzLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXMgYW5kIGVtaXRzIGV2ZW50c1xuICAgKiBhZnRlciB1cGRhdGVzIGFuZCB2YWxpZGl0eSBjaGVja3MgYXJlIGFwcGxpZWQuXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBvbmx5IHVwZGF0ZSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxuICAgKiB1cGRhdGUgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHVwZGF0ZWQuXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cbiAgICovXG4gIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0czoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3NldEluaXRpYWxTdGF0dXMoKTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTtcbiAgICAgICh0aGlzIGFzIHtlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSkuZXJyb3JzID0gdGhpcy5fcnVuVmFsaWRhdG9yKCk7XG4gICAgICAodGhpcyBhcyB7c3RhdHVzOiBzdHJpbmd9KS5zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLnN0YXR1cyA9PT0gUEVORElORykge1xuICAgICAgICB0aGlzLl9ydW5Bc3luY1ZhbGlkYXRvcihvcHRzLmVtaXRFdmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgKHRoaXMudmFsdWVDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgKHRoaXMuc3RhdHVzQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8c3RyaW5nPikuZW1pdCh0aGlzLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0cyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdXBkYXRlVHJlZVZhbGlkaXR5KG9wdHM6IHtlbWl0RXZlbnQ/OiBib29sZWFufSA9IHtlbWl0RXZlbnQ6IHRydWV9KSB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjdHJsOiBBYnN0cmFjdENvbnRyb2wpID0+IGN0cmwuX3VwZGF0ZVRyZWVWYWxpZGl0eShvcHRzKSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBvcHRzLmVtaXRFdmVudH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5pdGlhbFN0YXR1cygpIHtcbiAgICAodGhpcyBhcyB7c3RhdHVzOiBzdHJpbmd9KS5zdGF0dXMgPSB0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkgPyBESVNBQkxFRCA6IFZBTElEO1xuICB9XG5cbiAgcHJpdmF0ZSBfcnVuVmFsaWRhdG9yKCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yID8gdGhpcy52YWxpZGF0b3IodGhpcykgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfcnVuQXN5bmNWYWxpZGF0b3IoZW1pdEV2ZW50PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAodGhpcyBhcyB7c3RhdHVzOiBzdHJpbmd9KS5zdGF0dXMgPSBQRU5ESU5HO1xuICAgICAgY29uc3Qgb2JzID0gdG9PYnNlcnZhYmxlKHRoaXMuYXN5bmNWYWxpZGF0b3IodGhpcykpO1xuICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uID1cbiAgICAgICAgICBvYnMuc3Vic2NyaWJlKChlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCkgPT4gdGhpcy5zZXRFcnJvcnMoZXJyb3JzLCB7ZW1pdEV2ZW50fSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbCB3aGVuIHJ1bm5pbmcgdmFsaWRhdGlvbnMgbWFudWFsbHksIHJhdGhlciB0aGFuIGF1dG9tYXRpY2FsbHkuXG4gICAqXG4gICAqIENhbGxpbmcgYHNldEVycm9yc2AgYWxzbyB1cGRhdGVzIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqICMjIyBNYW51YWxseSBzZXQgdGhlIGVycm9ycyBmb3IgYSBjb250cm9sXG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbCgnc29tZUxvZ2luJyk7XG4gICAqIGxvZ2luLnNldEVycm9ycyh7XG4gICAqICAgbm90VW5pcXVlOiB0cnVlXG4gICAqIH0pO1xuICAgKlxuICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xuICAgKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHsgbm90VW5pcXVlOiB0cnVlIH0pO1xuICAgKlxuICAgKiBsb2dpbi5zZXRWYWx1ZSgnc29tZU90aGVyTG9naW4nKTtcbiAgICpcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xuICAgKiBgYGBcbiAgICovXG4gIHNldEVycm9ycyhlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCwgb3B0czoge2VtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICAodGhpcyBhcyB7ZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0pLmVycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLl91cGRhdGVDb250cm9sc0Vycm9ycyhvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIGNoaWxkIGNvbnRyb2wgZ2l2ZW4gdGhlIGNvbnRyb2wncyBuYW1lIG9yIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIEEgZG90LWRlbGltaXRlZCBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5nL251bWJlciB2YWx1ZXMgdGhhdCBkZWZpbmUgdGhlIHBhdGggdG8gdGhlXG4gICAqIGNvbnRyb2wuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBSZXRyaWV2ZSBhIG5lc3RlZCBjb250cm9sXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCB0byBnZXQgYSBgbmFtZWAgY29udHJvbCBuZXN0ZWQgd2l0aGluIGEgYHBlcnNvbmAgc3ViLWdyb3VwOlxuICAgKlxuICAgKiAqIGB0aGlzLmZvcm0uZ2V0KCdwZXJzb24ubmFtZScpO2BcbiAgICpcbiAgICogLU9SLVxuICAgKlxuICAgKiAqIGB0aGlzLmZvcm0uZ2V0KFsncGVyc29uJywgJ25hbWUnXSk7YFxuICAgKi9cbiAgZ2V0KHBhdGg6IEFycmF5PHN0cmluZ3xudW1iZXI+fHN0cmluZyk6IEFic3RyYWN0Q29udHJvbHxudWxsIHtcbiAgICByZXR1cm4gX2ZpbmQodGhpcywgcGF0aCwgJy4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmVwb3J0cyBlcnJvciBkYXRhIGZvciB0aGUgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0gZXJyb3JDb2RlIFRoZSBjb2RlIG9mIHRoZSBlcnJvciB0byBjaGVja1xuICAgKiBAcGFyYW0gcGF0aCBBIGxpc3Qgb2YgY29udHJvbCBuYW1lcyB0aGF0IGRlc2lnbmF0ZXMgaG93IHRvIG1vdmUgZnJvbSB0aGUgY3VycmVudCBjb250cm9sXG4gICAqIHRvIHRoZSBjb250cm9sIHRoYXQgc2hvdWxkIGJlIHF1ZXJpZWQgZm9yIGVycm9ycy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZm9sbG93aW5nIGBGb3JtR3JvdXBgOlxuICAgKlxuICAgKiBgYGBcbiAgICogZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgKiAgIGFkZHJlc3M6IG5ldyBGb3JtR3JvdXAoeyBzdHJlZXQ6IG5ldyBGb3JtQ29udHJvbCgpIH0pXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIHBhdGggdG8gdGhlICdzdHJlZXQnIGNvbnRyb2wgZnJvbSB0aGUgcm9vdCBmb3JtIHdvdWxkIGJlICdhZGRyZXNzJyAtPiAnc3RyZWV0Jy5cbiAgICpcbiAgICogSXQgY2FuIGJlIHByb3ZpZGVkIHRvIHRoaXMgbWV0aG9kIGluIG9uZSBvZiB0d28gZm9ybWF0czpcbiAgICpcbiAgICogMS4gQW4gYXJyYXkgb2Ygc3RyaW5nIGNvbnRyb2wgbmFtZXMsIGUuZy4gYFsnYWRkcmVzcycsICdzdHJlZXQnXWBcbiAgICogMS4gQSBwZXJpb2QtZGVsaW1pdGVkIGxpc3Qgb2YgY29udHJvbCBuYW1lcyBpbiBvbmUgc3RyaW5nLCBlLmcuIGAnYWRkcmVzcy5zdHJlZXQnYFxuICAgKlxuICAgKiBAcmV0dXJucyBlcnJvciBkYXRhIGZvciB0aGF0IHBhcnRpY3VsYXIgZXJyb3IuIElmIHRoZSBjb250cm9sIG9yIGVycm9yIGlzIG5vdCBwcmVzZW50LFxuICAgKiBudWxsIGlzIHJldHVybmVkLlxuICAgKi9cbiAgZ2V0RXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg/OiBBcnJheTxzdHJpbmd8bnVtYmVyPnxzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBwYXRoID8gdGhpcy5nZXQocGF0aCkgOiB0aGlzO1xuICAgIHJldHVybiBjb250cm9sICYmIGNvbnRyb2wuZXJyb3JzID8gY29udHJvbC5lcnJvcnNbZXJyb3JDb2RlXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlcG9ydHMgd2hldGhlciB0aGUgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBwYXRoIGhhcyB0aGUgZXJyb3Igc3BlY2lmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0gZXJyb3JDb2RlIFRoZSBjb2RlIG9mIHRoZSBlcnJvciB0byBjaGVja1xuICAgKiBAcGFyYW0gcGF0aCBBIGxpc3Qgb2YgY29udHJvbCBuYW1lcyB0aGF0IGRlc2lnbmF0ZXMgaG93IHRvIG1vdmUgZnJvbSB0aGUgY3VycmVudCBjb250cm9sXG4gICAqIHRvIHRoZSBjb250cm9sIHRoYXQgc2hvdWxkIGJlIHF1ZXJpZWQgZm9yIGVycm9ycy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZm9sbG93aW5nIGBGb3JtR3JvdXBgOlxuICAgKlxuICAgKiBgYGBcbiAgICogZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgKiAgIGFkZHJlc3M6IG5ldyBGb3JtR3JvdXAoeyBzdHJlZXQ6IG5ldyBGb3JtQ29udHJvbCgpIH0pXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIHBhdGggdG8gdGhlICdzdHJlZXQnIGNvbnRyb2wgZnJvbSB0aGUgcm9vdCBmb3JtIHdvdWxkIGJlICdhZGRyZXNzJyAtPiAnc3RyZWV0Jy5cbiAgICpcbiAgICogSXQgY2FuIGJlIHByb3ZpZGVkIHRvIHRoaXMgbWV0aG9kIGluIG9uZSBvZiB0d28gZm9ybWF0czpcbiAgICpcbiAgICogMS4gQW4gYXJyYXkgb2Ygc3RyaW5nIGNvbnRyb2wgbmFtZXMsIGUuZy4gYFsnYWRkcmVzcycsICdzdHJlZXQnXWBcbiAgICogMS4gQSBwZXJpb2QtZGVsaW1pdGVkIGxpc3Qgb2YgY29udHJvbCBuYW1lcyBpbiBvbmUgc3RyaW5nLCBlLmcuIGAnYWRkcmVzcy5zdHJlZXQnYFxuICAgKlxuICAgKiBJZiBubyBwYXRoIGlzIGdpdmVuLCB0aGlzIG1ldGhvZCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgY3VycmVudCBjb250cm9sLlxuICAgKlxuICAgKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBlcnJvciBpcyBwcmVzZW50IGluIHRoZSBjb250cm9sIGF0IHRoZSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBJZiB0aGUgY29udHJvbCBpcyBub3QgcHJlc2VudCwgZmFsc2UgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBoYXNFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aD86IEFycmF5PHN0cmluZ3xudW1iZXI+fHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0RXJyb3IoZXJyb3JDb2RlLCBwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHRvcC1sZXZlbCBhbmNlc3RvciBvZiB0aGlzIGNvbnRyb2wuXG4gICAqL1xuICBnZXQgcm9vdCgpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGxldCB4OiBBYnN0cmFjdENvbnRyb2wgPSB0aGlzO1xuXG4gICAgd2hpbGUgKHguX3BhcmVudCkge1xuICAgICAgeCA9IHguX3BhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgICh0aGlzIGFzIHtzdGF0dXM6IHN0cmluZ30pLnN0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xuXG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgKHRoaXMuc3RhdHVzQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8c3RyaW5nPikuZW1pdCh0aGlzLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2luaXRPYnNlcnZhYmxlcygpIHtcbiAgICAodGhpcyBhcyB7dmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT59KS52YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgKHRoaXMgYXMge3N0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8YW55Pn0pLnN0YXR1c0NoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVN0YXR1cygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkpIHJldHVybiBESVNBQkxFRDtcbiAgICBpZiAodGhpcy5lcnJvcnMpIHJldHVybiBJTlZBTElEO1xuICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoUEVORElORykpIHJldHVybiBQRU5ESU5HO1xuICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoSU5WQUxJRCkpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBWQUxJRDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk6IHZvaWQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhYnN0cmFjdCBfZm9yRWFjaENoaWxkKGNiOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhYnN0cmFjdCBfYW55Q29udHJvbHMoY29uZGl0aW9uOiBGdW5jdGlvbik6IGJvb2xlYW47XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhYnN0cmFjdCBfYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYWJzdHJhY3QgX3N5bmNQZW5kaW5nQ29udHJvbHMoKTogYm9vbGVhbjtcblxuICAvKiogQGludGVybmFsICovXG4gIF9hbnlDb250cm9sc0hhdmVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gY29udHJvbC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hbnlDb250cm9sc0RpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scygoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiBjb250cm9sLmRpcnR5KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FueUNvbnRyb2xzVG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gY29udHJvbC50b3VjaGVkKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VwZGF0ZVByaXN0aW5lKG9wdHM6IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICAodGhpcyBhcyB7cHJpc3RpbmU6IGJvb2xlYW59KS5wcmlzdGluZSA9ICF0aGlzLl9hbnlDb250cm9sc0RpcnR5KCk7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvcHRzLm9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VwZGF0ZVRvdWNoZWQob3B0czoge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgICh0aGlzIGFzIHt0b3VjaGVkOiBib29sZWFufSkudG91Y2hlZCA9IHRoaXMuX2FueUNvbnRyb2xzVG91Y2hlZCgpO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKG9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX29uRGlzYWJsZWRDaGFuZ2U6IEZ1bmN0aW9uW10gPSBbXTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9pc0JveGVkVmFsdWUoZm9ybVN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIGZvcm1TdGF0ZSA9PT0gJ29iamVjdCcgJiYgZm9ybVN0YXRlICE9PSBudWxsICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1TdGF0ZSkubGVuZ3RoID09PSAyICYmICd2YWx1ZScgaW4gZm9ybVN0YXRlICYmICdkaXNhYmxlZCcgaW4gZm9ybVN0YXRlO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NldFVwZGF0ZVN0cmF0ZWd5KG9wdHM/OiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdfEFic3RyYWN0Q29udHJvbE9wdGlvbnN8bnVsbCk6IHZvaWQge1xuICAgIGlmIChpc09wdGlvbnNPYmoob3B0cykgJiYgKG9wdHMgYXMgQWJzdHJhY3RDb250cm9sT3B0aW9ucykudXBkYXRlT24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5fdXBkYXRlT24gPSAob3B0cyBhcyBBYnN0cmFjdENvbnRyb2xPcHRpb25zKS51cGRhdGVPbiE7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRvIHNlZSBpZiBwYXJlbnQgaGFzIGJlZW4gbWFya2VkIGFydGlmaWNpYWxseSBkaXJ0eS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIF9wYXJlbnRNYXJrZWREaXJ0eShvbmx5U2VsZj86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBwYXJlbnREaXJ0eSA9IHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuZGlydHk7XG4gICAgcmV0dXJuICFvbmx5U2VsZiAmJiBwYXJlbnREaXJ0eSAmJiAhdGhpcy5fcGFyZW50Ll9hbnlDb250cm9sc0RpcnR5KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiBhbiBpbmRpdmlkdWFsIGZvcm0gY29udHJvbC5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIG9mIEFuZ3VsYXIgZm9ybXMsIGFsb25nIHdpdGhcbiAqIGBGb3JtR3JvdXBgIGFuZCBgRm9ybUFycmF5YC4gSXQgZXh0ZW5kcyB0aGUgYEFic3RyYWN0Q29udHJvbGAgY2xhc3MgdGhhdFxuICogaW1wbGVtZW50cyBtb3N0IG9mIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgZm9yIGFjY2Vzc2luZyB0aGUgdmFsdWUsIHZhbGlkYXRpb24gc3RhdHVzLFxuICogdXNlciBpbnRlcmFjdGlvbnMgYW5kIGV2ZW50cy4gU2VlIFt1c2FnZSBleGFtcGxlcyBiZWxvd10oI3VzYWdlLW5vdGVzKS5cbiAqXG4gKiBAc2VlIGBBYnN0cmFjdENvbnRyb2xgXG4gKiBAc2VlIFtSZWFjdGl2ZSBGb3JtcyBHdWlkZV0oZ3VpZGUvcmVhY3RpdmUtZm9ybXMpXG4gKiBAc2VlIFtVc2FnZSBOb3Rlc10oI3VzYWdlLW5vdGVzKVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIEluaXRpYWxpemluZyBGb3JtIENvbnRyb2xzXG4gKlxuICogSW5zdGFudGlhdGUgYSBgRm9ybUNvbnRyb2xgLCB3aXRoIGFuIGluaXRpYWwgdmFsdWUuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWUgdmFsdWUnKTtcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAgICAgLy8gJ3NvbWUgdmFsdWUnXG4gKmBgYFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpbml0aWFsaXplcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBzdGF0ZSBvYmplY3QuIFRoZSBgdmFsdWVgXG4gKiBhbmQgYGRpc2FibGVkYCBrZXlzIGFyZSByZXF1aXJlZCBpbiB0aGlzIGNhc2UuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlIH0pO1xuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xuICogY29uc29sZS5sb2coY29udHJvbC5zdGF0dXMpOyAgICAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgaW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgd2l0aCBhIHN5bmMgdmFsaWRhdG9yLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAgICAgIC8vICcnXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7ICAgICAvLyAnSU5WQUxJRCdcbiAqIGBgYFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpbml0aWFsaXplcyB0aGUgY29udHJvbCB1c2luZyBhbiBvcHRpb25zIG9iamVjdC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywge1xuICogICAgdmFsaWRhdG9yczogVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAqICAgIGFzeW5jVmFsaWRhdG9yczogbXlBc3luY1ZhbGlkYXRvclxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgQ29uZmlndXJlIHRoZSBjb250cm9sIHRvIHVwZGF0ZSBvbiBhIGJsdXIgZXZlbnRcbiAqXG4gKiBTZXQgdGhlIGB1cGRhdGVPbmAgb3B0aW9uIHRvIGAnYmx1cidgIHRvIHVwZGF0ZSBvbiB0aGUgYmx1ciBgZXZlbnRgLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7IHVwZGF0ZU9uOiAnYmx1cicgfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgQ29uZmlndXJlIHRoZSBjb250cm9sIHRvIHVwZGF0ZSBvbiBhIHN1Ym1pdCBldmVudFxuICpcbiAqIFNldCB0aGUgYHVwZGF0ZU9uYCBvcHRpb24gdG8gYCdzdWJtaXQnYCB0byB1cGRhdGUgb24gYSBzdWJtaXQgYGV2ZW50YC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgeyB1cGRhdGVPbjogJ3N1Ym1pdCcgfSk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVzZXQgdGhlIGNvbnRyb2wgYmFjayB0byBhbiBpbml0aWFsIHZhbHVlXG4gKlxuICogWW91IHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIHRocm91Z2ggYSBzdGFuZGFsb25lXG4gKiB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXRlXG4gKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xuICpcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAvLyAnTmFuY3knXG4gKlxuICogY29udHJvbC5yZXNldCgnRHJldycpO1xuICpcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAvLyAnRHJldydcbiAqIGBgYFxuICpcbiAqICMjIyBSZXNldCB0aGUgY29udHJvbCBiYWNrIHRvIGFuIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkXG4gKlxuICogYGBgXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xuICpcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAvLyAnTmFuY3knXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7IC8vICdWQUxJRCdcbiAqXG4gKiBjb250cm9sLnJlc2V0KHsgdmFsdWU6ICdEcmV3JywgZGlzYWJsZWQ6IHRydWUgfSk7XG4gKlxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdEcmV3J1xuICogY29uc29sZS5sb2coY29udHJvbC5zdGF0dXMpOyAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX29uQ2hhbmdlOiBGdW5jdGlvbltdID0gW107XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGVuZGluZ1ZhbHVlOiBhbnk7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGVuZGluZ0NoYW5nZTogYW55O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtQ29udHJvbGAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBmb3JtU3RhdGUgSW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgd2l0aCBhbiBpbml0aWFsIHZhbHVlLFxuICAgKiBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRvck9yT3B0cyBBIHN5bmNocm9ub3VzIHZhbGlkYXRvciBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2ZcbiAgICogc3VjaCBmdW5jdGlvbnMsIG9yIGFuIGBBYnN0cmFjdENvbnRyb2xPcHRpb25zYCBvYmplY3QgdGhhdCBjb250YWlucyB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xuICAgKiBhbmQgYSB2YWxpZGF0aW9uIHRyaWdnZXIuXG4gICAqXG4gICAqIEBwYXJhbSBhc3luY1ZhbGlkYXRvciBBIHNpbmdsZSBhc3luYyB2YWxpZGF0b3Igb3IgYXJyYXkgb2YgYXN5bmMgdmFsaWRhdG9yIGZ1bmN0aW9uc1xuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXG4gICAgICB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdfEFic3RyYWN0Q29udHJvbE9wdGlvbnN8bnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW118bnVsbCkge1xuICAgIHN1cGVyKFxuICAgICAgICBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3JPck9wdHMpLFxuICAgICAgICBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yLCB2YWxpZGF0b3JPck9wdHMpKTtcbiAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgIHRoaXMuX3NldFVwZGF0ZVN0cmF0ZWd5KHZhbGlkYXRvck9yT3B0cyk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBuZXcgdmFsdWUgZm9yIHRoZSBmb3JtIGNvbnRyb2wuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY29udHJvbC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcbiAgICogYW5kIGVtaXRzIGV2ZW50cyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXG4gICAqXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcbiAgICogZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGlzIHVwZGF0ZWQuXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cbiAgICogKiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cbiAgICogYG9uQ2hhbmdlYCBldmVudCB0b1xuICAgKiB1cGRhdGUgdGhlIHZpZXcuXG4gICAqICogYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cbiAgICogYG5nTW9kZWxDaGFuZ2VgXG4gICAqIGV2ZW50IHRvIHVwZGF0ZSB0aGUgbW9kZWwuXG4gICAqXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zOiB7XG4gICAgb25seVNlbGY/OiBib29sZWFuLFxuICAgIGVtaXRFdmVudD86IGJvb2xlYW4sXG4gICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbixcbiAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuXG4gIH0gPSB7fSk6IHZvaWQge1xuICAgICh0aGlzIGFzIHt2YWx1ZTogYW55fSkudmFsdWUgPSB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UubGVuZ3RoICYmIG9wdGlvbnMuZW1pdE1vZGVsVG9WaWV3Q2hhbmdlICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UuZm9yRWFjaChcbiAgICAgICAgICAoY2hhbmdlRm4pID0+IGNoYW5nZUZuKHRoaXMudmFsdWUsIG9wdGlvbnMuZW1pdFZpZXdUb01vZGVsQ2hhbmdlICE9PSBmYWxzZSkpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgYSBjb250cm9sLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGZ1bmN0aW9uYWxseSB0aGUgc2FtZSBhcyB7QGxpbmsgRm9ybUNvbnRyb2wjc2V0VmFsdWUgc2V0VmFsdWV9IGF0IHRoaXMgbGV2ZWwuXG4gICAqIEl0IGV4aXN0cyBmb3Igc3ltbWV0cnkgd2l0aCB7QGxpbmsgRm9ybUdyb3VwI3BhdGNoVmFsdWUgcGF0Y2hWYWx1ZX0gb24gYEZvcm1Hcm91cHNgIGFuZFxuICAgKiBgRm9ybUFycmF5c2AsIHdoZXJlIGl0IGRvZXMgYmVoYXZlIGRpZmZlcmVudGx5LlxuICAgKlxuICAgKiBAc2VlIGBzZXRWYWx1ZWAgZm9yIG9wdGlvbnNcbiAgICovXG4gIHBhdGNoVmFsdWUodmFsdWU6IGFueSwgb3B0aW9uczoge1xuICAgIG9ubHlTZWxmPzogYm9vbGVhbixcbiAgICBlbWl0RXZlbnQ/OiBib29sZWFuLFxuICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW4sXG4gICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhblxuICB9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGZvcm0gY29udHJvbCwgbWFya2luZyBpdCBgcHJpc3RpbmVgIGFuZCBgdW50b3VjaGVkYCwgYW5kIHNldHRpbmdcbiAgICogdGhlIHZhbHVlIHRvIG51bGwuXG4gICAqXG4gICAqIEBwYXJhbSBmb3JtU3RhdGUgUmVzZXRzIHRoZSBjb250cm9sIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSxcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCB2YWx1ZSBhbmQgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcbiAgICogZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXG4gICAqXG4gICAqL1xuICByZXNldChmb3JtU3RhdGU6IGFueSA9IG51bGwsIG9wdGlvbnM6IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgIHRoaXMubWFya0FzUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgdGhpcy5tYXJrQXNVbnRvdWNoZWQob3B0aW9ucyk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgICB0aGlzLl9wZW5kaW5nQ2hhbmdlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfdXBkYXRlVmFsdWUoKSB7fVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9hbnlDb250cm9scyhjb25kaXRpb246IEZ1bmN0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgY2hhbmdlIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBtZXRob2QgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZS5wdXNoKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9jbGVhckNoYW5nZUZucygpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IFtdO1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UgPSBbXTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSAoKSA9PiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciBkaXNhYmxlZCBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGRpc2FibGVkIHN0YXR1cyBjaGFuZ2VzLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZuOiAoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UucHVzaChmbik7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfZm9yRWFjaENoaWxkKGNiOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKiogQGludGVybmFsICovXG4gIF9zeW5jUGVuZGluZ0NvbnRyb2xzKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnVwZGF0ZU9uID09PSAnc3VibWl0Jykge1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdEaXJ0eSkgdGhpcy5tYXJrQXNEaXJ0eSgpO1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdUb3VjaGVkKSB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIGlmICh0aGlzLl9wZW5kaW5nQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fcGVuZGluZ1ZhbHVlLCB7b25seVNlbGY6IHRydWUsIGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2V9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX2lzQm94ZWRWYWx1ZShmb3JtU3RhdGUpKSB7XG4gICAgICAodGhpcyBhcyB7dmFsdWU6IGFueX0pLnZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlID0gZm9ybVN0YXRlLnZhbHVlO1xuICAgICAgZm9ybVN0YXRlLmRpc2FibGVkID8gdGhpcy5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcyBhcyB7dmFsdWU6IGFueX0pLnZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlID0gZm9ybVN0YXRlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGEgZ3JvdXAgb2YgYEZvcm1Db250cm9sYCBpbnN0YW5jZXMuXG4gKlxuICogQSBgRm9ybUdyb3VwYCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCBgRm9ybUNvbnRyb2xgIGludG8gb25lIG9iamVjdCxcbiAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzIHZhbHVlc1xuICogb2YgaXRzIGNoaWxkcmVuLiBGb3IgZXhhbXBsZSwgaWYgb25lIG9mIHRoZSBjb250cm9scyBpbiBhIGdyb3VwIGlzIGludmFsaWQsIHRoZSBlbnRpcmVcbiAqIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cbiAqXG4gKiBgRm9ybUdyb3VwYCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICogYWxvbmcgd2l0aCBgRm9ybUNvbnRyb2xgIGFuZCBgRm9ybUFycmF5YC5cbiAqXG4gKiBXaGVuIGluc3RhbnRpYXRpbmcgYSBgRm9ybUdyb3VwYCwgcGFzcyBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudC4gVGhlIGtleSBmb3IgZWFjaCBjaGlsZCByZWdpc3RlcnMgdGhlIG5hbWUgZm9yIHRoZSBjb250cm9sLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIENyZWF0ZSBhIGZvcm0gZ3JvdXAgd2l0aCAyIGNvbnRyb2xzXG4gKlxuICogYGBgXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ05hbmN5JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxuICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcbiAqIH0pO1xuICpcbiAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDsgJ0RyZXcnfVxuICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICogYGBgXG4gKlxuICogIyMjIENyZWF0ZSBhIGZvcm0gZ3JvdXAgd2l0aCBhIGdyb3VwLWxldmVsIHZhbGlkYXRvclxuICpcbiAqIFlvdSBpbmNsdWRlIGdyb3VwLWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGdyb3VwLWxldmVsIGFzeW5jXG4gKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAqIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkIGNvbnRyb2wuXG4gKlxuICogYGBgXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqIH0sIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IpO1xuICpcbiAqXG4gKiBmdW5jdGlvbiBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKGc6IEZvcm1Hcm91cCkge1xuICogICAgcmV0dXJuIGcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBnLmdldCgncGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAqICAgICAgID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIExpa2UgYEZvcm1Db250cm9sYCBpbnN0YW5jZXMsIHlvdSBjaG9vc2UgdG8gcGFzcyBpblxuICogdmFsaWRhdG9ycyBhbmQgYXN5bmMgdmFsaWRhdG9ycyBhcyBwYXJ0IG9mIGFuIG9wdGlvbnMgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICogICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnKVxuICogICBwYXNzd29yZENvbmZpcm06IG5ldyBGb3JtQ29udHJvbCgnJylcbiAqIH0sIHsgdmFsaWRhdG9yczogcGFzc3dvcmRNYXRjaFZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3JzOiBvdGhlclZhbGlkYXRvciB9KTtcbiAqIGBgYFxuICpcbiAqICMjIyBTZXQgdGhlIHVwZGF0ZU9uIHByb3BlcnR5IGZvciBhbGwgY29udHJvbHMgaW4gYSBmb3JtIGdyb3VwXG4gKlxuICogVGhlIG9wdGlvbnMgb2JqZWN0IGlzIHVzZWQgdG8gc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgZWFjaCBjaGlsZFxuICogY29udHJvbCdzIGB1cGRhdGVPbmAgcHJvcGVydHkuIElmIHlvdSBzZXQgYHVwZGF0ZU9uYCB0byBgJ2JsdXInYCBhdCB0aGVcbiAqIGdyb3VwIGxldmVsLCBhbGwgY2hpbGQgY29udHJvbHMgZGVmYXVsdCB0byAnYmx1cicsIHVubGVzcyB0aGUgY2hpbGRcbiAqIGhhcyBleHBsaWNpdGx5IHNwZWNpZmllZCBhIGRpZmZlcmVudCBgdXBkYXRlT25gIHZhbHVlLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBjID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgIG9uZTogbmV3IEZvcm1Db250cm9sKClcbiAqIH0sIHsgdXBkYXRlT246ICdibHVyJyB9KTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtR3JvdXBgIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gY29udHJvbHMgQSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzLiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIGlzIHRoZSBuYW1lXG4gICAqIHVuZGVyIHdoaWNoIGl0IGlzIHJlZ2lzdGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWxpZGF0b3JPck9wdHMgQSBzeW5jaHJvbm91cyB2YWxpZGF0b3IgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mXG4gICAqIHN1Y2ggZnVuY3Rpb25zLCBvciBhbiBgQWJzdHJhY3RDb250cm9sT3B0aW9uc2Agb2JqZWN0IHRoYXQgY29udGFpbnMgdmFsaWRhdGlvbiBmdW5jdGlvbnNcbiAgICogYW5kIGEgdmFsaWRhdGlvbiB0cmlnZ2VyLlxuICAgKlxuICAgKiBAcGFyYW0gYXN5bmNWYWxpZGF0b3IgQSBzaW5nbGUgYXN5bmMgdmFsaWRhdG9yIG9yIGFycmF5IG9mIGFzeW5jIHZhbGlkYXRvciBmdW5jdGlvbnNcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGNvbnRyb2xzOiB7W2tleTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSxcbiAgICAgIHZhbGlkYXRvck9yT3B0cz86IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW118QWJzdHJhY3RDb250cm9sT3B0aW9uc3xudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXXxudWxsKSB7XG4gICAgc3VwZXIoXG4gICAgICAgIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvck9yT3B0cyksXG4gICAgICAgIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IsIHZhbGlkYXRvck9yT3B0cykpO1xuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgIHRoaXMuX3NldFVwZGF0ZVN0cmF0ZWd5KHZhbGlkYXRvck9yT3B0cyk7XG4gICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjb250cm9sIHdpdGggdGhlIGdyb3VwJ3MgbGlzdCBvZiBjb250cm9scy5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgdXBkYXRlIHRoZSB2YWx1ZSBvciB2YWxpZGl0eSBvZiB0aGUgY29udHJvbC5cbiAgICogVXNlIHtAbGluayBGb3JtR3JvdXAjYWRkQ29udHJvbCBhZGRDb250cm9sfSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIHJlZ2lzdGVyIGluIHRoZSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBjb250cm9sIFByb3ZpZGVzIHRoZSBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbmFtZVxuICAgKi9cbiAgcmVnaXN0ZXJDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogQWJzdHJhY3RDb250cm9sIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkgcmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG4gICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG4gICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UodGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBjb250cm9sIHRvIHRoaXMgZ3JvdXAuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFsc28gdXBkYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIHRoZSBjb250cm9sLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIGFkZCB0byB0aGUgY29sbGVjdGlvblxuICAgKiBAcGFyYW0gY29udHJvbCBQcm92aWRlcyB0aGUgY29udHJvbCBmb3IgdGhlIGdpdmVuIG5hbWVcbiAgICovXG4gIGFkZENvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBncm91cC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIGNvbnRyb2wgbmFtZSB0byByZW1vdmUgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlQ29udHJvbChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkgdGhpcy5jb250cm9sc1tuYW1lXS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIGRlbGV0ZSAodGhpcy5jb250cm9sc1tuYW1lXSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIHJlcGxhY2UgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICogQHBhcmFtIGNvbnRyb2wgUHJvdmlkZXMgdGhlIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBuYW1lXG4gICAqL1xuICBzZXRDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pIHRoaXMuY29udHJvbHNbbmFtZV0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICBkZWxldGUgKHRoaXMuY29udHJvbHNbbmFtZV0pO1xuICAgIGlmIChjb250cm9sKSB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGVuYWJsZWQgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBncm91cC5cbiAgICpcbiAgICogUmVwb3J0cyBmYWxzZSBmb3IgZGlzYWJsZWQgY29udHJvbHMuIElmIHlvdSdkIGxpa2UgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZSBpbiB0aGUgZ3JvdXBcbiAgICogb25seSwgdXNlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjZ2V0IGdldH0gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRyb2xOYW1lIFRoZSBjb250cm9sIG5hbWUgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZSBpbiB0aGUgY29sbGVjdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyBmYWxzZSBmb3IgZGlzYWJsZWQgY29udHJvbHMsIHRydWUgb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29udGFpbnMoY29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2xOYW1lKSAmJiB0aGlzLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5lbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBgRm9ybUdyb3VwYC4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXG4gICAqIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIFNldCB0aGUgY29tcGxldGUgdmFsdWUgZm9yIHRoZSBmb3JtIGdyb3VwXG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAqIH0pO1xuICAgKlxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gICAqXG4gICAqIGZvcm0uc2V0VmFsdWUoe2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9KTtcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdGhyb3dzIFdoZW4gc3RyaWN0IGNoZWNrcyBmYWlsLCBzdWNoIGFzIHNldHRpbmcgdGhlIHZhbHVlIG9mIGEgY29udHJvbFxuICAgKiB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgYSB2YWx1ZSBvZiBhIGNvbnRyb2wgdGhhdCBkb2VzIGV4aXN0LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNvbnRyb2wgdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXG4gICAqXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcbiAgICogZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGlzIHVwZGF0ZWQuXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB7W2tleTogc3RyaW5nXTogYW55fSwgb3B0aW9uczoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWUpO1xuICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5zZXRWYWx1ZSh2YWx1ZVtuYW1lXSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhdGNoZXMgdGhlIHZhbHVlIG9mIHRoZSBgRm9ybUdyb3VwYC4gSXQgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBjb250cm9sXG4gICAqIG5hbWVzIGFzIGtleXMsIGFuZCBkb2VzIGl0cyBiZXN0IHRvIG1hdGNoIHRoZSB2YWx1ZXMgdG8gdGhlIGNvcnJlY3QgY29udHJvbHNcbiAgICogaW4gdGhlIGdyb3VwLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGdyb3VwIHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBQYXRjaCB0aGUgdmFsdWUgZm9yIGEgZm9ybSBncm91cFxuICAgKlxuICAgKiBgYGBcbiAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgKiAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXG4gICAqICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAqIH0pO1xuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gICAqXG4gICAqIGZvcm0ucGF0Y2hWYWx1ZSh7Zmlyc3Q6ICdOYW5jeSd9KTtcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiBudWxsfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlcyBhbmRcbiAgICogZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSB2YWx1ZSBpcyBwYXRjaGVkLlxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcbiAgICogdHJ1ZS5cbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXG4gICAqIGB2YWx1ZUNoYW5nZXNgXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaXMgdXBkYXRlZC5cbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXG4gICAqL1xuICBwYXRjaFZhbHVlKHZhbHVlOiB7W2tleTogc3RyaW5nXTogYW55fSwgb3B0aW9uczoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0ucGF0Y2hWYWx1ZSh2YWx1ZVtuYW1lXSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50fSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgYEZvcm1Hcm91cGAsIG1hcmtzIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWAgYW5kIGB1bnRvdWNoZWRgLCBhbmRcbiAgICogdGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB0byBudWxsLlxuICAgKlxuICAgKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYSBtYXAgb2Ygc3RhdGVzXG4gICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgZm9ybSwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuIFRoZSBzdGF0ZVxuICAgKiBpcyBhIHN0YW5kYWxvbmUgdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZFxuICAgKiBzdGF0dXMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBSZXNldHMgdGhlIGNvbnRyb2wgd2l0aCBhbiBpbml0aWFsIHZhbHVlLFxuICAgKiBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcbiAgICogYW5kIGVtaXRzIGV2ZW50cyB3aGVuIHRoZSBncm91cCBpcyByZXNldC5cbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdCBpc1xuICAgKiBmYWxzZS5cbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXG4gICAqIGB2YWx1ZUNoYW5nZXNgXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgaXMgcmVzZXQuXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBhcmUgcGFzc2VkIHRvIHRoZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sI3VwZGF0ZVZhbHVlQW5kVmFsaWRpdHlcbiAgICogdXBkYXRlVmFsdWVBbmRWYWxpZGl0eX0gbWV0aG9kLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiAjIyMgUmVzZXQgdGhlIGZvcm0gZ3JvdXAgdmFsdWVzXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdmaXJzdCBuYW1lJyksXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdsYXN0IG5hbWUnKVxuICAgKiB9KTtcbiAgICpcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICdmaXJzdCBuYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gICAqXG4gICAqIGZvcm0ucmVzZXQoeyBmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJyB9KTtcbiAgICpcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gICAqIGBgYFxuICAgKlxuICAgKiAjIyMgUmVzZXQgdGhlIGZvcm0gZ3JvdXAgdmFsdWVzIGFuZCBkaXNhYmxlZCBzdGF0dXNcbiAgICpcbiAgICogYGBgXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdmaXJzdCBuYW1lJyksXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdsYXN0IG5hbWUnKVxuICAgKiB9KTtcbiAgICpcbiAgICogZm9ybS5yZXNldCh7XG4gICAqICAgZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAgbGFzdDogJ2xhc3QnXG4gICAqIH0pO1xuICAgKlxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAqIGBgYFxuICAgKi9cbiAgcmVzZXQodmFsdWU6IGFueSA9IHt9LCBvcHRpb25zOiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtuYW1lXSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgdGhpcy5fdXBkYXRlVG91Y2hlZChvcHRpb25zKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUgYEZvcm1Hcm91cGAsIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLlxuICAgKiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyB0aGUgYmVzdCB3YXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAsIGJlY2F1c2VcbiAgICogaXQgZXhjbHVkZXMgZGlzYWJsZWQgY29udHJvbHMgaW4gdGhlIGBGb3JtR3JvdXBgLlxuICAgKi9cbiAgZ2V0UmF3VmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oXG4gICAgICAgIHt9LCAoYWNjOiB7W2s6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0sIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbC52YWx1ZSA6ICg8YW55PmNvbnRyb2wpLmdldFJhd1ZhbHVlKCk7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zeW5jUGVuZGluZ0NvbnRyb2xzKCk6IGJvb2xlYW4ge1xuICAgIGxldCBzdWJ0cmVlVXBkYXRlZCA9IHRoaXMuX3JlZHVjZUNoaWxkcmVuKGZhbHNlLCAodXBkYXRlZDogYm9vbGVhbiwgY2hpbGQ6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkLl9zeW5jUGVuZGluZ0NvbnRyb2xzKCkgPyB0cnVlIDogdXBkYXRlZDtcbiAgICB9KTtcbiAgICBpZiAoc3VidHJlZVVwZGF0ZWQpIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWV9KTtcbiAgICByZXR1cm4gc3VidHJlZVVwZGF0ZWQ7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF90aHJvd0lmQ29udHJvbE1pc3NpbmcobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGdyb3VwIHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cbiAgICAgIGApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJHtuYW1lfS5gKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9mb3JFYWNoQ2hpbGQoY2I6ICh2OiBhbnksIGs6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmZvckVhY2goayA9PiBjYih0aGlzLmNvbnRyb2xzW2tdLCBrKSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zZXRVcENvbnRyb2xzKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF91cGRhdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICAodGhpcyBhcyB7dmFsdWU6IGFueX0pLnZhbHVlID0gdGhpcy5fcmVkdWNlVmFsdWUoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FueUNvbnRyb2xzKGNvbmRpdGlvbjogRnVuY3Rpb24pOiBib29sZWFuIHtcbiAgICBsZXQgcmVzID0gZmFsc2U7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmVzID0gcmVzIHx8ICh0aGlzLmNvbnRhaW5zKG5hbWUpICYmIGNvbmRpdGlvbihjb250cm9sKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3JlZHVjZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWR1Y2VDaGlsZHJlbihcbiAgICAgICAge30sIChhY2M6IHtbazogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSwgY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAoY29udHJvbC5lbmFibGVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVkdWNlQ2hpbGRyZW4oaW5pdFZhbHVlOiBhbnksIGZuOiBGdW5jdGlvbikge1xuICAgIGxldCByZXMgPSBpbml0VmFsdWU7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmVzID0gZm4ocmVzLCBjb250cm9sLCBuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IGNvbnRyb2xOYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh2YWx1ZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIHdpdGggbmFtZTogJyR7bmFtZX0nLmApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgc3RhdGUgb2YgYW4gYXJyYXkgb2YgYEZvcm1Db250cm9sYCxcbiAqIGBGb3JtR3JvdXBgIG9yIGBGb3JtQXJyYXlgIGluc3RhbmNlcy5cbiAqXG4gKiBBIGBGb3JtQXJyYXlgIGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNoaWxkIGBGb3JtQ29udHJvbGAgaW50byBhbiBhcnJheS5cbiAqIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzIHZhbHVlcyBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2ZcbiAqIHRoZSBjb250cm9scyBpbiBhIGBGb3JtQXJyYXlgIGlzIGludmFsaWQsIHRoZSBlbnRpcmUgYXJyYXkgYmVjb21lcyBpbnZhbGlkLlxuICpcbiAqIGBGb3JtQXJyYXlgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXG4gKiBhbG9uZyB3aXRoIGBGb3JtQ29udHJvbGAgYW5kIGBGb3JtR3JvdXBgLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIENyZWF0ZSBhbiBhcnJheSBvZiBmb3JtIGNvbnRyb2xzXG4gKlxuICogYGBgXG4gKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAqICAgbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqICAgbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gKiBdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCAnRHJldyddXG4gKiBjb25zb2xlLmxvZyhhcnIuc3RhdHVzKTsgIC8vICdWQUxJRCdcbiAqIGBgYFxuICpcbiAqICMjIyBDcmVhdGUgYSBmb3JtIGFycmF5IHdpdGggYXJyYXktbGV2ZWwgdmFsaWRhdG9yc1xuICpcbiAqIFlvdSBpbmNsdWRlIGFycmF5LWxldmVsIHZhbGlkYXRvcnMgYW5kIGFzeW5jIHZhbGlkYXRvcnMuIFRoZXNlIGNvbWUgaW4gaGFuZHlcbiAqIHdoZW4geW91IHdhbnQgdG8gcGVyZm9ybSB2YWxpZGF0aW9uIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkXG4gKiBjb250cm9sLlxuICpcbiAqIFRoZSB0d28gdHlwZXMgb2YgdmFsaWRhdG9ycyBhcmUgcGFzc2VkIGluIHNlcGFyYXRlbHkgYXMgdGhlIHNlY29uZCBhbmQgdGhpcmQgYXJnXG4gKiByZXNwZWN0aXZlbHksIG9yIHRvZ2V0aGVyIGFzIHBhcnQgb2YgYW4gb3B0aW9ucyBvYmplY3QuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAqICAgbmV3IEZvcm1Db250cm9sKCdOYW5jeScpLFxuICogICBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKVxuICogXSwge3ZhbGlkYXRvcnM6IG15VmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcnM6IG15QXN5bmNWYWxpZGF0b3J9KTtcbiAqIGBgYFxuICpcbiAqICMjIyBTZXQgdGhlIHVwZGF0ZU9uIHByb3BlcnR5IGZvciBhbGwgY29udHJvbHMgaW4gYSBmb3JtIGFycmF5XG4gKlxuICogVGhlIG9wdGlvbnMgb2JqZWN0IGlzIHVzZWQgdG8gc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgZWFjaCBjaGlsZFxuICogY29udHJvbCdzIGB1cGRhdGVPbmAgcHJvcGVydHkuIElmIHlvdSBzZXQgYHVwZGF0ZU9uYCB0byBgJ2JsdXInYCBhdCB0aGVcbiAqIGFycmF5IGxldmVsLCBhbGwgY2hpbGQgY29udHJvbHMgZGVmYXVsdCB0byAnYmx1cicsIHVubGVzcyB0aGUgY2hpbGRcbiAqIGhhcyBleHBsaWNpdGx5IHNwZWNpZmllZCBhIGRpZmZlcmVudCBgdXBkYXRlT25gIHZhbHVlLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAqICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gKiBdLCB7dXBkYXRlT246ICdibHVyJ30pO1xuICogYGBgXG4gKlxuICogIyMjIEFkZGluZyBvciByZW1vdmluZyBjb250cm9scyBmcm9tIGEgZm9ybSBhcnJheVxuICpcbiAqIFRvIGNoYW5nZSB0aGUgY29udHJvbHMgaW4gdGhlIGFycmF5LCB1c2UgdGhlIGBwdXNoYCwgYGluc2VydGAsIGByZW1vdmVBdGAgb3IgYGNsZWFyYCBtZXRob2RzXG4gKiBpbiBgRm9ybUFycmF5YCBpdHNlbGYuIFRoZXNlIG1ldGhvZHMgZW5zdXJlIHRoZSBjb250cm9scyBhcmUgcHJvcGVybHkgdHJhY2tlZCBpbiB0aGVcbiAqIGZvcm0ncyBoaWVyYXJjaHkuIERvIG5vdCBtb2RpZnkgdGhlIGFycmF5IG9mIGBBYnN0cmFjdENvbnRyb2xgcyB1c2VkIHRvIGluc3RhbnRpYXRlXG4gKiB0aGUgYEZvcm1BcnJheWAgZGlyZWN0bHksIGFzIHRoYXQgcmVzdWx0IGluIHN0cmFuZ2UgYW5kIHVuZXhwZWN0ZWQgYmVoYXZpb3Igc3VjaFxuICogYXMgYnJva2VuIGNoYW5nZSBkZXRlY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5IGV4dGVuZHMgQWJzdHJhY3RDb250cm9sIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1BcnJheWAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBjb250cm9scyBBbiBhcnJheSBvZiBjaGlsZCBjb250cm9scy4gRWFjaCBjaGlsZCBjb250cm9sIGlzIGdpdmVuIGFuIGluZGV4XG4gICAqIHdoZXJlIGl0IGlzIHJlZ2lzdGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWxpZGF0b3JPck9wdHMgQSBzeW5jaHJvbm91cyB2YWxpZGF0b3IgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mXG4gICAqIHN1Y2ggZnVuY3Rpb25zLCBvciBhbiBgQWJzdHJhY3RDb250cm9sT3B0aW9uc2Agb2JqZWN0IHRoYXQgY29udGFpbnMgdmFsaWRhdGlvbiBmdW5jdGlvbnNcbiAgICogYW5kIGEgdmFsaWRhdGlvbiB0cmlnZ2VyLlxuICAgKlxuICAgKiBAcGFyYW0gYXN5bmNWYWxpZGF0b3IgQSBzaW5nbGUgYXN5bmMgdmFsaWRhdG9yIG9yIGFycmF5IG9mIGFzeW5jIHZhbGlkYXRvciBmdW5jdGlvbnNcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXSxcbiAgICAgIHZhbGlkYXRvck9yT3B0cz86IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW118QWJzdHJhY3RDb250cm9sT3B0aW9uc3xudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXXxudWxsKSB7XG4gICAgc3VwZXIoXG4gICAgICAgIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvck9yT3B0cyksXG4gICAgICAgIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IsIHZhbGlkYXRvck9yT3B0cykpO1xuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgIHRoaXMuX3NldFVwZGF0ZVN0cmF0ZWd5KHZhbGlkYXRvck9yT3B0cyk7XG4gICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGBBYnN0cmFjdENvbnRyb2xgIGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4IEluZGV4IGluIHRoZSBhcnJheSB0byByZXRyaWV2ZSB0aGUgY29udHJvbFxuICAgKi9cbiAgYXQoaW5kZXg6IG51bWJlcik6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBhIG5ldyBgQWJzdHJhY3RDb250cm9sYCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRyb2wgRm9ybSBjb250cm9sIHRvIGJlIGluc2VydGVkXG4gICAqL1xuICBwdXNoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGEgbmV3IGBBYnN0cmFjdENvbnRyb2xgIGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4IEluZGV4IGluIHRoZSBhcnJheSB0byBpbnNlcnQgdGhlIGNvbnRyb2xcbiAgICogQHBhcmFtIGNvbnRyb2wgRm9ybSBjb250cm9sIHRvIGJlIGluc2VydGVkXG4gICAqL1xuICBpbnNlcnQoaW5kZXg6IG51bWJlciwgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2wpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29udHJvbCBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBpbiB0aGUgYXJyYXkgdG8gcmVtb3ZlIHRoZSBjb250cm9sXG4gICAqL1xuICByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKSB0aGlzLmNvbnRyb2xzW2luZGV4XS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBpbiB0aGUgYXJyYXkgdG8gcmVwbGFjZSB0aGUgY29udHJvbFxuICAgKiBAcGFyYW0gY29udHJvbCBUaGUgYEFic3RyYWN0Q29udHJvbGAgY29udHJvbCB0byByZXBsYWNlIHRoZSBleGlzdGluZyBjb250cm9sXG4gICAqL1xuICBzZXRDb250cm9sKGluZGV4OiBudW1iZXIsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2xzW2luZGV4XSkgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKCgpID0+IHt9KTtcbiAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2wpO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExlbmd0aCBvZiB0aGUgY29udHJvbCBhcnJheS5cbiAgICovXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9scy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBGb3JtQXJyYXlgLiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlc1xuICAgKiB0aGUgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIHlvdSB0cnlcbiAgICogdG8gc2V0IHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wgdGhhdCBkb2Vzbid0IGV4aXN0IG9yIGlmIHlvdSBleGNsdWRlIHRoZVxuICAgKiB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBTZXQgdGhlIHZhbHVlcyBmb3IgdGhlIGNvbnRyb2xzIGluIHRoZSBmb3JtIGFycmF5XG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICogICBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICogICBuZXcgRm9ybUNvbnRyb2woKVxuICAgKiBdKTtcbiAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAgICpcbiAgICogYXJyLnNldFZhbHVlKFsnTmFuY3knLCAnRHJldyddKTtcbiAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgJ0RyZXcnXVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIEFycmF5IG9mIHZhbHVlcyBmb3IgdGhlIGNvbnRyb2xzXG4gICAqIEBwYXJhbSBvcHRpb25zIENvbmZpZ3VyZSBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXMgYW5kXG4gICAqIGVtaXRzIGV2ZW50cyBhZnRlciB0aGUgdmFsdWUgY2hhbmdlc1xuICAgKlxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0XG4gICAqIGlzIGZhbHNlLlxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcbiAgICogYHZhbHVlQ2hhbmdlc2BcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpcyB1cGRhdGVkLlxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgYXJlIHBhc3NlZCB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5XG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiBhbnlbXSwgb3B0aW9uczoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZSk7XG4gICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKGluZGV4KTtcbiAgICAgIHRoaXMuYXQoaW5kZXgpLnNldFZhbHVlKG5ld1ZhbHVlLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogb3B0aW9ucy5lbWl0RXZlbnR9KTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIGBGb3JtQXJyYXlgLiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGVcbiAgICogc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLCBhbmQgZG9lcyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0XG4gICAqIGNvbnRyb2xzIGluIHRoZSBncm91cC5cbiAgICpcbiAgICogSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBhcnJheSB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgUGF0Y2ggdGhlIHZhbHVlcyBmb3IgY29udHJvbHMgaW4gYSBmb3JtIGFycmF5XG4gICAqXG4gICAqIGBgYFxuICAgKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICogICAgbmV3IEZvcm1Db250cm9sKCksXG4gICAqICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gICAqIF0pO1xuICAgKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFtudWxsLCBudWxsXVxuICAgKlxuICAgKiBhcnIucGF0Y2hWYWx1ZShbJ05hbmN5J10pO1xuICAgKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCBudWxsXVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIEFycmF5IG9mIGxhdGVzdCB2YWx1ZXMgZm9yIHRoZSBjb250cm9sc1xuICAgKiBAcGFyYW0gb3B0aW9ucyBDb25maWd1cmUgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzIGFuZFxuICAgKiBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIHZhbHVlIGNoYW5nZXNcbiAgICpcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdFxuICAgKiBpcyBmYWxzZS5cbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXG4gICAqIGB2YWx1ZUNoYW5nZXNgXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaXMgdXBkYXRlZC5cbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXG4gICAqL1xuICBwYXRjaFZhbHVlKHZhbHVlOiBhbnlbXSwgb3B0aW9uczoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLmF0KGluZGV4KSkge1xuICAgICAgICB0aGlzLmF0KGluZGV4KS5wYXRjaFZhbHVlKG5ld1ZhbHVlLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogb3B0aW9ucy5lbWl0RXZlbnR9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBgRm9ybUFycmF5YCBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYCBhbmQgYHVudG91Y2hlZGAsIGFuZCB0aGVcbiAgICogdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHRvIG51bGwgb3IgbnVsbCBtYXBzLlxuICAgKlxuICAgKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYW4gYXJyYXkgb2Ygc3RhdGVzXG4gICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLiBUaGUgc3RhdGUgaXMgYSBzdGFuZGFsb25lIHZhbHVlXG4gICAqIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdHVzLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgUmVzZXQgdGhlIHZhbHVlcyBpbiBhIGZvcm0gYXJyYXlcbiAgICpcbiAgICogYGBgdHNcbiAgICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAqICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgKiAgICBuZXcgRm9ybUNvbnRyb2woKVxuICAgKiBdKTtcbiAgICogYXJyLnJlc2V0KFsnbmFtZScsICdsYXN0IG5hbWUnXSk7XG4gICAqXG4gICAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICAgKiBgYGBcbiAgICpcbiAgICogIyMjIFJlc2V0IHRoZSB2YWx1ZXMgaW4gYSBmb3JtIGFycmF5IGFuZCB0aGUgZGlzYWJsZWQgc3RhdHVzIGZvciB0aGUgZmlyc3QgY29udHJvbFxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5hcnIucmVzZXQoW1xuICAgKiAgIHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAgJ2xhc3QnXG4gICAqIF0pO1xuICAgKlxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAgICogY29uc29sZS5sb2codGhpcy5hcnIuZ2V0KDApLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgQXJyYXkgb2YgdmFsdWVzIGZvciB0aGUgY29udHJvbHNcbiAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJlIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlcyBhbmRcbiAgICogZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAqXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHRcbiAgICogaXMgZmFsc2UuXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxuICAgKiBgdmFsdWVDaGFuZ2VzYFxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgYXJlIHBhc3NlZCB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5XG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cbiAgICovXG4gIHJlc2V0KHZhbHVlOiBhbnkgPSBbXSwgb3B0aW9uczoge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb250cm9sLnJlc2V0KHZhbHVlW2luZGV4XSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50fSk7XG4gICAgfSk7XG4gICAgdGhpcy5fdXBkYXRlUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgdGhpcy5fdXBkYXRlVG91Y2hlZChvcHRpb25zKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUgYXJyYXksIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAqXG4gICAqIFJlcG9ydHMgYWxsIHZhbHVlcyByZWdhcmRsZXNzIG9mIGRpc2FibGVkIHN0YXR1cy5cbiAgICogRm9yIGVuYWJsZWQgY29udHJvbHMgb25seSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LlxuICAgKi9cbiAgZ2V0UmF3VmFsdWUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLm1hcCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICByZXR1cm4gY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbC52YWx1ZSA6ICg8YW55PmNvbnRyb2wpLmdldFJhd1ZhbHVlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjb250cm9scyBpbiB0aGUgYEZvcm1BcnJheWAuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBSZW1vdmUgYWxsIGVsZW1lbnRzIGZyb20gYSBGb3JtQXJyYXlcbiAgICpcbiAgICogYGBgdHNcbiAgICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAqICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgKiAgICBuZXcgRm9ybUNvbnRyb2woKVxuICAgKiBdKTtcbiAgICogY29uc29sZS5sb2coYXJyLmxlbmd0aCk7ICAvLyAyXG4gICAqXG4gICAqIGFyci5jbGVhcigpO1xuICAgKiBjb25zb2xlLmxvZyhhcnIubGVuZ3RoKTsgIC8vIDBcbiAgICogYGBgXG4gICAqXG4gICAqIEl0J3MgYSBzaW1wbGVyIGFuZCBtb3JlIGVmZmljaWVudCBhbHRlcm5hdGl2ZSB0byByZW1vdmluZyBhbGwgZWxlbWVudHMgb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBgdHNcbiAgICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAqICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICAgKiAgICBuZXcgRm9ybUNvbnRyb2woKVxuICAgKiBdKTtcbiAgICpcbiAgICogd2hpbGUgKGFyci5sZW5ndGgpIHtcbiAgICogICAgYXJyLnJlbW92ZUF0KDApO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB7fSkpO1xuICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKDApO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc3luY1BlbmRpbmdDb250cm9scygpOiBib29sZWFuIHtcbiAgICBsZXQgc3VidHJlZVVwZGF0ZWQgPSB0aGlzLmNvbnRyb2xzLnJlZHVjZSgodXBkYXRlZDogYm9vbGVhbiwgY2hpbGQ6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkLl9zeW5jUGVuZGluZ0NvbnRyb2xzKCkgPyB0cnVlIDogdXBkYXRlZDtcbiAgICB9LCBmYWxzZSk7XG4gICAgaWYgKHN1YnRyZWVVcGRhdGVkKSB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlfSk7XG4gICAgcmV0dXJuIHN1YnRyZWVVcGRhdGVkO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfdGhyb3dJZkNvbnRyb2xNaXNzaW5nKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBhcnJheSB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcbiAgICAgICAgeW91IG1heSB3YW50IHRvIGNoZWNrIG5leHQgdGljayAoZS5nLiB1c2Ugc2V0VGltZW91dCkuXG4gICAgICBgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmF0KGluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgYXQgaW5kZXggJHtpbmRleH1gKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9mb3JFYWNoQ2hpbGQoY2I6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9scy5mb3JFYWNoKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNiKGNvbnRyb2wsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3VwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgICh0aGlzIGFzIHt2YWx1ZTogYW55fSkudmFsdWUgPVxuICAgICAgICB0aGlzLmNvbnRyb2xzLmZpbHRlcigoY29udHJvbCkgPT4gY29udHJvbC5lbmFibGVkIHx8IHRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICAubWFwKChjb250cm9sKSA9PiBjb250cm9sLnZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FueUNvbnRyb2xzKGNvbmRpdGlvbjogRnVuY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9scy5zb21lKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IGNvbnRyb2wuZW5hYmxlZCAmJiBjb25kaXRpb24oY29udHJvbCkpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2V0VXBDb250cm9scygpOiB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdXN0IHN1cHBseSBhIHZhbHVlIGZvciBmb3JtIGNvbnRyb2wgYXQgaW5kZXg6ICR7aX0uYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgY29udHJvbCBvZiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoY29udHJvbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aCA+IDAgfHwgdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyQ29udHJvbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICBjb250cm9sLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSh0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICB9XG59XG4iXX0=