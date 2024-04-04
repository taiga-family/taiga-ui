import type {ExistingProvider, Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

export abstract class TuiDriver extends Observable<boolean> {
    public abstract readonly type: string;
}

export function tuiAsDriver(driver: Type<TuiDriver>): ExistingProvider {
    return tuiProvide(TuiDriver, driver, true);
}
