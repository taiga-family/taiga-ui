import type {FactoryProvider} from '@angular/core';
import {inject} from '@angular/core';
import type {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import type {TuiMonthRange} from '@taiga-ui/cdk/date-time';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {
    tuiCreateTokenFromFactory,
    tuiProvideOptions,
} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW} from '@taiga-ui/kit/components/input-date';
import {TUI_INPUT_MONTH_OPTIONS} from '@taiga-ui/kit/components/input-month';

export interface TuiInputMonthRangeOptions {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
    readonly valueTransformer: TuiValueTransformer<TuiMonthRange | null, any>;
}

export const TUI_INPUT_MONTH_RANGE_OPTIONS =
    tuiCreateTokenFromFactory<TuiInputMonthRangeOptions>(() => ({
        ...inject(TUI_INPUT_MONTH_OPTIONS),
        valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
    }));

export const tuiInputMonthRangeOptionsProvider = (
    options: Partial<TuiInputMonthRangeOptions>,
): FactoryProvider =>
    tuiProvideOptions(
        TUI_INPUT_MONTH_RANGE_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    );
