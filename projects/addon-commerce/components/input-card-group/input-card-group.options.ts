import type {Provider} from '@angular/core';
import type {TuiInputCardOptions} from '@taiga-ui/addon-commerce/components/input-card';
import {TUI_INPUT_CARD_DEFAULT_OPTIONS} from '@taiga-ui/addon-commerce/components/input-card';
import {tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiInputCardGroupOptions extends TuiInputCardOptions {
    readonly cardValidator: TuiBooleanHandler<string>;
    readonly exampleText: string;
    readonly exampleTextCVC: string;
    readonly cvcHidden: boolean;
}

export const TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS: TuiInputCardGroupOptions = {
    ...TUI_INPUT_CARD_DEFAULT_OPTIONS,
    cardValidator: tuiDefaultCardValidator,
    exampleText: '0000 0000 0000 0000',
    exampleTextCVC: '000',
    cvcHidden: true,
};

export const TUI_INPUT_CARD_GROUP_OPTIONS = tuiCreateToken(
    TUI_INPUT_CARD_GROUP_DEFAULT_OPTIONS,
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
