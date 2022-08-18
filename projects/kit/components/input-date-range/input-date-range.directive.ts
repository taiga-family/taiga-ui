import {Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateRangeComponent} from './input-date-range.component';

@Directive({
    selector: `tui-input-date-range`,
    providers: [tuiAsTextfieldHost(TuiInputDateRangeDirective)],
})
export class TuiInputDateRangeDirective extends TuiAbstractTextfieldHost<TuiInputDateRangeComponent> {
    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    process(input: HTMLInputElement): void {
        input.inputMode = `numeric`;
        input.placeholder = this.host.computedExampleText;
    }
}
