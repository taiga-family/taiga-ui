/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

/**
 * Clamps a value between two inclusive limits
 */
export function tuiClamp<T extends bigint | number>(
    value: T,
    minimum: T | null,
    maximum?: T | null,
): T {
    ngDevMode && console.assert(!Number.isNaN(value));
    ngDevMode && console.assert(!Number.isNaN(minimum));
    ngDevMode && console.assert(!Number.isNaN(maximum));
    ngDevMode && maximum && minimum && console.assert(maximum >= minimum);

    const minClamped = max(minimum ?? value, value);

    return min(maximum ?? minClamped, minClamped);
}

function min<T extends bigint | number>(x: T, ...values: T[]): T {
    return values.reduce((a, b) => (a < b ? a : b), x);
}

function max<T extends bigint | number>(x: T, ...values: T[]): T {
    return values.reduce((a, b) => (a > b ? a : b), x);
}
