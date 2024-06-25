import {Directive, inject} from '@angular/core';
import {DATE_FILLER_LENGTH, TuiDay} from '@taiga-ui/cdk/date-time';
import {TUI_TEXTFIELD_HOST, tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import {TuiInputDateDirective} from '../input-date.directive';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: 'input[tuiDate]',
    providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
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
    protected readonly host = inject<TuiInputDateDirective>(TUI_TEXTFIELD_HOST);

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
