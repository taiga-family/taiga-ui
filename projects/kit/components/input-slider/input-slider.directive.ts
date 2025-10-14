import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    effect,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiNonNullableValueTransformer, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {
    TuiInputNumberDirective,
    tuiInputNumberOptionsProvider,
    TuiWithQuantumValueTransformer,
} from '@taiga-ui/kit/components/input-number';
import {TuiSliderComponent} from '@taiga-ui/kit/components/slider';
import {filter, fromEvent, switchMap, tap} from 'rxjs';

@Component({
    template: '',
    styles: [
        // TODO: tui-textfield:has([tuiInputSlider]) .t-clear
        'tui-textfield [tuiInputSlider] ~ .t-content .t-clear {display: none !important}',
        // TODO: tui-textfield:has([tuiInputSlider]) [tuiSlider]:disabled
        'tui-textfield [tuiInputSlider] ~ [tuiSlider]:disabled {display: none}',
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-input-slider'},
})
class Styles {}

@Directive({
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
        TuiWithQuantumValueTransformer,
    ],
    host: {
        '(blur)': 'inputNumber.setValue(value() ?? null)',
        '(keydown.arrowUp)': 'onStep(1)',
        '(keydown.arrowDown)': 'onStep(-1)',
    },
})
export class TuiInputSliderDirective {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly slider = tuiInjectAuxiliary<TuiSliderComponent>(
        (x) => x instanceof TuiSliderComponent,
    );

    private readonly controlTransformer = inject<
        TuiValueTransformer<number | null, number>
    >(TuiValueTransformer, {self: true});

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly inputNumber = inject(TuiInputNumberDirective, {self: true});
    protected readonly value = computed(() =>
        this.controlTransformer.toControlValue(this.inputNumber.value()),
    );

    protected readonly textfieldToSliderSync = effect(() => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        if (!slider.keySteps?.transformer()) {
            slider.min = this.inputNumber.min();
            slider.max = this.inputNumber.max();
            slider.value = this.value();
        } else {
            slider.keySteps?.setControlValue(this.value());
        }

        slider.el.disabled = !this.inputNumber.interactive();
    });

    protected readonly sliderInitEffect = effect((onCleanup) => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        slider.el.style.setProperty('--tui-slider-track-color', 'transparent');
        slider.el.setAttribute('tabindex', '-1');

        if (slider.keySteps) {
            slider.keySteps.controlValue = this.value;
        }

        const subscription = fromEvent(slider.el, 'input')
            .pipe(
                tap(() =>
                    this.inputNumber.setValue(
                        slider.keySteps?.getControlValue() ?? slider.el.valueAsNumber,
                    ),
                ),
                filter(() => !this.isMobile),
                switchMap(() =>
                    fromEvent(this.el.ownerDocument, 'pointerup', {once: true}),
                ),
            )
            .subscribe(() => this.el.focus());

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
}
