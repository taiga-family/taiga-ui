import {inject, InjectionToken, INJECTOR, type Provider} from '@angular/core';
import {NgControl} from '@angular/forms';
import {type TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {type TuiDay, type TuiDayRange, type TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {map, type Observable, of} from 'rxjs';

export const TUI_CALENDAR_DATE_STREAM = new InjectionToken<
    Observable<TuiDay | TuiDayRange | null>
>(ngDevMode ? 'TUI_CALENDAR_DATE_STREAM' : '');

export function tuiDateStreamWithTransformer(
    transformerToken: InjectionToken<TuiValueTransformer<any>>,
): Provider {
    return {
        provide: TUI_CALENDAR_DATE_STREAM,
        useFactory: <T extends TuiDay | TuiDayRange | [TuiDay, TuiTime | null]>() => {
            const control = inject(NgControl, {optional: true, self: true});
            const transformer = inject(transformerToken, {optional: true});

            return control
                ? tuiControlValue(control, inject(INJECTOR)).pipe(
                      map((value) =>
                          transformer
                              ? transformer?.fromControlValue(value)
                              : (value as T),
                      ),
                  )
                : of(null);
        },
    };
}
