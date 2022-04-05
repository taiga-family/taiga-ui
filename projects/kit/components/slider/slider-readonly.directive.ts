import {Directive, HostListener, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

const SLIDER_INTERACTION_KEYS = new Set([
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
    'PageUp',
    'PageDown',
]);

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
    preventEvent(event: Event) {
        if (this.readonly === '' || this.readonly) {
            event.preventDefault();
        }
    }

    @HostListener('keydown', ['$event'])
    preventKeyboardInteraction(event: KeyboardEvent) {
        if (SLIDER_INTERACTION_KEYS.has(event.key)) {
            this.preventEvent(event);
        }
    }
}
