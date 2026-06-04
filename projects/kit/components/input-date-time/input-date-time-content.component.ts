import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiDay, TuiTime} from '@taiga-ui/cdk/date-time';

import {TuiInputDateTimeComponent} from './input-date-time.component';
import {TuiInputDateTimeDirective} from './input-date-time.directive';

@Component({
    selector: 'tui-input-date-time-content',
    template: `
        @if (host.native) {
            <input
                type="datetime-local"
                [attr.list]="component.list"
                [max]="max()"
                [min]="min()"
                [step]="step()"
                [value]="value()"
                (click.stop.zoneless)="(0)"
                (input)="onInput($any($event.target).value)"
                (pointerdown.stop.zoneless)="(0)"
            />
        }
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-date-time.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputDateTimeContent {
    protected readonly component = inject(TuiInputDateTimeComponent);
    protected readonly host = inject(TuiInputDateTimeDirective);

    protected readonly step = computed(() =>
        this.component.getStep(this.host.timeMode()),
    );

    protected readonly value = computed(() =>
        this.component.toISOString(this.host.value()),
    );

    protected readonly min = computed(() =>
        this.component.toISOString([this.host.min(), this.host.minTime()]),
    );

    protected readonly max = computed(() =>
        this.component.toISOString([this.host.max(), this.host.maxTime()]),
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
