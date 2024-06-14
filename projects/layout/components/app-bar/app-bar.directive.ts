import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiAppBarDirective {
    @Input()
    public tuiSlot: string | 'left' | 'right' = 'left';
}
