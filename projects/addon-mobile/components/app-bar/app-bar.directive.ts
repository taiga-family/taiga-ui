import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiAppBarDirective {
    @Input()
    tuiSlot: string | 'left' | 'right' = 'left';
}
