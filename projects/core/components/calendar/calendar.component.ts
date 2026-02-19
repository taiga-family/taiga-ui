import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    input,
    Output,
} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TUI_LAST_DISPLAYED_DAY,
    TuiDay,
    type TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiMapper} from '@taiga-ui/cdk/types';
import {tuiNullableSame} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {Subject} from 'rxjs';

import {TuiCalendarSheet, type TuiMarkerHandler} from './calendar-sheet.component';
import {TUI_CALENDAR_SHEET_OPTIONS} from './calendar-sheet.options';
import {TuiCalendarSpin} from './calendar-spin.component';
import {TuiCalendarYear} from './calendar-year.component';

@Component({
    selector: 'tui-calendar',
    imports: [
        TuiCalendarSheet,
        TuiCalendarSpin,
        TuiCalendarYear,
        TuiMapperPipe,
        TuiScrollbar,
    ],
    templateUrl: './calendar.template.html',
    styleUrl: './calendar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiCalendar)],
    host: {'(pointerdown.prevent.zoneless)': '0'},
})
export class TuiCalendar {
    private readonly cdr = inject(ChangeDetectorRef);
    private day: TuiDay | TuiDayRange | readonly TuiDay[] | null = null;
    private view: 'month' | 'year' = 'month';
    protected readonly options = inject(TUI_CALENDAR_SHEET_OPTIONS);

    @Input()
    public month: TuiMonth = TuiMonth.currentLocal();

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> =
        inject(TUI_ITEMS_HANDLERS).disabledItemHandler();

    public readonly min = input(TUI_FIRST_DAY, {
        transform: (x: TuiDay | null) => x ?? TUI_FIRST_DAY,
    });

    public readonly max = input(TUI_LAST_DAY, {
        transform: (x: TuiDay | null) => x ?? TUI_LAST_DAY,
    });

    public readonly minViewedMonth = input<TuiMonth | null>(TUI_FIRST_DAY);
    public readonly maxViewedMonth = input<TuiMonth | null>(TUI_LAST_DAY);

    protected readonly computedMinViewedMonth = computed(() => {
        const min = this.min();
        const minViewed = this.minViewedMonth() ?? TUI_FIRST_DAY;

        return minViewed.monthSameOrAfter(min) ? minViewed : min;
    });

    protected readonly computedMaxViewedMonth = computed(() => {
        const max = this.max();
        const maxViewed = this.maxViewedMonth() ?? TUI_LAST_DAY;

        return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    });

    @Input()
    public hoveredItem: TuiDay | null = null;

    @Input()
    public showAdjacent = true;

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Output()
    public readonly dayClick = new EventEmitter<TuiDay>();

    @Output()
    public readonly monthChange = new EventEmitter<TuiMonth>();

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    /** @deprecated for private use only until Calendars are refactored */
    public readonly valueChange = new Subject<TuiDay>();

    @Input()
    public set value(value: TuiDay | TuiDayRange | readonly TuiDay[] | null) {
        this.cdr.markForCheck();
        this.day = value;

        if (
            this.showAdjacent &&
            value instanceof TuiDay &&
            value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)
        ) {
            this.month = value;
        }
    }

    @Input()
    public set initialView(view: 'month' | 'year') {
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
        this.valueChange.next(day);
    }

    public onHoveredItemChange(day: TuiDay | null): void {
        this.updateHoveredDay(day);
    }

    protected get isInYearView(): boolean {
        return this.view === 'year';
    }

    protected readonly disabledItemHandlerMapper: TuiMapper<
        [TuiBooleanHandler<TuiDay>, TuiDay, TuiDay],
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min, max) => (item) =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    protected onPaginationYearClick(): void {
        this.view = 'year';
    }

    protected onPickerYearClick(year: number): void {
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
