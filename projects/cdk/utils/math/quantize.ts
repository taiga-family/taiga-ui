import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * @deprecated: use {@link tuiQuantize} instead
 * Rounds a number to the closest value in a fixed discrete series
 *
 * @param value
 * @param quantum series step
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function quantize(value: number, quantum: number): number {
    tuiAssert.assert(Number.isFinite(value));
    tuiAssert.assert(Number.isFinite(quantum));
    tuiAssert.assert(quantum > 0);

    const remainder = value % quantum;

    return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}

export const tuiQuantize = quantize;
