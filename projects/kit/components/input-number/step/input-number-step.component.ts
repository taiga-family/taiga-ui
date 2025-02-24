import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
    NgZone,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {timer} from 'rxjs';

import {TuiInputNumberDirective} from '../input-number.directive';
import type {TuiInputNumberOptions} from '../input-number.options';
import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';

@Component({
    standalone: true,
    selector: 'input[tuiInputNumber][step]',
    templateUrl: './input-number-step.template.html',
    imports: [NgIf, TuiButton, TuiTextfieldContent],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./input-number-step.style.less'],
    host: {
        '(keydown.arrowDown)': 'onStep(-step())',
        '(keydown.arrowUp)': 'onStep(step())',
        '[class._with-buttons]': 'step()',
    },
})
export class TuiInputNumberStep {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);

    protected readonly element = tuiInjectElement<HTMLInputElement>();
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly inputNumber = inject(TuiInputNumberDirective, {self: true});
    protected readonly step = signal(this.options.step);

    // TODO(v5): replace with signal input
    @Input('step')
    public set stepSetter(x: number) {
        this.step.set(x);
    }

    protected onStep(step: number): void {
        const {inputNumber} = this;
        const newValue = tuiClamp(
            (inputNumber.value() ?? 0) + step,
            inputNumber.min(),
            inputNumber.max(),
        );

        if (this.inputNumber.value() === null) {
            timer(0)
                .pipe(tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                    const caretIndex =
                        this.element.value.length - inputNumber.postfix().length;

                    this.element.setSelectionRange(caretIndex, caretIndex);
                });
        }

        this.inputNumber.setValue(newValue);
    }
}
