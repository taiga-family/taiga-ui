import {Directive, inject, OnInit} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {distinctUntilChanged, merge, takeUntil} from 'rxjs';

import {TuiDriver} from './driver';
import {TuiVehicle} from './vehicle';

@Directive()
export abstract class AbstractTuiDriverDirective implements OnInit {
    public abstract type: string;

    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly drivers: readonly TuiDriver[] = inject<any>(TuiDriver);
    private readonly vehicles: readonly TuiVehicle[] = inject<any>(TuiVehicle);

    public ngOnInit(): void {
        const vehicle = this.vehicles.find(({type}) => type === this.type);

        merge(...this.drivers.filter(({type}) => type === this.type))
            .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(value => {
                vehicle?.toggle(value);
            });
    }
}
