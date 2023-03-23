import {InjectionToken} from '@angular/core';
import type {TuiDay, TuiHandler} from '@taiga-ui/cdk';

/**
 * Token for adding data-type attribute to calendar cell
 */
export const TUI_DAY_TYPE_HANDLER = new InjectionToken<TuiHandler<TuiDay, string>>(
    `[TUI_DAY_TYPE_HANDLER]`,
    {
        factory: () => (day: TuiDay) => day.isWeekend ? `weekend` : `weekday`,
    },
);
