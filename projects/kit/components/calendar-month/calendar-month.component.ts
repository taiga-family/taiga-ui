import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
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
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiNullableSame, tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiSpinButton} from '@taiga-ui/core/components/spin-button';
import {TUI_CALENDAR_MONTHS} from '@taiga-ui/kit/tokens';

const TODAY = TuiDay.currentLocal();

@Component({
    standalone: true,
    selector: 'tui-calendar-month',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        TuiCalendarYear,
        TuiHovered,
        TuiLet,
        TuiLink,
        TuiRepeatTimes,
        TuiScrollbar,
        TuiSpinButton,
    ],
    templateUrl: './calendar-month.template.html',
    styleUrls: ['./calendar-month.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._picking]': 'isSingle',
    },
})
export class TuiCalendarMonth {
    protected isYearPickerShown = false;
    protected readonly months = toSignal(inject(TUI_CALENDAR_MONTHS));

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

    public get isSingle(): boolean {
        return this.value instanceof TuiMonthRange && this.value.isSingleMonth;
    }

    public onNextYear(): void {
        this.updateActiveYear(this.year.append({year: 1}));
    }

    public onPreviousYear(): void {
        this.updateActiveYear(this.year.append({year: -1}));
    }

    public getItemRange(item: TuiMonth): 'active' | 'end' | 'middle' | 'start' | null {
        const {value, hoveredItem} = this;

        if (!(value instanceof TuiMonthRange)) {
            return value?.monthSame(item) ? 'active' : null;
        }

        const months = item.month + item.year * 12;
        const hovered = hoveredItem ? hoveredItem.month + hoveredItem.year * 12 : null;
        const from = value.from.month + value.from.year * 12;
        const to = value.to.month + value.to.year * 12;
        const picking = this.isSingle ? hovered : null;
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

    protected onPickerYearClick(year: number): void {
        this.isYearPickerShown = false;

        if (this.year.year !== year) {
            this.updateActiveYear(new TuiYear(year));
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

    // eslint-disable-next-line max-params
    @tuiPure
    private calculateDisabledItemHandlerWithMinMax(
        disabledItemHandler: TuiBooleanHandler<TuiMonth>,
        value: TuiMonth | TuiMonthRange | null,
        min: TuiMonth,
        max: TuiMonth,
        minLength: number | null,
        maxLength: number | null,
    ): TuiBooleanHandler<TuiMonth> {
        return (item) => {
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
