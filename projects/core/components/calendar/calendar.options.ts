import {type Signal, signal} from '@angular/core';
import {type TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCalendarOptions {
    readonly dayType: TuiHandler<TuiDay, string>;
    readonly weekStart: Signal<0 | 1 | 2 | 3 | 4 | 5 | 6>;
}

export const TUI_CALENDAR_DEFAULT_OPTIONS: TuiCalendarOptions = {
    dayType: (day) => (day.isWeekend ? 'weekend' : 'weekday'),
    weekStart: signal(TuiDayOfWeek.Monday),
};

export const [TUI_CALENDAR_OPTIONS, tuiCalendarOptionsProvider] = tuiCreateOptions(
    TUI_CALENDAR_DEFAULT_OPTIONS,
);
