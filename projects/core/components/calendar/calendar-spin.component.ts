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

    protected append(date: TuiMonthLike): void {
        const value = this.value().append(date);
        const min = this.min();
        const max = this.max();

        if (min.monthSameOrAfter(value)) {
            this.updateValue(min);
        } else {
            this.updateValue(max.monthSameOrBefore(value) ? max : value);
        }
    }

    private updateValue(value: TuiMonth): void {
        if (this.value().monthSame(value)) {
            return;
        }

        this.value.set(value);
    }
}
