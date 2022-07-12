import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiZonefull, typedFromEvent} from '@taiga-ui/cdk';
import {EMPTY, merge, Observable} from 'rxjs';
import {distinctUntilChanged, filter, startWith, switchMap} from 'rxjs/operators';

import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {TUI_SHEET_CLOSE} from '../../components/sheet-heading/sheet-heading.component';
import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

// @dynamic
@Directive({
    selector: `tui-sheet[close]`,
})
export class TuiSheetCloseDirective {
    @Output()
    readonly close: Observable<unknown> = merge(
        typedFromEvent(this.elementRef.nativeElement, TUI_SHEET_CLOSE),
        this.dragged$.pipe(
            startWith(false),
            switchMap(dragged =>
                dragged
                    ? EMPTY
                    : this.scroll$.pipe(
                          startWith(this.elementRef.nativeElement.scrollTop),
                      ),
            ),
            filter(y => this.sheet.item?.closeable && this.shouldClose(y)),
            distinctUntilChanged(),
            tuiZonefull(this.ngZone),
        ),
    );

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_SHEET_DRAGGED) private readonly dragged$: Observable<boolean>,
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiSheetComponent) private readonly sheet: TuiSheetComponent<unknown>,
    ) {}

    private shouldClose(scrollTop: number): boolean {
        const height = Math.min(
            this.windowRef.innerHeight,
            this.elementRef.nativeElement.scrollHeight - this.windowRef.innerHeight,
        );
        const min = Math.min(height, this.sheet.stops[0] || Infinity);

        return scrollTop < min / 2;
    }
}
