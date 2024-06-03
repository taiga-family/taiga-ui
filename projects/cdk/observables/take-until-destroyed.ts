import type {DestroyRef} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {MonoTypeOperatorFunction} from 'rxjs';
import {catchError, defaultIfEmpty, EMPTY, NEVER, pipe, takeUntil} from 'rxjs';

// NOTE: takeUntilDestroyed and DestroyRef can cause error:
// NG0911: View has already been destroyed
// https://github.com/angular/angular/issues/54527
export function tuiTakeUntilDestroyed<T>(
    destroyRef?: DestroyRef,
): MonoTypeOperatorFunction<T> {
    return pipe(
        takeUntil(
            NEVER.pipe(
                takeUntilDestroyed(destroyRef),
                catchError(() => EMPTY),
                defaultIfEmpty(null),
            ),
        ),
    );
}
