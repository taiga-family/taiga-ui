import {ContentChild, Directive, forwardRef, inject} from '@angular/core';
import {tuiInjectElement, tuiWithStyles} from '@taiga-ui/cdk';

import {TuiLabelComponent} from './label.component';
import {TuiTextfieldComponent} from './textfield.component';

@Directive({
    standalone: true,
    selector: 'label[tuiLabel]',
    host: {
        '[attr.for]': 'el.htmlFor || parent?.id',
        '[class._textfield]': 'textfield',
    },
})
export class TuiLabelDirective {
    @ContentChild(forwardRef(() => TuiTextfieldComponent))
    protected readonly textfield?: unknown;

    protected readonly el = tuiInjectElement<HTMLLabelElement>();
    protected readonly nothing = tuiWithStyles(TuiLabelComponent);
    protected readonly parent = inject(
        forwardRef(() => TuiTextfieldComponent),
        {optional: true},
    );
}
