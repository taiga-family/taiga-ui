import {InjectionToken, type Provider} from '@angular/core';
import {tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

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

export const TUI_INPUT_CARD_GROUP_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_CARD_GROUP_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS,
    },
);

export function tuiInputCardGroupOptionsProvider(
    options: Partial<TuiInputCardGroupOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_CARD_GROUP_OPTIONS,
        options,
        TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS,
    );
}
