import type {ExistingProvider, OnInit, Type} from '@angular/core';
import {DestroyRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiProvide} from '@taiga-ui/cdk';
import {distinctUntilChanged, merge, Observable} from 'rxjs';

import {TuiVehicle} from './vehicle';

export abstract class TuiDriver extends Observable<boolean> {
    public abstract readonly type: string;
}

export function tuiAsDriver(driver: Type<TuiDriver>): ExistingProvider {
    return tuiProvide(TuiDriver, driver, true);
}

@Directive()
export abstract class TuiDriverDirective implements OnInit {
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
