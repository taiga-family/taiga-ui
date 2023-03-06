import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n';
import {Observable, of} from 'rxjs';

/**
 * Number and card number i18n
 */
export const TUI_CARD_NUMBER_TEXTS = new InjectionToken(`[TUI_CARD_NUMBER_TEXTS]`, {
    factory: tuiExtractI18n(`cardNumber`),
});

/**
 * Expiry and card expiry i18n
 */
export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken(`[TUI_CARD_EXPIRY_TEXTS]`, {
    factory: tuiExtractI18n(`cardExpiry`),
});

/**
 * Card CVC number text [mobile, desktop]
 */
export const TUI_CARD_CVC_TEXTS = new InjectionToken<Observable<[string, string]>>(
    `[TUI_CARD_CVC_TEXTS]`,
    {
        factory: () => of([`CVC`, `CVC/CVV`]),
    },
);
