import {InjectionToken} from '@angular/core';

export const TUI_DATE_SEPARATOR = new InjectionToken<string>(
    'Date separator for Taiga UI components',
    {
        factory: () => '.',
    },
);
