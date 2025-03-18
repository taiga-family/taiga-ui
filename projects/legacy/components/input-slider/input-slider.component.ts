import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiClamp, tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';
import type {TuiKeySteps} from '@taiga-ui/kit/components/slider';
import {
    TUI_FLOATING_PRECISION,
    TuiSliderComponent,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiInputNumberComponent} from '@taiga-ui/legacy/components/input-number';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';
import type {
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-slider TuiInputSlider} (from @taiga-ui/kit) instead
 */
@Component({
    standalone: false,
    selector: 'tui-input-slider',
    templateUrl: './input-slider.template.html',
    styleUrls: ['./input-slider.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputSliderComponent),
        tuiAsControl(TuiInputSliderComponent),
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    host: {
        '[attr.data-size]': 'controller.size',
        '[class._label-outside]': 'controller.labelOutside',
    },
})
export class TuiInputSliderComponent
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiInputNumberComponent)
    private readonly inputNumberRef?: TuiInputNumberComponent;

    @ViewChild(TuiSliderComponent, {read: ElementRef})
    private readonly sliderRef?: ElementRef<HTMLInputElement>;

    protected textfieldValue = this.safeCurrentValue;
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public quantum = 1;

    @Input()
    public steps = 0;

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @Input()
    public valueContent: PolymorpheusContent<TuiContext<number>>;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.inputNumberRef?.nativeFocusableElement || this.computedDisabled
            ? null
            : this.inputNumberRef.nativeFocusableElement;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            tuiIsNativeFocused(this.sliderRef?.nativeElement || null)
        );
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.textfieldValue = this.value;
    }

    protected get prefix(): string {
        return this.controller.prefix;
    }

    protected get postfix(): string {
        return this.controller.postfix;
    }

    protected get computedSteps(): number {
        return this.steps || (this.max - this.min) / this.quantum;
    }

    protected get precision(): number {
        return tuiGetFractionPartPadded(this.quantum).length;
    }

    protected get showValueContent(): boolean {
        return Boolean(this.valueContent && !this.focused);
    }

    protected get step(): number {
        return (this.max - this.min) / this.computedSteps;
    }

    @tuiPure
    protected computeKeySteps(
        keySteps: TuiKeySteps | null,
        min: number,
        max: number,
    ): TuiKeySteps {
        return (
            keySteps || [
                [0, min],
                [100, max],
            ]
        );
    }

    protected focusTextInput(): void {
        const focusableElement = this.inputNumberRef?.nativeFocusableElement;

        if (focusableElement) {
            focusableElement.focus();
        }
    }

    protected safelyUpdateValue(value: number | null): void {
        this.value = this.valueGuard(value ?? this.safeCurrentValue);
    }

    protected onVerticalArrowKeyDown(coefficient: number): void {
        if (this.readOnly || !this.step) {
            return;
        }

        const value = this.value + coefficient * this.step;

        if (value !== this.value) {
            this.safelyUpdateValue(value);
            this.textfieldValue = this.value;
        }
    }

    protected onSliderChange(newValue: number): void {
        this.safelyUpdateValue(newValue);
        this.textfieldValue = this.value;
    }

    protected onFocused(focused: boolean): void {
        const {value, textfieldValue} = this;

        if (!focused && textfieldValue !== value) {
            this.textfieldValue = value;
        }

        this.updateFocused(focused);
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
