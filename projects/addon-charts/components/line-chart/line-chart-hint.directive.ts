import {
    AfterContentInit,
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
import {TuiLineChartHintContext} from '@taiga-ui/addon-charts/interfaces';
import {
    EMPTY_QUERY,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiDestroyService,
    TuiHoveredService,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, Observable} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';

import type {TuiLineChartComponent} from './line-chart.component';
import {tuiLineChartDrivers} from './line-chart.drivers';
import {TuiLineChartToken} from './line-chart.token';

@Directive({
    selector: `[tuiLineChartHint]`,
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiLineChartHintDirective implements AfterContentInit {
    @ContentChildren(forwardRef(() => TuiLineChartToken))
    private readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @ContentChildren(forwardRef(() => TuiLineChartToken), {read: ElementRef})
    private readonly chartsRef: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input(`tuiLineChartHint`)
    @tuiDefaultProp()
    hint: PolymorpheusContent<TuiContextWithImplicit<readonly TuiPoint[]>> = ``;

    constructor(
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
    ) {}

    ngAfterContentInit(): void {
        combineLatest([tuiLineChartDrivers(this.charts), this.hovered$])
            .pipe(
                map(([drivers, hovered]) => !drivers && !hovered),
                filter(Boolean),
                tuiZonefree(this.ngZone),
                takeUntil(this.destroy$),
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
