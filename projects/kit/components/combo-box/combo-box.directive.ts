import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiComboBoxDirective),
        },
    ],
})
export class TuiComboBoxDirective extends TuiAbstractTextfieldHost<
    TuiComboBoxComponent<unknown>
> {
    get value(): string {
        return this.host.nativeValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
