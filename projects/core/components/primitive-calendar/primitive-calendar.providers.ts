import {inject, InjectionToken, Provider} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TUI_FIRST_DAY_OF_WEEK, TUI_SHORT_WEEK_DAYS} from '../../tokens';

export type WEEK_DAYS_NAMES = [string, string, string, string, string, string, string];

export const TUI_ORDERED_SHORT_WEEK_DAYS = new InjectionToken<
    Observable<WEEK_DAYS_NAMES>
>('Ordered calendars i18n texts');

export const TUI_PRIMITIVE_CALENDAR_PROVIDERS: Provider[] = [
    {
        provide: TUI_ORDERED_SHORT_WEEK_DAYS,
        deps: [TUI_FIRST_DAY_OF_WEEK],
        useFactory: () => {
            const firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);

            return inject(TUI_SHORT_WEEK_DAYS).pipe(
                map(
                    weekDays =>
                        [
                            ...weekDays.slice(firstDayOfWeekIndex),
                            ...weekDays.slice(0, firstDayOfWeekIndex),
                        ] as WEEK_DAYS_NAMES,
                ),
            );
        },
    },
];
