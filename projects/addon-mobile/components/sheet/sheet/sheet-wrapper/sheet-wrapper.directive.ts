import {ContentChild, Directive, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {TuiSheetComponent} from '../sheet.component';
import {TUI_SHEET_SCROLL} from '../sheet.providers';

@Directive({
    selector: '[tuiSheetWrapper]',
    host: {
        '[class._clickthrough]': 'sheet?.clickthrough',
        '[$.class._overlay]': 'overlay$',
        '($.class._overlay)': 'overlay$',
        '[$.style.height.px]': 'height$',
        '($.style.height.px)': 'height$',
    },
})
export class TuiSheetWrapperDirective {
    @ContentChild(TuiSheetComponent)
    readonly sheet?: TuiSheetComponent<unknown>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_SCROLL})
    private readonly scroll$!: Observable<number>;

    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    @tuiPure
    get overlay$(): Observable<boolean> {
        return this.scroll$.pipe(map(y => y + 32 > this.windowRef.innerHeight));
    }

    /**
     * Safari does not allow to toggle pointer-events on the fly to
     * determine what container is going to scroll on subsequent
     * touchmove, so we have to hack our way through it
     */
    @tuiPure
    get height$(): Observable<number> {
        return this.scroll$.pipe(
            filter(() => !!this.sheet?.clickthrough),
            map(value => this.withImage(value) + 16),
        );
    }

    private withImage(value: number): number {
        return !this.sheet?.imageStop || value > this.sheet.imageStop
            ? value
            : value - this.sheet.imageHeight;
    }
}
