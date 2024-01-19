import {isDevMode} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * Normalizes any number to an integer within inclusive range
 *
 * @param value
 * @param min lower inclusive integer
 * @param max upper inclusive integer
 * @return an integer between min and max inclusive
 */
export function tuiNormalizeToIntNumber(value: number, min: number, max: number): number {
    isDevMode() && tuiAssert.assert(Number.isInteger(min));
    isDevMode() && tuiAssert.assert(Number.isInteger(max));
    isDevMode() && tuiAssert.assert(min <= max);

    if (Number.isNaN(value) || value <= min) {
        return min;
    }

    if (value >= max) {
        return max;
    }

    return Math.round(value);
}
