import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {AbstractTuiInteractive, tuiIsNativeFocusedIn} from '@taiga-ui/cdk';
import {TUI_SPIN_ICONS, TUI_SPIN_TEXTS, TuiSpinIcons} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-primitive-spin-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './primitive-spin-button.template.html',
    styleUrls: ['./primitive-spin-button.style.less'],
    host: {
        '(mousedown.silent.prevent)': '(0)',
    },
})
export class TuiPrimitiveSpinButtonComponent extends AbstractTuiInteractive {
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

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_SPIN_ICONS) readonly icons: TuiSpinIcons,
        @Inject(TUI_SPIN_TEXTS) readonly spinTexts$: Observable<[string, string]>,
    ) {
        super();
    }

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el.nativeElement);
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
