import {InjectionToken} from '@angular/core';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

export const TUI_CALENDAR_DATA_STREAM = new InjectionToken<
    Observable<TuiDay | TuiDayRange | null>
>(`Stream that emits calendar data change`);
