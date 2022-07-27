import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateTimeComponent} from './input-date-time.component';

@Directive({
    selector: `tui-input-date-time`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputDateTimeDirective),
        },
    ],
})
export class TuiInputDateTimeDirective extends TuiAbstractTextfieldHost<TuiInputDateTimeComponent> {
    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    process(input: HTMLInputElement): void {
        input.inputMode = `numeric`;
    }
}
