import {
    computed,
    ContentChild,
    Directive,
    effect,
    inject,
    INJECTOR,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TuiNonNullableValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TuiInputNumber,
    tuiInputNumberOptionsProvider,
} from '@taiga-ui/kit/components/input-number';
import {
    TuiSliderComponent,
    TuiSliderKeyStepsBase,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {filter, map, pairwise, startWith, switchMap} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'tui-textfield[tuiInputSlider]',
    providers: [
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
        tuiInputNumberOptionsProvider({
            valueTransformer: new TuiNonNullableValueTransformer(),
        }),
    ],
    host: {
        '(input)': 'onSliderInput($event)',
        '(change)': 'onSliderInput($event)',
        '(click)': 'textfield.input.nativeElement.focus()',
        '(focusout)': 'onBlur()',
        '(keydown.arrowUp)': 'onStep(1)',
        '(keydown.arrowDown)': 'onStep(-1)',
    },
})
export class TuiInputSliderDirective {
    private readonly injector = inject(INJECTOR);
    private keyStepsTransformer = signal<TuiValueTransformer<number, number> | null>(
        null,
    );

    private readonly inputNumber = signal<TuiInputNumber | null>(null);
    private readonly slider = signal<TuiSliderComponent | null>(null);
    protected readonly textfield = inject(TuiTextfieldComponent);

    protected min = computed(() => this.inputNumber()?.min() ?? 0);
    protected max = computed(() => this.inputNumber()?.max() ?? 100);
    protected step = computed((slider = this.slider()) =>
        slider && this.keyStepsTransformer() // For non-linear slider step means percentage
            ? ((this.max() - this.min()) / 100) * slider.step()
            : (slider?.step() ?? 1),
    );

    protected value = toSignal(
        toObservable(this.inputNumber).pipe(
            filter(tuiIsPresent),
            switchMap(({value}) =>
                toObservable(value, {injector: this.injector}).pipe(startWith(value())),
            ),
            pairwise(),
            map(([prev, cur]) => cur ?? prev!),
        ),
    );

    protected readonly textfieldToSliderSync = effect(() => {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        const value = this.value() ?? slider.value;

        slider.value = this.keyStepsTransformer()?.fromControlValue(value) ?? value;
        slider.el.disabled = !this.inputNumber()?.interactive();
    }, TUI_ALLOW_SIGNAL_WRITES);

    @ContentChild(TuiInputNumber)
    protected set inputNumberSetter(x: TuiInputNumber) {
        this.inputNumber.set(x);
    }

    @ContentChild(TuiSliderComponent)
    protected set sliderSetter(slider: TuiSliderComponent) {
        this.slider.set(slider);
        slider.min = this.min;
        slider.max = this.max;
        slider.computedStep = this.step;
        slider.el.setAttribute('tabindex', '-1');
    }

    @ContentChild(TuiSliderKeyStepsBase)
    protected set keyStepsSetter({transformer}: TuiSliderKeyStepsBase) {
        this.keyStepsTransformer = transformer;
    }

    protected onSliderInput({target}: Event): void {
        if (!(tuiIsElement(target) && tuiIsInput(target) && target.type === 'range')) {
            return;
        }

        const transformed =
            this.keyStepsTransformer()?.toControlValue(target.valueAsNumber) ??
            target.valueAsNumber;

        this.inputNumber()?.setValue(transformed);
    }

    protected onStep(coefficient: number): void {
        const slider = this.slider();

        if (!slider) {
            return;
        }

        const newValue = tuiClamp(
            slider.value + coefficient * this.step(),
            this.min(),
            this.max(),
        );

        this.inputNumber()?.setValue(
            this.keyStepsTransformer()?.toControlValue(newValue) ?? newValue,
        );
    }

    protected onBlur(): void {
        if (!this.textfield.input?.nativeElement.value) {
            this.inputNumber()?.setValue(this.value() ?? null);
        }
    }
}
