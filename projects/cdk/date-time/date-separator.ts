import {InjectionToken} from '@angular/core';

/**
 * Date separator for Taiga UI components
 */
export const TUI_DATE_SEPARATOR = new InjectionToken<string>(`[TUI_DATE_SEPARATOR]`, {
    factory: () => `.`,
});

export const changeDateSeparator = (
    dateString: string,
    newDateSeparator: string,
): string => dateString.replace(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
