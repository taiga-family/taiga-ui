import {InjectionToken} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';
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
export const TUI_CARD_CVC_TEXTS = tuiCreateToken<Observable<[string, string]>>(
    of([`CVC`, `CVC/CVV`]),
);
