import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    DAYS_IN_WEEK,
    nullableSame,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    tuiDefaultProp,
    TuiMonth,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {TuiInteractiveState, TuiRangeState} from '@taiga-ui/core/enums';
import {TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';
import {TuiColor, TuiMarkerHandler} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

const ROWS_COUNT = 6;

// @dynamic
@Component({
    selector: 'tui-primitive-calendar',
    templateUrl: './primitive-calendar.template.html',
    styleUrls: ['./primitive-calendar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCalendarComponent {
    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    value: TuiDayRange | TuiDay | null = null;

    @Input()
    @tuiDefaultProp()
    hoveredItem: TuiDay | null = null;

    @Input()
    @tuiDefaultProp()
    showAdjacent = true;

    @Input()
    @tuiRequiredSetter()
    set month(month: TuiMonth) {
        if (this.currentMonth !== null && this.currentMonth.monthSame(month)) {
            return;
        }

        const sheet: Array<ReadonlyArray<TuiDay>> = [];

        for (let rowIndex = 0; rowIndex < ROWS_COUNT; rowIndex++) {
            const row: Array<TuiDay> = [];

            for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
                row.push(TuiDay.getDayFromMonthRowCol(month, rowIndex, colIndex));
            }

            sheet.push(row);
        }

        this.sheet = sheet;
        this.currentMonth = month;
    }

    @Output()
    readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    @Output()
    readonly dayClick = new EventEmitter<TuiDay>();

    sheet: ReadonlyArray<ReadonlyArray<TuiDay>> = [];

    private pressedItem: TuiDay | null = null;

    private currentMonth: TuiMonth | null = null;

    private today = TuiDay.currentLocal();

    readonly toMarkers = (
        day: TuiDay,
        today: boolean,
        inRange: boolean,
    ): null | [TuiColor | string] | [TuiColor | string, TuiColor | string] => {
        if (today || inRange) {
            return null;
        }

        const markers = this.markerHandler(day);

        return markers.length === 0 ? null : markers;
    };

    constructor(
        @Inject(TUI_SHORT_WEEK_DAYS)
        readonly weekDays$: Observable<
            [string, string, string, string, string, string, string]
        >,
    ) {}

    @HostBinding('class._single')
    get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof TuiDay || this.value.isSingleDay)
        );
    }

    getItemState(item: TuiDay): TuiInteractiveState | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem !== null && pressedItem.daySame(item)) {
            return TuiInteractiveState.Pressed;
        }

        if (hoveredItem !== null && hoveredItem.daySame(item)) {
            return TuiInteractiveState.Hovered;
        }

        return null;
    }

    getItemRange(item: TuiDay): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof TuiDay) {
            return value.daySame(item) ? TuiRangeState.Single : null;
        }

        if (
            (value.from.daySame(item) && !value.isSingleDay) ||
            (hoveredItem !== null &&
                hoveredItem.dayAfter(value.from) &&
                value.from.daySame(item) &&
                value.isSingleDay) ||
            (hoveredItem !== null &&
                hoveredItem.daySame(item) &&
                hoveredItem.dayBefore(value.from) &&
                value.isSingleDay)
        ) {
            return TuiRangeState.Start;
        }

        if (
            (value.to.daySame(item) && !value.isSingleDay) ||
            (hoveredItem !== null &&
                hoveredItem.dayBefore(value.from) &&
                value.from.daySame(item) &&
                value.isSingleDay) ||
            (hoveredItem !== null &&
                hoveredItem.daySame(item) &&
                hoveredItem.dayAfter(value.from) &&
                value.isSingleDay)
        ) {
            return TuiRangeState.End;
        }

        return value.isSingleDay && value.from.daySame(item)
            ? TuiRangeState.Single
            : null;
    }

    itemIsDisabled(day: TuiDay): boolean {
        const {disabledItemHandler} = this;

        return disabledItemHandler(day);
    }

    itemIsToday(item: TuiDay): boolean {
        return this.today.daySame(item);
    }

    itemIsUnavailable(item: TuiDay): boolean {
        return this.currentMonth === null || !this.currentMonth.monthSame(item);
    }

    itemIsInterval(day: TuiDay): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof TuiDay) {
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

    onItemHovered(hovered: boolean, item: TuiDay) {
        this.updateHoveredItem(hovered ? item : null);
    }

    onItemPressed(pressed: boolean, item: TuiDay) {
        this.updatePressedItem(pressed, item);
    }

    onItemClick(event: MouseEvent, item: TuiDay) {
        if (this.disabledItemHandler(item)) {
            return;
        }

        event.preventDefault();
        this.dayClick.emit(item);
    }

    private updateHoveredItem(day: TuiDay | null) {
        if (nullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }

    private updatePressedItem(pressed: boolean, item: TuiDay) {
        this.pressedItem = pressed ? item : null;
    }
}
