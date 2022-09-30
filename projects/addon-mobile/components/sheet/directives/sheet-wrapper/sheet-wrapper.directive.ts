import {ContentChild, Directive, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiClamp, tuiPure} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {processDragged} from '../../ios.hacks';
import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

// Safety offset for shadow
const OFFSET = 16;

@Directive({
    selector: `[tuiSheetWrapper]`,
    host: {
        '[$.class._overlay]': `overlay$`,
        '($.class._overlay)': `overlay$`,
        '[$.class._visible]': `visible$`,
        '($.class._visible)': `visible$`,
        '[$.style.height.px]': `height$`,
        '($.style.height.px)': `height$`,
    },
})
export class TuiSheetWrapperDirective {
    @ContentChild(TuiSheetComponent)
    private readonly sheet?: TuiSheetComponent<unknown>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_DRAGGED})
    private readonly dragged$!: Observable<boolean>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_SCROLL})
    private readonly scroll$!: Observable<number>;

    @Input()
    tuiSheetWrapper = 16;

    // Trying to get overflow: visible as early as possible for Safari
    touched = false;

    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    @tuiPure
    get overlay$(): Observable<boolean> {
        return this.scroll$.pipe(
            map(y => y + 16 > this.windowRef.innerHeight - this.tuiSheetWrapper),
        );
    }

    @tuiPure
    get visible$(): Observable<boolean> {
        return processDragged(this.dragged$, this.scroll$);
    }

    @tuiPure
    get height$(): Observable<number | null> {
        return this.scroll$.pipe(map(this.getHeight.bind(this)));
    }

    private getHeight(value: number): number | null {
        return this.sheet?.context.overlay
            ? null
            : tuiClamp(
                  this.withImage(value) + OFFSET,
                  OFFSET,
                  this.windowRef.innerHeight,
              );
    }

    private withImage(value: number): number {
        return !this.sheet?.imageStop || Math.floor(value) > this.sheet.imageStop
            ? value
            : value - this.sheet.imageHeight;
    }
}
