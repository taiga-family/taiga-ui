import {Directive, inject} from '@angular/core';
import {type AbstractControl, NgControl} from '@angular/forms';

@Directive({
    standalone: true,
    selector: '[tuiControl]',
    exportAs: 'ngControl',
})
export class TuiNgControl {
    private readonly ngControl = inject(NgControl);

    public get control(): AbstractControl {
        return this.ngControl.control!;
    }
}
