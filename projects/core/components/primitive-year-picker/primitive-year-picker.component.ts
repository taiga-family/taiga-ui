import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDayRange,
    tuiDefaultProp,
    tuiInRange,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiInteractiveState, TuiRangeState} from '@taiga-ui/core/enums';

const LIMIT = 100;
const ITEMS_IN_ROW = 4;

@Component({
    selector: 'tui-primitive-year-picker',
    templateUrl: './primitive-year-picker.template.html',
    styleUrls: ['./primitive-year-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveYearPickerComponent {
    private hoveredItem: number | null = null;
    private pressedItem: number | null = null;
    private readonly currentYear = TuiMonth.currentLocal().year;

    @Input()
    @tuiDefaultProp()
    value: TuiMonthRange | TuiYear | TuiDayRange | null = null;

    @Input()
    @tuiDefaultProp()
    initialItem: TuiYear = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    min: TuiYear = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiYear = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<number> = ALWAYS_FALSE_HANDLER;

    @Output()
    readonly yearClick = new EventEmitter<TuiYear>();

    @HostBinding('class._single')
    get isSingle(): boolean {
        const {value} = this;

        return !!value && this.isRange(value) && value.from.yearSame(value.to);
    }

    get rows(): number {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }

    get calculatedMin(): number {
        const initial = this.initialItem.year - LIMIT;

        return this.min.year > initial ? this.min.year : initial;
    }

    get calculatedMax(): number {
        const initial = this.initialItem.year + LIMIT;

        return this.max.year < initial ? this.max.year + 1 : initial;
    }

    isRange(item: TuiMonthRange | TuiYear): item is TuiMonthRange {
        return item instanceof TuiMonthRange;
    }

    scrollItemIntoView(item: number): boolean {
        return this.initialItem.year === item;
    }

    getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    getItemState(item: number): TuiInteractiveState | null {
        const {disabledItemHandler, max, pressedItem, hoveredItem} = this;

        if (
            max.year < item ||
            (disabledItemHandler !== ALWAYS_FALSE_HANDLER && disabledItemHandler(item))
        ) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem === item) {
            return TuiInteractiveState.Active;
        }

        if (hoveredItem === item) {
            return TuiInteractiveState.Hover;
        }

        return null;
    }

    getItemRange(item: number): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof TuiYear) {
            return value.year === item ? TuiRangeState.Single : null;
        }

        if (
            (value.from.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem > value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem < value.from.year &&
                value.from.yearSame(value.to))
        ) {
            return TuiRangeState.Start;
        }

        if (
            (value.to.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem < value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem > value.from.year &&
                value.from.yearSame(value.to))
        ) {
            return TuiRangeState.End;
        }

        return value.from.yearSame(value.to) && value.from.year === item
            ? TuiRangeState.Single
            : null;
    }

    itemIsToday(item: number): boolean {
        return this.currentYear === item;
    }

    itemIsInterval(item: number): boolean {
        const {value, hoveredItem} = this;

        if (value === null || !this.isRange(value)) {
            return false;
        }

        if (!value.from.yearSame(value.to)) {
            return value.from.year <= item && value.to.year > item;
        }

        if (hoveredItem === null || value.from.year === hoveredItem) {
            return false;
        }

        return tuiInRange(
            item,
            Math.min(value.from.year, hoveredItem),
            Math.max(value.from.year, hoveredItem),
        );
    }

    onItemHovered(hovered: boolean, item: number): void {
        this.updateHoveredItem(hovered, item);
    }

    onItemPressed(pressed: boolean, item: number): void {
        this.updatePressedItem(pressed, item);
    }

    onItemClick(item: number): void {
        this.yearClick.emit(new TuiYear(item));
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }

    private updatePressedItem(pressed: boolean, item: number): void {
        this.pressedItem = pressed ? item : null;
    }
}
