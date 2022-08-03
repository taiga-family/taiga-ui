import {ExistingProvider, Type} from '@angular/core';

export abstract class TuiRectAccessor {
    abstract getClientRect(): ClientRect;
}

export function tuiAsRectAccessor(useExisting: Type<TuiRectAccessor>): ExistingProvider {
    return {
        provide: TuiRectAccessor,
        useExisting,
    };
}
