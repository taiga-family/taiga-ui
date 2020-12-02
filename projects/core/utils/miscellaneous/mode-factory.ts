import {ChangeDetectorRef} from '@angular/core';
import {watch} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TuiModeVariants} from '@taiga-ui/core/types';
import {EMPTY, Observable, of} from 'rxjs';
import {map, startWith, takeUntil} from 'rxjs/operators';

export function modeFactory(
    destroy$: Observable<void>,
    changeDetectorRef: ChangeDetectorRef,
    mode: TuiModeDirective | null,
    table?: any,
): Observable<TuiModeVariants | null> {
    if (table) {
        return of('table' as 'table');
    }

    if (!mode) {
        return EMPTY;
    }

    return mode.change$.pipe(
        map(() => mode.mode),
        watch(changeDetectorRef),
        takeUntil(destroy$),
        startWith(mode.mode),
    );
}
