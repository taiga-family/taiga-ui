import {type ExistingProvider, type Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

export abstract class TuiVehicle {
    public abstract readonly type: string;
    public abstract toggle(value: boolean): void;
}

export function tuiAsVehicle(vehicle: Type<TuiVehicle>): ExistingProvider {
    return tuiProvide(TuiVehicle, vehicle, true);
}
