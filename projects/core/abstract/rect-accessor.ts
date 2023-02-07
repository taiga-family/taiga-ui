import {ExistingProvider, Type} from '@angular/core';

// TODO: Rename to getBoundingClientRect to match the DOM API
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
