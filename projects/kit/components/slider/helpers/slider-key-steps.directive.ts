import {
    Directive,
    forwardRef,
    // eslint-disable-next-line no-restricted-syntax
    HostBinding,
    inject,
    Input,
    signal,
} from '@angular/core';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';

import {TuiSliderComponent} from '../slider.component';
import type {TuiKeySteps} from './key-steps';
import {tuiCreateKeyStepsTransformer} from './key-steps';

@Directive({
    standalone: true,
    selector: 'input[tuiSlider][keySteps]',
})
export class TuiSliderKeyStepsBase {
    private readonly slider = inject<TuiSliderComponent>(
        forwardRef(() => TuiSliderComponent),
    );

    // eslint-disable-next-line no-restricted-syntax
    @HostBinding('attr.aria-valuemin')
    protected min: number | null = this.slider.min();

    // eslint-disable-next-line no-restricted-syntax
    @HostBinding('attr.aria-valuemax')
    protected max: number | null = this.slider.max();

    public transformer = signal<TuiValueTransformer<number, number> | null>(null);

    @Input()
    public set keySteps(steps: TuiKeySteps | null) {
        this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps, this.slider));
        this.min = steps?.[0][1] ?? null;
        this.max = steps?.[steps.length - 1]?.[1] ?? null;
    }
}

@Directive({
    standalone: true,
    selector:
        'input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControl]',
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[value]': 'this.value()',
        '[attr.aria-valuenow]': 'transformer.toControlValue(this.value())',
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
