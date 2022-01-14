import {NgControl} from '@angular/forms';
import {
    AbstractTuiControlValueTransformer,
    TuiDay,
    TuiDayRange,
    tuiReplayedValueChangesFrom,
    TuiTime,
} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

type PossibleValue = TuiDayRange | TuiDay | [TuiDay | null, TuiTime | null] | null;

/**
 * @internal
 */
export function TuiReplayControlValueChangesFactory(
    control: NgControl | null,
    valueTransformer?: AbstractTuiControlValueTransformer<PossibleValue> | null,
): Observable<PossibleValue> | null {
    if (!control) {
        return of(null);
    }

    return tuiReplayedValueChangesFrom(control).pipe(
        map(value =>
            valueTransformer
                ? valueTransformer.toOrigin(value)
                : (value as PossibleValue),
        ),
    );
}
