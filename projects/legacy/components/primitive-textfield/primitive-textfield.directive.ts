import {Directive, inject} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

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
