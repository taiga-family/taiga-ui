import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiDefaultProp,
    TuiInjectionTokenType,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';

@Component({
    selector: `tui-primitive-spin-button`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./primitive-spin-button.template.html`,
    styleUrls: [`./primitive-spin-button.style.less`],
})
export class TuiPrimitiveSpinButtonComponent extends AbstractTuiInteractive {
    @ViewChild(`wrapper`)
    private readonly wrapper?: ElementRef<HTMLElement>;

    @Input()
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @tuiDefaultProp()
    mode: TuiAppearance = TuiAppearance.Flat;

    @Input()
    @tuiDefaultProp()
    leftDisabled = false;

    @Input()
    @tuiDefaultProp()
    rightDisabled = false;

    @Output()
    readonly leftClick = new EventEmitter<void>();

    @Output()
    readonly rightClick = new EventEmitter<void>();

    constructor(
        @Inject(TUI_SPIN_TEXTS)
        readonly spinTexts$: TuiInjectionTokenType<typeof TUI_SPIN_TEXTS>,
    ) {
        super();
    }

    get focused(): boolean {
        return !!this.wrapper && tuiIsNativeFocused(this.wrapper.nativeElement);
    }

    get leftComputedDisabled(): boolean {
        return this.computedDisabled || this.leftDisabled;
    }

    get rightComputedDisabled(): boolean {
        return this.computedDisabled || this.rightDisabled;
    }

    onLeftClick(): void {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }

    onRightClick(): void {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }
}
