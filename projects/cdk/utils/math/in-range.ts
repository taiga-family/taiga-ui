/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

export function tuiInRange(
    value: number,
    fromInclude: number,
    toExclude: number,
): boolean {
    if (ngDevMode) {
        console.assert(!Number.isNaN(value));
        console.assert(!Number.isNaN(fromInclude));
        console.assert(!Number.isNaN(toExclude));
        console.assert(fromInclude < toExclude);
    }

    return value >= fromInclude && value < toExclude;
}
