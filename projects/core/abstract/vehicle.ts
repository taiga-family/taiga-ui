import type {ExistingProvider, Type} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiVehicle {
    abstract toggle(value: boolean): void;
}

export function tuiAsVehicle(useExisting: Type<TuiVehicle>): ExistingProvider {
    return {
        provide: TuiVehicle,
        useExisting,
    };
}
