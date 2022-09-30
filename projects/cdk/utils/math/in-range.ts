import {tuiAssert} from '@taiga-ui/cdk/classes';

export function tuiInRange(
    value: number,
    fromInclude: number,
    toExclude: number,
): boolean {
    tuiAssert.assert(!isNaN(value));
    tuiAssert.assert(!isNaN(fromInclude));
    tuiAssert.assert(!isNaN(toExclude));
    tuiAssert.assert(fromInclude < toExclude);

    return value >= fromInclude && value < toExclude;
}
