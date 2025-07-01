import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0 use {@link TuiInputPhoneInternational}
 * https://taiga-ui.dev/components/input-phone-international
 */
export interface TuiInputPhoneInternationalOptions {
    readonly countries: readonly TuiCountryIsoCode[];
    readonly countryIsoCode: TuiCountryIsoCode;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiInputPhoneInternational}
 * https://taiga-ui.dev/components/input-phone-international
 */
export const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS: TuiInputPhoneInternationalOptions =
    {
        countries: [],
        countryIsoCode: 'RU',
    };

/**
 * @deprecated: drop in v5.0 use {@link TuiInputPhoneInternational}
 * https://taiga-ui.dev/components/input-phone-international
 */
export const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
    },
);

/**
 * @deprecated: drop in v5.0 use {@link TuiInputPhoneInternational}
 * https://taiga-ui.dev/components/input-phone-international
 */
export function tuiInputPhoneInternationalOptionsProvider(
    options: Partial<TuiInputPhoneInternationalOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
        options,
        TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
    );
}
