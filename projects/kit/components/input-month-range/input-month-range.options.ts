import {inject} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    tuiCreateTokenFromFactory,
    TuiMonthRange,
    tuiProvideOptions,
    type TuiValueTransformer,
} from '@taiga-ui/cdk';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    TUI_INPUT_DATE_OPTIONS_NEW,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputMonthRangeOptions {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
    readonly valueTransformer: TuiValueTransformer<TuiMonthRange | null, any>;
}

export const TUI_INPUT_MONTH_RANGE_OPTIONS =
    tuiCreateTokenFromFactory<TuiInputMonthRangeOptions>(() => ({
        ...inject(TUI_INPUT_DATE_OPTIONS_NEW),
        valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
    }));

export const tuiInputMonthRangeOptionsProvider = (
    options: Partial<TuiInputMonthRangeOptions>,
) =>
    tuiProvideOptions(
        TUI_INPUT_MONTH_RANGE_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    );
