/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
export function tuiClamp(value: number, min: number, max: number): number {
    ngDevMode && console.assert(!Number.isNaN(value));
    ngDevMode && console.assert(!Number.isNaN(min));
    ngDevMode && console.assert(!Number.isNaN(max));
    ngDevMode && console.assert(max >= min);

    return Math.min(max, Math.max(min, value));
}
