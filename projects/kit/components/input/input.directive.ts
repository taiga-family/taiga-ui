import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputComponent} from './input.component';

@Directive({
    selector: `tui-input`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputDirective),
        },
    ],
})
export class TuiInputDirective extends TuiAbstractTextfieldHost<TuiInputComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
