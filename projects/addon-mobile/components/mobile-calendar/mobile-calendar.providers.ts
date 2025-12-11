import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {InjectionToken, Optional, type Provider} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {type TuiDayRange} from '@taiga-ui/cdk/date-time';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {EMPTY, type Observable} from 'rxjs';

import {TUI_CALENDAR_DATE_STREAM} from './calendar-date-stream';
import {TuiMobileCalendarStrategy} from './mobile-calendar.strategy';

/**
 * Stream for updating value
 */
export const TUI_VALUE_STREAM = new InjectionToken<Observable<TuiDayRange | null>>(
    ngDevMode ? 'TUI_VALUE_STREAM' : '',
);

export const TUI_MOBILE_CALENDAR_PROVIDERS: Provider[] = [
    {
        provide: VIRTUAL_SCROLL_STRATEGY,
        useClass: TuiMobileCalendarStrategy,
    },
    {
        provide: TUI_VALUE_STREAM,
        deps: [[new Optional(), TUI_CALENDAR_DATE_STREAM]],
        useFactory: (
            value$: Observable<TuiDayRange | null> | null,
        ): Observable<TuiDayRange | null> =>
            (value$ || EMPTY).pipe(tuiWatch(), takeUntilDestroyed()),
    },
];
