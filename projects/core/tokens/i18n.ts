import {InjectionToken} from '@angular/core';
import {extractI18n} from '@taiga-ui/i18n';

export const TUI_MONTHS = new InjectionToken('Localized months names', {
    factory: extractI18n('months'),
});

export const TUI_CLOSE_WORD = new InjectionToken(`i18n 'close' word`, {
    factory: extractI18n('close'),
});

export const TUI_NOTHING_FOUND_MESSAGE = new InjectionToken(
    `i18n 'Nothing found' message`,
    {
        factory: extractI18n('nothingFoundMessage'),
    },
);

export const TUI_DEFAULT_ERROR_MESSAGE = new InjectionToken(`i18n of error message`, {
    factory: extractI18n('defaultErrorMessage'),
});

export const TUI_SPIN_TEXTS = new InjectionToken('spin i18n texts', {
    factory: extractI18n('spinTexts'),
});

export const TUI_SHORT_WEEK_DAYS = new InjectionToken('calendars i18n texts', {
    factory: extractI18n('shortWeekDays'),
});
