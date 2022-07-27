import {InjectionToken} from '@angular/core';

export const TUI_DATE_SEPARATOR = new InjectionToken<string>(
    `Date separator for Taiga UI components`,
    {
        factory: () => `.`,
    },
);

export const changeDateSeparator = (
    dateString: string,
    newDateSeparator: string,
): string => dateString.replace(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
