import {tuiAssert} from '@taiga-ui/cdk/classes';

export function tuiInRange(
    value: number,
    fromInclude: number,
    toExclude: number,
): boolean {
    ngDevMode && tuiAssert.assert(!Number.isNaN(value));
    ngDevMode && tuiAssert.assert(!Number.isNaN(fromInclude));
    ngDevMode && tuiAssert.assert(!Number.isNaN(toExclude));
    ngDevMode && tuiAssert.assert(fromInclude < toExclude);

    return value >= fromInclude && value < toExclude;
}
