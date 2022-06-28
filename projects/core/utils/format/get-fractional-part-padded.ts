import {numberToStringWithoutExp} from './number-to-string-without-exp';

/**
 * @deprecated: use {@link tuiGetFractionPartPadded} instead
 * Return fractional part of number
 *
 * @param value the number
 * @param precision number of digits of decimal part, null to keep untouched
 * @return the fractional part of number
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getFractionPartPadded(value: number, precision?: number | null): string {
    const [, fractionPartPadded = ''] = numberToStringWithoutExp(value).split('.');

    return typeof precision === 'number'
        ? fractionPartPadded.slice(0, Math.max(0, precision))
        : fractionPartPadded;
}

export const tuiGetFractionPartPadded = getFractionPartPadded;
