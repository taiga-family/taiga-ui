import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * @deprecated: use {@link tuiNormalizeToIntNumber} instead
 * Normalizes any number to an integer within inclusive range
 *
 * @param value
 * @param min lower inclusive integer
 * @param max upper inclusive integer
 * @return an integer between min and max inclusive
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function normalizeToIntNumber(value: number, min: number, max: number): number {
    tuiAssert.assert(Number.isInteger(min));
    tuiAssert.assert(Number.isInteger(max));
    tuiAssert.assert(min <= max);

    if (isNaN(value) || value <= min) {
        return min;
    }

    if (value >= max) {
        return max;
    }

    return Math.round(value);
}

export const tuiNormalizeToIntNumber = normalizeToIntNumber;
