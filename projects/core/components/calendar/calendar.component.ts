import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    linkedSignal,
    model,
    output,
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
    host: {
        '(pointerdown.prevent.zoneless)': '0',
    },
})
export class TuiCalendar {
    private readonly view = linkedSignal(() => this.initialView());
    protected readonly options = inject(TUI_CALENDAR_SHEET_OPTIONS);

    public readonly month = model<TuiMonth>(TuiMonth.currentLocal());

    public readonly disabledItemHandler = input<TuiBooleanHandler<TuiDay>>(
        inject(TUI_ITEMS_HANDLERS).disabledItemHandler(),
    );

    public readonly min = input<TuiDay | null>(TUI_FIRST_DAY);

    public readonly max = input<TuiDay | null>(TUI_LAST_DAY);

    public readonly minViewedMonth = input<TuiMonth | null>(TUI_FIRST_DAY);

    public readonly maxViewedMonth = input<TuiMonth | null>(TUI_LAST_DAY);

    public readonly hoveredItem = model<TuiDay | null>(null);

    public readonly showAdjacent = input(true);

    public readonly markerHandler = input<TuiMarkerHandler | null>(null);

    public readonly dayClick = output<TuiDay>();

    public readonly value = model<TuiDay | TuiDayRange | readonly TuiDay[] | null>(null);

    protected readonly whenValueChange = effect(() => {
        const value = this.value();

        if (
            this.showAdjacent() &&
            value instanceof TuiDay &&
            value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)
        ) {
            this.month.set(value);
        }
    });

    public readonly initialView = input<'month' | 'year'>('month');

    public onPaginationValueChange(month: TuiMonth): void {
        this.updateViewedMonth(month);
    }

    public onDayClick(day: TuiDay): void {
        this.dayClick.emit(day);
        this.value.set(day);
    }

    public onHoveredItemChange(day: TuiDay | null): void {
        this.updateHoveredDay(day);
    }

    protected get computedMin(): TuiDay {
        return this.min() ?? TUI_FIRST_DAY;
    }

    protected get computedMax(): TuiDay {
        return this.max() ?? TUI_LAST_DAY;
    }

    protected get computedMinViewedMonth(): TuiMonth {
        const min = this.computedMin;
        const minViewed = this.minViewedMonth() ?? TUI_FIRST_DAY;

        return minViewed.monthSameOrAfter(min) ? minViewed : min;
    }

    protected get computedMaxViewedMonth(): TuiMonth {
        const max = this.computedMax;
        const maxViewed = this.maxViewedMonth() ?? TUI_LAST_DAY;

        return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    }

    protected get isInYearView(): boolean {
        return this.view() === 'year';
    }

    protected readonly disabledItemHandlerMapper: TuiMapper<
        [TuiBooleanHandler<TuiDay>, TuiDay, TuiDay],
        TuiBooleanHandler<TuiDay>
    > = (disabledItemHandler, min, max) => (item) =>
        item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);

    protected onPaginationYearClick(): void {
        this.view.set('year');
    }

    protected onPickerYearClick(year: number): void {
        this.view.set('month');
        this.updateViewedMonth(new TuiMonth(year, this.month().month));
    }

    private updateViewedMonth(month: TuiMonth): void {
        if (this.month().monthSame(month)) {
            return;
        }

        this.month.set(month);
    }

    private updateHoveredDay(day: TuiDay | null): void {
        if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem.set(day);
    }
}
