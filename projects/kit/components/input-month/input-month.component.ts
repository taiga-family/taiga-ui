import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';

import {TuiInputMonthDirective} from './input-month.directive';

@Component({
    standalone: true,
    selector: 'input[tuiInputMonth][type="month"]',
    imports: [NgIf, TuiTextfieldContent],
    templateUrl: './input-month.template.html',
    styleUrls: ['./input-month.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        ngSkipHydration: 'true',
        '[type]': '"text"',
    },
})
export class TuiInputMonthComponent {
    protected readonly host = inject(TuiInputMonthDirective);
    protected readonly min = signal<TuiMonth | null>(null);
    protected readonly max = signal<TuiMonth | null>(null);
    protected readonly calendarSync = effect(() => {
        const calendar = this.host.calendar();

        if (calendar) {
            calendar.min.set(this.min() ?? TUI_FIRST_DAY); // TODO(v5): remove TUI_FIRST_DAY fallback
            calendar.max.set(this.max() ?? TUI_LAST_DAY); // TODO(v5): remove TUI_LAST_DAY fallback
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    // TODO(v5): use signal inputs
    @Input('min')
    public set minSetter(x: TuiMonth | null) {
        this.min.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('max')
    public set maxSetter(x: TuiMonth | null) {
        this.max.set(x);
    }

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const [year = 0, month = 0] = value.split('-').map(Number);

        this.host.onChange(new TuiMonth(year, month - 1));
    }
}
