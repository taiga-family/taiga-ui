import type {ExistingProvider, Type} from '@angular/core';
import {Observable} from 'rxjs';

// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiDriver extends Observable<boolean> {}

export function tuiAsDriver(useExisting: Type<TuiDriver>): ExistingProvider {
    return {
        provide: TuiDriver,
        useExisting,
    };
}
