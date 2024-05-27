import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {TuiBooleanHandler, TuiYear} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiHoveredDirective,
    TuiLetDirective,
    TuiMonth,
    TuiMonthRange,
    tuiNullableSame,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiRangeState, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {
    TuiCalendarYearComponent,
    TuiLinkDirective,
    TuiScrollbarComponent,
    TuiSpinButtonComponent,
} from '@taiga-ui/core';
import {TUI_CALENDAR_MONTHS} from '@taiga-ui/kit/tokens';

const TODAY = TuiDay.currentLocal();

@Component({
    standalone: true,
    selector: 'tui-calendar-month',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        TuiCalendarYearComponent,
        TuiSpinButtonComponent,
        TuiScrollbarComponent,
        TuiLinkDirective,
        TuiLetDirective,
        TuiHoveredDirective,
    ],
    templateUrl: './calendar-month.template.html',
    styleUrls: ['./calendar-month.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarMonthComponent implements TuiWithOptionalMinMax<TuiMonth> {
    @Input()
    public value: TuiMonth | TuiMonthRange | null = null;

    @Input()
    public year: TuiYear = TODAY;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiMonth> = TUI_FALSE_HANDLER;

    @Input()
    public minLength: number | null = null;

    @Input()
    public maxLength: number | null = null;

    @Input()
    public min: TuiMonth | null = TUI_FIRST_DAY;

    @Input()
    public max: TuiMonth | null = TUI_LAST_DAY;

    @Output()
    public readonly monthClick = new EventEmitter<TuiMonth>();

    @Output()
    public readonly hoveredItemChange = new EventEmitter<TuiMonth | null>();

    @Output()
    public readonly yearChange = new EventEmitter<TuiYear>();

    public hoveredItem: TuiMonth | null = null;

    protected isYearPickerShown = false;
    protected readonly months$ = inject(TUI_CALENDAR_MONTHS);

    @HostBinding('class._single')
    public get isSingle(): boolean {
        return (
            this.value !== null &&
            (this.value instanceof TuiMonth || this.value.isSingleMonth)
        );
    }

    public onNextYear(): void {
        this.updateActiveYear(this.year.append({year: 1}));
    }

    public onPreviousYear(): void {
        this.updateActiveYear(this.year.append({year: -1}));
    }

    public isItemInsideRange(month: TuiMonth): boolean {
        const {value, hoveredItem} = this;

        if (value === null || value instanceof TuiMonth) {
            return false;
        }

        if (!value.isSingleMonth) {
            return value.from.monthSameOrBefore(month) && value.to.monthAfter(month);
        }

        if (hoveredItem === null) {
            return false;
        }

        const range = TuiMonthRange.sort(value.from, hoveredItem);

        return range.from.monthSameOrBefore(month) && range.to.monthAfter(month);
    }

    public getItemRange(item: TuiMonth): TuiRangeState | null {
        const {value, hoveredItem} = this;

        if (value === null) {
            return null;
        }

        if (value instanceof TuiMonth) {
            return value.monthSame(item) ? 'single' : null;
        }

        const theFirstOfRange = value.from.monthSame(item) && !value.isSingleMonth;
        const hoveredItemAfterFrom =
            hoveredItem?.monthAfter(value.from) &&
            value.from.monthSame(item) &&
            value.isSingleMonth;
        const hoveredItemIsCandidateToBeFrom =
            hoveredItem?.monthSame(item) &&
            hoveredItem?.monthBefore(value.from) &&
            value.isSingleMonth;

        if (theFirstOfRange || hoveredItemAfterFrom || hoveredItemIsCandidateToBeFrom) {
            return 'start';
        }

        const theLastOfRange = value.to.monthSame(item) && !value.isSingleMonth;
        const hoveredItemBeforeTo =
            value.to.monthSame(item) &&
            hoveredItem?.monthBefore(value.to) &&
            value.isSingleMonth;
        const hoveredItemIsCandidateToBeTo =
            hoveredItem?.monthSame(item) &&
            hoveredItem?.monthAfter(value.from) &&
            value.isSingleMonth;

        if (theLastOfRange || hoveredItemBeforeTo || hoveredItemIsCandidateToBeTo) {
            return 'end';
        }

        return value.isSingleMonth && value.from.monthSame(item) ? 'single' : null;
    }

    protected get computedMin(): TuiMonth {
        return this.min ?? TUI_FIRST_DAY;
    }

    protected get computedMax(): TuiMonth {
        return this.max ?? TUI_LAST_DAY;
    }

    protected get previousYearDisabled(): boolean {
        return this.year.yearSameOrBefore(this.computedMin);
    }

    protected get nextYearDisabled(): boolean {
        return this.year.yearSameOrAfter(this.computedMax);
    }

    protected get disabledItemHandlerWithMinMax(): TuiBooleanHandler<TuiMonth> {
        return this.calculateDisabledItemHandlerWithMinMax(
            this.disabledItemHandler,
            this.value,
            this.computedMin,
            this.computedMax,
            this.minLength,
            this.maxLength,
        );
    }

    protected getTuiMonth(monthNumber: number, yearNumber: number): TuiMonth {
        return new TuiMonth(yearNumber, monthNumber);
    }

    protected isItemToday(item: TuiMonth): boolean {
        return TODAY.monthSame(item);
    }

    protected onPickerYearClick(year: TuiYear): void {
        this.isYearPickerShown = false;

        if (!this.year.yearSame(year)) {
            this.updateActiveYear(year);
        }
    }

    protected onItemClick(month: TuiMonth): void {
        if (!this.disabledItemHandlerWithMinMax(month)) {
            this.monthClick.emit(month);
        }
    }

    protected onYearClick(): void {
        this.isYearPickerShown = true;
    }

    protected onItemHovered(hovered: boolean, item: TuiMonth): void {
        this.updateHoveredItem(hovered ? item : null);
    }

    @tuiPure
    private calculateDisabledItemHandlerWithMinMax(
        disabledItemHandler: TuiBooleanHandler<TuiMonth>,
        value: TuiMonth | TuiMonthRange | null,
        min: TuiMonth,
        max: TuiMonth,
        minLength: number | null,
        maxLength: number | null,
    ): TuiBooleanHandler<TuiMonth> {
        return item => {
            const delta =
                value instanceof TuiMonthRange && value.isSingleMonth
                    ? Math.abs(
                          item.year * 12 +
                              item.month -
                              value.from.year * 12 -
                              value.from.month,
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
        this.year = year;
        this.yearChange.emit(year);
    }
}
