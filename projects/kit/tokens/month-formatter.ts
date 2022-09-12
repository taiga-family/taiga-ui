import {InjectionToken} from '@angular/core';
import {TuiHandler, TuiMonth} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

export const TUI_MONTH_FORMATTER = new InjectionToken<
    TuiHandler<TuiMonth | null, Observable<string>>
>(`[TUI_MONTH_FORMATTER]: A function to get localized formatted month`);
