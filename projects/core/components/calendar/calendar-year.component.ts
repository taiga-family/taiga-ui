import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import type {TuiBooleanHandler, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiHoveredDirective,
    tuiInRange,
    TuiLetDirective,
    TuiMonth,
    TuiMonthRange,
    TuiRepeatTimesDirective,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiScrollIntoViewDirective} from '@taiga-ui/core/components/scrollbar';
import type {TuiRangeState} from '@taiga-ui/core/types';

const LIMIT = 100;
const ITEMS_IN_ROW = 4;

@Component({
    standalone: true,
    selector: 'tui-calendar-year',
    imports: [
        TuiHoveredDirective,
        TuiRepeatTimesDirective,
        TuiLetDirective,
        TuiScrollIntoViewDirective,
    ],
    templateUrl: './calendar-year.template.html',
    styleUrls: ['./calendar-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarYearComponent {
    private hoveredItem: number | null = null;
    private readonly currentYear = TuiMonth.currentLocal().year;

    @Input()
    public value: TuiDayRange | TuiMonthRange | TuiYear | readonly TuiDay[] | null = null;

    @Input()
    public initialItem: TuiYear = TuiMonth.currentLocal();

    @Input()
    public min: TuiYear | null = TUI_FIRST_DAY;

    @Input()
    public max: TuiYear | null = TUI_LAST_DAY;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<number> = TUI_FALSE_HANDLER;

    @Output()
    public readonly yearClick = new EventEmitter<TuiYear>();

    public isDisabled(item: number): boolean {
        return (
            this.computedMax.year < item ||
            this.computedMin.year > item ||
            this.disabledItemHandler(item)
        );
    }

    public getItemRange(item: number): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof TuiYear) {
            return value.year === item ? 'single' : null;
        }

        if (!(value instanceof TuiMonthRange)) {
            return value.find(day => day.year === item) ? 'single' : null;
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
            return 'start';
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
            return 'end';
        }

        return value.from.yearSame(value.to) && value.from.year === item
            ? 'single'
            : null;
    }

    public itemIsInterval(item: number): boolean {
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

    public onItemHovered(hovered: boolean, item: number): void {
        this.updateHoveredItem(hovered, item);
    }

    public onItemClick(item: number): void {
        this.yearClick.emit(new TuiYear(item));
    }

    @HostBinding('class._single')
    protected get isSingle(): boolean {
        return this.isRange(this.value) && this.value.from.yearSame(this.value.to);
    }

    protected get computedMin(): TuiYear {
        return this.min ?? TUI_FIRST_DAY;
    }

    protected get computedMax(): TuiYear {
        return this.max ?? TUI_LAST_DAY;
    }

    protected get rows(): number {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }

    protected get calculatedMin(): number {
        const initial = this.initialItem.year - LIMIT;
        const min = this.computedMin;

        return min.year > initial ? min.year : initial;
    }

    protected get calculatedMax(): number {
        const initial = this.initialItem.year + LIMIT;
        const max = this.computedMax;

        return max.year < initial ? max.year + 1 : initial;
    }

    protected isRange(
        item: TuiMonthRange | TuiYear | readonly TuiDay[] | null,
    ): item is TuiMonthRange {
        return item instanceof TuiMonthRange;
    }

    protected scrollItemIntoView(item: number): boolean {
        return this.initialItem.year === item;
    }

    protected getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    protected itemIsToday(item: number): boolean {
        return this.currentYear === item;
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }
}
