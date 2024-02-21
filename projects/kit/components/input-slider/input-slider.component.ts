import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
    tuiPure,
    tuiRound,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
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
    selector: 'tui-input-slider',
    templateUrl: './input-slider.template.html',
    styleUrls: ['./input-slider.style.less'],
    host: {
        '[attr.data-size]': 'controller.size',
        '[class._label-outside]': 'controller.labelOutside',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputSliderComponent),
        tuiAsControl(TuiInputSliderComponent),
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
        TEXTFIELD_CONTROLLER_PROVIDER,
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
    min = 0;

    @Input()
    max = 100;

    @Input()
    quantum = 1;

    @Input()
    steps = 0;

    @Input()
    segments = 1;

    @Input()
    keySteps: TuiKeySteps | null = null;

    @Input()
    valueContent: PolymorpheusContent<TuiContext<number>>;

    /** @deprecated use `tuiTextfieldPrefix` from {@link TuiTextfieldControllerModule} instead */
    @Input('prefix')
    textfieldPrefix = '';

    /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
    @Input('postfix')
    textfieldPostfix = '';

    textfieldValue = this.safeCurrentValue;

    readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

    get prefix(): string {
        return this.textfieldPrefix || this.controller.prefix;
    }

    get postfix(): string {
        return this.textfieldPostfix || this.controller.postfix;
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
        return this.precision ? 'not-zero' : 'never';
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
        this.value = this.valueGuard(value ?? this.safeCurrentValue);
    }

    onVerticalArrowKeyDown(coefficient: number): void {
        if (this.readOnly || !this.step) {
            return;
        }

        const value = this.value + coefficient * this.step;

        if (value !== this.value) {
            this.safelyUpdateValue(value);
            this.textfieldValue = this.value;
        }
    }

    onSliderChange(newValue: number): void {
        this.safelyUpdateValue(newValue);
        this.textfieldValue = this.value;
    }

    onFocused(focused: boolean): void {
        const {value, textfieldValue} = this;

        if (!focused && textfieldValue !== value) {
            this.textfieldValue = value;
        }

        this.updateFocused(focused);
    }

    override writeValue(value: number | null): void {
        super.writeValue(value);
        this.textfieldValue = this.value;
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private valueGuard(value: number): number {
        const roundedValue = tuiRound(
            Math.round(value / this.quantum) * this.quantum,
            TUI_FLOATING_PRECISION,
        );

        return tuiClamp(roundedValue, this.min, this.max);
    }
}
