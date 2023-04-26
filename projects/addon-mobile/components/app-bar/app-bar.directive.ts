import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiAppBarDirective {
    @Input()
    tuiSlot: 'left' | 'right' = 'left';
}
