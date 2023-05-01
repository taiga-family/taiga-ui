import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
    NgZone,
    Optional,
    QueryList,
    Self,
    ViewChildren,
} from '@angular/core';
import {
    TuiLineChartComponent,
    tuiLineChartDrivers,
    TuiLineChartHintDirective,
} from '@taiga-ui/addon-charts/components/line-chart';
import {
    EMPTY_ARRAY,
    EMPTY_QUERY,
    TuiContextWithImplicit,
    TuiDay,
    tuiDefaultProp,
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
import {combineLatest, Observable} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
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
    @ViewChildren(TuiLineChartComponent)
    readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @Input('value')
    @tuiDefaultProp()
    set valueSetter(value: ReadonlyArray<[TuiDay, number]>) {
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

    @Input()
    @tuiDefaultProp()
    y = 0;

    @Input()
    @tuiDefaultProp()
    height = 0;

    @Input()
    @tuiDefaultProp()
    smoothingFactor = 0;

    @Input()
    hintContent: PolymorpheusContent<TuiContextWithImplicit<[TuiDay, number]>> = '';

    @Input()
    @tuiDefaultProp()
    xStringify: TuiStringHandler<TuiDay> | null = null;

    @Input()
    @tuiDefaultProp()
    yStringify: TuiStringHandler<number> | null = null;

    @Input()
    @tuiDefaultProp()
    dots = false;

    @HostBinding('style.zIndex')
    zIndex = 0;

    value: ReadonlyArray<[TuiDay, number]> = [];

    constructor(
        @Optional()
        @Inject(TuiLineDaysChartHintDirective)
        private readonly hintDirective: TuiLineDaysChartHintDirective | null,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TuiHoveredService) private readonly hovered$: Observable<boolean>,
    ) {}

    get months(): ReadonlyArray<readonly TuiPoint[]> {
        return this.value.length ? this.breakMonths(this.value) : EMPTY_ARRAY;
    }

    get firstWidth(): number {
        return this.months.length * this.value[0][0].daysCount;
    }

    get hint():
        | PolymorpheusContent<TuiContextWithImplicit<[TuiDay, number]>>
        | PolymorpheusContent<TuiContextWithImplicit<readonly TuiPoint[]>> {
        return this.hintDirective?.hint ?? this.hintContent;
    }

    @tuiPure
    getHintContext(
        x: number,
        value: ReadonlyArray<[TuiDay, number]>,
    ): TuiContextWithImplicit<[TuiDay, number]> {
        return {
            $implicit: value[x - value[0][0].day + 1],
        };
    }

    ngAfterViewInit(): void {
        combineLatest([tuiLineChartDrivers(this.charts), this.hovered$])
            .pipe(
                filter(result => !result.some(Boolean)),
                tuiZonefree(this.ngZone),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.onHovered(NaN);
            });
    }

    readonly daysStringify: TuiStringHandler<number> = index =>
        this.xStringify ? this.xStringify(this.getDay(index)) : '';

    getX(index: number): number {
        const current = this.getDay(index);
        const months = TuiMonth.lengthBetween(this.value[0][0], current);
        const offset = months * current.daysCount;

        return index - offset;
    }

    onHovered(day: TuiDay | number): void {
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

    raise(index: number, {value}: TuiLineChartComponent): void {
        const x = value[index][0];
        const month = this.getDay(x);

        if (this.hintDirective) {
            this.hintDirective.raise(month);
        } else {
            this.onHovered(month);
        }
    }

    getWidth(index: number): number {
        return this.getDay(index).daysCount * this.months.length;
    }

    getContext(
        index: number,
        {value}: TuiLineChartComponent,
    ): TuiContextWithImplicit<unknown> {
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
