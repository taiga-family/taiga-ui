import {InjectionToken} from '@angular/core';

// prettier-ignore
type MONTHS_ARRAY = [string, string, string, string, string, string, string, string, string, string, string, string];

export const TUI_MONTHS = new InjectionToken<MONTHS_ARRAY>('Localized months names', {
    factory: () => [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
});
