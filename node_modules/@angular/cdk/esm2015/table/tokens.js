/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * \@docs-private
 * @type {?}
 */
export const CDK_TABLE = new InjectionToken('CDK_TABLE');
/**
 * Configurable options for `CdkTextColumn`.
 * @record
 * @template T
 */
export function TextColumnOptions() { }
if (false) {
    /**
     * Default function that provides the header text based on the column name if a header
     * text is not provided.
     * @type {?|undefined}
     */
    TextColumnOptions.prototype.defaultHeaderTextTransform;
    /**
     * Default data accessor to use if one is not provided.
     * @type {?|undefined}
     */
    TextColumnOptions.prototype.defaultDataAccessor;
}
/**
 * Injection token that can be used to specify the text column options.
 * @type {?}
 */
export const TEXT_COLUMN_OPTIONS = new InjectionToken('text-column-options');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS90b2tlbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBTTdDLE1BQU0sT0FBTyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQU0sV0FBVyxDQUFDOzs7Ozs7QUFHN0QsdUNBU0M7Ozs7Ozs7SUFKQyx1REFBc0Q7Ozs7O0lBR3RELGdEQUF3RDs7Ozs7O0FBSTFELE1BQU0sT0FBTyxtQkFBbUIsR0FDNUIsSUFBSSxjQUFjLENBQXlCLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFVzZWQgdG8gcHJvdmlkZSBhIHRhYmxlIHRvIHNvbWUgb2YgdGhlIHN1Yi1jb21wb25lbnRzIHdpdGhvdXQgY2F1c2luZyBhIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfVEFCTEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignQ0RLX1RBQkxFJyk7XG5cbi8qKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgYENka1RleHRDb2x1bW5gLiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXh0Q29sdW1uT3B0aW9uczxUPiB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIGhlYWRlciB0ZXh0IGJhc2VkIG9uIHRoZSBjb2x1bW4gbmFtZSBpZiBhIGhlYWRlclxuICAgKiB0ZXh0IGlzIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIGRlZmF1bHRIZWFkZXJUZXh0VHJhbnNmb3JtPzogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXG4gIC8qKiBEZWZhdWx0IGRhdGEgYWNjZXNzb3IgdG8gdXNlIGlmIG9uZSBpcyBub3QgcHJvdmlkZWQuICovXG4gIGRlZmF1bHREYXRhQWNjZXNzb3I/OiAoZGF0YTogVCwgbmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSB0ZXh0IGNvbHVtbiBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IFRFWFRfQ09MVU1OX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxUZXh0Q29sdW1uT3B0aW9uczxhbnk+PigndGV4dC1jb2x1bW4tb3B0aW9ucycpO1xuIl19