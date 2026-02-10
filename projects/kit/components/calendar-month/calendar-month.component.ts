import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    input,
    linkedSignal,
    Output,
    output,
    signal,
    untracked,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk/date-time';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiNullableSame} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiSpinButton} from '@taiga-ui/core/components/spin-button';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {TUI_CALENDAR_MONTHS} from '@taiga-ui/kit/tokens';

import {TUI_CALENDAR_MONTH_OPTIONS} from './calendar-month.options';

const TODAY = TuiDay.currentLocal();

@Component({
    selector: 'tui-calendar-month',
    imports: [TuiCalendarYear, TuiHovered, TuiLink, TuiScrollbar, TuiSpinButton],
    templateUrl: './calendar-month.template.html',
    styleUrl: './calendar-month.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiCalendarMonth)],
    host: {'[class._picking]': 'isRangePicking()'},
})
export class TuiCalendarMonth {
    protected isYearPickerShown = false;
    protected readonly months = inject(TUI_CALENDAR_MONTHS);
    protected readonly isRangePicking = computed(
        (x = this.value()) =>
            (!this.options.rangeMode && x instanceof TuiMonthRange && x.isSingleMonth) || // TODO(v5): remove this condition
            (this.options.rangeMode && x instanceof TuiMonth),
    );

    protected readonly handler = computed(() =>
        this.calculateDisabledItemHandlerWithMinMax(
            this.disabledItemHandler(),
            this.value(),
            this.isRangePicking(),
            this.min(),
            this.max(),
            this.minLength(),
            this.maxLength(),
        ),
    );

    protected readonly activeYear = linkedSignal<TuiYear>(() => {
        const year = this.year();

        if (year) {
            return year;
        }

        const value = untracked(this.value);

        if (value instanceof TuiMonth) {
            return value;
        }

        if (value instanceof TuiMonthRange) {
            return value.from;
        }

        return TODAY;
    });

    public readonly year = input<TuiYear>();
    public readonly yearChange = output<TuiYear>();

    public readonly minLength = input<number | null>(null);
    public readonly maxLength = input<number | null>(null);
    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiMonth>>(TUI_FALSE_HANDLER);

    @Output()
    public readonly monthClick = new EventEmitter<TuiMonth>();

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiMonth | null>();

    public options = inject(TUI_CALENDAR_MONTH_OPTIONS);
    public readonly min = signal<TuiMonth>(TUI_FIRST_DAY);
    public readonly max = signal<TuiMonth>(TUI_LAST_DAY);
    public readonly value = signal<TuiMonth | TuiMonthRange | null>(null);
    public hoveredItem: TuiMonth | null = null;

    // TODO(v5): use signal inputs
    @Input({alias: 'min', transform: (x: TuiMonth | null) => x ?? TUI_FIRST_DAY})
    public set minSetter(x: TuiMonth) {
        this.min.set(x);
    }

    // TODO(v5): use signal inputs
    @Input({alias: 'max', transform: (x: TuiMonth | null) => x ?? TUI_LAST_DAY})
    public set maxSetter(x: TuiMonth) {
        this.max.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('value')
    public set valueSetter(x: TuiMonth | TuiMonthRange | null) {
        this.value.set(x);
    }

    public onNextYear(): void {
        this.updateActiveYear(this.activeYear().append({year: 1}));
    }

    public onPreviousYear(): void {
        this.updateActiveYear(this.activeYear().append({year: -1}));
    }

    public getItemRange(item: TuiMonth): 'active' | 'end' | 'middle' | 'start' | null {
        const value = this.value();
        const {hoveredItem} = this;

        if (!value) {
            return null;
        }

        if (!this.options.rangeMode && value instanceof TuiMonth) {
            return value?.monthSame(item) ? 'active' : null;
        }

        const selectedRange =
            value instanceof TuiMonth ? new TuiMonthRange(value, value) : value;
        const months = item.month + item.year * 12;
        const hovered = hoveredItem ? hoveredItem.month + hoveredItem.year * 12 : null;
        const from = selectedRange.from.month + selectedRange.from.year * 12;
        const to = selectedRange.to.month + selectedRange.to.year * 12;
        const picking = this.isRangePicking() ? hovered : null;
        const min = Math.min(from, to, picking ?? from);
        const max = Math.max(from, to, picking ?? from);

        if (min === max && min === months) {
            return 'active';
        }

        if (min === months) {
            return 'start';
        }

        if (max === months) {
            return 'end';
        }

        return min < months && months < max ? 'middle' : null;
    }

    protected getTuiMonth(monthNumber: number, yearNumber: number): TuiMonth {
        return new TuiMonth(yearNumber, monthNumber);
    }

    protected isItemToday(item: TuiMonth): boolean {
        return TODAY.monthSame(item);
    }

    protected onPickerYearClick(year: number): void {
        this.isYearPickerShown = false;

        if (this.activeYear().year !== year) {
            this.updateActiveYear(new TuiYear(year));
        }
    }

    protected onItemClick(month: TuiMonth): void {
        if (!this.handler()(month)) {
            this.monthClick.emit(month);
        }
    }

    protected onYearClick(): void {
        this.isYearPickerShown = true;
    }

    protected onItemHovered(hovered: boolean, item: TuiMonth): void {
        this.updateHoveredItem(hovered ? item : null);
    }

    // eslint-disable-next-line @typescript-eslint/max-params,max-params
    private calculateDisabledItemHandlerWithMinMax(
        disabledItemHandler: TuiBooleanHandler<TuiMonth>,
        value: TuiMonth | TuiMonthRange | null,
        isRangePicking: boolean,
        min: TuiMonth,
        max: TuiMonth,
        minLength: number | null,
        maxLength: number | null,
    ): TuiBooleanHandler<TuiMonth> {
        return (item) => {
            const selectedMonth = value instanceof TuiMonthRange ? value.from : value;
            const delta =
                isRangePicking && selectedMonth
                    ? Math.abs(
                          item.year * 12 +
                              item.month -
                              selectedMonth.year * 12 -
                              selectedMonth.month,
                      )
                    : 0;

            const tooLong = delta && maxLength && delta > maxLength;
            const tooShort = delta && minLength && delta < minLength;

            return (
                tooLong ||
                tooShort ||
                item.monthBefore(min) ||
                item.monthAfter(max) ||
                disabledItemHandler(item)
            );
        };
    }

    private updateHoveredItem(month: TuiMonth | null): void {
        if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
            return;
        }

        this.hoveredItem = month;
        this.hoveredItemChange.emit(month);
    }

    private updateActiveYear(year: TuiYear): void {
        this.activeYear.set(year);
        this.yearChange.emit(year);
    }
}
