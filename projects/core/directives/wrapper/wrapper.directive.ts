import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {TuiInteractiveState} from '@taiga-ui/core/enums';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

// TODO: 3.0 remove `tui-wrapper` mode
@Directive({
    selector: 'tui-wrapper, [tuiWrapper]',
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

    // TODO: 3.0 Rename to `hover`
    @Input()
    hovered: boolean | null = null;

    // TODO: 3.0 Rename to `active`
    @Input()
    pressed: boolean | null = null;

    @Input()
    focused = false;

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
        return this.focused && !this.disabled;
    }

    @HostBinding('attr.data-state')
    get interactiveState(): TuiInteractiveState | string | null {
        if (this.disabled) {
            return TuiInteractiveState.Disabled;
        }

        if (this.readOnly) {
            return TuiInteractiveState.Readonly;
        }

        if (this.pressed) {
            return TuiInteractiveState.Pressed;
        }

        if (this.hovered) {
            return TuiInteractiveState.Hovered;
        }

        return null;
    }

    @HostBinding('class._no-hover')
    get noHover(): boolean {
        return this.readOnly || this.hovered === false;
    }

    @HostBinding('class._no-active')
    get noActive(): boolean {
        return this.readOnly || this.pressed === false;
    }
}
