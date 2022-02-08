import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputNumberComponent} from './input-number.component';

@Directive({
    selector: 'tui-input-number',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputNumberDirective),
        },
    ],
})
export class TuiInputNumberDirective extends TuiAbstractTextfieldHost<TuiInputNumberComponent> {
    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string) {
        this.host.onValueChange(value);
    }

    process(input: HTMLInputElement) {
        input.inputMode = 'decimal';
        // TODO maxLength?
    }
}
