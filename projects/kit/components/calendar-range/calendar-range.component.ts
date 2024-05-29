import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiBooleanHandler, TuiDay, TuiDayLike, TuiMapper} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDayRange,
    tuiIsString,
    TuiMapperPipe,
    TuiMonth,
    tuiNullableSame,
    tuiPure,
    tuiWatch,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {
    TUI_COMMON_ICONS,
    TuiCalendarComponent,
    TuiDataList,
    TuiIconComponent,
} from '@taiga-ui/core';
import {MAX_DAY_RANGE_LENGTH_MAPPER} from '@taiga-ui/kit/constants';
import {TUI_CALENDAR_DATE_STREAM, TUI_OTHER_DATE_TEXT} from '@taiga-ui/kit/tokens';
import type {Observable} from 'rxjs';

import type {TuiDayRangePeriod} from './day-range-period';

@Component({
    standalone: true,
    selector: 'tui-calendar-range',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        TuiMapperPipe,
        TuiCalendarComponent,
        TuiDataList,
        TuiIconComponent,
    ],
    templateUrl: './calendar-range.template.html',
    styleUrls: ['./calendar-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarRangeComponent
    implements OnChanges, TuiWithOptionalMinMax<TuiDay>
{
    @Input()
    public defaultViewedMonth: TuiMonth = TuiMonth.currentLocal();

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Input()
    public items: readonly TuiDayRangePeriod[] = [];

    @Input()
    public min: TuiDay | null = TUI_FIRST_DAY;

    @Input()
    public max: TuiDay | null = TUI_LAST_DAY;

    @Input()
    public minLength: TuiDayLike | null = null;

    @Input()
    public maxLength: TuiDayLike | null = null;

    @Input()
    public value: TuiDayRange | null = null;

    @Output()
    public readonly valueChange = new EventEmitter<TuiDayRange | null>();

    protected readonly otherDateText$ = inject(TUI_OTHER_DATE_TEXT);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected previousValue: TuiDayRange | null = null;
    protected hoveredItem: TuiDay | null = null;
    protected readonly maxLengthMapper = MAX_DAY_RANGE_LENGTH_MAPPER;

    constructor() {
        inject<Observable<TuiDayRange | null>>(TUI_CALENDAR_DATE_STREAM, {optional: true})
            ?.pipe(tuiWatch(inject(ChangeDetectorRef)), takeUntilDestroyed())
            .subscribe(value => {
                this.value = value;
            });
    }

    public ngOnChanges(): void {
        this.defaultViewedMonth = this.value?.from || this.defaultViewedMonth;
    }

    protected get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler,
            this.value,
            this.minLength,
        );
    }

    @HostListener('document:keydown.capture', ['$event'])
    protected onEsc(event: KeyboardEvent): void {
        if (event.key !== 'Escape' || !this.value?.isSingleDay) {
            return;
        }

        event.stopPropagation();
        this.value = this.previousValue;
    }

    protected readonly monthOffset: TuiMapper<[TuiMonth, number], TuiMonth> = (
        value,
        month,
    ) => value.append({month});

    protected readonly mapper: TuiMapper<
        [
            readonly TuiDayRangePeriod[],
            TuiDay | null,
            TuiDay | null,
            TuiDayLike | null,
            string | null | undefined,
        ],
        ReadonlyArray<TuiDayRangePeriod | string>
    > = (items, min, max, minLength, otherDateText) => [
        ...items.filter(
            item =>
                (minLength === null ||
                    item.range.from.append(minLength).daySameOrBefore(item.range.to)) &&
                (min === null || item.range.to.daySameOrAfter(min)) &&
                (max === null || item.range.from.daySameOrBefore(max)),
        ),
        otherDateText || '',
    ];

    protected isItemActive(item: TuiDayRangePeriod | string): boolean {
        const {activePeriod} = this;

        return (tuiIsString(item) && activePeriod === null) || activePeriod === item;
    }

    protected onItemSelect(item: TuiDayRangePeriod | string): void {
        if (typeof item !== 'string') {
            this.updateValue(item.range.dayLimit(this.min, this.max));
        } else if (this.activePeriod !== null) {
            this.updateValue(null);
        }
    }

    protected onMonthChange(month: TuiMonth): void {
        this.defaultViewedMonth = month;
    }

    protected onDayClick(day: TuiDay): void {
        this.previousValue = this.value;

        if (!this.value?.isSingleDay) {
            this.value = new TuiDayRange(day, day);
        } else {
            this.updateValue(TuiDayRange.sort(this.value.from, day));
        }
    }

    protected updateValue(value: TuiDayRange | null): void {
        this.value = value;
        this.valueChange.emit(value);
    }

    private get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                tuiNullableSame<TuiDayRange>(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) || null
        );
    }

    @tuiPure
    private calculateDisabledItemHandler(
        disabledItemHandler: TuiBooleanHandler<TuiDay>,
        value: TuiDayRange | null,
        minLength: TuiDayLike | null,
    ): TuiBooleanHandler<TuiDay> {
        return item => {
            if (!value?.isSingleDay || !minLength) {
                return disabledItemHandler(item);
            }

            const negativeMinLength = Object.fromEntries(
                Object.entries(minLength).map(([key, value]) => [key, -value]),
            );
            const disabledBefore = value.from.append(negativeMinLength).append({day: 1});
            const disabledAfter = value.from.append(minLength).append({day: -1});
            const inDisabledRange =
                disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

            return inDisabledRange || disabledItemHandler(item);
        };
    }
}
