import"./chunk-HU6DUUP4.js";var r=`import {Directive, inject} from '@angular/core';
import {maskitoParseNumber, maskitoStringifyNumber} from '@maskito/kit';
import {tuiProvide, TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiNumberMask} from '@taiga-ui/kit';

export type ControlValue = {significand: bigint; exp: number} | null;

@Directive({
    selector: '[tuiInputNumber][bigintWithDecimal]',
    providers: [tuiProvide(TuiValueTransformer, BigIntWithDecimal)],
})
export class BigIntWithDecimal extends TuiValueTransformer<string, ControlValue> {
    private readonly mask = inject(TuiNumberMask);

    public toControlValue(textfieldValue: string | null): ControlValue {
        const params = this.mask.params();
        const {decimalSeparator} = params;
        const significand = maskitoParseNumber(
            textfieldValue?.replace(decimalSeparator, '') ?? '',
            {
                ...params,
                bigint: true,
            },
        );

        if (significand === null) {
            return null;
        }

        return {
            significand,
            exp: textfieldValue?.includes(decimalSeparator)
                ? -Array.from(textfieldValue.replace(params.postfix, ''))
                      .reverse()
                      .indexOf(decimalSeparator)
                : 0,
        };
    }

    public fromControlValue(controlValue: ControlValue): string {
        const {significand, exp} = controlValue ?? {};

        if (!controlValue) {
            return '';
        }

        const params = this.mask.params();
        const integer = maskitoStringifyNumber(
            BigInt(String(significand).slice(0, exp || Infinity)),
            {...params, postfix: ''},
        );
        const decimal = exp ? String(significand).slice(exp) : '';

        return \`\${integer}\${decimal && params.decimalSeparator + decimal}\${params.postfix}\`;
    }
}
`;export{r as default};
