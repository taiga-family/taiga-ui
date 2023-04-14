import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiIdService, TuiMapper, TuiTime} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';

import {TuiInputTimeDirective} from '../input-time.directive';

/* eslint-disable  @angular-eslint/component-max-inline-declarations */
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
        '(input.stop.silent)': 'onChange($event.target.value)',
        '(click.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
    styleUrls: ['./native-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeTimeComponent {
    autoIdString: string;
    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: TuiInputTimeDirective,
        @Inject(TuiIdService)
        readonly idService: TuiIdService,
    ) {
        this.autoIdString = idService.generate();
    }

    map: TuiMapper<readonly TuiTime[], string[]> = items =>
        items.map(item => item.toString(this.host.mode));

    get items(): string[] {
        return this.host.items.map(item => item.toString(this.host.mode));
    }

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
