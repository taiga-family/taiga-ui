import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    tuiDefaultProp,
    TuiMapper,
    TuiMonth,
    tuiNullableSame,
    TuiYear,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';
import {TuiMarkerHandler} from '@taiga-ui/core/types';

// @dynamic
@Component({
    selector: 'tui-calendar',
    templateUrl: './calendar.template.html',
    styleUrls: ['./calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarComponent implements TuiWithOptionalMinMax<TuiDay> {
    @Input()
    @tuiDefaultProp()
    month: TuiMonth = TuiMonth.currentLocal();

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
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    minViewedMonth: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
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

    onPaginationYearClick(year: TuiYear): void {
        this.year = year;
    }

    onPickerYearClick({year}: TuiYear): void {
        this.year = null;
        this.updateViewedMonth(new TuiMonth(year, this.month.month));
    }

    onPaginationValueChange(month: TuiMonth): void {
        this.updateViewedMonth(month);
    }

    onDayClick(day: TuiDay): void {
        this.dayClick.emit(day);
    }

    onHoveredItemChange(day: TuiDay | null): void {
        this.updateHoveredDay(day);
    }

    private updateViewedMonth(month: TuiMonth): void {
        if (this.month.monthSame(month)) {
            return;
        }

        this.month = month;
        this.monthChange.emit(month);
    }

    private updateHoveredDay(day: TuiDay | null): void {
        if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
