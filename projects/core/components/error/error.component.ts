import type {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {
    tuiDefaultProp,
    TuiInjectionTokenType,
    tuiIsString,
    TuiValidationError,
} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_DEFAULT_ERROR_MESSAGE,
    TUI_MODE,
} from '@taiga-ui/core/tokens';

@Component({
    selector: `tui-error`,
    templateUrl: `./error.template.html`,
    styleUrls: [`./error.style.less`],
    providers: [MODE_PROVIDER],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiErrorComponent {
    @Input(`error`)
    @tuiDefaultProp()
    set errorSetter(error: TuiValidationError | string | null) {
        this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
    }

    error: TuiValidationError | null = null;

    readonly animation = {value: ``, ...this.options} as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
        @Inject(TUI_DEFAULT_ERROR_MESSAGE)
        readonly defaultErrorMessage$: TuiInjectionTokenType<
            typeof TUI_DEFAULT_ERROR_MESSAGE
        >,
    ) {}
}
