import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputYearComponent} from './input-year.component';

@Directive({
    selector: `tui-input-year`,
    providers: [tuiAsTextfieldHost(TuiInputYearDirective)],
})
export class TuiInputYearDirective extends AbstractTuiTextfieldHost<TuiInputYearComponent> {
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    override process(input: HTMLInputElement): void {
        input.inputMode = `numeric`;
    }
}
