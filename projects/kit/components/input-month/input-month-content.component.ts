import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonth} from '@taiga-ui/cdk/date-time';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiInputMonthComponent} from './input-month.component';
import {TuiInputMonthDirective} from './input-month.directive';

@Component({
    selector: 'tui-input-month-content',
    template: `
        @if (host.native) {
            <input
                type="month"
                [max]="max()"
                [min]="min()"
                [value]="value()"
                (click.stop.zoneless)="(0)"
                (input)="onInput($any($event.target).value)"
                (pointerdown.stop.zoneless)="(0)"
            />
        }
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-month.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputMonthContent {
    protected readonly component = inject(TuiInputMonthComponent);
    protected readonly host = inject(TuiInputMonthDirective);

    protected readonly max = computed(() => this.component.max()?.toJSON());
    protected readonly min = computed(() => this.component.min()?.toJSON());
    protected readonly value = computed(() => this.host.value()?.toJSON());

    protected readonly calendarSync = effect(() => {
        const calendar = this.host.calendar();

        if (calendar) {
            tuiSetSignal(calendar.min, this.component.min() ?? TUI_FIRST_DAY);
            tuiSetSignal(calendar.max, this.component.max() ?? TUI_LAST_DAY);
        }
    });

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const [year = 0, month = 0] = value.split('-').map(Number);

        this.host.onChange(new TuiMonth(year, month - 1));
    }
}
