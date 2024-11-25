import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import type {TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk/types';
import {tuiNullableSame, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendarSheetPipe, TuiOrderWeekDaysPipe} from '@taiga-ui/core/pipes';
import {TUI_DAY_TYPE_HANDLER, TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';

import {TUI_CALENDAR_SHEET_OPTIONS} from './calendar-sheet.options';

export type TuiMarkerHandler = TuiHandler<TuiDay, [] | [string, string] | [string]>;

@Component({
    standalone: true,
    selector: 'tui-calendar-sheet',
    imports: [
        CommonModule,
        TuiCalendarSheetPipe,
        TuiHovered,
        TuiLet,
        TuiMapperPipe,
        TuiOrderWeekDaysPipe,
        TuiRepeatTimes,
    ],
    templateUrl: './calendar-sheet.template.html',
    styleUrls: ['./calendar-sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._picking]': 'isRangePicking',
    },
})
export class TuiCalendarSheet {
    private readonly options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    private readonly today = TuiDay.currentLocal();

    protected readonly unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
    protected readonly dayTypeHandler = inject(TUI_DAY_TYPE_HANDLER);

    @Input()
    public month: TuiMonth = TuiMonth.currentLocal();

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Input()
    public value: TuiDay | TuiDayRange | readonly TuiDay[] | null = null;

    @Input()
    public hoveredItem: TuiDay | null = null;

    @Input()
    public showAdjacent = true;

    /**
     * @deprecated use static DI options instead
     * ```
     * tuiCalendarSheetOptionsProvider({rangeMode: true})
     * ```
     * TODO(v5): delete it
     */
    @Input()
    public single = true;

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    @Output()
    public readonly dayClick = new EventEmitter<TuiDay>();

    /**
     * @deprecated TODO(v5): delete it. It is used nowhere except unit tests
     */
    public itemIsInterval(day: TuiDay): boolean {
        const {value, hoveredItem} = this;

        if (!(value instanceof TuiDayRange)) {
            return false;
        }

        if (!value.isSingleDay) {
            return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = TuiDayRange.sort(value.from, hoveredItem);

        return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
    }

    public onItemHovered(item: TuiDay | false): void {
        this.updateHoveredItem(item || null);
    }

    public getItemRange(item: TuiDay): 'active' | 'end' | 'middle' | 'start' | null {
        const {value, hoveredItem} = this;

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

        const range = this.getRange(value, hoveredItem);

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
        return this.computedRangeMode
            ? this.value instanceof TuiDay
            : /**
               * Only for backward compatibility!
               * TODO(v5): replace with `this.options.rangeMode && this.value instanceof TuiDay`
               */
              this.value instanceof TuiDayRange && this.value.isSingleDay;
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
        return !this.month.monthSame(item);
    }

    @tuiPure
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
        if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
