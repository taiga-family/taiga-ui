import {isDevMode} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk/classes';

export function tuiInRange(
    value: number,
    fromInclude: number,
    toExclude: number,
): boolean {
    isDevMode() && tuiAssert.assert(!Number.isNaN(value));
    isDevMode() && tuiAssert.assert(!Number.isNaN(fromInclude));
    isDevMode() && tuiAssert.assert(!Number.isNaN(toExclude));
    isDevMode() && tuiAssert.assert(fromInclude < toExclude);

    return value >= fromInclude && value < toExclude;
}
