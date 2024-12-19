import {Directive, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    standalone: true,
    selector: '[tuiDisabled]',
})
export class TuiDisabledDirective {
    private readonly control = inject(NgControl);

    @Input()
    public set tuiDisabled(disabled: boolean) {
        if (disabled) {
            this.control.control?.disable();
        } else {
            this.control.control?.enable();
        }
    }
}
