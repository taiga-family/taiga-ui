import {InjectionToken} from '@angular/core';
import {DEFAULT_TIME_LOCALIZATION_OPTIONS, TuiDayOfWeek} from '@taiga-ui/cdk';

export const TUI_START_DAY_OF_WEEK_INDEX = new InjectionToken<TuiDayOfWeek>(
    'Start day of the week index',
    {
        providedIn: 'root',
        factory: () => DEFAULT_TIME_LOCALIZATION_OPTIONS.startWeekDayIndex,
    },
);
