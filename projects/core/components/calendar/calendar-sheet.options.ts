import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCalendarSheetOptions {
    readonly rangeMode: boolean;
}

export const TUI_CALENDAR_SHEET_DEFAULT_OPTIONS: TuiCalendarSheetOptions = {
    rangeMode: false,
};

export const [TUI_CALENDAR_SHEET_OPTIONS, tuiCalendarSheetOptionsProvider] =
    tuiCreateOptions(TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
