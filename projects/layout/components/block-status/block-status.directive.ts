import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    public tuiSlot: 'action' | 'top' | (Record<never, never> & string) = 'top';
}
