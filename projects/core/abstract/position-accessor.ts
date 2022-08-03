import {ExistingProvider, Type} from '@angular/core';
import {TuiPoint} from '@taiga-ui/core/types';

export abstract class TuiPositionAccessor {
    abstract getPosition(rect: ClientRect): TuiPoint;
}

export function tuiAsPositionAccessor(
    useExisting: Type<TuiPositionAccessor>,
): ExistingProvider {
    return {
        provide: TuiPositionAccessor,
        useExisting,
    };
}
