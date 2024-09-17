import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiSlot]',
})
export class TuiAppBarDirective {
    @Input()
    public tuiSlot: 'left' | 'right' | (Record<never, never> & string) = 'left';
}
