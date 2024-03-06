import type {TuiCountryIsoCode} from '@taiga-ui/i18n';

export function tuiGetMaxAllowedPhoneLength(
    countries: Record<TuiCountryIsoCode, string>,
    isoCode: TuiCountryIsoCode,
): number {
    return countries[isoCode].replaceAll(/[()\- ]/g, '').length;
}
