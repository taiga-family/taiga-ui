import {ExistingProvider, FactoryProvider, Optional, SkipSelf, Type} from '@angular/core';
import {TuiPoint} from '@taiga-ui/core/types';

import {tuiFallbackAccessor} from './accessors';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiPositionAccessor {
    abstract readonly type: string;
    abstract getPosition(rect: ClientRect): TuiPoint;
}

// TODO: Make fallback required
export function tuiPositionAccessorFor(
    type: string,
    fallback?: Type<TuiPositionAccessor>,
): FactoryProvider {
    return {
        provide: TuiPositionAccessor,
        deps: fallback
            ? [[new SkipSelf(), new Optional(), TuiPositionAccessor], fallback]
            : [[new SkipSelf(), new Optional(), TuiPositionAccessor]],
        useFactory: tuiFallbackAccessor<TuiPositionAccessor>(type),
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
