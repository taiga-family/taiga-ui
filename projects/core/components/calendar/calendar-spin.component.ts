import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import type {TuiMonthLike, TuiYear} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiSpinButtonComponent} from '@taiga-ui/core/components/spin-button';
import {TuiMonthPipe} from '@taiga-ui/core/pipes';

@Component({
    standalone: true,
    selector: 'tui-calendar-spin',
    imports: [TuiSpinButtonComponent, TuiLink, TuiMonthPipe, NgIf, AsyncPipe],
    templateUrl: './calendar-spin.template.html',
    styleUrls: ['./calendar-spin.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCalendarSpinComponent {
    @Input()
    public value = TuiMonth.currentLocal();

    @Input()
    public min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    public max: TuiMonth = TUI_LAST_DAY;

    @Output()
    public readonly valueChange = new EventEmitter<TuiMonth>();

    @Output()
    public readonly yearClick = new EventEmitter<TuiYear>();

    protected onYearClick(): void {
        this.yearClick.next(this.value);
    }

    protected append(date: TuiMonthLike): void {
        const value = this.value.append(date);

        if (this.min.monthSameOrAfter(value)) {
            this.updateValue(this.min);
        } else {
            this.updateValue(this.max.monthSameOrBefore(value) ? this.max : value);
        }
    }

    private updateValue(value: TuiMonth): void {
        if (this.value.monthSame(value)) {
            return;
        }

        this.value = value;
        this.valueChange.emit(value);
    }
}
