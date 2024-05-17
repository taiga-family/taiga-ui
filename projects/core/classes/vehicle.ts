import type {ExistingProvider, Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';

export abstract class TuiVehicle {
    public abstract readonly type: string;
    public abstract toggle(value: boolean): void;
}

export function tuiAsVehicle(vehicle: Type<TuiVehicle>): ExistingProvider {
    return tuiProvide(TuiVehicle, vehicle, true);
}
