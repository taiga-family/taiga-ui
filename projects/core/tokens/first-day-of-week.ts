import {InjectionToken} from '@angular/core';
import {DEFAULT_TIME_LOCALIZATION_OPTIONS, TuiDayOfWeek} from '@taiga-ui/cdk';

export const TUI_FIRST_DAY_OF_WEEK = new InjectionToken<TuiDayOfWeek>(
    'The first day of the week index',
    {
        providedIn: 'root',
        factory: () => DEFAULT_TIME_LOCALIZATION_OPTIONS.startWeekDayIndex,
    },
);
