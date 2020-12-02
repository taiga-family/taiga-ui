/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/shadow-dom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
let shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
export function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/**
 * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
 * @param {?} element
 * @return {?}
 */
export function _getShadowRoot(element) {
    if (_supportsShadowDom()) {
        /** @type {?} */
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.
        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LWRvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvcGxhdGZvcm0vZmVhdHVyZXMvc2hhZG93LWRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBUUksb0JBQTZCOzs7OztBQUdqQyxNQUFNLFVBQVUsa0JBQWtCO0lBQ2hDLElBQUksb0JBQW9CLElBQUksSUFBSSxFQUFFOztjQUMxQixJQUFJLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ25FLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUMxRjtJQUVELE9BQU8sb0JBQW9CLENBQUM7QUFDOUIsQ0FBQzs7Ozs7O0FBR0QsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFvQjtJQUNqRCxJQUFJLGtCQUFrQixFQUFFLEVBQUU7O2NBQ2xCLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFbkUsb0VBQW9FO1FBQ3BFLHNFQUFzRTtRQUN0RSxJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsSUFBSSxVQUFVLElBQUksUUFBUSxZQUFZLFVBQVUsRUFBRTtZQUNyRixPQUFPLFFBQVEsQ0FBQztTQUNqQjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmxldCBzaGFkb3dEb21Jc1N1cHBvcnRlZDogYm9vbGVhbjtcblxuLyoqIENoZWNrcyB3aGV0aGVyIHRoZSB1c2VyJ3MgYnJvd3NlciBzdXBwb3J0IFNoYWRvdyBET00uICovXG5leHBvcnQgZnVuY3Rpb24gX3N1cHBvcnRzU2hhZG93RG9tKCk6IGJvb2xlYW4ge1xuICBpZiAoc2hhZG93RG9tSXNTdXBwb3J0ZWQgPT0gbnVsbCkge1xuICAgIGNvbnN0IGhlYWQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuaGVhZCA6IG51bGw7XG4gICAgc2hhZG93RG9tSXNTdXBwb3J0ZWQgPSAhIShoZWFkICYmICgoaGVhZCBhcyBhbnkpLmNyZWF0ZVNoYWRvd1Jvb3QgfHwgaGVhZC5hdHRhY2hTaGFkb3cpKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkb3dEb21Jc1N1cHBvcnRlZDtcbn1cblxuLyoqIEdldHMgdGhlIHNoYWRvdyByb290IG9mIGFuIGVsZW1lbnQsIGlmIHN1cHBvcnRlZCBhbmQgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSBTaGFkb3cgRE9NLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTaGFkb3dSb290KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogTm9kZSB8IG51bGwge1xuICBpZiAoX3N1cHBvcnRzU2hhZG93RG9tKCkpIHtcbiAgICBjb25zdCByb290Tm9kZSA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUgPyBlbGVtZW50LmdldFJvb3ROb2RlKCkgOiBudWxsO1xuXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgc2hvdWxkIGJlIGNhdWdodCBieSBgX3N1cHBvcnRzU2hhZG93RG9tYCwgYnV0IHNvbWVcbiAgICAvLyB0ZWFtcyBoYXZlIGJlZW4gYWJsZSB0byBoaXQgdGhpcyBjb2RlIHBhdGggb24gdW5zdXBwb3J0ZWQgYnJvd3NlcnMuXG4gICAgaWYgKHR5cGVvZiBTaGFkb3dSb290ICE9PSAndW5kZWZpbmVkJyAmJiBTaGFkb3dSb290ICYmIHJvb3ROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIl19