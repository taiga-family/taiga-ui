import {ExistingProvider, Type} from '@angular/core';

export abstract class TuiVehicle {
    abstract readonly type: string;
    abstract toggle(value: boolean): void;
}

export function tuiAsVehicle(useExisting: Type<TuiVehicle>): ExistingProvider {
    return {
        provide: TuiVehicle,
        multi: true,
        useExisting,
    };
}
