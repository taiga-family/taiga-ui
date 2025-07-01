import {InjectionToken} from '@angular/core';
import {TuiDayOfWeek} from '@taiga-ui/cdk/date-time';

/**
 * The first day of the week index
 */
export const TUI_FIRST_DAY_OF_WEEK = new InjectionToken<0 | 1 | 2 | 3 | 4 | 5 | 6>(
    ngDevMode ? 'TUI_FIRST_DAY_OF_WEEK' : '',
    {
        factory: () => TuiDayOfWeek.Monday,
    },
);
