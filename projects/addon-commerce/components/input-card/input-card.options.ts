import type {Provider} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce/utils';
import type {TuiHandler} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputCardOptions {
    readonly autocomplete: boolean;
    cardSrc: PolymorpheusContent;
    readonly paymentSystemHandler: TuiHandler<
        string | null | undefined,
        TuiPaymentSystem | null
    >;
}

export const TUI_INPUT_CARD_DEFAULT_OPTIONS: TuiInputCardOptions = {
    cardSrc: '',
    paymentSystemHandler: tuiGetPaymentSystem,
    autocomplete: false,
};

export const TUI_INPUT_CARD_OPTIONS = tuiCreateToken(TUI_INPUT_CARD_DEFAULT_OPTIONS);

export function tuiInputCardOptionsProvider(
    options: Partial<TuiInputCardOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_CARD_OPTIONS,
        options,
        TUI_INPUT_CARD_DEFAULT_OPTIONS,
    );
}
