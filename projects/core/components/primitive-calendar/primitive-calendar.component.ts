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
    nullableSame,
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    tuiDefaultProp,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {TuiInteractiveState, TuiRangeState} from '@taiga-ui/core/enums';
import {TUI_ORDERED_SHORT_WEEK_DAYS, WEEK_DAYS_NAMES} from '@taiga-ui/core/tokens';
import {TuiColor, TuiMarkerHandler} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: `tui-primitive-calendar`,
    templateUrl: `./primitive-calendar.template.html`,
    styleUrls: [`./primitive-calendar.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCalendarComponent {
    private pressedItem: TuiDay | null = null;
    private readonly today = TuiDay.currentLocal();

    @Input()
    @tuiDefaultProp()
    month: TuiMonth = TuiMonth.currentLocal();

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

    @Output()
    readonly hoveredItemChange = new EventEmitter<TuiDay | null>();

    @Output()
    readonly dayClick = new EventEmitter<TuiDay>();

    constructor(
        @Inject(TUI_ORDERED_SHORT_WEEK_DAYS)
        readonly weekDays$: Observable<WEEK_DAYS_NAMES>,
    ) {}

    @HostBinding(`class._single`)
    get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof TuiDay || this.value.isSingleDay)
        );
    }

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

    getItemState(item: TuiDay): TuiInteractiveState | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem?.daySame(item)) {
            return TuiInteractiveState.Pressed;
        }

        if (hoveredItem?.daySame(item)) {
            return TuiInteractiveState.Hovered;
        }

        return null;
    }

    getItemRange(item: TuiDay): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (!value) {
            return null;
        }

        if (value instanceof TuiDay) {
            return value.daySame(item) ? TuiRangeState.Single : null;
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
            return TuiRangeState.Start;
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
            return TuiRangeState.End;
        }

        return value.isSingleDay && value.from.daySame(item)
            ? TuiRangeState.Single
            : null;
    }

    itemIsToday(item: TuiDay): boolean {
        return this.today.daySame(item);
    }

    itemIsUnavailable(item: TuiDay): boolean {
        return !this.month.monthSame(item);
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

    onItemHovered(item: TuiDay | false): void {
        this.updateHoveredItem(item || null);
    }

    onItemPressed(item: TuiDay | false): void {
        this.pressedItem = item || null;
    }

    onItemClick(item: TuiDay): void {
        this.dayClick.emit(item);
    }

    private updateHoveredItem(day: TuiDay | null): void {
        if (nullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
