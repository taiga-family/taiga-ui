import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiTextareaComponent} from './textarea.component';

@Directive({
    selector: 'tui-textarea, tui-text-area',
    providers: [tuiAsTextfieldHost(TuiTextareaDirective)],
})
export class TuiTextareaDirective extends AbstractTuiTextfieldHost<TuiTextareaComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
