/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

export function tuiInRange(
    value: number,
    fromInclude: number,
    toExclude: number,
): boolean {
    ngDevMode && console.assert(!Number.isNaN(value));
    ngDevMode && console.assert(!Number.isNaN(fromInclude));
    ngDevMode && console.assert(!Number.isNaN(toExclude));
    ngDevMode && console.assert(fromInclude < toExclude);

    return value >= fromInclude && value < toExclude;
}
