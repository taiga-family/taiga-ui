import {InjectionToken} from '@angular/core';

export const DEFAULT_DATE_SEPARATOR = '.';

export const TUI_DATE_SEPARATOR = new InjectionToken<string>(
    'Date separator for Taiga UI components',
    {
        factory: () => DEFAULT_DATE_SEPARATOR,
    },
);

export const changeDateSeparator = (dateString: string, newDateSeparator: string) =>
    dateString.replace(/[^0-9a-z]/gi, newDateSeparator);
