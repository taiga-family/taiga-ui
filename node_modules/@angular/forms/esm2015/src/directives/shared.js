/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isDevMode, ɵlooseIdentical as looseIdentical } from '@angular/core';
import { Validators } from '../validators';
import { CheckboxControlValueAccessor } from './checkbox_value_accessor';
import { DefaultValueAccessor } from './default_value_accessor';
import { normalizeAsyncValidator, normalizeValidator } from './normalize_validator';
import { NumberValueAccessor } from './number_value_accessor';
import { RadioControlValueAccessor } from './radio_control_value_accessor';
import { RangeValueAccessor } from './range_value_accessor';
import { ReactiveErrors } from './reactive_errors';
import { SelectControlValueAccessor } from './select_control_value_accessor';
import { SelectMultipleControlValueAccessor } from './select_multiple_control_value_accessor';
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
export function controlPath(name, parent) {
    return [...(/** @type {?} */ (parent.path)), (/** @type {?} */ (name))];
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
export function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([(/** @type {?} */ (control.validator)), dir.validator]);
    control.asyncValidator = Validators.composeAsync([(/** @type {?} */ (control.asyncValidator)), dir.asyncValidator]);
    (/** @type {?} */ (dir.valueAccessor)).writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if ((/** @type {?} */ (dir.valueAccessor)).setDisabledState) {
        control.registerOnDisabledChange((/**
         * @param {?} isDisabled
         * @return {?}
         */
        (isDisabled) => {
            (/** @type {?} */ ((/** @type {?} */ (dir.valueAccessor)).setDisabledState))(isDisabled);
        }));
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (((/** @type {?} */ (validator))).registerOnValidatorChange)
            (/** @type {?} */ (((/** @type {?} */ (validator))).registerOnValidatorChange))((/**
             * @return {?}
             */
            () => control.updateValueAndValidity()));
    }));
    dir._rawAsyncValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (((/** @type {?} */ (validator))).registerOnValidatorChange)
            (/** @type {?} */ (((/** @type {?} */ (validator))).registerOnValidatorChange))((/**
             * @return {?}
             */
            () => control.updateValueAndValidity()));
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
export function cleanUpControl(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnChange((/**
     * @return {?}
     */
    () => _noControlError(dir)));
    (/** @type {?} */ (dir.valueAccessor)).registerOnTouched((/**
     * @return {?}
     */
    () => _noControlError(dir)));
    dir._rawValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    }));
    dir._rawAsyncValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    }));
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpViewChangePipeline(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnChange((/**
     * @param {?} newValue
     * @return {?}
     */
    (newValue) => {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpBlurPipeline(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnTouched((/**
     * @return {?}
     */
    () => {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange((/**
     * @param {?} newValue
     * @param {?} emitModelEvent
     * @return {?}
     */
    (newValue, emitModelEvent) => {
        // control -> view
        (/** @type {?} */ (dir.valueAccessor)).writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
export function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    /** @type {?} */
    let messageEnd;
    if ((/** @type {?} */ (dir.path)).length > 1) {
        messageEnd = `path: '${(/** @type {?} */ (dir.path)).join(' -> ')}'`;
    }
    else if ((/** @type {?} */ (dir.path))[0]) {
        messageEnd = `name: '${dir.path}'`;
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(`${message} ${messageEnd}`);
}
/**
 * @param {?} validators
 * @return {?}
 */
export function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
export function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
export function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    /** @type {?} */
    const change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !looseIdentical(viewModel, change.currentValue);
}
/** @type {?} */
const BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
export function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some((/**
     * @param {?} a
     * @return {?}
     */
    a => valueAccessor.constructor === a));
}
/**
 * @param {?} form
 * @param {?} directives
 * @return {?}
 */
export function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach((/**
     * @param {?} dir
     * @return {?}
     */
    dir => {
        /** @type {?} */
        const control = (/** @type {?} */ (dir.control));
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    }));
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
export function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    /** @type {?} */
    let defaultAccessor = undefined;
    /** @type {?} */
    let builtinAccessor = undefined;
    /** @type {?} */
    let customAccessor = undefined;
    valueAccessors.forEach((/**
     * @param {?} v
     * @return {?}
     */
    (v) => {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    }));
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
export function removeDir(list, el) {
    /** @type {?} */
    const index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
/**
 * @param {?} name
 * @param {?} type
 * @param {?} instance
 * @param {?} warningConfig
 * @return {?}
 */
export function _ngModelWarning(name, type, instance, warningConfig) {
    if (!isDevMode() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUczRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBR3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRTlELE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7O0FBSTVGLE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBaUIsRUFBRSxNQUF3QjtJQUNyRSxPQUFPLENBQUMsR0FBRyxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLEVBQUUsbUJBQUEsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLE9BQW9CLEVBQUUsR0FBYztJQUMvRCxJQUFJLENBQUMsT0FBTztRQUFFLFdBQVcsQ0FBQyxHQUFHLEVB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LENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZGLENBQUMsYUFBYSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQ2pFLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztRQUNwQyxRQUFRLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0tBQ3JDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtpc0Rldk1vZGUsIMm1bG9vc2VJZGVudGljYWwgYXMgbG9vc2VJZGVudGljYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Zvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tICcuLi92YWxpZGF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtub3JtYWxpemVBc3luY1ZhbGlkYXRvciwgbm9ybWFsaXplVmFsaWRhdG9yfSBmcm9tICcuL25vcm1hbGl6ZV92YWxpZGF0b3InO1xuaW1wb3J0IHtOdW1iZXJWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL251bWJlcl92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhbmdlVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9yYW5nZV92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0Zvcm1BcnJheU5hbWV9IGZyb20gJy4vcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUnO1xuaW1wb3J0IHtSZWFjdGl2ZUVycm9yc30gZnJvbSAnLi9yZWFjdGl2ZV9lcnJvcnMnO1xuaW1wb3J0IHtTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1NlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbFBhdGgobmFtZTogc3RyaW5nfG51bGwsIHBhcmVudDogQ29udHJvbENvbnRhaW5lcik6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFsuLi5wYXJlbnQucGF0aCEsIG5hbWUhXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwQ29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCwgZGlyOiBOZ0NvbnRyb2wpOiB2b2lkIHtcbiAgaWYgKCFjb250cm9sKSBfdGhyb3dFcnJvcihkaXIsICdDYW5ub3QgZmluZCBjb250cm9sIHdpdGgnKTtcbiAgaWYgKCFkaXIudmFsdWVBY2Nlc3NvcikgX3Rocm93RXJyb3IoZGlyLCAnTm8gdmFsdWUgYWNjZXNzb3IgZm9yIGZvcm0gY29udHJvbCB3aXRoJyk7XG5cbiAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yISwgZGlyLnZhbGlkYXRvcl0pO1xuICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW2NvbnRyb2wuYXN5bmNWYWxpZGF0b3IhLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgZGlyLnZhbHVlQWNjZXNzb3IhLndyaXRlVmFsdWUoY29udHJvbC52YWx1ZSk7XG5cbiAgc2V0VXBWaWV3Q2hhbmdlUGlwZWxpbmUoY29udHJvbCwgZGlyKTtcbiAgc2V0VXBNb2RlbENoYW5nZVBpcGVsaW5lKGNvbnRyb2wsIGRpcik7XG5cbiAgc2V0VXBCbHVyUGlwZWxpbmUoY29udHJvbCwgZGlyKTtcblxuICBpZiAoZGlyLnZhbHVlQWNjZXNzb3IhLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICBjb250cm9sLnJlZ2lzdGVyT25EaXNhYmxlZENoYW5nZSgoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4ge1xuICAgICAgZGlyLnZhbHVlQWNjZXNzb3IhLnNldERpc2FibGVkU3RhdGUhKGlzRGlzYWJsZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcmUtcnVuIHZhbGlkYXRpb24gd2hlbiB2YWxpZGF0b3IgYmluZGluZyBjaGFuZ2VzLCBlLmcuIG1pbmxlbmd0aD0zIC0+IG1pbmxlbmd0aD00XG4gIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3I6IFZhbGlkYXRvcnxWYWxpZGF0b3JGbikgPT4ge1xuICAgIGlmICgoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAoPFZhbGlkYXRvcj52YWxpZGF0b3IpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UhKCgpID0+IGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpKTtcbiAgfSk7XG5cbiAgZGlyLl9yYXdBc3luY1ZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvcnxBc3luY1ZhbGlkYXRvckZuKSA9PiB7XG4gICAgaWYgKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSlcbiAgICAgICg8VmFsaWRhdG9yPnZhbGlkYXRvcikucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSEoKCkgPT4gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVXBDb250cm9sKGNvbnRyb2w6IEZvcm1Db250cm9sLCBkaXI6IE5nQ29udHJvbCkge1xuICBkaXIudmFsdWVBY2Nlc3NvciEucmVnaXN0ZXJPbkNoYW5nZSgoKSA9PiBfbm9Db250cm9sRXJyb3IoZGlyKSk7XG4gIGRpci52YWx1ZUFjY2Vzc29yIS5yZWdpc3Rlck9uVG91Y2hlZCgoKSA9PiBfbm9Db250cm9sRXJyb3IoZGlyKSk7XG5cbiAgZGlyLl9yYXdWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogYW55KSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogYW55KSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjb250cm9sKSBjb250cm9sLl9jbGVhckNoYW5nZUZucygpO1xufVxuXG5mdW5jdGlvbiBzZXRVcFZpZXdDaGFuZ2VQaXBlbGluZShjb250cm9sOiBGb3JtQ29udHJvbCwgZGlyOiBOZ0NvbnRyb2wpOiB2b2lkIHtcbiAgZGlyLnZhbHVlQWNjZXNzb3IhLnJlZ2lzdGVyT25DaGFuZ2UoKG5ld1ZhbHVlOiBhbnkpID0+IHtcbiAgICBjb250cm9sLl9wZW5kaW5nVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBjb250cm9sLl9wZW5kaW5nQ2hhbmdlID0gdHJ1ZTtcbiAgICBjb250cm9sLl9wZW5kaW5nRGlydHkgPSB0cnVlO1xuXG4gICAgaWYgKGNvbnRyb2wudXBkYXRlT24gPT09ICdjaGFuZ2UnKSB1cGRhdGVDb250cm9sKGNvbnRyb2wsIGRpcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRVcEJsdXJQaXBlbGluZShjb250cm9sOiBGb3JtQ29udHJvbCwgZGlyOiBOZ0NvbnRyb2wpOiB2b2lkIHtcbiAgZGlyLnZhbHVlQWNjZXNzb3IhLnJlZ2lzdGVyT25Ub3VjaGVkKCgpID0+IHtcbiAgICBjb250cm9sLl9wZW5kaW5nVG91Y2hlZCA9IHRydWU7XG5cbiAgICBpZiAoY29udHJvbC51cGRhdGVPbiA9PT0gJ2JsdXInICYmIGNvbnRyb2wuX3BlbmRpbmdDaGFuZ2UpIHVwZGF0ZUNvbnRyb2woY29udHJvbCwgZGlyKTtcbiAgICBpZiAoY29udHJvbC51cGRhdGVPbiAhPT0gJ3N1Ym1pdCcpIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCwgZGlyOiBOZ0NvbnRyb2wpOiB2b2lkIHtcbiAgaWYgKGNvbnRyb2wuX3BlbmRpbmdEaXJ0eSkgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICBjb250cm9sLnNldFZhbHVlKGNvbnRyb2wuX3BlbmRpbmdWYWx1ZSwge2VtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2V9KTtcbiAgZGlyLnZpZXdUb01vZGVsVXBkYXRlKGNvbnRyb2wuX3BlbmRpbmdWYWx1ZSk7XG4gIGNvbnRyb2wuX3BlbmRpbmdDaGFuZ2UgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0VXBNb2RlbENoYW5nZVBpcGVsaW5lKGNvbnRyb2w6IEZvcm1Db250cm9sLCBkaXI6IE5nQ29udHJvbCk6IHZvaWQge1xuICBjb250cm9sLnJlZ2lzdGVyT25DaGFuZ2UoKG5ld1ZhbHVlOiBhbnksIGVtaXRNb2RlbEV2ZW50OiBib29sZWFuKSA9PiB7XG4gICAgLy8gY29udHJvbCAtPiB2aWV3XG4gICAgZGlyLnZhbHVlQWNjZXNzb3IhLndyaXRlVmFsdWUobmV3VmFsdWUpO1xuXG4gICAgLy8gY29udHJvbCAtPiBuZ01vZGVsXG4gICAgaWYgKGVtaXRNb2RlbEV2ZW50KSBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwRm9ybUNvbnRhaW5lcihcbiAgICBjb250cm9sOiBGb3JtR3JvdXB8Rm9ybUFycmF5LCBkaXI6IEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfEZvcm1BcnJheU5hbWUpIHtcbiAgaWYgKGNvbnRyb2wgPT0gbnVsbCkgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gIGNvbnRyb2wudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFtjb250cm9sLnZhbGlkYXRvciwgZGlyLnZhbGlkYXRvcl0pO1xuICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW2NvbnRyb2wuYXN5bmNWYWxpZGF0b3IsIGRpci5hc3luY1ZhbGlkYXRvcl0pO1xufVxuXG5mdW5jdGlvbiBfbm9Db250cm9sRXJyb3IoZGlyOiBOZ0NvbnRyb2wpIHtcbiAgcmV0dXJuIF90aHJvd0Vycm9yKGRpciwgJ1RoZXJlIGlzIG5vIEZvcm1Db250cm9sIGluc3RhbmNlIGF0dGFjaGVkIHRvIGZvcm0gY29udHJvbCBlbGVtZW50IHdpdGgnKTtcbn1cblxuZnVuY3Rpb24gX3Rocm93RXJyb3IoZGlyOiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBsZXQgbWVzc2FnZUVuZDogc3RyaW5nO1xuICBpZiAoZGlyLnBhdGghLmxlbmd0aCA+IDEpIHtcbiAgICBtZXNzYWdlRW5kID0gYHBhdGg6ICcke2Rpci5wYXRoIS5qb2luKCcgLT4gJyl9J2A7XG4gIH0gZWxzZSBpZiAoZGlyLnBhdGghWzBdKSB7XG4gICAgbWVzc2FnZUVuZCA9IGBuYW1lOiAnJHtkaXIucGF0aH0nYDtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlRW5kID0gJ3Vuc3BlY2lmaWVkIG5hbWUgYXR0cmlidXRlJztcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7bWVzc2FnZX0gJHttZXNzYWdlRW5kfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfFZhbGlkYXRvckZuPik6IFZhbGlkYXRvckZufG51bGwge1xuICByZXR1cm4gdmFsaWRhdG9ycyAhPSBudWxsID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZVZhbGlkYXRvcikpIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8QXN5bmNWYWxpZGF0b3J8QXN5bmNWYWxpZGF0b3JGbj4pOlxuICAgIEFzeW5jVmFsaWRhdG9yRm58bnVsbCB7XG4gIHJldHVybiB2YWxpZGF0b3JzICE9IG51bGwgPyBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyh2YWxpZGF0b3JzLm1hcChub3JtYWxpemVBc3luY1ZhbGlkYXRvcikpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogYW55fSwgdmlld01vZGVsOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKCFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdtb2RlbCcpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNoYW5nZSA9IGNoYW5nZXNbJ21vZGVsJ107XG5cbiAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gIWxvb3NlSWRlbnRpY2FsKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG59XG5cbmNvbnN0IEJVSUxUSU5fQUNDRVNTT1JTID0gW1xuICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBSYW5nZVZhbHVlQWNjZXNzb3IsXG4gIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbHRJbkFjY2Vzc29yKHZhbHVlQWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yKTogYm9vbGVhbiB7XG4gIHJldHVybiBCVUlMVElOX0FDQ0VTU09SUy5zb21lKGEgPT4gdmFsdWVBY2Nlc3Nvci5jb25zdHJ1Y3RvciA9PT0gYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jUGVuZGluZ0NvbnRyb2xzKGZvcm06IEZvcm1Hcm91cCwgZGlyZWN0aXZlczogTmdDb250cm9sW10pOiB2b2lkIHtcbiAgZm9ybS5fc3luY1BlbmRpbmdDb250cm9scygpO1xuICBkaXJlY3RpdmVzLmZvckVhY2goZGlyID0+IHtcbiAgICBjb25zdCBjb250cm9sID0gZGlyLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wudXBkYXRlT24gPT09ICdzdWJtaXQnICYmIGNvbnRyb2wuX3BlbmRpbmdDaGFuZ2UpIHtcbiAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShjb250cm9sLl9wZW5kaW5nVmFsdWUpO1xuICAgICAgY29udHJvbC5fcGVuZGluZ0NoYW5nZSA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFRPRE86IHZzYXZraW4gcmVtb3ZlIGl0IG9uY2UgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzAxMSBpcyBpbXBsZW1lbnRlZFxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFZhbHVlQWNjZXNzb3IoXG4gICAgZGlyOiBOZ0NvbnRyb2wsIHZhbHVlQWNjZXNzb3JzOiBDb250cm9sVmFsdWVBY2Nlc3NvcltdKTogQ29udHJvbFZhbHVlQWNjZXNzb3J8bnVsbCB7XG4gIGlmICghdmFsdWVBY2Nlc3NvcnMpIHJldHVybiBudWxsO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZUFjY2Vzc29ycykpXG4gICAgX3Rocm93RXJyb3IoZGlyLCAnVmFsdWUgYWNjZXNzb3Igd2FzIG5vdCBwcm92aWRlZCBhcyBhbiBhcnJheSBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcblxuICBsZXQgZGVmYXVsdEFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3Nvcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGxldCBidWlsdGluQWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgbGV0IGN1c3RvbUFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3Nvcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgdmFsdWVBY2Nlc3NvcnMuZm9yRWFjaCgodjogQ29udHJvbFZhbHVlQWNjZXNzb3IpID0+IHtcbiAgICBpZiAodi5jb25zdHJ1Y3RvciA9PT0gRGVmYXVsdFZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIGRlZmF1bHRBY2Nlc3NvciA9IHY7XG5cbiAgICB9IGVsc2UgaWYgKGlzQnVpbHRJbkFjY2Vzc29yKHYpKSB7XG4gICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGJ1aWx0LWluIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgIGJ1aWx0aW5BY2Nlc3NvciA9IHY7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1c3RvbUFjY2Vzc29yKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGN1c3RvbSB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICBjdXN0b21BY2Nlc3NvciA9IHY7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY3VzdG9tQWNjZXNzb3IpIHJldHVybiBjdXN0b21BY2Nlc3NvcjtcbiAgaWYgKGJ1aWx0aW5BY2Nlc3NvcikgcmV0dXJuIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgaWYgKGRlZmF1bHRBY2Nlc3NvcikgcmV0dXJuIGRlZmF1bHRBY2Nlc3NvcjtcblxuICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWxpZCB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEaXI8VD4obGlzdDogVFtdLCBlbDogVCk6IHZvaWQge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XG4gIGlmIChpbmRleCA+IC0xKSBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59XG5cbi8vIFRPRE8oa2FyYSk6IHJlbW92ZSBhZnRlciBkZXByZWNhdGlvbiBwZXJpb2RcbmV4cG9ydCBmdW5jdGlvbiBfbmdNb2RlbFdhcm5pbmcoXG4gICAgbmFtZTogc3RyaW5nLCB0eXBlOiB7X25nTW9kZWxXYXJuaW5nU2VudE9uY2U6IGJvb2xlYW59LFxuICAgIGluc3RhbmNlOiB7X25nTW9kZWxXYXJuaW5nU2VudDogYm9vbGVhbn0sIHdhcm5pbmdDb25maWc6IHN0cmluZ3xudWxsKSB7XG4gIGlmICghaXNEZXZNb2RlKCkgfHwgd2FybmluZ0NvbmZpZyA9PT0gJ25ldmVyJykgcmV0dXJuO1xuXG4gIGlmICgoKHdhcm5pbmdDb25maWcgPT09IG51bGwgfHwgd2FybmluZ0NvbmZpZyA9PT0gJ29uY2UnKSAmJiAhdHlwZS5fbmdNb2RlbFdhcm5pbmdTZW50T25jZSkgfHxcbiAgICAgICh3YXJuaW5nQ29uZmlnID09PSAnYWx3YXlzJyAmJiAhaW5zdGFuY2UuX25nTW9kZWxXYXJuaW5nU2VudCkpIHtcbiAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsV2FybmluZyhuYW1lKTtcbiAgICB0eXBlLl9uZ01vZGVsV2FybmluZ1NlbnRPbmNlID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5fbmdNb2RlbFdhcm5pbmdTZW50ID0gdHJ1ZTtcbiAgfVxufVxuIl19