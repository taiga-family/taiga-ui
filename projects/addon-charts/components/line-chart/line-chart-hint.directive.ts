import {
    ContentChildren,
    Directive,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    NgZone,
    QueryList,
    Renderer2,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {TuiLineChartHintContext} from '@taiga-ui/addon-charts/interfaces';
import {
    EMPTY_QUERY,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {HINT_HOVERED_CLASS, TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    startWith,
    takeUntil,
    throttleTime,
} from 'rxjs/operators';

import {TuiLineChartComponent} from './line-chart.component';

@Directive({
    selector: `[tuiLineChartHint]`,
    providers: [TuiDestroyService],
})
export class TuiLineChartHintDirective {
    @ContentChildren(forwardRef(() => TuiLineChartComponent))
    private readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @ContentChildren(forwardRef(() => TuiLineChartComponent), {read: ElementRef})
    private readonly chartsRef: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input(`tuiLineChartHint`)
    @tuiDefaultProp()
    hint: PolymorpheusContent<TuiContextWithImplicit<readonly TuiPoint[]>> = ``;

    constructor(
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        animationFrame$
            .pipe(
                throttleTime(200),
                map(() => !!nativeElement.querySelector(`.${HINT_HOVERED_CLASS}`)),
                startWith(false),
                distinctUntilChanged(),
                filter(v => !v),
                tuiZonefree(ngZone),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                this.charts.forEach(chart => chart.onHovered(NaN));
            });
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    getContext(
        index: number,
        _chart: TuiLineChartComponent,
    ): TuiLineChartHintContext<readonly TuiPoint[]> {
        return this.computeContext(index, this.charts);
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    raise(index: number, _chart: TuiLineChartComponent): void {
        const current = this.charts.map(chart => chart.value[index]);
        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts.forEach(chart => chart.onHovered(index));
        this.chartsRef.forEach(({nativeElement}, index) =>
            this.renderer.setStyle(
                nativeElement,
                `z-index`,
                sorted.indexOf(current[index]),
            ),
        );
    }

    @tuiPure
    private computeContext(
        index: number,
        charts: QueryList<TuiLineChartComponent>,
    ): TuiLineChartHintContext<readonly TuiPoint[]> {
        return {
            $implicit: charts.map(chart => chart.value[index]),
            index,
        };
    }
}
