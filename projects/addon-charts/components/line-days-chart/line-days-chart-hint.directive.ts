import type {AfterContentInit, QueryList} from '@angular/core';
import {
    ContentChildren,
    Directive,
    forwardRef,
    Inject,
    Input,
    NgZone,
    Self,
} from '@angular/core';
import {tuiLineChartDrivers} from '@taiga-ui/addon-charts/components/line-chart';
import type {TuiContextWithImplicit, TuiDay} from '@taiga-ui/cdk';
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
import type {Observable} from 'rxjs';
import {combineLatest} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiLineDaysChartComponent} from './line-days-chart.component';

// TODO: Consider extending TuiLineChartHintDirective
@Directive({
    selector: '[tuiLineChartHint]',
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiLineDaysChartHintDirective implements AfterContentInit {
    @ContentChildren(forwardRef(() => TuiLineDaysChartComponent))
    private readonly charts: QueryList<TuiLineDaysChartComponent> = EMPTY_QUERY;

    @Input('tuiLineChartHint')
    @tuiDefaultProp()
    hint: PolymorpheusContent<TuiContextWithImplicit<readonly TuiPoint[]>> = '';

    constructor(
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
    ) {}

    ngAfterContentInit(): void {
        combineLatest([
            ...this.charts.map(({charts}) => tuiLineChartDrivers(charts)),
            this.hovered$,
        ])
            .pipe(
                filter(result => !result.some(Boolean)),
                tuiZonefree(this.ngZone),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.charts.forEach(chart => chart.onHovered(NaN));
            });
    }

    getContext(day: TuiDay): TuiContextWithImplicit<ReadonlyArray<[TuiDay, number]>> {
        return this.computeContext(day, this.charts);
    }

    raise(day: TuiDay): void {
        const current = this.charts
            .map(({value}) => find(value, day))
            .filter(([_, value]) => !Number.isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts.forEach((chart, index) => {
            chart.onHovered(day);
            chart.zIndex = Math.max(sorted.indexOf(current[index]), 0);
        });
    }

    @tuiPure
    private computeContext(
        day: TuiDay,
        charts: QueryList<TuiLineDaysChartComponent>,
    ): TuiContextWithImplicit<ReadonlyArray<[TuiDay, number]>> {
        return {
            $implicit: charts.map(({value}) => find(value, day)),
        };
    }
}

function find(value: ReadonlyArray<[TuiDay, number]>, current: TuiDay): [TuiDay, number] {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}
