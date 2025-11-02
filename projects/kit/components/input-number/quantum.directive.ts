import {Directive, inject} from '@angular/core';
import {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiIsSafeToRound, tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/components/slider';

import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

@Directive()
export class TuiQuantumValueTransformerBase extends TuiValueTransformer<
    number | null,
    number | null
> {
    protected parent: TuiValueTransformer<number | null, any> | null = null;

    // eslint-disable-next-line @typescript-eslint/parameter-properties
    constructor(public quantum = 0) {
        super();
    }

    public override fromControlValue(controlValue: number | null): number | null {
        return this.parent?.fromControlValue(controlValue) ?? controlValue;
    }

    public toControlValue(internalValue: number | null): number | null {
        const value = this.parent?.toControlValue(internalValue) ?? internalValue;

        return value != null &&
            this.quantum > 0 &&
            tuiIsSafeToRound(value, tuiGetFractionPartPadded(this.quantum).length)
            ? tuiRound(
                  Math.round(value / this.quantum) * this.quantum,
                  TUI_FLOATING_PRECISION,
              )
            : value;
    }
}

@Directive({
    selector: '[tuiInputNumber][quantum]',
    inputs: ['quantum'],
    providers: [tuiProvide(TuiValueTransformer, TuiQuantumValueTransformer)],
})
export class TuiQuantumValueTransformer extends TuiQuantumValueTransformerBase {
    protected override parent = inject(TUI_INPUT_NUMBER_OPTIONS).valueTransformer;

    constructor() {
        super(0);
    }
}

@Directive({
    hostDirectives: [
        {
            directive: TuiQuantumValueTransformer,
            inputs: ['quantum'],
        },
    ],
})
export class TuiWithQuantumValueTransformer {}
