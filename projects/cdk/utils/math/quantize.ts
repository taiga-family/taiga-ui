/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

/**
 * Rounds a number to the closest value in a fixed discrete series
 *
 * @param value
 * @param quantum series step
 */
export function tuiQuantize(value: number, quantum: number): number {
    ngDevMode && console.assert(Number.isFinite(value));
    ngDevMode && console.assert(Number.isFinite(quantum));
    ngDevMode && console.assert(quantum > 0);

    const remainder = value % quantum;

    return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
