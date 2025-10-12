import {InjectionToken} from '@angular/core';
import {type TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

export const TUI_PAYMENT_SYSTEM_ICONS = new InjectionToken<
    Record<TuiPaymentSystem, string>
>(ngDevMode ? 'TUI_PAYMENT_SYSTEM_ICONS' : '', {
    factory: () => ({
        mir: '@tui.mir',
        visa: '@tui.visa',
        electron: '@tui.electron',
        mastercard: '@img.mastercard',
        maestro: '@img.maestro',
        amex: '@img.amex',
        dinersclub: '@img.diners-club',
        discover: '@img.discover',
        humo: '@img.humo',
        jcb: '@img.jcb',
        rupay: '@img.ru-pay',
        unionpay: '@img.union-pay',
        uzcard: '@img.uzcard',
        verve: '@img.verve',
    }),
});
