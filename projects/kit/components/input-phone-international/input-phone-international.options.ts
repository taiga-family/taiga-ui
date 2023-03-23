import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
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

/**
 * Default parameters for input phone international component
 */
export const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS =
    new InjectionToken<TuiInputPhoneInternationalOptions>(
        `[TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS]`,
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
