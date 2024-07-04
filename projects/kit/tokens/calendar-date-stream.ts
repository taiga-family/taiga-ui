import type {Provider} from '@angular/core';
import {InjectionToken, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import type {TuiDay, TuiDayRange, TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

/**
 * Stream that emits calendar data change
 */
export const TUI_CALENDAR_DATE_STREAM = new InjectionToken<
    Observable<TuiDay | TuiDayRange | null>
>('[TUI_CALENDAR_DATE_STREAM]');

export function tuiDateStreamWithTransformer(
    transformer: InjectionToken<TuiValueTransformer<any>>,
): Provider {
    return {
        provide: TUI_CALENDAR_DATE_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), transformer],
        ],
        useFactory: tuiControlValueFactory,
    };
}

function tuiControlValueFactory<
    T extends TuiDay | TuiDayRange | [TuiDay | null, TuiTime | null],
>(
    control: NgControl | null,
    transformer?: TuiValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? tuiControlValue(control).pipe(
              map((value) =>
                  transformer ? transformer?.fromControlValue(value) : (value as T),
              ),
          )
        : of(null);
}
