import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {type TuiInputComponent} from './input.component';

@Directive({
    selector: 'tui-input',
    providers: [tuiAsTextfieldHost(TuiInputDirective)],
})
export class TuiInputDirective extends AbstractTuiTextfieldHost<TuiInputComponent> {
    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
