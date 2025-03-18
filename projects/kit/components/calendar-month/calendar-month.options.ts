import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCalendarMonthOptions {
    rangeMode: boolean;
}

export const TUI_CALENDAR_MONTH_DEFAULT_OPTIONS: TuiCalendarMonthOptions = {
    rangeMode: false,
};

export const [TUI_CALENDAR_MONTH_OPTIONS, tuiCalendarMonthOptionsProvider] =
    tuiCreateOptions(TUI_CALENDAR_MONTH_DEFAULT_OPTIONS);
