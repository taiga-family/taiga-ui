import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {type MaskitoTimeMode} from '@maskito/kit';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {type TuiDay, type TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    TUI_INPUT_DATE_OPTIONS_NEW,
    type TuiInputDateOptionsNew,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputDateTimeOptions extends Omit<
    TuiInputDateOptionsNew,
    'valueTransformer'
> {
    readonly timeMode: MaskitoTimeMode;
    readonly dateTimeSeparator: string;
    readonly valueTransformer: TuiValueTransformer<[TuiDay, TuiTime | null] | null, any>;
}

export const TUI_INPUT_DATE_TIME_DEFAULT_OPTIONS = {
    valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
    timeMode: 'HH:MM',
    dateTimeSeparator: ', ',
} as const;

export const TUI_INPUT_DATE_TIME_OPTIONS = new InjectionToken<TuiInputDateTimeOptions>(
    ngDevMode ? 'TUI_INPUT_DATE_TIME_OPTIONS' : '',
    {
        factory: () => ({
            ...inject(TUI_INPUT_DATE_OPTIONS_NEW),
            ...TUI_INPUT_DATE_TIME_DEFAULT_OPTIONS,
        }),
    },
);

export const tuiInputDateTimeOptionsProvider = (
    options: Partial<TuiInputDateTimeOptions>,
): FactoryProvider =>
    tuiProvideOptions(TUI_INPUT_DATE_TIME_OPTIONS, options, {
        ...TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
        ...TUI_INPUT_DATE_TIME_DEFAULT_OPTIONS,
    });
