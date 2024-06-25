/**
 * @deprecated: drop in v5.0
 * use `maskitoGetCountryFromNumber` from `@maskito/phone` instead
 * ```
 * npm i @maskito/phone
 * ```
 *
 * ```ts
 * import {maskitoGetCountryFromNumber} from '@maskito/phone';
 * import metadata from 'libphonenumber-js/max/metadata';
 *
 * const countryIsoCode = maskitoGetCountryFromNumber(
 *      '+7 777 777-7777',
 *      metadata
 * );
 *
 * countryIsoCode !== 'KZ'
 * ```
 */
export function tuiNotKzRegion(value: string): boolean {
    const region = Number(value.slice(1, 4));

    return region < 600 || region > 799;
}
