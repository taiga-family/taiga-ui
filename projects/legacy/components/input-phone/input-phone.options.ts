import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiInputPhoneOptions {
    readonly allowText: boolean;
    readonly countryCode: string;
    readonly phoneMaskAfterCountryCode: string;
}

export const TUI_INPUT_PHONE_DEFAULT_OPTIONS: TuiInputPhoneOptions = {
    phoneMaskAfterCountryCode: '### ###-##-##',
    allowText: false,
    countryCode: '+7',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for input phone component
 */
export const TUI_INPUT_PHONE_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_PHONE_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_PHONE_DEFAULT_OPTIONS,
    },
);

export function tuiInputPhoneOptionsProvider(
    options: Partial<TuiInputPhoneOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PHONE_OPTIONS,
        options,
        TUI_INPUT_PHONE_DEFAULT_OPTIONS,
    );
}
