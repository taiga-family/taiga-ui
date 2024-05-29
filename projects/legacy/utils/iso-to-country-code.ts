import type {TuiCountryIsoCode} from '@taiga-ui/i18n';

const MASK_AFTER_CODE_REGEXP = /\([#]+\)|[#\- ]/g;

/**
 * @deprecated Use `getCountryCallingCode` from `libphonenumber-js/core` instead
 * ```ts
 * import {getCountryCallingCode} from 'libphonenumber-js/core';
 * import metadata from 'libphonenumber-js/max/metadata';
 *
 * getCountryCallingCode('US', metadata) // 1
 * getCountryCallingCode('GB', metadata) // 44
 * ```
 */
export function tuiIsoToCountryCode(
    countriesMasks: Record<TuiCountryIsoCode, string>,
    isoCode: TuiCountryIsoCode,
): string {
    return countriesMasks[isoCode].replaceAll(MASK_AFTER_CODE_REGEXP, '');
}
