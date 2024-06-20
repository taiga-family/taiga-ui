import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGetNativeFocused} from '@taiga-ui/cdk/utils/focus';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';

import type {TuiSheet} from './sheet';
import type {TuiSheetOptions} from './sheet-options';
import {TUI_SHEET_OPTIONS} from './sheet-options';

/**
 * @deprecated: use {@link TuiSheetDialogService}
 */
@Injectable({
    providedIn: 'root',
})
export class TuiSheetService {
    private readonly doc = inject(DOCUMENT);
    private readonly options = inject<TuiSheetOptions>(TUI_SHEET_OPTIONS);
    public readonly sheets$ = new BehaviorSubject<Array<TuiSheet<any, any>>>([]);

    public open<G>(
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

            if (tuiIsHTMLElement(focused) && sheet.overlay) {
                focused.blur();
            }

            this.sheets$.next([...this.sheets$.value, sheet]);

            return () => {
                this.sheets$.next(this.sheets$.value.filter(item => item !== sheet));
            };
        });
    }
}
