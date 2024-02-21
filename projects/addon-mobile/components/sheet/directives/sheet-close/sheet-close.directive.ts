import {Directive, ElementRef, inject, NgZone, Output} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiIfMap, tuiIsFalsy, tuiTypedFromEvent, tuiZonefull} from '@taiga-ui/cdk';
import {distinctUntilChanged, filter, merge, Observable, startWith} from 'rxjs';

import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {TUI_SHEET_CLOSE} from '../../components/sheet-heading/sheet-heading.component';
import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Directive({
    selector: 'tui-sheet[close]',
})
export class TuiSheetCloseDirective {
    private readonly zone = inject(NgZone);
    private readonly dragged$ = inject(TUI_SHEET_DRAGGED);
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly win = inject(WINDOW);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly sheet = inject(TuiSheetComponent);

    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly close: Observable<unknown> = merge(
        tuiTypedFromEvent(this.el, TUI_SHEET_CLOSE),
        this.dragged$.pipe(
            tuiIfMap(() => this.scroll$.pipe(startWith(this.el.scrollTop)), tuiIsFalsy),
            filter(y => this.sheet.item?.closeable && this.shouldClose(y)),
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
