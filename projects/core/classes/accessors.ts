import {
    type AbstractType,
    type ExistingProvider,
    type FactoryProvider,
    inject,
    Optional,
    SkipSelf,
    type Type,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type TuiPoint} from '@taiga-ui/core/types';

// TODO: remove in v6 when API is changed and position is no longer optional
interface WithPosition extends TuiAccessor {
    position?(element: HTMLElement): void;
}

export abstract class TuiAccessor {
    public abstract readonly type: string;
}

export abstract class TuiPositionAccessor extends TuiAccessor implements WithPosition {
    public abstract getPosition(rect: DOMRect): TuiPoint;
}

export abstract class TuiRectAccessor extends TuiAccessor {
    public abstract getClientRect(): DOMRect;
}

export function tuiInjectAccessor<T extends TuiAccessor>(
    accessor: AbstractType<T>,
    type: string,
): T {
    return find(inject<readonly T[]>(accessor as any, {self: true}), type);
}

/** TODO: drop fallback in v6 */
export function tuiProvideAccessor<T extends TuiAccessor>(
    provide: AbstractType<T>,
    type: string,
    fallback?: Type<T>,
): FactoryProvider {
    return fallback
        ? {
              provide,
              deps: [[new SkipSelf(), new Optional(), provide], fallback],
              useFactory: tuiFallbackAccessor<T>(type),
          }
        : {
              provide,
              deps: [[new SkipSelf(), provide]],
              useFactory: (accessors: readonly T[]): T => find(accessors, type),
          };
}

/** @deprecated */
export function tuiFallbackAccessor<T extends TuiAccessor>(
    type: string,
): (accessors: readonly T[] | null, fallback: Omit<T, 'type'>) => T {
    return (accessors, fallback) =>
        accessors?.find?.(
            (accessor) => accessor !== fallback && accessor.type === type,
        ) || Object.create(fallback, {type: {value: type}});
}

/** @deprecated */
export function tuiPositionAccessorFor(
    type: string,
    fallback: Type<TuiPositionAccessor>,
): FactoryProvider {
    return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}

/** @deprecated */
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

function find<T extends TuiAccessor>(accessors: readonly T[], type: string): T {
    return [...accessors].reverse().find((accessor) => accessor.type === type)!;
}
