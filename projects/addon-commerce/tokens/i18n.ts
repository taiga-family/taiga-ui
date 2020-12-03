import {InjectionToken} from '@angular/core';

export const TUI_CLOSE_WORD = new InjectionToken<string>(`i18n 'close' word`, {
    factory: () => 'Close',
});

export const TUI_NOTHING_FOUND_MESSAGE = new InjectionToken<string>(
    `i18n 'Nothing found' message`,
    {
        factory: () => 'Nothing found',
    },
);

export const TUI_CARD_NUMBER_TEXTS = new InjectionToken<[string, string]>(
    `nubmer and card number i18n`,
    {
        factory: () => ['Number', 'Card number'],
    },
);

export const TUI_LUHN_DEFAULT_ERROR_MESSAGE = new InjectionToken<string>(
    `default error messafe for luhn validator i18n`,
    {
        factory: () => 'Wrong card',
    },
);

export const TUI_CARD_EXPIRY_TEXTS = new InjectionToken<[string, string]>(
    `Expiry and card expiry i18n`,
    {
        factory: () => ['Expiry', 'Card expiry'],
    },
);
