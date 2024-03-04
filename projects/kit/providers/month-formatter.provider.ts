import {type FactoryProvider} from '@angular/core';
import {type TuiHandler, type TuiMonth} from '@taiga-ui/cdk';
import {TuiMonthPipe} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {map, type Observable, of} from 'rxjs';

export const TUI_MONTH_FORMATTER_PROVIDER: FactoryProvider = {
    provide: TUI_MONTH_FORMATTER,
    deps: [TuiMonthPipe],
    useFactory:
        (pipe: TuiMonthPipe): TuiHandler<TuiMonth | null, Observable<string>> =>
        month =>
            month
                ? pipe
                      .transform(month)
                      .pipe(map(formatted => `${formatted} ${month.formattedYear}`))
                : of(''),
};
