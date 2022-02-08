import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputMonthComponent} from './input-month.component';

@Directive({
    selector: 'tui-input-month',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputMonthDirective),
        },
    ],
})
export class TuiInputMonthDirective extends TuiAbstractTextfieldHost<TuiInputMonthComponent> {
    get readOnly(): boolean {
        return true;
    }

    // TODO: Fix change detection
    get value(): string {
        return this.host.textfield?.value || '';
    }

    onValueChange(value: string) {
        this.host.onValueChange(value);
    }
}
