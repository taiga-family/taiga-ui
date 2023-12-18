import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    tuiSlot: string | 'action' | 'top' = 'top';
}
