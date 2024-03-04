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
    type TuiBooleanHandler,
    TuiDay,
    type TuiDayRange,
    TuiMonth,
    tuiNullableSame,
    type TuiTypedMapper,
    type TuiYear,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {type TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';
import {type TuiCalendarView, type TuiMarkerHandler} from '@taiga-ui/core/types';

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
    public month: TuiMonth = TuiMonth.currentLocal();

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    public min: TuiDay | null = TUI_FIRST_DAY;

    @Input()
    public max: TuiDay | null = TUI_LAST_DAY;

    @Input()
    public minViewedMonth: TuiMonth | null = TUI_FIRST_DAY;

    @Input()
    public maxViewedMonth: TuiMonth | null = TUI_LAST_DAY;

    @Input()
    public hoveredItem: TuiDay | null = null;

    @Input()
    public showAdjacent = true;

    @Input()
    public markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Output()
    public readonly dayClick = new EventEmitter<TuiDay>();

    @Output()
    public readonly monthChange = new EventEmitter<TuiMonth>();

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    @Input()
    public set value(value: TuiDay | TuiDayRange | readonly TuiDay[] | null) {
        this.day = value;

        if (this.showAdjacent && value instanceof TuiDay) {
            this.month = value;
        }
    }

    @Input()
    public set initialView(view: TuiCalendarView) {
        this.view = view;
    }

    public get value(): TuiDay | TuiDayRange | readonly TuiDay[] | null {
        return this.day;
    }

    public onPaginationValueChange(month: TuiMonth): void {
        this.updateViewedMonth(month);
    }

    public onDayClick(day: TuiDay): void {
        this.dayClick.emit(day);
    }

    public onHoveredItemChange(day: TuiDay | null): void {
        this.updateHoveredDay(day);
    }

    protected get computedMin(): TuiDay {
        return this.min ?? TUI_FIRST_DAY;
    }

    protected get computedMax(): TuiDay {
        return this.max ?? TUI_LAST_DAY;
    }

    protected get computedMinViewedMonth(): TuiMonth {
        const min = this.computedMin;
        const minViewed = this.minViewedMonth ?? TUI_FIRST_DAY;

        return minViewed.monthSameOrAfter(min) ? minViewed : min;
    }

    protected get computedMaxViewedMonth(): TuiMonth {
        const max = this.computedMax;
        const maxViewed = this.maxViewedMonth ?? TUI_LAST_DAY;

        return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    }

    protected get isInYearView(): boolean {
        return this.view === 'year';
    }

    protected readonly disabledItemHandlerMapper: TuiTypedMapper<
        [TuiBooleanHandler<TuiDay>, TuiDay, TuiDay],
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min, max) => item =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    protected onPaginationYearClick(): void {
        this.view = 'year';
    }

    protected onPickerYearClick({year}: TuiYear): void {
        this.view = 'month';
        this.updateViewedMonth(new TuiMonth(year, this.month.month));
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
