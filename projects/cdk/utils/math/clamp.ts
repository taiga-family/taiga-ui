import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * @deprecated: use {@link tuiClamp} instead
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function clamp(value: number, min: number, max: number): number {
    tuiAssert.assert(!Number.isNaN(value));
    tuiAssert.assert(!Number.isNaN(min));
    tuiAssert.assert(!Number.isNaN(max));
    tuiAssert.assert(max >= min);

    return Math.min(max, Math.max(min, value));
}

export const tuiClamp = clamp;
