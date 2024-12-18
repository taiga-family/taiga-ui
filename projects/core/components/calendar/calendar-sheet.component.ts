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
        '[class._picking]': 'isSingleDayRange',
    },
})
export class TuiCalendarSheet {
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

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    @Output()
    public readonly dayClick = new EventEmitter<TuiDay>();

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

        if (value instanceof TuiDay) {
            return value.daySame(item) ? 'active' : null;
        }

        if (!value || !(value instanceof TuiDayRange)) {
            return value?.find((day) => day.daySame(item)) ? 'active' : null;
        }

        const range = this.getRange(value, hoveredItem);

        if (value.isSingleDay && range.isSingleDay && value.from.daySame(item)) {
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

    protected get isSingleDayRange(): boolean {
        return this.value instanceof TuiDayRange && this.value.isSingleDay;
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

    protected onItemClick(item: TuiDay): void {
        if (this.rangeHasDisabledDay(item)) {
            return;
        }

        this.dayClick.emit(item);
    }

    @tuiPure
    private getRange(value: TuiDayRange, hoveredItem: TuiDay | null): TuiDayRange {
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

    private rangeHasDisabledDay(item: TuiDay): boolean {
        if (this.value instanceof TuiDayRange) {
            const range = this.getRange(this.value, item);

            for (
                const day = range.from.toUtcNativeDate();
                day <= range.to.toUtcNativeDate();
                day.setDate(day.getDate() + 1)
            ) {
                const tuiDay = TuiDay.fromLocalNativeDate(day);

                if (this.disabledItemHandler(tuiDay)) {
                    return true;
                }
            }
        }

        return false;
    }
}
