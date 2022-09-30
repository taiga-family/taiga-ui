import {ChangeDetectorRef} from '@angular/core';
import {AbstractTuiController, tuiWatch} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export function tuiWatchedControllerFactory(
    controller: AbstractTuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): AbstractTuiController {
    controller.change$.pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}
