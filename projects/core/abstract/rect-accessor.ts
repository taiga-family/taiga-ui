import type {ExistingProvider, FactoryProvider, Type} from '@angular/core';
import {SkipSelf} from '@angular/core';

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
        useFactory: tuiFallbackRectAccessor(type),
    };
}

export function tuiFallbackRectAccessor(
    type: string,
): (accessors: readonly TuiRectAccessor[], fallback: TuiRectAccessor) => TuiRectAccessor {
    return (accessors, fallback) =>
        accessors.find(accessor => accessor !== fallback && accessor.type === type) ||
        fallback;
}

export function tuiAsRectAccessor(useExisting: Type<TuiRectAccessor>): ExistingProvider {
    return {
        provide: TuiRectAccessor,
        multi: true,
        useExisting,
    };
}
