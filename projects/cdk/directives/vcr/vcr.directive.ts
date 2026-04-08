import {Directive, inject, ViewContainerRef} from '@angular/core';

// Workaround for https://github.com/angular/angular/issues/68014
@Directive({selector: '[tuiVCR]'})
export class TuiVCR {
    public readonly vcr = inject(ViewContainerRef);
}
