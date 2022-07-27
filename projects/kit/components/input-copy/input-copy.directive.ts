import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputCopyComponent} from './input-copy.component';

@Directive({
    selector: `tui-input-copy`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputCopyDirective),
        },
    ],
})
export class TuiInputCopyDirective extends TuiAbstractTextfieldHost<TuiInputCopyComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
