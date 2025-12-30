import {tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCardInputs {
    cvc: boolean;
    expire: boolean;
}

export interface TuiInputCardGroupOptions {
    readonly cardValidator: TuiBooleanHandler<string>;
    readonly placeholder: string;
    readonly cvcPlaceholder: string;
    readonly cvcHidden: boolean;
    readonly inputs: TuiCardInputs;
}

export const TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS: TuiInputCardGroupOptions = {
    cardValidator: tuiDefaultCardValidator,
    placeholder: '0000 0000 0000 0000',
    cvcPlaceholder: '000',
    cvcHidden: true,
    inputs: {cvc: true, expire: true},
};

export const [TUI_INPUT_CARD_GROUP_OPTIONS, tuiInputCardGroupOptionsProvider] =
    tuiCreateOptions(TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS);
