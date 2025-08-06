import {InjectionToken, Optional, type Provider, SkipSelf} from '@angular/core';
import {type TuiDateMode} from '@taiga-ui/cdk/date-time';
import {map, type Observable, of} from 'rxjs';

/**
 * Formatting configuration for displayed dates
 */
export interface TuiDateFormatSettings {
    /**
     * Date format mode.
     */
    readonly mode: TuiDateMode;
    /**
     * Separator between date segments
     * @example 10.02 ('.' by default)
     */
    readonly separator: string;
}

export const TUI_DEFAULT_DATE_FORMAT: TuiDateFormatSettings = {
    mode: 'DMY',
    separator: '.',
};

/**
 * Formatting configuration for displayed dates
 */
export const TUI_DATE_FORMAT = new InjectionToken<Observable<TuiDateFormatSettings>>(
    ngDevMode ? 'TUI_DATE_FORMAT' : '',
    {
        factory: () => of(TUI_DEFAULT_DATE_FORMAT),
    },
);

export function tuiDateFormatProvider(options: Partial<TuiDateFormatSettings>): Provider {
    return {
        provide: TUI_DATE_FORMAT,
        deps: [[new Optional(), new SkipSelf(), TUI_DATE_FORMAT]],
        useFactory: (
            parent: Observable<TuiDateFormatSettings> | null,
        ): Observable<TuiDateFormatSettings> =>
            (parent || of(TUI_DEFAULT_DATE_FORMAT)).pipe(
                map((format) => ({...format, ...options})),
            ),
    };
}
