import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * @deprecated: use {@link tuiInRange} instead
 * Checks if the value is in range
 *
 * @param value
 * @param fromInclude lower inclusive limit
 * @param toExclude upper exclusive limit
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function inRange(value: number, fromInclude: number, toExclude: number): boolean {
    tuiAssert.assert(!isNaN(value));
    tuiAssert.assert(!isNaN(fromInclude));
    tuiAssert.assert(!isNaN(toExclude));
    tuiAssert.assert(fromInclude < toExclude);

    return value >= fromInclude && value < toExclude;
}

export const tuiInRange = inRange;
