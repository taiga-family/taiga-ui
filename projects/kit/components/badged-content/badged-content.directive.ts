import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiSlot]',
})
export class TuiBadgedContentDirective {
    @Input()
    public tuiSlot: string | 'bottom' | 'top' = 'top';
}
