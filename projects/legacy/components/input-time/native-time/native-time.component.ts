import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/legacy/tokens';

import type {TuiInputTimeDirective} from '../input-time.directive';

@Component({
    selector: 'input[tuiTime]',
    template: `
        <datalist
            *ngIf="items.length"
            [id]="autoIdString"
        >
            <option
                *ngFor="let item of items"
                value="{{ item }}"
            ></option>
        </datalist>
    `,
    host: {
        type: 'time',
        '[attr.list]': 'autoIdString',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '[step]': 'step',
        '(change.stop)': 'onChange($event.target.value)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeTimeComponent {
    protected readonly host = inject<TuiInputTimeDirective>(TUI_TEXTFIELD_HOST);

    protected readonly autoIdString: string = inject(TuiIdService).generate();

    protected get items(): string[] {
        return this.host.items.map(item => item.toString(this.host.mode));
    }

    protected get value(): string {
        return this.host.value.length === this.host.mode.length ? this.host.value : '';
    }

    protected get step(): number {
        switch (this.host.mode) {
            case 'HH:MM:SS':
                return 1;
            case 'HH:MM:SS.MSS':
                return 0.001;
            default:
                return 60;
        }
    }

    protected onChange(value: string): void {
        this.host.onValueChange(value);
    }
}
