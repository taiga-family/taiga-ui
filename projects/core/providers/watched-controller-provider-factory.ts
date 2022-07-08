import {ChangeDetectorRef} from '@angular/core';
import {AbstractTuiController, watch} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiWatchedControllerFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function watchedControllerFactory(
    controller: AbstractTuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): AbstractTuiController {
    controller.change$.pipe(watch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}

export const tuiWatchedControllerFactory = watchedControllerFactory;
