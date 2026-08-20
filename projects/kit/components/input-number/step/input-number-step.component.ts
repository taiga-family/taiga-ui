import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';

import {TuiInputNumberDirective} from '../input-number.directive';
import {
    TUI_INPUT_NUMBER_OPTIONS,
    type TuiInputNumberOptions,
} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';
import {TuiInputNumberStep} from './input-number-step.directive';
import {TuiInputNumberStepService} from './input-number-step.service';

@Component({
    imports: [TuiButton],
    templateUrl: './input-number-step.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-number-step.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiInputNumberStepService],
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.border-radius]': '"inherit"',
        '[style.display]': '"contents"',
    },
})
export class TuiInputNumberStepButtons {
    protected readonly mask = inject(TuiNumberMask);
    protected readonly input = inject(TuiInputNumberDirective);
    protected readonly options: TuiInputNumberOptions = inject(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly directive = inject(TuiInputNumberStep);
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly hold = inject(TuiInputNumberStepService<bigint | number>);

    protected readonly $ = this.hold.steps$
        .pipe(takeUntilDestroyed())
        .subscribe((value) => this.directive.onStep(value));
}
