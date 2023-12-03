import {Directive, EventEmitter, Input, OnChanges, Output} from '@angular/core';

import type {TuiDropdownDirective} from './dropdown.directive';

@Directive({
    selector: '[tuiDropdownOpen],[tuiDropdownOpenChange]',
})
export class TuiDropdownOpenDirective implements OnChanges {
    @Input()
    tuiDropdownOpen = false;

    @Output()
    readonly tuiDropdownOpenChange = new EventEmitter<boolean>();

    dropdown?: TuiDropdownDirective;

    update(open: boolean): void {
        this.tuiDropdownOpen = open;
        this.tuiDropdownOpenChange.emit(open);
    }

    ngOnChanges(): void {
        this.dropdown?.toggle(this.tuiDropdownOpen);
    }
}
