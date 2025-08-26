import {InjectionToken, Optional, type Provider, SkipSelf} from '@angular/core';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {type TuiRounding} from '@taiga-ui/cdk/types';
import {map, type Observable, of} from 'rxjs';

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
export const TUI_NUMBER_FORMAT = new InjectionToken<Observable<TuiNumberFormatSettings>>(
    ngDevMode ? 'TUI_NUMBER_FORMAT' : '',
    {
        factory: () => of(TUI_DEFAULT_NUMBER_FORMAT),
    },
);

export function tuiNumberFormatProvider(
    options: Partial<TuiNumberFormatSettings>,
): Provider {
    return {
        provide: TUI_NUMBER_FORMAT,
        deps: [[new Optional(), new SkipSelf(), TUI_NUMBER_FORMAT]],
        useFactory: (
            parent: Observable<TuiNumberFormatSettings> | null,
        ): Observable<TuiNumberFormatSettings> =>
            (parent || of(TUI_DEFAULT_NUMBER_FORMAT)).pipe(
                map((format) => ({...format, ...options})),
            ),
    };
}
