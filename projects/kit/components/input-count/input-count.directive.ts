import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputCountComponent} from './input-count.component';

@Directive({
    selector: 'tui-input-count',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputCountDirective),
        },
    ],
})
export class TuiInputCountDirective extends TuiAbstractTextfieldHost<TuiInputCountComponent> {
    onValueChange() {
        this.host.onValueChange();
    }

    process(input: HTMLInputElement) {
        input.autocomplete = 'off';
        input.inputMode = 'numeric';
    }
}
