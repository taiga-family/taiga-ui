import type {ChangeDetectorRef} from '@angular/core';
import type {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs';

export function tuiWatch<T>(cdr: ChangeDetectorRef): MonoTypeOperatorFunction<T> {
    return tap(() => {
        cdr.markForCheck();
    });
}
