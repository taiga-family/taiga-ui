import {computed, Directive, effect, inject} from '@angular/core';
import {TuiNonNullableValueTransformer, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {
    tuiInjectAuxiliary,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {
    TuiInputNumberDirective,
    tuiInputNumberOptionsProvider,
} from '@taiga-ui/kit/components/input-number';
import type {TuiSliderComponent} from '@taiga-ui/kit/components/slider';
import {filter, fromEvent} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'input[tuiInputSlider]',
    providers: [
        tuiInputNumberOptionsProvider({
            valueTransformer: new TuiNonNullableValueTransformer(),
        }),
    ],
    hostDirectives: [
        {
            directive: TuiInputNumberDirective,
            inputs: ['min', 'max', 'prefix', 'postfix', 'invalid', 'readOnly'],
        },
    ],
    host: {
        '(blur)': 'onBlur()',
        '(keydown.arrowUp)': 'onStep(1)',
        '(keydown.arrowDown)': 'onStep(-1)',
    },
})
export class TuiInputSliderDirective {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly element = tuiInjectElement<HTMLInputElement>();
    private readonly inputNumber = inject(TuiInputNumberDirective, {self: true});
    private readonly slider = tuiInjectAuxiliary<TuiSliderComponent>();
    private readonly controlTransformer = inject(TuiValueTransformer, {self: true});
    private readonly value = computed(() =>
        this.controlTransformer.toControlValue(this.inputNumber.value()),
    );

    private readonly keyStepsTransformer = computed<TuiValueTransformer<
        number,
        number
    > | null>(() => this.slider()?.keySteps?.transformer() ?? null);

    private readonly step = computed((slider = this.slider()) =>
        slider && this.keyStepsTransformer() // For non-linear slider step means percentage
            ? ((this.inputNumber.max() - this.inputNumber.min()) / 100) * slider.step
            : (slider?.step ?? 1),
    );

    protected readonly textfield = inject(TuiTextfieldComponent);

    protected readonly textfieldToSliderSync = effect(() => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        const value = this.value() ?? slider.value;

        slider.min = this.inputNumber.min();
        slider.max = this.inputNumber.max();
        slider.step = this.step();
        slider.value = this.keyStepsTransformer()?.fromControlValue(value) ?? value;
        slider.el.disabled = !this.inputNumber.interactive();
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly sliderInitEffect = effect(() => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        slider.el.style.setProperty('--tui-slider-track-color', 'transparent');

        if (slider.keySteps) {
            slider.keySteps.value = this.value;
        }

        const subscription = fromEvent(slider.el, 'input', (x) => x.target)
            .pipe(filter(tuiIsElement), filter(tuiIsInput))
            .subscribe((x) => this.onSliderInput(x.valueAsNumber));

        return () => subscription?.unsubscribe();
    });

    constructor() {
        this.textfield.options.cleaner.set(false);
    }

    protected onStep(coefficient: number): void {
        const slider = this.slider();

        if (!slider || !this.inputNumber.interactive()) {
            return;
        }

        const newValue = tuiClamp(
            slider.value + coefficient * this.step(),
            this.inputNumber.min(),
            this.inputNumber.max(),
        );

        this.inputNumber.setValue(
            this.keyStepsTransformer()?.toControlValue(newValue) ?? newValue,
        );
    }

    protected onBlur(): void {
        if (!this.textfield.input?.nativeElement.value) {
            this.inputNumber.setValue(this.value() ?? null);
        }
    }

    private onSliderInput(value: number): void {
        this.inputNumber.setValue(
            this.keyStepsTransformer()?.toControlValue(value) ?? value,
        );

        if (!this.isMobile) {
            this.element.focus();
        }
    }
}
