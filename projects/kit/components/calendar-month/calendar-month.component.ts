import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    tuiDefaultProp,
    TuiMonth,
    TuiMonthRange,
    tuiNullableSame,
    tuiPure,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiInteractiveState, TuiRangeState, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {TuiMonthContext} from '@taiga-ui/kit/interfaces';
import {TUI_CALENDAR_MONTHS} from '@taiga-ui/kit/tokens';
import {TuiBooleanHandlerWithContext} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';

const TODAY = TuiDay.currentLocal();

// @dynamic
@Component({
    selector: `tui-calendar-month`,
    templateUrl: `./calendar-month.template.html`,
    styleUrls: [`./calendar-month.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarMonthComponent implements TuiWithOptionalMinMax<TuiMonth> {
    @Input()
    @tuiDefaultProp()
    value: TuiMonthRange | TuiMonth | null = null;

    @Input()
    @tuiDefaultProp()
    year: TuiYear = TODAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> =
        ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = TUI_LAST_DAY;

    @Output()
    readonly monthClick = new EventEmitter<TuiMonth>();

    @Output()
    readonly hoveredItemChange = new EventEmitter<TuiMonth | null>();

    @Output()
    readonly yearChange = new EventEmitter<TuiYear>();

    isYearPickerShown = false;

    hoveredItem: TuiMonth | null = null;
    pressedItem: TuiMonth | null = null;

    constructor(
        @Inject(TUI_CALENDAR_MONTHS) readonly months$: Observable<readonly string[]>,
    ) {}

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof TuiMonth || this.value.isSingleMonth)
        );
    }

    get previousYearDisabled(): boolean {
        return this.year.yearSameOrBefore(this.min);
    }

    get nextYearDisabled(): boolean {
        return this.year.yearSameOrAfter(this.max);
    }

    getItemState(item: TuiMonth): TuiInteractiveState | null {
        const {disabledItemHandlerWithMinMax, pressedItem, hoveredItem} = this;

        if (disabledItemHandlerWithMinMax(item)) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem?.monthSame(item)) {
            return TuiInteractiveState.Pressed;
        }

        if (hoveredItem?.monthSame(item)) {
            return TuiInteractiveState.Hovered;
        }

        return null;
    }

    getItemRange(item: TuiMonth): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof TuiMonth) {
            return value.monthSame(item) ? TuiRangeState.Single : null;
        }

        const theFirstOfRange = value.from.monthSame(item) && !value.isSingleMonth;
        const hoveredItemAfterFrom =
            hoveredItem?.monthAfter(value.from) &&
            value.from.monthSame(item) &&
            value.isSingleMonth;
        const hoveredItemIsCandidateToBeFrom =
            hoveredItem?.monthSame(item) &&
            hoveredItem?.monthBefore(value.from) &&
            value.isSingleMonth;

        if (theFirstOfRange || hoveredItemAfterFrom || hoveredItemIsCandidateToBeFrom) {
            return TuiRangeState.Start;
        }

        const theLastOfRange = value.to.monthSame(item) && !value.isSingleMonth;
        const hoveredItemBeforeTo =
            value.to.monthSame(item) &&
            hoveredItem?.monthBefore(value.to) &&
            value.isSingleMonth;
        const hoveredItemIsCandidateToBeTo =
            hoveredItem?.monthSame(item) &&
            hoveredItem?.monthAfter(value.from) &&
            value.isSingleMonth;

        if (theLastOfRange || hoveredItemBeforeTo || hoveredItemIsCandidateToBeTo) {
            return TuiRangeState.End;
        }

        return value.isSingleMonth && value.from.monthSame(item)
            ? TuiRangeState.Single
            : null;
    }

    getTuiMonth(monthNumber: number, yearNumber: number): TuiMonth {
        return new TuiMonth(yearNumber, monthNumber);
    }

    isItemToday(item: TuiMonth): boolean {
        return TODAY.monthSame(item);
    }

    isItemInsideRange(month: TuiMonth): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof TuiMonth) {
            return false;
        }

        if (!value.isSingleMonth) {
            return value.from.monthSameOrBefore(month) && value.to.monthAfter(month);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = TuiMonthRange.sort(value.from, hoveredItem);

        return range.from.monthSameOrBefore(month) && range.to.monthAfter(month);
    }

    onPickerYearClick(year: TuiYear): void {
        this.isYearPickerShown = false;

        if (this.year.yearSame(year)) {
            return;
        }

        this.updateActiveYear(year);
    }

    onItemClick(month: TuiMonth): void {
        if (this.disabledItemHandlerWithMinMax(month)) {
            return;
        }

        this.monthClick.emit(month);
    }

    onYearClick(): void {
        this.isYearPickerShown = true;
    }

    onNextYear(): void {
        this.updateActiveYear(this.year.append({year: 1}));
    }

    onPreviousYear(): void {
        this.updateActiveYear(this.year.append({year: -1}));
    }

    onItemHovered(hovered: boolean, item: TuiMonth): void {
        this.updateHoveredItem(hovered ? item : null);
    }

    onItemPressed(pressed: boolean, item: TuiMonth): void {
        this.updatePressedItem(pressed ? item : null);
    }

    @tuiPure
    private calculateDisabledItemHandlerWithMinMax(
        disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>,
        value: TuiMonth | TuiMonthRange | null,
        min: TuiMonth,
        max: TuiMonth,
    ): TuiBooleanHandler<TuiMonth> {
        return item =>
            item.monthBefore(min) ||
            item.monthAfter(max) ||
            disabledItemHandler(item, {value});
    }

    private get disabledItemHandlerWithMinMax(): TuiBooleanHandler<TuiMonth> {
        return this.calculateDisabledItemHandlerWithMinMax(
            this.disabledItemHandler,
            this.value,
            this.min,
            this.max,
        );
    }

    private updateHoveredItem(month: TuiMonth | null): void {
        if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
            return;
        }

        this.hoveredItem = month;
        this.hoveredItemChange.emit(month);
    }

    private updatePressedItem(item: TuiMonth | null): void {
        this.pressedItem = item;
    }

    private updateActiveYear(year: TuiYear): void {
        this.year = year;
        this.yearChange.emit(year);
    }
}
