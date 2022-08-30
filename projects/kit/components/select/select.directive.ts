import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiSelectComponent} from './select.component';

@Directive({
    selector: `tui-select`,
    providers: [tuiAsTextfieldHost(TuiSelectDirective)],
})
export class TuiSelectDirective extends AbstractTuiTextfieldHost<
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
