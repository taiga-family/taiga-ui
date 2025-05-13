import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
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
    imports: [NgIf, TuiButton, TuiTextfieldContent],
    templateUrl: './input-number-step.template.html',
    styleUrls: ['./input-number-step.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        ngSkipHydration: 'true',
        '(keydown.arrowDown.prevent)': 'onStep(-step())',
        '(keydown.arrowUp.prevent)': 'onStep(step())',
        '[class._with-buttons]': 'step()',
    },
})
export class TuiInputNumberStep {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly input = inject(TuiInputNumberDirective, {self: true});
    protected readonly step = signal(this.options.step);
    protected readonly value = computed(() => this.input.value() ?? NaN);

    // TODO(v5): replace with signal input
    @Input('step')
    public set stepSetter(x: number) {
        this.step.set(x);
    }

    protected onStep(step: number): void {
        const current = Number.isNaN(this.value()) ? 0 : this.value();
        const value = tuiClamp(current + step, this.input.min(), this.input.max());

        if (Number.isNaN(this.value())) {
            timer(0)
                .pipe(tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                    const caretIndex = this.el.value.length - this.input.postfix().length;

                    this.el.setSelectionRange(caretIndex, caretIndex);
                });
        }

        this.input.setValue(value);
    }
}
