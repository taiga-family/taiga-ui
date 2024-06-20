import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDay, TuiDayRange} from '@taiga-ui/cdk/date-time';
import {
    MAX_YEAR,
    MIN_YEAR,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk/date-time';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInRange} from '@taiga-ui/cdk/utils/math';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import type {TuiRangeState} from '@taiga-ui/core/types';

const LIMIT = 100;
const ITEMS_IN_ROW = 4;

@Component({
    standalone: true,
    selector: 'tui-calendar-year',
    imports: [TuiHovered, TuiRepeatTimes, TuiLet, TuiScrollIntoView],
    templateUrl: './calendar-year.template.html',
    styleUrls: ['./calendar-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarYear {
    private hoveredItem: number | null = null;
    private readonly currentYear = TuiMonth.currentLocal().year;

    @Input()
    public value:
        | TuiDayRange
        | TuiMonthRange
        | TuiYear
        | number
        | readonly TuiDay[]
        | null = null;

    @Input()
    public initialItem: number = this.currentYear;

    @Input()
    public min: number | null = MIN_YEAR;

    @Input()
    public max: number | null = MAX_YEAR;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<number> = TUI_FALSE_HANDLER;

    @Output()
    public readonly yearClick = new EventEmitter<number>();

    public isDisabled(item: number): boolean {
        return (
            (this.max && this.max < item) ||
            (this.min && this.min > item) ||
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

        if (tuiIsNumber(value)) {
            return value === item ? 'single' : null;
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

        if (!this.isRange(value)) {
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

    @HostBinding('class._single')
    protected get isSingle(): boolean {
        return this.isRange(this.value) && this.value.from.yearSame(this.value.to);
    }

    protected get rows(): number {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }

    protected isRange(
        item: TuiMonthRange | TuiYear | number | readonly TuiDay[] | null,
    ): item is TuiMonthRange {
        return item instanceof TuiMonthRange;
    }

    protected scrollItemIntoView(item: number): boolean {
        return this.initialItem === item;
    }

    protected getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    protected itemIsToday(item: number): boolean {
        return this.currentYear === item;
    }

    private get calculatedMin(): number {
        const initial = this.initialItem - LIMIT;
        const min = this.min ?? MIN_YEAR;

        return min > initial ? min : initial;
    }

    private get calculatedMax(): number {
        const initial = this.initialItem + LIMIT;
        const max = this.max ?? MAX_YEAR;

        return max < initial ? max + 1 : initial;
    }

    private updateHoveredItem(hovered: boolean, item: number): void {
        this.hoveredItem = hovered ? item : null;
    }
}
