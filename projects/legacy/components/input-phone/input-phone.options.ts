import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiInputPhoneOptions {
    readonly allowText: boolean;
    readonly countryCode: string;
    readonly phoneMaskAfterCountryCode: string;
}

/**
 * @deprecated: drop in v5.0
 */
export const TUI_INPUT_PHONE_DEFAULT_OPTIONS: TuiInputPhoneOptions = {
    phoneMaskAfterCountryCode: '### ###-##-##',
    allowText: false,
    countryCode: '+7',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for input phone component
 */
export const TUI_INPUT_PHONE_OPTIONS = tuiCreateToken(TUI_INPUT_PHONE_DEFAULT_OPTIONS);

/**
 * @deprecated: drop in v5.0
 */
export function tuiInputPhoneOptionsProvider(
    options: Partial<TuiInputPhoneOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PHONE_OPTIONS,
        options,
        TUI_INPUT_PHONE_DEFAULT_OPTIONS,
    );
}
