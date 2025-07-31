import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

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

export const [TUI_INPUT_PHONE_OPTIONS, tuiInputPhoneOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_PHONE_DEFAULT_OPTIONS,
);
