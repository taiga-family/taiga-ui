import {ExistingProvider, Type} from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiRectAccessor {
    abstract getClientRect(): ClientRect;
}

export function tuiAsRectAccessor(useExisting: Type<TuiRectAccessor>): ExistingProvider {
    return {
        provide: TuiRectAccessor,
        useExisting,
    };
}
