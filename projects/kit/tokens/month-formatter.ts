import {inject} from '@angular/core';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

export const TUI_MONTH_FORMATTER = tuiCreateTokenFromFactory<
    Observable<TuiHandler<TuiMonth | null, string>>
>(() =>
    inject(TUI_MONTHS).pipe(
        map((months) => (date) => {
            if (!date) {
                return '';
            }

            return `${months[date.month] ?? ''} ${date.formattedYear}`;
        }),
    ),
);
