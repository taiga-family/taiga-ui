import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiTextareaComponent} from './textarea.component';

// TODO: delete `tui-text-area` in v4.0
@Directive({
    selector: 'tui-textarea, tui-text-area',
    providers: [tuiAsTextfieldHost(TuiTextareaDirective)],
})
export class TuiTextareaDirective extends AbstractTuiTextfieldHost<TuiTextareaComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
