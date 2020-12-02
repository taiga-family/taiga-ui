/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getLocaleNumberFormat, getLocaleNumberSymbol, getNumberOfCurrencyDigits, NumberFormatStyle, NumberSymbol } from './locale_data_api';
export var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
var MAX_DIGITS = 22;
var DECIMAL_SEP = '.';
var ZERO_CHAR = '0';
var PATTERN_SEP = ';';
var GROUP_SEP = ',';
var DIGIT_CHAR = '#';
var CURRENCY_CHAR = '¤';
var PERCENT_CHAR = '%';
/**
 * Transforms a number to a locale string based on a style and a format.
 */
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent) {
    if (isPercent === void 0) { isPercent = false; }
    var formattedText = '';
    var isZero = false;
    if (!isFinite(value)) {
        formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
    }
    else {
        var parsedNumber = parseNumber(value);
        if (isPercent) {
            parsedNumber = toPercent(parsedNumber);
        }
        var minInt = pattern.minInt;
        var minFraction = pattern.minFrac;
        var maxFraction = pattern.maxFrac;
        if (digitsInfo) {
            var parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                throw new Error(digitsInfo + " is not a valid digit info");
            }
            var minIntPart = parts[1];
            var minFractionPart = parts[3];
            var maxFractionPart = parts[5];
            if (minIntPart != null) {
                minInt = parseIntAutoRadix(minIntPart);
            }
            if (minFractionPart != null) {
                minFraction = parseIntAutoRadix(minFractionPart);
            }
            if (maxFractionPart != null) {
                maxFraction = parseIntAutoRadix(maxFractionPart);
            }
            else if (minFractionPart != null && minFraction > maxFraction) {
                maxFraction = minFraction;
            }
        }
        roundNumber(parsedNumber, minFraction, maxFraction);
        var digits = parsedNumber.digits;
        var integerLen = parsedNumber.integerLen;
        var exponent = parsedNumber.exponent;
        var decimals = [];
        isZero = digits.every(function (d) { return !d; });
        // pad zeros for small numbers
        for (; integerLen < minInt; integerLen++) {
            digits.unshift(0);
        }
        // pad zeros for small numbers
        for (; integerLen < 0; integerLen++) {
            digits.unshift(0);
        }
        // extract decimals digits
        if (integerLen > 0) {
            decimals = digits.splice(integerLen, digits.length);
        }
        else {
            decimals = digits;
            digits = [0];
        }
        // format the integer digits with grouping separators
        var groups = [];
        if (digits.length >= pattern.lgSize) {
            groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
        }
        while (digits.length > pattern.gSize) {
            groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
        }
        if (digits.length) {
            groups.unshift(digits.join(''));
        }
        formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
        // append the decimal digits
        if (decimals.length) {
            formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join('');
        }
        if (exponent) {
            formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + '+' + exponent;
        }
    }
    if (value < 0 && !isZero) {
        formattedText = pattern.negPre + formattedText + pattern.negSuf;
    }
    else {
        formattedText = pattern.posPre + formattedText + pattern.posSuf;
    }
    return formattedText;
}
/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as currency using locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param currency A string containing the currency symbol or its name,
 * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
 * of the function.
 * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 * currency code, such as `USD` for the US dollar and `EUR` for the euro.
 * Used to determine the number of digits in the decimal part.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted currency value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
    var format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
    var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
    pattern.maxFrac = pattern.minFrac;
    var res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
    return res
        .replace(CURRENCY_CHAR, currency)
        // if we have 2 time the currency character, the second one is ignored
        .replace(CURRENCY_CHAR, '')
        // If there is a spacing between currency character and the value and
        // the currency character is supressed by passing an empty string, the
        // spacing character would remain as part of the string. Then we
        // should remove it.
        .trim();
}
/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as a percentage according to locale rules.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted percentage value.
 *
 * @see `formatNumber()`
 * @see `DecimalPipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 *
 */
export function formatPercent(value, locale, digitsInfo) {
    var format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
    var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    var res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
    return res.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a number as text, with group sizing, separator, and other
 * parameters based on the locale.
 *
 * @param value The number to format.
 * @param locale A locale code for the locale format rules to use.
 * @param digitInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
 *
 * @returns The formatted text string.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function formatNumber(value, locale, digitsInfo) {
    var format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
    var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
function parseNumberFormat(format, minusSign) {
    if (minusSign === void 0) { minusSign = '-'; }
    var p = {
        minInt: 1,
        minFrac: 0,
        maxFrac: 0,
        posPre: '',
        posSuf: '',
        negPre: '',
        negSuf: '',
        gSize: 0,
        lgSize: 0
    };
    var patternParts = format.split(PATTERN_SEP);
    var positive = patternParts[0];
    var negative = patternParts[1];
    var positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ?
        positive.split(DECIMAL_SEP) :
        [
            positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1),
            positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)
        ], integer = positiveParts[0], fraction = positiveParts[1] || '';
    p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR));
    for (var i = 0; i < fraction.length; i++) {
        var ch = fraction.charAt(i);
        if (ch === ZERO_CHAR) {
            p.minFrac = p.maxFrac = i + 1;
        }
        else if (ch === DIGIT_CHAR) {
            p.maxFrac = i + 1;
        }
        else {
            p.posSuf += ch;
        }
    }
    var groups = integer.split(GROUP_SEP);
    p.gSize = groups[1] ? groups[1].length : 0;
    p.lgSize = (groups[2] || groups[1]) ? (groups[2] || groups[1]).length : 0;
    if (negative) {
        var trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
        p.negPre = negative.substr(0, pos).replace(/'/g, '');
        p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
    }
    else {
        p.negPre = minusSign + p.posPre;
        p.negSuf = p.posSuf;
    }
    return p;
}
// Transforms a parsed number into a percentage by multiplying it by 100
function toPercent(parsedNumber) {
    // if the number is 0, don't do anything
    if (parsedNumber.digits[0] === 0) {
        return parsedNumber;
    }
    // Getting the current number of decimals
    var fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
    if (parsedNumber.exponent) {
        parsedNumber.exponent += 2;
    }
    else {
        if (fractionLen === 0) {
            parsedNumber.digits.push(0, 0);
        }
        else if (fractionLen === 1) {
            parsedNumber.digits.push(0);
        }
        parsedNumber.integerLen += 2;
    }
    return parsedNumber;
}
/**
 * Parses a number.
 * Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
 */
function parseNumber(num) {
    var numStr = Math.abs(num) + '';
    var exponent = 0, digits, integerLen;
    var i, j, zeros;
    // Decimal point?
    if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
        numStr = numStr.replace(DECIMAL_SEP, '');
    }
    // Exponential form?
    if ((i = numStr.search(/e/i)) > 0) {
        // Work out the exponent.
        if (integerLen < 0)
            integerLen = i;
        integerLen += +numStr.slice(i + 1);
        numStr = numStr.substring(0, i);
    }
    else if (integerLen < 0) {
        // There was no decimal point or exponent so it is an integer.
        integerLen = numStr.length;
    }
    // Count the number of leading zeros.
    for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) { /* empty */
    }
    if (i === (zeros = numStr.length)) {
        // The digits are all zero.
        digits = [0];
        integerLen = 1;
    }
    else {
        // Count the number of trailing zeros
        zeros--;
        while (numStr.charAt(zeros) === ZERO_CHAR)
            zeros--;
        // Trailing zeros are insignificant so ignore them
        integerLen -= i;
        digits = [];
        // Convert string to array of digits without leading/trailing zeros.
        for (j = 0; i <= zeros; i++, j++) {
            digits[j] = Number(numStr.charAt(i));
        }
    }
    // If the number overflows the maximum allowed digits then use an exponent.
    if (integerLen > MAX_DIGITS) {
        digits = digits.splice(0, MAX_DIGITS - 1);
        exponent = integerLen - 1;
        integerLen = 1;
    }
    return { digits: digits, exponent: exponent, integerLen: integerLen };
}
/**
 * Round the parsed number to the specified number of decimal places
 * This function changes the parsedNumber in-place
 */
function roundNumber(parsedNumber, minFrac, maxFrac) {
    if (minFrac > maxFrac) {
        throw new Error("The minimum number of digits after fraction (" + minFrac + ") is higher than the maximum (" + maxFrac + ").");
    }
    var digits = parsedNumber.digits;
    var fractionLen = digits.length - parsedNumber.integerLen;
    var fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
    // The index of the digit to where rounding is to occur
    var roundAt = fractionSize + parsedNumber.integerLen;
    var digit = digits[roundAt];
    if (roundAt > 0) {
        // Drop fractional digits beyond `roundAt`
        digits.splice(Math.max(parsedNumber.integerLen, roundAt));
        // Set non-fractional digits beyond `roundAt` to 0
        for (var j = roundAt; j < digits.length; j++) {
            digits[j] = 0;
        }
    }
    else {
        // We rounded to zero so reset the parsedNumber
        fractionLen = Math.max(0, fractionLen);
        parsedNumber.integerLen = 1;
        digits.length = Math.max(1, roundAt = fractionSize + 1);
        digits[0] = 0;
        for (var i = 1; i < roundAt; i++)
            digits[i] = 0;
    }
    if (digit >= 5) {
        if (roundAt - 1 < 0) {
            for (var k = 0; k > roundAt; k--) {
                digits.unshift(0);
                parsedNumber.integerLen++;
            }
            digits.unshift(1);
            parsedNumber.integerLen++;
        }
        else {
            digits[roundAt - 1]++;
        }
    }
    // Pad out with zeros to get the required fraction length
    for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
        digits.push(0);
    var dropTrailingZeros = fractionSize !== 0;
    // Minimal length = nb of decimals required + current nb of integers
    // Any number besides that is optional and can be removed if it's a trailing 0
    var minLen = minFrac + parsedNumber.integerLen;
    // Do any carrying, e.g. a digit was rounded up to 10
    var carry = digits.reduceRight(function (carry, d, i, digits) {
        d = d + carry;
        digits[i] = d < 10 ? d : d - 10; // d % 10
        if (dropTrailingZeros) {
            // Do not keep meaningless fractional trailing zeros (e.g. 15.52000 --> 15.52)
            if (digits[i] === 0 && i >= minLen) {
                digits.pop();
            }
            else {
                dropTrailingZeros = false;
            }
        }
        return d >= 10 ? 1 : 0; // Math.floor(d / 10);
    }, 0);
    if (carry) {
        digits.unshift(carry);
        parsedNumber.integerLen++;
    }
}
export function parseIntAutoRadix(text) {
    var result = parseInt(text);
    if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0X251bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvaTE4bi9mb3JtYXRfbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUUzSSxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyw2QkFBNkIsQ0FBQztBQUNsRSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUN0QixJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDeEIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUN2QixJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBRXpCOztHQUVHO0FBQ0gsU0FBUywwQkFBMEIsQ0FDL0IsS0FBYSxFQUFFLE9BQTJCLEVBQUUsTUFBYyxFQUFFLFdBQXlCLEVBQ3JGLGFBQTJCLEVBQUUsVUFBbUIsRUFBRSxTQUFpQjtJQUFqQiwwQkFBQSxFQUFBLGlCQUFpQjtJQUNyRSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDdkIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsYUFBYSxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEU7U0FBTTtRQUNMLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxL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Q0FBQyxJQUFZO0lBQzVDLElBQU0sTUFBTSxHQUFXLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ2pFO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRMb2NhbGVOdW1iZXJGb3JtYXQsIGdldExvY2FsZU51bWJlclN5bWJvbCwgZ2V0TnVtYmVyT2ZDdXJyZW5jeURpZ2l0cywgTnVtYmVyRm9ybWF0U3R5bGUsIE51bWJlclN5bWJvbH0gZnJvbSAnLi9sb2NhbGVfZGF0YV9hcGknO1xuXG5leHBvcnQgY29uc3QgTlVNQkVSX0ZPUk1BVF9SRUdFWFAgPSAvXihcXGQrKT9cXC4oKFxcZCspKC0oXFxkKykpPyk/JC87XG5jb25zdCBNQVhfRElHSVRTID0gMjI7XG5jb25zdCBERUNJTUFMX1NFUCA9ICcuJztcbmNvbnN0IFpFUk9fQ0hBUiA9ICcwJztcbmNvbnN0IFBBVFRFUk5fU0VQID0gJzsnO1xuY29uc3QgR1JPVVBfU0VQID0gJywnO1xuY29uc3QgRElHSVRfQ0hBUiA9ICcjJztcbmNvbnN0IENVUlJFTkNZX0NIQVIgPSAnwqQnO1xuY29uc3QgUEVSQ0VOVF9DSEFSID0gJyUnO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBudW1iZXIgdG8gYSBsb2NhbGUgc3RyaW5nIGJhc2VkIG9uIGEgc3R5bGUgYW5kIGEgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBmb3JtYXROdW1iZXJUb0xvY2FsZVN0cmluZyhcbiAgICB2YWx1ZTogbnVtYmVyLCBwYXR0ZXJuOiBQYXJzZWROdW1iZXJGb3JtYXQsIGxvY2FsZTogc3RyaW5nLCBncm91cFN5bWJvbDogTnVtYmVyU3ltYm9sLFxuICAgIGRlY2ltYWxTeW1ib2w6IE51bWJlclN5bWJvbCwgZGlnaXRzSW5mbz86IHN0cmluZywgaXNQZXJjZW50ID0gZmFsc2UpOiBzdHJpbmcge1xuICBsZXQgZm9ybWF0dGVkVGV4dCA9ICcnO1xuICBsZXQgaXNaZXJvID0gZmFsc2U7XG5cbiAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICBmb3JtYXR0ZWRUZXh0ID0gZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLkluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcGFyc2VkTnVtYmVyID0gcGFyc2VOdW1iZXIodmFsdWUpO1xuXG4gICAgaWYgKGlzUGVyY2VudCkge1xuICAgICAgcGFyc2VkTnVtYmVyID0gdG9QZXJjZW50KHBhcnNlZE51bWJlcik7XG4gICAgfVxuXG4gICAgbGV0IG1pbkludCA9IHBhdHRlcm4ubWluSW50O1xuICAgIGxldCBtaW5GcmFjdGlvbiA9IHBhdHRlcm4ubWluRnJhYztcbiAgICBsZXQgbWF4RnJhY3Rpb24gPSBwYXR0ZXJuLm1heEZyYWM7XG5cbiAgICBpZiAoZGlnaXRzSW5mbykge1xuICAgICAgY29uc3QgcGFydHMgPSBkaWdpdHNJbmZvLm1hdGNoKE5VTUJFUl9GT1JNQVRfUkVHRVhQKTtcbiAgICAgIGlmIChwYXJ0cyA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZGlnaXRzSW5mb30gaXMgbm90IGEgdmFsaWQgZGlnaXQgaW5mb2ApO1xuICAgICAgfVxuICAgICAgY29uc3QgbWluSW50UGFydCA9IHBhcnRzWzFdO1xuICAgICAgY29uc3QgbWluRnJhY3Rpb25QYXJ0ID0gcGFydHNbM107XG4gICAgICBjb25zdCBtYXhGcmFjdGlvblBhcnQgPSBwYXJ0c1s1XTtcbiAgICAgIGlmIChtaW5JbnRQYXJ0ICE9IG51bGwpIHtcbiAgICAgICAgbWluSW50ID0gcGFyc2VJbnRBdXRvUmFkaXgobWluSW50UGFydCk7XG4gICAgICB9XG4gICAgICBpZiAobWluRnJhY3Rpb25QYXJ0ICE9IG51bGwpIHtcbiAgICAgICAgbWluRnJhY3Rpb24gPSBwYXJzZUludEF1dG9SYWRpeChtaW5GcmFjdGlvblBhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKG1heEZyYWN0aW9uUGFydCAhPSBudWxsKSB7XG4gICAgICAgIG1heEZyYWN0aW9uID0gcGFyc2VJbnRBdXRvUmFkaXgobWF4RnJhY3Rpb25QYXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAobWluRnJhY3Rpb25QYXJ0ICE9IG51bGwgJiYgbWluRnJhY3Rpb24gPiBtYXhGcmFjdGlvbikge1xuICAgICAgICBtYXhGcmFjdGlvbiA9IG1pbkZyYWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJvdW5kTnVtYmVyKHBhcnNlZE51bWJlciwgbWluRnJhY3Rpb24sIG1heEZyYWN0aW9uKTtcblxuICAgIGxldCBkaWdpdHMgPSBwYXJzZWROdW1iZXIuZGlnaXRzO1xuICAgIGxldCBpbnRlZ2VyTGVuID0gcGFyc2VkTnVtYmVyLmludGVnZXJMZW47XG4gICAgY29uc3QgZXhwb25lbnQgPSBwYXJzZWROdW1iZXIuZXhwb25lbnQ7XG4gICAgbGV0IGRlY2ltYWxzID0gW107XG4gICAgaXNaZXJvID0gZGlnaXRzLmV2ZXJ5KGQgPT4gIWQpO1xuXG4gICAgLy8gcGFkIHplcm9zIGZvciBzbWFsbCBudW1iZXJzXG4gICAgZm9yICg7IGludGVnZXJMZW4gPCBtaW5JbnQ7IGludGVnZXJMZW4rKykge1xuICAgICAgZGlnaXRzLnVuc2hpZnQoMCk7XG4gICAgfVxuXG4gICAgLy8gcGFkIHplcm9zIGZvciBzbWFsbCBudW1iZXJzXG4gICAgZm9yICg7IGludGVnZXJMZW4gPCAwOyBpbnRlZ2VyTGVuKyspIHtcbiAgICAgIGRpZ2l0cy51bnNoaWZ0KDApO1xuICAgIH1cblxuICAgIC8vIGV4dHJhY3QgZGVjaW1hbHMgZGlnaXRzXG4gICAgaWYgKGludGVnZXJMZW4gPiAwKSB7XG4gICAgICBkZWNpbWFscyA9IGRpZ2l0cy5zcGxpY2UoaW50ZWdlckxlbiwgZGlnaXRzLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlY2ltYWxzID0gZGlnaXRzO1xuICAgICAgZGlnaXRzID0gWzBdO1xuICAgIH1cblxuICAgIC8vIGZvcm1hdCB0aGUgaW50ZWdlciBkaWdpdHMgd2l0aCBncm91cGluZyBzZXBhcmF0b3JzXG4gICAgY29uc3QgZ3JvdXBzID0gW107XG4gICAgaWYgKGRpZ2l0cy5sZW5ndGggPj0gcGF0dGVybi5sZ1NpemUpIHtcbiAgICAgIGdyb3Vwcy51bnNoaWZ0KGRpZ2l0cy5zcGxpY2UoLXBhdHRlcm4ubGdTaXplLCBkaWdpdHMubGVuZ3RoKS5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRpZ2l0cy5sZW5ndGggPiBwYXR0ZXJuLmdTaXplKSB7XG4gICAgICBncm91cHMudW5zaGlmdChkaWdpdHMuc3BsaWNlKC1wYXR0ZXJuLmdTaXplLCBkaWdpdHMubGVuZ3RoKS5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgaWYgKGRpZ2l0cy5sZW5ndGgpIHtcbiAgICAgIGdyb3Vwcy51bnNoaWZ0KGRpZ2l0cy5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgZm9ybWF0dGVkVGV4dCA9IGdyb3Vwcy5qb2luKGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIGdyb3VwU3ltYm9sKSk7XG5cbiAgICAvLyBhcHBlbmQgdGhlIGRlY2ltYWwgZGlnaXRzXG4gICAgaWYgKGRlY2ltYWxzLmxlbmd0aCkge1xuICAgICAgZm9ybWF0dGVkVGV4dCArPSBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBkZWNpbWFsU3ltYm9sKSArIGRlY2ltYWxzLmpvaW4oJycpO1xuICAgIH1cblxuICAgIGlmIChleHBvbmVudCkge1xuICAgICAgZm9ybWF0dGVkVGV4dCArPSBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBOdW1iZXJTeW1ib2wuRXhwb25lbnRpYWwpICsgJysnICsgZXhwb25lbnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlIDwgMCAmJiAhaXNaZXJvKSB7XG4gICAgZm9ybWF0dGVkVGV4dCA9IHBhdHRlcm4ubmVnUHJlICsgZm9ybWF0dGVkVGV4dCArIHBhdHRlcm4ubmVnU3VmO1xuICB9IGVsc2Uge1xuICAgIGZvcm1hdHRlZFRleHQgPSBwYXR0ZXJuLnBvc1ByZSArIGZvcm1hdHRlZFRleHQgKyBwYXR0ZXJuLnBvc1N1ZjtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXR0ZWRUZXh0O1xufVxuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEZvcm1hdHMgYSBudW1iZXIgYXMgY3VycmVuY3kgdXNpbmcgbG9jYWxlIHJ1bGVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIGN1cnJlbmN5IEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGN1cnJlbmN5IHN5bWJvbCBvciBpdHMgbmFtZSxcbiAqIHN1Y2ggYXMgXCIkXCIgb3IgXCJDYW5hZGlhbiBEb2xsYXJcIi4gVXNlZCBpbiBvdXRwdXQgc3RyaW5nLCBidXQgZG9lcyBub3QgYWZmZWN0IHRoZSBvcGVyYXRpb25cbiAqIG9mIHRoZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSBjdXJyZW5jeUNvZGUgVGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpXG4gKiBjdXJyZW5jeSBjb2RlLCBzdWNoIGFzIGBVU0RgIGZvciB0aGUgVVMgZG9sbGFyIGFuZCBgRVVSYCBmb3IgdGhlIGV1cm8uXG4gKiBVc2VkIHRvIGRldGVybWluZSB0aGUgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZGVjaW1hbCBwYXJ0LlxuICogQHBhcmFtIGRpZ2l0SW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAqIGB7bWluSW50ZWdlckRpZ2l0c30ue21pbkZyYWN0aW9uRGlnaXRzfS17bWF4RnJhY3Rpb25EaWdpdHN9YC4gU2VlIGBEZWNpbWFsUGlwZWAgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGN1cnJlbmN5IHZhbHVlLlxuICpcbiAqIEBzZWUgYGZvcm1hdE51bWJlcigpYFxuICogQHNlZSBgRGVjaW1hbFBpcGVgXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KFxuICAgIHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBjdXJyZW5jeUNvZGU/OiBzdHJpbmcsXG4gICAgZGlnaXRzSW5mbz86IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGZvcm1hdCA9IGdldExvY2FsZU51bWJlckZvcm1hdChsb2NhbGUsIE51bWJlckZvcm1hdFN0eWxlLkN1cnJlbmN5KTtcbiAgY29uc3QgcGF0dGVybiA9IHBhcnNlTnVtYmVyRm9ybWF0KGZvcm1hdCwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLk1pbnVzU2lnbikpO1xuXG4gIHBhdHRlcm4ubWluRnJhYyA9IGdldE51bWJlck9mQ3VycmVuY3lEaWdpdHMoY3VycmVuY3lDb2RlISk7XG4gIHBhdHRlcm4ubWF4RnJhYyA9IHBhdHRlcm4ubWluRnJhYztcblxuICBjb25zdCByZXMgPSBmb3JtYXROdW1iZXJUb0xvY2FsZVN0cmluZyhcbiAgICAgIHZhbHVlLCBwYXR0ZXJuLCBsb2NhbGUsIE51bWJlclN5bWJvbC5DdXJyZW5jeUdyb3VwLCBOdW1iZXJTeW1ib2wuQ3VycmVuY3lEZWNpbWFsLCBkaWdpdHNJbmZvKTtcbiAgcmV0dXJuIHJlc1xuICAgICAgLnJlcGxhY2UoQ1VSUkVOQ1lfQ0hBUiwgY3VycmVuY3kpXG4gICAgICAvLyBpZiB3ZSBoYXZlIDIgdGltZSB0aGUgY3VycmVuY3kgY2hhcmFjdGVyLCB0aGUgc2Vjb25kIG9uZSBpcyBpZ25vcmVkXG4gICAgICAucmVwbGFjZShDVVJSRU5DWV9DSEFSLCAnJylcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgc3BhY2luZyBiZXR3ZWVuIGN1cnJlbmN5IGNoYXJhY3RlciBhbmQgdGhlIHZhbHVlIGFuZFxuICAgICAgLy8gdGhlIGN1cnJlbmN5IGNoYXJhY3RlciBpcyBzdXByZXNzZWQgYnkgcGFzc2luZyBhbiBlbXB0eSBzdHJpbmcsIHRoZVxuICAgICAgLy8gc3BhY2luZyBjaGFyYWN0ZXIgd291bGQgcmVtYWluIGFzIHBhcnQgb2YgdGhlIHN0cmluZy4gVGhlbiB3ZVxuICAgICAgLy8gc2hvdWxkIHJlbW92ZSBpdC5cbiAgICAgIC50cmltKCk7XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9ybWF0cyBhIG51bWJlciBhcyBhIHBlcmNlbnRhZ2UgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEBwYXJhbSBkaWdpdEluZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmcgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBwZXJjZW50YWdlIHZhbHVlLlxuICpcbiAqIEBzZWUgYGZvcm1hdE51bWJlcigpYFxuICogQHNlZSBgRGVjaW1hbFBpcGVgXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICogQHB1YmxpY0FwaVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBlcmNlbnQodmFsdWU6IG51bWJlciwgbG9jYWxlOiBzdHJpbmcsIGRpZ2l0c0luZm8/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBmb3JtYXQgPSBnZXRMb2NhbGVOdW1iZXJGb3JtYXQobG9jYWxlLCBOdW1iZXJGb3JtYXRTdHlsZS5QZXJjZW50KTtcbiAgY29uc3QgcGF0dGVybiA9IHBhcnNlTnVtYmVyRm9ybWF0KGZvcm1hdCwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLk1pbnVzU2lnbikpO1xuICBjb25zdCByZXMgPSBmb3JtYXROdW1iZXJUb0xvY2FsZVN0cmluZyhcbiAgICAgIHZhbHVlLCBwYXR0ZXJuLCBsb2NhbGUsIE51bWJlclN5bWJvbC5Hcm91cCwgTnVtYmVyU3ltYm9sLkRlY2ltYWwsIGRpZ2l0c0luZm8sIHRydWUpO1xuICByZXR1cm4gcmVzLnJlcGxhY2UoXG4gICAgICBuZXcgUmVnRXhwKFBFUkNFTlRfQ0hBUiwgJ2cnKSwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLlBlcmNlbnRTaWduKSk7XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9ybWF0cyBhIG51bWJlciBhcyB0ZXh0LCB3aXRoIGdyb3VwIHNpemluZywgc2VwYXJhdG9yLCBhbmQgb3RoZXJcbiAqIHBhcmFtZXRlcnMgYmFzZWQgb24gdGhlIGxvY2FsZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBmb3JtYXQuXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEBwYXJhbSBkaWdpdEluZm8gRGVjaW1hbCByZXByZXNlbnRhdGlvbiBvcHRpb25zLCBzcGVjaWZpZWQgYnkgYSBzdHJpbmcgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gKiBge21pbkludGVnZXJEaWdpdHN9LnttaW5GcmFjdGlvbkRpZ2l0c30te21heEZyYWN0aW9uRGlnaXRzfWAuIFNlZSBgRGVjaW1hbFBpcGVgIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCB0ZXh0IHN0cmluZy5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKHZhbHVlOiBudW1iZXIsIGxvY2FsZTogc3RyaW5nLCBkaWdpdHNJbmZvPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZm9ybWF0ID0gZ2V0TG9jYWxlTnVtYmVyRm9ybWF0KGxvY2FsZSwgTnVtYmVyRm9ybWF0U3R5bGUuRGVjaW1hbCk7XG4gIGNvbnN0IHBhdHRlcm4gPSBwYXJzZU51bWJlckZvcm1hdChmb3JtYXQsIGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIE51bWJlclN5bWJvbC5NaW51c1NpZ24pKTtcbiAgcmV0dXJuIGZvcm1hdE51bWJlclRvTG9jYWxlU3RyaW5nKFxuICAgICAgdmFsdWUsIHBhdHRlcm4sIGxvY2FsZSwgTnVtYmVyU3ltYm9sLkdyb3VwLCBOdW1iZXJTeW1ib2wuRGVjaW1hbCwgZGlnaXRzSW5mbyk7XG59XG5cbmludGVyZmFjZSBQYXJzZWROdW1iZXJGb3JtYXQge1xuICBtaW5JbnQ6IG51bWJlcjtcbiAgLy8gdGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyByZXF1aXJlZCBpbiB0aGUgZnJhY3Rpb24gcGFydCBvZiB0aGUgbnVtYmVyXG4gIG1pbkZyYWM6IG51bWJlcjtcbiAgLy8gdGhlIG1heGltdW0gbnVtYmVyIG9mIGRpZ2l0cyByZXF1aXJlZCBpbiB0aGUgZnJhY3Rpb24gcGFydCBvZiB0aGUgbnVtYmVyXG4gIG1heEZyYWM6IG51bWJlcjtcbiAgLy8gdGhlIHByZWZpeCBmb3IgYSBwb3NpdGl2ZSBudW1iZXJcbiAgcG9zUHJlOiBzdHJpbmc7XG4gIC8vIHRoZSBzdWZmaXggZm9yIGEgcG9zaXRpdmUgbnVtYmVyXG4gIHBvc1N1Zjogc3RyaW5nO1xuICAvLyB0aGUgcHJlZml4IGZvciBhIG5lZ2F0aXZlIG51bWJlciAoZS5nLiBgLWAgb3IgYChgKSlcbiAgbmVnUHJlOiBzdHJpbmc7XG4gIC8vIHRoZSBzdWZmaXggZm9yIGEgbmVnYXRpdmUgbnVtYmVyIChlLmcuIGApYClcbiAgbmVnU3VmOiBzdHJpbmc7XG4gIC8vIG51bWJlciBvZiBkaWdpdHMgaW4gZWFjaCBncm91cCBvZiBzZXBhcmF0ZWQgZGlnaXRzXG4gIGdTaXplOiBudW1iZXI7XG4gIC8vIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGxhc3QgZ3JvdXAgb2YgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbCBzZXBhcmF0b3JcbiAgbGdTaXplOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyRm9ybWF0KGZvcm1hdDogc3RyaW5nLCBtaW51c1NpZ24gPSAnLScpOiBQYXJzZWROdW1iZXJGb3JtYXQge1xuICBjb25zdCBwID0ge1xuICAgIG1pbkludDogMSxcbiAgICBtaW5GcmFjOiAwLFxuICAgIG1heEZyYWM6IDAsXG4gICAgcG9zUHJlOiAnJyxcbiAgICBwb3NTdWY6ICcnLFxuICAgIG5lZ1ByZTogJycsXG4gICAgbmVnU3VmOiAnJyxcbiAgICBnU2l6ZTogMCxcbiAgICBsZ1NpemU6IDBcbiAgfTtcblxuICBjb25zdCBwYXR0ZXJuUGFydHMgPSBmb3JtYXQuc3BsaXQoUEFUVEVSTl9TRVApO1xuICBjb25zdCBwb3NpdGl2ZSA9IHBhdHRlcm5QYXJ0c1swXTtcbiAgY29uc3QgbmVnYXRpdmUgPSBwYXR0ZXJuUGFydHNbMV07XG5cbiAgY29uc3QgcG9zaXRpdmVQYXJ0cyA9IHBvc2l0aXZlLmluZGV4T2YoREVDSU1BTF9TRVApICE9PSAtMSA/XG4gICAgICBwb3NpdGl2ZS5zcGxpdChERUNJTUFMX1NFUCkgOlxuICAgICAgW1xuICAgICAgICBwb3NpdGl2ZS5zdWJzdHJpbmcoMCwgcG9zaXRpdmUubGFzdEluZGV4T2YoWkVST19DSEFSKSArIDEpLFxuICAgICAgICBwb3NpdGl2ZS5zdWJzdHJpbmcocG9zaXRpdmUubGFzdEluZGV4T2YoWkVST19DSEFSKSArIDEpXG4gICAgICBdLFxuICAgICAgICBpbnRlZ2VyID0gcG9zaXRpdmVQYXJ0c1swXSwgZnJhY3Rpb24gPSBwb3NpdGl2ZVBhcnRzWzFdIHx8ICcnO1xuXG4gIHAucG9zUHJlID0gaW50ZWdlci5zdWJzdHIoMCwgaW50ZWdlci5pbmRleE9mKERJR0lUX0NIQVIpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2ggPSBmcmFjdGlvbi5jaGFyQXQoaSk7XG4gICAgaWYgKGNoID09PSBaRVJPX0NIQVIpIHtcbiAgICAgIHAubWluRnJhYyA9IHAubWF4RnJhYyA9IGkgKyAxO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IERJR0lUX0NIQVIpIHtcbiAgICAgIHAubWF4RnJhYyA9IGkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwLnBvc1N1ZiArPSBjaDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBncm91cHMgPSBpbnRlZ2VyLnNwbGl0KEdST1VQX1NFUCk7XG4gIHAuZ1NpemUgPSBncm91cHNbMV0gPyBncm91cHNbMV0ubGVuZ3RoIDogMDtcbiAgcC5sZ1NpemUgPSAoZ3JvdXBzWzJdIHx8IGdyb3Vwc1sxXSkgPyAoZ3JvdXBzWzJdIHx8IGdyb3Vwc1sxXSkubGVuZ3RoIDogMDtcblxuICBpZiAobmVnYXRpdmUpIHtcbiAgICBjb25zdCB0cnVua0xlbiA9IHBvc2l0aXZlLmxlbmd0aCAtIHAucG9zUHJlLmxlbmd0aCAtIHAucG9zU3VmLmxlbmd0aCxcbiAgICAgICAgICBwb3MgPSBuZWdhdGl2ZS5pbmRleE9mKERJR0lUX0NIQVIpO1xuXG4gICAgcC5uZWdQcmUgPSBuZWdhdGl2ZS5zdWJzdHIoMCwgcG9zKS5yZXBsYWNlKC8nL2csICcnKTtcbiAgICBwLm5lZ1N1ZiA9IG5lZ2F0aXZlLnN1YnN0cihwb3MgKyB0cnVua0xlbikucmVwbGFjZSgvJy9nLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgcC5uZWdQcmUgPSBtaW51c1NpZ24gKyBwLnBvc1ByZTtcbiAgICBwLm5lZ1N1ZiA9IHAucG9zU3VmO1xuICB9XG5cbiAgcmV0dXJuIHA7XG59XG5cbmludGVyZmFjZSBQYXJzZWROdW1iZXIge1xuICAvLyBhbiBhcnJheSBvZiBkaWdpdHMgY29udGFpbmluZyBsZWFkaW5nIHplcm9zIGFzIG5lY2Vzc2FyeVxuICBkaWdpdHM6IG51bWJlcltdO1xuICAvLyB0aGUgZXhwb25lbnQgZm9yIG51bWJlcnMgdGhhdCB3b3VsZCBuZWVkIG1vcmUgdGhhbiBgTUFYX0RJR0lUU2AgZGlnaXRzIGluIGBkYFxuICBleHBvbmVudDogbnVtYmVyO1xuICAvLyB0aGUgbnVtYmVyIG9mIHRoZSBkaWdpdHMgaW4gYGRgIHRoYXQgYXJlIHRvIHRoZSBsZWZ0IG9mIHRoZSBkZWNpbWFsIHBvaW50XG4gIGludGVnZXJMZW46IG51bWJlcjtcbn1cblxuLy8gVHJhbnNmb3JtcyBhIHBhcnNlZCBudW1iZXIgaW50byBhIHBlcmNlbnRhZ2UgYnkgbXVsdGlwbHlpbmcgaXQgYnkgMTAwXG5mdW5jdGlvbiB0b1BlcmNlbnQocGFyc2VkTnVtYmVyOiBQYXJzZWROdW1iZXIpOiBQYXJzZWROdW1iZXIge1xuICAvLyBpZiB0aGUgbnVtYmVyIGlzIDAsIGRvbid0IGRvIGFueXRoaW5nXG4gIGlmIChwYXJzZWROdW1iZXIuZGlnaXRzWzBdID09PSAwKSB7XG4gICAgcmV0dXJuIHBhcnNlZE51bWJlcjtcbiAgfVxuXG4gIC8vIEdldHRpbmcgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIGRlY2ltYWxzXG4gIGNvbnN0IGZyYWN0aW9uTGVuID0gcGFyc2VkTnVtYmVyLmRpZ2l0cy5sZW5ndGggLSBwYXJzZWROdW1iZXIuaW50ZWdlckxlbjtcbiAgaWYgKHBhcnNlZE51bWJlci5leHBvbmVudCkge1xuICAgIHBhcnNlZE51bWJlci5leHBvbmVudCArPSAyO1xuICB9IGVsc2Uge1xuICAgIGlmIChmcmFjdGlvbkxlbiA9PT0gMCkge1xuICAgICAgcGFyc2VkTnVtYmVyLmRpZ2l0cy5wdXNoKDAsIDApO1xuICAgIH0gZWxzZSBpZiAoZnJhY3Rpb25MZW4gPT09IDEpIHtcbiAgICAgIHBhcnNlZE51bWJlci5kaWdpdHMucHVzaCgwKTtcbiAgICB9XG4gICAgcGFyc2VkTnVtYmVyLmludGVnZXJMZW4gKz0gMjtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWROdW1iZXI7XG59XG5cbi8qKlxuICogUGFyc2VzIGEgbnVtYmVyLlxuICogU2lnbmlmaWNhbnQgYml0cyBvZiB0aGlzIHBhcnNlIGFsZ29yaXRobSBjYW1lIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL01pa2VNY2wvYmlnLmpzL1xuICovXG5mdW5jdGlvbiBwYXJzZU51bWJlcihudW06IG51bWJlcik6IFBhcnNlZE51bWJlciB7XG4gIGxldCBudW1TdHIgPSBNYXRoLmFicyhudW0pICsgJyc7XG4gIGxldCBleHBvbmVudCA9IDAsIGRpZ2l0cywgaW50ZWdlckxlbjtcbiAgbGV0IGksIGosIHplcm9zO1xuXG4gIC8vIERlY2ltYWwgcG9pbnQ/XG4gIGlmICgoaW50ZWdlckxlbiA9IG51bVN0ci5pbmRleE9mKERFQ0lNQUxfU0VQKSkgPiAtMSkge1xuICAgIG51bVN0ciA9IG51bVN0ci5yZXBsYWNlKERFQ0lNQUxfU0VQLCAnJyk7XG4gIH1cblxuICAvLyBFeHBvbmVudGlhbCBmb3JtP1xuICBpZiAoKGkgPSBudW1TdHIuc2VhcmNoKC9lL2kpKSA+IDApIHtcbiAgICAvLyBXb3JrIG91dCB0aGUgZXhwb25lbnQuXG4gICAgaWYgKGludGVnZXJMZW4gPCAwKSBpbnRlZ2VyTGVuID0gaTtcbiAgICBpbnRlZ2VyTGVuICs9ICtudW1TdHIuc2xpY2UoaSArIDEpO1xuICAgIG51bVN0ciA9IG51bVN0ci5zdWJzdHJpbmcoMCwgaSk7XG4gIH0gZWxzZSBpZiAoaW50ZWdlckxlbiA8IDApIHtcbiAgICAvLyBUaGVyZSB3YXMgbm8gZGVjaW1hbCBwb2ludCBvciBleHBvbmVudCBzbyBpdCBpcyBhbiBpbnRlZ2VyLlxuICAgIGludGVnZXJMZW4gPSBudW1TdHIubGVuZ3RoO1xuICB9XG5cbiAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBsZWFkaW5nIHplcm9zLlxuICBmb3IgKGkgPSAwOyBudW1TdHIuY2hhckF0KGkpID09PSBaRVJPX0NIQVI7IGkrKykgeyAvKiBlbXB0eSAqL1xuICB9XG5cbiAgaWYgKGkgPT09ICh6ZXJvcyA9IG51bVN0ci5sZW5ndGgpKSB7XG4gICAgLy8gVGhlIGRpZ2l0cyBhcmUgYWxsIHplcm8uXG4gICAgZGlnaXRzID0gWzBdO1xuICAgIGludGVnZXJMZW4gPSAxO1xuICB9IGVsc2Uge1xuICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgdHJhaWxpbmcgemVyb3NcbiAgICB6ZXJvcy0tO1xuICAgIHdoaWxlIChudW1TdHIuY2hhckF0KHplcm9zKSA9PT0gWkVST19DSEFSKSB6ZXJvcy0tO1xuXG4gICAgLy8gVHJhaWxpbmcgemVyb3MgYXJlIGluc2lnbmlmaWNhbnQgc28gaWdub3JlIHRoZW1cbiAgICBpbnRlZ2VyTGVuIC09IGk7XG4gICAgZGlnaXRzID0gW107XG4gICAgLy8gQ29udmVydCBzdHJpbmcgdG8gYXJyYXkgb2YgZGlnaXRzIHdpdGhvdXQgbGVhZGluZy90cmFpbGluZyB6ZXJvcy5cbiAgICBmb3IgKGogPSAwOyBpIDw9IHplcm9zOyBpKyssIGorKykge1xuICAgICAgZGlnaXRzW2pdID0gTnVtYmVyKG51bVN0ci5jaGFyQXQoaSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZSBudW1iZXIgb3ZlcmZsb3dzIHRoZSBtYXhpbXVtIGFsbG93ZWQgZGlnaXRzIHRoZW4gdXNlIGFuIGV4cG9uZW50LlxuICBpZiAoaW50ZWdlckxlbiA+IE1BWF9ESUdJVFMpIHtcbiAgICBkaWdpdHMgPSBkaWdpdHMuc3BsaWNlKDAsIE1BWF9ESUdJVFMgLSAxKTtcbiAgICBleHBvbmVudCA9IGludGVnZXJMZW4gLSAxO1xuICAgIGludGVnZXJMZW4gPSAxO1xuICB9XG5cbiAgcmV0dXJuIHtkaWdpdHMsIGV4cG9uZW50LCBpbnRlZ2VyTGVufTtcbn1cblxuLyoqXG4gKiBSb3VuZCB0aGUgcGFyc2VkIG51bWJlciB0byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlc1xuICogVGhpcyBmdW5jdGlvbiBjaGFuZ2VzIHRoZSBwYXJzZWROdW1iZXIgaW4tcGxhY2VcbiAqL1xuZnVuY3Rpb24gcm91bmROdW1iZXIocGFyc2VkTnVtYmVyOiBQYXJzZWROdW1iZXIsIG1pbkZyYWM6IG51bWJlciwgbWF4RnJhYzogbnVtYmVyKSB7XG4gIGlmIChtaW5GcmFjID4gbWF4RnJhYykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciBmcmFjdGlvbiAoJHtcbiAgICAgICAgbWluRnJhY30pIGlzIGhpZ2hlciB0aGFuIHRoZSBtYXhpbXVtICgke21heEZyYWN9KS5gKTtcbiAgfVxuXG4gIGxldCBkaWdpdHMgPSBwYXJzZWROdW1iZXIuZGlnaXRzO1xuICBsZXQgZnJhY3Rpb25MZW4gPSBkaWdpdHMubGVuZ3RoIC0gcGFyc2VkTnVtYmVyLmludGVnZXJMZW47XG4gIGNvbnN0IGZyYWN0aW9uU2l6ZSA9IE1hdGgubWluKE1hdGgubWF4KG1pbkZyYWMsIGZyYWN0aW9uTGVuKSwgbWF4RnJhYyk7XG5cbiAgLy8gVGhlIGluZGV4IG9mIHRoZSBkaWdpdCB0byB3aGVyZSByb3VuZGluZyBpcyB0byBvY2N1clxuICBsZXQgcm91bmRBdCA9IGZyYWN0aW9uU2l6ZSArIHBhcnNlZE51bWJlci5pbnRlZ2VyTGVuO1xuICBsZXQgZGlnaXQgPSBkaWdpdHNbcm91bmRBdF07XG5cbiAgaWYgKHJvdW5kQXQgPiAwKSB7XG4gICAgLy8gRHJvcCBmcmFjdGlvbmFsIGRpZ2l0cyBiZXlvbmQgYHJvdW5kQXRgXG4gICAgZGlnaXRzLnNwbGljZShNYXRoLm1heChwYXJzZWROdW1iZXIuaW50ZWdlckxlbiwgcm91bmRBdCkpO1xuXG4gICAgLy8gU2V0IG5vbi1mcmFjdGlvbmFsIGRpZ2l0cyBiZXlvbmQgYHJvdW5kQXRgIHRvIDBcbiAgICBmb3IgKGxldCBqID0gcm91bmRBdDsgaiA8IGRpZ2l0cy5sZW5ndGg7IGorKykge1xuICAgICAgZGlnaXRzW2pdID0gMDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2Ugcm91bmRlZCB0byB6ZXJvIHNvIHJlc2V0IHRoZSBwYXJzZWROdW1iZXJcbiAgICBmcmFjdGlvbkxlbiA9IE1hdGgubWF4KDAsIGZyYWN0aW9uTGVuKTtcbiAgICBwYXJzZWROdW1iZXIuaW50ZWdlckxlbiA9IDE7XG4gICAgZGlnaXRzLmxlbmd0aCA9IE1hdGgubWF4KDEsIHJvdW5kQXQgPSBmcmFjdGlvblNpemUgKyAxKTtcbiAgICBkaWdpdHNbMF0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcm91bmRBdDsgaSsrKSBkaWdpdHNbaV0gPSAwO1xuICB9XG5cbiAgaWYgKGRpZ2l0ID49IDUpIHtcbiAgICBpZiAocm91bmRBdCAtIDEgPCAwKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA+IHJvdW5kQXQ7IGstLSkge1xuICAgICAgICBkaWdpdHMudW5zaGlmdCgwKTtcbiAgICAgICAgcGFyc2VkTnVtYmVyLmludGVnZXJMZW4rKztcbiAgICAgIH1cbiAgICAgIGRpZ2l0cy51bnNoaWZ0KDEpO1xuICAgICAgcGFyc2VkTnVtYmVyLmludGVnZXJMZW4rKztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlnaXRzW3JvdW5kQXQgLSAxXSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhZCBvdXQgd2l0aCB6ZXJvcyB0byBnZXQgdGhlIHJlcXVpcmVkIGZyYWN0aW9uIGxlbmd0aFxuICBmb3IgKDsgZnJhY3Rpb25MZW4gPCBNYXRoLm1heCgwLCBmcmFjdGlvblNpemUpOyBmcmFjdGlvbkxlbisrKSBkaWdpdHMucHVzaCgwKTtcblxuICBsZXQgZHJvcFRyYWlsaW5nWmVyb3MgPSBmcmFjdGlvblNpemUgIT09IDA7XG4gIC8vIE1pbmltYWwgbGVuZ3RoID0gbmIgb2YgZGVjaW1hbHMgcmVxdWlyZWQgKyBjdXJyZW50IG5iIG9mIGludGVnZXJzXG4gIC8vIEFueSBudW1iZXIgYmVzaWRlcyB0aGF0IGlzIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVtb3ZlZCBpZiBpdCdzIGEgdHJhaWxpbmcgMFxuICBjb25zdCBtaW5MZW4gPSBtaW5GcmFjICsgcGFyc2VkTnVtYmVyLmludGVnZXJMZW47XG4gIC8vIERvIGFueSBjYXJyeWluZywgZS5nLiBhIGRpZ2l0IHdhcyByb3VuZGVkIHVwIHRvIDEwXG4gIGNvbnN0IGNhcnJ5ID0gZGlnaXRzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uKGNhcnJ5LCBkLCBpLCBkaWdpdHMpIHtcbiAgICBkID0gZCArIGNhcnJ5O1xuICAgIGRpZ2l0c1tpXSA9IGQgPCAxMCA/IGQgOiBkIC0gMTA7ICAvLyBkICUgMTBcbiAgICBpZiAoZHJvcFRyYWlsaW5nWmVyb3MpIHtcbiAgICAgIC8vIERvIG5vdCBrZWVwIG1lYW5pbmdsZXNzIGZyYWN0aW9uYWwgdHJhaWxpbmcgemVyb3MgKGUuZy4gMTUuNTIwMDAgLS0+IDE1LjUyKVxuICAgICAgaWYgKGRpZ2l0c1tpXSA9PT0gMCAmJiBpID49IG1pbkxlbikge1xuICAgICAgICBkaWdpdHMucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wVHJhaWxpbmdaZXJvcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZCA+PSAxMCA/IDEgOiAwOyAgLy8gTWF0aC5mbG9vcihkIC8gMTApO1xuICB9LCAwKTtcbiAgaWYgKGNhcnJ5KSB7XG4gICAgZGlnaXRzLnVuc2hpZnQoY2FycnkpO1xuICAgIHBhcnNlZE51bWJlci5pbnRlZ2VyTGVuKys7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSW50QXV0b1JhZGl4KHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gcGFyc2VJbnQodGV4dCk7XG4gIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgJyArIHRleHQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=