import {Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputCountComponent} from './input-count.component';

@Directive({
    selector: `tui-input-count`,
    providers: [tuiAsTextfieldHost(TuiInputCountDirective)],
})
export class TuiInputCountDirective extends TuiAbstractTextfieldHost<TuiInputCountComponent> {
    onValueChange(): void {
        this.host.onValueChange();
    }

    process(input: HTMLInputElement): void {
        input.autocomplete = `off`;
        input.inputMode = `numeric`;
        input.maxLength = 18;
    }
}
