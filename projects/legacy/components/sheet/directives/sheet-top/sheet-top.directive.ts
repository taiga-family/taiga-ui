import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WINDOW} from '@ng-web-apis/common';
import {tuiClamp, tuiInjectElement} from '@taiga-ui/cdk';
import {map} from 'rxjs';

import {TUI_SHEET, TUI_SHEET_SCROLL} from '../../sheet-tokens';

// So that borders get rounded when image is visible for at least 10px
const OFFSET = 10;

@Directive({
    selector: '[tuiSheetTop]',
})
export class TuiSheetTopDirective {
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly component = inject(TUI_SHEET);
    private readonly win = inject(WINDOW);
    private readonly el = tuiInjectElement();

    protected readonly rounded$ = this.scroll$
        .pipe(map(y => y < this.stop + OFFSET))
        .pipe(takeUntilDestroyed())
        .subscribe(add =>
            add
                ? this.el.classList.add('_rounded')
                : this.el.classList.remove('_rounded'),
        );

    protected readonly transform$ = this.scroll$
        .pipe(
            map(y => `translateY(${this.getY(y)}%) scaleX(-1)`),
            takeUntilDestroyed(),
        )
        .subscribe(transform => this.el.style.setProperty('transform', transform));

    protected readonly clickthrough$ = this.scroll$
        .pipe(
            map(y => !!Math.round(this.getY(y))),
            takeUntilDestroyed(),
        )
        .subscribe(add =>
            add
                ? this.el.classList.add('_clickthrough')
                : this.el.classList.remove('_clickthrough'),
        );

    @Input('tuiSheetTop')
    public stop = 0;

    private getY(scrollTop: number): number {
        const value = scrollTop - this.stop;
        const total = this.win.innerHeight - this.component.item.offset - this.stop;

        return this.stop && tuiClamp(100 - (value / total) * 100, 0, 100);
    }
}
