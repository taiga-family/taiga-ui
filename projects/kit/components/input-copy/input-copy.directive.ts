import {Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputCopyComponent} from './input-copy.component';

@Directive({
    selector: `tui-input-copy`,
    providers: [tuiAsTextfieldHost(TuiInputCopyDirective)],
})
export class TuiInputCopyDirective extends TuiAbstractTextfieldHost<TuiInputCopyComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
