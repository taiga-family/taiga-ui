import {
    computed,
    inject,
    InjectionToken,
    type Provider,
    type Signal,
    signal,
} from '@angular/core';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {type TuiRounding} from '@taiga-ui/cdk/types';

export type TuiDecimalMode = 'always' | 'not-zero' | 'pad';
export type TuiDecimalSymbol = ',' | '.';

/**
 * Formatting configuration for displayed numbers
 */
export interface TuiNumberFormatSettings {
    /**
     * Number of digits of decimal part.
     * @note Use `Infinity` to keep untouched.
     */
    readonly precision: number;
    /**
     * Separator between the integer and the decimal part.
     * @example 0,42 (',' by default)
     */
    readonly decimalSeparator: TuiDecimalSymbol;
    /**
     * Rounding method.
     */
    readonly rounding: TuiRounding;
    /**
     * Separator between thousands.
     * @example 360 000 (' ' by default)
     */
    readonly thousandSeparator: string;
    /**
     * Decimal part display mode. ('pad' by default)
     */
    readonly decimalMode: TuiDecimalMode;
}

export const TUI_DEFAULT_NUMBER_FORMAT: TuiNumberFormatSettings = {
    precision: NaN,
    decimalSeparator: '.',
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    rounding: 'truncate',
    decimalMode: 'pad',
};

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT = new InjectionToken<Signal<TuiNumberFormatSettings>>(
    ngDevMode ? 'TUI_NUMBER_FORMAT' : '',
    {
        factory: () => signal(TUI_DEFAULT_NUMBER_FORMAT),
    },
);

export function tuiNumberFormatProvider(
    options: Partial<TuiNumberFormatSettings>,
): Provider {
    return {
        provide: TUI_NUMBER_FORMAT,
        useFactory: (): Signal<TuiNumberFormatSettings> => {
            const parent = inject(TUI_NUMBER_FORMAT, {optional: true, skipSelf: true});

            return computed(() => ({
                ...(parent?.() || TUI_DEFAULT_NUMBER_FORMAT),
                ...options,
            }));
        },
    };
}
