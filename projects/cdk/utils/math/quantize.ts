/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

/**
 * Rounds a number to the closest value in a fixed discrete series
 *
 * @param value
 * @param quantum series step
 */
export function tuiQuantize(value: number, quantum: number): number {
    if (ngDevMode) {
        console.assert(Number.isFinite(value));
        console.assert(Number.isFinite(quantum));
        console.assert(quantum > 0);
    }

    const remainder = value % quantum;

    return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
