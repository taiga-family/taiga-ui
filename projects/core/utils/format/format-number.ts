import {CHAR_HYPHEN, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

import {tuiGetFractionPartPadded} from './get-fractional-part-padded';

/**
 * Formats number adding a thousand separators and correct decimal separator
 * padding decimal part with zeroes to given length
 *
 * @param value the input number
 * @param decimalLimit number of digits of decimal part, null to keep untouched
 * @param decimalSeparator See {@link TuiNumberFormatSettings}
 * @param thousandSeparator See {@link TuiNumberFormatSettings}
 * @param zeroPadding See {@link TuiNumberFormatSettings}
 * @return the formatted string
 */
export function tuiFormatNumber(
    value: number,
    {
        decimalLimit = null,
        decimalSeparator = `,`,
        thousandSeparator = CHAR_NO_BREAK_SPACE,
        zeroPadding = true,
    }: Partial<TuiNumberFormatSettings & {decimalLimit: number | null}> = {},
): string {
    const integerPartString = String(Math.floor(Math.abs(value)));

    let fractionPartPadded = tuiGetFractionPartPadded(value, decimalLimit);

    if (decimalLimit !== null) {
        if (zeroPadding) {
            const zeroPaddingSize: number = Math.max(
                decimalLimit - fractionPartPadded.length,
                0,
            );
            const zeroPartString = `0`.repeat(zeroPaddingSize);

            fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
        } else {
            fractionPartPadded = fractionPartPadded.replace(/0*$/, ``);
        }
    }

    const remainder = integerPartString.length % 3;
    const sign = value < 0 ? CHAR_HYPHEN : ``;
    let result = sign + integerPartString.charAt(0);

    for (let i = 1; i < integerPartString.length; i++) {
        if (i % 3 === remainder && integerPartString.length > 3) {
            result += thousandSeparator;
        }

        result += integerPartString.charAt(i);
    }

    return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}
