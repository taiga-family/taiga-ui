import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    TuiLineChartComponent,
    TuiLineChartHintDirective,
} from '@taiga-ui/addon-charts/components/line-chart';
import {
    EMPTY_ARRAY,
    EMPTY_QUERY,
    TuiContextWithImplicit,
    TuiDay,
    tuiDefaultProp,
    tuiIsNumber,
    tuiIsPresent,
    TuiMonth,
    tuiPure,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiDriver, TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiLineDaysChartHintDirective} from './line-days-chart-hint.directive';

const DUMMY: TuiPoint = [NaN, NaN];

@Component({
    selector: `tui-line-days-chart`,
    templateUrl: `./line-days-chart.template.html`,
    styleUrls: [`./line-days-chart.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TuiLineChartHintDirective,
            useExisting: forwardRef(() => TuiLineDaysChartComponent),
        },
    ],
})
export class TuiLineDaysChartComponent {
    @ViewChildren(TuiLineChartComponent)
    private readonly charts: QueryList<TuiLineChartComponent> = EMPTY_QUERY;

    @ViewChildren(TuiDriver)
    readonly drivers: QueryList<Observable<boolean>> = EMPTY_QUERY;

    @Input(`value`)
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
    @tuiDefaultProp()
    hintContent: PolymorpheusContent<TuiContextWithImplicit<[TuiDay, number]>> = ``;

    @Input()
    @tuiDefaultProp()
    xStringify: TuiStringHandler<TuiDay> | null = null;

    @Input()
    @tuiDefaultProp()
    yStringify: TuiStringHandler<number> | null = null;

    @Input()
    @tuiDefaultProp()
    dots = false;

    @HostBinding(`style.zIndex`)
    zIndex = 0;

    value: ReadonlyArray<[TuiDay, number]> = [];

    constructor(
        @Optional()
        @Inject(TuiLineDaysChartHintDirective)
        private readonly hintDirective: TuiLineDaysChartHintDirective | null,
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
        return this.hintDirective ? this.hintDirective.hint : this.hintContent;
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

    readonly daysStringify: TuiStringHandler<number> = index =>
        this.xStringify ? this.xStringify(this.getMonth(index)) : ``;

    getX(index: number): number {
        const current = this.getMonth(index);
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
        const array = this.charts.toArray();
        const current = array[index];
        const {value} = current;

        array.forEach(chart => {
            if (chart === current) {
                current.onHovered(value.findIndex(point => point[0] === x));
            } else {
                chart.onHovered(NaN);
            }
        });
    }

    raise(index: number, {value}: TuiLineChartComponent): void {
        const x = value[index][0];
        const month = this.getMonth(x);

        if (this.hintDirective) {
            this.hintDirective.raise(month);
        } else {
            this.onHovered(month);
        }
    }

    getWidth(index: number): number {
        return this.getMonth(index).daysCount * this.months.length;
    }

    getContext(
        index: number,
        {value}: TuiLineChartComponent,
    ): TuiContextWithImplicit<unknown> {
        const x = value[index][0];

        return this.hintDirective
            ? this.hintDirective.getContext(this.getMonth(x))
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
                    : [...month, array[index + 1].find(day => !isNaN(day[1])) || DUMMY],
            );
    }

    private getMonth(index: number): TuiDay {
        return this.value[index - this.value[0][0].day + 1][0];
    }
}
