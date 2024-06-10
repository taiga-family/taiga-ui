import type {InjectionToken} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_PAYMENT_SYSTEM_ICONS: InjectionToken<Record<TuiPaymentSystem, string>> =
    tuiCreateToken({
        mir: 'tuiIconMir',
        visa: 'tuiIconVisa',
        electron: 'tuiIconElectron',
        mastercard: 'tuiIconMastercard',
        maestro: 'tuiIconMaestro',
        amex: 'tuiIconAmex',
        dinersclub: 'tuiIconDinersClub',
        discover: 'tuiIconDiscover',
        humo: 'tuiIconHumo',
        jcb: 'tuiIconJCB',
        rupay: 'tuiIconRuPay',
        unionpay: 'tuiIconUnionPay',
        uzcard: 'tuiIconUzcard',
        verve: 'tuiIconVerve',
    });
