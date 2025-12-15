import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    linkedSignal,
    model,
    untracked,
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
export class TuiCalendarRange {
    private previousValue: TuiDay | TuiDayRange | null = null;
    protected readonly currentValue = linkedSignal<TuiDay | TuiDayRange | null>(() =>
        this.value(),
    );

    protected hoveredItem: TuiDay | null = null;
    public readonly month = linkedSignal<
        {min: TuiDay | null; max: TuiDay | null},
        TuiMonth
    >({
        source: () => ({min: this.min(), max: this.max()}),
        computation: (source, previous) => {
            return this.calculateDefaultViewedMonth(
                previous?.value ?? TuiMonth.currentLocal(),
                source.min,
                source.max,
            );
        },
    });

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

    public readonly value = model<TuiDayRange | null>(null);

    protected readonly whenDefaultViewedMonth = effect(() => {
        const month = this.defaultViewedMonth();

        if (!this.currentValue()) {
            this.month.set(month);
        }
    });

    public readonly defaultViewedMonth = input<TuiMonth>(TuiMonth.currentLocal());

    protected get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay> {
        return this.calculateDisabledItemHandler(
            this.disabledItemHandler(),
            this.currentValue(),
            this.minLength(),
        );
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

        this.month.set(
            this.calculateDefaultViewedMonth(this.month(), this.min(), this.max()),
        );
    }

    protected onMonthChange(month: TuiMonth): void {
        this.month.set(month);
    }

    protected onDayClick(day: TuiDay): void {
        const currentValue = this.currentValue();

        this.previousValue = currentValue;
        this.item.set(null);

        if (currentValue instanceof TuiDay) {
            const range = TuiDayRange.sort(currentValue, day);

            this.currentValue.set(range);
            this.item.set(this.findItemByDayRange(range));
            this.updateValue(range);
        } else {
            this.currentValue.set(day);
        }
    }

    protected updateValue(value: TuiDayRange | null): void {
        this.value.set(value);
    }

    private get activePeriod(): TuiDayRangePeriod | null {
        const currentValue = this.currentValue();

        return (
            this.item() ??
            (this.items().find((item) =>
                tuiNullableSame<TuiDayRange>(
                    currentValue instanceof TuiDay
                        ? new TuiDayRange(currentValue, currentValue)
                        : currentValue,
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

    private calculateDefaultViewedMonth(
        month: TuiMonth,
        min: TuiDay | null,
        max: TuiDay | null,
    ): TuiMonth {
        const currentValue = untracked(this.currentValue);

        if (currentValue instanceof TuiDay) {
            return currentValue;
        } else if (currentValue) {
            return this.items().length ? currentValue.to : currentValue.from;
        } else if (max && month.monthSameOrAfter(max)) {
            return this.items().length ? max : max.append({month: -1});
        } else if (min && month.monthSameOrBefore(min)) {
            return min;
        }

        return month;
    }

    private findItemByDayRange(dayRange: TuiDayRange): TuiDayRangePeriod | null {
        return this.items().find((item) => dayRange.daySame(item.range)) ?? null;
    }
}
