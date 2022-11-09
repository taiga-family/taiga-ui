import {tuiAssert} from '@taiga-ui/cdk/classes';

export function tuiInRange(
    value: number,
    fromInclude: number,
    toExclude: number,
): boolean {
    tuiAssert.assert(!Number.isNaN(value));
    tuiAssert.assert(!Number.isNaN(fromInclude));
    tuiAssert.assert(!Number.isNaN(toExclude));
    tuiAssert.assert(fromInclude < toExclude);

    return value >= fromInclude && value < toExclude;
}
