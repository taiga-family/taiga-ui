import {ExistingProvider, Type} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class TuiDriver extends Observable<boolean> {}

export function tuiAsDriver(useExisting: Type<TuiDriver>): ExistingProvider {
    return {
        provide: TuiDriver,
        useExisting,
    };
}
