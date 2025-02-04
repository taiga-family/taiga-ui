import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiInputMonthOptions {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
}

export const TUI_INPUT_MONTH_DEFAULT_OPTIONS: TuiInputMonthOptions = {
    icon: () => '@tui.calendar',
};

export const [TUI_INPUT_MONTH_OPTIONS, tuiInputMonthOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_MONTH_DEFAULT_OPTIONS,
);
