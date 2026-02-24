import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import {
    MAX_YEAR,
    MIN_YEAR,
    TuiDay,
    type TuiDayRange,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk/date-time';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';

const LIMIT = 100;
const ITEMS_IN_ROW = 4;
const CURRENT_YEAR = TuiMonth.currentLocal().year;

@Component({
    selector: 'tui-calendar-year',
    imports: [TuiHovered, TuiScrollIntoView],
    templateUrl: './calendar-year.template.html',
    styleUrl: './calendar-year.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiCalendarYear)],
    host: {'[class._picking]': 'isRangePicking()'},
})
export class TuiCalendarYear {
    private readonly hoveredItem = signal<number | null>(null);
    private readonly calculatedMin = computed(() => {
        const initial = this.initialItem() - LIMIT;
        const min = this.min() ?? MIN_YEAR;

        return min > initial ? min : initial;
    });

    private readonly calculatedMax = computed(() => {
        const initial = this.initialItem() + LIMIT;
        const max = this.max() ?? MAX_YEAR;

        return max < initial ? max + 1 : initial;
    });

    protected readonly isRangePicking = computed(
        (x = this.value()) =>
            this.rangeMode() && (x instanceof TuiDay || x instanceof TuiMonth),
    );

    protected readonly rows = computed(() =>
        Math.ceil((this.calculatedMax() - this.calculatedMin()) / ITEMS_IN_ROW),
    );

    public readonly rangeMode = input(false);
    public readonly disabledItemHandler = input<TuiBooleanHandler<number>>(
        inject(TUI_ITEMS_HANDLERS).disabledItemHandler(),
    );

    public readonly value = input<
        TuiDayRange | TuiMonthRange | TuiYear | number | readonly TuiDay[] | null
    >(null);

    public readonly min = input(MIN_YEAR, {
        transform: (x: number | null) => x ?? MIN_YEAR,
    });

    public readonly max = input(MAX_YEAR, {
        transform: (x: number | null) => x ?? MAX_YEAR,
    });

    public readonly initialItem = input(CURRENT_YEAR, {
        transform: (x: number | null) => x ?? CURRENT_YEAR,
    });

    public readonly yearClick = output<number>();

    public isDisabled(item: number): boolean {
        return (
            (this.max() && this.max() < item) ||
            (this.min() && this.min() > item) ||
            this.disabledItemHandler()(item)
        );
    }

    public getItemRange(item: number): 'active' | 'end' | 'middle' | 'start' | null {
        const value = this.value();
        const hoveredItem = this.hoveredItem();

        if (value instanceof TuiYear && value.year === item) {
            return 'active';
        }

        if (tuiIsNumber(value)) {
            return value === item ? 'active' : null;
        }

        if (!(value instanceof TuiMonthRange) && !(value instanceof TuiYear)) {
            return value?.find((day) => day.year === item) ? 'active' : null;
        }

        const hovered = this.isRangePicking() ? hoveredItem : null;
        const from = 'from' in value ? value.from?.year : value.year;
        const to = 'from' in value ? value.to.year : value.year;

        const min = Math.min(from, hovered ?? to);
        const max = Math.max(from, hovered ?? to);

        if (min === max && from === to && from === item) {
            return 'active';
        }

        if (min === item) {
            return 'start';
        }

        if (max === item) {
            return 'end';
        }

        return min < item && item < max ? 'middle' : null;
    }

    public onItemHovered(hovered: boolean, item: number): void {
        this.hoveredItem.set(hovered ? item : null);
    }

    protected scrollItemIntoView(item: number): boolean {
        return this.initialItem() === item;
    }

    protected getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin();
    }

    protected itemIsToday(item: number): boolean {
        return CURRENT_YEAR === item;
    }
}
