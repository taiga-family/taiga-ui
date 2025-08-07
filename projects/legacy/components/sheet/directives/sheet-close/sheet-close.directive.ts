import {Directive, inject, NgZone, Output} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiIfMap, tuiTypedFromEvent, tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFalsy} from '@taiga-ui/cdk/utils/miscellaneous';
import {distinctUntilChanged, filter, merge, type Observable, startWith} from 'rxjs';

import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {TUI_SHEET_CLOSE} from '../../components/sheet-heading/sheet-heading.component';
import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Directive({
    standalone: false,
    selector: 'tui-sheet[close]',
})
export class TuiSheetCloseDirective {
    private readonly zone = inject(NgZone);
    private readonly dragged$ = inject(TUI_SHEET_DRAGGED);
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly win = inject(WA_WINDOW);
    private readonly el = tuiInjectElement();
    private readonly sheet = inject(TuiSheetComponent);

    @Output()
    public readonly close: Observable<unknown> = merge(
        tuiTypedFromEvent(this.el, TUI_SHEET_CLOSE),
        this.dragged$.pipe(
            tuiIfMap(() => this.scroll$.pipe(startWith(this.el.scrollTop)), tuiIsFalsy),
            filter((y) => this.sheet.item?.closeable && this.shouldClose(y)),
            distinctUntilChanged(),
            tuiZonefull(this.zone),
        ),
    );

    private shouldClose(scrollTop: number): boolean {
        const height = Math.min(
            this.win.innerHeight,
            this.el.scrollHeight - this.win.innerHeight,
        );
        const min = Math.min(height, this.sheet.stops[0] || Infinity);

        return scrollTop < min / 2;
    }
}
