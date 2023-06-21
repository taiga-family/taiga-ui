import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {tuiIsString, TuiValidationError} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_DEFAULT_ERROR_MESSAGE,
    TUI_MODE,
} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-error',
    templateUrl: './error.template.html',
    styleUrls: ['./error.style.less'],
    providers: [MODE_PROVIDER],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiErrorComponent {
    @Input('error')
    set errorSetter(error: TuiValidationError | string | null) {
        this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
    }

    error: TuiValidationError | null = null;

    visible = true;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_DEFAULT_ERROR_MESSAGE)
        readonly defaultErrorMessage$: Observable<string>,
    ) {}

    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    onAnimation(visible: boolean): void {
        this.visible = visible;
    }
}
