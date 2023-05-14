import {Inject, Pipe, PipeTransform} from '@angular/core';
import {CHAR_PLUS} from '@taiga-ui/cdk';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES_MASKS} from '@taiga-ui/kit/tokens';
import {
    tuiGetMaxAllowedPhoneLength,
    tuiIsoToCountryCode,
    tuiNotKzRegion,
} from '@taiga-ui/kit/utils';

@Pipe({
    name: `tuiToCountryCode`,
})
export class TuiToCountryCodePipe implements PipeTransform {
    constructor(
        @Inject(TUI_COUNTRIES_MASKS)
        private readonly countriesMasks: Record<TuiCountryIsoCode, string>,
    ) {}

    transform(
        value: string,
        countries: readonly TuiCountryIsoCode[],
    ): TuiCountryIsoCode | undefined {
        return countries.find(countryIsoCode => {
            const ruCodeTest =
                countryIsoCode === TuiCountryIsoCode.RU &&
                /^[78]/.test(value) &&
                /^(?!880[1-9 ])/.test(value) &&
                value.length + 1 ===
                    tuiGetMaxAllowedPhoneLength(
                        this.countriesMasks,
                        TuiCountryIsoCode.RU,
                    );

            const matched =
                ruCodeTest ||
                (value.startsWith(
                    tuiIsoToCountryCode(this.countriesMasks, countryIsoCode).replace(
                        CHAR_PLUS,
                        ``,
                    ),
                ) &&
                    value.length + 1 ===
                        tuiGetMaxAllowedPhoneLength(this.countriesMasks, countryIsoCode));

            if (matched) {
                switch (countryIsoCode) {
                    case TuiCountryIsoCode.RU:
                        return tuiNotKzRegion(value);
                    case TuiCountryIsoCode.KZ:
                        return !tuiNotKzRegion(value);
                    default:
                        return true;
                }
            }

            return false;
        });
    }
}
