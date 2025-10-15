import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_SPIN_ICONS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-spin-button',
    imports: [TuiButton],
    templateUrl: './spin-button.template.html',
    styleUrl: './spin-button.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(mousedown.zoneless.prevent)': '(0)',
        '(keydown.arrowLeft.prevent)': 'onLeftClick()',
        '(keydown.arrowRight.prevent)': 'onRightClick()',
    },
})
export class TuiSpinButton {
    protected readonly icons = inject(TUI_SPIN_ICONS);
    protected readonly spinTexts = inject(TUI_SPIN_TEXTS);

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

    public onLeftClick(): void {
        if (!this.disabled && !this.leftDisabled) {
            this.leftClick.emit();
        }
    }

    public onRightClick(): void {
        if (!this.disabled && !this.rightDisabled) {
            this.rightClick.emit();
        }
    }
}
