import {TuiDecimalSymbol} from '@taiga-ui/core/types';

/**
 * @deprecated: use {@link tuiMaskedNumberStringToNumber} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function maskedNumberStringToNumber(
    value: string,
    decimalsSymbol: TuiDecimalSymbol,
    thousandSymbol: string,
): number {
    return parseFloat(
        value.split(thousandSymbol).join(``).split(decimalsSymbol).join(`.`),
    );
}

export const tuiMaskedNumberStringToNumber = maskedNumberStringToNumber;
