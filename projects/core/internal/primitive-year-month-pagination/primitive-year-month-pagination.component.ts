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
    type TuiMonthLike,
    type TuiYear,
} from '@taiga-ui/cdk';
import {type TuiWithOptionalMinMax} from '@taiga-ui/core/interfaces';

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
    public value = TuiMonth.currentLocal();

    @Input()
    public min: TuiMonth | null = TUI_FIRST_DAY;

    @Input()
    public max: TuiMonth | null = TUI_LAST_DAY;

    @Output()
    public readonly valueChange = new EventEmitter<TuiMonth>();

    @Output()
    public readonly yearClick = new EventEmitter<TuiYear>();

    public get prevMonthDisabled(): boolean {
        return this.value.monthSameOrBefore(this.computedMin);
    }

    public get nextMonthDisabled(): boolean {
        return this.value.monthSameOrAfter(this.computedMax);
    }

    public onYearClick(): void {
        this.yearClick.next(this.value);
    }

    public onPrevMonthClick(): void {
        this.appendValueWithLimit({month: -1});
    }

    public onNextMonthClick(): void {
        this.appendValueWithLimit({month: 1});
    }

    protected get computedMin(): TuiMonth {
        return this.min ?? TUI_FIRST_DAY;
    }

    protected get computedMax(): TuiMonth {
        return this.max ?? TUI_LAST_DAY;
    }

    protected get oneYear(): boolean {
        const {computedMin, computedMax} = this;

        return computedMin.year === computedMax.year;
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
