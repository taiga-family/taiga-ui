import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonth} from '@taiga-ui/cdk/date-time';
import {
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputMonthDirective} from './input-month.directive';

@Component({
    selector: 'input[tuiInputMonth][type="month"]',
    imports: [TuiTextfieldContent],
    templateUrl: './input-month.template.html',
    styleUrl: './input-month.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithNativePicker],
    host: {ngSkipHydration: 'true'},
})
export class TuiInputMonthComponent {
    protected readonly host = inject(TuiInputMonthDirective);
    protected readonly calendarSync = effect(() => {
        const calendar = this.host.calendar();

        if (calendar) {
            calendar.min.set(this.min() ?? TUI_FIRST_DAY);
            calendar.max.set(this.max() ?? TUI_LAST_DAY);
        }
    });

    protected readonly min = input<TuiMonth | null>(null);
    protected readonly max = input<TuiMonth | null>(null);

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const [year = 0, month = 0] = value.split('-').map(Number);

        this.host.onChange(new TuiMonth(year, month - 1));
    }
}
