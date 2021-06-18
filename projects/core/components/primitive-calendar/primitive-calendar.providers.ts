import {inject, InjectionToken, Provider} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TUI_SHORT_WEEK_DAYS, TUI_START_DAY_OF_WEEK_INDEX} from '../../tokens';

export type WEEK_DAYS_NAMES = [string, string, string, string, string, string, string];

export const TUI_ORDERED_SHORT_WEEK_DAYS = new InjectionToken<
    Observable<WEEK_DAYS_NAMES>
>('Ordered calendars i18n texts');

export const TUI_PRIMITIVE_CALENDAR_PROVIDERS: Provider[] = [
    {
        provide: TUI_ORDERED_SHORT_WEEK_DAYS,
        deps: [TUI_START_DAY_OF_WEEK_INDEX],
        useFactory: () => {
            const startDayIndex = inject(TUI_START_DAY_OF_WEEK_INDEX);

            return inject(TUI_SHORT_WEEK_DAYS).pipe(
                map(
                    weekDays =>
                        [
                            ...weekDays.slice(startDayIndex),
                            ...weekDays.slice(0, startDayIndex),
                        ] as WEEK_DAYS_NAMES,
                ),
            );
        },
    },
];
