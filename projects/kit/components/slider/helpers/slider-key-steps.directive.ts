import {Directive, forwardRef, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {switchMap, timer} from 'rxjs';

import {TuiSliderComponent} from '../slider.component';
import type {TuiKeySteps} from './key-steps';
import {tuiCreateKeyStepsTransformer} from './key-steps';

@Directive({
    standalone: true,
    selector: 'input[tuiSlider][keySteps]',
    host: {
        '[attr.aria-valuemin]': 'min',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-valuenow]': 'value()',
    },
})
export class TuiSliderKeyStepsBase {
    private readonly control = inject(NgControl, {self: true, optional: true});
    protected readonly slider = inject<TuiSliderComponent>(
        forwardRef(() => TuiSliderComponent),
    );

    protected min?: number = this.slider.min;
    protected max?: number = this.slider.max;

    public transformer = signal<TuiValueTransformer<number, number> | null>(null);
    public value = toSignal(
        timer(0) // https://github.com/angular/angular/issues/54418
            .pipe(switchMap(() => tuiControlValue<number>(this.control))),
    );

    @Input()
    public set keySteps(steps: TuiKeySteps | null) {
        this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps, this.slider));
        this.min = steps?.[0][1];
        this.max = steps?.[steps.length - 1]?.[1];
    }
}

@Directive({
    standalone: true,
    selector:
        'input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]',
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[value]': 'this.value()',
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

    @Input()
    public set keySteps(steps: TuiKeySteps) {
        this.transformer = tuiCreateKeyStepsTransformer(steps, this.slider);
    }
}
