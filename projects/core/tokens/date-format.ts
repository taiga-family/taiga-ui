import type {InjectionToken, Provider} from '@angular/core';
import {Optional, SkipSelf} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';
import {TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/constants';
import type {TuiDateFormatSettings} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

/**
 * Formatting configuration for displayed dates
 */
export const TUI_DATE_FORMAT: InjectionToken<Observable<TuiDateFormatSettings>> =
    tuiCreateToken(of(TUI_DEFAULT_DATE_FORMAT));

export function tuiDateFormatProvider(options: Partial<TuiDateFormatSettings>): Provider {
    return {
        provide: TUI_DATE_FORMAT,
        deps: [[new Optional(), new SkipSelf(), TUI_DATE_FORMAT]],
        useFactory: (
            parent: Observable<TuiDateFormatSettings> | null,
        ): Observable<TuiDateFormatSettings> =>
            (parent || of(TUI_DEFAULT_DATE_FORMAT)).pipe(
                map(format => ({...format, ...options})),
            ),
    };
}
