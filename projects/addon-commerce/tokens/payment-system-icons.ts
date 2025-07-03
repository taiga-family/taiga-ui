import {InjectionToken} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

export const TUI_PAYMENT_SYSTEM_ICONS = new InjectionToken<
    Record<TuiPaymentSystem, string>
>(ngDevMode ? 'TUI_PAYMENT_SYSTEM_ICONS' : '', {
    factory: () => ({
        mir: '@tui.mir',
        visa: '@tui.visa',
        electron: '@tui.electron',
        mastercard: '@tui.mastercard',
        maestro: '@tui.maestro',
        amex: '@tui.amex',
        dinersclub: '@tui.diners-club',
        discover: '@tui.discover',
        humo: '@tui.humo',
        jcb: '@tui.jcb',
        rupay: '@tui.ru-pay',
        unionpay: '@tui.union-pay',
        uzcard: '@tui.uzcard',
        verve: '@tui.verve',
    }),
});
