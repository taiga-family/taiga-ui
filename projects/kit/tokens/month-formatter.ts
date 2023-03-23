import {InjectionToken} from '@angular/core';
import type {TuiHandler, TuiMonth} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';

/**
 * A function to get localized formatted month
 */
export const TUI_MONTH_FORMATTER = new InjectionToken<
    TuiHandler<TuiMonth | null, Observable<string>>
>(`[TUI_MONTH_FORMATTER]`);
