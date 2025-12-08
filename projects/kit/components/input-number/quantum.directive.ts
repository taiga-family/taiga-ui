import {Directive} from '@angular/core';
import {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiIsSafeToRound, tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/components/slider';
import {identity} from 'rxjs';

@Directive()
export class TuiQuantumValueTransformerBase extends TuiValueTransformer<
    number | null,
    number | null
> {
    public override fromControlValue = identity;

    // eslint-disable-next-line @typescript-eslint/parameter-properties,@angular-eslint/prefer-inject
    constructor(public quantum = 0) {
        super();
    }

    public toControlValue(value: number | null): number | null {
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
    inputs: ['quantum'],
    providers: [tuiProvide(TuiValueTransformer, TuiQuantumValueTransformer)],
})
export class TuiQuantumValueTransformer extends TuiQuantumValueTransformerBase {
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
