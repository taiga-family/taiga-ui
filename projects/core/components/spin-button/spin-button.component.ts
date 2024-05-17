import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';
import {TUI_SPIN_ICONS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-spin-button',
    imports: [TuiButtonDirective, NgIf, AsyncPipe],
    templateUrl: './spin-button.template.html',
    styleUrls: ['./spin-button.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(mousedown.silent.prevent)': '(0)',
    },
})
export class TuiSpinButtonComponent {
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
