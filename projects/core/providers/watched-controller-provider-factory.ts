import type {ChangeDetectorRef} from '@angular/core';
import type {AbstractTuiController} from '@taiga-ui/cdk';
import {tuiWatch} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {takeUntil} from 'rxjs';

export function tuiWatchedControllerFactory(
    controller: AbstractTuiController,
    cdr: ChangeDetectorRef,
    destroy$: Observable<void>,
): AbstractTuiController {
    controller.change$.pipe(tuiWatch(cdr), takeUntil(destroy$)).subscribe();

    return controller;
}
