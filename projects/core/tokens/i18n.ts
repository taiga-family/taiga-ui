import {InjectionToken} from '@angular/core';

export const TUI_CLOSE_WORD = new InjectionToken<string>(`i18n 'close' word`, {
    factory: () => 'Close',
});

export const TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken<string>(
    `i18n of error message`,
    {
        factory: () => 'Value is invalid',
    },
);

/**
 * Works with a tuple
 * [@string word 'previous', @string word 'next']
 */
export const TUI_SPIN_TEXTS = new InjectionToken<[string, string]>('spin i18n texts', {
    factory: () => ['Previous', 'Next'],
});

/**
 * Tuple with short days of week
 * starts with Mon (Monday)
 */
export const TUI_SHORT_WEEK_DAYS = new InjectionToken<
    [string, string, string, string, string, string, string]
>('calendars i18n texts', {
    factory: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
});
