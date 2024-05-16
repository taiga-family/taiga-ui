import type {InjectionToken, Provider} from '@angular/core';
import {Optional, SkipSelf} from '@angular/core';
import {CHAR_NO_BREAK_SPACE, tuiCreateToken} from '@taiga-ui/cdk';
import type {TuiNumberFormatSettings} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

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
