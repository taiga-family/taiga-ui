import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    Pipe,
    PipeTransform,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    isNativeFocused,
    round,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {map} from 'rxjs/operators';

import {TuiSliderComponent} from './slider.component';

// @dynamic
@Directive({
    selector: 'input[tuiSlider][keySteps]',
    host: {
        '[attr.aria-valuenow]': 'controlValue',
        '[attr.aria-valuemin]': 'min',
        '[attr.aria-valuemax]': 'max',
    },
})
export class TuiSliderKeyStepsDirective
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @Input()
    @tuiDefaultProp(checkHasMinMaxPercents, 'Should contain min and max values')
    keySteps: TuiKeySteps = [];

    @Output()
    keyStepsInput = typedFromEvent(this.elementRef.nativeElement, 'input').pipe(
        map(() => this.controlValue),
    );

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get min(): number {
        return this.keySteps[0]?.[1] || 0;
    }

    get max(): number {
        return this.keySteps[this.keySteps.length - 1]?.[1] || 100;
    }

    get controlValue(): number {
        const {valuePercentage} = this.slider;
        const [lowerStep, upperStep] = findKeyStepsBoundariesByFn(
            this.keySteps,
            ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage,
        );

        return transformToControlValue(valuePercentage, lowerStep, upperStep);
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

    @HostListener('change')
    updateControlValue() {
        this.updateValue(this.controlValue);
    }

    writeValue(controlValue: number | null) {
        if (controlValue === null) {
            return;
        }

        const [lowerStep, upperStep] = findKeyStepsBoundariesByFn(
            this.keySteps,
            ([_, keyStepValue]) => controlValue <= keyStepValue,
        );

        this.slider.value = this.transformToNativeValue(
            controlValue,
            lowerStep,
            upperStep,
        );
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private transformToNativeValue(
        controlValue: number,
        [upperStepPercent, upperStepValue]: [number, number],
        [lowerStepPercent, lowerStepValue]: [number, number],
    ): number {
        const {min, max} = this.slider;
        const ratio = (controlValue - lowerStepValue) / (upperStepValue - lowerStepValue);
        const newValuePercentage =
            (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;

        return (newValuePercentage * (max - min)) / 100;
    }
}

/**
 * @deprecated DONT USE IT! It is just temporary solution for internal purposes only. We will delete it in next major release.
 * TODO delete it in v3.0
 *
 */
@Pipe({name: 'tuiSliderTickLabel'})
export class TuiSliderTickLabelPipe implements PipeTransform {
    transform(tickIndex: number, totalSegments: number, keySteps: TuiKeySteps): number {
        const percentage = (100 / totalSegments) * tickIndex;
        const [lowerStep, upperStep] = findKeyStepsBoundariesByFn(
            keySteps,
            ([keyStepPercentage, _]) => percentage <= keyStepPercentage,
        );

        return transformToControlValue(percentage, upperStep, lowerStep);
    }
}

function checkHasMinMaxPercents(steps: TuiKeySteps): boolean {
    return !steps.length || (steps[0][0] === 0 && steps[steps.length - 1][0] === 100);
}

function findKeyStepsBoundariesByFn(
    keySteps: TuiKeySteps,
    fn: ([keyStepPercent, keyStepValue]: [number, number]) => boolean,
): [[number, number], [number, number]] {
    const keyStepUpperIndex = keySteps.findIndex((ketStep, i) => i && fn(ketStep));
    const lowerStep = keySteps[keyStepUpperIndex - 1];
    const upperStep = keySteps[keyStepUpperIndex];

    return [lowerStep, upperStep];
}

function transformToControlValue(
    valuePercentage: number,
    [upperStepPercent, upperStepValue]: [number, number],
    [lowerStepPercent, lowerStepValue]: [number, number],
): number {
    const ratio =
        (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
    const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;

    return round(controlValue, TUI_FLOATING_PRECISION);
}
