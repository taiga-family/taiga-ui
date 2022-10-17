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
    TuiBooleanHandler,
    TuiDay,
    TuiDayRange,
    tuiDefaultProp,
    TuiHandler,
    TuiInjectionTokenType,
    TuiMonth,
    tuiNullableSame,
} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MARKER_HANDLER} from '@taiga-ui/core/constants';
import {TuiInteractiveState, TuiRangeState} from '@taiga-ui/core/enums';
import {TUI_DAY_TYPE_HANDLER, TUI_SHORT_WEEK_DAYS} from '@taiga-ui/core/tokens';
import {TuiMarkerHandler} from '@taiga-ui/core/types';

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
        @Inject(TUI_SHORT_WEEK_DAYS)
        readonly unorderedWeekDays$: TuiInjectionTokenType<typeof TUI_SHORT_WEEK_DAYS>,
        @Inject(TUI_DAY_TYPE_HANDLER)
        readonly dayTypeHandler: TuiHandler<TuiDay, string>,
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
    ): null | [string] | [string, string] => {
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
            return TuiInteractiveState.Active;
        }

        if (hoveredItem?.daySame(item)) {
            return TuiInteractiveState.Hover;
        }

        return null;
    }

    getDataType(item: TuiDay, handler: TuiHandler<TuiDay, string>): string {
        return handler(item);
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
        if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }

        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
