/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-placeholder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, TemplateRef, Input } from '@angular/core';
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
export class CdkDragPlaceholder {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPlaceholder.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[cdkDragPlaceholder]'
            },] }
];
/** @nocollapse */
CdkDragPlaceholder.ctorParameters = () => [
    { type: TemplateRef }
];
CdkDragPlaceholder.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /**
     * Context data to be added to the placeholder template instance.
     * @type {?}
     */
    CdkDragPlaceholder.prototype.data;
    /** @type {?} */
    CdkDragPlaceholder.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL2RpcmVjdGl2ZXMvZHJhZy1wbGFjZWhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVM1RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRzdCLFlBQW1CLFdBQTJCO1FBQTNCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtJQUFHLENBQUM7OztZQU5uRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQzthQUM1Qzs7OztZQVJrQixXQUFXOzs7bUJBVzNCLEtBQUs7Ozs7Ozs7SUFBTixrQ0FBaUI7O0lBQ0wseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0ZW1wbGF0ZSBmb3IgdGhlIHBsYWNlaG9sZGVyIG9mIGEgQ2RrRHJhZyB3aGVuXG4gKiBpdCBpcyBiZWluZyBkcmFnZ2VkLiBUaGUgcGxhY2Vob2xkZXIgaXMgZGlzcGxheWVkIGluIHBsYWNlIG9mIHRoZSBlbGVtZW50IGJlaW5nIGRyYWdnZWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2Nka0RyYWdQbGFjZWhvbGRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdQbGFjZWhvbGRlcjxUID0gYW55PiB7XG4gIC8qKiBDb250ZXh0IGRhdGEgdG8gYmUgYWRkZWQgdG8gdGhlIHBsYWNlaG9sZGVyIHRlbXBsYXRlIGluc3RhbmNlLiAqL1xuICBASW5wdXQoKSBkYXRhOiBUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+KSB7fVxufVxuIl19