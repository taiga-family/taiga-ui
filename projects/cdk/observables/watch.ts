import {ChangeDetectorRef, inject} from '@angular/core';
import {type MonoTypeOperatorFunction, tap} from 'rxjs';

export function tuiWatch<T>(
    cdr = inject(ChangeDetectorRef),
): MonoTypeOperatorFunction<T> {
    return tap(() => cdr.markForCheck());
}
