import {inject, InjectionToken} from '@angular/core';
import {TUI_MONTHS, TuiTimeMode} from '@taiga-ui/cdk';

export const TUI_CANCEL_WORD = new InjectionToken<string>(`i18n 'cancel' word`, {
    factory: () => 'Cancel',
});

export const TUI_DONE_WORD = new InjectionToken<string>(`i18n 'done' word`, {
    factory: () => 'Done',
});

export const TUI_MORE_WORD = new InjectionToken<string>(`i18n 'more' word`, {
    factory: () => 'More',
});

export const TUI_OTHER_DATE_TEXT = new InjectionToken<string>(`i18n 'Other date' text`, {
    factory: () => 'Other date...',
});

export const TUI_UNFINISHED_TEXT = new InjectionToken<string>(
    `i18n unfinished validator text`,
    {
        factory: () => 'Finish filling the field',
    },
);

/**
 * Works with a tuple
 * [@string 'choose day', @param 'choose range']
 */
export const TUI_CHOOSE_DAY_OR_RANGE_TEXTS = new InjectionToken<[string, string]>(
    `choose day or range i18n texts`,
    {
        factory: () => ['Choose day', 'Choose range'],
    },
);

export const TUI_FROM_TO_TEXTS = new InjectionToken<[string, string]>(
    `from and to i18n texts`,
    {
        factory: () => ['from', 'to'],
    },
);

export const TUI_PLUS_MINUS_TEXTS = new InjectionToken<[string, string]>(
    `plus and minus i18n texts`,
    {
        factory: () => ['Plus', 'Minus'],
    },
);

export const TUI_TIME_TEXTS = new InjectionToken<Record<TuiTimeMode, string>>(
    `time i18n texts`,
    {
        factory: () => ({
            'HH:MM': 'HH:MM',
            'HH:MM:SS': 'HH:MM:SS',
            'HH:MM:SS.MS': 'HH:MM:SS.MS',
        }),
    },
);

export const TUI_DIGITAL_INFORMATION_UNITS = new InjectionToken<[string, string, string]>(
    `short bytes, kilobytes and megabytes i18n texts`,
    {
        factory: () => ['B', 'KB', 'MB'],
    },
);

/**
 * Works with a tuple
 * [@string 'copy', @string 'copied']
 */
export const TUI_COPY_TEXTS = new InjectionToken<[string, string]>('copy i18n texts', {
    factory: () => ['Copy', 'Copied'],
});

/**
 * Works with a tuple
 * [@string 'Show password', @string 'Hide password']
 */
export const TUI_PASSWORD_TEXTS = new InjectionToken<[string, string]>(
    'password i18n texts',
    {
        factory: () => ['Show password', 'Hide password'],
    },
);

export const TUI_CALENDAR_MONTHS = new InjectionToken<readonly string[]>(
    'short calendar months i18n',
    {
        factory: () => inject(TUI_MONTHS).map(month => month.slice(0, 3)),
    },
);

export const TUI_FILE_TEXTS = new InjectionToken<
    Record<'loadingError' | 'preview' | 'remove', string>
>('file i18n texts', {
    factory: () => ({
        loadingError: 'Loading error',
        preview: 'Preview',
        remove: 'Remove',
    }),
});

export const TUI_PAGINATION_TEXTS = new InjectionToken<[string, string]>(
    'pagination i18n texts',
    {
        factory: () => ['Previous page', 'Next page'],
    },
);

export const TUI_INPUT_FILE_TEXTS = new InjectionToken<
    Record<
        | 'defaultLabelSingle'
        | 'defaultLabelMultiple'
        | 'defaultLinkSingle'
        | 'defaultLinkMultiple'
        | 'maxSizeRejectionReason'
        | 'formatRejectionReason'
        | 'drop'
        | 'dropMultiple',
        string
    >
>('tui-input-file i18n texts', {
    factory: () => ({
        defaultLabelSingle: 'or drag\u00A0it\u00A0here',
        defaultLabelMultiple: 'or drag\u00A0them\u00A0here',
        defaultLinkSingle: 'Choose a file',
        defaultLinkMultiple: 'Choose files',
        maxSizeRejectionReason: 'File exceeds size ',
        formatRejectionReason: 'Wrong file format',
        drop: 'Drop file here',
        dropMultiple: 'Drop files here',
    }),
});
