import {InjectionToken, signal, type WritableSignal} from '@angular/core';
import {TuiDayOfWeek} from '@taiga-ui/cdk/date-time';

export type TuiDayOfWeekType = (typeof TuiDayOfWeek)[keyof typeof TuiDayOfWeek];

export const TUI_FIRST_DAY_OF_WEEK = new InjectionToken<WritableSignal<TuiDayOfWeekType>>(
    ngDevMode ? 'TUI_FIRST_DAY_OF_WEEK' : '',
    {
        factory: () => signal(TuiDayOfWeek.Monday),
    },
);
