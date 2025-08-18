import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiInputPhoneOptions {
    readonly allowText: boolean;
    readonly mask: string;
    readonly valueTransformer: TuiValueTransformer<string | null, any>;
}

export const TUI_INPUT_PHONE_DEFAULT_OPTIONS: TuiInputPhoneOptions = {
    mask: '+1 ### ###-####',
    allowText: false,
    valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
};

export const [TUI_INPUT_PHONE_OPTIONS, tuiInputPhoneOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_PHONE_DEFAULT_OPTIONS,
);
