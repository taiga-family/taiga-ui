import type {AfterViewInit, QueryList} from '@angular/core';
import {
    ContentChildren,
    Directive,
    ElementRef,
    forwardRef,
    inject,
    Input,
    NgZone,
    Renderer2,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    TuiHoveredService,
    tuiPure,
    tuiQueryListChanges,
    tuiZonefree,
} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {
    combineLatest,
    distinctUntilChanged,
    filter,
    map,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs';

import {TuiLineChartComponent} from './line-chart.component';

@Directive({
    selector: '[tuiLineChartHint]',
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiLineChartHintDirective implements AfterViewInit {
    @ContentChildren(forwardRef(() => TuiLineChartComponent))
    private readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @ContentChildren(forwardRef(() => TuiLineChartComponent), {read: ElementRef})
    private readonly chartsRef: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly renderer = inject(Renderer2);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);

    @Input('tuiLineChartHint')
    public hint: PolymorpheusContent<TuiContext<readonly TuiPoint[]>>;

    public ngAfterViewInit(): void {
        combineLatest([tuiLineChartDrivers(this.charts), this.hovered$])
            .pipe(
                filter(result => !result.some(Boolean)),
                tuiZonefree(this.zone),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.charts.forEach(chart => chart.onHovered(NaN));
            });
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    public getContext(index: number, _chart: TuiLineChartComponent): readonly TuiPoint[] {
        return this.computeContext(...this.charts.map(({value}) => value))[index];
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    public raise(index: number, _chart: TuiLineChartComponent): void {
        const current = this.charts.map(chart => chart.value[index]);
        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts.forEach(chart => chart.onHovered(index));
        this.chartsRef.forEach(({nativeElement}, index) =>
            this.renderer.setStyle(
                nativeElement,
                'z-index',
                sorted.indexOf(current[index]),
            ),
        );
    }

    @tuiPure
    private computeContext(
        ...values: ReadonlyArray<readonly TuiPoint[]>
    ): ReadonlyArray<readonly TuiPoint[]> {
        return (values[0] || []).map((_, index) => values.map(value => value[index]));
    }
}

export function tuiLineChartDrivers(
    charts: QueryList<{drivers: QueryList<Observable<boolean>>}>,
): Observable<boolean> {
    return combineLatest(
        charts.map(({drivers}) =>
            tuiQueryListChanges(drivers).pipe(
                map(drivers => drivers.map(driver => driver.pipe(startWith(false)))),
            ),
        ),
    ).pipe(
        map(all => all.reduce((acc, drivers) => acc.concat(drivers), [])),
        switchMap(drivers => combineLatest(drivers)),
        map(values => values.some(Boolean)),
        distinctUntilChanged(),
    );
}
