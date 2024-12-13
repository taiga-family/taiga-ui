import {Directive, Input, Output} from '@angular/core';
import {distinctUntilChanged, Subject} from 'rxjs';

/**
 * @deprecated TODO: remove in v.5 when legacy controls are dropped
 */
@Directive({
    standalone: true,
    selector:
        '[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])',
})
export class TuiDropdownOpenLegacy {
    private readonly openStateSub = new Subject<boolean>();

    @Output()
    public readonly tuiDropdownOpenChange =
        this.openStateSub.pipe(distinctUntilChanged());

    @Input()
    public set tuiDropdownOpen(open: boolean) {
        this.emitOpenChange(open);
    }

    public emitOpenChange(open: boolean): void {
        this.openStateSub.next(open);
    }
}
