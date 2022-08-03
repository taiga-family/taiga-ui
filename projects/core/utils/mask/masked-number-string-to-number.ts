import {TuiDecimalSymbol} from '@taiga-ui/core/types';

export function tuiMaskedNumberStringToNumber(
    value: string,
    decimalsSymbol: TuiDecimalSymbol,
    thousandSymbol: string,
): number {
    return parseFloat(
        value.split(thousandSymbol).join(``).split(decimalsSymbol).join(`.`),
    );
}
