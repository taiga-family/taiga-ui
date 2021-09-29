import {Directive, ElementRef, Inject, Input, NgZone} from '@angular/core';
import {clamp, tuiDefaultProp} from '@taiga-ui/cdk';
import {tuiZonefulMap} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {TUI_SHEET_SCROLL} from '../sheet.providers';

@Directive({
    selector: '[tuiSheetTop]',
    host: {
        '[$.style.transform]': 'transform$',
        '($.style.transform)': 'transform$',
        '[$.class._rounded]': 'rounded$',
        '($.class._rounded)': 'rounded$',
    },
})
export class TuiSheetTopDirective {
    @Input()
    @tuiDefaultProp()
    tuiSheetTop = 0;

    readonly transform$ = this.scroll$.pipe(
        filter(() => !!this.tuiSheetTop),
        tuiZonefulMap(y => `translate3d(0, ${this.getTransform(y)}%, 0)`, this.ngZone),
    );

    readonly rounded$ = this.scroll$.pipe(
        filter(() => !!this.tuiSheetTop),
        tuiZonefulMap(y => y < this.tuiSheetTop + 10, this.ngZone),
    );

    constructor(
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {}

    private getTransform(scrollTop: number): number {
        const stop = this.tuiSheetTop;
        const value = scrollTop - stop;
        const total = this.elementRef.nativeElement.offsetTop - stop;

        return clamp(100 - (value / total) * 100, 0, 100);
    }
}
