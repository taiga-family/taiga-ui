import {Directive, inject} from '@angular/core';
import {DATE_FILLER_LENGTH, TuiDay} from '@taiga-ui/cdk/date-time';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import {TuiInputDateDirective} from '../input-date.directive';

@Directive({
    standalone: false,
    selector: 'input[tuiDate]',
    providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
    host: {
        type: 'date',
        '[tabIndex]': '-1',
        '[value]': 'value',
        '(change)': 'onChange($event.target.value)',
        '[max]': 'max',
        '[min]': 'min',
        '(click.stop.zoneless)': '0',
        '(input.stop.zoneless)': '0',
        '(mousedown.stop.zoneless)': '0',
    },
})
export class TuiNativeDateDirective {
    protected readonly host = inject(TuiInputDateDirective);

    protected get value(): string {
        return this.host.value.length === DATE_FILLER_LENGTH
            ? TuiDay.normalizeParse(this.host.value, this.host.format.mode).toString(
                  'YMD',
                  '-',
              )
            : '';
    }

    protected get max(): string {
        return this.host.max.toJSON();
    }

    protected get min(): string {
        return this.host.min.toJSON();
    }

    protected onChange(value: string): void {
        this.host.onValueChange(
            value
                ? TuiDay.normalizeParse(value, 'YMD').toString(this.host.format.mode)
                : '',
        );
    }
}
