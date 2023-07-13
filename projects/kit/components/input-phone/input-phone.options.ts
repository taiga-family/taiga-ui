import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

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

/**
 * Default parameters for input phone component
 */
export const TUI_INPUT_PHONE_OPTIONS = tuiCreateOptions(TUI_INPUT_PHONE_DEFAULT_OPTIONS);

export function tuiInputPhoneOptionsProvider(
    options: Partial<TuiInputPhoneOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PHONE_OPTIONS,
        options,
        TUI_INPUT_PHONE_DEFAULT_OPTIONS,
    );
}
