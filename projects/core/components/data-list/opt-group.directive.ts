import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'tui-opt-group',
    host: {
        role: 'group',
        '[attr.data-label]': 'label',
    },
})
export class TuiOptGroup {
    @Input()
    public label?: string | null;
}
