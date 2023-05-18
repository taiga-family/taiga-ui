import {InjectionToken} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {COUNTRIES_MASKS} from '@taiga-ui/kit/constants';

export const TUI_COUNTRIES_MASKS: InjectionToken<Record<TuiCountryIsoCode, string>> =
    new InjectionToken<Record<TuiCountryIsoCode, string>>(`Countries masks`, {
        factory: () => COUNTRIES_MASKS,
    });
