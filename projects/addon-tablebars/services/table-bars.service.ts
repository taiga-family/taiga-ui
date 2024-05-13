/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {Injectable} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, ReplaySubject} from 'rxjs';

import {TuiTableBar} from '../classes/table-bar';
import type {TuiTableBarOptions} from '../interfaces/table-bar-options';

const NO_HOST =
    'Table bars are disabled, enable support by adding TuiTableBarsHostModule to your main app module ' +
    'and tui-table-bars-host component to app template';

@Injectable({
    providedIn: 'root',
})
export class TuiTableBarsService {
    public readonly bar$ = new ReplaySubject<TuiTableBar | null>(1);

    public open(
        content: PolymorpheusContent,
        options?: TuiTableBarOptions,
    ): Observable<never> {
        return new Observable(observer => {
            ngDevMode && console.assert(this.bar$.observed, NO_HOST);

            const tableBar = new TuiTableBar(observer, content, options);

            this.bar$.next(tableBar);

            return () => {
                this.bar$.next(null);
            };
        });
    }
}
