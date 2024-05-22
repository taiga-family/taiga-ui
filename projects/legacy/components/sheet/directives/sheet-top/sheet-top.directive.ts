import {Directive, inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiClamp} from '@taiga-ui/cdk';
import {map} from 'rxjs';

import {TUI_SHEET, TUI_SHEET_SCROLL} from '../../sheet-tokens';

// So that borders get rounded when image is visible for at least 10px
const OFFSET = 10;

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
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly component = inject(TUI_SHEET);
    private readonly win = inject(WINDOW);

    @Input('tuiSheetTop')
    public stop = 0;

    protected readonly transform$ = this.scroll$.pipe(
        map(y => `translateY(${this.getY(y)}%) scaleX(-1)`),
    );

    protected readonly rounded$ = this.scroll$.pipe(map(y => y < this.stop + OFFSET));

    protected readonly clickthrough$ = this.scroll$.pipe(
        map(y => !!Math.round(this.getY(y))),
    );

    private getY(scrollTop: number): number {
        const value = scrollTop - this.stop;
        const total = this.win.innerHeight - this.component.item.offset - this.stop;

        return this.stop && tuiClamp(100 - (value / total) * 100, 0, 100);
    }
}
