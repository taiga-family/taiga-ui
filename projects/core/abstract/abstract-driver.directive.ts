import type {OnInit} from '@angular/core';
import {Directive, Inject, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {merge} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {TuiDriver} from './driver';
import {TuiVehicle} from './vehicle';

@Directive()
export abstract class AbstractTuiDriverDirective implements OnInit {
    abstract type: string;

    constructor(
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
        @Inject(TuiDriver) private readonly drivers: TuiDriver[],
        @Inject(TuiVehicle) private readonly vehicles: TuiVehicle[],
    ) {}

    ngOnInit(): void {
        const vehicle = this.vehicles.find(({type}) => type === this.type);

        merge(...this.drivers.filter(({type}) => type === this.type))
            .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(value => {
                vehicle?.toggle(value);
            });
    }
}
