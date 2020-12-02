/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/polyfill.ts
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
 * IE 11 compatible closest implementation that is able to start from non-Element Nodes.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
export function closest(element, selector) {
    if (!(element instanceof Node)) {
        return null;
    }
    /** @type {?} */
    let curr = element;
    while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
    }
    return curr && (/** @type {?} */ ((hasNativeClosest ?
        curr.closest(selector) : polyfillClosest(curr, selector))));
}
/**
 * Polyfill for browsers without Element.closest.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function polyfillClosest(element, selector) {
    /** @type {?} */
    let curr = element;
    while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
    }
    return (/** @type {?} */ ((curr || null)));
}
/** @type {?} */
const hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
/**
 * IE 11 compatible matches implementation.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function matches(element, selector) {
    return element.matches ?
        element.matches(selector) :
        ((/** @type {?} */ (element)))['msMatchesSelector'](selector);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvZm9jdXMtdHJhcC9wb2x5ZmlsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxNQUFNLFVBQVUsT0FBTyxDQUFDLE9BQTJDLEVBQUUsUUFBZ0I7SUFFbkYsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUM7S0FBRTs7UUFFNUMsSUFBSSxHQUFjLE9BQU87SUFDN0IsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLFlBQVksT0FBTyxDQUFDLEVBQUU7UUFDakQsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7SUFFRCxPQUFPLElBQUksSUFBSSxtQkFBQSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFnQixDQUFDO0FBQ2hGLENBQUM7Ozs7Ozs7QUFHRCxTQUFTLGVBQWUsQ0FBQyxPQUFnQixFQUFFLFFBQWdCOztRQUNyRCxJQUFJLEdBQWMsT0FBTztJQUM3QixPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQzVFLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxtQkFBQSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBZ0IsQ0FBQztBQUN4QyxDQUFDOztNQUVLLGdCQUFnQixHQUFHLE9BQU8sT0FBTyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7Ozs7O0FBR3JGLFNBQVMsT0FBTyxDQUFDLE9BQWdCLEVBQUUsUUFBZ0I7SUFDakQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIElFIDExIGNvbXBhdGlibGUgY2xvc2VzdCBpbXBsZW1lbnRhdGlvbiB0aGF0IGlzIGFibGUgdG8gc3RhcnQgZnJvbSBub24tRWxlbWVudCBOb2Rlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQ6IEV2ZW50VGFyZ2V0fEVsZW1lbnR8bnVsbHx1bmRlZmluZWQsIHNlbGVjdG9yOiBzdHJpbmcpOlxuICAgIEVsZW1lbnR8bnVsbCB7XG4gIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIGxldCBjdXJyOiBOb2RlfG51bGwgPSBlbGVtZW50O1xuICB3aGlsZSAoY3VyciAhPSBudWxsICYmICEoY3VyciBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgY3VyciA9IGN1cnIucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBjdXJyICYmIChoYXNOYXRpdmVDbG9zZXN0ID9cbiAgICAgIGN1cnIuY2xvc2VzdChzZWxlY3RvcikgOiBwb2x5ZmlsbENsb3Nlc3QoY3Vyciwgc2VsZWN0b3IpKSBhcyBFbGVtZW50fG51bGw7XG59XG5cbi8qKiBQb2x5ZmlsbCBmb3IgYnJvd3NlcnMgd2l0aG91dCBFbGVtZW50LmNsb3Nlc3QuICovXG5mdW5jdGlvbiBwb2x5ZmlsbENsb3Nlc3QoZWxlbWVudDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnR8bnVsbCB7XG4gIGxldCBjdXJyOiBOb2RlfG51bGwgPSBlbGVtZW50O1xuICB3aGlsZSAoY3VyciAhPSBudWxsICYmICEoY3VyciBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbWF0Y2hlcyhjdXJyLCBzZWxlY3RvcikpKSB7XG4gICAgY3VyciA9IGN1cnIucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiAoY3VyciB8fCBudWxsKSBhcyBFbGVtZW50fG51bGw7XG59XG5cbmNvbnN0IGhhc05hdGl2ZUNsb3Nlc3QgPSB0eXBlb2YgRWxlbWVudCAhPSAndW5kZWZpbmVkJyAmJiAhIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3Q7XG5cbi8qKiBJRSAxMSBjb21wYXRpYmxlIG1hdGNoZXMgaW1wbGVtZW50YXRpb24uICovXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQ6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyA/XG4gICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpIDpcbiAgICAgIChlbGVtZW50IGFzIGFueSlbJ21zTWF0Y2hlc1NlbGVjdG9yJ10oc2VsZWN0b3IpO1xufVxuIl19