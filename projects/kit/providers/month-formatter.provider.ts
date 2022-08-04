import {FactoryProvider} from '@angular/core';
import {TuiHandler, TuiMonth} from '@taiga-ui/cdk';
import {TuiMonthPipe} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export const TUI_MONTH_FORMATTER_PROVIDER: FactoryProvider = {
    provide: TUI_MONTH_FORMATTER,
    deps: [TuiMonthPipe],
    useFactory: (pipe: TuiMonthPipe): TuiHandler<TuiMonth | null, Observable<string>> => {
        return month =>
            month
                ? pipe
                      .transform(month)
                      .pipe(map(formatted => `${formatted} ${month.formattedYear}`))
                : of(``);
    },
};
