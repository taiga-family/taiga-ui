import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import type {Provider} from '@angular/core';
import {ChangeDetectorRef, InjectionToken, Optional} from '@angular/core';
import type {TuiDayRange} from '@taiga-ui/cdk';
import {TUI_IS_IOS, TuiDestroyService, TuiScrollService, tuiWatch} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiMobileCalendarStrategy} from './mobile-calendar.strategy';

export const TUI_VALUE_STREAM = new InjectionToken<Observable<TuiDayRange | null>>(
    `Stream for updating value`,
);
export const TUI_MOBILE_CALENDAR_PROVIDERS: Provider[] = [
    TuiDestroyService,
    TuiScrollService,
    {
        provide: VIRTUAL_SCROLL_STRATEGY,
        deps: [TUI_IS_IOS, TuiScrollService],
        useClass: TuiMobileCalendarStrategy,
    },
    {
        provide: TUI_VALUE_STREAM,
        deps: [
            [new Optional(), TUI_CALENDAR_DATE_STREAM],
            TuiDestroyService,
            ChangeDetectorRef,
        ],
        useFactory: (
            value$: Observable<TuiDayRange | null> | null,
            destroy$: Observable<void>,
            changeDetectorRef: ChangeDetectorRef,
        ): Observable<TuiDayRange | null> => {
            return (value$ || EMPTY).pipe(
                tuiWatch(changeDetectorRef),
                takeUntil(destroy$),
            );
        },
    },
];
