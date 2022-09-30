import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateTimeComponent} from './input-date-time.component';

@Directive({
    selector: `tui-input-date-time`,
    providers: [tuiAsTextfieldHost(TuiInputDateTimeDirective)],
})
export class TuiInputDateTimeDirective extends AbstractTuiTextfieldHost<TuiInputDateTimeComponent> {
    override get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    override process(input: HTMLInputElement): void {
        input.inputMode = `numeric`;
    }
}
