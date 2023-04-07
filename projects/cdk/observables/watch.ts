import {ChangeDetectorRef} from '@angular/core';
import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function tuiWatch<T>(cdr: ChangeDetectorRef): MonoTypeOperatorFunction<T> {
    return tap(() => {
        cdr.markForCheck();
    });
}
