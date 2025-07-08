import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDay, TuiTime} from '@taiga-ui/cdk/date-time';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';

import {TuiInputDateTimeDirective} from './input-date-time.directive';

@Component({
    standalone: true,
    selector: 'input[tuiInputDateTime][type="datetime-local"]',
    imports: [NgIf, TuiTextfieldContent],
    templateUrl: './input-date-time.template.html',
    styleUrls: ['./input-date-time.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        ngSkipHydration: 'true',
        '[type]': '"text"',
        '[attr.list]': 'null',
    },
})
export class TuiInputDateTimeComponent {
    protected readonly host = inject(TuiInputDateTimeDirective);

    protected min = computed(() =>
        this.toISOString([this.host.min(), this.host.minTime()]),
    );

    protected max = computed(() =>
        this.toISOString([this.host.max(), this.host.maxTime()]),
    );

    protected readonly step = computed((mode = this.host.timeMode()) => {
        switch (mode) {
            case 'HH:MM:SS':
            case 'HH:MM:SS AA':
                return 1;
            case 'HH:MM:SS.MSS':
            case 'HH:MM:SS.MSS AA':
                return 0.001;
            default:
                return 60;
        }
    });

    protected value = computed(() => this.toISOString(this.host.value()));

    @Input()
    public list: string | null = null;

    protected toISOString(
        date: TuiDay | readonly [TuiDay, TuiTime | null] | null,
    ): string {
        const [day, time] = Array.isArray(date) ? date : [date];
        const timeString = time ? `T${time.toString(this.host.timeMode())}` : '';

        return day ? day.toJSON() + timeString : '';
    }

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const date = new Date(value);
        const day = TuiDay.fromLocalNativeDate(date);
        const time = TuiTime.fromLocalNativeDate(date);

        this.host.setValue([day, time]);
    }
}
