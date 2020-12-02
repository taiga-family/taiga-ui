/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/i18n/locale_data_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../util/global';
import localeEn from './locale_en';
/**
 * This const is used to store the locale data registered with `registerLocaleData`
 * @type {?}
 */
let LOCALE_DATA = {};
/**
 * Register locale data to be used internally by Angular. See the
 * ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.
 *
 * The signature `registerLocaleData(data: any, extraData?: any)` is deprecated since v5.1
 * @param {?} data
 * @param {?=} localeId
 * @param {?=} extraData
 * @return {?}
 */
export function registerLocaleData(data, localeId, extraData) {
    if (typeof localeId !== 'string') {
        extraData = localeId;
        localeId = data[LocaleDataIndex.LocaleId];
    }
    localeId = localeId.toLowerCase().replace(/_/g, '-');
    LOCALE_DATA[localeId] = data;
    if (extraData) {
        LOCALE_DATA[localeId][LocaleDataIndex.ExtraData] = extraData;
    }
}
/**
 * Finds the locale data for a given locale.
 *
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @param {?} locale The locale code.
 * @return {?} The locale data.
 */
export function findLocaleData(locale) {
    /** @type {?} */
    const normalizedLocale = normalizeLocale(locale);
    /** @type {?} */
    let match = getLocaleData(normalizedLocale);
    if (match) {
        return match;
    }
    // let's try to find a parent locale
    /** @type {?} */
    const parentLocale = normalizedLocale.split('-')[0];
    match = getLocaleData(parentLocale);
    if (match) {
        return match;
    }
    if (parentLocale === 'en') {
        return localeEn;
    }
    throw new Error(`Missing locale data for the locale "${locale}".`);
}
/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param {?} locale The code of the locale whose currency code we want.
 * @return {?} The code of the default currency for the given locale.
 *
 */
export function getLocaleCurrencyCode(locale) {
    /** @type {?} */
    const data = findLocaleData(locale);
    return data[LocaleDataIndex.CurrencyCode] || null;
}
/**
 * Retrieves the plural function used by ICU expressions to determine the plural case to use
 * for a given locale.
 * @see `NgPlural` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 * @param {?} locale A locale code for the locale format rules to use.
 * @return {?} The plural function for the locale.
 */
export function getLocalePluralCase(locale) {
    /** @type {?} */
    const data = findLocaleData(locale);
    return data[LocaleDataIndex.PluralCase];
}
/**
 * Helper function to get the given `normalizedLocale` from `LOCALE_DATA`
 * or from the global `ng.common.locale`.
 * @param {?} normalizedLocale
 * @return {?}
 */
export function getLocaleData(normalizedLocale) {
    if (!(normalizedLocale in LOCALE_DATA)) {
        LOCALE_DATA[normalizedLocale] = global.ng && global.ng.common && global.ng.common.locales &&
            global.ng.common.locales[normalizedLocale];
    }
    return LOCALE_DATA[normalizedLocale];
}
/**
 * Helper function to remove all the locale data from `LOCALE_DATA`.
 * @return {?}
 */
export function unregisterAllLocaleData() {
    LOCALE_DATA = {};
}
/** @enum {number} */
const LocaleDataIndex = {
    LocaleId: 0,
    DayPeriodsFormat: 1,
    DayPeriodsStandalone: 2,
    DaysFormat: 3,
    DaysStandalone: 4,
    MonthsFormat: 5,
    MonthsStandalone: 6,
    Eras: 7,
    FirstDayOfWeek: 8,
    WeekendRange: 9,
    DateFormat: 10,
    TimeFormat: 11,
    DateTimeFormat: 12,
    NumberSymbols: 13,
    NumberFormats: 14,
    CurrencyCode: 15,
    CurrencySymbol: 16,
    CurrencyName: 17,
    Currencies: 18,
    Directionality: 19,
    PluralCase: 20,
    ExtraData: 21,
};
export { LocaleDataIndex };
LocaleDataIndex[LocaleDataIndex.LocaleId] = 'LocaleId';
LocaleDataIndex[LocaleDataIndex.DayPeriodsFormat] = 'DayPeriodsFormat';
LocaleDataIndex[LocaleDataIndex.DayPeriodsStandalone] = 'DayPeriodsStandalone';
LocaleDataIndex[LocaleDataIndex.DaysFormat] = 'DaysFormat';
LocaleDataIndex[LocaleDataIndex.DaysStandalone] = 'DaysStandalone';
LocaleDataIndex[LocaleDataIndex.MonthsFormat] = 'MonthsFormat';
LocaleDataIndex[LocaleDataIndex.MonthsStandalone] = 'MonthsStandalone';
LocaleDataIndex[LocaleDataIndex.Eras] = 'Eras';
LocaleDataIndex[LocaleDataIndex.FirstDayOfWeek] = 'FirstDayOfWeek';
LocaleDataIndex[LocaleDataIndex.WeekendRange] = 'WeekendRange';
LocaleDataIndex[LocaleDataIndex.DateFormat] = 'DateFormat';
LocaleDataIndex[LocaleDataIndex.TimeFormat] = 'TimeFormat';
LocaleDataIndex[LocaleDataIndex.DateTimeFormat] = 'DateTimeFormat';
LocaleDataIndex[LocaleDataIndex.NumberSymbols] = 'NumberSymbols';
LocaleDataIndex[LocaleDataIndex.NumberFormats] = 'NumberFormats';
LocaleDataIndex[LocaleDataIndex.CurrencyCode] = 'CurrencyCode';
LocaleDataIndex[LocaleDataIndex.CurrencySymbol] = 'CurrencySymbol';
LocaleDataIndex[LocaleDataIndex.CurrencyName] = 'CurrencyName';
LocaleDataIndex[LocaleDataIndex.Currencies] = 'Currencies';
LocaleDataIndex[LocaleDataIndex.Directionality] = 'Directionality';
LocaleDataIndex[LocaleDataIndex.PluralCase] = 'PluralCase';
LocaleDataIndex[LocaleDataIndex.ExtraData] = 'ExtraData';
/** @enum {number} */
const ExtraLocaleDataIndex = {
    ExtraDayPeriodFormats: 0,
    ExtraDayPeriodStandalone: 1,
    ExtraDayPeriodsRules: 2,
};
export { ExtraLocaleDataIndex };
/** @enum {number} */
const CurrencyIndex = {
    Symbol: 0,
    SymbolNarrow: 1,
    NbOfDigits: 2,
};
export { CurrencyIndex };
/**
 * Returns the canonical form of a locale name - lowercase with `_` replaced with `-`.
 * @param {?} locale
 * @return {?}
 */
function normalizeLocale(locale) {
    return locale.toLowerCase().replace(/_/g, '-');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlX2RhdGFfYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvaTE4bi9sb2NhbGVfZGF0YV9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sUUFBUSxNQUFNLGFBQWEsQ0FBQzs7Ozs7SUFLL0IsV0FBVyxHQUE4QixFQUFFOzs7Ozs7Ozs7OztBQVEvQyxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBUyxFQUFFLFFBQXFCLEVBQUUsU0FBZTtJQUNsRixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNoQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXJELFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFN0IsSUFBSSxTQUFTLEVBQUU7UUFDYixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUM5RDtBQUNILENBQUM7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFjOztVQUNyQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDOztRQUU1QyxLQUFLLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzNDLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUM7S0FDZDs7O1VBR0ssWUFBWSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsS0FBSyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxJQUFJLEtBQUssRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7UUFDekIsT0FBTyxRQUFRLENBQUM7S0FDakI7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7Ozs7Ozs7QUFXRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsTUFBYzs7VUFDNUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDbkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNwRCxDQUFDOzs7Ozs7OztBQVVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxNQUFjOztVQUMxQyxJQUFJLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsQ0FBQzs7Ozs7OztBQVFELE1BQU0sVUFBVSxhQUFhLENBQUMsZ0JBQXdCO0lBQ3BELElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFO1FBQ3RDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNyRixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNoRDtJQUNELE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsQ0FBQzs7Ozs7QUFLRCxNQUFNLFVBQVUsdUJBQXVCO0lBQ3JDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDbkIsQ0FBQzs7QUFLRCxNQUFZLGVBQWU7SUFDekIsUUFBUSxHQUFJO0lBQ1osZ0JBQWdCLEdBQUE7SUFDaEIsb0JBQW9CLEdBQUE7SUFDcEIsVUFBVSxHQUFBO0lBQ1YsY0FBYyxHQUFBO0lBQ2QsWUFBWSxHQUFBO0lBQ1osZ0JBQWdCLEdBQUE7SUFDaEIsSUFBSSxHQUFBO0lBQ0osY0FBYyxHQUFBO0lBQ2QsWUFBWSxHQUFBO0lBQ1osVUFBVSxJQUFBO0lBQ1YsVUFBVSxJQUFBO0lBQ1YsY0FBYyxJQUFBO0lBQ2QsYUFBYSxJQUFBO0lBQ2IsYUFBYSxJQUFBO0lBQ2IsWUFBWSxJQUFBO0lBQ1osY0FBYyxJQUFBO0lBQ2QsWUFBWSxJQUFBO0lBQ1osVUFBVSxJQUFBO0lBQ1YsY0FBYyxJQUFBO0lBQ2QsVUFBVSxJQUFBO0lBQ1YsU0FBUyxJQUFBO0VBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLRCxNQUFrQixvQkFBb0I7SUFDcEMscUJBQXFCLEdBQUk7SUFDekIsd0JBQXdCLEdBQUE7SUFDeEIsb0JBQW9CLEdBQUE7RUFDckI7OztBQUtELE1BQWtCLGFBQWE7SUFDN0IsTUFBTSxHQUFJO0lBQ1YsWUFBWSxHQUFBO0lBQ1osVUFBVSxHQUFBO0VBQ1g7Ozs7Ozs7QUFLRCxTQUFTLGVBQWUsQ0FBQyxNQUFjO0lBQ3JDLE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Z2xvYmFsfSBmcm9tICcuLi91dGlsL2dsb2JhbCc7XG5cbmltcG9ydCBsb2NhbGVFbiBmcm9tICcuL2xvY2FsZV9lbic7XG5cbi8qKlxuICogVGhpcyBjb25zdCBpcyB1c2VkIHRvIHN0b3JlIHRoZSBsb2NhbGUgZGF0YSByZWdpc3RlcmVkIHdpdGggYHJlZ2lzdGVyTG9jYWxlRGF0YWBcbiAqL1xubGV0IExPQ0FMRV9EQVRBOiB7W2xvY2FsZUlkOiBzdHJpbmddOiBhbnl9ID0ge307XG5cbi8qKlxuICogUmVnaXN0ZXIgbG9jYWxlIGRhdGEgdG8gYmUgdXNlZCBpbnRlcm5hbGx5IGJ5IEFuZ3VsYXIuIFNlZSB0aGVcbiAqIFtcIkkxOG4gZ3VpZGVcIl0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKSB0byBrbm93IGhvdyB0byBpbXBvcnQgYWRkaXRpb25hbCBsb2NhbGUgZGF0YS5cbiAqXG4gKiBUaGUgc2lnbmF0dXJlIGByZWdpc3RlckxvY2FsZURhdGEoZGF0YTogYW55LCBleHRyYURhdGE/OiBhbnkpYCBpcyBkZXByZWNhdGVkIHNpbmNlIHY1LjFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTG9jYWxlRGF0YShkYXRhOiBhbnksIGxvY2FsZUlkPzogc3RyaW5nfGFueSwgZXh0cmFEYXRhPzogYW55KTogdm9pZCB7XG4gIGlmICh0eXBlb2YgbG9jYWxlSWQgIT09ICdzdHJpbmcnKSB7XG4gICAgZXh0cmFEYXRhID0gbG9jYWxlSWQ7XG4gICAgbG9jYWxlSWQgPSBkYXRhW0xvY2FsZURhdGFJbmRleC5Mb2NhbGVJZF07XG4gIH1cblxuICBsb2NhbGVJZCA9IGxvY2FsZUlkLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnLScpO1xuXG4gIExPQ0FMRV9EQVRBW2xvY2FsZUlkXSA9IGRhdGE7XG5cbiAgaWYgKGV4dHJhRGF0YSkge1xuICAgIExPQ0FMRV9EQVRBW2xvY2FsZUlkXVtMb2NhbGVEYXRhSW5kZXguRXh0cmFEYXRhXSA9IGV4dHJhRGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBsb2NhbGUgZGF0YSBmb3IgYSBnaXZlbiBsb2NhbGUuXG4gKlxuICogQHBhcmFtIGxvY2FsZSBUaGUgbG9jYWxlIGNvZGUuXG4gKiBAcmV0dXJucyBUaGUgbG9jYWxlIGRhdGEuXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZExvY2FsZURhdGEobG9jYWxlOiBzdHJpbmcpOiBhbnkge1xuICBjb25zdCBub3JtYWxpemVkTG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSk7XG5cbiAgbGV0IG1hdGNoID0gZ2V0TG9jYWxlRGF0YShub3JtYWxpemVkTG9jYWxlKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9XG5cbiAgLy8gbGV0J3MgdHJ5IHRvIGZpbmQgYSBwYXJlbnQgbG9jYWxlXG4gIGNvbnN0IHBhcmVudExvY2FsZSA9IG5vcm1hbGl6ZWRMb2NhbGUuc3BsaXQoJy0nKVswXTtcbiAgbWF0Y2ggPSBnZXRMb2NhbGVEYXRhKHBhcmVudExvY2FsZSk7XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaDtcbiAgfVxuXG4gIGlmIChwYXJlbnRMb2NhbGUgPT09ICdlbicpIHtcbiAgICByZXR1cm4gbG9jYWxlRW47XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgbG9jYWxlIGRhdGEgZm9yIHRoZSBsb2NhbGUgXCIke2xvY2FsZX1cIi5gKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGRlZmF1bHQgY3VycmVuY3kgY29kZSBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiBUaGUgZGVmYXVsdCBpcyBkZWZpbmVkIGFzIHRoZSBmaXJzdCBjdXJyZW5jeSB3aGljaCBpcyBzdGlsbCBpbiB1c2UuXG4gKlxuICogQHBhcmFtIGxvY2FsZSBUaGUgY29kZSBvZiB0aGUgbG9jYWxlIHdob3NlIGN1cnJlbmN5IGNvZGUgd2Ugd2FudC5cbiAqIEByZXR1cm5zIFRoZSBjb2RlIG9mIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGZvciB0aGUgZ2l2ZW4gbG9jYWxlLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZUN1cnJlbmN5Q29kZShsb2NhbGU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgY29uc3QgZGF0YSA9IGZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIHJldHVybiBkYXRhW0xvY2FsZURhdGFJbmRleC5DdXJyZW5jeUNvZGVdIHx8IG51bGw7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBwbHVyYWwgZnVuY3Rpb24gdXNlZCBieSBJQ1UgZXhwcmVzc2lvbnMgdG8gZGV0ZXJtaW5lIHRoZSBwbHVyYWwgY2FzZSB0byB1c2VcbiAqIGZvciBhIGdpdmVuIGxvY2FsZS5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHJldHVybnMgVGhlIHBsdXJhbCBmdW5jdGlvbiBmb3IgdGhlIGxvY2FsZS5cbiAqIEBzZWUgYE5nUGx1cmFsYFxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZVBsdXJhbENhc2UobG9jYWxlOiBzdHJpbmcpOiAodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyIHtcbiAgY29uc3QgZGF0YSA9IGZpbmRMb2NhbGVEYXRhKGxvY2FsZSk7XG4gIHJldHVybiBkYXRhW0xvY2FsZURhdGFJbmRleC5QbHVyYWxDYXNlXTtcbn1cblxuXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgZ2l2ZW4gYG5vcm1hbGl6ZWRMb2NhbGVgIGZyb20gYExPQ0FMRV9EQVRBYFxuICogb3IgZnJvbSB0aGUgZ2xvYmFsIGBuZy5jb21tb24ubG9jYWxlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZURhdGEobm9ybWFsaXplZExvY2FsZTogc3RyaW5nKTogYW55IHtcbiAgaWYgKCEobm9ybWFsaXplZExvY2FsZSBpbiBMT0NBTEVfREFUQSkpIHtcbiAgICBMT0NBTEVfREFUQVtub3JtYWxpemVkTG9jYWxlXSA9IGdsb2JhbC5uZyAmJiBnbG9iYWwubmcuY29tbW9uICYmIGdsb2JhbC5uZy5jb21tb24ubG9jYWxlcyAmJlxuICAgICAgICBnbG9iYWwubmcuY29tbW9uLmxvY2FsZXNbbm9ybWFsaXplZExvY2FsZV07XG4gIH1cbiAgcmV0dXJuIExPQ0FMRV9EQVRBW25vcm1hbGl6ZWRMb2NhbGVdO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byByZW1vdmUgYWxsIHRoZSBsb2NhbGUgZGF0YSBmcm9tIGBMT0NBTEVfREFUQWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQWxsTG9jYWxlRGF0YSgpIHtcbiAgTE9DQUxFX0RBVEEgPSB7fTtcbn1cblxuLyoqXG4gKiBJbmRleCBvZiBlYWNoIHR5cGUgb2YgbG9jYWxlIGRhdGEgZnJvbSB0aGUgbG9jYWxlIGRhdGEgYXJyYXlcbiAqL1xuZXhwb3J0IGVudW0gTG9jYWxlRGF0YUluZGV4IHtcbiAgTG9jYWxlSWQgPSAwLFxuICBEYXlQZXJpb2RzRm9ybWF0LFxuICBEYXlQZXJpb2RzU3RhbmRhbG9uZSxcbiAgRGF5c0Zvcm1hdCxcbiAgRGF5c1N0YW5kYWxvbmUsXG4gIE1vbnRoc0Zvcm1hdCxcbiAgTW9udGhzU3RhbmRhbG9uZSxcbiAgRXJhcyxcbiAgRmlyc3REYXlPZldlZWssXG4gIFdlZWtlbmRSYW5nZSxcbiAgRGF0ZUZvcm1hdCxcbiAgVGltZUZvcm1hdCxcbiAgRGF0ZVRpbWVGb3JtYXQsXG4gIE51bWJlclN5bWJvbHMsXG4gIE51bWJlckZvcm1hdHMsXG4gIEN1cnJlbmN5Q29kZSxcbiAgQ3VycmVuY3lTeW1ib2wsXG4gIEN1cnJlbmN5TmFtZSxcbiAgQ3VycmVuY2llcyxcbiAgRGlyZWN0aW9uYWxpdHksXG4gIFBsdXJhbENhc2UsXG4gIEV4dHJhRGF0YVxufVxuXG4vKipcbiAqIEluZGV4IG9mIGVhY2ggdHlwZSBvZiBsb2NhbGUgZGF0YSBmcm9tIHRoZSBleHRyYSBsb2NhbGUgZGF0YSBhcnJheVxuICovXG5leHBvcnQgY29uc3QgZW51bSBFeHRyYUxvY2FsZURhdGFJbmRleCB7XG4gIEV4dHJhRGF5UGVyaW9kRm9ybWF0cyA9IDAsXG4gIEV4dHJhRGF5UGVyaW9kU3RhbmRhbG9uZSxcbiAgRXh0cmFEYXlQZXJpb2RzUnVsZXNcbn1cblxuLyoqXG4gKiBJbmRleCBvZiBlYWNoIHZhbHVlIGluIGN1cnJlbmN5IGRhdGEgKHVzZWQgdG8gZGVzY3JpYmUgQ1VSUkVOQ0lFU19FTiBpbiBjdXJyZW5jaWVzLnRzKVxuICovXG5leHBvcnQgY29uc3QgZW51bSBDdXJyZW5jeUluZGV4IHtcbiAgU3ltYm9sID0gMCxcbiAgU3ltYm9sTmFycm93LFxuICBOYk9mRGlnaXRzXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2Fub25pY2FsIGZvcm0gb2YgYSBsb2NhbGUgbmFtZSAtIGxvd2VyY2FzZSB3aXRoIGBfYCByZXBsYWNlZCB3aXRoIGAtYC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxvY2FsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJy0nKTtcbn1cbiJdfQ==