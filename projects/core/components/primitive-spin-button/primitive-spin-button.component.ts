import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
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
export class TuiPrimitiveSpinButtonComponent {
    @Input()
    public focusable = true;

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

    @HostListener('keydown.arrowLeft.prevent')
    public onLeftClick(): void {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }

    @HostListener('keydown.arrowRight.prevent')
    public onRightClick(): void {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }

    protected get leftComputedDisabled(): boolean {
        return this.disabled || this.leftDisabled;
    }

    protected get rightComputedDisabled(): boolean {
        return this.disabled || this.rightDisabled;
    }
}
