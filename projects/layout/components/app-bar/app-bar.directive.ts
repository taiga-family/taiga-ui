import {Directive, input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiAppBarDirective {
    public readonly tuiSlot = input<string | 'end' | 'start'>('start');
}
