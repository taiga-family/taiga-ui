import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {tuiIsString, TuiLetDirective, TuiValidationError} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED, TUI_DEFAULT_ERROR_MESSAGE} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-error',
    imports: [AsyncPipe, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiLetDirective],
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiErrorComponent {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected error: TuiValidationError | null = null;
    protected visible = true;
    protected readonly defaultErrorMessage$ = inject(TUI_DEFAULT_ERROR_MESSAGE);

    @Input('error')
    public set errorSetter(error: TuiValidationError | string | null) {
        this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
    }

    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    protected onAnimation(visible: boolean): void {
        this.visible = visible;
    }
}
