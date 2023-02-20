import {ExistingProvider, Type} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
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
