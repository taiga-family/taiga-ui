import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce/utils';
import {TuiHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputCardOptions {
    cardSrc: PolymorpheusContent;
    readonly autocompleteEnabled: boolean;
    readonly icons: Record<TuiPaymentSystem, string>;
    readonly paymentSystemHandler: TuiHandler<
        string | null | undefined,
        TuiPaymentSystem | null
    >;
}

export const TUI_INPUT_CARD_DEFAULT_OPTIONS: TuiInputCardOptions = {
    icons: {
        mir: `tuiIconMir`,
        visa: `tuiIconVisa`,
        electron: `tuiIconElectron`,
        mastercard: `tuiIconMastercard`,
        maestro: `tuiIconMaestro`,
        amex: `tuiIconAmex`,
        dinersclub: `tuiIconDinersClub`,
        discover: `tuiIconDiscover`,
        humo: `tuiIconHumo`,
        jcb: `tuiIconJCB`,
        rupay: `tuiIconRuPay`,
        unionpay: `tuiIconUnionPay`,
        uzcard: `tuiIconUzcard`,
        verve: `tuiIconVerve`,
    },
    cardSrc: ``,
    paymentSystemHandler: tuiGetPaymentSystem,
    autocompleteEnabled: false,
};

export const TUI_INPUT_CARD_OPTIONS = new InjectionToken<TuiInputCardOptions>(
    `[TUI_INPUT_CARD_OPTIONS]`,
    {factory: () => TUI_INPUT_CARD_DEFAULT_OPTIONS},
);

export const tuiInputCardOptionsProvider: (
    options: Partial<TuiInputCardOptions>,
) => ValueProvider = (options: Partial<TuiInputCardOptions>) => ({
    provide: TUI_INPUT_CARD_OPTIONS,
    useValue: {...TUI_INPUT_CARD_DEFAULT_OPTIONS, ...options},
});
