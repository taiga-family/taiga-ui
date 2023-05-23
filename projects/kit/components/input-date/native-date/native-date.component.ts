import {Directive, Inject} from '@angular/core';
import {DATE_FILLER_LENGTH, TUI_DATE_FORMAT, TuiDateMode, TuiDay} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';

import type {TuiInputDateDirective} from '../input-date.directive';

@Directive({
    selector: 'input[tuiDate]',
    host: {
        type: 'date',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '(change)': 'onChange($event.target.value)',
        '[max]': 'max',
        '[min]': 'min',
        '(click.stop.silent)': '0',
        '(input.stop.silent)': '0',
        '(mousedown.stop.silent)': '0',
    },
})
export class TuiNativeDateDirective {
    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: TuiInputDateDirective,
        @Inject(TUI_DATE_FORMAT) private readonly dateFormat: TuiDateMode,
    ) {}

    get value(): string {
        return this.host.value.length === DATE_FILLER_LENGTH
            ? TuiDay.normalizeParse(this.host.value, this.dateFormat).toString('YMD', '-')
            : '';
    }

    get max(): string {
        return this.host.max.toJSON();
    }

    get min(): string {
        return this.host.min.toJSON();
    }

    onChange(value: string): void {
        this.host.onValueChange(
            value ? TuiDay.normalizeParse(value, 'YMD').toString(this.dateFormat) : '',
        );
    }
}
