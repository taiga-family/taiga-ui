import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    clamp,
    tuiAssert,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {
    tuiKeyStepValueToPercentage,
    tuiPercentageToKeyStepValue,
} from '@taiga-ui/kit/utils';
import {map} from 'rxjs/operators';

import {TuiSliderComponent} from '../slider.component';

@Directive({
    selector: `input[tuiSlider][keySteps]`,
    host: {
        '[attr.data-key-steps]': `true`,
        '[attr.aria-valuenow]': `controlValue`,
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

    @Output()
    keyStepsInput = typedFromEvent(this.elementRef.nativeElement, `input`).pipe(
        map(() => this.controlValue),
    );

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get min(): number {
        return this.keySteps[0]?.[1] || 0;
    }

    get max(): number {
        return this.keySteps[this.keySteps.length - 1]?.[1] || 100;
    }

    get controlValue(): number {
        return tuiPercentageToKeyStepValue(this.slider.valuePercentage, this.keySteps);
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(TuiSliderComponent) private readonly slider: TuiSliderComponent,
    ) {
        super(control, changeDetectorRef);
    }

    @HostListener(`change`)
    updateControlValue(): void {
        this.updateValue(this.controlValue);
    }

    writeValue(controlValue: number | null): void {
        if (controlValue === null) {
            return;
        }

        const clampedControlValue = clamp(controlValue, this.min, this.max);

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
