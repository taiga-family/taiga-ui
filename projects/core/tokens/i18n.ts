import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n/utils';

/**
 * Localized months names
 */
export const TUI_MONTHS = new InjectionToken(ngDevMode ? 'TUI_MONTHS' : '', {
    factory: tuiExtractI18n('months'),
});

/**
 * i18n 'close' word
 */
export const TUI_CLOSE_WORD = new InjectionToken(ngDevMode ? 'TUI_CLOSE_WORD' : '', {
    factory: tuiExtractI18n('close'),
});

/**
 * i18n 'back' word
 */
export const TUI_BACK_WORD = new InjectionToken(ngDevMode ? 'TUI_BACK_WORD' : '', {
    factory: tuiExtractI18n('back'),
});

/**
 * i18n 'clear' word
 */
export const TUI_CLEAR_WORD = new InjectionToken(ngDevMode ? 'TUI_CLEAR_WORD' : '', {
    factory: tuiExtractI18n('clear'),
});

/**
 * i18n 'Nothing found' message
 */
export const TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(
    ngDevMode ? 'TUI_NOTHING_FOUND_MESSAGE' : '',
    {
        factory: tuiExtractI18n('nothingFoundMessage'),
    },
);

/**
 * i18n of error message
 */
export const TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(
    ngDevMode ? 'TUI_DEFAULT_ERROR_MESSAGE' : '',
    {
        factory: tuiExtractI18n('defaultErrorMessage'),
    },
);

/**
 * spin i18n texts
 */
export const TUI_SPIN_TEXTS = new InjectionToken(ngDevMode ? 'TUI_SPIN_TEXTS' : '', {
    factory: tuiExtractI18n('spinTexts'),
});

/**
 * calendars i18n texts
 */
export const TUI_SHORT_WEEK_DAYS = new InjectionToken(
    ngDevMode ? 'TUI_SHORT_WEEK_DAYS' : '',
    {
        factory: tuiExtractI18n('shortWeekDays'),
    },
);
