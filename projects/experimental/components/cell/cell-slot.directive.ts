import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiCellSlotDirective {
    @Input()
    tuiSlot:
        | string
        | 'description'
        | 'secondaryDescription'
        | 'secondaryTitle'
        | 'title' = 'title';
}
