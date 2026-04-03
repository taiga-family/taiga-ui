import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';

import {TuiInputNumberDirective} from '../input-number.directive';
import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';
import {TuiInputNumberStepService} from './input-number-step.service';
import {TuiInputNumberStep} from './input-number-step.directive';

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
        '[style.display]': '"contents"',
        '[style.border-radius]': '"inherit"',
    },
})
export class TuiInputNumberStepComponent {
    protected readonly mask = inject(TuiNumberMask);
    protected readonly input = inject(TuiInputNumberDirective);
    protected readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly directive = inject(TuiInputNumberStep);
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly hold = inject(TuiInputNumberStepService<bigint | number>);
    protected readonly $ = this.hold.steps$.subscribe((value) =>
        this.directive.onStep(value),
    );
}
