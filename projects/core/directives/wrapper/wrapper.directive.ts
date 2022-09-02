import {Directive, HostBinding, Inject, Input} from '@angular/core';
import type {TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TuiInteractiveState} from '@taiga-ui/core/enums';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';

@Directive({
    selector: `[tuiWrapper]`,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': `mode$`,
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
    @HostBinding(`attr.data-appearance`)
    appearance = ``;

    constructor(
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
    ) {}

    @HostBinding(`class._invalid`)
    get computedInvalid(): boolean {
        return !this.disabled && !this.readOnly && this.invalid;
    }

    @HostBinding(`class._focused`)
    get computedFocused(): boolean {
        return this.focus && !this.disabled;
    }

    @HostBinding(`attr.data-state`)
    get interactiveState(): TuiInteractiveState | string | null {
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

    @HostBinding(`class._no-hover`)
    get noHover(): boolean {
        return this.readOnly || this.hover === false;
    }

    @HostBinding(`class._no-active`)
    get noActive(): boolean {
        return this.readOnly || this.active === false;
    }
}
