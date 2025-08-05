import {type AbstractControl, type AbstractControlDirective} from '@angular/forms';
import {Observable, startWith} from 'rxjs';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export function tuiControlValue<T>(
    control?: AbstractControl | AbstractControlDirective | null,
): Observable<T> {
    return new Observable((subscriber) =>
        control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber),
    );
}
