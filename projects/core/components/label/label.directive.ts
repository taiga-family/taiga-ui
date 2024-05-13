import {ContentChild, Directive, forwardRef, inject} from '@angular/core';
import {tuiInjectElement, tuiWithStyles} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/tokens';

import {TuiLabelComponent} from './label.component';

// TODO: Replace TUI_DATA_LIST_HOST with proper token once we refactor textfields
@Directive({
    standalone: true,
    selector: 'label[tuiLabel]',
    host: {
        '[attr.for]': 'el.htmlFor || parent?.id',
        '[class._textfield]': 'textfield',
    },
})
export class TuiLabelDirective {
    @ContentChild(forwardRef(() => TUI_DATA_LIST_HOST))
    protected readonly textfield?: unknown;

    protected readonly el = tuiInjectElement<HTMLLabelElement>();
    protected readonly nothing = tuiWithStyles(TuiLabelComponent);
    protected readonly parent = inject(
        forwardRef(() => TUI_DATA_LIST_HOST),
        {optional: true},
    );
}
