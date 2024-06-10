import {Directive} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiTextareaComponent} from './textarea.component';

@Directive({
    selector: 'tui-textarea',
    providers: [tuiAsTextfieldHost(TuiTextareaDirective)],
})
export class TuiTextareaDirective extends AbstractTuiTextfieldHost<TuiTextareaComponent> {
    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
