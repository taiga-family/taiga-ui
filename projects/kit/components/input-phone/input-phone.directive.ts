import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputPhoneComponent} from './input-phone.component';

@Directive({
    selector: 'tui-input-phone',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputPhoneDirective),
        },
    ],
})
export class TuiInputPhoneDirective extends TuiAbstractTextfieldHost<TuiInputPhoneComponent> {
    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string) {
        this.host.onValueChange(value);
    }

    process(input: HTMLInputElement) {
        input.type = 'tel';
        // TODO inputMode?
    }
}
