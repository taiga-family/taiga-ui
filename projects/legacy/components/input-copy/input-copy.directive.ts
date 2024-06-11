import {Directive} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiInputCopyComponent} from './input-copy.component';

@Directive({
    selector: 'tui-input-copy',
    providers: [tuiAsTextfieldHost(TuiInputCopyDirective)],
})
export class TuiInputCopyDirective extends AbstractTuiTextfieldHost<TuiInputCopyComponent> {
    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
