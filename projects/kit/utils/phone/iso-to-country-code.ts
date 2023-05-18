import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {MASK_AFTER_CODE_REGEXP} from '@taiga-ui/kit/constants';

export function tuiIsoToCountryCode(
    countriesMasks: Record<TuiCountryIsoCode, string>,
    isoCode: TuiCountryIsoCode,
): string {
    return countriesMasks[isoCode].replace(MASK_AFTER_CODE_REGEXP, ``);
}
