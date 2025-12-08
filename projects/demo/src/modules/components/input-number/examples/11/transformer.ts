import {Directive, inject} from '@angular/core';
import {maskitoParseNumber, maskitoStringifyNumber} from '@maskito/kit';
import {tuiProvide, TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiNumberMask} from '@taiga-ui/kit';

export type ControlValue = {integer: bigint | null; decimal: bigint | null} | null;

@Directive({
    selector: '[tuiInputNumber][bigintWithDecimal]',
    providers: [tuiProvide(TuiValueTransformer, TuiBigIntWithDecimal)],
})
export class TuiBigIntWithDecimal extends TuiValueTransformer<string, ControlValue> {
    private readonly mask = inject(TuiNumberMask);

    public toControlValue(textfieldValue: string | null): ControlValue {
        if (!textfieldValue) {
            return null;
        }

        const params = this.mask.params();
        const [integer = '', decimal = ''] = textfieldValue.split(
            params.decimalSeparator,
        );

        return {
            integer: maskitoParseNumber(integer, {...params, bigint: true}),
            decimal: maskitoParseNumber(decimal, {...params, bigint: true}),
        };
    }

    public fromControlValue(controlValue: ControlValue): string {
        const params = this.mask.params();
        const {integer, decimal} = controlValue ?? {};

        return `${this.mask.stringify(integer)}${
            decimal
                ? params.decimalSeparator +
                  maskitoStringifyNumber(decimal, {...params, thousandSeparator: ''})
                : ''
        }`;
    }
}
