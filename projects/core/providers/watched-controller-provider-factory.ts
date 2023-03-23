import type {ChangeDetectorRef} from '@angular/core';
import type {AbstractTuiController} from '@taiga-ui/cdk';
import {tuiWatch} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export function tuiWatchedControllerFactory(
    controller: AbstractTuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): AbstractTuiController {
    controller.change$.pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}
