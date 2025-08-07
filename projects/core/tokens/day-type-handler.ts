import {InjectionToken} from '@angular/core';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';

/**
 * Token for adding data-type attribute to calendar cell
 */
export const TUI_DAY_TYPE_HANDLER = new InjectionToken<TuiHandler<TuiDay, string>>(
    ngDevMode ? 'TUI_DAY_TYPE_HANDLER' : '',
    {
        factory: () => (day) => (day.isWeekend ? 'weekend' : 'weekday'),
    },
);
