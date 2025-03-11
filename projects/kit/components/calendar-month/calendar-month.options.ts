import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiCalendarMonthOptions {
    rangeMode: boolean;
}

export const TUI_CALENDAR_MONTH_DEFAULT_OPTIONS: TuiCalendarMonthOptions = {
    rangeMode: false,
};

export const TUI_CALENDAR_MONTH_OPTIONS = tuiCreateToken(
    TUI_CALENDAR_MONTH_DEFAULT_OPTIONS,
);

export function tuiCalendarMonthOptionsProvider(
    options: Partial<TuiCalendarMonthOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_CALENDAR_MONTH_OPTIONS,
        options,
        TUI_CALENDAR_MONTH_DEFAULT_OPTIONS,
    );
}
