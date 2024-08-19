import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    Optional,
    Output,
    Self,
    SimpleChanges,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    TuiDestroyService,
    tuiIsString,
    TuiMonth,
    tuiNullableSame,
    tuiObjectFromEntries,
    tuiPure,
    TuiTypedMapper,
    tuiWatch,
} from '@taiga-ui/cdk';
import {
    TUI_COMMON_ICONS,
    TUI_DEFAULT_MARKER_HANDLER,
    TuiCommonIcons,
    TuiMarkerHandler,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';
import {MAX_DAY_RANGE_LENGTH_MAPPER} from '@taiga-ui/kit/constants';
import {TUI_CALENDAR_DATE_STREAM, TUI_OTHER_DATE_TEXT} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-calendar-range',
    templateUrl: './calendar-range.template.html',
    styleUrls: ['./calendar-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiCalendarRangeComponent
    implements OnChanges, TuiWithOptionalMinMax<TuiDay>
{
    /**
     * @deprecated use `item`
     */
    private selectedPeriod: TuiDayRangePeriod | null = null;

    @Input()
    defaultViewedMonth: TuiMonth = TuiMonth.currentLocal();

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    items: readonly TuiDayRangePeriod[] = [];

    @Input()
    min: TuiDay | null = TUI_FIRST_DAY;

    @Input()
    max: TuiDay | null = TUI_LAST_DAY;

    @Input()
    minLength: TuiDayLike | null = null;

    @Input()
    maxLength: TuiDayLike | null = null;

    @Input()
    value: TuiDayRange | null = null;

    @Input()
    set item(item: TuiDayRangePeriod | null) {
        this.updateValue(item?.range ?? null);
    }

    @Output()
    readonly valueChange = new EventEmitter<TuiDayRange | null>();

    @Output()
    readonly itemChange = new EventEmitter<TuiDayRangePeriod | null>();

    availableRange: TuiDayRange | null = null;
    previousValue: TuiDayRange | null = null;

    readonly maxLengthMapper = MAX_DAY_RANGE_LENGTH_MAPPER;

    get computedMin(): TuiDay {
        return this.min ?? TUI_FIRST_DAY;
    }

    get computedMax(): TuiDay {
        return this.max ?? TUI_LAST_DAY;
    }

    /**
     * @deprecated use `item`
     */
    get selectedActivePeriod(): TuiDayRangePeriod | null {
        return this.selectedPeriod;
    }

    /**
     * @deprecated use `item`
     */
    set selectedActivePeriod(period: TuiDayRangePeriod | null) {
        this.selectedPeriod = period;
    }

    constructor(
        @Optional()
        @Inject(TUI_CALENDAR_DATE_STREAM)
        valueChanges: Observable<TuiDayRange | null> | null,
        @Inject(ChangeDetectorRef) readonly cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TUI_OTHER_DATE_TEXT) readonly otherDateText$: Observable<string>,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
    ) {
        if (!valueChanges) {
            return;
        }

        valueChanges.pipe(tuiWatch(cdr), takeUntil(destroy$)).subscribe(value => {
            this.value = value;
            this.item = value ? this.findItemByDayRange(value) : null;
        });
    }

    @HostListener('document:keydown.capture', ['$event'])
    onEsc(event: KeyboardEvent): void {
        if (event.key !== 'Escape' || !this.value?.isSingleDay) {
            return;
        }

        event.stopPropagation();
        this.value = this.previousValue;
    }

    ngOnChanges(changes: SimpleChanges): void {
        const {value} = changes ?? {};

        if (value?.currentValue) {
            this.item = this.findItemByDayRange(value.currentValue);
        }
    }

    readonly monthOffset: TuiTypedMapper<[TuiMonth, number], TuiMonth> = (value, month) =>
        value.append({month});

    readonly mapper: TuiTypedMapper<
        [
            readonly TuiDayRangePeriod[],
            TuiDay | null,
            TuiDay | null,
            TuiDayLike | null,
            string?,
        ],
        ReadonlyArray<TuiDayRangePeriod | string>
    > = (items, min, max, minLength, otherDateText = '') => [
        ...items.filter(
            item =>
                (minLength === null ||
                    item.range.from.append(minLength).daySameOrBefore(item.range.to)) &&
                (min === null || item.range.to.daySameOrAfter(min)) &&
                (max === null || item.range.from.daySameOrBefore(max)),
        ),
        otherDateText,
    ];

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

    isItemActive(item: TuiDayRangePeriod | string): boolean {
        const {activePeriod} = this;

        return (
            (tuiIsString(item) && activePeriod === null) ||
            activePeriod === item ||
            activePeriod?.toString() === item.toString()
        );
    }

    // TODO: investigate if it is used anywhere and (if not) delete it in v4.0
    onRangeChange(dayRange: TuiDayRange): void {
        this.updateValue(dayRange);
    }

    onDayClick(day: TuiDay): void {
        const {value} = this;

        this.previousValue = value;
        this.selectedActivePeriod = null;

        if (value === null || !value.isSingleDay) {
            this.value = new TuiDayRange(day, day);
            this.availableRange = this.findAvailableRange();

            return;
        }

        const sortedRange = TuiDayRange.sort(value.from, day);

        this.updateValue(sortedRange);
        this.updateItem(this.findItemByDayRange(sortedRange));
    }

    onItemSelect(item: TuiDayRangePeriod | string): void {
        if (!tuiIsString(item)) {
            this.selectedActivePeriod = item;
            this.updateValue(item.range.dayLimit(this.min, this.max));
            this.updateItem(item);

            return;
        }

        if (this.activePeriod !== null) {
            this.selectedActivePeriod = null;
            this.updateValue(null);
            this.updateItem(null);
        }
    }

    updateValue(value: TuiDayRange | null): void {
        this.value = value;
        this.valueChange.emit(value);
    }

    updateItem(item: TuiDayRangePeriod | null): void {
        this.item = item;
        this.itemChange.emit(item);
    }

    private get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.item ??
            (this.items.find(item =>
                tuiNullableSame<TuiDayRange>(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) ||
                null)
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
                return this.isDisabledItem(disabledItemHandler, value, item);
            }

            const negativeMinLength = tuiObjectFromEntries(
                Object.entries(minLength).map(([key, value]) => [key, -value]),
            );
            const disabledBefore = value.from.append(negativeMinLength).append({day: 1});
            const disabledAfter = value.from.append(minLength).append({day: -1});
            const inDisabledRange =
                disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);

            return (
                inDisabledRange || this.isDisabledItem(disabledItemHandler, value, item)
            );
        };
    }

    private isDisabledItem(
        disabledItemHandler: TuiBooleanHandler<TuiDay>,
        value: TuiDayRange | null,
        item: TuiDay,
    ): boolean {
        return (
            disabledItemHandler(item) ||
            (!!value?.isSingleDay && !this.availableRangeContainsItem(item))
        );
    }

    private availableRangeContainsItem(item: TuiDay): boolean {
        if (this.availableRange === null) {
            return true;
        }

        const {from, to} = this.availableRange;

        return from.daySameOrBefore(item) && to.daySameOrAfter(item);
    }

    private findAvailableRange(): TuiDayRange | null {
        const {disabledItemHandler, value} = this;

        if (!value?.isSingleDay || disabledItemHandler === ALWAYS_FALSE_HANDLER) {
            return null;
        }

        let from = value.from;
        let to = value.from;

        let leftShift = true;
        let rightShift = true;

        while (leftShift || rightShift) {
            leftShift = !disabledItemHandler(from.append({day: -1}));

            if (leftShift) {
                from = from.append({day: -1});
            }

            rightShift = !disabledItemHandler(to.append({day: 1}));

            if (rightShift) {
                to = to.append({day: 1});
            }
        }

        return new TuiDayRange(from, to);
    }

    private findItemByDayRange(dayRange: TuiDayRange): TuiDayRangePeriod | null {
        return this.items.find(item => dayRange.daySame(item.range)) ?? null;
    }
}
