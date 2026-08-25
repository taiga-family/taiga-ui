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

export type TuiDecimalMode =
    /**
     * @deprecated use `TuiNumberFormatSettings[minimumFractionDigits]` instead
     */
    | 'always' // TODO(v6): delete
    | 'not-zero'
    | 'pad';
export type TuiDecimalSymbol = ',' | '.';

/**
 * TODO(v6): use `MaskitoNumberParams` from `@maskito/kit`
 * ```ts
 * export interface TuiNumberFormatSettings extends Pick<
 *     Required<MaskitoNumberParams>,
 *     | 'decimalSeparator'
 *     | 'maximumFractionDigits'
 *     | 'minimumFractionDigits'
 *     | 'minusSign'
 *     | 'negativePattern'
 *     | 'thousandSeparator'
 *     | 'thousandSeparatorPattern'
 * > {...}
 * ```
 * It's a temporary workaround to preserve backward compatibility
 * while avoiding the need to add @maskito/kit as a peer-dependency of @taiga-ui/core.
 */
interface MaskitoNumberParams {
    decimalSeparator: string;
    thousandSeparator: string;
    thousandSeparatorPattern?(digits: string): readonly string[];
    minusSign?: string;
    negativePattern?: 'minusFirst' | 'prefixFirst';
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
}

/**
 * Formatting configuration for displayed numbers
 * TODO(v6): move TuiNumberFormatSettings (and its dependants) to `@taiga-ui/kit`
 */
export interface TuiNumberFormatSettings extends MaskitoNumberParams {
    /**
     * @deprecated use `maximumFractionDigits` instead
     */
    readonly precision: number;
    /**
     * Rounding method.
     */
    readonly rounding: TuiRounding;
    /**
     * Decimal part display mode. ('pad' by default)
     */
    readonly decimalMode: TuiDecimalMode;
}

/**
 * TODO(v6): add required props
 * ```ts
 * minusSign: CHAR_MINUS,
 * maximumFractionDigits: Number.NaN,
 * minimumFractionDigits: 0,
 * ```
 */
export const TUI_DEFAULT_NUMBER_FORMAT: TuiNumberFormatSettings = {
    precision: Number.NaN,
    decimalSeparator: '.',
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    rounding: 'truncate',
    decimalMode: 'pad',
    negativePattern: 'prefixFirst',
    thousandSeparatorPattern: (digits) => digits.match(/\d{1,3}(?=(?:\d{3})*$)/g) ?? [],
};

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT = new InjectionToken<Signal<TuiNumberFormatSettings>>(
    ngDevMode ? 'TUI_NUMBER_FORMAT' : '',
    {factory: () => signal(TUI_DEFAULT_NUMBER_FORMAT)},
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
