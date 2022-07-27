import {Directive, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiSelectComponent} from './select.component';

@Directive({
    selector: `tui-select`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiSelectDirective),
        },
    ],
})
export class TuiSelectDirective extends TuiAbstractTextfieldHost<
    TuiSelectComponent<unknown>
> {
    get readOnly(): boolean {
        return true;
    }

    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
