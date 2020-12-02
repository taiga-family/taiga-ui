/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/i18n/format_number.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getLocaleNumberFormat, getLocaleNumberSymbol, getNumberOfCurrencyDigits, NumberFormatStyle, NumberSymbol } from './locale_data_api';
/** @type {?} */
export const NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
/** @type {?} */
const MAX_DIGITS = 22;
/** @type {?} */
const DECIMAL_SEP = '.';
/** @type {?} */
const ZERO_CHAR = '0';
/** @type {?} */
const PATTERN_SEP = ';';
/** @type {?} */
const GROUP_SEP = ',';
/** @type {?} */
const DIGIT_CHAR = '#';
/** @type {?} */
const CURRENCY_CHAR = '¤';
/** @type {?} */
const PERCENT_CHAR = '%';
/**
 * Transforms a number to a locale string based on a style and a format.
 * @param {?} value
 * @param {?} pattern
 * @param {?} locale
 * @param {?} groupSymbol
 * @param {?} decimalSymbol
 * @param {?=} digitsInfo
 * @param {?=} isPercent
 * @return {?}
 */
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent = false) {
    /** @type {?} */
    let formattedText = '';
    /** @type {?} */
    let isZero = false;
    if (!isFinite(value)) {
        formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
    }
    else {
        /** @type {?} */
        let parsedNumber = parseNumber(value);
        if (isPercent) {
            parsedNumber = toPercent(parsedNumber);
        }
        /** @type {?} */
        let minInt = pattern.minInt;
        /** @type {?} */
        let minFraction = pattern.minFrac;
        /** @type {?} */
        let maxFraction = pattern.maxFrac;
        if (digitsInfo) {
            /** @type {?} */
            const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                throw new Error(`${digitsInfo} is not a valid digit info`);
            }
            /** @type {?} */
            const minIntPart = parts[1];
            /** @type {?} */
            const minFractionPart = parts[3];
            /** @type {?} */
            const maxFractionPart = parts[5];
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
        /** @type {?} */
        let digits = parsedNumber.digits;
        /** @type {?} */
        let integerLen = parsedNumber.integerLen;
        /** @type {?} */
        const exponent = parsedNumber.exponent;
        /** @type {?} */
        let decimals = [];
        isZero = digits.every((/**
         * @param {?} d
         * @return {?}
         */
        d => !d));
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
        /** @type {?} */
        const groups = [];
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
 * \@ngModule CommonModule
 * \@description
 *
 * Formats a number as currency using locale rules.
 *
 * @see `formatNumber()` / `DecimalPipe` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * \@publicApi
 * @param {?} value The number to format.
 * @param {?} locale A locale code for the locale format rules to use.
 * @param {?} currency A string containing the currency symbol or its name,
 * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
 * of the function.
 * @param {?=} currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 * currency code, such as `USD` for the US dollar and `EUR` for the euro.
 * Used to determine the number of digits in the decimal part.
 * @param {?=} digitsInfo
 * @return {?} The formatted currency value.
 *
 */
export function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
    /** @type {?} */
    const format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
    /** @type {?} */
    const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    pattern.minFrac = getNumberOfCurrencyDigits((/** @type {?} */ (currencyCode)));
    pattern.maxFrac = pattern.minFrac;
    /** @type {?} */
    const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
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
 * \@ngModule CommonModule
 * \@description
 *
 * Formats a number as a percentage according to locale rules.
 *
 * @see `formatNumber()` / `DecimalPipe` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * \@publicApi
 *
 * @param {?} value The number to format.
 * @param {?} locale A locale code for the locale format rules to use.
 * @param {?=} digitsInfo
 * @return {?} The formatted percentage value.
 *
 */
export function formatPercent(value, locale, digitsInfo) {
    /** @type {?} */
    const format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
    /** @type {?} */
    const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    /** @type {?} */
    const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
    return res.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
/**
 * \@ngModule CommonModule
 * \@description
 *
 * Formats a number as text, with group sizing, separator, and other
 * parameters based on the locale.
 *
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * \@publicApi
 * @param {?} value The number to format.
 * @param {?} locale A locale code for the locale format rules to use.
 * @param {?=} digitsInfo
 * @return {?} The formatted text string.
 */
export function formatNumber(value, locale, digitsInfo) {
    /** @type {?} */
    const format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
    /** @type {?} */
    const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
/**
 * @record
 */
function ParsedNumberFormat() { }
if (false) {
    /** @type {?} */
    ParsedNumberFormat.prototype.minInt;
    /** @type {?} */
    ParsedNumberFormat.prototype.minFrac;
    /** @type {?} */
    ParsedNumberFormat.prototype.maxFrac;
    /** @type {?} */
    ParsedNumberFormat.prototype.posPre;
    /** @type {?} */
    ParsedNumberFormat.prototype.posSuf;
    /** @type {?} */
    ParsedNumberFormat.prototype.negPre;
    /** @type {?} */
    ParsedNumberFormat.prototype.negSuf;
    /** @type {?} */
    ParsedNumberFormat.prototype.gSize;
    /** @type {?} */
    ParsedNumberFormat.prototype.lgSize;
}
/**
 * @param {?} format
 * @param {?=} minusSign
 * @return {?}
 */
function parseNumberFormat(format, minusSign = '-') {
    /** @type {?} */
    const p = {
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
    /** @type {?} */
    const patternParts = format.split(PATTERN_SEP);
    /** @type {?} */
    const positive = patternParts[0];
    /** @type {?} */
    const negative = patternParts[1];
    /** @type {?} */
    const positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ?
        positive.split(DECIMAL_SEP) :
        [
            positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1),
            positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)
        ];
    /** @type {?} */
    const integer = positiveParts[0];
    /** @type {?} */
    const fraction = positiveParts[1] || '';
    p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR));
    for (let i = 0; i < fraction.length; i++) {
        /** @type {?} */
        const ch = fraction.charAt(i);
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
    /** @type {?} */
    const groups = integer.split(GROUP_SEP);
    p.gSize = groups[1] ? groups[1].length : 0;
    p.lgSize = (groups[2] || groups[1]) ? (groups[2] || groups[1]).length : 0;
    if (negative) {
        /** @type {?} */
        const trunkLen = positive.length - p.posPre.length - p.posSuf.length;
        /** @type {?} */
        const pos = negative.indexOf(DIGIT_CHAR);
        p.negPre = negative.substr(0, pos).replace(/'/g, '');
        p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
    }
    else {
        p.negPre = minusSign + p.posPre;
        p.negSuf = p.posSuf;
    }
    return p;
}
/**
 * @record
 */
function ParsedNumber() { }
if (false) {
    /** @type {?} */
    ParsedNumber.prototype.digits;
    /** @type {?} */
    ParsedNumber.prototype.exponent;
    /** @type {?} */
    ParsedNumber.prototype.integerLen;
}
// Transforms a parsed number into a percentage by multiplying it by 100
/**
 * @param {?} parsedNumber
 * @return {?}
 */
function toPercent(parsedNumber) {
    // if the number is 0, don't do anything
    if (parsedNumber.digits[0] === 0) {
        return parsedNumber;
    }
    // Getting the current number of decimals
    /** @type {?} */
    const fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
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
 * @param {?} num
 * @return {?}
 */
function parseNumber(num) {
    /** @type {?} */
    let numStr = Math.abs(num) + '';
    /** @type {?} */
    let exponent = 0;
    /** @type {?} */
    let digits;
    /** @type {?} */
    let integerLen;
    /** @type {?} */
    let i;
    /** @type {?} */
    let j;
    /** @type {?} */
    let zeros;
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
    return { digits, exponent, integerLen };
}
/**
 * Round the parsed number to the specified number of decimal places
 * This function changes the parsedNumber in-place
 * @param {?} parsedNumber
 * @param {?} minFrac
 * @param {?} maxFrac
 * @return {?}
 */
function roundNumber(parsedNumber, minFrac, maxFrac) {
    if (minFrac > maxFrac) {
        throw new Error(`The minimum number of digits after fraction (${minFrac}) is higher than the maximum (${maxFrac}).`);
    }
    /** @type {?} */
    let digits = parsedNumber.digits;
    /** @type {?} */
    let fractionLen = digits.length - parsedNumber.integerLen;
    /** @type {?} */
    const fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
    // The index of the digit to where rounding is to occur
    /** @type {?} */
    let roundAt = fractionSize + parsedNumber.integerLen;
    /** @type {?} */
    let digit = digits[roundAt];
    if (roundAt > 0) {
        // Drop fractional digits beyond `roundAt`
        digits.splice(Math.max(parsedNumber.integerLen, roundAt));
        // Set non-fractional digits beyond `roundAt` to 0
        for (let j = roundAt; j < digits.length; j++) {
            digits[j] = 0;
        }
    }
    else {
        // We rounded to zero so reset the parsedNumber
        fractionLen = Math.max(0, fractionLen);
        parsedNumber.integerLen = 1;
        digits.length = Math.max(1, roundAt = fractionSize + 1);
        digits[0] = 0;
        for (let i = 1; i < roundAt; i++)
            digits[i] = 0;
    }
    if (digit >= 5) {
        if (roundAt - 1 < 0) {
            for (let k = 0; k > roundAt; k--) {
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
    /** @type {?} */
    let dropTrailingZeros = fractionSize !== 0;
    // Minimal length = nb of decimals required + current nb of integers
    // Any number besides that is optional and can be removed if it's a trailing 0
    /** @type {?} */
    const minLen = minFrac + parsedNumber.integerLen;
    // Do any carrying, e.g. a digit was rounded up to 10
    /** @type {?} */
    const carry = digits.reduceRight((/**
     * @param {?} carry
     * @param {?} d
     * @param {?} i
     * @param {?} digits
     * @return {?}
     */
    function (carry, d, i, digits) {
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
    }), 0);
    if (carry) {
        digits.unshift(carry);
        parsedNumber.integerLen++;
    }
}
/**
 * @param {?} text
 * @return {?}
 */
export function parseIntAutoRadix(text) {
    /** @type {?} */
    const result = parseInt(text);
    if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0X251bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvaTE4bi9mb3JtYXRfbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFM0ksTUFBTSxPQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7TUFDM0QsVUFBVSxHQUFHLEVBQUU7O01BQ2YsV0FBVyxHQUFHLEdBQUc7O01BQ2pCLFNBQVMsR0FBRyxHQUFHOztNQUNmLFdBQVcsR0FBRyxHQUFHOztNQUNqQixTQUFTLEdBQUcsR0FBRzs7TUFDZixVQUFVLEdBQUcsR0FBRzs7TUFDaEIsYUFBYSxHQUFHLEdBQUc7O01BQ25CLFlBQVksR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7QUFLeEIsU0FBUywwQkFBMEIsQ0FDL0IsS0FBYSxFQUFFLE9BQTJCLEVBQUUsTUFBYyxFQUFFLFdBQXlCLEVBQ3JGLGFBQTJCLEVBQUUsVUFBbUIsRUFBRSxTQUFTLEdBQUcsS0FBSzs7UUFDakUsYUFBYSxHQUFHLEVBQUU7O1FBQ2xCLE1BQU0sR0FBRyxLQUFLO0lBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsYUFBYSxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEU7U0FBTTs7WUFDRCxZQUFZLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUVyQyxJQUFJLFNBQVMsRUFBRTtZQUNiLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEM7O1lBRUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNOztZQUN2QixXQUFXLEdBQUcsT0FBTyxDQUFD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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFLFNBQVM7UUFDM0MsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQiw4RUFBOEU7WUFDOUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNMLGlCQUFpQixHQUFHLEtBQUssQ0FBQzthQUMzQjtTQUNGO1FBQ0QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLHNCQUFzQjtJQUNqRCxDQUFDLEdBQUUsQ0FBQyxDQUFDO0lBQ0wsSUFBSSxLQUFLLEVBQUU7UUFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUMzQjtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVk7O1VBQ3RDLE1BQU0sR0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3JDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDakU7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2dldExvY2FsZU51bWJlckZvcm1hdCwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sLCBnZXROdW1iZXJPZkN1cnJlbmN5RGlnaXRzLCBOdW1iZXJGb3JtYXRTdHlsZSwgTnVtYmVyU3ltYm9sfSBmcm9tICcuL2xvY2FsZV9kYXRhX2FwaSc7XG5cbmV4cG9ydCBjb25zdCBOVU1CRVJfRk9STUFUX1JFR0VYUCA9IC9eKFxcZCspP1xcLigoXFxkKykoLShcXGQrKSk/KT8kLztcbmNvbnN0IE1BWF9ESUdJVFMgPSAyMjtcbmNvbnN0IERFQ0lNQUxfU0VQID0gJy4nO1xuY29uc3QgWkVST19DSEFSID0gJzAnO1xuY29uc3QgUEFUVEVSTl9TRVAgPSAnOyc7XG5jb25zdCBHUk9VUF9TRVAgPSAnLCc7XG5jb25zdCBESUdJVF9DSEFSID0gJyMnO1xuY29uc3QgQ1VSUkVOQ1lfQ0hBUiA9ICfCpCc7XG5jb25zdCBQRVJDRU5UX0NIQVIgPSAnJSc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIG51bWJlciB0byBhIGxvY2FsZSBzdHJpbmcgYmFzZWQgb24gYSBzdHlsZSBhbmQgYSBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE51bWJlclRvTG9jYWxlU3RyaW5nKFxuICAgIHZhbHVlOiBudW1iZXIsIHBhdHRlcm46IFBhcnNlZE51bWJlckZvcm1hdCwgbG9jYWxlOiBzdHJpbmcsIGdyb3VwU3ltYm9sOiBOdW1iZXJTeW1ib2wsXG4gICAgZGVjaW1hbFN5bWJvbDogTnVtYmVyU3ltYm9sLCBkaWdpdHNJbmZvPzogc3RyaW5nLCBpc1BlcmNlbnQgPSBmYWxzZSk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXR0ZWRUZXh0ID0gJyc7XG4gIGxldCBpc1plcm8gPSBmYWxzZTtcblxuICBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgIGZvcm1hdHRlZFRleHQgPSBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBOdW1iZXJTeW1ib2wuSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIGxldCBwYXJzZWROdW1iZXIgPSBwYXJzZU51bWJlcih2YWx1ZSk7XG5cbiAgICBpZiAoaXNQZXJjZW50KSB7XG4gICAgICBwYXJzZWROdW1iZXIgPSB0b1BlcmNlbnQocGFyc2VkTnVtYmVyKTtcbiAgICB9XG5cbiAgICBsZXQgbWluSW50ID0gcGF0dGVybi5taW5JbnQ7XG4gICAgbGV0IG1pbkZyYWN0aW9uID0gcGF0dGVybi5taW5GcmFjO1xuICAgIGxldCBtYXhGcmFjdGlvbiA9IHBhdHRlcm4ubWF4RnJhYztcblxuICAgIGlmIChkaWdpdHNJbmZvKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRpZ2l0c0luZm8ubWF0Y2goTlVNQkVSX0ZPUk1BVF9SRUdFWFApO1xuICAgICAgaWYgKHBhcnRzID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkaWdpdHNJbmZvfSBpcyBub3QgYSB2YWxpZCBkaWdpdCBpbmZvYCk7XG4gICAgICB9XG4gICAgICBjb25zdCBtaW5JbnRQYXJ0ID0gcGFydHNbMV07XG4gICAgICBjb25zdCBtaW5GcmFjdGlvblBhcnQgPSBwYXJ0c1szXTtcbiAgICAgIGNvbnN0IG1heEZyYWN0aW9uUGFydCA9IHBhcnRzWzVdO1xuICAgICAgaWYgKG1pbkludFBhcnQgIT0gbnVsbCkge1xuICAgICAgICBtaW5JbnQgPSBwYXJzZUludEF1dG9SYWRpeChtaW5JbnRQYXJ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtaW5GcmFjdGlvblBhcnQgIT0gbnVsbCkge1xuICAgICAgICBtaW5GcmFjdGlvbiA9IHBhcnNlSW50QXV0b1JhZGl4KG1pbkZyYWN0aW9uUGFydCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4RnJhY3Rpb25QYXJ0ICE9IG51bGwpIHtcbiAgICAgICAgbWF4RnJhY3Rpb24gPSBwYXJzZUludEF1dG9SYWRpeChtYXhGcmFjdGlvblBhcnQpO1xuICAgICAgfSBlbHNlIGlmIChtaW5GcmFjdGlvblBhcnQgIT0gbnVsbCAmJiBtaW5GcmFjdGlvbiA+IG1heEZyYWN0aW9uKSB7XG4gICAgICAgIG1heEZyYWN0aW9uID0gbWluRnJhY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcm91bmROdW1iZXIocGFyc2VkTnVtYmVyLCBtaW5GcmFjdGlvbiwgbWF4RnJhY3Rpb24pO1xuXG4gICAgbGV0IGRpZ2l0cyA9IHBhcnNlZE51bWJlci5kaWdpdHM7XG4gICAgbGV0IGludGVnZXJMZW4gPSBwYXJzZWROdW1iZXIuaW50ZWdlckxlbjtcbiAgICBjb25zdCBleHBvbmVudCA9IHBhcnNlZE51bWJlci5leHBvbmVudDtcbiAgICBsZXQgZGVjaW1hbHMgPSBbXTtcbiAgICBpc1plcm8gPSBkaWdpdHMuZXZlcnkoZCA9PiAhZCk7XG5cbiAgICAvLyBwYWQgemVyb3MgZm9yIHNtYWxsIG51bWJlcnNcbiAgICBmb3IgKDsgaW50ZWdlckxlbiA8IG1pbkludDsgaW50ZWdlckxlbisrKSB7XG4gICAgICBkaWdpdHMudW5zaGlmdCgwKTtcbiAgICB9XG5cbiAgICAvLyBwYWQgemVyb3MgZm9yIHNtYWxsIG51bWJlcnNcbiAgICBmb3IgKDsgaW50ZWdlckxlbiA8IDA7IGludGVnZXJMZW4rKykge1xuICAgICAgZGlnaXRzLnVuc2hpZnQoMCk7XG4gICAgfVxuXG4gICAgLy8gZXh0cmFjdCBkZWNpbWFscyBkaWdpdHNcbiAgICBpZiAoaW50ZWdlckxlbiA+IDApIHtcbiAgICAgIGRlY2ltYWxzID0gZGlnaXRzLnNwbGljZShpbnRlZ2VyTGVuLCBkaWdpdHMubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVjaW1hbHMgPSBkaWdpdHM7XG4gICAgICBkaWdpdHMgPSBbMF07XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0IHRoZSBpbnRlZ2VyIGRpZ2l0cyB3aXRoIGdyb3VwaW5nIHNlcGFyYXRvcnNcbiAgICBjb25zdCBncm91cHMgPSBbXTtcbiAgICBpZiAoZGlnaXRzLmxlbmd0aCA+PSBwYXR0ZXJuLmxnU2l6ZSkge1xuICAgICAgZ3JvdXBzLnVuc2hpZnQoZGlnaXRzLnNwbGljZSgtcGF0dGVybi5sZ1NpemUsIGRpZ2l0cy5sZW5ndGgpLmpvaW4oJycpKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZGlnaXRzLmxlbmd0aCA+IHBhdHRlcm4uZ1NpemUpIHtcbiAgICAgIGdyb3Vwcy51bnNoaWZ0KGRpZ2l0cy5zcGxpY2UoLXBhdHRlcm4uZ1NpemUsIGRpZ2l0cy5sZW5ndGgpLmpvaW4oJycpKTtcbiAgICB9XG5cbiAgICBpZiAoZGlnaXRzLmxlbmd0aCkge1xuICAgICAgZ3JvdXBzLnVuc2hpZnQoZGlnaXRzLmpvaW4oJycpKTtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRUZXh0ID0gZ3JvdXBzLmpvaW4oZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgZ3JvdXBTeW1ib2wpKTtcblxuICAgIC8vIGFwcGVuZCB0aGUgZGVjaW1hbCBkaWdpdHNcbiAgICBpZiAoZGVjaW1hbHMubGVuZ3RoKSB7XG4gICAgICBmb3JtYXR0ZWRUZXh0ICs9IGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIGRlY2ltYWxTeW1ib2wpICsgZGVjaW1hbHMuam9pbignJyk7XG4gICAgfVxuXG4gICAgaWYgKGV4cG9uZW50KSB7XG4gICAgICBmb3JtYXR0ZWRUZXh0ICs9IGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIE51bWJlclN5bWJvbC5FeHBvbmVudGlhbCkgKyAnKycgKyBleHBvbmVudDtcbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUgPCAwICYmICFpc1plcm8pIHtcbiAgICBmb3JtYXR0ZWRUZXh0ID0gcGF0dGVybi5uZWdQcmUgKyBmb3JtYXR0ZWRUZXh0ICsgcGF0dGVybi5uZWdTdWY7XG4gIH0gZWxzZSB7XG4gICAgZm9ybWF0dGVkVGV4dCA9IHBhdHRlcm4ucG9zUHJlICsgZm9ybWF0dGVkVGV4dCArIHBhdHRlcm4ucG9zU3VmO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdHRlZFRleHQ7XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9ybWF0cyBhIG51bWJlciBhcyBjdXJyZW5jeSB1c2luZyBsb2NhbGUgcnVsZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gZm9ybWF0LlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcGFyYW0gY3VycmVuY3kgQSBzdHJpbmcgY29udGFpbmluZyB0aGUgY3VycmVuY3kgc3ltYm9sIG9yIGl0cyBuYW1lLFxuICogc3VjaCBhcyBcIiRcIiBvciBcIkNhbmFkaWFuIERvbGxhclwiLiBVc2VkIGluIG91dHB1dCBzdHJpbmcsIGJ1dCBkb2VzIG5vdCBhZmZlY3QgdGhlIG9wZXJhdGlvblxuICogb2YgdGhlIGZ1bmN0aW9uLlxuICogQHBhcmFtIGN1cnJlbmN5Q29kZSBUaGUgW0lTTyA0MjE3XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fNDIxNylcbiAqIGN1cnJlbmN5IGNvZGUsIHN1Y2ggYXMgYFVTRGAgZm9yIHRoZSBVUyBkb2xsYXIgYW5kIGBFVVJgIGZvciB0aGUgZXVyby5cbiAqIFVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBkZWNpbWFsIHBhcnQuXG4gKiBAcGFyYW0gZGlnaXRJbmZvIERlY2ltYWwgcmVwcmVzZW50YXRpb24gb3B0aW9ucywgc3BlY2lmaWVkIGJ5IGEgc3RyaW5nIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICogYHttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c31gLiBTZWUgYERlY2ltYWxQaXBlYCBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgY3VycmVuY3kgdmFsdWUuXG4gKlxuICogQHNlZSBgZm9ybWF0TnVtYmVyKClgXG4gKiBAc2VlIGBEZWNpbWFsUGlwZWBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3koXG4gICAgdmFsdWU6IG51bWJlciwgbG9jYWxlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIGN1cnJlbmN5Q29kZT86IHN0cmluZyxcbiAgICBkaWdpdHNJbmZvPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZm9ybWF0ID0gZ2V0TG9jYWxlTnVtYmVyRm9ybWF0KGxvY2FsZSwgTnVtYmVyRm9ybWF0U3R5bGUuQ3VycmVuY3kpO1xuICBjb25zdCBwYXR0ZXJuID0gcGFyc2VOdW1iZXJGb3JtYXQoZm9ybWF0LCBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBOdW1iZXJTeW1ib2wuTWludXNTaWduKSk7XG5cbiAgcGF0dGVybi5taW5GcmFjID0gZ2V0TnVtYmVyT2ZDdXJyZW5jeURpZ2l0cyhjdXJyZW5jeUNvZGUhKTtcbiAgcGF0dGVybi5tYXhGcmFjID0gcGF0dGVybi5taW5GcmFjO1xuXG4gIGNvbnN0IHJlcyA9IGZvcm1hdE51bWJlclRvTG9jYWxlU3RyaW5nKFxuICAgICAgdmFsdWUsIHBhdHRlcm4sIGxvY2FsZSwgTnVtYmVyU3ltYm9sLkN1cnJlbmN5R3JvdXAsIE51bWJlclN5bWJvbC5DdXJyZW5jeURlY2ltYWwsIGRpZ2l0c0luZm8pO1xuICByZXR1cm4gcmVzXG4gICAgICAucmVwbGFjZShDVVJSRU5DWV9DSEFSLCBjdXJyZW5jeSlcbiAgICAgIC8vIGlmIHdlIGhhdmUgMiB0aW1lIHRoZSBjdXJyZW5jeSBjaGFyYWN0ZXIsIHRoZSBzZWNvbmQgb25lIGlzIGlnbm9yZWRcbiAgICAgIC5yZXBsYWNlKENVUlJFTkNZX0NIQVIsICcnKVxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzcGFjaW5nIGJldHdlZW4gY3VycmVuY3kgY2hhcmFjdGVyIGFuZCB0aGUgdmFsdWUgYW5kXG4gICAgICAvLyB0aGUgY3VycmVuY3kgY2hhcmFjdGVyIGlzIHN1cHJlc3NlZCBieSBwYXNzaW5nIGFuIGVtcHR5IHN0cmluZywgdGhlXG4gICAgICAvLyBzcGFjaW5nIGNoYXJhY3RlciB3b3VsZCByZW1haW4gYXMgcGFydCBvZiB0aGUgc3RyaW5nLiBUaGVuIHdlXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlIGl0LlxuICAgICAgLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgcGVyY2VudGFnZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIGRpZ2l0SW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAqIGB7bWluSW50ZWdlckRpZ2l0c30ue21pbkZyYWN0aW9uRGlnaXRzfS17bWF4RnJhY3Rpb25EaWdpdHN9YC4gU2VlIGBEZWNpbWFsUGlwZWAgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIHBlcmNlbnRhZ2UgdmFsdWUuXG4gKlxuICogQHNlZSBgZm9ybWF0TnVtYmVyKClgXG4gKiBAc2VlIGBEZWNpbWFsUGlwZWBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKiBAcHVibGljQXBpXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudCh2YWx1ZTogbnVtYmVyLCBsb2NhbGU6IHN0cmluZywgZGlnaXRzSW5mbz86IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGZvcm1hdCA9IGdldExvY2FsZU51bWJlckZvcm1hdChsb2NhbGUsIE51bWJlckZvcm1hdFN0eWxlLlBlcmNlbnQpO1xuICBjb25zdCBwYXR0ZXJuID0gcGFyc2VOdW1iZXJGb3JtYXQoZm9ybWF0LCBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBOdW1iZXJTeW1ib2wuTWludXNTaWduKSk7XG4gIGNvbnN0IHJlcyA9IGZvcm1hdE51bWJlclRvTG9jYWxlU3RyaW5nKFxuICAgICAgdmFsdWUsIHBhdHRlcm4sIGxvY2FsZSwgTnVtYmVyU3ltYm9sLkdyb3VwLCBOdW1iZXJTeW1ib2wuRGVjaW1hbCwgZGlnaXRzSW5mbywgdHJ1ZSk7XG4gIHJldHVybiByZXMucmVwbGFjZShcbiAgICAgIG5ldyBSZWdFeHAoUEVSQ0VOVF9DSEFSLCAnZycpLCBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBOdW1iZXJTeW1ib2wuUGVyY2VudFNpZ24pKTtcbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIHRleHQsIHdpdGggZ3JvdXAgc2l6aW5nLCBzZXBhcmF0b3IsIGFuZCBvdGhlclxuICogcGFyYW1ldGVycyBiYXNlZCBvbiB0aGUgbG9jYWxlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIGRpZ2l0SW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAqIGB7bWluSW50ZWdlckRpZ2l0c30ue21pbkZyYWN0aW9uRGlnaXRzfS17bWF4RnJhY3Rpb25EaWdpdHN9YC4gU2VlIGBEZWNpbWFsUGlwZWAgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIHRleHQgc3RyaW5nLlxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIodmFsdWU6IG51bWJlciwgbG9jYWxlOiBzdHJpbmcsIGRpZ2l0c0luZm8/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBmb3JtYXQgPSBnZXRMb2NhbGVOdW1iZXJGb3JtYXQobG9jYWxlLCBOdW1iZXJGb3JtYXRTdHlsZS5EZWNpbWFsKTtcbiAgY29uc3QgcGF0dGVybiA9IHBhcnNlTnVtYmVyRm9ybWF0KGZvcm1hdCwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLk1pbnVzU2lnbikpO1xuICByZXR1cm4gZm9ybWF0TnVtYmVyVG9Mb2NhbGVTdHJpbmcoXG4gICAgICB2YWx1ZSwgcGF0dGVybiwgbG9jYWxlLCBOdW1iZXJTeW1ib2wuR3JvdXAsIE51bWJlclN5bWJvbC5EZWNpbWFsLCBkaWdpdHNJbmZvKTtcbn1cblxuaW50ZXJmYWNlIFBhcnNlZE51bWJlckZvcm1hdCB7XG4gIG1pbkludDogbnVtYmVyO1xuICAvLyB0aGUgbWluaW11bSBudW1iZXIgb2YgZGlnaXRzIHJlcXVpcmVkIGluIHRoZSBmcmFjdGlvbiBwYXJ0IG9mIHRoZSBudW1iZXJcbiAgbWluRnJhYzogbnVtYmVyO1xuICAvLyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIHJlcXVpcmVkIGluIHRoZSBmcmFjdGlvbiBwYXJ0IG9mIHRoZSBudW1iZXJcbiAgbWF4RnJhYzogbnVtYmVyO1xuICAvLyB0aGUgcHJlZml4IGZvciBhIHBvc2l0aXZlIG51bWJlclxuICBwb3NQcmU6IHN0cmluZztcbiAgLy8gdGhlIHN1ZmZpeCBmb3IgYSBwb3NpdGl2ZSBudW1iZXJcbiAgcG9zU3VmOiBzdHJpbmc7XG4gIC8vIHRoZSBwcmVmaXggZm9yIGEgbmVnYXRpdmUgbnVtYmVyIChlLmcuIGAtYCBvciBgKGApKVxuICBuZWdQcmU6IHN0cmluZztcbiAgLy8gdGhlIHN1ZmZpeCBmb3IgYSBuZWdhdGl2ZSBudW1iZXIgKGUuZy4gYClgKVxuICBuZWdTdWY6IHN0cmluZztcbiAgLy8gbnVtYmVyIG9mIGRpZ2l0cyBpbiBlYWNoIGdyb3VwIG9mIHNlcGFyYXRlZCBkaWdpdHNcbiAgZ1NpemU6IG51bWJlcjtcbiAgLy8gbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgbGFzdCBncm91cCBvZiBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHNlcGFyYXRvclxuICBsZ1NpemU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGFyc2VOdW1iZXJGb3JtYXQoZm9ybWF0OiBzdHJpbmcsIG1pbnVzU2lnbiA9ICctJyk6IFBhcnNlZE51bWJlckZvcm1hdCB7XG4gIGNvbnN0IHAgPSB7XG4gICAgbWluSW50OiAxLFxuICAgIG1pbkZyYWM6IDAsXG4gICAgbWF4RnJhYzogMCxcbiAgICBwb3NQcmU6ICcnLFxuICAgIHBvc1N1ZjogJycsXG4gICAgbmVnUHJlOiAnJyxcbiAgICBuZWdTdWY6ICcnLFxuICAgIGdTaXplOiAwLFxuICAgIGxnU2l6ZTogMFxuICB9O1xuXG4gIGNvbnN0IHBhdHRlcm5QYXJ0cyA9IGZvcm1hdC5zcGxpdChQQVRURVJOX1NFUCk7XG4gIGNvbnN0IHBvc2l0aXZlID0gcGF0dGVyblBhcnRzWzBdO1xuICBjb25zdCBuZWdhdGl2ZSA9IHBhdHRlcm5QYXJ0c1sxXTtcblxuICBjb25zdCBwb3NpdGl2ZVBhcnRzID0gcG9zaXRpdmUuaW5kZXhPZihERUNJTUFMX1NFUCkgIT09IC0xID9cbiAgICAgIHBvc2l0aXZlLnNwbGl0KERFQ0lNQUxfU0VQKSA6XG4gICAgICBbXG4gICAgICAgIHBvc2l0aXZlLnN1YnN0cmluZygwLCBwb3NpdGl2ZS5sYXN0SW5kZXhPZihaRVJPX0NIQVIpICsgMSksXG4gICAgICAgIHBvc2l0aXZlLnN1YnN0cmluZyhwb3NpdGl2ZS5sYXN0SW5kZXhPZihaRVJPX0NIQVIpICsgMSlcbiAgICAgIF0sXG4gICAgICAgIGludGVnZXIgPSBwb3NpdGl2ZVBhcnRzWzBdLCBmcmFjdGlvbiA9IHBvc2l0aXZlUGFydHNbMV0gfHwgJyc7XG5cbiAgcC5wb3NQcmUgPSBpbnRlZ2VyLnN1YnN0cigwLCBpbnRlZ2VyLmluZGV4T2YoRElHSVRfQ0hBUikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaCA9IGZyYWN0aW9uLmNoYXJBdChpKTtcbiAgICBpZiAoY2ggPT09IFpFUk9fQ0hBUikge1xuICAgICAgcC5taW5GcmFjID0gcC5tYXhGcmFjID0gaSArIDE7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gRElHSVRfQ0hBUikge1xuICAgICAgcC5tYXhGcmFjID0gaSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAucG9zU3VmICs9IGNoO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdyb3VwcyA9IGludGVnZXIuc3BsaXQoR1JPVVBfU0VQKTtcbiAgcC5nU2l6ZSA9IGdyb3Vwc1sxXSA/IGdyb3Vwc1sxXS5sZW5ndGggOiAwO1xuICBwLmxnU2l6ZSA9IChncm91cHNbMl0gfHwgZ3JvdXBzWzFdKSA/IChncm91cHNbMl0gfHwgZ3JvdXBzWzFdKS5sZW5ndGggOiAwO1xuXG4gIGlmIChuZWdhdGl2ZSkge1xuICAgIGNvbnN0IHRydW5rTGVuID0gcG9zaXRpdmUubGVuZ3RoIC0gcC5wb3NQcmUubGVuZ3RoIC0gcC5wb3NTdWYubGVuZ3RoLFxuICAgICAgICAgIHBvcyA9IG5lZ2F0aXZlLmluZGV4T2YoRElHSVRfQ0hBUik7XG5cbiAgICBwLm5lZ1ByZSA9IG5lZ2F0aXZlLnN1YnN0cigwLCBwb3MpLnJlcGxhY2UoLycvZywgJycpO1xuICAgIHAubmVnU3VmID0gbmVnYXRpdmUuc3Vic3RyKHBvcyArIHRydW5rTGVuKS5yZXBsYWNlKC8nL2csICcnKTtcbiAgfSBlbHNlIHtcbiAgICBwLm5lZ1ByZSA9IG1pbnVzU2lnbiArIHAucG9zUHJlO1xuICAgIHAubmVnU3VmID0gcC5wb3NTdWY7XG4gIH1cblxuICByZXR1cm4gcDtcbn1cblxuaW50ZXJmYWNlIFBhcnNlZE51bWJlciB7XG4gIC8vIGFuIGFycmF5IG9mIGRpZ2l0cyBjb250YWluaW5nIGxlYWRpbmcgemVyb3MgYXMgbmVjZXNzYXJ5XG4gIGRpZ2l0czogbnVtYmVyW107XG4gIC8vIHRoZSBleHBvbmVudCBmb3IgbnVtYmVycyB0aGF0IHdvdWxkIG5lZWQgbW9yZSB0aGFuIGBNQVhfRElHSVRTYCBkaWdpdHMgaW4gYGRgXG4gIGV4cG9uZW50OiBudW1iZXI7XG4gIC8vIHRoZSBudW1iZXIgb2YgdGhlIGRpZ2l0cyBpbiBgZGAgdGhhdCBhcmUgdG8gdGhlIGxlZnQgb2YgdGhlIGRlY2ltYWwgcG9pbnRcbiAgaW50ZWdlckxlbjogbnVtYmVyO1xufVxuXG4vLyBUcmFuc2Zvcm1zIGEgcGFyc2VkIG51bWJlciBpbnRvIGEgcGVyY2VudGFnZSBieSBtdWx0aXBseWluZyBpdCBieSAxMDBcbmZ1bmN0aW9uIHRvUGVyY2VudChwYXJzZWROdW1iZXI6IFBhcnNlZE51bWJlcik6IFBhcnNlZE51bWJlciB7XG4gIC8vIGlmIHRoZSBudW1iZXIgaXMgMCwgZG9uJ3QgZG8gYW55dGhpbmdcbiAgaWYgKHBhcnNlZE51bWJlci5kaWdpdHNbMF0gPT09IDApIHtcbiAgICByZXR1cm4gcGFyc2VkTnVtYmVyO1xuICB9XG5cbiAgLy8gR2V0dGluZyB0aGUgY3VycmVudCBudW1iZXIgb2YgZGVjaW1hbHNcbiAgY29uc3QgZnJhY3Rpb25MZW4gPSBwYXJzZWROdW1iZXIuZGlnaXRzLmxlbmd0aCAtIHBhcnNlZE51bWJlci5pbnRlZ2VyTGVuO1xuICBpZiAocGFyc2VkTnVtYmVyLmV4cG9uZW50KSB7XG4gICAgcGFyc2VkTnVtYmVyLmV4cG9uZW50ICs9IDI7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGZyYWN0aW9uTGVuID09PSAwKSB7XG4gICAgICBwYXJzZWROdW1iZXIuZGlnaXRzLnB1c2goMCwgMCk7XG4gICAgfSBlbHNlIGlmIChmcmFjdGlvbkxlbiA9PT0gMSkge1xuICAgICAgcGFyc2VkTnVtYmVyLmRpZ2l0cy5wdXNoKDApO1xuICAgIH1cbiAgICBwYXJzZWROdW1iZXIuaW50ZWdlckxlbiArPSAyO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZE51bWJlcjtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBudW1iZXIuXG4gKiBTaWduaWZpY2FudCBiaXRzIG9mIHRoaXMgcGFyc2UgYWxnb3JpdGhtIGNhbWUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vTWlrZU1jbC9iaWcuanMvXG4gKi9cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKG51bTogbnVtYmVyKTogUGFyc2VkTnVtYmVyIHtcbiAgbGV0IG51bVN0ciA9IE1hdGguYWJzKG51bSkgKyAnJztcbiAgbGV0IGV4cG9uZW50ID0gMCwgZGlnaXRzLCBpbnRlZ2VyTGVuO1xuICBsZXQgaSwgaiwgemVyb3M7XG5cbiAgLy8gRGVjaW1hbCBwb2ludD9cbiAgaWYgKChpbnRlZ2VyTGVuID0gbnVtU3RyLmluZGV4T2YoREVDSU1BTF9TRVApKSA+IC0xKSB7XG4gICAgbnVtU3RyID0gbnVtU3RyLnJlcGxhY2UoREVDSU1BTF9TRVAsICcnKTtcbiAgfVxuXG4gIC8vIEV4cG9uZW50aWFsIGZvcm0/XG4gIGlmICgoaSA9IG51bVN0ci5zZWFyY2goL2UvaSkpID4gMCkge1xuICAgIC8vIFdvcmsgb3V0IHRoZSBleHBvbmVudC5cbiAgICBpZiAoaW50ZWdlckxlbiA8IDApIGludGVnZXJMZW4gPSBpO1xuICAgIGludGVnZXJMZW4gKz0gK251bVN0ci5zbGljZShpICsgMSk7XG4gICAgbnVtU3RyID0gbnVtU3RyLnN1YnN0cmluZygwLCBpKTtcbiAgfSBlbHNlIGlmIChpbnRlZ2VyTGVuIDwgMCkge1xuICAgIC8vIFRoZXJlIHdhcyBubyBkZWNpbWFsIHBvaW50IG9yIGV4cG9uZW50IHNvIGl0IGlzIGFuIGludGVnZXIuXG4gICAgaW50ZWdlckxlbiA9IG51bVN0ci5sZW5ndGg7XG4gIH1cblxuICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MuXG4gIGZvciAoaSA9IDA7IG51bVN0ci5jaGFyQXQoaSkgPT09IFpFUk9fQ0hBUjsgaSsrKSB7IC8qIGVtcHR5ICovXG4gIH1cblxuICBpZiAoaSA9PT0gKHplcm9zID0gbnVtU3RyLmxlbmd0aCkpIHtcbiAgICAvLyBUaGUgZGlnaXRzIGFyZSBhbGwgemVyby5cbiAgICBkaWdpdHMgPSBbMF07XG4gICAgaW50ZWdlckxlbiA9IDE7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiB0cmFpbGluZyB6ZXJvc1xuICAgIHplcm9zLS07XG4gICAgd2hpbGUgKG51bVN0ci5jaGFyQXQoemVyb3MpID09PSBaRVJPX0NIQVIpIHplcm9zLS07XG5cbiAgICAvLyBUcmFpbGluZyB6ZXJvcyBhcmUgaW5zaWduaWZpY2FudCBzbyBpZ25vcmUgdGhlbVxuICAgIGludGVnZXJMZW4gLT0gaTtcbiAgICBkaWdpdHMgPSBbXTtcbiAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBhcnJheSBvZiBkaWdpdHMgd2l0aG91dCBsZWFkaW5nL3RyYWlsaW5nIHplcm9zLlxuICAgIGZvciAoaiA9IDA7IGkgPD0gemVyb3M7IGkrKywgaisrKSB7XG4gICAgICBkaWdpdHNbal0gPSBOdW1iZXIobnVtU3RyLmNoYXJBdChpKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvdmVyZmxvd3MgdGhlIG1heGltdW0gYWxsb3dlZCBkaWdpdHMgdGhlbiB1c2UgYW4gZXhwb25lbnQuXG4gIGlmIChpbnRlZ2VyTGVuID4gTUFYX0RJR0lUUykge1xuICAgIGRpZ2l0cyA9IGRpZ2l0cy5zcGxpY2UoMCwgTUFYX0RJR0lUUyAtIDEpO1xuICAgIGV4cG9uZW50ID0gaW50ZWdlckxlbiAtIDE7XG4gICAgaW50ZWdlckxlbiA9IDE7XG4gIH1cblxuICByZXR1cm4ge2RpZ2l0cywgZXhwb25lbnQsIGludGVnZXJMZW59O1xufVxuXG4vKipcbiAqIFJvdW5kIHRoZSBwYXJzZWQgbnVtYmVyIHRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzXG4gKiBUaGlzIGZ1bmN0aW9uIGNoYW5nZXMgdGhlIHBhcnNlZE51bWJlciBpbi1wbGFjZVxuICovXG5mdW5jdGlvbiByb3VuZE51bWJlcihwYXJzZWROdW1iZXI6IFBhcnNlZE51bWJlciwgbWluRnJhYzogbnVtYmVyLCBtYXhGcmFjOiBudW1iZXIpIHtcbiAgaWYgKG1pbkZyYWMgPiBtYXhGcmFjKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWluaW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGZyYWN0aW9uICgke1xuICAgICAgICBtaW5GcmFjfSkgaXMgaGlnaGVyIHRoYW4gdGhlIG1heGltdW0gKCR7bWF4RnJhY30pLmApO1xuICB9XG5cbiAgbGV0IGRpZ2l0cyA9IHBhcnNlZE51bWJlci5kaWdpdHM7XG4gIGxldCBmcmFjdGlvbkxlbiA9IGRpZ2l0cy5sZW5ndGggLSBwYXJzZWROdW1iZXIuaW50ZWdlckxlbjtcbiAgY29uc3QgZnJhY3Rpb25TaXplID0gTWF0aC5taW4oTWF0aC5tYXgobWluRnJhYywgZnJhY3Rpb25MZW4pLCBtYXhGcmFjKTtcblxuICAvLyBUaGUgaW5kZXggb2YgdGhlIGRpZ2l0IHRvIHdoZXJlIHJvdW5kaW5nIGlzIHRvIG9jY3VyXG4gIGxldCByb3VuZEF0ID0gZnJhY3Rpb25TaXplICsgcGFyc2VkTnVtYmVyLmludGVnZXJMZW47XG4gIGxldCBkaWdpdCA9IGRpZ2l0c1tyb3VuZEF0XTtcblxuICBpZiAocm91bmRBdCA+IDApIHtcbiAgICAvLyBEcm9wIGZyYWN0aW9uYWwgZGlnaXRzIGJleW9uZCBgcm91bmRBdGBcbiAgICBkaWdpdHMuc3BsaWNlKE1hdGgubWF4KHBhcnNlZE51bWJlci5pbnRlZ2VyTGVuLCByb3VuZEF0KSk7XG5cbiAgICAvLyBTZXQgbm9uLWZyYWN0aW9uYWwgZGlnaXRzIGJleW9uZCBgcm91bmRBdGAgdG8gMFxuICAgIGZvciAobGV0IGogPSByb3VuZEF0OyBqIDwgZGlnaXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBkaWdpdHNbal0gPSAwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXZSByb3VuZGVkIHRvIHplcm8gc28gcmVzZXQgdGhlIHBhcnNlZE51bWJlclxuICAgIGZyYWN0aW9uTGVuID0gTWF0aC5tYXgoMCwgZnJhY3Rpb25MZW4pO1xuICAgIHBhcnNlZE51bWJlci5pbnRlZ2VyTGVuID0gMTtcbiAgICBkaWdpdHMubGVuZ3RoID0gTWF0aC5tYXgoMSwgcm91bmRBdCA9IGZyYWN0aW9uU2l6ZSArIDEpO1xuICAgIGRpZ2l0c1swXSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCByb3VuZEF0OyBpKyspIGRpZ2l0c1tpXSA9IDA7XG4gIH1cblxuICBpZiAoZGlnaXQgPj0gNSkge1xuICAgIGlmIChyb3VuZEF0IC0gMSA8IDApIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrID4gcm91bmRBdDsgay0tKSB7XG4gICAgICAgIGRpZ2l0cy51bnNoaWZ0KDApO1xuICAgICAgICBwYXJzZWROdW1iZXIuaW50ZWdlckxlbisrO1xuICAgICAgfVxuICAgICAgZGlnaXRzLnVuc2hpZnQoMSk7XG4gICAgICBwYXJzZWROdW1iZXIuaW50ZWdlckxlbisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWdpdHNbcm91bmRBdCAtIDFdKys7XG4gICAgfVxuICB9XG5cbiAgLy8gUGFkIG91dCB3aXRoIHplcm9zIHRvIGdldCB0aGUgcmVxdWlyZWQgZnJhY3Rpb24gbGVuZ3RoXG4gIGZvciAoOyBmcmFjdGlvbkxlbiA8IE1hdGgubWF4KDAsIGZyYWN0aW9uU2l6ZSk7IGZyYWN0aW9uTGVuKyspIGRpZ2l0cy5wdXNoKDApO1xuXG4gIGxldCBkcm9wVHJhaWxpbmdaZXJvcyA9IGZyYWN0aW9uU2l6ZSAhPT0gMDtcbiAgLy8gTWluaW1hbCBsZW5ndGggPSBuYiBvZiBkZWNpbWFscyByZXF1aXJlZCArIGN1cnJlbnQgbmIgb2YgaW50ZWdlcnNcbiAgLy8gQW55IG51bWJlciBiZXNpZGVzIHRoYXQgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSByZW1vdmVkIGlmIGl0J3MgYSB0cmFpbGluZyAwXG4gIGNvbnN0IG1pbkxlbiA9IG1pbkZyYWMgKyBwYXJzZWROdW1iZXIuaW50ZWdlckxlbjtcbiAgLy8gRG8gYW55IGNhcnJ5aW5nLCBlLmcuIGEgZGlnaXQgd2FzIHJvdW5kZWQgdXAgdG8gMTBcbiAgY29uc3QgY2FycnkgPSBkaWdpdHMucmVkdWNlUmlnaHQoZnVuY3Rpb24oY2FycnksIGQsIGksIGRpZ2l0cykge1xuICAgIGQgPSBkICsgY2Fycnk7XG4gICAgZGlnaXRzW2ldID0gZCA8IDEwID8gZCA6IGQgLSAxMDsgIC8vIGQgJSAxMFxuICAgIGlmIChkcm9wVHJhaWxpbmdaZXJvcykge1xuICAgICAgLy8gRG8gbm90IGtlZXAgbWVhbmluZ2xlc3MgZnJhY3Rpb25hbCB0cmFpbGluZyB6ZXJvcyAoZS5nLiAxNS41MjAwMCAtLT4gMTUuNTIpXG4gICAgICBpZiAoZGlnaXRzW2ldID09PSAwICYmIGkgPj0gbWluTGVuKSB7XG4gICAgICAgIGRpZ2l0cy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyb3BUcmFpbGluZ1plcm9zID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkID49IDEwID8gMSA6IDA7ICAvLyBNYXRoLmZsb29yKGQgLyAxMCk7XG4gIH0sIDApO1xuICBpZiAoY2FycnkpIHtcbiAgICBkaWdpdHMudW5zaGlmdChjYXJyeSk7XG4gICAgcGFyc2VkTnVtYmVyLmludGVnZXJMZW4rKztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRBdXRvUmFkaXgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0KTtcbiAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW50ZWdlciBsaXRlcmFsIHdoZW4gcGFyc2luZyAnICsgdGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==