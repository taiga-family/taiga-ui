import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {TuiInteractiveState} from '@taiga-ui/core/enums';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiWrapper]',
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiWrapperDirective {
    @Input()
    disabled = false;

    @Input()
    readOnly = false;

    @Input()
    hover: boolean | null = null;

    @Input()
    active: boolean | null = null;

    @Input()
    focus = false;

    @Input()
    invalid = false;

    @Input()
    @HostBinding('attr.data-appearance')
    appearance = '';

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}

    @HostBinding('class._invalid')
    get computedInvalid(): boolean {
        return !this.disabled && !this.readOnly && this.invalid;
    }

    @HostBinding('class._focused')
    get computedFocused(): boolean {
        return this.focus && !this.disabled;
    }

    @HostBinding('attr.data-state')
    get interactiveState(): TuiInteractiveState | string | null {
        if (this.disabled) {
            return TuiInteractiveState.Disabled;
        }

        if (this.readOnly) {
            return TuiInteractiveState.Readonly;
        }

        if (this.active) {
            return TuiInteractiveState.Pressed;
        }

        if (this.hover) {
            return TuiInteractiveState.Hovered;
        }

        return null;
    }

    @HostBinding('class._no-hover')
    get noHover(): boolean {
        return this.readOnly || this.hover === false;
    }

    @HostBinding('class._no-active')
    get noActive(): boolean {
        return this.readOnly || this.active === false;
    }
}
