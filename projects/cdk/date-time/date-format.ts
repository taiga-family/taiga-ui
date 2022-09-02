import {InjectionToken} from '@angular/core';
import type {TuiDateMode} from '@taiga-ui/cdk/types';

export const TUI_DATE_FORMAT = new InjectionToken<TuiDateMode>(
    `Active date format for Taiga UI`,
    {
        factory: () => `DMY`,
    },
);
