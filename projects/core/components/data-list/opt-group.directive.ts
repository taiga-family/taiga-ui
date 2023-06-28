import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: 'tui-opt-group',
    host: {
        role: 'group',
    },
})
export class TuiOptGroupDirective {
    @Input()
    @HostBinding('attr.data-label')
    label = '';
}
