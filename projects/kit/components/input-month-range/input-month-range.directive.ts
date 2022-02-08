import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputMonthRangeComponent} from './input-month-range.component';

@Directive({
    selector: 'tui-input-month-range',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputMonthRangeDirective),
        },
    ],
})
export class TuiInputMonthRangeDirective extends TuiAbstractTextfieldHost<TuiInputMonthRangeComponent> {
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
