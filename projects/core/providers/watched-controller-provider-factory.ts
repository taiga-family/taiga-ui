import {ChangeDetectorRef} from '@angular/core';
import {AbstractTuiController, tuiWatch} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export function tuiWatchedControllerFactory(
    controller: AbstractTuiController,
    cdr: ChangeDetectorRef,
    destroy$: Observable<void>,
): AbstractTuiController {
    controller.change$.pipe(tuiWatch(cdr), takeUntil(destroy$)).subscribe();

    return controller;
}
