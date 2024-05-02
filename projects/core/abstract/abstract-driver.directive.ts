import type {OnInit} from '@angular/core';
import {DestroyRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {distinctUntilChanged, merge} from 'rxjs';

import {TuiDriver} from './driver';
import {TuiVehicle} from './vehicle';

@Directive()
export abstract class AbstractTuiDriverDirective implements OnInit {
    public abstract type: string;

    private readonly destroyRef = inject(DestroyRef);
    private readonly drivers: readonly TuiDriver[] = inject<any>(TuiDriver);
    private readonly vehicles: readonly TuiVehicle[] = inject<any>(TuiVehicle);

    public ngOnInit(): void {
        const vehicle = this.vehicles.find(({type}) => type === this.type);

        merge(...this.drivers.filter(({type}) => type === this.type))
            .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .subscribe(value => {
                vehicle?.toggle(value);
            });
    }
}
