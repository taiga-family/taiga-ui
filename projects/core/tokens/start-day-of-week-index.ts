import {InjectionToken} from '@angular/core';
import {DAY_OF_WEEK_INDEX, DEFAULT_TIME_LOCALIZATION_OPTIONS} from '@taiga-ui/cdk';

export const TUI_START_DAY_OF_WEEK_INDEX = new InjectionToken<DAY_OF_WEEK_INDEX>(
    'Start day of the week index',
    {
        providedIn: 'root',
        factory: () => DEFAULT_TIME_LOCALIZATION_OPTIONS.startWeekDayIndex,
    },
);
