import type {ChangeDetectorRef} from '@angular/core';
import type {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function tuiWatch<T>(
    changeDetectorRef: ChangeDetectorRef,
): MonoTypeOperatorFunction<T> {
    return tap(() => {
        changeDetectorRef.markForCheck();
    });
}
