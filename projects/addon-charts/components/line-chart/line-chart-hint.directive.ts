import type {AfterContentInit} from '@angular/core';
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
import type {TuiLineChartHintContext} from '@taiga-ui/addon-charts/interfaces';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiDestroyService,
    TuiHoveredService,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, startWith, takeUntil} from 'rxjs/operators';

import {TuiLineChartComponent} from './line-chart.component';

@Directive({
    selector: `[tuiLineChartHint]`,
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiLineChartHintDirective implements AfterContentInit {
    @ContentChildren(forwardRef(() => TuiLineChartComponent))
    private readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @ContentChildren(forwardRef(() => TuiLineChartComponent), {read: ElementRef})
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

export function tuiLineChartDrivers(
    charts: QueryList<{drivers: QueryList<Observable<boolean>>}>,
): Observable<boolean> {
    return combineLatest(
        charts
            .map(({drivers}) => drivers.map(driver => driver.pipe(startWith(false))))
            .reduce((acc, drivers) => acc.concat(drivers), []),
    ).pipe(
        map(values => values.some(Boolean)),
        distinctUntilChanged(),
    );
}
