/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/i18n/localization.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getLocalePluralCase } from './locale_data_api';
/** @type {?} */
const pluralMapping = ['zero', 'one', 'two', 'few', 'many'];
/**
 * Returns the plural case based on the locale
 * @param {?} value
 * @param {?} locale
 * @return {?}
 */
export function getPluralCase(value, locale) {
    /** @type {?} */
    const plural = getLocalePluralCase(locale)(parseInt(value, 10));
    /** @type {?} */
    const result = pluralMapping[plural];
    return (result !== undefined) ? result : 'other';
}
/**
 * The locale id that the application is using by default (for translations and ICU expressions).
 * @type {?}
 */
export const DEFAULT_LOCALE_ID = 'en-US';
/**
 * USD currency code that the application uses by default for CurrencyPipe when no
 * DEFAULT_CURRENCY_CODE is provided.
 * @type {?}
 */
export const USD_CURRENCY_CODE = 'USD';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvaTE4bi9sb2NhbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O01BRWhELGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7Ozs7Ozs7QUFLM0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFhLEVBQUUsTUFBYzs7VUFDbkQsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7O1VBQ3pELE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25ELENBQUM7Ozs7O0FBS0QsTUFBTSxPQUFPLGlCQUFpQixHQUFHLE9BQU87Ozs7OztBQU14QyxNQUFNLE9BQU8saUJBQWlCLEdBQUcsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRMb2NhbGVQbHVyYWxDYXNlfSBmcm9tICcuL2xvY2FsZV9kYXRhX2FwaSc7XG5cbmNvbnN0IHBsdXJhbE1hcHBpbmcgPSBbJ3plcm8nLCAnb25lJywgJ3R3bycsICdmZXcnLCAnbWFueSddO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHBsdXJhbCBjYXNlIGJhc2VkIG9uIHRoZSBsb2NhbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdXJhbENhc2UodmFsdWU6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwbHVyYWwgPSBnZXRMb2NhbGVQbHVyYWxDYXNlKGxvY2FsZSkocGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gIGNvbnN0IHJlc3VsdCA9IHBsdXJhbE1hcHBpbmdbcGx1cmFsXTtcbiAgcmV0dXJuIChyZXN1bHQgIT09IHVuZGVmaW5lZCkgPyByZXN1bHQgOiAnb3RoZXInO1xufVxuXG4vKipcbiAqIFRoZSBsb2NhbGUgaWQgdGhhdCB0aGUgYXBwbGljYXRpb24gaXMgdXNpbmcgYnkgZGVmYXVsdCAoZm9yIHRyYW5zbGF0aW9ucyBhbmQgSUNVIGV4cHJlc3Npb25zKS5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9DQUxFX0lEID0gJ2VuLVVTJztcblxuLyoqXG4gKiBVU0QgY3VycmVuY3kgY29kZSB0aGF0IHRoZSBhcHBsaWNhdGlvbiB1c2VzIGJ5IGRlZmF1bHQgZm9yIEN1cnJlbmN5UGlwZSB3aGVuIG5vXG4gKiBERUZBVUxUX0NVUlJFTkNZX0NPREUgaXMgcHJvdmlkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBVU0RfQ1VSUkVOQ1lfQ09ERSA9ICdVU0QnO1xuIl19