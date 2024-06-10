import {Directive} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box',
    providers: [tuiAsTextfieldHost(TuiComboBoxDirective)],
})
export class TuiComboBoxDirective extends AbstractTuiTextfieldHost<
    TuiComboBoxComponent<unknown>
> {
    public override get value(): string {
        return this.host.nativeValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
