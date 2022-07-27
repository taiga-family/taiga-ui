import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

export interface TuiInputPhoneInternationalOptions {
    readonly countries: readonly TuiCountryIsoCode[];
    readonly countryIsoCode: TuiCountryIsoCode;
}

export const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS: TuiInputPhoneInternationalOptions =
    {
        countries: [],
        countryIsoCode: TuiCountryIsoCode.RU,
    };

export const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS =
    new InjectionToken<TuiInputPhoneInternationalOptions>(
        `Default parameters for input phone international component`,
        {
            factory: () => TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
        },
    );

export const tuiInputPhoneInternationalOptionsProvider: (
    options: Partial<TuiInputPhoneInternationalOptions>,
) => ValueProvider = (options: Partial<TuiInputPhoneInternationalOptions>) => ({
    provide: TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
    useValue: {...TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS, ...options},
});
