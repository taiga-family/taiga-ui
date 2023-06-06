import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {tuiGetNativeFocused} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';

import {TuiSheet} from './sheet';
import {TUI_SHEET_OPTIONS, TuiSheetOptions} from './sheet-options';

@Injectable({
    providedIn: `root`,
})
export class TuiSheetService {
    readonly sheets$ = new BehaviorSubject<Array<TuiSheet<any, any>>>([]);

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(TUI_SHEET_OPTIONS) private readonly options: TuiSheetOptions,
    ) {}

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
            const focused = tuiGetNativeFocused(this.doc);

            if (focused instanceof HTMLElement && sheet.overlay) {
                focused.blur();
            }

            this.sheets$.next([...this.sheets$.value, sheet]);

            return () => {
                this.sheets$.next(this.sheets$.value.filter(item => item !== sheet));
            };
        });
    }
}
