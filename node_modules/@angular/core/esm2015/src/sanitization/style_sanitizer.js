/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/sanitization/style_sanitizer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isDevMode } from '../util/is_dev_mode';
import { _sanitizeUrl } from './url_sanitizer';
/**
 * Regular expression for safe style values.
 *
 * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
 *
 * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
 * font-family) and hence could allow multiple values to get injected, but that should pose no risk
 * of XSS.
 *
 * The function expression checks only for XSS safety, not for CSS validity.
 *
 * This regular expression was taken from the Closure sanitization library, and augmented for
 * transformation values.
 * @type {?}
 */
const VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
/** @type {?} */
const TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?';
/** @type {?} */
const COLOR_FNS = '(?:rgb|hsl)a?';
/** @type {?} */
const GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
/** @type {?} */
const CSS3_FNS = '(?:attr|calc|var)';
/** @type {?} */
const FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
/** @type {?} */
const SAFE_STYLE_VALUE = new RegExp(`^(${VALUES}|` +
    `(?:${TRANSFORMATION_FNS}|${COLOR_FNS}|${GRADIENTS}|${CSS3_FNS})` +
    `${FN_ARGS})$`, 'g');
/**
 * Matches a `url(...)` value with an arbitrary argument as long as it does
 * not contain parentheses.
 *
 * The URL value still needs to be sanitized separately.
 *
 * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
 * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
 * by observing whether scroll bars are displayed, or character ranges used by a font face
 * definition.
 *
 * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
 * binding a URL value without further cooperation from the page will cause an information leak, and
 * if so, it is just a leak, not a full blown XSS vulnerability.
 *
 * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
 * code is permissive and allows URLs that sanitize otherwise.
 * @type {?}
 */
const URL_RE = /^url\(([^)]+)\)$/;
/**
 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
 * that neither escape (\) nor any other character that could result in
 * breaking out of a string parsing context are allowed;
 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
 *
 * This code was taken from the Closure sanitization library.
 * @param {?} value
 * @return {?}
 */
function hasBalancedQuotes(value) {
    /** @type {?} */
    let outsideSingle = true;
    /** @type {?} */
    let outsideDouble = true;
    for (let i = 0; i < value.length; i++) {
        /** @type {?} */
        const c = value.charAt(i);
        if (c === '\'' && outsideDouble) {
            outsideSingle = !outsideSingle;
        }
        else if (c === '"' && outsideSingle) {
            outsideDouble = !outsideDouble;
        }
    }
    return outsideSingle && outsideDouble;
}
/**
 * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
 * value) and returns a value that is safe to use in a browser environment.
 * @param {?} value
 * @return {?}
 */
export function _sanitizeStyle(value) {
    value = String(value).trim(); // Make sure it's actually a string.
    if (!value)
        return '';
    // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
    // reasoning behind this.
    /** @type {?} */
    const urlMatch = value.match(URL_RE);
    if ((urlMatch && _sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
        value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
        return value; // Safe style values.
    }
    if (isDevMode()) {
        console.warn(`WARNING: sanitizing unsafe style value ${value} (see http://g.co/ng/security#xss).`);
    }
    return 'unsafe';
}
/** @enum {number} */
const StyleSanitizeMode = {
    /** Just check to see if the property is required to be sanitized or not */
    ValidateProperty: 1,
    /** Skip checking the property; just sanitize the value */
    SanitizeOnly: 2,
    /** Check the property and (if true) then sanitize the value */
    ValidateAndSanitize: 3,
};
export { StyleSanitizeMode };
/**
 * Used to intercept and sanitize style values before they are written to the renderer.
 *
 * This function is designed to be called in two modes. When a value is not provided
 * then the function will return a boolean whether a property will be sanitized later.
 * If a value is provided then the sanitized version of that will be returned.
 * @record
 */
export function StyleSanitizeFn() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfc2FuaXRpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3N0eWxlX3Nhbml0aXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O01BaUJ2QyxNQUFNLEdBQUcseUJBQXlCOztNQUNsQyxrQkFBa0IsR0FBRyxpRUFBaUU7O01BQ3RGLFNBQVMsR0FBRyxlQUFlOztNQUMzQixTQUFTLEdBQUcsMkNBQTJDOztNQUN2RCxRQUFRLEdBQUcsbUJBQW1COztNQUM5QixPQUFPLEdBQUcsMEJBQTBCOztNQUNwQyxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FDL0IsS0FBSyxNQUFNLEdBQUc7SUFDVixNQUFNLGtCQUFrQixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksUUFBUSxHQUFHO0lBQ2pFLEdBQUcsT0FBTyxJQUFJLEVBQ2xCLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFvQkYsTUFBTSxHQUFHLGtCQUFrQjs7Ozs7Ozs7Ozs7QUFVakMsU0FBUyxpQkFBaUIsQ0FBQyxLQUFhOztRQUNsQyxhQUFhLEdBQUcsSUFBSTs7UUFDcEIsYUFBYSxHQUFHLElBQUk7SUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2NBQy9CLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksYUFBYSxFQUFFO1lBQy9CLGFBQWEsR0FBRyxDQUFDLGFBQWEsQ0FBQztTQUNoQzthQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDckMsYUFBYSxHQUFHLENBQUMsYUFBYSxDQUFDO1NBQ2hDO0tBQ0Y7SUFDRCxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUM7QUFDeEMsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBYTtJQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsb0NBQW9DO0lBQ25FLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxFQUFFLENBQUM7Ozs7VUFJaEIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDN0QsT0FBTyxLQUFLLENBQUMsQ0FBRSxxQkFBcUI7S0FDckM7SUFFRCxJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FDUiwwQ0FBMEMsS0FBSyxxQ0FBcUMsQ0FBQyxDQUFDO0tBQzNGO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7QUFrQkQsTUFBa0IsaUJBQWlCO0lBQ2pDLDJFQUEyRTtJQUMzRSxnQkFBZ0IsR0FBTztJQUN2QiwwREFBMEQ7SUFDMUQsWUFBWSxHQUFPO0lBQ25CLCtEQUErRDtJQUMvRCxtQkFBbUIsR0FBTztFQUMzQjs7Ozs7Ozs7OztBQVNELHFDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2lzRGV2TW9kZX0gZnJvbSAnLi4vdXRpbC9pc19kZXZfbW9kZSc7XG5pbXBvcnQge1NhZmVWYWx1ZX0gZnJvbSAnLi9ieXBhc3MnO1xuaW1wb3J0IHtfc2FuaXRpemVVcmx9IGZyb20gJy4vdXJsX3Nhbml0aXplcic7XG5cblxuLyoqXG4gKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIHNhZmUgc3R5bGUgdmFsdWVzLlxuICpcbiAqIFF1b3RlcyAoXCIgYW5kICcpIGFyZSBhbGxvd2VkLCBidXQgYSBjaGVjayBtdXN0IGJlIGRvbmUgZWxzZXdoZXJlIHRvIGVuc3VyZSB0aGV5J3JlIGJhbGFuY2VkLlxuICpcbiAqICcsJyBhbGxvd3MgbXVsdGlwbGUgdmFsdWVzIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBzYW1lIHByb3BlcnR5IChlLmcuIGJhY2tncm91bmQtYXR0YWNobWVudCBvclxuICogZm9udC1mYW1pbHkpIGFuZCBoZW5jZSBjb3VsZCBhbGxvdyBtdWx0aXBsZSB2YWx1ZXMgdG8gZ2V0IGluamVjdGVkLCBidXQgdGhhdCBzaG91bGQgcG9zZSBubyByaXNrXG4gKiBvZiBYU1MuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGV4cHJlc3Npb24gY2hlY2tzIG9ubHkgZm9yIFhTUyBzYWZldHksIG5vdCBmb3IgQ1NTIHZhbGlkaXR5LlxuICpcbiAqIFRoaXMgcmVndWxhciBleHByZXNzaW9uIHdhcyB0YWtlbiBmcm9tIHRoZSBDbG9zdXJlIHNhbml0aXphdGlvbiBsaWJyYXJ5LCBhbmQgYXVnbWVudGVkIGZvclxuICogdHJhbnNmb3JtYXRpb24gdmFsdWVzLlxuICovXG5jb25zdCBWQUxVRVMgPSAnWy0sLlwiXFwnJV8hIyBhLXpBLVowLTldKyc7XG5jb25zdCBUUkFOU0ZPUk1BVElPTl9GTlMgPSAnKD86bWF0cml4fHRyYW5zbGF0ZXxzY2FsZXxyb3RhdGV8c2tld3xwZXJzcGVjdGl2ZSkoPzpYfFl8WnwzZCk/JztcbmNvbnN0IENPTE9SX0ZOUyA9ICcoPzpyZ2J8aHNsKWE/JztcbmNvbnN0IEdSQURJRU5UUyA9ICcoPzpyZXBlYXRpbmctKT8oPzpsaW5lYXJ8cmFkaWFsKS1ncmFkaWVudCc7XG5jb25zdCBDU1MzX0ZOUyA9ICcoPzphdHRyfGNhbGN8dmFyKSc7XG5jb25zdCBGTl9BUkdTID0gJ1xcXFwoWy0wLTkuJSwgI2EtekEtWl0rXFxcXCknO1xuY29uc3QgU0FGRV9TVFlMRV9WQUxVRSA9IG5ldyBSZWdFeHAoXG4gICAgYF4oJHtWQUxVRVN9fGAgK1xuICAgICAgICBgKD86JHtUUkFOU0ZPUk1BVElPTl9GTlN9fCR7Q09MT1JfRk5TfXwke0dSQURJRU5UU318JHtDU1MzX0ZOU30pYCArXG4gICAgICAgIGAke0ZOX0FSR1N9KSRgLFxuICAgICdnJyk7XG5cbi8qKlxuICogTWF0Y2hlcyBhIGB1cmwoLi4uKWAgdmFsdWUgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQgYXMgbG9uZyBhcyBpdCBkb2VzXG4gKiBub3QgY29udGFpbiBwYXJlbnRoZXNlcy5cbiAqXG4gKiBUaGUgVVJMIHZhbHVlIHN0aWxsIG5lZWRzIHRvIGJlIHNhbml0aXplZCBzZXBhcmF0ZWx5LlxuICpcbiAqIGB1cmwoLi4uKWAgdmFsdWVzIGFyZSBhIHZlcnkgY29tbW9uIHVzZSBjYXNlLCBlLmcuIGZvciBgYmFja2dyb3VuZC1pbWFnZWAuIFdpdGggY2FyZWZ1bGx5IGNyYWZ0ZWRcbiAqIENTUyBzdHlsZSBydWxlcywgaXQgaXMgcG9zc2libGUgdG8gY29uc3RydWN0IGFuIGluZm9ybWF0aW9uIGxlYWsgd2l0aCBgdXJsYCB2YWx1ZXMgaW4gQ1NTLCBlLmcuXG4gKiBieSBvYnNlcnZpbmcgd2hldGhlciBzY3JvbGwgYmFycyBhcmUgZGlzcGxheWVkLCBvciBjaGFyYWN0ZXIgcmFuZ2VzIHVzZWQgYnkgYSBmb250IGZhY2VcbiAqIGRlZmluaXRpb24uXG4gKlxuICogQW5ndWxhciBvbmx5IGFsbG93cyBiaW5kaW5nIENTUyB2YWx1ZXMgKGFzIG9wcG9zZWQgdG8gZW50aXJlIENTUyBydWxlcyksIHNvIGl0IGlzIHVubGlrZWx5IHRoYXRcbiAqIGJpbmRpbmcgYSBVUkwgdmFsdWUgd2l0aG91dCBmdXJ0aGVyIGNvb3BlcmF0aW9uIGZyb20gdGhlIHBhZ2Ugd2lsbCBjYXVzZSBhbiBpbmZvcm1hdGlvbiBsZWFrLCBhbmRcbiAqIGlmIHNvLCBpdCBpcyBqdXN0IGEgbGVhaywgbm90IGEgZnVsbCBibG93biBYU1MgdnVsbmVyYWJpbGl0eS5cbiAqXG4gKiBHaXZlbiB0aGUgY29tbW9uIHVzZSBjYXNlLCBsb3cgbGlrZWxpaG9vZCBvZiBhdHRhY2sgdmVjdG9yLCBhbmQgbG93IGltcGFjdCBvZiBhbiBhdHRhY2ssIHRoaXNcbiAqIGNvZGUgaXMgcGVybWlzc2l2ZSBhbmQgYWxsb3dzIFVSTHMgdGhhdCBzYW5pdGl6ZSBvdGhlcndpc2UuXG4gKi9cbmNvbnN0IFVSTF9SRSA9IC9edXJsXFwoKFteKV0rKVxcKSQvO1xuXG4vKipcbiAqIENoZWNrcyB0aGF0IHF1b3RlcyAoXCIgYW5kICcpIGFyZSBwcm9wZXJseSBiYWxhbmNlZCBpbnNpZGUgYSBzdHJpbmcuIEFzc3VtZXNcbiAqIHRoYXQgbmVpdGhlciBlc2NhcGUgKFxcKSBub3IgYW55IG90aGVyIGNoYXJhY3RlciB0aGF0IGNvdWxkIHJlc3VsdCBpblxuICogYnJlYWtpbmcgb3V0IG9mIGEgc3RyaW5nIHBhcnNpbmcgY29udGV4dCBhcmUgYWxsb3dlZDtcbiAqIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXN5bnRheC8jc3RyaW5nLXRva2VuLWRpYWdyYW0uXG4gKlxuICogVGhpcyBjb2RlIHdhcyB0YWtlbiBmcm9tIHRoZSBDbG9zdXJlIHNhbml0aXphdGlvbiBsaWJyYXJ5LlxuICovXG5mdW5jdGlvbiBoYXNCYWxhbmNlZFF1b3Rlcyh2YWx1ZTogc3RyaW5nKSB7XG4gIGxldCBvdXRzaWRlU2luZ2xlID0gdHJ1ZTtcbiAgbGV0IG91dHNpZGVEb3VibGUgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHZhbHVlLmNoYXJBdChpKTtcbiAgICBpZiAoYyA9PT0gJ1xcJycgJiYgb3V0c2lkZURvdWJsZSkge1xuICAgICAgb3V0c2lkZVNpbmdsZSA9ICFvdXRzaWRlU2luZ2xlO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gJ1wiJyAmJiBvdXRzaWRlU2luZ2xlKSB7XG4gICAgICBvdXRzaWRlRG91YmxlID0gIW91dHNpZGVEb3VibGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRzaWRlU2luZ2xlICYmIG91dHNpZGVEb3VibGU7XG59XG5cbi8qKlxuICogU2FuaXRpemVzIHRoZSBnaXZlbiB1bnRydXN0ZWQgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlIChpLmUuIG5vdCBhbiBlbnRpcmUgb2JqZWN0LCBqdXN0IGEgc2luZ2xlXG4gKiB2YWx1ZSkgYW5kIHJldHVybnMgYSB2YWx1ZSB0aGF0IGlzIHNhZmUgdG8gdXNlIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zYW5pdGl6ZVN0eWxlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpOyAgLy8gTWFrZSBzdXJlIGl0J3MgYWN0dWFsbHkgYSBzdHJpbmcuXG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcblxuICAvLyBTaW5nbGUgdXJsKC4uLikgdmFsdWVzIGFyZSBzdXBwb3J0ZWQsIGJ1dCBvbmx5IGZvciBVUkxzIHRoYXQgc2FuaXRpemUgY2xlYW5seS4gU2VlIGFib3ZlIGZvclxuICAvLyByZWFzb25pbmcgYmVoaW5kIHRoaXMuXG4gIGNvbnN0IHVybE1hdGNoID0gdmFsdWUubWF0Y2goVVJMX1JFKTtcbiAgaWYgKCh1cmxNYXRjaCAmJiBfc2FuaXRpemVVcmwodXJsTWF0Y2hbMV0pID09PSB1cmxNYXRjaFsxXSkgfHxcbiAgICAgIHZhbHVlLm1hdGNoKFNBRkVfU1RZTEVfVkFMVUUpICYmIGhhc0JhbGFuY2VkUXVvdGVzKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTsgIC8vIFNhZmUgc3R5bGUgdmFsdWVzLlxuICB9XG5cbiAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgICBgV0FSTklORzogc2FuaXRpemluZyB1bnNhZmUgc3R5bGUgdmFsdWUgJHt2YWx1ZX0gKHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MpLmApO1xuICB9XG5cbiAgcmV0dXJuICd1bnNhZmUnO1xufVxuXG5cbi8qKlxuICogQSBzZXJpZXMgb2YgZmxhZ3MgdG8gaW5zdHJ1Y3QgYSBzdHlsZSBzYW5pdGl6ZXIgdG8gZWl0aGVyIHZhbGlkYXRlXG4gKiBvciBzYW5pdGl6ZSBhIHZhbHVlLlxuICpcbiAqIEJlY2F1c2Ugc2FuaXRpemF0aW9uIGlzIGRlcGVuZGVudCBvbiB0aGUgc3R5bGUgcHJvcGVydHkgKGkuZS4gc3R5bGVcbiAqIHNhbml0aXphdGlvbiBmb3IgYHdpZHRoYCBpcyBtdWNoIGRpZmZlcmVudCB0aGFuIGZvciBgYmFja2dyb3VuZC1pbWFnZWApXG4gKiB0aGUgc2FuaXRpemF0aW9uIGZ1bmN0aW9uIChlLmcuIGBTdHlsZVNhbml0aXplckZuYCkgbmVlZHMgdG8gY2hlY2sgYVxuICogcHJvcGVydHkgdmFsdWUgZmlyc3QgYmVmb3JlIGl0IGFjdHVhbGx5IHNhbml0aXplcyBhbnkgdmFsdWVzLlxuICpcbiAqIFRoaXMgZW51bSBleGlzdCB0byBhbGxvdyBhIHN0eWxlIHNhbml0aXphdGlvbiBmdW5jdGlvbiB0byBlaXRoZXIgb25seVxuICogZG8gdmFsaWRhdGlvbiAoY2hlY2sgdGhlIHByb3BlcnR5IHRvIHNlZSB3aGV0aGVyIGEgdmFsdWUgd2lsbCBiZVxuICogc2FuaXRpemVkIG9yIG5vdCkgb3IgdG8gc2FuaXRpemUgdGhlIHZhbHVlIChvciBib3RoKS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFN0eWxlU2FuaXRpemVNb2RlIHtcbiAgLyoqIEp1c3QgY2hlY2sgdG8gc2VlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZCB0byBiZSBzYW5pdGl6ZWQgb3Igbm90ICovXG4gIFZhbGlkYXRlUHJvcGVydHkgPSAwYjAxLFxuICAvKiogU2tpcCBjaGVja2luZyB0aGUgcHJvcGVydHk7IGp1c3Qgc2FuaXRpemUgdGhlIHZhbHVlICovXG4gIFNhbml0aXplT25seSA9IDBiMTAsXG4gIC8qKiBDaGVjayB0aGUgcHJvcGVydHkgYW5kIChpZiB0cnVlKSB0aGVuIHNhbml0aXplIHRoZSB2YWx1ZSAqL1xuICBWYWxpZGF0ZUFuZFNhbml0aXplID0gMGIxMSxcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGludGVyY2VwdCBhbmQgc2FuaXRpemUgc3R5bGUgdmFsdWVzIGJlZm9yZSB0aGV5IGFyZSB3cml0dGVuIHRvIHRoZSByZW5kZXJlci5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGNhbGxlZCBpbiB0d28gbW9kZXMuIFdoZW4gYSB2YWx1ZSBpcyBub3QgcHJvdmlkZWRcbiAqIHRoZW4gdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgYm9vbGVhbiB3aGV0aGVyIGEgcHJvcGVydHkgd2lsbCBiZSBzYW5pdGl6ZWQgbGF0ZXIuXG4gKiBJZiBhIHZhbHVlIGlzIHByb3ZpZGVkIHRoZW4gdGhlIHNhbml0aXplZCB2ZXJzaW9uIG9mIHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZVNhbml0aXplRm4ge1xuICAocHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfFNhZmVWYWx1ZXxudWxsLCBtb2RlPzogU3R5bGVTYW5pdGl6ZU1vZGUpOiBhbnk7XG59XG4iXX0=