import {Directive, forwardRef, inject, INJECTOR, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
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
    private readonly injector = inject(INJECTOR);
    private readonly control = inject(NgControl, {self: true, optional: true});

    protected min?: number;
    protected max?: number;

    @Input({transform: (x: number | 'any') => (x === 'any' ? null : x)})
    public step: number | null = 1;

    public transformer = signal<TuiValueTransformer<number, number> | null>(null);
    public value = toSignal(
        timer(0) // https://github.com/angular/angular/issues/54418
            .pipe(switchMap(() => tuiControlValue<number>(this.control))),
    );

    @tuiPure
    public get slider(): TuiSliderComponent {
        return this.injector.get(TuiSliderComponent);
    }

    @Input()
    public set keySteps(steps: TuiKeySteps | null) {
        this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps, this.slider));
        this.min = steps?.[0][1];
        this.max = steps?.[steps.length - 1]?.[1];
    }

    /**
     * TODO(v5): standardize logic between `TuiSlider` & `TuiInputSlider` (for non-linear slider `step` means percentage)
     * Add these host-bindings to `TuiSliderKeyStepsBase`:
     * ```
     * host: {
     *     '[attr.min]': '0',
     *     '[attr.step]': '1',
     *     '[attr.max]': 'totalSteps',
     * },
     * ```
     */
    public get totalSteps(): number {
        /**
         * Not-integer amount of steps is invalid usage of native sliders
         * ```html
         * <input type="range" [max]="100" [step]="3.33" />
         * ```
         * (impossible to select 100; 99.9 is max allowed value)
         */
        return this.step ? Math.round(100 / this.step) : Infinity;
    }

    public takeStep(coefficient: number): number {
        const newValue = this.slider.value + coefficient;

        return (
            this.transformer()?.toControlValue(this.slider.value + coefficient) ??
            newValue
        );
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
