import {ExistingProvider, FactoryProvider, Optional, SkipSelf, Type} from '@angular/core';
import {TuiPoint} from '@taiga-ui/core/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiPositionAccessor {
    abstract readonly type: string;
    abstract getPosition(rect: ClientRect): TuiPoint;
}

export function tuiPositionAccessorFor(
    type: string,
    fallback: Type<TuiPositionAccessor>,
): FactoryProvider {
    return {
        provide: TuiPositionAccessor,
        deps: [[new SkipSelf(), new Optional(), TuiPositionAccessor], fallback],
        useFactory: (
            accessors: readonly TuiPositionAccessor[] | null,
            accessor: TuiPositionAccessor,
        ) => accessors?.find(accessor => accessor.type === type) || accessor,
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
