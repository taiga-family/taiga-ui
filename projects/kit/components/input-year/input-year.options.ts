import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/di';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    TUI_INPUT_DATE_OPTIONS_NEW,
    type TuiInputDateOptionsNew,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputYearOptions
    extends Omit<TuiInputDateOptionsNew, 'valueTransformer'> {
    readonly valueTransformer: TuiValueTransformer<number | null, any>;
}

export const TUI_INPUT_YEAR_OPTIONS = new InjectionToken<TuiInputYearOptions>(
    ngDevMode ? 'TUI_INPUT_YEAR_OPTIONS' : '',
    {
        factory: () => ({
            ...inject(TUI_INPUT_DATE_OPTIONS_NEW),
            valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
        }),
    },
);

export const tuiInputInputYearOptionsProvider = (
    options: Partial<TuiInputYearOptions>,
): FactoryProvider =>
    tuiProvideOptions(
        TUI_INPUT_YEAR_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    );
