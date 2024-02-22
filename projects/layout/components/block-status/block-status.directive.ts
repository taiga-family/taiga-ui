import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    public tuiSlot: string | 'action' | 'top' = 'top';
}
