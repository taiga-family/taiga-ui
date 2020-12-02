/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Inject, Injectable, Optional } from '@angular/core';
import { DIR_DOCUMENT } from './dir-document-token';
import * as i0 from "@angular/core";
import * as i1 from "./dir-document-token";
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /** The current 'ltr' or 'rtl' value. */
        this.value = 'ltr';
        /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
        this.change = new EventEmitter();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    Directionality.prototype.ngOnDestroy = function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIR_DOCUMENT,] }] }
    ]; };
    Directionality.ɵprov = i0.ɵɵdefineInjectable({ factory: function Directionality_Factory() { return new Directionality(i0.ɵɵinject(i1.DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());
export { Directionality };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uYWxpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2JpZGkvZGlyZWN0aW9uYWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRDs7O0dBR0c7QUFDSDtJQVFFLHdCQUE4QyxTQUFlO1FBTjdELHdDQUF3QztRQUMvQixVQUFLLEdBQWMsS0FBSyxDQUFDO1FBRWxDLGtFQUFrRTtRQUN6RCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUc5QyxJQUFJLFNBQVMsRUFBRTtZQUNiLDhCQUE4QjtZQUM5QiwyQ0FBMkM7WUFDM0Msa0ZBQWtGO1lBQ2xGLHVGQUF1RjtZQUN2RixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakYsSUFBTSxLQUFLLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXZCRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dEQVFqQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVk7Ozt5QkEzQjlDO0NBMkNDLEFBeEJELElBd0JDO1NBdkJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RJUl9ET0NVTUVOVH0gZnJvbSAnLi9kaXItZG9jdW1lbnQtdG9rZW4nO1xuXG5cbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9ICdsdHInIHwgJ3J0bCc7XG5cblxuLyoqXG4gKiBUaGUgZGlyZWN0aW9uYWxpdHkgKExUUiAvIFJUTCkgY29udGV4dCBmb3IgdGhlIGFwcGxpY2F0aW9uIChvciBhIHN1YnRyZWUgb2YgaXQpLlxuICogRXhwb3NlcyB0aGUgY3VycmVudCBkaXJlY3Rpb24gYW5kIGEgc3RyZWFtIG9mIGRpcmVjdGlvbiBjaGFuZ2VzLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25hbGl0eSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBUaGUgY3VycmVudCAnbHRyJyBvciAncnRsJyB2YWx1ZS4gKi9cbiAgcmVhZG9ubHkgdmFsdWU6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgJ2x0cicgLyAncnRsJyBzdGF0ZSBjaGFuZ2VzLiAqL1xuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERpcmVjdGlvbj4oKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERJUl9ET0NVTUVOVCkgX2RvY3VtZW50PzogYW55KSB7XG4gICAgaWYgKF9kb2N1bWVudCkge1xuICAgICAgLy8gVE9ETzogaGFuZGxlICdhdXRvJyB2YWx1ZSAtXG4gICAgICAvLyBXZSBzdGlsbCBuZWVkIHRvIGFjY291bnQgZm9yIGRpcj1cImF1dG9cIi5cbiAgICAgIC8vIEl0IGxvb2tzIGxpa2UgSFRNTEVsZW1lbmV0LmRpciBpcyBhbHNvIFwiYXV0b1wiIHdoZW4gdGhhdCdzIHNldCB0byB0aGUgYXR0cmlidXRlLFxuICAgICAgLy8gYnV0IGdldENvbXB1dGVkU3R5bGUgcmV0dXJuIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuIGF2b2lkaW5nIGdldENvbXB1dGVkU3R5bGUgZm9yIG5vd1xuICAgICAgY29uc3QgYm9keURpciA9IF9kb2N1bWVudC5ib2R5ID8gX2RvY3VtZW50LmJvZHkuZGlyIDogbnVsbDtcbiAgICAgIGNvbnN0IGh0bWxEaXIgPSBfZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgOiBudWxsO1xuICAgICAgY29uc3QgdmFsdWUgPSBib2R5RGlyIHx8IGh0bWxEaXI7XG4gICAgICB0aGlzLnZhbHVlID0gKHZhbHVlID09PSAnbHRyJyB8fCB2YWx1ZSA9PT0gJ3J0bCcpID8gdmFsdWUgOiAnbHRyJztcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoYW5nZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=