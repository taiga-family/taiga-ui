import {tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCardInputs {
    cvc: boolean;
    expire: boolean;
}

export interface TuiInputCardGroupOptions {
    readonly cardValidator: TuiBooleanHandler<string>;
    readonly exampleText: string;
    readonly exampleTextCVC: string;
    readonly cvcHidden: boolean;
    readonly inputs: TuiCardInputs;
}

export const TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS: TuiInputCardGroupOptions = {
    cardValidator: tuiDefaultCardValidator,
    exampleText: '0000 0000 0000 0000',
    exampleTextCVC: '000',
    cvcHidden: true,
    inputs: {cvc: true, expire: true},
};

export const [TUI_INPUT_CARD_GROUP_OPTIONS, tuiInputCardGroupOptionsProvider] =
    tuiCreateOptions(TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS);
