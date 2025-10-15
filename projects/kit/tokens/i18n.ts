import {InjectionToken, type Signal} from '@angular/core';
import {type TuiDateMode} from '@taiga-ui/cdk/date-time';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {tuiExtractI18n} from '@taiga-ui/i18n/utils';

export const TUI_CONFIRM_WORDS = new InjectionToken(
    ngDevMode ? 'TUI_CONFIRM_WORDS' : '',
    {
        factory: tuiExtractI18n('confirm'),
    },
);

export const TUI_CANCEL_WORD = new InjectionToken(ngDevMode ? 'TUI_CANCEL_WORD' : '', {
    factory: tuiExtractI18n('cancel'),
});

export const TUI_DONE_WORD = new InjectionToken(ngDevMode ? 'TUI_DONE_WORD' : '', {
    factory: tuiExtractI18n('done'),
});

export const TUI_MORE_WORD = new InjectionToken(ngDevMode ? 'TUI_MORE_WORD' : '', {
    factory: tuiExtractI18n('more'),
});

export const TUI_HIDE_TEXT = new InjectionToken(ngDevMode ? 'TUI_HIDE_TEXT' : '', {
    factory: tuiExtractI18n('hide'),
});

export const TUI_SHOW_ALL_TEXT = new InjectionToken(
    ngDevMode ? 'TUI_SHOW_ALL_TEXT' : '',
    {
        factory: tuiExtractI18n('showAll'),
    },
);

export const TUI_OTHER_DATE_TEXT = new InjectionToken(
    ngDevMode ? 'TUI_OTHER_DATE_TEXT' : '',
    {
        factory: tuiExtractI18n('otherDate'),
    },
);

export const TUI_CHOOSE_DAY_OR_RANGE_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_CHOOSE_DAY_OR_RANGE_TEXTS' : '',
    {
        factory: tuiExtractI18n('mobileCalendarTexts'),
    },
);

export const TUI_FROM_TO_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_FROM_TO_TEXTS' : '',
    {
        factory: tuiExtractI18n('range'),
    },
);

export const TUI_PLUS_MINUS_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_PLUS_MINUS_TEXTS' : '',
    {
        factory: tuiExtractI18n('countTexts'),
    },
);

export const TUI_TIME_TEXTS = new InjectionToken(ngDevMode ? 'TUI_TIME_TEXTS' : '', {
    factory: tuiExtractI18n('time'),
});

export const TUI_DATE_TEXTS = new InjectionToken<Signal<Record<TuiDateMode, string>>>(
    ngDevMode ? 'TUI_DATE_TEXTS' : '',
    {
        factory: tuiExtractI18n('dateTexts'),
    },
);

export const TUI_DIGITAL_INFORMATION_UNITS = new InjectionToken(
    ngDevMode ? 'TUI_DIGITAL_INFORMATION_UNITS' : '',
    {
        factory: tuiExtractI18n('digitalInformationUnits'),
    },
);

export const TUI_COPY_TEXTS = new InjectionToken(ngDevMode ? 'TUI_COPY_TEXTS' : '', {
    factory: tuiExtractI18n('copyTexts'),
});

export const TUI_PASSWORD_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_PASSWORD_TEXTS' : '',
    {
        factory: tuiExtractI18n('passwordTexts'),
    },
);

export const TUI_CALENDAR_MONTHS = new InjectionToken(
    ngDevMode ? 'TUI_CALENDAR_MONTHS' : '',
    {
        factory: tuiExtractI18n('shortCalendarMonths'),
    },
);

export const TUI_FILE_TEXTS = new InjectionToken(ngDevMode ? 'TUI_FILE_TEXTS' : '', {
    factory: tuiExtractI18n('fileTexts'),
});

export const TUI_PAGINATION_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_PAGINATION_TEXTS' : '',
    {
        factory: tuiExtractI18n('pagination'),
    },
);

export const TUI_INPUT_FILE_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_FILE_TEXTS' : '',
    {
        factory: tuiExtractI18n('inputFileTexts'),
    },
);

export const TUI_MULTI_SELECT_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_MULTI_SELECT_TEXTS' : '',
    {
        factory: tuiExtractI18n('multiSelectTexts'),
    },
);

export const TUI_COUNTRIES = new InjectionToken<
    Signal<Record<TuiCountryIsoCode, string>>
>(ngDevMode ? 'TUI_COUNTRIES' : '', {
    factory: tuiExtractI18n('countries'),
});

export const TUI_PREVIEW_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_PREVIEW_TEXTS' : '',
    {
        factory: tuiExtractI18n('previewTexts'),
    },
);

export const TUI_PREVIEW_ZOOM_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_PREVIEW_ZOOM_TEXTS' : '',
    {
        factory: tuiExtractI18n('zoomTexts'),
    },
);

export const TUI_INTERNATIONAL_SEARCH = new InjectionToken(
    ngDevMode ? 'TUI_INTERNATIONAL_SEARCH' : '',
    {
        factory: tuiExtractI18n('phoneSearch'),
    },
);
