import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateComponent} from './input-date.component';

@Directive({
    selector: `tui-input-date`,
    providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
})
export class TuiInputDateDirective extends AbstractTuiTextfieldHost<TuiInputDateComponent> {
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
