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
    TuiMonth,
    tuiNullableSame,
    TuiTypedMapper,
    TuiYear,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';
import {TuiCalendarView, TuiMarkerHandler} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-calendar',
    templateUrl: './calendar.template.html',
    styleUrls: ['./calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarComponent implements TuiWithOptionalMinMax<TuiDay> {
    private day: TuiDay | TuiDayRange | readonly TuiDay[] | null = null;

    private view: TuiCalendarView = 'month';

    @Input()
    set initialView(view: TuiCalendarView) {
        this.view = view;
    }

    @Input()
    month: TuiMonth = TuiMonth.currentLocal();

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    min: TuiDay | null = TUI_FIRST_DAY;

    @Input()
    max: TuiDay | null = TUI_LAST_DAY;

    @Input()
    minViewedMonth: TuiMonth | null = TUI_FIRST_DAY;

    @Input()
    maxViewedMonth: TuiMonth | null = TUI_LAST_DAY;

    @Input()
    hoveredItem: TuiDay | null = null;

    @Input()
    showAdjacent = true;

    @Input()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    set value(value: TuiDay | TuiDayRange | readonly TuiDay[] | null) {
        this.day = value;

        if (this.showAdjacent && value instanceof TuiDay) {
            this.month = value;
        }
    }

    get value(): TuiDay | TuiDayRange | readonly TuiDay[] | null {
        return this.day;
    }

    @Output()
    readonly dayClick = new EventEmitter<TuiDay>();

    @Output()
    readonly monthChange = new EventEmitter<TuiMonth>();

    @Output()
    readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    get isInYearView(): boolean {
        return this.view === 'year';
    }

    readonly disabledItemHandlerMapper: TuiTypedMapper<
        [TuiBooleanHandler<TuiDay>, TuiDay, TuiDay],
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min, max) => item =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    get computedMin(): TuiDay {
        return this.min ?? TUI_FIRST_DAY;
    }

    get computedMax(): TuiDay {
        return this.max ?? TUI_LAST_DAY;
    }

    get computedMinViewedMonth(): TuiMonth {
        const min = this.computedMin;
        const minViewed = this.minViewedMonth ?? TUI_FIRST_DAY;

        return minViewed.monthSameOrAfter(min) ? minViewed : min;
    }

    get computedMaxViewedMonth(): TuiMonth {
        const max = this.computedMax;
        const maxViewed = this.maxViewedMonth ?? TUI_LAST_DAY;

        return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    }

    onPaginationYearClick(): void {
        this.view = 'year';
    }

    onPickerYearClick({year}: TuiYear): void {
        this.view = 'month';
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
