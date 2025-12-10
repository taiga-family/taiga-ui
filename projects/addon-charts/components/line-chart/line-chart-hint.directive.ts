import {
    type AfterViewInit,
    contentChildren,
    DestroyRef,
    Directive,
    ElementRef,
    forwardRef,
    inject,
    Input,
    NgZone,
    Renderer2,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
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
    private readonly charts = contentChildren(forwardRef(() => TuiLineChart));

    private readonly chartsRef = contentChildren(
        forwardRef(() => TuiLineChart),
        {read: ElementRef},
    );

    private readonly renderer = inject(Renderer2);
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);

    @Input('tuiLineChartHint')
    public hint: PolymorpheusContent<TuiContext<readonly TuiPoint[]>>;

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
        return this.computeContext(...this.charts().map(({value}) => value))[index] || [];
    }

    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    public raise(index: number, _chart: TuiLineChart): void {
        const current = this.charts().map(
            (chart) => chart.value[index] ?? ([0, 0] as const),
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

    @tuiPure
    private computeContext(
        ...values: ReadonlyArray<readonly TuiPoint[]>
    ): ReadonlyArray<readonly TuiPoint[]> {
        return (values[0] || []).map((_, index) =>
            values.map((value) => value[index] ?? [0, 0]),
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
