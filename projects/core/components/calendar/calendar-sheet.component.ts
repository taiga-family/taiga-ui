import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    input,
    model,
    output,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiNullableSame} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';

import {TUI_CALENDAR_OPTIONS} from './calendar.options';
import {TUI_CALENDAR_SHEET_OPTIONS} from './calendar-sheet.options';
import {TuiCalendarSheetPipe} from './calendar-sheet.pipe';
import {TuiOrderWeekDaysPipe} from './order-week-days.pipe';

export type TuiMarkerHandler = TuiHandler<TuiDay, [] | [string, string] | [string]>;

@Component({
    selector: 'tui-calendar-sheet',
    imports: [
        AsyncPipe,
        TuiCalendarSheetPipe,
        TuiHovered,
        TuiMapperPipe,
        TuiOrderWeekDaysPipe,
    ],
    templateUrl: './calendar-sheet.template.html',
    styleUrl: './calendar-sheet.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[class._picking]': 'isRangePicking'},
})
export class TuiCalendarSheet {
    private readonly options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    private readonly today = TuiDay.currentLocal();

    protected readonly unorderedWeekDays$ = toObservable(inject(TUI_SHORT_WEEK_DAYS));
    protected readonly dayType = inject(TUI_CALENDAR_OPTIONS).dayType;

    public readonly month = input(TuiMonth.currentLocal());
    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiDay>>(TUI_FALSE_HANDLER);

    public readonly markerHandler = input<TuiMarkerHandler | null>(null);
    public readonly value = input<TuiDay | TuiDayRange | readonly TuiDay[] | null>(null);
    public readonly showAdjacent = input(true);
    public readonly hoveredItem = model<TuiDay | null>(null);

    public readonly dayClick = output<TuiDay>();

    /**
     * @deprecated use static DI options instead
     * ```
     * tuiCalendarSheetOptionsProvider({rangeMode: true})
     * ```
     * TODO(v5): delete it
     */
    @Input()
    public single = true;

    public onItemHovered(item: TuiDay | false): void {
        this.updateHoveredItem(item || null);
    }

    public getItemRange(item: TuiDay): 'active' | 'end' | 'middle' | 'start' | null {
        const value = this.value();

        if (!value) {
            return null;
        }

        if (value instanceof TuiDay && !this.computedRangeMode) {
            return value.daySame(item) ? 'active' : null;
        }

        if (value instanceof TuiDayRange && value.isSingleDay) {
            return value.from.daySame(item) ? 'active' : null;
        }

        if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) {
            return value.find((day) => day.daySame(item)) ? 'active' : null;
        }

        const range = this.getRange(value, this.hoveredItem());

        if (range.isSingleDay && range.from.daySame(item)) {
            return 'active';
        }

        if (range.from.daySame(item)) {
            return 'start';
        }

        if (range.to.daySame(item)) {
            return 'end';
        }

        return range.from.dayBefore(item) && range.to.dayAfter(item) ? 'middle' : null;
    }

    protected get computedRangeMode(): boolean {
        return !this.single || this.options.rangeMode;
    }

    protected get isRangePicking(): boolean {
        const value = this.value();

        return this.computedRangeMode
            ? value instanceof TuiDay
            : /**
               * Only for backward compatibility!
               * TODO(v5): replace with `this.options.rangeMode && this.value instanceof TuiDay`
               */
              value instanceof TuiDayRange && value.isSingleDay;
    }

    protected readonly toMarkers = (
        day: TuiDay,
        today: boolean,
        range: string | null,
        markerHandler: TuiMarkerHandler | null,
    ): [string, string] | [string] | null => {
        if (today || ['active', 'end', 'start'].includes(range || '')) {
            return null;
        }

        const markers = markerHandler?.(day);

        return markers?.length ? markers : null;
    };

    protected itemIsToday(item: TuiDay): boolean {
        return this.today.daySame(item);
    }

    protected itemIsUnavailable(item: TuiDay): boolean {
        return !this.month().monthSame(item);
    }

    private getRange(
        value: TuiDay | TuiDayRange,
        hoveredItem: TuiDay | null,
    ): TuiDayRange {
        if (value instanceof TuiDay) {
            return TuiDayRange.sort(value, hoveredItem ?? value);
        }

        return value.isSingleDay
            ? TuiDayRange.sort(value.from, hoveredItem ?? value.to)
            : value;
    }

    private updateHoveredItem(day: TuiDay | null): void {
        if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem.set(day);
    }
}
