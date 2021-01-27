import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';

/**
 * Formats number adding thousand separators and correct decimal separator
 * padding decimal part with zeroes to given length
 *
 * @param value the input number
 * @param decimalLimit number of digits of decimal part, null to keep untouched
 * @param decimalSeparator separator between the integer and the decimal part
 * @param thousandSeparator separator between thousands
 * @return the formatted string
 */
export function formatNumber(
    value: number,
    decimalLimit: number | null = null,
    decimalSeparator: string = ',',
    thousandSeparator: string = CHAR_NO_BREAK_SPACE,
): string {
    const integerPartString = Math.floor(Math.abs(value)).toString();
    const fractionPartString = value.toString().split('.')[1] || '';
    const fractionPartPadded =
        decimalLimit === null
            ? fractionPartString
            : fractionPartString.substr(0, decimalLimit) +
              '0'.repeat(Math.max(decimalLimit - fractionPartString.length, 0));
    const remainder = integerPartString.length % 3;
    const sign = value < 0 ? '-' : '';
    let result = sign + integerPartString.charAt(0);

    for (let i = 1; i < integerPartString.length; i++) {
        if (i % 3 === remainder && integerPartString.length > 3) {
            result += thousandSeparator;
        }

        result += integerPartString.charAt(i);
    }

    return !!fractionPartPadded || decimalLimit
        ? result + decimalSeparator + fractionPartPadded
        : result;
}
