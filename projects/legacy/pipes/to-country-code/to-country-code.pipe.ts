import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {CHAR_PLUS} from '@taiga-ui/cdk/constants';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {TUI_COUNTRIES_MASKS} from '@taiga-ui/legacy/tokens';
import {
    tuiGetMaxAllowedPhoneLength,
    tuiIsoToCountryCode,
    tuiNotKzRegion,
} from '@taiga-ui/legacy/utils';

/**
 * @deprecated: drop in v5.0
 * use `maskitoGetCountryFromNumber` from `@maskito/phone` instead
 * ```
 * npm i @maskito/phone
 * ```
 *
 * ```ts
 * import {maskitoGetCountryFromNumber} from '@maskito/phone';
 * import metadata from 'libphonenumber-js/min/metadata';
 *
 * maskitoGetCountryFromNumber('+1 (212) 555-2368', metadata); // 'US'
 * maskitoGetCountryFromNumber('+12125552368', metadata); // 'US'
 * ```
 */
@Pipe({
    standalone: true,
    name: 'tuiToCountryCode',
})
export class TuiToCountryCodePipe implements PipeTransform {
    private readonly countriesMasks = inject(TUI_COUNTRIES_MASKS);

    /**
     * @deprecated use `maskitoGetCountryFromNumber` from `@maskito/phone` instead
     * ```
     * npm i @maskito/phone
     * ```
     *
     * ```ts
     * import {maskitoGetCountryFromNumber} from '@maskito/phone';
     * import metadata from 'libphonenumber-js/min/metadata';
     *
     * maskitoGetCountryFromNumber('+1 (212) 555-2368', metadata); // 'US'
     * maskitoGetCountryFromNumber('+12125552368', metadata); // 'US'
     * ```
     */
    public transform(
        value: string,
        countries: readonly TuiCountryIsoCode[],
    ): TuiCountryIsoCode | undefined {
        return countries.find((countryIsoCode) => {
            const ruCodeTest =
                countryIsoCode === 'RU' &&
                /^[78]/.test(value) &&
                /^(?!880[1-9 ])/.test(value) &&
                value.length + 1 ===
                    tuiGetMaxAllowedPhoneLength(this.countriesMasks, 'RU');

            const matched =
                ruCodeTest ||
                (value.startsWith(
                    tuiIsoToCountryCode(this.countriesMasks, countryIsoCode).replace(
                        CHAR_PLUS,
                        '',
                    ),
                ) &&
                    value.length + 1 ===
                        tuiGetMaxAllowedPhoneLength(this.countriesMasks, countryIsoCode));

            if (matched) {
                switch (countryIsoCode) {
                    case 'RU':
                        return tuiNotKzRegion(value);
                    case 'KZ':
                        return !tuiNotKzRegion(value);
                    default:
                        return true;
                }
            }

            return false;
        });
    }
}
