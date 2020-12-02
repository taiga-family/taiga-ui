/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertEqual, throwError } from '../../util/assert';
// Global state of the parser. (This makes parser non-reentrant, but that is not an issue)
var parserState = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0,
};
/**
 * Retrieves the last parsed `key` of style.
 * @param text the text to substring the key from.
 */
export function getLastParsedKey(text) {
    return text.substring(parserState.key, parserState.keyEnd);
}
/**
 * Retrieves the last parsed `value` of style.
 * @param text the text to substring the key from.
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
 * @param text `className` to parse
 * @returns index where the next invocation of `parseClassNameNext` should resume.
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
 * @param text `className` to parse
 * @param index where the parsing should resume.
 * @returns index where the next invocation of `parseClassNameNext` should resume.
 */
export function parseClassNameNext(text, index) {
    var end = parserState.textEnd;
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
 * @param text `cssText` to parse
 * @returns index where the next invocation of `parseStyleNext` should resume.
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
 * @param text `cssText` to parse
 * @param index where the parsing should resume.
 * @returns index where the next invocation of `parseStyleNext` should resume.
 */
export function parseStyleNext(text, startIndex) {
    var end = parserState.textEnd;
    var index = parserState.key = consumeWhitespace(text, startIndex, end);
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
 * @param text The styling text to parse.
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
 * @param text Text to scan
 * @param startIndex Starting index of character where the scan should start.
 * @param endIndex Ending index of character where the scan should end.
 * @returns Index of next non-whitespace character (May be the same as `start` if no whitespace at
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
 * @param text Text to scan
 * @param startIndex Starting index of character where the scan should start.
 * @param endIndex Ending index of character where the scan should end.
 * @returns Index after last char in class token.
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
 * @param text Text to scan
 * @param startIndex Starting index of character where the scan should start.
 * @param endIndex Ending index of character where the scan should end.
 * @returns Index after last style key character.
 */
export function consumeStyleKey(text, startIndex, endIndex) {
    var ch;
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
 * @param text Text to scan
 * @param startIndex Starting index of character where the scan should start.
 * @param endIndex Ending index of character where the scan should end.
 * @returns Index after separator and surrounding whitespace.
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
 * @param text Text to scan
 * @param startIndex Starting index of character where the scan should start.
 * @param endIndex Ending index of character where the scan should end.
 * @returns Index after last style value character.
 */
export function consumeStyleValue(text, startIndex, endIndex) {
    var ch1 = -1; // 1st previous character
    var ch2 = -1; // 2nd previous character
    var ch3 = -1; // 3rd previous character
    var i = startIndex;
    var lastChIndex = i;
    while (i < endIndex) {
        var ch = text.charCodeAt(i++);
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
 * @param text Text to scan
 * @param quoteCharCode CharCode of either `"` or `'` quote or `)` for `url(...)`.
 * @param startIndex Starting index of character where the scan should start.
 * @param endIndex Ending index of character where the scan should end.
 * @returns Index after quoted characters.
 */
export function consumeQuotedText(text, quoteCharCode, startIndex, endIndex) {
    var ch1 = -1; // 1st previous character
    var index = startIndex;
    while (index < endIndex) {
        var ch = text.charCodeAt(index++);
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
function malformedStyleError(text, expecting, index) {
    ngDevMode && assertEqual(typeof text === 'string', true, 'String expected here');
    throw throwError("Malformed style at location " + index + " in string '" + text.substring(0, index) + '[>>' +
        text.substring(index, index + 1) + '<<]' + text.substr(index + 1) +
        ("'. Expecting '" + expecting + "'."));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGluZ19wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3N0eWxpbmcvc3R5bGluZ19wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQWtDMUQsMEZBQTBGO0FBQzFGLElBQU0sV0FBVyxHQUFnQjtJQUMvQixPQUFPLEVBQUUsQ0FBQztJQUNWLEdBQUcsRUFBRSxDQUFDO0lBQ04sTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsQ0FBQztJQUNSLFFBQVEsRUFBRSxDQUFDO0NBQ1osQ0FBQztBQUVGOzs7R0FHRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZO0lBQzNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVk7SUFDN0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQVk7SUFDekMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBWSxF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dkIsT0FBTyxLQUFLLEdBQUcsUUFBUSxFQUFFO1FBQ3ZCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLEVBQUUsSUFBSSxhQUFhLElBQUksR0FBRyx3QkFBd0IsRUFBRTtZQUN0RCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxFQUFFLHVCQUF1QixJQUFJLEdBQUcsd0JBQXdCLEVBQUU7WUFDNUQscUZBQXFGO1lBQ3JGLGtFQUFrRTtZQUNsRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDVjtLQUNGO0lBQ0QsTUFBTSxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxLQUFhO0lBQ3pFLFNBQVMsSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sVUFBVSxDQUNaLGlDQUErQixLQUFLLGlCQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSztRQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNqRSxtQkFBaUIsU0FBUyxPQUFJLENBQUEsQ0FBQyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7YXNzZXJ0RXF1YWwsIHRocm93RXJyb3J9IGZyb20gJy4uLy4uL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Q2hhckNvZGV9IGZyb20gJy4uLy4uL3V0aWwvY2hhcl9jb2RlJztcblxuLyoqXG4gKiBTdG9yZXMgdGhlIGxvY2F0aW9ucyBvZiBrZXkvdmFsdWUgaW5kZXhlcyB3aGlsZSBwYXJzaW5nIHN0eWxpbmcuXG4gKlxuICogSW4gY2FzZSBvZiBgY3NzVGV4dGAgcGFyc2luZyB0aGUgaW5kZXhlcyBhcmUgbGlrZSBzbzpcbiAqIGBgYFxuICogICBcImtleTE6IHZhbHVlMTsga2V5MjogdmFsdWUyOyBrZXkzOiB2YWx1ZTNcIlxuICogICAgICAgICAgICAgICAgICBeICAgXiBeICAgICBeICAgICAgICAgICAgIF5cbiAqICAgICAgICAgICAgICAgICAgfCAgIHwgfCAgICAgfCAgICAgICAgICAgICArLS0gdGV4dEVuZFxuICogICAgICAgICAgICAgICAgICB8ICAgfCB8ICAgICArLS0tLS0tLS0tLS0tLS0tLSB2YWx1ZUVuZFxuICogICAgICAgICAgICAgICAgICB8ICAgfCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YWx1ZVxuICogICAgICAgICAgICAgICAgICB8ICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBrZXlFbmRcbiAqICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0ga2V5XG4gKiBgYGBcbiAqXG4gKiBJbiBjYXNlIG9mIGBjbGFzc05hbWVgIHBhcnNpbmcgdGhlIGluZGV4ZXMgYXJlIGxpa2Ugc286XG4gKiBgYGBcbiAqICAgXCJrZXkxIGtleTIga2V5M1wiXG4gKiAgICAgICAgIF4gICBeICAgIF5cbiAqICAgICAgICAgfCAgIHwgICAgKy0tIHRleHRFbmRcbiAqICAgICAgICAgfCAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0ga2V5RW5kXG4gKiAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGtleVxuICogYGBgXG4gKiBOT1RFOiBgdmFsdWVgIGFuZCBgdmFsdWVFbmRgIGFyZSB1c2VkIG9ubHkgZm9yIHN0eWxlcywgbm90IGNsYXNzZXMuXG4gKi9cbmludGVyZmFjZSBQYXJzZXJTdGF0ZSB7XG4gIHRleHRFbmQ6IG51bWJlcjtcbiAga2V5OiBudW1iZXI7XG4gIGtleUVuZDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICB2YWx1ZUVuZDogbnVtYmVyO1xufVxuLy8gR2xvYmFsIHN0YXRlIG9mIHRoZSBwYXJzZXIuIChUaGlzIG1ha2VzIHBhcnNlciBub24tcmVlbnRyYW50LCBidXQgdGhhdCBpcyBub3QgYW4gaXNzdWUpXG5jb25zdCBwYXJzZXJTdGF0ZTogUGFyc2VyU3RhdGUgPSB7XG4gIHRleHRFbmQ6IDAsXG4gIGtleTogMCxcbiAga2V5RW5kOiAwLFxuICB2YWx1ZTogMCxcbiAgdmFsdWVFbmQ6IDAsXG59O1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgbGFzdCBwYXJzZWQgYGtleWAgb2Ygc3R5bGUuXG4gKiBAcGFyYW0gdGV4dCB0aGUgdGV4dCB0byBzdWJzdHJpbmcgdGhlIGtleSBmcm9tLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdFBhcnNlZEtleSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dC5zdWJzdHJpbmcocGFyc2VyU3RhdGUua2V5LCBwYXJzZXJTdGF0ZS5rZXlFbmQpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgbGFzdCBwYXJzZWQgYHZhbHVlYCBvZiBzdHlsZS5cbiAqIEBwYXJhbSB0ZXh0IHRoZSB0ZXh0IHRvIHN1YnN0cmluZyB0aGUga2V5IGZyb20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0UGFyc2VkVmFsdWUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHBhcnNlclN0YXRlLnZhbHVlLCBwYXJzZXJTdGF0ZS52YWx1ZUVuZCk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYGNsYXNzTmFtZWAgc3RyaW5nIGZvciBwYXJzaW5nIGFuZCBwYXJzZXMgdGhlIGZpcnN0IHRva2VuLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGlzIGZvcm1hdDpcbiAqIGBgYFxuICogZm9yIChsZXQgaSA9IHBhcnNlQ2xhc3NOYW1lKHRleHQpOyBpID49IDA7IGkgPSBwYXJzZUNsYXNzTmFtZU5leHQodGV4dCwgaSkpIHtcbiAqICAgY29uc3Qga2V5ID0gZ2V0TGFzdFBhcnNlZEtleSgpO1xuICogICAuLi5cbiAqIH1cbiAqIGBgYFxuICogQHBhcmFtIHRleHQgYGNsYXNzTmFtZWAgdG8gcGFyc2VcbiAqIEByZXR1cm5zIGluZGV4IHdoZXJlIHRoZSBuZXh0IGludm9jYXRpb24gb2YgYHBhcnNlQ2xhc3NOYW1lTmV4dGAgc2hvdWxkIHJlc3VtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NOYW1lKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gIHJlc2V0UGFyc2VyU3RhdGUodGV4dCk7XG4gIHJldHVybiBwYXJzZUNsYXNzTmFtZU5leHQodGV4dCwgY29uc3VtZVdoaXRlc3BhY2UodGV4dCwgMCwgcGFyc2VyU3RhdGUudGV4dEVuZCkpO1xufVxuXG4vKipcbiAqIFBhcnNlcyBuZXh0IGBjbGFzc05hbWVgIHRva2VuLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGlzIGZvcm1hdDpcbiAqIGBgYFxuICogZm9yIChsZXQgaSA9IHBhcnNlQ2xhc3NOYW1lKHRleHQpOyBpID49IDA7IGkgPSBwYXJzZUNsYXNzTmFtZU5leHQodGV4dCwgaSkpIHtcbiAqICAgY29uc3Qga2V5ID0gZ2V0TGFzdFBhcnNlZEtleSgpO1xuICogICAuLi5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB0ZXh0IGBjbGFzc05hbWVgIHRvIHBhcnNlXG4gKiBAcGFyYW0gaW5kZXggd2hlcmUgdGhlIHBhcnNpbmcgc2hvdWxkIHJlc3VtZS5cbiAqIEByZXR1cm5zIGluZGV4IHdoZXJlIHRoZSBuZXh0IGludm9jYXRpb24gb2YgYHBhcnNlQ2xhc3NOYW1lTmV4dGAgc2hvdWxkIHJlc3VtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ2xhc3NOYW1lTmV4dCh0ZXh0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBlbmQgPSBwYXJzZXJTdGF0ZS50ZXh0RW5kO1xuICBpZiAoZW5kID09PSBpbmRleCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpbmRleCA9IHBhcnNlclN0YXRlLmtleUVuZCA9IGNvbnN1bWVDbGFzc1Rva2VuKHRleHQsIHBhcnNlclN0YXRlLmtleSA9IGluZGV4LCBlbmQpO1xuICByZXR1cm4gY29uc3VtZVdoaXRlc3BhY2UodGV4dCwgaW5kZXgsIGVuZCk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYGNzc1RleHRgIHN0cmluZyBmb3IgcGFyc2luZyBhbmQgcGFyc2VzIHRoZSBmaXJzdCBrZXkvdmFsdWVzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGlzIGZvcm1hdDpcbiAqIGBgYFxuICogZm9yIChsZXQgaSA9IHBhcnNlU3R5bGUodGV4dCk7IGkgPj0gMDsgaSA9IHBhcnNlU3R5bGVOZXh0KHRleHQsIGkpKSkge1xuICogICBjb25zdCBrZXkgPSBnZXRMYXN0UGFyc2VkS2V5KCk7XG4gKiAgIGNvbnN0IHZhbHVlID0gZ2V0TGFzdFBhcnNlZFZhbHVlKCk7XG4gKiAgIC4uLlxuICogfVxuICogYGBgXG4gKiBAcGFyYW0gdGV4dCBgY3NzVGV4dGAgdG8gcGFyc2VcbiAqIEByZXR1cm5zIGluZGV4IHdoZXJlIHRoZSBuZXh0IGludm9jYXRpb24gb2YgYHBhcnNlU3R5bGVOZXh0YCBzaG91bGQgcmVzdW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdHlsZSh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXNldFBhcnNlclN0YXRlKHRleHQpO1xuICByZXR1cm4gcGFyc2VTdHlsZU5leHQodGV4dCwgY29uc3VtZVdoaXRlc3BhY2UodGV4dCwgMCwgcGFyc2VyU3RhdGUudGV4dEVuZCkpO1xufVxuXG4vKipcbiAqIFBhcnNlcyB0aGUgbmV4dCBgY3NzVGV4dGAga2V5L3ZhbHVlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgaW4gdGhpcyBmb3JtYXQ6XG4gKiBgYGBcbiAqIGZvciAobGV0IGkgPSBwYXJzZVN0eWxlKHRleHQpOyBpID49IDA7IGkgPSBwYXJzZVN0eWxlTmV4dCh0ZXh0LCBpKSkpIHtcbiAqICAgY29uc3Qga2V5ID0gZ2V0TGFzdFBhcnNlZEtleSgpO1xuICogICBjb25zdCB2YWx1ZSA9IGdldExhc3RQYXJzZWRWYWx1ZSgpO1xuICogICAuLi5cbiAqIH1cbiAqXG4gKiBAcGFyYW0gdGV4dCBgY3NzVGV4dGAgdG8gcGFyc2VcbiAqIEBwYXJhbSBpbmRleCB3aGVyZSB0aGUgcGFyc2luZyBzaG91bGQgcmVzdW1lLlxuICogQHJldHVybnMgaW5kZXggd2hlcmUgdGhlIG5leHQgaW52b2NhdGlvbiBvZiBgcGFyc2VTdHlsZU5leHRgIHNob3VsZCByZXN1bWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0eWxlTmV4dCh0ZXh0OiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGVuZCA9IHBhcnNlclN0YXRlLnRleHRFbmQ7XG4gIGxldCBpbmRleCA9IHBhcnNlclN0YXRlLmtleSA9IGNvbnN1bWVXaGl0ZXNwYWNlKHRleHQsIHN0YXJ0SW5kZXgsIGVuZCk7XG4gIGlmIChlbmQgPT09IGluZGV4KSB7XG4gICAgLy8gd2UgcmVhY2hlZCBhbiBlbmQgc28ganVzdCBxdWl0XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGluZGV4ID0gcGFyc2VyU3RhdGUua2V5RW5kID0gY29uc3VtZVN0eWxlS2V5KHRleHQsIGluZGV4LCBlbmQpO1xuICBpbmRleCA9IGNvbnN1bWVTZXBhcmF0b3IodGV4dCwgaW5kZXgsIGVuZCwgQ2hhckNvZGUuQ09MT04pO1xuICBpbmRleCA9IHBhcnNlclN0YXRlLnZhbHVlID0gY29uc3VtZVdoaXRlc3BhY2UodGV4dCwgaW5kZXgsIGVuZCk7XG4gIGluZGV4ID0gcGFyc2VyU3RhdGUudmFsdWVFbmQgPSBjb25zdW1lU3R5bGVWYWx1ZSh0ZXh0LCBpbmRleCwgZW5kKTtcbiAgcmV0dXJuIGNvbnN1bWVTZXBhcmF0b3IodGV4dCwgaW5kZXgsIGVuZCwgQ2hhckNvZGUuU0VNSV9DT0xPTik7XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIGdsb2JhbCBzdGF0ZSBvZiB0aGUgc3R5bGluZyBwYXJzZXIuXG4gKiBAcGFyYW0gdGV4dCBUaGUgc3R5bGluZyB0ZXh0IHRvIHBhcnNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQYXJzZXJTdGF0ZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgcGFyc2VyU3RhdGUua2V5ID0gMDtcbiAgcGFyc2VyU3RhdGUua2V5RW5kID0gMDtcbiAgcGFyc2VyU3RhdGUudmFsdWUgPSAwO1xuICBwYXJzZXJTdGF0ZS52YWx1ZUVuZCA9IDA7XG4gIHBhcnNlclN0YXRlLnRleHRFbmQgPSB0ZXh0Lmxlbmd0aDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGluZGV4IG9mIG5leHQgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICpcbiAqIEBwYXJhbSB0ZXh0IFRleHQgdG8gc2NhblxuICogQHBhcmFtIHN0YXJ0SW5kZXggU3RhcnRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBzdGFydC5cbiAqIEBwYXJhbSBlbmRJbmRleCBFbmRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBlbmQuXG4gKiBAcmV0dXJucyBJbmRleCBvZiBuZXh0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciAoTWF5IGJlIHRoZSBzYW1lIGFzIGBzdGFydGAgaWYgbm8gd2hpdGVzcGFjZSBhdFxuICogICAgICAgICAgdGhhdCBsb2NhdGlvbi4pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lV2hpdGVzcGFjZSh0ZXh0OiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIHdoaWxlIChzdGFydEluZGV4IDwgZW5kSW5kZXggJiYgdGV4dC5jaGFyQ29kZUF0KHN0YXJ0SW5kZXgpIDw9IENoYXJDb2RlLlNQQUNFKSB7XG4gICAgc3RhcnRJbmRleCsrO1xuICB9XG4gIHJldHVybiBzdGFydEluZGV4O1xufVxuXG4vKipcbiAqIFJldHVybnMgaW5kZXggb2YgbGFzdCBjaGFyIGluIGNsYXNzIHRva2VuLlxuICpcbiAqIEBwYXJhbSB0ZXh0IFRleHQgdG8gc2NhblxuICogQHBhcmFtIHN0YXJ0SW5kZXggU3RhcnRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBzdGFydC5cbiAqIEBwYXJhbSBlbmRJbmRleCBFbmRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBlbmQuXG4gKiBAcmV0dXJucyBJbmRleCBhZnRlciBsYXN0IGNoYXIgaW4gY2xhc3MgdG9rZW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lQ2xhc3NUb2tlbih0ZXh0OiBzdHJpbmcsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIHdoaWxlIChzdGFydEluZGV4IDwgZW5kSW5kZXggJiYgdGV4dC5jaGFyQ29kZUF0KHN0YXJ0SW5kZXgpID4gQ2hhckNvZGUuU1BBQ0UpIHtcbiAgICBzdGFydEluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0SW5kZXg7XG59XG5cbi8qKlxuICogQ29uc3VtZXMgYWxsIG9mIHRoZSBjaGFyYWN0ZXJzIGJlbG9uZ2luZyB0byBzdHlsZSBrZXkgYW5kIHRva2VuLlxuICpcbiAqIEBwYXJhbSB0ZXh0IFRleHQgdG8gc2NhblxuICogQHBhcmFtIHN0YXJ0SW5kZXggU3RhcnRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBzdGFydC5cbiAqIEBwYXJhbSBlbmRJbmRleCBFbmRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBlbmQuXG4gKiBAcmV0dXJucyBJbmRleCBhZnRlciBsYXN0IHN0eWxlIGtleSBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lU3R5bGVLZXkodGV4dDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgY2g6IG51bWJlcjtcbiAgd2hpbGUgKHN0YXJ0SW5kZXggPCBlbmRJbmRleCAmJlxuICAgICAgICAgKChjaCA9IHRleHQuY2hhckNvZGVBdChzdGFydEluZGV4KSkgPT09IENoYXJDb2RlLkRBU0ggfHwgY2ggPT09IENoYXJDb2RlLlVOREVSU0NPUkUgfHxcbiAgICAgICAgICAoKGNoICYgQ2hhckNvZGUuVVBQRVJfQ0FTRSkgPj0gQ2hhckNvZGUuQSAmJiAoY2ggJiBDaGFyQ29kZS5VUFBFUl9DQVNFKSA8PSBDaGFyQ29kZS5aKSkpIHtcbiAgICBzdGFydEluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0SW5kZXg7XG59XG5cbi8qKlxuICogQ29uc3VtZXMgYWxsIHdoaXRlc3BhY2UgYW5kIHRoZSBzZXBhcmF0b3IgYDpgIGFmdGVyIHRoZSBzdHlsZSBrZXkuXG4gKlxuICogQHBhcmFtIHRleHQgVGV4dCB0byBzY2FuXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBTdGFydGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGVuZEluZGV4IEVuZGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIGVuZC5cbiAqIEByZXR1cm5zIEluZGV4IGFmdGVyIHNlcGFyYXRvciBhbmQgc3Vycm91bmRpbmcgd2hpdGVzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bWVTZXBhcmF0b3IoXG4gICAgdGV4dDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIsIHNlcGFyYXRvcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3RhcnRJbmRleCA9IGNvbnN1bWVXaGl0ZXNwYWNlKHRleHQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgaWYgKHN0YXJ0SW5kZXggPCBlbmRJbmRleCkge1xuICAgIGlmIChuZ0Rldk1vZGUgJiYgdGV4dC5jaGFyQ29kZUF0KHN0YXJ0SW5kZXgpICE9PSBzZXBhcmF0b3IpIHtcbiAgICAgIG1hbGZvcm1lZFN0eWxlRXJyb3IodGV4dCwgU3RyaW5nLmZyb21DaGFyQ29kZShzZXBhcmF0b3IpLCBzdGFydEluZGV4KTtcbiAgICB9XG4gICAgc3RhcnRJbmRleCsrO1xuICB9XG4gIHJldHVybiBzdGFydEluZGV4O1xufVxuXG5cbi8qKlxuICogQ29uc3VtZXMgc3R5bGUgdmFsdWUgaG9ub3JpbmcgYHVybCgpYCBhbmQgYFwiXCJgIHRleHQuXG4gKlxuICogQHBhcmFtIHRleHQgVGV4dCB0byBzY2FuXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBTdGFydGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIHN0YXJ0LlxuICogQHBhcmFtIGVuZEluZGV4IEVuZGluZyBpbmRleCBvZiBjaGFyYWN0ZXIgd2hlcmUgdGhlIHNjYW4gc2hvdWxkIGVuZC5cbiAqIEByZXR1cm5zIEluZGV4IGFmdGVyIGxhc3Qgc3R5bGUgdmFsdWUgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3VtZVN0eWxlVmFsdWUodGV4dDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgY2gxID0gLTE7ICAvLyAxc3QgcHJldmlvdXMgY2hhcmFjdGVyXG4gIGxldCBjaDIgPSAtMTsgIC8vIDJuZCBwcmV2aW91cyBjaGFyYWN0ZXJcbiAgbGV0IGNoMyA9IC0xOyAgLy8gM3JkIHByZXZpb3VzIGNoYXJhY3RlclxuICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gIGxldCBsYXN0Q2hJbmRleCA9IGk7XG4gIHdoaWxlIChpIDwgZW5kSW5kZXgpIHtcbiAgICBjb25zdCBjaDogbnVtYmVyID0gdGV4dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgaWYgKGNoID09PSBDaGFyQ29kZS5TRU1JX0NPTE9OKSB7XG4gICAgICByZXR1cm4gbGFzdENoSW5kZXg7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gQ2hhckNvZGUuRE9VQkxFX1FVT1RFIHx8IGNoID09PSBDaGFyQ29kZS5TSU5HTEVfUVVPVEUpIHtcbiAgICAgIGxhc3RDaEluZGV4ID0gaSA9IGNvbnN1bWVRdW90ZWRUZXh0KHRleHQsIGNoLCBpLCBlbmRJbmRleCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgc3RhcnRJbmRleCA9PT1cbiAgICAgICAgICAgIGkgLSA0ICYmICAvLyBXZSBoYXZlIHNlZW4gb25seSA0IGNoYXJhY3RlcnMgc28gZmFyIFwiVVJMKFwiIChJZ25vcmUgXCJmb29fVVJMKClcIilcbiAgICAgICAgY2gzID09PSBDaGFyQ29kZS5VICYmXG4gICAgICAgIGNoMiA9PT0gQ2hhckNvZGUuUiAmJiBjaDEgPT09IENoYXJDb2RlLkwgJiYgY2ggPT09IENoYXJDb2RlLk9QRU5fUEFSRU4pIHtcbiAgICAgIGxhc3RDaEluZGV4ID0gaSA9IGNvbnN1bWVRdW90ZWRUZXh0KHRleHQsIENoYXJDb2RlLkNMT1NFX1BBUkVOLCBpLCBlbmRJbmRleCk7XG4gICAgfSBlbHNlIGlmIChjaCA+IENoYXJDb2RlLlNQQUNFKSB7XG4gICAgICAvLyBpZiB3ZSBoYXZlIGEgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIHRoZW4gY2FwdHVyZSBpdHMgbG9jYXRpb25cbiAgICAgIGxhc3RDaEluZGV4ID0gaTtcbiAgICB9XG4gICAgY2gzID0gY2gyO1xuICAgIGNoMiA9IGNoMTtcbiAgICBjaDEgPSBjaCAmIENoYXJDb2RlLlVQUEVSX0NBU0U7XG4gIH1cbiAgcmV0dXJuIGxhc3RDaEluZGV4O1xufVxuXG4vKipcbiAqIENvbnN1bWVzIGFsbCBvZiB0aGUgcXVvdGVkIGNoYXJhY3RlcnMuXG4gKlxuICogQHBhcmFtIHRleHQgVGV4dCB0byBzY2FuXG4gKiBAcGFyYW0gcXVvdGVDaGFyQ29kZSBDaGFyQ29kZSBvZiBlaXRoZXIgYFwiYCBvciBgJ2AgcXVvdGUgb3IgYClgIGZvciBgdXJsKC4uLilgLlxuICogQHBhcmFtIHN0YXJ0SW5kZXggU3RhcnRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBzdGFydC5cbiAqIEBwYXJhbSBlbmRJbmRleCBFbmRpbmcgaW5kZXggb2YgY2hhcmFjdGVyIHdoZXJlIHRoZSBzY2FuIHNob3VsZCBlbmQuXG4gKiBAcmV0dXJucyBJbmRleCBhZnRlciBxdW90ZWQgY2hhcmFjdGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bWVRdW90ZWRUZXh0KFxuICAgIHRleHQ6IHN0cmluZywgcXVvdGVDaGFyQ29kZTogbnVtYmVyLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgY2gxID0gLTE7ICAvLyAxc3QgcHJldmlvdXMgY2hhcmFjdGVyXG4gIGxldCBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gIHdoaWxlIChpbmRleCA8IGVuZEluZGV4KSB7XG4gICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJDb2RlQXQoaW5kZXgrKyk7XG4gICAgaWYgKGNoID09IHF1b3RlQ2hhckNvZGUgJiYgY2gxICE9PSBDaGFyQ29kZS5CQUNLX1NMQVNIKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIGlmIChjaCA9PSBDaGFyQ29kZS5CQUNLX1NMQVNIICYmIGNoMSA9PT0gQ2hhckNvZGUuQkFDS19TTEFTSCkge1xuICAgICAgLy8gdHdvIGJhY2sgc2xhc2hlcyBjYW5jZWwgZWFjaCBvdGhlciBvdXQuIEZvciBleGFtcGxlIGBcIlxcXFxcImAgc2hvdWxkIHByb3Blcmx5IGVuZCB0aGVcbiAgICAgIC8vIHF1b3RhdGlvbi4gKEl0IHNob3VsZCBub3QgYXNzdW1lIHRoYXQgdGhlIGxhc3QgYFwiYCBpcyBlc2NhcGVkLilcbiAgICAgIGNoMSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoMSA9IGNoO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZ0Rldk1vZGUgPyBtYWxmb3JtZWRTdHlsZUVycm9yKHRleHQsIFN0cmluZy5mcm9tQ2hhckNvZGUocXVvdGVDaGFyQ29kZSksIGVuZEluZGV4KSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpO1xufVxuXG5mdW5jdGlvbiBtYWxmb3JtZWRTdHlsZUVycm9yKHRleHQ6IHN0cmluZywgZXhwZWN0aW5nOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBuZXZlciB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRFcXVhbCh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycsIHRydWUsICdTdHJpbmcgZXhwZWN0ZWQgaGVyZScpO1xuICB0aHJvdyB0aHJvd0Vycm9yKFxuICAgICAgYE1hbGZvcm1lZCBzdHlsZSBhdCBsb2NhdGlvbiAke2luZGV4fSBpbiBzdHJpbmcgJ2AgKyB0ZXh0LnN1YnN0cmluZygwLCBpbmRleCkgKyAnWz4+JyArXG4gICAgICB0ZXh0LnN1YnN0cmluZyhpbmRleCwgaW5kZXggKyAxKSArICc8PF0nICsgdGV4dC5zdWJzdHIoaW5kZXggKyAxKSArXG4gICAgICBgJy4gRXhwZWN0aW5nICcke2V4cGVjdGluZ30nLmApO1xufVxuIl19