import {AbstractControl, AbstractControlDirective} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 * TODO: rename function in 3.0. The name should be shorter.
 */
export function tuiReplayedValueChangesFrom<T>(
    control: AbstractControl | AbstractControlDirective,
): Observable<T> {
    return new Observable(subscriber => {
        if (!control.valueChanges) {
            throw new Error('Control does not have valueChanges');
        }

        control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
}
