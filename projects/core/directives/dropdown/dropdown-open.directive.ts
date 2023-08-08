import {Directive, EventEmitter, Input, Output} from '@angular/core';

import type {TuiDropdownDirective} from './dropdown.directive';

@Directive({
    selector: '[tuiDropdownOpen],[tuiDropdownOpenChange]',
})
export class TuiDropdownOpenDirective {
    @Input()
    set tuiDropdownOpen(open: boolean) {
        this.dropdown?.toggle(open);
    }

    @Output()
    readonly tuiDropdownOpenChange = new EventEmitter<boolean>();

    dropdown?: TuiDropdownDirective;
}
