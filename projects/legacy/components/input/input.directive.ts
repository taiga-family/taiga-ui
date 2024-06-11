import {Directive} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiInputComponent} from './input.component';

@Directive({
    selector: 'tui-input',
    providers: [tuiAsTextfieldHost(TuiInputDirective)],
})
export class TuiInputDirective extends AbstractTuiTextfieldHost<TuiInputComponent> {
    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
