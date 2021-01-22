import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    nullableSame,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    tuiDefaultProp,
    TuiDestroyService,
    TuiMapper,
    TuiMonth,
    tuiPure,
    watch,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TuiMarkerHandler,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';
import {MAX_DAY_RANGE_LENGTH_MAPPER} from '@taiga-ui/kit/constants';
import {TUI_CALENDAR_DATA_STREAM, TUI_OTHER_DATE_TEXT} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-calendar-range',
    templateUrl: './calendar-range.template.html',
    styleUrls: ['./calendar-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiCalendarRangeComponent implements TuiWithOptionalMinMax<TuiDay> {
    @Input()
    @tuiDefaultProp()
    defaultViewedMonth: TuiMonth = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<TuiDayRangePeriod> = [];

    @Input()
    @tuiDefaultProp()
    min: TuiDay = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiDay = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    minLength: TuiDayLike | null = null;

    @Input()
    @tuiDefaultProp()
    maxLength: TuiDayLike | null = null;

    @Output()
    readonly rangeChange = new EventEmitter<TuiDayRange | null>();

    value: TuiDayRange | null = null;

    readonly maxLengthMapper: TuiMapper<TuiDay, TuiDay> = MAX_DAY_RANGE_LENGTH_MAPPER;

    readonly monthShiftMapper: TuiMapper<TuiMonth, TuiMonth> = item =>
        item.append({month: 1});

    readonly mapper: TuiMapper<
        ReadonlyArray<TuiDayRangePeriod>,
        ReadonlyArray<TuiDayRangePeriod | string>
    > = (
        items,
        min: TuiDay,
        max: TuiDay | null,
        minLength: TuiDayLike | null,
        otherDateText: string,
    ) => [
        ...items.filter(
            item =>
                (minLength === null ||
                    item.range.from.append(minLength).daySameOrBefore(item.range.to)) &&
                item.range.to.daySameOrAfter(min) &&
                (max === null || item.range.from.daySameOrBefore(max)),
        ),
        otherDateText,
    ];

    constructor(
        @Inject(TUI_CALENDAR_DATA_STREAM)
        @Optional()
        valueChanges: Observable<TuiDayRange | null> | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TUI_OTHER_DATE_TEXT) readonly otherDateText$: Observable<string>,
    ) {
        if (!valueChanges) {
            return;
        }

        valueChanges
            .pipe(watch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(value => {
                this.value = value;
            });
    }

    get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler,
            this.value,
            this.minLength,
        );
    }

    get computedMonth(): TuiMonth {
        return this.value ? this.value.to : this.defaultViewedMonth;
    }

    isItemActive(item: string | TuiDayRangePeriod): boolean {
        const {activePeriod} = this;

        return (
            (typeof item === 'string' && activePeriod === null) || activePeriod === item
        );
    }

    onRangeChange(dayRange: TuiDayRange) {
        this.updateValue(dayRange);
    }

    onDayClick(day: TuiDay) {
        const {value} = this;

        if (value === null || !value.isSingleDay) {
            this.value = new TuiDayRange(day, day);

            return;
        }

        this.updateValue(TuiDayRange.sort(value.from, day));
    }

    onItemSelect(item: string | TuiDayRangePeriod) {
        if (typeof item !== 'string') {
            this.updateValue(item.range.dayLimit(this.min, this.max));

            return;
        }

        if (this.activePeriod !== null) {
            this.updateValue(null);
        }
    }

    updateValue(value: TuiDayRange | null) {
        this.value = value;
        this.rangeChange.emit(value);
    }

    private get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                nullableSame<TuiDayRange>(
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
            if (!value || !value.isSingleDay || !minLength) {
                return disabledItemHandler(item);
            }

            const disabledBefore = value.from.append(minLength, true).append({day: 1});
            const disabledAfter = value.from.append(minLength).append({day: -1});
            const inDisabledRange =
                disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

            return inDisabledRange || disabledItemHandler(item);
        };
    }
}
