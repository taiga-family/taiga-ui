import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    effect,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiNonNullableValueTransformer, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiSliderComponent} from '@taiga-ui/core/components/slider';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {
    TuiInputNumberDirective,
    tuiInputNumberOptionsProvider,
    TuiNumberMask,
    TuiQuantumValueTransformer,
} from '@taiga-ui/kit/components/input-number';
import {filter, fromEvent, switchMap, tap} from 'rxjs';

@Component({
    template: '',
    styles: [
        // TODO: tui-textfield:has([tuiInputSlider]) [tuiButtonX]
        'tui-textfield [tuiInputSlider] ~ .t-content [tuiButtonX] {display: none !important}',
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
            inputs: ['invalid', 'readOnly'],
        },
        {
            directive: TuiQuantumValueTransformer,
            inputs: ['quantum'],
        },
    ],
    host: {
        '(blur)': 'inputNumber.setValue(value() ?? null)',
        '(keydown.arrowUp)': 'onStep(1)',
        '(keydown.arrowDown)': 'onStep(-1)',
    },
})
export class TuiInputSliderDirective {
    private readonly isMobile = inject(WA_IS_MOBILE);
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly slider = tuiInjectAuxiliary<TuiSliderComponent>(
        (x) => x instanceof TuiSliderComponent,
    );

    private readonly controlTransformer = inject<TuiValueTransformer<string, number>>(
        TuiValueTransformer,
        {self: true},
    );

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly mask = inject(TuiNumberMask, {self: true});
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
            // Native <input type="range" /> does not support BigInt
            slider.min = Number(this.mask.min());
            slider.max = Number(this.mask.max());
            slider.value = this.value();
        } else {
            slider.keySteps?.setControlValue(this.value());
        }

        slider.el.disabled = !this.inputNumber.interactive();
    });

    protected readonly sliderInit = effect((onCleanup) => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

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
                this.mask.min(),
                this.mask.max(),
            );

            this.inputNumber.setValue(newValue);
        }
    }
}
