import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {tuiIsString, TuiValidationError} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_DEFAULT_ERROR_MESSAGE,
    TUI_MODE,
} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-error',
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiErrorComponent {
    @Input('error')
    public set errorSetter(error: TuiValidationError | string | null) {
        this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
    }

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected error: TuiValidationError | null = null;

    protected visible = true;

    protected readonly mode$ = inject<Observable<TuiBrightness | null>>(TUI_MODE);
    protected readonly defaultErrorMessage$ = inject(TUI_DEFAULT_ERROR_MESSAGE);

    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    protected onAnimation(visible: boolean): void {
        this.visible = visible;
    }
}
