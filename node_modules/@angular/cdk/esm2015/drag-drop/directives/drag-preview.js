/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
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
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
export class CdkDragPreview {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    /**
     * Whether the preview should preserve the same size as the item that is being dragged.
     * @return {?}
     */
    get matchSize() { return this._matchSize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matchSize(value) { this._matchSize = coerceBooleanProperty(value); }
}
CdkDragPreview.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[cdkDragPreview]'
            },] }
];
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [
    { type: TemplateRef }
];
CdkDragPreview.propDecorators = {
    data: [{ type: Input }],
    matchSize: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CdkDragPreview.ngAcceptInputType_matchSize;
    /**
     * Context data to be added to the preview template instance.
     * @type {?}
     */
    CdkDragPreview.prototype.data;
    /**
     * @type {?}
     * @private
     */
    CdkDragPreview.prototype._matchSize;
    /** @type {?} */
    CdkDragPreview.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZGlyZWN0aXZlcy9kcmFnLXByZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFTMUUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFVekIsWUFBbUIsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBRnRDLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFFc0IsQ0FBQzs7Ozs7SUFMbEQsSUFDSSxTQUFTLEtBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDcEQsSUFBSSxTQUFTLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7WUFWbEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUFUa0IsV0FBVzs7O21CQVkzQixLQUFLO3dCQUdMLEtBQUs7Ozs7SUFPTiwyQ0FBaUQ7Ozs7O0lBVmpELDhCQUFpQjs7Ozs7SUFNakIsb0NBQTJCOztJQUVmLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbi8qKlxuICogRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIHRlbXBsYXRlIGZvciB0aGUgcHJldmlld1xuICogb2YgYSBDZGtEcmFnIHdoZW4gaXQgaXMgYmVpbmcgZHJhZ2dlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbY2RrRHJhZ1ByZXZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnUHJldmlldzxUID0gYW55PiB7XG4gIC8qKiBDb250ZXh0IGRhdGEgdG8gYmUgYWRkZWQgdG8gdGhlIHByZXZpZXcgdGVtcGxhdGUgaW5zdGFuY2UuICovXG4gIEBJbnB1dCgpIGRhdGE6IFQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpZXcgc2hvdWxkIHByZXNlcnZlIHRoZSBzYW1lIHNpemUgYXMgdGhlIGl0ZW0gdGhhdCBpcyBiZWluZyBkcmFnZ2VkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF0Y2hTaXplKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbWF0Y2hTaXplOyB9XG4gIHNldCBtYXRjaFNpemUodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fbWF0Y2hTaXplID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9tYXRjaFNpemUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+KSB7fVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXRjaFNpemU6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==