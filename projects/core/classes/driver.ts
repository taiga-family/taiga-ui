import {
    type AfterViewInit,
    DestroyRef,
    Directive,
    type ExistingProvider,
    inject,
    type Type,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {distinctUntilChanged, merge, Observable} from 'rxjs';

import {TuiVehicle} from './vehicle';

export abstract class TuiDriver extends Observable<boolean> {
    public abstract readonly type: string;
}

export function tuiAsDriver(driver: Type<TuiDriver>): ExistingProvider {
    return tuiProvide(TuiDriver, driver, true);
}

@Directive()
export abstract class TuiDriverDirective implements AfterViewInit {
    public abstract type: string;

    private readonly destroyRef = inject(DestroyRef);
    private readonly drivers: readonly TuiDriver[] =
        inject<any>(TuiDriver, {self: true, optional: true}) || [];

    private readonly vehicles: readonly TuiVehicle[] = inject<any>(TuiVehicle, {
        self: true,
        optional: true,
    });

    public ngAfterViewInit(): void {
        const vehicle = this.vehicles?.find(({type}) => type === this.type);

        merge(...this.drivers.filter(({type}) => type === this.type))
            .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                vehicle?.toggle(value);
            });
    }
}
