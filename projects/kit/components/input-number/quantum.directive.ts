import {Directive, input} from '@angular/core';
import {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiIsSafeToRound, tuiRound} from '@taiga-ui/cdk/utils/math';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/core/components/slider';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';
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
    selector: '[tuiInputNumber][quantum]:not([bigint])',
    inputs: ['quantum'],
})
export class TuiQuantumValueTransformer extends TuiQuantumValueTransformerBase {
    constructor() {
        super(0);
    }
}

@Directive({selector: '[tuiInputNumber][bigint][quantum]'})
export class TuiBigIntQuantumValueTransformer extends TuiValueTransformer<
    bigint | null,
    bigint | null
> {
    public readonly quantum = input<bigint>(BigInt(0));
    public override fromControlValue = identity;

    public toControlValue(value: bigint | null): bigint | null {
        if (!this.quantum() || !value) {
            return value;
        }

        const floor = (value / this.quantum()) * this.quantum();
        const remainder = value % this.quantum();

        return (
            floor + (BigInt(2) * remainder >= this.quantum() ? this.quantum() : BigInt(0))
        );
    }
}
