import {tuiIsNumber} from '@taiga-ui/cdk';

import {tuiNumberToStringWithoutExp} from './number-to-string-without-exp';

/**
 * Return fractional part of number
 *
 * @param value the number
 * @param precision number of digits of decimal part, null to keep untouched
 * @return the fractional part of number
 */
export function tuiGetFractionPartPadded(
    value: number,
    precision?: number | null,
): string {
    const [, fractionPartPadded = ''] = tuiNumberToStringWithoutExp(value).split('.');

    return tuiIsNumber(precision)
        ? fractionPartPadded.slice(0, Math.max(0, precision))
        : fractionPartPadded;
}
