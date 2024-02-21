import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {AbstractTuiInteractive, tuiIsNativeFocusedIn} from '@taiga-ui/cdk';
import {TUI_SPIN_ICONS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-primitive-spin-button',
    templateUrl: './primitive-spin-button.template.html',
    styleUrls: ['./primitive-spin-button.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(mousedown.silent.prevent)': '(0)',
    },
})
export class TuiPrimitiveSpinButtonComponent extends AbstractTuiInteractive {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    disabled = false;

    @Input()
    leftDisabled = false;

    @Input()
    rightDisabled = false;

    @Output()
    readonly leftClick = new EventEmitter<void>();

    @Output()
    readonly rightClick = new EventEmitter<void>();

    readonly icons = inject(TUI_SPIN_ICONS);
    readonly spinTexts$ = inject(TUI_SPIN_TEXTS);

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    get leftComputedDisabled(): boolean {
        return this.computedDisabled || this.leftDisabled;
    }

    get rightComputedDisabled(): boolean {
        return this.computedDisabled || this.rightDisabled;
    }

    @HostListener('keydown.arrowLeft.prevent')
    onLeftClick(): void {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }

    @HostListener('keydown.arrowRight.prevent')
    onRightClick(): void {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }
}
