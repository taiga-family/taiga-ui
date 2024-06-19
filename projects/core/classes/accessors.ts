import type {AbstractType, ExistingProvider, FactoryProvider, Type} from '@angular/core';
import {Optional, SkipSelf} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiPoint} from '@taiga-ui/core/types';

export abstract class TuiAccessor {
    public abstract readonly type: string;
}

export abstract class TuiPositionAccessor extends TuiAccessor {
    public abstract getPosition(rect: DOMRect): TuiPoint;
}

export abstract class TuiRectAccessor extends TuiAccessor {
    public abstract getClientRect(): DOMRect;
}

export function tuiProvideAccessor<T extends TuiAccessor>(
    provide: AbstractType<T>,
    type: string,
    fallback: Type<T>,
): FactoryProvider {
    return {
        provide,
        deps: [[new SkipSelf(), new Optional(), provide], fallback],
        useFactory: tuiFallbackAccessor<T>(type),
    };
}

export function tuiFallbackAccessor<T extends TuiAccessor>(
    type: string,
): (accessors: readonly T[] | null, fallback: T) => T {
    return (accessors, fallback) =>
        accessors?.find?.(accessor => accessor !== fallback && accessor.type === type) ||
        fallback;
}

export function tuiPositionAccessorFor(
    type: string,
    fallback: Type<TuiPositionAccessor>,
): FactoryProvider {
    return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}

export function tuiRectAccessorFor(
    type: string,
    fallback: Type<TuiRectAccessor>,
): FactoryProvider {
    return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}

export function tuiAsPositionAccessor(
    accessor: Type<TuiPositionAccessor>,
): ExistingProvider {
    return tuiProvide(TuiPositionAccessor, accessor, true);
}

export function tuiAsRectAccessor(accessor: Type<TuiRectAccessor>): ExistingProvider {
    return tuiProvide(TuiRectAccessor, accessor, true);
}
