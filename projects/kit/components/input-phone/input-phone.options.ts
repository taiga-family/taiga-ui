import {InjectionToken, ValueProvider} from '@angular/core';

export interface TuiInputPhoneOptions {
    readonly phoneMaskAfterCountryCode: string;
    readonly allowText: boolean;
    readonly countryCode: string;
}

export const TUI_INPUT_PHONE_DEFAULT_OPTIONS: TuiInputPhoneOptions = {
    phoneMaskAfterCountryCode: `### ###-##-##`,
    allowText: false,
    countryCode: `+7`,
};

export const TUI_INPUT_PHONE_OPTIONS = new InjectionToken<TuiInputPhoneOptions>(
    `Default parameters for input phone component`,
    {
        factory: () => TUI_INPUT_PHONE_DEFAULT_OPTIONS,
    },
);

export const tuiInputPhoneOptionsProvider: (
    options: Partial<TuiInputPhoneOptions>,
) => ValueProvider = (options: Partial<TuiInputPhoneOptions>) => ({
    provide: TUI_INPUT_PHONE_OPTIONS,
    useValue: {...TUI_INPUT_PHONE_DEFAULT_OPTIONS, ...options},
});
