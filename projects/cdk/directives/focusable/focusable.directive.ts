import {Directive, HostBinding, Input} from '@angular/core';

/**
 * Abstraction over `tabindex`
 */
@Directive({
    selector: '[tuiFocusable]',
})
export class TuiFocusableDirective {
    /**
     * Element can be focused with keyboard
     */
    @Input('tuiFocusable')
    public focusable = true;

    @HostBinding('tabIndex')
    protected get tabIndex(): number {
        return this.focusable ? 0 : -1;
    }
}
