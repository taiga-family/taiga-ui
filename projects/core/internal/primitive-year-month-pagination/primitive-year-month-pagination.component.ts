import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiMonth,
    TuiMonthLike,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';

@Component({
    selector: 'tui-primitive-year-month-pagination',
    templateUrl: './primitive-year-month-pagination.template.html',
    styleUrls: ['./primitive-year-month-pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveYearMonthPaginationComponent
    implements TuiWithOptionalMinMax<TuiMonth>
{
    @Input()
    value = TuiMonth.currentLocal();

    @Input()
    min: TuiMonth | null = TUI_FIRST_DAY;

    @Input()
    max: TuiMonth | null = TUI_LAST_DAY;

    @Output()
    readonly valueChange = new EventEmitter<TuiMonth>();

    @Output()
    readonly yearClick = new EventEmitter<TuiYear>();

    get computedMin(): TuiMonth {
        return this.min ?? TUI_FIRST_DAY;
    }

    get computedMax(): TuiMonth {
        return this.max ?? TUI_LAST_DAY;
    }

    get prevMonthDisabled(): boolean {
        return this.value.monthSameOrBefore(this.computedMin);
    }

    get nextMonthDisabled(): boolean {
        return this.value.monthSameOrAfter(this.computedMax);
    }

    get oneYear(): boolean {
        const {computedMin, computedMax} = this;

        return computedMin.year === computedMax.year;
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
        const {computedMin, computedMax} = this;

        if (computedMin.monthSameOrAfter(newMonth)) {
            this.updateValue(computedMin);

            return;
        }

        this.updateValue(
            computedMax.monthSameOrBefore(newMonth) ? computedMax : newMonth,
        );
    }

    private updateValue(value: TuiMonth): void {
        if (this.value.monthSame(value)) {
            return;
        }

        this.value = value;
        this.valueChange.emit(value);
    }
}
