import {Directive, inject} from '@angular/core';
import {maskitoParseNumber} from '@maskito/kit';
import {TUI_IDENTITY_VALUE_TRANSFORMER, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';
import {TuiNumberMask} from '../number-mask.directive';

@Directive({
    selector: '[tuiInputNumber][bigint]',
    providers: [tuiProvide(TuiValueTransformer, TuiBigIntTypeValueTransformer)],
})
export class TuiBigIntTypeValueTransformer extends TuiValueTransformer<
    string,
    bigint | null
> {
    private readonly parentTransformer =
        inject(TUI_INPUT_NUMBER_OPTIONS).valueTransformer ??
        TUI_IDENTITY_VALUE_TRANSFORMER;

    private readonly mask = inject(TuiNumberMask);

    public toControlValue(textfieldValue: string | null): bigint | null {
        return this.parentTransformer.toControlValue(
            maskitoParseNumber(textfieldValue ?? '', {
                ...this.mask.params(),
                bigint: true,
            }),
        );
    }

    public fromControlValue(controlValue: bigint | null): string {
        return this.parentTransformer.fromControlValue(this.mask.stringify(controlValue));
    }
}
