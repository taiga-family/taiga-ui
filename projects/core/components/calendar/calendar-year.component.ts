import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDay} from '@taiga-ui/cdk/date-time';
import {
    MAX_YEAR,
    MIN_YEAR,
    TuiDayRange,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk/date-time';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';

const LIMIT = 100;
const ITEMS_IN_ROW = 4;

@Component({
    standalone: true,
    selector: 'tui-calendar-year',
    imports: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
    templateUrl: './calendar-year.template.html',
    styleUrls: ['./calendar-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._picking]': 'isSingle',
    },
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

    public getItemRange(item: number): 'active' | 'end' | 'middle' | 'start' | null {
        const {value, hoveredItem, isSingle} = this;

        if (value instanceof TuiYear) {
            return value.year === item ? 'active' : null;
        }

        if (tuiIsNumber(value)) {
            return value === item ? 'active' : null;
        }

        if (!(value instanceof TuiMonthRange)) {
            return value?.find((day) => day.year === item) ? 'active' : null;
        }

        const hovered = isSingle ? hoveredItem : null;
        const from = Math.min(value.from.year, hovered ?? value.to.year);
        const to = Math.max(value.from.year, hovered ?? value.to.year);

        if (from === to && value.from.year === value.to.year && from === item) {
            return 'active';
        }

        if (from === item) {
            return 'start';
        }

        if (to === item) {
            return 'end';
        }

        return from < item && item < to ? 'middle' : null;
    }

    public onItemHovered(hovered: boolean, item: number): void {
        this.updateHoveredItem(hovered, item);
    }

    protected get isSingle(): boolean {
        return this.value instanceof TuiMonthRange
            ? this.value.from.monthSame(this.value.to)
            : this.value instanceof TuiDayRange && this.value.isSingleDay;
    }

    protected get rows(): number {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
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
