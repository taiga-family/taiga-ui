/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/util/change_detection_utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { detectChanges, markDirty } from '../instructions/all';
import { getRootComponents } from './discovery_utils';
/**
 * Marks a component for check (in case of OnPush components) and synchronously
 * performs change detection on the application this component belongs to.
 *
 * \@publicApi
 * \@globalApi ng
 * @param {?} component Component to {\@link ChangeDetectorRef#markForCheck mark for check}.
 *
 * @return {?}
 */
export function applyChanges(component) {
    markDirty(component);
    getRootComponents(component).forEach((/**
     * @param {?} rootComponent
     * @return {?}
     */
    rootComponent => detectChanges(rootComponent)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbl91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdXRpbC9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBV3BELE1BQU0sVUFBVSxZQUFZLENBQUMsU0FBYTtJQUN4QyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUM7QUFDdEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtkZXRlY3RDaGFuZ2VzLCBtYXJrRGlydHl9IGZyb20gJy4uL2luc3RydWN0aW9ucy9hbGwnO1xuaW1wb3J0IHtnZXRSb290Q29tcG9uZW50c30gZnJvbSAnLi9kaXNjb3ZlcnlfdXRpbHMnO1xuXG4vKipcbiAqIE1hcmtzIGEgY29tcG9uZW50IGZvciBjaGVjayAoaW4gY2FzZSBvZiBPblB1c2ggY29tcG9uZW50cykgYW5kIHN5bmNocm9ub3VzbHlcbiAqIHBlcmZvcm1zIGNoYW5nZSBkZXRlY3Rpb24gb24gdGhlIGFwcGxpY2F0aW9uIHRoaXMgY29tcG9uZW50IGJlbG9uZ3MgdG8uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgdG8ge0BsaW5rIENoYW5nZURldGVjdG9yUmVmI21hcmtGb3JDaGVjayBtYXJrIGZvciBjaGVja30uXG4gKlxuICogQHB1YmxpY0FwaVxuICogQGdsb2JhbEFwaSBuZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDaGFuZ2VzKGNvbXBvbmVudDoge30pOiB2b2lkIHtcbiAgbWFya0RpcnR5KGNvbXBvbmVudCk7XG4gIGdldFJvb3RDb21wb25lbnRzKGNvbXBvbmVudCkuZm9yRWFjaChyb290Q29tcG9uZW50ID0+IGRldGVjdENoYW5nZXMocm9vdENvbXBvbmVudCkpO1xufVxuIl19