import {ContentChild, Directive, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TuiSheetComponent} from '../../components/sheet/sheet.component';
import {
    TUI_SHEET_DRAGGED,
    TUI_SHEET_SCROLL,
} from '../../components/sheet/sheet.providers';

@Directive({
    selector: '[tuiSheetWrapper]',
    host: {
        '[$.class._overlay]': 'overlay$',
        '($.class._overlay)': 'overlay$',
        '[$.class._dragged]': 'dragged$',
        '($.class._dragged)': 'dragged$',
        '[$.style.height.px]': 'height$',
        '($.style.height.px)': 'height$',
    },
})
export class TuiSheetWrapperDirective {
    @ContentChild(TuiSheetComponent)
    readonly sheet?: TuiSheetComponent<unknown>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_DRAGGED})
    readonly dragged$!: Observable<boolean>;

    @ContentChild(TuiSheetComponent, {read: TUI_SHEET_SCROLL})
    private readonly scroll$!: Observable<number>;

    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    @tuiPure
    get overlay$(): Observable<boolean> {
        return this.scroll$.pipe(map(y => y + 16 > this.windowRef.innerHeight - 16));
    }

    @tuiPure
    get height$(): Observable<number> {
        return this.scroll$.pipe(map(this.getHeight.bind(this)));
    }

    private getHeight(value: number): number {
        return Math.min(this.withImage(value) + 16, this.windowRef.innerHeight - 16);
    }

    private withImage(value: number): number {
        return !this.sheet?.imageStop || Math.floor(value) > this.sheet.imageStop
            ? value
            : value - this.sheet.imageHeight;
    }
}
