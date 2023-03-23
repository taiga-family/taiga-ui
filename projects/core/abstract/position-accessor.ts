import type {ExistingProvider, FactoryProvider, Type} from '@angular/core';
import {SkipSelf} from '@angular/core';
import type {TuiPoint} from '@taiga-ui/core/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiPositionAccessor {
    abstract readonly type: string;
    abstract getPosition(rect: ClientRect): TuiPoint;
}

export function tuiPositionAccessorFor(type: string): FactoryProvider {
    return {
        provide: TuiPositionAccessor,
        deps: [[new SkipSelf(), TuiPositionAccessor]],
        useFactory: (accessors: readonly TuiPositionAccessor[]) =>
            accessors.find(accessor => accessor.type === type),
    };
}

export function tuiAsPositionAccessor(
    useExisting: Type<TuiPositionAccessor>,
): ExistingProvider {
    return {
        provide: TuiPositionAccessor,
        multi: true,
        useExisting,
    };
}
