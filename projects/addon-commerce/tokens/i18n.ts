import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n';
import {Observable, of} from 'rxjs';

export const TUI_CARD_NUMBER_TEXTS = new InjectionToken(
    `[TUI_CARD_NUMBER_TEXTS]: Number and card number i18n`,
    {
        factory: tuiExtractI18n(`cardNumber`),
    },
);

export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken(
    `[TUI_CARD_EXPIRY_TEXTS]: Expiry and card expiry i18n`,
    {
        factory: tuiExtractI18n(`cardExpiry`),
    },
);

export const TUI_CARD_CVC_TEXTS = new InjectionToken<Observable<[string, string]>>(
    `[TUI_CARD_CVC_TEXTS]: Card CVC number text`,
    {
        factory: () => of([`CVC`, `CVC/CVV`]),
    },
);
