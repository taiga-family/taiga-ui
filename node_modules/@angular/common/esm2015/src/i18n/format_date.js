/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/i18n/format_date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FormatWidth, FormStyle, getLocaleDateFormat, getLocaleDateTimeFormat, getLocaleDayNames, getLocaleDayPeriods, getLocaleEraNames, getLocaleExtraDayPeriodRules, getLocaleExtraDayPeriods, getLocaleId, getLocaleMonthNames, getLocaleNumberSymbol, getLocaleTimeFormat, NumberSymbol, TranslationWidth } from './locale_data_api';
/** @type {?} */
export const ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
//    1        2       3         4          5          6          7          8  9     10      11
/** @type {?} */
const NAMED_FORMATS = {};
/** @type {?} */
const DATE_FORMATS_SPLIT = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
/** @enum {number} */
const ZoneWidth = {
    Short: 0,
    ShortGMT: 1,
    Long: 2,
    Extended: 3,
};
ZoneWidth[ZoneWidth.Short] = 'Short';
ZoneWidth[ZoneWidth.ShortGMT] = 'ShortGMT';
ZoneWidth[ZoneWidth.Long] = 'Long';
ZoneWidth[ZoneWidth.Extended] = 'Extended';
/** @enum {number} */
const DateType = {
    FullYear: 0,
    Month: 1,
    Date: 2,
    Hours: 3,
    Minutes: 4,
    Seconds: 5,
    FractionalSeconds: 6,
    Day: 7,
};
DateType[DateType.FullYear] = 'FullYear';
DateType[DateType.Month] = 'Month';
DateType[DateType.Date] = 'Date';
DateType[DateType.Hours] = 'Hours';
DateType[DateType.Minutes] = 'Minutes';
DateType[DateType.Seconds] = 'Seconds';
DateType[DateType.FractionalSeconds] = 'FractionalSeconds';
DateType[DateType.Day] = 'Day';
/** @enum {number} */
const TranslationType = {
    DayPeriods: 0,
    Days: 1,
    Months: 2,
    Eras: 3,
};
TranslationType[TranslationType.DayPeriods] = 'DayPeriods';
TranslationType[TranslationType.Days] = 'Days';
TranslationType[TranslationType.Months] = 'Months';
TranslationType[TranslationType.Eras] = 'Eras';
/**
 * \@ngModule CommonModule
 * \@description
 *
 * Formats a date according to locale rules.
 *
 * @see `DatePipe` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * \@publicApi
 * @param {?} value The date to format, as a Date, or a number (milliseconds since UTC epoch)
 * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
 * @param {?} format The date-time components to include. See `DatePipe` for details.
 * @param {?} locale A locale code for the locale format rules to use.
 * @param {?=} timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
 * or a standard UTC/GMT or continental US time zone abbreviation.
 * If not specified, uses host system settings.
 *
 * @return {?} The formatted date string.
 *
 */
export function formatDate(value, format, locale, timezone) {
    /** @type {?} */
    let date = toDate(value);
    /** @type {?} */
    const namedFormat = getNamedFormat(locale, format);
    format = namedFormat || format;
    /** @type {?} */
    let parts = [];
    /** @type {?} */
    let match;
    while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
            parts = parts.concat(match.slice(1));
            /** @type {?} */
            const part = parts.pop();
            if (!part) {
                break;
            }
            format = part;
        }
        else {
            parts.push(format);
            break;
        }
    }
    /** @type {?} */
    let dateTimezoneOffset = date.getTimezoneOffset();
    if (timezone) {
        dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        date = convertTimezoneToLocal(date, timezone, true);
    }
    /** @type {?} */
    let text = '';
    parts.forEach((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        /** @type {?} */
        const dateFormatter = getDateFormatter(value);
        text += dateFormatter ?
            dateFormatter(date, locale, dateTimezoneOffset) :
            value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    }));
    return text;
}
/**
 * @param {?} locale
 * @param {?} format
 * @return {?}
 */
function getNamedFormat(locale, format) {
    /** @type {?} */
    const localeId = getLocaleId(locale);
    NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
    if (NAMED_FORMATS[localeId][format]) {
        return NAMED_FORMATS[localeId][format];
    }
    /** @type {?} */
    let formatValue = '';
    switch (format) {
        case 'shortDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
            break;
        case 'mediumDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
            break;
        case 'longDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
            break;
        case 'fullDate':
            formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
            break;
        case 'shortTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
            break;
        case 'mediumTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
            break;
        case 'longTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
            break;
        case 'fullTime':
            formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
            break;
        case 'short':
            /** @type {?} */
            const shortTime = getNamedFormat(locale, 'shortTime');
            /** @type {?} */
            const shortDate = getNamedFormat(locale, 'shortDate');
            formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
            break;
        case 'medium':
            /** @type {?} */
            const mediumTime = getNamedFormat(locale, 'mediumTime');
            /** @type {?} */
            const mediumDate = getNamedFormat(locale, 'mediumDate');
            formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
            break;
        case 'long':
            /** @type {?} */
            const longTime = getNamedFormat(locale, 'longTime');
            /** @type {?} */
            const longDate = getNamedFormat(locale, 'longDate');
            formatValue =
                formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
            break;
        case 'full':
            /** @type {?} */
            const fullTime = getNamedFormat(locale, 'fullTime');
            /** @type {?} */
            const fullDate = getNamedFormat(locale, 'fullDate');
            formatValue =
                formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
            break;
    }
    if (formatValue) {
        NAMED_FORMATS[localeId][format] = formatValue;
    }
    return formatValue;
}
/**
 * @param {?} str
 * @param {?} opt_values
 * @return {?}
 */
function formatDateTime(str, opt_values) {
    if (opt_values) {
        str = str.replace(/\{([^}]+)}/g, (/**
         * @param {?} match
         * @param {?} key
         * @return {?}
         */
        function (match, key) {
            return (opt_values != null && key in opt_values) ? opt_values[key] : match;
        }));
    }
    return str;
}
/**
 * @param {?} num
 * @param {?} digits
 * @param {?=} minusSign
 * @param {?=} trim
 * @param {?=} negWrap
 * @return {?}
 */
function padNumber(num, digits, minusSign = '-', trim, negWrap) {
    /** @type {?} */
    let neg = '';
    if (num < 0 || (negWrap && num <= 0)) {
        if (negWrap) {
            num = -num + 1;
        }
        else {
            num = -num;
            neg = minusSign;
        }
    }
    /** @type {?} */
    let strNum = String(num);
    while (strNum.length < digits) {
        strNum = '0' + strNum;
    }
    if (trim) {
        strNum = strNum.substr(strNum.length - digits);
    }
    return neg + strNum;
}
/**
 * @param {?} milliseconds
 * @param {?} digits
 * @return {?}
 */
function formatFractionalSeconds(milliseconds, digits) {
    /** @type {?} */
    const strMs = padNumber(milliseconds, 3);
    return strMs.substr(0, digits);
}
/**
 * Returns a date formatter that transforms a date into its locale digit representation
 * @param {?} name
 * @param {?} size
 * @param {?=} offset
 * @param {?=} trim
 * @param {?=} negWrap
 * @return {?}
 */
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
    return (/**
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    function (date, locale) {
        /** @type {?} */
        let part = getDatePart(name, date);
        if (offset > 0 || part > -offset) {
            part += offset;
        }
        if (name === DateType.Hours) {
            if (part === 0 && offset === -12) {
                part = 12;
            }
        }
        else if (name === DateType.FractionalSeconds) {
            return formatFractionalSeconds(part, size);
        }
        /** @type {?} */
        const localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
        return padNumber(part, size, localeMinus, trim, negWrap);
    });
}
/**
 * @param {?} part
 * @param {?} date
 * @return {?}
 */
function getDatePart(part, date) {
    switch (part) {
        case DateType.FullYear:
            return date.getFullYear();
        case DateType.Month:
            return date.getMonth();
        case DateType.Date:
            return date.getDate();
        case DateType.Hours:
            return date.getHours();
        case DateType.Minutes:
            return date.getMinutes();
        case DateType.Seconds:
            return date.getSeconds();
        case DateType.FractionalSeconds:
            return date.getMilliseconds();
        case DateType.Day:
            return date.getDay();
        default:
            throw new Error(`Unknown DateType value "${part}".`);
    }
}
/**
 * Returns a date formatter that transforms a date into its locale string representation
 * @param {?} name
 * @param {?} width
 * @param {?=} form
 * @param {?=} extended
 * @return {?}
 */
function dateStrGetter(name, width, form = FormStyle.Format, extended = false) {
    return (/**
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    function (date, locale) {
        return getDateTranslation(date, locale, name, width, form, extended);
    });
}
/**
 * Returns the locale translation of a date for a given form, type and width
 * @param {?} date
 * @param {?} locale
 * @param {?} name
 * @param {?} width
 * @param {?} form
 * @param {?} extended
 * @return {?}
 */
function getDateTranslation(date, locale, name, width, form, extended) {
    switch (name) {
        case TranslationType.Months:
            return getLocaleMonthNames(locale, form, width)[date.getMonth()];
        case TranslationType.Days:
            return getLocaleDayNames(locale, form, width)[date.getDay()];
        case TranslationType.DayPeriods:
            /** @type {?} */
            const currentHours = date.getHours();
            /** @type {?} */
            const currentMinutes = date.getMinutes();
            if (extended) {
                /** @type {?} */
                const rules = getLocaleExtraDayPeriodRules(locale);
                /** @type {?} */
                const dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
                /** @type {?} */
                let result;
                rules.forEach((/**
                 * @param {?} rule
                 * @param {?} index
                 * @return {?}
                 */
                (rule, index) => {
                    if (Array.isArray(rule)) {
                        // morning, afternoon, evening, night
                        const { hours: hoursFrom, minutes: minutesFrom } = rule[0];
                        const { hours: hoursTo, minutes: minutesTo } = rule[1];
                        if (currentHours >= hoursFrom && currentMinutes >= minutesFrom &&
                            (currentHours < hoursTo ||
                                (currentHours === hoursTo && currentMinutes < minutesTo))) {
                            result = dayPeriods[index];
                        }
                    }
                    else { // noon or midnight
                        // noon or midnight
                        const { hours, minutes } = rule;
                        if (hours === currentHours && minutes === currentMinutes) {
                            result = dayPeriods[index];
                        }
                    }
                }));
                if (result) {
                    return result;
                }
            }
            // if no rules for the day periods, we use am/pm by default
            return getLocaleDayPeriods(locale, form, (/** @type {?} */ (width)))[currentHours < 12 ? 0 : 1];
        case TranslationType.Eras:
            return getLocaleEraNames(locale, (/** @type {?} */ (width)))[date.getFullYear() <= 0 ? 0 : 1];
        default:
            // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
            // However Closure Compiler does not understand that and reports an error in typed mode.
            // The `throw new Error` below works around the problem, and the unexpected: never variable
            // makes sure tsc still checks this code is unreachable.
            /** @type {?} */
            const unexpected = name;
            throw new Error(`unexpected translation type ${unexpected}`);
    }
}
/**
 * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
 * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
 * extended = +04:30)
 * @param {?} width
 * @return {?}
 */
function timeZoneGetter(width) {
    return (/**
     * @param {?} date
     * @param {?} locale
     * @param {?} offset
     * @return {?}
     */
    function (date, locale, offset) {
        /** @type {?} */
        const zone = -1 * offset;
        /** @type {?} */
        const minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
        /** @type {?} */
        const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
        switch (width) {
            case ZoneWidth.Short:
                return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) +
                    padNumber(Math.abs(zone % 60), 2, minusSign);
            case ZoneWidth.ShortGMT:
                return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 1, minusSign);
            case ZoneWidth.Long:
                return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                    padNumber(Math.abs(zone % 60), 2, minusSign);
            case ZoneWidth.Extended:
                if (offset === 0) {
                    return 'Z';
                }
                else {
                    return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                }
            default:
                throw new Error(`Unknown zone width "${width}"`);
        }
    });
}
/** @type {?} */
const JANUARY = 0;
/** @type {?} */
const THURSDAY = 4;
/**
 * @param {?} year
 * @return {?}
 */
function getFirstThursdayOfYear(year) {
    /** @type {?} */
    const firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
    return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
/**
 * @param {?} datetime
 * @return {?}
 */
function getThursdayThisWeek(datetime) {
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
}
/**
 * @param {?} size
 * @param {?=} monthBased
 * @return {?}
 */
function weekGetter(size, monthBased = false) {
    return (/**
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    function (date, locale) {
        /** @type {?} */
        let result;
        if (monthBased) {
            /** @type {?} */
            const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
            /** @type {?} */
            const today = date.getDate();
            result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
        }
        else {
            /** @type {?} */
            const firstThurs = getFirstThursdayOfYear(date.getFullYear());
            /** @type {?} */
            const thisThurs = getThursdayThisWeek(date);
            /** @type {?} */
            const diff = thisThurs.getTime() - firstThurs.getTime();
            result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
        }
        return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
    });
}
/** @type {?} */
const DATE_FORMATS = {};
// Based on CLDR formats:
// See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
// See also explanations: http://cldr.unicode.org/translation/date-time
// TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
/**
 * @param {?} format
 * @return {?}
 */
function getDateFormatter(format) {
    if (DATE_FORMATS[format]) {
        return DATE_FORMATS[format];
    }
    /** @type {?} */
    let formatter;
    switch (format) {
        // Era name (AD/BC)
        case 'G':
        case 'GG':
        case 'GGG':
            formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Abbreviated);
            break;
        case 'GGGG':
            formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Wide);
            break;
        case 'GGGGG':
            formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Narrow);
            break;
        // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
        case 'y':
            formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
            break;
        // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
        case 'yy':
            formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
            break;
        // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
        case 'yyy':
            formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
            break;
        // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
        case 'yyyy':
            formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
            break;
        // Month of the year (1-12), numeric
        case 'M':
        case 'L':
            formatter = dateGetter(DateType.Month, 1, 1);
            break;
        case 'MM':
        case 'LL':
            formatter = dateGetter(DateType.Month, 2, 1);
            break;
        // Month of the year (January, ...), string, format
        case 'MMM':
            formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated);
            break;
        case 'MMMM':
            formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide);
            break;
        case 'MMMMM':
            formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow);
            break;
        // Month of the year (January, ...), string, standalone
        case 'LLL':
            formatter =
                dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated, FormStyle.Standalone);
            break;
        case 'LLLL':
            formatter =
                dateStrGetter(TranslationType.Months, TranslationWidth.Wide, FormStyle.Standalone);
            break;
        case 'LLLLL':
            formatter =
                dateStrGetter(TranslationType.Months, TranslationWidth.Narrow, FormStyle.Standalone);
            break;
        // Week of the year (1, ... 52)
        case 'w':
            formatter = weekGetter(1);
            break;
        case 'ww':
            formatter = weekGetter(2);
            break;
        // Week of the month (1, ...)
        case 'W':
            formatter = weekGetter(1, true);
            break;
        // Day of the month (1-31)
        case 'd':
            formatter = dateGetter(DateType.Date, 1);
            break;
        case 'dd':
            formatter = dateGetter(DateType.Date, 2);
            break;
        // Day of the Week
        case 'E':
        case 'EE':
        case 'EEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Abbreviated);
            break;
        case 'EEEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Wide);
            break;
        case 'EEEEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Narrow);
            break;
        case 'EEEEEE':
            formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Short);
            break;
        // Generic period of the day (am-pm)
        case 'a':
        case 'aa':
        case 'aaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated);
            break;
        case 'aaaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide);
            break;
        case 'aaaaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow);
            break;
        // Extended period of the day (midnight, at night, ...), standalone
        case 'b':
        case 'bb':
        case 'bbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
            break;
        case 'bbbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Standalone, true);
            break;
        case 'bbbbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Standalone, true);
            break;
        // Extended period of the day (midnight, night, ...), standalone
        case 'B':
        case 'BB':
        case 'BBB':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Format, true);
            break;
        case 'BBBB':
            formatter =
                dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Format, true);
            break;
        case 'BBBBB':
            formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Format, true);
            break;
        // Hour in AM/PM, (1-12)
        case 'h':
            formatter = dateGetter(DateType.Hours, 1, -12);
            break;
        case 'hh':
            formatter = dateGetter(DateType.Hours, 2, -12);
            break;
        // Hour of the day (0-23)
        case 'H':
            formatter = dateGetter(DateType.Hours, 1);
            break;
        // Hour in day, padded (00-23)
        case 'HH':
            formatter = dateGetter(DateType.Hours, 2);
            break;
        // Minute of the hour (0-59)
        case 'm':
            formatter = dateGetter(DateType.Minutes, 1);
            break;
        case 'mm':
            formatter = dateGetter(DateType.Minutes, 2);
            break;
        // Second of the minute (0-59)
        case 's':
            formatter = dateGetter(DateType.Seconds, 1);
            break;
        case 'ss':
            formatter = dateGetter(DateType.Seconds, 2);
            break;
        // Fractional second
        case 'S':
            formatter = dateGetter(DateType.FractionalSeconds, 1);
            break;
        case 'SS':
            formatter = dateGetter(DateType.FractionalSeconds, 2);
            break;
        case 'SSS':
            formatter = dateGetter(DateType.FractionalSeconds, 3);
            break;
        // Timezone ISO8601 short format (-0430)
        case 'Z':
        case 'ZZ':
        case 'ZZZ':
            formatter = timeZoneGetter(ZoneWidth.Short);
            break;
        // Timezone ISO8601 extended format (-04:30)
        case 'ZZZZZ':
            formatter = timeZoneGetter(ZoneWidth.Extended);
            break;
        // Timezone GMT short format (GMT+4)
        case 'O':
        case 'OO':
        case 'OOO':
        // Should be location, but fallback to format O instead because we don't have the data yet
        case 'z':
        case 'zz':
        case 'zzz':
            formatter = timeZoneGetter(ZoneWidth.ShortGMT);
            break;
        // Timezone GMT long format (GMT+0430)
        case 'OOOO':
        case 'ZZZZ':
        // Should be location, but fallback to format O instead because we don't have the data yet
        case 'zzzz':
            formatter = timeZoneGetter(ZoneWidth.Long);
            break;
        default:
            return null;
    }
    DATE_FORMATS[format] = formatter;
    return formatter;
}
/**
 * @param {?} timezone
 * @param {?} fallback
 * @return {?}
 */
function timezoneToOffset(timezone, fallback) {
    // Support: IE 9-11 only, Edge 13-15+
    // IE/Edge do not "understand" colon (`:`) in timezone
    timezone = timezone.replace(/:/g, '');
    /** @type {?} */
    const requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
/**
 * @param {?} date
 * @param {?} minutes
 * @return {?}
 */
function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}
/**
 * @param {?} date
 * @param {?} timezone
 * @param {?} reverse
 * @return {?}
 */
function convertTimezoneToLocal(date, timezone, reverse) {
    /** @type {?} */
    const reverseValue = reverse ? -1 : 1;
    /** @type {?} */
    const dateTimezoneOffset = date.getTimezoneOffset();
    /** @type {?} */
    const timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
}
/**
 * Converts a value to date.
 *
 * Supported input formats:
 * - `Date`
 * - number: timestamp
 * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
 *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
 *   Note: ISO strings without time return a date without timeoffset.
 *
 * Throws if unable to convert to a date.
 * @param {?} value
 * @return {?}
 */
export function toDate(value) {
    if (isDate(value)) {
        return value;
    }
    if (typeof value === 'number' && !isNaN(value)) {
        return new Date(value);
    }
    if (typeof value === 'string') {
        value = value.trim();
        /** @type {?} */
        const parsedNb = parseFloat(value);
        // any string that only contains numbers, like "1234" but not like "1234hello"
        if (!isNaN((/** @type {?} */ (value)) - parsedNb)) {
            return new Date(parsedNb);
        }
        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
            /* For ISO Strings without time the day, month and year must be extracted from the ISO String
                  before Date creation to avoid time offset and errors in the new Date.
                  If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                  date, some browsers (e.g. IE 9) will throw an invalid Date error.
                  If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
                  is applied.
                  Note: ISO months are 0 for January, 1 for February, ... */
            const [y, m, d] = value.split('-').map((/**
             * @param {?} val
             * @return {?}
             */
            (val) => +val));
            return new Date(y, m - 1, d);
        }
        /** @type {?} */
        let match;
        if (match = value.match(ISO8601_DATE_REGEX)) {
            return isoStringToDate(match);
        }
    }
    /** @type {?} */
    const date = new Date((/** @type {?} */ (value)));
    if (!isDate(date)) {
        throw new Error(`Unable to convert "${value}" into a date`);
    }
    return date;
}
/**
 * Converts a date in ISO8601 to a Date.
 * Used instead of `Date.parse` because of browser discrepancies.
 * @param {?} match
 * @return {?}
 */
export function isoStringToDate(match) {
    /** @type {?} */
    const date = new Date(0);
    /** @type {?} */
    let tzHour = 0;
    /** @type {?} */
    let tzMin = 0;
    // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
    /** @type {?} */
    const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
    /** @type {?} */
    const timeSetter = match[8] ? date.setUTCHours : date.setHours;
    // if there is a timezone defined like "+01:00" or "+0100"
    if (match[9]) {
        tzHour = Number(match[9] + match[10]);
        tzMin = Number(match[9] + match[11]);
    }
    dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    /** @type {?} */
    const h = Number(match[4] || 0) - tzHour;
    /** @type {?} */
    const m = Number(match[5] || 0) - tzMin;
    /** @type {?} */
    const s = Number(match[6] || 0);
    /** @type {?} */
    const ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
    timeSetter.call(date, h, m, s, ms);
    return date;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isDate(value) {
    return value instanceof Date && !isNaN(value.valueOf());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0X2RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2kxOG4vZm9ybWF0X2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBUSxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDOztBQUU5VSxNQUFNLE9BQU8sa0JBQWtCLEdBQzNCLHNHQUFzRzs7O01BRXBHLGFBQWEsR0FBcUQsRUFBRTs7TUFDcEUsa0JBQWtCLEdBQ3BCLG1NQUFtTTs7QUFFdk0sTUFBSyxTQUFTO0lBQ1osS0FBSyxHQUFBO0lBQ0wsUUFBUSxHQUFBO0lBQ1IsSUFBSSxHQUFBO0lBQ0osUUFBUSxHQUFBO0VBQ1Q7Ozs7OztBQUVELE1BQUssUUFBUTtJQUNYLFFBQVEsR0FBQTtJQUNSLEtBQUssR0FBQTtJQUNMLElBQUksR0FBQTtJQUNKLEtBQUssR0FBQTtJQUNMLE9BQU8sR0FBQTtJQUNQLE9BQU8sR0FBQTtJQUNQLGlCQUFpQixHQUFBO0lBQ2pCLEdBQUcsR0FBQTtFQUNKOzs7Ozs7Ozs7O0FBRUQsTUFBSyxlQUFlO0lBQ2xCLFVBQVUsR0FBQTtJQUNWLElBQUksR0FBQTtJQUNKLE1BQU0sR0FBQTtJQUNOLElBQUksR0FBQTtFQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJELE1BQU0sVUFBVSxVQUFVLENBQ3RCLEtBQXlCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxRQUFpQjs7UUFDMUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7O1VBQ2xCLFdBQVcsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUNsRCxNQUFNLEdBQUcsV0FBVyxJQUFJLE1BQU0sQ0FBQzs7UUFFM0IsS0FBSyxHQUFhLEVBQUU7O1FBQ3BCLEtBQUs7SUFDVCxPQUFPLE1BQU0sRUFBRTtRQUNiLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2tCQUMvQixJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE1BQU07YUFDUDtZQUNELE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixNQUFNO1NBQ1A7S0FDRjs7UUFFRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7SUFDakQsSUFBSSxRQUFRLEVBQUU7UUFDWixrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNwRSxJQUFJLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNyRDs7UUFFRyxJQUFJLEdBQUcsRUFBRTtJQUNiLEtBQUssQ0FBQyxPQUFPOzs7O0lBQUMsS0FBSyxDQUFDLEVBQUU7O2NBQ2QsYUFBYSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUM7WUFDbkIsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxjQUFjLENBQUMsTUFBYyxFQUFFLE1BQWM7O1VBQzlDLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ3BDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXhELElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ25DLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hDOztRQUVHLFdBQVcsR0FBRyxFQUFFO0lBQ3BCLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxXQUFXO1lBQ2QsV0FBVyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsTUFBTTtRQUNSLEtBQUssWUFBWTtZQUNmLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELE1BQU07UUFDUixLQUFLLFVBQVU7WUFDYixXQUFXLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1RCxNQUFNO1FBQ1IsS0FBSyxVQUFVO1lBQ2IsV0FBVyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUQsTUFBTTtRQUNSLEtBQUssV0FBVztZQUNkLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELE1BQU07UUFDUixLQUFLLFlBQVk7WUFDZixXQUFXLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxNQUFNO1FBQ1IsS0FBSyxVQUFVO1lBQ2IsV0FBVyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUQsTUFBTTtRQUNSLEtBQUssVUFBVTtZQUNiLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVELE1BQU07UUFDUixLQUFLLE9BQU87O2tCQUNKLFNBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQzs7a0JBQy9DLFNBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztZQUNyRCxXQUFXLEdBQUcsY0FBYyxDQUN4Qix1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsTUFBTTtRQUNSLEtBQUssUUFBUTs7a0JBQ0wsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDOztrQkFDakQsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO1lBQ3ZELFdBQVcsR0FBRyxjQUFjLENBQ3hCLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuRixNQUFNO1FBQ1IsS0FBSyxNQUFNOztrQkFDSCxRQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7O2tCQUM3QyxRQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFDbkQsV0FBVztnQkFDUCxjQUFjLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVGLE1BQU07UUFDUixLQUFLLE1BQU07O2tCQUNILFFBQVEsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQzs7a0JBQzdDLFFBQVEsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztZQUNuRCxXQUFXO2dCQUNQLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUYsTUFBTTtLQUNUO0lBQ0QsSUFBSSxXQUFXLEVBQUU7UUFDZixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDO0tBQy9DO0lBQ0QsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBVyxFQUFFLFVBQW9CO0lBQ3ZELElBQUksVUFBVSxFQUFFO1FBQ2QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYTs7Ozs7UUFBRSxVQUFTLEtBQUssRUFBRSxHQUFHO1lBQ2xELE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0UsQ0FBQyxFQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQ2QsR0FBVyxFQUFFLE1BQWMsRUFBRSxTQUFTLEdBQUcsR0FBRyxFQUFFLElBQWMsRUFBRSxPQUFpQjs7UUFDN0UsR0FBRyxHQUFHLEVBQUU7SUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3BDLElBQUksT0FBTyxFQUFFO1lBQ1gsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ1gsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUNqQjtLQUNGOztRQUNHLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3hCLE9BQU8sTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFDN0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDdkI7SUFDRCxJQUFJLElBQUksRUFBRTtRQUNSLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDdEIsQ0FBQzs7Ozs7O0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxZQUFvQixFQUFFLE1BQWM7O1VBQzdELEtBQUssR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7Ozs7Ozs7Ozs7QUFLRCxTQUFTLFVBQVUsQ0FDZixJQUFjLEVBQUUsSUFBWSxFQUFFLFNBQWlCLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUM5RCxPQUFPLEdBQUcsS0FBSztJQUNqQjs7Ozs7SUFBTyxVQUFTLElBQVUsRUFBRSxNQUFjOztZQUNwQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLElBQUksTUFBTSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRTtZQUMzQixJQUFJLElBQUksS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQ1g7U0FDRjthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxPQUFPLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1Qzs7Y0FFSyxXQUFXLEdBQUcscUJBQXFCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDekUsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUMsRUFBQztBQUNKLENBQUM7Ozs7OztBQUVELFNBQVMsV0FBVyxDQUFDLElBQWMsRUFBRSxJQUFVO0lBQzdDLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxRQUFRLENBQUMsUUFBUTtZQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixLQUFLLFFBQVEsQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLEtBQUssUUFBUSxDQUFDLElBQUk7WUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsS0FBSyxRQUFRLENBQUMsS0FBSztZQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixLQUFLLFFBQVEsQ0FBQyxPQUFPO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLEtBQUssUUFBUSxDQUFDLE9BQU87WUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsS0FBSyxRQUFRLENBQUMsaUJBQWlCO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2hDLEtBQUssUUFBUSxDQUFDLEdBQUc7WUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QjtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLElBQUksSUFBSSxDQUFDLENBQUM7S0FDeEQ7QUFDSCxDQUFDOzs7Ozs7Ozs7QUFLRCxTQUFTLGFBQWEsQ0FDbEIsSUFBcUIsRUFBRSxLQUF1QixFQUFFLE9BQWtCLFNBQVMsQ0FBQyxNQUFNLEVBQ2xGLFFBQVEsR0FBRyxLQUFLO0lBQ2xCOzs7OztJQUFPLFVBQVMsSUFBVSxFQUFFLE1BQWM7UUFDeEMsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7O0FBS0QsU0FBUyxrQkFBa0IsQ0FDdkIsSUFBVSxFQUFFLE1BQWMsRUFBRSxJQUFxQixFQUFFLEtBQXVCLEVBQUUsSUFBZSxFQUMzRixRQUFpQjtJQUNuQixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssZUFBZSxDQUFDLE1BQU07WUFDekIsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLEtBQUssZUFBZSxDQUFDLElBQUk7WUFDdkIsT0FBTyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELEtBQUssZUFBZSxDQUFDLFVBQVU7O2tCQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTs7a0JBQzlCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hDLElBQUksUUFBUSxFQUFFOztzQkFDTixLQUFLLEdBQUcsNEJBQTRCLENBQUMsTUFBTSxDQUFDOztzQkFDNUMsVUFBVSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDOztvQkFDNUQsTUFBTTtnQkFDVixLQUFLLENBQUMsT0FBTzs7Ozs7Z0JBQUMsQ0FBQyxJQUF1QixFQUFFLEtBQWEsRUFBRSxFQUFFO29CQUN2RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7OzhCQUVqQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OEJBQ2xELEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsSUFBSSxZQUFZLElBQUksU0FBUyxJQUFJLGNBQWMsSUFBSSxXQUFXOzRCQUMxRCxDQUFDLFlBQVksR0FBRyxPQUFPO2dDQUN0QixDQUFDLFlBQVksS0FBSyxPQUFPLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUU7NEJBQzlELE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQzVCO3FCQUNGO3lCQUFNLEVBQUcsbUJBQW1COzs4QkFDckIsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSTt3QkFDN0IsSUFBSSxLQUFLLEtBQUssWUFBWSxJQUFJLE9BQU8sS0FBSyxjQUFjLEVBQUU7NEJBQ3hELE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQzVCO3FCQUNGO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCwyREFBMkQ7WUFDM0QsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLG1CQUFrQixLQUFLLEVBQUEsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsS0FBSyxlQUFlLENBQUMsSUFBSTtZQUN2QixPQUFPLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxtQkFBa0IsS0FBSyxFQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGOzs7Ozs7a0JBS1EsVUFBVSxHQUFVLElBQUk7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUNoRTtBQUNILENBQUM7Ozs7Ozs7O0FBT0QsU0FBUyxjQUFjLENBQUMsS0FBZ0I7SUFDdEM7Ozs7OztJQUFPLFVBQVMsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUFjOztjQUNsRCxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTTs7Y0FDbEIsU0FBUyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDOztjQUNqRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNyRSxRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7b0JBQzVELFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsS0FBSyxTQUFTLENBQUMsUUFBUTtnQkFDckIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMzRSxLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUc7b0JBQzFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkQsS0FBSyxTQUFTLENBQUMsUUFBUTtnQkFDckIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNoQixPQUFPLEdBQUcsQ0FBQztpQkFDWjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsR0FBRzt3QkFDbEUsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztpQkFDbEQ7WUFDSDtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7TUFFSyxPQUFPLEdBQUcsQ0FBQzs7TUFDWCxRQUFRLEdBQUcsQ0FBQzs7Ozs7QUFDbEIsU0FBUyxzQkFBc0IsQ0FBQyxJQUFZOztVQUNwQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0lBQzVELE9BQU8sSUFBSSxJQUFJLENBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDOUYsQ0FBQzs7Ozs7QUFFRCxTQUFTLG1CQUFtQixDQUFDLFFBQWM7SUFDekMsT0FBTyxJQUFJLElBQUksQ0FDWCxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUMzQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFZLEVBQUUsVUFBVSxHQUFHLEtBQUs7SUFDbEQ7Ozs7O0lBQU8sVUFBUyxJQUFVLEVBQUUsTUFBYzs7WUFDcEMsTUFBTTtRQUNWLElBQUksVUFBVSxFQUFFOztrQkFDUix5QkFBeUIsR0FDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDOztrQkFDM0QsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUIsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEU7YUFBTTs7a0JBQ0MsVUFBVSxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7a0JBQ3ZELFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7O2tCQUNyQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFFLHNCQUFzQjtTQUNqRTtRQUVELE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUscUJBQXFCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUMsRUFBQztBQUNKLENBQUM7O01BSUssWUFBWSxHQUFzQyxFQUFFOzs7Ozs7Ozs7QUFNMUQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFjO0lBQ3RDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdCOztRQUNHLFNBQVM7SUFDYixRQUFRLE1BQU0sRUFBRTtRQUNkLG1CQUFtQjtRQUNuQixLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSSxDQUFDO1FBQ1YsS0FBSyxLQUFLO1lBQ1IsU0FBUyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLFNBQVMsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6RSxNQUFNO1FBRVIsc0VBQXNFO1FBQ3RFLEtBQUssR0FBRztZQUNOLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RCxNQUFNO1FBQ1IsMEZBQTBGO1FBQzFGLEtBQUssSUFBSTtZQUNQLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RCxNQUFNO1FBQ1IsNEZBQTRGO1FBQzVGLEtBQUssS0FBSztZQUNSLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RCxNQUFNO1FBQ1IsMEVBQTBFO1FBQzFFLEtBQUssTUFBTTtZQUNULFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RCxNQUFNO1FBRVIsb0NBQW9DO1FBQ3BDLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxHQUFHO1lBQ04sU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNO1FBQ1IsS0FBSyxJQUFJLENBQUM7UUFDVixLQUFLLElBQUk7WUFDUCxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU07UUFFUixtREFBbUQ7UUFDbkQsS0FBSyxLQUFLO1lBQ1IsU0FBUyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hGLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekUsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLFNBQVMsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRSxNQUFNO1FBRVIsdURBQXVEO1FBQ3ZELEtBQUssS0FBSztZQUNSLFNBQVM7Z0JBQ0wsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5RixNQUFNO1FBQ1IsS0FBSyxNQUFNO1lBQ1QsU0FBUztnQkFDTCxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZGLE1BQU07UUFDUixLQUFLLE9BQU87WUFDVixTQUFTO2dCQUNMLGFBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekYsTUFBTTtRQUVSLCtCQUErQjtRQUMvQixLQUFLLEdBQUc7WUFDTixTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU07UUFDUixLQUFLLElBQUk7WUFDUCxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU07UUFFUiw2QkFBNkI7UUFDN0IsS0FBSyxHQUFHO1lBQ04sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEMsTUFBTTtRQUVSLDBCQUEwQjtRQUMxQixLQUFLLEdBQUc7WUFDTixTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekMsTUFBTTtRQUNSLEtBQUssSUFBSTtZQUNQLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNO1FBRVIsa0JBQWtCO1FBQ2xCLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJLENBQUM7UUFDVixLQUFLLEtBQUs7WUFDUixTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUUsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULFNBQVMsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RSxNQUFNO1FBQ1IsS0FBSyxPQUFPO1lBQ1YsU0FBUyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pFLE1BQU07UUFDUixLQUFLLFFBQVE7WUFDWCxTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEUsTUFBTTtRQUVSLG9DQUFvQztRQUNwQyxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSSxDQUFDO1FBQ1YsS0FBSyxLQUFLO1lBQ1IsU0FBUyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BGLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0UsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLFNBQVMsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRSxNQUFNO1FBRVIsbUVBQW1FO1FBQ25FLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJLENBQUM7UUFDVixLQUFLLEtBQUs7WUFDUixTQUFTLEdBQUcsYUFBYSxDQUNyQixlQUFlLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFGLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxTQUFTLEdBQUcsYUFBYSxDQUNyQixlQUFlLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25GLE1BQU07UUFDUixLQUFLLE9BQU87WUFDVixTQUFTLEdBQUcsYUFBYSxDQUNyQixlQUFlLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JGLE1BQU07UUFFUixnRUFBZ0U7UUFDaEUsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUksQ0FBQztRQUNWLEtBQUssS0FBSztZQUNSLFNBQVMsR0FBRyxhQUFhLENBQ3JCLGVBQWUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEYsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULFNBQVM7Z0JBQ0wsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0YsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLFNBQVMsR0FBRyxhQUFhLENBQ3JCLGVBQWUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakYsTUFBTTtRQUVSLHdCQUF3QjtRQUN4QixLQUFLLEdBQUc7WUFDTixTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0MsTUFBTTtRQUNSLEtBQUssSUFBSTtZQUNQLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQyxNQUFNO1FBRVIseUJBQXlCO1FBQ3pCLEtBQUssR0FBRztZQUNOLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNO1FBQ1IsOEJBQThCO1FBQzlCLEtBQUssSUFBSTtZQUNQLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNO1FBRVIsNEJBQTRCO1FBQzVCLEtBQUssR0FBRztZQUNOLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNO1FBQ1IsS0FBSyxJQUFJO1lBQ1AsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU07UUFFUiw4QkFBOEI7UUFDOUIsS0FBSyxHQUFHO1lBQ04sU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU07UUFDUixLQUFLLElBQUk7WUFDUCxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTTtRQUVSLG9CQUFvQjtRQUNwQixLQUFLLEdBQUc7WUFDTixTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNO1FBQ1IsS0FBSyxJQUFJO1lBQ1AsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTTtRQUNSLEtBQUssS0FBSztZQUNSLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE1BQU07UUFHUix3Q0FBd0M7UUFDeEMsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUksQ0FBQztRQUNWLEtBQUssS0FBSztZQUNSLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE1BQU07UUFDUiw0Q0FBNEM7UUFDNUMsS0FBSyxPQUFPO1lBQ1YsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsTUFBTTtRQUVSLG9DQUFvQztRQUNwQyxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSSxDQUFDO1FBQ1YsS0FBSyxLQUFLLENBQUM7UUFDWCwwRkFBMEY7UUFDMUYsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUksQ0FBQztRQUNWLEtBQUssS0FBSztZQUNSLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLE1BQU07UUFDUixzQ0FBc0M7UUFDdEMsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLE1BQU0sQ0FBQztRQUNaLDBGQUEwRjtRQUMxRixLQUFLLE1BQU07WUFDVCxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxNQUFNO1FBQ1I7WUFDRSxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNqQyxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7Ozs7QUFFRCxTQUFTLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7SUFDMUQscUNBQXFDO0lBQ3JDLHNEQUFzRDtJQUN0RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7O1VBQ2hDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsS0FBSztJQUN2RixPQUFPLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0FBQzdFLENBQUM7Ozs7OztBQUVELFNBQVMsY0FBYyxDQUFDLElBQVUsRUFBRSxPQUFlO0lBQ2pELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM3QyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLElBQVUsRUFBRSxRQUFnQixFQUFFLE9BQWdCOztVQUN0RSxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFDL0Isa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFOztVQUM3QyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO0lBQ3JFLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLEdBQUcsQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWNELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBeUI7SUFDOUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzlDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7SUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztjQUVmLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRWxDLDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFBLEtBQUssRUFBTyxHQUFHLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs7Ozs7Ozs7a0JBUXJDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUM7WUFDN0QsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5Qjs7WUFFRyxLQUE0QjtRQUNoQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDM0MsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7S0FDRjs7VUFFSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUM7SUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixLQUFLLGVBQWUsQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUF1Qjs7VUFDL0MsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7UUFDcEIsTUFBTSxHQUFHLENBQUM7O1FBQ1YsS0FBSyxHQUFHLENBQUM7OztVQUdQLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXOztVQUM5RCxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtJQUU5RCwwREFBMEQ7SUFDMUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUMxRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNOztVQUNsQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLOztVQUNqQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7O1VBQ3pCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDaEUsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBVTtJQUMvQixPQUFPLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtGb3JtYXRXaWR0aCwgRm9ybVN0eWxlLCBnZXRMb2NhbGVEYXRlRm9ybWF0LCBnZXRMb2NhbGVEYXRlVGltZUZvcm1hdCwgZ2V0TG9jYWxlRGF5TmFtZXMsIGdldExvY2FsZURheVBlcmlvZHMsIGdldExvY2FsZUVyYU5hbWVzLCBnZXRMb2NhbGVFeHRyYURheVBlcmlvZFJ1bGVzLCBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMsIGdldExvY2FsZUlkLCBnZXRMb2NhbGVNb250aE5hbWVzLCBnZXRMb2NhbGVOdW1iZXJTeW1ib2wsIGdldExvY2FsZVRpbWVGb3JtYXQsIE51bWJlclN5bWJvbCwgVGltZSwgVHJhbnNsYXRpb25XaWR0aH0gZnJvbSAnLi9sb2NhbGVfZGF0YV9hcGknO1xuXG5leHBvcnQgY29uc3QgSVNPODYwMV9EQVRFX1JFR0VYID1cbiAgICAvXihcXGR7NH0pLT8oXFxkXFxkKS0/KFxcZFxcZCkoPzpUKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlxcLihcXGQrKSk/KT8pPyhafChbKy1dKShcXGRcXGQpOj8oXFxkXFxkKSk/KT8kLztcbi8vICAgIDEgICAgICAgIDIgICAgICAgMyAgICAgICAgIDQgICAgICAgICAgNSAgICAgICAgICA2ICAgICAgICAgIDcgICAgICAgICAgOCAgOSAgICAgMTAgICAgICAxMVxuY29uc3QgTkFNRURfRk9STUFUUzoge1tsb2NhbGVJZDogc3RyaW5nXToge1tmb3JtYXQ6IHN0cmluZ106IHN0cmluZ319ID0ge307XG5jb25zdCBEQVRFX0ZPUk1BVFNfU1BMSVQgPVxuICAgIC8oKD86W15HeU1Md1dkRWFiQmhIbXNTelpPJ10rKXwoPzonKD86W14nXXwnJykqJyl8KD86R3sxLDV9fHl7MSw0fXxNezEsNX18THsxLDV9fHd7MSwyfXxXezF9fGR7MSwyfXxFezEsNn18YXsxLDV9fGJ7MSw1fXxCezEsNX18aHsxLDJ9fEh7MSwyfXxtezEsMn18c3sxLDJ9fFN7MSwzfXx6ezEsNH18WnsxLDV9fE97MSw0fSkpKFtcXHNcXFNdKikvO1xuXG5lbnVtIFpvbmVXaWR0aCB7XG4gIFNob3J0LFxuICBTaG9ydEdNVCxcbiAgTG9uZyxcbiAgRXh0ZW5kZWRcbn1cblxuZW51bSBEYXRlVHlwZSB7XG4gIEZ1bGxZZWFyLFxuICBNb250aCxcbiAgRGF0ZSxcbiAgSG91cnMsXG4gIE1pbnV0ZXMsXG4gIFNlY29uZHMsXG4gIEZyYWN0aW9uYWxTZWNvbmRzLFxuICBEYXlcbn1cblxuZW51bSBUcmFuc2xhdGlvblR5cGUge1xuICBEYXlQZXJpb2RzLFxuICBEYXlzLFxuICBNb250aHMsXG4gIEVyYXNcbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBGb3JtYXRzIGEgZGF0ZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgZGF0ZSB0byBmb3JtYXQsIGFzIGEgRGF0ZSwgb3IgYSBudW1iZXIgKG1pbGxpc2Vjb25kcyBzaW5jZSBVVEMgZXBvY2gpXG4gKiBvciBhbiBbSVNPIGRhdGUtdGltZSBzdHJpbmddKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lKS5cbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGRhdGUtdGltZSBjb21wb25lbnRzIHRvIGluY2x1ZGUuIFNlZSBgRGF0ZVBpcGVgIGZvciBkZXRhaWxzLlxuICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gKiBAcGFyYW0gdGltZXpvbmUgVGhlIHRpbWUgem9uZS4gQSB0aW1lIHpvbmUgb2Zmc2V0IGZyb20gR01UIChzdWNoIGFzIGAnKzA0MzAnYCksXG4gKiBvciBhIHN0YW5kYXJkIFVUQy9HTVQgb3IgY29udGluZW50YWwgVVMgdGltZSB6b25lIGFiYnJldmlhdGlvbi5cbiAqIElmIG5vdCBzcGVjaWZpZWQsIHVzZXMgaG9zdCBzeXN0ZW0gc2V0dGluZ3MuXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cbiAqXG4gKiBAc2VlIGBEYXRlUGlwZWBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShcbiAgICB2YWx1ZTogc3RyaW5nfG51bWJlcnxEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGRhdGUgPSB0b0RhdGUodmFsdWUpO1xuICBjb25zdCBuYW1lZEZvcm1hdCA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgZm9ybWF0KTtcbiAgZm9ybWF0ID0gbmFtZWRGb3JtYXQgfHwgZm9ybWF0O1xuXG4gIGxldCBwYXJ0czogc3RyaW5nW10gPSBbXTtcbiAgbGV0IG1hdGNoO1xuICB3aGlsZSAoZm9ybWF0KSB7XG4gICAgbWF0Y2ggPSBEQVRFX0ZPUk1BVFNfU1BMSVQuZXhlYyhmb3JtYXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcGFydHMgPSBwYXJ0cy5jb25jYXQobWF0Y2guc2xpY2UoMSkpO1xuICAgICAgY29uc3QgcGFydCA9IHBhcnRzLnBvcCgpO1xuICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZm9ybWF0ID0gcGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydHMucHVzaChmb3JtYXQpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbGV0IGRhdGVUaW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgaWYgKHRpbWV6b25lKSB7XG4gICAgZGF0ZVRpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVUb09mZnNldCh0aW1lem9uZSwgZGF0ZVRpbWV6b25lT2Zmc2V0KTtcbiAgICBkYXRlID0gY29udmVydFRpbWV6b25lVG9Mb2NhbChkYXRlLCB0aW1lem9uZSwgdHJ1ZSk7XG4gIH1cblxuICBsZXQgdGV4dCA9ICcnO1xuICBwYXJ0cy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICBjb25zdCBkYXRlRm9ybWF0dGVyID0gZ2V0RGF0ZUZvcm1hdHRlcih2YWx1ZSk7XG4gICAgdGV4dCArPSBkYXRlRm9ybWF0dGVyID9cbiAgICAgICAgZGF0ZUZvcm1hdHRlcihkYXRlLCBsb2NhbGUsIGRhdGVUaW1lem9uZU9mZnNldCkgOlxuICAgICAgICB2YWx1ZSA9PT0gJ1xcJ1xcJycgPyAnXFwnJyA6IHZhbHVlLnJlcGxhY2UoLyheJ3wnJCkvZywgJycpLnJlcGxhY2UoLycnL2csICdcXCcnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldE5hbWVkRm9ybWF0KGxvY2FsZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGxvY2FsZUlkID0gZ2V0TG9jYWxlSWQobG9jYWxlKTtcbiAgTkFNRURfRk9STUFUU1tsb2NhbGVJZF0gPSBOQU1FRF9GT1JNQVRTW2xvY2FsZUlkXSB8fCB7fTtcblxuICBpZiAoTkFNRURfRk9STUFUU1tsb2NhbGVJZF1bZm9ybWF0XSkge1xuICAgIHJldHVybiBOQU1FRF9GT1JNQVRTW2xvY2FsZUlkXVtmb3JtYXRdO1xuICB9XG5cbiAgbGV0IGZvcm1hdFZhbHVlID0gJyc7XG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSAnc2hvcnREYXRlJzpcbiAgICAgIGZvcm1hdFZhbHVlID0gZ2V0TG9jYWxlRGF0ZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLlNob3J0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lZGl1bURhdGUnOlxuICAgICAgZm9ybWF0VmFsdWUgPSBnZXRMb2NhbGVEYXRlRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguTWVkaXVtKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xvbmdEYXRlJzpcbiAgICAgIGZvcm1hdFZhbHVlID0gZ2V0TG9jYWxlRGF0ZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLkxvbmcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZnVsbERhdGUnOlxuICAgICAgZm9ybWF0VmFsdWUgPSBnZXRMb2NhbGVEYXRlRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguRnVsbCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzaG9ydFRpbWUnOlxuICAgICAgZm9ybWF0VmFsdWUgPSBnZXRMb2NhbGVUaW1lRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguU2hvcnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVkaXVtVGltZSc6XG4gICAgICBmb3JtYXRWYWx1ZSA9IGdldExvY2FsZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5NZWRpdW0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbG9uZ1RpbWUnOlxuICAgICAgZm9ybWF0VmFsdWUgPSBnZXRMb2NhbGVUaW1lRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguTG9uZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmdWxsVGltZSc6XG4gICAgICBmb3JtYXRWYWx1ZSA9IGdldExvY2FsZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5GdWxsKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgIGNvbnN0IHNob3J0VGltZSA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgJ3Nob3J0VGltZScpO1xuICAgICAgY29uc3Qgc2hvcnREYXRlID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnc2hvcnREYXRlJyk7XG4gICAgICBmb3JtYXRWYWx1ZSA9IGZvcm1hdERhdGVUaW1lKFxuICAgICAgICAgIGdldExvY2FsZURhdGVUaW1lRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguU2hvcnQpLCBbc2hvcnRUaW1lLCBzaG9ydERhdGVdKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICBjb25zdCBtZWRpdW1UaW1lID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnbWVkaXVtVGltZScpO1xuICAgICAgY29uc3QgbWVkaXVtRGF0ZSA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgJ21lZGl1bURhdGUnKTtcbiAgICAgIGZvcm1hdFZhbHVlID0gZm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5NZWRpdW0pLCBbbWVkaXVtVGltZSwgbWVkaXVtRGF0ZV0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbG9uZyc6XG4gICAgICBjb25zdCBsb25nVGltZSA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgJ2xvbmdUaW1lJyk7XG4gICAgICBjb25zdCBsb25nRGF0ZSA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgJ2xvbmdEYXRlJyk7XG4gICAgICBmb3JtYXRWYWx1ZSA9XG4gICAgICAgICAgZm9ybWF0RGF0ZVRpbWUoZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5Mb25nKSwgW2xvbmdUaW1lLCBsb25nRGF0ZV0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZnVsbCc6XG4gICAgICBjb25zdCBmdWxsVGltZSA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgJ2Z1bGxUaW1lJyk7XG4gICAgICBjb25zdCBmdWxsRGF0ZSA9IGdldE5hbWVkRm9ybWF0KGxvY2FsZSwgJ2Z1bGxEYXRlJyk7XG4gICAgICBmb3JtYXRWYWx1ZSA9XG4gICAgICAgICAgZm9ybWF0RGF0ZVRpbWUoZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5GdWxsKSwgW2Z1bGxUaW1lLCBmdWxsRGF0ZV0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKGZvcm1hdFZhbHVlKSB7XG4gICAgTkFNRURfRk9STUFUU1tsb2NhbGVJZF1bZm9ybWF0XSA9IGZvcm1hdFZhbHVlO1xuICB9XG4gIHJldHVybiBmb3JtYXRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoc3RyOiBzdHJpbmcsIG9wdF92YWx1ZXM6IHN0cmluZ1tdKSB7XG4gIGlmIChvcHRfdmFsdWVzKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xceyhbXn1dKyl9L2csIGZ1bmN0aW9uKG1hdGNoLCBrZXkpIHtcbiAgICAgIHJldHVybiAob3B0X3ZhbHVlcyAhPSBudWxsICYmIGtleSBpbiBvcHRfdmFsdWVzKSA/IG9wdF92YWx1ZXNba2V5XSA6IG1hdGNoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIHBhZE51bWJlcihcbiAgICBudW06IG51bWJlciwgZGlnaXRzOiBudW1iZXIsIG1pbnVzU2lnbiA9ICctJywgdHJpbT86IGJvb2xlYW4sIG5lZ1dyYXA/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgbGV0IG5lZyA9ICcnO1xuICBpZiAobnVtIDwgMCB8fCAobmVnV3JhcCAmJiBudW0gPD0gMCkpIHtcbiAgICBpZiAobmVnV3JhcCkge1xuICAgICAgbnVtID0gLW51bSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bSA9IC1udW07XG4gICAgICBuZWcgPSBtaW51c1NpZ247XG4gICAgfVxuICB9XG4gIGxldCBzdHJOdW0gPSBTdHJpbmcobnVtKTtcbiAgd2hpbGUgKHN0ck51bS5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICBzdHJOdW0gPSAnMCcgKyBzdHJOdW07XG4gIH1cbiAgaWYgKHRyaW0pIHtcbiAgICBzdHJOdW0gPSBzdHJOdW0uc3Vic3RyKHN0ck51bS5sZW5ndGggLSBkaWdpdHMpO1xuICB9XG4gIHJldHVybiBuZWcgKyBzdHJOdW07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEZyYWN0aW9uYWxTZWNvbmRzKG1pbGxpc2Vjb25kczogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHN0ck1zID0gcGFkTnVtYmVyKG1pbGxpc2Vjb25kcywgMyk7XG4gIHJldHVybiBzdHJNcy5zdWJzdHIoMCwgZGlnaXRzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGF0ZSBmb3JtYXR0ZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZGF0ZSBpbnRvIGl0cyBsb2NhbGUgZGlnaXQgcmVwcmVzZW50YXRpb25cbiAqL1xuZnVuY3Rpb24gZGF0ZUdldHRlcihcbiAgICBuYW1lOiBEYXRlVHlwZSwgc2l6ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciA9IDAsIHRyaW0gPSBmYWxzZSxcbiAgICBuZWdXcmFwID0gZmFsc2UpOiBEYXRlRm9ybWF0dGVyIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcGFydCA9IGdldERhdGVQYXJ0KG5hbWUsIGRhdGUpO1xuICAgIGlmIChvZmZzZXQgPiAwIHx8IHBhcnQgPiAtb2Zmc2V0KSB7XG4gICAgICBwYXJ0ICs9IG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gRGF0ZVR5cGUuSG91cnMpIHtcbiAgICAgIGlmIChwYXJ0ID09PSAwICYmIG9mZnNldCA9PT0gLTEyKSB7XG4gICAgICAgIHBhcnQgPSAxMjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IERhdGVUeXBlLkZyYWN0aW9uYWxTZWNvbmRzKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RnJhY3Rpb25hbFNlY29uZHMocGFydCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYWxlTWludXMgPSBnZXRMb2NhbGVOdW1iZXJTeW1ib2wobG9jYWxlLCBOdW1iZXJTeW1ib2wuTWludXNTaWduKTtcbiAgICByZXR1cm4gcGFkTnVtYmVyKHBhcnQsIHNpemUsIGxvY2FsZU1pbnVzLCB0cmltLCBuZWdXcmFwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZVBhcnQocGFydDogRGF0ZVR5cGUsIGRhdGU6IERhdGUpOiBudW1iZXIge1xuICBzd2l0Y2ggKHBhcnQpIHtcbiAgICBjYXNlIERhdGVUeXBlLkZ1bGxZZWFyOlxuICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjYXNlIERhdGVUeXBlLk1vbnRoOlxuICAgICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKTtcbiAgICBjYXNlIERhdGVUeXBlLkRhdGU6XG4gICAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG4gICAgY2FzZSBEYXRlVHlwZS5Ib3VyczpcbiAgICAgIHJldHVybiBkYXRlLmdldEhvdXJzKCk7XG4gICAgY2FzZSBEYXRlVHlwZS5NaW51dGVzOlxuICAgICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGNhc2UgRGF0ZVR5cGUuU2Vjb25kczpcbiAgICAgIHJldHVybiBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBjYXNlIERhdGVUeXBlLkZyYWN0aW9uYWxTZWNvbmRzOlxuICAgICAgcmV0dXJuIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY2FzZSBEYXRlVHlwZS5EYXk6XG4gICAgICByZXR1cm4gZGF0ZS5nZXREYXkoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIERhdGVUeXBlIHZhbHVlIFwiJHtwYXJ0fVwiLmApO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGRhdGUgZm9ybWF0dGVyIHRoYXQgdHJhbnNmb3JtcyBhIGRhdGUgaW50byBpdHMgbG9jYWxlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICovXG5mdW5jdGlvbiBkYXRlU3RyR2V0dGVyKFxuICAgIG5hbWU6IFRyYW5zbGF0aW9uVHlwZSwgd2lkdGg6IFRyYW5zbGF0aW9uV2lkdGgsIGZvcm06IEZvcm1TdHlsZSA9IEZvcm1TdHlsZS5Gb3JtYXQsXG4gICAgZXh0ZW5kZWQgPSBmYWxzZSk6IERhdGVGb3JtYXR0ZXIge1xuICByZXR1cm4gZnVuY3Rpb24oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXREYXRlVHJhbnNsYXRpb24oZGF0ZSwgbG9jYWxlLCBuYW1lLCB3aWR0aCwgZm9ybSwgZXh0ZW5kZWQpO1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxvY2FsZSB0cmFuc2xhdGlvbiBvZiBhIGRhdGUgZm9yIGEgZ2l2ZW4gZm9ybSwgdHlwZSBhbmQgd2lkdGhcbiAqL1xuZnVuY3Rpb24gZ2V0RGF0ZVRyYW5zbGF0aW9uKFxuICAgIGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nLCBuYW1lOiBUcmFuc2xhdGlvblR5cGUsIHdpZHRoOiBUcmFuc2xhdGlvbldpZHRoLCBmb3JtOiBGb3JtU3R5bGUsXG4gICAgZXh0ZW5kZWQ6IGJvb2xlYW4pIHtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSBUcmFuc2xhdGlvblR5cGUuTW9udGhzOlxuICAgICAgcmV0dXJuIGdldExvY2FsZU1vbnRoTmFtZXMobG9jYWxlLCBmb3JtLCB3aWR0aClbZGF0ZS5nZXRNb250aCgpXTtcbiAgICBjYXNlIFRyYW5zbGF0aW9uVHlwZS5EYXlzOlxuICAgICAgcmV0dXJuIGdldExvY2FsZURheU5hbWVzKGxvY2FsZSwgZm9ybSwgd2lkdGgpW2RhdGUuZ2V0RGF5KCldO1xuICAgIGNhc2UgVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHM6XG4gICAgICBjb25zdCBjdXJyZW50SG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgaWYgKGV4dGVuZGVkKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVzID0gZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RSdWxlcyhsb2NhbGUpO1xuICAgICAgICBjb25zdCBkYXlQZXJpb2RzID0gZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RzKGxvY2FsZSwgZm9ybSwgd2lkdGgpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBydWxlcy5mb3JFYWNoKChydWxlOiBUaW1lfFtUaW1lLCBUaW1lXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGUpKSB7XG4gICAgICAgICAgICAvLyBtb3JuaW5nLCBhZnRlcm5vb24sIGV2ZW5pbmcsIG5pZ2h0XG4gICAgICAgICAgICBjb25zdCB7aG91cnM6IGhvdXJzRnJvbSwgbWludXRlczogbWludXRlc0Zyb219ID0gcnVsZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHtob3VyczogaG91cnNUbywgbWludXRlczogbWludXRlc1RvfSA9IHJ1bGVbMV07XG4gICAgICAgICAgICBpZiAoY3VycmVudEhvdXJzID49IGhvdXJzRnJvbSAmJiBjdXJyZW50TWludXRlcyA+PSBtaW51dGVzRnJvbSAmJlxuICAgICAgICAgICAgICAgIChjdXJyZW50SG91cnMgPCBob3Vyc1RvIHx8XG4gICAgICAgICAgICAgICAgIChjdXJyZW50SG91cnMgPT09IGhvdXJzVG8gJiYgY3VycmVudE1pbnV0ZXMgPCBtaW51dGVzVG8pKSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBkYXlQZXJpb2RzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgeyAgLy8gbm9vbiBvciBtaWRuaWdodFxuICAgICAgICAgICAgY29uc3Qge2hvdXJzLCBtaW51dGVzfSA9IHJ1bGU7XG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IGN1cnJlbnRIb3VycyAmJiBtaW51dGVzID09PSBjdXJyZW50TWludXRlcykge1xuICAgICAgICAgICAgICByZXN1bHQgPSBkYXlQZXJpb2RzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaWYgbm8gcnVsZXMgZm9yIHRoZSBkYXkgcGVyaW9kcywgd2UgdXNlIGFtL3BtIGJ5IGRlZmF1bHRcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlQZXJpb2RzKGxvY2FsZSwgZm9ybSwgPFRyYW5zbGF0aW9uV2lkdGg+d2lkdGgpW2N1cnJlbnRIb3VycyA8IDEyID8gMCA6IDFdO1xuICAgIGNhc2UgVHJhbnNsYXRpb25UeXBlLkVyYXM6XG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRXJhTmFtZXMobG9jYWxlLCA8VHJhbnNsYXRpb25XaWR0aD53aWR0aClbZGF0ZS5nZXRGdWxsWWVhcigpIDw9IDAgPyAwIDogMV07XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFRoaXMgZGVmYXVsdCBjYXNlIGlzIG5vdCBuZWVkZWQgYnkgVHlwZVNjcmlwdCBjb21waWxlciwgYXMgdGhlIHN3aXRjaCBpcyBleGhhdXN0aXZlLlxuICAgICAgLy8gSG93ZXZlciBDbG9zdXJlIENvbXBpbGVyIGRvZXMgbm90IHVuZGVyc3RhbmQgdGhhdCBhbmQgcmVwb3J0cyBhbiBlcnJvciBpbiB0eXBlZCBtb2RlLlxuICAgICAgLy8gVGhlIGB0aHJvdyBuZXcgRXJyb3JgIGJlbG93IHdvcmtzIGFyb3VuZCB0aGUgcHJvYmxlbSwgYW5kIHRoZSB1bmV4cGVjdGVkOiBuZXZlciB2YXJpYWJsZVxuICAgICAgLy8gbWFrZXMgc3VyZSB0c2Mgc3RpbGwgY2hlY2tzIHRoaXMgY29kZSBpcyB1bnJlYWNoYWJsZS5cbiAgICAgIGNvbnN0IHVuZXhwZWN0ZWQ6IG5ldmVyID0gbmFtZTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCB0cmFuc2xhdGlvbiB0eXBlICR7dW5leHBlY3RlZH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBkYXRlIGZvcm1hdHRlciB0aGF0IHRyYW5zZm9ybXMgYSBkYXRlIGFuZCBhbiBvZmZzZXQgaW50byBhIHRpbWV6b25lIHdpdGggSVNPODYwMSBvclxuICogR01UIGZvcm1hdCBkZXBlbmRpbmcgb24gdGhlIHdpZHRoIChlZzogc2hvcnQgPSArMDQzMCwgc2hvcnQ6R01UID0gR01UKzQsIGxvbmcgPSBHTVQrMDQ6MzAsXG4gKiBleHRlbmRlZCA9ICswNDozMClcbiAqL1xuZnVuY3Rpb24gdGltZVpvbmVHZXR0ZXIod2lkdGg6IFpvbmVXaWR0aCk6IERhdGVGb3JtYXR0ZXIge1xuICByZXR1cm4gZnVuY3Rpb24oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSB7XG4gICAgY29uc3Qgem9uZSA9IC0xICogb2Zmc2V0O1xuICAgIGNvbnN0IG1pbnVzU2lnbiA9IGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIE51bWJlclN5bWJvbC5NaW51c1NpZ24pO1xuICAgIGNvbnN0IGhvdXJzID0gem9uZSA+IDAgPyBNYXRoLmZsb29yKHpvbmUgLyA2MCkgOiBNYXRoLmNlaWwoem9uZSAvIDYwKTtcbiAgICBzd2l0Y2ggKHdpZHRoKSB7XG4gICAgICBjYXNlIFpvbmVXaWR0aC5TaG9ydDpcbiAgICAgICAgcmV0dXJuICgoem9uZSA+PSAwKSA/ICcrJyA6ICcnKSArIHBhZE51bWJlcihob3VycywgMiwgbWludXNTaWduKSArXG4gICAgICAgICAgICBwYWROdW1iZXIoTWF0aC5hYnMoem9uZSAlIDYwKSwgMiwgbWludXNTaWduKTtcbiAgICAgIGNhc2UgWm9uZVdpZHRoLlNob3J0R01UOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyAoKHpvbmUgPj0gMCkgPyAnKycgOiAnJykgKyBwYWROdW1iZXIoaG91cnMsIDEsIG1pbnVzU2lnbik7XG4gICAgICBjYXNlIFpvbmVXaWR0aC5Mb25nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyAoKHpvbmUgPj0gMCkgPyAnKycgOiAnJykgKyBwYWROdW1iZXIoaG91cnMsIDIsIG1pbnVzU2lnbikgKyAnOicgK1xuICAgICAgICAgICAgcGFkTnVtYmVyKE1hdGguYWJzKHpvbmUgJSA2MCksIDIsIG1pbnVzU2lnbik7XG4gICAgICBjYXNlIFpvbmVXaWR0aC5FeHRlbmRlZDpcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAnWic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICgoem9uZSA+PSAwKSA/ICcrJyA6ICcnKSArIHBhZE51bWJlcihob3VycywgMiwgbWludXNTaWduKSArICc6JyArXG4gICAgICAgICAgICAgIHBhZE51bWJlcihNYXRoLmFicyh6b25lICUgNjApLCAyLCBtaW51c1NpZ24pO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gem9uZSB3aWR0aCBcIiR7d2lkdGh9XCJgKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IEpBTlVBUlkgPSAwO1xuY29uc3QgVEhVUlNEQVkgPSA0O1xuZnVuY3Rpb24gZ2V0Rmlyc3RUaHVyc2RheU9mWWVhcih5ZWFyOiBudW1iZXIpIHtcbiAgY29uc3QgZmlyc3REYXlPZlllYXIgPSAobmV3IERhdGUoeWVhciwgSkFOVUFSWSwgMSkpLmdldERheSgpO1xuICByZXR1cm4gbmV3IERhdGUoXG4gICAgICB5ZWFyLCAwLCAxICsgKChmaXJzdERheU9mWWVhciA8PSBUSFVSU0RBWSkgPyBUSFVSU0RBWSA6IFRIVVJTREFZICsgNykgLSBmaXJzdERheU9mWWVhcik7XG59XG5cbmZ1bmN0aW9uIGdldFRodXJzZGF5VGhpc1dlZWsoZGF0ZXRpbWU6IERhdGUpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgZGF0ZXRpbWUuZ2V0RnVsbFllYXIoKSwgZGF0ZXRpbWUuZ2V0TW9udGgoKSxcbiAgICAgIGRhdGV0aW1lLmdldERhdGUoKSArIChUSFVSU0RBWSAtIGRhdGV0aW1lLmdldERheSgpKSk7XG59XG5cbmZ1bmN0aW9uIHdlZWtHZXR0ZXIoc2l6ZTogbnVtYmVyLCBtb250aEJhc2VkID0gZmFsc2UpOiBEYXRlRm9ybWF0dGVyIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAobW9udGhCYXNlZCkge1xuICAgICAgY29uc3QgbmJEYXlzQmVmb3JlMXN0RGF5T2ZNb250aCA9XG4gICAgICAgICAgbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldERheSgpIC0gMTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICByZXN1bHQgPSAxICsgTWF0aC5mbG9vcigodG9kYXkgKyBuYkRheXNCZWZvcmUxc3REYXlPZk1vbnRoKSAvIDcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdFRodXJzID0gZ2V0Rmlyc3RUaHVyc2RheU9mWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgY29uc3QgdGhpc1RodXJzID0gZ2V0VGh1cnNkYXlUaGlzV2VlayhkYXRlKTtcbiAgICAgIGNvbnN0IGRpZmYgPSB0aGlzVGh1cnMuZ2V0VGltZSgpIC0gZmlyc3RUaHVycy5nZXRUaW1lKCk7XG4gICAgICByZXN1bHQgPSAxICsgTWF0aC5yb3VuZChkaWZmIC8gNi4wNDhlOCk7ICAvLyA2LjA0OGU4IG1zIHBlciB3ZWVrXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZE51bWJlcihyZXN1bHQsIHNpemUsIGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIE51bWJlclN5bWJvbC5NaW51c1NpZ24pKTtcbiAgfTtcbn1cblxudHlwZSBEYXRlRm9ybWF0dGVyID0gKGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcikgPT4gc3RyaW5nO1xuXG5jb25zdCBEQVRFX0ZPUk1BVFM6IHtbZm9ybWF0OiBzdHJpbmddOiBEYXRlRm9ybWF0dGVyfSA9IHt9O1xuXG4vLyBCYXNlZCBvbiBDTERSIGZvcm1hdHM6XG4vLyBTZWUgY29tcGxldGUgbGlzdDogaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4vLyBTZWUgYWxzbyBleHBsYW5hdGlvbnM6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZVxuLy8gVE9ETyhvY29tYmUpOiBzdXBwb3J0IGFsbCBtaXNzaW5nIGNsZHIgZm9ybWF0czogWSwgVSwgUSwgRCwgRiwgZSwgYywgaiwgSiwgQywgQSwgdiwgViwgWCwgeFxuZnVuY3Rpb24gZ2V0RGF0ZUZvcm1hdHRlcihmb3JtYXQ6IHN0cmluZyk6IERhdGVGb3JtYXR0ZXJ8bnVsbCB7XG4gIGlmIChEQVRFX0ZPUk1BVFNbZm9ybWF0XSkge1xuICAgIHJldHVybiBEQVRFX0ZPUk1BVFNbZm9ybWF0XTtcbiAgfVxuICBsZXQgZm9ybWF0dGVyO1xuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIC8vIEVyYSBuYW1lIChBRC9CQylcbiAgICBjYXNlICdHJzpcbiAgICBjYXNlICdHRyc6XG4gICAgY2FzZSAnR0dHJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkVyYXMsIFRyYW5zbGF0aW9uV2lkdGguQWJicmV2aWF0ZWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnR0dHRyc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5FcmFzLCBUcmFuc2xhdGlvbldpZHRoLldpZGUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnR0dHR0cnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRXJhcywgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyAxIGRpZ2l0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB5ZWFyLCBlLmcuIChBRCAxID0+IDEsIEFEIDE5OSA9PiAxOTkpXG4gICAgY2FzZSAneSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkZ1bGxZZWFyLCAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICAvLyAyIGRpZ2l0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB5ZWFyLCBwYWRkZWQgKDAwLTk5KS4gKGUuZy4gQUQgMjAwMSA9PiAwMSwgQUQgMjAxMCA9PiAxMClcbiAgICBjYXNlICd5eSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkZ1bGxZZWFyLCAyLCAwLCB0cnVlLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIDMgZGlnaXQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHllYXIsIHBhZGRlZCAoMDAwLTk5OSkuIChlLmcuIEFEIDIwMDEgPT4gMDEsIEFEIDIwMTAgPT4gMTApXG4gICAgY2FzZSAneXl5JzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuRnVsbFllYXIsIDMsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIDQgZGlnaXQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHllYXIgKGUuZy4gQUQgMSA9PiAwMDAxLCBBRCAyMDEwID0+IDIwMTApXG4gICAgY2FzZSAneXl5eSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkZ1bGxZZWFyLCA0LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICBicmVhaztcblxuICAgIC8vIE1vbnRoIG9mIHRoZSB5ZWFyICgxLTEyKSwgbnVtZXJpY1xuICAgIGNhc2UgJ00nOlxuICAgIGNhc2UgJ0wnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5Nb250aCwgMSwgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNTSc6XG4gICAgY2FzZSAnTEwnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5Nb250aCwgMiwgMSk7XG4gICAgICBicmVhaztcblxuICAgIC8vIE1vbnRoIG9mIHRoZSB5ZWFyIChKYW51YXJ5LCAuLi4pLCBzdHJpbmcsIGZvcm1hdFxuICAgIGNhc2UgJ01NTSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5Nb250aHMsIFRyYW5zbGF0aW9uV2lkdGguQWJicmV2aWF0ZWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTU1NTSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5Nb250aHMsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNTU1NTSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5Nb250aHMsIFRyYW5zbGF0aW9uV2lkdGguTmFycm93KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gTW9udGggb2YgdGhlIHllYXIgKEphbnVhcnksIC4uLiksIHN0cmluZywgc3RhbmRhbG9uZVxuICAgIGNhc2UgJ0xMTCc6XG4gICAgICBmb3JtYXR0ZXIgPVxuICAgICAgICAgIGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLk1vbnRocywgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCwgRm9ybVN0eWxlLlN0YW5kYWxvbmUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTExMTCc6XG4gICAgICBmb3JtYXR0ZXIgPVxuICAgICAgICAgIGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLk1vbnRocywgVHJhbnNsYXRpb25XaWR0aC5XaWRlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdMTExMTCc6XG4gICAgICBmb3JtYXR0ZXIgPVxuICAgICAgICAgIGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLk1vbnRocywgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3csIEZvcm1TdHlsZS5TdGFuZGFsb25lKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gV2VlayBvZiB0aGUgeWVhciAoMSwgLi4uIDUyKVxuICAgIGNhc2UgJ3cnOlxuICAgICAgZm9ybWF0dGVyID0gd2Vla0dldHRlcigxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3d3JzpcbiAgICAgIGZvcm1hdHRlciA9IHdlZWtHZXR0ZXIoMik7XG4gICAgICBicmVhaztcblxuICAgIC8vIFdlZWsgb2YgdGhlIG1vbnRoICgxLCAuLi4pXG4gICAgY2FzZSAnVyc6XG4gICAgICBmb3JtYXR0ZXIgPSB3ZWVrR2V0dGVyKDEsIHRydWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBEYXkgb2YgdGhlIG1vbnRoICgxLTMxKVxuICAgIGNhc2UgJ2QnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5EYXRlLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuRGF0ZSwgMik7XG4gICAgICBicmVhaztcblxuICAgIC8vIERheSBvZiB0aGUgV2Vla1xuICAgIGNhc2UgJ0UnOlxuICAgIGNhc2UgJ0VFJzpcbiAgICBjYXNlICdFRUUnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRGF5cywgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFRUVFJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkRheXMsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFRUVFRSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5EYXlzLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRGF5cywgVHJhbnNsYXRpb25XaWR0aC5TaG9ydCk7XG4gICAgICBicmVhaztcblxuICAgIC8vIEdlbmVyaWMgcGVyaW9kIG9mIHRoZSBkYXkgKGFtLXBtKVxuICAgIGNhc2UgJ2EnOlxuICAgIGNhc2UgJ2FhJzpcbiAgICBjYXNlICdhYWEnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhYWFhJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHMsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhYWFhYSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdyk7XG4gICAgICBicmVhaztcblxuICAgIC8vIEV4dGVuZGVkIHBlcmlvZCBvZiB0aGUgZGF5IChtaWRuaWdodCwgYXQgbmlnaHQsIC4uLiksIHN0YW5kYWxvbmVcbiAgICBjYXNlICdiJzpcbiAgICBjYXNlICdiYic6XG4gICAgY2FzZSAnYmJiJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoXG4gICAgICAgICAgVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHMsIFRyYW5zbGF0aW9uV2lkdGguQWJicmV2aWF0ZWQsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihcbiAgICAgICAgICBUcmFuc2xhdGlvblR5cGUuRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aC5XaWRlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiYmJiYic6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFxuICAgICAgICAgIFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdywgRm9ybVN0eWxlLlN0YW5kYWxvbmUsIHRydWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBFeHRlbmRlZCBwZXJpb2Qgb2YgdGhlIGRheSAobWlkbmlnaHQsIG5pZ2h0LCAuLi4pLCBzdGFuZGFsb25lXG4gICAgY2FzZSAnQic6XG4gICAgY2FzZSAnQkInOlxuICAgIGNhc2UgJ0JCQic6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFxuICAgICAgICAgIFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkLCBGb3JtU3R5bGUuRm9ybWF0LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZm9ybWF0dGVyID1cbiAgICAgICAgICBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLldpZGUsIEZvcm1TdHlsZS5Gb3JtYXQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQkJCQkInOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihcbiAgICAgICAgICBUcmFuc2xhdGlvblR5cGUuRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3csIEZvcm1TdHlsZS5Gb3JtYXQsIHRydWUpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBIb3VyIGluIEFNL1BNLCAoMS0xMilcbiAgICBjYXNlICdoJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuSG91cnMsIDEsIC0xMik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoaCc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkhvdXJzLCAyLCAtMTIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBIb3VyIG9mIHRoZSBkYXkgKDAtMjMpXG4gICAgY2FzZSAnSCc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkhvdXJzLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIEhvdXIgaW4gZGF5LCBwYWRkZWQgKDAwLTIzKVxuICAgIGNhc2UgJ0hIJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuSG91cnMsIDIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBNaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpXG4gICAgY2FzZSAnbSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLk1pbnV0ZXMsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5NaW51dGVzLCAyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gU2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpXG4gICAgY2FzZSAncyc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLlNlY29uZHMsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5TZWNvbmRzLCAyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRnJhY3Rpb25hbCBzZWNvbmRcbiAgICBjYXNlICdTJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuRnJhY3Rpb25hbFNlY29uZHMsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU1MnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5GcmFjdGlvbmFsU2Vjb25kcywgMik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTU1MnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5GcmFjdGlvbmFsU2Vjb25kcywgMyk7XG4gICAgICBicmVhaztcblxuXG4gICAgLy8gVGltZXpvbmUgSVNPODYwMSBzaG9ydCBmb3JtYXQgKC0wNDMwKVxuICAgIGNhc2UgJ1onOlxuICAgIGNhc2UgJ1paJzpcbiAgICBjYXNlICdaWlonOlxuICAgICAgZm9ybWF0dGVyID0gdGltZVpvbmVHZXR0ZXIoWm9uZVdpZHRoLlNob3J0KTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRpbWV6b25lIElTTzg2MDEgZXh0ZW5kZWQgZm9ybWF0ICgtMDQ6MzApXG4gICAgY2FzZSAnWlpaWlonOlxuICAgICAgZm9ybWF0dGVyID0gdGltZVpvbmVHZXR0ZXIoWm9uZVdpZHRoLkV4dGVuZGVkKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gVGltZXpvbmUgR01UIHNob3J0IGZvcm1hdCAoR01UKzQpXG4gICAgY2FzZSAnTyc6XG4gICAgY2FzZSAnT08nOlxuICAgIGNhc2UgJ09PTyc6XG4gICAgLy8gU2hvdWxkIGJlIGxvY2F0aW9uLCBidXQgZmFsbGJhY2sgdG8gZm9ybWF0IE8gaW5zdGVhZCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhlIGRhdGEgeWV0XG4gICAgY2FzZSAneic6XG4gICAgY2FzZSAnenonOlxuICAgIGNhc2UgJ3p6eic6XG4gICAgICBmb3JtYXR0ZXIgPSB0aW1lWm9uZUdldHRlcihab25lV2lkdGguU2hvcnRHTVQpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGltZXpvbmUgR01UIGxvbmcgZm9ybWF0IChHTVQrMDQzMClcbiAgICBjYXNlICdPT09PJzpcbiAgICBjYXNlICdaWlpaJzpcbiAgICAvLyBTaG91bGQgYmUgbG9jYXRpb24sIGJ1dCBmYWxsYmFjayB0byBmb3JtYXQgTyBpbnN0ZWFkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGUgZGF0YSB5ZXRcbiAgICBjYXNlICd6enp6JzpcbiAgICAgIGZvcm1hdHRlciA9IHRpbWVab25lR2V0dGVyKFpvbmVXaWR0aC5Mb25nKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBEQVRFX0ZPUk1BVFNbZm9ybWF0XSA9IGZvcm1hdHRlcjtcbiAgcmV0dXJuIGZvcm1hdHRlcjtcbn1cblxuZnVuY3Rpb24gdGltZXpvbmVUb09mZnNldCh0aW1lem9uZTogc3RyaW5nLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gU3VwcG9ydDogSUUgOS0xMSBvbmx5LCBFZGdlIDEzLTE1K1xuICAvLyBJRS9FZGdlIGRvIG5vdCBcInVuZGVyc3RhbmRcIiBjb2xvbiAoYDpgKSBpbiB0aW1lem9uZVxuICB0aW1lem9uZSA9IHRpbWV6b25lLnJlcGxhY2UoLzovZywgJycpO1xuICBjb25zdCByZXF1ZXN0ZWRUaW1lem9uZU9mZnNldCA9IERhdGUucGFyc2UoJ0phbiAwMSwgMTk3MCAwMDowMDowMCAnICsgdGltZXpvbmUpIC8gNjAwMDA7XG4gIHJldHVybiBpc05hTihyZXF1ZXN0ZWRUaW1lem9uZU9mZnNldCkgPyBmYWxsYmFjayA6IHJlcXVlc3RlZFRpbWV6b25lT2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBhZGREYXRlTWludXRlcyhkYXRlOiBEYXRlLCBtaW51dGVzOiBudW1iZXIpIHtcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgbWludXRlcyk7XG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VGltZXpvbmVUb0xvY2FsKGRhdGU6IERhdGUsIHRpbWV6b25lOiBzdHJpbmcsIHJldmVyc2U6IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgcmV2ZXJzZVZhbHVlID0gcmV2ZXJzZSA/IC0xIDogMTtcbiAgY29uc3QgZGF0ZVRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICBjb25zdCB0aW1lem9uZU9mZnNldCA9IHRpbWV6b25lVG9PZmZzZXQodGltZXpvbmUsIGRhdGVUaW1lem9uZU9mZnNldCk7XG4gIHJldHVybiBhZGREYXRlTWludXRlcyhkYXRlLCByZXZlcnNlVmFsdWUgKiAodGltZXpvbmVPZmZzZXQgLSBkYXRlVGltZXpvbmVPZmZzZXQpKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGRhdGUuXG4gKlxuICogU3VwcG9ydGVkIGlucHV0IGZvcm1hdHM6XG4gKiAtIGBEYXRlYFxuICogLSBudW1iZXI6IHRpbWVzdGFtcFxuICogLSBzdHJpbmc6IG51bWVyaWMgKGUuZy4gXCIxMjM0XCIpLCBJU08gYW5kIGRhdGUgc3RyaW5ncyBpbiBhIGZvcm1hdCBzdXBwb3J0ZWQgYnlcbiAqICAgW0RhdGUucGFyc2UoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS9wYXJzZSkuXG4gKiAgIE5vdGU6IElTTyBzdHJpbmdzIHdpdGhvdXQgdGltZSByZXR1cm4gYSBkYXRlIHdpdGhvdXQgdGltZW9mZnNldC5cbiAqXG4gKiBUaHJvd3MgaWYgdW5hYmxlIHRvIGNvbnZlcnQgdG8gYSBkYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKHZhbHVlOiBzdHJpbmd8bnVtYmVyfERhdGUpOiBEYXRlIHtcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG5cbiAgICBjb25zdCBwYXJzZWROYiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgLy8gYW55IHN0cmluZyB0aGF0IG9ubHkgY29udGFpbnMgbnVtYmVycywgbGlrZSBcIjEyMzRcIiBidXQgbm90IGxpa2UgXCIxMjM0aGVsbG9cIlxuICAgIGlmICghaXNOYU4odmFsdWUgYXMgYW55IC0gcGFyc2VkTmIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VkTmIpO1xuICAgIH1cblxuICAgIGlmICgvXihcXGR7NH0tXFxkezEsMn0tXFxkezEsMn0pJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgIC8qIEZvciBJU08gU3RyaW5ncyB3aXRob3V0IHRpbWUgdGhlIGRheSwgbW9udGggYW5kIHllYXIgbXVzdCBiZSBleHRyYWN0ZWQgZnJvbSB0aGUgSVNPIFN0cmluZ1xuICAgICAgYmVmb3JlIERhdGUgY3JlYXRpb24gdG8gYXZvaWQgdGltZSBvZmZzZXQgYW5kIGVycm9ycyBpbiB0aGUgbmV3IERhdGUuXG4gICAgICBJZiB3ZSBvbmx5IHJlcGxhY2UgJy0nIHdpdGggJywnIGluIHRoZSBJU08gU3RyaW5nIChcIjIwMTUsMDEsMDFcIiksIGFuZCB0cnkgdG8gY3JlYXRlIGEgbmV3XG4gICAgICBkYXRlLCBzb21lIGJyb3dzZXJzIChlLmcuIElFIDkpIHdpbGwgdGhyb3cgYW4gaW52YWxpZCBEYXRlIGVycm9yLlxuICAgICAgSWYgd2UgbGVhdmUgdGhlICctJyAoXCIyMDE1LTAxLTAxXCIpIGFuZCB0cnkgdG8gY3JlYXRlIGEgbmV3IERhdGUoXCIyMDE1LTAxLTAxXCIpIHRoZSB0aW1lb2Zmc2V0XG4gICAgICBpcyBhcHBsaWVkLlxuICAgICAgTm90ZTogSVNPIG1vbnRocyBhcmUgMCBmb3IgSmFudWFyeSwgMSBmb3IgRmVicnVhcnksIC4uLiAqL1xuICAgICAgY29uc3QgW3ksIG0sIGRdID0gdmFsdWUuc3BsaXQoJy0nKS5tYXAoKHZhbDogc3RyaW5nKSA9PiArdmFsKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtIC0gMSwgZCk7XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5fG51bGw7XG4gICAgaWYgKG1hdGNoID0gdmFsdWUubWF0Y2goSVNPODYwMV9EQVRFX1JFR0VYKSkge1xuICAgICAgcmV0dXJuIGlzb1N0cmluZ1RvRGF0ZShtYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlIGFzIGFueSk7XG4gIGlmICghaXNEYXRlKGRhdGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY29udmVydCBcIiR7dmFsdWV9XCIgaW50byBhIGRhdGVgKTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRhdGUgaW4gSVNPODYwMSB0byBhIERhdGUuXG4gKiBVc2VkIGluc3RlYWQgb2YgYERhdGUucGFyc2VgIGJlY2F1c2Ugb2YgYnJvd3NlciBkaXNjcmVwYW5jaWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNvU3RyaW5nVG9EYXRlKG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogRGF0ZSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgbGV0IHR6SG91ciA9IDA7XG4gIGxldCB0ek1pbiA9IDA7XG5cbiAgLy8gbWF0Y2hbOF0gbWVhbnMgdGhhdCB0aGUgc3RyaW5nIGNvbnRhaW5zIFwiWlwiIChVVEMpIG9yIGEgdGltZXpvbmUgbGlrZSBcIiswMTowMFwiIG9yIFwiKzAxMDBcIlxuICBjb25zdCBkYXRlU2V0dGVyID0gbWF0Y2hbOF0gPyBkYXRlLnNldFVUQ0Z1bGxZZWFyIDogZGF0ZS5zZXRGdWxsWWVhcjtcbiAgY29uc3QgdGltZVNldHRlciA9IG1hdGNoWzhdID8gZGF0ZS5zZXRVVENIb3VycyA6IGRhdGUuc2V0SG91cnM7XG5cbiAgLy8gaWYgdGhlcmUgaXMgYSB0aW1lem9uZSBkZWZpbmVkIGxpa2UgXCIrMDE6MDBcIiBvciBcIiswMTAwXCJcbiAgaWYgKG1hdGNoWzldKSB7XG4gICAgdHpIb3VyID0gTnVtYmVyKG1hdGNoWzldICsgbWF0Y2hbMTBdKTtcbiAgICB0ek1pbiA9IE51bWJlcihtYXRjaFs5XSArIG1hdGNoWzExXSk7XG4gIH1cbiAgZGF0ZVNldHRlci5jYWxsKGRhdGUsIE51bWJlcihtYXRjaFsxXSksIE51bWJlcihtYXRjaFsyXSkgLSAxLCBOdW1iZXIobWF0Y2hbM10pKTtcbiAgY29uc3QgaCA9IE51bWJlcihtYXRjaFs0XSB8fCAwKSAtIHR6SG91cjtcbiAgY29uc3QgbSA9IE51bWJlcihtYXRjaFs1XSB8fCAwKSAtIHR6TWluO1xuICBjb25zdCBzID0gTnVtYmVyKG1hdGNoWzZdIHx8IDApO1xuICBjb25zdCBtcyA9IE1hdGgucm91bmQocGFyc2VGbG9hdCgnMC4nICsgKG1hdGNoWzddIHx8IDApKSAqIDEwMDApO1xuICB0aW1lU2V0dGVyLmNhbGwoZGF0ZSwgaCwgbSwgcywgbXMpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0ZSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHZhbHVlLnZhbHVlT2YoKSk7XG59XG4iXX0=