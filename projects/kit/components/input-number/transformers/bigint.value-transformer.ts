import {Directive, inject} from '@angular/core';
import {maskitoParseNumber} from '@maskito/kit';
import {TUI_IDENTITY_VALUE_TRANSFORMER, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';
import {TuiBigIntQuantumValueTransformer} from '../quantum.directive';

@Directive({
    selector: '[tuiInputNumber][bigint]',
    providers: [tuiProvide(TuiValueTransformer, TuiBigIntValueTransformer)],
})
export class TuiBigIntValueTransformer extends TuiValueTransformer<
    string,
    bigint | null
> {
    private readonly quantumTransformer: TuiValueTransformer<
        bigint | null,
        bigint | null
    > =
        inject(TuiBigIntQuantumValueTransformer, {optional: true}) ??
        TUI_IDENTITY_VALUE_TRANSFORMER;

    private readonly optionsTransformer: TuiValueTransformer<bigint | null, any> =
        inject(TUI_INPUT_NUMBER_OPTIONS).valueTransformer ??
        TUI_IDENTITY_VALUE_TRANSFORMER;

    private readonly mask = inject(TuiNumberMask);

    public toControlValue(textfieldValue: string | null): bigint | null {
        return this.optionsTransformer.toControlValue(
            this.quantumTransformer.toControlValue(
                maskitoParseNumber(textfieldValue ?? '', {
                    ...this.mask.params(),
                    bigint: true,
                }),
            ),
        );
    }

    public fromControlValue(controlValue: bigint | null): string {
        return this.mask.stringify(
            this.optionsTransformer.fromControlValue(controlValue),
        );
    }
}
