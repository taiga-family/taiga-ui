import type {InjectionToken, Provider} from '@angular/core';
import {Optional, SkipSelf} from '@angular/core';
import type {TuiRounding} from '@taiga-ui/cdk';
import {CHAR_NO_BREAK_SPACE, tuiCreateToken} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

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
     * Decimal part display mode. ('not-zero' by default)
     */
    readonly decimalMode: TuiDecimalMode;
}

export const TUI_DEFAULT_NUMBER_FORMAT: TuiNumberFormatSettings = {
    precision: NaN,
    decimalSeparator: ',',
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    rounding: 'truncate',
    decimalMode: 'pad',
};

/**
 * Formatting configuration for displayed numbers
 */
export const TUI_NUMBER_FORMAT: InjectionToken<Observable<TuiNumberFormatSettings>> =
    tuiCreateToken(of(TUI_DEFAULT_NUMBER_FORMAT));

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
                map(format => ({...format, ...options})),
            ),
    };
}
