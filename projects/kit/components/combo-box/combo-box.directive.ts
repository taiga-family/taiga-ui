import {Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: `tui-combo-box`,
    providers: [tuiAsTextfieldHost(TuiComboBoxDirective)],
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
