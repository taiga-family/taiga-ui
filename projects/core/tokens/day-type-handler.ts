import {InjectionToken} from '@angular/core';
import {TuiDay, TuiHandler} from '@taiga-ui/cdk';

export const TUI_DAY_TYPE_HANDLER = new InjectionToken<TuiHandler<TuiDay, string>>(
    `[TUI_DAY_TYPE_HANDLER]: [TUI_DAY_TYPE]: Token for adding data-type attribute to calendar cell`,
    {
        factory: () => (day: TuiDay) => day.isWeekend ? `weekend` : `weekday`,
    },
);
