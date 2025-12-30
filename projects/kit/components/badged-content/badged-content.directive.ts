import {Directive, input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBadgedContentDirective {
    public readonly tuiSlot = input<string | 'bottom' | 'top'>('top');
}
