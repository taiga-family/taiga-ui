import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiZonefull, typedFromEvent} from '@taiga-ui/cdk';
import {EMPTY, merge, Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
import {TUI_SHEET_CLOSE} from '../../components/sheet-heading/sheet-heading.component';
import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {
    TUI_SHEET_DRAGGED,
    TUI_SHEET_SCROLL,
} from '../../components/sheet/sheet.providers';

// @dynamic
@Directive({
    selector: 'tui-sheet[close]',
})
export class TuiSheetCloseDirective {
    @Output()
    readonly close = merge(
        typedFromEvent(this.elementRef.nativeElement, TUI_SHEET_CLOSE),
        this.dragged$.pipe(
            switchMap(dragged => (dragged ? EMPTY : this.scroll$)),
            filter(y => this.sheet.item.closeable && this.shouldClose(y)),
            tuiZonefull(this.ngZone),
        ),
    );

    constructor(
        @Inject(TUI_SHEET_DRAGGED) private readonly dragged$: Observable<boolean>,
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TuiSheetComponent) private readonly sheet: TuiSheetComponent<unknown>,
    ) {}

    private shouldClose(scrollTop: number): boolean {
        const min = Math.min(
            this.elementRef.nativeElement.scrollHeight - this.windowRef.innerHeight,
            this.sheet.stops[0] || Infinity,
        );

        return scrollTop < min / 2;
    }
}
