import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    Output,
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
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';

const LIMIT = 100;
const ITEMS_IN_ROW = 4;
const CURRENT_YEAR = TuiMonth.currentLocal().year;

@Component({
    selector: 'tui-calendar-year',
    imports: [TuiHovered, TuiRepeatTimes, TuiScrollIntoView],
    templateUrl: './calendar-year.template.html',
    styleUrl: './calendar-year.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiCalendarYear)],
    host: {
        '[class._picking]': 'isRangePicking()',
    },
})
export class TuiCalendarYear {
    private readonly hoveredItem = signal<number | null>(null);

    protected readonly isRangePicking = computed(
        (x = this.value()) =>
            this.rangeMode && (x instanceof TuiDay || x instanceof TuiMonth),
    );

    @Input()
    public rangeMode = false;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<number> =
        inject(TUI_ITEMS_HANDLERS).disabledItemHandler();

    @Output()
    public readonly yearClick = new EventEmitter<number>();

    public readonly initialItem = signal<number>(CURRENT_YEAR);
    public readonly min = signal(MIN_YEAR);
    public readonly max = signal(MAX_YEAR);
    public readonly value = signal<
        TuiDayRange | TuiMonthRange | TuiYear | number | readonly TuiDay[] | null
    >(null);

    // TODO(v5): use signal inputs
    @Input({alias: 'initialItem', transform: (x: number | null) => x ?? CURRENT_YEAR})
    public set initialItemSetter(x: number | null) {
        this.initialItem.set(x ?? CURRENT_YEAR);
    }

    // TODO(v5): use signal inputs
    @Input({alias: 'min', transform: (x: number | null) => x ?? MIN_YEAR})
    public set minSetter(x: number) {
        this.min.set(x);
    }

    // TODO(v5): use signal inputs
    @Input({alias: 'max', transform: (x: number | null) => x ?? MAX_YEAR})
    public set maxSetter(x: number) {
        this.max.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('value')
    public set valueSetter(
        x: TuiDayRange | TuiMonthRange | TuiYear | number | readonly TuiDay[] | null,
    ) {
        this.value.set(x);
    }

    public isDisabled(item: number): boolean {
        return (
            (this.max() && this.max() < item) ||
            (this.min() && this.min() > item) ||
            this.disabledItemHandler(item)
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

    protected get rows(): number {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }

    protected scrollItemIntoView(item: number): boolean {
        return this.initialItem() === item;
    }

    protected getItem(rowIndex: number, colIndex: number): number {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }

    protected itemIsToday(item: number): boolean {
        return CURRENT_YEAR === item;
    }

    private get calculatedMin(): number {
        const initial = this.initialItem() - LIMIT;
        const min = this.min() ?? MIN_YEAR;

        return min > initial ? min : initial;
    }

    private get calculatedMax(): number {
        const initial = this.initialItem() + LIMIT;
        const max = this.max() ?? MAX_YEAR;

        return max < initial ? max + 1 : initial;
    }
}
