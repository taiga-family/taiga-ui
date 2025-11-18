import {Directive, input} from '@angular/core';

@Directive({
    selector: 'tui-opt-group',
    host: {
        role: 'group',
        '[attr.data-label]': 'label()',
    },
})
export class TuiOptGroup {
    public readonly label = input<string | null>();
}
