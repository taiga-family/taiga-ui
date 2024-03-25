/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

/**
 * Adds 'px' to the number and turns it into a string
 */
export function tuiPx(value: number): string {
    ngDevMode && console.assert(Number.isFinite(value), 'Value must be finite number');

    return `${value}px`;
}
