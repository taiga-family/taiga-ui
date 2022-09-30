import {Directive, Input} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/abstract';

@Directive({
    selector: `[tuiDropdown][tuiDropdownHost]`,
    providers: [tuiAsRectAccessor(TuiDropdownHostDirective)],
})
export class TuiDropdownHostDirective extends TuiRectAccessor {
    @Input()
    tuiDropdownHost?: HTMLElement;

    getClientRect(): ClientRect {
        return this.tuiDropdownHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    }
}
