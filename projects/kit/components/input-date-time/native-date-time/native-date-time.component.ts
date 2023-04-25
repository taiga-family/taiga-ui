import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';

import type {TuiInputDateTimeDirective} from '../input-date-time.directive';

@Component({
    selector: 'input[tuiDateTime]',
    template: '',
    host: {
        type: 'datetime-local',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '[step]': 'step',
        '(change.stop)': 'onChange($event.target.value)',
        '(input.stop)': 'onChange($event.target.value)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-date-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeDateTimeComponent {
    constructor(@Inject(TUI_TEXTFIELD_HOST) readonly host: TuiInputDateTimeDirective) {}

    get value(): string {
        if (!this.host.rawValue[0] || !this.host.rawValue[1]) {
            return '';
        }

        return `${this.host.rawValue[0]?.toString(
            'YMD',
            '-',
        )}T${this.host.rawValue[1]?.toString(this.host.mode)}`;
    }

    get step(): number {
        switch (this.host.mode) {
            case 'HH:MM:SS':
                return 1;
            case 'HH:MM:SS.MSS':
                return 0.001;
            default:
                return 60;
        }
    }

    onChange(value: string): void {
        const date = new Date(value);
        const day = TuiDay.fromLocalNativeDate(date);
        const time = TuiTime.fromLocalNativeDate(date);

        this.host.writeValue([day, time]);
    }
}
