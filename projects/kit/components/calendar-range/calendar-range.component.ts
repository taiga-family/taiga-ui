import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {OnChanges, OnInit} from '@angular/core';
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
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDay, TuiDayLike} from '@taiga-ui/cdk/date-time';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import type {TuiBooleanHandler, TuiMapper} from '@taiga-ui/cdk/types';
import {tuiIsString, tuiNullableSame, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiMarkerHandler} from '@taiga-ui/core/components/calendar';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_CALENDAR_DATE_STREAM, TUI_OTHER_DATE_TEXT} from '@taiga-ui/kit/tokens';
import type {Observable} from 'rxjs';

import {TUI_DAY_CAPS_MAPPER} from './day-caps-mapper';
import type {TuiDayRangePeriod} from './day-range-period';

@Component({
    standalone: true,
    selector: 'tui-calendar-range',
    imports: [AsyncPipe, NgIf, NgForOf, TuiMapperPipe, TuiCalendar, TuiDataList, TuiIcon],
    templateUrl: './calendar-range.template.html',
    styleUrls: ['./calendar-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarRange implements OnInit, OnChanges {
    protected readonly otherDateText$ = inject(TUI_OTHER_DATE_TEXT);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly cdr = inject(ChangeDetectorRef);
    protected previousValue: TuiDayRange | null = null;
    protected hoveredItem: TuiDay | null = null;
    protected readonly capsMapper = TUI_DAY_CAPS_MAPPER;

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

    public selectedActivePeriod: TuiDayRangePeriod | null = null;

    constructor() {
        inject<Observable<TuiDayRange | null>>(TUI_CALENDAR_DATE_STREAM, {optional: true})
            ?.pipe(tuiWatch(this.cdr), takeUntilDestroyed())
            .subscribe((value) => {
                this.value = value;
            });
    }

    public ngOnChanges(): void {
        this.defaultViewedMonth = this.value?.from || this.defaultViewedMonth;
    }

    public ngOnInit(): void {
        if (!this.value) {
            this.updateDefaultViewedMonth();
        }
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
            (item) =>
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
        if (!tuiIsString(item)) {
            this.selectedActivePeriod = item;
            this.updateValue(item.range.dayLimit(this.min, this.max));
        } else if (this.activePeriod !== null) {
            this.selectedActivePeriod = null;
            this.updateValue(null);
        }
    }

    protected onMonthChange(month: TuiMonth): void {
        this.defaultViewedMonth = month;
    }

    protected onDayClick(day: TuiDay): void {
        this.previousValue = this.value;
        this.selectedActivePeriod = null;

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
            this.selectedActivePeriod ??
            (this.items.find((item) =>
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
        return (item) => {
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

    private updateDefaultViewedMonth(): void {
        if (this.max && this.defaultViewedMonth.monthSameOrAfter(this.max)) {
            this.defaultViewedMonth = this.max.append({month: -1});
        }

        if (this.min && this.defaultViewedMonth.monthSameOrBefore(this.min)) {
            this.defaultViewedMonth = this.min;
        }
    }
}
