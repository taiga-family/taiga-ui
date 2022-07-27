import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiTextAreaComponent} from './text-area.component';

@Directive({
    selector: `tui-text-area`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiTextAreaDirective),
        },
    ],
})
export class TuiTextAreaDirective extends TuiAbstractTextfieldHost<TuiTextAreaComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
