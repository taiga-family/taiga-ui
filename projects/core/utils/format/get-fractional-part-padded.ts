import {numberToStringWithoutExp} from './number-to-string-without-exp';

/**
 * Return fractional part of number
 *
 * @param value the number
 * @param precision number of digits of decimal part, null to keep untouched
 * @return the fractional part of number
 */
export function getFractionPartPadded(value: number, precision?: number | null): string {
    const [, fractionPartPadded = ''] = numberToStringWithoutExp(value).split('.');

    if (typeof precision === 'number') {
        return fractionPartPadded.substr(0, precision);
    }

    return fractionPartPadded;
}
