/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read } from "tslib";
import { ɵfindLocaleData, ɵgetLocaleCurrencyCode, ɵgetLocalePluralCase, ɵLocaleDataIndex } from '@angular/core';
import { CURRENCIES_EN } from './currencies';
/**
 * Format styles that can be used to represent numbers.
 * @see `getLocaleNumberFormat()`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export var NumberFormatStyle;
(function (NumberFormatStyle) {
    NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
    NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
    NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
    NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
})(NumberFormatStyle || (NumberFormatStyle = {}));
/**
 * Plurality cases used for translating plurals to different languages.
 *
 * @see `NgPlural`
 * @see `NgPluralCase`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export var Plural;
(function (Plural) {
    Plural[Plural["Zero"] = 0] = "Zero";
    Plural[Plural["One"] = 1] = "One";
    Plural[Plural["Two"] = 2] = "Two";
    Plural[Plural["Few"] = 3] = "Few";
    Plural[Plural["Many"] = 4] = "Many";
    Plural[Plural["Other"] = 5] = "Other";
})(Plural || (Plural = {}));
/**
 * Context-dependant translation forms for strings.
 * Typically the standalone version is for the nominative form of the word,
 * and the format version is used for the genitive case.
 * @see [CLDR website](http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export var FormStyle;
(function (FormStyle) {
    FormStyle[FormStyle["Format"] = 0] = "Format";
    FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
})(FormStyle || (FormStyle = {}));
/**
 * String widths available for translations.
 * The specific character widths are locale-specific.
 * Examples are given for the word "Sunday" in English.
 *
 * @publicApi
 */
export var TranslationWidth;
(function (TranslationWidth) {
    /** 1 character for `en-US`. For example: 'S' */
    TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
    /** 3 characters for `en-US`. For example: 'Sun' */
    TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
    /** Full length for `en-US`. For example: "Sunday" */
    TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
    /** 2 characters for `en-US`, For example: "Su" */
    TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
})(TranslationWidth || (TranslationWidth = {}));
/**
 * String widths available for date-time formats.
 * The specific character widths are locale-specific.
 * Examples are given for `en-US`.
 *
 * @see `getLocaleDateFormat()`
 * @see `getLocaleTimeFormat()``
 * @see `getLocaleDateTimeFormat()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @publicApi
 */
export var FormatWidth;
(function (FormatWidth) {
    /**
     * For `en-US`, 'M/d/yy, h:mm a'`
     * (Example: `6/15/15, 9:03 AM`)
     */
    FormatWidth[FormatWidth["Short"] = 0] = "Short";
    /**
     * For `en-US`, `'MMM d, y, h:mm:ss a'`
     * (Example: `Jun 15, 2015, 9:03:01 AM`)
     */
    FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
    /**
     * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
     * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
     */
    FormatWidth[FormatWidth["Long"] = 2] = "Long";
    /**
     * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
     * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
     */
    FormatWidth[FormatWidth["Full"] = 3] = "Full";
})(FormatWidth || (FormatWidth = {}));
/**
 * Symbols that can be used to replace placeholders in number patterns.
 * Examples are based on `en-US` values.
 *
 * @see `getLocaleNumberSymbol()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export var NumberSymbol;
(function (NumberSymbol) {
    /**
     * Decimal separator.
     * For `en-US`, the dot character.
     * Example : 2,345`.`67
     */
    NumberSymbol[NumberSymbol["Decimal"] = 0] = "Decimal";
    /**
     * Grouping separator, typically for thousands.
     * For `en-US`, the comma character.
     * Example: 2`,`345.67
     */
    NumberSymbol[NumberSymbol["Group"] = 1] = "Group";
    /**
     * List-item separator.
     * Example: "one, two, and three"
     */
    NumberSymbol[NumberSymbol["List"] = 2] = "List";
    /**
     * Sign for percentage (out of 100).
     * Example: 23.4%
     */
    NumberSymbol[NumberSymbol["PercentSign"] = 3] = "PercentSign";
    /**
     * Sign for positive numbers.
     * Example: +23
     */
    NumberSymbol[NumberSymbol["PlusSign"] = 4] = "PlusSign";
    /**
     * Sign for negative numbers.
     * Example: -23
     */
    NumberSymbol[NumberSymbol["MinusSign"] = 5] = "MinusSign";
    /**
     * Computer notation for exponential value (n times a power of 10).
     * Example: 1.2E3
     */
    NumberSymbol[NumberSymbol["Exponential"] = 6] = "Exponential";
    /**
     * Human-readable format of exponential.
     * Example: 1.2x103
     */
    NumberSymbol[NumberSymbol["SuperscriptingExponent"] = 7] = "SuperscriptingExponent";
    /**
     * Sign for permille (out of 1000).
     * Example: 23.4‰
     */
    NumberSymbol[NumberSymbol["PerMille"] = 8] = "PerMille";
    /**
     * Infinity, can be used with plus and minus.
     * Example: ∞, +∞, -∞
     */
    NumberSymbol[NumberSymbol["Infinity"] = 9] = "Infinity";
    /**
     * Not a number.
     * Example: NaN
     */
    NumberSymbol[NumberSymbol["NaN"] = 10] = "NaN";
    /**
     * Symbol used between time units.
     * Example: 10:52
     */
    NumberSymbol[NumberSymbol["TimeSeparator"] = 11] = "TimeSeparator";
    /**
     * Decimal separator for currency values (fallback to `Decimal`).
     * Example: $2,345.67
     */
    NumberSymbol[NumberSymbol["CurrencyDecimal"] = 12] = "CurrencyDecimal";
    /**
     * Group separator for currency values (fallback to `Group`).
     * Example: $2,345.67
     */
    NumberSymbol[NumberSymbol["CurrencyGroup"] = 13] = "CurrencyGroup";
})(NumberSymbol || (NumberSymbol = {}));
/**
 * The value for each day of the week, based on the `en-US` locale
 *
 * @publicApi
 */
export var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
/**
 * Retrieves the locale ID from the currently loaded locale.
 * The loaded locale could be, for example, a global one rather than a regional one.
 * @param locale A locale code, such as `fr-FR`.
 * @returns The locale code. For example, `fr`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleId(locale) {
    return ɵfindLocaleData(locale)[ɵLocaleDataIndex.LocaleId];
}
/**
 * Retrieves day period strings for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleDayPeriods(locale, formStyle, width) {
    var data = ɵfindLocaleData(locale);
    var amPmData = [
        data[ɵLocaleDataIndex.DayPeriodsFormat], data[ɵLocaleDataIndex.DayPeriodsStandalone]
    ];
    var amPm = getLastDefinedValue(amPmData, formStyle);
    return getLastDefinedValue(amPm, width);
}
/**
 * Retrieves days of the week for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleDayNames(locale, formStyle, width) {
    var data = ɵfindLocaleData(locale);
    var daysData = [data[ɵLocaleDataIndex.DaysFormat], data[ɵLocaleDataIndex.DaysStandalone]];
    var days = getLastDefinedValue(daysData, formStyle);
    return getLastDefinedValue(days, width);
}
/**
 * Retrieves months of the year for the given locale, using the Gregorian calendar.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns An array of localized name strings.
 * For example,  `[January, February, ...]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleMonthNames(locale, formStyle, width) {
    var data = ɵfindLocaleData(locale);
    var monthsData = [data[ɵLocaleDataIndex.MonthsFormat], data[ɵLocaleDataIndex.MonthsStandalone]];
    var months = getLastDefinedValue(monthsData, formStyle);
    return getLastDefinedValue(months, width);
}
/**
 * Retrieves Gregorian-calendar eras for the given locale.
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.

 * @returns An array of localized era strings.
 * For example, `[AD, BC]` for `en-US`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleEraNames(locale, width) {
    var data = ɵfindLocaleData(locale);
    var erasData = data[ɵLocaleDataIndex.Eras];
    return getLastDefinedValue(erasData, width);
}
/**
 * Retrieves the first day of the week for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns A day index number, using the 0-based week-day index for `en-US`
 * (Sunday = 0, Monday = 1, ...).
 * For example, for `fr-FR`, returns 1 to indicate that the first day is Monday.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleFirstDayOfWeek(locale) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.FirstDayOfWeek];
}
/**
 * Range of week days that are considered the week-end for the given locale.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The range of day values, `[startDay, endDay]`.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleWeekEndRange(locale) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.WeekendRange];
}
/**
 * Retrieves a localized date-value formating string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formating string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleDateFormat(locale, width) {
    var data = ɵfindLocaleData(locale);
    return getLastDefinedValue(data[ɵLocaleDataIndex.DateFormat], width);
}
/**
 * Retrieves a localized time-value formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)

 * @publicApi
 */
export function getLocaleTimeFormat(locale, width) {
    var data = ɵfindLocaleData(locale);
    return getLastDefinedValue(data[ɵLocaleDataIndex.TimeFormat], width);
}
/**
 * Retrieves a localized date-time formatting string.
 *
 * @param locale A locale code for the locale format rules to use.
 * @param width The format type.
 * @returns The localized formatting string.
 * @see `FormatWidth`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleDateTimeFormat(locale, width) {
    var data = ɵfindLocaleData(locale);
    var dateTimeFormatData = data[ɵLocaleDataIndex.DateTimeFormat];
    return getLastDefinedValue(dateTimeFormatData, width);
}
/**
 * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
 * @param locale The locale code.
 * @param symbol The symbol to localize.
 * @returns The character for the localized symbol.
 * @see `NumberSymbol`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleNumberSymbol(locale, symbol) {
    var data = ɵfindLocaleData(locale);
    var res = data[ɵLocaleDataIndex.NumberSymbols][symbol];
    if (typeof res === 'undefined') {
        if (symbol === NumberSymbol.CurrencyDecimal) {
            return data[ɵLocaleDataIndex.NumberSymbols][NumberSymbol.Decimal];
        }
        else if (symbol === NumberSymbol.CurrencyGroup) {
            return data[ɵLocaleDataIndex.NumberSymbols][NumberSymbol.Group];
        }
    }
    return res;
}
/**
 * Retrieves a number format for a given locale.
 *
 * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
 * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
 * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
 *
 * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
 * that stand for the decimal separator, and so on, and are NOT real characters.
 * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
 * your language the decimal point is written with a comma. The symbols should be replaced by the
 * local equivalents, using the appropriate `NumberSymbol` for your language.
 *
 * Here are the special characters used in number patterns:
 *
 * | Symbol | Meaning |
 * |--------|---------|
 * | . | Replaced automatically by the character used for the decimal point. |
 * | , | Replaced by the "grouping" (thousands) separator. |
 * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
 * | # | Replaced by a digit (or nothing if there aren't enough). |
 * | ¤ | Replaced by a currency symbol, such as $ or USD. |
 * | % | Marks a percent format. The % symbol may change position, but must be retained. |
 * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
 * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
 *
 * @param locale A locale code for the locale format rules to use.
 * @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
 * @returns The localized format string.
 * @see `NumberFormatStyle`
 * @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleNumberFormat(locale, type) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.NumberFormats][type];
}
/**
 * Retrieves the symbol used to represent the currency for the main country
 * corresponding to a given locale. For example, '$' for `en-US`.
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The localized symbol character,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleCurrencySymbol(locale) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.CurrencySymbol] || null;
}
/**
 * Retrieves the name of the currency for the main country corresponding
 * to a given locale. For example, 'US Dollar' for `en-US`.
 * @param locale A locale code for the locale format rules to use.
 * @returns The currency name,
 * or `null` if the main country cannot be determined.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleCurrencyName(locale) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.CurrencyName] || null;
}
/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param locale The code of the locale whose currency code we want.
 * @returns The code of the default currency for the given locale.
 *
 * @publicApi
 */
export function getLocaleCurrencyCode(locale) {
    return ɵgetLocaleCurrencyCode(locale);
}
/**
 * Retrieves the currency values for a given locale.
 * @param locale A locale code for the locale format rules to use.
 * @returns The currency values.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 */
function getLocaleCurrencies(locale) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.Currencies];
}
/**
 * @alias core/ɵgetLocalePluralCase
 * @publicApi
 */
export var getLocalePluralCase = ɵgetLocalePluralCase;
function checkFullData(data) {
    if (!data[ɵLocaleDataIndex.ExtraData]) {
        throw new Error("Missing extra locale data for the locale \"" + data[ɵLocaleDataIndex
            .LocaleId] + "\". Use \"registerLocaleData\" to load new data. See the \"I18n guide\" on angular.io to know more.");
    }
}
/**
 * Retrieves locale-specific rules used to determine which day period to use
 * when more than one period is defined for a locale.
 *
 * There is a rule for each defined day period. The
 * first rule is applied to the first day period and so on.
 * Fall back to AM/PM when no rules are available.
 *
 * A rule can specify a period as time range, or as a single time value.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @returns The rules for the locale, a single time value or array of *from-time, to-time*,
 * or null if no periods are available.
 *
 * @see `getLocaleExtraDayPeriods()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleExtraDayPeriodRules(locale) {
    var data = ɵfindLocaleData(locale);
    checkFullData(data);
    var rules = data[ɵLocaleDataIndex.ExtraData][2 /* ExtraDayPeriodsRules */] || [];
    return rules.map(function (rule) {
        if (typeof rule === 'string') {
            return extractTime(rule);
        }
        return [extractTime(rule[0]), extractTime(rule[1])];
    });
}
/**
 * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
 * in different languages.
 * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
 *
 * This functionality is only available when you have loaded the full locale data.
 * See the ["I18n guide"](guide/i18n#i18n-pipes).
 *
 * @param locale A locale code for the locale format rules to use.
 * @param formStyle The required grammatical form.
 * @param width The required character width.
 * @returns The translated day-period strings.
 * @see `getLocaleExtraDayPeriodRules()`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getLocaleExtraDayPeriods(locale, formStyle, width) {
    var data = ɵfindLocaleData(locale);
    checkFullData(data);
    var dayPeriodsData = [
        data[ɵLocaleDataIndex.ExtraData][0 /* ExtraDayPeriodFormats */],
        data[ɵLocaleDataIndex.ExtraData][1 /* ExtraDayPeriodStandalone */]
    ];
    var dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
    return getLastDefinedValue(dayPeriods, width) || [];
}
/**
 * Retrieves the writing direction of a specified locale
 * @param locale A locale code for the locale format rules to use.
 * @publicApi
 * @returns 'rtl' or 'ltr'
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 */
export function getLocaleDirection(locale) {
    var data = ɵfindLocaleData(locale);
    return data[ɵLocaleDataIndex.Directionality];
}
/**
 * Retrieves the first value that is defined in an array, going backwards from an index position.
 *
 * To avoid repeating the same data (as when the "format" and "standalone" forms are the same)
 * add the first value to the locale data arrays, and add other values only if they are different.
 *
 * @param data The data array to retrieve from.
 * @param index A 0-based index into the array to start from.
 * @returns The value immediately before the given index position.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
function getLastDefinedValue(data, index) {
    for (var i = index; i > -1; i--) {
        if (typeof data[i] !== 'undefined') {
            return data[i];
        }
    }
    throw new Error('Locale data API: locale data undefined');
}
/**
 * Extracts the hours and minutes from a string like "15:45"
 */
function extractTime(time) {
    var _a = __read(time.split(':'), 2), h = _a[0], m = _a[1];
    return { hours: +h, minutes: +m };
}
/**
 * Retrieves the currency symbol for a given currency code.
 *
 * For example, for the default `en-US` locale, the code `USD` can
 * be represented by the narrow symbol `$` or the wide symbol `US$`.
 *
 * @param code The currency code.
 * @param format The format, `wide` or `narrow`.
 * @param locale A locale code for the locale format rules to use.
 *
 * @returns The symbol, or the currency code if no symbol is available.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getCurrencySymbol(code, format, locale) {
    if (locale === void 0) { locale = 'en'; }
    var currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
    var symbolNarrow = currency[1 /* SymbolNarrow */];
    if (format === 'narrow' && typeof symbolNarrow === 'string') {
        return symbolNarrow;
    }
    return currency[0 /* Symbol */] || code;
}
// Most currencies have cents, that's why the default is 2
var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
/**
 * Reports the number of decimal digits for a given currency.
 * The value depends upon the presence of cents in that particular currency.
 *
 * @param code The currency code.
 * @returns The number of decimal digits, typically 0 or 2.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
export function getNumberOfCurrencyDigits(code) {
    var digits;
    var currency = CURRENCIES_EN[code];
    if (currency) {
        digits = currency[2 /* NbOfDigits */];
    }
    return typeof digits === 'number' ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlX2RhdGFfYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9pMThuL2xvY2FsZV9kYXRhX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUF3QyxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFckosT0FBTyxFQUFDLGFBQWEsRUFBb0IsTUFBTSxjQUFjLENBQUM7QUFHOUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFOLElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUMzQiwrREFBTyxDQUFBO0lBQ1AsK0RBQU8sQ0FBQTtJQUNQLGlFQUFRLENBQUE7SUFDUixxRUFBVSxDQUFBO0FBQ1osQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBTixJQUFZLE1BT1g7QUFQRCxXQUFZLE1BQU07SUFDaEIsbUNBQVEsQ0FBQTtJQUNSLGlDQUFPLENBQUE7SUFDUCxpQ0FBTyxDQUFBO0lBQ1AsaUNBQU8sQ0FBQTtJQUNQLG1DQUFRLENBQUE7SUFDUixxQ0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQVBXLE1BQU0sS0FBTixNQUFNLFFBT2pCO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLDZDQUFNLENBQUE7SUFDTixxREFBVSxDQUFBO0FBQ1osQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBU1g7QUFURCxXQUFZLGdCQUFnQjtJQUMxQixnREFBZ0Q7SUFDaEQsMkRBQU0sQ0FBQTtJQUNOLG1EQUFtRDtJQUNuRCxxRUFBVyxDQUFB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bEMsQ0FBQztBQUlEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVksRUFBRSxNQUF1QixFQUFFLE1BQWE7SUFBYix1QkFBQSxFQUFBLGFBQWE7SUFDcEYsSUFBTSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRixJQUFNLFlBQVksR0FBRyxRQUFRLHNCQUE2QixDQUFDO0lBRTNELElBQUksTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUU7UUFDM0QsT0FBTyxZQUFZLENBQUM7S0FDckI7SUFFRCxPQUFPLFFBQVEsZ0JBQXVCLElBQUksSUFBSSxDQUFDO0FBQ2pELENBQUM7QUFFRCwwREFBMEQ7QUFDMUQsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUM7QUFFeEM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLHlCQUF5QixDQUFDLElBQVk7SUFDcEQsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsSUFBSSxRQUFRLEVBQUU7UUFDWixNQUFNLEdBQUcsUUFBUSxvQkFBMkIsQ0FBQztLQUM5QztJQUNELE9BQU8sT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDO0FBQzdFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ybVDdXJyZW5jeUluZGV4LCDJtUV4dHJhTG9jYWxlRGF0YUluZGV4LCDJtWZpbmRMb2NhbGVEYXRhLCDJtWdldExvY2FsZUN1cnJlbmN5Q29kZSwgybVnZXRMb2NhbGVQbHVyYWxDYXNlLCDJtUxvY2FsZURhdGFJbmRleH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q1VSUkVOQ0lFU19FTiwgQ3VycmVuY2llc1N5bWJvbHN9IGZyb20gJy4vY3VycmVuY2llcyc7XG5cblxuLyoqXG4gKiBGb3JtYXQgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IG51bWJlcnMuXG4gKiBAc2VlIGBnZXRMb2NhbGVOdW1iZXJGb3JtYXQoKWAuXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGVudW0gTnVtYmVyRm9ybWF0U3R5bGUge1xuICBEZWNpbWFsLFxuICBQZXJjZW50LFxuICBDdXJyZW5jeSxcbiAgU2NpZW50aWZpY1xufVxuXG4vKipcbiAqIFBsdXJhbGl0eSBjYXNlcyB1c2VkIGZvciB0cmFuc2xhdGluZyBwbHVyYWxzIHRvIGRpZmZlcmVudCBsYW5ndWFnZXMuXG4gKlxuICogQHNlZSBgTmdQbHVyYWxgXG4gKiBAc2VlIGBOZ1BsdXJhbENhc2VgXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGVudW0gUGx1cmFsIHtcbiAgWmVybyA9IDAsXG4gIE9uZSA9IDEsXG4gIFR3byA9IDIsXG4gIEZldyA9IDMsXG4gIE1hbnkgPSA0LFxuICBPdGhlciA9IDUsXG59XG5cbi8qKlxuICogQ29udGV4dC1kZXBlbmRhbnQgdHJhbnNsYXRpb24gZm9ybXMgZm9yIHN0cmluZ3MuXG4gKiBUeXBpY2FsbHkgdGhlIHN0YW5kYWxvbmUgdmVyc2lvbiBpcyBmb3IgdGhlIG5vbWluYXRpdmUgZm9ybSBvZiB0aGUgd29yZCxcbiAqIGFuZCB0aGUgZm9ybWF0IHZlcnNpb24gaXMgdXNlZCBmb3IgdGhlIGdlbml0aXZlIGNhc2UuXG4gKiBAc2VlIFtDTERSIHdlYnNpdGVdKGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS0xL2RhdGUtdGltZSNUT0MtU3RhbmRhbG9uZS12cy4tRm9ybWF0LVN0eWxlcylcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZW51bSBGb3JtU3R5bGUge1xuICBGb3JtYXQsXG4gIFN0YW5kYWxvbmVcbn1cblxuLyoqXG4gKiBTdHJpbmcgd2lkdGhzIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxuICogVGhlIHNwZWNpZmljIGNoYXJhY3RlciB3aWR0aHMgYXJlIGxvY2FsZS1zcGVjaWZpYy5cbiAqIEV4YW1wbGVzIGFyZSBnaXZlbiBmb3IgdGhlIHdvcmQgXCJTdW5kYXlcIiBpbiBFbmdsaXNoLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGVudW0gVHJhbnNsYXRpb25XaWR0aCB7XG4gIC8qKiAxIGNoYXJhY3RlciBmb3IgYGVuLVVTYC4gRm9yIGV4YW1wbGU6ICdTJyAqL1xuICBOYXJyb3csXG4gIC8qKiAzIGNoYXJhY3RlcnMgZm9yIGBlbi1VU2AuIEZvciBleGFtcGxlOiAnU3VuJyAqL1xuICBBYmJyZXZpYXRlZCxcbiAgLyoqIEZ1bGwgbGVuZ3RoIGZvciBgZW4tVVNgLiBGb3IgZXhhbXBsZTogXCJTdW5kYXlcIiAqL1xuICBXaWRlLFxuICAvKiogMiBjaGFyYWN0ZXJzIGZvciBgZW4tVVNgLCBGb3IgZXhhbXBsZTogXCJTdVwiICovXG4gIFNob3J0XG59XG5cbi8qKlxuICogU3RyaW5nIHdpZHRocyBhdmFpbGFibGUgZm9yIGRhdGUtdGltZSBmb3JtYXRzLlxuICogVGhlIHNwZWNpZmljIGNoYXJhY3RlciB3aWR0aHMgYXJlIGxvY2FsZS1zcGVjaWZpYy5cbiAqIEV4YW1wbGVzIGFyZSBnaXZlbiBmb3IgYGVuLVVTYC5cbiAqXG4gKiBAc2VlIGBnZXRMb2NhbGVEYXRlRm9ybWF0KClgXG4gKiBAc2VlIGBnZXRMb2NhbGVUaW1lRm9ybWF0KClgYFxuICogQHNlZSBgZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQoKWBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBlbnVtIEZvcm1hdFdpZHRoIHtcbiAgLyoqXG4gICAqIEZvciBgZW4tVVNgLCAnTS9kL3l5LCBoOm1tIGEnYFxuICAgKiAoRXhhbXBsZTogYDYvMTUvMTUsIDk6MDMgQU1gKVxuICAgKi9cbiAgU2hvcnQsXG4gIC8qKlxuICAgKiBGb3IgYGVuLVVTYCwgYCdNTU0gZCwgeSwgaDptbTpzcyBhJ2BcbiAgICogKEV4YW1wbGU6IGBKdW4gMTUsIDIwMTUsIDk6MDM6MDEgQU1gKVxuICAgKi9cbiAgTWVkaXVtLFxuICAvKipcbiAgICogRm9yIGBlbi1VU2AsIGAnTU1NTSBkLCB5LCBoOm1tOnNzIGEgeidgXG4gICAqIChFeGFtcGxlOiBgSnVuZSAxNSwgMjAxNSBhdCA5OjAzOjAxIEFNIEdNVCsxYClcbiAgICovXG4gIExvbmcsXG4gIC8qKlxuICAgKiBGb3IgYGVuLVVTYCwgYCdFRUVFLCBNTU1NIGQsIHksIGg6bW06c3MgYSB6enp6J2BcbiAgICogKEV4YW1wbGU6IGBNb25kYXksIEp1bmUgMTUsIDIwMTUgYXQgOTowMzowMSBBTSBHTVQrMDE6MDBgKVxuICAgKi9cbiAgRnVsbFxufVxuXG4vKipcbiAqIFN5bWJvbHMgdGhhdCBjYW4gYmUgdXNlZCB0byByZXBsYWNlIHBsYWNlaG9sZGVycyBpbiBudW1iZXIgcGF0dGVybnMuXG4gKiBFeGFtcGxlcyBhcmUgYmFzZWQgb24gYGVuLVVTYCB2YWx1ZXMuXG4gKlxuICogQHNlZSBgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKClgXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGVudW0gTnVtYmVyU3ltYm9sIHtcbiAgLyoqXG4gICAqIERlY2ltYWwgc2VwYXJhdG9yLlxuICAgKiBGb3IgYGVuLVVTYCwgdGhlIGRvdCBjaGFyYWN0ZXIuXG4gICAqIEV4YW1wbGUgOiAyLDM0NWAuYDY3XG4gICAqL1xuICBEZWNpbWFsLFxuICAvKipcbiAgICogR3JvdXBpbmcgc2VwYXJhdG9yLCB0eXBpY2FsbHkgZm9yIHRob3VzYW5kcy5cbiAgICogRm9yIGBlbi1VU2AsIHRoZSBjb21tYSBjaGFyYWN0ZXIuXG4gICAqIEV4YW1wbGU6IDJgLGAzNDUuNjdcbiAgICovXG4gIEdyb3VwLFxuICAvKipcbiAgICogTGlzdC1pdGVtIHNlcGFyYXRvci5cbiAgICogRXhhbXBsZTogXCJvbmUsIHR3bywgYW5kIHRocmVlXCJcbiAgICovXG4gIExpc3QsXG4gIC8qKlxuICAgKiBTaWduIGZvciBwZXJjZW50YWdlIChvdXQgb2YgMTAwKS5cbiAgICogRXhhbXBsZTogMjMuNCVcbiAgICovXG4gIFBlcmNlbnRTaWduLFxuICAvKipcbiAgICogU2lnbiBmb3IgcG9zaXRpdmUgbnVtYmVycy5cbiAgICogRXhhbXBsZTogKzIzXG4gICAqL1xuICBQbHVzU2lnbixcbiAgLyoqXG4gICAqIFNpZ24gZm9yIG5lZ2F0aXZlIG51bWJlcnMuXG4gICAqIEV4YW1wbGU6IC0yM1xuICAgKi9cbiAgTWludXNTaWduLFxuICAvKipcbiAgICogQ29tcHV0ZXIgbm90YXRpb24gZm9yIGV4cG9uZW50aWFsIHZhbHVlIChuIHRpbWVzIGEgcG93ZXIgb2YgMTApLlxuICAgKiBFeGFtcGxlOiAxLjJFM1xuICAgKi9cbiAgRXhwb25lbnRpYWwsXG4gIC8qKlxuICAgKiBIdW1hbi1yZWFkYWJsZSBmb3JtYXQgb2YgZXhwb25lbnRpYWwuXG4gICAqIEV4YW1wbGU6IDEuMngxMDNcbiAgICovXG4gIFN1cGVyc2NyaXB0aW5nRXhwb25lbnQsXG4gIC8qKlxuICAgKiBTaWduIGZvciBwZXJtaWxsZSAob3V0IG9mIDEwMDApLlxuICAgKiBFeGFtcGxlOiAyMy404oCwXG4gICAqL1xuICBQZXJNaWxsZSxcbiAgLyoqXG4gICAqIEluZmluaXR5LCBjYW4gYmUgdXNlZCB3aXRoIHBsdXMgYW5kIG1pbnVzLlxuICAgKiBFeGFtcGxlOiDiiJ4sICviiJ4sIC3iiJ5cbiAgICovXG4gIEluZmluaXR5LFxuICAvKipcbiAgICogTm90IGEgbnVtYmVyLlxuICAgKiBFeGFtcGxlOiBOYU5cbiAgICovXG4gIE5hTixcbiAgLyoqXG4gICAqIFN5bWJvbCB1c2VkIGJldHdlZW4gdGltZSB1bml0cy5cbiAgICogRXhhbXBsZTogMTA6NTJcbiAgICovXG4gIFRpbWVTZXBhcmF0b3IsXG4gIC8qKlxuICAgKiBEZWNpbWFsIHNlcGFyYXRvciBmb3IgY3VycmVuY3kgdmFsdWVzIChmYWxsYmFjayB0byBgRGVjaW1hbGApLlxuICAgKiBFeGFtcGxlOiAkMiwzNDUuNjdcbiAgICovXG4gIEN1cnJlbmN5RGVjaW1hbCxcbiAgLyoqXG4gICAqIEdyb3VwIHNlcGFyYXRvciBmb3IgY3VycmVuY3kgdmFsdWVzIChmYWxsYmFjayB0byBgR3JvdXBgKS5cbiAgICogRXhhbXBsZTogJDIsMzQ1LjY3XG4gICAqL1xuICBDdXJyZW5jeUdyb3VwXG59XG5cbi8qKlxuICogVGhlIHZhbHVlIGZvciBlYWNoIGRheSBvZiB0aGUgd2VlaywgYmFzZWQgb24gdGhlIGBlbi1VU2AgbG9jYWxlXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZW51bSBXZWVrRGF5IHtcbiAgU3VuZGF5ID0gMCxcbiAgTW9uZGF5LFxuICBUdWVzZGF5LFxuICBXZWRuZXNkYXksXG4gIFRodXJzZGF5LFxuICBGcmlkYXksXG4gIFNhdHVyZGF5XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBsb2NhbGUgSUQgZnJvbSB0aGUgY3VycmVudGx5IGxvYWRlZCBsb2NhbGUuXG4gKiBUaGUgbG9hZGVkIGxvY2FsZSBjb3VsZCBiZSwgZm9yIGV4YW1wbGUsIGEgZ2xvYmFsIG9uZSByYXRoZXIgdGhhbiBhIHJlZ2lvbmFsIG9uZS5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSwgc3VjaCBhcyBgZnItRlJgLlxuICogQHJldHVybnMgVGhlIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSwgYGZyYC5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlSWQobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gybVmaW5kTG9jYWxlRGF0YShsb2NhbGUpW8m1TG9jYWxlRGF0YUluZGV4LkxvY2FsZUlkXTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgZGF5IHBlcmlvZCBzdHJpbmdzIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIHBlcmlvZCBzdHJpbmdzLiBGb3IgZXhhbXBsZSwgYFtBTSwgUE1dYCBmb3IgYGVuLVVTYC5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRGF5UGVyaW9kcyhcbiAgICBsb2NhbGU6IHN0cmluZywgZm9ybVN0eWxlOiBGb3JtU3R5bGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogW3N0cmluZywgc3RyaW5nXSB7XG4gIGNvbnN0IGRhdGEgPSDJtWZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIGNvbnN0IGFtUG1EYXRhID0gPFtzdHJpbmcsIHN0cmluZ11bXVtdPltcbiAgICBkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkRheVBlcmlvZHNGb3JtYXRdLCBkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkRheVBlcmlvZHNTdGFuZGFsb25lXVxuICBdO1xuICBjb25zdCBhbVBtID0gZ2V0TGFzdERlZmluZWRWYWx1ZShhbVBtRGF0YSwgZm9ybVN0eWxlKTtcbiAgcmV0dXJuIGdldExhc3REZWZpbmVkVmFsdWUoYW1QbSwgd2lkdGgpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBkYXlzIG9mIHRoZSB3ZWVrIGZvciB0aGUgZ2l2ZW4gbG9jYWxlLCB1c2luZyB0aGUgR3JlZ29yaWFuIGNhbGVuZGFyLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIG5hbWUgc3RyaW5ncy5cbiAqIEZvciBleGFtcGxlLGBbU3VuZGF5LCBNb25kYXksIC4uLiBTYXR1cmRheV1gIGZvciBgZW4tVVNgLlxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXlOYW1lcyhcbiAgICBsb2NhbGU6IHN0cmluZywgZm9ybVN0eWxlOiBGb3JtU3R5bGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoKTogc3RyaW5nW10ge1xuICBjb25zdCBkYXRhID0gybVmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICBjb25zdCBkYXlzRGF0YSA9XG4gICAgICA8c3RyaW5nW11bXVtdPltkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkRheXNGb3JtYXRdLCBkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkRheXNTdGFuZGFsb25lXV07XG4gIGNvbnN0IGRheXMgPSBnZXRMYXN0RGVmaW5lZFZhbHVlKGRheXNEYXRhLCBmb3JtU3R5bGUpO1xuICByZXR1cm4gZ2V0TGFzdERlZmluZWRWYWx1ZShkYXlzLCB3aWR0aCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIG1vbnRocyBvZiB0aGUgeWVhciBmb3IgdGhlIGdpdmVuIGxvY2FsZSwgdXNpbmcgdGhlIEdyZWdvcmlhbiBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGxvY2FsaXplZCBuYW1lIHN0cmluZ3MuXG4gKiBGb3IgZXhhbXBsZSwgIGBbSmFudWFyeSwgRmVicnVhcnksIC4uLl1gIGZvciBgZW4tVVNgLlxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVNb250aE5hbWVzKFxuICAgIGxvY2FsZTogc3RyaW5nLCBmb3JtU3R5bGU6IEZvcm1TdHlsZSwgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGRhdGEgPSDJtWZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIGNvbnN0IG1vbnRoc0RhdGEgPVxuICAgICAgPHN0cmluZ1tdW11bXT5bZGF0YVvJtUxvY2FsZURhdGFJbmRleC5Nb250aHNGb3JtYXRdLCBkYXRhW8m1TG9jYWxlRGF0YUluZGV4Lk1vbnRoc1N0YW5kYWxvbmVdXTtcbiAgY29uc3QgbW9udGhzID0gZ2V0TGFzdERlZmluZWRWYWx1ZShtb250aHNEYXRhLCBmb3JtU3R5bGUpO1xuICByZXR1cm4gZ2V0TGFzdERlZmluZWRWYWx1ZShtb250aHMsIHdpZHRoKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgR3JlZ29yaWFuLWNhbGVuZGFyIGVyYXMgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEBwYXJhbSBmb3JtU3R5bGUgVGhlIHJlcXVpcmVkIGdyYW1tYXRpY2FsIGZvcm0uXG4gKiBAcGFyYW0gd2lkdGggVGhlIHJlcXVpcmVkIGNoYXJhY3RlciB3aWR0aC5cblxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbG9jYWxpemVkIGVyYSBzdHJpbmdzLlxuICogRm9yIGV4YW1wbGUsIGBbQUQsIEJDXWAgZm9yIGBlbi1VU2AuXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZUVyYU5hbWVzKGxvY2FsZTogc3RyaW5nLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICBjb25zdCBkYXRhID0gybVmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICBjb25zdCBlcmFzRGF0YSA9IDxbc3RyaW5nLCBzdHJpbmddW10+ZGF0YVvJtUxvY2FsZURhdGFJbmRleC5FcmFzXTtcbiAgcmV0dXJuIGdldExhc3REZWZpbmVkVmFsdWUoZXJhc0RhdGEsIHdpZHRoKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEByZXR1cm5zIEEgZGF5IGluZGV4IG51bWJlciwgdXNpbmcgdGhlIDAtYmFzZWQgd2Vlay1kYXkgaW5kZXggZm9yIGBlbi1VU2BcbiAqIChTdW5kYXkgPSAwLCBNb25kYXkgPSAxLCAuLi4pLlxuICogRm9yIGV4YW1wbGUsIGZvciBgZnItRlJgLCByZXR1cm5zIDEgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZmlyc3QgZGF5IGlzIE1vbmRheS5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRmlyc3REYXlPZldlZWsobG9jYWxlOiBzdHJpbmcpOiBXZWVrRGF5IHtcbiAgY29uc3QgZGF0YSA9IMm1ZmluZExvY2FsZURhdGEobG9jYWxlKTtcbiAgcmV0dXJuIGRhdGFbybVMb2NhbGVEYXRhSW5kZXguRmlyc3REYXlPZldlZWtdO1xufVxuXG4vKipcbiAqIFJhbmdlIG9mIHdlZWsgZGF5cyB0aGF0IGFyZSBjb25zaWRlcmVkIHRoZSB3ZWVrLWVuZCBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEByZXR1cm5zIFRoZSByYW5nZSBvZiBkYXkgdmFsdWVzLCBgW3N0YXJ0RGF5LCBlbmREYXldYC5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlV2Vla0VuZFJhbmdlKGxvY2FsZTogc3RyaW5nKTogW1dlZWtEYXksIFdlZWtEYXldIHtcbiAgY29uc3QgZGF0YSA9IMm1ZmluZExvY2FsZURhdGEobG9jYWxlKTtcbiAgcmV0dXJuIGRhdGFbybVMb2NhbGVEYXRhSW5kZXguV2Vla2VuZFJhbmdlXTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSBsb2NhbGl6ZWQgZGF0ZS12YWx1ZSBmb3JtYXRpbmcgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIHdpZHRoIFRoZSBmb3JtYXQgdHlwZS5cbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZm9ybWF0aW5nIHN0cmluZy5cbiAqIEBzZWUgYEZvcm1hdFdpZHRoYFxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXRlRm9ybWF0KGxvY2FsZTogc3RyaW5nLCB3aWR0aDogRm9ybWF0V2lkdGgpOiBzdHJpbmcge1xuICBjb25zdCBkYXRhID0gybVmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICByZXR1cm4gZ2V0TGFzdERlZmluZWRWYWx1ZShkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkRhdGVGb3JtYXRdLCB3aWR0aCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEgbG9jYWxpemVkIHRpbWUtdmFsdWUgZm9ybWF0dGluZyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcGFyYW0gd2lkdGggVGhlIGZvcm1hdCB0eXBlLlxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBmb3JtYXR0aW5nIHN0cmluZy5cbiAqIEBzZWUgYEZvcm1hdFdpZHRoYFxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlVGltZUZvcm1hdChsb2NhbGU6IHN0cmluZywgd2lkdGg6IEZvcm1hdFdpZHRoKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0YSA9IMm1ZmluZExvY2FsZURhdGEobG9jYWxlKTtcbiAgcmV0dXJuIGdldExhc3REZWZpbmVkVmFsdWUoZGF0YVvJtUxvY2FsZURhdGFJbmRleC5UaW1lRm9ybWF0XSwgd2lkdGgpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhIGxvY2FsaXplZCBkYXRlLXRpbWUgZm9ybWF0dGluZyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcGFyYW0gd2lkdGggVGhlIGZvcm1hdCB0eXBlLlxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBmb3JtYXR0aW5nIHN0cmluZy5cbiAqIEBzZWUgYEZvcm1hdFdpZHRoYFxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXRlVGltZUZvcm1hdChsb2NhbGU6IHN0cmluZywgd2lkdGg6IEZvcm1hdFdpZHRoKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0YSA9IMm1ZmluZExvY2FsZURhdGEobG9jYWxlKTtcbiAgY29uc3QgZGF0ZVRpbWVGb3JtYXREYXRhID0gPHN0cmluZ1tdPmRhdGFbybVMb2NhbGVEYXRhSW5kZXguRGF0ZVRpbWVGb3JtYXRdO1xuICByZXR1cm4gZ2V0TGFzdERlZmluZWRWYWx1ZShkYXRlVGltZUZvcm1hdERhdGEsIHdpZHRoKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSBsb2NhbGl6ZWQgbnVtYmVyIHN5bWJvbCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIG51bWJlciBmb3JtYXRzLlxuICogQHBhcmFtIGxvY2FsZSBUaGUgbG9jYWxlIGNvZGUuXG4gKiBAcGFyYW0gc3ltYm9sIFRoZSBzeW1ib2wgdG8gbG9jYWxpemUuXG4gKiBAcmV0dXJucyBUaGUgY2hhcmFjdGVyIGZvciB0aGUgbG9jYWxpemVkIHN5bWJvbC5cbiAqIEBzZWUgYE51bWJlclN5bWJvbGBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZTogc3RyaW5nLCBzeW1ib2w6IE51bWJlclN5bWJvbCk6IHN0cmluZyB7XG4gIGNvbnN0IGRhdGEgPSDJtWZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIGNvbnN0IHJlcyA9IGRhdGFbybVMb2NhbGVEYXRhSW5kZXguTnVtYmVyU3ltYm9sc11bc3ltYm9sXTtcbiAgaWYgKHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHN5bWJvbCA9PT0gTnVtYmVyU3ltYm9sLkN1cnJlbmN5RGVjaW1hbCkge1xuICAgICAgcmV0dXJuIGRhdGFbybVMb2NhbGVEYXRhSW5kZXguTnVtYmVyU3ltYm9sc11bTnVtYmVyU3ltYm9sLkRlY2ltYWxdO1xuICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSBOdW1iZXJTeW1ib2wuQ3VycmVuY3lHcm91cCkge1xuICAgICAgcmV0dXJuIGRhdGFbybVMb2NhbGVEYXRhSW5kZXguTnVtYmVyU3ltYm9sc11bTnVtYmVyU3ltYm9sLkdyb3VwXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSBudW1iZXIgZm9ybWF0IGZvciBhIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiBOdW1iZXJzIGFyZSBmb3JtYXR0ZWQgdXNpbmcgcGF0dGVybnMsIGxpa2UgYCMsIyMjLjAwYC4gRm9yIGV4YW1wbGUsIHRoZSBwYXR0ZXJuIGAjLCMjIy4wMGBcbiAqIHdoZW4gdXNlZCB0byBmb3JtYXQgdGhlIG51bWJlciAxMjM0NS42NzggY291bGQgcmVzdWx0IGluIFwiMTInMzQ1LDY3OFwiLiBUaGF0IHdvdWxkIGhhcHBlbiBpZiB0aGVcbiAqIGdyb3VwaW5nIHNlcGFyYXRvciBmb3IgeW91ciBsYW5ndWFnZSBpcyBhbiBhcG9zdHJvcGhlLCBhbmQgdGhlIGRlY2ltYWwgc2VwYXJhdG9yIGlzIGEgY29tbWEuXG4gKlxuICogPGI+SW1wb3J0YW50OjwvYj4gVGhlIGNoYXJhY3RlcnMgYC5gIGAsYCBgMGAgYCNgIChhbmQgb3RoZXJzIGJlbG93KSBhcmUgc3BlY2lhbCBwbGFjZWhvbGRlcnNcbiAqIHRoYXQgc3RhbmQgZm9yIHRoZSBkZWNpbWFsIHNlcGFyYXRvciwgYW5kIHNvIG9uLCBhbmQgYXJlIE5PVCByZWFsIGNoYXJhY3RlcnMuXG4gKiBZb3UgbXVzdCBOT1QgXCJ0cmFuc2xhdGVcIiB0aGUgcGxhY2Vob2xkZXJzLiBGb3IgZXhhbXBsZSwgZG9uJ3QgY2hhbmdlIGAuYCB0byBgLGAgZXZlbiB0aG91Z2ggaW5cbiAqIHlvdXIgbGFuZ3VhZ2UgdGhlIGRlY2ltYWwgcG9pbnQgaXMgd3JpdHRlbiB3aXRoIGEgY29tbWEuIFRoZSBzeW1ib2xzIHNob3VsZCBiZSByZXBsYWNlZCBieSB0aGVcbiAqIGxvY2FsIGVxdWl2YWxlbnRzLCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgYE51bWJlclN5bWJvbGAgZm9yIHlvdXIgbGFuZ3VhZ2UuXG4gKlxuICogSGVyZSBhcmUgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyB1c2VkIGluIG51bWJlciBwYXR0ZXJuczpcbiAqXG4gKiB8IFN5bWJvbCB8IE1lYW5pbmcgfFxuICogfC0tLS0tLS0tfC0tLS0tLS0tLXxcbiAqIHwgLiB8IFJlcGxhY2VkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGNoYXJhY3RlciB1c2VkIGZvciB0aGUgZGVjaW1hbCBwb2ludC4gfFxuICogfCAsIHwgUmVwbGFjZWQgYnkgdGhlIFwiZ3JvdXBpbmdcIiAodGhvdXNhbmRzKSBzZXBhcmF0b3IuIHxcbiAqIHwgMCB8IFJlcGxhY2VkIGJ5IGEgZGlnaXQgKG9yIHplcm8gaWYgdGhlcmUgYXJlbid0IGVub3VnaCBkaWdpdHMpLiB8XG4gKiB8ICMgfCBSZXBsYWNlZCBieSBhIGRpZ2l0IChvciBub3RoaW5nIGlmIHRoZXJlIGFyZW4ndCBlbm91Z2gpLiB8XG4gKiB8IMKkIHwgUmVwbGFjZWQgYnkgYSBjdXJyZW5jeSBzeW1ib2wsIHN1Y2ggYXMgJCBvciBVU0QuIHxcbiAqIHwgJSB8IE1hcmtzIGEgcGVyY2VudCBmb3JtYXQuIFRoZSAlIHN5bWJvbCBtYXkgY2hhbmdlIHBvc2l0aW9uLCBidXQgbXVzdCBiZSByZXRhaW5lZC4gfFxuICogfCBFIHwgTWFya3MgYSBzY2llbnRpZmljIGZvcm1hdC4gVGhlIEUgc3ltYm9sIG1heSBjaGFuZ2UgcG9zaXRpb24sIGJ1dCBtdXN0IGJlIHJldGFpbmVkLiB8XG4gKiB8ICcgfCBTcGVjaWFsIGNoYXJhY3RlcnMgdXNlZCBhcyBsaXRlcmFsIGNoYXJhY3RlcnMgYXJlIHF1b3RlZCB3aXRoIEFTQ0lJIHNpbmdsZSBxdW90ZXMuIHxcbiAqXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIG51bWVyaWMgdmFsdWUgdG8gYmUgZm9ybWF0dGVkIChzdWNoIGFzIGBEZWNpbWFsYCBvciBgQ3VycmVuY3lgLilcbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZm9ybWF0IHN0cmluZy5cbiAqIEBzZWUgYE51bWJlckZvcm1hdFN0eWxlYFxuICogQHNlZSBbQ0xEUiB3ZWJzaXRlXShodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9udW1iZXItcGF0dGVybnMpXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZU51bWJlckZvcm1hdChsb2NhbGU6IHN0cmluZywgdHlwZTogTnVtYmVyRm9ybWF0U3R5bGUpOiBzdHJpbmcge1xuICBjb25zdCBkYXRhID0gybVmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICByZXR1cm4gZGF0YVvJtUxvY2FsZURhdGFJbmRleC5OdW1iZXJGb3JtYXRzXVt0eXBlXTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHN5bWJvbCB1c2VkIHRvIHJlcHJlc2VudCB0aGUgY3VycmVuY3kgZm9yIHRoZSBtYWluIGNvdW50cnlcbiAqIGNvcnJlc3BvbmRpbmcgdG8gYSBnaXZlbiBsb2NhbGUuIEZvciBleGFtcGxlLCAnJCcgZm9yIGBlbi1VU2AuXG4gKlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxpemVkIHN5bWJvbCBjaGFyYWN0ZXIsXG4gKiBvciBgbnVsbGAgaWYgdGhlIG1haW4gY291bnRyeSBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlQ3VycmVuY3lTeW1ib2wobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gIGNvbnN0IGRhdGEgPSDJtWZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIHJldHVybiBkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkN1cnJlbmN5U3ltYm9sXSB8fCBudWxsO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVuY3kgZm9yIHRoZSBtYWluIGNvdW50cnkgY29ycmVzcG9uZGluZ1xuICogdG8gYSBnaXZlbiBsb2NhbGUuIEZvciBleGFtcGxlLCAnVVMgRG9sbGFyJyBmb3IgYGVuLVVTYC5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHJldHVybnMgVGhlIGN1cnJlbmN5IG5hbWUsXG4gKiBvciBgbnVsbGAgaWYgdGhlIG1haW4gY291bnRyeSBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlQ3VycmVuY3lOYW1lKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICBjb25zdCBkYXRhID0gybVmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICByZXR1cm4gZGF0YVvJtUxvY2FsZURhdGFJbmRleC5DdXJyZW5jeU5hbWVdIHx8IG51bGw7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXG4gKlxuICogVGhlIGRlZmF1bHQgaXMgZGVmaW5lZCBhcyB0aGUgZmlyc3QgY3VycmVuY3kgd2hpY2ggaXMgc3RpbGwgaW4gdXNlLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGNvZGUgb2YgdGhlIGxvY2FsZSB3aG9zZSBjdXJyZW5jeSBjb2RlIHdlIHdhbnQuXG4gKiBAcmV0dXJucyBUaGUgY29kZSBvZiB0aGUgZGVmYXVsdCBjdXJyZW5jeSBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVDdXJyZW5jeUNvZGUobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gIHJldHVybiDJtWdldExvY2FsZUN1cnJlbmN5Q29kZShsb2NhbGUpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY3VycmVuY3kgdmFsdWVzIGZvciBhIGdpdmVuIGxvY2FsZS5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHJldHVybnMgVGhlIGN1cnJlbmN5IHZhbHVlcy5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKi9cbmZ1bmN0aW9uIGdldExvY2FsZUN1cnJlbmNpZXMobG9jYWxlOiBzdHJpbmcpOiB7W2NvZGU6IHN0cmluZ106IEN1cnJlbmNpZXNTeW1ib2xzfSB7XG4gIGNvbnN0IGRhdGEgPSDJtWZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIHJldHVybiBkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkN1cnJlbmNpZXNdO1xufVxuXG4vKipcbiAqIEBhbGlhcyBjb3JlL8m1Z2V0TG9jYWxlUGx1cmFsQ2FzZVxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxlUGx1cmFsQ2FzZTogKGxvY2FsZTogc3RyaW5nKSA9PiAoKHZhbHVlOiBudW1iZXIpID0+IFBsdXJhbCkgPVxuICAgIMm1Z2V0TG9jYWxlUGx1cmFsQ2FzZTtcblxuZnVuY3Rpb24gY2hlY2tGdWxsRGF0YShkYXRhOiBhbnkpIHtcbiAgaWYgKCFkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkV4dHJhRGF0YV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgZXh0cmEgbG9jYWxlIGRhdGEgZm9yIHRoZSBsb2NhbGUgXCIke1xuICAgICAgICBkYXRhW8m1TG9jYWxlRGF0YUluZGV4XG4gICAgICAgICAgICAgICAgIC5Mb2NhbGVJZF19XCIuIFVzZSBcInJlZ2lzdGVyTG9jYWxlRGF0YVwiIHRvIGxvYWQgbmV3IGRhdGEuIFNlZSB0aGUgXCJJMThuIGd1aWRlXCIgb24gYW5ndWxhci5pbyB0byBrbm93IG1vcmUuYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgbG9jYWxlLXNwZWNpZmljIHJ1bGVzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGRheSBwZXJpb2QgdG8gdXNlXG4gKiB3aGVuIG1vcmUgdGhhbiBvbmUgcGVyaW9kIGlzIGRlZmluZWQgZm9yIGEgbG9jYWxlLlxuICpcbiAqIFRoZXJlIGlzIGEgcnVsZSBmb3IgZWFjaCBkZWZpbmVkIGRheSBwZXJpb2QuIFRoZVxuICogZmlyc3QgcnVsZSBpcyBhcHBsaWVkIHRvIHRoZSBmaXJzdCBkYXkgcGVyaW9kIGFuZCBzbyBvbi5cbiAqIEZhbGwgYmFjayB0byBBTS9QTSB3aGVuIG5vIHJ1bGVzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQSBydWxlIGNhbiBzcGVjaWZ5IGEgcGVyaW9kIGFzIHRpbWUgcmFuZ2UsIG9yIGFzIGEgc2luZ2xlIHRpbWUgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4geW91IGhhdmUgbG9hZGVkIHRoZSBmdWxsIGxvY2FsZSBkYXRhLlxuICogU2VlIHRoZSBbXCJJMThuIGd1aWRlXCJdKGd1aWRlL2kxOG4jaTE4bi1waXBlcykuXG4gKlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcmV0dXJucyBUaGUgcnVsZXMgZm9yIHRoZSBsb2NhbGUsIGEgc2luZ2xlIHRpbWUgdmFsdWUgb3IgYXJyYXkgb2YgKmZyb20tdGltZSwgdG8tdGltZSosXG4gKiBvciBudWxsIGlmIG5vIHBlcmlvZHMgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBAc2VlIGBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMoKWBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RSdWxlcyhsb2NhbGU6IHN0cmluZyk6IChUaW1lfFtUaW1lLCBUaW1lXSlbXSB7XG4gIGNvbnN0IGRhdGEgPSDJtWZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIGNoZWNrRnVsbERhdGEoZGF0YSk7XG4gIGNvbnN0IHJ1bGVzID0gZGF0YVvJtUxvY2FsZURhdGFJbmRleC5FeHRyYURhdGFdW8m1RXh0cmFMb2NhbGVEYXRhSW5kZXguRXh0cmFEYXlQZXJpb2RzUnVsZXNdIHx8IFtdO1xuICByZXR1cm4gcnVsZXMubWFwKChydWxlOiBzdHJpbmd8W3N0cmluZywgc3RyaW5nXSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBleHRyYWN0VGltZShydWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtleHRyYWN0VGltZShydWxlWzBdKSwgZXh0cmFjdFRpbWUocnVsZVsxXSldO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgbG9jYWxlLXNwZWNpZmljIGRheSBwZXJpb2RzLCB3aGljaCBpbmRpY2F0ZSByb3VnaGx5IGhvdyBhIGRheSBpcyBicm9rZW4gdXBcbiAqIGluIGRpZmZlcmVudCBsYW5ndWFnZXMuXG4gKiBGb3IgZXhhbXBsZSwgZm9yIGBlbi1VU2AsIHBlcmlvZHMgYXJlIG1vcm5pbmcsIG5vb24sIGFmdGVybm9vbiwgZXZlbmluZywgYW5kIG1pZG5pZ2h0LlxuICpcbiAqIFRoaXMgZnVuY3Rpb25hbGl0eSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHlvdSBoYXZlIGxvYWRlZCB0aGUgZnVsbCBsb2NhbGUgZGF0YS5cbiAqIFNlZSB0aGUgW1wiSTE4biBndWlkZVwiXShndWlkZS9pMThuI2kxOG4tcGlwZXMpLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIGZvcm1TdHlsZSBUaGUgcmVxdWlyZWQgZ3JhbW1hdGljYWwgZm9ybS5cbiAqIEBwYXJhbSB3aWR0aCBUaGUgcmVxdWlyZWQgY2hhcmFjdGVyIHdpZHRoLlxuICogQHJldHVybnMgVGhlIHRyYW5zbGF0ZWQgZGF5LXBlcmlvZCBzdHJpbmdzLlxuICogQHNlZSBgZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RSdWxlcygpYFxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMoXG4gICAgbG9jYWxlOiBzdHJpbmcsIGZvcm1TdHlsZTogRm9ybVN0eWxlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCk6IHN0cmluZ1tdIHtcbiAgY29uc3QgZGF0YSA9IMm1ZmluZExvY2FsZURhdGEobG9jYWxlKTtcbiAgY2hlY2tGdWxsRGF0YShkYXRhKTtcbiAgY29uc3QgZGF5UGVyaW9kc0RhdGEgPSA8c3RyaW5nW11bXVtdPltcbiAgICBkYXRhW8m1TG9jYWxlRGF0YUluZGV4LkV4dHJhRGF0YV1bybVFeHRyYUxvY2FsZURhdGFJbmRleC5FeHRyYURheVBlcmlvZEZvcm1hdHNdLFxuICAgIGRhdGFbybVMb2NhbGVEYXRhSW5kZXguRXh0cmFEYXRhXVvJtUV4dHJhTG9jYWxlRGF0YUluZGV4LkV4dHJhRGF5UGVyaW9kU3RhbmRhbG9uZV1cbiAgXTtcbiAgY29uc3QgZGF5UGVyaW9kcyA9IGdldExhc3REZWZpbmVkVmFsdWUoZGF5UGVyaW9kc0RhdGEsIGZvcm1TdHlsZSkgfHwgW107XG4gIHJldHVybiBnZXRMYXN0RGVmaW5lZFZhbHVlKGRheVBlcmlvZHMsIHdpZHRoKSB8fCBbXTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHdyaXRpbmcgZGlyZWN0aW9uIG9mIGEgc3BlY2lmaWVkIGxvY2FsZVxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcHVibGljQXBpXG4gKiBAcmV0dXJucyAncnRsJyBvciAnbHRyJ1xuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZURpcmVjdGlvbihsb2NhbGU6IHN0cmluZyk6ICdsdHInfCdydGwnIHtcbiAgY29uc3QgZGF0YSA9IMm1ZmluZExvY2FsZURhdGEobG9jYWxlKTtcbiAgcmV0dXJuIGRhdGFbybVMb2NhbGVEYXRhSW5kZXguRGlyZWN0aW9uYWxpdHldO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgZmlyc3QgdmFsdWUgdGhhdCBpcyBkZWZpbmVkIGluIGFuIGFycmF5LCBnb2luZyBiYWNrd2FyZHMgZnJvbSBhbiBpbmRleCBwb3NpdGlvbi5cbiAqXG4gKiBUbyBhdm9pZCByZXBlYXRpbmcgdGhlIHNhbWUgZGF0YSAoYXMgd2hlbiB0aGUgXCJmb3JtYXRcIiBhbmQgXCJzdGFuZGFsb25lXCIgZm9ybXMgYXJlIHRoZSBzYW1lKVxuICogYWRkIHRoZSBmaXJzdCB2YWx1ZSB0byB0aGUgbG9jYWxlIGRhdGEgYXJyYXlzLCBhbmQgYWRkIG90aGVyIHZhbHVlcyBvbmx5IGlmIHRoZXkgYXJlIGRpZmZlcmVudC5cbiAqXG4gKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBhcnJheSB0byByZXRyaWV2ZSBmcm9tLlxuICogQHBhcmFtIGluZGV4IEEgMC1iYXNlZCBpbmRleCBpbnRvIHRoZSBhcnJheSB0byBzdGFydCBmcm9tLlxuICogQHJldHVybnMgVGhlIHZhbHVlIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZ2l2ZW4gaW5kZXggcG9zaXRpb24uXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gZ2V0TGFzdERlZmluZWRWYWx1ZTxUPihkYXRhOiBUW10sIGluZGV4OiBudW1iZXIpOiBUIHtcbiAgZm9yIChsZXQgaSA9IGluZGV4OyBpID4gLTE7IGktLSkge1xuICAgIGlmICh0eXBlb2YgZGF0YVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBkYXRhW2ldO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0xvY2FsZSBkYXRhIEFQSTogbG9jYWxlIGRhdGEgdW5kZWZpbmVkJyk7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHRpbWUgdmFsdWUgd2l0aCBob3VycyBhbmQgbWludXRlcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIFRpbWUgPSB7XG4gIGhvdXJzOiBudW1iZXIsXG4gIG1pbnV0ZXM6IG51bWJlclxufTtcblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgaG91cnMgYW5kIG1pbnV0ZXMgZnJvbSBhIHN0cmluZyBsaWtlIFwiMTU6NDVcIlxuICovXG5mdW5jdGlvbiBleHRyYWN0VGltZSh0aW1lOiBzdHJpbmcpOiBUaW1lIHtcbiAgY29uc3QgW2gsIG1dID0gdGltZS5zcGxpdCgnOicpO1xuICByZXR1cm4ge2hvdXJzOiAraCwgbWludXRlczogK219O1xufVxuXG5cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbmN5IHN5bWJvbCBmb3IgYSBnaXZlbiBjdXJyZW5jeSBjb2RlLlxuICpcbiAqIEZvciBleGFtcGxlLCBmb3IgdGhlIGRlZmF1bHQgYGVuLVVTYCBsb2NhbGUsIHRoZSBjb2RlIGBVU0RgIGNhblxuICogYmUgcmVwcmVzZW50ZWQgYnkgdGhlIG5hcnJvdyBzeW1ib2wgYCRgIG9yIHRoZSB3aWRlIHN5bWJvbCBgVVMkYC5cbiAqXG4gKiBAcGFyYW0gY29kZSBUaGUgY3VycmVuY3kgY29kZS5cbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGZvcm1hdCwgYHdpZGVgIG9yIGBuYXJyb3dgLlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKlxuICogQHJldHVybnMgVGhlIHN5bWJvbCwgb3IgdGhlIGN1cnJlbmN5IGNvZGUgaWYgbm8gc3ltYm9sIGlzIGF2YWlsYWJsZS5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVuY3lTeW1ib2woY29kZTogc3RyaW5nLCBmb3JtYXQ6ICd3aWRlJ3wnbmFycm93JywgbG9jYWxlID0gJ2VuJyk6IHN0cmluZyB7XG4gIGNvbnN0IGN1cnJlbmN5ID0gZ2V0TG9jYWxlQ3VycmVuY2llcyhsb2NhbGUpW2NvZGVdIHx8IENVUlJFTkNJRVNfRU5bY29kZV0gfHwgW107XG4gIGNvbnN0IHN5bWJvbE5hcnJvdyA9IGN1cnJlbmN5W8m1Q3VycmVuY3lJbmRleC5TeW1ib2xOYXJyb3ddO1xuXG4gIGlmIChmb3JtYXQgPT09ICduYXJyb3cnICYmIHR5cGVvZiBzeW1ib2xOYXJyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN5bWJvbE5hcnJvdztcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeVvJtUN1cnJlbmN5SW5kZXguU3ltYm9sXSB8fCBjb2RlO1xufVxuXG4vLyBNb3N0IGN1cnJlbmNpZXMgaGF2ZSBjZW50cywgdGhhdCdzIHdoeSB0aGUgZGVmYXVsdCBpcyAyXG5jb25zdCBERUZBVUxUX05CX09GX0NVUlJFTkNZX0RJR0lUUyA9IDI7XG5cbi8qKlxuICogUmVwb3J0cyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIGZvciBhIGdpdmVuIGN1cnJlbmN5LlxuICogVGhlIHZhbHVlIGRlcGVuZHMgdXBvbiB0aGUgcHJlc2VuY2Ugb2YgY2VudHMgaW4gdGhhdCBwYXJ0aWN1bGFyIGN1cnJlbmN5LlxuICpcbiAqIEBwYXJhbSBjb2RlIFRoZSBjdXJyZW5jeSBjb2RlLlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cywgdHlwaWNhbGx5IDAgb3IgMi5cbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZDdXJyZW5jeURpZ2l0cyhjb2RlOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgZGlnaXRzO1xuICBjb25zdCBjdXJyZW5jeSA9IENVUlJFTkNJRVNfRU5bY29kZV07XG4gIGlmIChjdXJyZW5jeSkge1xuICAgIGRpZ2l0cyA9IGN1cnJlbmN5W8m1Q3VycmVuY3lJbmRleC5OYk9mRGlnaXRzXTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGRpZ2l0cyA9PT0gJ251bWJlcicgPyBkaWdpdHMgOiBERUZBVUxUX05CX09GX0NVUlJFTkNZX0RJR0lUUztcbn1cbiJdfQ==