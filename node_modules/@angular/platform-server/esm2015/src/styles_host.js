/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-server/src/styles_host.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { ɵSharedStylesHost as SharedStylesHost, ɵTRANSITION_ID } from '@angular/platform-browser';
export class ServerStylesHost extends SharedStylesHost {
    /**
     * @param {?} doc
     * @param {?} transitionId
     */
    constructor(doc, transitionId) {
        super();
        this.doc = doc;
        this.transitionId = transitionId;
        this.head = null;
        this.head = doc.getElementsByTagName('head')[0];
    }
    /**
     * @private
     * @param {?} style
     * @return {?}
     */
    _addStyle(style) {
        /** @type {?} */
        let adapter = getDOM();
        /** @type {?} */
        const el = adapter.createElement('style');
        el.textContent = style;
        if (!!this.transitionId) {
            el.setAttribute('ng-transition', this.transitionId);
        }
        this.head.appendChild(el);
    }
    /**
     * @param {?} additions
     * @return {?}
     */
    onStylesAdded(additions) {
        additions.forEach((/**
         * @param {?} style
         * @return {?}
         */
        style => this._addStyle(style)));
    }
}
ServerStylesHost.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerStylesHost.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ɵTRANSITION_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.head;
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    ServerStylesHost.prototype.transitionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzX2hvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1zZXJ2ZXIvc3JjL3N0eWxlc19ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsaUJBQWlCLElBQUksZ0JBQWdCLEVBQUUsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFHaEcsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjs7Ozs7SUFHcEQsWUFDOEIsR0FBUSxFQUNVLFlBQW9CO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRm9CLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDVSxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUo1RCxTQUFJLEdBQVEsSUFBSSxDQUFDO1FBTXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxLQUFhOztZQUN6QixPQUFPLEdBQUcsTUFBTSxFQUFFOztjQUNoQixFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDekMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN2QixFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxTQUFzQjtRQUNsQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3BELENBQUM7OztZQXZCRixVQUFVOzs7OzRDQUtKLE1BQU0sU0FBQyxRQUFRO3lDQUNmLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7Ozs7OztJQUp0QyxnQ0FBeUI7Ozs7O0lBR3JCLCtCQUFrQzs7Ozs7SUFDbEMsd0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5ULCDJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHvJtVNoYXJlZFN0eWxlc0hvc3QgYXMgU2hhcmVkU3R5bGVzSG9zdCwgybVUUkFOU0lUSU9OX0lEfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlclN0eWxlc0hvc3QgZXh0ZW5kcyBTaGFyZWRTdHlsZXNIb3N0IHtcbiAgcHJpdmF0ZSBoZWFkOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoybVUUkFOU0lUSU9OX0lEKSBwcml2YXRlIHRyYW5zaXRpb25JZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZFN0eWxlKHN0eWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgYWRhcHRlciA9IGdldERPTSgpO1xuICAgIGNvbnN0IGVsID0gYWRhcHRlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsLnRleHRDb250ZW50ID0gc3R5bGU7XG4gICAgaWYgKCEhdGhpcy50cmFuc2l0aW9uSWQpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnbmctdHJhbnNpdGlvbicsIHRoaXMudHJhbnNpdGlvbklkKTtcbiAgICB9XG4gICAgdGhpcy5oZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxuXG4gIG9uU3R5bGVzQWRkZWQoYWRkaXRpb25zOiBTZXQ8c3RyaW5nPikge1xuICAgIGFkZGl0aW9ucy5mb3JFYWNoKHN0eWxlID0+IHRoaXMuX2FkZFN0eWxlKHN0eWxlKSk7XG4gIH1cbn1cbiJdfQ==