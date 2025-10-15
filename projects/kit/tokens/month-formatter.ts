import {inject, InjectionToken} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {type TuiMonth} from '@taiga-ui/cdk/date-time';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import {map, type Observable} from 'rxjs';

// TODO: replace with signal
export const TUI_MONTH_FORMATTER = new InjectionToken<
    Observable<TuiHandler<TuiMonth | null, string>>
>(ngDevMode ? 'TUI_MONTH_FORMATTER' : '', {
    factory: () =>
        toObservable(inject(TUI_MONTHS)).pipe(
            map((months) => (date) => {
                if (!date) {
                    return '';
                }

                return `${months[date.month] ?? ''} ${date.formattedYear}`;
            }),
        ),
});
