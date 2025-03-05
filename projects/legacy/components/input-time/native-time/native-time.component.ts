import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiInjectId} from '@taiga-ui/cdk/services';

import {TuiInputTimeDirective} from '../input-time.directive';

@Component({
    standalone: false,
    selector: 'input[tuiTime]',
    template: `
        <datalist
            *ngIf="items.length"
            [id]="autoId"
        >
            <option
                *ngFor="let item of items"
                value="{{ item }}"
            ></option>
        </datalist>
    `,
    styleUrls: ['./native-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        type: 'time',
        '[attr.list]': 'autoId',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '[step]': 'step',
        '(change.stop)': 'onChange($event.target.value)',
        '(click.stop.zoneless)': '0',
        '(mousedown.stop.zoneless)': '0',
    },
})
export class TuiNativeTimeComponent {
    protected readonly host = inject(TuiInputTimeDirective);

    protected readonly autoId = tuiInjectId();

    protected get items(): string[] {
        return this.host.items.map((item) => item.toString(this.host.mode));
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
