import {Directive, inject, Input} from '@angular/core';
import {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiIsSafeToRound, tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/components/slider';

import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

@Directive({
    standalone: true,
    selector: '[tuiInputNumber][quantum], [tuiInputSlider][quantum]',
    providers: [tuiProvide(TuiValueTransformer, TuiQuantumValueTransformer)],
})
export class TuiQuantumValueTransformer extends TuiValueTransformer<
    number | null,
    number | null
> {
    private readonly parent = inject(TUI_INPUT_NUMBER_OPTIONS).valueTransformer;

    @Input()
    public quantum = 1;

    public override fromControlValue(controlValue: number | null): number | null {
        return this.parent?.fromControlValue(controlValue) ?? controlValue;
    }

    public toControlValue(internalValue: number | null): number | null {
        const value = this.parent?.toControlValue(internalValue) ?? internalValue;

        return value != null &&
            tuiIsSafeToRound(value, tuiGetFractionPartPadded(this.quantum).length)
            ? tuiRound(
                  Math.round(value / this.quantum) * this.quantum,
                  TUI_FLOATING_PRECISION,
              )
            : value;
    }
}

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiQuantumValueTransformer,
            inputs: ['quantum'],
        },
    ],
})
export class TuiWithQuantumValueTransformer {}
