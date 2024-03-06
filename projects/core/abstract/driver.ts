import type {ExistingProvider, Type} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class TuiDriver extends Observable<boolean> {
    public abstract readonly type: string;
}

export function tuiAsDriver(useExisting: Type<TuiDriver>): ExistingProvider {
    return {
        provide: TuiDriver,
        multi: true,
        useExisting,
    };
}
