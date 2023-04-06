import {Directive, Inject} from '@angular/core';
import {AbstractControl, NgControl} from '@angular/forms';

@Directive({
    selector: '[tuiControl]',
    exportAs: 'ngControl',
})
export class TuiControlDirective {
    constructor(@Inject(NgControl) private readonly ngControl: NgControl) {}

    get control(): AbstractControl {
        return this.ngControl.control!;
    }
}
