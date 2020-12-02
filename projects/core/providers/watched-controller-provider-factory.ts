import {ChangeDetectorRef} from '@angular/core';
import {watch} from '@taiga-ui/cdk';
import {Controller} from '@taiga-ui/core/abstract';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export function watchedControllerFactory(
    controller: Controller,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): Controller {
    controller.change$.pipe(watch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}
