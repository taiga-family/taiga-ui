import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    model,
    output,
} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiMonth,
    type TuiMonthLike,
    type TuiYear,
} from '@taiga-ui/cdk/date-time';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiSpinButton} from '@taiga-ui/core/components/spin-button';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-calendar-spin',
    imports: [TuiLink, TuiSpinButton],
    templateUrl: './calendar-spin.template.html',
    styleUrl: './calendar-spin.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarSpin {
    protected readonly months = inject(TUI_MONTHS);

    public readonly value = model(TuiMonth.currentLocal());

    public readonly min = input<TuiMonth>(TUI_FIRST_DAY);

    public readonly max = input<TuiMonth>(TUI_LAST_DAY);

    public readonly yearClick = output<TuiYear>();

    protected onYearClick(): void {
        this.yearClick.emit(this.value());
    }

    protected append(date: TuiMonthLike): void {
        const value = this.value().append(date);

        if (this.min().monthSameOrAfter(value)) {
            this.updateValue(this.min());
        } else {
            this.updateValue(this.max().monthSameOrBefore(value) ? this.max() : value);
        }
    }

    private updateValue(value: TuiMonth): void {
        if (this.value().monthSame(value)) {
            return;
        }

        this.value.set(value);
    }
}
