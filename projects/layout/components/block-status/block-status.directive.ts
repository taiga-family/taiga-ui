import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    public tuiSlot: string | 'action' | 'top' = 'top';
}
