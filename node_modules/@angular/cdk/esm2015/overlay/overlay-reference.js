/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Basic interface for an overlay. Used to avoid circular type references between
 * `OverlayRef`, `PositionStrategy` and `ScrollStrategy`, and `OverlayConfig`.
 * \@docs-private
 * @record
 */
export function OverlayReference() { }
if (false) {
    /** @type {?} */
    OverlayReference.prototype.attach;
    /** @type {?} */
    OverlayReference.prototype.detach;
    /** @type {?} */
    OverlayReference.prototype.dispose;
    /** @type {?} */
    OverlayReference.prototype.overlayElement;
    /** @type {?} */
    OverlayReference.prototype.hostElement;
    /** @type {?} */
    OverlayReference.prototype.getConfig;
    /** @type {?} */
    OverlayReference.prototype.hasAttached;
    /** @type {?} */
    OverlayReference.prototype.updateSize;
    /** @type {?} */
    OverlayReference.prototype.updatePosition;
    /** @type {?} */
    OverlayReference.prototype.getDirection;
    /** @type {?} */
    OverlayReference.prototype.setDirection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1yZWZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1yZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLHNDQVlDOzs7SUFYQyxrQ0FBcUM7O0lBQ3JDLGtDQUFrQjs7SUFDbEIsbUNBQW9COztJQUNwQiwwQ0FBNEI7O0lBQzVCLHVDQUF5Qjs7SUFDekIscUNBQXFCOztJQUNyQix1Q0FBMkI7O0lBQzNCLHNDQUFrQzs7SUFDbEMsMENBQTJCOztJQUMzQix3Q0FBOEI7O0lBQzlCLHdDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0RpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuLyoqXG4gKiBCYXNpYyBpbnRlcmZhY2UgZm9yIGFuIG92ZXJsYXkuIFVzZWQgdG8gYXZvaWQgY2lyY3VsYXIgdHlwZSByZWZlcmVuY2VzIGJldHdlZW5cbiAqIGBPdmVybGF5UmVmYCwgYFBvc2l0aW9uU3RyYXRlZ3lgIGFuZCBgU2Nyb2xsU3RyYXRlZ3lgLCBhbmQgYE92ZXJsYXlDb25maWdgLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlSZWZlcmVuY2Uge1xuICBhdHRhY2g6IChwb3J0YWw6IFBvcnRhbDxhbnk+KSA9PiBhbnk7XG4gIGRldGFjaDogKCkgPT4gYW55O1xuICBkaXNwb3NlOiAoKSA9PiB2b2lkO1xuICBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgZ2V0Q29uZmlnOiAoKSA9PiBhbnk7XG4gIGhhc0F0dGFjaGVkOiAoKSA9PiBib29sZWFuO1xuICB1cGRhdGVTaXplOiAoY29uZmlnOiBhbnkpID0+IHZvaWQ7XG4gIHVwZGF0ZVBvc2l0aW9uOiAoKSA9PiB2b2lkO1xuICBnZXREaXJlY3Rpb246ICgpID0+IERpcmVjdGlvbjtcbiAgc2V0RGlyZWN0aW9uOiAoZGlyOiBEaXJlY3Rpb24gfCBEaXJlY3Rpb25hbGl0eSkgPT4gdm9pZDtcbn1cbiJdfQ==