import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiValidationError} from '@taiga-ui/cdk/classes';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED, TUI_DEFAULT_ERROR_MESSAGE} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-error',
    imports: [NgIf, PolymorpheusOutlet],
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse, tuiFadeIn],
    host: {
        '(animationcancel.self)': 'onAnimation(false)',
        '(animationstart.self)': 'onAnimation(true)',
    },
})
export class TuiError {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected error: TuiValidationError | null = null;
    protected visible = true;
    protected readonly default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));

    @Input('error')
    public set errorSetter(error: TuiValidationError | string | null) {
        this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
    }

    protected onAnimation(visible: boolean): void {
        this.visible = visible;
    }
}
