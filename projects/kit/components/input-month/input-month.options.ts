import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {type TuiMonth} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS,
    TUI_INPUT_DATE_OPTIONS,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputMonthOptions {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
    readonly valueTransformer: TuiValueTransformer<TuiMonth | null, any>;
}

/**
 * @deprecated remove in v5
 */
export const TUI_INPUT_MONTH_DEFAULT_OPTIONS: TuiInputMonthOptions = {
    icon: () => '@tui.calendar',
    valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
};

export const TUI_INPUT_MONTH_OPTIONS = new InjectionToken<TuiInputMonthOptions>(
    ngDevMode ? 'TUI_INPUT_MONTH_OPTIONS' : '',
    {
        factory: () => ({
            ...inject(TUI_INPUT_DATE_OPTIONS),
            valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
        }),
    },
);

export const tuiInputMonthOptionsProvider = (
    options: Partial<TuiInputMonthOptions>,
): FactoryProvider =>
    tuiProvideOptions(TUI_INPUT_MONTH_OPTIONS, options, TUI_INPUT_DATE_DEFAULT_OPTIONS);
