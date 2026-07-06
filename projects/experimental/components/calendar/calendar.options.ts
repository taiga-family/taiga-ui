import {type Signal, signal} from '@angular/core';
import {type TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCalendarOptions {
    readonly dayType: TuiHandler<TuiDay, string>;
    readonly weekFirstDay: Signal<number>;
    readonly showAdjacent: boolean;
    readonly showWeek: boolean;
}

export const TUI_CALENDAR_DEFAULT_OPTIONS: TuiCalendarOptions = {
    dayType: (day) => (day.isWeekend ? 'weekend' : 'weekday'),
    weekFirstDay: signal(TuiDayOfWeek.Monday),
    showAdjacent: false,
    showWeek: false,
};

export const [TUI_CALENDAR_OPTIONS, tuiCalendarOptionsProvider] = tuiCreateOptions(
    TUI_CALENDAR_DEFAULT_OPTIONS,
);
