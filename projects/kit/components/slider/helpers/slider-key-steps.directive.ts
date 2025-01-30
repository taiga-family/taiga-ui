import {Directive, forwardRef, inject, Input} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';

import {TuiSliderComponent} from '../slider.component';
import type {TuiKeySteps} from './key-steps';
import {tuiCreateKeyStepsTransformer} from './key-steps';

@Directive({
    standalone: true,
    selector:
        'input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControl]',
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[value]': 'this.value()',
        '[attr.aria-valuenow]': 'transformer.toControlValue(this.value())',
        '[attr.aria-valuemin]': 'min',
        '[attr.aria-valuemax]': 'max',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': 'onChange($event.target.value)',
        '(change)': 'onChange($event.target.value)',
    },
})
export class TuiSliderKeySteps extends TuiControl<number> {
    private readonly slider = inject<TuiSliderComponent>(
        forwardRef(() => TuiSliderComponent),
    );

    protected min = this.slider.min;
    protected max = this.slider.max;

    @Input()
    public set keySteps(steps: TuiKeySteps) {
        this.transformer = tuiCreateKeyStepsTransformer(steps, this.slider);
        this.min = steps[0][1];
        this.max = steps[steps.length - 1]?.[1] ?? 0;
    }
}
