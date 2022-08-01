import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    clamp,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
    tuiPure,
    tuiRound,
} from '@taiga-ui/cdk';
import {
    TuiDecimal,
    tuiGetFractionPartPadded,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiInputNumberComponent} from '@taiga-ui/kit/components/input-number';
import {
    TuiSliderComponent,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-input-slider`,
    templateUrl: `./input-slider.template.html`,
    styleUrls: [`./input-slider.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputSliderComponent),
        },
        tuiSliderOptionsProvider({trackColor: `transparent`}),
    ],
})
export class TuiInputSliderComponent
    extends AbstractTuiControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiInputNumberComponent)
    private readonly inputNumberRef?: TuiInputNumberComponent;

    @ViewChild(TuiSliderComponent, {read: ElementRef})
    private readonly sliderRef?: ElementRef<HTMLInputElement>;

    @Input()
    @tuiDefaultProp()
    min = 0;

    @Input()
    @tuiDefaultProp()
    max = 100;

    @Input()
    @tuiDefaultProp(q => q > 0, `Quantum must be positive`)
    quantum = 1;

    @Input()
    @tuiDefaultProp(
        s => s >= 0 && Number.isInteger(s),
        `Steps must be non-negative integer`,
    )
    steps = 0;

    @Input()
    @tuiDefaultProp(
        s => s > 0 && Number.isInteger(s),
        `Segments must be positive integer`,
    )
    segments = 1;

    @Input()
    @tuiDefaultProp()
    keySteps: TuiKeySteps | null = null;

    @Input()
    @tuiDefaultProp()
    valueContent: PolymorpheusContent<TuiContextWithImplicit<number>> = ``;

    @Input()
    @tuiDefaultProp()
    prefix = ``;

    @Input()
    @tuiDefaultProp()
    postfix = ``;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.inputNumberRef?.nativeFocusableElement || this.computedDisabled
            ? null
            : this.inputNumberRef.nativeFocusableElement;
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            tuiIsNativeFocused(this.sliderRef?.nativeElement || null)
        );
    }

    get computedSteps(): number {
        return this.steps || (this.max - this.min) / this.quantum;
    }

    get precision(): number {
        return tuiGetFractionPartPadded(this.quantum).length;
    }

    get decimal(): TuiDecimal {
        return this.precision ? `not-zero` : `never`;
    }

    get showValueContent(): boolean {
        return Boolean(this.valueContent && !this.focused);
    }

    get step(): number {
        return (this.max - this.min) / this.computedSteps;
    }

    @tuiPure
    computeKeySteps(keySteps: TuiKeySteps | null, min: number, max: number): TuiKeySteps {
        return (
            keySteps || [
                [0, min],
                [100, max],
            ]
        );
    }

    focusTextInput(): void {
        const focusableElement = this.inputNumberRef?.nativeFocusableElement;

        if (focusableElement) {
            focusableElement.focus();
        }
    }

    safelyUpdateValue(value: number | null): void {
        this.updateValue(this.valueGuard(value ?? this.safeCurrentValue));
    }

    onVerticalArrowKeyDown(coefficient: number): void {
        if (this.readOnly || !this.step) {
            return;
        }

        const value = this.value + coefficient * this.step;

        if (value !== this.value) {
            this.safelyUpdateValue(value);
        }

        this.updateTextInputValue(this.valueGuard(value));
    }

    onSliderChange(newValue: number): void {
        this.safelyUpdateValue(newValue);
        this.updateTextInputValue(this.value);
    }

    onFocused(focused: boolean): void {
        const {value, textInputValue, safeCurrentValue, inputNumberRef} = this;

        if (!focused && textInputValue !== inputNumberRef?.getFormattedValue(value)) {
            this.updateTextInputValue(value ?? safeCurrentValue);
        }

        this.updateFocused(focused);
    }

    private get textInputValue(): string {
        return this.inputNumberRef?.nativeValue || ``;
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private valueGuard(value: number): number {
        const roundedValue = tuiRound(
            Math.round(value / this.quantum) * this.quantum,
            TUI_FLOATING_PRECISION,
        );

        return clamp(roundedValue, this.min, this.max);
    }

    private updateTextInputValue(value: number): void {
        if (this.inputNumberRef) {
            this.inputNumberRef.nativeValue =
                this.inputNumberRef.getFormattedValue(value);
        }
    }
}
