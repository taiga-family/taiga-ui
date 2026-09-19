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
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiPoint} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {combineLatest, filter} from 'rxjs';

import {TuiLineDaysChartHint} from './line-days-chart-hint.directive';

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
    host: {'[style.z-index]': 'zIndex'},
})
export class TuiLineDaysChart implements AfterViewInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly hovered$ = inject(TuiHoveredService);
    private readonly options = inject(TUI_LINE_CHART_OPTIONS);
    private readonly hintDirective = inject(TuiLineDaysChartHint, {optional: true});

    private readonly days = computed(
        () => new Map(this.value().map((point) => [this.getX(point[0]), point])),
    );

    protected readonly points = computed<readonly TuiPoint[]>(() =>
        Array.from(this.days(), ([x, [, y]]) => [x, y]),
    );

    protected readonly width = computed(() => {
        const value = this.value();
        const start = value[0]?.[0];
        const end = value[value.length - 1]?.[0];

        return start && end ? TuiMonth.lengthBetween(start, end) + 1 : 0;
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

    public readonly value = input<
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

                const currentValue = shifted ? shifted[1] : Number.NaN;

                return [currentDay, currentValue] as [TuiDay, number];
            });
        },
    });

    public readonly hint = computed<
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
                this.onHovered(Number.NaN);
            });
    }

    public onHovered(day: TuiDay | number): void {
        if (tuiIsNumber(day)) {
            this.charts().forEach((chart) => chart.onHovered(Number.NaN));

            return;
        }

        const x = this.getX(day);

        this.charts().forEach((chart) => {
            chart.onHovered(chart.value().findIndex((point) => point[0] === x));
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
            : this.getHintContext(x);
    }

    protected getHintContext(x: number): [TuiDay, number] | null {
        return this.days().get(x) ?? null;
    }

    protected readonly daysStringify: TuiStringHandler<number> = (index) => {
        const day = this.getDay(index);
        const xStringify = this.xStringify();

        return xStringify && day ? xStringify(day) : '';
    };

    private getX(day: TuiDay): number {
        const start = this.value()[0]?.[0];

        // Each calendar month occupies the same width, regardless of its day count.
        return start
            ? TuiMonth.lengthBetween(start, day) + (day.day - 1) / day.daysCount
            : 0;
    }

    private getDay(x: number): TuiDay | undefined {
        return this.days().get(x)?.[0];
    }
}
