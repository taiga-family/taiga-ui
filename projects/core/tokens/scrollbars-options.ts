import {InjectionToken} from '@angular/core';
import {TuiScrollbarsOptions} from '@taiga-ui/core/interfaces';

export const TUI_SCROLLBARS_OPTIONS = new InjectionToken<TuiScrollbarsOptions>(
    'Options for Taiga UI scrollbars',
    {
        factory: () => ({
            mode: 'custom',
        }),
    },
);
