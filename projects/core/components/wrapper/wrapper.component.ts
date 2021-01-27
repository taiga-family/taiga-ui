import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiInteractiveState} from '@taiga-ui/core/enums';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';
import {TUI_WRAPPER_PROVIDERS} from './wrapper.providers';

@Component({
    selector: 'tui-wrapper',
    template: '<ng-content></ng-content>',
    styleUrls: ['./wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_WRAPPER_PROVIDERS,
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

    @HostBinding('attr.data-mode')
    mode: TuiBrightness | null = null;

    constructor(
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
    ) {
        mode$.subscribe(mode => {
            this.mode = mode;
        });
    }

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
