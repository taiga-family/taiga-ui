import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiIfMap, tuiIsFalsy, tuiTypedFromEvent, tuiZonefull} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';
import {merge, Observable, timer} from 'rxjs';
import {distinctUntilChanged, filter, startWith, switchMap} from 'rxjs/operators';

import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {TUI_SHEET_CLOSE} from '../../components/sheet-heading/sheet-heading.component';
import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Directive({
    selector: 'tui-sheet[close]',
})
export class TuiSheetCloseDirective {
    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly close: Observable<unknown> = merge(
        tuiTypedFromEvent(this.el.nativeElement, TUI_SHEET_CLOSE),
        timer(this.duration).pipe(
            switchMap(() => this.dragged$),
            startWith(false),
            tuiIfMap(
                () => this.scroll$.pipe(startWith(this.el.nativeElement.scrollTop)),
                tuiIsFalsy,
            ),
            filter(y => this.sheet.item?.closeable && this.shouldClose(y)),
            distinctUntilChanged(),
            tuiZonefull(this.ngZone),
        ),
    );

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TUI_SHEET_DRAGGED) private readonly dragged$: Observable<boolean>,
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(WINDOW) private readonly win: Window,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiSheetComponent) private readonly sheet: TuiSheetComponent<unknown>,
    ) {}

    private shouldClose(scrollTop: number): boolean {
        const height = Math.min(
            this.win.innerHeight,
            this.el.nativeElement.scrollHeight - this.win.innerHeight,
        );
        const min = Math.min(height, this.sheet.stops[0] || Infinity);

        return scrollTop < min / 2;
    }
}
