import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    NgZone,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    TUI_LINE_CHART_OPTIONS,
    TuiLineChartComponent,
    tuiLineChartDrivers,
    TuiLineChartHintDirective,
} from '@taiga-ui/addon-charts/components/line-chart';
import {
    EMPTY_ARRAY,
    EMPTY_QUERY,
    TuiContext,
    TuiDay,
    TuiDestroyService,
    TuiHoveredService,
    tuiIsNumber,
    tuiIsPresent,
    TuiMonth,
    tuiPure,
    TuiStringHandler,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, filter, takeUntil} from 'rxjs';

import {TuiLineDaysChartHintDirective} from './line-days-chart-hint.directive';

const DUMMY: TuiPoint = [NaN, NaN];

@Component({
    selector: 'tui-line-days-chart',
    templateUrl: './line-days-chart.template.html',
    styleUrls: ['./line-days-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiHoveredService,
        {
            provide: TuiLineChartHintDirective,
            useExisting: TuiLineDaysChartComponent,
        },
    ],
})
export class TuiLineDaysChartComponent implements AfterViewInit {
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);
    private readonly options = inject(TUI_LINE_CHART_OPTIONS);
    private readonly hintDirective = inject(TuiLineDaysChartHintDirective, {
        optional: true,
    });

    @ViewChildren(TuiLineChartComponent)
    public readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @Input()
    public y = 0;

    @Input()
    public height = 0;

    @Input()
    public smoothingFactor = this.options.smoothingFactor;

    @Input()
    public hintContent: PolymorpheusContent<TuiContext<[TuiDay, number]>>;

    @Input()
    public xStringify: TuiStringHandler<TuiDay> | null = null;

    @Input()
    public yStringify: TuiStringHandler<number> | null = null;

    @Input()
    public dots = this.options.dots;

    @HostBinding('style.zIndex')
    public zIndex = 0;

    public value: ReadonlyArray<[TuiDay, number]> = [];

    @Input('value')
    public set valueSetter(value: ReadonlyArray<[TuiDay, number]>) {
        if (!value.length) {
            this.value = [];

            return;
        }

        const start = value[0][0];
        const mutable = [...value];
        const length = TuiDay.lengthBetween(start, value[value.length - 1][0]) + 1;

        this.value = Array.from({length}, (_, day) => {
            const currentDay = start.append({day});
            const shifted = currentDay.daySame(mutable[0][0]) ? mutable.shift() : null;
            const currentValue = shifted ? shifted[1] : NaN;

            return [currentDay, currentValue] as [TuiDay, number];
        });
    }

    public ngAfterViewInit(): void {
        combineLatest([tuiLineChartDrivers(this.charts), this.hovered$])
            .pipe(
                filter(result => !result.some(Boolean)),
                tuiZonefree(this.zone),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.onHovered(NaN);
            });
    }

    public onHovered(day: TuiDay | number): void {
        if (tuiIsNumber(day)) {
            this.charts.forEach(chart => chart.onHovered(NaN));

            return;
        }

        const index = TuiMonth.lengthBetween(this.value[0][0], day);
        const x = TuiDay.lengthBetween(this.value[0][0], day) + this.value[0][0].day - 1;
        const current = this.charts.get(index);

        this.charts.forEach(chart => {
            if (chart === current) {
                current.onHovered(current.value.findIndex(point => point[0] === x));
            } else {
                chart.onHovered(NaN);
            }
        });
    }

    protected get months(): ReadonlyArray<readonly TuiPoint[]> {
        return this.value.length ? this.breakMonths(this.value) : EMPTY_ARRAY;
    }

    protected get firstWidth(): number {
        return this.months.length * this.value[0][0].daysCount;
    }

    protected get hint():
        | PolymorpheusContent<TuiContext<[TuiDay, number]>>
        | PolymorpheusContent<TuiContext<readonly TuiPoint[]>> {
        return this.hintDirective?.hint ?? this.hintContent;
    }

    @tuiPure
    protected getHintContext(
        x: number,
        value: ReadonlyArray<[TuiDay, number]>,
    ): [TuiDay, number] {
        return value[x - value[0][0].day + 1];
    }

    protected readonly daysStringify: TuiStringHandler<number> = index =>
        this.xStringify ? this.xStringify(this.getDay(index)) : '';

    protected getX(index: number): number {
        const current = this.getDay(index);
        const months = TuiMonth.lengthBetween(this.value[0][0], current);
        const offset = months * current.daysCount;

        return index - offset;
    }

    protected raise(index: number, {value}: TuiLineChartComponent): void {
        const x = value[index][0];
        const month = this.getDay(x);

        if (this.hintDirective) {
            this.hintDirective.raise(month);
        } else {
            this.onHovered(month);
        }
    }

    protected getWidth(index: number): number {
        return this.getDay(index).daysCount * this.months.length;
    }

    protected getContext(index: number, {value}: TuiLineChartComponent): unknown {
        const x = value[index][0];

        return this.hintDirective
            ? this.hintDirective.getContext(this.getDay(x))
            : this.getHintContext(x, this.value);
    }

    @tuiPure
    private breakMonths(
        value: ReadonlyArray<[TuiDay, number]>,
    ): ReadonlyArray<readonly TuiPoint[]> {
        const offset = value[0][0].day - 1;

        return Array.from(
            {length: TuiMonth.lengthBetween(value[0][0], value[value.length - 1][0]) + 1},
            (_, i) => i + value[0][0].month + value[0][0].year * 12,
        )
            .map(absoluteMonth =>
                value
                    .map<TuiPoint | null>(([{month, year}, y], index) =>
                        month + year * 12 === absoluteMonth ? [index + offset, y] : null,
                    )
                    .filter(tuiIsPresent),
            )
            .map((month, index, array) =>
                index === array.length - 1
                    ? month
                    : [
                          ...month,
                          array[index + 1].find(day => !Number.isNaN(day[1])) || DUMMY,
                      ],
            );
    }

    private getDay(index: number): TuiDay {
        return this.value[index - this.value[0][0].day + 1][0];
    }
}
