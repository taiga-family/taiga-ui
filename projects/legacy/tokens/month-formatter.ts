import type {FactoryProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {TuiMonthPipe} from '@taiga-ui/core/pipes/month';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 * A function to get localized formatted month
 */
export const TUI_MONTH_FORMATTER = new InjectionToken<
    TuiHandler<TuiMonth | null, Observable<string>>
>('[TUI_MONTH_FORMATTER]');

export const TUI_MONTH_FORMATTER_PROVIDER: FactoryProvider = {
    provide: TUI_MONTH_FORMATTER,
    deps: [TuiMonthPipe],
    useFactory:
        (pipe: TuiMonthPipe): TuiHandler<TuiMonth | null, Observable<string>> =>
        (month) =>
            month
                ? pipe
                      .transform(month)
                      .pipe(map((formatted) => `${formatted} ${month.formattedYear}`))
                : of(''),
};
