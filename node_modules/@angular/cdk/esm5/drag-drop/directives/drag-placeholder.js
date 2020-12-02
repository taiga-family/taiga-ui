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
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] }
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: Input }]
    };
    return CdkDragPlaceholder;
}());
export { CdkDragPlaceholder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL2RpcmVjdGl2ZXMvZHJhZy1wbGFjZWhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUQ7OztHQUdHO0FBQ0g7SUFNRSw0QkFBbUIsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQUcsQ0FBQzs7Z0JBTm5ELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2lCQUM1Qzs7OztnQkFSa0IsV0FBVzs7O3VCQVczQixLQUFLOztJQUVSLHlCQUFDO0NBQUEsQUFQRCxJQU9DO1NBSlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0ZW1wbGF0ZSBmb3IgdGhlIHBsYWNlaG9sZGVyIG9mIGEgQ2RrRHJhZyB3aGVuXG4gKiBpdCBpcyBiZWluZyBkcmFnZ2VkLiBUaGUgcGxhY2Vob2xkZXIgaXMgZGlzcGxheWVkIGluIHBsYWNlIG9mIHRoZSBlbGVtZW50IGJlaW5nIGRyYWdnZWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2Nka0RyYWdQbGFjZWhvbGRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdQbGFjZWhvbGRlcjxUID0gYW55PiB7XG4gIC8qKiBDb250ZXh0IGRhdGEgdG8gYmUgYWRkZWQgdG8gdGhlIHBsYWNlaG9sZGVyIHRlbXBsYXRlIGluc3RhbmNlLiAqL1xuICBASW5wdXQoKSBkYXRhOiBUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+KSB7fVxufVxuIl19