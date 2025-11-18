import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    TUI_INPUT_DATE_OPTIONS_NEW,
    type TuiInputDateOptionsNew,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputDateMultiOptions
    extends Omit<TuiInputDateOptionsNew, 'valueTransformer'> {
    readonly valueTransformer: TuiValueTransformer<TuiDay[] | null, any>;
}

export const TUI_INPUT_DATE_MULTI_OPTIONS = new InjectionToken<TuiInputDateMultiOptions>(
    ngDevMode ? 'TUI_INPUT_DATE_MULTI_OPTIONS' : '',
    {
        factory: () => ({
            ...inject(TUI_INPUT_DATE_OPTIONS_NEW),
            valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
        }),
    },
);

export const tuiInputDateMultiOptionsProvider = (
    options: Partial<TuiInputDateMultiOptions>,
): FactoryProvider =>
    tuiProvideOptions(
        TUI_INPUT_DATE_MULTI_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    );
