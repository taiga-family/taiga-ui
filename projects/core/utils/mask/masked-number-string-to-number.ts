import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * TODO: delete in v4.0
 * @deprecated use {@link https://tinkoff.github.io/maskito/kit/number maskitoParseNumber} instead
 */
export function tuiMaskedNumberStringToNumber(
    value: string,
    decimalsSymbol: TuiDecimalSymbol,
    thousandSymbol: string,
): number {
    return parseFloat(
        value.split(thousandSymbol).join(``).split(decimalsSymbol).join(`.`),
    );
}
