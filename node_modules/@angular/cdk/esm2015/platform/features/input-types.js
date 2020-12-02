/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/input-types.ts
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
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
export function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3BsYXRmb3JtL2ZlYXR1cmVzL2lucHV0LXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTSSxtQkFBZ0M7Ozs7O01BRzlCLG1CQUFtQixHQUFHO0lBQzFCLDRGQUE0RjtJQUM1Rix1Q0FBdUM7SUFDdkMsa0VBQWtFO0lBQ2xFLDhFQUE4RTtJQUM5RSxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0NBQ1A7Ozs7QUFHRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3BDLG9CQUFvQjtJQUNwQixJQUFJLG1CQUFtQixFQUFFO1FBQ3ZCLE9BQU8sbUJBQW1CLENBQUM7S0FDNUI7SUFFRCwyRkFBMkY7SUFDM0YsMkZBQTJGO0lBQzNGLDhDQUE4QztJQUM5QyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sbUJBQW1CLENBQUM7S0FDNUI7O1FBRUcsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDdEQsbUJBQW1CLEdBQUcsSUFBSSxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTTs7OztJQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9ELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO0lBQ3pDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixPQUFPLG1CQUFtQixDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIENhY2hlZCByZXN1bHQgU2V0IG9mIGlucHV0IHR5cGVzIHN1cHBvcnQgYnkgdGhlIGN1cnJlbnQgYnJvd3Nlci4gKi9cbmxldCBzdXBwb3J0ZWRJbnB1dFR5cGVzOiBTZXQ8c3RyaW5nPjtcblxuLyoqIFR5cGVzIG9mIGA8aW5wdXQ+YCB0aGF0ICptaWdodCogYmUgc3VwcG9ydGVkLiAqL1xuY29uc3QgY2FuZGlkYXRlSW5wdXRUeXBlcyA9IFtcbiAgLy8gYGNvbG9yYCBtdXN0IGNvbWUgZmlyc3QuIENocm9tZSA1NiBzaG93cyBhIHdhcm5pbmcgaWYgd2UgY2hhbmdlIHRoZSB0eXBlIHRvIGBjb2xvcmAgYWZ0ZXJcbiAgLy8gZmlyc3QgY2hhbmdpbmcgaXQgdG8gc29tZXRoaW5nIGVsc2U6XG4gIC8vIFRoZSBzcGVjaWZpZWQgdmFsdWUgXCJcIiBkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSByZXF1aXJlZCBmb3JtYXQuXG4gIC8vIFRoZSBmb3JtYXQgaXMgXCIjcnJnZ2JiXCIgd2hlcmUgcnIsIGdnLCBiYiBhcmUgdHdvLWRpZ2l0IGhleGFkZWNpbWFsIG51bWJlcnMuXG4gICdjb2xvcicsXG4gICdidXR0b24nLFxuICAnY2hlY2tib3gnLFxuICAnZGF0ZScsXG4gICdkYXRldGltZS1sb2NhbCcsXG4gICdlbWFpbCcsXG4gICdmaWxlJyxcbiAgJ2hpZGRlbicsXG4gICdpbWFnZScsXG4gICdtb250aCcsXG4gICdudW1iZXInLFxuICAncGFzc3dvcmQnLFxuICAncmFkaW8nLFxuICAncmFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VhcmNoJyxcbiAgJ3N1Ym1pdCcsXG4gICd0ZWwnLFxuICAndGV4dCcsXG4gICd0aW1lJyxcbiAgJ3VybCcsXG4gICd3ZWVrJyxcbl07XG5cbi8qKiBAcmV0dXJucyBUaGUgaW5wdXQgdHlwZXMgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzKCk6IFNldDxzdHJpbmc+IHtcbiAgLy8gUmVzdWx0IGlzIGNhY2hlZC5cbiAgaWYgKHN1cHBvcnRlZElucHV0VHlwZXMpIHtcbiAgICByZXR1cm4gc3VwcG9ydGVkSW5wdXRUeXBlcztcbiAgfVxuXG4gIC8vIFdlIGNhbid0IGNoZWNrIGlmIGFuIGlucHV0IHR5cGUgaXMgbm90IHN1cHBvcnRlZCB1bnRpbCB3ZSdyZSBvbiB0aGUgYnJvd3Nlciwgc28gc2F5IHRoYXRcbiAgLy8gZXZlcnl0aGluZyBpcyBzdXBwb3J0ZWQgd2hlbiBub3Qgb24gdGhlIGJyb3dzZXIuIFdlIGRvbid0IHVzZSBgUGxhdGZvcm1gIGhlcmUgc2luY2UgaXQnc1xuICAvLyBqdXN0IGEgaGVscGVyIGZ1bmN0aW9uIGFuZCBjYW4ndCBpbmplY3QgaXQuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICdvYmplY3QnIHx8ICFkb2N1bWVudCkge1xuICAgIHN1cHBvcnRlZElucHV0VHlwZXMgPSBuZXcgU2V0KGNhbmRpZGF0ZUlucHV0VHlwZXMpO1xuICAgIHJldHVybiBzdXBwb3J0ZWRJbnB1dFR5cGVzO1xuICB9XG5cbiAgbGV0IGZlYXR1cmVUZXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gbmV3IFNldChjYW5kaWRhdGVJbnB1dFR5cGVzLmZpbHRlcih2YWx1ZSA9PiB7XG4gICAgZmVhdHVyZVRlc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWx1ZSk7XG4gICAgcmV0dXJuIGZlYXR1cmVUZXN0SW5wdXQudHlwZSA9PT0gdmFsdWU7XG4gIH0pKTtcblxuICByZXR1cm4gc3VwcG9ydGVkSW5wdXRUeXBlcztcbn1cbiJdfQ==