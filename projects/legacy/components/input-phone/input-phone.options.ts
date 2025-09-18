import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated use {@link https://taiga-ui.dev/components/input-phone TuiInputPhone} with {@link https://taiga-ui.dev/components/textfield TuiTextfield}
 */
export interface TuiInputPhoneOptions {
    readonly allowText: boolean;
    readonly countryCode: string;
    readonly phoneMaskAfterCountryCode: string;
}

/**
 * @deprecated use {@link https://taiga-ui.dev/components/input-phone TuiInputPhone} with {@link https://taiga-ui.dev/components/textfield TuiTextfield}
 */
export const TUI_INPUT_PHONE_DEFAULT_OPTIONS: TuiInputPhoneOptions = {
    phoneMaskAfterCountryCode: '### ###-##-##',
    allowText: false,
    countryCode: '+7',
};

/**
 * Default parameters for input phone component
 * @deprecated drop in v5.0, use {@link https://taiga-ui.dev/components/input-phone TuiInputPhone} with {@link https://taiga-ui.dev/components/textfield TuiTextfield}
 */
export const TUI_INPUT_PHONE_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_PHONE_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_PHONE_DEFAULT_OPTIONS,
    },
);

/**
 * @deprecated use {@link https://taiga-ui.dev/components/input-phone TuiInputPhone} with {@link https://taiga-ui.dev/components/textfield TuiTextfield}
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
