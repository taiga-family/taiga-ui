import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDay, TuiTime} from '@taiga-ui/cdk/date-time';
import {
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';
import {TuiNativeTimePicker} from '@taiga-ui/kit/components/input-time';

import {TuiInputDateTimeDirective} from './input-date-time.directive';

@Component({
    selector: 'input[tuiInputDateTime][type="datetime-local"]',
    imports: [TuiTextfieldContent],
    templateUrl: './input-date-time.template.html',
    styleUrl: './input-date-time.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithNativePicker],
    host: {ngSkipHydration: 'true'},
})
export class TuiInputDateTimeComponent extends TuiNativeTimePicker {
    protected readonly host = inject(TuiInputDateTimeDirective);
    protected readonly step = computed(() => this.getStep(this.host.timeMode()));
    protected readonly value = computed(() => this.toISOString(this.host.value()));

    protected min = computed(() =>
        this.toISOString([this.host.min(), this.host.minTime()]),
    );

    protected max = computed(() =>
        this.toISOString([this.host.max(), this.host.maxTime()]),
    );

    protected onInput(value: string): void {
        if (!value) {
            return this.host.setValue(null);
        }

        const date = new Date(value);
        const day = TuiDay.fromLocalNativeDate(date);
        const time = TuiTime.fromLocalNativeDate(date);

        this.host.setValue([day, time]);
    }
}
