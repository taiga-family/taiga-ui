import {Directive, inject} from '@angular/core';
import {AbstractControl, NgControl} from '@angular/forms';

@Directive({
    selector: '[tuiControl]',
    exportAs: 'ngControl',
})
export class TuiControlDirective {
    private readonly ngControl = inject(NgControl);

    get control(): AbstractControl {
        return this.ngControl.control!;
    }
}
