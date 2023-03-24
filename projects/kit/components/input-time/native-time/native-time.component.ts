import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';
import {TUI_INPUT_TIME_OPTIONS, TuiInputTimeOptions} from '@taiga-ui/kit';

import {TuiInputTimeDirective} from '../input-time.directive';

@Component({
    selector: 'input[tuiTime]',
    template: '',
    host: {
        type: 'time',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '[step]': 'step',
        '(input.stop.silent)': 'onChange($event.target.value)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeTimeComponent {
    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: TuiInputTimeDirective,
        @Inject(TUI_INPUT_TIME_OPTIONS)
        readonly options: TuiInputTimeOptions,
    ) {}

    get value(): string {
        if (this.host.value.length !== this.host.mode.length) {
            return '';
        }

        return this.host.value;
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
        this.host.onValueChange(value);
    }
}
