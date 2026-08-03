import {type Signal, signal} from '@angular/core';
import {type TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiMonthOptions {
    readonly dayType: TuiHandler<TuiDay, string>;
    readonly weekFirstDay: Signal<number>;
    readonly showAdjacent: boolean;
    readonly showWeek: boolean;
}

export const TUI_MONTH_DEFAULT_OPTIONS: TuiMonthOptions = {
    dayType: (day) => (day.isWeekend ? 'weekend' : 'weekday'),
    weekFirstDay: signal(TuiDayOfWeek.Monday),
    showAdjacent: false,
    showWeek: false,
};

export const [TUI_MONTH_OPTIONS, tuiMonthOptionsProvider] = tuiCreateOptions(
    TUI_MONTH_DEFAULT_OPTIONS,
);
