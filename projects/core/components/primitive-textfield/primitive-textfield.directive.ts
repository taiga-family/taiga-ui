import {Directive, inject} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/core/abstract';
import {tuiAsTextfieldHost} from '@taiga-ui/core/tokens';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

@Directive({
    selector: 'tui-primitive-textfield',
    providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)],
})
export class TuiPrimitiveTextfieldDirective extends AbstractTuiTextfieldHost<any> {
    protected override readonly host = inject(TuiPrimitiveTextfieldComponent);

    override get readOnly(): boolean {
        return this.host.readOnly || !this.host.editable;
    }

    onValueChange(value: string): void {
        this.host.onModelChange(value);
    }
}
