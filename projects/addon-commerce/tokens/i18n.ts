import {InjectionToken} from '@angular/core';
import {extractI18n} from '@taiga-ui/i18n';
import {Observable, of} from 'rxjs';

export const TUI_CARD_NUMBER_TEXTS = new InjectionToken(`Number and card number i18n`, {
    factory: extractI18n(`cardNumber`),
});

export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken(`Expiry and card expiry i18n`, {
    factory: extractI18n(`cardExpiry`),
});

export const TUI_CARD_CVC_TEXTS = new InjectionToken<Observable<[string, string]>>(
    `Card CVC number text`,
    {
        factory: () => of([`CVC`, `CVC/CVV`]),
    },
);
