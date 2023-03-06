import {InjectionToken} from '@angular/core';
import {TuiDayOfWeek} from '@taiga-ui/cdk';

/**
 * The first day of the week index
 */
export const TUI_FIRST_DAY_OF_WEEK = new InjectionToken<TuiDayOfWeek>(
    `[TUI_FIRST_DAY_OF_WEEK]`,
    {
        factory: () => TuiDayOfWeek.Monday,
    },
);
