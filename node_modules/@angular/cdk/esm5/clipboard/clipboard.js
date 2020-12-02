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
var Clipboard = /** @class */ (function () {
    function Clipboard(document) {
        this._document = document;
    }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    Clipboard.prototype.copy = function (text) {
        var pendingCopy = this.beginCopy(text);
        var successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    };
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    Clipboard.prototype.beginCopy = function (text) {
        return new PendingCopy(text, this._document);
    };
    Clipboard.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Clipboard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    Clipboard.ɵprov = i0.ɵɵdefineInjectable({ factory: function Clipboard_Factory() { return new Clipboard(i0.ɵɵinject(i1.DOCUMENT)); }, token: Clipboard, providedIn: "root" });
    return Clipboard;
}());
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jbGlwYm9hcmQvY2xpcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUczQzs7R0FFRztBQUNIO0lBSUUsbUJBQThCLFFBQWE7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQUksR0FBSixVQUFLLElBQVk7UUFDZixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFdEIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsNkJBQVMsR0FBVCxVQUFVLElBQVk7UUFDcEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQWpDRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dEQUlqQixNQUFNLFNBQUMsUUFBUTs7O29CQXBCOUI7Q0FrREMsQUFsQ0QsSUFrQ0M7U0FqQ1ksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQZW5kaW5nQ29weX0gZnJvbSAnLi9wZW5kaW5nLWNvcHknO1xuXG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBjb3B5aW5nIHRleHQgdG8gdGhlIGNsaXBib2FyZC5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENvcGllcyB0aGUgcHJvdmlkZWQgdGV4dCBpbnRvIHRoZSB1c2VyJ3MgY2xpcGJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCBUaGUgc3RyaW5nIHRvIGNvcHkuXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIG9wZXJhdGlvbiB3YXMgc3VjY2Vzc2Z1bC5cbiAgICovXG4gIGNvcHkodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGVuZGluZ0NvcHkgPSB0aGlzLmJlZ2luQ29weSh0ZXh0KTtcbiAgICBjb25zdCBzdWNjZXNzZnVsID0gcGVuZGluZ0NvcHkuY29weSgpO1xuICAgIHBlbmRpbmdDb3B5LmRlc3Ryb3koKTtcblxuICAgIHJldHVybiBzdWNjZXNzZnVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmVzIGEgc3RyaW5nIHRvIGJlIGNvcGllZCBsYXRlci4gVGhpcyBpcyB1c2VmdWwgZm9yIGxhcmdlIHN0cmluZ3NcbiAgICogd2hpY2ggdGFrZSB0b28gbG9uZyB0byBzdWNjZXNzZnVsbHkgcmVuZGVyIGFuZCBiZSBjb3BpZWQgaW4gdGhlIHNhbWUgdGljay5cbiAgICpcbiAgICogVGhlIGNhbGxlciBtdXN0IGNhbGwgYGRlc3Ryb3lgIG9uIHRoZSByZXR1cm5lZCBgUGVuZGluZ0NvcHlgLlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCBUaGUgc3RyaW5nIHRvIGNvcHkuXG4gICAqIEByZXR1cm5zIHRoZSBwZW5kaW5nIGNvcHkgb3BlcmF0aW9uLlxuICAgKi9cbiAgYmVnaW5Db3B5KHRleHQ6IHN0cmluZyk6IFBlbmRpbmdDb3B5IHtcbiAgICByZXR1cm4gbmV3IFBlbmRpbmdDb3B5KHRleHQsIHRoaXMuX2RvY3VtZW50KTtcbiAgfVxufVxuIl19