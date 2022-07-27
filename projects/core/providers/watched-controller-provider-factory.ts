import {ChangeDetectorRef} from '@angular/core';
import {AbstractTuiController, watch} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export function tuiWatchedControllerFactory(
    controller: AbstractTuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): AbstractTuiController {
    controller.change$.pipe(watch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}
