import {Directive, HostBinding, Input} from '@angular/core';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

/**
 * @deprecated
 */
@Directive({
    selector: '[tuiWrapper]',
})
export class TuiWrapperDirective {
    @Input()
    public disabled = false;

    @Input()
    public readOnly = false;

    @Input()
    public hover: boolean | null = null;

    @Input()
    public active: boolean | null = null;

    @Input()
    public focus = false;

    @Input()
    public invalid = false;

    @Input()
    @HostBinding('attr.data-appearance')
    public appearance = '';

    @HostBinding('class._invalid')
    protected get computedInvalid(): boolean {
        return !this.disabled && !this.readOnly && this.invalid;
    }

    @HostBinding('class._focused')
    protected get computedFocused(): boolean {
        return this.focus && !this.disabled;
    }

    @HostBinding('attr.data-state')
    protected get interactiveState(): TuiInteractiveState | string | null {
        if (this.disabled) {
            return 'disabled';
        }

        if (this.readOnly) {
            return 'readonly';
        }

        if (this.active) {
            return 'active';
        }

        if (this.hover) {
            return 'hover';
        }

        return null;
    }

    @HostBinding('class._no-hover')
    protected get noHover(): boolean {
        return this.readOnly || this.hover === false;
    }

    @HostBinding('class._no-active')
    protected get noActive(): boolean {
        return this.readOnly || this.active === false;
    }
}
