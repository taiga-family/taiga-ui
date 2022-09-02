import type {ExistingProvider, Type} from '@angular/core';
import type {TuiPoint} from '@taiga-ui/core/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
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
