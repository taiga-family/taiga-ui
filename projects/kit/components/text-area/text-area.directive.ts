import {Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiTextAreaComponent} from './text-area.component';

@Directive({
    selector: `tui-text-area`,
    providers: [tuiAsTextfieldHost(TuiTextAreaDirective)],
})
export class TuiTextAreaDirective extends TuiAbstractTextfieldHost<TuiTextAreaComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
