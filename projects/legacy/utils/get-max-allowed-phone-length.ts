import type {TuiCountryIsoCode} from '@taiga-ui/i18n';

/**
 * @deprecated use `validatePhoneNumberLength` from `libphonenumber-js` instead
 * ```
 * npm i libphonenumber-js
 * ```
 *
 * ```ts
 * import {validatePhoneNumberLength} from 'libphonenumber-js';
 * import metadata from 'libphonenumber-js/max/metadata';
 *
 * const validationError = validatePhoneNumberLength(
 *      '+7 777 777-7777',
 *      'KZ'
 * ) // undefined | 'INVALID_COUNTRY' | 'NOT_A_NUMBER' | 'TOO_SHORT' | 'TOO_LONG' | 'INVALID_LENGTH';
 *
 * validatePhoneNumberLength('+7777777', 'KZ'); // 'TOO_SHORT'
 * validatePhoneNumberLength('+7 777 777-7777', 'KZ'); // undefined
 * validatePhoneNumberLength('+77777777777', 'KZ'); // undefined
 * validatePhoneNumberLength('+777777777777777777', 'KZ'); // 'TOO_LONG'
 * ```
 */
export function tuiGetMaxAllowedPhoneLength(
    countries: Record<TuiCountryIsoCode, string>,
    isoCode: TuiCountryIsoCode,
): number {
    return countries[isoCode].replaceAll(/[()\- ]/g, '').length;
}
