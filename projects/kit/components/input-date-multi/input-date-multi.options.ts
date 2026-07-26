import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {
    TUI_INPUT_DATE_OPTIONS,
    type TuiInputDateOptions,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputDateMultiOptions extends Omit<
    TuiInputDateOptions,
    'valueTransformer'
> {
    readonly valueTransformer: TuiValueTransformer<TuiDay[]>;
}

export const TUI_INPUT_DATE_MULTI_OPTIONS = new InjectionToken<TuiInputDateMultiOptions>(
    ngDevMode ? 'TUI_INPUT_DATE_MULTI_OPTIONS' : '',
);

export function tuiInputDateMultiOptionsFactory(): TuiInputDateMultiOptions {
    const options = inject(TUI_INPUT_DATE_OPTIONS);

    return {
        ...options,
        valueTransformer: {
            fromControlValue: (value: unknown): TuiDay[] =>
                Array.isArray(value)
                    ? value
                          .map((item) => options.valueTransformer.fromControlValue(item))
                          .filter((item): item is TuiDay => item !== null)
                    : [],
            toControlValue: (value: TuiDay[]): unknown =>
                value.map((item) => options.valueTransformer.toControlValue(item)),
        },
    };
}

export function tuiInjectInputDateMultiOptions(): TuiInputDateMultiOptions {
    return (
        inject(TUI_INPUT_DATE_MULTI_OPTIONS, {optional: true, skipSelf: true}) ??
        tuiInputDateMultiOptionsFactory()
    );
}

export const tuiInputDateMultiOptionsProvider = (
    options: Partial<TuiInputDateMultiOptions>,
): FactoryProvider => ({
    provide: TUI_INPUT_DATE_MULTI_OPTIONS,
    useFactory: (): TuiInputDateMultiOptions => ({
        ...tuiInjectInputDateMultiOptions(),
        ...options,
    }),
});
