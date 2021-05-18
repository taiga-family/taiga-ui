import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiInteractiveState} from '@taiga-ui/core/enums';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-wrapper',
    template: '<ng-content></ng-content>',
    styleUrls: ['./wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiWrapperComponent {
    @Input()
    disabled = false;

    @Input()
    readOnly = false;

    @Input()
    hovered = false;

    @Input()
    pressed = false;

    @Input()
    focused = false;

    @Input()
    invalid = false;

    @Input()
    @HostBinding('attr.data-appearance')
    appearance = '';

    constructor(
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {}

    @HostBinding('class._invalid')
    get computedInvalid(): boolean {
        return !this.disabled && !this.readOnly && this.invalid;
    }

    @HostBinding('class._focused')
    get computedFocused(): boolean {
        return this.focused && !this.disabled;
    }

    @HostBinding('attr.data-state')
    get interactiveState(): TuiInteractiveState | null {
        if (this.disabled) {
            return TuiInteractiveState.Disabled;
        }

        if (this.readOnly) {
            return TuiInteractiveState.Readonly;
        }

        if (this.pressed && !this.isMobile) {
            return TuiInteractiveState.Pressed;
        }

        if (this.hovered && !this.isMobile) {
            return TuiInteractiveState.Hovered;
        }

        return null;
    }
}
