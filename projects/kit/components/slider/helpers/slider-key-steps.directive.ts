import {computed, Directive, inject, INJECTOR, Input, input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    TuiControl,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {switchMap, timer} from 'rxjs';

import {TuiSliderComponent} from '../slider.component';
import {tuiCreateKeyStepsTransformer, type TuiKeySteps} from './key-steps';

@Directive({
    standalone: true,
    selector: 'input[tuiSlider][keySteps]',
    host: {
        '[attr.min]': 'transformer() ? 0 : slider.min',
        '[attr.step]': 'transformer() ? 1 : step()',
        '[attr.max]': 'transformer() ? totalSteps() : slider.max',
        '[attr.aria-valuemin]': 'min()',
        '[attr.aria-valuemax]': 'max()',
        '[attr.aria-valuenow]': 'controlValue()',
    },
})
export class TuiSliderKeyStepsBase {
    private readonly injector = inject(INJECTOR);
    private readonly control = inject(NgControl, {self: true, optional: true});

    protected readonly min = signal<number | undefined>(undefined);
    protected readonly max = signal<number | undefined>(undefined);

    public step = input(1);

    public transformer = signal<TuiValueTransformer<number, number> | null>(null);
    public controlValue = toSignal(
        timer(0) // https://github.com/angular/angular/issues/54418
            .pipe(switchMap(() => tuiControlValue<number>(this.control))),
    );

    public readonly totalSteps = computed(() =>
        /**
         * Not-integer amount of steps is invalid usage of native sliders
         * ```html
         * <input type="range" [max]="100" [step]="3.33" />
         * ```
         * (impossible to select 100; 99.9 is max allowed value)
         */
        Math.round(100 / this.step()),
    );

    @tuiPure
    public get slider(): TuiSliderComponent {
        return this.injector.get(TuiSliderComponent);
    }

    @Input()
    public set keySteps(steps: TuiKeySteps | null) {
        this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps));
        this.min.set(steps?.[0][1]);
        this.max.set(steps?.[steps.length - 1]?.[1]);
    }

    public takeStep(coefficient: number): number {
        const newValue = this.slider.value + coefficient;

        return (
            this.transformer()?.toControlValue(
                (this.slider.value + coefficient) / this.totalSteps(),
            ) ?? newValue
        );
    }

    public toSliderValue(fraction: number): number {
        return this.transformer() ? fraction * this.totalSteps() : fraction;
    }

    public setControlValue(controlValue: number): void {
        const fraction =
            this.transformer()?.fromControlValue(controlValue) ?? controlValue;

        this.slider.value = this.toSliderValue(fraction);
    }

    public getControlValue(): number {
        const {value} = this.slider;

        return this.transformer()?.toControlValue(value / this.totalSteps()) ?? value;
    }
}

@Directive({
    standalone: true,
    selector:
        'input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]',
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[value]': 'base.toSliderValue(value())',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': 'setValue($event.target.value)',
        '(change)': 'setValue($event.target.value)',
    },
})
export class TuiSliderKeySteps extends TuiControl<number> {
    protected readonly base = inject(TuiSliderKeyStepsBase);

    @Input()
    public set keySteps(steps: TuiKeySteps | null) {
        this.transformer = steps
            ? tuiCreateKeyStepsTransformer(steps)
            : TUI_IDENTITY_VALUE_TRANSFORMER;
    }

    protected setValue(sliderValue: number): void {
        this.onChange(
            this.base.transformer() ? sliderValue / this.base.totalSteps() : sliderValue,
        );
    }
}
