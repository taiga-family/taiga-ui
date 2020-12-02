/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/styling/styling_parser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertEqual, throwError } from '../../util/assert';
/**
 * Stores the locations of key/value indexes while parsing styling.
 *
 * In case of `cssText` parsing the indexes are like so:
 * ```
 *   "key1: value1; key2: value2; key3: value3"
 *                  ^   ^ ^     ^             ^
 *                  |   | |     |             +-- textEnd
 *                  |   | |     +---------------- valueEnd
 *                  |   | +---------------------- value
 *                  |   +------------------------ keyEnd
 *                  +---------------------------- key
 * ```
 *
 * In case of `className` parsing the indexes are like so:
 * ```
 *   "key1 key2 key3"
 *         ^   ^    ^
 *         |   |    +-- textEnd
 *         |   +------------------------ keyEnd
 *         +---------------------------- key
 * ```
 * NOTE: `value` and `valueEnd` are used only for styles, not classes.
 * @record
 */
function ParserState() { }
if (false) {
    /** @type {?} */
    ParserState.prototype.textEnd;
    /** @type {?} */
    ParserState.prototype.key;
    /** @type {?} */
    ParserState.prototype.keyEnd;
    /** @type {?} */
    ParserState.prototype.value;
    /** @type {?} */
    ParserState.prototype.valueEnd;
}
// Global state of the parser. (This makes parser non-reentrant, but that is not an issue)
/** @type {?} */
const parserState = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0,
};
/**
 * Retrieves the last parsed `key` of style.
 * @param {?} text the text to substring the key from.
 * @return {?}
 */
export function getLastParsedKey(text) {
    return text.substring(parserState.key, parserState.keyEnd);
}
/**
 * Retrieves the last parsed `value` of style.
 * @param {?} text the text to substring the key from.
 * @return {?}
 */
export function getLastParsedValue(text) {
    return text.substring(parserState.value, parserState.valueEnd);
}
/**
 * Initializes `className` string for parsing and parses the first token.
 *
 * This function is intended to be used in this format:
 * ```
 * for (let i = parseClassName(text); i >= 0; i = parseClassNameNext(text, i)) {
 *   const key = getLastParsedKey();
 *   ...
 * }
 * ```
 * @param {?} text `className` to parse
 * @return {?} index where the next invocation of `parseClassNameNext` should resume.
 */
export function parseClassName(text) {
    resetParserState(text);
    return parseClassNameNext(text, consumeWhitespace(text, 0, parserState.textEnd));
}
/**
 * Parses next `className` token.
 *
 * This function is intended to be used in this format:
 * ```
 * for (let i = parseClassName(text); i >= 0; i = parseClassNameNext(text, i)) {
 *   const key = getLastParsedKey();
 *   ...
 * }
 * ```
 *
 * @param {?} text `className` to parse
 * @param {?} index where the parsing should resume.
 * @return {?} index where the next invocation of `parseClassNameNext` should resume.
 */
export function parseClassNameNext(text, index) {
    /** @type {?} */
    const end = parserState.textEnd;
    if (end === index) {
        return -1;
    }
    index = parserState.keyEnd = consumeClassToken(text, parserState.key = index, end);
    return consumeWhitespace(text, index, end);
}
/**
 * Initializes `cssText` string for parsing and parses the first key/values.
 *
 * This function is intended to be used in this format:
 * ```
 * for (let i = parseStyle(text); i >= 0; i = parseStyleNext(text, i))) {
 *   const key = getLastParsedKey();
 *   const value = getLastParsedValue();
 *   ...
 * }
 * ```
 * @param {?} text `cssText` to parse
 * @return {?} index where the next invocation of `parseStyleNext` should resume.
 */
export function parseStyle(text) {
    resetParserState(text);
    return parseStyleNext(text, consumeWhitespace(text, 0, parserState.textEnd));
}
/**
 * Parses the next `cssText` key/values.
 *
 * This function is intended to be used in this format:
 * ```
 * for (let i = parseStyle(text); i >= 0; i = parseStyleNext(text, i))) {
 *   const key = getLastParsedKey();
 *   const value = getLastParsedValue();
 *   ...
 * }
 *
 * @param {?} text `cssText` to parse
 * @param {?} startIndex
 * @return {?} index where the next invocation of `parseStyleNext` should resume.
 */
export function parseStyleNext(text, startIndex) {
    /** @type {?} */
    const end = parserState.textEnd;
    /** @type {?} */
    let index = parserState.key = consumeWhitespace(text, startIndex, end);
    if (end === index) {
        // we reached an end so just quit
        return -1;
    }
    index = parserState.keyEnd = consumeStyleKey(text, index, end);
    index = consumeSeparator(text, index, end, 58 /* COLON */);
    index = parserState.value = consumeWhitespace(text, index, end);
    index = parserState.valueEnd = consumeStyleValue(text, index, end);
    return consumeSeparator(text, index, end, 59 /* SEMI_COLON */);
}
/**
 * Reset the global state of the styling parser.
 * @param {?} text The styling text to parse.
 * @return {?}
 */
export function resetParserState(text) {
    parserState.key = 0;
    parserState.keyEnd = 0;
    parserState.value = 0;
    parserState.valueEnd = 0;
    parserState.textEnd = text.length;
}
/**
 * Returns index of next non-whitespace character.
 *
 * @param {?} text Text to scan
 * @param {?} startIndex Starting index of character where the scan should start.
 * @param {?} endIndex Ending index of character where the scan should end.
 * @return {?} Index of next non-whitespace character (May be the same as `start` if no whitespace at
 *          that location.)
 */
export function consumeWhitespace(text, startIndex, endIndex) {
    while (startIndex < endIndex && text.charCodeAt(startIndex) <= 32 /* SPACE */) {
        startIndex++;
    }
    return startIndex;
}
/**
 * Returns index of last char in class token.
 *
 * @param {?} text Text to scan
 * @param {?} startIndex Starting index of character where the scan should start.
 * @param {?} endIndex Ending index of character where the scan should end.
 * @return {?} Index after last char in class token.
 */
export function consumeClassToken(text, startIndex, endIndex) {
    while (startIndex < endIndex && text.charCodeAt(startIndex) > 32 /* SPACE */) {
        startIndex++;
    }
    return startIndex;
}
/**
 * Consumes all of the characters belonging to style key and token.
 *
 * @param {?} text Text to scan
 * @param {?} startIndex Starting index of character where the scan should start.
 * @param {?} endIndex Ending index of character where the scan should end.
 * @return {?} Index after last style key character.
 */
export function consumeStyleKey(text, startIndex, endIndex) {
    /** @type {?} */
    let ch;
    while (startIndex < endIndex &&
        ((ch = text.charCodeAt(startIndex)) === 45 /* DASH */ || ch === 95 /* UNDERSCORE */ ||
            ((ch & -33 /* UPPER_CASE */) >= 65 /* A */ && (ch & -33 /* UPPER_CASE */) <= 90 /* Z */))) {
        startIndex++;
    }
    return startIndex;
}
/**
 * Consumes all whitespace and the separator `:` after the style key.
 *
 * @param {?} text Text to scan
 * @param {?} startIndex Starting index of character where the scan should start.
 * @param {?} endIndex Ending index of character where the scan should end.
 * @param {?} separator
 * @return {?} Index after separator and surrounding whitespace.
 */
export function consumeSeparator(text, startIndex, endIndex, separator) {
    startIndex = consumeWhitespace(text, startIndex, endIndex);
    if (startIndex < endIndex) {
        if (ngDevMode && text.charCodeAt(startIndex) !== separator) {
            malformedStyleError(text, String.fromCharCode(separator), startIndex);
        }
        startIndex++;
    }
    return startIndex;
}
/**
 * Consumes style value honoring `url()` and `""` text.
 *
 * @param {?} text Text to scan
 * @param {?} startIndex Starting index of character where the scan should start.
 * @param {?} endIndex Ending index of character where the scan should end.
 * @return {?} Index after last style value character.
 */
export function consumeStyleValue(text, startIndex, endIndex) {
    /** @type {?} */
    let ch1 = -1;
    // 1st previous character
    /** @type {?} */
    let ch2 = -1;
    // 2nd previous character
    /** @type {?} */
    let ch3 = -1;
    // 3rd previous character
    /** @type {?} */
    let i = startIndex;
    /** @type {?} */
    let lastChIndex = i;
    while (i < endIndex) {
        /** @type {?} */
        const ch = text.charCodeAt(i++);
        if (ch === 59 /* SEMI_COLON */) {
            return lastChIndex;
        }
        else if (ch === 34 /* DOUBLE_QUOTE */ || ch === 39 /* SINGLE_QUOTE */) {
            lastChIndex = i = consumeQuotedText(text, ch, i, endIndex);
        }
        else if (startIndex ===
            i - 4 && // We have seen only 4 characters so far "URL(" (Ignore "foo_URL()")
            ch3 === 85 /* U */ &&
            ch2 === 82 /* R */ && ch1 === 76 /* L */ && ch === 40 /* OPEN_PAREN */) {
            lastChIndex = i = consumeQuotedText(text, 41 /* CLOSE_PAREN */, i, endIndex);
        }
        else if (ch > 32 /* SPACE */) {
            // if we have a non-whitespace character then capture its location
            lastChIndex = i;
        }
        ch3 = ch2;
        ch2 = ch1;
        ch1 = ch & -33 /* UPPER_CASE */;
    }
    return lastChIndex;
}
/**
 * Consumes all of the quoted characters.
 *
 * @param {?} text Text to scan
 * @param {?} quoteCharCode CharCode of either `"` or `'` quote or `)` for `url(...)`.
 * @param {?} startIndex Starting index of character where the scan should start.
 * @param {?} endIndex Ending index of character where the scan should end.
 * @return {?} Index after quoted characters.
 */
export function consumeQuotedText(text, quoteCharCode, startIndex, endIndex) {
    /** @type {?} */
    let ch1 = -1;
    // 1st previous character
    /** @type {?} */
    let index = startIndex;
    while (index < endIndex) {
        /** @type {?} */
        const ch = text.charCodeAt(index++);
        if (ch == quoteCharCode && ch1 !== 92 /* BACK_SLASH */) {
            return index;
        }
        if (ch == 92 /* BACK_SLASH */ && ch1 === 92 /* BACK_SLASH */) {
            // two back slashes cancel each other out. For example `"\\"` should properly end the
            // quotation. (It should not assume that the last `"` is escaped.)
            ch1 = 0;
        }
        else {
            ch1 = ch;
        }
    }
    throw ngDevMode ? malformedStyleError(text, String.fromCharCode(quoteCharCode), endIndex) :
        new Error();
}
/**
 * @param {?} text
 * @param {?} expecting
 * @param {?} index
 * @return {?}
 */
function malformedStyleError(text, expecting, index) {
    ngDevMode && assertEqual(typeof text === 'string', true, 'String expected here');
    throw throwError(`Malformed style at location ${index} in string '` + text.substring(0, index) + '[>>' +
        text.substring(index, index + 1) + '<<]' + text.substr(index + 1) +
        `'. Expecting '${expecting}'.`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZ19wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3N0eWxpbmcvc3R5bGluZ19wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQjFELDBCQU1DOzs7SUFMQyw4QkFBZ0I7O0lBQ2hCLDBCQUFZOztJQUNaLDZCQUFlOztJQUNmLDRCQUFjOztJQUNkLCtCQUFpQjs7OztNQUdiLFdBQVcsR0FBZ0I7SUFDL0IsT0FBTyxFQUFFLENBQUM7SUFDVixHQUFHLEVBQUUsQ0FBQztJQUNOLE1BQU0sRUFBRSxDQUFDO0lBQ1QsS0FBSyxFQUFFLENBQUM7SUFDUixRQUFRLEVBQUUsQ0FBQztDQUNaOzs7Ozs7QUFNRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBWTtJQUMzQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7O0FBTUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVk7SUFDN0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFZO0lBQ3pDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbkYsQ0FBQzs7Ozs7Ozs7Ozs7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QkFBd0IsRUFBRTtZQUM1RCxxRkFBcUY7WUFDckYsa0VBQWtFO1lBQ2xFLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0wsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxNQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLG1CQUFtQixDQUFDLElBQVksRUFBRSxTQUFpQixFQUFFLEtBQWE7SUFDekUsU0FBUyxJQUFJLFdBQVcsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDakYsTUFBTSxVQUFVLENBQ1osK0JBQStCLEtBQUssY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUs7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakUsaUJBQWlCLFNBQVMsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnRFcXVhbCwgdGhyb3dFcnJvcn0gZnJvbSAnLi4vLi4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtDaGFyQ29kZX0gZnJvbSAnLi4vLi4vdXRpbC9jaGFyX2NvZGUnO1xuXG4vKipcbiAqIFN0b3JlcyB0aGUgbG9jYXRpb25zIG9mIGtleS92YWx1ZSBpbmRleGVzIHdoaWxlIHBhcnNpbmcgc3R5bGluZy5cbiAqXG4gKiBJbiBjYXNlIG9mIGBjc3NUZXh0YCBwYXJzaW5nIHRoZSBpbmRleGVzIGFyZSBsaWtlIHNvOlxuICogYGBgXG4gKiAgIFwia2V5MTogdmFsdWUxOyBrZXkyOiB2YWx1ZTI7IGtleTM6IHZhbHVlM1wiXG4gKiAgICAgICAgICAgICAgICAgIF4gICBeIF4gICAgIF4gICAgICAgICAgICAgXlxuICogICAgICAgICAgICAgICAgICB8ICAgfCB8ICAgICB8ICAgICAgICAgICAgICstLSB0ZXh0RW5kXG4gKiAgICAgICAgICAgICAgICAgIHwgICB8IHwgICAgICstLS0tLS0tLS0tLS0tLS0tIHZhbHVlRW5kXG4gKiAgICAgICAgICAgICAgICAgIHwgICB8ICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhbHVlXG4gKiAgICAgICAgICAgICAgICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGtleUVuZFxuICogICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBrZXlcbiAqIGBgYFxuICpcbiAqIEluIGNhc2Ugb2YgYGNsYXNzTmFtZWAgcGFyc2luZyB0aGUgaW5kZXhlcyBhcmUgbGlrZSBzbzpcbiAqIGBgYFxuICogICBcImtleTEga2V5MiBrZXkzXCJcbiAqICAgICAgICAgXiAgIF4gICAgXlxuICogICAgICAgICB8ICAgfCAgICArLS0gdGV4dEVuZFxuICogICAgICAgICB8ICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBrZXlFbmRcbiAqICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0ga2V5XG4gKiBgYGBcbiAqIE5PVEU6IGB2YWx1ZWAgYW5kIGB2YWx1ZUVuZGAgYXJlIHVzZWQgb25seSBmb3Igc3R5bGVzLCBub3QgY2xhc3Nlcy5cbiAqL1xuaW50ZXJmYWNlIFBhcnNlclN0YXRlIHtcbiAgdGV4dEVuZDogbnVtYmVyO1xuICBrZXk6IG51bWJlcjtcbiAga2V5RW5kOiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHZhbHVlRW5kOiBudW1iZXI7XG59XG4vLyBHbG9iYWwgc3RhdGUgb2YgdGhlIHBhcnNlci4gKFRoaXMgbWFrZXMgcGFyc2VyIG5vbi1yZWVudHJhbnQsIGJ1dCB0aGF0IGlzIG5vdCBhbiBpc3N1ZSlcbmNvbnN0IHBhcnNlclN0YXRlOiBQYXJzZXJTdGF0ZSA9IHtcbiAgdGV4dEVuZDogMCxcbiAga2V5OiAwLFxuICBrZXlFbmQ6IDAsXG4gIHZhbHVlOiAwLFxuICB2YWx1ZUVuZDogMCxcbn07XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBsYXN0IHBhcnNlZCBga2V5YCBvZiBzdHlsZS5cbiAqIEBwYXJhbSB0ZXh0IHRoZSB0ZXh0IHRvIHN1YnN0cmluZyB0aGUga2V5IGZyb20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0UGFyc2VkS2V5KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0ZXh0LnN1YnN0cmluZyhwYXJzZXJTdGF0ZS5rZXksIHBhcnNlclN0YXRlLmtleUVuZCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBsYXN0IHBhcnNlZCBgdmFsdWVgIG9mIHN0eWxlLlxuICogQHBhcmFtIHRleHQgdGhlIHRleHQgdG8gc3Vic3RyaW5nIHRoZSBrZXkgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RQYXJzZWRWYWx1ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dC5zdWJzdHJpbmcocGFyc2VyU3RhdGUudmFsdWUsIHBhcnNlclN0YXRlLnZhbHVlRW5kKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBgY2xhc3NOYW1lYCBzdHJpbmcgZm9yIHBhcnNpbmcgYW5kIHBhcnNlcyB0aGUgZmlyc3QgdG9rZW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIHRoaXMgZm9ybWF0OlxuICogYGBgXG4gKiBmb3IgKGxldCBpID0gcGFyc2VDbGFzc05hbWUodGV4dCk7IGkgPj0gMDsgaSA9IHBhcnNlQ2xhc3NOYW1lTmV4dCh0ZXh0LCBpKSkge1xuICogICBjb25zdCBrZXkgPSBnZXRMYXN0UGFyc2VkS2V5KCk7XG4gKiAgIC4uLlxuICogfVxuICogYGBgXG4gKiBAcGFyYW0gdGV4dCBgY2xhc3NOYW1lYCB0byBwYXJzZVxuICogQHJldHVybnMgaW5kZXggd2hlcmUgdGhlIG5leHQgaW52b2NhdGlvbiBvZiBgcGFyc2VDbGFzc05hbWVOZXh0YCBzaG91bGQgcmVzdW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc05hbWUodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmVzZXRQYXJzZXJTdGF0ZSh0ZXh0KTtcbiAgcmV0dXJuIHBhcnNlQ2xhc3NOYW1lTmV4dCh0ZXh0LCBjb25zdW1lV2hpdGVzcGFjZSh0ZXh0LCAwLCBwYXJzZXJTdGF0ZS50ZXh0RW5kKSk7XG59XG5cbi8qKlxuICogUGFyc2VzIG5leHQgYGNsYXNzTmFtZWAgdG9rZW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIHRoaXMgZm9ybWF0OlxuICogYGBgXG4gKiBmb3IgKGxldCBpID0gcGFyc2VDbGFzc05hbWUodGV4dCk7IGkgPj0gMDsgaSA9IHBhcnNlQ2xhc3NOYW1lTmV4dCh0ZXh0LCBpKSkge1xuICogICBjb25zdCBrZXkgPSBnZXRMYXN0UGFyc2VkS2V5KCk7XG4gKiAgIC4uLlxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHRleHQgYGNsYXNzTmFtZWAgdG8gcGFyc2VcbiAqIEBwYXJhbSBpbmRleCB3aGVyZSB0aGUgcGFyc2luZyBzaG91bGQgcmVzdW1lLlxuICogQHJldHVybnMgaW5kZXggd2hlcmUgdGhlIG5leHQgaW52b2NhdGlvbiBvZiBgcGFyc2VDbGFzc05hbWVOZXh0YCBzaG91bGQgcmVzdW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDbGFzc05hbWVOZXh0KHRleHQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGVuZCA9IHBhcnNlclN0YXRlLnRleHRFbmQ7XG4gIGlmIChlbmQgPT09IGluZGV4KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGluZGV4ID0gcGFyc2VyU3RhdGUua2V5RW5kID0gY29uc3VtZUNsYXNzVG9rZW4odGV4dCwgcGFyc2VyU3RhdGUua2V5ID0gaW5kZXgsIGVuZCk7XG4gIHJldHVybiBjb25zdW1lV2hpdGVzcGFjZSh0ZXh0LCBpbmRleCwgZW5kKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBgY3NzVGV4dGAgc3RyaW5nIGZvciBwYXJzaW5nIGFuZCBwYXJzZXMgdGhlIGZpcnN0IGtleS92YWx1ZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIHRoaXMgZm9ybWF0OlxuICogYGBgXG4gKiBmb3IgKGxldCBpID0gcGFyc2VTdHlsZSh0ZXh0KTsgaSA+PSAwOyBpID0gcGFyc2VTdHlsZU5leHQodGV4dCwgaSkpKSB7XG4gKiAgIGNvbnN0IGtleSA9IGdldExhc3RQYXJzZWRLZXkoKTtcbiAqICAgY29uc3QgdmFsdWUgPSBnZXRMYXN0UGFyc2VkVmFsdWUoKTtcbiAqICAgLi4uXG4gKiB9XG4gKiBgYGBcbiAqIEBwYXJhbSB0ZXh0IGBjc3NUZXh0YCB0byBwYXJzZVxuICogQHJldHVybnMgaW5kZXggd2hlcmUgdGhlIG5leHQgaW52b2NhdGlvbiBvZiBgcGFyc2VTdHlsZU5leHRgIHNob3VsZCByZXN1bWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0eWxlKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gIHJlc2V0UGFyc2VyU3RhdGUodGV4dCk7XG4gIHJldHVybiBwYXJzZVN0eWxlTmV4dCh0ZXh0LCBjb25zdW1lV2hpdGVzcGFjZSh0ZXh0LCAwLCBwYXJzZXJTdGF0ZS50ZXh0RW5kKSk7XG59XG5cbi8qKlxuICogUGFyc2VzIHRoZSBuZXh0IGBjc3NUZXh0YCBrZXkvdmFsdWVzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGlzIGZvcm1hdDpcbiAqIGBgYFxuICogZm9yIChsZXQgaSA9IHBhcnNlU3R5bGUodGV4dCk7IGkgPj0gMDsgaSA9IHBhcnNlU3R5bGVOZXh0KHRleHQsIGkpKSkge1xuICogICBjb25zdCBrZXkgPSBnZXRMYXN0UGFyc2VkS2V5KCk7XG4gKiAgIGNvbnN0IHZhbHVlID0gZ2V0TGFzdFBhcnNlZFZhbHVlKCk7XG4gKiAgIC4uLlxuICogfVxuICpcbiAqIEBwYXJhbSB0ZXh0IGBjc3NUZXh0YCB0byBwYXJzZVxuICogQHBhcmFtIGluZGV4IHdoZXJlIHRoZSBwYXJzaW5nIHNob3VsZCByZXN1bWUuXG4gKiBAcmV0dXJucyBpbmRleCB3aGVyZSB0aGUgbmV4dCBpbnZvY2F0aW9uIG9mIGBwYXJzZVN0eWxlTmV4dGAgc2hvdWxkIHJlc3VtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3R5bGVOZXh0KHRleHQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgZW5kID0gcGFyc2VyU3RhdGUudGV4dEVuZDtcbiAgbGV0IGluZGV4ID0gcGFyc2VyU3RhdGUua2V5ID0gY29uc3VtZVdoaXRlc3BhY2UodGV4dCwgc3RhcnRJbmRleCwgZW5kKTtcbiAgaWYgKGVuZCA9PT0gaW5kZXgpIHtcbiAgICAvLyB3ZSByZWFjaGVkIGFuIGVuZCBzbyBqdXN0IHF1aXRcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaW5kZXggPSBwYXJzZXJTdGF0ZS5rZXlFbmQgPSBjb25zdW1lU3R5bGVLZXkodGV4dCwgaW5kZXgsIGVuZCk7XG4gIGluZGV4ID0gY29uc3VtZVNlcGFyYXRvcih0ZXh0LCBpbmRleCwgZW5kLCBDaGFyQ29kZS5DT0xPTik7XG4gIGluZGV4ID0gcGFyc2VyU3RhdGUudmFsdWUgPSBjb25zdW1lV2hpdGVzcGFjZSh0ZXh0LCBpbmRleCwgZW5kKTtcbiAgaW5kZXggPSBwYXJzZXJTdGF0ZS52YWx1ZUVuZCA9IGNvbnN1bWVTdHlsZVZhbHVlKHRleHQsIGluZGV4LCBlbmQpO1xuICByZXR1cm4gY29uc3VtZVNlcGFyYXRvcih0ZXh0LCBpbmRleCwgZW5kLCBDaGFyQ29kZS5TRU1JX0NPTE9OKTtcbn1cblxuLyoqXG4gKiBSZXNldCB0aGUgZ2xvYmFsIHN0YXRlIG9mIHRoZSBzdHlsaW5nIHBhcnNlci5cbiAqIEBwYXJhbSB0ZXh0IFRoZSBzdHlsaW5nIHRleHQgdG8gcGFyc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFBhcnNlclN0YXRlKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICBwYXJzZXJTdGF0ZS5rZXkgPSAwO1xuICBwYXJzZXJTdGF0ZS5rZXlFbmQgPSAwO1xuICBwYXJzZXJTdGF0ZS52YWx1ZSA9IDA7XG4gIHBhcnNlclN0YXRlLnZhbHVlRW5kID0gMDtcbiAgcGFyc2VyU3RhdGUudGV4dEVuZCA9IHRleHQubGVuZ3RoO1xufVxuXG4vKipcbiAqIFJldHVybnMgaW5kZXggb2YgbmV4dCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKlxuICogQHBhcmFtIHRleHQgVGV4dCB0byBzY2FuXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBTdGFydGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGVuZEluZGV4IEVuZGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIGVuZC5cbiAqIEByZXR1cm5zIEluZGV4IG9mIG5leHQgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIChNYXkgYmUgdGhlIHNhbWUgYXMgYHN0YXJ0YCBpZiBubyB3aGl0ZXNwYWNlIGF0XG4gKiAgICAgICAgICB0aGF0IGxvY2F0aW9uLilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bWVXaGl0ZXNwYWNlKHRleHQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgd2hpbGUgKHN0YXJ0SW5kZXggPCBlbmRJbmRleCAmJiB0ZXh0LmNoYXJDb2RlQXQoc3RhcnRJbmRleCkgPD0gQ2hhckNvZGUuU1BBQ0UpIHtcbiAgICBzdGFydEluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0SW5kZXg7XG59XG5cbi8qKlxuICogUmV0dXJucyBpbmRleCBvZiBsYXN0IGNoYXIgaW4gY2xhc3MgdG9rZW4uXG4gKlxuICogQHBhcmFtIHRleHQgVGV4dCB0byBzY2FuXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBTdGFydGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGVuZEluZGV4IEVuZGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIGVuZC5cbiAqIEByZXR1cm5zIEluZGV4IGFmdGVyIGxhc3QgY2hhciBpbiBjbGFzcyB0b2tlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bWVDbGFzc1Rva2VuKHRleHQ6IHN0cmluZywgc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgd2hpbGUgKHN0YXJ0SW5kZXggPCBlbmRJbmRleCAmJiB0ZXh0LmNoYXJDb2RlQXQoc3RhcnRJbmRleCkgPiBDaGFyQ29kZS5TUEFDRSkge1xuICAgIHN0YXJ0SW5kZXgrKztcbiAgfVxuICByZXR1cm4gc3RhcnRJbmRleDtcbn1cblxuLyoqXG4gKiBDb25zdW1lcyBhbGwgb2YgdGhlIGNoYXJhY3RlcnMgYmVsb25naW5nIHRvIHN0eWxlIGtleSBhbmQgdG9rZW4uXG4gKlxuICogQHBhcmFtIHRleHQgVGV4dCB0byBzY2FuXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBTdGFydGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGVuZEluZGV4IEVuZGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIGVuZC5cbiAqIEByZXR1cm5zIEluZGV4IGFmdGVyIGxhc3Qgc3R5bGUga2V5IGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bWVTdHlsZUtleSh0ZXh0OiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBjaDogbnVtYmVyO1xuICB3aGlsZSAoc3RhcnRJbmRleCA8IGVuZEluZGV4ICYmXG4gICAgICAgICAoKGNoID0gdGV4dC5jaGFyQ29kZUF0KHN0YXJ0SW5kZXgpKSA9PT0gQ2hhckNvZGUuREFTSCB8fCBjaCA9PT0gQ2hhckNvZGUuVU5ERVJTQ09SRSB8fFxuICAgICAgICAgICgoY2ggJiBDaGFyQ29kZS5VUFBFUl9DQVNFKSA+PSBDaGFyQ29kZS5BICYmIChjaCAmIENoYXJDb2RlLlVQUEVSX0NBU0UpIDw9IENoYXJDb2RlLlopKSkge1xuICAgIHN0YXJ0SW5kZXgrKztcbiAgfVxuICByZXR1cm4gc3RhcnRJbmRleDtcbn1cblxuLyoqXG4gKiBDb25zdW1lcyBhbGwgd2hpdGVzcGFjZSBhbmQgdGhlIHNlcGFyYXRvciBgOmAgYWZ0ZXIgdGhlIHN0eWxlIGtleS5cbiAqXG4gKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNjYW5cbiAqIEBwYXJhbSBzdGFydEluZGV4IFN0YXJ0aW5nIGluZGV4IG9mIGNoYXJhY3RlciB3aGVyZSB0aGUgc2NhbiBzaG91bGQgc3RhcnQuXG4gKiBAcGFyYW0gZW5kSW5kZXggRW5kaW5nIGluZGV4IG9mIGNoYXJhY3RlciB3aGVyZSB0aGUgc2NhbiBzaG91bGQgZW5kLlxuICogQHJldHVybnMgSW5kZXggYWZ0ZXIgc2VwYXJhdG9yIGFuZCBzdXJyb3VuZGluZyB3aGl0ZXNwYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3VtZVNlcGFyYXRvcihcbiAgICB0ZXh0OiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlciwgc2VwYXJhdG9yOiBudW1iZXIpOiBudW1iZXIge1xuICBzdGFydEluZGV4ID0gY29uc3VtZVdoaXRlc3BhY2UodGV4dCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICBpZiAoc3RhcnRJbmRleCA8IGVuZEluZGV4KSB7XG4gICAgaWYgKG5nRGV2TW9kZSAmJiB0ZXh0LmNoYXJDb2RlQXQoc3RhcnRJbmRleCkgIT09IHNlcGFyYXRvcikge1xuICAgICAgbWFsZm9ybWVkU3R5bGVFcnJvcih0ZXh0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHNlcGFyYXRvciksIHN0YXJ0SW5kZXgpO1xuICAgIH1cbiAgICBzdGFydEluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0SW5kZXg7XG59XG5cblxuLyoqXG4gKiBDb25zdW1lcyBzdHlsZSB2YWx1ZSBob25vcmluZyBgdXJsKClgIGFuZCBgXCJcImAgdGV4dC5cbiAqXG4gKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNjYW5cbiAqIEBwYXJhbSBzdGFydEluZGV4IFN0YXJ0aW5nIGluZGV4IG9mIGNoYXJhY3RlciB3aGVyZSB0aGUgc2NhbiBzaG91bGQgc3RhcnQuXG4gKiBAcGFyYW0gZW5kSW5kZXggRW5kaW5nIGluZGV4IG9mIGNoYXJhY3RlciB3aGVyZSB0aGUgc2NhbiBzaG91bGQgZW5kLlxuICogQHJldHVybnMgSW5kZXggYWZ0ZXIgbGFzdCBzdHlsZSB2YWx1ZSBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lU3R5bGVWYWx1ZSh0ZXh0OiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBjaDEgPSAtMTsgIC8vIDFzdCBwcmV2aW91cyBjaGFyYWN0ZXJcbiAgbGV0IGNoMiA9IC0xOyAgLy8gMm5kIHByZXZpb3VzIGNoYXJhY3RlclxuICBsZXQgY2gzID0gLTE7ICAvLyAzcmQgcHJldmlvdXMgY2hhcmFjdGVyXG4gIGxldCBpID0gc3RhcnRJbmRleDtcbiAgbGV0IGxhc3RDaEluZGV4ID0gaTtcbiAgd2hpbGUgKGkgPCBlbmRJbmRleCkge1xuICAgIGNvbnN0IGNoOiBudW1iZXIgPSB0ZXh0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICBpZiAoY2ggPT09IENoYXJDb2RlLlNFTUlfQ09MT04pIHtcbiAgICAgIHJldHVybiBsYXN0Q2hJbmRleDtcbiAgICB9IGVsc2UgaWYgKGNoID09PSBDaGFyQ29kZS5ET1VCTEVfUVVPVEUgfHwgY2ggPT09IENoYXJDb2RlLlNJTkdMRV9RVU9URSkge1xuICAgICAgbGFzdENoSW5kZXggPSBpID0gY29uc3VtZVF1b3RlZFRleHQodGV4dCwgY2gsIGksIGVuZEluZGV4KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdGFydEluZGV4ID09PVxuICAgICAgICAgICAgaSAtIDQgJiYgIC8vIFdlIGhhdmUgc2VlbiBvbmx5IDQgY2hhcmFjdGVycyBzbyBmYXIgXCJVUkwoXCIgKElnbm9yZSBcImZvb19VUkwoKVwiKVxuICAgICAgICBjaDMgPT09IENoYXJDb2RlLlUgJiZcbiAgICAgICAgY2gyID09PSBDaGFyQ29kZS5SICYmIGNoMSA9PT0gQ2hhckNvZGUuTCAmJiBjaCA9PT0gQ2hhckNvZGUuT1BFTl9QQVJFTikge1xuICAgICAgbGFzdENoSW5kZXggPSBpID0gY29uc3VtZVF1b3RlZFRleHQodGV4dCwgQ2hhckNvZGUuQ0xPU0VfUEFSRU4sIGksIGVuZEluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGNoID4gQ2hhckNvZGUuU1BBQ0UpIHtcbiAgICAgIC8vIGlmIHdlIGhhdmUgYSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgdGhlbiBjYXB0dXJlIGl0cyBsb2NhdGlvblxuICAgICAgbGFzdENoSW5kZXggPSBpO1xuICAgIH1cbiAgICBjaDMgPSBjaDI7XG4gICAgY2gyID0gY2gxO1xuICAgIGNoMSA9IGNoICYgQ2hhckNvZGUuVVBQRVJfQ0FTRTtcbiAgfVxuICByZXR1cm4gbGFzdENoSW5kZXg7XG59XG5cbi8qKlxuICogQ29uc3VtZXMgYWxsIG9mIHRoZSBxdW90ZWQgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNjYW5cbiAqIEBwYXJhbSBxdW90ZUNoYXJDb2RlIENoYXJDb2RlIG9mIGVpdGhlciBgXCJgIG9yIGAnYCBxdW90ZSBvciBgKWAgZm9yIGB1cmwoLi4uKWAuXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBTdGFydGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGVuZEluZGV4IEVuZGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIGVuZC5cbiAqIEByZXR1cm5zIEluZGV4IGFmdGVyIHF1b3RlZCBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3VtZVF1b3RlZFRleHQoXG4gICAgdGV4dDogc3RyaW5nLCBxdW90ZUNoYXJDb2RlOiBudW1iZXIsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBjaDEgPSAtMTsgIC8vIDFzdCBwcmV2aW91cyBjaGFyYWN0ZXJcbiAgbGV0IGluZGV4ID0gc3RhcnRJbmRleDtcbiAgd2hpbGUgKGluZGV4IDwgZW5kSW5kZXgpIHtcbiAgICBjb25zdCBjaCA9IHRleHQuY2hhckNvZGVBdChpbmRleCsrKTtcbiAgICBpZiAoY2ggPT0gcXVvdGVDaGFyQ29kZSAmJiBjaDEgIT09IENoYXJDb2RlLkJBQ0tfU0xBU0gpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgaWYgKGNoID09IENoYXJDb2RlLkJBQ0tfU0xBU0ggJiYgY2gxID09PSBDaGFyQ29kZS5CQUNLX1NMQVNIKSB7XG4gICAgICAvLyB0d28gYmFjayBzbGFzaGVzIGNhbmNlbCBlYWNoIG90aGVyIG91dC4gRm9yIGV4YW1wbGUgYFwiXFxcXFwiYCBzaG91bGQgcHJvcGVybHkgZW5kIHRoZVxuICAgICAgLy8gcXVvdGF0aW9uLiAoSXQgc2hvdWxkIG5vdCBhc3N1bWUgdGhhdCB0aGUgbGFzdCBgXCJgIGlzIGVzY2FwZWQuKVxuICAgICAgY2gxID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2gxID0gY2g7XG4gICAgfVxuICB9XG4gIHRocm93IG5nRGV2TW9kZSA/IG1hbGZvcm1lZFN0eWxlRXJyb3IodGV4dCwgU3RyaW5nLmZyb21DaGFyQ29kZShxdW90ZUNoYXJDb2RlKSwgZW5kSW5kZXgpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCk7XG59XG5cbmZ1bmN0aW9uIG1hbGZvcm1lZFN0eWxlRXJyb3IodGV4dDogc3RyaW5nLCBleHBlY3Rpbmc6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG5ldmVyIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydEVxdWFsKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJywgdHJ1ZSwgJ1N0cmluZyBleHBlY3RlZCBoZXJlJyk7XG4gIHRocm93IHRocm93RXJyb3IoXG4gICAgICBgTWFsZm9ybWVkIHN0eWxlIGF0IGxvY2F0aW9uICR7aW5kZXh9IGluIHN0cmluZyAnYCArIHRleHQuc3Vic3RyaW5nKDAsIGluZGV4KSArICdbPj4nICtcbiAgICAgIHRleHQuc3Vic3RyaW5nKGluZGV4LCBpbmRleCArIDEpICsgJzw8XScgKyB0ZXh0LnN1YnN0cihpbmRleCArIDEpICtcbiAgICAgIGAnLiBFeHBlY3RpbmcgJyR7ZXhwZWN0aW5nfScuYCk7XG59XG4iXX0=