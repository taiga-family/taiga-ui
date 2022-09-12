import {InjectionToken} from '@angular/core';
import {TuiDateMode} from '@taiga-ui/cdk/types';

export const TUI_DATE_FORMAT = new InjectionToken<TuiDateMode>(
    `[TUI_DATE_FORMAT]: Active date format for Taiga UI`,
    {
        factory: () => `DMY`,
    },
);
