import {Directive, Input, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

/**
 * @deprecated TODO: remove in v.5 when legacy controls are dropped
 */
@Directive({
    standalone: true,
    selector:
        '[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])',
})
export class TuiDropdownOpenLegacy {
    @Output()
    public readonly tuiDropdownOpenChange = new BehaviorSubject(false);

    @Input()
    public set tuiDropdownOpen(open: boolean) {
        this.tuiDropdownOpenChange.next(open);
    }
}
