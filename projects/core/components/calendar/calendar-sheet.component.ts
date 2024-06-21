import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
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
import {tuiNullableSame} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendarSheetPipe, TuiOrderWeekDaysPipe} from '@taiga-ui/core/pipes';
import {TUI_DAY_TYPE_HANDLER, TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';
import type {TuiRangeState} from '@taiga-ui/core/types';

export type TuiMarkerHandler = TuiHandler<TuiDay, [] | [string, string] | [string]>;

@Component({
    standalone: true,
    selector: 'tui-calendar-sheet',
    imports: [
        CommonModule,
        TuiLet,
        TuiMapperPipe,
        TuiRepeatTimes,
        TuiHovered,
        TuiCalendarSheetPipe,
        TuiOrderWeekDaysPipe,
    ],
    templateUrl: './calendar-sheet.template.html',
    styleUrls: ['./calendar-sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    public getItemRange(item: TuiDay): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (!value) {
            return null;
        }

        if (value instanceof TuiDay) {
            return value.daySame(item) ? 'single' : null;
        }

        if (!(value instanceof TuiDayRange)) {
            return value.find(day => day.daySame(item)) ? 'single' : null;
        }

        if (
            (value.from.daySame(item) && !value.isSingleDay) ||
            (hoveredItem?.dayAfter(value.from) &&
                value.from.daySame(item) &&
                value.isSingleDay) ||
            (hoveredItem?.daySame(item) &&
                hoveredItem.dayBefore(value.from) &&
                value.isSingleDay)
        ) {
            return 'start';
        }

        if (
            (value.to.daySame(item) && !value.isSingleDay) ||
            (hoveredItem?.dayBefore(value.from) &&
                value.from.daySame(item) &&
                value.isSingleDay) ||
            (hoveredItem?.daySame(item) &&
                hoveredItem.dayAfter(value.from) &&
                value.isSingleDay)
        ) {
            return 'end';
        }

        return value.isSingleDay && value.from.daySame(item) ? 'single' : null;
    }

    @HostBinding('class._single')
    protected get isSingleDayRange(): boolean {
        return this.value instanceof TuiDayRange && this.value.isSingleDay;
    }

    /**
     * @deprecated: use {@link this.isSingleDayRange}
     */
    protected get isSingle(): boolean {
        return this.isSingleDayRange;
    }

    protected readonly toMarkers = (
        day: TuiDay,
        today: boolean,
        inRange: boolean,
        markerHandler: TuiMarkerHandler | null,
    ): [string, string] | [string] | null => {
        if (today || inRange) {
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
        this.dayClick.emit(item);
    }

    private updateHoveredItem(day: TuiDay | null): void {
        if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
