import {Directive, Inject, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {TuiDriver} from './driver';
import {TuiVehicle} from './vehicle';

@Directive()
export abstract class AbstractTuiDriverDirective {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TuiDriver) driver$: TuiDriver,
        @Inject(TuiVehicle) vehicle: TuiVehicle,
    ) {
        driver$
            .pipe(distinctUntilChanged(), takeUntil(destroy$))
            .subscribe(value => vehicle.toggle(value));
    }
}
