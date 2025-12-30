import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    inject,
    input,
    NgZone,
    viewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiChartHint} from '@taiga-ui/addon-charts/components/chart-hint';
import {
    TUI_LINE_CHART_OPTIONS,
    TuiLineChart,
    tuiLineChartDrivers,
    TuiLineChartHint,
} from '@taiga-ui/addon-charts/components/line-chart';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiIsNumber, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiPoint} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {combineLatest, filter} from 'rxjs';

import {TuiLineDaysChartHint} from './line-days-chart-hint.directive';

const DUMMY: TuiPoint = [NaN, NaN];

@Component({
    selector: 'tui-line-days-chart',
    imports: [PolymorpheusOutlet, TuiChartHint, TuiLineChart],
    templateUrl: './line-days-chart.template.html',
    styleUrl: './line-days-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiHoveredService,
        {
            provide: TuiLineChartHint,
            useExisting: TuiLineDaysChart,
        },
    ],
    host: {
        '[style.z-index]': 'zIndex',
    },
})
export class TuiLineDaysChart implements AfterViewInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);
    private readonly options = inject(TUI_LINE_CHART_OPTIONS);
    private readonly hintDirective = inject(TuiLineDaysChartHint, {
        optional: true,
    });

    private readonly brokenMonths = computed(() => {
        const value = this.value();
        const offset = (value[0]?.[0].day || 1) - 1;
        const start = value[0]?.[0];
        const end = value[value.length - 1]?.[0];

        return Array.from(
            {length: start && end ? TuiMonth.lengthBetween(start, end) + 1 : 0},
            (_, i) => i + (start?.month || 0) + (start?.year || 0) * 12,
        )
            .map((absoluteMonth) =>
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
                          array[index + 1]?.find((day) => !Number.isNaN(day[1])) || DUMMY,
                      ],
            );
    });

    public readonly charts = viewChildren(TuiLineChart);
    public readonly y = input(0);
    public readonly height = input(0);
    public readonly smoothingFactor = input(this.options.smoothingFactor);
    public readonly hintContent =
        input<PolymorpheusContent<TuiContext<[TuiDay, number]>>>();

    public readonly xStringify = input<TuiStringHandler<TuiDay> | null>(null);
    public readonly yStringify = input<TuiStringHandler<number> | null>(null);
    public readonly dots = input(this.options.dots);

    public zIndex = 0;

    public value = input<
        ReadonlyArray<[TuiDay, number]>,
        ReadonlyArray<[TuiDay, number]>
    >([], {
        transform: (value) => {
            if (!value.length) {
                return [];
            }

            const start = value[0]?.[0];
            const end = value[value.length - 1];
            const mutable = [...value];
            const length = start && end ? TuiDay.lengthBetween(start, end[0]) + 1 : 0;

            return Array.from({length}, (_, day) => {
                const startMutable = mutable[0]?.[0];
                const currentDay = start?.append({day});
                const shifted =
                    startMutable && currentDay?.daySame(startMutable)
                        ? mutable.shift()
                        : null;
                const currentValue = shifted ? shifted[1] : NaN;

                return [currentDay, currentValue] as [TuiDay, number];
            });
        },
    });

    public hint = computed<
        | PolymorpheusContent<TuiContext<[TuiDay, number]>>
        | PolymorpheusContent<TuiContext<readonly TuiPoint[]>>
    >(() => this.hintDirective?.hint() ?? this.hintContent());

    public ngAfterViewInit(): void {
        combineLatest([tuiLineChartDrivers(this.charts()), this.hovered$])
            .pipe(
                filter((result) => !result.some(Boolean)),
                tuiZonefree(this.zone),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.onHovered(NaN);
            });
    }

    public onHovered(day: TuiDay | number): void {
        if (tuiIsNumber(day)) {
            this.charts().forEach((chart) => chart.onHovered(NaN));

            return;
        }

        const start = this.value()[0]?.[0];
        const index = start && day ? TuiMonth.lengthBetween(start, day) : 0;
        const x = start && day ? TuiDay.lengthBetween(start, day) + start.day - 1 : 0;
        const current = this.charts()[index];

        this.charts().forEach((chart) => {
            if (chart === current) {
                current.onHovered(current.value().findIndex((point) => point[0] === x));
            } else {
                chart.onHovered(NaN);
            }
        });
    }

    public raise(index: number, {value}: TuiLineChart): void {
        const x = value()[index]?.[0] || 0;
        const month = this.getDay(x);

        if (!month) {
            return;
        }

        if (this.hintDirective) {
            this.hintDirective.raise(month);
        } else {
            this.onHovered(month);
        }
    }

    public getContext(index: number, {value}: TuiLineChart): unknown {
        const x = value()[index]?.[0] || 0;
        const day = this.getDay(x);

        return this.hintDirective && day
            ? this.hintDirective.getContext(day)
            : this.getHintContext(x, this.value());
    }

    protected get months(): ReadonlyArray<readonly TuiPoint[]> {
        return this.value().length ? this.brokenMonths() : [];
    }

    protected get firstWidth(): number {
        return this.months.length * (this.value()[0]?.[0].daysCount || 0);
    }

    protected getHintContext(
        x: number,
        value: ReadonlyArray<[TuiDay, number]>,
    ): [TuiDay, number] | null {
        return value[x - (value[0]?.[0]?.day || 0) + 1] ?? null;
    }

    protected readonly daysStringify: TuiStringHandler<number> = (index) => {
        const day = this.getDay(index);
        const xStringify = this.xStringify();

        return xStringify && day ? xStringify(day) : '';
    };

    protected getX(index: number): number {
        const start = this.value()[0]?.[0];
        const current = this.getDay(index);
        const months = start && current ? TuiMonth.lengthBetween(start, current) : 0;
        const offset = months * (current?.daysCount || 0);

        return index - offset;
    }

    protected getWidth(index: number): number {
        return (this.getDay(index)?.daysCount || 0) * this.months.length;
    }

    private getDay(index: number): TuiDay | undefined {
        const start = this.value()[0]?.[0];

        return this.value()[index - (start?.day || 0) + 1]?.[0];
    }
}
