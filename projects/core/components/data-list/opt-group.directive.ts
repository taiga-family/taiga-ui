import {Directive, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: `tui-opt-group`,
    host: {
        role: `group`,
    },
})
export class TuiOptGroupDirective {
    @Input()
    @HostBinding(`attr.data-label`)
    @tuiDefaultProp()
    label = ``;
}
