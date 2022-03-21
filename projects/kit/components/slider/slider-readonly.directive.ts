import {Directive, HostListener, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
@Directive({
    selector: 'input[tuiSlider][readonly]',
})
export class TuiSliderReadonlyDirective {
    @Input()
    @tuiDefaultProp()
    readonly: '' | boolean = true;

    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    @HostListener('keydown.arrowLeft', ['$event'])
    @HostListener('keydown.arrowRight', ['$event'])
    @HostListener('keydown.arrowUp', ['$event'])
    @HostListener('keydown.arrowDown', ['$event'])
    preventEvents(event: Event) {
        if (this.readonly === '' || this.readonly) {
            event.preventDefault();
        }
    }
}
