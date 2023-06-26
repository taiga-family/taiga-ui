import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    tuiSlot: string | 'top' = 'top';
}
