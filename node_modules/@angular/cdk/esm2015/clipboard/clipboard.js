/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { PendingCopy } from './pending-copy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * A service for copying text to the clipboard.
 */
export class Clipboard {
    /**
     * @param {?} document
     */
    constructor(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param {?} text The string to copy.
     * @return {?} Whether the operation was successful.
     */
    copy(text) {
        /** @type {?} */
        const pendingCopy = this.beginCopy(text);
        /** @type {?} */
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param {?} text The string to copy.
     * @return {?} the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
}
Clipboard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Clipboard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ Clipboard.ɵprov = i0.ɵɵdefineInjectable({ factory: function Clipboard_Factory() { return new Clipboard(i0.ɵɵinject(i1.DOCUMENT)); }, token: Clipboard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Clipboard.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jbGlwYm9hcmQvY2xpcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQU8zQyxNQUFNLE9BQU8sU0FBUzs7OztJQUdwQixZQUE4QixRQUFhO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFRRCxJQUFJLENBQUMsSUFBWTs7Y0FDVCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQ2xDLFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFO1FBQ3JDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV0QixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7Ozs7O0lBV0QsU0FBUyxDQUFDLElBQVk7UUFDcEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQWpDRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OzRDQUlqQixNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFGNUIsOEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BlbmRpbmdDb3B5fSBmcm9tICcuL3BlbmRpbmctY29weSc7XG5cblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIGNvcHlpbmcgdGV4dCB0byB0aGUgY2xpcGJvYXJkLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9kb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ29waWVzIHRoZSBwcm92aWRlZCB0ZXh0IGludG8gdGhlIHVzZXIncyBjbGlwYm9hcmQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZXh0IFRoZSBzdHJpbmcgdG8gY29weS5cbiAgICogQHJldHVybnMgV2hldGhlciB0aGUgb3BlcmF0aW9uIHdhcyBzdWNjZXNzZnVsLlxuICAgKi9cbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBwZW5kaW5nQ29weSA9IHRoaXMuYmVnaW5Db3B5KHRleHQpO1xuICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBwZW5kaW5nQ29weS5jb3B5KCk7XG4gICAgcGVuZGluZ0NvcHkuZGVzdHJveSgpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWw7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZXMgYSBzdHJpbmcgdG8gYmUgY29waWVkIGxhdGVyLiBUaGlzIGlzIHVzZWZ1bCBmb3IgbGFyZ2Ugc3RyaW5nc1xuICAgKiB3aGljaCB0YWtlIHRvbyBsb25nIHRvIHN1Y2Nlc3NmdWxseSByZW5kZXIgYW5kIGJlIGNvcGllZCBpbiB0aGUgc2FtZSB0aWNrLlxuICAgKlxuICAgKiBUaGUgY2FsbGVyIG11c3QgY2FsbCBgZGVzdHJveWAgb24gdGhlIHJldHVybmVkIGBQZW5kaW5nQ29weWAuXG4gICAqXG4gICAqIEBwYXJhbSB0ZXh0IFRoZSBzdHJpbmcgdG8gY29weS5cbiAgICogQHJldHVybnMgdGhlIHBlbmRpbmcgY29weSBvcGVyYXRpb24uXG4gICAqL1xuICBiZWdpbkNvcHkodGV4dDogc3RyaW5nKTogUGVuZGluZ0NvcHkge1xuICAgIHJldHVybiBuZXcgUGVuZGluZ0NvcHkodGV4dCwgdGhpcy5fZG9jdW1lbnQpO1xuICB9XG59XG4iXX0=