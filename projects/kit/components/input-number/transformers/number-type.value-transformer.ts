import {Directive, inject} from '@angular/core';
import {maskitoParseNumber} from '@maskito/kit';
import {TUI_IDENTITY_VALUE_TRANSFORMER, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';
import {
    TuiQuantumValueTransformer,
    TuiWithQuantumValueTransformer,
} from '../quantum.directive';

@Directive({
    providers: [tuiProvide(TuiValueTransformer, TuiNumberTypeValueTransformer)],
    hostDirectives: [TuiWithQuantumValueTransformer],
})
export class TuiNumberTypeValueTransformer extends TuiValueTransformer<
    string,
    number | null
> {
    private readonly mask = inject(TuiNumberMask);

    private readonly quantumTransformer =
        inject(TuiQuantumValueTransformer, {optional: true}) ??
        TUI_IDENTITY_VALUE_TRANSFORMER;

    private readonly optionsTransformer =
        inject(TUI_INPUT_NUMBER_OPTIONS).valueTransformer ??
        TUI_IDENTITY_VALUE_TRANSFORMER;

    public toControlValue(textfieldValue: string | null): number | null {
        const parsed = maskitoParseNumber(textfieldValue ?? '', this.mask.params());

        return this.optionsTransformer.toControlValue(
            this.quantumTransformer.toControlValue(Number.isNaN(parsed) ? null : parsed),
        );
    }

    public fromControlValue(controlValue: number | null): string {
        return this.optionsTransformer.fromControlValue(
            this.mask.stringify(controlValue),
        );
    }
}
