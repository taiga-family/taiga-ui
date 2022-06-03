import {CHAR_HYPHEN, CHAR_NO_BREAK_SPACE, CHAR_PLUS} from '@taiga-ui/cdk';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

import {getFractionPartPadded} from './get-fractional-part-padded';

/**
 * Formats number adding a thousand separators and correct decimal separator
 * padding decimal part with zeroes to given length
 *
 * @param value the input number
 * @param decimalLimit number of digits of decimal part, null to keep untouched
 * @param decimalSeparator separator between the integer and the decimal part
 * @param thousandSeparator separator between thousands
 * @param zeroPadding enable zeros at the end of decimal part
 * @param signMode when show sign-symbol before number
 * @return the formatted string
 */
export function formatNumber(
    value: number,
    decimalLimit: number | null = null,
    decimalSeparator: string = ',',
    thousandSeparator: string = CHAR_NO_BREAK_SPACE,
    zeroPadding: boolean = true,
    signMode: TuiNumberFormatSettings['signMode'] = 'negative-only',
): string {
    const integerPartString = String(Math.floor(Math.abs(value)));

    let fractionPartPadded = getFractionPartPadded(value, decimalLimit);

    if (decimalLimit !== null) {
        if (zeroPadding) {
            const zeroPaddingSize: number = Math.max(
                decimalLimit - fractionPartPadded.length,
                0,
            );
            const zeroPartString = '0'.repeat(zeroPaddingSize);

            fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
        } else {
            fractionPartPadded = fractionPartPadded.replace(/0*$/, '');
        }
    }

    const remainder = integerPartString.length % 3;
    let result = computeSign(value, signMode) + integerPartString.charAt(0);

    for (let i = 1; i < integerPartString.length; i++) {
        if (i % 3 === remainder && integerPartString.length > 3) {
            result += thousandSeparator;
        }

        result += integerPartString.charAt(i);
    }

    return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}

function computeSign(
    value: number,
    signMode: TuiNumberFormatSettings['signMode'],
): string {
    const minus = CHAR_HYPHEN;
    const plus = CHAR_PLUS;

    if (!value) {
        return '';
    }

    switch (signMode) {
        case 'negative-only':
            return value < 0 ? minus : '';
        case 'always':
            return value < 0 ? minus : plus;
        case 'force-positive':
            return plus;
        case 'force-negative':
            return minus;
        case 'never':
        default:
            return '';
    }
}
