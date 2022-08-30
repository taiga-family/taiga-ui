import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputCopyComponent} from './input-copy.component';

@Directive({
    selector: `tui-input-copy`,
    providers: [tuiAsTextfieldHost(TuiInputCopyDirective)],
})
export class TuiInputCopyDirective extends AbstractTuiTextfieldHost<TuiInputCopyComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
