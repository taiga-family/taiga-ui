import {InjectionToken} from '@angular/core';
import {extractI18n} from '@taiga-ui/i18n';

export const TUI_CARD_NUMBER_TEXTS = new InjectionToken(`Number and card number i18n`, {
    factory: extractI18n('cardNumber'),
});

export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken(`Expiry and card expiry i18n`, {
    factory: extractI18n('cardExpiry'),
});
