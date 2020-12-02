/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/styling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns element classes in form of a stable (sorted) string.
 *
 * @param {?} element HTML Element.
 * @return {?} Returns element classes in form of a stable (sorted) string.
 */
export function getSortedClassName(element) {
    /** @type {?} */
    const names = Object.keys(getElementClasses(element));
    names.sort();
    return names.join(' ');
}
/**
 * Returns element classes in form of a map.
 *
 * @param {?} element HTML Element.
 * @return {?} Map of class values.
 */
export function getElementClasses(element) {
    /** @type {?} */
    const classes = {};
    if (element.nodeType === Node.ELEMENT_NODE) {
        /** @type {?} */
        const classList = element.classList;
        for (let i = 0; i < classList.length; i++) {
            /** @type {?} */
            const key = classList[i];
            classes[key] = true;
        }
    }
    return classes;
}
/**
 * Returns element styles in form of a stable (sorted) string.
 *
 * @param {?} element HTML Element.
 * @return {?} Returns element styles in form of a stable (sorted) string.
 */
export function getSortedStyle(element) {
    /** @type {?} */
    const styles = getElementStyles(element);
    /** @type {?} */
    const names = Object.keys(styles);
    names.sort();
    /** @type {?} */
    let sorted = '';
    names.forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const value = styles[key];
        if (value != null && value !== '') {
            if (sorted !== '')
                sorted += ' ';
            sorted += key + ': ' + value + ';';
        }
    }));
    return sorted;
}
/**
 * Returns element styles in form of a map.
 *
 * @param {?} element HTML Element.
 * @return {?} Map of style values.
 */
export function getElementStyles(element) {
    /** @type {?} */
    const styles = {};
    if (element.nodeType === Node.ELEMENT_NODE) {
        /** @type {?} */
        const style = ((/** @type {?} */ (element))).style;
        // reading `style.color` is a work around for a bug in Domino. The issue is that Domino has
        // stale value for `style.length`. It seems that reading a property from the element causes the
        // stale value to be updated. (As of Domino v 2.1.3)
        style.color;
        for (let i = 0; i < style.length; i++) {
            /** @type {?} */
            const key = style.item(i);
            /** @type {?} */
            const value = style.getPropertyValue(key);
            if (value !== '') {
                // Workaround for IE not clearing properties, instead it just sets them to blank value.
                styles[key] = value;
            }
        }
    }
    return styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvc3R5bGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBZ0I7O1VBQzNDLEtBQUssR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDOzs7Ozs7O0FBUUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQWdCOztVQUMxQyxPQUFPLEdBQTBCLEVBQUU7SUFDekMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7O2NBQ3BDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ25DLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsY0FBYyxDQUFDLE9BQWdCOztVQUN2QyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOztVQUNsQyxLQUFLLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztRQUNULE1BQU0sR0FBRyxFQUFFO0lBQ2YsS0FBSyxDQUFDLE9BQU87Ozs7SUFBQyxHQUFHLENBQUMsRUFBRTs7Y0FDWixLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFJLE1BQU0sS0FBSyxFQUFFO2dCQUFFLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNwQztJQUNILENBQUMsRUFBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQVFELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxPQUFnQjs7VUFDekMsTUFBTSxHQUE0QixFQUFFO0lBQzFDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFOztjQUNwQyxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxPQUFPLEVBQWUsQ0FBQyxDQUFDLEtBQUs7UUFDNUMsMkZBQTJGO1FBQzNGLCtGQUErRjtRQUMvRixvREFBb0Q7UUFDcEQsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDL0IsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztrQkFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDekMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUNoQix1RkFBdUY7Z0JBQ3ZGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGVsZW1lbnQgY2xhc3NlcyBpbiBmb3JtIG9mIGEgc3RhYmxlIChzb3J0ZWQpIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBIVE1MIEVsZW1lbnQuXG4gKiBAcmV0dXJucyBSZXR1cm5zIGVsZW1lbnQgY2xhc3NlcyBpbiBmb3JtIG9mIGEgc3RhYmxlIChzb3J0ZWQpIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNvcnRlZENsYXNzTmFtZShlbGVtZW50OiBFbGVtZW50KTogc3RyaW5nIHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoZ2V0RWxlbWVudENsYXNzZXMoZWxlbWVudCkpO1xuICBuYW1lcy5zb3J0KCk7XG4gIHJldHVybiBuYW1lcy5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBlbGVtZW50IGNsYXNzZXMgaW4gZm9ybSBvZiBhIG1hcC5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBIVE1MIEVsZW1lbnQuXG4gKiBAcmV0dXJucyBNYXAgb2YgY2xhc3MgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudENsYXNzZXMoZWxlbWVudDogRWxlbWVudCk6IHtba2V5OiBzdHJpbmddOiB0cnVlfSB7XG4gIGNvbnN0IGNsYXNzZXM6IHtba2V5OiBzdHJpbmddOiB0cnVlfSA9IHt9O1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gY2xhc3NMaXN0W2ldO1xuICAgICAgY2xhc3Nlc1trZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzZXM7XG59XG5cbi8qKlxuICogUmV0dXJucyBlbGVtZW50IHN0eWxlcyBpbiBmb3JtIG9mIGEgc3RhYmxlIChzb3J0ZWQpIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBIVE1MIEVsZW1lbnQuXG4gKiBAcmV0dXJucyBSZXR1cm5zIGVsZW1lbnQgc3R5bGVzIGluIGZvcm0gb2YgYSBzdGFibGUgKHNvcnRlZCkgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkU3R5bGUoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldEVsZW1lbnRTdHlsZXMoZWxlbWVudCk7XG4gIGNvbnN0IG5hbWVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gIG5hbWVzLnNvcnQoKTtcbiAgbGV0IHNvcnRlZCA9ICcnO1xuICBuYW1lcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgIGlmIChzb3J0ZWQgIT09ICcnKSBzb3J0ZWQgKz0gJyAnO1xuICAgICAgc29ydGVkICs9IGtleSArICc6ICcgKyB2YWx1ZSArICc7JztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc29ydGVkO1xufVxuXG4vKipcbiAqIFJldHVybnMgZWxlbWVudCBzdHlsZXMgaW4gZm9ybSBvZiBhIG1hcC5cbiAqXG4gKiBAcGFyYW0gZWxlbWVudCBIVE1MIEVsZW1lbnQuXG4gKiBAcmV0dXJucyBNYXAgb2Ygc3R5bGUgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudFN0eWxlcyhlbGVtZW50OiBFbGVtZW50KToge1trZXk6IHN0cmluZ106IHN0cmluZ30ge1xuICBjb25zdCBzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIGNvbnN0IHN0eWxlID0gKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlO1xuICAgIC8vIHJlYWRpbmcgYHN0eWxlLmNvbG9yYCBpcyBhIHdvcmsgYXJvdW5kIGZvciBhIGJ1ZyBpbiBEb21pbm8uIFRoZSBpc3N1ZSBpcyB0aGF0IERvbWlubyBoYXNcbiAgICAvLyBzdGFsZSB2YWx1ZSBmb3IgYHN0eWxlLmxlbmd0aGAuIEl0IHNlZW1zIHRoYXQgcmVhZGluZyBhIHByb3BlcnR5IGZyb20gdGhlIGVsZW1lbnQgY2F1c2VzIHRoZVxuICAgIC8vIHN0YWxlIHZhbHVlIHRvIGJlIHVwZGF0ZWQuIChBcyBvZiBEb21pbm8gdiAyLjEuMylcbiAgICBzdHlsZS5jb2xvcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBzdHlsZS5pdGVtKGkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGtleSk7XG4gICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIC8vIFdvcmthcm91bmQgZm9yIElFIG5vdCBjbGVhcmluZyBwcm9wZXJ0aWVzLCBpbnN0ZWFkIGl0IGp1c3Qgc2V0cyB0aGVtIHRvIGJsYW5rIHZhbHVlLlxuICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzO1xufSJdfQ==