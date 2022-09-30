import {
    AfterContentInit,
    ContentChildren,
    Directive,
    forwardRef,
    Inject,
    Input,
    NgZone,
    QueryList,
} from '@angular/core';
import {tuiLineChartDrivers} from '@taiga-ui/addon-charts/components/line-chart';
import {
    EMPTY_QUERY,
    TuiContextWithImplicit,
    TuiDay,
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

import {TuiLineDaysChartComponent} from './line-days-chart.component';

// TODO: Consider extending TuiLineChartHintDirective
@Directive({
    selector: `[tuiLineChartHint]`,
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiLineDaysChartHintDirective implements AfterContentInit {
    @ContentChildren(forwardRef(() => TuiLineDaysChartComponent))
    private readonly charts: QueryList<TuiLineDaysChartComponent> = EMPTY_QUERY;

    @Input(`tuiLineChartHint`)
    @tuiDefaultProp()
    hint: PolymorpheusContent<TuiContextWithImplicit<readonly TuiPoint[]>> = ``;

    constructor(
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

    getContext(day: TuiDay): TuiContextWithImplicit<ReadonlyArray<[TuiDay, number]>> {
        return this.computeContext(day, this.charts);
    }

    raise(day: TuiDay): void {
        const current = this.charts
            .map(({value}) => find(value, day))
            .filter(([_, value]) => !isNaN(value));
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
