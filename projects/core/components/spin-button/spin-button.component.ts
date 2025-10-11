import {ChangeDetectionStrategy, Component, inject, input, output} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
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
    protected readonly spinTexts = toSignal(inject(TUI_SPIN_TEXTS));

    public focusable = input(true);

    public disabled = input(false);

    public leftDisabled = input(false);

    public rightDisabled = input(false);

    public readonly leftClick = output();

    public readonly rightClick = output();

    public onLeftClick(): void {
        if (!this.disabled() && !this.leftDisabled()) {
            this.leftClick.emit();
        }
    }

    public onRightClick(): void {
        if (!this.disabled() && !this.rightDisabled()) {
            this.rightClick.emit();
        }
    }
}
