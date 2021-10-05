import {ChangeDetectorRef} from '@angular/core';
import {TuiController, watch} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export function watchedControllerFactory(
    controller: TuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): TuiController {
    controller.change$.pipe(watch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}
