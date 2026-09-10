import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiBottomSheetOptions {
    readonly bar: boolean;
    readonly stops: readonly string[];
}

export const TUI_BOTTOM_SHEET_DEFAULT_OPTIONS: TuiBottomSheetOptions = {
    bar: true,
    stops: ['1.5rem'],
};

export const [TUI_BOTTOM_SHEET_OPTIONS, tuiBottomSheetOptionsProvider] = tuiCreateOptions(
    TUI_BOTTOM_SHEET_DEFAULT_OPTIONS,
);
