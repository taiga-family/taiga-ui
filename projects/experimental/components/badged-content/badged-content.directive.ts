import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBadgedContentDirective {
    @Input()
    tuiSlot: string | 'bottom' | 'top' = 'top';
}
