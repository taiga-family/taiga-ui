import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiMultiSelectComponent} from './multi-select.component';

@Directive({
    selector: 'tui-multi-select',
    providers: [tuiAsTextfieldHost(TuiMultiSelectDirective)],
})
export class TuiMultiSelectDirective extends AbstractTuiTextfieldHost<
    TuiMultiSelectComponent<unknown>
> {
    override get readOnly(): boolean {
        return true;
    }

    onValueChange(value: string[]): void {
        this.host.onValueChange(value);
    }
}
