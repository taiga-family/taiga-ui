import type {ExistingProvider, Type} from '@angular/core';

export abstract class TuiVehicle {
    public abstract readonly type: string;
    public abstract toggle(value: boolean): void;
}

export function tuiAsVehicle(useExisting: Type<TuiVehicle>): ExistingProvider {
    return {
        provide: TuiVehicle,
        multi: true,
        useExisting,
    };
}
