import {TuiDayOfWeek} from '@taiga-ui/cdk/date-time';
import {InjectionToken} from '@angular/core';

/**
 * The first day of the week index
 */
export const TUI_FIRST_DAY_OF_WEEK = new InjectionToken<0 | 1 | 2 | 3 | 4 | 5 | 6>(
    'TUI_FIRST_DAY_OF_WEEK',
    {
        factory: () => TuiDayOfWeek.Monday,
    },
);
