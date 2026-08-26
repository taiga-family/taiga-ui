import {computed, type Injector, untracked} from '@angular/core';
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
        const value = computed(() => control?.value as T);
        const valueChanges$ =
            control?.valueChanges ?? // reactive forms
            (control && injector && toObservable(value, {injector})); // signal forms

        return valueChanges$
            ?.pipe(
                startWith(untracked(value)),
                distinctUntilChanged(),
            )
            .subscribe(subscriber);
    });
}
