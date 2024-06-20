import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import type {Provider} from '@angular/core';
import {ChangeDetectorRef, InjectionToken, Optional} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiDayRange} from '@taiga-ui/cdk/date-time';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TuiScrollService} from '@taiga-ui/cdk/services';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit/tokens';
import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';

import {TuiMobileCalendarStrategy} from './mobile-calendar.strategy';

/**
 * Stream for updating value
 */
export const TUI_VALUE_STREAM = new InjectionToken<Observable<TuiDayRange | null>>(
    '[TUI_VALUE_STREAM]',
);

export const TUI_MOBILE_CALENDAR_PROVIDERS: Provider[] = [
    TuiScrollService,
    {
        provide: VIRTUAL_SCROLL_STRATEGY,
        deps: [TUI_IS_IOS, TuiScrollService],
        useClass: TuiMobileCalendarStrategy,
    },
    {
        provide: TUI_VALUE_STREAM,
        deps: [[new Optional(), TUI_CALENDAR_DATE_STREAM], ChangeDetectorRef],
        useFactory: (
            value$: Observable<TuiDayRange | null> | null,
            cdr: ChangeDetectorRef,
        ): Observable<TuiDayRange | null> =>
            (value$ || EMPTY).pipe(tuiWatch(cdr), takeUntilDestroyed()),
    },
];
