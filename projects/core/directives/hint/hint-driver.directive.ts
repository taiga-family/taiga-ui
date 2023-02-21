import {Directive, Inject, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiDriverDirective, TuiDriver, TuiVehicle} from '@taiga-ui/core/abstract';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiHint]',
    providers: [TuiDestroyService],
})
export class TuiHintDriverDirective extends AbstractTuiDriverDirective {
    readonly type = 'hint';

    // TODO: Figure out why this is necessary under nx test runner
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiDriver) drivers: TuiDriver[],
        @Inject(TuiVehicle) vehicles: TuiVehicle[],
    ) {
        super(destroy$, drivers, vehicles);
    }
}
