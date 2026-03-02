import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EventEmitter,
    inject,
    Input,
    input,
    linkedSignal,
    model,
    type OnChanges,
    type OnInit,
    Output,
} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
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
import {type TuiBooleanHandler, type TuiMapper} from '@taiga-ui/cdk/types';
import {tuiIsString, tuiNullableSame} from '@taiga-ui/cdk/utils/miscellaneous';
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
    /**
     * @deprecated use `item`
     */
    private selectedPeriod: TuiDayRangePeriod | null = null;

    protected readonly currentValue = linkedSignal<TuiDay | TuiDayRange | null>(() =>
        this.value(),
    );

    protected previousValue: TuiDay | TuiDayRange | null = null;
    protected hoveredItem: TuiDay | null = null;
    protected month: TuiMonth = TuiMonth.currentLocal();

    protected readonly otherDateText = inject(TUI_OTHER_DATE_TEXT);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly capsMapper = TUI_DAY_CAPS_MAPPER;
    protected readonly mobile = inject(WA_IS_MOBILE);

    protected readonly valueChange = effect(() => this.initDefaultViewedMonth());

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Input()
    public items: readonly TuiDayRangePeriod[] = [];

    public readonly min = input<TuiDay | null>(TUI_FIRST_DAY);
    public readonly max = input<TuiDay | null>(TUI_LAST_DAY);
    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiDay>>(TUI_FALSE_HANDLER);

    public readonly value = model<TuiDayRange | null>(null);

    @Input()
    public minLength: TuiDayLike | null = null;

    @Input()
    public maxLength: TuiDayLike | null = null;

    @Input()
    public item: TuiDayRangePeriod | null = null;

    @Output()
    public readonly itemChange = new EventEmitter<TuiDayRangePeriod | null>();

    @Input()
    public set defaultViewedMonth(month: TuiMonth) {
        if (!this.currentValue()) {
            this.month = month;
        }
    }

    public get defaultViewedMonth(): TuiMonth {
        return this.month;
    }

    /**
     * @deprecated use `item`
     */
    public get selectedActivePeriod(): TuiDayRangePeriod | null {
        return this.selectedPeriod;
    }

    /**
     * @deprecated use `item`
     */
    public set selectedActivePeriod(period: TuiDayRangePeriod | null) {
        this.selectedPeriod = period;
    }

    public ngOnChanges(): void {
        if (!this.currentValue()) {
            this.initDefaultViewedMonth();
        }
    }

    public ngOnInit(): void {
        this.initDefaultViewedMonth();
    }

    protected onEsc(event: KeyboardEvent): void {
        if (event.key !== 'Escape' || !(this.currentValue() instanceof TuiDay)) {
            return;
        }

        event.stopPropagation();
        this.currentValue.set(this.previousValue);
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

    protected readonly disabledMapper = (
        disabledItemHandler: TuiBooleanHandler<TuiDay>,
        value: TuiDay | TuiDayRange | null,
        minLength: TuiDayLike | null,
    ): TuiBooleanHandler<TuiDay> =>
        calculateDisabledItemHandler(disabledItemHandler, value, minLength);

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
            this.selectedActivePeriod = item;
            this.itemChange.emit(item);
            this.value.set(item.range.dayLimit(this.min(), this.max()));
        } else if (this.activePeriod !== null) {
            this.selectedActivePeriod = null;
            this.itemChange.emit(null);
            this.value.set(null);
        }

        this.initDefaultViewedMonth();
    }

    protected onMonthChange(month: TuiMonth): void {
        this.month = month;
    }

    protected onDayClick(day: TuiDay): void {
        const value = this.currentValue();

        this.previousValue = value;
        this.selectedActivePeriod = null;

        if (value instanceof TuiDay) {
            const range = TuiDayRange.sort(value, day);

            this.currentValue.set(range);
            this.itemChange.emit(this.findItemByDayRange(range));
            this.value.set(range);
        } else {
            this.currentValue.set(day);
        }
    }

    private get activePeriod(): TuiDayRangePeriod | null {
        const value = this.currentValue();

        return (
            this.item ??
            this.selectedActivePeriod ??
            (this.items.find((item) =>
                tuiNullableSame<TuiDayRange>(
                    value instanceof TuiDay ? new TuiDayRange(value, value) : value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min(), this.max())) &&
                        a.to.daySame(b.to.dayLimit(this.min(), this.max())),
                ),
            ) ||
                null)
        );
    }

    private initDefaultViewedMonth(): void {
        const min = this.min();
        const max = this.max();
        const value = this.currentValue();

        if (value instanceof TuiDay) {
            this.month = value;
        } else if (value) {
            this.month = this.items.length ? value.to : value.from;
        } else if (max && this.month.monthSameOrAfter(max)) {
            this.month = this.items.length ? max : max.append({month: -1});
        } else if (min && this.month.monthSameOrBefore(min)) {
            this.month = min;
        }
    }

    private findItemByDayRange(dayRange: TuiDayRange): TuiDayRangePeriod | null {
        return this.items.find((item) => dayRange.daySame(item.range)) ?? null;
    }
}
