/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import type {AbstractControl, AbstractControlDirective} from '@angular/forms';
import {Observable, startWith} from 'rxjs';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export function tuiControlValue<T>(
    control: AbstractControl | AbstractControlDirective | null,
): Observable<T> {
    return new Observable(subscriber => {
        if (!control?.valueChanges) {
            throw new TuiValueChangesException();
        }

        return control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
}

export class TuiValueChangesException extends Error {
    constructor() {
        super(ngDevMode ? 'Control does not have valueChanges' : '');
    }
}
