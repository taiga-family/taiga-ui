import {NgControl} from '@angular/forms';
import {
    tuiControlValue,
    TuiControlValueTransformer,
    TuiDay,
    TuiDayRange,
    TuiTime,
} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * @internal
 */
export function tuiControlValueFactory<
    T extends TuiDay | TuiDayRange | [TuiDay | null, TuiTime | null],
>(
    control: NgControl | null,
    valueTransformer?: TuiControlValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? tuiControlValue<T | null>(control).pipe(
              map(value =>
                  valueTransformer ? valueTransformer.fromControlValue(value) : value,
              ),
          )
        : (of(null) as Observable<T | null>);
}
