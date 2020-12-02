/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/high-contrast-mode/high-contrast-mode-detector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
/** @enum {number} */
const HighContrastMode = {
    NONE: 0,
    BLACK_ON_WHITE: 1,
    WHITE_ON_BLACK: 2,
};
export { HighContrastMode };
/**
 * CSS class applied to the document body when in black-on-white high-contrast mode.
 * @type {?}
 */
export const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/**
 * CSS class applied to the document body when in white-on-black high-contrast mode.
 * @type {?}
 */
export const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/**
 * CSS class applied to the document body when in high-contrast mode.
 * @type {?}
 */
export const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
export class HighContrastModeDetector {
    /**
     * @param {?} _platform
     * @param {?} document
     */
    constructor(_platform, document) {
        this._platform = _platform;
        this._document = document;
    }
    /**
     * Gets the current high-contrast-mode for the page.
     * @return {?}
     */
    getHighContrastMode() {
        if (!this._platform.isBrowser) {
            return 0 /* NONE */;
        }
        // Create a test element with an arbitrary background-color that is neither black nor
        // white; high-contrast mode will coerce the color to either black or white. Also ensure that
        // appending the test element to the DOM does not affect layout by absolutely positioning it
        /** @type {?} */
        const testElement = this._document.createElement('div');
        testElement.style.backgroundColor = 'rgb(1,2,3)';
        testElement.style.position = 'absolute';
        this._document.body.appendChild(testElement);
        // Get the computed style for the background color, collapsing spaces to normalize between
        // browsers. Once we get this color, we no longer need the test element. Access the `window`
        // via the document so we can fake it in tests. Note that we have extra null checks, because
        // this logic will likely run during app bootstrap and throwing can break the entire app.
        /** @type {?} */
        const documentWindow = this._document.defaultView || window;
        /** @type {?} */
        const computedStyle = (documentWindow && documentWindow.getComputedStyle) ?
            documentWindow.getComputedStyle(testElement) : null;
        /** @type {?} */
        const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
        this._document.body.removeChild(testElement);
        switch (computedColor) {
            case 'rgb(0,0,0)': return 2 /* WHITE_ON_BLACK */;
            case 'rgb(255,255,255)': return 1 /* BLACK_ON_WHITE */;
        }
        return 0 /* NONE */;
    }
    /**
     * Applies CSS classes indicating high-contrast mode to document body (browser-only).
     * @return {?}
     */
    _applyBodyHighContrastModeCssClasses() {
        if (this._platform.isBrowser && this._document.body) {
            /** @type {?} */
            const bodyClasses = this._document.body.classList;
            // IE11 doesn't support `classList` operations with multiple arguments
            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            /** @type {?} */
            const mode = this.getHighContrastMode();
            if (mode === 1 /* BLACK_ON_WHITE */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
            }
            else if (mode === 2 /* WHITE_ON_BLACK */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
            }
        }
    }
}
HighContrastModeDetector.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
HighContrastModeDetector.ctorParameters = () => [
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ HighContrastModeDetector.ɵprov = i0.ɵɵdefineInjectable({ factory: function HighContrastModeDetector_Factory() { return new HighContrastModeDetector(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i2.DOCUMENT)); }, token: HighContrastModeDetector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    HighContrastModeDetector.prototype._document;
    /**
     * @type {?}
     * @private
     */
    HighContrastModeDetector.prototype._platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaC1jb250cmFzdC1tb2RlLWRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hMTF5L2hpZ2gtY29udHJhc3QtbW9kZS9oaWdoLWNvbnRyYXN0LW1vZGUtZGV0ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFJakQsTUFBa0IsZ0JBQWdCO0lBQ2hDLElBQUksR0FBQTtJQUNKLGNBQWMsR0FBQTtJQUNkLGNBQWMsR0FBQTtFQUNmOzs7Ozs7QUFHRCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsa0NBQWtDOzs7OztBQUcxRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsa0NBQWtDOzs7OztBQUcxRSxNQUFNLE9BQU8sbUNBQW1DLEdBQUcsMEJBQTBCOzs7Ozs7Ozs7Ozs7QUFjN0UsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFHbkMsWUFBb0IsU0FBbUIsRUFBb0IsUUFBYTtRQUFwRCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBR0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM3QixvQkFBNkI7U0FDOUI7Ozs7O2NBS0ssV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2RCxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7UUFDakQsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7O2NBTXZDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxNQUFNOztjQUNyRCxhQUFhLEdBQUcsQ0FBQyxjQUFjLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN2RSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7O2NBQ2pELGFBQWEsR0FDZixDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3QyxRQUFRLGFBQWEsRUFBRTtZQUNyQixLQUFLLFlBQVksQ0FBQyxDQUFDLDhCQUF1QztZQUMxRCxLQUFLLGtCQUFrQixDQUFDLENBQUMsOEJBQXVDO1NBQ2pFO1FBQ0Qsb0JBQTZCO0lBQy9CLENBQUM7Ozs7O0lBR0Qsb0NBQW9DO1FBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7O2tCQUM3QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUNqRCxzRUFBc0U7WUFDdEUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ3hELFdBQVcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUM3QyxXQUFXLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7O2tCQUV2QyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3ZDLElBQUksSUFBSSwyQkFBb0MsRUFBRTtnQkFDNUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2dCQUNyRCxXQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxJQUFJLDJCQUFvQyxFQUFFO2dCQUNuRCxXQUFXLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Z0JBQ3JELFdBQVcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMzQztTQUNGO0lBQ0gsQ0FBQzs7O1lBMURGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7WUFoQ3hCLFFBQVE7NENBb0M0QixNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFGekQsNkNBQTRCOzs7OztJQUVoQiw2Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqIFNldCBvZiBwb3NzaWJsZSBoaWdoLWNvbnRyYXN0IG1vZGUgYmFja2dyb3VuZHMuICovXG5leHBvcnQgY29uc3QgZW51bSBIaWdoQ29udHJhc3RNb2RlIHtcbiAgTk9ORSxcbiAgQkxBQ0tfT05fV0hJVEUsXG4gIFdISVRFX09OX0JMQUNLLFxufVxuXG4vKiogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkgd2hlbiBpbiBibGFjay1vbi13aGl0ZSBoaWdoLWNvbnRyYXN0IG1vZGUuICovXG5leHBvcnQgY29uc3QgQkxBQ0tfT05fV0hJVEVfQ1NTX0NMQVNTID0gJ2Nkay1oaWdoLWNvbnRyYXN0LWJsYWNrLW9uLXdoaXRlJztcblxuLyoqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCBib2R5IHdoZW4gaW4gd2hpdGUtb24tYmxhY2sgaGlnaC1jb250cmFzdCBtb2RlLiAqL1xuZXhwb3J0IGNvbnN0IFdISVRFX09OX0JMQUNLX0NTU19DTEFTUyA9ICdjZGstaGlnaC1jb250cmFzdC13aGl0ZS1vbi1ibGFjayc7XG5cbi8qKiBDU1MgY2xhc3MgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQgYm9keSB3aGVuIGluIGhpZ2gtY29udHJhc3QgbW9kZS4gKi9cbmV4cG9ydCBjb25zdCBISUdIX0NPTlRSQVNUX01PREVfQUNUSVZFX0NTU19DTEFTUyA9ICdjZGstaGlnaC1jb250cmFzdC1hY3RpdmUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgY3VycmVudGx5IGluIGEgaGlnaC1jb250cmFzdC1tb2RlIGVudmlyb25tZW50LlxuICpcbiAqIE1pY3Jvc29mdCBXaW5kb3dzIHN1cHBvcnRzIGFuIGFjY2Vzc2liaWxpdHkgZmVhdHVyZSBjYWxsZWQgXCJIaWdoIENvbnRyYXN0IE1vZGVcIi4gVGhpcyBtb2RlXG4gKiBjaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIGFsbCBhcHBsaWNhdGlvbnMsIGluY2x1ZGluZyB3ZWIgYXBwbGljYXRpb25zLCB0byBkcmFtYXRpY2FsbHkgaW5jcmVhc2VcbiAqIGNvbnRyYXN0LlxuICpcbiAqIElFLCBFZGdlLCBhbmQgRmlyZWZveCBjdXJyZW50bHkgc3VwcG9ydCB0aGlzIG1vZGUuIENocm9tZSBkb2VzIG5vdCBzdXBwb3J0IFdpbmRvd3MgSGlnaCBDb250cmFzdFxuICogTW9kZS4gVGhpcyBzZXJ2aWNlIGRvZXMgbm90IGRldGVjdCBoaWdoLWNvbnRyYXN0IG1vZGUgYXMgYWRkZWQgYnkgdGhlIENocm9tZSBcIkhpZ2ggQ29udHJhc3RcIlxuICogYnJvd3NlciBleHRlbnNpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEhpZ2hDb250cmFzdE1vZGVEZXRlY3RvciB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGN1cnJlbnQgaGlnaC1jb250cmFzdC1tb2RlIGZvciB0aGUgcGFnZS4gKi9cbiAgZ2V0SGlnaENvbnRyYXN0TW9kZSgpOiBIaWdoQ29udHJhc3RNb2RlIHtcbiAgICBpZiAoIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIEhpZ2hDb250cmFzdE1vZGUuTk9ORTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSB0ZXN0IGVsZW1lbnQgd2l0aCBhbiBhcmJpdHJhcnkgYmFja2dyb3VuZC1jb2xvciB0aGF0IGlzIG5laXRoZXIgYmxhY2sgbm9yXG4gICAgLy8gd2hpdGU7IGhpZ2gtY29udHJhc3QgbW9kZSB3aWxsIGNvZXJjZSB0aGUgY29sb3IgdG8gZWl0aGVyIGJsYWNrIG9yIHdoaXRlLiBBbHNvIGVuc3VyZSB0aGF0XG4gICAgLy8gYXBwZW5kaW5nIHRoZSB0ZXN0IGVsZW1lbnQgdG8gdGhlIERPTSBkb2VzIG5vdCBhZmZlY3QgbGF5b3V0IGJ5IGFic29sdXRlbHkgcG9zaXRpb25pbmcgaXRcbiAgICBjb25zdCB0ZXN0RWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMSwyLDMpJztcbiAgICB0ZXN0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXN0RWxlbWVudCk7XG5cbiAgICAvLyBHZXQgdGhlIGNvbXB1dGVkIHN0eWxlIGZvciB0aGUgYmFja2dyb3VuZCBjb2xvciwgY29sbGFwc2luZyBzcGFjZXMgdG8gbm9ybWFsaXplIGJldHdlZW5cbiAgICAvLyBicm93c2Vycy4gT25jZSB3ZSBnZXQgdGhpcyBjb2xvciwgd2Ugbm8gbG9uZ2VyIG5lZWQgdGhlIHRlc3QgZWxlbWVudC4gQWNjZXNzIHRoZSBgd2luZG93YFxuICAgIC8vIHZpYSB0aGUgZG9jdW1lbnQgc28gd2UgY2FuIGZha2UgaXQgaW4gdGVzdHMuIE5vdGUgdGhhdCB3ZSBoYXZlIGV4dHJhIG51bGwgY2hlY2tzLCBiZWNhdXNlXG4gICAgLy8gdGhpcyBsb2dpYyB3aWxsIGxpa2VseSBydW4gZHVyaW5nIGFwcCBib290c3RyYXAgYW5kIHRocm93aW5nIGNhbiBicmVhayB0aGUgZW50aXJlIGFwcC5cbiAgICBjb25zdCBkb2N1bWVudFdpbmRvdyA9IHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gKGRvY3VtZW50V2luZG93ICYmIGRvY3VtZW50V2luZG93LmdldENvbXB1dGVkU3R5bGUpID9cbiAgICAgICAgZG9jdW1lbnRXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0ZXN0RWxlbWVudCkgOiBudWxsO1xuICAgIGNvbnN0IGNvbXB1dGVkQ29sb3IgPVxuICAgICAgICAoY29tcHV0ZWRTdHlsZSAmJiBjb21wdXRlZFN0eWxlLmJhY2tncm91bmRDb2xvciB8fCAnJykucmVwbGFjZSgvIC9nLCAnJyk7XG4gICAgdGhpcy5fZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXN0RWxlbWVudCk7XG5cbiAgICBzd2l0Y2ggKGNvbXB1dGVkQ29sb3IpIHtcbiAgICAgIGNhc2UgJ3JnYigwLDAsMCknOiByZXR1cm4gSGlnaENvbnRyYXN0TW9kZS5XSElURV9PTl9CTEFDSztcbiAgICAgIGNhc2UgJ3JnYigyNTUsMjU1LDI1NSknOiByZXR1cm4gSGlnaENvbnRyYXN0TW9kZS5CTEFDS19PTl9XSElURTtcbiAgICB9XG4gICAgcmV0dXJuIEhpZ2hDb250cmFzdE1vZGUuTk9ORTtcbiAgfVxuXG4gIC8qKiBBcHBsaWVzIENTUyBjbGFzc2VzIGluZGljYXRpbmcgaGlnaC1jb250cmFzdCBtb2RlIHRvIGRvY3VtZW50IGJvZHkgKGJyb3dzZXItb25seSkuICovXG4gIF9hcHBseUJvZHlIaWdoQ29udHJhc3RNb2RlQ3NzQ2xhc3NlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX2RvY3VtZW50LmJvZHkpIHtcbiAgICAgIGNvbnN0IGJvZHlDbGFzc2VzID0gdGhpcy5fZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG4gICAgICAvLyBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBgY2xhc3NMaXN0YCBvcGVyYXRpb25zIHdpdGggbXVsdGlwbGUgYXJndW1lbnRzXG4gICAgICBib2R5Q2xhc3Nlcy5yZW1vdmUoSElHSF9DT05UUkFTVF9NT0RFX0FDVElWRV9DU1NfQ0xBU1MpO1xuICAgICAgYm9keUNsYXNzZXMucmVtb3ZlKEJMQUNLX09OX1dISVRFX0NTU19DTEFTUyk7XG4gICAgICBib2R5Q2xhc3Nlcy5yZW1vdmUoV0hJVEVfT05fQkxBQ0tfQ1NTX0NMQVNTKTtcblxuICAgICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0SGlnaENvbnRyYXN0TW9kZSgpO1xuICAgICAgaWYgKG1vZGUgPT09IEhpZ2hDb250cmFzdE1vZGUuQkxBQ0tfT05fV0hJVEUpIHtcbiAgICAgICAgYm9keUNsYXNzZXMuYWRkKEhJR0hfQ09OVFJBU1RfTU9ERV9BQ1RJVkVfQ1NTX0NMQVNTKTtcbiAgICAgICAgYm9keUNsYXNzZXMuYWRkKEJMQUNLX09OX1dISVRFX0NTU19DTEFTUyk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IEhpZ2hDb250cmFzdE1vZGUuV0hJVEVfT05fQkxBQ0spIHtcbiAgICAgICAgYm9keUNsYXNzZXMuYWRkKEhJR0hfQ09OVFJBU1RfTU9ERV9BQ1RJVkVfQ1NTX0NMQVNTKTtcbiAgICAgICAgYm9keUNsYXNzZXMuYWRkKFdISVRFX09OX0JMQUNLX0NTU19DTEFTUyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=