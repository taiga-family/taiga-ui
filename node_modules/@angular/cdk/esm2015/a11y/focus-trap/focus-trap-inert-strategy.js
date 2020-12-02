/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/focus-trap-inert-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, } from '@angular/core';
/**
 * The injection token used to specify the inert strategy.
 * @type {?}
 */
export const FOCUS_TRAP_INERT_STRATEGY = new InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
/**
 * A strategy that dictates how FocusTrap should prevent elements
 * outside of the FocusTrap from being focused.
 * @record
 */
export function FocusTrapInertStrategy() { }
if (false) {
    /**
     * Makes all elements outside focusTrap unfocusable.
     * @param {?} focusTrap
     * @return {?}
     */
    FocusTrapInertStrategy.prototype.preventFocus = function (focusTrap) { };
    /**
     * Reverts elements made unfocusable by preventFocus to their previous state.
     * @param {?} focusTrap
     * @return {?}
     */
    FocusTrapInertStrategy.prototype.allowFocus = function (focusTrap) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC1pbmVydC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAtaW5lcnQtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUNMLGNBQWMsR0FDZixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFJdkIsTUFBTSxPQUFPLHlCQUF5QixHQUNwQyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUM7Ozs7OztBQU16RSw0Q0FLQzs7Ozs7OztJQUhDLHlFQUF5Qzs7Ozs7O0lBRXpDLHVFQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb2N1c1RyYXB9IGZyb20gJy4vZm9jdXMtdHJhcCc7XG5cbi8qKiBUaGUgaW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gc3BlY2lmeSB0aGUgaW5lcnQgc3RyYXRlZ3kuICovXG5leHBvcnQgY29uc3QgRk9DVVNfVFJBUF9JTkVSVF9TVFJBVEVHWSA9XG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxGb2N1c1RyYXBJbmVydFN0cmF0ZWd5PignRk9DVVNfVFJBUF9JTkVSVF9TVFJBVEVHWScpO1xuXG4vKipcbiAqIEEgc3RyYXRlZ3kgdGhhdCBkaWN0YXRlcyBob3cgRm9jdXNUcmFwIHNob3VsZCBwcmV2ZW50IGVsZW1lbnRzXG4gKiBvdXRzaWRlIG9mIHRoZSBGb2N1c1RyYXAgZnJvbSBiZWluZyBmb2N1c2VkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzVHJhcEluZXJ0U3RyYXRlZ3kge1xuICAvKiogTWFrZXMgYWxsIGVsZW1lbnRzIG91dHNpZGUgZm9jdXNUcmFwIHVuZm9jdXNhYmxlLiAqL1xuICBwcmV2ZW50Rm9jdXMoZm9jdXNUcmFwOiBGb2N1c1RyYXApOiB2b2lkO1xuICAvKiogUmV2ZXJ0cyBlbGVtZW50cyBtYWRlIHVuZm9jdXNhYmxlIGJ5IHByZXZlbnRGb2N1cyB0byB0aGVpciBwcmV2aW91cyBzdGF0ZS4gKi9cbiAgYWxsb3dGb2N1cyhmb2N1c1RyYXA6IEZvY3VzVHJhcCk6IHZvaWQ7XG59XG4iXX0=