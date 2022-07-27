import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateComponent} from './input-date.component';

@Directive({
    selector: `tui-input-date`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputDateDirective),
        },
    ],
})
export class TuiInputDateDirective extends TuiAbstractTextfieldHost<TuiInputDateComponent> {
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
