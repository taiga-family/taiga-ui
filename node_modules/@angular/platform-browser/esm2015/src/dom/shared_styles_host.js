/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/dom/shared_styles_host.ts
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
import { Inject, Injectable } from '@angular/core';
export class SharedStylesHost {
    constructor() {
        /**
         * \@internal
         */
        this._stylesSet = new Set();
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    addStyles(styles) {
        /** @type {?} */
        const additions = new Set();
        styles.forEach((/**
         * @param {?} style
         * @return {?}
         */
        style => {
            if (!this._stylesSet.has(style)) {
                this._stylesSet.add(style);
                additions.add(style);
            }
        }));
        this.onStylesAdded(additions);
    }
    /**
     * @param {?} additions
     * @return {?}
     */
    onStylesAdded(additions) { }
    /**
     * @return {?}
     */
    getAllStyles() {
        return Array.from(this._stylesSet);
    }
}
SharedStylesHost.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * \@internal
     * @type {?}
     * @protected
     */
    SharedStylesHost.prototype._stylesSet;
}
export class DomSharedStylesHost extends SharedStylesHost {
    /**
     * @param {?} _doc
     */
    constructor(_doc) {
        super();
        this._doc = _doc;
        this._hostNodes = new Set();
        this._styleNodes = new Set();
        this._hostNodes.add(_doc.head);
    }
    /**
     * @private
     * @param {?} styles
     * @param {?} host
     * @return {?}
     */
    _addStylesToHost(styles, host) {
        styles.forEach((/**
         * @param {?} style
         * @return {?}
         */
        (style) => {
            /** @type {?} */
            const styleEl = this._doc.createElement('style');
            styleEl.textContent = style;
            this._styleNodes.add(host.appendChild(styleEl));
        }));
    }
    /**
     * @param {?} hostNode
     * @return {?}
     */
    addHost(hostNode) {
        this._addStylesToHost(this._stylesSet, hostNode);
        this._hostNodes.add(hostNode);
    }
    /**
     * @param {?} hostNode
     * @return {?}
     */
    removeHost(hostNode) {
        this._hostNodes.delete(hostNode);
    }
    /**
     * @param {?} additions
     * @return {?}
     */
    onStylesAdded(additions) {
        this._hostNodes.forEach((/**
         * @param {?} hostNode
         * @return {?}
         */
        hostNode => this._addStylesToHost(additions, hostNode)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._styleNodes.forEach((/**
         * @param {?} styleNode
         * @return {?}
         */
        styleNode => getDOM().remove(styleNode)));
    }
}
DomSharedStylesHost.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomSharedStylesHost.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomSharedStylesHost.prototype._hostNodes;
    /**
     * @type {?}
     * @private
     */
    DomSharedStylesHost.prototype._styleNodes;
    /**
     * @type {?}
     * @private
     */
    DomSharedStylesHost.prototype._doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkX3N0eWxlc19ob3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL3NoYXJlZF9zdHlsZXNfaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUc1RCxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCOzs7O1FBR1ksZUFBVSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFrQjNDLENBQUM7Ozs7O0lBaEJDLFNBQVMsQ0FBQyxNQUFnQjs7Y0FDbEIsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFVO1FBQ25DLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxTQUFzQixJQUFTLENBQUM7Ozs7SUFFOUMsWUFBWTtRQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBcEJGLFVBQVU7Ozs7Ozs7O0lBR1Qsc0NBQXlDOztBQXFCM0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjs7OztJQUd2RCxZQUFzQyxJQUFTO1FBQzdDLEtBQUssRUFBRSxDQUFDO1FBRDRCLFNBQUksR0FBSixJQUFJLENBQUs7UUFGdkMsZUFBVSxHQUFHLElBQUksR0FBRyxFQUFRLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBUSxDQUFDO1FBR3BDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsTUFBbUIsRUFBRSxJQUFVO1FBQ3RELE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTs7a0JBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDaEQsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBYztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxRQUFjO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFNBQXNCO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUFoQ0YsVUFBVTs7Ozs0Q0FJSSxNQUFNLFNBQUMsUUFBUTs7Ozs7OztJQUY1Qix5Q0FBcUM7Ozs7O0lBQ3JDLDBDQUFzQzs7Ozs7SUFDMUIsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5ULCDJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNoYXJlZFN0eWxlc0hvc3Qge1xuICAvKiogQGludGVybmFsICovXG4gIHByb3RlY3RlZCBfc3R5bGVzU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgYWRkU3R5bGVzKHN0eWxlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBhZGRpdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3N0eWxlc1NldC5oYXMoc3R5bGUpKSB7XG4gICAgICAgIHRoaXMuX3N0eWxlc1NldC5hZGQoc3R5bGUpO1xuICAgICAgICBhZGRpdGlvbnMuYWRkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uU3R5bGVzQWRkZWQoYWRkaXRpb25zKTtcbiAgfVxuXG4gIG9uU3R5bGVzQWRkZWQoYWRkaXRpb25zOiBTZXQ8c3RyaW5nPik6IHZvaWQge31cblxuICBnZXRBbGxTdHlsZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3N0eWxlc1NldCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVNoYXJlZFN0eWxlc0hvc3QgZXh0ZW5kcyBTaGFyZWRTdHlsZXNIb3N0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfaG9zdE5vZGVzID0gbmV3IFNldDxOb2RlPigpO1xuICBwcml2YXRlIF9zdHlsZU5vZGVzID0gbmV3IFNldDxOb2RlPigpO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faG9zdE5vZGVzLmFkZChfZG9jLmhlYWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkU3R5bGVzVG9Ib3N0KHN0eWxlczogU2V0PHN0cmluZz4sIGhvc3Q6IE5vZGUpOiB2b2lkIHtcbiAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVFbCA9IHRoaXMuX2RvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbC50ZXh0Q29udGVudCA9IHN0eWxlO1xuICAgICAgdGhpcy5fc3R5bGVOb2Rlcy5hZGQoaG9zdC5hcHBlbmRDaGlsZChzdHlsZUVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRIb3N0KGhvc3ROb2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5fYWRkU3R5bGVzVG9Ib3N0KHRoaXMuX3N0eWxlc1NldCwgaG9zdE5vZGUpO1xuICAgIHRoaXMuX2hvc3ROb2Rlcy5hZGQoaG9zdE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlSG9zdChob3N0Tm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuX2hvc3ROb2Rlcy5kZWxldGUoaG9zdE5vZGUpO1xuICB9XG5cbiAgb25TdHlsZXNBZGRlZChhZGRpdGlvbnM6IFNldDxzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5faG9zdE5vZGVzLmZvckVhY2goaG9zdE5vZGUgPT4gdGhpcy5fYWRkU3R5bGVzVG9Ib3N0KGFkZGl0aW9ucywgaG9zdE5vZGUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N0eWxlTm9kZXMuZm9yRWFjaChzdHlsZU5vZGUgPT4gZ2V0RE9NKCkucmVtb3ZlKHN0eWxlTm9kZSkpO1xuICB9XG59XG4iXX0=