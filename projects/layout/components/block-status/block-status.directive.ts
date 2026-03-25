import {Directive, input} from '@angular/core';

@Directive({selector: '[tuiSlot]'})
export class TuiBlockStatusDirective {
    public readonly tuiSlot = input('top');
}
