import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    tuiSlot = 'top' as const;
}
