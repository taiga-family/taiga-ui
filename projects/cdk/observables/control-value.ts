import {computed, type Injector} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {type AbstractControl, type AbstractControlDirective} from '@angular/forms';
import {distinctUntilChanged, Observable, startWith} from 'rxjs';

/**
 * Turns form control value changes into ReplaySubject(1)
 */
export function tuiControlValue<T>(
    control?: AbstractControl | AbstractControlDirective | null, // TODO: add `InteropNgControl` as possible type after update to Angular 21+
    injector?: Injector,
): Observable<T> {
    return new Observable((subscriber) => {
        const value = control?.value as T;
        const valueChanges$ =
            control?.valueChanges ?? // reactive forms
            // signal forms
            (control &&
                injector &&
                toObservable(
                    computed(() => control?.value as T),
                    {injector},
                ));

        return valueChanges$
            ?.pipe(startWith(value), distinctUntilChanged())
            .subscribe(subscriber);
    });
}
