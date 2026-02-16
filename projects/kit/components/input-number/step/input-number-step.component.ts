import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearanceProxy} from '@taiga-ui/kit/directives/appearance-proxy';

import {TuiInputNumberDirective} from '../input-number.directive';
import {
    TUI_INPUT_NUMBER_OPTIONS,
    type TuiInputNumberOptions,
} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';
import {TuiInputNumberStepService} from './input-number-step.service';

@Component({
    selector: 'input[tuiInputNumber][step]',
    imports: [TuiButton, TuiTextfieldContent],
    templateUrl: './input-number-step.template.html',
    styleUrl: './input-number-step.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiInputNumberStepService],
    hostDirectives: [TuiAppearanceProxy],
    host: {
        ngSkipHydration: 'true',
        '(keydown.arrowDown.prevent)': 'onStep(-step())',
        '(keydown.arrowUp.prevent)': 'onStep(step())',
        '[class._with-buttons]': 'step()',
    },
})
export class TuiInputNumberStep {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly hold = inject(TuiInputNumberStepService<bigint | number>);
    protected readonly $ = this.hold.steps$.subscribe((value) => this.onStep(value));
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly mask = inject(TuiNumberMask, {self: true});
    protected readonly input = inject(TuiInputNumberDirective, {self: true});
    public readonly step = input(this.options.step);

    protected onStep(step: bigint | number): void {
        const value = this.input.parsed() || 0;

        this.input.setValue(
            tuiClamp<bigint | number>(
                /**
                 * Without explicit conversion it throws
                 * TS2365: Operator + cannot be applied to types `number | bigint` and `number | bigint`
                 */
                typeof value === 'bigint' ? value + BigInt(step) : value + Number(step),
                this.mask.min(),
                this.mask.max(),
            ),
        );

        setTimeout((end = Number.MAX_SAFE_INTEGER) => {
            this.el.setSelectionRange(end, end);
        });
    }
}
