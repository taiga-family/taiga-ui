import {
    AfterContentInit,
    ContentChildren,
    Directive,
    forwardRef,
    inject,
    Input,
    NgZone,
    QueryList,
} from '@angular/core';
import {tuiLineChartDrivers} from '@taiga-ui/addon-charts/components/line-chart';
import {
    EMPTY_QUERY,
    TuiContext,
    TuiDay,
    TuiDestroyService,
    TuiHoveredService,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, filter, takeUntil} from 'rxjs';

import {TuiLineDaysChartComponent} from './line-days-chart.component';

function find(value: ReadonlyArray<[TuiDay, number]>, current: TuiDay): [TuiDay, number] {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}

// TODO: Consider extending TuiLineChartHintDirective
@Directive({
    selector: '[tuiLineChartHint]',
    providers: [TuiDestroyService, TuiHoveredService],
})
export class TuiLineDaysChartHintDirective implements AfterContentInit {
    @ContentChildren(forwardRef(() => TuiLineDaysChartComponent))
    private readonly charts: QueryList<TuiLineDaysChartComponent> = EMPTY_QUERY;

    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);

    @Input('tuiLineChartHint')
    public hint: PolymorpheusContent<TuiContext<readonly TuiPoint[]>>;

    public ngAfterContentInit(): void {
        combineLatest([
            ...this.charts.map(({charts}) => tuiLineChartDrivers(charts)),
            this.hovered$,
        ])
            .pipe(
                filter(result => !result.some(Boolean)),
                tuiZonefree(this.zone),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.charts.forEach(chart => chart.onHovered(NaN));
            });
    }

    public getContext(day: TuiDay): ReadonlyArray<[TuiDay, number]> {
        return this.getMap(...this.charts.map(({value}) => value)).get(String(day)) || [];
    }

    public raise(day: TuiDay): void {
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
    private getMap(
        ...values: Array<ReadonlyArray<[TuiDay, number]>>
    ): Map<string, ReadonlyArray<[TuiDay, number]>> {
        return (values[0] || []).reduce(
            (map, [day]) =>
                map.set(
                    String(day),
                    values.map(value => find(value, day)),
                ),
            new Map<string, ReadonlyArray<[TuiDay, number]>>(),
        );
    }
}
