import type {NgControl} from '@angular/forms';
import type {
    TuiControlValueTransformer,
    TuiDay,
    TuiDayRange,
    TuiTime,
} from '@taiga-ui/cdk';
import {tuiControlValue} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * @internal
 */
export function tuiControlValueFactory<
    T extends TuiDayRange | TuiDay | [TuiDay | null, TuiTime | null],
>(
    control: NgControl | null,
    valueTransformer?: TuiControlValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? tuiControlValue(control).pipe(
              map(value =>
                  valueTransformer
                      ? valueTransformer.fromControlValue(value)
                      : (value as T),
              ),
          )
        : of(null);
}
