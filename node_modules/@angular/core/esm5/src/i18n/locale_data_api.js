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
 */
var LOCALE_DATA = {};
/**
 * Register locale data to be used internally by Angular. See the
 * ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.
 *
 * The signature `registerLocaleData(data: any, extraData?: any)` is deprecated since v5.1
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
 * @param locale The locale code.
 * @returns The locale data.
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 */
export function findLocaleData(locale) {
    var normalizedLocale = normalizeLocale(locale);
    var match = getLocaleData(normalizedLocale);
    if (match) {
        return match;
    }
    // let's try to find a parent locale
    var parentLocale = normalizedLocale.split('-')[0];
    match = getLocaleData(parentLocale);
    if (match) {
        return match;
    }
    if (parentLocale === 'en') {
        return localeEn;
    }
    throw new Error("Missing locale data for the locale \"" + locale + "\".");
}
/**
 * Retrieves the default currency code for the given locale.
 *
 * The default is defined as the first currency which is still in use.
 *
 * @param locale The code of the locale whose currency code we want.
 * @returns The code of the default currency for the given locale.
 *
 */
export function getLocaleCurrencyCode(locale) {
    var data = findLocaleData(locale);
    return data[LocaleDataIndex.CurrencyCode] || null;
}
/**
 * Retrieves the plural function used by ICU expressions to determine the plural case to use
 * for a given locale.
 * @param locale A locale code for the locale format rules to use.
 * @returns The plural function for the locale.
 * @see `NgPlural`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 */
export function getLocalePluralCase(locale) {
    var data = findLocaleData(locale);
    return data[LocaleDataIndex.PluralCase];
}
/**
 * Helper function to get the given `normalizedLocale` from `LOCALE_DATA`
 * or from the global `ng.common.locale`.
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
 */
export function unregisterAllLocaleData() {
    LOCALE_DATA = {};
}
/**
 * Index of each type of locale data from the locale data array
 */
export var LocaleDataIndex;
(function (LocaleDataIndex) {
    LocaleDataIndex[LocaleDataIndex["LocaleId"] = 0] = "LocaleId";
    LocaleDataIndex[LocaleDataIndex["DayPeriodsFormat"] = 1] = "DayPeriodsFormat";
    LocaleDataIndex[LocaleDataIndex["DayPeriodsStandalone"] = 2] = "DayPeriodsStandalone";
    LocaleDataIndex[LocaleDataIndex["DaysFormat"] = 3] = "DaysFormat";
    LocaleDataIndex[LocaleDataIndex["DaysStandalone"] = 4] = "DaysStandalone";
    LocaleDataIndex[LocaleDataIndex["MonthsFormat"] = 5] = "MonthsFormat";
    LocaleDataIndex[LocaleDataIndex["MonthsStandalone"] = 6] = "MonthsStandalone";
    LocaleDataIndex[LocaleDataIndex["Eras"] = 7] = "Eras";
    LocaleDataIndex[LocaleDataIndex["FirstDayOfWeek"] = 8] = "FirstDayOfWeek";
    LocaleDataIndex[LocaleDataIndex["WeekendRange"] = 9] = "WeekendRange";
    LocaleDataIndex[LocaleDataIndex["DateFormat"] = 10] = "DateFormat";
    LocaleDataIndex[LocaleDataIndex["TimeFormat"] = 11] = "TimeFormat";
    LocaleDataIndex[LocaleDataIndex["DateTimeFormat"] = 12] = "DateTimeFormat";
    LocaleDataIndex[LocaleDataIndex["NumberSymbols"] = 13] = "NumberSymbols";
    LocaleDataIndex[LocaleDataIndex["NumberFormats"] = 14] = "NumberFormats";
    LocaleDataIndex[LocaleDataIndex["CurrencyCode"] = 15] = "CurrencyCode";
    LocaleDataIndex[LocaleDataIndex["CurrencySymbol"] = 16] = "CurrencySymbol";
    LocaleDataIndex[LocaleDataIndex["CurrencyName"] = 17] = "CurrencyName";
    LocaleDataIndex[LocaleDataIndex["Currencies"] = 18] = "Currencies";
    LocaleDataIndex[LocaleDataIndex["Directionality"] = 19] = "Directionality";
    LocaleDataIndex[LocaleDataIndex["PluralCase"] = 20] = "PluralCase";
    LocaleDataIndex[LocaleDataIndex["ExtraData"] = 21] = "ExtraData";
})(LocaleDataIndex || (LocaleDataIndex = {}));
/**
 * Returns the canonical form of a locale name - lowercase with `_` replaced with `-`.
 */
function normalizeLocale(locale) {
    return locale.toLowerCase().replace(/_/g, '-');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlX2RhdGFfYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvaTE4bi9sb2NhbGVfZGF0YV9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sUUFBUSxNQUFNLGFBQWEsQ0FBQztBQUVuQzs7R0FFRztBQUNILElBQUksV0FBVyxHQUE4QixFQUFFLENBQUM7QUFFaEQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBUyxFQUFFLFFBQXFCLEVBQUUsU0FBZTtJQUNsRixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNoQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXJELFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFN0IsSUFBSSxTQUFTLEVBQUU7UUFDYixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUM5RDtBQUNILENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQWM7SUFDM0MsSUFBTSxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFakQsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUMsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsb0NBQW9DO0lBQ3BDLElBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxLQUFLLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQXVDLE1BQU0sUUFBSSxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUFDLE1BQWM7SUFDbEQsSUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDcEQsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsTUFBYztJQUNoRCxJQUFNLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLGdCQUF3QjtJQUNwRCxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRTtRQUN0QyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDckYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSx1QkFBdUI7SUFDckMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxlQXVCWDtBQXZCRCxXQUFZLGVBQWU7SUFDekIsNkRBQVksQ0FBQTtJQUNaLDZFQUFnQixDQUFBO0lBQ2hCLHFGQUFvQixDQUFBO0lBQ3BCLGlFQUFVLENBQUE7SUFDVix5RUFBYyxDQUFBO0lBQ2QscUVBQVksQ0FBQTtJQUNaLDZFQUFnQixDQUFBO0lBQ2hCLHFEQUFJLENBQUE7SUFDSix5RUFBYyxDQUFBO0lBQ2QscUVBQVksQ0FBQTtJQUNaLGtFQUFVLENBQUE7SUFDVixrRUFBVSxDQUFBO0lBQ1YsMEVBQWMsQ0FBQTtJQUNkLHdFQUFhLENBQUE7SUFDYix3RUFBYSxDQUFBO0lBQ2Isc0VBQVksQ0FBQTtJQUNaLDBFQUFjLENBQUE7SUFDZCxzRUFBWSxDQUFBO0lBQ1osa0VBQVUsQ0FBQTtJQUNWLDBFQUFjLENBQUE7SUFDZCxrRUFBVSxDQUFBO0lBQ1YsZ0VBQVMsQ0FBQTtBQUNYLENBQUMsRUF2QlcsZUFBZSxLQUFmLGVBQWUsUUF1QjFCO0FBb0JEOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQUMsTUFBYztJQUNyQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2dsb2JhbH0gZnJvbSAnLi4vdXRpbC9nbG9iYWwnO1xuXG5pbXBvcnQgbG9jYWxlRW4gZnJvbSAnLi9sb2NhbGVfZW4nO1xuXG4vKipcbiAqIFRoaXMgY29uc3QgaXMgdXNlZCB0byBzdG9yZSB0aGUgbG9jYWxlIGRhdGEgcmVnaXN0ZXJlZCB3aXRoIGByZWdpc3RlckxvY2FsZURhdGFgXG4gKi9cbmxldCBMT0NBTEVfREFUQToge1tsb2NhbGVJZDogc3RyaW5nXTogYW55fSA9IHt9O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGxvY2FsZSBkYXRhIHRvIGJlIHVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyLiBTZWUgdGhlXG4gKiBbXCJJMThuIGd1aWRlXCJdKGd1aWRlL2kxOG4jaTE4bi1waXBlcykgdG8ga25vdyBob3cgdG8gaW1wb3J0IGFkZGl0aW9uYWwgbG9jYWxlIGRhdGEuXG4gKlxuICogVGhlIHNpZ25hdHVyZSBgcmVnaXN0ZXJMb2NhbGVEYXRhKGRhdGE6IGFueSwgZXh0cmFEYXRhPzogYW55KWAgaXMgZGVwcmVjYXRlZCBzaW5jZSB2NS4xXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckxvY2FsZURhdGEoZGF0YTogYW55LCBsb2NhbGVJZD86IHN0cmluZ3xhbnksIGV4dHJhRGF0YT86IGFueSk6IHZvaWQge1xuICBpZiAodHlwZW9mIGxvY2FsZUlkICE9PSAnc3RyaW5nJykge1xuICAgIGV4dHJhRGF0YSA9IGxvY2FsZUlkO1xuICAgIGxvY2FsZUlkID0gZGF0YVtMb2NhbGVEYXRhSW5kZXguTG9jYWxlSWRdO1xuICB9XG5cbiAgbG9jYWxlSWQgPSBsb2NhbGVJZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJy0nKTtcblxuICBMT0NBTEVfREFUQVtsb2NhbGVJZF0gPSBkYXRhO1xuXG4gIGlmIChleHRyYURhdGEpIHtcbiAgICBMT0NBTEVfREFUQVtsb2NhbGVJZF1bTG9jYWxlRGF0YUluZGV4LkV4dHJhRGF0YV0gPSBleHRyYURhdGE7XG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbG9jYWxlIGRhdGEgZm9yIGEgZ2l2ZW4gbG9jYWxlLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGxvY2FsZSBjb2RlLlxuICogQHJldHVybnMgVGhlIGxvY2FsZSBkYXRhLlxuICogQHNlZSBbSW50ZXJuYXRpb25hbGl6YXRpb24gKGkxOG4pIEd1aWRlXShodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvaTE4bilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMb2NhbGVEYXRhKGxvY2FsZTogc3RyaW5nKTogYW55IHtcbiAgY29uc3Qgbm9ybWFsaXplZExvY2FsZSA9IG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUpO1xuXG4gIGxldCBtYXRjaCA9IGdldExvY2FsZURhdGEobm9ybWFsaXplZExvY2FsZSk7XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiBtYXRjaDtcbiAgfVxuXG4gIC8vIGxldCdzIHRyeSB0byBmaW5kIGEgcGFyZW50IGxvY2FsZVxuICBjb25zdCBwYXJlbnRMb2NhbGUgPSBub3JtYWxpemVkTG9jYWxlLnNwbGl0KCctJylbMF07XG4gIG1hdGNoID0gZ2V0TG9jYWxlRGF0YShwYXJlbnRMb2NhbGUpO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH1cblxuICBpZiAocGFyZW50TG9jYWxlID09PSAnZW4nKSB7XG4gICAgcmV0dXJuIGxvY2FsZUVuO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGxvY2FsZSBkYXRhIGZvciB0aGUgbG9jYWxlIFwiJHtsb2NhbGV9XCIuYCk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgZm9yIHRoZSBnaXZlbiBsb2NhbGUuXG4gKlxuICogVGhlIGRlZmF1bHQgaXMgZGVmaW5lZCBhcyB0aGUgZmlyc3QgY3VycmVuY3kgd2hpY2ggaXMgc3RpbGwgaW4gdXNlLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGNvZGUgb2YgdGhlIGxvY2FsZSB3aG9zZSBjdXJyZW5jeSBjb2RlIHdlIHdhbnQuXG4gKiBAcmV0dXJucyBUaGUgY29kZSBvZiB0aGUgZGVmYXVsdCBjdXJyZW5jeSBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVDdXJyZW5jeUNvZGUobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gIGNvbnN0IGRhdGEgPSBmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICByZXR1cm4gZGF0YVtMb2NhbGVEYXRhSW5kZXguQ3VycmVuY3lDb2RlXSB8fCBudWxsO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgcGx1cmFsIGZ1bmN0aW9uIHVzZWQgYnkgSUNVIGV4cHJlc3Npb25zIHRvIGRldGVybWluZSB0aGUgcGx1cmFsIGNhc2UgdG8gdXNlXG4gKiBmb3IgYSBnaXZlbiBsb2NhbGUuXG4gKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIGNvZGUgZm9yIHRoZSBsb2NhbGUgZm9ybWF0IHJ1bGVzIHRvIHVzZS5cbiAqIEByZXR1cm5zIFRoZSBwbHVyYWwgZnVuY3Rpb24gZm9yIHRoZSBsb2NhbGUuXG4gKiBAc2VlIGBOZ1BsdXJhbGBcbiAqIEBzZWUgW0ludGVybmF0aW9uYWxpemF0aW9uIChpMThuKSBHdWlkZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2kxOG4pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVQbHVyYWxDYXNlKGxvY2FsZTogc3RyaW5nKTogKHZhbHVlOiBudW1iZXIpID0+IG51bWJlciB7XG4gIGNvbnN0IGRhdGEgPSBmaW5kTG9jYWxlRGF0YShsb2NhbGUpO1xuICByZXR1cm4gZGF0YVtMb2NhbGVEYXRhSW5kZXguUGx1cmFsQ2FzZV07XG59XG5cblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGdpdmVuIGBub3JtYWxpemVkTG9jYWxlYCBmcm9tIGBMT0NBTEVfREFUQWBcbiAqIG9yIGZyb20gdGhlIGdsb2JhbCBgbmcuY29tbW9uLmxvY2FsZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXRhKG5vcm1hbGl6ZWRMb2NhbGU6IHN0cmluZyk6IGFueSB7XG4gIGlmICghKG5vcm1hbGl6ZWRMb2NhbGUgaW4gTE9DQUxFX0RBVEEpKSB7XG4gICAgTE9DQUxFX0RBVEFbbm9ybWFsaXplZExvY2FsZV0gPSBnbG9iYWwubmcgJiYgZ2xvYmFsLm5nLmNvbW1vbiAmJiBnbG9iYWwubmcuY29tbW9uLmxvY2FsZXMgJiZcbiAgICAgICAgZ2xvYmFsLm5nLmNvbW1vbi5sb2NhbGVzW25vcm1hbGl6ZWRMb2NhbGVdO1xuICB9XG4gIHJldHVybiBMT0NBTEVfREFUQVtub3JtYWxpemVkTG9jYWxlXTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCB0aGUgbG9jYWxlIGRhdGEgZnJvbSBgTE9DQUxFX0RBVEFgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckFsbExvY2FsZURhdGEoKSB7XG4gIExPQ0FMRV9EQVRBID0ge307XG59XG5cbi8qKlxuICogSW5kZXggb2YgZWFjaCB0eXBlIG9mIGxvY2FsZSBkYXRhIGZyb20gdGhlIGxvY2FsZSBkYXRhIGFycmF5XG4gKi9cbmV4cG9ydCBlbnVtIExvY2FsZURhdGFJbmRleCB7XG4gIExvY2FsZUlkID0gMCxcbiAgRGF5UGVyaW9kc0Zvcm1hdCxcbiAgRGF5UGVyaW9kc1N0YW5kYWxvbmUsXG4gIERheXNGb3JtYXQsXG4gIERheXNTdGFuZGFsb25lLFxuICBNb250aHNGb3JtYXQsXG4gIE1vbnRoc1N0YW5kYWxvbmUsXG4gIEVyYXMsXG4gIEZpcnN0RGF5T2ZXZWVrLFxuICBXZWVrZW5kUmFuZ2UsXG4gIERhdGVGb3JtYXQsXG4gIFRpbWVGb3JtYXQsXG4gIERhdGVUaW1lRm9ybWF0LFxuICBOdW1iZXJTeW1ib2xzLFxuICBOdW1iZXJGb3JtYXRzLFxuICBDdXJyZW5jeUNvZGUsXG4gIEN1cnJlbmN5U3ltYm9sLFxuICBDdXJyZW5jeU5hbWUsXG4gIEN1cnJlbmNpZXMsXG4gIERpcmVjdGlvbmFsaXR5LFxuICBQbHVyYWxDYXNlLFxuICBFeHRyYURhdGFcbn1cblxuLyoqXG4gKiBJbmRleCBvZiBlYWNoIHR5cGUgb2YgbG9jYWxlIGRhdGEgZnJvbSB0aGUgZXh0cmEgbG9jYWxlIGRhdGEgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gRXh0cmFMb2NhbGVEYXRhSW5kZXgge1xuICBFeHRyYURheVBlcmlvZEZvcm1hdHMgPSAwLFxuICBFeHRyYURheVBlcmlvZFN0YW5kYWxvbmUsXG4gIEV4dHJhRGF5UGVyaW9kc1J1bGVzXG59XG5cbi8qKlxuICogSW5kZXggb2YgZWFjaCB2YWx1ZSBpbiBjdXJyZW5jeSBkYXRhICh1c2VkIHRvIGRlc2NyaWJlIENVUlJFTkNJRVNfRU4gaW4gY3VycmVuY2llcy50cylcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gQ3VycmVuY3lJbmRleCB7XG4gIFN5bWJvbCA9IDAsXG4gIFN5bWJvbE5hcnJvdyxcbiAgTmJPZkRpZ2l0c1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNhbm9uaWNhbCBmb3JtIG9mIGEgbG9jYWxlIG5hbWUgLSBsb3dlcmNhc2Ugd2l0aCBgX2AgcmVwbGFjZWQgd2l0aCBgLWAuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShsb2NhbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBsb2NhbGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICctJyk7XG59XG4iXX0=