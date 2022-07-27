import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateRangeComponent} from './input-date-range.component';

@Directive({
    selector: `tui-input-date-range`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputDateRangeDirective),
        },
    ],
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
    }
}
