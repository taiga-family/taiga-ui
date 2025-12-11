import {InjectionToken, type Signal, signal} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n/utils';

/**
 * Number and card number i18n
 */
export const TUI_CARD_NUMBER_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_CARD_NUMBER_TEXTS' : '',
    {
        factory: tuiExtractI18n('cardNumber'),
    },
);

/**
 * Expiry and card expiry i18n
 */
export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_CARD_EXPIRY_TEXTS' : '',
    {
        factory: tuiExtractI18n('cardExpiry'),
    },
);

/**
 * Card CVC number text [mobile, desktop]
 */
export const TUI_CARD_CVC_TEXTS = new InjectionToken<Signal<[string, string]>>(
    ngDevMode ? 'TUI_CARD_CVC_TEXTS' : '',
    {
        factory: () => signal(['CVC', 'CVC/CVV']),
    },
);
