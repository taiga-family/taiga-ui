/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/passive-listeners.ts
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
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
export function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                () => supportsPassiveEvents = true)
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
export function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc2l2ZS1saXN0ZW5lcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3BsYXRmb3JtL2ZlYXR1cmVzL3Bhc3NpdmUtbGlzdGVuZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTSSxxQkFBOEI7Ozs7OztBQU1sQyxNQUFNLFVBQVUsNkJBQTZCO0lBQzNDLElBQUkscUJBQXFCLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNsRSxJQUFJO1lBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxtQkFBQSxJQUFJLEVBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7Z0JBQzFFLEdBQUc7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7YUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTDtnQkFBUztZQUNSLHFCQUFxQixHQUFHLHFCQUFxQixJQUFJLEtBQUssQ0FBQztTQUN4RDtLQUNGO0lBRUQsT0FBTyxxQkFBcUIsQ0FBQztBQUMvQixDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxPQUFnQztJQUU5RSxPQUFPLDZCQUE2QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDdkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiogQ2FjaGVkIHJlc3VsdCBvZiB3aGV0aGVyIHRoZSB1c2VyJ3MgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycy4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVFdmVudHM6IGJvb2xlYW47XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVzZXIncyBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLlxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTogYm9vbGVhbiB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVFdmVudHMgPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwhLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6ICgpID0+IHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA9IHRydWVcbiAgICAgIH0pKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc3VwcG9ydHNQYXNzaXZlRXZlbnRzID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRzIHx8IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVFdmVudHM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplcyBhbiBgQWRkRXZlbnRMaXN0ZW5lcmAgb2JqZWN0IHRvIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAqIHRvIGBhZGRFdmVudExpc3RlbmVyYCBvbiBhbnkgYnJvd3Nlciwgbm8gbWF0dGVyIHdoZXRoZXIgaXQgc3VwcG9ydHMgdGhlXG4gKiBgb3B0aW9uc2AgcGFyYW1ldGVyLlxuICogQHBhcmFtIG9wdGlvbnMgT2JqZWN0IHRvIGJlIG5vcm1hbGl6ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zKG9wdGlvbnM6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTpcbiAgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuIHtcbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCkgPyBvcHRpb25zIDogISFvcHRpb25zLmNhcHR1cmU7XG59XG4iXX0=