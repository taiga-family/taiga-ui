import {type FactoryProvider, inject, InjectionToken} from '@angular/core';
import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW,
    TUI_INPUT_DATE_OPTIONS_NEW,
    type TuiInputDateOptionsNew,
} from '@taiga-ui/kit/components/input-date';

export interface TuiInputDateMultiOptions extends Omit<
    TuiInputDateOptionsNew,
    'valueTransformer'
> {
    readonly valueTransformer: TuiValueTransformer<TuiDay[] | null>;
}

export const TUI_INPUT_DATE_MULTI_OPTIONS = new InjectionToken<TuiInputDateMultiOptions>(
    ngDevMode ? 'TUI_INPUT_DATE_MULTI_OPTIONS' : '',
    {
        factory: () => {
            const options = inject(TUI_INPUT_DATE_OPTIONS_NEW);

            return {
                ...options,
                valueTransformer: {
                    fromControlValue: (value: unknown): TuiDay[] | null => {
                        if (!Array.isArray(value)) {
                            return [];
                        }

                        const transformed = value.map((item) =>
                            options.valueTransformer.fromControlValue(item),
                        );

                        return transformed.every((item): item is TuiDay => item !== null)
                            ? transformed
                            : [];
                    },
                    toControlValue: (value: TuiDay[] | null): unknown =>
                        value
                            ? value.map((item) =>
                                  options.valueTransformer.toControlValue(item),
                              )
                            : [],
                },
            };
        },
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
