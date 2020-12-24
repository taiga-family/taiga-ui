import {InjectionToken} from '@angular/core';

export const TUI_CARD_NUMBER_TEXTS = new InjectionToken<[string, string]>(
    `Number and card number i18n`,
    {
        factory: () => ['Number', 'Card number'],
    },
);

export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken<[string, string]>(
    `Expiry and card expiry i18n`,
    {
        factory: () => ['Expiry', 'Card expiry'],
    },
);
