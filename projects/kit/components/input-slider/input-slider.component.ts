import type {QueryList, WritableSignal} from '@angular/core';
import {
    computed,
    Directive,
    effect,
    inject,
    INJECTOR,
    Input,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TuiNonNullableValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {tuiContentChild} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import type {TuiInputNumber} from '@taiga-ui/kit/components/input-number';
import type {TuiKeySteps} from '@taiga-ui/kit/components/slider';
import {
    tuiCreateKeyStepsTransformer,
    TuiSliderComponent,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {filter, map, pairwise, startWith, switchMap} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'input[type="range"][tuiSlider]',
    providers: [tuiSliderOptionsProvider({trackColor: 'transparent'})],
    host: {
        tabIndex: '-1',
        class: 't-input-slider', // TODO: use :has()
        '(input)': 'onInput($event.target.value)',
        '(change)': 'onInput($event.target.value)',
        '(click)': 'host.input.nativeElement.focus()',
        '(document:keydown.arrowUp)': 'onStep(1)',
        '(document:keydown.arrowDown)': 'onStep(-1)',
    },
})
export class TuiInputSliderDirective {
    private readonly injector = inject(INJECTOR);
    private readonly keySteps: WritableSignal<TuiKeySteps | null> = signal(null);
    private readonly step: WritableSignal<number> = signal(1);
    private keyStepsTransformer: TuiValueTransformer<number, number> | null = null;

    protected readonly host = inject(TuiTextfieldComponent);
    protected readonly slider = inject(TuiSliderComponent);
    protected readonly inputNumber = tuiContentChild(
        () => this.host.controlQuery as QueryList<TuiInputNumber>,
    );

    protected min = computed(() => this.inputNumber()?.min() ?? this.slider.min);
    protected max = computed(() => this.inputNumber()?.max() ?? this.slider.max);
    protected nativeStep = computed(() =>
        this.keySteps() // For non-linear slider step means percentage
            ? ((this.max() - this.min()) / 100) * this.step()
            : this.step(),
    );

    protected disabled = computed(
        () => (this.inputNumber()?.disabled() || this.inputNumber()?.readOnly()) ?? false,
    );

    protected safeInputNumberValue = toSignal(
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
        const value = this.safeInputNumberValue() ?? this.slider.value;

        this.slider.value = this.keyStepsTransformer?.fromControlValue(value) ?? value;
        // Don't use host binding – it will throw ExpressionChangedAfterItHasBeenCheckedError
        this.slider.el.disabled = this.disabled();
        this.slider.min = this.min();
        this.slider.max = this.max();
        this.slider.step = this.nativeStep();
    });

    constructor() {
        effect(() => {
            const inputNumber = this.inputNumber();

            if (inputNumber) {
                inputNumber.transformer = new TuiNonNullableValueTransformer();
            }
        });

        effect(() => {
            if (!this.host.focused() && !this.host.input?.nativeElement.value) {
                this.inputNumber()?.setValue(this.safeInputNumberValue() ?? null);
            }
        }, TUI_ALLOW_SIGNAL_WRITES);
    }

    @Input('step')
    public set stepSetter(step: number) {
        this.step.set(step);
    }

    @Input('keySteps')
    public set keyStepsSetter(steps: TuiKeySteps | null) {
        this.keySteps.set(steps);
        this.keyStepsTransformer =
            steps && tuiCreateKeyStepsTransformer(steps, this.slider);
    }

    protected onInput(nativeValue: string): void {
        const value = Number(nativeValue);

        this.inputNumber()?.setValue(
            this.keyStepsTransformer?.toControlValue(value) ?? value,
        );
    }

    protected onStep(coefficient: number): void {
        if (this.host.focused()) {
            const newValue = tuiClamp(
                this.slider.value + coefficient * this.nativeStep(),
                this.min(),
                this.max(),
            );

            this.inputNumber()?.setValue(
                this.keyStepsTransformer?.toControlValue(newValue) ?? newValue,
            );
        }
    }
}
