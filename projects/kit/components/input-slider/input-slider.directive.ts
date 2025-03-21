import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    effect,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    TuiNonNullableValueTransformer,
    TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {
    TuiInputNumberDirective,
    tuiInputNumberOptionsProvider,
} from '@taiga-ui/kit/components/input-number';
import {TuiSliderComponent} from '@taiga-ui/kit/components/slider';
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
    private readonly slider = tuiInjectAuxiliary<TuiSliderComponent>(
        (x) => x instanceof TuiSliderComponent,
    );

    private readonly controlTransformer = inject<
        TuiValueTransformer<number | null, number>
    >(TuiValueTransformer, {self: true});

    private readonly value = computed(() =>
        this.controlTransformer.toControlValue(this.inputNumber.value()),
    );

    private readonly keyStepsTransformer = computed(
        () => this.slider()?.keySteps?.transformer() ?? TUI_IDENTITY_VALUE_TRANSFORMER,
    );

    protected readonly nothing = tuiWithStyles(TuiInputSliderStyles);

    protected readonly textfieldToSliderSync = effect(() => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        if (slider.keySteps && Number.isFinite(slider.keySteps?.totalSteps)) {
            // TODO(v5): move all if-condition body inside `TuiSliderKeyStepsBase`
            slider.min = 0;
            slider.step = 1;
            slider.max = slider.keySteps?.totalSteps ?? 100;
        } else {
            slider.min = this.inputNumber.min();
            slider.max = this.inputNumber.max();
        }

        slider.value = this.keyStepsTransformer().fromControlValue(this.value());
        slider.el.disabled = !this.inputNumber.interactive();
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly sliderInitEffect = effect((onCleanup) => {
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

        onCleanup(() => subscription.unsubscribe());
    });

    protected onStep(coefficient: number): void {
        const slider = this.slider();

        if (slider && this.inputNumber.interactive()) {
            const newValue = tuiClamp(
                slider.keySteps?.takeStep(coefficient) ??
                    slider.value + coefficient * slider.step,
                this.inputNumber.min(),
                this.inputNumber.max(),
            );

            this.inputNumber.setValue(newValue);
        }
    }

    protected onBlur(): void {
        if (!this.element.value) {
            this.inputNumber.setValue(this.value() ?? null);
        }
    }

    private onSliderInput(value: number): void {
        this.inputNumber.setValue(this.keyStepsTransformer().toControlValue(value));

        if (!this.isMobile) {
            this.element.focus();
        }
    }
}

@Component({
    standalone: true,
    template: '',
    styles: [
        // TODO: tui-textfield:has([tuiInputSlider]) .t-clear
        'tui-textfield [tuiInputSlider] ~ .t-content .t-clear {display: none !important}',
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-input-slider',
    },
})
class TuiInputSliderStyles {}
