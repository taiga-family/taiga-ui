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
    public disabled = false;

    @Input()
    public leftDisabled = false;

    @Input()
    public rightDisabled = false;

    @Output()
    public readonly leftClick = new EventEmitter<void>();

    @Output()
    public readonly rightClick = new EventEmitter<void>();

    protected readonly icons = inject(TUI_SPIN_ICONS);
    protected readonly spinTexts$ = inject(TUI_SPIN_TEXTS);

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    protected get leftComputedDisabled(): boolean {
        return this.computedDisabled || this.leftDisabled;
    }

    protected get rightComputedDisabled(): boolean {
        return this.computedDisabled || this.rightDisabled;
    }

    @HostListener('keydown.arrowLeft.prevent')
    protected onLeftClick(): void {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }

    @HostListener('keydown.arrowRight.prevent')
    protected onRightClick(): void {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }
}
