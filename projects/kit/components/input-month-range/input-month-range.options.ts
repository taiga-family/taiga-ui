import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiInputMonthRangeOptions {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
}

export const TUI_INPUT_MONTH_RANGE_DEFAULT_OPTIONS: TuiInputMonthRangeOptions = {
    icon: () => '@tui.calendar',
};

export const [TUI_INPUT_MONTH_RANGE_OPTIONS, tuiInputMonthRangeOptionsProvider] =
    tuiCreateOptions(TUI_INPUT_MONTH_RANGE_DEFAULT_OPTIONS);
