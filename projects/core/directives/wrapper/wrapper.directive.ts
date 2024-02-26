import {Directive, HostBinding, inject, Input} from '@angular/core';
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

    protected readonly mode$ = inject<Observable<TuiBrightness | null>>(TUI_MODE);

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
            return TuiInteractiveState.Disabled;
        }

        if (this.readOnly) {
            return TuiInteractiveState.Readonly;
        }

        if (this.active) {
            return TuiInteractiveState.Active;
        }

        if (this.hover) {
            return TuiInteractiveState.Hover;
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
