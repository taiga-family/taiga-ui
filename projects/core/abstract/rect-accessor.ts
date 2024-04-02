import {ExistingProvider, FactoryProvider, SkipSelf, Type} from '@angular/core';

import {tuiFallbackAccessor} from './accessors';

// TODO: Rename to getBoundingClientRect to match the DOM API
// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiRectAccessor {
    abstract readonly type: string;
    abstract getClientRect(): ClientRect;
}

export function tuiRectAccessorFor(
    type: string,
    fallback: Type<TuiRectAccessor>,
): FactoryProvider {
    return {
        provide: TuiRectAccessor,
        deps: [[new SkipSelf(), TuiRectAccessor], fallback],
        useFactory: tuiFallbackAccessor<TuiRectAccessor>(type),
    };
}

export const tuiFallbackRectAccessor = tuiFallbackAccessor;

export function tuiAsRectAccessor(useExisting: Type<TuiRectAccessor>): ExistingProvider {
    return {
        provide: TuiRectAccessor,
        multi: true,
        useExisting,
    };
}
