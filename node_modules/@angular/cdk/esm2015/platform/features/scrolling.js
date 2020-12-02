/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/scrolling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
export { RtlScrollAxisType };
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
export function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
export function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9wbGF0Zm9ybS9mZWF0dXJlcy9zY3JvbGxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE1BQWtCLGlCQUFpQjtJQUNqQzs7O09BR0c7SUFDSCxNQUFNLEdBQUE7SUFDTjs7O09BR0c7SUFDSCxPQUFPLEdBQUE7SUFDUDs7O09BR0c7SUFDSCxRQUFRLEdBQUE7RUFDVDs7Ozs7O0lBR0csaUJBQThDOzs7OztBQUdsRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3BDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxRQUFRLElBQUksUUFBUSxJQUFJLGdCQUFnQixJQUFJLG1CQUFBLFFBQVEsQ0FBQyxlQUFlLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRyxDQUFDOzs7Ozs7QUFNRCxNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLGlGQUFpRjtJQUNqRixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QyxzQkFBZ0M7S0FDakM7SUFFRCxJQUFJLGlCQUFpQixJQUFJLElBQUksRUFBRTs7O2NBRXZCLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Y0FDL0MsY0FBYyxHQUFHLGVBQWUsQ0FBQyxLQUFLO1FBQzVDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDOztjQUUvQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O2NBQ3ZDLFlBQVksR0FBRyxPQUFPLENBQUMsS0FBSztRQUNsQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMzQixZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU1QixlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTNDLGlCQUFpQixpQkFBMkIsQ0FBQztRQUU3QywyRkFBMkY7UUFDM0YsOEZBQThGO1FBQzlGLHVEQUF1RDtRQUN2RCxJQUFJLGVBQWUsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLDJGQUEyRjtZQUMzRiw2RkFBNkY7WUFDN0YseUZBQXlGO1lBQ3pGLGtDQUFrQztZQUNsQyxlQUFlLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUMvQixpQkFBaUI7Z0JBQ2IsZUFBZSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBMkIsQ0FBQyxpQkFBMkIsQ0FBQztTQUMvRjtRQUVELG1CQUFBLGVBQWUsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDMUQ7SUFDRCxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIFRoZSBwb3NzaWJsZSB3YXlzIHRoZSBicm93c2VyIG1heSBoYW5kbGUgdGhlIGhvcml6b250YWwgc2Nyb2xsIGF4aXMgaW4gUlRMIGxhbmd1YWdlcy4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFJ0bFNjcm9sbEF4aXNUeXBlIHtcbiAgLyoqXG4gICAqIHNjcm9sbExlZnQgaXMgMCB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IGxlZnQgYW5kIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSB3aGVuIHNjcm9sbGVkXG4gICAqIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgKi9cbiAgTk9STUFMLFxuICAvKipcbiAgICogc2Nyb2xsTGVmdCBpcyAtKHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpIHdoZW4gc2Nyb2xsZWQgYWxsIHRoZSB3YXkgbGVmdCBhbmQgMCB3aGVuIHNjcm9sbGVkXG4gICAqIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgKi9cbiAgTkVHQVRFRCxcbiAgLyoqXG4gICAqIHNjcm9sbExlZnQgaXMgKHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpIHdoZW4gc2Nyb2xsZWQgYWxsIHRoZSB3YXkgbGVmdCBhbmQgMCB3aGVuIHNjcm9sbGVkXG4gICAqIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgKi9cbiAgSU5WRVJURURcbn1cblxuLyoqIENhY2hlZCByZXN1bHQgb2YgdGhlIHdheSB0aGUgYnJvd3NlciBoYW5kbGVzIHRoZSBob3Jpem9udGFsIHNjcm9sbCBheGlzIGluIFJUTCBtb2RlLiAqL1xubGV0IHJ0bFNjcm9sbEF4aXNUeXBlOiBSdGxTY3JvbGxBeGlzVHlwZXx1bmRlZmluZWQ7XG5cbi8qKiBDaGVjayB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHNjcm9sbCBiZWhhdmlvcnMuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNTY3JvbGxCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhKHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiAnc2Nyb2xsQmVoYXZpb3InIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuc3R5bGUpO1xufVxuXG4vKipcbiAqIENoZWNrcyB0aGUgdHlwZSBvZiBSVEwgc2Nyb2xsIGF4aXMgdXNlZCBieSB0aGlzIGJyb3dzZXIuIEFzIG9mIHRpbWUgb2Ygd3JpdGluZywgQ2hyb21lIGlzIE5PUk1BTCxcbiAqIEZpcmVmb3ggJiBTYWZhcmkgYXJlIE5FR0FURUQsIGFuZCBJRSAmIEVkZ2UgYXJlIElOVkVSVEVELlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnRsU2Nyb2xsQXhpc1R5cGUoKTogUnRsU2Nyb2xsQXhpc1R5cGUge1xuICAvLyBXZSBjYW4ndCBjaGVjayB1bmxlc3Mgd2UncmUgb24gdGhlIGJyb3dzZXIuIEp1c3QgYXNzdW1lICdub3JtYWwnIGlmIHdlJ3JlIG5vdC5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ29iamVjdCcgfHwgIWRvY3VtZW50KSB7XG4gICAgcmV0dXJuIFJ0bFNjcm9sbEF4aXNUeXBlLk5PUk1BTDtcbiAgfVxuXG4gIGlmIChydGxTY3JvbGxBeGlzVHlwZSA9PSBudWxsKSB7XG4gICAgLy8gQ3JlYXRlIGEgMXB4IHdpZGUgc2Nyb2xsaW5nIGNvbnRhaW5lciBhbmQgYSAycHggd2lkZSBjb250ZW50IGVsZW1lbnQuXG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSBzY3JvbGxDb250YWluZXIuc3R5bGU7XG4gICAgc2Nyb2xsQ29udGFpbmVyLmRpciA9ICdydGwnO1xuICAgIGNvbnRhaW5lclN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgIGNvbnRhaW5lclN0eWxlLndpZHRoID0gJzFweCc7XG4gICAgY29udGFpbmVyU3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgY29udGFpbmVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnRhaW5lclN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgY29udGFpbmVyU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRlbnRTdHlsZSA9IGNvbnRlbnQuc3R5bGU7XG4gICAgY29udGVudFN0eWxlLndpZHRoID0gJzJweCc7XG4gICAgY29udGVudFN0eWxlLmhlaWdodCA9ICcxcHgnO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsQ29udGFpbmVyKTtcblxuICAgIHJ0bFNjcm9sbEF4aXNUeXBlID0gUnRsU2Nyb2xsQXhpc1R5cGUuTk9STUFMO1xuXG4gICAgLy8gVGhlIHZpZXdwb3J0IHN0YXJ0cyBzY3JvbGxlZCBhbGwgdGhlIHdheSB0byB0aGUgcmlnaHQgaW4gUlRMIG1vZGUuIElmIHdlIGFyZSBpbiBhIE5PUk1BTFxuICAgIC8vIGJyb3dzZXIgdGhpcyB3b3VsZCBtZWFuIHRoYXQgdGhlIHNjcm9sbExlZnQgc2hvdWxkIGJlIDEuIElmIGl0J3MgemVybyBpbnN0ZWFkIHdlIGtub3cgd2UncmVcbiAgICAvLyBkZWFsaW5nIHdpdGggb25lIG9mIHRoZSBvdGhlciB0d28gdHlwZXMgb2YgYnJvd3NlcnMuXG4gICAgaWYgKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICAvLyBJbiBhIE5FR0FURUQgYnJvd3NlciB0aGUgc2Nyb2xsTGVmdCBpcyBhbHdheXMgc29tZXdoZXJlIGluIFstbWF4U2Nyb2xsQW1vdW50LCAwXS4gRm9yIGFuXG4gICAgICAvLyBJTlZFUlRFRCBicm93c2VyIGl0IGlzIGFsd2F5cyBzb21ld2hlcmUgaW4gWzAsIG1heFNjcm9sbEFtb3VudF0uIFdlIGNhbiBkZXRlcm1pbmUgd2hpY2ggYnlcbiAgICAgIC8vIHNldHRpbmcgdG8gdGhlIHNjcm9sbExlZnQgdG8gMS4gVGhpcyBpcyBwYXN0IHRoZSBtYXggZm9yIGEgTkVHQVRFRCBicm93c2VyLCBzbyBpdCB3aWxsXG4gICAgICAvLyByZXR1cm4gMCB3aGVuIHdlIHJlYWQgaXQgYWdhaW4uXG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9IDE7XG4gICAgICBydGxTY3JvbGxBeGlzVHlwZSA9XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPT09IDAgPyBSdGxTY3JvbGxBeGlzVHlwZS5ORUdBVEVEIDogUnRsU2Nyb2xsQXhpc1R5cGUuSU5WRVJURUQ7XG4gICAgfVxuXG4gICAgc2Nyb2xsQ29udGFpbmVyLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHNjcm9sbENvbnRhaW5lcik7XG4gIH1cbiAgcmV0dXJuIHJ0bFNjcm9sbEF4aXNUeXBlO1xufVxuIl19