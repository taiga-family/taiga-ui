import {Inject, Injectable} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';

import type {TuiSheet} from './sheet';
import {TUI_SHEET_OPTIONS, TuiSheetOptions} from './sheet-options';

@Injectable({
    providedIn: `root`,
})
export class TuiSheetService {
    readonly sheets$ = new BehaviorSubject<Array<TuiSheet<any, any>>>([]);

    constructor(@Inject(TUI_SHEET_OPTIONS) private readonly options: TuiSheetOptions) {}

    open<G>(
        content: PolymorpheusContent<TuiSheet<G>>,
        options: Partial<TuiSheetOptions> = {},
    ): Observable<G> {
        return new Observable($implicit => {
            const completeWith = (result: G): void => {
                $implicit.next(result);
                $implicit.complete();
            };
            const sheet: TuiSheet<any> = {
                ...this.options,
                ...options,
                content,
                completeWith,
                $implicit,
                scroll$: EMPTY,
            };

            this.sheets$.next([...this.sheets$.value, sheet]);

            return () => {
                this.sheets$.next(this.sheets$.value.filter(item => item !== sheet));
            };
        });
    }
}
