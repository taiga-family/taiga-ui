import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiCalendarSheetOptions {
    readonly rangeMode: boolean;
}

export const TUI_CALENDAR_SHEET_DEFAULT_OPTIONS: TuiCalendarSheetOptions = {
    rangeMode: false,
};

export const TUI_CALENDAR_SHEET_OPTIONS = tuiCreateToken(
    TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
);

export function tuiCalendarSheetOptionsProvider(
    options: Partial<TuiCalendarSheetOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_CALENDAR_SHEET_OPTIONS,
        options,
        TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
    );
}
