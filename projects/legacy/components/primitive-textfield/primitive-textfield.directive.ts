import {Directive, inject} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

/**
 * @deprecated: use `tui-textfield` instead of `tui-primitive-textfield`
 */
@Directive({
    selector: 'tui-primitive-textfield',
    providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)],
})
export class TuiPrimitiveTextfieldDirective extends AbstractTuiTextfieldHost<any> {
    protected override readonly host = inject(TuiPrimitiveTextfieldComponent);

    public override get readOnly(): boolean {
        return this.host.readOnly || !this.host.editable;
    }

    public onValueChange(value: string): void {
        this.host.onModelChange(value);
    }
}
