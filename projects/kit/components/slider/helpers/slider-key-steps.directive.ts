import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiAssert,
    tuiClamp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {
    tuiKeyStepValueToPercentage,
    tuiPercentageToKeyStepValue,
} from '@taiga-ui/kit/utils';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiSliderComponent} from '../slider.component';

@Directive({
    selector: `input[tuiSlider][keySteps]`,
    host: {
        '[attr.aria-valuenow]': `safeCurrentValue`,
        '[attr.aria-valuemin]': `min`,
        '[attr.aria-valuemax]': `max`,
    },
})
export class TuiSliderKeyStepsDirective
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @Input()
    keySteps!: TuiKeySteps;

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get min(): number {
        return this.keySteps[0][1];
    }

    get max(): number {
        return this.keySteps[this.keySteps.length - 1][1];
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(forwardRef(() => TuiSliderComponent))
        private readonly slider: TuiSliderComponent,
    ) {
        super(control, changeDetectorRef);
    }

    @HostListener(`input`)
    @HostListener(`change`)
    updateControlValue(): void {
        this.updateValue(
            tuiPercentageToKeyStepValue(this.slider.valuePercentage, this.keySteps),
        );
    }

    override writeValue(controlValue: number | null): void {
        if (controlValue === null) {
            return;
        }

        const clampedControlValue = tuiClamp(controlValue, this.min, this.max);

        tuiAssert.assert(
            controlValue === clampedControlValue,
            `\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max`,
        );

        this.slider.value = this.transformToNativeValue(clampedControlValue);
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private transformToNativeValue(controlValue: number): number {
        const {min, max} = this.slider;
        const newValuePercentage = tuiKeyStepValueToPercentage(
            controlValue,
            this.keySteps,
        );

        return (newValuePercentage * (max - min)) / 100 + min;
    }
}
