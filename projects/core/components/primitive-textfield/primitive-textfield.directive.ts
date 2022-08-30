import {Directive, Inject} from '@angular/core';
import {AbstractTuiControl} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost} from '@taiga-ui/core/abstract';
import {tuiAsTextfieldHost} from '@taiga-ui/core/tokens';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

@Directive({
    selector: `tui-primitive-textfield`,
    providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)],
})
export class TuiPrimitiveTextfieldDirective extends AbstractTuiTextfieldHost<any> {
    constructor(
        @Inject(TuiPrimitiveTextfieldComponent)
        private readonly textfield: TuiPrimitiveTextfieldComponent,
    ) {
        /**
         * TuiPrimitiveTextfieldComponent satisfies all required parts of
         * AbstractTuiControl interface. A new interface is not introduced
         * so AbstractTuiControl is automatically injected for all other controls.
         */
        super(textfield as unknown as AbstractTuiControl<unknown>);
    }

    get readOnly(): boolean {
        return this.textfield.readOnly || !this.textfield.editable;
    }

    onValueChange(value: string): void {
        this.textfield.onModelChange(value);
    }
}
