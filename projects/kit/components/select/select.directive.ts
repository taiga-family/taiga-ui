import {Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiSelectComponent} from './select.component';

@Directive({
    selector: `tui-select`,
    providers: [tuiAsTextfieldHost(TuiSelectDirective)],
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
