import {Directive, inject} from '@angular/core';
import type {AbstractControl} from '@angular/forms';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[tuiControl]',
    exportAs: 'ngControl',
})
export class TuiControlDirective {
    private readonly ngControl = inject(NgControl);

    protected get control(): AbstractControl {
        return this.ngControl.control!;
    }
}
