import {Injectable} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, Subject} from 'rxjs';
import {TableBar} from '../classes/table-bar';
import {TuiTableBarOptions} from '../interfaces/table-bar-options';

const NO_HOST =
    'Table bars are disabled, enable support by adding TuiTableBarsHostModule to your main app module ' +
    'and tui-table-bars-host component to app template';

@Injectable({
    providedIn: 'root',
})
export class TuiTableBarsService {
    /** @internal */
    readonly open$ = new Subject<TableBar>();

    /** @internal */
    readonly close$ = new Subject<TableBar>();

    showTableBar(
        content: PolymorpheusContent,
        options?: TuiTableBarOptions,
    ): Observable<never> {
        tuiAssert.assert(!!this.open$.observers.length, NO_HOST);

        return this.createTableBar(content, options);
    }

    private createTableBar(
        content: PolymorpheusContent,
        options?: TuiTableBarOptions,
    ): Observable<never> {
        return new Observable(observer => {
            const tableBar = new TableBar(observer, content, options);

            this.open$.next(tableBar);

            return () => {
                this.close$.next(tableBar);
            };
        });
    }
}
