import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiInputPhoneOptions {
    readonly allowText: boolean;
    readonly mask: string;
}

export const TUI_INPUT_PHONE_DEFAULT_OPTIONS: TuiInputPhoneOptions = {
    mask: '+1 ### ###-####',
    allowText: false,
};

export const [TUI_INPUT_PHONE_OPTIONS, tuiInputPhoneOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_PHONE_DEFAULT_OPTIONS,
);
