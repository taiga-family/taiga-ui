import {
    type AbstractType,
    type ExistingProvider,
    type FactoryProvider,
    Optional,
    SkipSelf,
    type Type,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type TuiPoint} from '@taiga-ui/core/types';

export abstract class TuiAccessor {
    public abstract readonly type: string;
}

export abstract class TuiPositionAccessor extends TuiAccessor {
    /*
     * TODO @deprecated switching from DOMRect to HTMLElement in v5
     */
    public abstract getPosition(rect: DOMRect, element?: HTMLElement): TuiPoint;
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
): (accessors: readonly T[] | null, fallback: Omit<T, 'type'>) => T {
    return (accessors, fallback) =>
        accessors?.find?.(
            (accessor) => accessor !== fallback && accessor.type === type,
        ) || Object.create(fallback, {type: {value: type}});
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
