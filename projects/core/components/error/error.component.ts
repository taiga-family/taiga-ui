import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiValidationError} from '@taiga-ui/cdk/classes';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DEFAULT_ERROR_MESSAGE} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-error',
    imports: [PolymorpheusOutlet, TuiAnimated],
    templateUrl: './error.template.html',
    styleUrl: './error.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._error]': 'content()',
    },
})
export class TuiErrorComponent {
    protected readonly default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    protected readonly content = computed((error = this.error()) =>
        tuiIsString(error) ? new TuiValidationError(error) : error,
    );

    public readonly error = input<TuiValidationError | string | null>(null);
}
