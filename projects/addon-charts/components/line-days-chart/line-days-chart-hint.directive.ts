import {
    type AfterContentInit,
    computed,
    contentChildren,
    Directive,
    forwardRef,
} from '@angular/core';
import {
    tuiLineChartDrivers,
    TuiLineChartHintDirective,
} from '@taiga-ui/addon-charts/components/line-chart';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';

import {TuiLineDaysChart} from './line-days-chart.component';

function find(value: ReadonlyArray<[TuiDay, number]>, current: TuiDay): [TuiDay, number] {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}

@Directive({
    selector: '[tuiLineChartHint]',
    providers: [TuiHoveredService],
})
export class TuiLineDaysChartHint
    extends TuiLineChartHintDirective
    implements AfterContentInit
{
    private readonly charts = contentChildren(forwardRef(() => TuiLineDaysChart));
    private readonly map = computed(() =>
        this.getMap(...this.charts().map(({value}) => value())),
    );

    public ngAfterContentInit(): void {
        this.syncHoverState(
            this.charts().map(({charts}) => tuiLineChartDrivers(charts())),
            () => this.charts().forEach((chart) => chart.onHovered(NaN)),
        );
    }

    public getContext(day: TuiDay): ReadonlyArray<[TuiDay, number]> {
        return this.map().get(String(day)) || [];
    }

    public raise(day: TuiDay): void {
        const current = this.charts()
            .map(({value}) => (day ? find(value(), day) : []))
            .filter(([_, value]) => !Number.isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts().forEach((chart, index) => {
            const item = current[index];

            chart.onHovered(day);
            chart.zIndex = Math.max(item ? sorted.indexOf(item) : 0, 0);
        });
    }

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
