import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiDefaultProp,
    TuiMonth,
    TuiMonthLike,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';

@Component({
    selector: `tui-primitive-year-month-pagination`,
    templateUrl: `./primitive-year-month-pagination.template.html`,
    styleUrls: [`./primitive-year-month-pagination.style.less`],
})
export class TuiPrimitiveYearMonthPaginationComponent
    implements TuiWithOptionalMinMax<TuiMonth>
{
    @Input()
    @tuiDefaultProp()
    value = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = TUI_LAST_DAY;

    @Output()
    readonly valueChange = new EventEmitter<TuiMonth>();

    @Output()
    readonly yearClick = new EventEmitter<TuiYear>();

    get prevMonthDisabled(): boolean {
        return this.value.monthSameOrBefore(this.min);
    }

    get nextMonthDisabled(): boolean {
        return this.value.monthSameOrAfter(this.max);
    }

    get oneYear(): boolean {
        return this.min.year === this.max.year;
    }

    onYearClick(): void {
        this.yearClick.next(this.value);
    }

    onPrevMonthClick(): void {
        this.appendValueWithLimit({month: -1});
    }

    onNextMonthClick(): void {
        this.appendValueWithLimit({month: 1});
    }

    private appendValueWithLimit(date: TuiMonthLike): void {
        const newMonth: TuiMonth = this.value.append(date);

        if (this.min.monthSameOrAfter(newMonth)) {
            this.updateValue(this.min);

            return;
        }

        if (this.max.monthSameOrBefore(newMonth)) {
            this.updateValue(this.max);

            return;
        }

        this.updateValue(newMonth);
    }

    private updateValue(value: TuiMonth): void {
        if (this.value.monthSame(value)) {
            return;
        }

        this.value = value;
        this.valueChange.emit(value);
    }
}
