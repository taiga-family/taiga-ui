import {NgControl} from '@angular/forms';
import {TuiDay, TuiDayRange, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';

/**
 * @internal
 */
export function TuiReplayControlValueChangesFactory(
    control: NgControl | null,
): Observable<TuiDayRange | TuiDay | null> | null {
    return control ? tuiReplayedValueChangesFrom(control) : of(null);
}
