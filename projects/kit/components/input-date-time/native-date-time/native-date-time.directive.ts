import {Directive, Inject} from '@angular/core';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';

import type {TuiInputDateTimeDirective} from '../input-date-time.directive';

@Directive({
    selector: 'input[tuiDateTime]',
    host: {
        type: 'datetime-local',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '(change.stop)': 'onChange($event.target.value)',
        '(input.stop)': 'onChange($event.target.value)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
})
export class TuiNativeDateTimeDirective {
    constructor(@Inject(TUI_TEXTFIELD_HOST) readonly host: TuiInputDateTimeDirective) {}

    get value(): string {
        if (!this.host.rawValue[0] || !this.host.rawValue[1]) {
            return '';
        }

        return `${this.host.rawValue[0]?.toString(
            'YMD',
            '-',
        )}T${this.host.rawValue[1]?.toString('HH:MM')}`;
    }

    onChange(value: string): void {
        if (!value) {
            this.host.writeValue([null, null]);

            return;
        }

        const date = new Date(value);
        const day = TuiDay.fromLocalNativeDate(date);
        const time = TuiTime.fromLocalNativeDate(date);

        this.host.writeValue([day, time]);
    }
}
