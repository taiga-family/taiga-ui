import {ChangeDetectorRef} from '@angular/core';
import {TuiController, watch} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiWatchedControllerFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function watchedControllerFactory(
    controller: TuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): TuiController {
    controller.change$.pipe(watch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}

export const tuiWatchedControllerFactory = watchedControllerFactory;
