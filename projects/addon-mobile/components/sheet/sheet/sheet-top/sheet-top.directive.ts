import {Directive, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {clamp, tuiDefaultProp} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TUI_SHEET_SCROLL} from '../sheet.providers';

// So that borders get rounded when image is visible for at least 10px
const OFFSET = 16;

// @dynamic
@Directive({
    selector: '[tuiSheetTop]',
    host: {
        '[$.style.transform]': 'transform$',
        '($.style.transform)': 'transform$',
        '[$.class._rounded]': 'rounded$',
        '($.class._rounded)': 'rounded$',
        '[$.class._clickthrough]': 'clickthrough$',
        '($.class._clickthrough)': 'clickthrough$',
    },
})
export class TuiSheetTopDirective {
    @Input('tuiSheetTop')
    @tuiDefaultProp()
    stop = 0;

    readonly transform$ = this.scroll$.pipe(map(y => `translateY(${this.getY(y)}%)`));

    readonly rounded$ = this.scroll$.pipe(map(y => y < this.stop + OFFSET));

    readonly clickthrough$ = this.scroll$.pipe(map(y => !!Math.round(this.getY(y))));

    constructor(
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(WINDOW) private readonly windowRef: Window,
    ) {}

    private getY(scrollTop: number): number {
        const value = scrollTop - this.stop;
        const total = this.windowRef.innerHeight - 16 - this.stop;

        return this.stop && clamp(100 - (value / total) * 100, 0, 100);
    }
}
