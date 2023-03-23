import type {AbstractControl, AbstractControlDirective} from '@angular/forms';
import {TuiValueChangesException} from '@taiga-ui/cdk/exceptions';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export function tuiControlValue<T>(
    control: AbstractControl | AbstractControlDirective,
): Observable<T> {
    return new Observable(subscriber => {
        if (!control.valueChanges) {
            throw new TuiValueChangesException();
        }

        control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
}
