import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputComponent} from './input.component';

@Directive({
    selector: `tui-input`,
    providers: [tuiAsTextfieldHost(TuiInputDirective)],
})
export class TuiInputDirective extends AbstractTuiTextfieldHost<TuiInputComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
