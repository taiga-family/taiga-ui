import {Directive, Input} from '@angular/core';
import type {TuiLooseUnion} from '@taiga-ui/cdk/types';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    standalone: false,
    selector: '[tuiWrapper]',
    host: {
        tuiAppearance: '', // So that basic appearance also works
        '[attr.data-appearance]': 'appearance',
        '[class._invalid]': 'computedInvalid',
        '[class._focused]': 'computedFocused',
        '[attr.data-state]': 'interactiveState',
        '[class._no-hover]': 'noHover',
        '[class._no-active]': 'noActive',
    },
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
    public appearance = '';

    protected get computedInvalid(): boolean {
        return !this.disabled && !this.readOnly && this.invalid;
    }

    protected get computedFocused(): boolean {
        return this.focus && !this.disabled;
    }

    protected get interactiveState(): TuiLooseUnion<TuiInteractiveState> | null {
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

    protected get noHover(): boolean {
        return this.readOnly || this.hover === false;
    }

    protected get noActive(): boolean {
        return this.readOnly || this.active === false;
    }
}
