import {Directive, inject} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[tuiDisabled]',
    inputs: ['tuiDisabled'],
})
export class TuiDisabledDirective {
    private readonly control = inject(NgControl);

    public set tuiDisabled(disabled: boolean) {
        if (disabled) {
            this.control.control?.disable();
        } else {
            this.control.control?.enable();
        }
    }
}
