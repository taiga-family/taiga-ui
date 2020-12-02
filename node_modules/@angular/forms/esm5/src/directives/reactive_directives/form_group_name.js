/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Directive, forwardRef, Host, Inject, Input, Optional, Self, SkipSelf } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '../../validators';
import { AbstractFormGroupDirective } from '../abstract_form_group_directive';
import { ControlContainer } from '../control_container';
import { ReactiveErrors } from '../reactive_errors';
import { composeAsyncValidators, composeValidators, controlPath } from '../shared';
import { FormGroupDirective } from './form_group_directive';
export var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(function () { return FormGroupName; })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormGroupName = /** @class */ (function (_super) {
    __extends(FormGroupName, _super);
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    __decorate([
        Input('formGroupName'),
        __metadata("design:type", Object)
    ], FormGroupName.prototype, "name", void 0);
    FormGroupName = __decorate([
        Directive({ selector: '[formGroupName]', providers: [formGroupNameProvider] }),
        __param(0, Optional()), __param(0, Host()), __param(0, SkipSelf()),
        __param(1, Optional()), __param(1, Self()), __param(1, Inject(NG_VALIDATORS)),
        __param(2, Optional()), __param(2, Self()), __param(2, Inject(NG_ASYNC_VALIDATORS)),
        __metadata("design:paramtypes", [ControlContainer, Array, Array])
    ], FormGroupName);
    return FormGroupName;
}(AbstractFormGroupDirective));
export { FormGroupName };
export var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(function () { return FormArrayName; })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
var FormArrayName = /** @class */ (function (_super) {
    __extends(FormArrayName, _super);
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    /**
     * @description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @description
         * The `FormArray` bound to this directive.
         */
        get: function () {
            return this.formDirective.getFormArray(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () {
            return this._parent ? this._parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         */
        get: function () {
            return composeValidators(this._validators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @description
         * Async validator function composed of all the async validators registered with this directive.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    __decorate([
        Input('formArrayName'),
        __metadata("design:type", Object)
    ], FormArrayName.prototype, "name", void 0);
    FormArrayName = __decorate([
        Directive({ selector: '[formArrayName]', providers: [formArrayNameProvider] }),
        __param(0, Optional()), __param(0, Host()), __param(0, SkipSelf()),
        __param(1, Optional()), __param(1, Self()), __param(1, Inject(NG_VALIDATORS)),
        __param(2, Optional()), __param(2, Self()), __param(2, Inject(NG_ASYNC_VALIDATORS)),
        __metadata("design:paramtypes", [ControlContainer, Array, Array])
    ], FormArrayName);
    return FormArrayName;
}(ControlContainer));
export { FormArrayName };
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9ncm91cF9uYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd0SCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDNUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHakYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQVE7SUFDeEMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDO0NBQzdDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDRztBQUVIO0lBQW1DLGlDQUEwQjtJQWEzRCx1QkFDb0MsTUFBd0IsRUFDYixVQUFpQixFQUNYLGVBQXNCO1FBSDNFLFlBSUUsaUJBQU8sU0FJUjtRQUhDLEtBQUksQ0FBQyxPQUFP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QUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBIb3N0LCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFNlbGYsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuLi9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4uL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7UmVhY3RpdmVFcnJvcnN9IGZyb20gJy4uL3JlYWN0aXZlX2Vycm9ycyc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBjb250cm9sUGF0aH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQge0Zvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBmb3JtR3JvdXBOYW1lUHJvdmlkZXI6IGFueSA9IHtcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUdyb3VwTmFtZSlcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogU3luY3MgYSBuZXN0ZWQgYEZvcm1Hcm91cGAgdG8gYSBET00gZWxlbWVudC5cbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBwYXJlbnQgYEZvcm1Hcm91cERpcmVjdGl2ZWAuXG4gKlxuICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCBgRm9ybUdyb3VwYCB0byBsaW5rLCBhbmRcbiAqIGxvb2tzIGZvciBhIGBGb3JtR3JvdXBgIHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICogYEZvcm1Hcm91cGAgaW5zdGFuY2UgeW91IHBhc3NlZCBpbnRvIGBGb3JtR3JvdXBEaXJlY3RpdmVgLlxuICpcbiAqIFVzZSBuZXN0ZWQgZm9ybSBncm91cHMgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgYVxuICogZm9ybSBzZXBhcmF0ZWx5IGZyb20gdGhlIHJlc3Qgb3IgdG8gZ3JvdXAgdGhlIHZhbHVlcyBvZiBjZXJ0YWluXG4gKiBjb250cm9scyBpbnRvIHRoZWlyIG93biBuZXN0ZWQgb2JqZWN0LlxuICpcbiAqIEBzZWUgW1JlYWN0aXZlIEZvcm1zIEd1aWRlXShndWlkZS9yZWFjdGl2ZS1mb3JtcylcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBBY2Nlc3MgdGhlIGdyb3VwIGJ5IG5hbWVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgdXNlcyB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbCNnZXQgZ2V0fSBtZXRob2QgdG8gYWNjZXNzIHRoZVxuICogYXNzb2NpYXRlZCBgRm9ybUdyb3VwYFxuICpcbiAqIGBgYHRzXG4gKiAgIHRoaXMuZm9ybS5nZXQoJ25hbWUnKTtcbiAqIGBgYFxuICpcbiAqICMjIyBBY2Nlc3MgaW5kaXZpZHVhbCBjb250cm9scyBpbiB0aGUgZ3JvdXBcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgdXNlcyB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbCNnZXQgZ2V0fSBtZXRob2QgdG8gYWNjZXNzXG4gKiBpbmRpdmlkdWFsIGNvbnRyb2xzIHdpdGhpbiB0aGUgZ3JvdXAgdXNpbmcgZG90IHN5bnRheC5cbiAqXG4gKiBgYGB0c1xuICogICB0aGlzLmZvcm0uZ2V0KCduYW1lLmZpcnN0Jyk7XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVnaXN0ZXIgYSBuZXN0ZWQgYEZvcm1Hcm91cGAuXG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHJlZ2lzdGVycyBhIG5lc3RlZCAqbmFtZSogYEZvcm1Hcm91cGAgd2l0aGluIGFuIGV4aXN0aW5nIGBGb3JtR3JvdXBgLFxuICogYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gcmV0cmlldmUgdGhlIG5lc3RlZCBgRm9ybUdyb3VwYCBhbmQgaW5kaXZpZHVhbCBjb250cm9scy5cbiAqXG4gKiB7QGV4YW1wbGUgZm9ybXMvdHMvbmVzdGVkRm9ybUdyb3VwL25lc3RlZF9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICpcbiAqIEBuZ01vZHVsZSBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUdyb3VwTmFtZVByb3ZpZGVyXX0pXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwTmFtZSBleHRlbmRzIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRyYWNrcyB0aGUgbmFtZSBvZiB0aGUgYEZvcm1Hcm91cGAgYm91bmQgdG8gdGhlIGRpcmVjdGl2ZS4gVGhlIG5hbWUgY29ycmVzcG9uZHNcbiAgICogdG8gYSBrZXkgaW4gdGhlIHBhcmVudCBgRm9ybUdyb3VwYCBvciBgRm9ybUFycmF5YC5cbiAgICogQWNjZXB0cyBhIG5hbWUgYXMgYSBzdHJpbmcgb3IgYSBudW1iZXIuXG4gICAqIFRoZSBuYW1lIGluIHRoZSBmb3JtIG9mIGEgc3RyaW5nIGlzIHVzZWZ1bCBmb3IgaW5kaXZpZHVhbCBmb3JtcyxcbiAgICogd2hpbGUgdGhlIG51bWVyaWNhbCBmb3JtIGFsbG93cyBmb3IgZm9ybSBncm91cHMgdG8gYmUgYm91bmRcbiAgICogdG8gaW5kaWNlcyB3aGVuIGl0ZXJhdGluZyBvdmVyIGdyb3VwcyBpbiBhIGBGb3JtQXJyYXlgLlxuICAgKi9cbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIEBJbnB1dCgnZm9ybUdyb3VwTmFtZScpIG5hbWUhOiBzdHJpbmd8bnVtYmVyfG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgQEluamVjdChOR19WQUxJREFUT1JTKSB2YWxpZGF0b3JzOiBhbnlbXSxcbiAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgQEluamVjdChOR19BU1lOQ19WQUxJREFUT1JTKSBhc3luY1ZhbGlkYXRvcnM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge1xuICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICBSZWFjdGl2ZUVycm9ycy5ncm91cFBhcmVudEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZm9ybUFycmF5TmFtZVByb3ZpZGVyOiBhbnkgPSB7XG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1BcnJheU5hbWUpXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFN5bmNzIGEgbmVzdGVkIGBGb3JtQXJyYXlgIHRvIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IGBGb3JtR3JvdXBEaXJlY3RpdmVgIChzZWxlY3RvcjpcbiAqIGBbZm9ybUdyb3VwXWApLlxuICpcbiAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQgYEZvcm1BcnJheWAgeW91IHdhbnQgdG8gbGluaywgYW5kXG4gKiB3aWxsIGxvb2sgZm9yIGEgYEZvcm1BcnJheWAgcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gKiBgRm9ybUdyb3VwYCBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8gYEZvcm1Hcm91cERpcmVjdGl2ZWAuXG4gKlxuICogQHNlZSBbUmVhY3RpdmUgRm9ybXMgR3VpZGVdKGd1aWRlL3JlYWN0aXZlLWZvcm1zKVxuICogQHNlZSBgQWJzdHJhY3RDb250cm9sYFxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgZm9ybXMvdHMvbmVzdGVkRm9ybUFycmF5L25lc3RlZF9mb3JtX2FycmF5X2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICpcbiAqIEBuZ01vZHVsZSBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Zvcm1BcnJheU5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUFycmF5TmFtZVByb3ZpZGVyXX0pXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5TmFtZSBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcmVudDogQ29udHJvbENvbnRhaW5lcjtcblxuICAvKiogQGludGVybmFsICovXG4gIF92YWxpZGF0b3JzOiBhbnlbXTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9hc3luY1ZhbGlkYXRvcnM6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVHJhY2tzIHRoZSBuYW1lIG9mIHRoZSBgRm9ybUFycmF5YCBib3VuZCB0byB0aGUgZGlyZWN0aXZlLiBUaGUgbmFtZSBjb3JyZXNwb25kc1xuICAgKiB0byBhIGtleSBpbiB0aGUgcGFyZW50IGBGb3JtR3JvdXBgIG9yIGBGb3JtQXJyYXlgLlxuICAgKiBBY2NlcHRzIGEgbmFtZSBhcyBhIHN0cmluZyBvciBhIG51bWJlci5cbiAgICogVGhlIG5hbWUgaW4gdGhlIGZvcm0gb2YgYSBzdHJpbmcgaXMgdXNlZnVsIGZvciBpbmRpdmlkdWFsIGZvcm1zLFxuICAgKiB3aGlsZSB0aGUgbnVtZXJpY2FsIGZvcm0gYWxsb3dzIGZvciBmb3JtIGFycmF5cyB0byBiZSBib3VuZFxuICAgKiB0byBpbmRpY2VzIHdoZW4gaXRlcmF0aW5nIG92ZXIgYXJyYXlzIGluIGEgYEZvcm1BcnJheWAuXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgQElucHV0KCdmb3JtQXJyYXlOYW1lJykgbmFtZSE6IHN0cmluZ3xudW1iZXJ8bnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBASW5qZWN0KE5HX1ZBTElEQVRPUlMpIHZhbGlkYXRvcnM6IGFueVtdLFxuICAgICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBASW5qZWN0KE5HX0FTWU5DX1ZBTElEQVRPUlMpIGFzeW5jVmFsaWRhdG9yczogYW55W10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgd2hlbiB0aGUgZGlyZWN0aXZlJ3MgaW5wdXRzIGFyZSBpbml0aWFsaXplZC4gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuICAgKlxuICAgKiBAdGhyb3dzIElmIHRoZSBkaXJlY3RpdmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHBhcmVudC5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgIHRoaXMuZm9ybURpcmVjdGl2ZSEuYWRkRm9ybUFycmF5KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIGJlZm9yZSB0aGUgZGlyZWN0aXZlJ3MgaW5zdGFuY2UgaXMgZGVzdHJveWVkLiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUFycmF5KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIGBGb3JtQXJyYXlgIGJvdW5kIHRvIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlIS5nZXRGb3JtQXJyYXkodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSB0b3AtbGV2ZWwgZGlyZWN0aXZlIGZvciB0aGlzIGdyb3VwIGlmIHByZXNlbnQsIG90aGVyd2lzZSBudWxsLlxuICAgKi9cbiAgZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybUdyb3VwRGlyZWN0aXZlfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyA8Rm9ybUdyb3VwRGlyZWN0aXZlPnRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyBhbiBhcnJheSB0aGF0IHJlcHJlc2VudHMgdGhlIHBhdGggZnJvbSB0aGUgdG9wLWxldmVsIGZvcm0gdG8gdGhpcyBjb250cm9sLlxuICAgKiBFYWNoIGluZGV4IGlzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgY29udHJvbCBvbiB0aGF0IGxldmVsLlxuICAgKi9cbiAgZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUgPT0gbnVsbCA/IHRoaXMubmFtZSA6IHRoaXMubmFtZS50b1N0cmluZygpLCB0aGlzLl9wYXJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTeW5jaHJvbm91cyB2YWxpZGF0b3IgZnVuY3Rpb24gY29tcG9zZWQgb2YgYWxsIHRoZSBzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzXG4gICAqIGRpcmVjdGl2ZS5cbiAgICovXG4gIGdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm58bnVsbCB7XG4gICAgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBc3luYyB2YWxpZGF0b3IgZnVuY3Rpb24gY29tcG9zZWQgb2YgYWxsIHRoZSBhc3luYyB2YWxpZGF0b3JzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG4gIGdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZufG51bGwge1xuICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7XG4gICAgaWYgKF9oYXNJbnZhbGlkUGFyZW50KHRoaXMuX3BhcmVudCkpIHtcbiAgICAgIFJlYWN0aXZlRXJyb3JzLmFycmF5UGFyZW50RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9oYXNJbnZhbGlkUGFyZW50KHBhcmVudDogQ29udHJvbENvbnRhaW5lcik6IGJvb2xlYW4ge1xuICByZXR1cm4gIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSk7XG59XG4iXX0=