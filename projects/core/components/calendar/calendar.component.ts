import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    nullableSame,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    tuiDefaultProp,
    TuiMapper,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';
import {TuiMarkerHandler} from '@taiga-ui/core/types';

function maxDayAssertion(max: TuiDay, context: {min: TuiDay}): boolean {
    return max.dayAfter(context.min);
}

function maxMonthAssertion(
    maxViewedMonth: TuiMonth,
    context: {minViewedMonth: TuiMonth},
): boolean {
    return maxViewedMonth.month >= context.minViewedMonth.month;
}

const incorrectMaxMessage = 'Min value must be less than max value';
const incorrectMaxMonthMessage =
    'Min month value must be equal or less than max month value';

@Component({
    selector: 'tui-calendar',
    templateUrl: './calendar.template.html',
    styleUrls: ['./calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarComponent implements TuiWithOptionalMinMax<TuiDay> {
    @Input()
    @tuiDefaultProp()
    month = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    value: TuiDayRange | TuiDay | null = null;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp(maxDayAssertion, incorrectMaxMessage)
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    minViewedMonth: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp(maxMonthAssertion, incorrectMaxMonthMessage)
    maxViewedMonth: TuiMonth = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    hoveredItem: TuiDay | null = null;

    @Input()
    @tuiDefaultProp()
    showAdjacent = true;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Output()
    readonly dayClick = new EventEmitter<TuiDay>();

    @Output()
    readonly monthChange = new EventEmitter<TuiMonth>();

    @Output()
    readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    year: TuiYear | null = null;

    readonly disabledItemHandlerMapper: TuiMapper<
        TuiBooleanHandler<TuiDay>,
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min: TuiDay, max: TuiDay) => item =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    get computedMonth(): TuiMonth {
        const {month, computedMinViewedMonth, computedMaxViewedMonth} = this;

        if (month.monthBefore(computedMinViewedMonth)) {
            return computedMinViewedMonth;
        }

        if (month.monthAfter(computedMaxViewedMonth)) {
            return computedMaxViewedMonth;
        }

        return month;
    }

    get computedMinViewedMonth(): TuiMonth {
        return this.minViewedMonth.monthSameOrAfter(this.min)
            ? this.minViewedMonth
            : this.min;
    }

    get computedMaxViewedMonth(): TuiMonth {
        return this.maxViewedMonth.monthSameOrBefore(this.max)
            ? this.maxViewedMonth
            : this.max;
    }

    onPaginationYearClick(year: TuiYear) {
        this.year = year;
    }

    onPickerYearClick({year}: TuiYear) {
        this.year = null;
        this.updateViewedMonth(new TuiMonth(year, this.computedMonth.month));
    }

    onPaginationValueChange(month: TuiMonth) {
        this.updateViewedMonth(month);
    }

    onDayClick(day: TuiDay) {
        this.dayClick.emit(day);
    }

    onHoveredItemChange(day: TuiDay | null) {
        this.updateHoveredDay(day);
    }

    private updateViewedMonth(month: TuiMonth) {
        if (this.month.monthSame(month)) {
            return;
        }

        this.month = month;
        this.monthChange.emit(month);
    }

    private updateHoveredDay(day: TuiDay | null) {
        if (nullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
