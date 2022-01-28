import {InjectionToken} from '@angular/core';

export const TUI_DATE_SEPARATOR = new InjectionToken<string>(
    'Date separator for Taiga UI components',
    {
        factory: () => '.',
    },
);

export const changeDateSeparator = (dateString: string, newDateSeparator: string) =>
    dateString.replace(/[^0-9a-zа-я]/gi, newDateSeparator);
