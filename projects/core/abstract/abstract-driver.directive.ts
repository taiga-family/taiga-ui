import {Directive, Inject, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {TuiDriver} from './driver';
import {TuiVehicle} from './vehicle';

@Directive()
export class AbstractTuiDriverDirective {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiDriver) driver$: Observable<boolean>,
        @Inject(TuiVehicle) vehicle: TuiVehicle,
    ) {
        driver$.pipe(distinctUntilChanged(), takeUntil(destroy$)).subscribe(value => {
            vehicle.toggle(value);
        });
    }
}
