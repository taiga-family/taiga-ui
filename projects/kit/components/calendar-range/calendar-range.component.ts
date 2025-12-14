import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    inject,
    Input,
    input,
    model,
    type OnChanges,
    type OnInit,
    Output,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {type TuiBooleanHandler, type TuiMapper} from '@taiga-ui/cdk/types';
import {tuiIsString, tuiNullableSame, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiCalendar,
    tuiCalendarSheetOptionsProvider,
    type TuiMarkerHandler,
} from '@taiga-ui/core/components/calendar';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_COMMON_ICONS, tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {TUI_OTHER_DATE_TEXT} from '@taiga-ui/kit/tokens';

import {calculateDisabledItemHandler} from './calculate-disabled-item-handler';
import {TUI_DAY_CAPS_MAPPER} from './day-caps-mapper';
import {type TuiDayRangePeriod} from './day-range-period';

@Component({
    selector: 'tui-calendar-range',
    imports: [TuiCalendar, TuiDataList, TuiIcon, TuiMapperPipe],
    templateUrl: './calendar-range.template.html',
    styleUrl: './calendar-range.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiCalendarRange),
        tuiCalendarSheetOptionsProvider({rangeMode: true}),
    ],
    host: {
        '[class._mobile]': 'mobile',
        '(document:keydown.capture)': 'onEsc($event)',
    },
})
export class TuiCalendarRange implements OnInit, OnChanges {
    private readonly cdr = inject(ChangeDetectorRef);

    protected currentValue: TuiDay | TuiDayRange | null = null;
    protected previousValue: TuiDay | TuiDayRange | null = null;
    protected hoveredItem: TuiDay | null = null;
    protected month: TuiMonth = TuiMonth.currentLocal();

    protected readonly otherDateText = inject(TUI_OTHER_DATE_TEXT);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly capsMapper = TUI_DAY_CAPS_MAPPER;
    protected readonly mobile = inject(TUI_IS_MOBILE);

    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiDay>>(TUI_FALSE_HANDLER);

    public readonly markerHandler = input<TuiMarkerHandler | null>(null);

    public readonly items = input<readonly TuiDayRangePeriod[]>([]);

    public readonly min = input<TuiDay | null>(TUI_FIRST_DAY);

    public readonly max = input<TuiDay | null>(TUI_LAST_DAY);

    public readonly minLength = input<TuiDayLike | null>(null);

    public readonly maxLength = input<TuiDayLike | null>(null);

    public readonly item = model<TuiDayRangePeriod | null>(null);

    @Output()
    public readonly valueChange = new EventEmitter<TuiDayRange | null>();

    @Output()
    public readonly itemChange = new EventEmitter<TuiDayRangePeriod | null>();

    @Input('value')
    public set valueSetter(value: TuiDayRange | null) {
        this.currentValue = value;
    }

    @Input()
    public set defaultViewedMonth(month: TuiMonth) {
        if (!this.currentValue) {
            this.month = month;
        }
    }

    public set value(value: TuiDayRange | null) {
        this.cdr.markForCheck();
        this.currentValue = value;
        this.initDefaultViewedMonth();
    }

    public get defaultViewedMonth(): TuiMonth {
        return this.month;
    }

    public ngOnChanges(): void {
        if (!this.currentValue) {
            this.initDefaultViewedMonth();
        }
    }

    public ngOnInit(): void {
        this.initDefaultViewedMonth();
    }

    protected get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler(),
            this.currentValue,
            this.minLength(),
        );
    }

    protected onEsc(event: KeyboardEvent): void {
        if (event.key !== 'Escape' || !(this.currentValue instanceof TuiDay)) {
            return;
        }

        event.stopPropagation();
        this.currentValue = this.previousValue;
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
            (item) =>
                (minLength === null ||
                    item.range.from
                        .append(minLength)
                        .append({day: -1})
                        .daySameOrBefore(item.range.to)) &&
                (min === null || item.range.to.daySameOrAfter(min)) &&
                (max === null || item.range.from.daySameOrBefore(max)),
        ),
        otherDateText || '',
    ];

    protected isItemActive(item: TuiDayRangePeriod | string): boolean {
        const {activePeriod} = this;

        return (
            (tuiIsString(item) && activePeriod === null) ||
            activePeriod === item ||
            activePeriod?.toString() === item.toString()
        );
    }

    protected onItemSelect(item: TuiDayRangePeriod | string): void {
        if (!tuiIsString(item)) {
            this.item.set(item);
            this.updateValue(item.range.dayLimit(this.min(), this.max()));
        } else if (this.activePeriod !== null) {
            this.item.set(null);
            this.updateValue(null);
        }

        this.initDefaultViewedMonth();
    }

    protected onMonthChange(month: TuiMonth): void {
        this.month = month;
    }

    protected onDayClick(day: TuiDay): void {
        this.previousValue = this.currentValue;
        this.item.set(null);

        if (this.currentValue instanceof TuiDay) {
            const range = TuiDayRange.sort(this.currentValue, day);

            this.currentValue = range;
            this.item.set(this.findItemByDayRange(range));
            this.updateValue(range);
        } else {
            this.currentValue = day;
        }
    }

    protected updateValue(value: TuiDayRange | null): void {
        this.currentValue = value;
        this.valueChange.emit(value);
    }

    private get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.item() ??
            (this.items().find((item) =>
                tuiNullableSame<TuiDayRange>(
                    this.currentValue instanceof TuiDay
                        ? new TuiDayRange(this.currentValue, this.currentValue)
                        : this.currentValue,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min(), this.max())) &&
                        a.to.daySame(b.to.dayLimit(this.min(), this.max())),
                ),
            ) ||
                null)
        );
    }

    @tuiPure
    private calculateDisabledItemHandler(
        disabledItemHandler: TuiBooleanHandler<TuiDay>,
        value: TuiDay | TuiDayRange | null,
        minLength: TuiDayLike | null,
    ): TuiBooleanHandler<TuiDay> {
        return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
    }

    private initDefaultViewedMonth(): void {
        const max = this.max();
        const min = this.min();

        if (this.currentValue instanceof TuiDay) {
            this.month = this.currentValue;
        } else if (this.currentValue) {
            this.month = this.items().length
                ? this.currentValue.to
                : this.currentValue.from;
        } else if (max && this.month.monthSameOrAfter(max)) {
            this.month = this.items().length ? max : max.append({month: -1});
        } else if (min && this.month.monthSameOrBefore(min)) {
            this.month = min;
        }
    }

    private findItemByDayRange(dayRange: TuiDayRange): TuiDayRangePeriod | null {
        return this.items().find((item) => dayRange.daySame(item.range)) ?? null;
    }
}
