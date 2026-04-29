import {Directive, inject, input} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiSum} from '@taiga-ui/cdk/utils/math';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearanceProxy} from '@taiga-ui/kit/directives/appearance-proxy';

import {TuiInputNumberDirective} from '../input-number.directive';
import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';
import {TuiInputNumberStepButtons} from './input-number-step.component';

@Directive({
    selector: 'input[tuiInputNumber][step]',
    providers: [tuiAsTextfieldContent(TuiInputNumberStepButtons)],
    hostDirectives: [TuiAppearanceProxy, TuiTextfieldContent],
    host: {
        'data-tui-version': TUI_VERSION,
        '[class._with-buttons]': 'step()',
        '(keydown.arrowDown.prevent)': 'onStep(-step())',
        '(keydown.arrowUp.prevent)': 'onStep(step())',
    },
})
export class TuiInputNumberStep {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly input = inject(TuiInputNumberDirective, {self: true});
    private readonly mask = inject(TuiNumberMask, {self: true});
    public readonly step = input(inject(TUI_INPUT_NUMBER_OPTIONS).step);

    public onStep(step: bigint | number): void {
        const current = this.input.parsed() || 0;
        const updated =
            typeof current === 'bigint'
                ? current + BigInt(step)
                : tuiSum(current, Number(step));

        this.input.setValue(tuiClamp(updated, this.mask.min(), this.mask.max()));

        setTimeout((end = Number.MAX_SAFE_INTEGER) => {
            this.el.setSelectionRange(end, end);
        });
    }
}
