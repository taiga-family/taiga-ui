import {ChangeDetectorRef} from '@angular/core';
import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiWatch} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function watch<T>(
    changeDetectorRef: ChangeDetectorRef,
): MonoTypeOperatorFunction<T> {
    return tap(() => {
        changeDetectorRef.markForCheck();
    });
}

export const tuiWatch = watch;
