import {
    type AfterContentInit,
    ContentChildren,
    DestroyRef,
    Directive,
    forwardRef,
    inject,
    Input,
    NgZone,
    type QueryList,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiLineChartDrivers} from '@taiga-ui/addon-charts/components/line-chart';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiPoint} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {combineLatest, filter} from 'rxjs';

import {TuiLineDaysChart} from './line-days-chart.component';

function find(value: ReadonlyArray<[TuiDay, number]>, current: TuiDay): [TuiDay, number] {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}

// TODO: Consider extending TuiLineChartHintDirective
@Directive({
    standalone: true,
    selector: '[tuiLineChartHint]',
    providers: [TuiHoveredService],
})
export class TuiLineDaysChartHint implements AfterContentInit {
    @ContentChildren(forwardRef(() => TuiLineDaysChart))
    private readonly charts: QueryList<TuiLineDaysChart> = EMPTY_QUERY;

    private readonly destroyRef = inject(DestroyRef);
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
                filter((result) => !result.some(Boolean)),
                tuiZonefree(this.zone),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.charts.forEach((chart) => chart.onHovered(NaN));
            });
    }

    public getContext(day: TuiDay): ReadonlyArray<[TuiDay, number]> {
        return this.getMap(...this.charts.map(({value}) => value)).get(String(day)) || [];
    }

    public raise(day: TuiDay): void {
        const current = this.charts
            .map(({value}) => (day ? find(value, day) : []))
            .filter(([_, value]) => !Number.isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts.forEach((chart, index) => {
            const item = current[index];

            chart.onHovered(day);
            chart.zIndex = Math.max(item ? sorted.indexOf(item) : 0, 0);
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
                    values.map((value) => find(value, day)),
                ),
            new Map<string, ReadonlyArray<[TuiDay, number]>>(),
        );
    }
}
