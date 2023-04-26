import {TuiCountryIsoCode} from '@taiga-ui/i18n';

export function tuiGetMaxAllowedPhoneLength(
    countries: Record<TuiCountryIsoCode, string>,
    isoCode: TuiCountryIsoCode,
): number {
    return countries[isoCode].replace(/[()\- ]/g, ``).length;
}
