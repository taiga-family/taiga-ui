/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from './model';
function isAbstractControlOptions(options) {
    return options.asyncValidators !== undefined ||
        options.validators !== undefined ||
        options.updateOn !== undefined;
}
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy configuration object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    FormBuilder.prototype.group = function (controlsConfig, options) {
        if (options === void 0) { options = null; }
        var controls = this._reduceControls(controlsConfig);
        var validators = null;
        var asyncValidators = null;
        var updateOn = undefined;
        if (options != null) {
            if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
            }
            else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
        }
        return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
    };
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */
    FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
        return new FormControl(formState, validatorOrOpts, asyncValidator);
    };
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */
    FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
        var _this = this;
        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validatorOrOpts, asyncValidator);
    };
    /** @internal */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    FormBuilder = __decorate([
        Injectable()
    ], FormBuilder);
    return FormBuilder;
}());
export { FormBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2Zvcm1fYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQTBDLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFZLE1BQU0sU0FBUyxDQUFDO0FBRTlHLFNBQVMsd0JBQXdCLENBQUMsT0FDb0I7SUFDcEQsT0FBZ0MsT0FBUSxDQUFDLGVBQWUsS0FBSyxTQUFTO1FBQ3pDLE9BQVEsQ0FBQyxVQUFVLEtBQUssU0FBUztRQUNqQyxPQUFRLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQztBQUMvRCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFFSDtJQUFBO0lBMkhBLENBQUM7SUExSEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ0gsMkJBQUssR0FBTCxVQUNJLGNBQW9DLEVBQ3BDLE9BQWdFO1FBQWhFLHdCQUFBLEVBQUEsY0FBZ0U7UUFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RCxJQUFJLFVBQVUsR0FBbUMsSUFBSSxDQUFDO1FBQ3RELElBQUksZUFBZSxHQUE2QyxJQUFJLENBQUM7UUFDckUsSUFBSSxRQUFRLEdBQXdCLFNBQVMsQ0FBQztRQUU5QyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDckMseUNBQXlDO2dCQUN6QyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEUsZUFBZSxHQUFHLE9B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QztTQUNwQztJQUNILENBQUM7SUExSFUsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXLENBMkh2QjtJQUFELGtCQUFDO0NBQUEsQUEzSEQsSUEySEM7U0EzSFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEFic3RyYWN0Q29udHJvbE9wdGlvbnMsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUhvb2tzfSBmcm9tICcuL21vZGVsJztcblxuZnVuY3Rpb24gaXNBYnN0cmFjdENvbnRyb2xPcHRpb25zKG9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnN8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1trZXk6IHN0cmluZ106IGFueX0pOiBvcHRpb25zIGlzIEFic3RyYWN0Q29udHJvbE9wdGlvbnMge1xuICByZXR1cm4gKDxBYnN0cmFjdENvbnRyb2xPcHRpb25zPm9wdGlvbnMpLmFzeW5jVmFsaWRhdG9ycyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAoPEFic3RyYWN0Q29udHJvbE9wdGlvbnM+b3B0aW9ucykudmFsaWRhdG9ycyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAoPEFic3RyYWN0Q29udHJvbE9wdGlvbnM+b3B0aW9ucykudXBkYXRlT24gIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZXMgYW4gYEFic3RyYWN0Q29udHJvbGAgZnJvbSBhIHVzZXItc3BlY2lmaWVkIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogVGhlIGBGb3JtQnVpbGRlcmAgcHJvdmlkZXMgc3ludGFjdGljIHN1Z2FyIHRoYXQgc2hvcnRlbnMgY3JlYXRpbmcgaW5zdGFuY2VzIG9mIGEgYEZvcm1Db250cm9sYCxcbiAqIGBGb3JtR3JvdXBgLCBvciBgRm9ybUFycmF5YC4gSXQgcmVkdWNlcyB0aGUgYW1vdW50IG9mIGJvaWxlcnBsYXRlIG5lZWRlZCB0byBidWlsZCBjb21wbGV4XG4gKiBmb3Jtcy5cbiAqXG4gKiBAc2VlIFtSZWFjdGl2ZSBGb3JtcyBHdWlkZV0oL2d1aWRlL3JlYWN0aXZlLWZvcm1zKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1CdWlsZGVyIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgYEZvcm1Hcm91cGAgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBjb250cm9sc0NvbmZpZyBBIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgaXMgdGhlIG5hbWVcbiAgICogdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zIG9iamVjdCBmb3IgdGhlIGBGb3JtR3JvdXBgLiBUaGUgb2JqZWN0IGNhblxuICAgKiBoYXZlIHR3byBzaGFwZXM6XG4gICAqXG4gICAqIDEpIGBBYnN0cmFjdENvbnRyb2xPcHRpb25zYCBvYmplY3QgKHByZWZlcnJlZCksIHdoaWNoIGNvbnNpc3RzIG9mOlxuICAgKiAqIGB2YWxpZGF0b3JzYDogQSBzeW5jaHJvbm91cyB2YWxpZGF0b3IgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHZhbGlkYXRvciBmdW5jdGlvbnNcbiAgICogKiBgYXN5bmNWYWxpZGF0b3JzYDogQSBzaW5nbGUgYXN5bmMgdmFsaWRhdG9yIG9yIGFycmF5IG9mIGFzeW5jIHZhbGlkYXRvciBmdW5jdGlvbnNcbiAgICogKiBgdXBkYXRlT25gOiBUaGUgZXZlbnQgdXBvbiB3aGljaCB0aGUgY29udHJvbCBzaG91bGQgYmUgdXBkYXRlZCAob3B0aW9uczogJ2NoYW5nZScgfCAnYmx1cicgfFxuICAgKiBzdWJtaXQnKVxuICAgKlxuICAgKiAyKSBMZWdhY3kgY29uZmlndXJhdGlvbiBvYmplY3QsIHdoaWNoIGNvbnNpc3RzIG9mOlxuICAgKiAqIGB2YWxpZGF0b3JgOiBBIHN5bmNocm9ub3VzIHZhbGlkYXRvciBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgdmFsaWRhdG9yIGZ1bmN0aW9uc1xuICAgKiAqIGBhc3luY1ZhbGlkYXRvcmA6IEEgc2luZ2xlIGFzeW5jIHZhbGlkYXRvciBvciBhcnJheSBvZiBhc3luYyB2YWxpZGF0b3IgZnVuY3Rpb25zXG4gICAqXG4gICAqL1xuICBncm91cChcbiAgICAgIGNvbnRyb2xzQ29uZmlnOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICAgIG9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnN8e1trZXk6IHN0cmluZ106IGFueX18bnVsbCA9IG51bGwpOiBGb3JtR3JvdXAge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWcpO1xuXG4gICAgbGV0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW118bnVsbCA9IG51bGw7XG4gICAgbGV0IGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW118bnVsbCA9IG51bGw7XG4gICAgbGV0IHVwZGF0ZU9uOiBGb3JtSG9va3N8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzQWJzdHJhY3RDb250cm9sT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICAvLyBgb3B0aW9uc2AgYXJlIGBBYnN0cmFjdENvbnRyb2xPcHRpb25zYFxuICAgICAgICB2YWxpZGF0b3JzID0gb3B0aW9ucy52YWxpZGF0b3JzICE9IG51bGwgPyBvcHRpb25zLnZhbGlkYXRvcnMgOiBudWxsO1xuICAgICAgICBhc3luY1ZhbGlkYXRvcnMgPSBvcHRpb25zLmFzeW5jVmFsaWRhdG9ycyAhPSBudWxsID8gb3B0aW9ucy5hc3luY1ZhbGlkYXRvcnMgOiBudWxsO1xuICAgICAgICB1cGRhdGVPbiA9IG9wdGlvbnMudXBkYXRlT24gIT0gbnVsbCA/IG9wdGlvbnMudXBkYXRlT24gOiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBgb3B0aW9uc2AgYXJlIGxlZ2FjeSBmb3JtIGdyb3VwIG9wdGlvbnNcbiAgICAgICAgdmFsaWRhdG9ycyA9IG9wdGlvbnNbJ3ZhbGlkYXRvciddICE9IG51bGwgPyBvcHRpb25zWyd2YWxpZGF0b3InXSA6IG51bGw7XG4gICAgICAgIGFzeW5jVmFsaWRhdG9ycyA9IG9wdGlvbnNbJ2FzeW5jVmFsaWRhdG9yJ10gIT0gbnVsbCA/IG9wdGlvbnNbJ2FzeW5jVmFsaWRhdG9yJ10gOiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCB7YXN5bmNWYWxpZGF0b3JzLCB1cGRhdGVPbiwgdmFsaWRhdG9yc30pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgYEZvcm1Db250cm9sYCB3aXRoIHRoZSBnaXZlbiBzdGF0ZSwgdmFsaWRhdG9ycyBhbmQgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIGZvcm1TdGF0ZSBJbml0aWFsaXplcyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgc3RhdGUgdmFsdWUsIG9yXG4gICAqIHdpdGggYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRvck9yT3B0cyBBIHN5bmNocm9ub3VzIHZhbGlkYXRvciBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2ZcbiAgICogc3VjaCBmdW5jdGlvbnMsIG9yIGFuIGBBYnN0cmFjdENvbnRyb2xPcHRpb25zYCBvYmplY3QgdGhhdCBjb250YWluc1xuICAgKiB2YWxpZGF0aW9uIGZ1bmN0aW9ucyBhbmQgYSB2YWxpZGF0aW9uIHRyaWdnZXIuXG4gICAqXG4gICAqIEBwYXJhbSBhc3luY1ZhbGlkYXRvciBBIHNpbmdsZSBhc3luYyB2YWxpZGF0b3Igb3IgYXJyYXkgb2YgYXN5bmMgdmFsaWRhdG9yXG4gICAqIGZ1bmN0aW9ucy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogIyMjIEluaXRpYWxpemUgYSBjb250cm9sIGFzIGRpc2FibGVkXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSByZXR1cm5zIGEgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cbiAgICpcbiAgICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiZm9ybXMvdHMvZm9ybUJ1aWxkZXIvZm9ybV9idWlsZGVyX2V4YW1wbGUudHNcIiByZWdpb249XCJkaXNhYmxlZC1jb250cm9sXCI+XG4gICAqIDwvY29kZS1leGFtcGxlPlxuICAgKi9cbiAgY29udHJvbChcbiAgICAgIGZvcm1TdGF0ZTogYW55LCB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdfEFic3RyYWN0Q29udHJvbE9wdGlvbnN8bnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW118bnVsbCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gbmV3IEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yT3JPcHRzLCBhc3luY1ZhbGlkYXRvcik7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhIG5ldyBgRm9ybUFycmF5YCBmcm9tIHRoZSBnaXZlbiBhcnJheSBvZiBjb25maWd1cmF0aW9ucyxcbiAgICogdmFsaWRhdG9ycyBhbmQgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRyb2xzQ29uZmlnIEFuIGFycmF5IG9mIGNoaWxkIGNvbnRyb2xzIG9yIGNvbnRyb2wgY29uZmlncy4gRWFjaFxuICAgKiBjaGlsZCBjb250cm9sIGlzIGdpdmVuIGFuIGluZGV4IHdoZW4gaXQgaXMgcmVnaXN0ZXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRvck9yT3B0cyBBIHN5bmNocm9ub3VzIHZhbGlkYXRvciBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2ZcbiAgICogc3VjaCBmdW5jdGlvbnMsIG9yIGFuIGBBYnN0cmFjdENvbnRyb2xPcHRpb25zYCBvYmplY3QgdGhhdCBjb250YWluc1xuICAgKiB2YWxpZGF0aW9uIGZ1bmN0aW9ucyBhbmQgYSB2YWxpZGF0aW9uIHRyaWdnZXIuXG4gICAqXG4gICAqIEBwYXJhbSBhc3luY1ZhbGlkYXRvciBBIHNpbmdsZSBhc3luYyB2YWxpZGF0b3Igb3IgYXJyYXkgb2YgYXN5bmMgdmFsaWRhdG9yXG4gICAqIGZ1bmN0aW9ucy5cbiAgICovXG4gIGFycmF5KFxuICAgICAgY29udHJvbHNDb25maWc6IGFueVtdLFxuICAgICAgdmFsaWRhdG9yT3JPcHRzPzogVmFsaWRhdG9yRm58VmFsaWRhdG9yRm5bXXxBYnN0cmFjdENvbnRyb2xPcHRpb25zfG51bGwsXG4gICAgICBhc3luY1ZhbGlkYXRvcj86IEFzeW5jVmFsaWRhdG9yRm58QXN5bmNWYWxpZGF0b3JGbltdfG51bGwpOiBGb3JtQXJyYXkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gY29udHJvbHNDb25maWcubWFwKGMgPT4gdGhpcy5fY3JlYXRlQ29udHJvbChjKSk7XG4gICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvck9yT3B0cywgYXN5bmNWYWxpZGF0b3IpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWc6IHtbazogc3RyaW5nXTogYW55fSk6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9IHtcbiAgICBjb25zdCBjb250cm9sczoge1trZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjb250cm9sc0NvbmZpZykuZm9yRWFjaChjb250cm9sTmFtZSA9PiB7XG4gICAgICBjb250cm9sc1tjb250cm9sTmFtZV0gPSB0aGlzLl9jcmVhdGVDb250cm9sKGNvbnRyb2xzQ29uZmlnW2NvbnRyb2xOYW1lXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY3JlYXRlQ29udHJvbChjb250cm9sQ29uZmlnOiBhbnkpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGlmIChjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Hcm91cCB8fFxuICAgICAgICBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICByZXR1cm4gY29udHJvbENvbmZpZztcblxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sQ29uZmlnKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb250cm9sQ29uZmlnWzBdO1xuICAgICAgY29uc3QgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMSA/IGNvbnRyb2xDb25maWdbMV0gOiBudWxsO1xuICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gPSBjb250cm9sQ29uZmlnLmxlbmd0aCA+IDIgPyBjb250cm9sQ29uZmlnWzJdIDogbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wodmFsdWUsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgfVxuICB9XG59XG4iXX0=