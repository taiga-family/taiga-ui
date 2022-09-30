import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
export function tuiClamp(value: number, min: number, max: number): number {
    tuiAssert.assert(!isNaN(value));
    tuiAssert.assert(!isNaN(min));
    tuiAssert.assert(!isNaN(max));
    tuiAssert.assert(max >= min);

    return Math.min(max, Math.max(min, value));
}
