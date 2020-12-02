/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives/reactive_errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FormErrorExamples as Examples } from './error_examples';
export class ReactiveErrors {
    /**
     * @return {?}
     */
    static controlParentException() {
        throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${Examples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static ngModelGroupException() {
        throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

       Option 1:  Update the parent to be formGroupName (reactive form strategy)

        ${Examples.formGroupName}

        Option 2: Use ngModel instead of formControlName (template-driven strategy)

        ${Examples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingFormException() {
        throw new Error(`formGroup expects a FormGroup instance. Please pass one in.

       Example:

       ${Examples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static groupParentException() {
        throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${Examples.formGroupName}`);
    }
    /**
     * @return {?}
     */
    static arrayParentException() {
        throw new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

        Example:

        ${Examples.formArrayName}`);
    }
    /**
     * @return {?}
     */
    static disabledAttrWarning() {
        console.warn(`
      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
      you. We recommend using this approach to avoid 'changed after checked' errors.
       
      Example: 
      form = new FormGroup({
        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        last: new FormControl('Drew', Validators.required)
      });
    `);
    }
    /**
     * @param {?} directiveName
     * @return {?}
     */
    static ngModelWarning(directiveName) {
        console.warn(`
    It looks like you're using ngModel on the same form field as ${directiveName}. 
    Support for using the ngModel input property and ngModelChange event with 
    reactive form directives has been deprecated in Angular v6 and will be removed 
    in Angular v7.
    
    For more information on this, see our API docs here:
    https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective' :
            'FormControlName'}#use-with-ngmodel
    `);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmVfZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUUvRCxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixNQUFNLENBQUMsc0JBQXNCO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQ1g7Ozs7O1FBS0EsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxxQkFBcUI7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FDWDs7Ozs7VUFLRSxRQUFRLENBQUMsYUFBYTs7OztVQUl0QixRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ0QsTUFBTSxDQUFDLG9CQUFvQjtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDOzs7O1NBSVgsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxvQkFBb0I7UUFDekIsTUFBTSxJQUFJLEtBQUssQ0FDWDs7Ozs7UUFLQSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLG9CQUFvQjtRQUN6QixNQUFNLElBQUksS0FBSyxDQUNYOzs7OztVQUtFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsbUJBQW1CO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7S0FVWixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBcUI7UUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQzttRUFDa0QsYUFBYTs7Ozs7O21DQU94RSxhQUFhLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3hCLGlCQUFpQjtLQUN0RCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtGb3JtRXJyb3JFeGFtcGxlcyBhcyBFeGFtcGxlc30gZnJvbSAnLi9lcnJvcl9leGFtcGxlcyc7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVycm9ycyB7XG4gIHN0YXRpYyBjb250cm9sUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYGZvcm1Db250cm9sTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxuXG4gICAgICBFeGFtcGxlOlxuXG4gICAgICAke0V4YW1wbGVzLmZvcm1Db250cm9sTmFtZX1gKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ01vZGVsR3JvdXBFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgZm9ybUNvbnRyb2xOYW1lIGNhbm5vdCBiZSB1c2VkIHdpdGggYW4gbmdNb2RlbEdyb3VwIHBhcmVudC4gSXQgaXMgb25seSBjb21wYXRpYmxlIHdpdGggcGFyZW50c1xuICAgICAgIHRoYXQgYWxzbyBoYXZlIGEgXCJmb3JtXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXG5cbiAgICAgICBPcHRpb24gMTogIFVwZGF0ZSB0aGUgcGFyZW50IHRvIGJlIGZvcm1Hcm91cE5hbWUgKHJlYWN0aXZlIGZvcm0gc3RyYXRlZ3kpXG5cbiAgICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfVxuXG4gICAgICAgIE9wdGlvbiAyOiBVc2UgbmdNb2RlbCBpbnN0ZWFkIG9mIGZvcm1Db250cm9sTmFtZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KVxuXG4gICAgICAgICR7RXhhbXBsZXMubmdNb2RlbEdyb3VwfWApO1xuICB9XG4gIHN0YXRpYyBtaXNzaW5nRm9ybUV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGZvcm1Hcm91cCBleHBlY3RzIGEgRm9ybUdyb3VwIGluc3RhbmNlLiBQbGVhc2UgcGFzcyBvbmUgaW4uXG5cbiAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgJHtFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWV9YCk7XG4gIH1cblxuICBzdGF0aWMgZ3JvdXBQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgZm9ybUdyb3VwTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXG4gICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgICR7RXhhbXBsZXMuZm9ybUdyb3VwTmFtZX1gKTtcbiAgfVxuXG4gIHN0YXRpYyBhcnJheVBhcmVudEV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAke0V4YW1wbGVzLmZvcm1BcnJheU5hbWV9YCk7XG4gIH1cblxuICBzdGF0aWMgZGlzYWJsZWRBdHRyV2FybmluZygpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oYFxuICAgICAgSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aXRoIGEgcmVhY3RpdmUgZm9ybSBkaXJlY3RpdmUuIElmIHlvdSBzZXQgZGlzYWJsZWQgdG8gdHJ1ZVxuICAgICAgd2hlbiB5b3Ugc2V0IHVwIHRoaXMgY29udHJvbCBpbiB5b3VyIGNvbXBvbmVudCBjbGFzcywgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aWxsIGFjdHVhbGx5IGJlIHNldCBpbiB0aGUgRE9NIGZvclxuICAgICAgeW91LiBXZSByZWNvbW1lbmQgdXNpbmcgdGhpcyBhcHByb2FjaCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvcnMuXG4gICAgICAgXG4gICAgICBFeGFtcGxlOiBcbiAgICAgIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICB9KTtcbiAgICBgKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ01vZGVsV2FybmluZyhkaXJlY3RpdmVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oYFxuICAgIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIG5nTW9kZWwgb24gdGhlIHNhbWUgZm9ybSBmaWVsZCBhcyAke2RpcmVjdGl2ZU5hbWV9LiBcbiAgICBTdXBwb3J0IGZvciB1c2luZyB0aGUgbmdNb2RlbCBpbnB1dCBwcm9wZXJ0eSBhbmQgbmdNb2RlbENoYW5nZSBldmVudCB3aXRoIFxuICAgIHJlYWN0aXZlIGZvcm0gZGlyZWN0aXZlcyBoYXMgYmVlbiBkZXByZWNhdGVkIGluIEFuZ3VsYXIgdjYgYW5kIHdpbGwgYmUgcmVtb3ZlZCBcbiAgICBpbiBBbmd1bGFyIHY3LlxuICAgIFxuICAgIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoaXMsIHNlZSBvdXIgQVBJIGRvY3MgaGVyZTpcbiAgICBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zLyR7XG4gICAgICAgIGRpcmVjdGl2ZU5hbWUgPT09ICdmb3JtQ29udHJvbCcgPyAnRm9ybUNvbnRyb2xEaXJlY3RpdmUnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGb3JtQ29udHJvbE5hbWUnfSN1c2Utd2l0aC1uZ21vZGVsXG4gICAgYCk7XG4gIH1cbn1cbiJdfQ==