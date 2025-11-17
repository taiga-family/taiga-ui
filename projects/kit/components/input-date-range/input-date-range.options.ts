import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {type TuiDayRange} from '@taiga-ui/cdk/date-time';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/di';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    TUI_INPUT_DATE_OPTIONS_NEW,
    type TuiInputDateOptionsNew,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputDateRangeOptions
    extends Omit<TuiInputDateOptionsNew, 'valueTransformer'> {
    readonly valueTransformer: TuiValueTransformer<TuiDayRange | null, any>;
}

export const TUI_INPUT_DATE_RANGE_OPTIONS = new InjectionToken<TuiInputDateRangeOptions>(
    ngDevMode ? 'TUI_INPUT_DATE_RANGE_OPTIONS' : '',
    {
        factory: () => ({
            ...inject(TUI_INPUT_DATE_OPTIONS_NEW),
            valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
        }),
    },
);

export const tuiInputDateRangeOptionsProvider = (
    options: Partial<TuiInputDateRangeOptions>,
): FactoryProvider =>
    tuiProvideOptions(
        TUI_INPUT_DATE_RANGE_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    );
