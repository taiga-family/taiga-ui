import {
    type AfterViewInit,
    computed,
    contentChildren,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
    input,
    NgZone,
    Renderer2,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {type TuiPoint} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {
    combineLatest,
    distinctUntilChanged,
    filter,
    map,
    type Observable,
    startWith,
    switchMap,
} from 'rxjs';

import {TuiLineChart} from './line-chart.component';

@Directive({
    selector: '[tuiLineChartHint]',
    providers: [TuiHoveredService],
})
export class TuiLineChartHint implements AfterViewInit {
    private readonly charts = contentChildren(TuiLineChart);
    private readonly chartsRef = contentChildren(TuiLineChart, {read: ElementRef});
    private readonly renderer = inject(Renderer2);
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);

    private readonly computedContext = computed<ReadonlyArray<readonly TuiPoint[]>>(
        (values = this.charts().map(({value}) => value())) =>
            (values[0] || []).map((_, index) =>
                values.map((value) => value[index] ?? [0, 0]),
            ),
    );

    public readonly hint = input<PolymorpheusContent<TuiContext<readonly TuiPoint[]>>>(
        '',
        {alias: 'tuiLineChartHint'},
    );

    public ngAfterViewInit(): void {
        combineLatest([tuiLineChartDrivers(this.charts()), this.hovered$])
            .pipe(
                filter((result) => !result.some(Boolean)),
                tuiZonefree(this.zone),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.charts().forEach((chart) => chart.onHovered(NaN));
            });
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    public getContext(index: number, _chart: TuiLineChart): readonly TuiPoint[] {
        return this.computedContext()[index] || [];
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    public raise(index: number, _chart: TuiLineChart): void {
        const current = this.charts().map(
            (chart) => chart.value()[index] ?? ([0, 0] as const),
        );

        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts().forEach((chart) => chart.onHovered(index));
        this.chartsRef().forEach(({nativeElement}, index) =>
            this.renderer.setStyle(
                nativeElement,
                'z-index',
                sorted.indexOf(current[index] ?? [0, 0]),
            ),
        );
    }
}

export function tuiLineChartDrivers(
    charts: ReadonlyArray<{drivers$: Observable<ReadonlyArray<Observable<boolean>>>}>,
): Observable<boolean> {
    return combineLatest(
        charts.map(({drivers$}) =>
            drivers$.pipe(
                map((drivers) => drivers.map((driver) => driver.pipe(startWith(false)))),
            ),
        ),
    ).pipe(
        map((all) => all.reduce((acc, drivers) => acc.concat(drivers), [])),
        switchMap((drivers) => combineLatest(drivers)),
        map((values) => values.some(Boolean)),
        distinctUntilChanged(),
    );
}
